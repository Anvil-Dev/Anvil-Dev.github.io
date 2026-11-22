# Identifying Containers and Connected Faces

Pipes request `Capabilities.Fluid.BLOCK` or `Capabilities.Fluid.ENTITY` from one side of a container. If the pipe is east of a tank, `sideToPipe` is `EAST`. If the block itself provides the fluid capability, it is used directly as the endpoint; if not, entities in that block space are queried. Because multiple tank minecarts may occupy the same block space, `findAll` preserves all corresponding handlers.

The snippet below is a server-side debug readout: pass the container position and the face toward the pipe to count how many handlers are accessible on that face and actually connected to the pipe.

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
| `find(Level, BlockPos, @Nullable Direction): Result` | Returns the first handler, or `null` if none matched. When face is `null`, queries only the directionless capability. |
| `findAll(Level, BlockPos, @Nullable Direction): List<Result>` | Returns an empty list if none found. A block hit returns a single result directly; entities are sorted by ID. |
| `findAny(Level, BlockPos[, BlockEntity]): Result` | Tries `null` first, then the six faces in order; used to confirm whether any capability exists. Use the extra-parameter overload if you already hold the block entity. |
| `Result.handler()`, `cauldron()`, `entity()` | Return the fluid capability, whether it is handled as a whole cauldron, and the owning entity (`null` for block capabilities). |
| `isEntityConnectedToPipe(Level, BlockPos, Direction, Entity): boolean` | Verifies the entity still exists and the capability on that face is valid. Tank minecarts are checked by bounding-box overlap with the cell; other entities must also touch the pipe's collision shape. |
| `addContainerAfterLoad(Level, BlockPos)`, `removeContainer(Level, BlockPos)` | Defers probing on chunk load to avoid immediate cross-chunk lookups; cleans up on unload. Regular block entities already have AnvilCraft's load listener. |
