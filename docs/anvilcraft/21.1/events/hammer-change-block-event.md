# HammerChangeBlockEvent

锤子请求更换方块状态时，`getOldState()` 给出原状态，继承的 `getState()` 给出目标状态。监听器可以根据玩家和位置更新 `verified` 标志。`invoke` 把最终的布尔值交给调用者，所以限制替换应操作该标志。

该组事件定义在 [`HammerChangeBlockEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `HammerChangeBlockEvent` | [`HammerChangeBlockEvent:43`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L43) |
