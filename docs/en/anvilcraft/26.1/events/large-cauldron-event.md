# LargeCauldronEvent

Interactions, damage, and outputs of the large cauldron have three separate result outlets. `UseItem` is posted before default handheld interaction: to take over, call `setResult(...)` and cancel, and the poster returns it directly; the default result is `TRY_WITH_EMPTY_HAND`. `FluidDamage` can override contact damage of burning fluids, and `MixingOutput` receives a copy of the base output, after which the poster continues dispensing with the modified `getResult()`.

`ServerTick` and `EntityInside` are suitable for observing the cauldron and entities. `GiantAnvilImpact` on giant anvil impact can replace `landedAnvilState`, though the result must still pass giant anvil part and main-block position checks, with per-entity same-tick deduplication; setting an unrelated state causes that giant anvil processing path to return early. [Interaction return value](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java) · [Impact, damage & output](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java)

| Event Type | Construction Site |
| --- | --- |
| `LargeCauldronEvent` | No direct construction call site under this name in this commit |
| `LargeCauldronEvent.ServerTick` | [`LargeCauldronBlockEntity:210`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L210) |
| `LargeCauldronEvent.EntityInside` | [`LargeCauldronBlock:372`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L372) |
| `LargeCauldronEvent.UseItem` | [`LargeCauldronBlock:278`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L278) |
| `LargeCauldronEvent.GiantAnvilImpact` | [`LargeCauldronBlockEntity:557`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L557) |
| `LargeCauldronEvent.FluidDamage` | [`LargeCauldronBlockEntity:1360`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1360) |
| `LargeCauldronEvent.MixingOutput` | [`LargeCauldronBlockEntity:738`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L738), [`LargeCauldronBlockEntity:748`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L748) |
