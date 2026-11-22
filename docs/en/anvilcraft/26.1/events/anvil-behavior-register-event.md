# AnvilBehaviorRegisterEvent

To trigger add-on behavior when an anvil lands on a specific block, place `registerBehavior` inside this event listener. `AnvilEventListener.onLand` calls `IAnvilBehavior.register()` only when handling a landing event for the first time, posting the registration event on `NeoForge.EVENT_BUS`. Subscribe before the first landing occurs.

Pass `Block` or `Holder<Block>` for an exact block, or `Predicate<BlockState>` when multiple blocks share a rule. Registration only writes to the behavior table; `handle` runs only when an anvil actually lands on a match. The current call chain executes in table iteration order, and the first behavior returning `true` ends traversal. Repeatedly registering the same block creates new match predicates. [Landing listener](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java) · [Match table](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java)

| Event Type | Construction Site |
| --- | --- |
| `AnvilBehaviorRegisterEvent` | [`IAnvilBehavior:49`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L49) |
