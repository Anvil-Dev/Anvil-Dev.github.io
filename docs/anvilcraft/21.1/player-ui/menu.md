# 为菜单查找方块实体

菜单打开时先查世界中该位置的实例；类型不符时依次尝试扩展查找器。查找器可以在两侧调用，保持查询无副作用，无法提供目标时返回 null。

## 源码中的用例

以本分支的 `PulseGeneratorMenu` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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
import org.jetbrains.annotations.Nullable;

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
        return stillValid(
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java)

- [`AdvancedComparatorMenu` · 第 54 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L54)
- [`ItemDetectorMenu` · 第 54 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L54)
- [`PulseGeneratorMenu` · 第 36 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L36)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `MenuBlockEntityLookup` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java) |
