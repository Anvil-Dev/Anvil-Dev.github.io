# 拆卸与手持效果

处理旋转、拆卸和持锤效果时分别选取对应接口。先检查玩家操作与方块状态，只有实际执行成功才报告处理成功，留出其他交互的机会。

## 源码中的用例

以本分支的 `TranscendenceSmithingTableBlock` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

/** 可以执行全部锻造操作的超限锻造台。 */
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java)

- [`AccelerationRingBlock` · 第 47 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L47)
- [`AdvancedComparatorBlock` · 第 56 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L56)
- [`BlockComparatorBlock` · 第 41 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L41)
- [`BlockPlacerBlock` · 第 50 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L50)
- [`BurningHeaterBlock` · 第 30 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L30)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `IHammerRemovable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerRemovable.java) |
| `IHasHammerEffect` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java) |
