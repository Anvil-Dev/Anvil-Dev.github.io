# dev.dubhe.anvilcraft.recipe.anvil.wrap（AbstractProcessRecipe 至 BlockCrushRecipe.Serializer）



## AbstractProcessRecipe

` public abstract class AbstractProcessRecipe<T extends InWorldRecipe> extends InWorldRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L62)

抽象处理配方类 该类是所有处理类型配方的基类，定义了配方的基本结构和通用方法

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbstractProcessRecipe(Property property) ` | 构造一个处理配方<br>参数 ` property ` 配方属性<br>执行 ` this(property, Integer.MAX_VALUE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L74) |
| ` @Override public abstract RecipeSerializer<T> getSerializer() ` | 返回 ` RecipeSerializer<T> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L92) |
| ` @Override public abstract RecipeType<T> getType() ` | 返回 ` RecipeType<T> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L95) |
| ` public List<ItemIngredientPredicate> getInputItems() ` | 获取输入物品列表<br>返回 输入物品列表<br>末尾返回 ` Objects.requireNonNullElseGet(this.property.getInputItems(), List::of) `<br>[调用处 AbstractProcessRecipe.getDisplayInputItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L112) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L103) |
| ` public List<ItemIngredientPredicate> getCatalysts() ` | 末尾返回 ` this.property.getCatalysts() `<br>[调用处 AbstractProcessRecipe.getDisplayInputItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L112) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L107) |
| ` public List<ItemIngredientPredicate> getDisplayInputItems() ` | ` (this.getCatalysts().isEmpty()) ` 成立时提前返回 ` this.getInputItems() `<br>末尾返回 ` Stream.concat(this.getInputItems().stream(), this.getCatalysts().stream()).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L111) |
| ` public List<ChanceItemStack> getResultItems() ` | 获取结果物品列表<br>返回 结果物品列表<br>末尾返回 ` Objects.requireNonNullElseGet(this.property.getResultItems(), List::of) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L121) |
| ` public List<BlockStatePredicate> getInputBlocks() ` | 获取输入方块列表<br>返回 输入方块列表<br>末尾返回 ` Objects.requireNonNullElseGet(this.property.getInputBlocks(), List::of) `<br>[调用处 AbstractProcessRecipe.getFirstInputBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L130) |
| ` public BlockStatePredicate getFirstInputBlock() ` | 获取首个输入方块<br>返回 首个输入方块<br>实现调用 ` this.getInputBlocks() `<br>实现调用 ` inputBlocks.isEmpty() `<br>实现调用 ` BlockStatePredicate.builder().of(Blocks.AIR).build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L139) |
| ` public List<ChanceBlockState> getResultBlocks() ` | 获取结果方块列表<br>返回 结果方块列表<br>末尾返回 ` Objects.requireNonNullElseGet(this.property.getResultBlocks(), List::of) `<br>[调用处 AbstractProcessRecipe.getFirstResultBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L151) |
| ` public ChanceBlockState getFirstResultBlock() ` | 获取首个结果方块<br>返回 首个结果方块<br>实现调用 ` this.getResultBlocks() `<br>实现调用 ` resultBlocks.isEmpty() `<br>实现调用 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L160) |
| ` public HasCauldronSimple getHasCauldron() ` | 获取炼药锅条件<br>返回 炼药锅条件<br>末尾返回 ` Objects.requireNonNull(this.property.getHasCauldron()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L172) |
| ` public HasAnvil getHasAnvil() ` | 获取铁砧条件<br>返回 炼药锅条件<br>末尾返回 ` this.property.getHasAnvil() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L181) |
| ` public @Nullable ProduceHeat getProduceHeat() ` | 获取产热信息<br>返回 产热信息<br>末尾返回 ` this.property.getProduceHeat() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L190) |
| ` public Property getProperty() ` | 配方属性<br>末尾返回 ` this.property `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L62) |

## AbstractProcessRecipe.AbstractBuilder

` public abstract static class AbstractBuilder<T extends AbstractProcessRecipe<T>, B extends AbstractBuilder<T, B>> extends AbstractRecipeBuilder<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L249)

抽象构建器类<br>参数 ` <T> ` 配方类型<br>参数 ` <B> ` 构建器类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public B requires(ItemIngredientPredicate ingredient) ` | 添加原料<br>参数 ` ingredient ` 原料<br>返回 构建器实例<br>末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L277) |
| ` public B requires(TagKey<Item> ingredient, int count) ` | 添加原料（标签形式）<br>参数 ` ingredient ` 原料标签<br>参数 ` count ` 数量<br>返回 构建器实例<br>末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L289) |
| ` public B requires(TagKey<Item> ingredient) ` | 添加原料（标签形式，默认数量为1）<br>参数 ` ingredient ` 原料标签<br>返回 构建器实例<br>末尾返回 ` this.requires(ingredient, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L300) |
| ` public B requires(ItemStack ingredient) ` | 添加原料（物品堆栈形式）<br>参数 ` ingredient ` 原料物品堆栈<br>返回 构建器实例<br>末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L310) |
| ` public B requires(ItemLike ingredient, int count) ` | 添加原料（物品形式）<br>参数 ` ingredient ` 原料物品<br>参数 ` count ` 数量<br>返回 构建器实例<br>末尾返回 ` this.requires(ItemIngredientPredicate.Builder.item().of(ingredient).withCount(count).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L322) |
| ` public B requires(ItemLike ingredient) ` | 添加原料（物品形式，默认数量为1）<br>参数 ` ingredient ` 原料物品<br>返回 构建器实例<br>末尾返回 ` this.requires(ingredient, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L332) |
| ` public B result(ItemStack result, NumberProvider count) ` | 添加结果（物品堆栈形式，指定数量提供器）<br>参数 ` result ` 结果物品堆栈<br>参数 ` count ` 数量提供器<br>返回 构建器实例<br>末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L343) |
| ` public B result(ItemStack result, float chance) ` | 添加结果（物品堆栈形式，指定概率）<br>参数 ` result ` 结果物品堆栈<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.result(result, BinomialDistributionGenerator.binomial(result.getCount(), chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L355) |
| ` public B result(ItemStack result) ` | 添加结果（物品堆栈形式，默认数量）<br>参数 ` result ` 结果物品堆栈<br>返回 构建器实例<br>末尾返回 ` this.result(result, ConstantValue.exactly(result.getCount())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L365) |
| ` public B result(ItemLike result, NumberProvider count) ` | 添加结果（物品形式，指定数量提供器）<br>参数 ` result ` 结果物品<br>参数 ` count ` 数量提供器<br>返回 构建器实例<br>末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L376) |
| ` public B result(ItemLike result, int count, float chance) ` | 添加结果（物品形式，指定数量和概率）<br>参数 ` result ` 结果物品<br>参数 ` count ` 数量<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.result(result, BinomialDistributionGenerator.binomial(count, chance)) `<br>[调用处 AbstractProcessRecipe.AbstractBuilder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L412) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L389) |
| ` public B result(ItemLike result, int count) ` | 添加结果（物品形式，指定数量）<br>参数 ` result ` 结果物品<br>参数 ` count ` 数量<br>返回 构建器实例<br>末尾返回 ` this.result(result, ConstantValue.exactly(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L400) |
| ` public B result(ItemLike result, float chance) ` | 添加结果（物品形式，指定概率，默认数量为1）<br>参数 ` result ` 结果物品<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.result(result, 1, chance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L411) |
| ` public B result(ItemLike result) ` | 添加结果（物品形式，默认数量为1）<br>参数 ` result ` 结果物品<br>返回 构建器实例<br>末尾返回 ` this.result(result, ConstantValue.exactly(1.0F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L421) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.results.isEmpty() ? Items.ANVIL : this.results.getFirst().getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L425) |
| ` public AbstractBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L249) |

## AbstractProcessRecipe.AbstractSerializer

` public abstract static class AbstractSerializer<T extends AbstractProcessRecipe<T>> implements RecipeSerializer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L199)

抽象序列化器类<br>参数 ` <T> ` 配方类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<T> codec() ` | 末尾返回 ` this.codec ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L232) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, T> streamCodec() ` | 末尾返回 ` this.streamCodec ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L237) |
| ` public AbstractSerializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L199) |

## AbstractProcessRecipe.Property

` public static class Property `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471)

配方属性类 定义配方的各种属性，包括输入输出偏移量、输入输出内容等

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Property setCauldronProcessor(ResourceLocation category) ` | 设置可复用的加工类别；输入方块列表继续用于显示默认加工方块。<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L568) |
| ` @SuppressWarnings("UnusedReturnValue") public Property addOutcome(IRecipeOutcome<?> outcome) ` | 添加额外结果<br>参数 ` outcome ` 额外结果<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L579) |
| ` @SuppressWarnings("UnusedReturnValue") public Property addInputItemFunction(int index, IPredicateFunction<?> function) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L585) |
| ` @SuppressWarnings("UnusedReturnValue") public Property addResultItemFunction( int index, IOutcomeFunction<?> function ) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L591) |
| ` public Property setItemInputOffset(Vec3 itemInputOffset) ` | 设置物品输入偏移量<br>参数 ` itemInputOffset ` 物品输入偏移量<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L606) |
| ` public Property setItemInputRange(Vec3 itemInputRange) ` | 设置物品输入范围<br>参数 ` itemInputRange ` 物品输入范围<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L617) |
| ` public Property setInputItems(List<ItemIngredientPredicate> inputItems) ` | 设置输入物品列表<br>参数 ` inputItems ` 输入物品列表<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L628) |
| ` public Property setInputItems(ItemIngredientPredicate... inputItems) ` | 设置输入物品列表（可变参数形式）<br>参数 ` inputItems ` 输入物品数组<br>返回 属性实例<br>末尾返回 ` this.setInputItems(Arrays.asList(inputItems)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L639) |
| ` public Property setCatalysts(List<ItemIngredientPredicate> catalysts) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L643) |
| ` public Property setInputSourceFilter(Function<InWorldRecipeContext, Predicate<ICacheElement>> sourceFilter) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L648) |
| ` public Property setItemOutputOffset(Vec3 itemOutputOffset) ` | 设置物品输出偏移量<br>参数 ` itemOutputOffset ` 物品输出偏移量<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L659) |
| ` public Property setResultItems(List<ChanceItemStack> resultItems) ` | 设置结果物品列表<br>参数 ` resultItems ` 结果物品列表<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L670) |
| ` public Property setResultItems(ChanceItemStack... resultItems) ` | 设置结果物品列表（可变参数形式）<br>参数 ` resultItems ` 结果物品数组<br>返回 属性实例<br>末尾返回 ` this.setResultItems(Arrays.asList(resultItems)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L681) |
| ` public Property setBlockInputOffset(Vec3i blockInputOffset) ` | 设置方块输入偏移量<br>参数 ` blockInputOffset ` 方块输入偏移量<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L691) |
| ` public Property setInputBlocks(List<BlockStatePredicate> inputBlocks) ` | 设置输入方块列表<br>参数 ` inputBlocks ` 输入方块列表<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L702) |
| ` public Property setInputBlocks(BlockStatePredicate... inputBlocks) ` | 设置输入方块列表（可变参数形式）<br>参数 ` inputBlocks ` 输入方块数组<br>返回 属性实例<br>末尾返回 ` this.setInputBlocks(Arrays.asList(inputBlocks)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L713) |
| ` public Property setConsumeInputBlocks(boolean consumeInputBlocks) ` | 设置是否消耗输入方块<br>参数 ` consumeInputBlocks ` 是否消耗输入方块<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L723) |
| ` public Property setBlockOutputOffset(Vec3i blockOutputOffset) ` | 设置方块输出偏移量<br>参数 ` blockOutputOffset ` 方块输出偏移量<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L734) |
| ` public Property setResultBlocks(List<ChanceBlockState> resultBlocks) ` | 设置结果方块列表<br>参数 ` resultBlocks ` 结果方块列表<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L745) |
| ` public Property setResultBlocks(ChanceBlockState... resultBlocks) ` | 设置结果方块列表（可变参数形式）<br>参数 ` resultBlocks ` 结果方块数组<br>返回 属性实例<br>末尾返回 ` this.setResultBlocks(Arrays.asList(resultBlocks)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L756) |
| ` public Property setCopyBlockProperties(boolean copyBlockProperties) ` | 设置方块结果是否继承被替换方块的同名属性 默认关闭，避免压合、粉碎等整块替换配方意外继承旧状态；方块涂抹等需要保留 输入方块朝向的配方应显式开启。<br>参数 ` copyBlockProperties ` 是否继承被替换方块的同名属性<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L769) |
| ` public Property setCauldronOffset(Vec3i cauldronOffset) ` | 设置炼药锅偏移量<br>参数 ` cauldronOffset ` 炼药锅偏移量<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L780) |
| ` public Property setHasCauldron(HasCauldronSimple hasCauldron) ` | 设置炼药锅条件<br>参数 ` hasCauldron ` 炼药锅条件<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L791) |
| ` public Property setHasAnvil(HasAnvil hasAnvil) ` | 设置铁砧条件<br>参数 ` hasAnvil ` 铁砧条件<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L802) |
| ` public Property setProduceHeat(ProduceHeat produceHeat) ` | 设置产热信息<br>参数 ` produceHeat ` 产热信息<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L813) |
| ` public Property setPriority(int priority) ` | 设置优先级<br>参数 ` priority ` 优先级<br>返回 属性实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L824) |
| ` public Vec3 getBlockOutputOffset() ` | 末尾返回 ` new Vec3(this.blockOutputOffset.getX(), this.blockOutputOffset.getY(), this.blockOutputOffset.getZ()) `<br>[调用处 AbstractProcessRecipe.Property.getOutcomes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L960) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L972) |
| ` public Vec3 getBlockInputOffset() ` | 末尾返回 ` new Vec3(this.blockInputOffset.getX(), this.blockInputOffset.getY(), this.blockInputOffset.getZ()) `<br>[调用处 AbstractProcessRecipe.Property.getNonConflictingPredicates](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L887) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L976) |
| ` public Vec3 getCauldronOffset() ` | 末尾返回 ` new Vec3(this.cauldronOffset.getX(), this.cauldronOffset.getY(), this.cauldronOffset.getZ()) `<br>[调用处 AbstractProcessRecipe.Property.getNonConflictingPredicates](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L891) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L980) |
| ` public Vec3 getItemInputOffset() ` | 物品输入偏移量<br>末尾返回 ` this.itemInputOffset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public Vec3 getItemInputRange() ` | 物品输入范围<br>末尾返回 ` this.itemInputRange `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public List<ItemIngredientPredicate> getInputItems() ` | 输入物品列表<br>末尾返回 ` this.inputItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public List<ItemIngredientPredicate> getCatalysts() ` | 末尾返回 ` this.catalysts `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @org.jspecify.annotations.Nullable public Function<InWorldRecipeContext, Predicate<ICacheElement>> getInputSourceFilter() ` | 末尾返回 ` this.inputSourceFilter `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public Map<Integer, List<IPredicateFunction<?>>> getInputItemFunctions() ` | Optional functions applied to each matched input item.<br>末尾返回 ` this.inputItemFunctions `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public Vec3 getItemOutputOffset() ` | 物品输出偏移量<br>末尾返回 ` this.itemOutputOffset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 结果物品列表<br>末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public Map<Integer, List<IOutcomeFunction<?>>> getResultItemFunctions() ` | Optional functions applied to each spawned item result.<br>末尾返回 ` this.resultItemFunctions `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public boolean isConsumeInputBlocks() ` | 末尾返回 ` this.consumeInputBlocks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public ResourceLocation getCauldronProcessor() ` | 末尾返回 ` this.cauldronProcessor `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public List<BlockStatePredicate> getInputBlocks() ` | 输入方块列表<br>末尾返回 ` this.inputBlocks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public List<ChanceBlockState> getResultBlocks() ` | 结果方块列表<br>末尾返回 ` this.resultBlocks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public boolean isCopyBlockProperties() ` | 方块结果是否继承被替换方块的同名属性<br>末尾返回 ` this.copyBlockProperties `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public HasCauldronSimple getHasCauldron() ` | 炼药锅条件<br>末尾返回 ` this.hasCauldron `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public HasAnvil getHasAnvil() ` | 铁砧条件<br>末尾返回 ` this.hasAnvil `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` @Nullable public ProduceHeat getProduceHeat() ` | 产热信息<br>末尾返回 ` this.produceHeat `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public List<IRecipeOutcome<?>> getExtraOutcomes() ` | 额外结果列表<br>末尾返回 ` this.extraOutcomes `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |
| ` public Property() ` | Java 提供的无参构造器。<br>[调用处 BlockCompressRecipe.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L471) |

## AbstractProcessRecipe.SimpleAbstractBuilder

` public abstract static class SimpleAbstractBuilder<T extends AbstractProcessRecipe<T>, B extends SimpleAbstractBuilder<T, B>> extends AbstractBuilder<T, B> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L437)

简单抽象构建器类<br>参数 ` <T> ` 配方类型<br>参数 ` <B> ` 构建器类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public T buildRecipe() ` | 末尾返回 ` this.of(this.itemIngredients, this.results) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L450) |
| ` @Override public void validate(ResourceLocation id) ` | ` (itemIngredients.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients must not be empty, RecipeId: " + id) `<br>` (results.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L455) |
| ` public SimpleAbstractBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L437) |

## BlockCompressRecipe

` public class BlockCompressRecipe extends AbstractProcessRecipe<BlockCompressRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L29)

方块压缩配方类 该配方用于在铁砧下落时压缩方块，是方块级别的压缩处理配方

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockCompressRecipe( List<BlockStatePredicate> inputs, ChanceBlockState result ) ` | 构造一个方块压缩配方<br>参数 ` inputs ` 输入方块列表<br>参数 ` result ` 结果方块<br>` (inputs.size() != 2) ` 成立时抛出 ` new IllegalArgumentException("AnvilItemProcessRecipe only support 2 inputs") `<br>[调用处 BlockCompressRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L180) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L36) |
| ` @Override public RecipeSerializer<BlockCompressRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.BLOCK_COMPRESS_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L51) |
| ` @Override public RecipeType<BlockCompressRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.BLOCK_COMPRESS_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L56) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 BlockCompressRecipeLoader.blockCompress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCompressRecipeLoader.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L66) |

## BlockCompressRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<BlockCompressRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L112)

方块压缩配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder input(BlockStatePredicate input) ` | 添加输入方块<br>参数 ` input ` 输入方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L129) |
| ` public Builder input(TagKey<Block> input) ` | 添加输入方块（标签形式）<br>参数 ` input ` 输入方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L140) |
| ` public Builder input(Block input) ` | 添加输入方块<br>参数 ` input ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L151) |
| ` public Builder result(ChanceBlockState result) ` | 添加结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L162) |
| ` public Builder result(Block result) ` | 添加结果方块（默认概率为1.0f）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` result.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L173) |
| ` @Override public BlockCompressRecipe buildRecipe() ` | 末尾返回 ` new BlockCompressRecipe(this.inputs, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L178) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.inputs.size() != 2) ` 成立时抛出 ` new IllegalArgumentException("Recipe input list size must in 2, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L183) |
| ` @Override public String getType() ` | 末尾返回 ` "block_compress" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L193) |
| ` @Override public Item getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L198) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L112) |

## BlockCompressRecipe.Serializer

` public static class Serializer implements RecipeSerializer<BlockCompressRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L73)

方块压缩配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<BlockCompressRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L98) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BlockCompressRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L103) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L73) |

## BlockCrushRecipe

` public class BlockCrushRecipe extends AbstractProcessRecipe<BlockCrushRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L25)

方块粉碎配方类 该配方用于在铁砧下落时粉碎方块，是方块级别的粉碎处理配方

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockCrushRecipe( BlockStatePredicate input, ChanceBlockState result ) ` | 构造一个方块粉碎配方<br>参数 ` input ` 输入方块谓词<br>参数 ` result ` 结果方块<br>实现调用 ` new AbstractProcessRecipe.Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) .setConsumeInputBlocks(true) `<br>实现调用 ` new AbstractProcessRecipe.Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) `<br>[调用处 BlockCrushRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L174) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L32) |
| ` @Override public RecipeType<BlockCrushRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.BLOCK_CRUSH_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L46) |
| ` @Override public RecipeSerializer<BlockCrushRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.BLOCK_CRUSH_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L51) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 BlockCrushRecipeLoader.blockCrush](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L61) |

## BlockCrushRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<BlockCrushRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L106)

方块粉碎配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder input(BlockStatePredicate input) ` | 设置输入方块<br>参数 ` input ` 输入方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L123) |
| ` public Builder input(TagKey<Block> input) ` | 设置输入方块（标签形式）<br>参数 ` input ` 输入方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L134) |
| ` public Builder input(Block input) ` | 设置输入方块<br>参数 ` input ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L145) |
| ` public Builder result(ChanceBlockState result) ` | 设置结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L156) |
| ` public Builder result(Block result) ` | 设置结果方块（默认概率为1.0f）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` result.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L167) |
| ` @Override public BlockCrushRecipe buildRecipe() ` | 末尾返回 ` new BlockCrushRecipe(this.input, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L172) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.input == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe input must not be null, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L177) |
| ` @Override public String getType() ` | 末尾返回 ` "block_crush" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L187) |
| ` @Override public Item getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L192) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L106) |

## BlockCrushRecipe.Serializer

` public static class Serializer implements RecipeSerializer<BlockCrushRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L68)

方块粉碎配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<BlockCrushRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L92) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BlockCrushRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L97) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L68) |
