# 维护终端可见的仓储源

终端的可见源按维度维护。方块实体就绪后登记主方块位置，移除或区块卸载时注销，避免让失效位置继续出现在终端查询中。

## 源码中的用例

以本分支的 `ServerLifecycleEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java)

- [`TerminalSessions` · 第 123 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSessions.java#L123)
- [`StorageBlockEntity` · 第 59 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L59)
- [`LevelEventListener` · 第 74 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L74)
- [`ServerLifecycleEventListener` · 第 68 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L68)
- [`StorageServerStub` · 第 1985 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L1985)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `TerminalSourceManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java) |
| `StorageComparatorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java) |

<!-- source-guide -->
