# TeslaStrikeEvent

该组事件定义在 [`TeslaStrikeEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `TeslaStrikeEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `TeslaStrikeEvent.TargetEntity` | [`TeslaTowerBlockEntity:278`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L278)、[`TeslaTowerBlockEntity:326`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L326) |
| `TeslaStrikeEvent.TargetBlock` | [`TeslaTowerBlockEntity:304`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L304) |

## 参数与事件状态

- [`TeslaStrikeEvent`](../api/dev-dubhe-anvilcraft-api-event-2#teslastrikeevent)
- [`TeslaStrikeEvent.TargetBlock`](../api/dev-dubhe-anvilcraft-api-event-2#teslastrikeevent-targetblock)
- [`TeslaStrikeEvent.TargetEntity`](../api/dev-dubhe-anvilcraft-api-event-2#teslastrikeevent-targetentity)
