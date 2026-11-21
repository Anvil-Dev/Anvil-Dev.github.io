# 处理受冲击目标

目标方块和实体通过不同接口接收冲击。需要观察整次巨砧落地的附属应找事件发布位置，再决定是否要介入逐目标的处理。

## 源码中的用例

- [`ShockContext` · 第 113 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/ShockContext.java#L113)
- [`GiantAnvilBlock` · 第 318 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L318)
- [`FallingGiantAnvilEntity` · 第 82 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L82)
- [`GiantAnvilLandingEventListener` · 第 28 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `IShockEntity` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-giantanvil#ishockentity) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java) |
| `IShockFixedBlock` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-giantanvil#ishockfixedblock) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockFixedBlock.java) |
| `GiantAnvilEvent` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-event-1#giantanvilevent) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java) |

<!-- source-guide -->
