# ItemEntityEvent

该组事件定义在 [`ItemEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `ItemEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `ItemEntityEvent.InToBlock` | [`ItemEntityMixin:89`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L89) |

## 参数与事件状态

- [`ItemEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-2#itementityevent)
- [`ItemEntityEvent.InToBlock`](../api/dev-dubhe-anvilcraft-api-event-2#itementityevent-intoblock)
