# 组装与合并光束组件

以组件类型为键写入 LaserComponentMap。同一类型的组件会被替换。需要合束时使用类型自己的合并规则，例如强度求和，而采掘行为还要检查效果是否兼容。

## 源码中的用例

以本分支的 `LaserTypeComponent` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.api.laser;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.block.laser.LensBlock;
import dev.dubhe.anvilcraft.block.state.LensType;
import dev.dubhe.anvilcraft.init.block.ModBlockTags;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.tags.BlockTags;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.AABB;
import net.neoforged.neoforge.common.Tags;

public record LaserTypeComponent(boolean gamma) implements ILaserComponent {
    @Override
    public void onEmitPre(ILaserComponentOwner owner) {
        if (this.gamma) owner.setLaserMaxLength(Math.min(16, owner.getLaserMaxLength()));
    }

    public boolean canPassThrough(Level level, Direction direction, BlockPos pos) {
        BlockState state = level.getBlockState(pos);
        if (this.gamma) return state.is(BlockTags.REPLACEABLE);
        if (state.is(ModBlockTags.LASER_CAN_PASS_THROUGH)
            || state.is(Tags.Blocks.GLASS_BLOCKS)
            || state.is(Tags.Blocks.GLASS_PANES)
            || state.is(BlockTags.REPLACEABLE)) {
            return true;
        }
        if (state.getBlock() instanceof LensBlock
            && state.getValue(LensBlock.TYPE) == LensType.NONE
            && direction.getAxis() == state.getValue(LensBlock.AXIS)) {
            return true;
        }
        if (!AnvilCraft.CONFIG.equipment.laserImpactChecking) return false;
        AABB bounds = switch (direction.getAxis()) {
            case X -> Block.box(0, 7, 7, 16, 9, 9).bounds();
            case Y -> Block.box(7, 0, 7, 9, 16, 9).bounds();
            case Z -> Block.box(7, 7, 0, 9, 9, 16).bounds();
        };
        return state.getCollisionShape(level, pos).toAabbs().stream().noneMatch(bounds::intersects);
    }

    public static boolean isGamma(ILaserComponentOwner owner) {
        LaserTypeComponent component = owner.getComponent(LaserComponentTypes.LASER_TYPE);
        return component != null && component.gamma;
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java)

- [`BaseLaserBlockEntity` · 第 45 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L45)
- [`LaserHitBehavior` · 第 44 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L44)
- [`LaserMiningComponent` · 第 7 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L7)
- [`LaserStrengthComponent` · 第 9 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L9)
- [`LaserTypeComponent` · 第 46 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L46)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `LaserComponentMap` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java) |
| `LaserComponentTypes` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java) |
| `ILaserComponentType` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java) |

<!-- source-guide -->
