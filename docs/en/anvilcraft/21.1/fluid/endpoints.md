# Identifying Containers and Connected Faces

A pipe requests capabilities from a side of the container. If the pipe is east of a tank, `sideToPipe` is `EAST`. If the block itself provides a fluid capability, it is used directly as the endpoint; if not, entities in that block space are queried. Because multiple tank minecarts can occupy the same block space, `findAll` retains all matching handlers.

The code below is a server-side diagnostic readout: given a container position and the face toward the pipe, it counts how many handlers are accessible on that face and actually connected to the pipe.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidContainerLookup;
import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkScanner;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;

public final class PipeInspector {
    public static long connectedHandlers(ServerLevel level, BlockPos pos, Direction sideToPipe) {
        BlockPos pipe = pos.relative(sideToPipe);
        if (!level.isLoaded(pos) || !level.isLoaded(pipe)
            || !FluidNetworkScanner.isPipePart(level.getBlockState(pipe))) return 0;
        return FluidContainerLookup.findAll(level, pos, sideToPipe).stream()
            .filter(result -> result.entity() == null ||
                FluidContainerLookup.isEntityConnectedToPipe(level, pos, sideToPipe, result.entity()))
            .count();
    }
}
```

This checks container capabilities and adjacent parts; full pipe segment orientation, filtering, and reachability are determined by the scanner.

| Signature | Usage & Boundaries |
| --- | --- |
| `find(Level, BlockPos, @Nullable Direction): Result` | Returns the first handler, or `null` if none matched. When face is `null`, queries only directionless capabilities. |
| `findAll(Level, BlockPos, @Nullable Direction): List<Result>` | Returns an empty list if none found. A block hit returns a single result directly; entities are sorted by ID. |
| `findAny(Level, BlockPos[, BlockEntity]): Result` | Tries `null` first, then each of the six faces in order; used to check whether any capability exists. Use the extra-argument overload when you already hold the `BlockEntity`. |
| `Result.handler()`, `cauldron()`, `entity()` | Respectively return the fluid capability, whether it is handled as a whole cauldron, and the owning entity (`null` for block capabilities). |
| `isEntityConnectedToPipe(Level, BlockPos, Direction, Entity): boolean` | Verifies that the entity is still present and its capability on that face is valid. Tank minecarts are checked by bounding-box overlap with the cell; other entities must also touch the pipe's collision shape. |
| `addContainerAfterLoad(Level, BlockPos)`, `removeContainer(Level, BlockPos)` | Defers probing on chunk load to avoid immediate cross-chunk lookups; cleans up on unload. Regular block entities already have AnvilCraft's load listener. |
