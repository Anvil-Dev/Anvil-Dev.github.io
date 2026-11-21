# dev.dubhe.anvilcraft.recipe.multiple



## BaseMultipleToOneSmithingRecipe

` public abstract class BaseMultipleToOneSmithingRecipe implements Recipe<MultipleToOneSmithingRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int inputSize() ` | 末尾返回 ` this.inputs.size() `<br>[调用处 BaseMultipleToOneSmithingRecipe.isInputIngredient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L64) |
| ` @Override public boolean matches(MultipleToOneSmithingRecipeInput input, Level level) ` | ` (input.inputs().size() != this.inputs.size()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.isTemplateIngredient(input.template()) && this.isMaterialIngredient(input.material()) && this.matchesInput(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L68) |
| ` @Deprecated @Override public ItemStack assemble(MultipleToOneSmithingRecipeInput input) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L96) |
| ` public ItemStack assemble(MultipleToOneSmithingRecipeInput input, Level level) ` | 末尾返回 ` this.result.getResult(builder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L102) |
| ` @Override public RecipeType<? extends BaseMultipleToOneSmithingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.MULTIPLE_TO_ONE_SMITHING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L112) |
| ` public boolean isTemplateIngredient(ItemStack template) ` | 末尾返回 ` this.template.test(template) `<br>[调用处 BaseMultipleToOneSmithingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L117) |
| ` public boolean isMaterialIngredient(ItemStack material) ` | 末尾返回 ` this.material.test(material) `<br>[调用处 BaseMultipleToOneSmithingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L121) |
| ` public boolean isInputIngredient(int index, ItemStack input) ` | ` (index >= this.inputSize()) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L125) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L133) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L138) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L143) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L148) |
| ` public ItemIngredientPredicate getTemplate() ` | 末尾返回 ` this.template `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L38) |
| ` public ItemIngredientPredicate getMaterial() ` | 末尾返回 ` this.material `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L38) |
| ` public List<ItemIngredientPredicate> getInputs() ` | 末尾返回 ` this.inputs `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L38) |
| ` public RecipeResult getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L38) |

## BaseMultipleToOneSmithingRecipe.BaseBuilder

` public abstract static class BaseBuilder<R extends BaseMultipleToOneSmithingRecipe> extends AbstractRecipeBuilder<R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L197)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final BaseBuilder<R> material(ItemIngredientPredicate.Builder materialBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` materialBuilder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L210) |
| ` public final BaseBuilder<R> material(int count, ItemLike... materials) ` | 末尾返回 ` this.material(ItemIngredientPredicate.of(materials).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L215) |
| ` public final BaseBuilder<R> material(ItemLike... materials) ` | 末尾返回 ` this.material(1, materials) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L219) |
| ` public final BaseBuilder<R> material(int count, HolderGetter<Item> items, TagKey<Item> materialTag) ` | 末尾返回 ` this.material(ItemIngredientPredicate.of(items, materialTag).withCount(count)) `<br>[调用处 BaseMultipleToOneSmithingRecipe.BaseBuilder.material](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L228) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L223) |
| ` public final BaseBuilder<R> material(HolderGetter<Item> items, TagKey<Item> materialTag) ` | 末尾返回 ` this.material(1, items, materialTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L227) |
| ` public final BaseBuilder<R> input(ItemIngredientPredicate.Builder inputBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(inputBuilder.build()) `<br>实现调用 ` inputBuilder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L231) |
| ` public final BaseBuilder<R> input(int count, ItemLike... inputs) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(inputs).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L236) |
| ` public final BaseBuilder<R> input(ItemLike... inputs) ` | 末尾返回 ` this.input(1, inputs) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L240) |
| ` public final BaseBuilder<R> input(int count, HolderGetter<Item> items, TagKey<Item> inputTag) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(items, inputTag).withCount(count)) `<br>[调用处 BaseMultipleToOneSmithingRecipe.BaseBuilder.input](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L249) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L244) |
| ` public final BaseBuilder<R> input(HolderGetter<Item> items, TagKey<Item> inputTag) ` | 末尾返回 ` this.input(1, items, inputTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L248) |
| ` public final BaseBuilder<R> result(RecipeResult.Builder resultBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` resultBuilder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L252) |
| ` public final BaseBuilder<R> result(int count, ItemLike result) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count)) `<br>[调用处 BaseMultipleToOneSmithingRecipe.BaseBuilder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L262) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L257) |
| ` public final BaseBuilder<R> result(ItemLike result) ` | 末尾返回 ` this.result(1, result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L261) |
| ` public final BaseBuilder<R> resultCopy(int count, ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L265) |
| ` public final BaseBuilder<R> resultCopy(ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result).copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L269) |
| ` public final BaseBuilder<R> resultCopy(int count, ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).copyData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L273) |
| ` public final BaseBuilder<R> resultCopy(ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.resultCopy(1, result, data) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L277) |
| ` public final BaseBuilder<R> resultMerge(int count, ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L281) |
| ` public final BaseBuilder<R> resultMerge(ItemProviderEntry<?, ?> result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result).mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L285) |
| ` public final BaseBuilder<R> resultMerge(int count, ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.result(RecipeResult.builder().result(result, count).mergeData(data)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L289) |
| ` public final BaseBuilder<R> resultMerge(ItemLike result, ICustomDataComponent<?>... data) ` | 末尾返回 ` this.resultMerge(1, result, data) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L293) |
| ` @Override public R buildRecipe() ` | 末尾返回 ` this.of(this.template, this.material, this.inputs.build(), this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L304) |
| ` @Override public void validate(Identifier id) ` | ` (this.template.items().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("The template of multiple to one recipe must not be empty, RecipeId: " + id) `<br>` (this.material.items().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("The material of multiple to one recipe must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L309) |
| ` @Override public String getType() ` | 末尾返回 ` name + "_to_one_smithing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L325) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.result.result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L337) |

## BaseMultipleToOneSmithingRecipe.Data

` public record Data(ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L157)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Data> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L163) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Data> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L177) |
| ` public Data(ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L157) |
| ` public ItemIngredientPredicate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L158) |
| ` public ItemIngredientPredicate material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L159) |
| ` public List<ItemIngredientPredicate> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L160) |
| ` public RecipeResult result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L161) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L157) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L157) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L157) |

## EightToOneSmithingRecipe

` public class EightToOneSmithingRecipe extends BaseMultipleToOneSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<EightToOneSmithingRecipe> SERIALIZER ` | 初值 ` BaseMultipleToOneSmithingRecipe.makeSerializer( EightToOneSmithingRecipe::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L11) |
| ` public EightToOneSmithingRecipe( ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result ) ` | 执行 ` super(template, material, inputs, result) `<br>[调用处 EightToOneSmithingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L15) |
| ` public EightToOneSmithingRecipe(Data data) ` | 执行 ` super(data) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L24) |
| ` public static Builder builder(ItemIngredientPredicate template) ` | 末尾返回 ` new Builder(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L28) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.eight](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L155) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L32) |
| ` @Override public String group() ` | 末尾返回 ` "eight_to_one_smithing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L36) |
| ` @Override public RecipeSerializer<EightToOneSmithingRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L41) |

## EightToOneSmithingRecipe.Builder

` public static class Builder extends BaseBuilder<EightToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java#L46)


## FourToOneSmithingRecipe

` public class FourToOneSmithingRecipe extends BaseMultipleToOneSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<FourToOneSmithingRecipe> SERIALIZER ` | 初值 ` BaseMultipleToOneSmithingRecipe.makeSerializer( FourToOneSmithingRecipe::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L11) |
| ` public FourToOneSmithingRecipe( ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result ) ` | 执行 ` super(template, material, inputs, result) `<br>[调用处 FourToOneSmithingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L15) |
| ` public FourToOneSmithingRecipe(Data data) ` | 执行 ` super(data) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L24) |
| ` public static Builder builder(ItemIngredientPredicate template) ` | 末尾返回 ` new Builder(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L28) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.four](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L32) |
| ` @Override public String group() ` | 末尾返回 ` "four_to_one_smithing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L36) |
| ` @Override public RecipeSerializer<FourToOneSmithingRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L41) |

## FourToOneSmithingRecipe.Builder

` public static class Builder extends BaseBuilder<FourToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java#L46)


## MultipleToOneSmithingRecipeInput

` public record MultipleToOneSmithingRecipeInput(ItemStack template, ItemStack material, List<ItemStack> inputs) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultipleToOneSmithingRecipeInput(ItemStack template, ItemStack material, ItemStack... inputs) ` | 执行 ` this(template, material, List.of(inputs)) `<br>[调用处 EmberSmithingMenu.createRecipeInput](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/EmberSmithingMenu.java#L162) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L10) |
| ` @Override public ItemStack getItem(int id) ` | 实现调用 ` this.template() `<br>实现调用 ` this.material() `<br>实现调用 ` this.inputs.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L14) |
| ` public ItemStack getInputItem(int id) ` | 末尾返回 ` ListUtil.safelyGet(this.inputs, id) .orElseThrow(() -> new IllegalArgumentException("Recipe inputs does not contain index " + id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L29) |
| ` @Override public int size() ` | 末尾返回 ` this.inputs.size() + 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L34) |
| ` public ItemStack template() ` | 读取 record 分量 ` template `<br>[调用处 MultipleToOneSmithingRecipeInput.getItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public ItemStack material() ` | 读取 record 分量 ` material `<br>[调用处 MultipleToOneSmithingRecipeInput.getItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public List<ItemStack> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/MultipleToOneSmithingRecipeInput.java#L9) |

## TwoToOneSmithingRecipe

` public class TwoToOneSmithingRecipe extends BaseMultipleToOneSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<TwoToOneSmithingRecipe> SERIALIZER ` | 初值 ` BaseMultipleToOneSmithingRecipe.makeSerializer( TwoToOneSmithingRecipe::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L11) |
| ` public TwoToOneSmithingRecipe( ItemIngredientPredicate template, ItemIngredientPredicate material, List<ItemIngredientPredicate> inputs, RecipeResult result ) ` | 执行 ` super(template, material, inputs, result) `<br>[调用处 TwoToOneSmithingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L15) |
| ` public TwoToOneSmithingRecipe(Data data) ` | 执行 ` super(data) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L24) |
| ` public static Builder builder(ItemIngredientPredicate template) ` | 末尾返回 ` new Builder(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L28) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MultipleToOneSmithingRecipeLoader.two](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L32) |
| ` @Override public String group() ` | 末尾返回 ` "two_to_one_smithing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L36) |
| ` @Override public RecipeSerializer<TwoToOneSmithingRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L41) |

## TwoToOneSmithingRecipe.Builder

` public static class Builder extends BaseBuilder<TwoToOneSmithingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java#L46)
