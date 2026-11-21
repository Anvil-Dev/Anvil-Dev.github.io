# dev.dubhe.anvilcraft.api.recipe.result



## RecipeResult

` public record RecipeResult(Item result, List<IResultModifier> modifiers) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RecipeResult> DIRECT_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L35) |
| ` public static final Codec<RecipeResult> INLINE_CODEC ` | 初值 ` CodecUtil.ITEM.xmap(RecipeResult::new, RecipeResult::result) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L44) |
| ` public static final Codec<RecipeResult> CODEC ` | 初值 ` Codec.either(RecipeResult.DIRECT_CODEC.codec(), RecipeResult.INLINE_CODEC).xmap( Either::unwrap, result -> result.modifiers.isEmpty() ? Either.right(result) : Either.left(result) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L45) |
| ` public static final MapCodec<List<RecipeResult>> LIST_DIRECT_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L49) |
| ` public static final Codec<List<RecipeResult>> LIST_CODEC ` | 由 ` Codec .either(RecipeResult.LIST_DIRECT_CODEC.codec(), RecipeResult.CODEC.listOf()) .xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L59) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RecipeResult> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.ITEM, RecipeResult::result, IResultModifier.STREAM_CODEC.apply(ByteBufCodecs.list()), RecipeResult::modifiers, RecipeResult::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L73) |
| ` public RecipeResult(Item result) ` | 执行 ` this(result, List.of()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L81) |
| ` public RecipeResult(Item result, List<IResultModifier> modifiers) ` | [调用处 RecipeResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L85) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 PermutationRecipeLoader.registerWeaponsAndTools](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L90) |
| ` public static RecipeResult.Builder simple(ItemLike result) ` | 末尾返回 ` RecipeResult.builder().result(result.asItem()) `<br>[调用处 PermutationRecipeLoader.registerWeaponsAndTools](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L94) |
| ` public ItemStack getResult(ResultContext ctx) ` | 末尾返回 ` ctx.getResult() `<br>实现调用 ` modifier.modify(ctx) `<br>实现调用 ` ctx.getResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L98) |
| ` public Item result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L34) |
| ` public List<IResultModifier> modifiers() ` | 读取 record 分量 ` modifiers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L34) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L34) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L34) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L34) |

## RecipeResult.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L105)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder result(Item result) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L109) |
| ` public Builder result(ItemLike result) ` | 末尾返回 ` this.result(result.asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L114) |
| ` public Builder result(ItemLike result, int count) ` | 末尾返回 ` this.result(result).count(count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L118) |
| ` public Builder result(ItemLike result, DataComponentPatch patch) ` | 末尾返回 ` this.result(result).withData(result, patch) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L122) |
| ` public Builder result(ItemLike result, int count, DataComponentPatch patch) ` | 末尾返回 ` this.result(result).count(count).withData(result, patch) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L126) |
| ` public Builder result(ItemStack result) ` | 末尾返回 ` this.result(result.getItem()).count(result.getCount()).withData(result.getItem(), result.getComponentsPatch()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L130) |
| ` public Builder count(ModifyCount.Builder count) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(count.build()) `<br>实现调用 ` count.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L134) |
| ` public Builder count(int count) ` | ` (count == 1) ` 成立时提前返回 ` this `<br>末尾返回 ` this.count(ModifyCount.of().count(count)) `<br>实现调用 ` this.count(ModifyCount.of().count(count)) `<br>实现调用 ` ModifyCount.of().count(count) `<br>实现调用 ` ModifyCount.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L139) |
| ` public Builder copyData(CopyData.Builder builder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L144) |
| ` public Builder copyData(ICustomDataComponent<?>... data) ` | 末尾返回 ` this.copyData(CopyData.copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L149) |
| ` public Builder mergeData(MergeData.Builder builder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L153) |
| ` public Builder mergeData(ICustomDataComponent<?>... data) ` | 末尾返回 ` this.mergeData(MergeData.mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L158) |
| ` public Builder withData(ApplyData.Builder builder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(builder.build()) `<br>实现调用 ` builder.build() `<br>[调用处 RecipeResult.Builder.withData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L168) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L162) |
| ` public Builder withData(ItemLike result, DataComponentPatch patch) ` | 末尾返回 ` this.withData(ApplyData.of(result).withData(patch)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L167) |
| ` public Builder removeData(RemoveData.Builder builder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L171) |
| ` public Builder removeData(DataComponentType<?>... data) ` | 末尾返回 ` this.removeData(RemoveData.removeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L176) |
| ` public Builder removeAttribute(RemoveAttribute.Builder builder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L180) |
| ` public Builder removeAttribute(ResourceLocation... attrs) ` | 末尾返回 ` this.removeAttribute(RemoveAttribute.removeAttr(attrs)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L185) |
| ` public <T> Builder changeDataType(ChangeDataType.Builder<T> builder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.modifiers.add(builder.build()) `<br>实现调用 ` builder.build() `<br>[调用处 RecipeResult.Builder.changeDataType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L195) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L189) |
| ` public <T> Builder changeDataType(RecipeInputSlot slot, DataComponentType<T> orig, ICustomDataComponent<T> dest) ` | 末尾返回 ` this.changeDataType(ChangeDataType.changeDataType(slot, orig, dest)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L194) |
| ` public RecipeResult build() ` | 末尾返回 ` new RecipeResult(this.result, this.modifiers.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L198) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L105) |

## ResultContext

` public class ResultContext `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder builder(HolderLookup.Provider registries, RandomSource random, ItemStack result) ` | 末尾返回 ` new Builder(registries, random, result) `<br>[调用处 IFrostSmithingRecipe.assemble](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L35) |
| ` public ItemStack getInput(RecipeInputSlot slot) ` | 末尾返回 ` this.inputs.getOrDefault(slot, ItemStack.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L39) |
| ` public void updateResult(int count) ` | 执行 ` this.result.setCount(count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L43) |
| ` public void updateResult(DataComponentPatch patch) ` | 执行 ` this.result.applyComponents(patch) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L47) |
| ` public <T> void updateResult(DataComponentType<T> type, @Nullable T value) ` | 实现调用 ` this.result.set(type, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L51) |
| ` public HolderLookup.Provider getRegistries() ` | 末尾返回 ` this.registries `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L16) |
| ` public RandomSource getRandom() ` | 末尾返回 ` this.random `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L16) |
| ` public Map<RecipeInputSlot, ItemStack> getInputs() ` | 末尾返回 ` this.inputs `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L16) |
| ` public ItemStack getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L16) |

## ResultContext.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder(HolderLookup.Provider registries, RandomSource random, ItemStack result) ` | 实现调用 ` ImmutableMap.builder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L62) |
| ` public Builder slot(RecipeInputSlot slot, ItemStack input) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.put(slot, input) `<br>[调用处 ResultContext.Builder.input](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L69) |
| ` public Builder input(int index, ItemStack input) ` | 末尾返回 ` this.slot(RecipeInputSlot.input(index), input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L74) |
| ` public ResultContext build() ` | 末尾返回 ` new ResultContext(this.registries, this.random, this.inputs.build(), this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/ResultContext.java#L78) |
