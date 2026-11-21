# LargeCauldronEvent

该组事件定义在 [`LargeCauldronEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `LargeCauldronEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `LargeCauldronEvent.ServerTick` | [`LargeCauldronBlockEntity:200`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L200) |
| `LargeCauldronEvent.EntityInside` | [`LargeCauldronBlock:370`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L370) |
| `LargeCauldronEvent.UseItem` | [`LargeCauldronBlock:274`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L274) |
| `LargeCauldronEvent.GiantAnvilImpact` | [`LargeCauldronBlockEntity:530`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L530) |
| `LargeCauldronEvent.FluidDamage` | [`LargeCauldronBlockEntity:1325`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1325) |
| `LargeCauldronEvent.MixingOutput` | [`LargeCauldronBlockEntity:712`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L712)、[`LargeCauldronBlockEntity:723`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L723) |

## 参数与事件状态

- [`LargeCauldronEvent`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent)
- [`LargeCauldronEvent.EntityInside`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-entityinside)
- [`LargeCauldronEvent.FluidDamage`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-fluiddamage)
- [`LargeCauldronEvent.GiantAnvilImpact`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-giantanvilimpact)
- [`LargeCauldronEvent.MixingOutput`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-mixingoutput)
- [`LargeCauldronEvent.ServerTick`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-servertick)
- [`LargeCauldronEvent.UseItem`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-useitem)
