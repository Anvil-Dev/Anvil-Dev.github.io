# Handling Shocked Targets

Target blocks and entities receive shock through different interfaces. Add-ons that need to observe an entire giant anvil landing should locate the event dispatch site before deciding whether to intervene in per-target handling.

## Example in Source

- [`ShockContext` · Line 113](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/ShockContext.java#L113)
- [`GiantAnvilBlock` · Line 318](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L318)
- [`FallingGiantAnvilEntity` · Line 82](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L82)
- [`GiantAnvilLandingEventListener` · Line 28](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IShockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java) |
| `IShockFixedBlock` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockFixedBlock.java) |
| `GiantAnvilEvent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java) |

<!-- source-guide -->
