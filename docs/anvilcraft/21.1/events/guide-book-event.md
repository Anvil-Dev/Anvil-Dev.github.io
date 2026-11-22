# GuideBookEvent

接入自己的手册时需要应答两件事。收到 `HasGuideBookEvent` 后调用 `hasGuideBook()` 表示可用；在 `OpenGuideBookEvent` 中根据 `ServerPlayer` 和使用的手打开对应内容。发布端对打开事件只做广播，没有根据取消标志实现回退。

该组事件定义在 [`GuideBookEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `GuideBookEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `GuideBookEvent.HasGuideBookEvent` | [`ModEventUtil:14`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) |
| `GuideBookEvent.OpenGuideBookEvent` | [`ModEventUtil:18`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) |
