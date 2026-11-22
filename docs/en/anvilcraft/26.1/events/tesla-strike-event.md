# TeslaStrikeEvent

When adding protection rules to Tesla towers, inspect `TargetEntity.getTarget()` or `TargetBlock.getTargetPos()` first. `getEntity()` is inherited from the block entity event and returns the tower initiating the discharge. Entity targets have already passed range and filter checks and the tower is about to decide whether to strike; canceling the first target clears it and ends this selection.

Subsequent jumps in a chain attack also post `TargetEntity`; canceling a jump stops only the remaining chain while preserving earlier hits. Only when no candidate entity exists does it look for a lightning rod and post `TargetBlock`; canceling clears that target and syncs state. The target state is the block state read when the event was constructed. [Target selection & chain progression](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java)

| Event Type | Construction Site |
| --- | --- |
| `TeslaStrikeEvent` | No direct construction call site under this name in this commit |
| `TeslaStrikeEvent.TargetEntity` | [`TeslaTowerBlockEntity:278`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L278), [`TeslaTowerBlockEntity:326`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L326) |
| `TeslaStrikeEvent.TargetBlock` | [`TeslaTowerBlockEntity:304`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L304) |
