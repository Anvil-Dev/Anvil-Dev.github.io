# SlidingBlockEvent

To register add-on data while a sliding section is in motion, use `Start` to get the origin, direction, and carried `(BlockPos, BlockState, Optional<BlockEntity>)` entries. It is posted after constructing the sliding entity and saving the structure and initial position; the normal `slid(...)` flow has not yet finished subsequent original-block cleanup and entity spawning.

`Stop` is posted on the server after the structure is placed back into the world and before the sliding entity calls `discard()`, making it suitable for cleanup and inspecting the final position. Neither phase supports cancellation. To read the original structure, use `Start.getBlocks()` directly and avoid assuming every entry has a block entity. [Start/stop call sites](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java)

| Event Type | Construction Site |
| --- | --- |
| `SlidingBlockEvent` | No direct construction call site under this name in this commit |
| `SlidingBlockEvent.Start` | [`SlidingBlockEntity:75`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L75) |
| `SlidingBlockEvent.Stop` | [`SlidingBlockEntity:165`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L165) |
