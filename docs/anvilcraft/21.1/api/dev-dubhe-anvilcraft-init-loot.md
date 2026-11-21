# dev.dubhe.anvilcraft.init.loot



## ModLootContextParamSets

` public class ModLootContextParamSets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final LootContextParamSet USE_ON_ITEM ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L11) |
| ` public static final LootContextParamSet POST_BREAK_BLOCK ` | 初值 ` register( "post_break_block", it -> it.required(LootContextParams.THIS_ENTITY) .required(LootContextParams.ORIGIN) .required(LootContextParams.BLOCK_STATE) .required(LootContextParams.TOOL) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L20) |
| ` public static void registerAll() ` | 当前实现的方法体为空。<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L128) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L36) |
| ` public ModLootContextParamSets() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L10) |

## ModLootItemConditions

` public class ModLootItemConditions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<LootItemConditionType> LOOT_CONDITION_TYPES ` | 初值 ` DeferredRegister.create(Registries.LOOT_CONDITION_TYPE, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java#L13) |
| ` public static final Supplier<LootItemConditionType> MATCH_DATA_COMPONENT ` | 初值 ` LOOT_CONDITION_TYPES.register("match_data_component", () -> new LootItemConditionType(MatchDataComponent.CODEC)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java#L16) |
| ` public static final Supplier<LootItemConditionType> RANDOM_CHANCE_WITH_FORTUNE ` | 初值 ` LOOT_CONDITION_TYPES.register( "random_chance_with_fortune", () -> new LootItemConditionType(RandomChanceWithFortuneCondition.CODEC) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java#L19) |
| ` public ModLootItemConditions() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java#L12) |

## ModLootItemFunctions

` public class ModLootItemFunctions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<LootItemFunctionType<?>> LOOT_FUNCTION_TYPES ` | 初值 ` DeferredRegister.create(Registries.LOOT_FUNCTION_TYPE, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L12) |
| ` public static final Supplier<LootItemFunctionType<CurseLootItemFunction>> CURSE_LOOT ` | 初值 ` LOOT_FUNCTION_TYPES.register("curse_loot", () -> new LootItemFunctionType<>(CurseLootItemFunction.CODEC)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L15) |
| ` public ModLootItemFunctions() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L11) |

## ModLootModifiers

` public class ModLootModifiers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<MapCodec<? extends IGlobalLootModifier>> GLOBAL_LOOT_MODIFIER_SERIALIZERS ` | 初值 ` DeferredRegister.create(NeoForgeRegistries.Keys.GLOBAL_LOOT_MODIFIER_SERIALIZERS, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L15) |
| ` public static final Supplier<MapCodec<SmeltingLootModifier>> SMELTING_LOOT_MODIFIER ` | 初值 ` GLOBAL_LOOT_MODIFIER_SERIALIZERS.register("smelting_loot_modifier", () -> SmeltingLootModifier.CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L18) |
| ` public static final Supplier<MapCodec<DisintegrationLootModifier>> DISINTEGRATION_LOOT_MODIFIER ` | 初值 ` GLOBAL_LOOT_MODIFIER_SERIALIZERS.register("disintegration_loot_modifier", () -> DisintegrationLootModifier.CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L21) |
| ` public static void register(IEventBus eventBus) ` | 执行 ` GLOBAL_LOOT_MODIFIER_SERIALIZERS.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L24) |
| ` public ModLootModifiers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L14) |

## ModLootTables

` public class ModLootTables `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_COMMON ` | 初值 ` key("gameplay/crab_trap/common") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L16) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_RIVER ` | 初值 ` key("gameplay/crab_trap/river") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L17) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_OCEAN ` | 初值 ` key("gameplay/crab_trap/ocean") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L18) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_WARM_OCEAN ` | 初值 ` key("gameplay/crab_trap/warm_ocean") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L19) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_SWAMP ` | 初值 ` key("gameplay/crab_trap/swamp") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L20) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_JUNGLE ` | 初值 ` key("gameplay/crab_trap/jungle") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L21) |
| ` public static final ResourceKey<LootTable> ADVANCEMENT_ROOT ` | 初值 ` key("advancement/root") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L23) |
| ` public static final Map<EntityType<?>, LootTable> BEHEADING_LOOT ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L25) |
| ` public static final ResourceKey<LootTable> BEHEADING_WITHER_SKELETON ` | 初值 ` beheadingKey(EntityType.WITHER_SKELETON) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L27) |
| ` public static final ResourceKey<LootTable> BEHEADING_ZOMBIE ` | 初值 ` beheadingKey(EntityType.ZOMBIE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L28) |
| ` public static final ResourceKey<LootTable> BEHEADING_SKELETON ` | 初值 ` beheadingKey(EntityType.SKELETON) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L29) |
| ` public static final ResourceKey<LootTable> BEHEADING_CREEPER ` | 初值 ` beheadingKey(EntityType.CREEPER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L30) |
| ` public static final ResourceKey<LootTable> BEHEADING_PIGLIN ` | 初值 ` beheadingKey(EntityType.PIGLIN) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L31) |
| ` public static final ResourceKey<LootTable> BEHEADING_ENDER_DRAGON ` | 初值 ` beheadingKey(EntityType.ENDER_DRAGON) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L32) |
| ` public static final ResourceKey<LootTable> BEHEADING_PLAYER ` | 初值 ` beheadingKey(EntityType.PLAYER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L33) |
| ` public static LootTable getBeheadingLoot(Entity entity) ` | ` (server == null) ` 成立时提前返回 ` LootTable.EMPTY `<br>末尾返回 ` BEHEADING_LOOT.computeIfAbsent(entityType, e -> server.reloadableRegistries().getLootTable(beheadingKey(entityType))) `<br>[调用处 LivingEntityMixin.dropBeheadingLoot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L198) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L44) |
| ` public ModLootTables() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L15) |
