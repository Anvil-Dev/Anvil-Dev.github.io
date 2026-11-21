# dev.dubhe.anvilcraft.recipe.frost（IFrostSmithingRecipe.BaseBuilder 至 RepairMaterialFrostMaterialPredicate.Type）



## IFrostSmithingRecipe.BaseBuilder

` abstract class BaseBuilder<B extends BaseBuilder<B, R>, R extends IFrostSmithingRecipe> extends AbstractRecipeBuilder<R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L121)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public B template(ItemIngredientPredicate template) ` | 末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L127) |
| ` public B template(ItemIngredientPredicate.Builder templateBuilder) ` | 末尾返回 ` this.template(templateBuilder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L132) |
| ` public B template(int count, ItemStack template) ` | 末尾返回 ` this.template( ItemIngredientPredicate.of(template.getItem()) .withCount(count) .hasComponents(DataComponentPredicate.allOf(template.getComponents())) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L136) |
| ` public B template(ItemStack template) ` | 末尾返回 ` this.template(1, template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L144) |
| ` public B template(int count, ItemLike... templates) ` | 末尾返回 ` this.template(ItemIngredientPredicate.of(templates).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L148) |
| ` public B template(ItemLike... templates) ` | 末尾返回 ` this.template(1, templates) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L152) |
| ` public B template(int count, TagKey<Item> templateTag) ` | 末尾返回 ` this.template(ItemIngredientPredicate.of(templateTag).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L156) |
| ` public B template(TagKey<Item> templateTag) ` | 末尾返回 ` this.template(1, templateTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L160) |
| ` @Deprecated @Override public void save(RecipeOutput output) ` | 执行 ` this.save(output, BuiltInRegistries.ITEM.getKey(this.getResult()).withPrefix(this.getType() + "/")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L164) |
| ` public BaseBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L121) |

## OrFrostMaterialPredicate

` public record OrFrostMaterialPredicate(List<IFrostMaterialPredicate> predicates) implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15)

满足任意一个子项即可，消耗数量取第一个满足的子项。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<OrFrostMaterialPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OrFrostMaterialPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( IFrostMaterialPredicate.STREAM_CODEC.apply(ByteBufCodecs.list()), OrFrostMaterialPredicate::predicates, OrFrostMaterialPredicate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L22) |
| ` public OrFrostMaterialPredicate(List<IFrostMaterialPredicate> predicates) ` | 执行 ` predicates = List.copyOf(predicates) `<br>[调用处 OrFrostMaterialPredicate.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L34) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L29) |
| ` public static OrFrostMaterialPredicate of(IFrostMaterialPredicate... predicates) ` | 末尾返回 ` new OrFrostMaterialPredicate(List.of(predicates)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L33) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.predicates.stream().anyMatch(predicate -> predicate.test(recipe, input)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L37) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.predicates.stream() .filter(predicate -> predicate.test(recipe, input)) .findFirst() .map(predicate -> predicate.cost(recipe, input)) .orElse(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L42) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.OR.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L51) |
| ` public List<IFrostMaterialPredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |

## OrFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<OrFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<OrFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L57) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, OrFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L62) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L56) |

## PermutationRecipe

` public record PermutationRecipe(ItemIngredientPredicate template, ItemIngredientPredicate input, List<FrostSmithingOption> options) implements IFrostSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L31)

嬗变配方：装备槽放入指定装备时，由材料槽决定可以锻造出的结果。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemIngredientPredicate DEFAULT_TEMPLATE ` | 初值 ` ItemIngredientPredicate.of(ModItems.PERMUTATION_TEMPLATE_ITEM).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L36) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 PermutationRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L39) |
| ` @Override public boolean isTemplate(ItemStack template) ` | 末尾返回 ` this.template.test(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L43) |
| ` @Override public boolean isInput(ItemStack input) ` | 末尾返回 ` this.input.test(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L48) |
| ` @Override public @Unmodifiable List<FrostSmithingOption> options(ItemStack input) ` | ` (input.isEmpty()) ` 成立时提前返回 ` this.options `<br>末尾返回 ` available.isEmpty() ? this.options : available ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L53) |
| ` @Override public @Unmodifiable List<RecipeResult> results() ` | 末尾返回 ` this.options.stream().map(FrostSmithingOption::result).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L63) |
| ` @Override public @Unmodifiable List<ItemStack> possibleInputs() ` | 末尾返回 ` List.of(this.input.getItems()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L68) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.PERMUTATION_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L73) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.PERMUTATION_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L78) |
| ` public PermutationRecipe(ItemIngredientPredicate template, ItemIngredientPredicate input, List<FrostSmithingOption> options) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L31) |
| ` public ItemIngredientPredicate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L32) |
| ` public ItemIngredientPredicate input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L33) |
| ` public List<FrostSmithingOption> options() ` | 读取 record 分量 ` options ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L34) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L31) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L31) |

## PermutationRecipe.Builder

` public static class Builder extends BaseBuilder<Builder, PermutationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L118)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder() ` | 执行 ` this.template(PermutationRecipe.DEFAULT_TEMPLATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L122) |
| ` public Builder input(ItemIngredientPredicate input) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L131) |
| ` public Builder input(ItemIngredientPredicate.Builder inputBuilder) ` | 末尾返回 ` this.input(inputBuilder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L136) |
| ` public Builder input(ItemLike... inputs) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(inputs)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L140) |
| ` public Builder input(ItemStack input) ` | 末尾返回 ` this.input( ItemIngredientPredicate.of(input.getItem()) .hasComponents(DataComponentPredicate.allOf(input.getComponents())) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L144) |
| ` public Builder input(TagKey<Item> inputTag) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(inputTag)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L151) |
| ` public Builder option(FrostSmithingOption option) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.options.add(option) `<br>[调用处 PermutationRecipe.Builder.option](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L155) |
| ` public Builder option(IFrostMaterialPredicate material, RecipeResult result) ` | 末尾返回 ` this.option(new FrostSmithingOption(material, result)) `<br>[调用处 PermutationRecipe.Builder.options](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L169) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L160) |
| ` public Builder options(IFrostMaterialPredicate material, ItemLike... results) ` | 添加一组需要相同材料的锻造结果，其中与装备相同的结果会在锻造时被排除。<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.option(material, RecipeResult.simple(result).build()) `<br>实现调用 ` RecipeResult.simple(result).build() `<br>实现调用 ` RecipeResult.simple(result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L167) |
| ` public Builder result(RecipeResult result) ` | 末尾返回 ` this.option(FrostSmithingOption.of(result)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L174) |
| ` public Builder result(RecipeResult.Builder result) ` | 末尾返回 ` this.result(result.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L178) |
| ` public Builder result(ItemLike result) ` | 末尾返回 ` this.result(RecipeResult.simple(result)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L182) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.input == null \|\| this.input.items().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException( "The input of " + this.getType() + " recipe must not be empty, RecipeId: " + id ) `<br>` (this.options.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException( "The options of " + this.getType() + " recipe must not be empty, RecipeId: " + id ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L186) |
| ` @Override public PermutationRecipe buildRecipe() ` | 末尾返回 ` new PermutationRecipe( Objects.requireNonNull(this.template), Objects.requireNonNull(this.input), ImmutableList.copyOf(this.options) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L200) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.options.getFirst().result().result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L209) |
| ` @Override public String getType() ` | 末尾返回 ` "permutation" `<br>[调用处 PermutationRecipe.Builder.validate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L190) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L214) |

## PermutationRecipe.Serializer

` public static class Serializer implements RecipeSerializer<PermutationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L83)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PermutationRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L97) |
| ` @Override public MapCodec<PermutationRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L107) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, PermutationRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L112) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L83) |

## RepairMaterialFrostMaterialPredicate

` public record RepairMaterialFrostMaterialPredicate(int cost, boolean allowUniversal, IExpression universalCost) implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27)

维修材料，要求材料是装备的维修材料，或是「通用维修材料」标签中的物品。<br>参数 ` cost ` 维修材料的消耗数量<br>参数 ` allowUniversal ` 是否允许使用通用维修材料<br>参数 ` universalCost ` 通用维修材料的消耗数量表达式，见 #DEFAULT\_UNIVERSAL\_COST。 求值时的传入值见 #VAR\_NAME

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String VAR_NAME ` | 求解 #universalCost 时绑给数据包函数的具名传入值，也就是表达式里能写的 $(cost)。 第 0 个传入值是同一个数，所以 "x\*2" 与 "$(cost)\*2" 等价。 它与 ModMathFunctions#doubleFunction() 声明的形参名不必相同：CustomFunction 先按 位置 把实参绑到自己的形参上，函数体里的具名引用取的正是那个位置上的实参， 所以这里的具名引用只要能按名字在调用点的传入值里找到即可。<br>初值 ` "cost" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L41) |
| ` public static final IExpression DEFAULT_UNIVERSAL_COST ` | universal\_cost 缺省时使用的表达式：调用 ModMathFunctions#DOUBLE 把维修材料消耗翻倍。 它是 universal\_cost 字段在 MapCodec 里的 optionalFieldOf 默认值， 而 runData 生成的形变配方传的正是本值，所以那 15 个配方 JSON 里不带 universal\_cost，运行时按本字段取值——改 data/anvilcraft/anvillib/function/double.json 就能改掉所有缺省情形的消耗，不必碰配方。<br>初值 ` FunctionExpression.of( ModMathFunctions.doubleFunction(), IExpression.ref(VAR_NAME) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L50) |
| ` public static final MapCodec<RepairMaterialFrostMaterialPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L55) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RepairMaterialFrostMaterialPredicate> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L66) |
| ` public static RepairMaterialFrostMaterialPredicate disallowUniversal(int cost) ` | 不允许使用通用维修材料。universalCost 用默认值占位——test 在 allowUniversal 为 false 时直接返回，该字段不参与求值，但流编解码器要求它非空。<br>末尾返回 ` new RepairMaterialFrostMaterialPredicate(cost, false, DEFAULT_UNIVERSAL_COST) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L80) |
| ` public static RepairMaterialFrostMaterialPredicate allowUniversal(int cost, IExpression expression) ` | 末尾返回 ` new RepairMaterialFrostMaterialPredicate(cost, true, expression) `<br>[调用处 RepairMaterialFrostMaterialPredicate.allowUniversal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L84) |
| ` public static RepairMaterialFrostMaterialPredicate allowUniversal(int cost) ` | 末尾返回 ` RepairMaterialFrostMaterialPredicate.allowUniversal(cost, DEFAULT_UNIVERSAL_COST) `<br>[调用处 DeformationRecipeLoader.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L88) |
| ` public int universalCostAmount() ` | 通用维修材料的实际消耗数量，未指定时为维修材料消耗的两倍。<br>末尾返回 ` this.universalCost.evaluateInt(inputs) `<br>[调用处 RepairMaterialFrostMaterialPredicate.test](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L95) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | ` (this.matchesRepairMaterial(recipe, input)) ` 成立时提前返回 ` input.material().getCount() >= this.cost `<br>` (this.matchesUniversalMaterial(input)) ` 成立时提前返回 ` input.material().getCount() >= this.universalCostAmount() `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L104) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | ` (this.matchesRepairMaterial(recipe, input)) ` 成立时提前返回 ` this.cost `<br>末尾返回 ` this.matchesUniversalMaterial(input) ? this.universalCostAmount() : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L111) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.REPAIR_MATERIAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L117) |
| ` public RepairMaterialFrostMaterialPredicate(int cost, boolean allowUniversal, IExpression universalCost) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |
| ` public int cost() ` | 读取 record 分量 ` cost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L28) |
| ` public boolean allowUniversal() ` | 读取 record 分量 ` allowUniversal `<br>[调用处 RepairMaterialFrostMaterialPredicate.matchesUniversalMaterial](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L29) |
| ` public IExpression universalCost() ` | 读取 record 分量 ` universalCost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |

## RepairMaterialFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<RepairMaterialFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L143)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<RepairMaterialFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L144) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RepairMaterialFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L149) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L143) |
