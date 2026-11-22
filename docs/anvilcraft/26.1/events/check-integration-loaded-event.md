# CheckIntegrationLoadedEvent

附属模组提供 AnvilCraft 能识别的集成时，可在检查自身 ID 的监听器里调用 `setLoaded()`。`ModEventUtil.checkIntegration(id, hasExtra)` 先查 `ModList`。目标模组缺失直接返回 `NOT_FOUND`，无需额外探测时直接返回 `LOADED`。只有已安装且要求额外检查时才发布此事件。

标记缺省为 `false`，发布后为真得到 `LOADED`，否则得到 `NOT_LOADED`。`setLoaded()` 只能置真。先判断 `getId()`，否则响应其他模组的探测也会给出肯定结果。[状态分支](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java) · [手册集成实例](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `CheckIntegrationLoadedEvent` | [`ModEventUtil:25`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L25) |
