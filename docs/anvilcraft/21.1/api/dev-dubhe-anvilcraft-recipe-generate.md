# dev.dubhe.anvilcraft.recipe.generate



## BaseGeneratingCache

` public abstract class BaseGeneratingCache<T extends Recipe<?>> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/BaseGeneratingCache.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public abstract Optional<List<RecipeHolder<T>>> buildRecipes() ` | 返回 ` Optional<List<RecipeHolder<T>>> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/BaseGeneratingCache.java#L43) |

## JewelCraftingRecipeGeneratingCache

` public class JewelCraftingRecipeGeneratingCache extends BaseGeneratingCache<JewelCraftingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/JewelCraftingRecipeGeneratingCache.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelCraftingRecipeGeneratingCache(HolderLookup.Provider registries) ` | 实现调用 ` super(registries, "jewel_crafting", "jewel crafting recipe") `<br>实现调用 ` registries.lookupOrThrow(Registries.ITEM).listElements().toList() `<br>实现调用 ` registries.lookupOrThrow(Registries.ITEM).listElements() `<br>[调用处 JewelCraftingCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/JewelCraftingCategory.java#L117) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/JewelCraftingRecipeGeneratingCache.java#L30) |
| ` @Override public Optional<List<RecipeHolder<JewelCraftingRecipe>>> buildRecipes() ` | ` (this.bannerPatterns.isEmpty() && this.musicDiscs.isEmpty() && this.potterySherds.isEmpty() && this.trimTemplates.isEmpty() ) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(recipeHolders) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/JewelCraftingRecipeGeneratingCache.java#L56) |

## MeshRecipeGeneratingCache

` public class MeshRecipeGeneratingCache extends BaseGeneratingCache<MeshRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/MeshRecipeGeneratingCache.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MeshRecipeGeneratingCache(HolderLookup.Provider registries) ` | 实现调用 ` super(registries, "mesh", "mesh recipe") `<br>实现调用 ` HashBasedTable.create() `<br>实现调用 ` registries.lookupOrThrow(Registries.ITEM).listElements().toList() `<br>[调用处 InWorldRecipeEventListener.inWorldRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L42) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/MeshRecipeGeneratingCache.java#L35) |
| ` @Override public Optional<List<RecipeHolder<MeshRecipe>>> buildRecipes() ` | ` (this.leavesAndSaplings.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(recipeHolders) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/generate/MeshRecipeGeneratingCache.java#L68) |
