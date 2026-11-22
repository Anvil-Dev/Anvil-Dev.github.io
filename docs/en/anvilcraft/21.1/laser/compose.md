# Assembling and Merging Beam Components

Write components into `LaserComponentMap` keyed by component type; a component of the same type replaces the previous one. When merging beams, each type uses its own merge rule—for example, summing strength—while mining behavior also checks whether effects are compatible.

## Example in Source

Take `LaserTypeComponent` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.api.laser;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.block.LensBlock;
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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java)

- [`BaseLaserBlockEntity` · Line 47](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L47)
- [`LaserHitBehavior` · Line 44](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L44)
- [`LaserMiningComponent` · Line 7](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L7)
- [`LaserStrengthComponent` · Line 9](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L9)
- [`LaserTypeComponent` · Line 46](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L46)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `LaserComponentMap` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java) |
| `LaserComponentTypes` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java) |
| `ILaserComponentType` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java) |
