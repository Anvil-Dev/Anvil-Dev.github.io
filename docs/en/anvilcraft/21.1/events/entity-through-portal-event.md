# EntityThroughPortalEvent

Decide whether to allow traversal by `getType()` or entity identity before the entity actually executes a dimension transfer. On cancellation, the call site returns the original entity directly. When the portal processor cannot be recognized as the corresponding accessor, vanilla logic runs instead, so do not treat this event as a universal entrypoint for all dimension transfers.

This event group is defined in [`EntityThroughPortalEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `EntityThroughPortalEvent` | [`EntityMixin:377`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L377) |
