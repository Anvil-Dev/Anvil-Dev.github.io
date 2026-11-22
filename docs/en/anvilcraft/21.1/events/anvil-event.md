# AnvilEvent

To listen to a server-side in-world recipe batch, choose `BeforeInWorldRecipe` and `AfterInWorldRecipe`. The post event is fired in `finally`, so it triggers even if no recipes matched in that round. `OnLand` is also fired by temporary falling block entities constructed by the hammer, so logic that needs to distinguish hammer strikes from natural falls should inspect the context first. [Anvil batches & landing](../anvil/batch)

This event group is defined in [`AnvilEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `AnvilEvent` | No direct construction call site under this name in this commit |
| `AnvilEvent.OnLand` | [`GiantAnvilBlock:302`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L302), [`FallingSpectralBlockEntity:101`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L101), [`AnvilHammerItem:212`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L212), [`FallingBlockEntityMixin:436`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L436) |
| `AnvilEvent.CollisionBlock` | [`EntityMixin:360`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L360) |
| `AnvilEvent.GiantOnLand` | [`GiantAnvilBlock:298`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L298) |
| `AnvilEvent.BeforeInWorldRecipe` | [`AnvilEventListener:125`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L125) |
| `AnvilEvent.AfterInWorldRecipe` | [`AnvilEventListener:153`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L153) |
| `AnvilEvent.HurtEntity` | [`FallingSpectralBlockEntity:261`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L261), [`FallingBlockEntityMixin:471`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockEntityMixin.java#L471) |
