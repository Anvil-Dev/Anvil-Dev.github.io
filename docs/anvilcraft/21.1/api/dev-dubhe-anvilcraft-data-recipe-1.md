# dev.dubhe.anvilcraft.data.recipe（AnvilCollisionCraftRecipeLoader 至 RecipeHandler）



## AnvilCollisionCraftRecipeLoader

` public class AnvilCollisionCraftRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` AnvilCollisionCraftRecipe.builder() .anvil(ModBlockTags.ANVIL_TIER_0) `<br>实现调用 ` AnvilCollisionCraftRecipe.builder() `<br>实现调用 ` ModBlocks.NEGATIVE_MATTER_BLOCK.get() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L17) |
| ` public AnvilCollisionCraftRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L16) |

## BlockCompressRecipeLoader

` public class BlockCompressRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` blockCompress(provider, Blocks.STONE, Blocks.STONE, Blocks.DEEPSLATE) `<br>实现调用 ` blockCompress(provider, Blocks.ICE, Blocks.ICE, Blocks.PACKED_ICE) `<br>实现调用 ` blockCompress(provider, Blocks.PACKED_ICE, Blocks.PACKED_ICE, Blocks.BLUE_ICE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L13) |
| ` public BlockCompressRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L12) |

## BlockCrushRecipeLoader

` public class BlockCrushRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` blockCrush(provider, Blocks.COBBLESTONE, Blocks.GRAVEL) `<br>实现调用 ` blockCrush(provider, Blocks.GRAVEL, Blocks.SAND) `<br>实现调用 ` blockCrush(provider, Blocks.POLISHED_GRANITE, Blocks.GRANITE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L10) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L10) |
| ` public BlockCrushRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L9) |

## BlockSmearRecipeLoader

` public class BlockSmearRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` blockSmear(provider, Blocks.MOSS_BLOCK, Blocks.COBBLESTONE, Blocks.MOSSY_COBBLESTONE) `<br>实现调用 ` blockSmear(provider, Blocks.MOSS_BLOCK, Blocks.STONE_BRICKS, Blocks.MOSSY_STONE_BRICKS) `<br>实现调用 ` BuiltInRegistries.BLOCK.holders().toList() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L19) |
| ` public BlockSmearRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L18) |

## ChargerChargingRecipeLoader

` public class ChargerChargingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ChargerChargingRecipe.builder() .requires(Items.IRON_INGOT) .result(ModItems.MAGNET_INGOT) .power(-4) `<br>实现调用 ` ChargerChargingRecipe.builder() .requires(Items.IRON_INGOT) .result(ModItems.MAGNET_INGOT) `<br>实现调用 ` ChargerChargingRecipe.builder() .requires(Items.IRON_INGOT) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L12) |
| ` public ChargerChargingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L11) |

## ConcreteRecipeLoader

` public class ConcreteRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` initConcrete(provider) `<br>实现调用 ` initCementStaining(provider) `<br>实现调用 ` initCementDyeing(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L39) |
| ` public ConcreteRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L25) |

## DeformationRecipeLoader

` public class DeformationRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` DeformationRecipeLoader.registerTools(provider, DeformationRecipeLoader.WOODEN) `<br>实现调用 ` DeformationRecipeLoader.registerTools(provider, DeformationRecipeLoader.STONE) `<br>实现调用 ` DeformationRecipeLoader.registerTools(provider, DeformationRecipeLoader.IRON) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L47) |
| ` public DeformationRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L19) |

## EnergyWeaponMakeRecipeLoader

` public class EnergyWeaponMakeRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` EnergyWeaponMakeRecipe.builder() .requires(ModItems.SPECTRAL_SLINGSHOT, 1) `<br>实现调用 ` EnergyWeaponMakeRecipe.builder() `<br>实现调用 ` ModItems.SPECTRAL_WEAPON_LAUNCHER.asStack() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L9) |
| ` public EnergyWeaponMakeRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L8) |

## FastCookingRecipeLoader

` public class FastCookingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` FastCookingRecipe.builder() .requires(ModItemTags.RESIN) .result(ModItems.HARDENED_RESIN) .save(provider) `<br>实现调用 ` FastCookingRecipe.builder() .requires(ModItemTags.RESIN) .result(ModItems.HARDENED_RESIN) `<br>实现调用 ` FastCookingRecipe.builder() .requires(ModItemTags.RESIN) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L13) |
| ` public FastCookingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L12) |

## FluidMixingRecipeLoader

` public class FluidMixingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 执行 ` FluidMixingRecipe.builder() .requires(Fluids.WATER, 1000) .requires(Fluids.LAVA, 1000) .result(Items.OBSIDIAN, 1) .save(provider, "obsidian") `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L9) |
| ` public FluidMixingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L8) |

## ItemCompressRecipeLoader

` public class ItemCompressRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ItemCompressRecipe.builder() .requires(Items.BONE, 3) .result(new ItemStack(Items.BONE_BLOCK)) .save(provider) `<br>实现调用 ` ItemCompressRecipe.builder() .requires(Items.BONE, 3) .result(new ItemStack(Items.BONE_BLOCK)) `<br>实现调用 ` ItemCompressRecipe.builder() .requires(Items.BONE, 3) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L28) |
| ` public ItemCompressRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L27) |

## ItemCrushRecipeLoader

` public class ItemCrushRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ItemCrushRecipe.builder() .requires(Tags.Items.CROPS_WHEAT) .result(ModFoodItems.FLOUR) `<br>实现调用 ` ItemCrushRecipe.builder() .requires(Tags.Items.CROPS_WHEAT) `<br>实现调用 ` ItemCrushRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L25) |
| ` public static void flower(RegistrumRecipeProvider provider, ItemLike flower, ItemLike result) ` | 实现调用 ` ItemCrushRecipe.builder() .requires(flower) .result(result, 2) `<br>实现调用 ` ItemCrushRecipe.builder() .requires(flower) `<br>实现调用 ` ItemCrushRecipe.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L266) |
| ` public static void flower(RegistrumRecipeProvider provider, ItemLike flower, ItemLike result, int resultNum) ` | 实现调用 ` ItemCrushRecipe.builder() .requires(flower) .result(result, resultNum) `<br>实现调用 ` ItemCrushRecipe.builder() .requires(flower) `<br>实现调用 ` ItemCrushRecipe.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L273) |
| ` public ItemCrushRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L24) |

## ItemInjectRecipeLoader

` public class ItemInjectRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ItemInjectRecipe.builder() .requires(Items.GOLD_INGOT, 2) .inputBlock(Blocks.NETHERRACK) `<br>实现调用 ` ItemInjectRecipe.builder() .requires(Items.GOLD_INGOT, 2) `<br>实现调用 ` ItemInjectRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L9) |
| ` public ItemInjectRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L8) |

## JewelCraftingRecipeLoader

` public class JewelCraftingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` JewelCraftingRecipe.builder() .requires(Tags.Items.STORAGE_BLOCKS_GOLD) .requires(Items.EMERALD, 2) `<br>实现调用 ` JewelCraftingRecipe.builder() .requires(Tags.Items.STORAGE_BLOCKS_GOLD) `<br>实现调用 ` JewelCraftingRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L13) |
| ` public JewelCraftingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L12) |

## LaserHitRecipeLoader

` public final class LaserHitRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RecipeOutput output) ` | 实现调用 ` ModBlocks.HEATED_NETHERITE_BLOCK.get() `<br>实现调用 ` ModBlocks.REDHOT_NETHERITE_BLOCK.get() `<br>实现调用 ` ModBlocks.GLOWING_NETHERITE_BLOCK.get() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L21) |

## MassInjectRecipeLoader

` public class MassInjectRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ImmutableMap.<TagKey<Item>, Integer>builder() .put(ModItemTags.TITANIUM_NUGGETS, 5) `<br>实现调用 ` ImmutableMap.<TagKey<Item>, Integer>builder() `<br>实现调用 ` tagRecipes.forEach((tag, mass) -> addTag(provider, tag, mass)) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L15) |
| ` public MassInjectRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L14) |

## MeshRecipeLoader

` public class MeshRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MeshRecipe.builder() .requires(Items.GRAVEL) .result(Items.GRAVEL, 0.5f) .result(Items.FLINT, 0.25f) `<br>实现调用 ` MeshRecipe.builder() .requires(Items.GRAVEL) .result(Items.GRAVEL, 0.5f) `<br>实现调用 ` MeshRecipe.builder() .requires(Items.GRAVEL) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L10) |
| ` public MeshRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L9) |

## MineralFountainRecipeLoader

` public class MineralFountainRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` mineralFountainDeepslate(provider, Tags.Blocks.STORAGE_BLOCKS_RAW_COPPER, Blocks.DEEPSLATE_COPPER_ORE) `<br>实现调用 ` mineralFountainDeepslate(provider, Tags.Blocks.STORAGE_BLOCKS_RAW_IRON, Blocks.DEEPSLATE_IRON_ORE) `<br>实现调用 ` mineralFountainDeepslate(provider, Tags.Blocks.STORAGE_BLOCKS_RAW_GOLD, Blocks.DEEPSLATE_GOLD_ORE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L28) |
| ` public MineralFountainRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L27) |

## MobTransformRecipeLoader

` public class MobTransformRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MobTransformRecipe.from(EntityType.COW).to(EntityType.RAVAGER).save(provider) `<br>实现调用 ` MobTransformRecipe.from(EntityType.COW).to(EntityType.RAVAGER) `<br>实现调用 ` MobTransformRecipe.from(EntityType.COW) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L12) |
| ` public MobTransformRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L11) |

## MobTransformWithItemRecipeLoader

` public class MobTransformWithItemRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ModBlocks.GIANT_ANVIL.asStack() `<br>实现调用 ` ModBlocks.GIANT_MONOLITH_CORE.asStack() `<br>实现调用 ` ModBlocks.GIANT_MONOLITH_LINE.asStack() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L10) |
| ` public MobTransformWithItemRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L9) |

## MultiBlockConversionRecipeLoader

` public class MultiBlockConversionRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MultiblockConversionRecipe.builder() .inputLayer("ABA", "CDC", "ABA") .inputLayer("E E", " F ", "E E") `<br>实现调用 ` MultiblockConversionRecipe.builder() .inputLayer("ABA", "CDC", "ABA") `<br>实现调用 ` MultiblockConversionRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L34) |
| ` public MultiBlockConversionRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L33) |

## MultiBlockRecipeLoader

` public class MultiBlockRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MultiblockRecipe.builder(ModBlocks.GIANT_ANVIL) .layer("ABA", "CDE", "AFA") .layer(" ", " D ", " ") `<br>实现调用 ` MultiblockRecipe.builder(ModBlocks.GIANT_ANVIL) .layer("ABA", "CDE", "AFA") `<br>实现调用 ` MultiblockRecipe.builder(ModBlocks.GIANT_ANVIL) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L21) |
| ` public MultiBlockRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L20) |

## MultipleToOneSmithingRecipeLoader

` public class MultipleToOneSmithingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MultipleToOneSmithingRecipeLoader.two(provider) `<br>实现调用 ` MultipleToOneSmithingRecipeLoader.four(provider) `<br>实现调用 ` MultipleToOneSmithingRecipeLoader.eight(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L17) |
| ` public static void two(RegistrumRecipeProvider provider) ` | 实现调用 ` TwoToOneSmithingRecipe.builder() .material(ModItems.WEATHERPROOF_CORE) .input(ModItems.BREATHING_HELMET) `<br>实现调用 ` TwoToOneSmithingRecipe.builder() .material(ModItems.WEATHERPROOF_CORE) `<br>实现调用 ` TwoToOneSmithingRecipe.builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L23) |
| ` public static void four(RegistrumRecipeProvider provider) ` | 实现调用 ` FourToOneSmithingRecipe.builder() .material(ModItems.HEAVY_HALBERD_CORE) .input(ModItems.FROST_METAL_SWORD) `<br>实现调用 ` FourToOneSmithingRecipe.builder() .material(ModItems.HEAVY_HALBERD_CORE) `<br>实现调用 ` FourToOneSmithingRecipe.builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L100) |
| ` public static void eight(RegistrumRecipeProvider provider) ` | 实现调用 ` EightToOneSmithingRecipe.builder() .material(ModItems.MULTIPHASE_MATTER) .input(Items.SHEARS) `<br>实现调用 ` EightToOneSmithingRecipe.builder() .material(ModItems.MULTIPHASE_MATTER) `<br>实现调用 ` EightToOneSmithingRecipe.builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L151) |
| ` public MultipleToOneSmithingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L16) |

## NeutronIrradiationRecipeLoader

` public class NeutronIrradiationRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` NeutronIrradiationRecipe.builder() .requires(ModItemTags.URANIUM_INGOTS) .result(ModItems.PLUTONIUM_NUGGET, 6) `<br>实现调用 ` NeutronIrradiationRecipe.builder() .requires(ModItemTags.URANIUM_INGOTS) `<br>实现调用 ` NeutronIrradiationRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L17) |
| ` public NeutronIrradiationRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L16) |

## PermutationRecipeLoader

` public class PermutationRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` PermutationRecipeLoader.registerWeaponsAndTools(provider) `<br>实现调用 ` PermutationRecipeLoader.registerHeavyItems(provider) `<br>实现调用 ` PermutationRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L45) |
| ` public PermutationRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L23) |

## PlanetResourceRecipeLoader

` public class PlanetResourceRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L16)

Data generation loader for planet resource recipes.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` createMineralRecipe(provider) `<br>实现调用 ` createFluidRecipes(provider) `<br>实现调用 ` createGiantItemRecipes(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L17) |
| ` public PlanetResourceRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L16) |

## PortalConversionRecipeLoader

` public class PortalConversionRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` PortalConversionRecipeLoader.spectral(provider, Blocks.DAMAGED_ANVIL, 0.01F) `<br>实现调用 ` PortalConversionRecipeLoader.spectral(provider, Blocks.CHIPPED_ANVIL, 0.02F) `<br>实现调用 ` PortalConversionRecipeLoader.spectral(provider, Blocks.ANVIL, 0.03F) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L12) |
| ` public PortalConversionRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L11) |

## ProceduralProcessRecipeLoader

` public class ProceduralProcessRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ProceduralProcessRecipeBuilder.of(Blocks.SHULKER_BOX) `<br>实现调用 ` BlockCompressRecipe.builder() .input(Blocks.SHULKER_BOX) .input(Blocks.SHULKER_BOX) `<br>实现调用 ` BlockCompressRecipe.builder() .input(Blocks.SHULKER_BOX) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L16) |
| ` public ProceduralProcessRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L15) |

## RecipeHandler

` public class RecipeHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` BlockCrushRecipeLoader.init(provider) `<br>实现调用 ` ItemCrushRecipeLoader.init(provider) `<br>实现调用 ` UnpackRecipeLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L6) |
| ` public RecipeHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L5) |
