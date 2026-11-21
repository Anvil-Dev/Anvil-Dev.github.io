# dev.dubhe.anvilcraft.recipe（FluidMixingRecipe.Input 至 NeutroniumChargingRecipe）



## FluidMixingRecipe.Input

` public record Input(List<FluidStack> fluids) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L198)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Input(List<FluidStack> fluids) ` | 执行 ` fluids = FluidMixingRecipe.copyFluids(fluids) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L199) |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L203) |
| ` @Override public int size() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L208) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` this.fluids.stream().allMatch(FluidStack::isEmpty) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L213) |
| ` public List<FluidStack> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L198) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L198) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L198) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L198) |

## IDatagen

` public interface IDatagen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/IDatagen.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` String toDatagen() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/IDatagen.java#L4) |
| ` default String getSuggestedName() ` | 末尾返回 ` Integer.toHexString(this.hashCode()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/IDatagen.java#L6) |

## JewelCraftingRecipe

` public final class JewelCraftingRecipe implements Recipe<JewelCraftingRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<JewelCraftingRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<JewelCraftingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L46) |
| ` public JewelCraftingRecipe(List<ICondition> conditions, List<Ingredient> ingredients, ItemStackTemplate result, boolean curse) ` | ` (ingredients.isEmpty() \|\| ingredients.size() > 256 \|\| this.mergedIngredients.size() > 4) ` 成立时抛出 ` new IllegalArgumentException("Jewel recipes require 1-256 ingredients in at most four groups") `<br>[调用处 JewelCraftingRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L61) |
| ` public static Builder builder(HolderGetter<Item> items) ` | 末尾返回 ` new Builder(items) `<br>[调用处 JewelCraftingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L72) |
| ` @Override public RecipeType<JewelCraftingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.JEWEL_CRAFTING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L76) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L81) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L86) |
| ` @Override public RecipeSerializer<JewelCraftingRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L91) |
| ` @Override public ItemStack assemble(Input input) ` | 末尾返回 ` this.result.create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L96) |
| ` @Override public boolean matches(Input input, Level level) ` | 末尾返回 ` RecipeUtil.getMaxCraftTime(input, this.ingredients) >= 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L101) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L106) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L111) |
| ` @Override public String group() ` | 末尾返回 ` "jewel_crafting" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L116) |
| ` public List<ICondition> conditions() ` | 末尾返回 ` this.conditions `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L37) |
| ` public List<Ingredient> ingredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L37) |
| ` public ItemStackTemplate result() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L37) |
| ` public boolean hasVanishingCurse() ` | 末尾返回 ` this.hasVanishingCurse `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L37) |
| ` public List<Object2IntMap.Entry<Ingredient>> mergedIngredients() ` | 末尾返回 ` this.mergedIngredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L37) |

## JewelCraftingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<JewelCraftingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L133)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder(HolderGetter<Item> items) ` | 执行 ` this.items = items ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L142) |
| ` public Builder withCondition(ICondition condition) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.conditions.add(condition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L146) |
| ` public Builder requires(Ingredient ingredient, int count) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(ingredient) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L151) |
| ` public Builder requires(Ingredient ingredient) ` | 末尾返回 ` this.requires(ingredient, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L156) |
| ` public Builder requires(ItemLike item, int count) ` | 末尾返回 ` this.requires(Ingredient.of(item), count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L160) |
| ` public Builder requires(ItemLike item) ` | 末尾返回 ` this.requires(item, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L164) |
| ` public Builder requires(TagKey<Item> tag, int count) ` | 末尾返回 ` this.requires(Ingredient.of(this.items.getOrThrow(tag)), count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L168) |
| ` public Builder requires(TagKey<Item> tag) ` | 末尾返回 ` this.requires(tag, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L172) |
| ` public Builder result(ItemStack stack) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` ItemStackTemplate.fromNonEmptyStack(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L176) |
| ` public Builder result(ItemLike item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` item.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L181) |
| ` @Override public JewelCraftingRecipe buildRecipe() ` | 末尾返回 ` new JewelCraftingRecipe(this.conditions, this.ingredients, this.getResult(), this.hasVanishingCurse) `<br>[调用处 JewelCraftingRecipe.Builder.validate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L193) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L186) |
| ` @Override public void validate(Identifier id) ` | 执行 ` this.buildRecipe() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L191) |
| ` @Override public String getType() ` | 末尾返回 ` "jewel_crafting" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L196) |
| ` @Override public ItemStackTemplate getResult() ` | ` (this.result == null) ` 成立时抛出 ` new IllegalStateException("Jewel recipe result must not be empty") `<br>末尾返回 ` this.result `<br>[调用处 JewelCraftingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L201) |
| ` public JewelCraftingRecipe.Builder hasVanishingCurse(final boolean hasVanishingCurse) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L133) |

## JewelCraftingRecipe.Input

` public record Input(ItemStack source, List<ItemStack> items) implements RecipeInput, IItemsInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` this.items.get(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L122) |
| ` @Override public int size() ` | 末尾返回 ` this.items.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L127) |
| ` public Input(ItemStack source, List<ItemStack> items) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121) |
| ` public ItemStack source() ` | 读取 record 分量 ` source ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121) |
| ` public List<ItemStack> items() ` | 读取 record 分量 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L121) |

## LaserHitRecipe

` public class LaserHitRecipe implements Recipe<LaserHitRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<LaserHitRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L40) |
| ` public static final RecipeSerializer<LaserHitRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>(CODEC, ByteBufCodecs.fromCodecWithRegistries(CODEC.codec())) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L53) |
| ` public LaserHitRecipe( BlockStatePredicate input, Optional<Identifier> dimension, int laserStrength, int hitTime, List<ItemStackTemplate> resultItems, BlockState resultBlock, boolean useBlockLoot, boolean requiresLens, int priority ) ` | 执行 ` this(input, dimension, laserStrength, hitTime, resultItems, resultBlock, useBlockLoot, requiresLens, priority, LaserType.NORMAL, 0) `<br>[调用处 LaserHitRecipeLoader.tiers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L75) |
| ` public LaserHitRecipe( BlockStatePredicate input, Optional<Identifier> dimension, int laserStrength, int hitTime, List<ItemStackTemplate> resultItems, BlockState resultBlock, boolean useBlockLoot, boolean requiresLens, int priority, LaserType laserType, int heatDuration ) ` | ` (laserStrength < 1 \|\| hitTime < 1) ` 成立时抛出 ` new IllegalArgumentException("Laser strength and mining time must be positive") `<br>[调用处 LaserHitRecipeLoader.heating](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L82) |
| ` @Override public boolean matches(Input input, Level level) ` | 实现调用 ` input.strength() `<br>实现调用 ` input.gamma() `<br>实现调用 ` input.lens() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L101) |
| ` public static Optional<RecipeHolder<LaserHitRecipe>> find(ServerLevel level, Input input) ` | 末尾返回 ` level.getServer().getRecipeManager().recipeMap().byType(ModRecipeTypes.LASER_HIT.get()).stream().filter(holder -> holder.value().matches(input, level)).min(MATCH_ORDER) `<br>[调用处 LaserHitBehavior.onHitBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L110) |
| ` public List<ItemStack> createDrops(ServerLevel level, BlockPos pos, BlockMiningEffect effect) ` | 末尾返回 ` drops ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L116) |
| ` public void applyHeat(ServerLevel level, BlockPos pos) ` | 实现调用 ` level.getBlockEntity(pos) `<br>实现调用 ` heatable.addDurationInTick(this.heatDuration) `<br>实现调用 ` HeaterManager.addHeatableBlock(pos, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L123) |
| ` @Override public ItemStack assemble(Input input) ` | 末尾返回 ` this.resultItems.isEmpty() ? ItemStack.EMPTY : this.resultItems.getFirst().create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L141) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L146) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L151) |
| ` @Override public String group() ` | 末尾返回 ` "laser_hit" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L156) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L161) |
| ` @Override public RecipeSerializer<LaserHitRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L166) |
| ` @Override public RecipeType<LaserHitRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.LASER_HIT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L171) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L176) |
| ` public BlockStatePredicate getInput() ` | 末尾返回 ` this.input `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public Optional<Identifier> getDimension() ` | 末尾返回 ` this.dimension `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public int getLaserStrength() ` | 末尾返回 ` this.laserStrength `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public int getHitTime() ` | 末尾返回 ` this.hitTime `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public List<ItemStackTemplate> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public BlockState getResultBlock() ` | 末尾返回 ` this.resultBlock `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public boolean isUseBlockLoot() ` | 末尾返回 ` this.useBlockLoot `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public boolean isRequiresLens() ` | 末尾返回 ` this.requiresLens `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public int getPriority() ` | 末尾返回 ` this.priority `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public LaserType getLaserType() ` | 末尾返回 ` this.laserType `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |
| ` public int getHeatDuration() ` | 末尾返回 ` this.heatDuration `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L38) |

## LaserHitRecipe.Input

` public record Input(BlockPos pos, BlockState state, int strength, boolean lens, boolean gamma) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Input(BlockPos pos, BlockState state, int strength, boolean lens) ` | 执行 ` this(pos, state, strength, lens, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L182) |
| ` @Override public ItemStack getItem(int index) ` | ` (index != 0) ` 成立时抛出 ` new IndexOutOfBoundsException(index) `<br>末尾返回 ` new ItemStack(this.state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L186) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L192) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L197) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public int strength() ` | 读取 record 分量 ` strength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public boolean lens() ` | 读取 record 分量 ` lens ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L181) |

## LaserHitRecipe.LaserType

` public enum LaserType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L130)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NORMAL ` | 声明于枚举 ` LaserHitRecipe.LaserType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L131) |
| ` GAMMA ` | 声明于枚举 ` LaserHitRecipe.LaserType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L131) |
| ` public static final Codec<LaserType> CODEC ` | 初值 ` StringRepresentable.fromEnum(LaserType::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L133) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L135) |
| ` public static LaserType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L130) |
| ` public static LaserType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L130) |

## LiquidEnchantmentCauldronRecipe

` public final class LiquidEnchantmentCauldronRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Optional<Result> match(List<FluidStack> fluids, ItemStack item, boolean heated) ` | 匹配并模拟一次液态魔咒特殊反应，调用方确认输出空间后再提交结果。<br>` (item.is(ModItemTags.SILVER_NUGGETS)) ` 成立时提前返回 ` LiquidEnchantmentCauldronRecipe.cleanse(fluids) `<br>末尾返回 ` Optional.empty() `<br>[调用处 LargeCauldronBlockEntity.tryProcessLiquidEnchantmentRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L672) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L28) |

## LiquidEnchantmentCauldronRecipe.Result

` public record Result(List<FluidStack> fluids, int itemCost, ItemStack itemResult, boolean consumesHeat) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(List<FluidStack> fluids, int itemCost, ItemStack itemResult, boolean consumesHeat) ` | 实现调用 ` fluids.stream().map(FluidStack::copy).toList() `<br>实现调用 ` fluids.stream().map(FluidStack::copy) `<br>实现调用 ` fluids.stream() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L165) |
| ` public List<FluidStack> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |
| ` public int itemCost() ` | 读取 record 分量 ` itemCost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |
| ` public ItemStack itemResult() ` | 读取 record 分量 ` itemResult ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |
| ` public boolean consumesHeat() ` | 读取 record 分量 ` consumesHeat ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L164) |

## NeutroniumChargingRecipe

` public final class NeutroniumChargingRecipe extends ShapedRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<ShapedRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<ShapedRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L19) |
| ` public NeutroniumChargingRecipe(ShapedRecipe recipe) ` | 执行 ` super(new CommonInfo(recipe.showNotification()), new CraftingBookInfo(recipe.category(), recipe.group()), recipe.pattern, recipe.result) `<br>[调用处 NeutroniumChargingRecipe.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L24) |
| ` @Override public RecipeSerializer<ShapedRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L29) |
| ` @Override public ItemStack assemble(CraftingInput input) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L34) |
| ` public static ItemStack preserveEnchantments(ItemStack source, ItemStack result) ` | 末尾返回 ` result `<br>[调用处 ChargerChargingRecipe.assemble](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L44) |
| ` public static RecipeOutput output(RecipeOutput delegate) ` | [调用处 RegistrumItemRecipeLoader.chargedNeutroniumIngot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L1534) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L52) |
