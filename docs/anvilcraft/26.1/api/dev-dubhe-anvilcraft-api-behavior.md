# dev.dubhe.anvilcraft.api.behavior



## BehaviorTree

` public class BehaviorTree<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/BehaviorTree.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BehaviorTree(TreeNode<T> root) ` | 执行 ` this.root = root `<br>[调用处 GiantAnvilShockEventListener](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/GiantAnvilShockEventListener.java#L218) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/BehaviorTree.java#L8) |
| ` public boolean run(T context) ` | 末尾返回 ` matches.get() `<br>实现调用 ` this.walkNode(new ExecutionContext<>(context), this.root, matches) `<br>实现调用 ` matches.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/BehaviorTree.java#L12) |
| ` public void walkNode(ExecutionContext<T> context, TreeNode<T> node, AtomicBoolean returns) ` | 实现调用 ` node.matches(context) `<br>分支 ` (node.matches(context)) ` 内调用 ` returns.set(true) `<br>分支 ` (node.matches(context)) ` 内调用 ` node.getChildren() `<br>分支 ` (node.matches(context)) ` 内调用 ` this.walkNode(context, child, returns) `<br>分支 ` (node.matches(context)) ` 内调用 ` node.run(context) `<br>[调用处 BehaviorTree.run](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/BehaviorTree.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/BehaviorTree.java#L18) |

## ExecutableTreeNode

` public class ExecutableTreeNode<T> extends SetTreeNode<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutableTreeNode.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExecutableTreeNode(Consumer<ExecutionContext<T>> executes) ` | 实现调用 ` super(HashSet::new) `<br>[调用处 TreeNode.executes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutableTreeNode.java#L10) |
| ` @Override public boolean matches(ExecutionContext<T> context) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutableTreeNode.java#L15) |
| ` @Override public void run(ExecutionContext<T> context) ` | 执行 ` this.executes.accept(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutableTreeNode.java#L20) |

## ExecutionContext

` public class ExecutionContext<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExecutionContext(T context) ` | 执行 ` this.context = context `<br>[调用处 BehaviorTree.run](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/BehaviorTree.java#L14) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L10) |
| ` public void putAttachment(String key, Object item) ` | 执行 ` this.attachment.put(key, item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L14) |
| ` public <T1> T1 getAttachment(String key, Class<T1> ty) ` | ` (ty.isInstance(item)) ` 成立时提前返回 ` ty.cast(item) `<br>实现调用 ` this.attachment.get(key) `<br>实现调用 ` ty.isInstance(item) `<br>分支 ` (ty.isInstance(item)) ` 内调用 ` ty.cast(item) `<br>实现调用 ` "Expected type %s for attachment %s but found %s".formatted( ty.getName(), key, item.getClass().getName() ) `<br>实现调用 ` ty.getName() `<br>实现调用 ` item.getClass().getName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L18) |
| ` public boolean has(String key) ` | 末尾返回 ` this.attachment.containsKey(key) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L32) |
| ` public T unwrap() ` | 末尾返回 ` this.context ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L36) |

## PredicateExecutableTreeNode

` public class PredicateExecutableTreeNode<T> extends SetTreeNode<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateExecutableTreeNode.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PredicateExecutableTreeNode(Predicate<ExecutionContext<T>> predicate) ` | 实现调用 ` super(HashSet::new) `<br>[调用处 TreeNode.predicatedExecutable](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L23) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateExecutableTreeNode.java#L11) |
| ` @Override public void run(ExecutionContext<T> context) ` | 执行 ` this.executes.accept(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateExecutableTreeNode.java#L16) |
| ` @Override public boolean matches(ExecutionContext<T> context) ` | 末尾返回 ` this.predicate.test(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateExecutableTreeNode.java#L21) |
| ` @Override public PredicateExecutableTreeNode<T> executes(Consumer<ExecutionContext<T>> consumer) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateExecutableTreeNode.java#L26) |

## PredicateTreeNode

` public class PredicateTreeNode<T> extends SetTreeNode<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateTreeNode.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PredicateTreeNode(Predicate<ExecutionContext<T>> predicate) ` | 实现调用 ` super(HashSet::new) `<br>[调用处 TreeNode.predicate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L19) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateTreeNode.java#L9) |
| ` @Override public boolean matches(ExecutionContext<T> context) ` | 末尾返回 ` this.predicate.test(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/PredicateTreeNode.java#L14) |

## SetTreeNode

` public class SetTreeNode<T> implements TreeNode<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SetTreeNode(Supplier<Set<TreeNode<T>>> factory) ` | 执行 ` this.childrens = factory.get() `<br>[调用处 TreeNode.multiple](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L32) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L12) |
| ` @Override public boolean matches(ExecutionContext<T> context) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L16) |
| ` public SetTreeNode<T> then(TreeNode<T> node) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.childrens.add(node) `<br>[调用处 SetTreeNode.executes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L21) |
| ` @Override public Collection<TreeNode<T>> getChildren() ` | 末尾返回 ` this.childrens ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L26) |
| ` public SetTreeNode<T> executes(Consumer<ExecutionContext<T>> consumer) ` | 末尾返回 ` this.then(TreeNode.executes(consumer)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L31) |

## TreeNode

` public interface TreeNode<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean matches(ExecutionContext<T> context) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L11) |
| ` Collection<TreeNode<T>> getChildren() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L13) |
| ` default void run(ExecutionContext<T> context) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L15) |
| ` static <T> PredicateTreeNode<T> predicate(Predicate<ExecutionContext<T>> predicate) ` | 末尾返回 ` new PredicateTreeNode<>(predicate) `<br>[调用处 GiantAnvilShockEventListener](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/GiantAnvilShockEventListener.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L18) |
| ` static <T> PredicateExecutableTreeNode<T> predicatedExecutable(Predicate<ExecutionContext<T>> predicate) ` | 末尾返回 ` new PredicateExecutableTreeNode<>(predicate) `<br>[调用处 GiantAnvilShockEventListener](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/GiantAnvilShockEventListener.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L22) |
| ` static <T> ExecutableTreeNode<T> executes(Consumer<ExecutionContext<T>> consumer) ` | 末尾返回 ` new ExecutableTreeNode<>(consumer) `<br>[调用处 SetTreeNode.executes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/SetTreeNode.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L26) |
| ` @SafeVarargs static <T> SetTreeNode<T> multiple(TreeNode<T>... children) ` | 末尾返回 ` new SetTreeNode<>(() -> new HashSet<>(List.of(children))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/TreeNode.java#L30) |
