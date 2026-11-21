# dev.dubhe.anvilcraft.data.tags



## BlockTagLoader

` public class BlockTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/BlockTagLoader.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Block> provider) ` | 初始化方块标签<br>参数 ` provider ` 提供器<br>实现调用 ` provider.rawBuilder(ModBlockTags.REDSTONE_TORCH) `<br>实现调用 ` BlockTagLoader.findId(Blocks.REDSTONE_WALL_TORCH) `<br>实现调用 ` BlockTagLoader.findId(Blocks.REDSTONE_TORCH) `<br>[调用处 TagsHandler.initBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/BlockTagLoader.java#L22) |
| ` public BlockTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/BlockTagLoader.java#L13) |

## DamageTypeTagLoader

` public class DamageTypeTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/DamageTypeTagLoader.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<DamageType> provider) ` | 初始化伤害类型标签<br>参数 ` provider ` 提供器<br>实现调用 ` provider.rawBuilder(tag).addOptionalElement(ModDamageTypes.PLANETARY_COLLAPSE.identifier()) `<br>实现调用 ` provider.rawBuilder(tag) `<br>实现调用 ` ModDamageTypes.PLANETARY_COLLAPSE.identifier() `<br>[调用处 TagsHandler.initDamageType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/DamageTypeTagLoader.java#L18) |
| ` public DamageTypeTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/DamageTypeTagLoader.java#L14) |

## EnchantmentTagLoader

` public class EnchantmentTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/EnchantmentTagLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Enchantment> provider) ` | 魔咒标签生成器初始化<br>参数 ` provider ` 提供器<br>实现调用 ` provider.rawBuilder(Tags.Enchantments.INCREASE_BLOCK_DROPS) `<br>实现调用 ` ModEnchantments.HARVEST_KEY.identifier() `<br>实现调用 ` provider.rawBuilder(EnchantmentTags.IN_ENCHANTING_TABLE) `<br>[调用处 TagsHandler.initEnchantment](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/EnchantmentTagLoader.java#L15) |
| ` public EnchantmentTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/EnchantmentTagLoader.java#L11) |

## EntityTypeTagLoader

` public class EntityTypeTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/EntityTypeTagLoader.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<EntityType<?>> provider) ` | 初始化实体类型标签<br>参数 ` provider ` 提供器<br>实现调用 ` provider.rawBuilder(ModEntityTypeTags.AMULET_VALID) `<br>实现调用 ` ModEntityTypeTags.EMERALD_AMULET_VALID.location() `<br>实现调用 ` ModEntityTypeTags.SAPPHIRE_AMULET_VALID.location() `<br>[调用处 TagsHandler.initEntityType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/EntityTypeTagLoader.java#L19) |
| ` public EntityTypeTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/EntityTypeTagLoader.java#L10) |

## FluidTagLoader

` public class FluidTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/FluidTagLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Fluid> provider) ` | 物品标签生成器初始化<br>参数 ` provider ` 提供器<br>实现调用 ` provider.rawBuilder(ModFluidTags.MENGER_SPONGE_CAN_ABSORB) .addElement(FluidTagLoader.findId(Fluids.WATER)) `<br>实现调用 ` provider.rawBuilder(ModFluidTags.MENGER_SPONGE_CAN_ABSORB) `<br>实现调用 ` FluidTagLoader.findId(Fluids.WATER) `<br>[调用处 TagsHandler.initFluid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/FluidTagLoader.java#L21) |
| ` public FluidTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/FluidTagLoader.java#L12) |

## ItemTagLoader

` public class ItemTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/ItemTagLoader.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Item> provider) ` | 物品标签生成器初始化<br>参数 ` provider ` 提供器<br>实现调用 ` provider.rawBuilder(ModItemTags.AUTO_ENCHANTING_TABLE_PRIMERS) .addElement(ModItems.EMERALD_AMULET.getId()) `<br>实现调用 ` provider.rawBuilder(ModItemTags.AUTO_ENCHANTING_TABLE_PRIMERS) `<br>实现调用 ` ModItems.EMERALD_AMULET.getId() `<br>[调用处 TagsHandler.initItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/ItemTagLoader.java#L24) |
| ` public ItemTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/ItemTagLoader.java#L20) |

## PoiTypeTagLoader

` public class PoiTypeTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/PoiTypeTagLoader.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<PoiType> provider) ` | 初始化兴趣点类型标签<br>参数 ` provider ` 提供器<br>执行 ` provider.rawBuilder(PoiTypeTags.ACQUIRABLE_JOB_SITE) .addElement(ModVillagers.JEWELER_POI.getId()) `<br>[调用处 TagsHandler.initPoiType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/PoiTypeTagLoader.java#L12) |
| ` public PoiTypeTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/PoiTypeTagLoader.java#L8) |

## TagsHandler

` public class TagsHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void initItem(RegistrumTagsProvider<Item> provider) ` | 执行 ` ItemTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L13) |
| ` public static void initBlock(RegistrumTagsProvider<Block> provider) ` | 执行 ` BlockTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L17) |
| ` public static void initFluid(RegistrumTagsProvider<Fluid> provider) ` | 执行 ` FluidTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L21) |
| ` public static void initEnchantment(RegistrumTagsProvider<Enchantment> provider) ` | 执行 ` EnchantmentTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L25) |
| ` public static void initDamageType(RegistrumTagsProvider<DamageType> provider) ` | 执行 ` DamageTypeTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L29) |
| ` public static void initEntityType(RegistrumTagsProvider<EntityType<?>> provider) ` | 执行 ` EntityTypeTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L33) |
| ` public static void initPoiType(RegistrumTagsProvider<PoiType> provider) ` | 执行 ` PoiTypeTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L37) |
| ` public TagsHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L12) |
