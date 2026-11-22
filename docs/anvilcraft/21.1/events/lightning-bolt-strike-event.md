# LightningBoltStrikeEvent

追踪避雷针位置的落雷时，订阅这个游戏总线通知。它在闪电实体进入 `powerLightningRod` 的方法头发布，带有闪电、所在世界和击中位置。此时原版尚未执行该方法余下的供电操作。

该组事件定义在 [`LightningBoltStrikeEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `LightningBoltStrikeEvent` | [`LightningBoltMixin:23`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java#L23) |
