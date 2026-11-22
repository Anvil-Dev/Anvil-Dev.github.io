# 处理受冲击目标

目标方块和实体通过不同接口接收冲击。需要观察整次巨砧落地的附属应找事件发布位置，再决定是否要介入逐目标的处理。

## 源码中的用例

- [`ShockContext` · 第 113 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/ShockContext.java#L113)
- [`GiantAnvilBlock` · 第 327 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L327)
- [`FallingGiantAnvilEntity` · 第 83 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L83)
- [`GiantAnvilLandingEventListener` · 第 28 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `IShockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java) |
| `IShockFixedBlock` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockFixedBlock.java) |
| `GiantAnvilEvent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java) |
