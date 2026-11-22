# SlidingBlockEvent

Subscribe to `Start` and `Stop` to observe when a sliding block section begins or finishes sliding. `Start` is posted from entity construction. The server-side stop flow places the blocks back into the world first, then posts `Stop`, and finally discards the sliding entity. Read the actual landing position in `Stop` if needed. [Sliding Blocks](../sliding/)

This event group is defined in [`SlidingBlockEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `SlidingBlockEvent` | No direct construction call site under this name in this commit |
| `SlidingBlockEvent.Start` | [`SlidingBlockEntity:76`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L76) |
| `SlidingBlockEvent.Stop` | [`SlidingBlockEntity:164`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L164) |
