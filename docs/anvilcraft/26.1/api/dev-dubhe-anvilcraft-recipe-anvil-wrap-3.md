# dev.dubhe.anvilcraft.recipe.anvil.wrap（SolidLiquidRecipe 至 TimeWarpRecipe）



## SolidLiquidRecipe

` public class SolidLiquidRecipe extends AbstractProcessRecipe<SolidLiquidRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L34)

膨发配方类 该配方用于在铁砧下落时使物品在炼药锅中膨发，需要在铁砧下方放置炼药锅作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<SolidLiquidRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<SolidLiquidRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L36) |
| ` public SolidLiquidRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 构造一个膨发配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>参数 ` hasCauldron ` 炼药锅条件<br>执行 ` this(itemIngredients, results, hasCauldron, Integer.MAX_VALUE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L68) |
| ` public SolidLiquidRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron, int maxEfficiency ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>[调用处 SolidLiquidRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L260) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L76) |
| ` @Override public RecipeType<SolidLiquidRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SOLID_LIQUID.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L95) |
| ` @Override public RecipeSerializer<SolidLiquidRecipe> getSerializer() ` | 末尾返回 ` ModRecipeSerializers.SOLID_LIQUID.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L100) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ConcreteRecipeLoader.initConcrete](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L108) |
| ` public boolean isConsumeFluid() ` | 是否消耗流体<br>返回 如果消耗流体返回true，否则返回false<br>末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L115) |
| ` public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L123) |
| ` public boolean isFromWater() ` | 是否使用水作为流体<br>返回 如果使用水返回true，否则返回false<br>末尾返回 ` this.getHasCauldron().fluid().fluids().map(fluids -> fluids.stream().anyMatch(holder -> holder.value() == Fluids.WATER)).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L131) |

## SolidLiquidRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<SolidLiquidRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L138)

膨发配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder cauldron(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L139) |
| ` public Builder cauldron(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L144) |
| ` public Builder cauldron(FluidStackPredicate fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L149) |
| ` public Builder cauldron(TagKey<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L154) |
| ` public Builder cauldron(Identifier fluid) ` | 设置炼药锅流体<br>参数 ` fluid ` 流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L164) |
| ` public Builder cauldron(Block cauldron) ` | 设置炼药锅方块<br>参数 ` cauldron ` 炼药锅方块<br>返回 构建器实例<br>末尾返回 ` this.cauldron(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L174) |
| ` public Builder transform(Fluid transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L178) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L183) |
| ` public Builder transform(Block transform, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(transform)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L188) |
| ` public Builder transform(FluidStackTemplate transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L192) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L197) |
| ` public Builder transform(Identifier transform) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L207) |
| ` public Builder transform(Block transform) ` | 设置转换后的炼药锅方块<br>参数 ` transform ` 转换后的炼药锅方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(WrapUtils.cauldron2Fluid(transform)) `<br>实现调用 ` WrapUtils.cauldron2Fluid(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L217) |
| ` public Builder produce(int produce) ` | 设置是否产生流体<br>参数 ` produce ` 是否产生流体<br>返回 构建器实例<br>` (produce <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.produce(produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L231) |
| ` public Builder consume(int consume) ` | 设置是否消耗流体<br>参数 ` consume ` 消耗流体<br>返回 构建器实例<br>` (consume <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L242) |
| ` public Builder fluidTag(Identifier fluidTag) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluidTag(fluidTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L248) |
| ` public Builder maxEfficiency(int maxEfficiency) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L253) |
| ` @Override public void validate(Identifier id) ` | ` (!cauldron.hasFluid()) ` 成立时抛出 ` new IllegalArgumentException("Recipe fluid must not be empty, RecipeId: " + id) `<br>` (this.results.isEmpty() && cauldron.transforms().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe must have an item or fluid result, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L263) |
| ` @Override public String getType() ` | 末尾返回 ` "solid_liquid" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L274) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L138) |

## SqueezingRecipe

` public class SqueezingRecipe extends AbstractProcessRecipe<SqueezingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L32)

压榨配方类 该配方用于在铁砧下落时压榨方块，需要在铁砧下方放置炼药锅作为收集容器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<SqueezingRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<SqueezingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L34) |
| ` public SqueezingRecipe( BlockStatePredicate ingredient, ChanceBlockState result, HasCauldronSimple hasCauldron, HasAnvil hasAnvil ) ` | 构造一个压榨配方<br>参数 ` ingredient ` 原料方块列表<br>参数 ` result ` 结果方块列表<br>参数 ` hasCauldron ` 炼药锅条件<br>实现调用 ` new Property().setBlockInputOffset(new Vec3i(0, -1, 0)).setConsumeInputBlocks(true).setInputBlocks(ingredient) `<br>实现调用 ` new Property().setBlockInputOffset(new Vec3i(0, -1, 0)).setConsumeInputBlocks(true) `<br>实现调用 ` new Property().setBlockInputOffset(new Vec3i(0, -1, 0)) `<br>[调用处 SqueezingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L346) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L67) |
| ` @Override public RecipeType<SqueezingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SQUEEZING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L86) |
| ` @Override public RecipeSerializer<SqueezingRecipe> getSerializer() ` | 末尾返回 ` SqueezingRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L91) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 SqueezingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L99) |
| ` public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L106) |

## SqueezingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<SqueezingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L112)

压榨配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder cauldron(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L113) |
| ` public Builder cauldron(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L118) |
| ` public Builder cauldron(Identifier fluid) ` | 设置炼药锅流体<br>参数 ` fluid ` 流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L128) |
| ` public Builder cauldron(Block cauldron) ` | 设置炼药锅方块<br>参数 ` cauldron ` 炼药锅方块<br>返回 构建器实例<br>末尾返回 ` this.cauldron(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L138) |
| ` public Builder transform(Fluid transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L142) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L147) |
| ` public Builder transform(Block transform, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(transform)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L152) |
| ` public Builder transform(FluidStackTemplate transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L156) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L161) |
| ` public Builder transform(Identifier transform) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L171) |
| ` public Builder transform(Block transform) ` | 设置转换后的炼药锅方块<br>参数 ` transform ` 转换后的炼药锅方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(WrapUtils.cauldron2Fluid(transform)) `<br>实现调用 ` WrapUtils.cauldron2Fluid(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L181) |
| ` public Builder requires(BlockStatePredicate ingredient) ` | 添加原料方块<br>参数 ` ingredient ` 原料方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L203) |
| ` public Builder requires(Block ingredient) ` | 添加原料方块<br>参数 ` ingredient ` 原料方块<br>返回 构建器实例<br>末尾返回 ` this.requires(BlockStatePredicate.builder().of(ingredient).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L213) |
| ` public Builder requires(HolderGetter<Block> blocks, TagKey<Block> ingredient) ` | 添加原料方块（标签形式）<br>参数 ` ingredient ` 原料方块标签<br>返回 构建器实例<br>末尾返回 ` this.requires(BlockStatePredicate.builder().of(blocks, ingredient).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L222) |
| ` public Builder result(ChanceBlockState result) ` | 添加结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L231) |
| ` public Builder result(Block result, float chance) ` | 添加结果方块（指定概率）<br>参数 ` result ` 结果方块<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.result(new ChanceBlockState(result.defaultBlockState(), chance)) `<br>[调用处 SqueezingRecipe.Builder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L252) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L242) |
| ` public Builder result(Block result) ` | 添加结果方块（默认概率为1.0F）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>末尾返回 ` this.result(result, 1.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L251) |
| ` public Builder produce(int produce) ` | 设置是否产生流体<br>参数 ` produce ` 是否产生流体<br>返回 构建器实例<br>` (produce <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.produce(produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L260) |
| ` public Builder consume(int consume) ` | 设置是否消耗流体<br>参数 ` consume ` 是否消耗流体<br>返回 构建器实例<br>` (consume <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L271) |
| ` public Builder chance(float chance) ` | 设置转换成功的概率<br>参数 ` chance ` 转换成功的概率<br>返回 构建器实例<br>` (chance <= 0) ` 成立时提前返回 ` this `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.chance(chance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L282) |
| ` public Builder ignite() ` | 设置需要点燃锅<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.ignite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L291) |
| ` public Builder anvil(Block anvil) ` | 设置铁砧条件<br>参数 ` anvil ` 铁砧方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L301) |
| ` public Builder anvil(HolderGetter<Block> blocks, TagKey<Block> anvil) ` | 设置铁砧条件<br>参数 ` anvil ` 铁砧方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(blocks, anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L311) |
| ` public Builder anvil(Consumer<BlockStatePredicate.Builder> consumer) ` | 设置铁砧条件<br>参数 ` consumer ` 铁砧条件谓词消费者<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` consumer.accept(builder) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L321) |
| ` public Builder frostAnvil() ` | 设置浮霜铁砧条件<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` HasAnvil.frostOnly() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L331) |
| ` public Builder noFrostAnvil() ` | 设置非浮霜铁砧条件<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` HasAnvil.noFrost() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L339) |
| ` @Override public SqueezingRecipe buildRecipe() ` | 末尾返回 ` new SqueezingRecipe(this.ingredient, this.result, this.hasCauldron.build(), this.hasAnvil) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L344) |
| ` @Override public void validate(Identifier id) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L349) |
| ` @Override public String getType() ` | 末尾返回 ` "bulging" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L353) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L358) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L112) |

## StampingDiffRecipe

` public class StampingDiffRecipe extends BaseStampingRecipe<StampingDiffRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InWorldRecipeData<Boolean> DEFER_TO_PLATFORM_BEHAVIOR ` | 初值 ` InWorldRecipeData.of( AnvilCraft.of("defer_unique_stamping"), (_, _) -> false ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L23) |
| ` public static final RecipeSerializer<StampingDiffRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<StampingDiffRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L26) |
| ` public StampingDiffRecipe( List<ItemIngredientPredicate> diffItemIngredients, List<ChanceItemStack> results ) ` | 构造一个差异冲压配方<br>参数 ` diffItemIngredients ` 差异物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property() .setItemInputOffset(new Vec3(0.0, -0.125, 0.0)) .setItemInputRange(new Vec3(0.75, 0.25, 0.75)) `<br>实现调用 ` new Property() .setItemInputOffset(new Vec3(0.0, -0.125, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.STAMPING_PLATFORM.get()) .build() `<br>[调用处 StampingDiffRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L93) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L48) |
| ` @Override public boolean matches(InWorldRecipeContext context, Level level) ` | 末尾返回 ` !context.get(StampingDiffRecipe.DEFER_TO_PLATFORM_BEHAVIOR) && super.matches(context, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L68) |
| ` @Override public RecipeType<StampingDiffRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.STAMPING_DIFF.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L73) |
| ` @Override public RecipeSerializer<StampingDiffRecipe> getSerializer() ` | 末尾返回 ` StampingDiffRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L78) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 StampingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L86) |

## StampingDiffRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<StampingDiffRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L90)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "stamping_diff" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L101) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L90) |

## StampingRecipe

` public class StampingRecipe extends BaseStampingRecipe<StampingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L19)

冲压配方类 该配方用于在铁砧下落时冲压物品，需要在铁砧下方放置冲压平台作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<StampingRecipe> SERIALIZER ` | 初值 ` AbstractProcessRecipe.makeSerializer(StampingRecipe::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L21) |
| ` public StampingRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个冲压配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)).setItemInputRange(new Vec3(0.75, 0.25, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.STAMPING_PLATFORM.get()).build() `<br>[调用处 StampingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L27) |
| ` @Override public RecipeType<StampingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.STAMPING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L47) |
| ` @Override public RecipeSerializer<StampingRecipe> getSerializer() ` | 末尾返回 ` StampingRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L52) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 StampingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L60) |

## StampingRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<StampingRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L65)

冲压配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "stamping" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L66) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java#L65) |

## SuperHeatingRecipe

` public class SuperHeatingRecipe extends AbstractProcessRecipe<SuperHeatingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L41)

超级加热配方类 该配方用于在铁砧下落时超级加热物品，需要在铁砧下方放置加热器作为热源

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<SuperHeatingRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<SuperHeatingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L44) |
| ` public SuperHeatingRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 构造一个超级加热配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>参数 ` hasCauldron ` 炼药锅条件<br>实现调用 ` super(SuperHeatingRecipe.createProperty(itemIngredients, results, hasCauldron)) `<br>实现调用 ` SuperHeatingRecipe.createProperty(itemIngredients, results, hasCauldron) `<br>实现调用 ` results.stream() `<br>[调用处 SuperHeatingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L269) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L71) |
| ` @Override public ItemStack assemble(InWorldRecipeContext context) ` | 末尾返回 ` super.assemble(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L83) |
| ` @Override public RecipeType<SuperHeatingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SUPER_HEATING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L126) |
| ` @Override public RecipeSerializer<SuperHeatingRecipe> getSerializer() ` | 末尾返回 ` SuperHeatingRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L131) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 SuperHeatingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L139) |
| ` public boolean isConsumeFluid() ` | 是否消耗流体<br>返回 如果消耗流体返回true，否则返回false<br>末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L146) |
| ` public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L154) |
| ` public boolean isHasRoyalPreference() ` | 末尾返回 ` this.hasRoyalPreference `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L41) |

## SuperHeatingRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<SuperHeatingRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L160)

超级加热配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder fluid(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L161) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L166) |
| ` public Builder fluid(FluidStackPredicate fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L171) |
| ` public Builder fluid(TagKey<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L176) |
| ` public Builder fluid(Identifier fluid) ` | 设置流体<br>参数 ` fluid ` 流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L186) |
| ` public Builder fluid(Block cauldron) ` | 设置炼药锅方块<br>参数 ` cauldron ` 炼药锅方块<br>返回 构建器实例<br>末尾返回 ` this.fluid(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L196) |
| ` public Builder transform(Fluid transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L200) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L205) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L210) |
| ` public Builder transform(FluidStackTemplate transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L214) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L219) |
| ` public Builder transform(Identifier transform) ` | 设置转换后的流体<br>参数 ` transform ` 转换后的流体ID<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L229) |
| ` public Builder transform(Block cauldron) ` | 设置转换后的炼药锅方块<br>参数 ` cauldron ` 转换后的炼药锅方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.transform(WrapUtils.cauldron2Fluid(cauldron)) `<br>实现调用 ` WrapUtils.cauldron2Fluid(cauldron) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L239) |
| ` public Builder consume(int consume) ` | 设置消耗量<br>参数 ` consume ` 消耗量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L252) |
| ` public Builder produce(int produce) ` | 设置产生量<br>参数 ` produce ` 产量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.produce(produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L262) |
| ` @Override public void validate(Identifier id) ` | ` (itemIngredients.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L272) |
| ` @Override public String getType() ` | 末尾返回 ` "super_heating" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L279) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L160) |

## TimeWarpRecipe

` public class TimeWarpRecipe extends AbstractProcessRecipe<TimeWarpRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L41)

时移配方类 该配方用于在铁砧下落时产生时移效果，需要在铁砧下方放置腐化信标作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<TimeWarpRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<TimeWarpRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L43) |
| ` public TimeWarpRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron, ProduceHeat produceHeat ) ` | 构造一个时移配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>参数 ` hasCauldron ` 炼药锅条件<br>参数 ` produceHeat ` 产热信息<br>执行 ` this(itemIngredients, results, hasCauldron, produceHeat, List.of()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L80) |
| ` public TimeWarpRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron, ProduceHeat produceHeat, List<ItemIngredientPredicate> catalysts ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.CORRUPTED_BEACON.get()).with(CorruptedBeaconBlock.LIT, true) `<br>[调用处 TimeWarpRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L431) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L89) |
| ` @Override public RecipeType<TimeWarpRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.TIME_WARP.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L118) |
| ` @Override public RecipeSerializer<TimeWarpRecipe> getSerializer() ` | 末尾返回 ` TimeWarpRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L123) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 TimeWarpRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L131) |
| ` public boolean isConsumeFluid() ` | 是否消耗流体<br>返回 如果消耗流体返回true，否则返回false<br>末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L138) |
| ` public boolean isProduceFluid() ` | 是否产生流体<br>返回 如果产生流体返回true，否则返回false<br>末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L146) |
