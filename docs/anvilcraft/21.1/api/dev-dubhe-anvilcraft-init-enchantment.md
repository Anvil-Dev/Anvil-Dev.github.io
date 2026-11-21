# dev.dubhe.anvilcraft.init.enchantment



## ModEnchantmentEffectComponents

` public class ModEnchantmentEffectComponents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffectComponents.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DataComponentType<List<ConditionalEffect<EnchantmentEntityEffect>>> USE_ON_BLOCK ` | 初值 ` register( "use_on_block", (it) -> it.persistent( ConditionalEffect.codec( EnchantmentEntityEffect.CODEC, ModLootContextParamSets.USE_ON_ITEM ).listOf() ) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffectComponents.java#L20) |
| ` public static final DataComponentType<List<ConditionalEffect<EnchantmentEntityEffect>>> POST_BREAK_BLOCK ` | 初值 ` register( "post_break_block", (it) -> it.persistent( ConditionalEffect.codec( EnchantmentEntityEffect.CODEC, ModLootContextParamSets.POST_BREAK_BLOCK ).listOf() ) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffectComponents.java#L30) |
| ` public static void register(IEventBus bus) ` | 执行 ` REGISTER.register(bus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffectComponents.java#L46) |
| ` public ModEnchantmentEffectComponents() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffectComponents.java#L15) |

## ModEnchantmentEffects

` public class ModEnchantmentEffects `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<MapCodec<? extends EnchantmentEntityEffect>> ENTITY_REGISTER ` | 初值 ` DeferredRegister.create(Registries.ENCHANTMENT_ENTITY_EFFECT_TYPE, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java#L16) |
| ` public static final DeferredRegister<MapCodec<? extends EnchantmentValueEffect>> VALUE_REGISTER ` | 初值 ` DeferredRegister.create(Registries.ENCHANTMENT_VALUE_EFFECT_TYPE, AnvilCraft.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java#L18) |
| ` public static void register(IEventBus eventBus) ` | 实现调用 ` ENTITY_REGISTER.register(eventBus) `<br>实现调用 ` VALUE_REGISTER.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java#L40) |
| ` public ModEnchantmentEffects() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java#L15) |

## ModEnchantmentTags

` public class ModEnchantmentTags `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentTags.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TagKey<Enchantment> DISABLED_PASSED ` | 初值 ` bind("disabled_passed") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentTags.java#L10) |
| ` public static final TagKey<Enchantment> PROVIDENCE_BONUS ` | 初值 ` bind("providence_bonus") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentTags.java#L11) |
| ` public static TagKey<Enchantment> bindC(String id) ` | 末尾返回 ` TagKey.create(Registries.ENCHANTMENT, ResourceLocation.fromNamespaceAndPath("c", id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentTags.java#L13) |
| ` public static TagKey<Enchantment> bind(String id) ` | 末尾返回 ` TagKey.create(Registries.ENCHANTMENT, AnvilCraft.of(id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentTags.java#L17) |
| ` public ModEnchantmentTags() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentTags.java#L9) |

## ModEnchantments

` public class ModEnchantments `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<Enchantment> FELLING_KEY ` | 初值 ` key("felling") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L29) |
| ` public static final ResourceKey<Enchantment> HARVEST_KEY ` | 初值 ` key("harvest") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L30) |
| ` public static final ResourceKey<Enchantment> BEHEADING_KEY ` | 初值 ` key("beheading") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L31) |
| ` public static final ResourceKey<Enchantment> SMELTING_KEY ` | 初值 ` key("smelting") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L32) |
| ` public static final ResourceKey<Enchantment> DISINTEGRATION_KEY ` | 初值 ` key("disintegration") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L33) |
| ` public static ResourceKey<Enchantment> key(String name) ` | 末尾返回 ` ResourceKey.create(Registries.ENCHANTMENT, AnvilCraft.of(name)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L35) |
| ` public static void bootstrap(BootstrapContext<Enchantment> context) ` | 实现调用 ` context.lookup(Registries.DAMAGE_TYPE) `<br>实现调用 ` context.lookup(Registries.ENCHANTMENT) `<br>实现调用 ` context.lookup(Registries.ITEM) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L39) |
| ` public static void register( BootstrapContext<Enchantment> context, ResourceKey<Enchantment> key, Enchantment.Builder builder) ` | 执行 ` context.register(key, builder.build(key.location())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L147) |
| ` public ModEnchantments() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L27) |
