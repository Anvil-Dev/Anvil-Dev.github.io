# dev.dubhe.anvilcraft.recipe.anvil.outcome



## DamageAnvil

` public record DamageAnvil() implements IRecipeOutcome<DamageAnvil> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L16)

损坏铁砧配方结果类，用于定义使铁砧损坏的配方结果 该类实现了 IRecipeOutcome 接口，表示一种特殊的配方结果类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InWorldRecipeData<Boolean> DAMAGE_ANVIL ` | 损坏铁砧的配方数据键<br>初值 ` InWorldRecipeData.of(AnvilCraft.of("damage_anvil"), false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L20) |
| ` @Override public IRecipeOutcome.Type<DamageAnvil> getType() ` | 获取配方结果类型<br>返回 配方结果类型<br>末尾返回 ` ModRecipeOutcomeTypes.DAMAGE_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L27) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 接受配方上下文并处理损坏铁砧的结果<br>参数 ` context ` 配方上下文<br>执行 ` context.put(DAMAGE_ANVIL, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L37) |
| ` public DamageAnvil() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L16) |

## DamageAnvil.Type

` public static class Type implements IRecipeOutcome.Type<DamageAnvil> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L45)

损坏铁砧配方结果类型类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<DamageAnvil> codec() ` | 获取MapCodec编解码器<br>返回 MapCodec编解码器<br>末尾返回 ` MapCodec.unit(new DamageAnvil()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L51) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, DamageAnvil> streamCodec() ` | 获取StreamCodec编解码器<br>返回 StreamCodec编解码器<br>末尾返回 ` StreamCodec.unit(new DamageAnvil()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L61) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L45) |

## ProduceHeat

` public record ProduceHeat(List<HeatData> heatData, Distance distance) implements IRecipeOutcome<ProduceHeat> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38)

产生热量配方结果类，用于定义在配方执行时产生热量的结果 该类实现了 IRecipeOutcome 接口，可以对范围内的可加热方块产生热量效果<br>参数 ` heatData ` 热量数据列表<br>参数 ` distance ` 距离范围

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder builder() ` | 创建一个新的产生热量配方结果构建器<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 TimeWarpRecipe.Builder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L213) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L44) |
| ` @Override public Type getType() ` | 获取配方结果类型<br>返回 配方结果类型<br>末尾返回 ` ModRecipeOutcomeTypes.PRODUCE_HEAT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L53) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 接受配方上下文并处理产生热量的结果<br>参数 ` context ` 配方上下文<br>实现调用 ` context.getLevel() `<br>实现调用 ` BlockPos.containing(context.getPos()) `<br>实现调用 ` context.getPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L63) |
| ` public ProduceHeat(List<HeatData> heatData, Distance distance) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38) |
| ` public List<HeatData> heatData() ` | 读取 record 分量 ` heatData ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38) |
| ` public Distance distance() ` | 读取 record 分量 ` distance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L38) |

## ProduceHeat.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L172)

产生热量配方结果构建器类

类型注解 ` @SuppressWarnings("UnusedReturnValue") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder heat(HeatTier tier, int duration) ` | 添加热量数据<br>参数 ` tier ` 热量等级<br>参数 ` duration ` 持续时间<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.canReach.add(new HeatData(tier, duration)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L191) |
| ` public Builder distance(Distance distance) ` | 设置距离范围<br>参数 ` distance ` 距离范围<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>[调用处 ProduceHeat.Builder.distance](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L216) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L202) |
| ` public Builder distance(Distance.Type type, int distance, boolean isHorizontal) ` | 设置距离范围<br>参数 ` type ` 距离类型<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(new Distance(type, distance, isHorizontal)) `<br>[调用处 ProduceHeat.Builder.distanceEuclidean](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L227) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L215) |
| ` public Builder distanceEuclidean(int distance, boolean isHorizontal) ` | 设置欧几里得距离范围<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L226) |
| ` public Builder distanceEuclidean(boolean isHorizontal) ` | 设置欧几里得距离范围<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, 1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L236) |
| ` public Builder distanceEuclidean(int distance) ` | 设置欧几里得距离范围<br>参数 ` distance ` 距离<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, distance, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L246) |
| ` public Builder distanceEuclidean() ` | 设置欧几里得距离范围<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, 1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L255) |
| ` public Builder distanceManhattan(int distance, boolean isHorizontal) ` | 设置曼哈顿距离范围<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L266) |
| ` public Builder distanceManhattan(boolean isHorizontal) ` | 设置曼哈顿距离范围<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, 1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L276) |
| ` public Builder distanceManhattan(int distance) ` | 设置曼哈顿距离范围<br>参数 ` distance ` 距离<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, distance, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L286) |
| ` public Builder distanceManhattan() ` | 设置曼哈顿距离范围<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, 1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L295) |
| ` public Builder distanceChebyshev(int distance, boolean isHorizontal) ` | 设置切比雪夫距离范围<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L306) |
| ` public Builder distanceChebyshev(boolean isHorizontal) ` | 设置切比雪夫距离范围<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, 1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L316) |
| ` public Builder distanceChebyshev(int distance) ` | 设置切比雪夫距离范围<br>参数 ` distance ` 距离<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, distance, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L326) |
| ` public Builder distanceChebyshev() ` | 设置切比雪夫距离范围<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, 1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L335) |
| ` public ProduceHeat build() ` | 构建产生热量配方结果<br>返回 产生热量配方结果<br>末尾返回 ` new ProduceHeat(this.canReach, this.distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L344) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L172) |

## ProduceHeat.HeatData

` public record HeatData(HeatTier tier, int duration) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L147)

热量数据记录类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<HeatData> CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L154) |
| ` public static final StreamCodec<ByteBuf, HeatData> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.composite( HeatTier.STREAM_CODEC, HeatData::tier, ByteBufCodecs.VAR_INT, HeatData::duration, HeatData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L162) |
| ` public HeatData(HeatTier tier, int duration) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L147) |
| ` public HeatTier tier() ` | 读取 record 分量 ` tier ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L148) |
| ` public int duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L149) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L147) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L147) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L147) |

## ProduceHeat.Type

` public static class Type implements IRecipeOutcome.Type<ProduceHeat> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L103)

产生热量配方结果类型类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ProduceHeat> MAP_CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L107) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ProduceHeat> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.composite( HeatData.STREAM_CODEC.apply(ByteBufCodecs.list()), ProduceHeat::heatData, Distance.STREAM_CODEC, ProduceHeat::distance, ProduceHeat::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L115) |
| ` @Override public MapCodec<ProduceHeat> codec() ` | 获取MapCodec编解码器<br>返回 MapCodec编解码器<br>末尾返回 ` Type.MAP_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L128) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ProduceHeat> streamCodec() ` | 获取StreamCodec编解码器<br>返回 StreamCodec编解码器<br>末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L138) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L103) |

## ResentmentAmberOutcome

` public record ResentmentAmberOutcome(Vec3 offset, ResourceLocation savedEntityPath) implements IRecipeOutcome<ResentmentAmberOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Type getType() ` | 末尾返回 ` ModRecipeOutcomeTypes.RESENTMENT_AMBER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L27) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 实现调用 ` context.computeIfAbsent(TagCache.TAG_CACHE).getTag(this.savedEntityPath) `<br>实现调用 ` context.computeIfAbsent(TagCache.TAG_CACHE) `<br>实现调用 ` SavedEntity.CODEC.parse(context.getNbtRegistryOps(), tag).result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L32) |
| ` public ResentmentAmberOutcome(Vec3 offset, ResourceLocation savedEntityPath) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24) |
| ` public Vec3 offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24) |
| ` public ResourceLocation savedEntityPath() ` | 读取 record 分量 ` savedEntityPath ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L24) |

## ResentmentAmberOutcome.Type

` public static class Type implements IRecipeOutcome.Type<ResentmentAmberOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ResentmentAmberOutcome> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L50) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ResentmentAmberOutcome> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.VEC3, ResentmentAmberOutcome::offset, ResourceLocation.STREAM_CODEC, ResentmentAmberOutcome::savedEntityPath, ResentmentAmberOutcome::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L57) |
| ` @Override public MapCodec<ResentmentAmberOutcome> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L66) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ResentmentAmberOutcome> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L71) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L49) |

## RoyalPreferenceOutcome

` public record RoyalPreferenceOutcome(ChanceItemStack result) implements IPlannedItemOutcome<RoyalPreferenceOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InWorldRecipeData<Boolean> IS_ROYAL_STEEL_RECIPE ` | Context data key：标记当前配方是否为产出皇家钢的配方<br>初值 ` InWorldRecipeData.of(AnvilCraft.of("is_royal_steel_recipe"), false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L46) |
| ` @Override public IRecipeOutcome.Type<RoyalPreferenceOutcome> getType() ` | 末尾返回 ` ModRecipeOutcomeTypes.ROYAL_PREFERENCE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L64) |
| ` @Override public List<PlannedItem> plan(InWorldRecipeContext context) ` | ` (!context.get(IS_ROYAL_STEEL_RECIPE)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L69) |
| ` public RoyalPreferenceOutcome(ChanceItemStack result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public ChanceItemStack result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |

## RoyalPreferenceOutcome.RoyalPreference

` public static class RoyalPreference `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L148)

类型注解 ` @SuppressWarnings({"OptionalUsedAsFieldOrParameterType", "OptionalAssignedToNull"}) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isRoyalPreferred(ServerLevel level, ItemStack stack) ` | 末尾返回 ` stack.is(RoyalPreference.preferredGem.orElseThrow()) \|\| stack.is(RoyalPreference.preferredGemBlock.orElseThrow()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L153) |
| ` public static void initRoyalPreference(ServerLevel level) ` | 实现调用 ` RoyalPreference.initRoyalPreferredGem(randomFactory) `<br>实现调用 ` RoyalPreference.initRoyalPreferredGemBlock(randomFactory) `<br>[调用处 DatapackEventListener.onDatapack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/DatapackEventListener.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L159) |
| ` public RoyalPreference() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L148) |

## RoyalPreferenceOutcome.Type

` public static class Type implements IRecipeOutcome.Type<RoyalPreferenceOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L190)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RoyalPreferenceOutcome> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(instance -> instance.group( ChanceItemStack.CODEC.fieldOf("result").forGetter(RoyalPreferenceOutcome::result) ).apply(instance, RoyalPreferenceOutcome::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L191) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RoyalPreferenceOutcome> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ChanceItemStack.STREAM_CODEC, RoyalPreferenceOutcome::result, RoyalPreferenceOutcome::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L195) |
| ` @Override public MapCodec<RoyalPreferenceOutcome> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L201) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RoyalPreferenceOutcome> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L206) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L190) |
