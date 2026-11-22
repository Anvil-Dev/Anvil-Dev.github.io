# StorageUnlockCraftingEvent

After storage locates the crafting table and stonecutter, it adds both slots to the event before deducting unlock materials. Add-on mods can append additional slots from which one item will be consumed. If the event is canceled, or if any appended slot is out of bounds or empty, unlocking fails and materials are preserved. [Storage Interfaces](../storage/)

This event group is defined in [`StorageUnlockCraftingEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `StorageUnlockCraftingEvent` | [`BaseStorage:94`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L94) |
