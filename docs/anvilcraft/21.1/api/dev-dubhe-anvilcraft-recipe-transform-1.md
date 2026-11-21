# dev.dubhe.anvilcraft.recipe.transform（MobTransformInput 至 TagModification.Builder）



## MobTransformInput

` public record MobTransformInput(LivingEntity inputEntity) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int i) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L9) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L14) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L19) |
| ` public MobTransformInput(LivingEntity inputEntity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L7) |
| ` public LivingEntity inputEntity() ` | 读取 record 分量 ` inputEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L7) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformInput.java#L7) |

## MobTransformRecipe

` public record MobTransformRecipe(EntityType<?> input, List<TransformResult> results, List<NumericTagValuePredicate> predicates, List<TagModification> tagModifications, List<TransformOptions> options) implements Recipe<MobTransformInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MobTransformRecipe> CODEC ` | 初值 ` Serializer.MAP_CODEC.codec() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L43) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MobTransformRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L45) |
| ` @Override public boolean matches(MobTransformInput in, Level level) ` | ` (!typeMatches) ` 成立时提前返回 ` false `<br>末尾返回 ` this.predicates().stream().allMatch(it -> it.test(new EntityDataAccessor(in.inputEntity()).getData())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L59) |
| ` @Override public ItemStack assemble(MobTransformInput mobTransformInput, HolderLookup.Provider provider) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L66) |
| ` @Override public boolean canCraftInDimensions(int i, int i1) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L71) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider provider) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L76) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.MOB_TRANSFORM_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L81) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.MOB_TRANSFORM_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L86) |
| ` @Nullable public Entity apply(RandomSource rand, LivingEntity livingEntity, ServerLevel level) ` | ` (newEntity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` newEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L113) |
| ` public static TransformRecipeBuilder from(EntityType<?> type) ` | 末尾返回 ` new TransformRecipeBuilder(type) `<br>[调用处 MobTransformRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L157) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L161) |
| ` public MobTransformRecipe(EntityType<?> input, List<TransformResult> results, List<NumericTagValuePredicate> predicates, List<TagModification> tagModifications, List<TransformOptions> options) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L36) |
| ` public EntityType<?> input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L37) |
| ` public List<TransformResult> results() ` | 读取 record 分量 ` results `<br>[调用处 MobTransformRecipe.getResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L38) |
| ` public List<NumericTagValuePredicate> predicates() ` | 读取 record 分量 ` predicates `<br>[调用处 MobTransformRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L39) |
| ` public List<TagModification> tagModifications() ` | 读取 record 分量 ` tagModifications `<br>[调用处 MobTransformRecipe.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L40) |
| ` public List<TransformOptions> options() ` | 读取 record 分量 ` options `<br>[调用处 MobTransformRecipe.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L41) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L36) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L36) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L36) |

## MobTransformRecipe.Serializer

` public static final class Serializer implements RecipeSerializer<MobTransformRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L166)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MobTransformRecipe> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L167) |
| ` @Override public MapCodec<MobTransformRecipe> codec() ` | 末尾返回 ` Serializer.MAP_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L189) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MobTransformRecipe> streamCodec() ` | 末尾返回 ` MobTransformRecipe.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L194) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L166) |

## MobTransformWithItemRecipe

` public record MobTransformWithItemRecipe(EntityType<?> input, List<ItemIngredientPredicate> itemIngredients, TransformResult specialResult, ItemStack itemResult, int chancePercentPerItem, List<NumericTagValuePredicate> predicates, List<TagModification> tagModifications, List<TransformOptions> options) implements Recipe<MobTransformWithItemRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MobTransformWithItemRecipe> CODEC ` | 初值 ` Serializer.MAP_CODEC.codec() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L51) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MobTransformWithItemRecipe> STREAM_CODEC ` | 由 ` StreamCodecUtil.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L53) |
| ` @Override public boolean matches(Input in, Level level) ` | ` (!typeMatches) ` 成立时提前返回 ` false `<br>` (!this.testItem(in.getItem(0))) ` 成立时提前返回 ` false `<br>末尾返回 ` this.predicates() .stream() .allMatch(it -> it.test(new EntityDataAccessor(in.getInputEntity()).getData())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L73) |
| ` public boolean testEntity(LivingEntity livingEntity) ` | 末尾返回 ` livingEntity.getType() == this.input() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L83) |
| ` public boolean testItem(ItemStack item) ` | 末尾返回 ` !this.itemIngredients().isEmpty() && this.itemIngredients().getFirst().test(item) `<br>[调用处 MobTransformWithItemRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L87) |
| ` @Override public ItemStack assemble(Input input, HolderLookup.Provider provider) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L91) |
| ` @Override public boolean canCraftInDimensions(int i, int i1) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L96) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider provider) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L101) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.MOB_TRANSFORM_WITH_ITEM_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L106) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.MOB_TRANSFORM_WITH_ITEM_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L111) |
| ` @Nullable public Entity apply(RandomSource rand, LivingEntity livingEntity, ServerLevel level) ` | ` (entityType == null) ` 成立时提前返回 ` null `<br>` (newEntity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` newEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L132) |
| ` public void setTransformedItem(Entity oldEntity, Entity newEntity) ` | 分支 ` (newEntity instanceof LivingEntity entity && oldEntity instanceof LivingEntity) ` 内调用 ` this.itemResult.getItem() `<br>分支 ` (newEntity instanceof LivingEntity entity && oldEntity instanceof LivingEntity) ` 内调用 ` this.itemResult.getCount() `<br>分支 ` (entity instanceof Mob mob) ` 内调用 ` mob.setDropChance(EquipmentSlot.MAINHAND, 1.0f) `<br>[调用处 MobTransformWithItemRecipe.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L173) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L184) |
| ` public static TransformWithItemRecipeBuilder from( EntityType<?> type, ItemLike itemInput, EntityType<?> specialResult, ItemStack itemResult ) ` | 末尾返回 ` new TransformWithItemRecipeBuilder(type, Collections.singletonList(item), specialResult, itemResult) `<br>实现调用 ` ItemIngredientPredicate.Builder.item() .of(itemInput) .build() `<br>实现调用 ` ItemIngredientPredicate.Builder.item() .of(itemInput) `<br>实现调用 ` ItemIngredientPredicate.Builder.item() `<br>实现调用 ` Collections.singletonList(item) `<br>[调用处 MobTransformWithItemRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L197) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L209) |
| ` public MobTransformWithItemRecipe(EntityType<?> input, List<ItemIngredientPredicate> itemIngredients, TransformResult specialResult, ItemStack itemResult, int chancePercentPerItem, List<NumericTagValuePredicate> predicates, List<TagModification> tagModifications, List<TransformOptions> options) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L41) |
| ` public EntityType<?> input() ` | 读取 record 分量 ` input `<br>[调用处 MobTransformWithItemRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L42) |
| ` public List<ItemIngredientPredicate> itemIngredients() ` | 读取 record 分量 ` itemIngredients `<br>[调用处 MobTransformWithItemRecipe.testItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L43) |
| ` public TransformResult specialResult() ` | 读取 record 分量 ` specialResult `<br>[调用处 MobTransformWithItemRecipe.getResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L44) |
| ` public ItemStack itemResult() ` | 读取 record 分量 ` itemResult ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L45) |
| ` public int chancePercentPerItem() ` | 读取 record 分量 ` chancePercentPerItem `<br>[调用处 MobTransformWithItemRecipe.getResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L46) |
| ` public List<NumericTagValuePredicate> predicates() ` | 读取 record 分量 ` predicates `<br>[调用处 MobTransformWithItemRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L47) |
| ` public List<TagModification> tagModifications() ` | 读取 record 分量 ` tagModifications `<br>[调用处 MobTransformWithItemRecipe.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L48) |
| ` public List<TransformOptions> options() ` | 读取 record 分量 ` options `<br>[调用处 MobTransformWithItemRecipe.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L49) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L41) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L41) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L41) |

## MobTransformWithItemRecipe.Input

` public record Input(LivingEntity inputEntity) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L214)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int i) ` | 末尾返回 ` this.inputEntity().getMainHandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L215) |
| ` public LivingEntity getInputEntity() ` | 末尾返回 ` this.inputEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L220) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L224) |
| ` public static Input of(LivingEntity livingEntity) ` | 末尾返回 ` new Input(livingEntity) `<br>[调用处 CorruptedBeaconBlockEntity.tryTransformEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CorruptedBeaconBlockEntity.java#L184) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L229) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L233) |
| ` public Input(LivingEntity inputEntity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L214) |
| ` public LivingEntity inputEntity() ` | 读取 record 分量 ` inputEntity `<br>[调用处 MobTransformWithItemRecipe.Input.getItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L217) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L214) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L214) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L214) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L214) |

## MobTransformWithItemRecipe.Serializer

` public static final class Serializer implements RecipeSerializer<MobTransformWithItemRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L239)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MobTransformWithItemRecipe> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L240) |
| ` @Override public MapCodec<MobTransformWithItemRecipe> codec() ` | 末尾返回 ` Serializer.MAP_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L256) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MobTransformWithItemRecipe> streamCodec() ` | 末尾返回 ` MobTransformWithItemRecipe.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L261) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L239) |

## NumericTagValuePredicate

` public record NumericTagValuePredicate(String tagKeyPath, ValueFunction requirement, long expected) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<NumericTagValuePredicate> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L24) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, NumericTagValuePredicate> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L31) |
| ` public static NumericTagValuePredicate fromJson(JsonObject jsonObject) ` | 末尾返回 ` CODEC.decode(JsonOps.INSTANCE, jsonObject).getOrThrow().getFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L41) |
| ` public JsonElement toJson() ` | 末尾返回 ` CODEC.encodeStart(JsonOps.INSTANCE, this).getOrThrow() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L45) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 ItemSavedEntityPredicate.predicate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L77) |
| ` public boolean test(CompoundTag tag) ` | 实现调用 ` argument.parse(reader) `<br>实现调用 ` path.get(tag) `<br>实现调用 ` contract.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L125) |
| ` public NumericTagValuePredicate(String tagKeyPath, ValueFunction requirement, long expected) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |
| ` public String tagKeyPath() ` | 读取 record 分量 ` tagKeyPath ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |
| ` public ValueFunction requirement() ` | 读取 record 分量 ` requirement ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |
| ` public long expected() ` | 读取 record 分量 ` expected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L23) |

## NumericTagValuePredicate.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L81)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder path(String tagKeyPath) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L89) |
| ` public Builder compare(ValueFunction fn) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L94) |
| ` public Builder expect(long value) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L99) |
| ` public Builder lhs(String tagKeyPath) ` | 左操作数<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L107) |
| ` public Builder rhs(long value) ` | 右操作数<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L115) |
| ` public NumericTagValuePredicate build() ` | 末尾返回 ` new NumericTagValuePredicate(this.tagKeyPath, this.requirement, this.expected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L120) |

## NumericTagValuePredicate.ValueFunction

` public enum ValueFunction implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EQUAL ` | 声明于枚举 ` NumericTagValuePredicate.ValueFunction ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L50) |
| ` NOT_EQUAL ` | 声明于枚举 ` NumericTagValuePredicate.ValueFunction ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L51) |
| ` GREATER ` | 声明于枚举 ` NumericTagValuePredicate.ValueFunction ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L52) |
| ` LESS ` | 声明于枚举 ` NumericTagValuePredicate.ValueFunction ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L53) |
| ` GREATER_OR_EQUAL ` | 声明于枚举 ` NumericTagValuePredicate.ValueFunction ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L54) |
| ` LESS_OR_EQUAL ` | 声明于枚举 ` NumericTagValuePredicate.ValueFunction ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L55) |
| ` public static final Codec<ValueFunction> CODEC ` | 初值 ` StringRepresentable.fromEnum(ValueFunction::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L57) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ValueFunction> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec( ValueFunction.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L58) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` name() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L71) |
| ` public static ValueFunction[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L49) |
| ` public static ValueFunction valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L49) |

## TagModification

` public record TagModification(String path, ModifyOperation op, int index, Tag tag) implements Consumer<Tag> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28)

对生成出来的生物进行nbt修改

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TagModification> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L29) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TagModification> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L40) |
| ` public TagModification(String path, ModifyOperation op, int index, Tag tag) ` | 初始化 TagModification<br>当前实现的方法体为空。<br>[调用处 TagModification.create](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L63) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L72) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 TransformRecipeBuilder.tagModification](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformRecipeBuilder.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L75) |
| ` @Override public void accept(Tag input) ` | 实现调用 ` this.path.isEmpty() `<br>分支 ` (this.op == ModifyOperation.ROOT_SET && this.path.isEmpty()) ` 内调用 ` this.op.accept(input, this.tag.copy(), this.index, this.path) `<br>分支 ` (this.op == ModifyOperation.ROOT_SET && this.path.isEmpty()) ` 内调用 ` this.tag.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L79) |
| ` public String path() ` | 读取 record 分量 ` path ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |
| ` public ModifyOperation op() ` | 读取 record 分量 ` op ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |
| ` public Tag tag() ` | 读取 record 分量 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L28) |

## TagModification.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L181)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder path(String tagKeyPath) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L190) |
| ` public Builder operation(ModifyOperation fn) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L195) |
| ` public Builder index(int value) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L200) |
| ` public Builder value(Tag tag) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L205) |
| ` public TagModification build() ` | 末尾返回 ` new TagModification(this.path, this.op, this.index, this.tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L210) |
