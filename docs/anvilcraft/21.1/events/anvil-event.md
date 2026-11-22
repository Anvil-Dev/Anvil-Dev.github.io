# AnvilEvent

监听一次服务端世界内配方批次，选 `BeforeInWorldRecipe` 和 `AfterInWorldRecipe`。结束事件在 `finally` 中发布，即使本轮没有产出也会触发。`OnLand` 还会由锤子构造的临时下落方块实体触发，因此需要区分锤击和自然掉落的逻辑应在处理前检查上下文。[铁砧批次与落地](../anvil/batch)

该组事件定义在 [`AnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `AnvilEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AnvilEvent.OnLand` | [`GiantAnvilBlock:302`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L302)、[`FallingSpectralBlockEntity:101`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L101)、[`AnvilHammerItem:212`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L212)、[`FallingBlockEntityMixin:436`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L436) |
| `AnvilEvent.CollisionBlock` | [`EntityMixin:360`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L360) |
| `AnvilEvent.GiantOnLand` | [`GiantAnvilBlock:298`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L298) |
| `AnvilEvent.BeforeInWorldRecipe` | [`AnvilEventListener:125`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L125) |
| `AnvilEvent.AfterInWorldRecipe` | [`AnvilEventListener:153`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L153) |
| `AnvilEvent.HurtEntity` | [`FallingSpectralBlockEntity:261`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L261)、[`FallingBlockEntityMixin:471`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L471) |
