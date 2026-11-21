# SlidingBlockEvent

该组事件定义在 [`SlidingBlockEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `SlidingBlockEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `SlidingBlockEvent.Start` | [`SlidingBlockEntity:75`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L75) |
| `SlidingBlockEvent.Stop` | [`SlidingBlockEntity:165`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L165) |

## 参数与事件状态

- [`SlidingBlockEvent`](../api/dev-dubhe-anvilcraft-api-event-2#slidingblockevent)
- [`SlidingBlockEvent.Start`](../api/dev-dubhe-anvilcraft-api-event-2#slidingblockevent-start)
- [`SlidingBlockEvent.Stop`](../api/dev-dubhe-anvilcraft-api-event-2#slidingblockevent-stop)
