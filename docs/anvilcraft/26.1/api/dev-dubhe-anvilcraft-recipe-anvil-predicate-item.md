# dev.dubhe.anvilcraft.recipe.anvil.predicate.item



## HasDiffItems

` public record HasDiffItems(Vec3 offset, Vec3 range, List<ItemIngredientPredicate> ingredients, List<IPredicateFunction<?>> functions) implements IRecipePredicate<HasDiffItems> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasDiffItems(Vec3 offset, Vec3 range, List<ItemIngredientPredicate> ingredients, List<IPredicateFunction<?>> functions) ` | 实现调用 ` List.copyOf(ingredients) `<br>实现调用 ` List.copyOf(functions) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L39) |
| ` public HasDiffItems(Vec3 offset, Vec3 range, ItemIngredientPredicate item, List<IPredicateFunction<?>> functions) ` | 执行 ` this(offset, range, List.of(item), functions) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L44) |
| ` public ItemIngredientPredicate item() ` | 末尾返回 ` this.ingredients.getFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L48) |
| ` public static HasDiffItems fromPredicates(List<ItemIngredientPredicate> predicates, Vec3 offset, Vec3 range) ` | 末尾返回 ` new HasDiffItems(offset, range, predicates, List.of()) `<br>[调用处 AbstractProcessRecipe.Property.getConflictingPredicates](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L827) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L52) |
| ` public static HasDiffItems fromPredicate(ItemIngredientPredicate predicate, Vec3 offset, Vec3 range) ` | 构造一个物品原料条件谓词<br>参数 ` offset ` 偏移量<br>参数 ` range ` 范围<br>末尾返回 ` new HasDiffItems(offset, range, predicate, List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L60) |
| ` @Override public boolean test(InWorldRecipeContext context) ` | ` (this.ingredients.isEmpty() \|\| this.ingredients.stream().anyMatch(ingredient -> ingredient.count() <= 0)) ` 成立时提前返回 ` false `<br>` (ordered.size() != count) ` 成立时提前返回 ` false `<br>末尾返回 ` items.size() == ordered.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L64) |
| ` @Override @SuppressWarnings("unchecked") public void accept(InWorldRecipeContext context) ` | 实现调用 ` this.getItem(context) `<br>实现调用 ` context.computeIfAbsent(ItemCache.ITEM_CACHE) `<br>实现调用 ` BlockPos.containing(context.getPos().add(this.offset)).getBottomCenter() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L88) |
| ` @Override public void snapshot(InWorldRecipeContext context) ` | ` (this.getItem(context).shrink(count) != 0) ` 成立时抛出 ` new IllegalStateException("Distinct stamping ingredients changed during reservation") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L111) |
| ` @Override public void rollback(InWorldRecipeContext context) ` | 实现调用 ` this.getItem(context) `<br>实现调用 ` input.rollbackShrink() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L119) |
| ` @Override public void clearStack(InWorldRecipeContext context) ` | 实现调用 ` this.getItem(context) `<br>实现调用 ` input.clearStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L125) |
| ` public ICacheInput getItem(InWorldRecipeContext context) ` | [调用处 HasDiffItems.test](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L131) |
| ` @Override public Type getType() ` | 末尾返回 ` ModRecipePredicateTypes.HAS_DIFF_ITEMS.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L143) |
| ` public Vec3 offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L34) |
| ` public Vec3 range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L35) |
| ` public List<ItemIngredientPredicate> ingredients() ` | 读取 record 分量 ` ingredients ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L36) |
| ` public List<IPredicateFunction<?>> functions() ` | 读取 record 分量 ` functions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L37) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L33) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L33) |

## HasDiffItems.Type

` public static class Type implements IRecipePredicate.Type<HasDiffItems> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L148)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<HasDiffItems> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L154) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HasDiffItems> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L167) |
| ` @Override public MapCodec<HasDiffItems> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L179) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, HasDiffItems> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L184) |
| ` @Override public boolean conflict() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L189) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L148) |
