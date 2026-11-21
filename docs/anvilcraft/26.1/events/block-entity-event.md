# BlockEntityEvent

该组事件定义在 [`BlockEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `BlockEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `BlockEntityEvent.ServerLoad` | [`LevelChunkMixin:70`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L70) |
| `BlockEntityEvent.ServerUnload` | [`LevelChunkMixin:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L83)、[`LevelChunkMixin:102`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L102)、[`LevelChunkMixin:119`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L119) |

## 参数与事件状态

- [`BlockEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent)
- [`BlockEntityEvent.ServerLoad`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverload)
- [`BlockEntityEvent.ServerUnload`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverunload)
