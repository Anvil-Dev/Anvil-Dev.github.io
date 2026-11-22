# Registering Heaters and Heatable Blocks

`HeaterInfo` describes which device is still producing heat, where heat is delivered, and how many tiers each target contributes. `HeaterManager` stores which heat-producing devices currently exist in the dimension. Registering a rule alone does not make the manager search the world block by block.

The example below marks the block directly above a lit blast furnace as a heated position. Load this rule during initialization; call `lit` when the server block loads or ignites, and `removed` when it extinguishes, unloads, or is replaced. Using the same static rule object ensures the original registration can be removed.

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

Heatable materials are registered by family: call `HeatRecorder.registerHeatables(id)` with an `Identifier` under your own namespace, then add registered blocks tier by tier from `normal` to `overheated`. Every tier must be added to the `anvilcraft:heatable_blocks` block tag, otherwise the manager skips it directly. Note that heating up switches directly to the target block's default state, so plan ahead for how original facing, properties, and block entity data should be handled when designing blocks. If high-temperature tiers need duration and cooling logic, pair them with a corresponding `HeatableBlockEntity`.

| Entrypoint | Parameters & Calling Convention |
| --- | --- |
| `HeaterInfo.blockState(block or tag, property, expectValue, posesGetter, line[, countGetter])` | Checks block and property value at loaded positions and gets target coordinates. Default count is `1`. The single-block shorthand calls `getValue`, so the passed property must exist on that block. |
| `HeaterInfo.blockEntity(type, posesGetter, line)` | Reads loaded block entities by entity type. The overload with `countGetter` allows one device to contribute multiple counts; the overload with `tierOffsetGetter` attenuates by target position. |
| `new HeaterInfo<>(getter, posesGetter, tierOffsetGetter, line, countGetter)` | Canonical constructor when customizing all values. Returning empty from `getter` means there is no valid producer at that position. |
| `HeaterManager.addHeatableBlock(pos, level)` | Adds a heatable position to subsequent processing; heated block entities' server load events already do this registration. |
| `RegisterHelper.normal / heated / redhot / glowing / incandescent / overheated` | Each tier accepts an instance, `Supplier`, and an optional 3-arg level predicate. `Supplier` is evaluated immediately when called, so blocks must already be registered. |
| `customTier(tier, block[, predicate])` | Tier, default transform target, and optional world predicate. Returns the helper itself. Register each tier once in contiguous order, as some lookups index lists by enum ordinal. |
| `HeatRecorder.getEntry(id, tier)`, `getHeatableBlock(id, tier)` | Queries a tier of a registered family. Returns empty if a tier is missing within that family; passing a completely unknown family ID directly may throw `NullPointerException`, so look up the family from the current state via `getId` first. |
