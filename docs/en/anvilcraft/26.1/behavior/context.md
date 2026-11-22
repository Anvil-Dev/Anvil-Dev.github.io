# Sharing Data Within a Single Traversal

If a parent node's action needs results computed by child nodes, write those results into `ExecutionContext`. All nodes in the same traversal share that instance. The next `BehaviorTree.run` creates a fresh context for its input, so attachments are valid only for the current execution. State that must persist across jobs should be held by the machine or another persistent object.

This package is annotated with JSpecify's `@NullMarked`. The raw context, keys, values, and class tokens passed in must all be non-null. This contract is checked by static analysis tools; constructors and write methods do not individually reject null. [Package declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/package-info.java#L1)

The example below scores by press hit count. The child node writes the score for this round, and the parent node submits the score to the caller at the end. It runs twice in a row to verify that scores for both jobs are written back separately.

```java
package dev.example.forge;

import dev.dubhe.anvilcraft.api.behavior.BehaviorTree;
import dev.dubhe.anvilcraft.api.behavior.PredicateExecutableTreeNode;
import dev.dubhe.anvilcraft.api.behavior.TreeNode;
import java.util.ArrayList;
import java.util.List;
import java.util.function.IntConsumer;

public final class PressScore {
    private static final String SCORE = "example:press_score";
    public record Batch(int hits, IntConsumer finish) {}

    public static BehaviorTree<Batch> create() {
        PredicateExecutableTreeNode<Batch> root =
            TreeNode.predicatedExecutable(ctx -> ctx.unwrap().hits() > 0);
        root.then(TreeNode.executes(ctx ->
            ctx.putAttachment(SCORE, Math.multiplyExact(ctx.unwrap().hits(), 5))));
        root.executes(ctx -> {
            if (ctx.has(SCORE)) {
                ctx.unwrap().finish().accept(ctx.getAttachment(SCORE, Integer.class));
            }
        });
        return new BehaviorTree<>(root);
    }

    public static void main(String[] args) {
        List<Integer> result = new ArrayList<>();
        BehaviorTree<Batch> tree = create();
        tree.run(new Batch(2, result::add));
        tree.run(new Batch(3, result::add));
        if (!result.equals(List.of(10, 15))) {
            throw new AssertionError(result);
        }
    }
}
```

| Signature | Purpose | Boundaries |
| --- | --- | --- |
| `ExecutionContext(T context)`, `T unwrap()` | Wraps the job input and retrieves the same object | `unwrap` directly returns the reference stored at construction. Mutating a mutable input affects the caller. |
| `void putAttachment(String key, Object item)` | Shares an attachment within the current execution | Later writes with the same key overwrite earlier ones. Use a string containing your mod namespace to avoid accidental key collisions between nodes. |
| `boolean has(String key)` | Checks whether the key has been written | Checks whether the map contains the key. Do not store `null` and rely on `has` to assume a readable value. |
| `<T1> T1 getAttachment(String key, Class<T1> ty)` | Retrieves a known value using a class token | Casts only after `ty.isInstance(item)` succeeds. Use wrapper types such as `Integer.class`. Throws `IllegalArgumentException` if present with a mismatched type. If the key is missing or its value is `null`, `item.getClass()` in the error message throws `NullPointerException`. |

[View ExecutionContext implementation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L18)
