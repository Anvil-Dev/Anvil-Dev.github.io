# HammerChangeBlockEvent

When protecting specific blocks from anvil hammer adjustments, read `getOldState()` and the inherited `getState()`, which correspond to the original state and the planned target state. When the server handles the change packet, it checks held hammer, state validity, distance, and build permissions first, then stores the combined result in `isVerified()`.

Call `setVerified(false)` to deny the change. `invoke` returns the final boolean after listeners run; `false` causes the packet handler to return early. Multiple listeners may overwrite the same flag, so preserve prior denials. Redstone dice mode switching also uses this event, passing the same original and target states and checking interaction conditions independently before posting. [Hammer adjustment](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java) · [Redstone dice adjustment](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java)

| Event Type | Construction Site |
| --- | --- |
| `HammerChangeBlockEvent` | [`HammerChangeBlockEvent:43`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L43) |
