# dev.dubhe.anvilcraft.recipe（LiquidEnchantmentCauldronRecipe.Result 至 PortalConversionRecipe.Serializer）



## LiquidEnchantmentCauldronRecipe.Result

` public record Result(List<FluidStack> fluids, int itemCost, ItemStack itemResult, boolean consumesHeat) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(List<FluidStack> fluids, int itemCost, ItemStack itemResult, boolean consumesHeat) ` | 实现调用 ` fluids.stream().map(FluidStack::copy).toList() `<br>实现调用 ` fluids.stream().map(FluidStack::copy) `<br>实现调用 ` fluids.stream() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L152) |
| ` public List<FluidStack> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |
| ` public int itemCost() ` | 读取 record 分量 ` itemCost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |
| ` public ItemStack itemResult() ` | 读取 record 分量 ` itemResult ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |
| ` public boolean consumesHeat() ` | 读取 record 分量 ` consumesHeat ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/LiquidEnchantmentCauldronRecipe.java#L151) |

## NeutroniumChargingRecipe

` public class NeutroniumChargingRecipe extends ShapedRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NeutroniumChargingRecipe(ShapedRecipe recipe) ` | 执行 ` super(recipe.getGroup(), recipe.category(), recipe.pattern, recipe.result, recipe.showNotification()) `<br>[调用处 ShapedRecipeLoader.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L75) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L17) |
| ` @Override public ItemStack assemble(CraftingInput input, HolderLookup.Provider registries) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L21) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.NEUTRONIUM_CHARGING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L33) |

## NeutroniumChargingRecipe.Serializer

` public static class Serializer implements RecipeSerializer<NeutroniumChargingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<NeutroniumChargingRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L44) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, NeutroniumChargingRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L49) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java#L38) |

## PillRecipe

` public class PillRecipe extends CustomRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PillRecipe(CraftingBookCategory category) ` | 执行 ` super(category) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L26) |
| ` @SuppressWarnings("deprecation") public boolean validatePotion(ItemStack item) ` | 实现调用 ` item.getOrDefault(DataComponents.POTION_CONTENTS, PotionContents.EMPTY) `<br>实现调用 ` potionContents.potion() `<br>实现调用 ` item.is(Items.POTION) `<br>[调用处 PillRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L36) |
| ` @Override public boolean matches(CraftingInput input, Level level) ` | ` (items.size() != 2) ` 成立时提前返回 ` false `<br>末尾返回 ` pillCount == 1 && potionCount == 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L52) |
| ` @Override public ItemStack assemble(CraftingInput input, HolderLookup.Provider registries) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L75) |
| ` @Override public NonNullList<ItemStack> getRemainingItems(CraftingInput input) ` | 末尾返回 ` nonnulllist ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L92) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` width * height >= 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L110) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.PILL_RECIPE_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java#L115) |

## PortalConversionRecipe

` public class PortalConversionRecipe implements Recipe<PortalConversionRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<PortalConversionRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L41) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PortalConversionRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L51) |
| ` public PortalConversionRecipe(PortalType type, BlockStatePredicate input, ChanceBlockState result) ` | [调用处 PortalConversionRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L263) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L64) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 PortalConversionRecipeLoader.spectral](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L70) |
| ` @Override public boolean matches(Input input, Level level) ` | 末尾返回 ` this.type.equals(input.type) && this.input.testOffThread(input.entity().blockState, input.entity().blockData) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L74) |
| ` @Deprecated @Override public ItemStack assemble(Input input, HolderLookup.Provider registries) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L80) |
| ` @Deprecated @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L86) |
| ` @Deprecated @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 末尾返回 ` new ItemStack(this.result.state().getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L92) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.PORTAL_CONVERSION_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L98) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.PORTAL_CONVERSION_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L103) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L108) |
| ` public PortalType getPortalType() ` | 末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L113) |
| ` public BlockStatePredicate getInput() ` | 末尾返回 ` this.input `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L39) |
| ` public ChanceBlockState getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L39) |

## PortalConversionRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<PortalConversionRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L141)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder type(ResourceLocation id) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L149) |
| ` public Builder type(PortalType type) ` | 末尾返回 ` this.type(type.getId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L154) |
| ` @SuppressWarnings("deprecation") public <T extends Block & Portal> Builder type(T portal) ` | 末尾返回 ` this.type(portal.builtInRegistryHolder().key().location()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L158) |
| ` public Builder input(Block... blocks) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.of(blocks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L163) |
| ` @SafeVarargs public final Builder input(Supplier<? extends Block>... blocks) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.of(blocks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L168) |
| ` public Builder input(Collection<Block> blocks) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.of(blocks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L174) |
| ` public Builder input(TagKey<Block> tag) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.of(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L179) |
| ` public Builder inputWith(BlockState state) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.with(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L184) |
| ` public Builder inputWith(Property<?> property, String value) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.with(property, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L189) |
| ` public Builder inputWith(Property<Integer> property, int value) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.with(property, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L194) |
| ` public Builder inputWith(Property<Boolean> property, boolean value) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.with(property, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L199) |
| ` public <T extends Comparable<T>> Builder inputWith(Property<T> property, T value) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.with(property, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L204) |
| ` public <T extends Comparable<T>> Builder inputWith(Property<T> property, @Nullable T minValue, @Nullable T maxValue) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.with(property, minValue, maxValue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L209) |
| ` public <T extends Comparable<T>> Builder inputWithMin(Property<T> property, @Nullable T minValue) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.withMin(property, minValue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L214) |
| ` public <T extends Comparable<T>> Builder inputWithMax(Property<T> property, @Nullable T maxValue) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.withMax(property, maxValue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L219) |
| ` public Builder inputOr() ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.or() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L224) |
| ` public Builder inputNbt(CompoundTag tag) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.input.nbt(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L229) |
| ` public Builder result(ChanceBlockState result) ` | 返回当前实例，可继续链式调用。<br>[调用处 PortalConversionRecipe.Builder.result](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L240) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L234) |
| ` public Builder result(BlockState state, float chance) ` | 末尾返回 ` this.result(new ChanceBlockState(state, chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L239) |
| ` public Builder result(BlockState state, NumberProvider chance) ` | 末尾返回 ` this.result(new ChanceBlockState(state, chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L243) |
| ` public Builder result(BlockState state, CompoundTag nbt, NumberProvider chance) ` | 末尾返回 ` this.result(new ChanceBlockState(state, nbt, chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L247) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.typeId == null) ` 成立时抛出 ` new IllegalArgumentException("The portal type of portal conversion recipe cannot be null. Recipe id: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("The result of portal conversion recipe cannot be null. Recipe id: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L251) |
| ` @Override public PortalConversionRecipe buildRecipe() ` | 末尾返回 ` new PortalConversionRecipe(new PortalType(this.typeId), this.input.build(), Objects.requireNonNull(this.result)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L261) |
| ` @Override public String getType() ` | 末尾返回 ` "portal_conversion" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L266) |
| ` @Override public Item getResult() ` | 末尾返回 ` Objects.requireNonNull(this.result).state().getBlock().asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L271) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L141) |

## PortalConversionRecipe.Input

` public record Input(PortalType type, FallingBlockEntity entity) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` this.entity.getBlockState().getBlock().asItem().getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L118) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L123) |
| ` public Input(PortalType type, FallingBlockEntity entity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117) |
| ` public PortalType type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117) |
| ` public FallingBlockEntity entity() ` | 读取 record 分量 ` entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L117) |

## PortalConversionRecipe.Serializer

` public static class Serializer implements RecipeSerializer<PortalConversionRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L129)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<PortalConversionRecipe> codec() ` | 末尾返回 ` PortalConversionRecipe.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L130) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, PortalConversionRecipe> streamCodec() ` | 末尾返回 ` PortalConversionRecipe.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L135) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L129) |
