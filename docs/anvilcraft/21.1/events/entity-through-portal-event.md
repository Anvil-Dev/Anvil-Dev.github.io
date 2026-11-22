# EntityThroughPortalEvent

在实体实际执行维度传送前按 `getType()` 或实体身份决定是否放行。取消后调用点直接返回原实体。传送处理器无法识别为对应访问器时会走原版逻辑，因此不能把这个事件当成所有维度移动的统一入口。

该组事件定义在 [`EntityThroughPortalEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `EntityThroughPortalEvent` | [`EntityMixin:377`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L377) |
