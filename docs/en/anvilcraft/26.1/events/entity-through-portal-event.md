# EntityThroughPortalEvent

When restricting a certain entity type from passing through a portal, subscribe to this event on `NeoForge.EVENT_BUS` and filter by `getEntity()` and `getType()`. Right before `Entity.handlePortal` calls `teleport(TeleportTransition)`, `PortalType` is constructed from the portal block's registered ID. `getLevel()` is the source level. The event does not expose a mutable destination parameter.

Canceling makes the wrapped call return the current entity, skipping this teleport. Regular command teleports, direct calls to other teleport APIs, and paths that do not enter this portal processor do not pass through here. Each denial handles a single teleport attempt. [Portal processor wrap call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java)

| Event Type | Construction Site |
| --- | --- |
| `EntityThroughPortalEvent` | [`EntityMixin:327`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L327) |
