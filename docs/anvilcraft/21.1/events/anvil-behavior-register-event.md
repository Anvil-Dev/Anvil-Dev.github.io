# AnvilBehaviorRegisterEvent

给自有方块增加铁砧落地行为时，在模组构造期间向游戏事件总线订阅这个事件。本体首次处理铁砧行为时发布注册事件，然后缓存处理表。注册键既可以是方块，也可以是具体状态。示例中的高度检查可避免低落差时误触发。[砂岩撞击处理器](../anvil/register)

该组事件定义在 [`AnvilBehaviorRegisterEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `AnvilBehaviorRegisterEvent` | [`IAnvilBehavior:64`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L64) |
