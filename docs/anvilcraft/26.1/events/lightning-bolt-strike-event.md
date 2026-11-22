# LightningBoltStrikeEvent

想在落雷处读取方块或给附属设备充能时，监听 `LightningBoltStrikeEvent`。闪电执行 `powerLightningRod` 时，在该方法入口发布。`getPos()` 取自 `getStrikePosition()`，适合查询实际落点。`getEntity()` 返回触发此次回调的闪电。

这是只读通知。发布者随后继续原版避雷针供能流程，不检查取消或返回值。需要世界写入时先确认 `getLevel()` 是服务端世界。它记录闪电的避雷针处理阶段，不会逐个列出此次命中的实体。[避雷针注入点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `LightningBoltStrikeEvent` | [`LightningBoltMixin:22`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java#L22) |
