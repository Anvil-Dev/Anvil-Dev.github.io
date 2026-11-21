# dev.dubhe.anvilcraft.data.recipe（ShapedRecipeLoader 至 VanillaRecipesLoader）



## ShapedRecipeLoader

` public class ShapedRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShapedRecipeLoader(RegistrumRecipeProvider provider) ` | 实现调用 ` this.nineToOne(provider) `<br>实现调用 ` this.controlValve(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L8) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L16) |
| ` public void nineToOne(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` this.nine21(provider, RecipeCategory.BUILDING_BLOCKS, ModItemTags.BRONZE_INGOTS, ModBlocks.BRONZE_BLOCK) `<br>实现调用 ` this.nine21(provider, RecipeCategory.BUILDING_BLOCKS, ModItemTags.BRASS_INGOTS, ModBlocks.BRASS_BLOCK) `<br>[调用处 ShapedRecipeLoader.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L38) |

## SolidLiquidRecipeLoader

` public class SolidLiquidRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SolidLiquidRecipeLoader.solidLiquid(provider, Items.DIRT, Items.MUD) `<br>实现调用 ` SolidLiquidRecipeLoader.solidLiquid(provider, Items.CRIMSON_FUNGUS, Items.NETHER_WART_BLOCK) `<br>实现调用 ` SolidLiquidRecipeLoader.solidLiquid(provider, Items.WARPED_FUNGUS, Items.WARPED_WART_BLOCK) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L31) |
| ` public SolidLiquidRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L30) |

## SpecialCelestialBodyRecipeLoader

` public class SpecialCelestialBodyRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SpecialCelestialBodyRecipeLoader.createOverworldLike(provider) `<br>实现调用 ` SpecialCelestialBodyRecipeLoader.createVoidPlanet(provider) `<br>实现调用 ` SpecialCelestialBodyRecipeLoader.createMun(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L25) |
| ` public SpecialCelestialBodyRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L23) |

## SpecialCraftingRecipeLoader

` public class SpecialCraftingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SpecialRecipeBuilder.special(CelestialAnvilRecipe::new) .save(provider, AnvilCraft.recipe("celestial_anvil")) `<br>实现调用 ` SpecialRecipeBuilder.special(CelestialAnvilRecipe::new) `<br>实现调用 ` AnvilCraft.recipe("celestial_anvil") `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L12) |
| ` public SpecialCraftingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L10) |

## SqueezingRecipeLoader

` public class SqueezingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SqueezingRecipeLoader.squeezing(provider, Blocks.WET_SPONGE, Blocks.SPONGE, Blocks.WATER_CAULDRON, 250) `<br>实现调用 ` SqueezingRecipeLoader.squeezing(provider, Blocks.MOSS_BLOCK, Blocks.MOSS_CARPET, Blocks.WATER_CAULDRON, 250) `<br>实现调用 ` SqueezingRecipeLoader.squeezing(provider, Blocks.MAGMA_BLOCK, Blocks.NETHERRACK, Blocks.LAVA_CAULDRON, 250) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L12) |
| ` public static void squeezing(RegistrumRecipeProvider provider, Block requires, Block result, Block cauldron, int produce) ` | 实现调用 ` SqueezingRecipe.builder().requires(requires).result(result).transform(cauldron).produce(produce) `<br>实现调用 ` SqueezingRecipe.builder().requires(requires).result(result).transform(cauldron) `<br>实现调用 ` SqueezingRecipe.builder().requires(requires).result(result) `<br>[调用处 SqueezingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L37) |
| ` public SqueezingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L11) |

## StampingRecipeLoader

` public class StampingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` StampingRecipeLoader.stamping(provider, Items.IRON_INGOT, Items.HEAVY_WEIGHTED_PRESSURE_PLATE) `<br>实现调用 ` StampingRecipeLoader.stamping(provider, Items.GOLD_INGOT, Items.LIGHT_WEIGHTED_PRESSURE_PLATE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L17) |
| ` public StampingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L16) |

## StoneCutterRecipeLoader

` public class StoneCutterRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoneCutterRecipeLoader(RegistrumRecipeProvider provider) ` | 实现调用 ` this.bronzeSeriesBlockRecipe(provider) `<br>实现调用 ` this.brassSeriesBlockRecipe(provider) `<br>实现调用 ` this.plywoodSeriesBlockRecipe(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L7) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L16) |
| ` public void bronzeSeriesBlockRecipe(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` Ingredient.of(ModBlocks.BRONZE_BLOCK) `<br>实现调用 ` AnvilCraftDatagen.hasItem(ModBlocks.BRONZE_BLOCK) `<br>[调用处 StoneCutterRecipeLoader.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L101) |
| ` public void brassSeriesBlockRecipe(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` Ingredient.of(ModBlocks.BRASS_BLOCK) `<br>实现调用 ` AnvilCraftDatagen.hasItem(ModBlocks.BRASS_BLOCK) `<br>[调用处 StoneCutterRecipeLoader.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L203) |
| ` public void plywoodSeriesBlockRecipe(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` Ingredient.of(ModBlocks.PLYWOOD_BLOCK) `<br>实现调用 ` AnvilCraftDatagen.hasItem(ModBlocks.PLYWOOD_BLOCK) `<br>[调用处 StoneCutterRecipeLoader.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StoneCutterRecipeLoader.java#L305) |

## SuperHeatingRecipeLoader

` public class SuperHeatingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` SuperHeatingRecipe.builder() .transform(Blocks.LAVA_CAULDRON, 1000) .requires(Items.COBBLESTONE, 4) `<br>实现调用 ` SuperHeatingRecipe.builder() .transform(Blocks.LAVA_CAULDRON, 1000) `<br>实现调用 ` SuperHeatingRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L18) |
| ` public SuperHeatingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L17) |

## TempleDemandRecipeLoader

` public class TempleDemandRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L21)

Data generation loader for temple demand recipes.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` TempleDemandRecipeLoader.createBlessingRecipe(provider) `<br>实现调用 ` TempleDemandRecipeLoader.createPunishmentRecipe(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L23) |
| ` public TempleDemandRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L21) |

## TimeWarpRecipeLoader

` public class TimeWarpRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` timeWarp(provider, ModItems.RESIN, 1, ModItems.AMBER, 1) `<br>实现调用 ` timeWarp(provider, Items.OBSIDIAN, 1, Items.CRYING_OBSIDIAN, 1) `<br>实现调用 ` timeWarp(provider, Items.CHARCOAL, 1, Items.COAL, 2) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L35) |
| ` public TimeWarpRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L34) |

## UnpackRecipeLoader

` public class UnpackRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` UnpackRecipeLoader.unpack(provider, Items.WET_SPONGE, ModItems.SPONGE_GEMMULE, 4) `<br>实现调用 ` UnpackRecipeLoader.unpack(provider, Items.MELON, Items.MELON_SLICE, 9) `<br>实现调用 ` UnpackRecipeLoader.unpack(provider, Items.SNOW_BLOCK, Items.SNOWBALL, 4) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L12) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L12) |
| ` public UnpackRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L11) |

## VanillaRecipesLoader

` public class VanillaRecipesLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/VanillaRecipesLoader.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` ShapedRecipeBuilder.shaped(lookup, RecipeCategory.MISC, Items.ANVIL, 9) .pattern("AAA") .pattern(" B ") `<br>实现调用 ` ShapedRecipeBuilder.shaped(lookup, RecipeCategory.MISC, Items.ANVIL, 9) .pattern("AAA") `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/VanillaRecipesLoader.java#L20) |
| ` public VanillaRecipesLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/VanillaRecipesLoader.java#L19) |
