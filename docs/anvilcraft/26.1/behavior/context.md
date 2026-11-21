# 在一次遍历中共享数据

如果父节点的动作要用子节点算出的结果，把结果写入 `ExecutionContext`。同一次遍历的所有节点共享该实例。下一次 `BehaviorTree.run` 会为输入新建上下文，所以附加值只对本次执行有效。需要跨作业保存的状态应由机器或其他持久化对象持有。

本包声明了 JSpecify 的 `@NullMarked`。传入的原始上下文、键、值和类型令牌都应当非空。这条约定由静态分析工具检查；构造器和写入方法没有逐项拦截 null。 [包声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/package-info.java#L1)

下面按冲压次数计分。子节点写入本轮得分，父节点收尾时把分数提交给调用者。示例连续运行两次，检查两笔作业的得分分别写回。

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

| 签名 | 用途 | 边界 |
| --- | --- | --- |
| `ExecutionContext(T context)`、`T unwrap()` | 包装作业输入，再取回同一对象 | `unwrap` 直接返回构造时保存的引用。修改可变输入会影响调用者。 |
| `void putAttachment(String key, Object item)` | 在当前执行中共享附加值 | 同键后写覆盖先写。用包含模组命名空间的字符串，避免多个节点意外共用同一键。 |
| `boolean has(String key)` | 判断是否已写入该键 | 实现检查 map 是否包含键。不要将 null 存入后据此判断值可读。 |
| `<T1> T1 getAttachment(String key, Class<T1> ty)` | 用类型令牌取出已知值 | `ty.isInstance(item)` 成功后才转换。应使用 `Integer.class` 等包装类型。已存在且类型不匹配时抛 `IllegalArgumentException`。缺键或值为 null 时，错误提示内部的 `item.getClass()` 会抛 `NullPointerException`。 |

[查看 ExecutionContext 实现](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/behavior/ExecutionContext.java#L18)
