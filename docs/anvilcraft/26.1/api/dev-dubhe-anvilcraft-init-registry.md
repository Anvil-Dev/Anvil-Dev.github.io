# dev.dubhe.anvilcraft.init.registry



## ModRegistries

` public class ModRegistries `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L20)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Registry<Amulet> AMULET ` | 初值 ` ModRegistries.simple(ModRegistryKeys.AMULET) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L22) |
| ` public static final Registry<IAmuletDefinition.Type<?>> AMULET_DEF_TYPE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.AMULET_DEF_TYPE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L23) |
| ` public static final Registry<IResultModifier.Type<?>> MODIFIER_TYPE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.MODIFIER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L26) |
| ` public static final Registry<ICustomDataComponent.Type<?>> CUSTOM_DATA_TYPE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.CUSTOM_DATA_TYPE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L29) |
| ` public static final Registry<INumberProvider.Type<?>> NUMBER_PROVIDER_TYPE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.NUMBER_PROVIDER_TYPE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L32) |
| ` public static final Registry<IFrostMaterialPredicate.Type<?>> FROST_MATERIAL_PREDICATE_TYPE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.FROST_MATERIAL_PREDICATE_TYPE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L35) |
| ` public static final Registry<ICategory.Type<?>> CATEGORY_TYPE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.CATEGORY_TYPE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L38) |
| ` public static final Registry<Megastructure> MEGASTRUCTURE ` | 初值 ` ModRegistries.simple( ModRegistryKeys.MEGASTRUCTURE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L41) |
| ` public static final Registry<ITargetPointer.Type<?>> TARGET_POINTER_TYPE ` | 初值 ` ModRegistries.simple(ModRegistryKeys.TARGET_POINTER_TYPE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L45) |
| ` @SubscribeEvent public static void registerRegistries(NewRegistryEvent event) ` | 事件总线派发 ` NewRegistryEvent ` 时调用。<br>实现调用 ` event.register(ModRegistries.AMULET) `<br>实现调用 ` event.register(ModRegistries.TARGET_POINTER_TYPE) `<br>实现调用 ` event.register(ModRegistries.AMULET_DEF_TYPE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L47) |
| ` public ModRegistries() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L20) |

## ModRegistryKeys

` public class ModRegistryKeys `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L20)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<Registry<Amulet>> AMULET ` | 初值 ` ModRegistryKeys.key("amulet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L22) |
| ` public static final ResourceKey<Registry<IAmuletDefinition.Type<?>>> AMULET_DEF_TYPE ` | 初值 ` ModRegistryKeys.key("amulet_definition_type") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L23) |
| ` public static final ResourceKey<Registry<IAmuletDefinition>> AMULET_DEF ` | 初值 ` ModRegistryKeys.key("amulet_definition") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L24) |
| ` public static final ResourceKey<Registry<IResultModifier.Type<?>>> MODIFIER ` | 初值 ` ModRegistryKeys.key("result_modifier") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L25) |
| ` public static final ResourceKey<Registry<ICustomDataComponent.Type<?>>> CUSTOM_DATA_TYPE ` | 初值 ` ModRegistryKeys.key("custom_data_component") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L26) |
| ` public static final ResourceKey<Registry<INumberProvider.Type<?>>> NUMBER_PROVIDER_TYPE ` | 初值 ` ModRegistryKeys.key("number_provider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L27) |
| ` public static final ResourceKey<Registry<IFrostMaterialPredicate.Type<?>>> FROST_MATERIAL_PREDICATE_TYPE ` | 初值 ` ModRegistryKeys.key("frost_material_predicate") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L28) |
| ` public static final ResourceKey<Registry<ICategory.Type<?>>> CATEGORY_TYPE ` | 初值 ` ModRegistryKeys.key("category_type") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L30) |
| ` public static final ResourceKey<Registry<ICategory>> CATEGORY ` | 初值 ` ModRegistryKeys.key("category") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L31) |
| ` public static final ResourceKey<Registry<Megastructure>> MEGASTRUCTURE ` | 初值 ` ModRegistryKeys.key("megastructure") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L32) |
| ` public static final ResourceKey<Registry<ITargetPointer.Type<?>>> TARGET_POINTER_TYPE ` | 初值 ` ModRegistryKeys.key("target_pointer") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L34) |
| ` public static final ResourceKey<Registry<BlockPlacementRuleSet>> BLOCK_PLACEMENT_RULES ` | 初值 ` ModRegistryKeys.key("block_placement_rules") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L35) |
| ` @SubscribeEvent public static void registerRegistries(DataPackRegistryEvent.NewRegistry event) ` | 事件总线派发 ` DataPackRegistryEvent.NewRegistry ` 时调用。<br>实现调用 ` event.dataPackRegistry(ModRegistryKeys.CATEGORY, ICategory.DIRECT_CODEC, ICategory.DIRECT_CODEC) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L37) |
| ` public ModRegistryKeys() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L20) |
