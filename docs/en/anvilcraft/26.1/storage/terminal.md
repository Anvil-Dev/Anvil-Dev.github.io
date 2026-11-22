# Maintaining Storage Sources Visible to Terminals

Visible terminal sources are maintained per dimension. Register the main block position once the block entity is ready, and unregister it upon removal or chunk unload so stale positions do not keep appearing in terminal queries.

## Example in Source

Take `ServerLifecycleEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.StorageComparatorManager;
import dev.dubhe.anvilcraft.api.StoragePortManager;
import dev.dubhe.anvilcraft.api.TerminalSourceManager;
import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import dev.dubhe.anvilcraft.api.hammer.HammerManager;
import dev.dubhe.anvilcraft.api.heat.HeaterManager;
import dev.dubhe.anvilcraft.api.heat.collector.HeatCollectorManager;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import dev.dubhe.anvilcraft.api.sound.SoundHelper;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.RedstoneWireNetworkManager;
import dev.dubhe.anvilcraft.block.entity.ExpCollectorBlockEntity;
import dev.dubhe.anvilcraft.block.entity.ItemCollectorBlockEntity;
import dev.dubhe.anvilcraft.init.ModHammerInits;
import dev.dubhe.anvilcraft.item.weapon.LaserGunItem;
import dev.dubhe.anvilcraft.rpc.BundleLikeServerStub;
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
        ExpCollectorBlockEntity.clearPoachingCollectors();
        ItemCollectorBlockEntity.clearPoachingCollectors();
    }

    @SubscribeEvent
    public static void onTick(ServerTickEvent.Pre event) {
        PowerGrid.tickGrid();
        HeaterManager.tickAll();
        HeatCollectorManager.tickAll();
        FluidNetworkManager.INSTANCE.tick();
    }

    @SubscribeEvent
    public static void onTick(ServerTickEvent.Post event) {
        RedstoneWireNetworkManager.tick();
    }

    @SubscribeEvent
    public static void onServerStopping(ServerStoppingEvent event) {
        PowerGrid.isServerClosing = true;
    }

    @SubscribeEvent
    public static void onServerStopped(ServerStoppedEvent event) {
        StoragePortManager.clear();
        PowerGrid.isServerClosing = false;
        PowerGrid.clear();
        HeatCollectorManager.clear();
        FluidNetworkManager.INSTANCE.clear();
        SoundHelper.INSTANCE.clear();
        StorageServerStub.clear();
        BundleLikeServerStub.clear();
        PlayerBalanceHandler.clear();
        TerminalSourceManager.clear();
        StorageComparatorManager.clear();
        ExpCollectorBlockEntity.clearPoachingCollectors();
        ItemCollectorBlockEntity.clearPoachingCollectors();
        LaserGunItem.clearStates();
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java)

- [`TerminalSessions` · Line 123](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSessions.java#L123)
- [`StorageBlockEntity` · Line 59](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L59)
- [`LevelEventListener` · Line 74](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L74)
- [`ServerLifecycleEventListener` · Line 68](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L68)
- [`StorageServerStub` · Line 1985](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L1985)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `TerminalSourceManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java) |
| `StorageComparatorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java) |

<!-- source-guide -->
