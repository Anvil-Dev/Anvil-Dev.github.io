# 定位随机刻的执行位置

常规加载与维持随机刻是不同的回调入口。查当前服务端世界、玩家和区块映射在查询中各自的作用。

## 源码中的用例

以本分支的 `ServerLifecycleEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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
        // 放在 tick 末尾继续处理超过单次收敛轮数的导线更新，确保本 tick 的其他红石邻居事件已经全部入队。
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java)

- [`LevelLoadManager` · 第 121 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java#L121)
- [`LoadChuckData` · 第 81 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChuckData.java#L81)
- [`ServerLifecycleEventListener` · 第 39 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L39)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `RandomChuckTickLoadManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/RandomChuckTickLoadManager.java) |
