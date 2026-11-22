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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java)

- [`LoadChunkData` · Line 184](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChunkData.java#L184)
- [`OverseerBlockEntity` · Line 53](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/OverseerBlockEntity.java#L53)
- [`WormholeStabilizerHandler` · Line 262](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L262)
- [`OverseerCommand` · Line 74](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L74)
- [`LevelEventListener` · Line 71](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L71)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `LevelLoadManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java) |

<!-- source-guide -->
