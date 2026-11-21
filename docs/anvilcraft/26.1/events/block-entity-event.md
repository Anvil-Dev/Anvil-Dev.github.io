# BlockEntityEvent

维护附属设备的服务端索引时，订阅 `ServerLoad` 登记事件携带的实例，订阅 `ServerUnload` 移除同一实例。载入事件在 `LevelChunk.setBlockEntity` 即将把实例写入映射时发布，立刻按坐标回查可能仍得到旧对象。此处两个子事件都不支持取消。

卸载通知除了显式移除，还可能来自旧实例被替换、清理无效缓存等路径。使用维度和坐标作为索引键时，移除前对比实例可避免旧通知清掉新条目。这里跟踪的是方块实体映射生命周期，收到卸载后也不能据此认定方块被玩家破坏。[区块注入点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `BlockEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `BlockEntityEvent.ServerLoad` | [`LevelChunkMixin:70`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L70) |
| `BlockEntityEvent.ServerUnload` | [`LevelChunkMixin:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L83)、[`LevelChunkMixin:102`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L102)、[`LevelChunkMixin:119`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L119) |

## 参数与事件状态

- [`BlockEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent)
- [`BlockEntityEvent.ServerLoad`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverload)
- [`BlockEntityEvent.ServerUnload`](../api/dev-dubhe-anvilcraft-api-event-1#blockentityevent-serverunload)
