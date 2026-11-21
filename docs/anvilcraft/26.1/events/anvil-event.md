# AnvilEvent

该组事件定义在 [`AnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `AnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AnvilEvent.OnLand` | [`GiantAnvilBlock:292`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L292)、[`FallingSpectralBlockEntity:105`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L105)、[`AnvilHammerItem:197`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/AnvilHammerItem.java#L197)、[`FallingBlockEntityMixin:420`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L420) |
| `AnvilEvent.CollisionBlock` | [`EntityMixin:308`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L308) |
| `AnvilEvent.GiantOnLand` | [`GiantAnvilBlock:288`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L288) |
| `AnvilEvent.HurtEntity` | [`FallingSpectralBlockEntity:271`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L271)、[`FallingBlockEntityMixin:461`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L461) |

## 参数与事件状态

- [`AnvilEvent`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent)
- [`AnvilEvent.CollisionBlock`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-collisionblock)
- [`AnvilEvent.GiantOnLand`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-giantonland)
- [`AnvilEvent.HurtEntity`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-hurtentity)
- [`AnvilEvent.OnLand`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-onland)
