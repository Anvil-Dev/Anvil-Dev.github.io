# GiantAnvilEvent

To forbid only a specific multiblock crafting attempt, cancel `Multiblock`. It is posted after the giant anvil has landed and right as the built-in listener is about to look up the crafting table array, causing only that crafting logic to return. `getLanding()` provides the original landing event, from which you can read the level, landing position, and entity.

`BlockTick` is posted at the entry of the giant anvil block's server scheduled tick; canceling skips that block tick. `FallingTick` is posted at the very start of the falling giant anvil entity's `tick`; canceling skips that entity tick, including timing and movement—let subsequent ticks pass when motion should resume. Subscribe to the three static subtypes; the outer `GiantAnvilEvent` is a container class. [Multiblock processing entrypoint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java) · [Entity tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java)

| Event Type | Construction Site |
| --- | --- |
| `GiantAnvilEvent` | No direct construction call site under this name in this commit |
| `GiantAnvilEvent.Multiblock` | [`GiantAnvilLandingEventListener:28`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) |
| `GiantAnvilEvent.BlockTick` | [`GiantAnvilBlock:318`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L318) |
| `GiantAnvilEvent.FallingTick` | [`FallingGiantAnvilEntity:82`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L82) |
