# PrimerEnchantmentsEvent

When the Auto Enchanting Table needs to list extra enchantments for a primer, match `getPrimer()` in `PrimerEnchantmentsEvent` and call `addEnchantment(holder)`. Menu refresh clears the old list first and posts only when the primer is non-empty and allowed by the block entity; primer changes also trigger a refresh. Each candidate is created at its max level and then sorted.

`addEnchantments` calls the deduplicating method item by item, and `getEnchantments()` returns a read-only view. Although the type implements `ICancellableEvent`, the menu reads the candidate list directly after posting and does not discard already-added enchantments on cancellation. Canceling only affects whether subsequent default listeners receive the event and should not be used as an API to clear candidates. [Auto enchanting table refresh](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java)

| Event Type | Construction Site |
| --- | --- |
| `PrimerEnchantmentsEvent` | [`AutoEnchantingTableMenu:125`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L125) |
