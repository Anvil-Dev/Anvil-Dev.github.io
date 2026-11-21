# dev.dubhe.anvilcraft.init.loot



## ModLootContextParamSets

` public class ModLootContextParamSets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ContextKeySet USE_ON_ITEM ` | 由 ` ModLootContextParamSets.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L11) |
| ` public static final ContextKeySet POST_BREAK_BLOCK ` | 由 ` ModLootContextParamSets.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L20) |
| ` public static void registerAll() ` | 当前实现的方法体为空。<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L36) |
| ` public ModLootContextParamSets() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootContextParamSets.java#L10) |

## ModLootItemFunctions

` public class ModLootItemFunctions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(IEventBus modEventBus) ` | 实现调用 ` ModLootItemFunctions.LOOT_FUNCTION_TYPES.register("curse_loot", () -> CurseLootItemFunction.CODEC) `<br>实现调用 ` ModLootItemFunctions.LOOT_FUNCTION_TYPES.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L127) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L15) |
| ` public ModLootItemFunctions() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java#L11) |

## ModLootModifiers

` public class ModLootModifiers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<MapCodec<? extends IGlobalLootModifier>> GLOBAL_LOOT_MODIFIER_SERIALIZERS ` | 初值 ` DeferredRegister.create(NeoForgeRegistries.Keys.GLOBAL_LOOT_MODIFIER_SERIALIZERS, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L15) |
| ` public static final Supplier<MapCodec<SmeltingLootModifier>> SMELTING_LOOT_MODIFIER ` | 初值 ` ModLootModifiers.GLOBAL_LOOT_MODIFIER_SERIALIZERS.register("smelting_loot_modifier", () -> SmeltingLootModifier.CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L18) |
| ` public static final Supplier<MapCodec<DisintegrationLootModifier>> DISINTEGRATION_LOOT_MODIFIER ` | 初值 ` ModLootModifiers.GLOBAL_LOOT_MODIFIER_SERIALIZERS.register("disintegration_loot_modifier", () -> DisintegrationLootModifier.CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L21) |
| ` public static void register(IEventBus eventBus) ` | 执行 ` ModLootModifiers.GLOBAL_LOOT_MODIFIER_SERIALIZERS.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L128) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L24) |
| ` public ModLootModifiers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java#L14) |

## ModLootTables

` public class ModLootTables `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_COMMON ` | 初值 ` ModLootTables.key("gameplay/crab_trap/common") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L16) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_RIVER ` | 初值 ` ModLootTables.key("gameplay/crab_trap/river") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L17) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_OCEAN ` | 初值 ` ModLootTables.key("gameplay/crab_trap/ocean") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L18) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_WARM_OCEAN ` | 初值 ` ModLootTables.key("gameplay/crab_trap/warm_ocean") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L19) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_SWAMP ` | 初值 ` ModLootTables.key("gameplay/crab_trap/swamp") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L20) |
| ` public static final ResourceKey<LootTable> CRAB_TRAP_JUNGLE ` | 初值 ` ModLootTables.key("gameplay/crab_trap/jungle") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L21) |
| ` public static final ResourceKey<LootTable> ADVANCEMENT_ROOT ` | 初值 ` ModLootTables.key("advancement/root") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L23) |
| ` public static final Map<EntityType<?>, LootTable> BEHEADING_LOOT ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L25) |
| ` public static final ResourceKey<LootTable> BEHEADING_WITHER_SKELETON ` | 初值 ` ModLootTables.beheadingKey(EntityType.WITHER_SKELETON) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L27) |
| ` public static final ResourceKey<LootTable> BEHEADING_ZOMBIE ` | 初值 ` ModLootTables.beheadingKey(EntityType.ZOMBIE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L28) |
| ` public static final ResourceKey<LootTable> BEHEADING_SKELETON ` | 初值 ` ModLootTables.beheadingKey(EntityType.SKELETON) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L29) |
| ` public static final ResourceKey<LootTable> BEHEADING_CREEPER ` | 初值 ` ModLootTables.beheadingKey(EntityType.CREEPER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L30) |
| ` public static final ResourceKey<LootTable> BEHEADING_PIGLIN ` | 初值 ` ModLootTables.beheadingKey(EntityType.PIGLIN) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L31) |
| ` public static final ResourceKey<LootTable> BEHEADING_ENDER_DRAGON ` | 初值 ` ModLootTables.beheadingKey(EntityType.ENDER_DRAGON) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L32) |
| ` public static final ResourceKey<LootTable> BEHEADING_PLAYER ` | 初值 ` ModLootTables.beheadingKey(EntityType.PLAYER) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L33) |
| ` public static LootTable getBeheadingLoot(Entity entity) ` | ` (server == null) ` 成立时提前返回 ` LootTable.EMPTY `<br>末尾返回 ` ModLootTables.BEHEADING_LOOT.computeIfAbsent(entityType, e -> server.reloadableRegistries().getLootTable(ModLootTables.beheadingKey(entityType))) `<br>[调用处 LivingEntityMixin.dropBeheadingLoot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L155) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L44) |
| ` public ModLootTables() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootTables.java#L15) |
