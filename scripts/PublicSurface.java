import com.sun.source.doctree.DocCommentTree;
import com.sun.source.tree.*;
import com.sun.source.util.*;
import javax.lang.model.element.Modifier;
import javax.tools.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;
import java.util.stream.Collectors;

/** Parse without attribution: external mod dependencies are unnecessary for source declarations. */
class PublicSurface {
    final CompilationUnitTree unit;
    final DocTrees docs;
    final SourcePositions positions;
    final Path file;
    final String source;
    final Map<Tree, TreePath> paths = new IdentityHashMap<>();

    PublicSurface(CompilationUnitTree unit, DocTrees docs, Path root) throws IOException {
        this.unit = unit;
        this.docs = docs;
        positions = docs.getSourcePositions();
        file = root.relativize(Path.of(unit.getSourceFile().toUri()).toAbsolutePath());
        source = unit.getSourceFile().getCharContent(true).toString();
    }

    static String one(String text) { return text.replaceAll("\\s+", " ").trim(); }
    long start(Tree t) { return positions.getStartPosition(unit, t); }
    long end(Tree t) { return positions.getEndPosition(unit, t); }
    String slice(long start, long end) {
        return start < 0 || end < start ? "" : one(source.substring((int)start, (int)end));
    }
    String expression(Tree t) {
        String text = slice(start(t), end(t));
        return text.isEmpty() ? one(t.toString()) : text;
    }
    static boolean has(ModifiersTree mods, Modifier flag) { return mods.getFlags().contains(flag); }
    static boolean visible(ModifiersTree mods, boolean implicit) {
        return has(mods, Modifier.PUBLIC) || implicit && !has(mods, Modifier.PRIVATE);
    }
    static String join(Collection<?> items) {
        return items.stream().map(Object::toString).collect(Collectors.joining(", "));
    }

    // Each column is Base64 so Unicode, source comments and embedded newlines round-trip.
    void write(String... values) {
        System.out.println(Arrays.stream(values)
            .map(s -> Base64.getEncoder().encodeToString(s.getBytes(StandardCharsets.UTF_8)))
            .collect(Collectors.joining("\t")));
    }
    void entry(Tree tree, String owner, String kind, String name, String signature, String result, String facts) {
        DocCommentTree comment = docs.getDocCommentTree(paths.get(tree));
        String description = "", tags = "";
        if (comment != null) {
            description = comment.getFullBody().stream().map(Object::toString).collect(Collectors.joining());
            tags = comment.getBlockTags().stream().map(Object::toString).collect(Collectors.joining("\n"));
        }
        write(unit.getPackageName().toString(), owner, kind, name, one(signature), result,
            file.toString().replace('\\','/'), String.valueOf(unit.getLineMap().getLineNumber(start(tree))),
            description, tags, facts);
    }
    void implicit(Tree tree, String owner, String kind, String name, String signature, String result, String facts) {
        write(unit.getPackageName().toString(), owner, kind, name, one(signature), result,
            file.toString().replace('\\','/'), String.valueOf(unit.getLineMap().getLineNumber(start(tree))), "", "", facts);
    }
    String facts(MethodTree method) {
        var inputs = new ArrayList<String>();
        for (var parameter : method.getParameters()) {
            inputs.add("param\t" + parameter.getName() + "\t" + parameter.getType());
        }
        if (method.getDefaultValue() != null) inputs.add("default\t" + expression(method.getDefaultValue()));
        if (method.getBody() == null) return String.join("\n", inputs);
        var statements = method.getBody().getStatements();
        boolean extension = file.toString().replace('\\','/').matches(".*/(api|event|events)/.*") ||
            file.getFileName().toString().contains("Builder") || method.getReturnType() != null && method.getReturnType().toString().contains("Builder");
        for (var statement : statements) {
            if (statement instanceof IfTree guard) {
                StatementTree body = guard.getThenStatement();
                if (body instanceof BlockTree block && block.getStatements().size() == 1) body = block.getStatements().get(0);
                if (body instanceof ThrowTree thrown)
                    inputs.add("guard\t" + expression(guard.getCondition()) + "\t" + expression(thrown.getExpression()));
                if (body instanceof ReturnTree ret && ret.getExpression() != null)
                    inputs.add("early\t" + expression(guard.getCondition()) + "\t" + expression(ret.getExpression()));
            } else if (statement instanceof ReturnTree ret && ret.getExpression() != null) {
                String expr = expression(ret.getExpression());
                if (expr.length() <= 180) inputs.add("return\t" + expr);
            } else if (statement instanceof ExpressionStatementTree expression) {
                String expr = expression(expression.getExpression());
                if (statements.size() == 1 && expr.length() <= 160) inputs.add("call\t" + expr);
            }
        }
        if ((extension && statements.size() > 1) || inputs.stream().allMatch(t -> t.startsWith("param\t"))) {
            Set<String> calls = new LinkedHashSet<>();
            new TreeScanner<Void, String>() {
                @Override public Void visitIf(IfTree guard, String previous) {
                    scan(guard.getCondition(), previous);
                    String when = expression(guard.getCondition());
                    scan(guard.getThenStatement(), when);
                    scan(guard.getElseStatement(), "!" + when);
                    return null;
                }
                @Override public Void visitMethodInvocation(MethodInvocationTree call, String when) {
                    String target = expression(call);
                    if (target.length() <= 110 && calls.size() < (extension ? 6 : 3)) {
                        String condition = when != null && when.length() <= 80 ? when : "";
                        calls.add("invoke\t" + target + "\t" + condition);
                    }
                    return super.visitMethodInvocation(call, when);
                }
                @Override public Void visitClass(ClassTree t, String unused) { return null; }
                @Override public Void visitLambdaExpression(LambdaExpressionTree t, String unused) { return null; }
            }.scan(method.getBody(), null);
            if (!calls.isEmpty()) inputs.addAll(calls);
            else if (statements.isEmpty()) inputs.add("empty");
        }
        return String.join("\n", inputs);
    }
    void usages() {
        String pkg = unit.getPackageName().toString();
        List<String> imports = unit.getImports().stream().filter(i -> !i.isStatic())
            .map(i -> i.getQualifiedIdentifier().toString()).toList();
        new TreeScanner<Void, Void>() {
            String owner = "", method = "";
            @Override public Void visitClass(ClassTree type, Void unused) {
                String previous = owner;
                if (!type.getSimpleName().isEmpty())
                    owner = owner.isEmpty() ? type.getSimpleName().toString() : owner + "." + type.getSimpleName();
                super.visitClass(type, unused);
                owner = previous;
                return null;
            }
            @Override public Void visitMethod(MethodTree m, Void unused) {
                String previous = method;
                method = m.getName().toString();
                super.visitMethod(m, unused);
                method = previous;
                return null;
            }
            void use(Tree call, String target, String name, int arity) {
                List<String> candidates = new ArrayList<>();
                if (target.equals("this") && !owner.isEmpty()) candidates.add(pkg + "." + owner);
                else {
                    if (!target.matches("[A-Z_$][a-zA-Z0-9_$.]*")) return;
                    String first = target.split("\\.", 2)[0];
                    for (String imp : imports) if (imp.endsWith("." + first)) candidates.add(imp + target.substring(first.length()));
                    if (candidates.isEmpty()) {
                        candidates.add(pkg + "." + target);
                        for (String imp : imports) if (imp.endsWith(".*")) candidates.add(imp.substring(0, imp.length()-1) + target);
                    }
                }
                write(pkg, owner, "use", name, Integer.toString(arity), String.join("\t", candidates),
                    file.toString().replace('\\','/'), String.valueOf(unit.getLineMap().getLineNumber(start(call))), method, "", "");
            }
            @Override public Void visitMethodInvocation(MethodInvocationTree call, Void unused) {
                if (call.getMethodSelect() instanceof MemberSelectTree select)
                    use(call, select.getExpression().toString(), select.getIdentifier().toString(), call.getArguments().size());
                return super.visitMethodInvocation(call, unused);
            }
            @Override public Void visitNewClass(NewClassTree call, Void unused) {
                String target = call.getIdentifier().toString().replaceFirst("<.*", "");
                use(call, target, "<init>", call.getArguments().size());
                return super.visitNewClass(call, unused);
            }
        }.scan(unit, null);
    }
    void type(ClassTree cls, String parent) {
        if (parent.isEmpty()) paths.put(cls, new TreePath(new TreePath(unit), cls));
        String simple = cls.getSimpleName().toString();
        String owner = parent.isEmpty() ? simple : parent + "." + simple;
        boolean iface = cls.getKind() == Tree.Kind.INTERFACE || cls.getKind() == Tree.Kind.ANNOTATION_TYPE;
        boolean record = cls.getKind() == Tree.Kind.RECORD;
        boolean enumeration = cls.getKind() == Tree.Kind.ENUM;
        List<VariableTree> components = new ArrayList<>();
        Set<String> explicit = new HashSet<>();
        boolean ctor = false;
        for (Tree member : cls.getMembers()) {
            paths.put(member, new TreePath(paths.get(cls), member));
            if (member instanceof MethodTree m) {
                if (m.getReturnType() == null) ctor = true;
                if (m.getParameters().isEmpty()) explicit.add(m.getName().toString());
            }
            if (record && member instanceof VariableTree v && !has(v.getModifiers(), Modifier.STATIC)) components.add(v);
        }
        String kind = cls.getKind().name();
        String header = switch (cls.getKind()) {
            case ANNOTATION_TYPE -> "@interface";
            default -> kind.toLowerCase(Locale.ROOT);
        };
        header += " " + simple;
        if (!cls.getTypeParameters().isEmpty()) header += "<" + join(cls.getTypeParameters()) + ">";
        if (record) header += "(" + components.stream().map(v -> v.getType() + " " + v.getName()).collect(Collectors.joining(", ")) + ")";
        if (cls.getExtendsClause() != null) header += " extends " + cls.getExtendsClause();
        if (!cls.getImplementsClause().isEmpty()) header += (iface ? " extends " : " implements ") + join(cls.getImplementsClause());
        if (!cls.getPermitsClause().isEmpty()) header += " permits " + join(cls.getPermitsClause());
        String modifiers = cls.getModifiers().getFlags().stream().map(Object::toString).collect(Collectors.joining(" "));
        entry(cls, owner, "type", simple, modifiers + " " + header, kind, cls.getModifiers().getAnnotations().stream().map(Object::toString).collect(Collectors.joining("\n")));
        for (Tree member : cls.getMembers()) {
            if (member instanceof ClassTree nested && visible(nested.getModifiers(), iface)) type(nested, owner);
            if (member instanceof VariableTree v && visible(v.getModifiers(), iface)) {
                boolean constant = enumeration && v.getInitializer() instanceof NewClassTree && v.getType().toString().equals(simple);
                String name = v.getName().toString();
                String signature = constant ? name : one(v.getModifiers() + " " + v.getType() + " " + name);
                String init = "";
                if (!constant && v.getInitializer() != null) {
                    String initializer = expression(v.getInitializer());
                    if (initializer.length() <= 200) init = "value\t" + initializer;
                    else if (v.getInitializer() instanceof MethodInvocationTree call) init = "factory\t" + expression(call.getMethodSelect());
                }
                entry(v, owner, constant ? "enum" : "field", name, signature, v.getType().toString(), init);
            }
            if (member instanceof MethodTree m && visible(m.getModifiers(), iface)) {
                boolean constructor = m.getReturnType() == null;
                String signature = slice(start(m), m.getBody() == null ? end(m) : start(m.getBody())).replaceFirst(";\\s*$", "");
                // Compact record constructor syntax conceals its parameters from the reader.
                if (record && constructor && !signature.contains("("))
                    signature += "(" + components.stream().map(v -> v.getType()+" "+v.getName()).collect(Collectors.joining(", ")) + ")";
                entry(m, owner, constructor ? "ctor" : "method", constructor ? simple : m.getName().toString(),
                    signature, constructor ? "" : m.getReturnType().toString(), facts(m));
            }
        }
        if (!ctor && (record || cls.getKind() == Tree.Kind.CLASS)) {
            String args = components.stream().map(v -> v.getType() + " " + v.getName()).collect(Collectors.joining(", "));
            implicit(cls, owner, "ctor", simple, "public " + simple + "(" + args + ")", "", record ? "record-ctor" : "implicit-ctor");
        }
        if (record) {
            for (var v : components) {
                String name = v.getName().toString();
                if (!explicit.contains(name)) implicit(v, owner, "method", name, "public " + v.getType() + " " + name + "()", v.getType().toString(), "record-get\t" + name);
            }
            if (!explicit.contains("hashCode")) implicit(cls, owner, "method","hashCode","public int hashCode()","int","record-hash");
            if (!explicit.contains("toString")) implicit(cls, owner, "method","toString","public String toString()","String","record-string");
            boolean equals = cls.getMembers().stream().anyMatch(t -> t instanceof MethodTree m && m.getName().contentEquals("equals") && m.getParameters().size() == 1 && Set.of("Object","java.lang.Object").contains(m.getParameters().get(0).getType().toString()));
            if (!equals) implicit(cls, owner, "method","equals","public boolean equals(Object other)","boolean","record-equals");
        }
        if (enumeration) {
            implicit(cls, owner, "method","values","public static " + simple + "[] values()", simple + "[]","enum-values");
            implicit(cls, owner, "method","valueOf","public static " + simple + " valueOf(String name)", simple,"enum-valueOf");
        }
    }
    public static void main(String[] args) throws Exception {
        Path root = Path.of(args[0]).toAbsolutePath().normalize();
        List<Path> paths = Files.readAllLines(Path.of(args[1]), StandardCharsets.UTF_8).stream().map(root::resolve).toList();
        if (paths.isEmpty()) return;
        var compiler = ToolProvider.getSystemJavaCompiler();
        var diagnostics = new DiagnosticCollector<JavaFileObject>();
        try (var files = compiler.getStandardFileManager(diagnostics, Locale.ROOT, StandardCharsets.UTF_8)) {
            var task = (JavacTask)compiler.getTask(null, files, diagnostics,
                List.of("-proc:none","--enable-preview","--source",Integer.toString(Runtime.version().feature())), null, files.getJavaFileObjectsFromPaths(paths));
            var docs = DocTrees.instance(task);
            for (var unit : task.parse()) {
                if (unit.getPackageName() == null) continue;
                var visitor = new PublicSurface(unit, docs, root);
                if (args.length > 2) visitor.usages();
                for (var tree : unit.getTypeDecls())
                    if (tree instanceof ClassTree cls && visible(cls.getModifiers(), false)) visitor.type(cls, "");
            }
        }
        for (var d : diagnostics.getDiagnostics()) if (d.getKind() == Diagnostic.Kind.ERROR) System.err.println(d);
        if (diagnostics.getDiagnostics().stream().anyMatch(d -> d.getKind() == Diagnostic.Kind.ERROR)) System.exit(2);
    }
}
