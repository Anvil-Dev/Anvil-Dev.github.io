# BlockEntityEvent

缓存某个位置的能力或网络节点时，在 `ServerLoad` 建立索引，在 `ServerUnload` 按实例移除。区块代码确认位置上实际注册的是该实例后才广播加载。卸载有多个入口，监听器宜允许重复清理；同坐标出现新实例时，要避免清掉后来者。

该组事件定义在 [`BlockEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `BlockEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `BlockEntityEvent.ServerLoad` | [`LevelChunkMixin:47`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L47) |
| `BlockEntityEvent.ServerUnload` | [`LevelChunkMixin:60`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L60)、[`LevelChunkMixin:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L79)、[`LevelChunkMixin:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L92) |

## 参数与事件状态

- [`BlockEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent)
- [`BlockEntityEvent.ServerLoad`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverload)
- [`BlockEntityEvent.ServerUnload`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverunload)
