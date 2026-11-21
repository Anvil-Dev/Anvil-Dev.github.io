# SlidingBlockEvent

观察一段方块开始或结束滑动时分别订阅 `Start` 和 `Stop`。`Start` 由实体构造流程发出。服务端停止流程先把方块放回世界，再发布 `Stop`，最后丢弃滑动实体。若需检查实际落点，放在 `Stop` 读取。[滑动方块](../sliding/)

该组事件定义在 [`SlidingBlockEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `SlidingBlockEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `SlidingBlockEvent.Start` | [`SlidingBlockEntity:76`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L76) |
| `SlidingBlockEvent.Stop` | [`SlidingBlockEntity:164`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L164) |

## 参数与事件状态

- [`SlidingBlockEvent`](../api/dev-dubhe-anvilcraft-api-event-2#slidingblockevent)
- [`SlidingBlockEvent.Start`](../api/dev-dubhe-anvilcraft-api-event-2#slidingblockevent-start)
- [`SlidingBlockEvent.Stop`](../api/dev-dubhe-anvilcraft-api-event-2#slidingblockevent-stop)
