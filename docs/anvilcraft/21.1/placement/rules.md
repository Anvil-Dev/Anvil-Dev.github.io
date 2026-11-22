# 决定放置时的方块状态

给非标准放置逻辑一个单独的规则。查阅规则的调用者，分清玩家使用方块物品与机器放置的上下文，再决定何时接管。

## 源码中的用例

以本分支的 `ModBlockPlacementFallbacks` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.init;

import dev.dubhe.anvilcraft.api.block.BlockPlacementRules;
import dev.dubhe.anvilcraft.block.placement.FacingOnlyPlacementRule;
import dev.dubhe.anvilcraft.block.placement.LensBlockPlacementRule;
import dev.dubhe.anvilcraft.block.placement.SlabBlockPlacementRule;
import dev.dubhe.anvilcraft.block.placement.StairBlockPlacementRule;
import dev.dubhe.anvilcraft.block.placement.TrapDoorBlockPlacementRule;

/**
 * 注册代码层的放置规则 Fallback 类，用于数据包中不存在对应规则的方块。
 */
public final class ModBlockPlacementFallbacks {
    private ModBlockPlacementFallbacks() {
    }

    public static void register() {
        BlockPlacementRules.registerFallback(LensBlockPlacementRule.INSTANCE);
        BlockPlacementRules.registerFallback(SlabBlockPlacementRule.INSTANCE);
        BlockPlacementRules.registerFallback(StairBlockPlacementRule.INSTANCE);
        BlockPlacementRules.registerFallback(TrapDoorBlockPlacementRule.INSTANCE);
        BlockPlacementRules.registerFallback(FacingOnlyPlacementRule.INSTANCE);
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModBlockPlacementFallbacks.java)

- [`BlockItemHandlerPointer` · 第 88 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L88)
- [`BlockPointer` · 第 128 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L128)
- [`ItemEntityPointer` · 第 109 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/ItemEntityPointer.java#L109)
- [`SmartBlockPlacerBlockEntity` · 第 731 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L731)
- [`BlueprintMaterialBudget` · 第 67 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/placement/BlueprintMaterialBudget.java#L67)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `BlockPlacementRules` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java) |
| `IBlockPlacementRule` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java) |
| `BlockPlaceAssist` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/BlockPlaceAssist.java) |
