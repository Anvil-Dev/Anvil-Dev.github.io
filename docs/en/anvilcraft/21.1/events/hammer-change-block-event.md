# HammerChangeBlockEvent

When the hammer requests a block state change, `getOldState()` gives the original state and the inherited `getState()` gives the target state. Listeners can update the `verified` flag based on player and position. `invoke` passes the final boolean to the caller, so restricting replacement should operate on this flag.

This event group is defined in [`HammerChangeBlockEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `HammerChangeBlockEvent` | [`HammerChangeBlockEvent:43`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L43) |
