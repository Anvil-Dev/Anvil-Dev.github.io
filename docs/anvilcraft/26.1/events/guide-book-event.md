# GuideBookEvent

让自己的手册接管打开操作需要实现两段。查询 `HasGuideBookEvent` 时调用 `hasGuideBook()`，查询方根据 `isHasGuideBook()` 判断是否有手册。服务端玩家随后打开书时，`OpenGuideBookEvent` 才带上世界、玩家和交互手。

`ModEventUtil.openGuideBook` 仅发布事件，实际打开页面由订阅者完成。处理完成后可取消 `OpenGuideBookEvent`，阻止通常不接收已取消事件的后续监听器。内置 Ageratum 处理器以 `HIGHEST` 运行并立即取消，需要留意优先级。[发布方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java) · [内置手册处理器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `GuideBookEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `GuideBookEvent.HasGuideBookEvent` | [`ModEventUtil:14`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) |
| `GuideBookEvent.OpenGuideBookEvent` | [`ModEventUtil:18`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) |
