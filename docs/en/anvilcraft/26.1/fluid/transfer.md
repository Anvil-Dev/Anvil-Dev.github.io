# Flow Rate, Head, and Exact Push

Normal liquids flow from containers with higher effective height to lower ones, filling the lowest group of targets first; multiple targets at the same height split the flow. Effective height includes the head of working pumps along the path. When a pump is overloaded, disabled by redstone, or unpowered, pipe segment connectivity remains, but head and active one-way constraints are lost. Gases diffuse according to pressure differences caused by fill ratio and pump pressure.

When you need "deliver a full batch or do nothing", use `pushExact` on the server. The example below suits low-frequency operations such as clicking an outlet with a handheld device; each active scan traverses connected pipe segments, so large machines should not re-scan every game tick. Both source and target must follow the NeoForge transaction protocol. Actual extraction and insertion run in the same root transaction and commit only when both sides meet the requested amount.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkScanner;
import dev.dubhe.anvilcraft.api.fluid.network.FluidPipeNetwork;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.transfer.ResourceHandler;
import net.neoforged.neoforge.transfer.fluid.FluidResource;
import java.util.Optional;

public final class BatchOutlet {
    public static Optional<BlockPos> deliver(ServerLevel level, BlockPos outlet, Direction face,
            ResourceHandler<FluidResource> source, FluidStack batch) {
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
| `scan(Level, BlockPos): FluidPipeNetwork` | Seed must be a pipe, pump, or control valve position. Passing the container's own position usually returns `null`. |
| `heightDeltaToHighestPeer(Level, BlockPos): Integer` | Returns the highest other endpoint's effective height minus your own (may be negative). Returns `null` if there is no peer in the same network, no cached world data, or called on the client. |
| `speedForHeightDiff(int): int` | Non-positive height difference returns `0`; otherwise computes `heightDiff * heightRate()` capped at `maxSpeed()`, in mB/t. Pass only the actual height difference. |
| `pushExact(source, sourcePos, entryPipePos, sourceEffectiveHeight, fluid): BlockPos` | Simulates and checks source and target, requiring a strictly lower, reachable target that can accept the full amount; returns target position on success or `null` on failure. If actual insertion or extraction is insufficient, closes the uncommitted transaction to revert changes. |
| `pushFromExternalSource(handler, pos, entryPipePos, sourceEffectiveHeight): void` | External pumping devices drain fluid using normal distribution logic; inspect your own inventory changes to verify actual delivered amounts. |
| `ValveState.resetBudget()`, `allows(FluidResource)`, `remaining()`, `consume(int)` | Resets to this tick's effective flow, queries filters, reads remaining budget, and deducts a non-negative passed amount. Exact push checks the path without deducting from the valve's tick budget. |
