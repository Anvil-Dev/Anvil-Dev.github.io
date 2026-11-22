# ItemEntityEvent

When a dropped item crosses a block coordinate boundary, `InToBlock` provides the item entity, block coordinates, exact position, and motion vector. Movement within the same block does not re-trigger per tick. When consuming items or modifying inventories, filter for the logical server using the event's `Level` first.

This event group is defined in [`ItemEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `ItemEntityEvent` | No direct construction call site under this name in this commit |
| `ItemEntityEvent.InToBlock` | [`ItemEntityMixin:111`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L111) |
