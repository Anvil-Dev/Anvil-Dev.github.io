# SlidingBlockEvent

想在滑块运动期间登记附属信息，可以用 `Start` 取得起点、方向和被搬运的 `(BlockPos, BlockState, Optional<BlockEntity>)` 条目。它在构造滑动实体、保存结构和初始位置后发布。正常 `slid(...)` 流程此时还没完成后面的原方块处理与实体加入世界。

`Stop` 在服务端将结构放回世界之后、滑动实体 `discard()` 之前发布，适合清理和检查最终位置。两个阶段都不支持取消。要读取原结构，直接使用 `Start.getBlocks()`，避免假定所有条目都有方块实体。[启停调用点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `SlidingBlockEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `SlidingBlockEvent.Start` | [`SlidingBlockEntity:75`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L75) |
| `SlidingBlockEvent.Stop` | [`SlidingBlockEntity:165`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L165) |
