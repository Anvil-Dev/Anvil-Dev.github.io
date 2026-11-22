# 干预可推动性

在公共初始化阶段把 SlidingStructureExtension 交给 SlidingStructureHooks。服务端解析每个候选方块时依次调用扩展，上一项的返回值成为下一项的 original。判断过程中保持世界不变。

## 禁止滑轨带走指定的方块

在公共初始化中调用 `install()`。规则只覆盖附属关心的状态，其余方块保留传入的推动反应。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.sliding.SlidingStructureExtension;
import dev.dubhe.anvilcraft.api.sliding.SlidingStructureHooks;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.PushReaction;

public final class AnchorRule implements SlidingStructureExtension {
    public static void install() {
        SlidingStructureHooks.register(new AnchorRule());
    }

    @Override
    public PushReaction modifyPushReaction(Level level, BlockPos pos, BlockState state,
            PushReaction original, Direction pushDirection) {
        return state.is(Blocks.LODESTONE) ? PushReaction.BLOCK : original;
    }
}
```

## 源码中的用例

- [`SlidingBlockStructureResolver` · 第 84 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L84)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `SlidingStructureExtension` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureExtension.java) |
| `SlidingStructureHooks` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java) |
