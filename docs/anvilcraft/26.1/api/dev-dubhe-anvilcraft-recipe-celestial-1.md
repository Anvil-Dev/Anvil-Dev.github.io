# dev.dubhe.anvilcraft.recipe.celestial（PlanetResourceInput 至 PlanetResourceRecipe.LifeChances）



## PlanetResourceInput

` public record PlanetResourceInput(CelestialBodyData body, int ageAnvilCount) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10)

PlanetResourceRecipe#matches 的输入，携带天体数据和时间砧子数量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L12) |
| ` @Override public int size() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L17) |
| ` public PlanetResourceInput(CelestialBodyData body, int ageAnvilCount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10) |
| ` public CelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10) |
| ` public int ageAnvilCount() ` | 读取 record 分量 ` ageAnvilCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceInput.java#L10) |

## PlanetResourceRecipe

` public record PlanetResourceRecipe(Category category, Optional<MineralData> mineral, Optional<FluidData> fluid, Optional<GiantData> giant, Optional<BiologicalData> biological, Optional<OfferingData> offering, Optional<WastelandData> wasteland) implements Recipe<PlanetResourceInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L42)

根据天体参数定义行星产出资源的配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<WeightedEntry> entries(Consumer<EntriesBuilder> consumer) ` | 末尾返回 ` builder.build() `<br>[调用处 PlanetResourceRecipeLoader.createGiantItemRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L160) |
| ` public static Builder builder(Category category) ` | 末尾返回 ` new Builder(category) `<br>[调用处 PlanetResourceRecipeLoader.createMineralRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L413) |
| ` public static final MapCodec<PlanetResourceRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L473) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PlanetResourceRecipe> STREAM_CODEC ` | 字段类型为 ` StreamCodec<RegistryFriendlyByteBuf, PlanetResourceRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L483) |
| ` public static final RecipeSerializer<PlanetResourceRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>( PlanetResourceRecipe.CODEC, PlanetResourceRecipe.STREAM_CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L508) |
| ` @Override public boolean matches(PlanetResourceInput input, Level level) ` | 实现调用 ` input.body() `<br>实现调用 ` this.fluid.orElse(null) `<br>实现调用 ` fd.planetType.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L512) |
| ` @Deprecated @Override public ItemStack assemble(PlanetResourceInput input) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L542) |
| ` @Override public RecipeType<PlanetResourceRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.PLANET_RESOURCE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L548) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L553) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L558) |
| ` @Override public RecipeSerializer<PlanetResourceRecipe> getSerializer() ` | 末尾返回 ` PlanetResourceRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L563) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L568) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L573) |
| ` @Override public String group() ` | 末尾返回 ` "planet_resource" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L578) |
| ` public @Nullable MineralData mineralData() ` | 末尾返回 ` this.mineral.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L583) |
| ` public @Nullable FluidData fluidData() ` | 末尾返回 ` this.fluid.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L587) |
| ` public @Nullable GiantData giantData() ` | 末尾返回 ` this.giant.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L591) |
| ` public @Nullable BiologicalData biologicalData() ` | 末尾返回 ` this.biological.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L595) |
| ` public @Nullable OfferingData offeringData() ` | 末尾返回 ` this.offering.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L599) |
| ` public @Nullable WastelandData wastelandData() ` | 末尾返回 ` this.wasteland.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L603) |
| ` public PlanetResourceRecipe(Category category, Optional<MineralData> mineral, Optional<FluidData> fluid, Optional<GiantData> giant, Optional<BiologicalData> biological, Optional<OfferingData> offering, Optional<WastelandData> wasteland) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L42) |
| ` public Category category() ` | 读取 record 分量 ` category ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L43) |
| ` public Optional<MineralData> mineral() ` | 读取 record 分量 ` mineral ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L44) |
| ` public Optional<FluidData> fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L45) |
| ` public Optional<GiantData> giant() ` | 读取 record 分量 ` giant `<br>[调用处 PlanetResourceRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L535) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L46) |
| ` public Optional<BiologicalData> biological() ` | 读取 record 分量 ` biological ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L47) |
| ` public Optional<OfferingData> offering() ` | 读取 record 分量 ` offering ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L48) |
| ` public Optional<WastelandData> wasteland() ` | 读取 record 分量 ` wasteland ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L49) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L42) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L42) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L42) |

## PlanetResourceRecipe.BiologicalData

` public record BiologicalData(LifeChances lifeChances, String landEntityTag, String aquaticEntityTag, String dropBlacklistTag, List<WeightedEntry> mildExtraFluids) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L342)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BiologicalData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L345) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BiologicalData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L355) |
| ` public BiologicalData(LifeChances lifeChances, String landEntityTag, String aquaticEntityTag, String dropBlacklistTag, List<WeightedEntry> mildExtraFluids) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L342) |
| ` public LifeChances lifeChances() ` | 读取 record 分量 ` lifeChances ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L343) |
| ` public String landEntityTag() ` | 读取 record 分量 ` landEntityTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L343) |
| ` public String aquaticEntityTag() ` | 读取 record 分量 ` aquaticEntityTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L343) |
| ` public String dropBlacklistTag() ` | 读取 record 分量 ` dropBlacklistTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L343) |
| ` public List<WeightedEntry> mildExtraFluids() ` | 读取 record 分量 ` mildExtraFluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L343) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L342) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L342) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L342) |

## PlanetResourceRecipe.Builder

` public static final class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L417)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder mineral(MineralData mineral) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(mineral)) `<br>实现调用 ` Objects.requireNonNull(mineral) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L430) |
| ` public Builder fluid(FluidData fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(fluid)) `<br>实现调用 ` Objects.requireNonNull(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L435) |
| ` public Builder giant(GiantData giant) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(giant)) `<br>实现调用 ` Objects.requireNonNull(giant) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L440) |
| ` public Builder biological(BiologicalData biological) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(biological)) `<br>实现调用 ` Objects.requireNonNull(biological) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L445) |
| ` public Builder offering(OfferingData offering) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(offering)) `<br>实现调用 ` Objects.requireNonNull(offering) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L450) |
| ` public Builder wasteland(WastelandData wasteland) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(Objects.requireNonNull(wasteland)) `<br>实现调用 ` Objects.requireNonNull(wasteland) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L455) |
| ` public PlanetResourceRecipe build() ` | 末尾返回 ` new PlanetResourceRecipe( this.category, this.mineral, this.fluid, this.giant, this.biological, this.offering, this.wasteland ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L460) |

## PlanetResourceRecipe.Category

` public enum Category `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` MINERAL ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L53) |
| ` FLUID ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L53) |
| ` GIANT_ITEM ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L53) |
| ` GIANT_FLUID ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L53) |
| ` BIOLOGICAL ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L53) |
| ` OFFERING ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L53) |
| ` WASTELAND ` | 声明于枚举 ` PlanetResourceRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L54) |
| ` public static final Codec<Category> CODEC ` | 初值 ` Codec.STRING.xmap(Category::fromName, Category::getSerializedName) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L56) |
| ` public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L64) |
| ` public static Category fromName(String name) ` | 实现调用 ` Category.values() `<br>实现调用 ` value.name.equals(name) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L68) |
| ` public static Category[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L52) |
| ` public static Category valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L52) |

## PlanetResourceRecipe.ChoiceBuilder

` public static final class ChoiceBuilder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L202)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChoiceBuilder id(String id, int weight) ` | 末尾返回 ` this.id(Identifier.parse(id), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L205) |
| ` public ChoiceBuilder id(Identifier id, int weight) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.choices.add(new WeightedChoice(id.toString(), requirePositive(weight))) `<br>实现调用 ` id.toString() `<br>实现调用 ` requirePositive(weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L209) |
| ` public ChoiceBuilder item(ItemLike item, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.ITEM.getKey(Objects.requireNonNull(item).asItem()), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L214) |
| ` public ChoiceBuilder fluid(Fluid fluid, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.FLUID.getKey(Objects.requireNonNull(fluid)), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L218) |
| ` public ChoiceBuilder fluid(Supplier<? extends Fluid> fluid, int weight) ` | 末尾返回 ` this.fluid(Objects.requireNonNull(fluid).get(), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L222) |
| ` public ChoiceBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L202) |

## PlanetResourceRecipe.EntriesBuilder

` public static final class EntriesBuilder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L166)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntriesBuilder id(String id, int weight) ` | 末尾返回 ` this.id(Identifier.parse(id), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L169) |
| ` public EntriesBuilder id(Identifier id, int weight) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.entries.add(new WeightedEntry(id.toString(), requirePositive(weight))) `<br>实现调用 ` id.toString() `<br>实现调用 ` requirePositive(weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L173) |
| ` public EntriesBuilder item(ItemLike item, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.ITEM.getKey(Objects.requireNonNull(item).asItem()), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L178) |
| ` public EntriesBuilder fluid(Fluid fluid, int weight) ` | 末尾返回 ` this.id(BuiltInRegistries.FLUID.getKey(Objects.requireNonNull(fluid)), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L182) |
| ` public EntriesBuilder fluid(Supplier<? extends Fluid> fluid, int weight) ` | 末尾返回 ` this.fluid(Objects.requireNonNull(fluid).get(), weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L186) |
| ` public EntriesBuilder chooseOne(int weight, Consumer<ChoiceBuilder> consumer) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` consumer.accept(builder) `<br>实现调用 ` this.entries.add(new WeightedEntry(builder.build(), requirePositive(weight))) `<br>实现调用 ` builder.build() `<br>实现调用 ` requirePositive(weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L190) |
| ` public List<WeightedEntry> build() ` | 末尾返回 ` List.copyOf(this.entries) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L197) |
| ` public EntriesBuilder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L166) |

## PlanetResourceRecipe.FluidData

` public record FluidData(String planetType, String temperature, String liquidMin, String outputFluid) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<FluidData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L287) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FluidData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L294) |
| ` public FluidData(String planetType, String temperature, String liquidMin, Fluid outputFluid) ` | 执行 ` this( planetType, temperature, liquidMin, BuiltInRegistries.FLUID.getKey(Objects.requireNonNull(outputFluid)).toString() ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L306) |
| ` public FluidData( String planetType, String temperature, String liquidMin, Supplier<? extends Fluid> outputFluid ) ` | 执行 ` this(planetType, temperature, liquidMin, Objects.requireNonNull(outputFluid).get()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L315) |
| ` public String planetType() ` | 读取 record 分量 ` planetType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |
| ` public String temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |
| ` public String liquidMin() ` | 读取 record 分量 ` liquidMin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |
| ` public String outputFluid() ` | 读取 record 分量 ` outputFluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L286) |

## PlanetResourceRecipe.GiantData

` public record GiantData(List<WeightedEntry> entries, String pressureType) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<GiantData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L326) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, GiantData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( WeightedEntry.STREAM_CODEC.apply(ByteBufCodecs.list()), GiantData::entries, ByteBufCodecs.STRING_UTF8, GiantData::pressureType, GiantData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L333) |
| ` public GiantData(List<WeightedEntry> entries, String pressureType) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325) |
| ` public List<WeightedEntry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325) |
| ` public String pressureType() ` | 读取 record 分量 ` pressureType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L325) |

## PlanetResourceRecipe.LifeChances

` public record LifeChances(int cold, int hot, int mild) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final LifeChances DEFAULT ` | 初值 ` new LifeChances(5, 5, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L240) |
| ` public static final Codec<LifeChances> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L242) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, LifeChances> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, LifeChances::cold, ByteBufCodecs.INT, LifeChances::hot, ByteBufCodecs.INT, LifeChances::mild, LifeChances::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L248) |
| ` public int forTemperature(Temperature temp) ` | 末尾返回 ` switch (temp) { case COLD -> this.cold; case HOT -> this.hot; case MILD -> this.mild; default -> 0; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L258) |
| ` public LifeChances(int cold, int hot, int mild) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
| ` public int cold() ` | 读取 record 分量 ` cold ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
| ` public int hot() ` | 读取 record 分量 ` hot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
| ` public int mild() ` | 读取 record 分量 ` mild ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L239) |
