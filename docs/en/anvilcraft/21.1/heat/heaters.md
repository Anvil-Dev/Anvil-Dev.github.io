# Registering Heaters and Heatable Blocks

`HeaterInfo` describes which device is actively producing heat, where heat is delivered, and how many tiers/counts each target contributes. `HeaterManager` tracks which heat producers currently exist in a dimension. Registering a rule alone does not make the manager scan the world block by block.

The example below marks the block directly above a lit blast furnace as a heated position. Load the rule during initialization; call `lit` when the server block loads or ignites, and `removed` when it extinguishes, unloads, or is replaced. Reusing the same static rule object ensures the original registration can be removed.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.heat.HeatRecorder;
import dev.dubhe.anvilcraft.api.heat.HeatTier;
import dev.dubhe.anvilcraft.api.heat.HeatTierLine;
import dev.dubhe.anvilcraft.api.heat.HeaterInfo;
import dev.dubhe.anvilcraft.api.heat.HeaterManager;
import dev.dubhe.anvilcraft.util.BlockInfo;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import java.util.Set;

public final class FurnaceHeat {
    public static final HeaterInfo<BlockInfo> RULE = HeatRecorder.registerProducerInfo(
        HeaterInfo.blockState(Blocks.BLAST_FURNACE, BlockStateProperties.LIT, true,
            info -> Set.of(info.pos().above()), HeatTierLine.always(HeatTier.HEATED, 40)));

    public static void lit(ServerLevel level, BlockPos pos) {
        HeaterManager.addProducer(pos, level, RULE);
    }

    public static void removed(ServerLevel level, BlockPos pos) {
        HeaterManager.removeProducer(pos, level, RULE);
    }
}
```

Heatable materials are registered by family: call `HeatRecorder.registerHeatables(id)` with your own resource name, then add registered blocks tier by tier from `normal` to `overheated`. Every tier must be added to the `anvilcraft:heatable_blocks` block tag, or the manager will skip it. Note that heating up replaces the block with the target block's default state, so plan ahead when designing blocks for how facing, properties, and block entity data should be handled. If high-temperature tiers need duration and cooling logic, pair them with a `HeatableBlockEntity`.

| Entrypoint | Parameters & Calling Convention |
| --- | --- |
| `HeaterInfo.blockState(block or tag, property, expectValue, posesGetter, line[, countGetter])` | Checks block and property value at loaded positions and collects target coordinates. Default count is `1`. The single-block shorthand calls `getValue`, so the property must exist on that block. |
| `HeaterInfo.blockEntity(type, posesGetter, line)` | Reads loaded block entities by entity type. Overloads with `countGetter` let one device contribute multiple counts; overloads with `tierOffsetGetter` attenuate by target position. |
| `new HeaterInfo<>(getter, posesGetter, tierOffsetGetter, line, countGetter)` | Canonical constructor when customizing all accessors. Returning empty from `getter` means there is no active producer at that position. |
| `HeaterManager.addHeatableBlock(pos, level)` | Adds a heated position to subsequent processing; server load events for heatable block entities already perform this registration. |
| `RegisterHelper.normal / heated / redhot / glowing / incandescent / overheated` | Each tier accepts an instance, a `Supplier`, and an optional 3-argument world predicate. `Supplier`s are evaluated immediately when called, so blocks must already be registered. |
| `customTier(tier, block[, predicate])` | Tier, default target block, and optional world predicate. Returns the helper itself. Register once per tier in contiguous order, as some lookups index the list by enum ordinal. |
| `HeatRecorder.getEntry(id, tier)`, `getHeatableBlock(id, tier)` | Looks up a tier in a registered family. Returns empty if that tier is missing in the family; passing a completely unknown family ID directly can throw `NullPointerException`, so look up the family from the current state via `getId` first. |
