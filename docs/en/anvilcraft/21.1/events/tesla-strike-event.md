# TeslaStrikeEvent

Target events are fired after a Tesla tower selects an entity or lightning rod and before actual discharge. Canceling the first target clears that target; canceling a subsequent target during a chain attack stops the remaining jumps. `TargetBlock` preserves the block state at the moment the event was created. [Tesla Discharge](../tesla/)

This event group is defined in [`TeslaStrikeEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `TeslaStrikeEvent` | No direct construction call site under this name in this commit |
| `TeslaStrikeEvent.TargetEntity` | [`TeslaTowerBlockEntity:248`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L248), [`TeslaTowerBlockEntity:294`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L294) |
| `TeslaStrikeEvent.TargetBlock` | [`TeslaTowerBlockEntity:271`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L271) |
