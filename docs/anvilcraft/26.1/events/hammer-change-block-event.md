# HammerChangeBlockEvent

保护特定方块免于铁砧锤调整时，读取 `getOldState()` 和继承的 `getState()`，分别对应原状态和计划写入的目标状态。服务端处理修改包时先计算是否持锤、状态是否合法、距离和建造权限，再把合并结果放进 `isVerified()`。

需要否决时调用 `setVerified(false)`。`invoke` 会返回监听器处理后的最终布尔值，`false` 使包处理器提前返回。多个监听器可能改写同一标志，应保留前序拒绝。红石骰子切换模式也使用此事件，但会传入相同的原、目标状态，并在发布前独立检查交互条件。[锤子调整](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java) · [红石骰子调整](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `HammerChangeBlockEvent` | [`HammerChangeBlockEvent:43`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L43) |
