# CheckIntegrationLoadedEvent

可选兼容模块还需要自己的开关时，监听此事件，核对 `getId()` 和本模块的初始化结果，启用后调用 `setLoaded()`。目标模组未安装会直接返回 `NOT_FOUND`。仅在目标已安装且调用方请求额外检测时才发事件，未应答对应 `NOT_LOADED`。

该组事件定义在 [`CheckIntegrationLoadedEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `CheckIntegrationLoadedEvent` | [`ModEventUtil:25`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L25) |
