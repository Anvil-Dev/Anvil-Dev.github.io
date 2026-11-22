# Connecting Block Entities to the Power Grid

Have your registered machine block entity implement `IPowerConsumer`. AnvilCraft listens to `BlockEntityEvent.ServerLoad` to enqueue it into the current dimension's grid queue, and calls `removeComponent` on unload. Note that `getGrid()` can still be `null` immediately after the load callback finishes; put actual power-consuming logic inside `gridTick()`, checking `isGridWorking()` before consuming materials.

The example below is a detector consuming 4 power. Adding `IPowerComponent.OVERLOAD` to your block state definition lets models distinguish overloaded and normal states. When constructing your `BlockEntityType`, pass the registered type, position, and state to the constructor.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.power.IPowerConsumer;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public final class GridProbe extends BlockEntity implements IPowerConsumer {
    private @Nullable PowerGrid grid;

    public GridProbe(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    @Override public int getInputPower() { return 4; }
    @Override public BlockPos getPos() { return getBlockPos(); }
    @Override public @Nullable Level getCurrentLevel() { return getLevel(); }
    @Override public @Nullable PowerGrid getGrid() { return grid; }
    @Override public void setGrid(@Nullable PowerGrid newGrid) { grid = newGrid; }

    @Override
    public void gridTick() {
        if (level != null) flushState(level, getPos());
    }
}
```

| Signature | Timing & Convention |
| --- | --- |
| `getInputPower(): int`, `getOutputPower(): int` | Implemented by consumers and producers respectively; both default to `0`. Return demand or supply for this settlement; only report numbers here without deducting inventory. |
| `getCurrentLevel(): Level`, `getPos(): BlockPos` | Used by the manager to select dimension and match range. May return `null` for level before the entity is attached to a world. |
| `getRange(): int`, `getShape(): AABB` | Centered on the block by default, with each axis length equal to `2 * radius + 1`. Regular machines have radius `0`; repeaters read radius from machine config. |
| `getGrid()`, `setGrid(@Nullable PowerGrid)` | Holds the runtime reference; grid splitting, merging, and unloading can change it. No need to persist to block entity save data. |
| `flushState(Level, BlockPos): void` | Writes back only if the block state contains `OVERLOAD`. Sets to `true` when there is no grid or grid supply is below demand. |
| `getComponentType()` | Defaulted by `IPowerConsumer`, `IPowerProducer`, `IPowerStorage`, and `IPowerTransmitter`. |
| `ConnectivityChecker.register(checker)` | Registers additional range checks during initialization. Any `FALSE` rejects the connection; at least one `TRUE` with no rejections connects. If all checks return `DEFAULT`, the connection is rejected. |
