# PrimerEnchantmentsEvent

The Auto Enchanting Table queries candidate enchantments only when the primer slot is non-empty and accepts that primer. Add registry holders via `addEnchantment` or `addEnchantments`; duplicates are skipped. `getEnchantments()` returns an unmodifiable view. The menu iterates this list after posting and does not check a cancellation flag afterward.

This event group is defined in [`PrimerEnchantmentsEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `PrimerEnchantmentsEvent` | [`AutoEnchantingTableMenu:129`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L129) |
