# FishTankEvent

该组事件定义在 [`FishTankEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

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
