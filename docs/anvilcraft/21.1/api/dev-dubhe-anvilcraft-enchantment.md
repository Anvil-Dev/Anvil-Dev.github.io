# dev.dubhe.anvilcraft.enchantment



## FellingEffect

` public record FellingEffect(int range) implements EnchantmentEntityEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FellingEffect> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(it -> it.group( Codec.INT .optionalFieldOf("range", 3) .forGetter(FellingEffect::range) ).apply(it, FellingEffect::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L25) |
| ` @Override public void apply(ServerLevel level, int i, EnchantedItemInUse enchantedItemInUse, Entity entity, Vec3 vec3) ` | 实现调用 ` level.getBlockState(BlockPos.containing(vec3)).is(ModBlockTags.FELLING_APPLICABLE) `<br>实现调用 ` level.getBlockState(BlockPos.containing(vec3)) `<br>实现调用 ` BlockPos.containing(vec3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L31) |
| ` @Override public MapCodec<? extends EnchantmentEntityEffect> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L47) |
| ` public FellingEffect(int range) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L23) |
| ` public int range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L23) |

## HarvestLeftClickEffect

` public record HarvestLeftClickEffect(int range) implements EnchantmentEntityEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<HarvestLeftClickEffect> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(it -> it.group( Codec.INT.optionalFieldOf("range", 3) .forGetter(HarvestLeftClickEffect::range) ).apply(it, HarvestLeftClickEffect::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L27) |
| ` @Override public void apply(ServerLevel level, int enchantmentLevel, EnchantedItemInUse enchantedItemInUse, Entity entity, Vec3 vec3) ` | 实现调用 ` enchantedItemInUse.itemStack() `<br>实现调用 ` BlockPos.containing(vec3) `<br>实现调用 ` level.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L34) |
| ` @Override public MapCodec<? extends EnchantmentEntityEffect> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L153) |
| ` public HarvestLeftClickEffect(int range) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L26) |
| ` public int range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L26) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L26) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L26) |

## HarvestRightClickEffect

` public record HarvestRightClickEffect(int range) implements EnchantmentEntityEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<HarvestRightClickEffect> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(it -> it.group( Codec.INT.optionalFieldOf("range", 3) .forGetter(HarvestRightClickEffect::range) ).apply(it, HarvestRightClickEffect::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L34) |
| ` @Override public void apply(ServerLevel level, int enchantmentLevel, EnchantedItemInUse enchantedItemInUse, Entity entity, Vec3 vec3) ` | 实现调用 ` enchantedItemInUse.itemStack() `<br>实现调用 ` BlockPos.containing(vec3) `<br>实现调用 ` level.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L41) |
| ` @Override public MapCodec<? extends EnchantmentEntityEffect> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L148) |
| ` public HarvestRightClickEffect(int range) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L33) |
| ` public int range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L33) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L33) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L33) |

## InRangeModifyEffect

` public record InRangeModifyEffect(LevelBasedValue min, LevelBasedValue max, EnchantmentValueEffect modifier) implements EnchantmentValueEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<InRangeModifyEffect> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L16) |
| ` public static InRangeModifyEffect min(int min, EnchantmentValueEffect modifier) ` | 末尾返回 ` new InRangeModifyEffect(new LevelBasedValue.Constant(min), MAX, modifier) `<br>[调用处 ModEnchantments.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L28) |
| ` public static InRangeModifyEffect max(int max, EnchantmentValueEffect modifier) ` | 末尾返回 ` new InRangeModifyEffect(MIN, new LevelBasedValue.Constant(max), modifier) `<br>[调用处 ModEnchantments.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantments.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L32) |
| ` public static InRangeModifyEffect range(int min, int max, EnchantmentValueEffect modifier) ` | 末尾返回 ` new InRangeModifyEffect(new LevelBasedValue.Constant(min), new LevelBasedValue.Constant(max), modifier) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L36) |
| ` @Override public float process(int enchantmentLevel, RandomSource random, float value) ` | ` (value < min \|\| value > max) ` 成立时提前返回 ` value `<br>末尾返回 ` this.modifier.process(enchantmentLevel, random, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L40) |
| ` @Override public MapCodec<? extends EnchantmentValueEffect> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L48) |
| ` public InRangeModifyEffect(LevelBasedValue min, LevelBasedValue max, EnchantmentValueEffect modifier) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L9) |
| ` public LevelBasedValue min() ` | 读取 record 分量 ` min ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L10) |
| ` public LevelBasedValue max() ` | 读取 record 分量 ` max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L11) |
| ` public EnchantmentValueEffect modifier() ` | 读取 record 分量 ` modifier ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L9) |
