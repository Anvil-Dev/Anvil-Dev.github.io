# ItemEntityEvent

掉落物跨过方块坐标边界时，`InToBlock` 提供物品实体、格子坐标、精确位置和运动向量。同一格内的移动不会按 tick 重复触发。需要消耗物品或改变库存时，先通过事件的 `Level` 筛选逻辑服务端。

该组事件定义在 [`ItemEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `ItemEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `ItemEntityEvent.InToBlock` | [`ItemEntityMixin:111`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L111) |

## 参数与事件状态

- [`ItemEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-2#itementityevent)
- [`ItemEntityEvent.InToBlock`](../api/dev-dubhe-anvilcraft-api-event-2#itementityevent-intoblock)
