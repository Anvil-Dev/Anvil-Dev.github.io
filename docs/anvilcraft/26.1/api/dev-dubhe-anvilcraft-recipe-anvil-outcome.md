# dev.dubhe.anvilcraft.recipe.anvil.outcome



## ConsumeBurningHeaterFuel

` public record ConsumeBurningHeaterFuel(int fuelCostTicks) implements IRecipeOutcome<ConsumeBurningHeaterFuel> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L25)

消耗燃烧加热器燃料的配方结果。 当铁砧合成成功时，检查下方是否存在点燃状态的燃烧加热器， 如果存在则消耗燃烧时间。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InWorldRecipeData<Boolean> FUEL_CONSUMED ` | 初值 ` InWorldRecipeData.of(AnvilCraft.of("burning_heater_fuel_consumed"), false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L26) |
| ` @Override public IRecipeOutcome.Type<ConsumeBurningHeaterFuel> getType() ` | 末尾返回 ` ModRecipeOutcomeTypes.CONSUME_BURNING_HEATER_FUEL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L29) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 实现调用 ` context.get(ConsumeBurningHeaterFuel.FUEL_CONSUMED) `<br>实现调用 ` context.put(ConsumeBurningHeaterFuel.FUEL_CONSUMED, true) `<br>实现调用 ` context.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L34) |
| ` public ConsumeBurningHeaterFuel(int fuelCostTicks) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L25) |
| ` public int fuelCostTicks() ` | 读取 record 分量 ` fuelCostTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L25) |

## ConsumeBurningHeaterFuel.Type

` public static class Type implements IRecipeOutcome.Type<ConsumeBurningHeaterFuel> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ConsumeBurningHeaterFuel> codec() ` | 末尾返回 ` MapCodec.unit(new ConsumeBurningHeaterFuel(240 * 20)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L52) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ConsumeBurningHeaterFuel> streamCodec() ` | 末尾返回 ` StreamCodec.of( (buf, value) -> ByteBufCodecs.VAR_INT.encode(buf, value.fuelCostTicks), buf -> new ConsumeBurningHeaterFuel(ByteBufCodecs.VAR_INT.decode(buf)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L57) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ConsumeBurningHeaterFuel.java#L51) |

## DamageAnvil

` public record DamageAnvil() implements IRecipeOutcome<DamageAnvil> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L14)

损坏铁砧配方结果类，用于定义使铁砧损坏的配方结果 该类实现了 IRecipeOutcome 接口，表示一种特殊的配方结果类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InWorldRecipeData<Boolean> DAMAGE_ANVIL ` | 损坏铁砧的配方数据键<br>初值 ` InWorldRecipeData.of(AnvilCraft.of("damage_anvil"), false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L16) |
| ` @Override public IRecipeOutcome.Type<DamageAnvil> getType() ` | 获取配方结果类型<br>返回 配方结果类型<br>末尾返回 ` ModRecipeOutcomeTypes.DAMAGE_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L21) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 接受配方上下文并处理损坏铁砧的结果<br>参数 ` context ` 配方上下文<br>执行 ` context.put(DamageAnvil.DAMAGE_ANVIL, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L29) |
| ` public DamageAnvil() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L14) |

## DamageAnvil.Type

` public static class Type implements IRecipeOutcome.Type<DamageAnvil> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L35)

损坏铁砧配方结果类型类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<DamageAnvil> codec() ` | 获取MapCodec编解码器<br>返回 MapCodec编解码器<br>末尾返回 ` MapCodec.unit(new DamageAnvil()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L39) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, DamageAnvil> streamCodec() ` | 获取StreamCodec编解码器<br>返回 StreamCodec编解码器<br>末尾返回 ` StreamCodec.unit(new DamageAnvil()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L47) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java#L35) |

## ProduceHeat

` public record ProduceHeat(List<HeatData> heatData, Distance distance) implements IRecipeOutcome<ProduceHeat> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36)

产生热量配方结果类，用于定义在配方执行时产生热量的结果 该类实现了 IRecipeOutcome 接口，可以对范围内的可加热方块产生热量效果<br>参数 ` heatData ` 热量数据列表<br>参数 ` distance ` 距离范围

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder builder() ` | 创建一个新的产生热量配方结果构建器<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 TimeWarpRecipe.Builder](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L249) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L47) |
| ` @Override public Type getType() ` | 获取配方结果类型<br>返回 配方结果类型<br>末尾返回 ` ModRecipeOutcomeTypes.PRODUCE_HEAT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L54) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 接受配方上下文并处理产生热量的结果<br>参数 ` context ` 配方上下文<br>实现调用 ` context.getLevel() `<br>实现调用 ` BlockPos.containing(context.getPos()) `<br>实现调用 ` context.getPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L62) |
| ` public ProduceHeat(List<HeatData> heatData, Distance distance) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36) |
| ` public List<HeatData> heatData() ` | 读取 record 分量 ` heatData ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36) |
| ` public Distance distance() ` | 读取 record 分量 ` distance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L36) |

## ProduceHeat.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L154)

产生热量配方结果构建器类

类型注解 ` @SuppressWarnings("UnusedReturnValue") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder heat(HeatTier tier, int duration) ` | 添加热量数据<br>参数 ` tier ` 热量等级<br>参数 ` duration ` 持续时间<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.canReach.add(new HeatData(tier, duration)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L167) |
| ` public Builder distance(Distance distance) ` | 设置距离范围<br>参数 ` distance ` 距离范围<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>[调用处 ProduceHeat.Builder.distance](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L176) |
| ` public Builder distance(Distance.Type type, int distance, boolean isHorizontal) ` | 设置距离范围<br>参数 ` type ` 距离类型<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(new Distance(type, distance, isHorizontal)) `<br>[调用处 ProduceHeat.Builder.distanceEuclidean](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L197) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L187) |
| ` public Builder distanceEuclidean(int distance, boolean isHorizontal) ` | 设置欧几里得距离范围<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L196) |
| ` public Builder distanceEuclidean(boolean isHorizontal) ` | 设置欧几里得距离范围<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, 1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L204) |
| ` public Builder distanceEuclidean(int distance) ` | 设置欧几里得距离范围<br>参数 ` distance ` 距离<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, distance, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L212) |
| ` public Builder distanceEuclidean() ` | 设置欧几里得距离范围<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.EUCLIDEAN, 1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L219) |
| ` public Builder distanceManhattan(int distance, boolean isHorizontal) ` | 设置曼哈顿距离范围<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L228) |
| ` public Builder distanceManhattan(boolean isHorizontal) ` | 设置曼哈顿距离范围<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, 1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L236) |
| ` public Builder distanceManhattan(int distance) ` | 设置曼哈顿距离范围<br>参数 ` distance ` 距离<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, distance, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L244) |
| ` public Builder distanceManhattan() ` | 设置曼哈顿距离范围<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.MANHATTAN, 1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L251) |
| ` public Builder distanceChebyshev(int distance, boolean isHorizontal) ` | 设置切比雪夫距离范围<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L260) |
| ` public Builder distanceChebyshev(boolean isHorizontal) ` | 设置切比雪夫距离范围<br>参数 ` isHorizontal ` 是否水平<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, 1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L268) |
| ` public Builder distanceChebyshev(int distance) ` | 设置切比雪夫距离范围<br>参数 ` distance ` 距离<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, distance, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L276) |
| ` public Builder distanceChebyshev() ` | 设置切比雪夫距离范围<br>返回 构建器实例<br>末尾返回 ` this.distance(Distance.Type.CHEBYSHEV, 1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L283) |
| ` public ProduceHeat build() ` | 构建产生热量配方结果<br>返回 产生热量配方结果<br>末尾返回 ` new ProduceHeat(this.canReach, this.distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L290) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L154) |

## ProduceHeat.HeatData

` public record HeatData(HeatTier tier, int duration) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L135)

热量数据记录类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<HeatData> CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L140) |
| ` public static final StreamCodec<ByteBuf, HeatData> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.composite( HeatTier.STREAM_CODEC, HeatData::tier, ByteBufCodecs.VAR_INT, HeatData::duration, HeatData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L146) |
| ` public HeatData(HeatTier tier, int duration) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L135) |
| ` public HeatTier tier() ` | 读取 record 分量 ` tier ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L136) |
| ` public int duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L137) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L135) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L135) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L135) |

## ProduceHeat.Type

` public static class Type implements IRecipeOutcome.Type<ProduceHeat> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L101)

产生热量配方结果类型类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ProduceHeat> MAP_CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L103) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ProduceHeat> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.composite( HeatData.STREAM_CODEC.apply(ByteBufCodecs.list()), ProduceHeat::heatData, Distance.STREAM_CODEC, ProduceHeat::distance, ProduceHeat::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L109) |
| ` @Override public MapCodec<ProduceHeat> codec() ` | 获取MapCodec编解码器<br>返回 MapCodec编解码器<br>末尾返回 ` Type.MAP_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L120) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ProduceHeat> streamCodec() ` | 获取StreamCodec编解码器<br>返回 StreamCodec编解码器<br>末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L128) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L101) |

## ResentmentAmberOutcome

` public record ResentmentAmberOutcome(Vec3 offset, Identifier savedEntityPath) implements IRecipeOutcome<ResentmentAmberOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Type getType() ` | 末尾返回 ` ModRecipeOutcomeTypes.RESENTMENT_AMBER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L28) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 实现调用 ` context.computeIfAbsent(TagCache.TAG_CACHE).getTag(this.savedEntityPath) `<br>实现调用 ` context.computeIfAbsent(TagCache.TAG_CACHE) `<br>实现调用 ` SavedEntity.CODEC.parse(context.getNbtRegistryOps(), tag).result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L33) |
| ` public ResentmentAmberOutcome(Vec3 offset, Identifier savedEntityPath) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25) |
| ` public Vec3 offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25) |
| ` public Identifier savedEntityPath() ` | 读取 record 分量 ` savedEntityPath ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L25) |

## ResentmentAmberOutcome.Type

` public static class Type implements IRecipeOutcome.Type<ResentmentAmberOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ResentmentAmberOutcome> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L55) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ResentmentAmberOutcome> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.VEC3, ResentmentAmberOutcome::offset, Identifier.STREAM_CODEC, ResentmentAmberOutcome::savedEntityPath, ResentmentAmberOutcome::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L61) |
| ` @Override public MapCodec<ResentmentAmberOutcome> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L70) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ResentmentAmberOutcome> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L75) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L54) |

## RoyalPreferenceOutcome

` public record RoyalPreferenceOutcome(ChanceItemStack result) implements IPlannedItemOutcome<RoyalPreferenceOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InWorldRecipeData<Boolean> IS_ROYAL_STEEL_RECIPE ` | 初值 ` InWorldRecipeData.of( AnvilCraft.of("is_royal_steel_recipe"), false ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L42) |
| ` @Override public IRecipeOutcome.Type<RoyalPreferenceOutcome> getType() ` | 末尾返回 ` ModRecipeOutcomeTypes.ROYAL_PREFERENCE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L50) |
| ` @Override public List<PlannedItem> plan(InWorldRecipeContext context) ` | ` (!context.get(RoyalPreferenceOutcome.IS_ROYAL_STEEL_RECIPE)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L55) |
| ` public RoyalPreferenceOutcome(ChanceItemStack result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public ChanceItemStack result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L41) |

## RoyalPreferenceOutcome.RoyalPreference

` public static class RoyalPreference `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L135)

类型注解 ` @SuppressWarnings({"OptionalUsedAsFieldOrParameterType", "OptionalAssignedToNull"}) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isRoyalPreferred(ServerLevel level, ItemStack stack) ` | 末尾返回 ` RoyalPreference.preferredGem.map(stack::is).orElse(false) \|\| RoyalPreference.preferredGemBlock.map(stack::is).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L140) |
| ` public static void clear() ` | [调用处 ReloadEventListener.onServerTagsUpdated](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L147) |
| ` public static void initRoyalPreference(long seed) ` | 实现调用 ` RoyalPreference.initRoyalPreferredGem(randomFactory) `<br>实现调用 ` RoyalPreference.initRoyalPreferredGemBlock(randomFactory) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L152) |
| ` public RoyalPreference() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L135) |

## RoyalPreferenceOutcome.Type

` public static class Type implements IRecipeOutcome.Type<RoyalPreferenceOutcome> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L189)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RoyalPreferenceOutcome> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(instance -> instance.group( ChanceItemStack.CODEC.fieldOf("result").forGetter(RoyalPreferenceOutcome::result) ).apply(instance, RoyalPreferenceOutcome::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L190) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RoyalPreferenceOutcome> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ChanceItemStack.STREAM_CODEC, RoyalPreferenceOutcome::result, RoyalPreferenceOutcome::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L194) |
| ` @Override public MapCodec<RoyalPreferenceOutcome> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L200) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RoyalPreferenceOutcome> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L205) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L189) |
