# dev.dubhe.anvilcraft.recipe.anvil.wrap（SuperHeatingRecipe.ConsumeFuel.Type 至 VanillaRecipesWrap）



## SuperHeatingRecipe.ConsumeFuel.Type

` public static class Type implements IRecipeOutcome.Type<ConsumeFuel> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L339)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ConsumeFuel> codec() ` | 末尾返回 ` MapCodec.unit(new ConsumeFuel()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L340) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ConsumeFuel> streamCodec() ` | 末尾返回 ` StreamCodec.unit(new ConsumeFuel()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L345) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L339) |

## SuperHeatingRecipe.Serializer

` public static class Serializer implements RecipeSerializer<SuperHeatingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L152)

超级加热配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<SuperHeatingRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L180) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, SuperHeatingRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L185) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L152) |

## TimeWarpRecipe

` public class TimeWarpRecipe extends AbstractProcessRecipe<TimeWarpRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L43)

时移配方类 该配方用于在铁砧下落时产生时移效果，需要在铁砧下方放置腐化信标作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TimeWarpRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron, ProduceHeat produceHeat ) ` | 构造一个时移配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>参数 ` hasCauldron ` 炼药锅条件<br>参数 ` produceHeat ` 产热信息<br>执行 ` this(itemIngredients, results, hasCauldron, produceHeat, List.of()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L53) |
| ` public TimeWarpRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron, ProduceHeat produceHeat, List<ItemIngredientPredicate> catalysts ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.CORRUPTED_BEACON.get()).with(CorruptedBeaconBlock.LIT, true) `<br>[调用处 TimeWarpRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L463) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L62) |
| ` @Override public RecipeSerializer<TimeWarpRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.TIME_WARP_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L91) |
| ` @Override public RecipeType<TimeWarpRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.TIME_WARP_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L96) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 TimeWarpRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L106) |
| ` public boolean isConsumeFluid() ` | 是否消耗流体<br>返回 如果消耗流体返回true，否则返回false<br>末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L115) |
| ` public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L125) |

## TimeWarpRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<TimeWarpRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L184)

时移配方构建器

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder catalyst(ItemIngredientPredicate catalyst) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.catalysts.add(catalyst) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L188) |
| ` public Builder catalyst(ItemLike catalyst) ` | 末尾返回 ` this.catalyst(catalyst, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L193) |
| ` public Builder catalyst(ItemLike catalyst, int count) ` | 末尾返回 ` this.catalyst(ItemIngredientPredicate.of(catalyst).withCount(count).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L197) |
| ` public Builder catalyst(TagKey<Item> catalyst, int count) ` | 末尾返回 ` this.catalyst(ItemIngredientPredicate.of(catalyst).withCount(count).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L201) |
| ` public Builder heat(HeatTier tier, int duration) ` | 添加热量<br>参数 ` tier ` 热量等级<br>参数 ` duration ` 持续时间<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.heat(tier, duration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L222) |
| ` public Builder distance(Distance distance) ` | 设置距离<br>参数 ` distance ` 距离<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distance(distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L233) |
| ` public Builder distance(Distance.Type type, int distance, boolean isHorizontal) ` | 设置距离（指定类型、距离和方向）<br>参数 ` type ` 距离类型<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distance(type, distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L246) |
| ` public Builder distanceEuclidean(int distance, boolean isHorizontal) ` | 设置欧几里得距离（指定距离和方向）<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceEuclidean(distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L258) |
| ` public Builder distanceEuclidean(boolean isHorizontal) ` | 设置欧几里得距离（默认距离为1）<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceEuclidean(1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L269) |
| ` public Builder distanceEuclidean(int distance) ` | 设置欧几里得距离（指定距离，默认为水平方向）<br>参数 ` distance ` 距离<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceEuclidean(distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L280) |
| ` public Builder distanceEuclidean() ` | 设置欧几里得距离（默认距离为1，默认为水平方向）<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceEuclidean() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L290) |
| ` public Builder distanceManhattan(int distance, boolean isHorizontal) ` | 设置曼哈顿距离（指定距离和方向）<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceManhattan(distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L302) |
| ` public Builder distanceManhattan(boolean isHorizontal) ` | 设置曼哈顿距离（默认距离为1）<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceManhattan(1, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L313) |
| ` public Builder distanceManhattan(int distance) ` | 设置曼哈顿距离（指定距离，默认为水平方向）<br>参数 ` distance ` 距离<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceManhattan(distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L324) |
| ` public Builder distanceManhattan() ` | 设置曼哈顿距离（默认距离为1，默认为水平方向）<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceManhattan() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L334) |
| ` public Builder distanceChebyshev(int distance, boolean isHorizontal) ` | 设置切比雪夫距离（指定距离和方向）<br>参数 ` distance ` 距离<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceChebyshev(distance, isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L346) |
| ` public Builder distanceChebyshev(boolean isHorizontal) ` | 设置切比雪夫距离（默认距离为1）<br>参数 ` isHorizontal ` 是否水平方向<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceChebyshev(isHorizontal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L357) |
| ` public Builder distanceChebyshev(int distance) ` | 设置切比雪夫距离（指定距离，默认为水平方向）<br>参数 ` distance ` 距离<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceChebyshev(distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L368) |
| ` public Builder distanceChebyshev() ` | 设置切比雪夫距离（默认距离为1，默认为水平方向）<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.produceHeat.distanceChebyshev() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L378) |
| ` public Builder fluid(Fluid fluid) ` | 设置流体<br>参数 ` fluid ` 流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L389) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L394) |
| ` public Builder fluid(Block cauldron) ` | 设置炼药锅方块<br>参数 ` cauldron ` 炼药锅方块<br>返回 构建器实例<br>末尾返回 ` this.fluid(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L405) |
| ` public Builder transform(Fluid transform, int produce) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L415) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L426) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L431) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L435) |
| ` public Builder consume(int consume) ` | 设置消耗量<br>参数 ` consume ` 消耗量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L446) |
| ` public Builder ignite() ` | 设置需要点燃锅<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.ignite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L456) |
| ` @Override public void validate(ResourceLocation id) ` | ` (itemIngredients.isEmpty() && !hasCauldronSimple.hasFluid()) ` 成立时抛出 ` new IllegalArgumentException("Recipe input must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L466) |
| ` @Override public String getType() ` | 末尾返回 ` "time_warp" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L474) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L184) |

## TimeWarpRecipe.Serializer

` public static class Serializer implements RecipeSerializer<TimeWarpRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L133)

时移配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<TimeWarpRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L170) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, TimeWarpRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L175) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L133) |

## UnpackRecipe

` public class UnpackRecipe extends AbstractProcessRecipe<UnpackRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L32)

解包配方类 该配方用于在铁砧下落时将物品从容器中解包出来，需要在铁砧下方放置特定的铁活板门作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UnpackRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个解包配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>执行 ` super(createProperty(itemIngredients, results)) `<br>[调用处 UnpackRecipe.Serializer.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L124) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L42) |
| ` @Override public RecipeSerializer<UnpackRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.UNPACK_SERIALIZERS.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L99) |
| ` @Override public RecipeType<UnpackRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.UNPACK_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L104) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 UnpackRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/UnpackRecipeLoader.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L114) |

## UnpackRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<UnpackRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L131)

解包配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "unpack" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L132) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L131) |

## UnpackRecipe.Serializer

` public static class Serializer extends AbstractSerializer<UnpackRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L121)

解包配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java#L121) |

## VanillaRecipesWrap

` public class VanillaRecipesWrap `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Multimap<Item, ShapelessRecipe> shapelessRecipes ` | 字段类型为 ` Multimap<Item, ShapelessRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L45) |
| ` public static Multimap<Item, ShapedRecipe> shapedRecipes ` | 字段类型为 ` Multimap<Item, ShapedRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L46) |
| ` public static Multimap<Item, BlastingRecipe> blastingRecipes ` | 字段类型为 ` Multimap<Item, BlastingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L47) |
| ` public static Multimap<Item, SmokingRecipe> smokingRecipes ` | 字段类型为 ` Multimap<Item, SmokingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L48) |
| ` public static Multimap<Item, CampfireCookingRecipe> campfireCookingRecipes ` | 字段类型为 ` Multimap<Item, CampfireCookingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L49) |
| ` public static Multimap<Item, SmeltingRecipe> smeltingRecipes ` | 字段类型为 ` Multimap<Item, SmeltingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L50) |
| ` public static List<RecipeHolder<InWorldRecipe>> recipes ` | 字段类型为 ` List<RecipeHolder<InWorldRecipe>> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L51) |
| ` public static List<RecipeHolder<InWorldRecipe>> init(HolderLookup.Provider registries, Collection<RecipeHolder<?>> recipes) ` | 末尾返回 ` VanillaRecipesWrap.recipes `<br>[调用处 InWorldRecipeEventListener.inWorldRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L64) |
| ` public static void wrap(HolderLookup.Provider registries, @Nullable ShapelessRecipe recipe) ` | 实现调用 ` recipe.getIngredients().isEmpty() `<br>实现调用 ` recipe.getIngredients() `<br>实现调用 ` ingredients.getFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L116) |
| ` public static void wrap(HolderLookup.Provider registries, @Nullable ShapedRecipe recipe) ` | 实现调用 ` recipe.getHeight() `<br>实现调用 ` recipe.getWidth() `<br>实现调用 ` recipe.getIngredients() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L130) |
| ` public static void wrap(HolderLookup.Provider registries, @Nullable BlastingRecipe recipe) ` | 实现调用 ` canWrap(recipe) `<br>实现调用 ` recipe.getIngredients().getFirst() `<br>实现调用 ` recipe.getIngredients() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L138) |
| ` public static void wrap(HolderLookup.Provider registries, @Nullable SmokingRecipe recipe) ` | 实现调用 ` canWrap(recipe) `<br>实现调用 ` recipe.getIngredients().getFirst() `<br>实现调用 ` recipe.getIngredients() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L147) |
| ` public static void wrap(HolderLookup.Provider registries, @Nullable CampfireCookingRecipe recipe) ` | 实现调用 ` canWrap(recipe) `<br>实现调用 ` recipe.getIngredients().getFirst() `<br>实现调用 ` recipe.getIngredients() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L156) |
| ` public static void wrap(HolderLookup.Provider registries, @Nullable SmeltingRecipe recipe) ` | 实现调用 ` canWrap(recipe) `<br>实现调用 ` recipe.getIngredients().getFirst() `<br>实现调用 ` recipe.getIngredients() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L167) |
| ` public VanillaRecipesWrap() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/VanillaRecipesWrap.java#L44) |
