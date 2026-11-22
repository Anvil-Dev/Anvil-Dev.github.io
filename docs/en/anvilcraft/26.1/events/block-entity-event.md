# BlockEntityEvent

When maintaining a server-side index of add-on devices, subscribe to `ServerLoad` to register the instance carried by the event and `ServerUnload` to remove that same instance. The load event is posted in `LevelChunk.setBlockEntity` right before the instance is written to the map, so immediately querying by coordinates may still return the old object. Neither sub-event supports cancellation.

In addition to explicit removal, unload notifications can come from replacing an old instance or cleaning up invalid caches. When keying indexes by dimension and coordinates, compare instances before removing to avoid an old notification deleting a new entry. This tracks the block entity map lifecycle, so receiving an unload does not by itself mean a player broke the block. [Chunk injection site](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java)

| Event Type | Construction Site |
| --- | --- |
| `BlockEntityEvent` | No direct construction call site under this name in this commit |
| `BlockEntityEvent.ServerLoad` | [`LevelChunkMixin:70`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L70) |
| `BlockEntityEvent.ServerUnload` | [`LevelChunkMixin:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L83), [`LevelChunkMixin:102`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L102), [`LevelChunkMixin:119`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L119) |
