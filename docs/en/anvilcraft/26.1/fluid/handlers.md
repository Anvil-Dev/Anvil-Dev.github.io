# Infinite Sources and Transactional Tanks

Storage ports query other endpoints in the same pipe network for infinite sources. `FluidResource` stores the fluid and components, while `FluidStack` also carries an amount. `findInfiniteFluid` accepts a resource as a preference and returns a stack. Machines requiring a specific fluid must verify the result, as the network may still select another fluid when the preference is not found.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.transfer.fluid.FluidResource;

public final class InfiniteInlet {
    public static boolean supplies(ServerLevel level, BlockPos inlet, FluidResource required) {
        if (required.isEmpty()) return false;
        FluidStack offered = FluidNetworkManager.INSTANCE.findInfiniteFluid(level, inlet, required);
        return !offered.isEmpty() && required.equals(FluidResource.of(offered));
    }
}
```

| Type & Entrypoint | Timing & Boundaries |
| --- | --- |
| `InfiniteFluidSource.getInfiniteFluids(): List<FluidStack>` | Implemented on endpoint handlers; returns copies of fluids currently available infinitely, or an empty list if none. The manager also checks valve reachability. |
| `InfiniteGasPressureSource.isSupplyingInfiniteGasPressure(): boolean` | When active, participates in diffusion at maximum gas pressure. Finite stock inside the container is still consumed. |
| `GasDisplayFillProvider.gasDisplayFill(FluidStack): float` | Provides the display fill ratio (`0` to `1`) for glass pipes; returns `0` when the gas is absent. |
| `InfinityFluidTank(capacity[, infinity])`, `InfinityFluidTank(size or stacks, capacity, infinity)` | Creates one or more fluid slots. In infinite mode, slot capacity is `Integer.MAX_VALUE`, and when the first slot is non-empty its resource is exposed as an infinite source. Slot-based `extract` in infinite mode currently only checks whether the slot is non-empty; validate the resource before extracting by type. |
| `CreativeFluidHandler.replaceStacks(List<FluidStack>)` | Configures the creative tank template, copying up to the existing slot count. Once configured, `extract` supplies the requested amount only for resources matching the template; `insert` accepts and discards non-empty inputs. |
| `VoidFluidHandler.INSTANCE` | Single-slot void sink whose reported stock is always `0`. Inserts discard input; extracts return `0`. |
| `FluidStackResourceHandler([int capacity])` | Single-slot transactional tank. The no-arg constructor uses one bucket of capacity; mutations participate in the passed `TransactionContext`. |
| `CapacityModifiableFluidHandler.setCapacity(int)` | Rewrites slot capacity directly; callers must handle existing stock after shrinking, as the method itself does not truncate. |
| `IFluidResourceHandlerHolder.getFluidHandler(): ResourceHandler<FluidResource>` | Gets the holder's handler. Endpoints must also expose the corresponding NeoForge capability on the appropriate faces. |
