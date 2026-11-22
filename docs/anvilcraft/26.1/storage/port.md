# 从端口接收玩家交互

端口方块和网络包经由 IStoragePort 分发点击。主键用于即时取出，副键可处理标记、插入或流体。按住左键会重复检测，拦截器要能重复调用。

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

- [`StorageFluidPortBlockEntity` · 第 442 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L442)
- [`StoragePortBlockEntity` · 第 274 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/StoragePortBlockEntity.java#L274)
- [`StoragePortConsolidatorBlockEntity` · 第 215 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/StoragePortConsolidatorBlockEntity.java#L215)
- [`AbstractStoragePortBlock` · 第 95 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/AbstractStoragePortBlock.java#L95)
- [`LinkedStorageItemHandler` · 第 28 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/unlimited/LinkedStorageItemHandler.java#L28)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `IStoragePort` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java) |
| `StoragePortManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java) |

<!-- source-guide -->
