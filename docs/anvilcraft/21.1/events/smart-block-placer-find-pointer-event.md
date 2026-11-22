# SmartBlockPlacerFindPointerEvent

当放置器没有可复用的指针时，它把操作模式、目标模式、执行阶段及可空的目标状态交给监听器。用 `setPointer` 提供结果。取消事件会直接返回 `null`，优先于已经写入的指针。[放置与指针](../placement/)

该组事件定义在 [`SmartBlockPlacerFindPointerEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `SmartBlockPlacerFindPointerEvent` | [`SmartBlockPlacerBlockEntity:284`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L284) |
