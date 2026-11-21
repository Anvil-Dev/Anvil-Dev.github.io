# LargeCauldronEvent

该组事件定义在 [`LargeCauldronEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java)。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。

| 事件类型 | 创建位置 |
| --- | --- |
| `LargeCauldronEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `LargeCauldronEvent.ServerTick` | [`LargeCauldronBlockEntity:210`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L210) |
| `LargeCauldronEvent.EntityInside` | [`LargeCauldronBlock:372`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L372) |
| `LargeCauldronEvent.UseItem` | [`LargeCauldronBlock:278`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L278) |
| `LargeCauldronEvent.GiantAnvilImpact` | [`LargeCauldronBlockEntity:557`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L557) |
| `LargeCauldronEvent.FluidDamage` | [`LargeCauldronBlockEntity:1360`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1360) |
| `LargeCauldronEvent.MixingOutput` | [`LargeCauldronBlockEntity:738`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L738)、[`LargeCauldronBlockEntity:748`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L748) |

## 参数与事件状态

- [`LargeCauldronEvent`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent)
- [`LargeCauldronEvent.EntityInside`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-entityinside)
- [`LargeCauldronEvent.FluidDamage`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-fluiddamage)
- [`LargeCauldronEvent.GiantAnvilImpact`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-giantanvilimpact)
- [`LargeCauldronEvent.MixingOutput`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-mixingoutput)
- [`LargeCauldronEvent.ServerTick`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-servertick)
- [`LargeCauldronEvent.UseItem`](../api/dev-dubhe-anvilcraft-api-event-2#largecauldronevent-useitem)
