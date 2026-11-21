# dev.dubhe.anvilcraft.integration.jei.category.extension



## CanningFoodExtension

` public class CanningFoodExtension implements ICraftingCategoryExtension<CanningFoodRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CanningFoodExtension INSTANCE ` | 初值 ` new CanningFoodExtension() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L20) |
| ` @Override public List<SlotDisplay> getIngredients(RecipeHolder<CanningFoodRecipe> recipeHolder) ` | 末尾返回 ` List.of( new SlotDisplay.ItemSlotDisplay(ModItems.TIN_CAN), new SlotDisplay.TagSlotDisplay(Tags.Items.FOODS) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L22) |
| ` @Override public void onDisplayedIngredientsUpdate( RecipeHolder<CanningFoodRecipe> recipeHolder, List<IRecipeSlotDrawable> recipeSlots, IFocusGroup focuses) ` | 实现调用 ` recipeHolder.value() `<br>实现调用 ` recipeSlots.stream() .filter(slot -> slot.getRole() == RecipeIngredientRole.INPUT) `<br>实现调用 ` recipeSlots.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L30) |
| ` public CanningFoodExtension() ` | Java 提供的无参构造器。<br>[调用处 CanningFoodExtension](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L20) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/CanningFoodExtension.java#L19) |

## PillRecipeExtension

` public class PillRecipeExtension implements ICraftingCategoryExtension<PillRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public List<SlotDisplay> getIngredients(RecipeHolder<PillRecipe> recipeHolder) ` | 实现调用 ` Potions.WATER.key().identifier() `<br>实现调用 ` Potions.WATER.key() `<br>实现调用 ` Potions.MUNDANE.key().identifier() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L22) |
| ` @Override public void onDisplayedIngredientsUpdate( RecipeHolder<PillRecipe> recipeHolder, List<IRecipeSlotDrawable> recipeSlots, IFocusGroup focuses ) ` | 实现调用 ` recipeHolder.value() `<br>实现调用 ` recipeSlots.stream() .filter(slot -> slot.getRole() == RecipeIngredientRole.INPUT) `<br>实现调用 ` recipeSlots.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L41) |
| ` public PillRecipeExtension() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerVanillaCategoryExtensions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L429) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/extension/PillRecipeExtension.java#L21) |
