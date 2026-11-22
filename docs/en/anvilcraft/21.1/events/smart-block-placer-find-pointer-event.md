# SmartBlockPlacerFindPointerEvent

When the placer has no reusable pointer, it passes the operation mode, target mode, execution phase, and nullable target state to listeners. Provide a result via `setPointer`. Canceling the event returns `null` directly, taking precedence over any pointer already set. [Placement & Pointers](../placement/)

This event group is defined in [`SmartBlockPlacerFindPointerEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `SmartBlockPlacerFindPointerEvent` | [`SmartBlockPlacerBlockEntity:284`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L284) |
