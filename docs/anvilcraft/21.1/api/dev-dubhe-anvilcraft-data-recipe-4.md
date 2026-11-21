# dev.dubhe.anvilcraft.data.recipe（ShapedRecipeLoader 至 VanillaRecipesLoader）



## ShapedRecipeLoader

` public class ShapedRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShapedRecipeLoader(RegistrumRecipeProvider provider) ` | 实现调用 ` this.nineToOne(provider) `<br>实现调用 ` this.chargedNeutroniumIngot(provider) `<br>实现调用 ` this.controlValve(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L8) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L27) |
| ` public void nineToOne(RegistrumRecipeProvider provider) ` | 实现调用 ` this.nine21(provider, RecipeCategory.BUILDING_BLOCKS, ModItemTags.BRONZE_INGOTS, ModBlocks.BRONZE_BLOCK) `<br>实现调用 ` this.nine21(provider, RecipeCategory.BUILDING_BLOCKS, ModItemTags.BRASS_INGOTS, ModBlocks.BRASS_BLOCK) `<br>实现调用 ` ShapedRecipeBuilder.shaped(RecipeCategory.BUILDING_BLOCKS, ModBlocks.PLYWOOD_STAIRS, 4) .pattern("A ") `<br>[调用处 ShapedRecipeLoader.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L37) |

## SolidLiquidRecipeLoader

` public class SolidLiquidRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SolidLiquidRecipeLoader.solidLiquid(provider, Items.DIRT, Items.MUD) `<br>实现调用 ` SolidLiquidRecipeLoader.solidLiquid(provider, Items.CRIMSON_FUNGUS, Items.NETHER_WART_BLOCK) `<br>实现调用 ` SolidLiquidRecipeLoader.solidLiquid(provider, Items.WARPED_FUNGUS, Items.WARPED_WART_BLOCK) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L30) |
| ` public SolidLiquidRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L29) |

## SpecialCelestialBodyRecipeLoader

` public class SpecialCelestialBodyRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` createOverworldLike(provider) `<br>实现调用 ` createMun(provider) `<br>实现调用 ` createVoidPlanet(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L22) |
| ` public SpecialCelestialBodyRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L20) |

## SpecialCraftingRecipeLoader

` public class SpecialCraftingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SpecialRecipeBuilder.special(CelestialAnvilRecipe::new) .save(provider, AnvilCraft.of("celestial_anvil")) `<br>实现调用 ` SpecialRecipeBuilder.special(CelestialAnvilRecipe::new) `<br>实现调用 ` AnvilCraft.of("celestial_anvil") `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L12) |
| ` public SpecialCraftingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L10) |

## SqueezingRecipeLoader

` public class SqueezingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` squeezing(provider, Blocks.WET_SPONGE, Blocks.SPONGE, Blocks.WATER_CAULDRON, 250) `<br>实现调用 ` squeezing(provider, Blocks.MOSS_BLOCK, Blocks.MOSS_CARPET, Blocks.WATER_CAULDRON, 250) `<br>实现调用 ` squeezing(provider, Blocks.MAGMA_BLOCK, Blocks.NETHERRACK, Blocks.LAVA_CAULDRON, 250) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L13) |
| ` public static void squeezing(RegistrumRecipeProvider provider, Block requires, Block result, Block cauldron, int produce) ` | 实现调用 ` SqueezingRecipe.builder() .requires(requires) .result(result) .transform(cauldron, produce) `<br>实现调用 ` SqueezingRecipe.builder() .requires(requires) .result(result) `<br>实现调用 ` SqueezingRecipe.builder() .requires(requires) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L36) |
| ` public SqueezingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L12) |

## StampingRecipeLoader

` public class StampingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` stamping(provider, Items.IRON_INGOT, Items.HEAVY_WEIGHTED_PRESSURE_PLATE) `<br>实现调用 ` stamping(provider, Items.GOLD_INGOT, Items.LIGHT_WEIGHTED_PRESSURE_PLATE) `<br>实现调用 ` stamping(provider, Items.COPPER_INGOT, ModBlocks.COPPER_PRESSURE_PLATE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L17) |
| ` public StampingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L16) |

## StoneCutterRecipeLoader

` public class StoneCutterRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoneCutterRecipeLoader(RegistrumRecipeProvider provider) ` | 实现调用 ` this.bronzeSeriesBlockRecipe(provider) `<br>实现调用 ` this.brassSeriesBlockRecipe(provider) `<br>实现调用 ` this.plywoodSeriesBlockRecipe(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L7) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L14) |

## SuperHeatingRecipeLoader

` public class SuperHeatingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SuperHeatingRecipe.builder() .transform(Blocks.LAVA_CAULDRON, 1000) .requires(Items.COBBLESTONE, 4) `<br>实现调用 ` SuperHeatingRecipe.builder() .transform(Blocks.LAVA_CAULDRON, 1000) `<br>实现调用 ` SuperHeatingRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L19) |
| ` public SuperHeatingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L18) |

## TempleDemandRecipeLoader

` public class TempleDemandRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L20)

Data generation loader for temple demand recipes. These are global fallback demands that apply to all bodies without body-specific demands defined in their SpecialCelestialBodyRecipe.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` createBlessingRecipe(provider) `<br>实现调用 ` createPunishmentRecipe(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L22) |
| ` public TempleDemandRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L20) |

## TimeWarpRecipeLoader

` public class TimeWarpRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` timeWarp(provider, ModItems.RESIN, 1, ModItems.AMBER, 1) `<br>实现调用 ` timeWarp(provider, Items.OBSIDIAN, 1, Items.CRYING_OBSIDIAN, 1) `<br>实现调用 ` timeWarp(provider, Items.CHARCOAL, 1, Items.COAL, 2) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L30) |
| ` public TimeWarpRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L29) |

## UnpackRecipeLoader

` public class UnpackRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` unpack(provider, Items.WET_SPONGE, ModItems.SPONGE_GEMMULE, 4) `<br>实现调用 ` unpack(provider, Items.MELON, Items.MELON_SLICE, 9) `<br>实现调用 ` unpack(provider, Items.SNOW_BLOCK, Items.SNOWBALL, 4) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L12) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L12) |
| ` public UnpackRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L11) |

## VanillaRecipesLoader

` public class VanillaRecipesLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/VanillaRecipesLoader.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ShapedRecipeBuilder.shaped(RecipeCategory.MISC, Items.ANVIL, 9) .pattern("AAA") .pattern(" B ") `<br>实现调用 ` ShapedRecipeBuilder.shaped(RecipeCategory.MISC, Items.ANVIL, 9) .pattern("AAA") `<br>实现调用 ` ShapedRecipeBuilder.shaped(RecipeCategory.MISC, Items.ANVIL, 9) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/VanillaRecipesLoader.java#L18) |
| ` public VanillaRecipesLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/VanillaRecipesLoader.java#L17) |
