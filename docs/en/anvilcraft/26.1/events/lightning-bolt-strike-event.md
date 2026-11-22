# LightningBoltStrikeEvent

Listen to `LightningBoltStrikeEvent` when reading blocks or charging add-on devices at a lightning strike site. It is posted at the entry of `powerLightningRod` on the lightning bolt; `getPos()` comes from `getStrikePosition()`, suitable for querying the actual strike spot, and `getEntity()` returns the lightning bolt triggering the callback.

This is a read-only notification: the poster continues vanilla's lightning rod powering flow afterward without checking cancellation or return values. Confirm `getLevel()` is a server level before writing to the world. It records the lightning bolt's lightning rod handling phase and does not list hit entities individually. [Lightning rod injection site](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java)

| Event Type | Construction Site |
| --- | --- |
| `LightningBoltStrikeEvent` | [`LightningBoltMixin:22`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java#L22) |
