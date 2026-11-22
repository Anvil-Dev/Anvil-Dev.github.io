# GiantAnvilEvent

When adding multiblock conditions to giant anvil landings, canceling `Multiblock` prevents AnvilCraft from handling multiblock conversion on that landing. `FallingTick` and `BlockTick` sit at the start of the falling entity tick and the block scheduled tick respectively. Canceling either skips the original logic for that tick, so restrict conditions to the giant anvils you are responsible for. [Giant Anvil Guide](../giant-anvil/)

This event group is defined in [`GiantAnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `GiantAnvilEvent` | No direct construction call site under this name in this commit |
| `GiantAnvilEvent.Multiblock` | [`GiantAnvilLandingEventListener:28`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) |
| `GiantAnvilEvent.BlockTick` | [`GiantAnvilBlock:327`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L327) |
| `GiantAnvilEvent.FallingTick` | [`FallingGiantAnvilEntity:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L83) |
