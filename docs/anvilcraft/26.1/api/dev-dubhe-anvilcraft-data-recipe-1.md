# dev.dubhe.anvilcraft.data.recipe（AnvilCollisionCraftRecipeLoader 至 RecipeHandler）



## AnvilCollisionCraftRecipeLoader

` public class AnvilCollisionCraftRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getRegistries().lookupOrThrow(Registries.BLOCK) `<br>实现调用 ` provider.getRegistries() `<br>实现调用 ` AnvilCollisionCraftRecipe.builder() .anvil(blocks, ModBlockTags.ANVIL_TIER_0) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L19) |
| ` public AnvilCollisionCraftRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L18) |

## BlockCompressRecipeLoader

` public class BlockCompressRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` BlockCompressRecipeLoader.recipe(provider, Blocks.MOSS_BLOCK, Blocks.DIRT, Blocks.GRASS_BLOCK) `<br>实现调用 ` BlockCompressRecipeLoader.recipe( provider, Blocks.STONE, Blocks.DEEPSLATE ) `<br>实现调用 ` BlockCompressRecipeLoader.recipe( provider, Blocks.ICE, Blocks.PACKED_ICE ) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L15) |
| ` public BlockCompressRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L14) |

## BlockCrushRecipeLoader

` public class BlockCrushRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` BlockCrushRecipeLoader.blockCrush(provider, Blocks.COBBLESTONE, Blocks.GRAVEL) `<br>实现调用 ` BlockCrushRecipeLoader.blockCrush(provider, Blocks.GRAVEL, Blocks.SAND) `<br>实现调用 ` BlockCrushRecipeLoader.blockCrush(provider, Blocks.POLISHED_GRANITE, Blocks.GRANITE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L10) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L10) |
| ` public BlockCrushRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L9) |

## BlockSmearRecipeLoader

` public class BlockSmearRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` blockSmear(provider, Blocks.MOSS_BLOCK, Blocks.COBBLESTONE, Blocks.MOSSY_COBBLESTONE) `<br>实现调用 ` blockSmear(provider, Blocks.MOSS_BLOCK, Blocks.STONE_BRICKS, Blocks.MOSSY_STONE_BRICKS) `<br>实现调用 ` provider.getRegistries().lookupOrThrow(Registries.BLOCK).listElements().toList() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L20) |
| ` public BlockSmearRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L19) |

## ChargerChargingRecipeLoader

` public class ChargerChargingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` ChargerChargingRecipe.builder(items) .requires(Items.IRON_INGOT) .result(ModItems.MAGNET_INGOT) .power(-4) `<br>实现调用 ` ChargerChargingRecipe.builder(items) .requires(Items.IRON_INGOT) .result(ModItems.MAGNET_INGOT) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L14) |
| ` public ChargerChargingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L13) |

## ConcreteRecipeLoader

` public class ConcreteRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ConcreteRecipeLoader.initConcrete(provider) `<br>实现调用 ` ConcreteRecipeLoader.initCementStaining(provider) `<br>实现调用 ` ConcreteRecipeLoader.initCementDyeing(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L40) |
| ` public ConcreteRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L26) |

## DeformationRecipeLoader

` public class DeformationRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` DeformationRecipeLoader.registerTools(provider, DeformationRecipeLoader.WOODEN) `<br>实现调用 ` DeformationRecipeLoader.registerTools(provider, DeformationRecipeLoader.STONE) `<br>实现调用 ` DeformationRecipeLoader.registerTools(provider, DeformationRecipeLoader.IRON) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L47) |
| ` public DeformationRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L19) |

## EnergyWeaponMakeRecipeLoader

` public class EnergyWeaponMakeRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` EnergyWeaponMakeRecipe.builder() .requires(ModItems.SPECTRAL_SLINGSHOT, 1) `<br>实现调用 ` EnergyWeaponMakeRecipe.builder() `<br>实现调用 ` EnergyWeaponMakeRecipe.builder() .requires(ModBlocks.ACCELERATION_RING, 4) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L10) |
| ` public EnergyWeaponMakeRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L9) |

## FastCookingRecipeLoader

` public class FastCookingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` FastCookingRecipe.builder() .requires(items, ModItemTags.RESIN) .result(ModItems.HARDENED_RESIN) `<br>实现调用 ` FastCookingRecipe.builder() .requires(items, ModItemTags.RESIN) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L15) |
| ` public FastCookingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L14) |

## FluidMixingRecipeLoader

` public class FluidMixingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` FluidMixingRecipe.builder(provider.getRegistries().lookupOrThrow(Registries.FLUID)) `<br>实现调用 ` provider.getRegistries().lookupOrThrow(Registries.FLUID) `<br>实现调用 ` provider.getRegistries() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L10) |
| ` public FluidMixingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L9) |

## ItemCompressRecipeLoader

` public class ItemCompressRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` ItemCompressRecipe.builder() .requires(Items.BONE, 3) .result(Items.BONE_BLOCK) .save(provider) `<br>实现调用 ` ItemCompressRecipe.builder() .requires(Items.BONE, 3) .result(Items.BONE_BLOCK) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L34) |
| ` public ItemCompressRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L33) |

## ItemCrushRecipeLoader

` public class ItemCrushRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` ItemCrushRecipe.builder() .requires(items, Tags.Items.CROPS_WHEAT) .result(ModItems.FLOUR) `<br>实现调用 ` ItemCrushRecipe.builder() .requires(items, Tags.Items.CROPS_WHEAT) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L27) |
| ` public static void flower(RegistrumRecipeProvider provider, ItemLike flower, ItemLike result) ` | 实现调用 ` ItemCrushRecipe.builder().requires(flower).result(result, 2) `<br>实现调用 ` ItemCrushRecipe.builder().requires(flower) `<br>实现调用 ` ItemCrushRecipe.builder() `<br>[调用处 ItemCrushRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L183) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L249) |
| ` public static void flower(RegistrumRecipeProvider provider, ItemLike flower, ItemLike result, int resultNum) ` | 实现调用 ` ItemCrushRecipe.builder().requires(flower).result(result, resultNum) `<br>实现调用 ` ItemCrushRecipe.builder().requires(flower) `<br>实现调用 ` ItemCrushRecipe.builder() `<br>[调用处 ItemCrushRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L189) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L256) |
| ` public ItemCrushRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L26) |

## ItemInjectRecipeLoader

` public class ItemInjectRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ItemInjectRecipe.builder() .requires(Items.GOLD_INGOT, 2) .inputBlock(Blocks.NETHERRACK) `<br>实现调用 ` ItemInjectRecipe.builder() .requires(Items.GOLD_INGOT, 2) `<br>实现调用 ` ItemInjectRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L9) |
| ` public ItemInjectRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L8) |

## JewelCraftingRecipeLoader

` public class JewelCraftingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` JewelCraftingRecipe.builder(provider.getItems()) .requires(Tags.Items.STORAGE_BLOCKS_GOLD) `<br>实现调用 ` JewelCraftingRecipe.builder(provider.getItems()) `<br>实现调用 ` provider.getItems() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L12) |
| ` public JewelCraftingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L11) |

## LaserHitRecipeLoader

` public final class LaserHitRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider output) ` | 实现调用 ` ModBlocks.HEATED_NETHERITE_BLOCK.get() `<br>实现调用 ` ModBlocks.REDHOT_NETHERITE_BLOCK.get() `<br>实现调用 ` ModBlocks.GLOWING_NETHERITE_BLOCK.get() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L23) |

## MassInjectRecipeLoader

` public class MassInjectRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ImmutableMap.<TagKey<Item>, Integer>builder() .put(ModItemTags.TITANIUM_NUGGETS, 5) `<br>实现调用 ` ImmutableMap.<TagKey<Item>, Integer>builder() `<br>实现调用 ` tagRecipes.forEach((tag, mass) -> MassInjectRecipeLoader.addTag(provider, tag, mass)) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L15) |
| ` public MassInjectRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L14) |

## MeshRecipeLoader

` public class MeshRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MeshRecipe.builder() .requires(Items.GRAVEL) .result(Items.GRAVEL, 0.5F) .result(Items.FLINT, 0.25F) `<br>实现调用 ` MeshRecipe.builder() .requires(Items.GRAVEL) .result(Items.GRAVEL, 0.5F) `<br>实现调用 ` MeshRecipe.builder() .requires(Items.GRAVEL) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L10) |
| ` public MeshRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L9) |

## MineralFountainRecipeLoader

` public class MineralFountainRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` mineralFountainDeepslate(provider, Tags.Blocks.STORAGE_BLOCKS_RAW_COPPER, Blocks.DEEPSLATE_COPPER_ORE) `<br>实现调用 ` mineralFountainDeepslate(provider, Tags.Blocks.STORAGE_BLOCKS_RAW_IRON, Blocks.DEEPSLATE_IRON_ORE) `<br>实现调用 ` mineralFountainDeepslate(provider, Tags.Blocks.STORAGE_BLOCKS_RAW_GOLD, Blocks.DEEPSLATE_GOLD_ORE) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L30) |
| ` public MineralFountainRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L29) |

## MobTransformRecipeLoader

` public class MobTransformRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MobTransformRecipe.from(EntityType.COW).to(EntityType.RAVAGER).save(provider) `<br>实现调用 ` MobTransformRecipe.from(EntityType.COW).to(EntityType.RAVAGER) `<br>实现调用 ` MobTransformRecipe.from(EntityType.COW) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L12) |
| ` public MobTransformRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L11) |

## MobTransformWithItemRecipeLoader

` public class MobTransformWithItemRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ModBlocks.GIANT_ANVIL.asItem() `<br>实现调用 ` ModBlocks.GIANT_MONOLITH_CORE.asItem() `<br>实现调用 ` ModBlocks.GIANT_MONOLITH_LINE.asItem() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L11) |
| ` public MobTransformWithItemRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L10) |

## MultiBlockConversionRecipeLoader

` public class MultiBlockConversionRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getRegistries().lookupOrThrow(Registries.BLOCK) `<br>实现调用 ` provider.getRegistries() `<br>实现调用 ` MultiblockConversionRecipe.builder() .inputLayer("ABA", "CDC", "ABA") .inputLayer("E E", " F ", "E E") `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L31) |
| ` public MultiBlockConversionRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L30) |

## MultiBlockRecipeLoader

` public class MultiBlockRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getRegistries().lookupOrThrow(Registries.BLOCK) `<br>实现调用 ` provider.getRegistries() `<br>实现调用 ` MultiblockRecipe.builder(ModBlocks.GIANT_ANVIL) .layer("ABA", "CDE", "AFA") .layer(" ", " D ", " ") `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L22) |
| ` public MultiBlockRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L21) |

## MultipleToOneSmithingRecipeLoader

` public class MultipleToOneSmithingRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` MultipleToOneSmithingRecipeLoader.two(provider) `<br>实现调用 ` MultipleToOneSmithingRecipeLoader.four(provider) `<br>实现调用 ` MultipleToOneSmithingRecipeLoader.eight(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L19) |
| ` public static void two(RegistrumRecipeProvider provider) ` | 实现调用 ` TwoToOneSmithingRecipe.builder() .material(ModItems.WEATHERPROOF_CORE) .input(ModItems.BREATHING_HELMET) `<br>实现调用 ` TwoToOneSmithingRecipe.builder() .material(ModItems.WEATHERPROOF_CORE) `<br>实现调用 ` TwoToOneSmithingRecipe.builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L25) |
| ` public static void four(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` FourToOneSmithingRecipe.builder() .material(ModItems.HEAVY_HALBERD_CORE) .input(ModItems.FROST_METAL_SWORD) `<br>实现调用 ` FourToOneSmithingRecipe.builder() .material(ModItems.HEAVY_HALBERD_CORE) `<br>[调用处 MultipleToOneSmithingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L102) |
| ` public static void eight(RegistrumRecipeProvider provider) ` | 实现调用 ` EightToOneSmithingRecipe.builder() .material(ModItems.MULTIPHASE_MATTER) .input(Items.SHEARS) `<br>实现调用 ` EightToOneSmithingRecipe.builder() .material(ModItems.MULTIPHASE_MATTER) `<br>实现调用 ` EightToOneSmithingRecipe.builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L154) |
| ` public MultipleToOneSmithingRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L18) |

## NeutronIrradiationRecipeLoader

` public class NeutronIrradiationRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` provider.getItems() `<br>实现调用 ` NeutronIrradiationRecipe.builder() .requires(items, ModItemTags.URANIUM_INGOTS) `<br>实现调用 ` NeutronIrradiationRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L19) |
| ` public NeutronIrradiationRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L18) |

## PermutationRecipeLoader

` public class PermutationRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` PermutationRecipeLoader.registerWeaponsAndTools(provider) `<br>实现调用 ` PermutationRecipeLoader.registerHeavyItems(provider) `<br>实现调用 ` PermutationRecipe.builder() `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L45) |
| ` public PermutationRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L23) |

## PlanetResourceRecipeLoader

` public class PlanetResourceRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L24)

Data generation loader for planet resource recipes.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` PlanetResourceRecipeLoader.createMineralRecipe(provider) `<br>实现调用 ` PlanetResourceRecipeLoader.createFluidRecipes(provider) `<br>实现调用 ` PlanetResourceRecipeLoader.createGiantItemRecipes(provider) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L25) |
| ` public PlanetResourceRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L24) |

## PortalConversionRecipeLoader

` public class PortalConversionRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` PortalConversionRecipeLoader.spectral(provider, Blocks.DAMAGED_ANVIL, 0.01F) `<br>实现调用 ` PortalConversionRecipeLoader.spectral(provider, Blocks.CHIPPED_ANVIL, 0.02F) `<br>实现调用 ` PortalConversionRecipeLoader.spectral(provider, Blocks.ANVIL, 0.03F) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L12) |
| ` public PortalConversionRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L11) |

## ProceduralProcessRecipeLoader

` public class ProceduralProcessRecipeLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` ProceduralProcessRecipeBuilder.of(Blocks.SHULKER_BOX) `<br>实现调用 ` BlockCompressRecipe.builder() .input(Blocks.SHULKER_BOX) .input(Blocks.SHULKER_BOX) `<br>实现调用 ` BlockCompressRecipe.builder() .input(Blocks.SHULKER_BOX) `<br>[调用处 RecipeHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L17) |
| ` public ProceduralProcessRecipeLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L16) |

## RecipeHandler

` public class RecipeHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumRecipeProvider provider) ` | 实现调用 ` BlockCrushRecipeLoader.init(provider) `<br>实现调用 ` ItemCrushRecipeLoader.init(provider) `<br>实现调用 ` UnpackRecipeLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L6) |
| ` public RecipeHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java#L5) |
