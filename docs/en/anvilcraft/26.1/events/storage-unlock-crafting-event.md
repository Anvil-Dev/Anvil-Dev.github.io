# StorageUnlockCraftingEvent

When add-on storage needs to consume an extra workstation to unlock crafting, add the slot containing the required material via `addRecipeBaseSlot(slot)`. The event is posted only after existing supply finds both a crafting table and a stonecutter, whose slot indexes are already added before posting; `getRecipeBaseSlots()` provides a read-only list.

Canceling returns failure directly. Otherwise the server starts a transaction and extracts one item from each slot in list order; an invalid index, empty slot, or insufficient count rolls back the entire extraction. Appending the same slot twice means extracting one more item, as the method does not deduplicate. All material stacks are saved as recipe bases only after the transaction commits. [Transaction & unlock flow](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java)

| Event Type | Construction Site |
| --- | --- |
| `StorageUnlockCraftingEvent` | [`BaseStorage:111`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L111) |
