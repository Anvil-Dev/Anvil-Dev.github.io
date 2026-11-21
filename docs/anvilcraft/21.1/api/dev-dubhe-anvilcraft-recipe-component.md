# dev.dubhe.anvilcraft.recipe.component



## HasCauldronSimple

` public record HasCauldronSimple(FluidStackPredicate fluid, int consume, List<FluidStack> transforms, float chance, boolean ignited) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L34)

简单的炼药锅条件 该类用于定义配方中对炼药锅的要求，包括流体谓词、消耗量和转换后的流体栈<br>参数 ` fluid ` 流体谓词<br>参数 ` consume ` 消耗量<br>参数 ` transforms ` 转换后的流体栈列表，每个栈的数量为产生量<br>参数 ` chance ` 转换成功的概率<br>参数 ` ignited ` 是否需要点燃

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasCauldronSimple(FluidStackPredicate fluid, int consume, List<FluidStack> transforms, float chance, boolean ignited) ` | 执行 ` transforms = transforms.stream().filter(fluidStack -> !fluidStack.isEmpty()).toList() `<br>[调用处 HasCauldronSimple.Builder.build](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L238) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L49) |
| ` public static final MapCodec<HasCauldronSimple> CODEC ` | HasCauldronSimple的编解码器<br>由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L56) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HasCauldronSimple> STREAM_CODEC ` | HasCauldronSimple的网络流编解码器<br>由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L67) |
| ` public HasCauldron toHasCauldron(Vec3 offset) ` | 将此条件转换为HasCauldron谓词<br>参数 ` offset ` 偏移量<br>返回 HasCauldron谓词<br>末尾返回 ` new HasCauldron(offset, this.fluid, this.consume, this.transforms, this.chance, this.ignited) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L87) |
| ` public boolean hasFluid() ` | 末尾返回 ` this.fluid.fluids().isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L91) |
| ` @SuppressWarnings("unused") public boolean requiresEmptyCauldron() ` | 末尾返回 ` this.fluid.equals(EMPTY_PREDICATE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L95) |
| ` public int produce() ` | 末尾返回 ` this.transforms.stream().mapToInt(FluidStack::getAmount).sum() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L100) |
| ` public static Builder empty() ` | 创建一个空的构建器<br>返回 构建器实例<br>末尾返回 ` Builder.empty() `<br>[调用处 FastCookingRecipe.Builder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L122) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L109) |
| ` public static Builder fluid(Fluid fluid) ` | 末尾返回 ` Builder.of(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L113) |
| ` public static Builder fluid(Holder<Fluid> fluid) ` | 末尾返回 ` Builder.of(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L117) |
| ` public static Builder fluid(FluidStackPredicate fluid) ` | 末尾返回 ` Builder.of(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L121) |
| ` public static Builder fluid(TagKey<Fluid> fluid) ` | 末尾返回 ` Builder.of(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L125) |
| ` public FluidStackPredicate fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L35) |
| ` public int consume() ` | 读取 record 分量 ` consume ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L36) |
| ` public List<FluidStack> transforms() ` | 读取 record 分量 ` transforms ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L37) |
| ` public float chance() ` | 读取 record 分量 ` chance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L38) |
| ` public boolean ignited() ` | 读取 record 分量 ` ignited ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L39) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L34) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L34) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L34) |

## HasCauldronSimple.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L132)

构建器类，用于构建HasCauldronSimple实例

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder empty() ` | 创建一个空的构建器<br>返回 构建器实例<br>末尾返回 ` new Builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L144) |
| ` public static Builder of(Fluid fluid) ` | 末尾返回 ` new Builder().fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L148) |
| ` public static Builder of(Holder<Fluid> fluid) ` | 末尾返回 ` new Builder().fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L152) |
| ` public static Builder of(FluidStackPredicate fluid) ` | 末尾返回 ` new Builder().fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L156) |
| ` public static Builder of(TagKey<Fluid> fluid) ` | 末尾返回 ` new Builder().fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L160) |
| ` public Builder fluid(FluidStackPredicate fluid) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L164) |
| ` public Builder fluid(Fluid fluid) ` | 末尾返回 ` this.fluid(FluidStackPredicate.builder().fluid(fluid).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L169) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 末尾返回 ` this.fluid(FluidStackPredicate.builder().fluid(fluid).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L173) |
| ` public Builder fluid(TagKey<Fluid> fluid) ` | 末尾返回 ` this.fluid(FluidStackPredicate.builder().fluid(fluid).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L177) |
| ` public Builder transform(Fluid transform, int produce) ` | 末尾返回 ` this.transform(new FluidStack(transform, produce)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L181) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 末尾返回 ` this.transform(new FluidStack(transform, produce)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L185) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.transforms.add(transform) `<br>实现调用 ` this.requiresEmptyCauldron() `<br>[调用处 HasCauldronSimple.Builder.transform](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L182) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L189) |
| ` public Builder transforms(List<FluidStack> transforms) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` transforms.forEach(this::transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L195) |
| ` public Builder consume(int consume) ` | 设置消耗量<br>参数 ` consume ` 消耗量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L206) |
| ` public Builder chance(float chance) ` | 设置转换成功的概率<br>参数 ` chance ` 转换成功的概率<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` MathUtil.clampWithProportion(chance, 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L217) |
| ` public Builder ignite() ` | 设置需要点燃锅<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L227) |
| ` public HasCauldronSimple build() ` | 构建HasCauldronSimple实例<br>返回 HasCauldronSimple实例<br>末尾返回 ` new HasCauldronSimple( this.fluid, this.consume, this.transforms, this.chance, this.ignited ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L237) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L132) |
