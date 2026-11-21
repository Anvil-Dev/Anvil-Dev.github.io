# BlockEntityEvent

该组事件定义在 [`BlockEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `BlockEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `BlockEntityEvent.ServerLoad` | [`LevelChunkMixin:47`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L47) |
| `BlockEntityEvent.ServerUnload` | [`LevelChunkMixin:60`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L60)、[`LevelChunkMixin:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L79)、[`LevelChunkMixin:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L92) |

## 参数与事件状态

- [`BlockEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent)
- [`BlockEntityEvent.ServerLoad`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverload)
- [`BlockEntityEvent.ServerUnload`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverunload)
