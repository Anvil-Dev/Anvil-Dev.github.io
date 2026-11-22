# TeslaStrikeEvent

给特斯拉塔加入保护规则时，先判断 `TargetEntity.getTarget()` 或 `TargetBlock.getTargetPos()`。`getEntity()` 继承自方块实体事件，返回发起放电的塔。实体目标已经通过范围与名单筛选，塔即将决定是否命中。首个目标被取消时会清目标并结束本次选取。

连锁的后续跳跃也会发 `TargetEntity`，取消某一跳仅终止余下的链，前面的命中保留。无候选实体时才找避雷针并发布 `TargetBlock`。取消会清空该目标并同步状态。目标状态是构造事件当时读取的方块状态。[选取目标和连锁推进](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `TeslaStrikeEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `TeslaStrikeEvent.TargetEntity` | [`TeslaTowerBlockEntity:278`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L278)、[`TeslaTowerBlockEntity:326`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L326) |
| `TeslaStrikeEvent.TargetBlock` | [`TeslaTowerBlockEntity:304`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L304) |
