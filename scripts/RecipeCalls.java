import com.sun.source.tree.*;
import com.sun.source.util.*;
import javax.tools.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

/** Extract complete recipe emission expressions, keeping enclosing parameter and local declarations. */
class RecipeCalls {
    public static void main(String[] args) throws Exception {
        var root = Path.of(args[0]).toAbsolutePath().normalize();
        var files = Files.readAllLines(Path.of(args[1])).stream().map(root::resolve).toList();
        var compiler = ToolProvider.getSystemJavaCompiler();
        try (var manager = compiler.getStandardFileManager(null, Locale.ROOT, StandardCharsets.UTF_8)) {
            var task = (JavacTask)compiler.getTask(null, manager, null, List.of("-proc:none"), null, manager.getJavaFileObjectsFromPaths(files));
            var positions = Trees.instance(task).getSourcePositions();
            for (var unit : task.parse()) {
                var path = root.relativize(Path.of(unit.getSourceFile().toUri())).toString().replace('\\','/');
                var source = unit.getSourceFile().getCharContent(true).toString();
                String imports = unit.getImports().stream().map(Object::toString).collect(Collectors.joining());
                new TreeScanner<Void, Void>() {
                    String method = "";
                    final Map<String,String> declarations = new LinkedHashMap<>();
                    String exact(Tree t) {
                        return source.substring((int)positions.getStartPosition(unit,t), (int)positions.getEndPosition(unit,t));
                    }
                    @Override public Void visitMethod(MethodTree m, Void v) {
                        method = m.getName().toString();
                        declarations.clear();
                        for(var param : m.getParameters()) declarations.put(param.getName().toString(),param.getType().toString());
                        Void result = super.visitMethod(m, v);
                        method = "";
                        return result;
                    }
                    @Override public Void visitVariable(VariableTree t, Void v) {
                        if (!method.isEmpty() && t.getType() != null)
                            declarations.put(t.getName().toString(),exact(t.getType()));
                        return super.visitVariable(t,v);
                    }
                    @Override public Void visitMethodInvocation(MethodInvocationTree call, Void unused) {
                        if (!(call.getMethodSelect() instanceof MemberSelectTree select) || !Set.of("save","buildRecipe","build").contains(select.getIdentifier().toString()))
                            return super.visitMethodInvocation(call, unused);
                        var receiver = select.getExpression();
                        emit(receiver, select.getIdentifier().toString(), call.getArguments());
                        return super.visitMethodInvocation(call, unused);
                    }
                    @Override public Void visitNewClass(NewClassTree call, Void unused) {
                        if (call.getIdentifier().toString().endsWith("Recipe"))
                            emit(call, "new", List.of());
                        return super.visitNewClass(call, unused);
                    }
                    void emit(Tree receiver, String operation, List<? extends ExpressionTree> arguments) {
                        Set<String> ids = new LinkedHashSet<>(), unqualifiedCalls = new LinkedHashSet<>();
                        new TreeScanner<Void, Void>() {
                            @Override public Void visitIdentifier(IdentifierTree id, Void v) { ids.add(id.getName().toString()); return null; }
                            @Override public Void visitMethodInvocation(MethodInvocationTree c, Void v) {
                                if (c.getMethodSelect() instanceof IdentifierTree name) unqualifiedCalls.add(name.getName().toString());
                                return super.visitMethodInvocation(c,v);
                            }
                        }.scan(receiver, null);
                        String params = ids.stream().filter(declarations::containsKey).map(id->declarations.get(id) + "\t" + id).collect(Collectors.joining("\n"));
                        String line = Long.toString(unit.getLineMap().getLineNumber(positions.getStartPosition(unit,receiver)));
                        String[] fields = {path,line,unit.getPackageName().toString(),imports,method,exact(receiver),params,String.join("\n",ids),String.join("\n",unqualifiedCalls),arguments.stream().map(this::exact).collect(Collectors.joining("\n")),operation};
                        System.out.println(Arrays.stream(fields).map(s->Base64.getEncoder().encodeToString(s.getBytes(StandardCharsets.UTF_8))).collect(Collectors.joining("\t")));
                    }
                }.scan(unit, null);
            }
        }
    }
}
