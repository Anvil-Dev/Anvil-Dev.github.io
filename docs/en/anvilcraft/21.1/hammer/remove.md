# Dismantling and Handheld Effects

Select the corresponding interface when handling rotation, dismantling, or held-hammer effects. Check player actions and block state first, and report handled only when the action actually succeeds so other interactions still have a chance to run.

## Example in Source

Take `TranscendenceSmithingTableBlock` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.block;

import dev.dubhe.anvilcraft.api.block.ITranscendiumBlock;
import dev.dubhe.anvilcraft.api.hammer.IHammerRemovable;
import dev.dubhe.anvilcraft.inventory.TranscendenceSmithingMenu;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.world.MenuProvider;
import net.minecraft.world.SimpleMenuProvider;
import net.minecraft.world.inventory.ContainerLevelAccess;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.SmithingTableBlock;
import net.minecraft.world.level.block.state.BlockState;

/** A transcendence smithing table capable of performing all smithing operations. */
public class TranscendenceSmithingTableBlock extends SmithingTableBlock
    implements IHammerRemovable, ITranscendiumBlock {
    private static final Component CONTAINER_TITLE =
        Component.translatable("block.anvilcraft.transcendence_smithing_table");

    public TranscendenceSmithingTableBlock(Properties properties) {
        super(properties);
    }

    @Override
    public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) {
        return new SimpleMenuProvider(
            (id, inventory, player) -> new TranscendenceSmithingMenu(
                id,
                inventory,
                ContainerLevelAccess.create(level, pos)
            ),
            CONTAINER_TITLE
        );
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java)

- [`AccelerationRingBlock` · Line 47](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L47)
- [`AdvancedComparatorBlock` · Line 56](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L56)
- [`BlockComparatorBlock` · Line 41](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L41)
- [`BlockPlacerBlock` · Line 50](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L50)
- [`BurningHeaterBlock` · Line 30](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L30)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IHammerRemovable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerRemovable.java) |
| `IHasHammerEffect` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java) |
