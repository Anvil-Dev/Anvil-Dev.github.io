# dev.dubhe.anvilcraft.data.tags



## BlockTagLoader

` public class BlockTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/BlockTagLoader.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Block> provider) ` | 初始化方块标签<br>参数 ` provider ` 提供器<br>实现调用 ` provider.addTag(ModBlockTags.REDSTONE_TORCH) .add(findResourceKey(Blocks.REDSTONE_WALL_TORCH)) `<br>实现调用 ` provider.addTag(ModBlockTags.REDSTONE_TORCH) `<br>实现调用 ` findResourceKey(Blocks.REDSTONE_WALL_TORCH) `<br>[调用处 TagsHandler.initBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/BlockTagLoader.java#L25) |
| ` public BlockTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/BlockTagLoader.java#L14) |

## DamageTypeTagLoader

` public class DamageTypeTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/DamageTypeTagLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<DamageType> provider) ` | 初始化伤害类型标签<br>参数 ` provider ` 提供器<br>实现调用 ` provider.addTag(ModDamageTypeTags.AMULET_VALID) .addOptionalTag(ModDamageTypeTags.TOPAZ_AMULET_VALID) `<br>实现调用 ` provider.addTag(ModDamageTypeTags.AMULET_VALID) `<br>实现调用 ` provider.addTag(ModDamageTypeTags.TOPAZ_AMULET_VALID) .addTag(DamageTypeTags.IS_LIGHTNING) `<br>[调用处 TagsHandler.initDamageType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/DamageTypeTagLoader.java#L18) |
| ` public DamageTypeTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/DamageTypeTagLoader.java#L12) |

## EnchantmentTagLoader

` public class EnchantmentTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/EnchantmentTagLoader.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Enchantment> provider) ` | 魔咒标签生成器初始化<br>参数 ` provider ` 提供器<br>实现调用 ` provider.addTag(Tags.Enchantments.INCREASE_BLOCK_DROPS) .addOptional(ModEnchantments.HARVEST_KEY.location()) `<br>实现调用 ` provider.addTag(Tags.Enchantments.INCREASE_BLOCK_DROPS) `<br>实现调用 ` ModEnchantments.HARVEST_KEY.location() `<br>[调用处 TagsHandler.initEnchantment](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/EnchantmentTagLoader.java#L17) |
| ` public EnchantmentTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/EnchantmentTagLoader.java#L11) |

## EntityTypeTagLoader

` public class EntityTypeTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/EntityTypeTagLoader.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<EntityType<?>> provider) ` | 初始化实体类型标签<br>参数 ` provider ` 提供器<br>实现调用 ` provider.addTag(ModEntityTypeTags.AMULET_VALID) .addOptionalTag(ModEntityTypeTags.EMERALD_AMULET_VALID) `<br>实现调用 ` provider.addTag(ModEntityTypeTags.AMULET_VALID) `<br>实现调用 ` provider.addTag(ModEntityTypeTags.EMERALD_AMULET_VALID) .add(findResourceKey(EntityType.IRON_GOLEM)) `<br>[调用处 TagsHandler.initEntityType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/EntityTypeTagLoader.java#L21) |
| ` public EntityTypeTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/EntityTypeTagLoader.java#L10) |

## FluidTagLoader

` public class FluidTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/FluidTagLoader.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Fluid> provider) ` | 物品标签生成器初始化<br>参数 ` provider ` 提供器<br>实现调用 ` provider.addTag(ModFluidTags.OIL) .add(findResourceKey(ModFluids.OIL.get())) `<br>实现调用 ` provider.addTag(ModFluidTags.OIL) `<br>实现调用 ` findResourceKey(ModFluids.OIL.get()) `<br>[调用处 TagsHandler.initFluid](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/FluidTagLoader.java#L23) |
| ` public FluidTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/FluidTagLoader.java#L12) |

## ItemTagLoader

` public class ItemTagLoader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/ItemTagLoader.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumTagsProvider<Item> provider) ` | 物品标签生成器初始化<br>参数 ` provider ` 提供器<br>实现调用 ` provider.addTag(ModItemTags.PLATES) .add(findResourceKey(Items.HEAVY_WEIGHTED_PRESSURE_PLATE)) `<br>实现调用 ` provider.addTag(ModItemTags.PLATES) `<br>实现调用 ` findResourceKey(Items.HEAVY_WEIGHTED_PRESSURE_PLATE) `<br>[调用处 TagsHandler.initItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/ItemTagLoader.java#L28) |
| ` public ItemTagLoader() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/ItemTagLoader.java#L22) |

## TagsHandler

` public class TagsHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void initItem(RegistrumTagsProvider<Item> provider) ` | 执行 ` ItemTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L12) |
| ` public static void initBlock(RegistrumTagsProvider<Block> provider) ` | 执行 ` BlockTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L16) |
| ` public static void initFluid(RegistrumTagsProvider<Fluid> provider) ` | 执行 ` FluidTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L20) |
| ` public static void initEnchantment(RegistrumTagsProvider<Enchantment> provider) ` | 执行 ` EnchantmentTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L24) |
| ` public static void initDamageType(RegistrumTagsProvider<DamageType> provider) ` | 执行 ` DamageTypeTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L28) |
| ` public static void initEntityType(RegistrumTagsProvider<EntityType<?>> provider) ` | 执行 ` EntityTypeTagLoader.init(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L32) |
| ` public TagsHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/tags/TagsHandler.java#L11) |
