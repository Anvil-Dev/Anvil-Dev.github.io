# Attaching Jet Behavior

Spawn checks, fuel, and block operations run on the server. When visual feedback is needed, use client particle callbacks while keeping client classes loaded separately from server logic.

## Example in Source

- [`PlasmaJetHooks` · Line 59](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetHooks.java#L59)
- [`PlasmaJetsBlock` · Line 87](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L87)
- [`ModHeaterInfos` · Line 95](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L95)
- [`ModBlockEntities` · Line 480](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlockEntities.java#L480)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `PlasmaJetBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetBehavior.java) |
| `PlasmaJetsBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java) |

<!-- source-guide -->
