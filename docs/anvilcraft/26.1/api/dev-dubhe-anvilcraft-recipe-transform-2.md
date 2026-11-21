# dev.dubhe.anvilcraft.recipe.transform（TagModification.ModifyOperation 至 TransformWithItemRecipeBuilder）



## TagModification.ModifyOperation

` public enum ModifyOperation implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L99)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SET ` | 声明于枚举 ` TagModification.ModifyOperation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L100) |
| ` APPEND ` | 声明于枚举 ` TagModification.ModifyOperation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L110) |
| ` INSERT ` | 声明于枚举 ` TagModification.ModifyOperation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L120) |
| ` MERGE ` | 声明于枚举 ` TagModification.ModifyOperation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L130) |
| ` PREPEND ` | 声明于枚举 ` TagModification.ModifyOperation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L141) |
| ` ROOT_SET ` | 声明于枚举 ` TagModification.ModifyOperation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L151) |
| ` public static final Codec<ModifyOperation> CODEC ` | 初值 ` StringRepresentable.fromEnum(ModifyOperation::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L163) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ModifyOperation> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec( ModifyOperation.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L164) |
| ` public abstract void accept(Tag inputSrc, Tag tag, int index, String key) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L168) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L170) |
| ` public static ModifyOperation[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L99) |
| ` public static ModifyOperation valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L99) |

## TransformOptions

` public enum TransformOptions implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` KEEP_INVENTORY ` | 声明于枚举 ` TransformOptions ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L20) |
| ` REPLACE_ANVIL ` | 声明于枚举 ` TransformOptions ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L39) |
| ` public static final Codec<TransformOptions> CODEC ` | 初值 ` StringRepresentable.fromEnum(TransformOptions::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L68) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TransformOptions> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(TransformOptions.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L69) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L82) |
| ` public abstract void accept(Entity oldEntity, Entity newEntity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L87) |
| ` public int getPriority() ` | 末尾返回 ` this.priority `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L19) |
| ` public static TransformOptions[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L19) |
| ` public static TransformOptions valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformOptions.java#L19) |

## TransformRecipeBuilder

` public class TransformRecipeBuilder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TransformRecipeBuilder(EntityType<?> inputType) ` | 执行 ` this.inputType = inputType `<br>[调用处 MobTransformRecipe.from](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L190) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L32) |
| ` public TransformRecipeBuilder unlockedBy(String s, Criterion<?> criterion) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.criteria.put(s, criterion) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L36) |
| ` public MobTransformRecipe create() ` | 末尾返回 ` new MobTransformRecipe(this.inputType, this.results, this.predicates, this.tagModifications, this.options) `<br>[调用处 TransformRecipeBuilder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L41) |
| ` public TransformRecipeBuilder to(EntityType<?> res) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.results.add(new TransformResult(res, 1d)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L45) |
| ` public TransformRecipeBuilder result(EntityType<?> resultEntityType, double d) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.results.add(new TransformResult(resultEntityType, d)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L50) |
| ` public TransformRecipeBuilder predicate(UnaryOperator<NumericTagValuePredicate.Builder> predicateBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` NumericTagValuePredicate.builder() `<br>实现调用 ` predicateBuilder.apply(builder) `<br>实现调用 ` this.predicates.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L55) |
| ` public TransformRecipeBuilder tagModification(Consumer<TagModification.Builder> predicateBuilder) ` | 修改生物nbt<br>返回当前实例，可继续链式调用。<br>实现调用 ` TagModification.builder() `<br>实现调用 ` predicateBuilder.accept(builder) `<br>实现调用 ` this.tagModifications.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L63) |
| ` public TransformRecipeBuilder option(TransformOptions option) ` | 生物转化额外选项<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.options.add(option) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L71) |
| ` public void save(RecipeOutput recipeOutput) ` | 执行 ` this.save( recipeOutput, AnvilCraft.of(BuiltInRegistries.ENTITY_TYPE.getKey(this.inputType).getPath()) .withPrefix("mob_transform/")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L76) |
| ` public void save(RecipeOutput output, Identifier id) ` | 实现调用 ` ResourceKey.create(Registries.RECIPE, id) `<br>实现调用 ` output .advancement() .addCriterion("has_the_recipe", RecipeUnlockedTrigger.unlocked(key)) `<br>实现调用 ` output .advancement() `<br>实现调用 ` RecipeUnlockedTrigger.unlocked(key) `<br>实现调用 ` AdvancementRewards.Builder.recipe(key) `<br>实现调用 ` this.criteria.forEach(advancement::addCriterion) `<br>[调用处 TransformRecipeBuilder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L83) |

## TransformResult

` public record TransformResult(EntityType<?> resultEntityType, double probability) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TransformResult> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TransformResult> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.ENTITY, TransformResult::resultEntityType, ByteBufCodecs.DOUBLE, TransformResult::probability, TransformResult::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L22) |
| ` public TransformResult(EntityType<?> resultEntityType, double probability) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12) |
| ` public EntityType<?> resultEntityType() ` | 读取 record 分量 ` resultEntityType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12) |
| ` public double probability() ` | 读取 record 分量 ` probability ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L12) |

## TransformWithItemRecipeBuilder

` public class TransformWithItemRecipeBuilder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TransformWithItemRecipeBuilder( EntityType<?> inputType, List<ItemIngredientPredicate> itemIngredients, EntityType<?> specialResult, ItemStackTemplate itemResult ) ` | [调用处 MobTransformWithItemRecipe.from](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L248) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L36) |
| ` public TransformWithItemRecipeBuilder unlockedBy(String s, Criterion<?> criterion) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.criteria.put(s, criterion) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L48) |
| ` public MobTransformWithItemRecipe create() ` | [调用处 TransformWithItemRecipeBuilder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L53) |
| ` public TransformWithItemRecipeBuilder setItemChancePercentagePerItem(int x) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L66) |
| ` public TransformWithItemRecipeBuilder predicate(Consumer<NumericTagValuePredicate.Builder> predicateBuilder) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` NumericTagValuePredicate.builder() `<br>实现调用 ` predicateBuilder.accept(builder) `<br>实现调用 ` this.predicates.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L71) |
| ` public TransformWithItemRecipeBuilder tagModification(Consumer<TagModification.Builder> predicateBuilder) ` | 修改生物nbt<br>返回当前实例，可继续链式调用。<br>实现调用 ` TagModification.builder() `<br>实现调用 ` predicateBuilder.accept(builder) `<br>实现调用 ` this.tagModifications.add(builder.build()) `<br>实现调用 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L79) |
| ` public TransformWithItemRecipeBuilder option(TransformOptions option) ` | 生物转化额外选项<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.options.add(option) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L87) |
| ` public void save(RecipeOutput recipeOutput) ` | 实现调用 ` BuiltInRegistries.ENTITY_TYPE.getKey(this.inputType).getPath() `<br>实现调用 ` BuiltInRegistries.ENTITY_TYPE.getKey(this.inputType) `<br>实现调用 ` BuiltInRegistries.ITEM.getKey(this.itemResult.item().value()).getPath() `<br>实现调用 ` BuiltInRegistries.ITEM.getKey(this.itemResult.item().value()) `<br>实现调用 ` this.itemResult.item().value() `<br>实现调用 ` this.itemResult.item() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L92) |
| ` public void save(RecipeOutput output, Identifier id) ` | 实现调用 ` ResourceKey.create(Registries.RECIPE, id) `<br>实现调用 ` output .advancement() .addCriterion("has_the_recipe", RecipeUnlockedTrigger.unlocked(key)) `<br>实现调用 ` output .advancement() `<br>实现调用 ` RecipeUnlockedTrigger.unlocked(key) `<br>实现调用 ` AdvancementRewards.Builder.recipe(key) `<br>实现调用 ` this.criteria.forEach(advancement::addCriterion) `<br>[调用处 TransformWithItemRecipeBuilder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformWithItemRecipeBuilder.java#L102) |
