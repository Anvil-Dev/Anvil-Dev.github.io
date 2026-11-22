# Adding Collector Heat Sources

To allow heat collectors to draw heat from your add-on mod's blocks, register a heat source rule with `HeatCollectorManager` during common initialization. The example below lets a lit redstone lamp provide 3 heat during settlement. Whether the lamp is lit is determined by block state, and collection does not turn the lamp off. Enqueue `register` on the main thread work queue in the common setup event and call it only once.

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

| Signature | Parameters, Return Value & Timing |
| --- | --- |
| `simple(int charge, Block input, Block output)` | Matches the input block and yields `charge` per collection; once the state-transform interval is reached, replaces it with the output block's default state. |
| `predicate(charge, predicate, transformer)` | Matches state with a predicate and returns a new state for transformation. Transformers can preserve properties such as facing. |
| `predicateAlways(charge, predicate)`, `forever(charge, block)` | The former preserves the original state on transformation; the latter matches the given block with an `Integer.MAX_VALUE` transform period. |
| `accepts(BlockState): int`, `getEntry(BlockState): Optional<HeatSourceEntry>` | Collectors pick the first positive-heat rule in registration order. Avoid letting broad rules match before more specific states. |
| `timeToTransform(): int`, `transform(BlockState): BlockState` | Default period is 40 game ticks; transformation depends on whether world time is divisible by the period and collection settlement runs on that tick. Custom periods must be positive. |
| `IHeatCollector.inputHeat(int): int` | Returns the remainder not accepted by this collector to pass to the next collector. `0` means all heat for this round has been distributed. |
| `addHeatCollector / removeHeatCollector`, `addInfiniteCollector / removeInfiniteCollector` | Parameters are position and level in order. The manager re-verifies positions against those two built-in block entity types; implementing the interface alone does not automatically register a block for scanning. |
