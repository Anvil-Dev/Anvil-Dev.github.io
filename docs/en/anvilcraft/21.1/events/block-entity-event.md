# BlockEntityEvent

When caching capabilities or network nodes for a position, build indexes in `ServerLoad` and remove by instance in `ServerUnload`. Chunk code broadcasts load only after confirming the instance is actually registered at that position. Unload has multiple entrypoints, so listeners should tolerate repeated cleanup; when a new instance appears at the same coordinates, avoid removing the newcomer.

This event group is defined in [`BlockEntityEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `BlockEntityEvent` | No direct construction call site under this name in this commit |
| `BlockEntityEvent.ServerLoad` | [`LevelChunkMixin:47`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L47) |
| `BlockEntityEvent.ServerUnload` | [`LevelChunkMixin:60`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L60), [`LevelChunkMixin:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L79), [`LevelChunkMixin:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L92) |
