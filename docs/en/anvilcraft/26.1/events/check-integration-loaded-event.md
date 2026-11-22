# CheckIntegrationLoadedEvent

When an add-on mod provides an integration recognized by AnvilCraft, call `setLoaded()` in a listener that checks its own ID. `ModEventUtil.checkIntegration(id, hasExtra)` checks `ModList` first: if the target mod is absent it returns `NOT_FOUND` directly, and if no extra check is needed it returns `LOADED` directly. This event is posted only when the mod is installed and an extra check is requested.

The flag defaults to `false`; after posting, `true` yields `LOADED` and `false` yields `NOT_LOADED`. `setLoaded()` can only set it to `true`. Check `getId()` first, otherwise probes for other mods will also receive an affirmative result. [Status branches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java) · [Guide integration example](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java)

| Event Type | Construction Site |
| --- | --- |
| `CheckIntegrationLoadedEvent` | [`ModEventUtil:25`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L25) |
