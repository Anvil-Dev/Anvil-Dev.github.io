# AnvilBehaviorRegisterEvent

要让铁砧砸在特定方块上触发附属行为，把 `registerBehavior` 放在此事件监听器里。`AnvilEventListener.onLand` 第一次处理落地事件时才调用 `IAnvilBehavior.register()`，它在 `NeoForge.EVENT_BUS` 上发布注册事件。订阅要早于第一次落地。

精确方块可传 `Block` 或 `Holder<Block>`，多个方块共用规则时传 `Predicate<BlockState>`。注册只写入行为表，真正砸中后才运行 `handle`。当前调用链按匹配表的遍历顺序执行，第一个返回 `true` 的行为结束遍历。相同方块重复注册会产生新的匹配谓词。[落地监听器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java) · [匹配表](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `AnvilBehaviorRegisterEvent` | [`IAnvilBehavior:49`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L49) |
