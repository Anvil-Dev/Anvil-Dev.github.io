# GiantAnvilEvent

只想禁止某次多方块合成时，取消 `Multiblock`。该事件在巨砧已经落成、内置监听器准备查找工作台阵列时发布。它只使这段合成逻辑返回。`getLanding()` 提供原始落地事件，可读取世界、落点和实体。

`BlockTick` 在巨砧方块服务端计划刻入口发布，取消会跳过该次方块刻。`FallingTick` 在下落巨砧实体的 `tick` 最前面发布，取消会跳过该次实体推进，包括计时与移动。需要恢复运动时应让后续刻通过。订阅三个静态子类型，外层 `GiantAnvilEvent` 是容器类。[多方块加工入口](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java) · [实体刻](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `GiantAnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `GiantAnvilEvent.Multiblock` | [`GiantAnvilLandingEventListener:28`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) |
| `GiantAnvilEvent.BlockTick` | [`GiantAnvilBlock:318`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L318) |
| `GiantAnvilEvent.FallingTick` | [`FallingGiantAnvilEntity:82`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L82) |

## 参数与事件状态

- [`GiantAnvilEvent`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent)
- [`GiantAnvilEvent.BlockTick`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-blocktick)
- [`GiantAnvilEvent.FallingTick`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-fallingtick)
- [`GiantAnvilEvent.Multiblock`](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent-multiblock)
