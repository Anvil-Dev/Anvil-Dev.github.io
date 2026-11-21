# dev.dubhe.anvilcraft.init.item（ModItemGroups 至 ModItemSubPredicates）



## ModItemGroups

` public class ModItemGroups `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L34)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_TOOLS_AND_UTILITIES ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("tools_and_utilities")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L47) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_INGREDIENTS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("ingredients")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L49) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_FUNCTIONAL_BLOCKS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("functional_blocks")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L51) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_BUILDING_BLOCKS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("building_blocks")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L53) |
| ` @Deprecated public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_TOOL ` | 初值 ` ANVILCRAFT_TOOLS_AND_UTILITIES ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L55) |
| ` @Deprecated public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_FUNCTION_BLOCK ` | 初值 ` ANVILCRAFT_FUNCTIONAL_BLOCKS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L58) |
| ` @Deprecated public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_BUILD_BLOCK ` | 初值 ` ANVILCRAFT_BUILDING_BLOCKS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L61) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_ITEMS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("items")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L64) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` modEventBus.addListener(ModItemGroups::registerTabs) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L69) |
| ` public ModItemGroups() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L34) |

## ModItemSubPredicates

` public class ModItemSubPredicates `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<ItemSubPredicate.Type<?>, ItemSubPredicate.Type<ItemSavedEntityPredicate>> SAVED_ENTITY ` | 初值 ` register( "saved_entity", ItemSavedEntityPredicate.CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java#L19) |
| ` public static final DeferredHolder<ItemSubPredicate.Type<?>, ItemSubPredicate.Type<ItemEnchantmentCountPredicate>> ENCHANTMENT_COUNT ` | 初值 ` register( "enchantment_count", ItemEnchantmentCountPredicate.CODEC.codec() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java#L24) |
| ` public static <T extends ItemSubPredicate> DeferredHolder<ItemSubPredicate.Type<?>, ItemSubPredicate.Type<T>> register( String name, Codec<T> codec ) ` | 末尾返回 ` DF.register(name, () -> new ItemSubPredicate.Type<>(codec)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java#L30) |
| ` public static void initialize(IEventBus modEventBus) ` | 执行 ` DF.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L125) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java#L37) |
| ` public ModItemSubPredicates() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java#L13) |
