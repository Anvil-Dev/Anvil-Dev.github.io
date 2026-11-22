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
import dev.dubhe.anvilcraft.api.fluid.IFluidHandlerHolder;
import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import dev.dubhe.anvilcraft.api.heat.HeaterManager;
import dev.dubhe.anvilcraft.api.power.IPowerComponent;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.entity.ChargeCollectorBlockEntity;
import dev.dubhe.anvilcraft.block.entity.OverseerBlockEntity;
import dev.dubhe.anvilcraft.block.entity.heatable.HeatableBlockEntity;
import dev.dubhe.anvilcraft.util.OverseerUtil;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class ServerBlockEntityEventListener {
    @SubscribeEvent
    public static void onLoad(BlockEntityEvent.ServerLoad event) {
        // 加载回调中只登记候选位置；能力代理可能跨区块回查，必须等区块加载完成后再检测。
        if (!(event.getEntity() instanceof IFluidHandlerHolder)) {
            FluidNetworkManager.INSTANCE.addContainerAfterLoad(
                event.getLevel(), event.getEntity().getBlockPos()
            );
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
        // 方块替换时新实体可能已占据该位置，避免旧实体卸载回调删掉新容器登记。
        BlockEntity current = event.getLevel().getBlockEntity(event.getEntity().getBlockPos());
        if (current == null || current == event.getEntity()) {
            FluidNetworkManager.INSTANCE.removeContainer(event.getLevel(), event.getEntity().getBlockPos());
        }
        if (event.getEntity() instanceof IPowerComponent component) {
            PowerGrid.removeComponent(component);
        }
        if (event.getEntity() instanceof ChargeCollectorBlockEntity chargeCollector) {
            ChargeCollectorManager.removeChargeCollector(event.getLevel(), chargeCollector);
        } else if (event.getEntity() instanceof OverseerBlockEntity overseerBlockEntity) {
            LevelLoadManager.unregister(overseerBlockEntity.getBlockPos(), event.getLevel());
            OverseerUtil.onUnloadOverseer(event.getLevel(), overseerBlockEntity);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java)

- [`OverseerBlockEntity` · 第 59 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/OverseerBlockEntity.java#L59)
- [`WormholeStabilizerHandler` · 第 236 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L236)
- [`LevelEventListener` · 第 69 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L69)
- [`PlayerEventListener` · 第 201 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L201)
- [`ServerBlockEntityEventListener` · 第 57 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L57)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `LevelLoadManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java) |
| `LoadChuckData` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChuckData.java) |
