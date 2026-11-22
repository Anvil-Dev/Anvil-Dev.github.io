# Supporting Round-Robin Access and High-Capacity Inventories

The round-robin handler chooses which slot to visit first. Read high-capacity inventory counts as `long` values. When inserting or extracting through a `ResourceHandler`, use the amount the operation actually transferred and honor the enclosing transaction's commit or rollback.

## Example in Source

- [`FishTankBlockEntity` · line 226](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L226)
- [`CreativeCrateBlockEntity` · line 31](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeCrateBlockEntity.java#L31)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `PollableItemHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/PollableItemHandler.java) |
| `OverLimitItemHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/OverLimitItemHandler.java) |
| `InfinityItemStackHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java) |

<!-- source-guide -->
