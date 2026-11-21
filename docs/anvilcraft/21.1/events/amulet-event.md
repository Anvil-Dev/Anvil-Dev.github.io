# AmuletEvent

该组事件定义在 [`AmuletEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `AmuletEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AmuletEvent.Find` | [`AmuletManager:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) |
| `AmuletEvent.ProcessFound` | [`AmuletManager:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) |
| `AmuletEvent.ModifyRaffleProbability` | [`AmuletManager:204`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) |
| `AmuletEvent.EntityCheck` | [`AmuletManager:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) |

## 参数与事件状态

- [`AmuletEvent`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent)
- [`AmuletEvent.EntityCheck`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-entitycheck)
- [`AmuletEvent.Find`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-find)
- [`AmuletEvent.ModifyRaffleProbability`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-modifyraffleprobability)
- [`AmuletEvent.ProcessFound`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-processfound)
