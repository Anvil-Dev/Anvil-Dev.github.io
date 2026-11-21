# ItemEntityEvent

地面物品跨进某个方块时，用 `InToBlock` 观察。`ItemEntity.tick` 返回前把当前位置换成整数 `BlockPos`，与上一次记录不同才发事件。实体的第一次刻也会发，因为旧坐标还为空。在方块内移动但仍处于同一格时没有通知。

`getBlockPos()` 是进入的方格，`getPos()` 是实体实际浮点位置，`getMotion()` 是当时的速度。事件没有取消状态，位移早已完成。发布点同时可在两侧执行，掉落替换、奖励等动作应先核对逻辑侧。[物品移动注入点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `ItemEntityEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `ItemEntityEvent.InToBlock` | [`ItemEntityMixin:89`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L89) |

## 参数与事件状态

- [`ItemEntityEvent`](../api/dev-dubhe-anvilcraft-api-event-2#itementityevent)
- [`ItemEntityEvent.InToBlock`](../api/dev-dubhe-anvilcraft-api-event-2#itementityevent-intoblock)
