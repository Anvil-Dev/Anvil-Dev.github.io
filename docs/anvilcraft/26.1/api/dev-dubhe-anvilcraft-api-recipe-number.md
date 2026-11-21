# dev.dubhe.anvilcraft.api.recipe.number



## BinomialDistributionGenerator

` public record BinomialDistributionGenerator(INumberProvider n, INumberProvider p) implements INumberProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<BinomialDistributionGenerator> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L12) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BinomialDistributionGenerator> STREAM_CODEC ` | 初值 ` StreamCodec.composite( INumberProvider.STREAM_CODEC, BinomialDistributionGenerator::n, INumberProvider.STREAM_CODEC, BinomialDistributionGenerator::p, BinomialDistributionGenerator::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L20) |
| ` public static BinomialDistributionGenerator binomial(int n, float p) ` | 末尾返回 ` new BinomialDistributionGenerator(ConstantValue.exactly((float) n), ConstantValue.exactly(p)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L28) |
| ` @Override public float getFloat(ResultContext ctx) ` | 末尾返回 ` result `<br>实现调用 ` this.p.getFloat(ctx) `<br>实现调用 ` ctx.getRandom() `<br>实现调用 ` this.n.getInt(ctx) `<br>实现调用 ` random.nextFloat() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L32) |
| ` @Override public Type type() ` | 末尾返回 ` ModNumberProviderTypes.BINOMIAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L46) |
| ` public BinomialDistributionGenerator(INumberProvider n, INumberProvider p) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11) |
| ` public INumberProvider n() ` | 读取 record 分量 ` n ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11) |
| ` public INumberProvider p() ` | 读取 record 分量 ` p ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L11) |

## BinomialDistributionGenerator.Type

` public static class Type implements INumberProvider.Type<BinomialDistributionGenerator> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<BinomialDistributionGenerator> codec() ` | 末尾返回 ` BinomialDistributionGenerator.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L52) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BinomialDistributionGenerator> streamCodec() ` | 末尾返回 ` BinomialDistributionGenerator.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L57) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L51) |

## ConstantValue

` public record ConstantValue(float value) implements INumberProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ConstantValue> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( Codec.FLOAT .fieldOf("value") .forGetter(ConstantValue::value) ).apply(ins, ConstantValue::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L15) |
| ` public static final Codec<ConstantValue> INLINE_CODEC ` | 由 ` Codec.either(Codec.INT, Codec.FLOAT).xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L20) |
| ` public static final StreamCodec<ByteBuf, ConstantValue> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.FLOAT, ConstantValue::value, ConstantValue::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L26) |
| ` public ConstantValue(int value) ` | 执行 ` this((float) value) `<br>[调用处 ConstantValue.exactly](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L32) |
| ` public static ConstantValue exactly(float value) ` | 末尾返回 ` new ConstantValue(value) `<br>[调用处 BinomialDistributionGenerator.binomial](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L36) |
| ` @Override public float getFloat(ResultContext ctx) ` | 末尾返回 ` this.value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L40) |
| ` @Override public Type type() ` | 末尾返回 ` ModNumberProviderTypes.CONSTANT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L45) |
| ` public float value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L14) |

## ConstantValue.Type

` public static class Type implements INumberProvider.Type<ConstantValue> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ConstantValue> codec() ` | 末尾返回 ` ConstantValue.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L51) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ConstantValue> streamCodec() ` | 末尾返回 ` ConstantValue.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L56) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L50) |

## EnchantmentLevelProvider

` public record EnchantmentLevelProvider(RecipeInputSlot slot, ResourceKey<Enchantment> enchantment, LevelBasedValue amount) implements INumberProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<EnchantmentLevelProvider> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L21) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, EnchantmentLevelProvider> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L31) |
| ` public static EnchantmentLevelProvider enchantment(RecipeInputSlot slot, ResourceKey<Enchantment> enchantment, float amount) ` | 末尾返回 ` new EnchantmentLevelProvider(slot, enchantment, LevelBasedValue.constant(amount)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L41) |
| ` @Override public float getFloat(ResultContext ctx) ` | 末尾返回 ` this.amount.calculate(ctx.getInput(this.slot).getEnchantmentLevel(ctx.getRegistries().holderOrThrow(this.enchantment))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L45) |
| ` @Override public Type type() ` | 末尾返回 ` ModNumberProviderTypes.ENCHANTMENT_LEVEL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L50) |
| ` public EnchantmentLevelProvider(RecipeInputSlot slot, ResourceKey<Enchantment> enchantment, LevelBasedValue amount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L16) |
| ` public RecipeInputSlot slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L17) |
| ` public ResourceKey<Enchantment> enchantment() ` | 读取 record 分量 ` enchantment ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L18) |
| ` public LevelBasedValue amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L16) |

## EnchantmentLevelProvider.Type

` public static class Type implements INumberProvider.Type<EnchantmentLevelProvider> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<EnchantmentLevelProvider> codec() ` | 末尾返回 ` EnchantmentLevelProvider.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L56) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, EnchantmentLevelProvider> streamCodec() ` | 末尾返回 ` EnchantmentLevelProvider.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L61) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L55) |

## INumberProvider

` public interface INumberProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<INumberProvider> TYPED_CODEC ` | 初值 ` Codec.lazyInitialized(() -> ModRegistries.NUMBER_PROVIDER_TYPE .byNameCodec().dispatch(INumberProvider::type, Type::codec)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L14) |
| ` Codec<INumberProvider> CODEC ` | 由 ` Codec.lazyInitialized ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L16) |
| ` StreamCodec<RegistryFriendlyByteBuf, INumberProvider> STREAM_CODEC ` | 初值 ` ByteBufCodecs.registry(ModRegistryKeys.NUMBER_PROVIDER_TYPE) .dispatch(INumberProvider::type, Type::streamCodec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L20) |
| ` float getFloat(ResultContext ctx) ` | [调用处 INumberProvider.getInt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L23) |
| ` default int getInt(ResultContext ctx) ` | 末尾返回 ` Math.round(this.getFloat(ctx)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L25) |
| ` Type<? extends INumberProvider> type() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L29) |

## INumberProvider.Type

` interface Type<T extends INumberProvider> extends ISerializer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/INumberProvider.java#L31)


## UniformGenerator

` public record UniformGenerator(INumberProvider min, INumberProvider max) implements INumberProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<UniformGenerator> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L12) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, UniformGenerator> STREAM_CODEC ` | 初值 ` StreamCodec.composite( INumberProvider.STREAM_CODEC, UniformGenerator::min, INumberProvider.STREAM_CODEC, UniformGenerator::max, UniformGenerator::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L20) |
| ` public static UniformGenerator between(float min, float max) ` | 末尾返回 ` new UniformGenerator(ConstantValue.exactly(min), ConstantValue.exactly(max)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L28) |
| ` @Override public int getInt(ResultContext ctx) ` | 末尾返回 ` Mth.nextInt(ctx.getRandom(), this.min.getInt(ctx), this.max.getInt(ctx)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L32) |
| ` @Override public float getFloat(ResultContext ctx) ` | 末尾返回 ` Mth.nextFloat(ctx.getRandom(), this.min.getFloat(ctx), this.max.getFloat(ctx)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L37) |
| ` @Override public Type type() ` | 末尾返回 ` ModNumberProviderTypes.UNIFORM.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L42) |
| ` public UniformGenerator(INumberProvider min, INumberProvider max) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11) |
| ` public INumberProvider min() ` | 读取 record 分量 ` min ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11) |
| ` public INumberProvider max() ` | 读取 record 分量 ` max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L11) |

## UniformGenerator.Type

` public static class Type implements INumberProvider.Type<UniformGenerator> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<UniformGenerator> codec() ` | 末尾返回 ` UniformGenerator.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L48) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, UniformGenerator> streamCodec() ` | 末尾返回 ` UniformGenerator.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L53) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L47) |
