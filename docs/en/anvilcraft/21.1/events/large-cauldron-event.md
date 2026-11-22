# LargeCauldronEvent

When taking over handheld item interactions, write the result in `UseItem` and cancel the event; the block returns that result immediately. To alter mixing outputs, listen to `MixingOutput`: AnvilCraft simulates capacity with a copy first, then fires again and inserts on success. Callbacks must produce the same output for the same input—avoid deducting currency or granting rewards here. Server `ServerTick` is posted after fire damage, lava renewal, and item repair.

This event group is defined in [`LargeCauldronEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `LargeCauldronEvent` | No direct construction call site under this name in this commit |
| `LargeCauldronEvent.ServerTick` | [`LargeCauldronBlockEntity:200`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L200) |
| `LargeCauldronEvent.EntityInside` | [`LargeCauldronBlock:370`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L370) |
| `LargeCauldronEvent.UseItem` | [`LargeCauldronBlock:274`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L274) |
| `LargeCauldronEvent.GiantAnvilImpact` | [`LargeCauldronBlockEntity:530`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L530) |
| `LargeCauldronEvent.FluidDamage` | [`LargeCauldronBlockEntity:1325`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1325) |
| `LargeCauldronEvent.MixingOutput` | [`LargeCauldronBlockEntity:712`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L712), [`LargeCauldronBlockEntity:723`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L723) |
