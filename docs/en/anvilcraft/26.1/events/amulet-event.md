# AmuletEvent

When an add-on equipment slot wants to participate in amulet scanning, first call `pass()` for supported entities in `EntityCheck`, then yield candidate items with `provide(stack)` in `Find`. `EntityCheck` fails by default, in which case the manager returns `null`; if it passes without finding any amulets, an empty list is returned.

Containers with nested items can unpack their contents in `ProcessFound`; canceling only discards the current candidate. Once one or more stacks are provided, the manager keeps only stacks with the `AMULET` component and no longer uses the outer stack automatically. `ModifyRaffleProbability` runs after a failed draw; listeners receive the original probability plus 10, clamped to `0`–`100`, affecting the next draw. [Amulet lookup & draw](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java)

| Event Type | Construction Site |
| --- | --- |
| `AmuletEvent` | No direct construction call site under this name in this commit |
| `AmuletEvent.Find` | [`AmuletManager:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) |
| `AmuletEvent.ProcessFound` | [`AmuletManager:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) |
| `AmuletEvent.ModifyRaffleProbability` | [`AmuletManager:204`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) |
| `AmuletEvent.EntityCheck` | [`AmuletManager:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) |
