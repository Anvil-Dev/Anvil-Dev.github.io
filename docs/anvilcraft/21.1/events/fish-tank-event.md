# FishTankEvent

给鱼缸增加周期处理时，监听 `ServerTick`。即使鱼缸里没有熔岩也会收到，且此时本体尚未修复物品。`EntityInside` 在客户端判断之前发布，写世界前要先判断逻辑侧。已点燃的鱼缸通过 `FluidDamage` 读取最后的伤害值，初值为 `4.0F`。普通熔岩的 `lavaHurt()` 走另一条路径。

给地图内已经点燃的鱼缸统一设置 2 点伤害，可以订阅游戏总线。这个监听器只影响发布事件的伤害路径。

```java
package dev.example.tanks;

import dev.dubhe.anvilcraft.api.event.FishTankEvent;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = "sandstone_press")
public final class FishTankDamage {
    @SubscribeEvent
    public static void onFluidDamage(FishTankEvent.FluidDamage event) {
        event.setDamage(2.0F);
    }
}
```

该组事件定义在 [`FishTankEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `FishTankEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `FishTankEvent.ServerTick` | [`FishTankBlockEntity:386`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L386) |
| `FishTankEvent.EntityInside` | [`FishTankBlock:190`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L190) |
| `FishTankEvent.FluidDamage` | [`FishTankBlockEntity:994`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L994) |

## 参数与事件状态

- [`FishTankEvent`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent)
- [`FishTankEvent.EntityInside`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent-entityinside)
- [`FishTankEvent.FluidDamage`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent-fluiddamage)
- [`FishTankEvent.ServerTick`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent-servertick)
