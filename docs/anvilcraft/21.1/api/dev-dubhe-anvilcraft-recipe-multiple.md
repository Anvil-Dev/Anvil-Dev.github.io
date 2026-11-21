# dev.dubhe.anvilcraft.recipe.multiple



## BaseMultipleToOneSmithingRecipe

` public abstract class BaseMultipleToOneSmithingRecipe implements Recipe<MultipleToOneSmithingRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int inputSize() ` | 末尾返回 ` this.inputs.size() `<br>[调用处 BaseMultipleToOneSmithingRecipe.canCraftInDimensions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L111) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L61) |
| ` @Override public boolean matches(MultipleToOneSmithingRecipeInput input, Level level) ` | ` (input.inputs().size() != this.inputs.size()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.isTemplateIngredient(input.template()) && this.isMaterialIngredient(input.material()) && this.matchesInput(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L65) |
| ` @Deprecated @Override public ItemStack assemble(MultipleToOneSmithingRecipeInput input, HolderLookup.Provider registries) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L93) |
| ` public ItemStack assemble(MultipleToOneSmithingRecipeInput input, Level level) ` | 末尾返回 ` this.result.getResult(builder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L99) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` width >= this.inputSize() + 2 && height >= 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L109) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 末尾返回 ` this.result.result().getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L114) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.MULTIPLE_TO_ONE_SMITHING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L119) |
| ` @Override public ItemStack getToastSymbol() ` | 末尾返回 ` ModBlocks.EMBER_SMITHING_TABLE.asStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L124) |
| ` public boolean isTemplateIngredient(ItemStack template) ` | 末尾返回 ` this.template.test(template) `<br>[调用处 BaseMultipleToOneSmithingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L129) |
| ` public boolean isMaterialIngredient(ItemStack material) ` | 末尾返回 ` this.material.test(material) `<br>[调用处 BaseMultipleToOneSmithingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L133) |
| ` public boolean isInputIngredient(int index, ItemStack input) ` | ` (index >= this.inputSize()) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L137) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L145) |
| ` public ItemIngredientPredicate getTemplate() ` | 末尾返回 ` this.template `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L35) |
| ` public ItemIngredientPredicate getMaterial() ` | 末尾返回 ` this.material `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L35) |
| ` public List<ItemIngredientPredicate> getInputs() ` | 末尾返回 ` this.inputs `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L35) |
| ` public RecipeResult getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L35) |

## BaseMultipleToOneSmithingRecipe.BaseBuilder

` public abstract static class BaseBuilder<R extends BaseMultipleToOneSmithingRecipe> extends AbstractRecipeBuilder<R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L205)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final BaseBuilder<R> material(ItemIngredientPredicate.Builder materialBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` materialBuilder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L218) |
| ` public final BaseBuilder<R> material(int count, ItemStack material) ` | 末尾返回 ` this.material(ItemIngredientPredicate.of(material.getItem()).withCount(count).hasComponents(DataComponentPredicate.allOf(material.getComponents()))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L223) |
| ` public final BaseBuilder<R> material(ItemStack material) ` | 末尾返回 ` this.material(1, material) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L230) |
| ` public final BaseBuilder<R> material(int count, ItemLike... materials) ` | 末尾返回 ` this.material(ItemIngredientPredicate.of(materials).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L234) |
| ` public final BaseBuilder<R> material(ItemLike... materials) ` | 末尾返回 ` this.material(1, materials) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L238) |
| ` public final BaseBuilder<R> material(int count, TagKey<Item> materialTag) ` | 末尾返回 ` this.material(ItemIngredientPredicate.of(materialTag).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L242) |
| ` public final BaseBuilder<R> material(TagKey<Item> materialTag) ` | 末尾返回 ` this.material(1, materialTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L246) |
| ` public final BaseBuilder<R> input(ItemIngredientPredicate.Builder inputBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(inputBuilder.build()) `<br>实现调用 ` inputBuilder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L250) |
| ` public final BaseBuilder<R> input(int count, ItemStack input) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(input.getItem()).withCount(count).hasComponents(DataComponentPredicate.allOf(input.getComponents()))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L255) |
| ` public final BaseBuilder<R> input(ItemStack input) ` | 末尾返回 ` this.input(1, input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L263) |
| ` public final BaseBuilder<R> input(int count, ItemLike... inputs) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(inputs).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L267) |
| ` public final BaseBuilder<R> input(ItemLike... inputs) ` | 末尾返回 ` this.input(1, inputs) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L271) |
| ` public final BaseBuilder<R> input(int count, TagKey<Item> inputTag) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(inputTag).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L275) |
| ` public final BaseBuilder<R> input(TagKey<Item> inputTag) ` | 末尾返回 ` this.input(1, inputTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L279) |
| ` public final BaseBuilder<R> result(RecipeResult.Builder resultBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` resultBuilder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L283) |
| ` public final BaseBuilder<R> result(int count, ItemLike result) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count)) `<br>[调用处 BaseMultipleToOneSmithingRecipe.BaseBuilder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L293) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L288) |
| ` public final BaseBuilder<R> result(ItemLike result) ` | 末尾返回 ` this.result(1, result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L292) |
| ` public final BaseBuilder<R> resultCopy(int count, ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L296) |
| ` public final BaseBuilder<R> resultCopy(ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result).copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L300) |
| ` public final BaseBuilder<R> resultCopy(int count, ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L304) |
| ` public final BaseBuilder<R> resultCopy(ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.resultCopy(1, result, data) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L308) |
| ` public final BaseBuilder<R> resultMerge(int count, ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L312) |
| ` public final BaseBuilder<R> resultMerge(ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result).mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L316) |
| ` public final BaseBuilder<R> resultMerge(int count, ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L320) |
| ` public final BaseBuilder<R> resultMerge(ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.resultMerge(1, result, data) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L324) |
| ` @Override public R buildRecipe() ` | 末尾返回 ` this.of(this.template, this.material, this.inputs.build(), this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L335) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.template.items().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("The template of multiple to one recipe must not be empty, RecipeId: " + id) `<br>` (this.material.items().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("The material of multiple to one recipe must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L340) |
| ` @Override public String getType() ` | 末尾返回 ` name + "_to_one_smithing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L356) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.result.result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L368) |

## BaseMultipleToOneSmithingRecipe.BaseSerializer

` public abstract static class BaseSerializer<R extends BaseMultipleToOneSmithingRecipe> implements RecipeSerializer<R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L187)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<R> codec() ` | 末尾返回 ` Data.CODEC.xmap(this::fromData, BaseMultipleToOneSmithingRecipe::toData) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L190) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, R> streamCodec() ` | 末尾返回 ` StreamCodec.composite(Data.STREAM_CODEC, BaseMultipleToOneSmithingRecipe::toData, this::fromData) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L195) |
| ` public BaseSerializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L187) |

## BaseMultipleToOneSmithingRecipe.Data

` public record Data(ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L154)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Data> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L160) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Data> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L174) |
| ` public Data(ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L154) |
| ` public ItemIngredientPredicate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L155) |
| ` public ItemIngredientPredicate material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L156) |
| ` public List<ItemIngredientPredicate> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L157) |
| ` public RecipeResult result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L158) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L154) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L154) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L154) |

## EightToOneSmithingRecipe

` public class EightToOneSmithingRecipe extends BaseMultipleToOneSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EightToOneSmithingRecipe( ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result ) ` | 执行 ` super(template, material, inputs, result) `<br>[调用处 EightToOneSmithingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L12) |
| ` public EightToOneSmithingRecipe(Data data) ` | 执行 ` super(data) `<br>[调用处 EightToOneSmithingRecipe.Serializer.fromData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L21) |
| ` public static Builder builder(ItemIngredientPredicate template) ` | 末尾返回 ` new Builder(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L25) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.eight](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L29) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.EIGHT_TO_ONE_SMITHING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L33) |

## EightToOneSmithingRecipe.Builder

` public static class Builder extends BaseBuilder<EightToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L45)


## EightToOneSmithingRecipe.Serializer

` public static class Serializer extends BaseSerializer<EightToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L38) |

## FourToOneSmithingRecipe

` public class FourToOneSmithingRecipe extends BaseMultipleToOneSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FourToOneSmithingRecipe( ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result ) ` | 执行 ` super(template, material, inputs, result) `<br>[调用处 FourToOneSmithingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L12) |
| ` public FourToOneSmithingRecipe(Data data) ` | 执行 ` super(data) `<br>[调用处 FourToOneSmithingRecipe.Serializer.fromData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L21) |
| ` public static Builder builder(ItemIngredientPredicate template) ` | 末尾返回 ` new Builder(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L25) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.four](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L101) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L29) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.FOUR_TO_ONE_SMITHING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L33) |

## FourToOneSmithingRecipe.Builder

` public static class Builder extends BaseBuilder<FourToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L45)


## FourToOneSmithingRecipe.Serializer

` public static class Serializer extends BaseSerializer<FourToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L38) |

## MultipleToOneSmithingRecipeInput

` public record MultipleToOneSmithingRecipeInput(ItemStack template, ItemStack material, List<ItemStack> inputs) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultipleToOneSmithingRecipeInput(ItemStack template, ItemStack material, ItemStack... inputs) ` | 执行 ` this(template, material, List.of(inputs)) `<br>[调用处 EmberSmithingMenu.createRecipeInput](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/EmberSmithingMenu.java#L186) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L10) |
| ` @Override public ItemStack getItem(int id) ` | 实现调用 ` this.template() `<br>实现调用 ` this.material() `<br>实现调用 ` this.inputs.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L14) |
| ` public ItemStack getInputItem(int id) ` | 末尾返回 ` ListUtil.safelyGet(this.inputs, id) .orElseThrow(() -> new IllegalArgumentException("Recipe inputs does not contain index " + id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L29) |
| ` @Override public int size() ` | 末尾返回 ` this.inputs.size() + 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L34) |
| ` public ItemStack template() ` | 读取 record 分量 ` template `<br>[调用处 MultipleToOneSmithingRecipeInput.getItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public ItemStack material() ` | 读取 record 分量 ` material `<br>[调用处 MultipleToOneSmithingRecipeInput.getItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public List<ItemStack> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |

## TwoToOneSmithingRecipe

` public class TwoToOneSmithingRecipe extends BaseMultipleToOneSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TwoToOneSmithingRecipe( ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result ) ` | 执行 ` super(template, material, inputs, result) `<br>[调用处 TwoToOneSmithingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L12) |
| ` public TwoToOneSmithingRecipe(Data data) ` | 执行 ` super(data) `<br>[调用处 TwoToOneSmithingRecipe.Serializer.fromData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L21) |
| ` public static Builder builder(ItemIngredientPredicate template) ` | 末尾返回 ` new Builder(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L25) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.two](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L29) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.TWO_TO_ONE_SMITHING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L33) |

## TwoToOneSmithingRecipe.Builder

` public static class Builder extends BaseBuilder<TwoToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L45)


## TwoToOneSmithingRecipe.Serializer

` public static class Serializer extends BaseSerializer<TwoToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L38) |
