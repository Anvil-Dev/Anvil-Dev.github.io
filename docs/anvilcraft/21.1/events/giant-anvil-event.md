# GiantAnvilEvent

为巨砧落地增加多方块条件时，取消 `Multiblock` 可阻止本体在这次落地中处理多方块转换。`FallingTick` 和 `BlockTick` 分别位于下落实体 tick 和方块计划刻开头。取消这两个事件会直接跳过该次原逻辑，应把条件限定为自己负责的巨砧。[巨砧开发指南](../giant-anvil/)

该组事件定义在 [`GiantAnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `GiantAnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `GiantAnvilEvent.Multiblock` | [`GiantAnvilLandingEventListener:28`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) |
| `GiantAnvilEvent.BlockTick` | [`GiantAnvilBlock:327`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L327) |
| `GiantAnvilEvent.FallingTick` | [`FallingGiantAnvilEntity:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L83) |

## 参数与事件状态

- [`GiantAnvilEvent`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent)
- [`GiantAnvilEvent.BlockTick`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-blocktick)
- [`GiantAnvilEvent.FallingTick`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-fallingtick)
- [`GiantAnvilEvent.Multiblock`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-multiblock)
