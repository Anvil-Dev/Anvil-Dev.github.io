# dev.dubhe.anvilcraft.integration.polymorph



## StoragePolymorphBridge

` public final class StoragePolymorphBridge `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isLoaded() ` | 末尾返回 ` StoragePolymorphBridge.resolve() != null `<br>[调用处 StorageScreen.refreshRecipeGrid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L982) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L38) |
| ` public static void suppressWidget(Class<?> screenClass) ` | 实现调用 ` Class.forName(StoragePolymorphBridge.WIDGETS_CLASS) `<br>实现调用 ` Class.forName(StoragePolymorphBridge.WIDGET_FACTORY_CLASS) `<br>实现调用 ` Class.forName(StoragePolymorphBridge.WIDGET_CLASS) `<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L316) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L42) |
| ` public static @Nullable RecipeHolder<?> playerRecipe( Player player, AbstractContainerMenu menu, CraftingInput input, Level level ) ` | ` (api == null) ` 成立时提前返回 ` null `<br>[调用处 StorageServerStub.selectedCraftingRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L731) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L97) |
| ` public static @Nullable RecipeHolder<?> selectedRecipe(Player player) ` | ` (api == null) ` 成立时提前返回 ` null `<br>[调用处 StorageScreen.rebuildCraftingChoices](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L953) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L131) |
| ` public static boolean select(Level level, Player player, Identifier recipeId) ` | ` (api == null) ` 成立时提前返回 ` false `<br>` (selected == null) ` 成立时提前返回 ` false `<br>[调用处 StorageScreen.selectCraftingChoice](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L1193) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/polymorph/StoragePolymorphBridge.java#L149) |
