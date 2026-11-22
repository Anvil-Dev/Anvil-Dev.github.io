# Creating Player Action Contexts for Machines

When a machine needs to invoke placement, mining, or attack logic with player semantics, choose the fake player implementation for that operation. Check the corresponding factory's call sites to determine the target server level and item stack.

## Example in Source

Take `LevelEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.StorageComparatorManager;
import dev.dubhe.anvilcraft.api.TerminalSourceManager;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeBlockPlacer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeDestroyer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeKiller;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakePlayers;
import dev.dubhe.anvilcraft.api.heat.collector.HeatCollectorManager;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.RedstoneWireClientPowerCache;
import dev.dubhe.anvilcraft.block.RedstoneWireNetworkManager;
import dev.dubhe.anvilcraft.block.entity.AccelerationRingBlockEntity;
import dev.dubhe.anvilcraft.block.entity.DeflectionRingBlockEntity;
import dev.dubhe.anvilcraft.util.dummy.DummyArmadillo;
import dev.dubhe.anvilcraft.util.dummy.DummyCat;
import dev.dubhe.anvilcraft.util.dummy.DummyWolf;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.level.ChunkEvent;
import net.neoforged.neoforge.event.level.LevelEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class LevelEventListener {

    @SubscribeEvent
    public static void onChunkLoad(ChunkEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            RedstoneWireNetworkManager.chunkLoaded(serverLevel, event.getChunk());
        }
    }

    @SubscribeEvent
    public static void onChunkUnload(ChunkEvent.Unload event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            RedstoneWireNetworkManager.chunkUnloaded(serverLevel, event.getChunk().getPos());
        } else if (event.getLevel() instanceof Level level) {
            RedstoneWireClientPowerCache.clearChunk(level, event.getChunk().getPos());
        }
    }

    /// World load event
    @SubscribeEvent
    public static void onLevelLoad(LevelEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel) {
            AnvilCraftFakePlayers.blockPlacer = new AnvilCraftFakeBlockPlacer();
            AnvilCraftFakePlayers.killer = new AnvilCraftFakeKiller();
            AnvilCraftFakePlayers.destroyer = new AnvilCraftFakeDestroyer();
        }
    }

    /// World unload event
    @SubscribeEvent
    public static void onLevelUnload(LevelEvent.Unload event) {
        LevelAccessor accessor = event.getLevel();
        if (accessor instanceof Level level) {
            AccelerationRingBlockEntity.clear(level);
            DeflectionRingBlockEntity.clear(level);
            RedstoneWireClientPowerCache.clear(level);
            HeatCollectorManager.remove(level);
            DummyArmadillo.clear(level);
            DummyCat.clear(level);
            DummyWolf.clear(level);
        }
        if (accessor instanceof ServerLevel serverLevel) {
            AnvilCraftFakePlayers.clear(serverLevel);
            LevelLoadManager.removeAll(serverLevel);
            // LEVELS holds strong references to ServerLevel instances. Clear the topology cache when the level unloads.
            RedstoneWireNetworkManager.clear(serverLevel);
            TerminalSourceManager.clear(serverLevel);
            StorageComparatorManager.clear(serverLevel);
        }
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java)

- [`AnvilCraftFakeKiller` · Line 85](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L85)
- [`HeliostatsBlockEntity` · Line 137](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/HeliostatsBlockEntity.java#L137)
- [`CompositeBlockPlacement` · Line 159](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L159)
- [`BlockDevourerBlock` · Line 288](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L288)
- [`BlockPlacerBlock` · Line 293](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L293)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `AnvilCraftFakePlayers` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java) |
| `AnvilCraftFakeBlockPlacer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java) |
| `AnvilCraftFakeDestroyer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java) |

<!-- source-guide -->
