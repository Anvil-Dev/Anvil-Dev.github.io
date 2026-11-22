# Infinite Sources and Special Containers

When a storage port needs to detect that it is connected to an infinite water tank, it can query the pipe network. `preferred` is a preference; if no match is found, it may still return fluid from another reachable infinite source on the same network. Machines that only handle a specific fluid should compare components themselves.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;

public final class InfiniteInlet {
    public static boolean supplies(ServerLevel level, BlockPos inlet, FluidStack required) {
        if (required.isEmpty()) return false;
        FluidStack offered = FluidNetworkManager.INSTANCE.findInfiniteFluid(level, inlet, required);
        return !offered.isEmpty() && FluidStack.isSameFluidSameComponents(offered, required);
    }
}
```

| Type & Entrypoint | Lifecycle & Return Convention |
| --- | --- |
| `InfiniteFluidSource.getInfiniteFluids(): List<FluidStack>` | Implemented on endpoint fluid handlers; returns copies of each fluid currently supplied infinitely. Returns an empty list when infinite conditions are temporarily unmet. |
| `InfiniteGasPressureSource.isSupplyingInfiniteGasPressure(): boolean` | Determines source pressure priority during gas diffusion; finite storage still decrements normally. Can vary with power and output mode. |
| `GasDisplayFillProvider.gasDisplayFill(FluidStack): float` | Provides display fill ratio from `0` to `1` for glass pipes; returns `0` when that gas is absent. |
| `InfinityFluidTank()` | Capacity is `Integer.MAX_VALUE`; `fill` reports accepting all input without altering the template fluid. Non-empty templates allow draining specified amounts. Drain-by-stack checks fluid type; callers with component requirements should compare them themselves. |
| `VoidFluidHandler.INSTANCE` | Always reports one empty slot, accepts and discards all input, and returns an empty stack from both `drain` overloads. Suitable for trash cans. |
| `OnlyDrainFluidTank(int[, Predicate<FluidStack>])` | Always returns `0` to external `fill`. The `@ApiStatus.Internal`-annotated `internalFill` is for the producer side implementing it. |
| `IFluidHandlerHolder.getFluidHandler(): IFluidHandler` | Provides an accessor for objects holding a tank. Connecting external pipes still requires exposing NeoForge's fluid capability on the corresponding faces. |
