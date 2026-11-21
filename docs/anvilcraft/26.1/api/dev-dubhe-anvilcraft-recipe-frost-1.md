# dev.dubhe.anvilcraft.recipe.frost（AndFrostMaterialPredicate 至 IFrostSmithingRecipe）



## AndFrostMaterialPredicate

` public record AndFrostMaterialPredicate(List<IFrostMaterialPredicate> predicates) implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L15)

要求所有子项都满足，消耗数量取子项中的最大值。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AndFrostMaterialPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AndFrostMaterialPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( IFrostMaterialPredicate.STREAM_CODEC.apply(ByteBufCodecs.list()), AndFrostMaterialPredicate::predicates, AndFrostMaterialPredicate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L22) |
| ` public AndFrostMaterialPredicate(List<IFrostMaterialPredicate> predicates) ` | 执行 ` predicates = List.copyOf(predicates) `<br>[调用处 AndFrostMaterialPredicate.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L34) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L29) |
| ` public static AndFrostMaterialPredicate of(IFrostMaterialPredicate... predicates) ` | 末尾返回 ` new AndFrostMaterialPredicate(List.of(predicates)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L33) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.predicates.stream().allMatch(predicate -> predicate.test(recipe, input)) `<br>[调用处 AndFrostMaterialPredicate.cost](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L37) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | ` (!this.test(recipe, input)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` this.predicates.stream().mapToInt(predicate -> predicate.cost(recipe, input)).max().orElse(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L42) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.AND.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L50) |
| ` public List<IFrostMaterialPredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L15) |

## AndFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<AndFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<AndFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L56) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AndFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L61) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L55) |

## CustomFrostMaterialPredicate

` public record CustomFrostMaterialPredicate(ItemIngredientPredicate predicate) implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L18)

自定义材料，直接使用物品原料谓词判断。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CustomFrostMaterialPredicate> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( ItemIngredientPredicate.CODEC .fieldOf("predicate") .forGetter(CustomFrostMaterialPredicate::predicate) ).apply(ins, CustomFrostMaterialPredicate::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L19) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CustomFrostMaterialPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemIngredientPredicate.STREAM_CODEC, CustomFrostMaterialPredicate::predicate, CustomFrostMaterialPredicate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L24) |
| ` public static CustomFrostMaterialPredicate of(ItemIngredientPredicate predicate) ` | 末尾返回 ` new CustomFrostMaterialPredicate(predicate) `<br>[调用处 DeformationRecipeLoader.registerWorkstations](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L101) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L31) |
| ` public List<ItemStack> items() ` | 材料槽里能放的物品，数量已按 ItemIngredientPredicate#count() 设好。<br>末尾返回 ` Arrays.stream(this.predicate.getItems()).map(ItemStackTemplate::create).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L38) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.predicate.test(input.material()) `<br>[调用处 CustomFrostMaterialPredicate.cost](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L42) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.test(recipe, input) ? this.predicate.count() : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L47) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.CUSTOM.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L52) |
| ` public CustomFrostMaterialPredicate(ItemIngredientPredicate predicate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L18) |
| ` public ItemIngredientPredicate predicate() ` | 读取 record 分量 ` predicate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L18) |

## CustomFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<CustomFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<CustomFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L58) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, CustomFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L63) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L57) |

## DeformationRecipe

` public record DeformationRecipe(ItemIngredientPredicate template, IFrostMaterialPredicate material, List<RecipeResult> inputs) implements IFrostSmithingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L27)

形变配方：同组装备之间互相转化，材料由该组装备自身的维修材料决定。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemIngredientPredicate DEFAULT_TEMPLATE ` | 初值 ` ItemIngredientPredicate.of(ModItems.DEFORMATION_TEMPLATE).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L32) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 DeformationRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L35) |
| ` @Override public boolean isTemplate(ItemStack template) ` | 末尾返回 ` this.template.test(template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L39) |
| ` @Override public boolean isInput(ItemStack input) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L44) |
| ` @Override public @Unmodifiable List<FrostSmithingOption> options(ItemStack input) ` | ` (input.isEmpty()) ` 成立时提前返回 ` this.inputs.stream() .map(result -> new FrostSmithingOption(this.material, result)) .toList() `<br>` (head >= this.inputs.size()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` options.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L52) |
| ` @Override public @Unmodifiable List<RecipeResult> results() ` | 末尾返回 ` this.inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L73) |
| ` @Override public @Unmodifiable List<ItemStack> possibleInputs() ` | 末尾返回 ` this.inputs.stream().map(result -> result.result().item().value().getDefaultInstance()).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L78) |
| ` @Override public RecipeSerializer<DeformationRecipe> getSerializer() ` | 末尾返回 ` DeformationRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L83) |
| ` @Override public RecipeType<DeformationRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.DEFORMATION.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L88) |
| ` @Override public String group() ` | 末尾返回 ` "deformation" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L93) |
| ` public static final RecipeSerializer<DeformationRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<DeformationRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L98) |
| ` public DeformationRecipe(ItemIngredientPredicate template, IFrostMaterialPredicate material, List<RecipeResult> inputs) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L27) |
| ` public ItemIngredientPredicate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L28) |
| ` public IFrostMaterialPredicate material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L29) |
| ` public List<RecipeResult> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L27) |

## DeformationRecipe.Builder

` public static class Builder extends BaseBuilder<Builder, DeformationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L121)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder() ` | 执行 ` this.template(DeformationRecipe.DEFAULT_TEMPLATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L129) |
| ` public Builder material(IFrostMaterialPredicate material) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L138) |
| ` public Builder input(RecipeResult.Builder input) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(input.build()) `<br>实现调用 ` input.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L143) |
| ` public Builder input(RecipeResult input) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L148) |
| ` public Builder input(ItemLike input) ` | 末尾返回 ` this.input(RecipeResult.simple(input)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L153) |
| ` @Override public void validate(Identifier id) ` | ` (this.inputs.size() < 2) ` 成立时抛出 ` new IllegalArgumentException( "The inputs of " + this.getType() + " recipe must not be less than 2, RecipeId: " + id ) `<br>` (this.material == null) ` 成立时抛出 ` new IllegalArgumentException( "The material of " + this.getType() + " recipe must be set, RecipeId: " + id ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L157) |
| ` @Override public DeformationRecipe buildRecipe() ` | 末尾返回 ` new DeformationRecipe( Objects.requireNonNull(this.template), Objects.requireNonNull(this.material), ImmutableList.copyOf(this.inputs) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L171) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.inputs.getFirst().result() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L180) |
| ` @Override public String getType() ` | 末尾返回 ` "deformation" `<br>[调用处 DeformationRecipe.Builder.validate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L185) |

## EmptyFrostMaterialPredicate

` public record EmptyFrostMaterialPredicate() implements IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L11)

空材料，要求材料槽为空。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<EmptyFrostMaterialPredicate> CODEC ` | 初值 ` MapCodec.unit(new EmptyFrostMaterialPredicate()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L12) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, EmptyFrostMaterialPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.unit(new EmptyFrostMaterialPredicate()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L13) |
| ` @Override public boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` input.material().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L16) |
| ` @Override public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L21) |
| ` @Override public Type type() ` | 末尾返回 ` ModFrostMaterialPredicateTypes.EMPTY.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L26) |
| ` public EmptyFrostMaterialPredicate() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L11) |

## EmptyFrostMaterialPredicate.Type

` public static class Type implements IFrostMaterialPredicate.Type<EmptyFrostMaterialPredicate> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<EmptyFrostMaterialPredicate> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L32) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, EmptyFrostMaterialPredicate> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L37) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java#L31) |

## FrostSmithingOption

` public record FrostSmithingOption(IFrostMaterialPredicate material, RecipeResult result) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12)

浮霜锻造的一种锻造结果及其对材料槽的要求。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<FrostSmithingOption> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FrostSmithingOption> STREAM_CODEC ` | 初值 ` StreamCodec.composite( IFrostMaterialPredicate.STREAM_CODEC, FrostSmithingOption::material, RecipeResult.STREAM_CODEC, FrostSmithingOption::result, FrostSmithingOption::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L22) |
| ` public static FrostSmithingOption of(RecipeResult result) ` | 不需要材料的锻造结果。<br>末尾返回 ` new FrostSmithingOption(new EmptyFrostMaterialPredicate(), result) `<br>[调用处 PermutationRecipe.Builder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L172) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L33) |
| ` public boolean isAvailable(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.material.test(recipe, input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L37) |
| ` public int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 末尾返回 ` this.material.cost(recipe, input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L41) |
| ` public FrostSmithingOption(IFrostMaterialPredicate material, RecipeResult result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12) |
| ` public IFrostMaterialPredicate material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12) |
| ` public RecipeResult result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L12) |

## FrostSmithingRecipeInput

` public record FrostSmithingRecipeInput(ItemStack template, ItemStack input, ItemStack material) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9)

浮霜锻造的输入：模板槽、装备槽与材料槽。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 返回 ` ItemStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L10) |
| ` @Override public int size() ` | 末尾返回 ` 3 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L20) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` this.template.isEmpty() && this.input.isEmpty() && this.material.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L25) |
| ` public FrostSmithingRecipeInput(ItemStack template, ItemStack input, ItemStack material) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |
| ` public ItemStack template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |
| ` public ItemStack input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |
| ` public ItemStack material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingRecipeInput.java#L9) |

## IFrostMaterialPredicate

` public interface IFrostMaterialPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L16)

浮霜锻造系列配方的材料槽要求。 材料是否合法由放入的模板与装备（以及配方本身）决定，因此判断时需要传入配方与输入。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<IFrostMaterialPredicate> CODEC ` | 初值 ` Codec.lazyInitialized(() -> ModRegistries.FROST_MATERIAL_PREDICATE_TYPE .byNameCodec().dispatch(IFrostMaterialPredicate::type, Type::codec)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L17) |
| ` StreamCodec<RegistryFriendlyByteBuf, IFrostMaterialPredicate> STREAM_CODEC ` | 初值 ` ByteBufCodecs .registry(ModRegistryKeys.FROST_MATERIAL_PREDICATE_TYPE) .dispatch(IFrostMaterialPredicate::type, Type::streamCodec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L19) |
| ` boolean test(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 判断材料槽中的材料是否合法。 装备槽为空时也会被调用以判断材料能否放入，此时可以借助配方中可能放入的装备判断。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L28) |
| ` int cost(IFrostSmithingRecipe recipe, FrostSmithingRecipeInput input) ` | 取出结果时需要消耗的材料数量，材料不合法时为 0。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L33) |
| ` Type<? extends IFrostMaterialPredicate> type() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L35) |

## IFrostMaterialPredicate.Type

` interface Type<T extends IFrostMaterialPredicate> extends ISerializer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostMaterialPredicate.java#L37)


## IFrostSmithingRecipe

` public interface IFrostSmithingRecipe extends Recipe<FrostSmithingRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int TEMPLATE_SLOT ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L28) |
| ` int INPUT_SLOT ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L29) |
| ` int MATERIAL_SLOT ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L30) |
| ` @Override default boolean matches(FrostSmithingRecipeInput input, Level level) ` | 末尾返回 ` this.isTemplate(input.template()) && this.isInput(input.input()) && !this.options(input).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L32) |
| ` boolean isTemplate(ItemStack template) ` | [调用处 IFrostSmithingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L39) |
| ` boolean isInput(ItemStack input) ` | 装备槽（工具、武器、盔甲、重型物品等）能否放入该物品。<br>[调用处 IFrostSmithingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L44) |
| ` @Unmodifiable List<FrostSmithingOption> options(ItemStack input) ` | 该装备在当前模板下可以锻造出的全部结果，按箭头切换顺序排列。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L49) |
| ` default @Unmodifiable List<FrostSmithingOption> options(FrostSmithingRecipeInput input) ` | 材料槽已满足要求的锻造结果，按箭头切换顺序排列。<br>末尾返回 ` this.options(input.input()) .stream() .filter(option -> option.isAvailable(this, input)) .toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L54) |
| ` @Unmodifiable List<RecipeResult> results() ` | 该配方可能产出的全部结果，用于配方书与 JEI 展示。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L64) |
| ` @Unmodifiable List<ItemStack> possibleInputs() ` | 可能放入装备槽的物品，用于装备槽为空时判断材料是否合适。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L69) |
| ` default boolean acceptsMaterial(FrostSmithingRecipeInput input, ItemStack material) ` | 材料槽中该物品能否作为材料放入。<br>末尾返回 ` !this.options(new FrostSmithingRecipeInput(input.template(), input.input(), material)).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L74) |
| ` @Deprecated @Override default ItemStack assemble(FrostSmithingRecipeInput input) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L78) |
| ` default ItemStack assemble(int selected, FrostSmithingRecipeInput inputting, Level level) ` | 末尾返回 ` input.getResult(builder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L84) |
| ` default int materialCost(FrostSmithingRecipeInput input, int selected) ` | 取出指定结果时需要消耗的材料数量。<br>` (selected < 0 \|\| selected >= options.size()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` options.get(selected).cost(this, input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L103) |
| ` @Override default PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L109) |
| ` @Override default RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L114) |
| ` @Override default boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L119) |
| ` @Override default boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/IFrostSmithingRecipe.java#L124) |
