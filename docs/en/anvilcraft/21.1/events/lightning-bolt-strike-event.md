# LightningBoltStrikeEvent

Subscribe to this game-bus notification when tracking lightning strikes at lightning rod positions. It is posted at the start of `powerLightningRod` on the lightning entity, carrying the bolt, level, and struck position before vanilla executes the remaining powering logic in that method.

This event group is defined in [`LightningBoltStrikeEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `LightningBoltStrikeEvent` | [`LightningBoltMixin:23`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java#L23) |
