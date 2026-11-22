# Flow Rate, Head, and Integral Pushing

Normal liquids flow from containers with higher equivalent height to lower ones, filling targets starting from the lowest group; multiple targets at the same height split the flow. Equivalent height includes the head of working pumps along the path. When a pump is overloaded, disabled by redstone, or unpowered, it keeps the pipe segment connection but loses its head and active one-way constraint. Gases diffuse according to pressure differences caused by fill ratio and pump pressure.

When you need "deliver a full bucket or move nothing", use `pushExact` in server-side operations. The example below suits low-frequency actions such as clicking an outlet with a handheld device; each active scan traverses connected pipe segments, so large machines should not rescan every game tick. Supplied tanks should honor simulated operations and allow refilling temporarily extracted fluid.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkScanner;
import dev.dubhe.anvilcraft.api.fluid.network.FluidPipeNetwork;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.fluids.capability.IFluidHandler;
import java.util.Optional;

public final class BatchOutlet {
    public static Optional<BlockPos> deliver(ServerLevel level, BlockPos outlet, Direction face,
            IFluidHandler source, FluidStack batch) {
        BlockPos pipe = outlet.relative(face);
        if (batch.isEmpty() || !level.isLoaded(pipe)) return Optional.empty();
        FluidPipeNetwork network = FluidNetworkScanner.scan(level, pipe);
        if (network == null) return Optional.empty();
        return Optional.ofNullable(network.pushExact(source, outlet, pipe, outlet.getY(), batch));
    }
}
```

| Signature | Calling Convention |
| --- | --- |
| `scan(Level, BlockPos): FluidPipeNetwork` | The seed must be a pipe, pump, or control valve position. Passing the container's own position usually returns `null`. |
| `heightDeltaToHighestPeer(Level, BlockPos): Integer` | Returns the highest other endpoint's equivalent height minus your own (may be negative). Returns `null` if there are no peer endpoints on the network, no cached world data, or if called on the client. |
| `speedForHeightDiff(int): int` | Returns `0` for non-positive height differences; otherwise computes `heightDiff * heightRate()` clamped to `maxSpeed()`, in mB/t. Pass only actual height differences. |
| `pushExact(source, sourcePos, entryPipePos, sourceEffectiveHeight, fluid): BlockPos` | Simulates source and target, requiring a strictly lower, reachable target that can accept the full amount; returns the target position on success or `null` on failure. Attempts rollback if the executed amount differs from simulation. |
| `pushFromExternalSource(handler, pos, entryPipePos, sourceEffectiveHeight): void` | External pumping devices drain fluid using normal distribution logic; check your own inventory change when verifying the actual delivered amount. |
| `ValveState.resetBudget()`, `allows(FluidStack)`, `remaining()`, `consume(int)` | Resets to the current tick's effective flow, checks filtering, reads remaining quota, and deducts a non-negative passed amount. Exact pushing checks the path without deducting the valve's tick budget. |
