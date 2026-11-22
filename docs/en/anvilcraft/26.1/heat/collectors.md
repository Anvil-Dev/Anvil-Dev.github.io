# Adding Collector Heat Sources

To let heat collectors draw heat from your add-on mod's blocks, register a heat source rule with `HeatCollectorManager` during common initialization. The example below makes a lit redstone lamp provide 3 heat upon settlement. Whether the lamp is lit is determined by its block state, and collection does not turn the lamp off. Put `register` in the common setup event's main-thread work queue and call it only once.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.heat.collector.HeatCollectorManager;
import dev.dubhe.anvilcraft.api.heat.collector.HeatSourceEntry;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;

public final class LampHeatSource {
    public static void register() {
        HeatCollectorManager.registerEntry(HeatSourceEntry.predicateAlways(3, state ->
            state.is(Blocks.REDSTONE_LAMP) && state.getValue(BlockStateProperties.LIT)));
    }
}
```

| Signature | Parameters, Return & Timing |
| --- | --- |
| `simple(int charge, Block input, Block output)` | Matches the input block and grants `charge` per collection; once the state transform interval is reached, replaces it with the output block's default state. |
| `predicate(charge, predicate, transformer)` | Tests the state with a predicate and returns a new state for transformation. Use the transformer to preserve properties such as facing. |
| `predicateAlways(charge, predicate)`, `forever(charge, block)` | The former preserves the original state on transform; the latter matches the specified block with a transform period of `Integer.MAX_VALUE`. |
| `accepts(BlockState): int`, `getEntry(BlockState): Optional<HeatSourceEntry>` | Collectors pick the first positive-heat rule in registration order. Avoid broad rules matching before more specific states. |
| `timeToTransform(): int`, `transform(BlockState): BlockState` | Default period is 40 game ticks; transformation depends on whether world time is divisible by the period and collection settlement must run on that tick. Custom periods must be positive. |
| `IHeatCollector.inputHeat(int): int` | Returns the remainder not accepted by this collector to pass to the next collector. `0` means all heat has been distributed. |
| `addHeatCollector / removeHeatCollector`, `addInfiniteCollector / removeInfiniteCollector` | Parameters are position and level in order. The manager re-checks positions against the two built-in block entity types; merely implementing the interface does not make a block scanned automatically. |
| `checkWhenPlaceCollector(ctx, pos, level)`, `checkWhenPlaceInfiniteCollector(ctx, pos, level)` | Checks nearby collectors on placement, shows a hint to the player on distance conflict, and registers the position. Callers cannot cancel placement via these void methods. |
| `remove(Level)`, `clear()` | Clears runtime managers on dimension unload and server stop. Registered heat source rules exist independently of these instances. |
