# Restricting Insertion or Extraction

When exposing item capabilities externally, choose a filtering, input-refusing, or read-only wrapper according to each slot's role in the machine. Simulated operations must also return accurate remainders, or transfer devices will misjudge acceptance capacity.

## Example in Source

- [`BaseChuteBlockEntity` · Line 79](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseChuteBlockEntity.java#L79)
- [`CelestialForgingAnvilLogisticsInterfaceBlockEntity` · Line 69](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLogisticsInterfaceBlockEntity.java#L69)
- [`ChargerBlockEntity` · Line 62](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L62)
- [`DischargerBlockEntity` · Line 62](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L62)
- [`ItemCollectorBlockEntity` · Line 84](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemCollectorBlockEntity.java#L84)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `FilteredItemStackHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/FilteredItemStackHandler.java) |
| `ReadOnlyItemHandlerWrapper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/ReadOnlyItemHandlerWrapper.java) |
| `InputRefusingItemHandlerWrapper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/InputRefusingItemHandlerWrapper.java) |
