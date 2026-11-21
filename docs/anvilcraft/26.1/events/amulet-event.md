# AmuletEvent

附属装备槽想参加护符扫描时，先在 `EntityCheck` 对支持的生物调用 `pass()`，再于 `Find` 中用 `provide(stack)` 交出候选物品。`EntityCheck` 缺省未通过，管理器此时返回 `null`。通过后未找到护符则返回空列表。

有嵌套物品的容器可以在 `ProcessFound` 展开内容。取消只丢弃当前候选。提供一个或多个栈后，管理器只保留带 `AMULET` 组件的栈，不再自动使用外层栈。`ModifyRaffleProbability` 发生在抽取失败之后，监听器收到的是原概率加 10，读回值限制在 0 至 100，影响下一次抽取。[护符查找与抽取](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `AmuletEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AmuletEvent.Find` | [`AmuletManager:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) |
| `AmuletEvent.ProcessFound` | [`AmuletManager:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) |
| `AmuletEvent.ModifyRaffleProbability` | [`AmuletManager:204`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) |
| `AmuletEvent.EntityCheck` | [`AmuletManager:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) |

## 参数与事件状态

- [`AmuletEvent`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent)
- [`AmuletEvent.EntityCheck`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-entitycheck)
- [`AmuletEvent.Find`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-find)
- [`AmuletEvent.ModifyRaffleProbability`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-modifyraffleprobability)
- [`AmuletEvent.ProcessFound`](../api/dev-dubhe-anvilcraft-api-event-1#amuletevent-processfound)
