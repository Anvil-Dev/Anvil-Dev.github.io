# GiantAnvilEvent

该组事件定义在 [`GiantAnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `GiantAnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `GiantAnvilEvent.Multiblock` | [`GiantAnvilLandingEventListener:28`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) |
| `GiantAnvilEvent.BlockTick` | [`GiantAnvilBlock:327`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L327) |
| `GiantAnvilEvent.FallingTick` | [`FallingGiantAnvilEntity:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L83) |

## 参数与事件状态

- [`GiantAnvilEvent`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent)
- [`GiantAnvilEvent.BlockTick`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-blocktick)
- [`GiantAnvilEvent.FallingTick`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-fallingtick)
- [`GiantAnvilEvent.Multiblock`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-multiblock)
