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

/** A Transcendence Smithing Table that supports all smithing operations. */
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
            TranscendenceSmithingTableBlock.CONTAINER_TITLE
        );
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java)

- [`INegativeShapeBlock` · Line 8](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeShapeBlock.java#L8)
- [`LargeCauldronBlock` · Line 61](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L61)
- [`ProcessingTableBlock` · Line 46](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L46)
- [`TranscendenceGrindstoneBlock` · Line 23](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L23)
- [`TranscendenceSmithingTableBlock` · Line 17](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L17)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IHammerRemovable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerRemovable.java) |
| `IHasHammerEffect` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java) |

<!-- source-guide -->
