# AmuletEvent

When an add-on mod has its own accessory slots, hand candidate items to the event callback in `Find`. The amulet system first uses `EntityCheck` to decide whether the entity participates in lookup, then delivers candidates one by one to `ProcessFound`. Canceling `ProcessFound` only skips the current candidate. `ModifyRaffleProbability` belongs to the later draw phase; modifying it does not change which items were found. [Amulets](../amulets/)

This event group is defined in [`AmuletEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `AmuletEvent` | No direct construction call site under this name in this commit |
| `AmuletEvent.Find` | [`AmuletManager:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) |
| `AmuletEvent.ProcessFound` | [`AmuletManager:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) |
| `AmuletEvent.ModifyRaffleProbability` | [`AmuletManager:204`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) |
| `AmuletEvent.EntityCheck` | [`AmuletManager:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) |
