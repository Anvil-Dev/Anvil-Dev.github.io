# Tracking Load Sources per Server Level

Distinguish dimension, block coordinates, and chunk coordinates when recording load sources. After removing a source, check whether the chunk is still kept loaded by other sources to avoid releasing it prematurely.

## Example in Source

Take `ServerBlockEntityEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

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
        // Register only candidate positions in the load callback; capability proxies may look up across chunks
        // and must wait until chunk loading completes before probing.
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
        // When replacing a block, a new entity may already occupy this position;
        // avoid having the old entity's unload callback delete the new container registration.
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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java)

- [`OverseerBlockEntity` · Line 59](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/OverseerBlockEntity.java#L59)
- [`WormholeStabilizerHandler` · Line 236](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L236)
- [`LevelEventListener` · Line 69](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L69)
- [`PlayerEventListener` · Line 201](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L201)
- [`ServerBlockEntityEventListener` · Line 57](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L57)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `LevelLoadManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java) |
| `LoadChuckData` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChuckData.java) |
