# FishTankEvent

该组事件定义在 [`FishTankEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `FishTankEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `FishTankEvent.ServerTick` | [`FishTankBlockEntity:345`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L345) |
| `FishTankEvent.EntityInside` | [`FishTankBlock:220`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L220) |
| `FishTankEvent.FluidDamage` | [`FishTankBlockEntity:1064`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L1064) |

## 参数与事件状态

- [`FishTankEvent`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent)
- [`FishTankEvent.EntityInside`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent-entityinside)
- [`FishTankEvent.FluidDamage`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent-fluiddamage)
- [`FishTankEvent.ServerTick`](../api/dev-dubhe-anvilcraft-api-event-1#fishtankevent-servertick)
