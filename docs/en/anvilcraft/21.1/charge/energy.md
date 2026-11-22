# Transferring Energy to Adjacent Blocks via Capabilities

Queries the target block's energy capability from a given direction. Calling `insertEnergy` attempts immediate insertion without returning the amount accepted; when you need to settle remaining energy, use the capability's return value directly.

## Example in Source

- [`CapabilitiesEventListener` · Line 264](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L264)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `EnergyHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java) |
| `ItemFEStorage` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java) |
| `IEnergyHandlerHolder` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java) |
