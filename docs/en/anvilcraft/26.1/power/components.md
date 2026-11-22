# Connecting Block Entities to the Power Grid

Implement `IPowerConsumer` on the registered machine block entity. AnvilCraft listens for `BlockEntityEvent.ServerLoad` and queues the component for the current dimension's power grid. On unload it calls `removeComponent`. `getGrid()` may still return `null` at the end of the load callback. Run work that requires power in `gridTick()` and check `isGridWorking()` before consuming materials.

This detector draws 4 units of power. Include `IPowerComponent.OVERLOAD` in the block state definition so the model can distinguish between normal and overloaded states. Pass the registered `BlockEntityType`, position, and state to the block entity constructor.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.power.IPowerConsumer;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import org.jspecify.annotations.Nullable;

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
| `toPowerComponentInfo(): PowerComponentInfo` | When creating a server-side snapshot, each component interface supplies the relevant consumption, production, capacity, or coverage bounds. If you override the range, keep the snapshot's bounding box consistent with the server's bounds. |
