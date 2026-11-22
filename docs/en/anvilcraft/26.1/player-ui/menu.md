# Looking Up Block Entities for Menus

When a menu opens, look up the instance at that position in the world first; if the type does not match, try extended finders in order. Finders can be called on either side, must remain side-effect-free, and return `null` when no target can be provided.

## Example in Source

Take `PulseGeneratorMenu` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.inventory;

import dev.dubhe.anvilcraft.api.menu.MenuBlockEntityLookup;
import dev.dubhe.anvilcraft.block.entity.PulseGeneratorBlockEntity;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import lombok.Getter;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.ContainerLevelAccess;
import net.minecraft.world.inventory.MenuType;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import org.jspecify.annotations.Nullable;

import java.util.Objects;

public class PulseGeneratorMenu extends AbstractContainerMenu {
    @Getter
    private final PulseGeneratorBlockEntity blockEntity;
    private final Level level;

    public PulseGeneratorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) {
        super(menuType, containerId);
        this.blockEntity = (PulseGeneratorBlockEntity) machine;
        this.level = inventory.player.level();
    }

    public PulseGeneratorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) {
        this(menuType, containerId, inventory, readGenerator(inventory, extraData));
    }

    private static PulseGeneratorBlockEntity readGenerator(Inventory inventory, FriendlyByteBuf extraData) {
        BlockEntity found = MenuBlockEntityLookup.find(
            inventory.player.level(),
            extraData.readBlockPos(),
            PulseGeneratorBlockEntity.class
        );
        return Objects.requireNonNull(
            found instanceof PulseGeneratorBlockEntity repeater
                ? repeater.readDataNbt(Objects.requireNonNull(extraData.readNbt()))
                : null
        );
    }

    @Override
    public ItemStack quickMoveStack(Player player, int index) {
        return ItemStack.EMPTY;
    }

    @Override
    public boolean stillValid(Player player) {
        return AbstractContainerMenu.stillValid(
            ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()),
            player,
            ModBlocks.PULSE_GENERATOR.get()
        );
    }

    public void setStartMode(byte mode) {
        this.blockEntity.setStartMode(mode);
    }

    public void setOutputInvert(boolean isInvert) {
        this.blockEntity.setOutputMode(isInvert);
    }

    public void addWaitingTime(int delta) {
        this.blockEntity.setWaitingTime(this.blockEntity.getWaitingTime() + delta);
    }

    public void addSignalDuration(int delta) {
        this.blockEntity.setSignalDuration(this.blockEntity.getSignalDuration() + delta);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java)

- [`AdvancedComparatorMenu` · Line 54](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L54)
- [`ItemDetectorMenu` · Line 50](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L50)
- [`PulseGeneratorMenu` · Line 36](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L36)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `MenuBlockEntityLookup` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java) |

<!-- source-guide -->
