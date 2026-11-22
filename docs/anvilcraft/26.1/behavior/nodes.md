# 组织条件与动作

在锻造回调里执行多条材料规则时，可以把共有的判断放到父节点。父节点的 `matches` 返回 `false` 会剪掉整棵子树。命中时，`BehaviorTree.walkNode` 先设定匹配标志，再依次访问子树，最后才执行当前节点的 `run`。这使父节点可以在子节点记录所有产出后，统一扣减材料。上游的巨型铁砧冲击处理也从一个根节点构造行为树。[冲击监听器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/GiantAnvilShockEventListener.java#L218)

下面的附属模组规则接收一次锻造的输入快照。先判断材料和数量，再记录产物，最后扣除原料。接入机器时，在服务端确认配方输入以后调用 `run`。运行示例的 `main` 可以检查成功和原料不足两条路径。

```java
package dev.example.forge;

import dev.dubhe.anvilcraft.api.behavior.BehaviorTree;
import dev.dubhe.anvilcraft.api.behavior.PredicateExecutableTreeNode;
import dev.dubhe.anvilcraft.api.behavior.TreeNode;
import java.util.ArrayList;
import java.util.List;

public final class ForgeRules {
    public record Job(String itemId, int count, List<String> operations) {}

    public static BehaviorTree<Job> create() {
        PredicateExecutableTreeNode<Job> root = TreeNode.predicatedExecutable(ctx ->
            ctx.unwrap().itemId().equals("minecraft:iron_ingot") && ctx.unwrap().count() >= 2);
        root.then(TreeNode.executes(ctx -> ctx.unwrap().operations().add("produce_plate")));
        root.executes(ctx -> ctx.unwrap().operations().add("consume_two_ingots"));
        return new BehaviorTree<>(root);
    }

    public static void main(String[] args) {
        BehaviorTree<Job> tree = create();
        List<String> log = new ArrayList<>();
        if (!tree.run(new Job("minecraft:iron_ingot", 2, log))
            || !log.equals(List.of("produce_plate", "consume_two_ingots"))) {
            throw new AssertionError(log);
        }
        log.clear();
        if (tree.run(new Job("minecraft:iron_ingot", 1, log)) || !log.isEmpty()) {
            throw new AssertionError(log);
        }
    }
}
```

| 签名 | 何时使用 | 参数、返回与边界 |
| --- | --- | --- |
| `BehaviorTree(TreeNode<T> root)`、`boolean run(T context)` | 建立规则一次，每笔作业调用一次 `run` | 保存根节点引用。每次运行新建执行上下文。只要根节点匹配就会返回 `true`，即使树里没有动作。 |
| `void walkNode(ExecutionContext<T> context, TreeNode<T> node, AtomicBoolean returns)` | 需要从已有执行上下文继续遍历子树时调用 | `node` 是这次遍历的起点。匹配时只会把 `returns` 设为 `true`。跳过子树时保留原值。树中有环会导致递归无法终止。 |
| `TreeNode.predicate(predicate)`、`TreeNode.predicatedExecutable(predicate)` | 加入带条件的分支 | 谓词接收当前执行上下文。前者使用默认空动作，后者调用 `executes(consumer)` 可替换自己的动作，并返回自身。 |
| `TreeNode.executes(consumer)` | 创建无条件执行的动作节点 | 返回 `ExecutableTreeNode<T>`。每次遍历到这个节点都会调用 consumer。 |
| `TreeNode.multiple(TreeNode<T>... children)` | 并列挂接多个现成节点 | 返回无条件匹配的集合节点，内部使用 `HashSet`，不保证兄弟节点顺序。不要传入 null。 |
| `SetTreeNode(Supplier<Set<TreeNode<T>>> factory)`、`then(TreeNode<T> node)` | 自己管理子节点集合 | 构造时调用 factory 一次。`then` 把节点加入集合并返回父节点，连续调用两次得到两个兄弟节点。需要固定插入顺序时传入 `LinkedHashSet::new`。 |
| `SetTreeNode.executes(Consumer<ExecutionContext<T>> consumer)` | 为集合加入动作 | 每次调用都添加一个新的子节点。示例中根节点有 `PredicateExecutableTreeNode` 类型，它的重写方法替换根节点自身的动作。 |
| `TreeNode.matches(context)`、`getChildren()`、`run(context)` | 实现自定义节点 | 依次决定是否深入、列出直接子节点、执行当前动作。集合节点返回实际使用的子节点集合，遍历期间修改它可能抛出 `ConcurrentModificationException`。 |
