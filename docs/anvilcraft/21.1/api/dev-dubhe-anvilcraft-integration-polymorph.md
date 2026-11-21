# dev.dubhe.anvilcraft.integration.polymorph



## StoragePolymorphBridge

` public final class StoragePolymorphBridge `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isLoaded() ` | 末尾返回 ` StoragePolymorphBridge.resolve() != null `<br>[调用处 StorageScreen.refreshRecipeGrid](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L1791) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L30) |
| ` public static @Nullable RecipeHolder<?> playerRecipe( Player player, AbstractContainerMenu menu, CraftingInput input, Level level ) ` | ` (api == null) ` 成立时提前返回 ` null `<br>[调用处 StorageScreen.rebuildCraftingChoices](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L1770) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L34) |
| ` public static boolean select(Level level, Player player, ResourceLocation recipeId) ` | ` (api == null) ` 成立时提前返回 ` false `<br>` (selected.isEmpty()) ` 成立时提前返回 ` false `<br>[调用处 StorageScreen.selectCraftingChoice](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L3094) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L68) |
