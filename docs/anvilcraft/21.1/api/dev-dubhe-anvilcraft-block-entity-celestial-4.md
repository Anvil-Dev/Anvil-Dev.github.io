# dev.dubhe.anvilcraft.block.entity.celestial（PlanetResourceInput 至 PlanetResourceRecipe.MineralData）



## PlanetResourceInput

` public record PlanetResourceInput(CelestialBodyData body, int ageAnvilCount) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @NotNull ItemStack getItem(int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L11) |
| ` @Override public int size() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L16) |
| ` public PlanetResourceInput(CelestialBodyData body, int ageAnvilCount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9) |
| ` public CelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9) |
| ` public int ageAnvilCount() ` | 读取 record 分量 ` ageAnvilCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceInput.java#L9) |

## PlanetResourceRecipe

` public record PlanetResourceRecipe(Category category, Optional<MineralData> mineral, Optional<FluidData> fluid, Optional<GiantData> giant, Optional<BiologicalData> biological, Optional<OfferingData> offering, Optional<WastelandData> wasteland) implements Recipe<PlanetResourceInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<WeightedEntry> entries(Consumer<EntriesBuilder> consumer) ` | 末尾返回 ` builder.build() `<br>[调用处 PlanetResourceRecipeLoader.createGiantItemRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L172) |
| ` public static Builder builder(Category category) ` | Fluent construction API used by data generators and add-ons.<br>末尾返回 ` new Builder(category) `<br>[调用处 PlanetResourceRecipeLoader.createMineralRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L442) |
| ` public static final MapCodec<PlanetResourceRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L504) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PlanetResourceRecipe> STREAM_CODEC ` | 字段类型为 ` StreamCodec<RegistryFriendlyByteBuf, PlanetResourceRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L516) |
| ` @Override public boolean matches(PlanetResourceInput input, @NotNull Level level) ` | 实现调用 ` input.body() `<br>实现调用 ` this.fluid.orElse(null) `<br>实现调用 ` fd.planetType.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L543) |
| ` @Override public @NotNull ItemStack assemble(@NotNull PlanetResourceInput input, HolderLookup.@NotNull Provider registries) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L576) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L581) |
| ` @Override public @NotNull ItemStack getResultItem(HolderLookup.@NotNull Provider registries) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L586) |
| ` @Override public @NotNull RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.PLANET_RESOURCE_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L591) |
| ` @Override public @NotNull RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.PLANET_RESOURCE_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L596) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L601) |
| ` public MineralData mineralData() ` | 末尾返回 ` this.mineral.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L608) |
| ` public FluidData fluidData() ` | 末尾返回 ` this.fluid.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L612) |
| ` public GiantData giantData() ` | 末尾返回 ` this.giant.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L616) |
| ` public BiologicalData biologicalData() ` | 末尾返回 ` this.biological.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L620) |
| ` public OfferingData offeringData() ` | 末尾返回 ` this.offering.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L624) |
| ` public WastelandData wastelandData() ` | 末尾返回 ` this.wasteland.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L628) |
| ` public PlanetResourceRecipe(Category category, Optional<MineralData> mineral, Optional<FluidData> fluid, Optional<GiantData> giant, Optional<BiologicalData> biological, Optional<OfferingData> offering, Optional<WastelandData> wasteland) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L37) |
| ` public Category category() ` | 读取 record 分量 ` category ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L38) |
| ` public Optional<MineralData> mineral() ` | 读取 record 分量 ` mineral ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L39) |
| ` public Optional<FluidData> fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L40) |
| ` public Optional<GiantData> giant() ` | 读取 record 分量 ` giant `<br>[调用处 PlanetResourceRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L566) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L41) |
| ` public Optional<BiologicalData> biological() ` | 读取 record 分量 ` biological ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L42) |
| ` public Optional<OfferingData> offering() ` | 读取 record 分量 ` offering ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L43) |
| ` public Optional<WastelandData> wasteland() ` | 读取 record 分量 ` wasteland ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L44) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L37) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L37) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L37) |

## PlanetResourceRecipe.BiologicalData

` public record BiologicalData(LifeChances lifeChances, String landEntityTag, String aquaticEntityTag, String dropDenylistTag, List<WeightedEntry> mildExtraFluids) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L366)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BiologicalData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L369) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BiologicalData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L379) |
| ` public BiologicalData(LifeChances lifeChances, String landEntityTag, String aquaticEntityTag, String dropDenylistTag, List<WeightedEntry> mildExtraFluids) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L366) |
| ` public LifeChances lifeChances() ` | 读取 record 分量 ` lifeChances ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L367) |
| ` public String landEntityTag() ` | 读取 record 分量 ` landEntityTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L367) |
| ` public String aquaticEntityTag() ` | 读取 record 分量 ` aquaticEntityTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L367) |
| ` public String dropDenylistTag() ` | 读取 record 分量 ` dropDenylistTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L367) |
| ` public List<WeightedEntry> mildExtraFluids() ` | 读取 record 分量 ` mildExtraFluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L367) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L366) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L366) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L366) |

## PlanetResourceRecipe.Builder

` public static final class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L446)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder mineral(MineralData mineral) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(mineral)) `<br>实现调用 ` Objects.requireNonNull(mineral) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L459) |
| ` public Builder fluid(FluidData fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(fluid)) `<br>实现调用 ` Objects.requireNonNull(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L464) |
| ` public Builder giant(GiantData giant) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(giant)) `<br>实现调用 ` Objects.requireNonNull(giant) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L469) |
| ` public Builder biological(BiologicalData biological) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(biological)) `<br>实现调用 ` Objects.requireNonNull(biological) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L474) |
| ` public Builder offering(OfferingData offering) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(offering)) `<br>实现调用 ` Objects.requireNonNull(offering) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L479) |
| ` public Builder wasteland(WastelandData wasteland) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(wasteland)) `<br>实现调用 ` Objects.requireNonNull(wasteland) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L484) |
| ` public PlanetResourceRecipe build() ` | 末尾返回 ` new PlanetResourceRecipe( this.category, this.mineral, this.fluid, this.giant, this.biological, this.offering, this.wasteland ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L489) |

## PlanetResourceRecipe.Category

` public enum Category `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` MINERAL ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L50) |
| ` FLUID ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L50) |
| ` GIANT_ITEM ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L50) |
| ` GIANT_FLUID ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L50) |
| ` BIOLOGICAL ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L50) |
| ` OFFERING ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L50) |
| ` WASTELAND ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L51) |
| ` public static final Codec<Category> CODEC ` | 初值 ` Codec.STRING.xmap(Category::fromName, Category::getSerializedName) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L53) |
| ` public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L61) |
| ` public static Category fromName(String name) ` | 实现调用 ` values() `<br>实现调用 ` value.name.equals(name) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L65) |
| ` public static Category[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L49) |
| ` public static Category valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L49) |

## PlanetResourceRecipe.ChoiceBuilder

` public static final class ChoiceBuilder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L214)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChoiceBuilder id(String id, int weight) ` | 末尾返回 ` this.id(ResourceLocation.parse(id), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L217) |
| ` public ChoiceBuilder id(ResourceLocation id, int weight) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.choices.add(new WeightedChoice(id.toString(), requirePositive(weight))) `<br>实现调用 ` id.toString() `<br>实现调用 ` requirePositive(weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L221) |
| ` public ChoiceBuilder item(ItemLike item, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.ITEM.getKey(Objects.requireNonNull(item).asItem()), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L226) |
| ` public ChoiceBuilder fluid(Fluid fluid, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.FLUID.getKey(Objects.requireNonNull(fluid)), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L230) |
| ` public ChoiceBuilder fluid(Supplier<? extends Fluid> fluid, int weight) ` | 末尾返回 ` this.fluid(Objects.requireNonNull(fluid).get(), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L234) |
| ` public ChoiceBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L214) |

## PlanetResourceRecipe.EntriesBuilder

` public static final class EntriesBuilder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L178)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntriesBuilder id(String id, int weight) ` | 末尾返回 ` this.id(ResourceLocation.parse(id), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L181) |
| ` public EntriesBuilder id(ResourceLocation id, int weight) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.entries.add(new WeightedEntry(id.toString(), requirePositive(weight))) `<br>实现调用 ` id.toString() `<br>实现调用 ` requirePositive(weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L185) |
| ` public EntriesBuilder item(ItemLike item, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.ITEM.getKey(Objects.requireNonNull(item).asItem()), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L190) |
| ` public EntriesBuilder fluid(Fluid fluid, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.FLUID.getKey(Objects.requireNonNull(fluid)), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L194) |
| ` public EntriesBuilder fluid(Supplier<? extends Fluid> fluid, int weight) ` | 末尾返回 ` this.fluid(Objects.requireNonNull(fluid).get(), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L198) |
| ` public EntriesBuilder chooseOne(int weight, Consumer<ChoiceBuilder> consumer) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` consumer.accept(builder) `<br>实现调用 ` this.entries.add(new WeightedEntry(builder.build(), requirePositive(weight))) `<br>实现调用 ` builder.build() `<br>实现调用 ` requirePositive(weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L202) |
| ` public List<WeightedEntry> build() ` | 末尾返回 ` List.copyOf(this.entries) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L209) |
| ` public EntriesBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L178) |

## PlanetResourceRecipe.FluidData

` public record FluidData(String planetType, String temperature, String liquidMin, String outputFluid) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<FluidData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L307) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FluidData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L314) |
| ` public FluidData(String planetType, String temperature, String liquidMin, Fluid outputFluid) ` | 执行 ` this( planetType, temperature, liquidMin, BuiltInRegistries.FLUID.getKey(Objects.requireNonNull(outputFluid)).toString() ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L326) |
| ` public FluidData( String planetType, String temperature, String liquidMin, Supplier<? extends Fluid> outputFluid ) ` | 执行 ` this(planetType, temperature, liquidMin, Objects.requireNonNull(outputFluid).get()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L335) |
| ` public String planetType() ` | 读取 record 分量 ` planetType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |
| ` public String temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |
| ` public String liquidMin() ` | 读取 record 分量 ` liquidMin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |
| ` public String outputFluid() ` | 读取 record 分量 ` outputFluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L306) |

## PlanetResourceRecipe.GiantData

` public record GiantData(List<WeightedEntry> entries, String pressureType) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<GiantData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L348) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, GiantData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( WeightedEntry.STREAM_CODEC.apply(ByteBufCodecs.list()), GiantData::entries, ByteBufCodecs.STRING_UTF8, GiantData::pressureType, GiantData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L355) |
| ` public GiantData(List<WeightedEntry> entries, String pressureType) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347) |
| ` public List<WeightedEntry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347) |
| ` public String pressureType() ` | 读取 record 分量 ` pressureType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L347) |

## PlanetResourceRecipe.LifeChances

` public record LifeChances(int cold, int hot, int mild) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final LifeChances DEFAULT ` | 初值 ` new LifeChances(5, 5, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L254) |
| ` public static final Codec<LifeChances> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L256) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, LifeChances> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, LifeChances::cold, ByteBufCodecs.INT, LifeChances::hot, ByteBufCodecs.INT, LifeChances::mild, LifeChances::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L262) |
| ` public int forTemperature(Temperature temp) ` | 末尾返回 ` switch (temp) { case COLD -> this.cold; case HOT -> this.hot; case MILD -> this.mild; default -> 0; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L272) |
| ` public LifeChances(int cold, int hot, int mild) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |
| ` public int cold() ` | 读取 record 分量 ` cold ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |
| ` public int hot() ` | 读取 record 分量 ` hot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |
| ` public int mild() ` | 读取 record 分量 ` mild ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L253) |

## PlanetResourceRecipe.MineralData

` public record MineralData(String sourceTag, String denylistTag, int step) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MineralData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L287) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MineralData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, MineralData::sourceTag, ByteBufCodecs.STRING_UTF8, MineralData::denylistTag, ByteBufCodecs.INT, MineralData::step, MineralData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L293) |
| ` public MineralData(String sourceTag, String denylistTag, int step) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
| ` public String sourceTag() ` | 读取 record 分量 ` sourceTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
| ` public String denylistTag() ` | 读取 record 分量 ` denylistTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
| ` public int step() ` | 读取 record 分量 ` step ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L286) |
