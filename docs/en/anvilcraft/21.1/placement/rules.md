# Determining Block State on Placement

Give non-standard placement logic its own rule. Inspect the callers of rules to distinguish player block-item usage from machine placement contexts before deciding when to take over.

## Example in Source

Take `ModBlockPlacementFallbacks` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.init;

import dev.dubhe.anvilcraft.api.block.BlockPlacementRules;
import dev.dubhe.anvilcraft.block.placement.FacingOnlyPlacementRule;
import dev.dubhe.anvilcraft.block.placement.LensBlockPlacementRule;
import dev.dubhe.anvilcraft.block.placement.SlabBlockPlacementRule;
import dev.dubhe.anvilcraft.block.placement.StairBlockPlacementRule;
import dev.dubhe.anvilcraft.block.placement.TrapDoorBlockPlacementRule;

/**
 * Registers code-level placement rule fallbacks for blocks without corresponding rules in data packs.
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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModBlockPlacementFallbacks.java)

- [`BlockItemHandlerPointer` · Line 88](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L88)
- [`BlockPointer` · Line 128](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L128)
- [`ItemEntityPointer` · Line 109](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/ItemEntityPointer.java#L109)
- [`SmartBlockPlacerBlockEntity` · Line 731](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L731)
- [`BlueprintMaterialBudget` · Line 67](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/placement/BlueprintMaterialBudget.java#L67)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `BlockPlacementRules` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java) |
| `IBlockPlacementRule` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java) |
| `BlockPlaceAssist` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/BlockPlaceAssist.java) |
