# Locating Random Tick Execution Sites

Normal chunk loading and maintaining random ticks are separate callback entrypoints. Check the respective roles of the current server level, player, and chunk maps in queries.

## Example in Source

Take `ServerLifecycleEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.StoragePortManager;
import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import dev.dubhe.anvilcraft.api.hammer.HammerManager;
import dev.dubhe.anvilcraft.api.heat.HeaterManager;
import dev.dubhe.anvilcraft.api.heat.collector.HeatCollectorManager;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import dev.dubhe.anvilcraft.api.sound.SoundHelper;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.api.world.load.RandomChuckTickLoadManager;
import dev.dubhe.anvilcraft.block.RedstoneWireNetworkManager;
import dev.dubhe.anvilcraft.init.ModHammerInits;
import dev.dubhe.anvilcraft.recipe.anvil.cache.RecipeCaches;
import dev.dubhe.anvilcraft.rpc.StorageServerStub;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.server.ServerStartedEvent;
import net.neoforged.neoforge.event.server.ServerStoppedEvent;
import net.neoforged.neoforge.event.server.ServerStoppingEvent;
import net.neoforged.neoforge.event.tick.ServerTickEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class ServerLifecycleEventListener {
    @SubscribeEvent
    public static void onServerStarted(ServerStartedEvent event) {
        ModHammerInits.init();
        HammerManager.register();
        LevelLoadManager.notifyServerStarted();
    }

    @SubscribeEvent
    public static void onTick(ServerTickEvent.Pre event) {
        PowerGrid.tickGrid();
        FluidNetworkManager.INSTANCE.tick();
        HeaterManager.tickAll();
        HeatCollectorManager.tickAll();
        RandomChuckTickLoadManager.tick();
    }

    @SubscribeEvent
    public static void onTick(ServerTickEvent.Post event) {
        // Run at the end of the tick to continue processing wire updates beyond a single convergence pass,
        // ensuring all other redstone neighbor events in this tick have been enqueued.
        RedstoneWireNetworkManager.tick();
    }

    @SubscribeEvent
    public static void onServerStopped(ServerStoppedEvent event) {
        PowerGrid.isServerClosing = false;
        PowerGrid.clear();
        HeatCollectorManager.clear();
        FluidNetworkManager.INSTANCE.clear();
        RecipeCaches.unload();
        SoundHelper.INSTANCE.clear();
        StorageServerStub.clear();
        StoragePortManager.clear();
    }

    @SubscribeEvent
    public static void onServerStopping(ServerStoppingEvent event) {
        PowerGrid.isServerClosing = true;
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java)

- [`LevelLoadManager` · Line 121](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java#L121)
- [`LoadChuckData` · Line 81](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChuckData.java#L81)
- [`ServerLifecycleEventListener` · Line 39](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L39)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `RandomChuckTickLoadManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/RandomChuckTickLoadManager.java) |
