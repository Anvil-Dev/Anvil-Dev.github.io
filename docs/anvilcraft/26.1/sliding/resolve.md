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

- [`SlidingBlockStructureResolver` · 第 79 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L79)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `SlidingStructureExtension` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-sliding#slidingstructureextension) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureExtension.java) |
| `SlidingStructureHooks` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-sliding#slidingstructurehooks) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java) |

<!-- source-guide -->
