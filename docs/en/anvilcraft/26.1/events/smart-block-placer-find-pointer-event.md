# SmartBlockPlacerFindPointerEvent

When the placer needs to find the next block in an add-on inventory or custom target, provide an `ITargetPointer` via `setPointer(...)`. The server first tries reusing an old pointer that is still valid and matches `requiredState`, posting a new query only when reuse fails. `getSourcePos()`, `getFacing()`, operation mode, target mode, and execution phase together determine where to search; `requiredState` may be null.

If canceled after posting, the lookup immediately returns `null`, even if a pointer was already set. When not canceled, the final pointer is read directly, returning `null` if none was provided. Built-in providers run at `LOWEST` priority and may overwrite an already-set pointer, so arrange matching conditions and listener order explicitly for custom targets. [Query & result reading](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java) · [Built-in candidates](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java)

| Event Type | Construction Site |
| --- | --- |
| `SmartBlockPlacerFindPointerEvent` | [`SmartBlockPlacerBlockEntity:284`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L284) |
