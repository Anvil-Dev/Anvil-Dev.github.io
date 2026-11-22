# Restricting Insertion or Extraction

To expose a read-only `ResourceHandler<ItemResource>`, wrap the underlying handler in a `ReadOnlyItemResourceHandler`. Slot, amount, and capacity queries delegate to the underlying handler. Transactional insertions and extractions return the amount actually moved, which is zero for this wrapper.

## Example in Source

- [`BaseChuteBlockEntity` · line 83](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseChuteBlockEntity.java#L83)
- [`CelestialForgingAnvilLogisticsInterfaceBlockEntity` · line 60](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLogisticsInterfaceBlockEntity.java#L60)
- [`ChargerBlockEntity` · line 61](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L61)
- [`DischargerBlockEntity` · line 64](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L64)
- [`ItemCollectorBlockEntity` · line 102](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemCollectorBlockEntity.java#L102)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `FilteredItemStackHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/FilteredItemStackHandler.java) |
| `InputRefusingItemHandlerWrapper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/InputRefusingItemHandlerWrapper.java) |
| `ReadOnlyItemResourceHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/ReadOnlyItemResourceHandler.java) |

<!-- source-guide -->
