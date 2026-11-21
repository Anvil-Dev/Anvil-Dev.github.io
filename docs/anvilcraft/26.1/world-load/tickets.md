# 按服务器世界追踪加载源

记录加载源时区分维度、方块坐标和区块坐标。移除来源后还要检查该区块是否由其他来源维持，避免提前释放。

## 源码中的用例

以本分支的 `ServerBlockEntityEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.chargecollector.ChargeCollectorManager;
import dev.dubhe.anvilcraft.api.event.BlockEntityEvent;
import dev.dubhe.anvilcraft.api.fluid.IFluidResourceHandlerHolder;
import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import dev.dubhe.anvilcraft.api.heat.HeaterManager;
import dev.dubhe.anvilcraft.api.power.IPowerComponent;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.entity.ChargeCollectorBlockEntity;
import dev.dubhe.anvilcraft.block.entity.OverseerBlockEntity;
import dev.dubhe.anvilcraft.block.entity.heatable.HeatableBlockEntity;
import dev.dubhe.anvilcraft.util.OverseerUtil;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class ServerBlockEntityEventListener {
    @SubscribeEvent
    public static void onLoad(BlockEntityEvent.ServerLoad event) {
        if (!(event.getEntity() instanceof IFluidResourceHandlerHolder)) {
            FluidNetworkManager.INSTANCE.addContainerAfterLoad(event.getLevel(), event.getEntity().getBlockPos());
        }
        if (event.getEntity() instanceof IPowerComponent component) {
            PowerGrid.addComponent(component);
        }
        if (event.getEntity() instanceof ChargeCollectorBlockEntity chargeCollector) {
            ChargeCollectorManager.getInstance(event.getLevel()).addChargeCollector(chargeCollector);
        }
        if (event.getEntity() instanceof HeatableBlockEntity heatable) {
            HeaterManager.addHeatableBlock(heatable.getBlockPos(), event.getLevel());
        }
        if (event.getEntity() instanceof OverseerBlockEntity overseerBlockEntity) {
            OverseerUtil.onLoadOverseer(event.getLevel(), overseerBlockEntity);
        }
    }

    @SubscribeEvent
    public static void onUnload(BlockEntityEvent.ServerUnload event) {
        var current = event.getLevel().getBlockEntity(event.getEntity().getBlockPos());
        if (current == null || current == event.getEntity()) {
            FluidNetworkManager.INSTANCE.removeContainer(event.getLevel(), event.getEntity().getBlockPos());
        }
        if (event.getEntity() instanceof IPowerComponent component) {
            PowerGrid.removeComponent(component);
        }
        if (event.getEntity() instanceof ChargeCollectorBlockEntity chargeCollector) {
            ChargeCollectorManager.getInstance(event.getLevel()).removeChargeCollector(chargeCollector);
        } else if (event.getEntity() instanceof OverseerBlockEntity overseerBlockEntity) {
            LevelLoadManager.unregister(overseerBlockEntity.getBlockPos(), event.getLevel());
            OverseerUtil.onUnloadOverseer(event.getLevel(), overseerBlockEntity);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java)

- [`LoadChunkData` · 第 184 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChunkData.java#L184)
- [`OverseerBlockEntity` · 第 53 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/OverseerBlockEntity.java#L53)
- [`WormholeStabilizerHandler` · 第 262 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L262)
- [`OverseerCommand` · 第 74 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L74)
- [`LevelEventListener` · 第 71 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L71)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `LevelLoadManager` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-world-load#levelloadmanager) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java) |

<!-- source-guide -->
