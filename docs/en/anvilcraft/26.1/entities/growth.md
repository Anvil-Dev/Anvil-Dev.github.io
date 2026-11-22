# Accelerating Growth or Suppressing Spawning in a Dimension

Ripening state is managed per dimension; triggering the same position repeatedly may hit the same-tick deduplication logic. Suppression zones for induction lights are maintained by snapshots of registered block entities.

## Example in Source

- [`InductionLightBlockEntity` · Line 47](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/InductionLightBlockEntity.java#L47)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `RipeningManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java) |
| `SpawningManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java) |

<!-- source-guide -->
