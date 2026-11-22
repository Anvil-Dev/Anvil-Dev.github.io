# Sending Energy to Adjacent Blocks via Capability

`EnergyHelper` queries `Capabilities.Energy.BLOCK` from a given block face, calls `insert` inside a root transaction, and commits. It has no return value. Machines that need to deduct from the sender's balance should use `EnergyHandler`'s actual inserted amount directly and settle within the same transaction.

## Example in Source

- [`ModCapabilities` · Line 268](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L268)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `EnergyHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java) |
| `ItemFEStorage` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java) |
| `IEnergyHandlerHolder` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java) |

<!-- source-guide -->
