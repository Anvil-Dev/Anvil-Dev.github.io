# EntityThroughPortalEvent

需要限制某类实体通过传送门时，在 `NeoForge.EVENT_BUS` 订阅此事件并按 `getEntity()` 和 `getType()` 过滤。`Entity.handlePortal` 即将调用 `teleport(TeleportTransition)` 时，从门方块的注册 ID 构建 `PortalType`。`getLevel()` 是出发世界。事件没有暴露可改写的目的地参数。

取消会让包装调用返回当前实体，跳过这次传送。普通命令传送、直接使用其他传送 API 和没有进入这个门处理器的行为不经此处。一次拒绝只处理一次传送尝试。[门处理器的包装调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `EntityThroughPortalEvent` | [`EntityMixin:327`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L327) |
