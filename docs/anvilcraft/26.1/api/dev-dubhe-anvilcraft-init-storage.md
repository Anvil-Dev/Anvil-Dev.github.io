# dev.dubhe.anvilcraft.init.storage



## ModCategories

` public class ModCategories `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<ICategory> MINECRAFT ` | 初值 ` ModCategories.key("minecraft") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L34) |
| ` public static final ResourceKey<ICategory> BLOCK ` | 初值 ` ModCategories.key("block") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L35) |
| ` public static final ResourceKey<ICategory> UNSTACKABLE ` | 初值 ` ModCategories.key("unstackable") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L36) |
| ` public static final ResourceKey<ICategory> FOOD_AND_DRINK ` | 初值 ` ModCategories.key("food_and_drink") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L37) |
| ` public static final ResourceKey<ICategory> ANVILCRAFT ` | 初值 ` ModCategories.key("anvilcraft") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L38) |
| ` public static final ResourceKey<ICategory> REDSTONE ` | 初值 ` ModCategories.key("redstone") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L39) |
| ` public static final ResourceKey<ICategory> ENCHANTED ` | 初值 ` ModCategories.key("enchanted") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L40) |
| ` public static final ResourceKey<ICategory> FLUID ` | 初值 ` ModCategories.key("fluid") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L41) |
| ` public static void bootstrap(BootstrapContext<ICategory> ctx) ` | 实现调用 ` ctx.register(ModCategories.BLOCK, BlockCategory.INSTANCE) `<br>实现调用 ` ctx.register(ModCategories.UNSTACKABLE, UnstackableCategory.INSTANCE) `<br>实现调用 ` ctx.register(ModCategories.FLUID, FluidCategory.INSTANCE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L43) |
| ` public ModCategories() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L33) |

## ModCategoryTypes

` public class ModCategoryTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<ICategory.Type<?>, BlockCategory.Type> BLOCK ` | 初值 ` ModCategoryTypes.REGISTER .register("block", BlockCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L27) |
| ` public static final DeferredHolder<ICategory.Type<?>, EnchantedCategory.Type> ENCHANTED ` | 初值 ` ModCategoryTypes.REGISTER .register("enchanted", EnchantedCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L29) |
| ` public static final DeferredHolder<ICategory.Type<?>, UnstackableCategory.Type> UNSTACKABLE ` | 初值 ` ModCategoryTypes.REGISTER .register("unstackable", UnstackableCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L31) |
| ` public static final DeferredHolder<ICategory.Type<?>, AndCategory.Type> AND ` | 初值 ` ModCategoryTypes.REGISTER.register( "and", AndCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L33) |
| ` public static final DeferredHolder<ICategory.Type<?>, OrCategory.Type> OR ` | 初值 ` ModCategoryTypes.REGISTER.register( "or", OrCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L35) |
| ` public static final DeferredHolder<ICategory.Type<?>, HasComponentCategory.Type> HAS_COMPONENT ` | 初值 ` ModCategoryTypes.REGISTER .register("has_component", HasComponentCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L37) |
| ` public static final DeferredHolder<ICategory.Type<?>, NamespaceCategory.Type> NAMESPACE ` | 初值 ` ModCategoryTypes.REGISTER .register("namespace", NamespaceCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L39) |
| ` public static final DeferredHolder<ICategory.Type<?>, CreativeModeTabCategory.Type> CREATIVE_MODE_TAB ` | 初值 ` ModCategoryTypes.REGISTER .register("creative_mode_tab", CreativeModeTabCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L41) |
| ` public static final DeferredHolder<ICategory.Type<?>, RecipeBookCategoryCategory.Type> RECIPE_BOOK_CATEGORY ` | 初值 ` ModCategoryTypes.REGISTER .register("recipe_book_category", RecipeBookCategoryCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L43) |
| ` public static final DeferredHolder<ICategory.Type<?>, FilterCategory.Type> FILTER ` | 初值 ` ModCategoryTypes.REGISTER .register("filter", FilterCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L45) |
| ` public static final DeferredHolder<ICategory.Type<?>, FluidCategory.Type> FLUID ` | 初值 ` ModCategoryTypes.REGISTER .register("fluid", FluidCategory.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L48) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` ModCategoryTypes.REGISTER.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L132) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L51) |
| ` public ModCategoryTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java#L21) |
