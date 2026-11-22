# Constructing Portal Types from Block IDs

`PortalType` stores both the registry ID and the `Portal` implementation. When constructed from data, it queries the block registry; the registered block must implement `Portal`, otherwise construction fails. Serialization passes the ID.

## Example in Source

- [`EntityMixin` · Line 330](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L330)
- [`PortalConversionRecipe` · Line 45](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L45)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `PortalType` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java) |

<!-- source-guide -->
