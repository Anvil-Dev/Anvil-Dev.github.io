# Maintaining Storage Sources Visible to Terminals

Visible terminal sources are maintained per dimension. Register the main block position once the block entity is ready, and unregister it upon removal or chunk unload so stale positions do not keep appearing in terminal queries.

## Example in Source

- [`StorageBlockEntity` · Line 53](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L53)
- [`StorageServerStub` · Line 5314](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5314)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `TerminalSourceManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java) |
| `StorageComparatorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java) |
