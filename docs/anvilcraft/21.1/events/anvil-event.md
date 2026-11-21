# AnvilEvent

该组事件定义在 [`AnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `AnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AnvilEvent.OnLand` | [`GiantAnvilBlock:302`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L302)、[`FallingSpectralBlockEntity:101`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L101)、[`AnvilHammerItem:212`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L212)、[`FallingBlockEntityMixin:436`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L436) |
| `AnvilEvent.CollisionBlock` | [`EntityMixin:360`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L360) |
| `AnvilEvent.GiantOnLand` | [`GiantAnvilBlock:298`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L298) |
| `AnvilEvent.BeforeInWorldRecipe` | [`AnvilEventListener:125`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L125) |
| `AnvilEvent.AfterInWorldRecipe` | [`AnvilEventListener:153`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L153) |
| `AnvilEvent.HurtEntity` | [`FallingSpectralBlockEntity:261`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L261)、[`FallingBlockEntityMixin:471`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L471) |

## 参数与事件状态

- [`AnvilEvent`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent)
- [`AnvilEvent.AfterInWorldRecipe`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-afterinworldrecipe)
- [`AnvilEvent.BeforeInWorldRecipe`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-beforeinworldrecipe)
- [`AnvilEvent.CollisionBlock`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-collisionblock)
- [`AnvilEvent.GiantOnLand`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-giantonland)
- [`AnvilEvent.HurtEntity`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-hurtentity)
- [`AnvilEvent.OnLand`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-onland)
