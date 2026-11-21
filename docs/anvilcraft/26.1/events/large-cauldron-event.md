# LargeCauldronEvent

大型炼药锅的交互、伤害和产物有三个不同的结果出口。`UseItem` 在默认手持交互之前发布。接管时设置 `setResult(...)` 并取消，发布者才直接返回它。缺省结果是 `TRY_WITH_EMPTY_HAND`。`FluidDamage` 可以改写燃烧液体的接触伤害，`MixingOutput` 接收基础产物的副本，发布者用处理后的 `getResult()` 继续出料。

`ServerTick`、`EntityInside` 适合观察锅与实体。巨砧命中时的 `GiantAnvilImpact` 可替换 `landedAnvilState`，结果仍需通过巨砧部件与主方块位置检查。同实体同游戏刻还有去重。设置一个无关状态会使该巨砧加工路径提前返回。[交互返回值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java) · [命中、伤害与产物](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java)

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
