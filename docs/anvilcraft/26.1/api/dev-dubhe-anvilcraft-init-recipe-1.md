# dev.dubhe.anvilcraft.init.recipe（ModFrostMaterialPredicateTypes 至 ModRecipeTriggers）



## ModFrostMaterialPredicateTypes

` public class ModFrostMaterialPredicateTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<IFrostMaterialPredicate.Type<?>, AndFrostMaterialPredicate.Type> AND ` | 初值 ` DF .register("and", AndFrostMaterialPredicate.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L19) |
| ` public static final DeferredHolder<IFrostMaterialPredicate.Type<?>, OrFrostMaterialPredicate.Type> OR ` | 初值 ` DF .register("or", OrFrostMaterialPredicate.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L22) |
| ` public static final DeferredHolder<IFrostMaterialPredicate.Type<?>, RepairMaterialFrostMaterialPredicate.Type> REPAIR_MATERIAL ` | 初值 ` DF.register("repair_material", RepairMaterialFrostMaterialPredicate.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L25) |
| ` public static final DeferredHolder<IFrostMaterialPredicate.Type<?>, CustomFrostMaterialPredicate.Type> CUSTOM ` | 初值 ` DF .register("custom", CustomFrostMaterialPredicate.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L28) |
| ` public static final DeferredHolder<IFrostMaterialPredicate.Type<?>, EmptyFrostMaterialPredicate.Type> EMPTY ` | 初值 ` DF .register("empty", EmptyFrostMaterialPredicate.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L31) |
| ` public static void register(IEventBus bus) ` | 执行 ` DF.register(bus) `<br>[调用处 ModRecipeInits.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeInits.java#L7) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L34) |
| ` public ModFrostMaterialPredicateTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java#L15) |

## ModMathFunctions

` public class ModMathFunctions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModMathFunctions.java#L24)

本模组注册进 anvillib:function 数据包注册表的数学函数。 条目写在 data/anvilcraft/anvillib/function/&lt;名字&gt;.json，由 runData 生成。 命名空间必须用 anvilcraft ：runData 只写出 modId 命名空间下的条目 （NeoForge 的 RegistriesDatapackGenerator 按命名空间过滤），注册到 anvillib 下 会静默不落盘。表达式里因此要写全名 anvilcraft:double(x)；flat 文本按路径优先查注册表， 全名引用能正常解析。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<IFunction> DOUBLE ` | 把传入的维修材料消耗翻倍，作为「通用维修材料」未指定消耗时的默认值。 形参名与调用点绑定的具名传入值 $(cost) 同名，函数体既能写 $(cost)\*2， 也能写成 flat 文本 "x\*2"——第 0 个传入值就是它。<br>初值 ` ResourceKey.create( LibRegistries.FUNCTION_KEY, AnvilCraft.of("double") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModMathFunctions.java#L31) |
| ` public static void bootstrap(BootstrapContext<IFunction> ctx) ` | 执行 ` ctx.register(ModMathFunctions.DOUBLE, ModMathFunctions.doubleFunction()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModMathFunctions.java#L36) |
| ` public static CustomFunction doubleFunction() ` | 翻倍函数的定义。 函数体里的 $(a) 在求值期从调用点的具名传入值里取，所以构造调用表达式时 传 IExpression#ref(String) ref(a) 即可——该引用是按位绑下形参后再按名字取的， 位置和名字都能对上。形参个数仍按位校验，实参不能省。<br>末尾返回 ` CustomFunction.of( List.of("a"), LibBuiltInFunctions.MULTIPLY.call(IExpression.ref("a"), IExpression.of(2)) ) `<br>[调用处 RepairMaterialFrostMaterialPredicate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModMathFunctions.java#L47) |
| ` public ModMathFunctions() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModMathFunctions.java#L24) |

## ModNumberProviderTypes

` public class ModNumberProviderTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<INumberProvider.Type<?>, ConstantValue.Type> CONSTANT ` | 初值 ` ModNumberProviderTypes.DF .register("constant", ConstantValue.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L18) |
| ` public static final DeferredHolder<INumberProvider.Type<?>, BinomialDistributionGenerator.Type> BINOMIAL ` | 初值 ` ModNumberProviderTypes.DF .register("binomial", BinomialDistributionGenerator.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L21) |
| ` public static final DeferredHolder<INumberProvider.Type<?>, UniformGenerator.Type> UNIFORM ` | 初值 ` ModNumberProviderTypes.DF .register("uniform", UniformGenerator.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L24) |
| ` public static final DeferredHolder<INumberProvider.Type<?>, EnchantmentLevelProvider.Type> ENCHANTMENT_LEVEL ` | 初值 ` ModNumberProviderTypes.DF .register("enchantment_level", EnchantmentLevelProvider.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L27) |
| ` public static void register(IEventBus bus) ` | 执行 ` ModNumberProviderTypes.DF.register(bus) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L30) |
| ` public ModNumberProviderTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java#L14) |

## ModRecipeDisplays

` public class ModRecipeDisplays `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeDisplays.java#L12)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(RegisterEvent event) ` | 事件总线派发 ` RegisterEvent ` 时调用。<br>实现调用 ` ModRecipeDisplays.register(event, "canning_food", CanningFoodRecipeDisplay.TYPE) `<br>实现调用 ` ModRecipeDisplays.register(event, "pill", PillRecipeDisplay.TYPE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeDisplays.java#L14) |
| ` public ModRecipeDisplays() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeDisplays.java#L12) |

## ModRecipeInits

` public class ModRecipeInits `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeInits.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(IEventBus modEventBus) ` | 实现调用 ` ModFrostMaterialPredicateTypes.register(modEventBus) `<br>实现调用 ` ModRecipeTriggers.TRIGGER.register(modEventBus) `<br>实现调用 ` ModRecipePredicateTypes.PREDICATE_TYPE.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L147) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeInits.java#L6) |
| ` public ModRecipeInits() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeInits.java#L5) |

## ModRecipeOutcomeTypes

` public class ModRecipeOutcomeTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<IRecipeOutcome.Type<?>> OUTCOME_TYPE ` | 初值 ` DeferredRegister.create( LibRegistries.OUTCOME_TYPE_REGISTRY, AnvilCraft.MOD_ID ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L15) |
| ` public static final DeferredHolder<IRecipeOutcome.Type<?>, DamageAnvil.Type> DAMAGE_ANVIL ` | 初值 ` ModRecipeOutcomeTypes.OUTCOME_TYPE.register( "damage_anvil", DamageAnvil.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L20) |
| ` public static final DeferredHolder<IRecipeOutcome.Type<?>, ProduceHeat.Type> PRODUCE_HEAT ` | 初值 ` ModRecipeOutcomeTypes.OUTCOME_TYPE.register( "produce_heat", ProduceHeat.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L25) |
| ` public static final DeferredHolder<IRecipeOutcome.Type<?>, RoyalPreferenceOutcome.Type> ROYAL_PREFERENCE ` | 初值 ` ModRecipeOutcomeTypes.OUTCOME_TYPE.register( "royal_preference", RoyalPreferenceOutcome.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L30) |
| ` public static final DeferredHolder<IRecipeOutcome.Type<?>, ResentmentAmberOutcome.Type> RESENTMENT_AMBER ` | 初值 ` ModRecipeOutcomeTypes.OUTCOME_TYPE.register("resentment_amber", ResentmentAmberOutcome.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L36) |
| ` public static final DeferredHolder<IRecipeOutcome.Type<?>, ConsumeBurningHeaterFuel.Type> CONSUME_BURNING_HEATER_FUEL ` | 初值 ` ModRecipeOutcomeTypes.OUTCOME_TYPE.register( "consume_burning_heater_fuel", ConsumeBurningHeaterFuel.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L39) |
| ` public ModRecipeOutcomeTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java#L14) |

## ModRecipePredicateTypes

` public class ModRecipePredicateTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<IRecipePredicate.Type<?>> PREDICATE_TYPE ` | 初值 ` DeferredRegister .create(LibRegistries.PREDICATE_TYPE_REGISTRY, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L14) |
| ` public static final DeferredHolder<IRecipePredicate.Type<?>, HasCauldron.Type> HAS_CAULDRON ` | 初值 ` ModRecipePredicateTypes.PREDICATE_TYPE.register( "has_cauldron", HasCauldron.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L17) |
| ` public static final DeferredHolder<IRecipePredicate.Type<?>, HasCauldronProcessor.Type> HAS_CAULDRON_PROCESSOR ` | 初值 ` PREDICATE_TYPE.register("has_cauldron_processor", HasCauldronProcessor.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L23) |
| ` public static final DeferredHolder<IRecipePredicate.Type<?>, HasAnvil.Type> HAS_ANVIL ` | 初值 ` ModRecipePredicateTypes.PREDICATE_TYPE.register( "has_anvil", HasAnvil.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L26) |
| ` public static final DeferredHolder<IRecipePredicate.Type<?>, HasDiffItems.Type> HAS_DIFF_ITEMS ` | 初值 ` ModRecipePredicateTypes.PREDICATE_TYPE.register( "has_diff_items", HasDiffItems.Type::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L31) |
| ` public ModRecipePredicateTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java#L13) |

## ModRecipeSerializers

` public class ModRecipeSerializers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L61)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<Multiblock4DRecipe>> MULTIBLOCK_4D ` | 初值 ` DF.register( "4d_multiblock", () -> Multiblock4DRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L67) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<LaserHitRecipe>> LASER_HIT ` | 初值 ` DF.register( "laser_hit", () -> LaserHitRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L71) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ShapelessRecipe>> TERMINAL_UNBIND ` | 初值 ` DF.register( "terminal_unbind", () -> TerminalUnbindRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L75) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ShapedRecipe>> TERMINAL_UPGRADE ` | 初值 ` DF.register( "terminal_upgrade", () -> TerminalUpgradeRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L79) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ShapedRecipe>> NEUTRONIUM_CHARGING ` | 初值 ` DF.register( "neutronium_charging", () -> NeutroniumChargingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L83) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<BlockCrushRecipe>> BLOCK_CRUSH ` | 初值 ` DF.register( "block_crush", () -> BlockCrushRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L87) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ItemCrushRecipe>> ITEM_CRUSH ` | 初值 ` DF.register( "item_crush", () -> ItemCrushRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L91) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<UnpackRecipe>> UNPACK ` | 初值 ` DF.register( "unpack", () -> UnpackRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L95) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<BlockCompressRecipe>> BLOCK_COMPRESS ` | 初值 ` DF.register( "block_compress", () -> BlockCompressRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L99) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<BlockSmearRecipe>> BLOCK_SMEAR ` | 初值 ` DF.register( "block_smear", () -> BlockSmearRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L103) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ItemCompressRecipe>> ITEM_COMPRESS ` | 初值 ` DF.register( "item_compress", () -> ItemCompressRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L107) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<StampingRecipe>> STAMPING ` | 初值 ` DF.register( "stamping", () -> StampingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L111) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<StampingDiffRecipe>> STAMPING_DIFF ` | 初值 ` DF.register( "stamping_diff", () -> StampingDiffRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L115) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<SuperHeatingRecipe>> SUPER_HEATING ` | 初值 ` DF.register( "super_heating", () -> SuperHeatingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L119) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ItemInjectRecipe>> ITEM_INJECT ` | 初值 ` DF.register( "item_inject", () -> ItemInjectRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L123) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MassInjectRecipe>> MASS_INJECT ` | 初值 ` DF.register( "mass_inject", () -> MassInjectRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L127) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<SqueezingRecipe>> SQUEEZING ` | 初值 ` DF.register( "squeezing", () -> SqueezingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L131) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<FastCookingRecipe>> FAST_COOKING ` | 初值 ` DF.register( "fast_cooking", () -> FastCookingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L135) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<SolidLiquidRecipe>> SOLID_LIQUID ` | 初值 ` DF.register( "solid_liquid", () -> SolidLiquidRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L139) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<FluidMixingRecipe>> FLUID_MIXING ` | 初值 ` DF.register( "fluid_mixing", () -> FluidMixingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L143) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<NeutronIrradiationRecipe>> NEUTRON_IRRADIATION ` | 初值 ` DF.register( "neutron_irradiation", () -> NeutronIrradiationRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L147) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<TimeWarpRecipe>> TIME_WARP ` | 初值 ` DF.register( "time_warp", () -> TimeWarpRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L151) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MeshRecipe>> MESH ` | 初值 ` DF.register( "mesh", () -> MeshRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L155) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MobTransformRecipe>> MOB_TRANSFORM ` | 初值 ` DF.register( "mob_transform", () -> MobTransformRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L159) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MobTransformWithItemRecipe>> MOB_TRANSFORM_WITH_ITEM ` | 初值 ` DF .register("mob_transform_with_item", () -> MobTransformWithItemRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L163) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MultiblockRecipe>> MULTIBLOCK ` | 初值 ` DF.register( "multiblock", () -> MultiblockRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L165) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MultiblockConversionRecipe>> MULTIBLOCK_CONVERSION ` | 初值 ` DF .register("multiblock_conversion", () -> MultiblockConversionRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L169) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MineralFountainPassiveRecipe>> MINERAL_FOUNTAIN_PASSIVE ` | 初值 ` DF.register( "mineral_fountain_passive", () -> MineralFountainPassiveRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L171) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MineralFountainActiveRecipe>> MINERAL_FOUNTAIN_ACTIVE ` | 初值 ` DF.register( "mineral_fountain_active", () -> MineralFountainActiveRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L175) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<MineralFountainReplacementRecipe>> MINERAL_FOUNTAIN_REPLACEMENT ` | 初值 ` DF.register( "mineral_fountain_replacement", () -> MineralFountainReplacementRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L179) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<JewelCraftingRecipe>> JEWEL_CRAFTING ` | 初值 ` DF.register( "jewel_crafting", () -> JewelCraftingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L183) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<CelestialAnvilRecipe>> CELESTIAL_ANVIL ` | 初值 ` DF.register( "celestial_anvil", () -> CelestialAnvilRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L187) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<CanningFoodRecipe>> CANNING_FOOD ` | 初值 ` DF.register( "canning_food", () -> CanningFoodRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L190) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<PillRecipe>> PILL ` | 初值 ` DF.register( "pill_recipe", () -> PillRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L194) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ChargerChargingRecipe>> CHARGER_CHARGING ` | 初值 ` DF.register( "charger_charging", () -> ChargerChargingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L198) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<TwoToOneSmithingRecipe>> _221 ` | 初值 ` DF.register( "two_to_one_smithing", () -> TwoToOneSmithingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L202) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<FourToOneSmithingRecipe>> _421 ` | 初值 ` DF.register( "four_to_one_smithing", () -> FourToOneSmithingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L206) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<EightToOneSmithingRecipe>> _821 ` | 初值 ` DF.register( "eight_to_one_smithing", () -> EightToOneSmithingRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L210) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<PermutationRecipe>> PERMUTATION ` | 初值 ` DF.register( "permutation", () -> PermutationRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L214) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<DeformationRecipe>> DEFORMATION ` | 初值 ` DF.register( "deformation", () -> DeformationRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L218) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<EnergyWeaponMakeRecipe>> ENERGY_WEAPON_MAKE ` | 初值 ` DF.register( "energy_weapon_make", () -> EnergyWeaponMakeRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L222) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<AnvilCollisionCraftRecipe>> ANVIL_COLLISION_CRAFT ` | 初值 ` DF .register("anvil_collision", () -> AnvilCollisionCraftRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L226) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<PortalConversionRecipe>> PORTAL_CONVERSION ` | 初值 ` DF.register( "portal_conversion", () -> PortalConversionRecipe.SERIALIZER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L228) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<PlanetResourceRecipe>> PLANET_RESOURCE ` | 初值 ` DF .register("planet_resource", () -> PlanetResourceRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L232) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<SpecialCelestialBodyRecipe>> SPECIAL_CELESTIAL_BODY ` | 初值 ` DF .register("special_celestial_body", () -> SpecialCelestialBodyRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L234) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<TempleDemandRecipe>> TEMPLE_DEMAND ` | 初值 ` DF .register("temple_demand", () -> TempleDemandRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L236) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<ProceduralProcessRecipe>> PROCEDURAL_PROCESS ` | 初值 ` DF .register("procedural_process", () -> ProceduralProcessSerializer.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L238) |
| ` public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<BlockProcessingRecipe>> BLOCK_PROCESSING ` | 初值 ` DF .register("block_processing", () -> BlockProcessingRecipe.SERIALIZER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L240) |
| ` public static void register(IEventBus bus) ` | 执行 ` DF.register(bus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L243) |
| ` public ModRecipeSerializers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L61) |

## ModRecipeTriggers

` public class ModRecipeTriggers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTriggers.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<IRecipeTrigger> TRIGGER ` | 初值 ` DeferredRegister .create(LibRegistries.TRIGGER_REGISTRY, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTriggers.java#L10) |
| ` public static final DeferredHolder<IRecipeTrigger, IRecipeTrigger> ON_ANVIL_FALL_ON ` | 初值 ` ModRecipeTriggers.TRIGGER.register( "on_anvil_fall_on", IRecipeTrigger.Impl::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTriggers.java#L13) |
| ` public ModRecipeTriggers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTriggers.java#L9) |
