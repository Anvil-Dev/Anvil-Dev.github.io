# GuideBookEvent

该组事件定义在 [`GuideBookEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `GuideBookEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `GuideBookEvent.HasGuideBookEvent` | [`ModEventUtil:14`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) |
| `GuideBookEvent.OpenGuideBookEvent` | [`ModEventUtil:18`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) |

## 参数与事件状态

- [`GuideBookEvent`](../api/dev-dubhe-anvilcraft-api-event-1#guidebookevent)
- [`GuideBookEvent.HasGuideBookEvent`](../api/dev-dubhe-anvilcraft-api-event-1#guidebookevent-hasguidebookevent)
- [`GuideBookEvent.OpenGuideBookEvent`](../api/dev-dubhe-anvilcraft-api-event-2#guidebookevent-openguidebookevent)
