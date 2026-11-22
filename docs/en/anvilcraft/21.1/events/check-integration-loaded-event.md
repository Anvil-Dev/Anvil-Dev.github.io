# CheckIntegrationLoadedEvent

When an optional compatibility module also has its own toggle, listen to this event, check `getId()` and your module's initialization result, and call `setLoaded()` if enabled. If the target mod is not installed, `NOT_FOUND` is returned directly. The event is fired only when the target is installed and the caller requests an extra check; no response corresponds to `NOT_LOADED`.

This event group is defined in [`CheckIntegrationLoadedEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `CheckIntegrationLoadedEvent` | [`ModEventUtil:25`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L25) |
