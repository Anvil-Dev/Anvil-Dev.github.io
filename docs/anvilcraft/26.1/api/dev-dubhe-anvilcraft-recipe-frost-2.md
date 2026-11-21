# dev.dubhe.anvilcraft.recipe.frost（IFrostSmithingRecipe.BaseBuilder 至 RepairMaterialFrostMaterialPredicate.Type）



## IFrostSmithingRecipe.BaseBuilder

` abstract class BaseBuilder<B extends BaseBuilder<B, R>, R extends IFrostSmithingRecipe> extends AbstractRecipeBuilder<R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L129)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public B template(ItemIngredientPredicate template) ` | 末尾返回 ` this.getThis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L135) |
| ` public B template(ItemIngredientPredicate.Builder templateBuilder) ` | 末尾返回 ` this.template(templateBuilder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L140) |
| ` public B template(int count, ItemStack template) ` | 实现调用 ` ItemIngredientPredicate.of(template.getItem()) .withCount(count) `<br>实现调用 ` ItemIngredientPredicate.of(template.getItem()) `<br>实现调用 ` template.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L144) |
| ` public B template(ItemStack template) ` | 末尾返回 ` this.template(1, template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L153) |
| ` public B template(int count, ItemLike... templates) ` | 末尾返回 ` this.template(ItemIngredientPredicate.of(templates).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L157) |
| ` public B template(ItemLike... templates) ` | 末尾返回 ` this.template(1, templates) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L161) |
| ` public B template(int count, HolderGetter<Item> items, TagKey<Item> templateTag) ` | 末尾返回 ` this.template(ItemIngredientPredicate.of(items, templateTag).withCount(count)) `<br>[调用处 IFrostSmithingRecipe.BaseBuilder.template](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L170) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L165) |
| ` public B template(HolderGetter<Item> items, TagKey<Item> templateTag) ` | 末尾返回 ` this.template(1, items, templateTag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L169) |
| ` @Deprecated @Override public void save(RecipeOutput output) ` | 执行 ` this.save(output, this.getResult().typeHolder().getKey().identifier().withPrefix(this.getType() + "/")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L173) |
| ` public BaseBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L129) |

## OrFrostMaterialPredicate

` public record OrFrostMaterialPredicate(List<IFrostMaterialPredicate> predicates) implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15)

满足任意一个子项即可，消耗数量取第一个满足的子项。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<OrFrostMaterialPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OrFrostMaterialPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( IFrostMaterialPredicate.STREAM_CODEC.apply(ByteBufCodecs.list()), OrFrostMaterialPredicate::predicates, OrFrostMaterialPredicate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L22) |
| ` public OrFrostMaterialPredicate(List<IFrostMaterialPredicate> predicates) ` | 执行 ` predicates = List.copyOf(predicates) `<br>[调用处 OrFrostMaterialPredicate.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L34) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L29) |
| ` public static OrFrostMaterialPredicate of(IFrostMaterialPredicate... predicates) ` | 末尾返回 ` new OrFrostMaterialPredicate(List.of(predicates)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L33) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.predicates.stream().anyMatch(predicate -> predicate.test(recipe, input)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L37) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.predicates.stream() .filter(predicate -> predicate.test(recipe, input)) .findFirst() .map(predicate -> predicate.cost(recipe, input)) .orElse(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L42) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.OR.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L51) |
| ` public List<IFrostMaterialPredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L15) |

## OrFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<OrFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<OrFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L57) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, OrFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L62) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L56) |

## PermutationRecipe

` public record PermutationRecipe(ItemIngredientPredicate template, ItemIngredientPredicate input, List<FrostSmithingOption> options) implements IFrostSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L33)

嬗变配方：装备槽放入指定装备时，由材料槽决定可以锻造出的结果。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemIngredientPredicate DEFAULT_TEMPLATE ` | 初值 ` ItemIngredientPredicate.of(ModItems.PERMUTATION_TEMPLATE).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L38) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 PermutationRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L41) |
| ` @Override public boolean isTemplate(ItemStack template) ` | 末尾返回 ` this.template.test(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L45) |
| ` @Override public boolean isInput(ItemStack input) ` | 末尾返回 ` this.input.test(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L50) |
| ` @Override public @Unmodifiable List<FrostSmithingOption> options(ItemStack input) ` | ` (input.isEmpty()) ` 成立时提前返回 ` this.options `<br>末尾返回 ` available.isEmpty() ? this.options : available ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L55) |
| ` @Override public @Unmodifiable List<RecipeResult> results() ` | 末尾返回 ` this.options.stream().map(FrostSmithingOption::result).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L65) |
| ` @Override public @Unmodifiable List<ItemStack> possibleInputs() ` | 末尾返回 ` Arrays.stream(this.input.getItems()).map(ItemStackTemplate::create).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L70) |
| ` @Override public RecipeSerializer<PermutationRecipe> getSerializer() ` | 末尾返回 ` PermutationRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L75) |
| ` @Override public RecipeType<PermutationRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.PERMUTATION.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L80) |
| ` @Override public String group() ` | 末尾返回 ` "permutation" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L85) |
| ` public static final RecipeSerializer<PermutationRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<PermutationRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L90) |
| ` public PermutationRecipe(ItemIngredientPredicate template, ItemIngredientPredicate input, List<FrostSmithingOption> options) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L33) |
| ` public ItemIngredientPredicate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L34) |
| ` public ItemIngredientPredicate input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L35) |
| ` public List<FrostSmithingOption> options() ` | 读取 record 分量 ` options ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L36) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L33) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L33) |

## PermutationRecipe.Builder

` public static class Builder extends BaseBuilder<Builder, PermutationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L114)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder() ` | 执行 ` this.template(PermutationRecipe.DEFAULT_TEMPLATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L118) |
| ` public Builder input(ItemIngredientPredicate input) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L127) |
| ` public Builder input(ItemIngredientPredicate.Builder inputBuilder) ` | 末尾返回 ` this.input(inputBuilder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L132) |
| ` public Builder input(ItemLike... inputs) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(inputs)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L136) |
| ` public Builder input(ItemStack input) ` | 实现调用 ` ItemIngredientPredicate.of(input.getItem()) `<br>实现调用 ` input.getItem() `<br>实现调用 ` DataComponentMatchers.Builder.components().exact( DataComponentExactPredicate.allOf(input.getComponents())) `<br>实现调用 ` DataComponentMatchers.Builder.components() `<br>实现调用 ` DataComponentExactPredicate.allOf(input.getComponents()) `<br>实现调用 ` input.getComponents() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L140) |
| ` public Builder input(HolderGetter<Item> items, TagKey<Item> inputTag) ` | 末尾返回 ` this.input(ItemIngredientPredicate.of(items, inputTag)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L148) |
| ` public Builder option(FrostSmithingOption option) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.options.add(option) `<br>[调用处 PermutationRecipe.Builder.option](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L152) |
| ` public Builder option(IFrostMaterialPredicate material, RecipeResult result) ` | 末尾返回 ` this.option(new FrostSmithingOption(material, result)) `<br>[调用处 PermutationRecipe.Builder.options](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L157) |
| ` public Builder options(IFrostMaterialPredicate material, ItemLike... results) ` | 添加一组需要相同材料的锻造结果，其中与装备相同的结果会在锻造时被排除。<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.option(material, RecipeResult.simple(result).build()) `<br>实现调用 ` RecipeResult.simple(result).build() `<br>实现调用 ` RecipeResult.simple(result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L164) |
| ` public Builder result(RecipeResult result) ` | 末尾返回 ` this.option(FrostSmithingOption.of(result)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L171) |
| ` public Builder result(RecipeResult.Builder result) ` | 末尾返回 ` this.result(result.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L175) |
| ` public Builder result(ItemLike result) ` | 末尾返回 ` this.result(RecipeResult.simple(result)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L179) |
| ` @Override public void validate(Identifier id) ` | ` (this.input == null \|\| this.input.items().isEmpty()) ` 成立时抛出 ` new IllegalArgumentException( "The input of " + this.getType() + " recipe must not be empty, RecipeId: " + id ) `<br>` (this.options.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException( "The options of " + this.getType() + " recipe must not be empty, RecipeId: " + id ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L183) |
| ` @Override public PermutationRecipe buildRecipe() ` | 末尾返回 ` new PermutationRecipe( Objects.requireNonNull(this.template), Objects.requireNonNull(this.input), ImmutableList.copyOf(this.options) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L197) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.options.getFirst().result().result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L206) |
| ` @Override public String getType() ` | 末尾返回 ` "permutation" `<br>[调用处 PermutationRecipe.Builder.validate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L187) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L211) |

## RepairMaterialFrostMaterialPredicate

` public record RepairMaterialFrostMaterialPredicate(int cost, boolean allowUniversal, IExpression universalCost) implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27)

维修材料，要求材料是装备的维修材料，或是「通用维修材料」标签中的物品。<br>参数 ` cost ` 维修材料的消耗数量<br>参数 ` allowUniversal ` 是否允许使用通用维修材料<br>参数 ` universalCost ` 通用维修材料的消耗数量表达式，见 #DEFAULT\_UNIVERSAL\_COST。 求值时的传入值见 #VAR\_NAME

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String VAR_NAME ` | 求解 #universalCost 时绑给数据包函数的具名传入值，也就是表达式里能写的 $(cost)。 第 0 个传入值是同一个数，所以 "x\*2" 与 "$(cost)\*2" 等价。 它与 ModMathFunctions#doubleFunction() 声明的形参名不必相同：CustomFunction 先按 位置 把实参绑到自己的形参上，函数体里的具名引用取的正是那个位置上的实参， 所以这里的具名引用只要能按名字在调用点的传入值里找到即可。<br>初值 ` "cost" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L41) |
| ` public static final IExpression DEFAULT_UNIVERSAL_COST ` | 默认通用材料消耗为维修材料消耗的两倍；配方可用表达式或数据包函数引用覆盖。<br>初值 ` FunctionExpression.of( ModMathFunctions.doubleFunction(), IExpression.ref(VAR_NAME) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L45) |
| ` public static final MapCodec<RepairMaterialFrostMaterialPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L50) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RepairMaterialFrostMaterialPredicate> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L61) |
| ` public static RepairMaterialFrostMaterialPredicate disallowUniversal(int cost) ` | 不允许使用通用维修材料。universalCost 用默认值占位——test 在 allowUniversal 为 false 时直接返回，该字段不参与求值，但流编解码器要求它非空。<br>末尾返回 ` new RepairMaterialFrostMaterialPredicate(cost, false, DEFAULT_UNIVERSAL_COST) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L75) |
| ` public static RepairMaterialFrostMaterialPredicate allowUniversal(int cost, IExpression expression) ` | 末尾返回 ` new RepairMaterialFrostMaterialPredicate(cost, true, expression) `<br>[调用处 RepairMaterialFrostMaterialPredicate.allowUniversal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L79) |
| ` public static RepairMaterialFrostMaterialPredicate allowUniversal(int cost) ` | 末尾返回 ` RepairMaterialFrostMaterialPredicate.allowUniversal(cost, DEFAULT_UNIVERSAL_COST) `<br>[调用处 DeformationRecipeLoader.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L83) |
| ` public int universalCostAmount() ` | 通用维修材料的实际消耗数量，未指定时为维修材料消耗的两倍。<br>末尾返回 ` this.universalCost.evaluateInt(inputs) `<br>[调用处 RepairMaterialFrostMaterialPredicate.test](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L90) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | ` (this.matchesRepairMaterial(recipe, input)) ` 成立时提前返回 ` input.material().getCount() >= this.cost `<br>` (this.matchesUniversalMaterial(input)) ` 成立时提前返回 ` input.material().getCount() >= this.universalCostAmount() `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L99) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | ` (this.matchesRepairMaterial(recipe, input)) ` 成立时提前返回 ` this.cost `<br>末尾返回 ` this.matchesUniversalMaterial(input) ? this.universalCostAmount() : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L110) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.REPAIR_MATERIAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L118) |
| ` public RepairMaterialFrostMaterialPredicate(int cost, boolean allowUniversal, IExpression universalCost) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |
| ` public int cost() ` | 读取 record 分量 ` cost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L28) |
| ` public boolean allowUniversal() ` | 读取 record 分量 ` allowUniversal `<br>[调用处 RepairMaterialFrostMaterialPredicate.matchesUniversalMaterial](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L29) |
| ` public IExpression universalCost() ` | 读取 record 分量 ` universalCost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L27) |

## RepairMaterialFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<RepairMaterialFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L150)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<RepairMaterialFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L151) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RepairMaterialFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L156) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L150) |
