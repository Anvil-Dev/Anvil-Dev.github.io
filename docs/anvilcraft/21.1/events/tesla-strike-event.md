# TeslaStrikeEvent

特斯拉塔选中生物或避雷针后、实际放电之前会发出目标事件。取消首个目标会清掉该目标；连锁攻击中取消后续目标会终止余下跳跃。`TargetBlock` 保留事件创建当时的方块状态。[特斯拉放电](../tesla/)

该组事件定义在 [`TeslaStrikeEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `TeslaStrikeEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `TeslaStrikeEvent.TargetEntity` | [`TeslaTowerBlockEntity:248`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L248)、[`TeslaTowerBlockEntity:294`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L294) |
| `TeslaStrikeEvent.TargetBlock` | [`TeslaTowerBlockEntity:271`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L271) |

## 参数与事件状态

- [`TeslaStrikeEvent`](../api/dev-dubhe-anvilcraft-api-event-2#teslastrikeevent)
- [`TeslaStrikeEvent.TargetBlock`](../api/dev-dubhe-anvilcraft-api-event-2#teslastrikeevent-targetblock)
- [`TeslaStrikeEvent.TargetEntity`](../api/dev-dubhe-anvilcraft-api-event-2#teslastrikeevent-targetentity)
