# Receiving Player Interactions from Ports

Port blocks and network packets dispatch clicks through `IStoragePort`. Primary click handles immediate extraction, while secondary click can handle marking, insertion, or fluids. Holding left-click triggers repeated checks, so interceptors must be safe to call repeatedly.

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

- [`AbstractStoragePortBlock` · Line 95](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L95)
- [`StorageFluidPortBlockEntity` · Line 499](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L499)
- [`StoragePortBlockEntity` · Line 338](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StoragePortBlockEntity.java#L338)
- [`StoragePortConsolidatorBlockEntity` · Line 216](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StoragePortConsolidatorBlockEntity.java#L216)
- [`LinkedStorageItems` · Line 30](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/unlimited/LinkedStorageItems.java#L30)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IStoragePort` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java) |
| `StoragePortManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java) |
