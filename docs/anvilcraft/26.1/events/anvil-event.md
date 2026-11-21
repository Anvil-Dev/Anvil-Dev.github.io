# AnvilEvent

想在落点执行一次操作，应先区分整座巨砧和落点方块。普通 `OnLand` 提供铁砧落点，承压方块在 `getPos().below()`。巨砧落成后先发一次 `GiantOnLand`，再在 3 × 3 底面逐格发九次 `OnLand`。整座结构只结算一次时订阅前者。铁砧锤也有用临时实体发布 `OnLand` 的路径。

普通下落铁砧的发布者会读取 `OnLand.setAnvilDamage(true)` 对应的标志，按铁砧损伤流程更新落点。巨砧的九次通知没有这一步回读。`CollisionBlock` 在移动结束后报告碰撞，其 `speed` 是碰撞前移动向量的长度。取消可阻止后续内置碰撞合成监听器，已执行的实体移动无法由此撤销。`HurtEntity` 提供目标和伤害数值，字段只读。[碰撞处理](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java) · [巨砧落成](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `AnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AnvilEvent.OnLand` | [`GiantAnvilBlock:292`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L292)、[`FallingSpectralBlockEntity:105`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L105)、[`AnvilHammerItem:197`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/AnvilHammerItem.java#L197)、[`FallingBlockEntityMixin:420`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L420) |
| `AnvilEvent.CollisionBlock` | [`EntityMixin:308`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L308) |
| `AnvilEvent.GiantOnLand` | [`GiantAnvilBlock:288`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L288) |
| `AnvilEvent.HurtEntity` | [`FallingSpectralBlockEntity:271`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L271)、[`FallingBlockEntityMixin:461`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L461) |

## 参数与事件状态

- [`AnvilEvent`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent)
- [`AnvilEvent.CollisionBlock`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-collisionblock)
- [`AnvilEvent.GiantOnLand`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-giantonland)
- [`AnvilEvent.HurtEntity`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-hurtentity)
- [`AnvilEvent.OnLand`](../api/dev-dubhe-anvilcraft-api-event-1#anvilevent-onland)
