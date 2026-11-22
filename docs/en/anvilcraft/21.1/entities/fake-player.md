# Creating Player Action Contexts for Machines

When a machine needs to invoke placement, mining, or attack logic with player semantics, choose the fake player implementation for that operation. Check the corresponding factory's call sites to determine the target server level and item stack.

## Example in Source

Take `LevelEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.SpawningManager;
import dev.dubhe.anvilcraft.api.chargecollector.ChargeCollectorManager;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeBlockPlacer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeDestroyer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeKiller;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakePlayers;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.RedstoneWireClientPowerCache;
import dev.dubhe.anvilcraft.block.RedstoneWireNetworkManager;
import dev.dubhe.anvilcraft.block.entity.AccelerationRingBlockEntity;
import dev.dubhe.anvilcraft.block.entity.DeflectionRingBlockEntity;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.Level;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.level.ChunkEvent;
import net.neoforged.neoforge.event.level.LevelEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class LevelEventListener {

    @SubscribeEvent
    public static void onChunkLoad(ChunkEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            // Network cache is not persisted; rebuild seeds from wires when chunks enter server memory.
            RedstoneWireNetworkManager.chunkLoaded(serverLevel, event.getChunk());
        }
    }

    @SubscribeEvent
    public static void onChunkUnload(ChunkEvent.Unload event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            // Proactively tear down cross-chunk caches so the network does not retain unloaded nodes or phantom signals.
            RedstoneWireNetworkManager.chunkUnloaded(serverLevel, event.getChunk().getPos());
        } else if (event.getLevel() instanceof Level level) {
            RedstoneWireClientPowerCache.clearChunk(level, event.getChunk().getPos());
        }
    }

    /**
     * Level load event
     */
    @SubscribeEvent
    public static void onLevelLoad(LevelEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel) {
            AnvilCraftFakePlayers.blockPlacer = new AnvilCraftFakeBlockPlacer();
            AnvilCraftFakePlayers.killer = new AnvilCraftFakeKiller();
            AnvilCraftFakePlayers.destroyer = new AnvilCraftFakeDestroyer();
        }
    }

    /**
     * Level unload event
     */
    @SubscribeEvent
    public static void onLevelUnload(LevelEvent.Unload event) {
        if (event.getLevel() instanceof Level level) {
            AccelerationRingBlockEntity.clear(level);
            ChargeCollectorManager.clear(level);
            DeflectionRingBlockEntity.clear(level);
            SpawningManager.clear(level);
            RedstoneWireClientPowerCache.clear(level);
        }
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            AnvilCraftFakePlayers.clear(serverLevel);
            LevelLoadManager.removeAll(serverLevel);
            // LEVELS holds strong references by ServerLevel; clear on level unload to release the entire topology cache.
            RedstoneWireNetworkManager.clear(serverLevel);
        }
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java)

- [`BlockDevourerBlock` · Line 256](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L256)
- [`BlockPlacerBlock` · Line 289](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L289)
- [`HeliostatsBlockEntity` · Line 146](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/HeliostatsBlockEntity.java#L146)
- [`CompositeBlockPlacement` · Line 165](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L165)
- [`LevelEventListener` · Line 49](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L49)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `AnvilCraftFakePlayers` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java) |
| `AnvilCraftFakeBlockPlacer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java) |
| `AnvilCraftFakeDestroyer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java) |
