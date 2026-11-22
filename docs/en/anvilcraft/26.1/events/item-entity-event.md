# ItemEntityEvent

To observe when a dropped item crosses into a block, use `InToBlock`. Before `ItemEntity.tick` returns, it converts the current position to an integer `BlockPos` and posts the event only if it differs from the previously recorded position. An entity's first tick also fires because the old position is still null; moving within the same block sends no notification.

`getBlockPos()` is the entered block, `getPos()` is the entity's actual floating-point position, and `getMotion()` is its velocity at that moment. The event is not cancelable, as movement has already occurred. The dispatch site can run on both sides, so actions like replacing drops or granting rewards should check the logical side first. [Item movement injection site](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java)

| Event Type | Construction Site |
| --- | --- |
| `ItemEntityEvent` | No direct construction call site under this name in this commit |
| `ItemEntityEvent.InToBlock` | [`ItemEntityMixin:89`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L89) |
