# dev.dubhe.anvilcraft.init.storage



## ModCategories

` public class ModCategories `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<ICategory> MINECRAFT ` | 初值 ` ModCategories.key("minecraft") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L26) |
| ` public static final ResourceKey<ICategory> BLOCK ` | 初值 ` ModCategories.key("block") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L27) |
| ` public static final ResourceKey<ICategory> UNSTACKABLE ` | 初值 ` ModCategories.key("unstackable") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L28) |
| ` public static final ResourceKey<ICategory> FOOD_AND_DRINK ` | 初值 ` ModCategories.key("food_and_drink") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L29) |
| ` public static final ResourceKey<ICategory> ANVILCRAFT ` | 初值 ` ModCategories.key("anvilcraft") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L30) |
| ` public static final ResourceKey<ICategory> REDSTONE ` | 初值 ` ModCategories.key("redstone") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L31) |
| ` public static final ResourceKey<ICategory> ENCHANTED ` | 初值 ` ModCategories.key("enchanted") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L32) |
| ` public static final ResourceKey<ICategory> FLUID ` | 初值 ` ModCategories.key("fluid") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L33) |
| ` public static void bootstrap(BootstrapContext<ICategory> ctx) ` | 实现调用 ` ctx.register(ModCategories.BLOCK, BlockCategory.INSTANCE) `<br>实现调用 ` ctx.register(ModCategories.UNSTACKABLE, UnstackableCategory.INSTANCE) `<br>实现调用 ` ctx.register(ModCategories.FLUID, FluidCategory.INSTANCE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L35) |
| ` public ModCategories() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L25) |

## ModCategoryTypes

` public class ModCategoryTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<ICategory.Type<?>, BlockCategory.Type> BLOCK ` | 初值 ` REGISTER .register("block", BlockCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L27) |
| ` public static final DeferredHolder<ICategory.Type<?>, EnchantedCategory.Type> ENCHANTED ` | 初值 ` REGISTER .register("enchanted", EnchantedCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L29) |
| ` public static final DeferredHolder<ICategory.Type<?>, UnstackableCategory.Type> UNSTACKABLE ` | 初值 ` REGISTER .register("unstackable", UnstackableCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L31) |
| ` public static final DeferredHolder<ICategory.Type<?>, AndCategory.Type> AND ` | 初值 ` REGISTER.register("and", AndCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L33) |
| ` public static final DeferredHolder<ICategory.Type<?>, OrCategory.Type> OR ` | 初值 ` REGISTER.register("or", OrCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L34) |
| ` public static final DeferredHolder<ICategory.Type<?>, HasComponentCategory.Type> HAS_COMPONENT ` | 初值 ` REGISTER .register("has_component", HasComponentCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L35) |
| ` public static final DeferredHolder<ICategory.Type<?>, NamespaceCategory.Type> NAMESPACE ` | 初值 ` REGISTER .register("namespace", NamespaceCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L37) |
| ` public static final DeferredHolder<ICategory.Type<?>, CreativeModeTabCategory.Type> CREATIVE_MODE_TAB ` | 初值 ` REGISTER .register("creative_mode_tab", CreativeModeTabCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L39) |
| ` public static final DeferredHolder<ICategory.Type<?>, FilterCategory.Type> FILTER ` | 初值 ` REGISTER .register("filter", FilterCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L41) |
| ` public static final DeferredHolder<ICategory.Type<?>, CraftingBookCategoryCategory.Type> CRAFTING_BOOK_CATEGORY ` | 初值 ` REGISTER .register("crafting_book_category", CraftingBookCategoryCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L43) |
| ` public static final DeferredHolder<ICategory.Type<?>, FluidCategory.Type> FLUID ` | 初值 ` REGISTER .register("fluid", FluidCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L45) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` REGISTER.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L48) |
| ` public ModCategoryTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L21) |

## ModStorageTypes

` public class ModStorageTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<IStorageType<?>, IStorageType<CrateStorage>> CRATE ` | 初值 ` ModStorageTypes.of( "crate", CrateStorage::new, CrateStorage.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L24) |
| ` public static final DeferredHolder<IStorageType<?>, IStorageType<LargeCrateStorage>> LARGE_CRATE ` | 初值 ` ModStorageTypes.of( "large_crate", LargeCrateStorage::new, LargeCrateStorage.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L29) |
| ` public static final DeferredHolder<IStorageType<?>, IStorageType<ShulkerContainerStorage>> SHULKER_CONTAINER ` | 初值 ` ModStorageTypes.of( "shulker_container", ShulkerContainerStorage::new, ShulkerContainerStorage.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L34) |
| ` public static final DeferredHolder<IStorageType<?>, IStorageType<HyperdimensionStorage>> HYPERDIMENSION ` | 初值 ` ModStorageTypes.of( "hyperdimension", HyperdimensionStorage::new, HyperdimensionStorage.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L39) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` ModStorageTypes.REGISTER.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L75) |
| ` public ModStorageTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModStorageTypes.java#L18) |
