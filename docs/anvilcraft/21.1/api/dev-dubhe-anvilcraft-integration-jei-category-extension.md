# dev.dubhe.anvilcraft.integration.jei.category.extension



## CanningFoodExtension

` public class CanningFoodExtension implements ICraftingCategoryExtension<CanningFoodRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CanningFoodExtension INSTANCE ` | 初值 ` new CanningFoodExtension() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L27) |
| ` @Override public void setRecipe( RecipeHolder<CanningFoodRecipe> recipeHolder, IRecipeLayoutBuilder builder, ICraftingGridHelper craftingGridHelper, IFocusGroup focuses) ` | JEI 为一条配方构建界面时调用，通过布局构建器设置槽位。<br>实现调用 ` recipeHolder.value() `<br>实现调用 ` Ingredient.of(ModItems.TIN_CAN) `<br>实现调用 ` RegistryUtil.getRegistry(Registries.ITEM) .getTag(Tags.Items.FOODS) .orElseThrow() .stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L29) |
| ` @Override public void onDisplayedIngredientsUpdate( RecipeHolder<CanningFoodRecipe> recipeHolder, List<IRecipeSlotDrawable> recipeSlots, IFocusGroup focuses) ` | 实现调用 ` recipeHolder.value() `<br>实现调用 ` recipeSlots.stream() .filter(slot -> slot.getRole() == RecipeIngredientRole.INPUT) `<br>实现调用 ` recipeSlots.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L50) |
| ` public CanningFoodExtension() ` | Java 提供的无参构造器。<br>[调用处 CanningFoodExtension](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L25) |

## PillRecipeExtension

` public class PillRecipeExtension implements ICraftingCategoryExtension<PillRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void setRecipe( RecipeHolder<PillRecipe> recipeHolder, IRecipeLayoutBuilder builder, ICraftingGridHelper craftingGridHelper, IFocusGroup focuses ) ` | JEI 为一条配方构建界面时调用，通过布局构建器设置槽位。<br>实现调用 ` RegistryUtil.getRegistry(Registries.POTION).asLookup() .listElements() `<br>实现调用 ` RegistryUtil.getRegistry(Registries.POTION).asLookup() `<br>实现调用 ` RegistryUtil.getRegistry(Registries.POTION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L29) |
| ` @Override public void onDisplayedIngredientsUpdate( RecipeHolder<PillRecipe> recipeHolder, List<IRecipeSlotDrawable> recipeSlots, IFocusGroup focuses ) ` | 实现调用 ` recipeHolder.value() `<br>实现调用 ` recipeSlots.stream() .filter((slot) -> slot.getRole() == RecipeIngredientRole.INPUT) `<br>实现调用 ` recipeSlots.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L64) |
| ` public PillRecipeExtension() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerVanillaCategoryExtensions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L436) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L28) |
