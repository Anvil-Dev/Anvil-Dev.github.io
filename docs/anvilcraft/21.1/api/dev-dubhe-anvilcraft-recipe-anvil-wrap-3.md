# dev.dubhe.anvilcraft.recipe.anvil.wrap（NeutronIrradiationRecipe.Builder 至 SuperHeatingRecipe.ConsumeFuel）



## NeutronIrradiationRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<NeutronIrradiationRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L107)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder fluid(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L110) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L115) |
| ` public Builder fluid(Block cauldron) ` | 末尾返回 ` this.fluid(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L120) |
| ` public Builder transform(Fluid transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L124) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L129) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L134) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L138) |
| ` public Builder consume(int consume) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L143) |
| ` @Override public void validate(ResourceLocation id) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L153) |
| ` @Override public String getType() ` | 末尾返回 ` "neutron_irradiation" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L157) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L107) |

## NeutronIrradiationRecipe.Serializer

` public static class Serializer implements RecipeSerializer<NeutronIrradiationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L71)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<NeutronIrradiationRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L96) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, NeutronIrradiationRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L101) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L71) |

## SolidLiquidRecipe

` public class SolidLiquidRecipe extends AbstractProcessRecipe<SolidLiquidRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L32)

An anvil-processing recipe between item ingredients and cauldron fluid.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public SolidLiquidRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 执行 ` this(itemIngredients, results, hasCauldron, Integer.MAX_VALUE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L34) |
| ` public SolidLiquidRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron, int maxEfficiency ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>[调用处 SolidLiquidRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L191) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L43) |
| ` @Override public RecipeSerializer<SolidLiquidRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.SOLID_LIQUID_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L62) |
| ` @Override public RecipeType<SolidLiquidRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SOLID_LIQUID_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L67) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 ConcreteRecipeLoader.initConcrete](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L72) |
| ` public boolean isConsumeFluid() ` | 末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L76) |
| ` public boolean isProduceFluid() ` | 末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L81) |
| ` @SuppressWarnings("unused") public boolean isFromWater() ` | 末尾返回 ` this.getHasCauldron().fluid().fluids().map(fluids -> fluids.stream().anyMatch(holder -> holder.value() == Fluids.WATER)).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L86) |

## SolidLiquidRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<SolidLiquidRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L131)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder cauldron(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L135) |
| ` public Builder cauldron(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L140) |
| ` public Builder cauldron(FluidStackPredicate fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L145) |
| ` public Builder cauldron(TagKey<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L150) |
| ` public Builder cauldron(Block cauldron) ` | 末尾返回 ` this.cauldron(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L155) |
| ` public Builder transform(Fluid transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L159) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L164) |
| ` public Builder transform(Block transform, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(transform)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L169) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L173) |
| ` public Builder consume(int consume) ` | ` (consume <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L178) |
| ` public Builder maxEfficiency(int maxEfficiency) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L184) |
| ` @Override public void validate(ResourceLocation id) ` | ` (!cauldron.hasFluid()) ` 成立时抛出 ` new IllegalArgumentException("Recipe fluid must not be empty, RecipeId: " + id) `<br>` (this.results.isEmpty() && cauldron.transforms().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe must have an item or fluid result, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L194) |
| ` @Override public String getType() ` | 末尾返回 ` "solid_liquid" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L205) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L131) |

## SolidLiquidRecipe.Serializer

` public static class Serializer implements RecipeSerializer<SolidLiquidRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L93)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<SolidLiquidRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L94) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SolidLiquidRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L108) |
| ` @Override public MapCodec<SolidLiquidRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L120) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, SolidLiquidRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L125) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L93) |

## SqueezingRecipe

` public class SqueezingRecipe extends AbstractProcessRecipe<SqueezingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L35)

压榨配方类 该配方用于在铁砧下落时压榨方块，需要在铁砧下方放置炼药锅作为收集容器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SqueezingRecipe( BlockStatePredicate ingredient, ChanceBlockState result, HasCauldronSimple hasCauldron, HasAnvil hasAnvil ) ` | 构造一个压榨配方<br>参数 ` ingredient ` 原料方块列表<br>参数 ` result ` 结果方块列表<br>参数 ` hasCauldron ` 炼药锅条件<br>实现调用 ` new Property().setBlockInputOffset(new Vec3i(0, -1, 0)).setConsumeInputBlocks(true).setInputBlocks(ingredient) `<br>实现调用 ` new Property().setBlockInputOffset(new Vec3i(0, -1, 0)).setConsumeInputBlocks(true) `<br>实现调用 ` new Property().setBlockInputOffset(new Vec3i(0, -1, 0)) `<br>[调用处 SqueezingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L380) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L44) |
| ` @Override public RecipeSerializer<SqueezingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.SQUEEZING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L63) |
| ` @Override public RecipeType<SqueezingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SQUEEZING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L68) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 SqueezingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L78) |
| ` @SuppressWarnings("unused") public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L87) |

## SqueezingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<SqueezingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L144)

压榨配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder requires(BlockStatePredicate ingredient) ` | 添加原料方块<br>参数 ` ingredient ` 原料方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L171) |
| ` public Builder requires(Block ingredient) ` | 添加原料方块<br>参数 ` ingredient ` 原料方块<br>返回 构建器实例<br>末尾返回 ` this.requires(BlockStatePredicate.builder().of(ingredient).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L182) |
| ` public Builder requires(TagKey<Block> ingredient) ` | 添加原料方块（标签形式）<br>参数 ` ingredient ` 原料方块标签<br>返回 构建器实例<br>末尾返回 ` this.requires(BlockStatePredicate.builder().of(ingredient).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L192) |
| ` public Builder result(ChanceBlockState result) ` | 添加结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L202) |
| ` public Builder result(Block result, float chance) ` | 添加结果方块（指定概率）<br>参数 ` result ` 结果方块<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.result(new ChanceBlockState(result.defaultBlockState(), chance)) `<br>[调用处 SqueezingRecipe.Builder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L225) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L214) |
| ` public Builder result(Block result) ` | 添加结果方块（默认概率为1.0f）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>末尾返回 ` this.result(result, 1.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L224) |
| ` public Builder cauldron(Fluid fluid) ` | 设置炼药锅流体<br>参数 ` fluid ` 流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L234) |
| ` public Builder cauldron(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L239) |
| ` public Builder cauldron(Block cauldron) ` | 设置炼药锅方块<br>参数 ` cauldron ` 炼药锅方块<br>返回 构建器实例<br>末尾返回 ` this.cauldron(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L250) |
| ` public Builder transform(Fluid transform, int produce) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L260) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 设置转换后的炼药锅方块<br>参数 ` transform ` 转换后的炼药锅方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L271) |
| ` public Builder transform(Block transform, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(transform)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L276) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L280) |
| ` public Builder consume(int consume) ` | 设置是否消耗流体<br>参数 ` consume ` 是否消耗流体<br>返回 构建器实例<br>` (consume <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L291) |
| ` public Builder chance(float chance) ` | 设置转换成功的概率<br>参数 ` chance ` 转换成功的概率<br>返回 构建器实例<br>` (chance <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.chance(chance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L303) |
| ` @SuppressWarnings("unused") public Builder ignite() ` | 设置需要点燃锅<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.ignite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L314) |
| ` public Builder anvil(Block anvil) ` | 设置铁砧条件<br>参数 ` anvil ` 铁砧方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L326) |
| ` public Builder anvil(TagKey<Block> anvil) ` | 设置铁砧条件<br>参数 ` anvil ` 铁砧方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L337) |
| ` public Builder anvil(Consumer<BlockStatePredicate.Builder> consumer) ` | 设置铁砧条件<br>参数 ` consumer ` 铁砧条件谓词消费者<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` consumer.accept(builder) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L348) |
| ` public Builder frostAnvil() ` | 设置浮霜铁砧条件<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` HasAnvil.frostOnly() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L360) |
| ` public Builder noFrostAnvil() ` | 设置非浮霜铁砧条件<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` HasAnvil.noFrost() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L370) |
| ` @Override public SqueezingRecipe buildRecipe() ` | ` (this.ingredient == null \|\| this.result == null) ` 成立时抛出 ` new IllegalStateException("Squeezing recipe requires an ingredient and a result") `<br>末尾返回 ` new SqueezingRecipe(this.ingredient, this.result, this.hasCauldron.build(), this.hasAnvil) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L375) |
| ` @Override public void validate(ResourceLocation id) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L383) |
| ` @Override public String getType() ` | 末尾返回 ` "bulging" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L387) |
| ` @Override public Item getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L392) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L144) |

## SqueezingRecipe.Serializer

` public static class Serializer implements RecipeSerializer<SqueezingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L96)

压榨配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<SqueezingRecipe> CODEC ` | 编解码器<br>由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L100) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SqueezingRecipe> STREAM_CODEC ` | 流编解码器<br>由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L118) |
| ` @Override public MapCodec<SqueezingRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L130) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, SqueezingRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L135) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L96) |

## StampingRecipe

` public class StampingRecipe extends AbstractProcessRecipe<StampingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L21)

冲压配方类 该配方用于在铁砧下落时冲压物品，需要在铁砧下方放置冲压平台作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StampingRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个冲压配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)).setItemInputRange(new Vec3(0.75, 0.25, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.STAMPING_PLATFORM.get()).build() `<br>[调用处 StampingCategory.toDisplayRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/anvil/StampingCategory.java#L141) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L29) |
| ` @Override public RecipeSerializer<StampingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.STAMPING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L49) |
| ` @Override public RecipeType<StampingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.STAMPING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L54) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 StampingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L64) |

## StampingRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<StampingRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L81)

冲压配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "stamping" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L82) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L81) |

## StampingRecipe.Serializer

` public static class Serializer extends AbstractSerializer<StampingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L71)

冲压配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L71) |

## SuperHeatingRecipe

` public class SuperHeatingRecipe extends AbstractProcessRecipe<SuperHeatingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L52)

超级加热配方类 该配方用于在铁砧下落时超级加热物品，需要在铁砧下方放置加热器作为热源

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SuperHeatingRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 实现调用 ` super(createProperty(itemIngredients, results, hasCauldron)) `<br>实现调用 ` createProperty(itemIngredients, results, hasCauldron) `<br>实现调用 ` results.stream() `<br>[调用处 SuperHeatingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L280) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L56) |
| ` @Override public ItemStack assemble(InWorldRecipeContext context, HolderLookup.Provider registries) ` | 末尾返回 ` super.assemble(context, registries) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L67) |
| ` @Override public RecipeSerializer<SuperHeatingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.SUPER_HEATING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L75) |
| ` @Override public RecipeType<SuperHeatingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SUPER_HEATING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L115) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 SuperHeatingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L125) |
| ` public boolean isConsumeFluid() ` | 是否消耗流体<br>返回 如果消耗流体返回true，否则返回false<br>末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L134) |
| ` public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L144) |
| ` public boolean isHasRoyalPreference() ` | 末尾返回 ` this.hasRoyalPreference `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L52) |

## SuperHeatingRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<SuperHeatingRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L194)

超级加热配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder fluid(Fluid fluid) ` | 设置流体<br>参数 ` fluid ` 流体<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L206) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L211) |
| ` public Builder fluid(FluidStackPredicate fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L216) |
| ` public Builder fluid(TagKey<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L221) |
| ` public Builder fluid(Block cauldron) ` | 设置炼药锅方块<br>参数 ` cauldron ` 炼药锅方块<br>返回 构建器实例<br>末尾返回 ` this.fluid(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L232) |
| ` public Builder transform(Fluid transform, int produce) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L242) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L253) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L258) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L262) |
| ` public Builder consume(int consume) ` | 设置消耗量<br>参数 ` consume ` 消耗量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L273) |
| ` @Override public void validate(ResourceLocation id) ` | ` (itemIngredients.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L283) |
| ` @Override public String getType() ` | 末尾返回 ` "super_heating" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L290) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L194) |

## SuperHeatingRecipe.ConsumeFuel

` public record ConsumeFuel() implements IRecipeOutcome<ConsumeFuel> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L307)

消耗燃烧加热器燃料的配方结果 当铁砧合成成功时，检查下方是否存在点燃状态的燃烧加热器， 如果存在则消耗240秒（4800tick）的燃烧时间

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int FUEL_COST_TICKS ` | 每次合成消耗的燃烧时间（tick），240秒 = 4800tick<br>初值 ` 240 * 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L311) |
| ` public static final InWorldRecipeData<Boolean> FUEL_CONSUMED ` | 标记当前配方上下文是否已消耗过燃料，避免同一结果被重复接受<br>初值 ` InWorldRecipeData.of(AnvilCraft.of("super_heating_fuel_consumed"), false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L316) |
| ` @Override public IRecipeOutcome.Type<ConsumeFuel> getType() ` | 末尾返回 ` ModRecipeOutcomeTypes.CONSUME_BURNING_HEATER_FUEL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L319) |
| ` @Override public void accept(InWorldRecipeContext context) ` | 实现调用 ` context.get(FUEL_CONSUMED) `<br>实现调用 ` context.put(FUEL_CONSUMED, true) `<br>实现调用 ` context.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L324) |
| ` public ConsumeFuel() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L307) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L307) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L307) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L307) |
