# Organizing Conditions and Actions

When executing multiple material rules in a forging callback, place shared checks on the parent node. Returning `false` from the parent's `matches` prunes the entire subtree. On a match, `BehaviorTree.walkNode` sets the match flag first, visits subtrees in order, and only then runs the current node's `run`. This lets the parent deduct materials uniformly after child nodes record all outputs. Upstream giant anvil shock handling also builds a behavior tree from a single root node. [Shock listener](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/GiantAnvilShockEventListener.java#L218)

The add-on rule below receives an input snapshot of a forging operation. It checks material and count first, records the output, and finally consumes the ingredient. When wiring into a machine, call `run` after confirming the recipe inputs on the server. Running `main` checks both the success path and the insufficient-material path.

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

| Signature | When to Use | Parameters, Return & Boundaries |
| --- | --- | --- |
| `BehaviorTree(TreeNode<T> root)`, `boolean run(T context)` | Build the rule once and call `run` per job | Holds a reference to the root node. Creates a new execution context per run. Returns `true` whenever the root node matches, even if the tree has no actions. |
| `void walkNode(ExecutionContext<T> context, TreeNode<T> node, AtomicBoolean returns)` | Call when continuing traversal of a subtree with an existing execution context | `node` is the starting point for this traversal. Sets `returns` to `true` only on match; leaves it unchanged when skipping a subtree. Cycles in the tree cause infinite recursion. |
| `TreeNode.predicate(predicate)`, `TreeNode.predicatedExecutable(predicate)` | Add a conditional branch | The predicate receives the current execution context. The former uses a default no-op action; the latter's `executes(consumer)` replaces its own action and returns `this`. |
| `TreeNode.executes(consumer)` | Create an unconditionally executing action node | Returns `ExecutableTreeNode<T>`. Calls `consumer` whenever traversal reaches this node. |
| `TreeNode.multiple(TreeNode<T>... children)` | Attach multiple existing nodes in parallel | Returns an unconditionally matching collection node backed by `HashSet`, which does not guarantee sibling order. Do not pass `null`. |
| `SetTreeNode(Supplier<Set<TreeNode<T>>> factory)`, `then(TreeNode<T> node)` | Manage the child node set yourself | Calls `factory` once at construction. `then` adds the node to the set and returns the parent; calling it twice produces two siblings. Pass `LinkedHashSet::new` when insertion order matters. |
| `SetTreeNode.executes(Consumer<ExecutionContext<T>> consumer)` | Add an action to a set node | Each call adds a new child node. In the example, the root has type `PredicateExecutableTreeNode`, whose override replaces the root's own action. |
| `TreeNode.matches(context)`, `getChildren()`, `run(context)` | Implement custom nodes | Respectively decide whether to descend, list direct children, and execute the current action. Set nodes return the live child set; mutating it during traversal may throw `ConcurrentModificationException`. |
