# dev.dubhe.anvilcraft.recipe.anvil



## MassInjectRecipe

` public class MassInjectRecipe extends SingleItemRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L39)

质量注入配方类，用于定义向物品注入质量的配方 该类继承自 SingleItemRecipe，表示一种特殊的单物品配方

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MassInjectRecipe(Ingredient ingredient, int mass) ` | 构造一个新的质量注入配方<br>参数 ` ingredient ` 配方原料<br>参数 ` mass ` 质量值<br>实现调用 ` ModRecipeTypes.MASS_INJECT_TYPE.get() `<br>实现调用 ` ModRecipeTypes.MASS_INJECT_SERIALIZER.get() `<br>[调用处 MassInjectRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L295) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L52) |
| ` @Contract(" -> new") public static Builder builder() ` | 创建一个新的配方构建器<br>返回 配方构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 MassInjectRecipeLoader.addTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L66) |
| ` public Component displayMassValue() ` | 显示质量值的组件<br>返回 显示质量值的组件<br>末尾返回 ` displayMassValue(this.mass) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L76) |
| ` public static Component displayMassValue(long mass) ` | 显示指定质量值的组件<br>参数 ` mass ` 质量值<br>返回 显示质量值的组件<br>` (mass <= 0) ` 成立时提前返回 ` Component.literal("0") `<br>` (mass % 100 == 0) ` 成立时提前返回 ` Component.literal(String.valueOf(mass / 100)) `<br>` (mass % 10 == 0) ` 成立时提前返回 ` Component.literal(String.valueOf(mass / 100) + '.' + (mass % 100) / 10) `<br>末尾返回 ` Component.literal((mass / 100) + (rem < 10 ? ".0" : ".") + (mass % 100)) `<br>[调用处 SpaceOvercompressorBlockEntity.displayStoredMass](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SpaceOvercompressorBlockEntity.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L86) |
| ` public Ingredient getIngredient() ` | 获取配方原料<br>返回 配方原料<br>末尾返回 ` this.ingredient ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L99) |
| ` @Override public RecipeType<?> getType() ` | 获取配方类型<br>返回 配方类型<br>末尾返回 ` ModRecipeTypes.MASS_INJECT_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L108) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 获取配方序列化器<br>返回 配方序列化器<br>末尾返回 ` ModRecipeTypes.MASS_INJECT_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L118) |
| ` @Override public boolean matches(SingleRecipeInput input, Level level) ` | 判断配方是否匹配给定的输入和世界<br>参数 ` input ` 配方输入<br>参数 ` level ` 世界<br>返回 是否匹配<br>末尾返回 ` this.ingredient.test(input.item()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L130) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 获取配方结果物品堆<br>参数 ` registries ` 注册表提供器<br>返回 配方结果物品堆<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L141) |
| ` @Override public ItemStack assemble(SingleRecipeInput input, HolderLookup.Provider registries) ` | 组装配方结果<br>参数 ` input ` 配方输入<br>参数 ` registries ` 注册表提供器<br>返回 配方结果物品堆<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L153) |
| ` @Override public boolean isSpecial() ` | 判断是否为特殊配方<br>返回 是否为特殊配方<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L163) |
| ` public int getMass() ` | 质量值<br>末尾返回 ` this.mass `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L39) |

## MassInjectRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<MassInjectRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L221)

质量注入配方构建器类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder requires(Ingredient ingredient) ` | 设置配方原料<br>参数 ` ingredient ` 配方原料<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L249) |
| ` public Builder requires(ItemLike item) ` | 设置配方原料<br>参数 ` item ` 物品<br>返回 构建器实例<br>末尾返回 ` this.requires(Ingredient.of(item)) `<br>实现调用 ` BuiltInRegistries.ITEM.getKey(item.asItem()).toString().replace(':', '_') `<br>实现调用 ` BuiltInRegistries.ITEM.getKey(item.asItem()).toString() `<br>实现调用 ` BuiltInRegistries.ITEM.getKey(item.asItem()) `<br>实现调用 ` item.asItem() `<br>实现调用 ` this.requires(Ingredient.of(item)) `<br>实现调用 ` Ingredient.of(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L260) |
| ` public Builder requires(TagKey<Item> tag) ` | 设置配方原料标签<br>参数 ` tag ` 物品标签<br>返回 构建器实例<br>末尾返回 ` this.requires(Ingredient.of(tag)) `<br>实现调用 ` tag.location().toString().replace(':', '_') `<br>实现调用 ` tag.location().toString() `<br>实现调用 ` tag.location() `<br>实现调用 ` this.requires(Ingredient.of(tag)) `<br>实现调用 ` Ingredient.of(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L271) |
| ` public Builder mass(int mass) ` | 设置质量值<br>参数 ` mass ` 质量值<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L283) |
| ` @Override public MassInjectRecipe buildRecipe() ` | 构建配方<br>返回 质量注入配方实例<br>末尾返回 ` new MassInjectRecipe(this.ingredient, this.mass) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L293) |
| ` @Override public void validate(ResourceLocation id) ` | 验证配方参数<br>参数 ` id ` 配方ID<br>` (this.ingredient == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredient must not be null, RecipeId: " + id) `<br>` (this.mass <= 0) ` 成立时抛出 ` new IllegalArgumentException("Mass value must be non-negative, RecipeId: " + id + "value: " + this.mass) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L303) |
| ` @Override public String getType() ` | 获取配方类型<br>返回 配方类型<br>末尾返回 ` "mass_inject" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L319) |
| ` @Override public Item getResult() ` | 获取配方结果物品<br>返回 配方结果物品<br>末尾返回 ` Items.AIR ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L329) |
| ` @Override public void save(RecipeOutput recipeOutput) ` | 保存配方<br>参数 ` recipeOutput ` 配方输出<br>分支 ` (this.defaultId == null) ` 内调用 ` Integer.toHexString(this.hashCode()) `<br>分支 ` (this.defaultId == null) ` 内调用 ` this.hashCode() `<br>实现调用 ` this.save(recipeOutput, AnvilCraft.of("mass_inject/" + this.defaultId)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L339) |
| ` @Override public void save(RecipeOutput output, ResourceLocation id) ` | 保存配方到指定位置<br>参数 ` output ` 配方输出<br>参数 ` id ` 配方ID<br>分支 ` (this.tagCondition != null) ` 内调用 ` output.withConditions(new NotCondition(new TagEmptyCondition(this.tagCondition))) `<br>实现调用 ` super.save(output, id) `<br>[调用处 MassInjectRecipe.Builder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L342) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L351) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L221) |

## MassInjectRecipe.Serializer

` public static class Serializer implements RecipeSerializer<MassInjectRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L171)

质量注入配方序列化器类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MassInjectRecipe> CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L175) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MassInjectRecipe> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.composite(Ingredient.CONTENTS_STREAM_CODEC, m -> m.ingredient, ByteBufCodecs.VAR_INT, MassInjectRecipe::getMass, MassInjectRecipe::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L188) |
| ` @Override public MapCodec<MassInjectRecipe> codec() ` | 获取Map编解码器<br>返回 Map编解码器<br>末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L202) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MassInjectRecipe> streamCodec() ` | 获取流编解码器<br>返回 流编解码器<br>末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L212) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L171) |

## StampingUniqueItemsRecipe

` public class StampingUniqueItemsRecipe implements Recipe<ItemProcessInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final NonNullList<Ingredient> ingredients ` | 字段类型为 ` NonNullList<Ingredient> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L36) |
| ` public final List<Object2IntMap.Entry<Ingredient>> mergedIngredients ` | 字段类型为 ` List<Object2IntMap.Entry<Ingredient>> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L37) |
| ` public final List<ChanceItemStack> results ` | 字段类型为 ` List<ChanceItemStack> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L38) |
| ` public final boolean isSimple ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L39) |
| ` public StampingUniqueItemsRecipe( NonNullList<Ingredient> ingredients, List<ChanceItemStack> results ) ` | 实现调用 ` RecipeUtil.mergeIngredient(ingredients) `<br>实现调用 ` ingredients.stream().allMatch(Ingredient::isSimple) `<br>实现调用 ` ingredients.stream() `<br>[调用处 StampingUniqueItemsRecipe.Serializer.decode](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L133) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L43) |
| ` public static Builder builderUnique() ` | 末尾返回 ` new Builder() `<br>[调用处 StampingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L53) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L57) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 末尾返回 ` this.results.isEmpty() ? ItemStack.EMPTY : this.results.getFirst().stack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L62) |
| ` @Override public ItemStack assemble(ItemProcessInput input, HolderLookup.Provider registries) ` | 末尾返回 ` this.results.isEmpty() ? ItemStack.EMPTY : this.results.getFirst().stack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L67) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L72) |
| ` @Override public boolean matches(ItemProcessInput input, Level level) ` | ` (input.items().size() != Set.copyOf(Lists.transform(input.items(), ItemStack::getItem)).size()) ` 成立时提前返回 ` false `<br>` (input.items().size() != this.ingredients.size()) ` 成立时提前返回 ` false `<br>` (!CollectionUtil.allMatch(input.items(), itemStack -> itemStack.getCount() == 1)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L77) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.STAMPING_UNIQUE_ITEMS_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L90) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.STAMPING_UNIQUE_ITEMS_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L95) |
| ` public int getMaxCraftTime() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L100) |
| ` public NonNullList<Ingredient> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34) |
| ` public List<Object2IntMap.Entry<Ingredient>> getMergedIngredients() ` | 末尾返回 ` this.mergedIngredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34) |
| ` public List<ChanceItemStack> getResults() ` | 末尾返回 ` this.results `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34) |
| ` public boolean isSimple() ` | 末尾返回 ` this.isSimple `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34) |
| ` public ItemProcessInput getCacheInput() ` | 末尾返回 ` this.cacheInput `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34) |
| ` public int getCacheMaxCraftTime() ` | 末尾返回 ` this.cacheMaxCraftTime `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L34) |

## StampingUniqueItemsRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<StampingUniqueItemsRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L148)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder requires(Ingredient ingredient, int count) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(ingredient) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L154) |
| ` public Builder requires(Ingredient ingredient) ` | 末尾返回 ` this.requires(ingredient, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L161) |
| ` public Builder requires(ItemLike item, int count) ` | 末尾返回 ` this.requires(Ingredient.of(item), count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L165) |
| ` public Builder requires(ItemLike item) ` | 末尾返回 ` this.requires(item, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L169) |
| ` public Builder requires(TagKey<Item> tag, int count) ` | 末尾返回 ` this.requires(Ingredient.of(tag), count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L173) |
| ` public Builder requires(TagKey<Item> tag) ` | 末尾返回 ` this.requires(tag, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L177) |
| ` public Builder result(ChanceItemStack stack) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.results.add(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L181) |
| ` public Builder result(ItemStack stack) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.results.add(ChanceItemStack.of(stack)) `<br>实现调用 ` ChanceItemStack.of(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L186) |
| ` public Builder result(ItemLike item) ` | 末尾返回 ` this.result(item.asItem().getDefaultInstance()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L191) |
| ` public Builder result(ItemLike item, int count) ` | 末尾返回 ` this.result(stack) `<br>实现调用 ` item.asItem().getDefaultInstance() `<br>实现调用 ` item.asItem() `<br>实现调用 ` stack.setCount(count) `<br>实现调用 ` this.result(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L195) |
| ` public Builder result(ItemLike item, int count, float chance) ` | 末尾返回 ` this.result(ChanceItemStack.of(stack, chance)) `<br>实现调用 ` item.asItem().getDefaultInstance() `<br>实现调用 ` item.asItem() `<br>实现调用 ` stack.setCount(count) `<br>实现调用 ` this.result(ChanceItemStack.of(stack, chance)) `<br>实现调用 ` ChanceItemStack.of(stack, chance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L201) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.ingredients.isEmpty() \|\| this.ingredients.size() > 9) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients size must in 0-9, RecipeId: " + id) `<br>` (this.results.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe results must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L207) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.results.getFirst().stack().getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L217) |
| ` @Override public StampingUniqueItemsRecipe buildRecipe() ` | 末尾返回 ` new StampingUniqueItemsRecipe(this.ingredients, this.results) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L222) |
| ` @Override public String getType() ` | 末尾返回 ` "stamping_unique_items" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L227) |
| ` public boolean isGenerated() ` | 末尾返回 ` this.generated `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L148) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L148) |

## StampingUniqueItemsRecipe.Serializer

` public static class Serializer implements RecipeSerializer<StampingUniqueItemsRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L104)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<StampingUniqueItemsRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L114) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, StampingUniqueItemsRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L119) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L104) |
