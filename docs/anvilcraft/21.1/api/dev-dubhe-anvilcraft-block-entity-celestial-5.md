# dev.dubhe.anvilcraft.block.entity.celestial（PlanetResourceRecipe.OfferingData 至 ShatteredPlanet）



## PlanetResourceRecipe.OfferingData

` public record OfferingData(List<WeightedEntry> entries, int civilizationChance, int ageMin, int ageMax) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L396)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<OfferingData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L399) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OfferingData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L406) |
| ` public OfferingData(List<WeightedEntry> entries, int civilizationChance, int ageMin, int ageMax) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L396) |
| ` public List<WeightedEntry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L397) |
| ` public int civilizationChance() ` | 读取 record 分量 ` civilizationChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L397) |
| ` public int ageMin() ` | 读取 record 分量 ` ageMin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L397) |
| ` public int ageMax() ` | 读取 record 分量 ` ageMax ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L397) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L396) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L396) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L396) |

## PlanetResourceRecipe.Serializer

` public static final class Serializer implements RecipeSerializer<PlanetResourceRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L634)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @NotNull MapCodec<PlanetResourceRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L635) |
| ` @Override public @NotNull StreamCodec<RegistryFriendlyByteBuf, PlanetResourceRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L640) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L634) |

## PlanetResourceRecipe.WastelandData

` public record WastelandData(List<WeightedEntry> entries, int ageMin, int wastelandChance) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L421)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WastelandData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L424) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WastelandData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L430) |
| ` public WastelandData(List<WeightedEntry> entries, int ageMin, int wastelandChance) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L421) |
| ` public List<WeightedEntry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L422) |
| ` public int ageMin() ` | 读取 record 分量 ` ageMin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L422) |
| ` public int wastelandChance() ` | 读取 record 分量 ` wastelandChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L422) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L421) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L421) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L421) |

## PlanetResourceRecipe.WeightedChoice

` public record WeightedChoice(String id, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76)

A single candidate inside a possibly nested weighted entry.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WeightedChoice> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( Codec.STRING.fieldOf("id").forGetter(WeightedChoice::id), Codec.INT.fieldOf("weight").forGetter(WeightedChoice::weight) ).apply(ins, WeightedChoice::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L77) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WeightedChoice> STREAM_CODEC ` | 初值 ` StreamCodec.composite( net.minecraft.network.codec.ByteBufCodecs.STRING_UTF8, WeightedChoice::id, ByteBufCodecs.INT, WeightedChoice::weight, WeightedChoice::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L82) |
| ` public ResourceLocation resourceId() ` | 末尾返回 ` ResourceLocation.parse(this.id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L91) |
| ` public WeightedChoice(String id, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L76) |

## PlanetResourceRecipe.WeightedEntry

` public record WeightedEntry(List<WeightedChoice> choices, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L101)

A weighted output entry. The direct &#123;id, weight&#125; form remains accepted so existing 1.21 datapacks continue to load; the choices form allows one entry to select uniformly/weighted among several outputs.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WeightedEntry> CODEC ` | 由 ` Codec.either(DirectEntry.CODEC, ChoiceEntry.CODEC) .xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L116) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WeightedEntry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( WeightedChoice.STREAM_CODEC.apply(ByteBufCodecs.list()), WeightedEntry::choices, ByteBufCodecs.INT, WeightedEntry::weight, WeightedEntry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L127) |
| ` public WeightedEntry(List<WeightedChoice> choices, int weight) ` | ` (choices.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Planet resource entry must contain at least one choice") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L136) |
| ` public WeightedEntry(String id, int weight) ` | Compatibility constructor for the original 1.21 direct-entry API.<br>执行 ` this(List.of(new WeightedChoice(id, 1)), weight) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L144) |
| ` public boolean isDirect() ` | 末尾返回 ` this.choices.size() == 1 `<br>[调用处 PlanetResourceRecipe.WeightedEntry.select](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L157) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L148) |
| ` public ResourceLocation resourceId() ` | 末尾返回 ` this.choices.getFirst().resourceId() `<br>[调用处 PlanetResourceRecipe.WeightedEntry.select](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L157) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L152) |
| ` public ResourceLocation select(RandomSource random) ` | ` (this.isDirect()) ` 成立时提前返回 ` this.resourceId() `<br>` (totalWeight <= 0) ` 成立时提前返回 ` this.resourceId() `<br>末尾返回 ` this.choices.getLast().resourceId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L156) |
| ` public List<WeightedChoice> choices() ` | 读取 record 分量 ` choices ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L101) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L101) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L101) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L101) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L101) |

## PlanetaryResourceSet

` public class PlanetaryResourceSet `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<WeightedItemStack> getMinerals() ` | 末尾返回 ` Collections.unmodifiableList(this.minerals) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L65) |
| ` public List<WeightedFluidStack> getFluids() ` | 末尾返回 ` Collections.unmodifiableList(this.fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L69) |
| ` public List<WeightedItemStack> getGiantItems() ` | 末尾返回 ` Collections.unmodifiableList(this.giantItems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L73) |
| ` public List<WeightedFluidStack> getGiantFluids() ` | 末尾返回 ` Collections.unmodifiableList(this.giantFluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L77) |
| ` public List<WeightedItemStack> getBiologicalItems() ` | 末尾返回 ` Collections.unmodifiableList(this.biologicalItems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L81) |
| ` public List<WeightedFluidStack> getBiologicalFluids() ` | 末尾返回 ` Collections.unmodifiableList(this.biologicalFluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L85) |
| ` public List<WeightedItemStack> getOfferings() ` | 末尾返回 ` Collections.unmodifiableList(this.offerings) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L89) |
| ` public List<WeightedItemStack> getWastelandItems() ` | 末尾返回 ` Collections.unmodifiableList(this.wastelandItems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L93) |
| ` public boolean hasCivilization() ` | 末尾返回 ` this.hasCivilization ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L97) |
| ` public boolean isEmpty() ` | 实现调用 ` this.minerals.isEmpty() `<br>实现调用 ` this.fluids.isEmpty() `<br>实现调用 ` this.giantItems.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L101) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L156) |
| ` public static PlanetaryResourceSet fromTag(CompoundTag tag) ` | 末尾返回 ` set `<br>[调用处 CelestialForgingAnvilBlockEntity.SearchHistoryEntry.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L765) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L187) |
| ` public boolean isWasteland() ` | 末尾返回 ` this.isWasteland `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L15) |
| ` public PlanetaryResourceSet() ` | Java 提供的无参构造器。<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L142) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L15) |

## PlanetaryResourceSet.WeightedFluidStack

` public record WeightedFluidStack(ResourceLocation fluidId, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |
| ` public static WeightedFluidStack fromTag(CompoundTag tag) ` | 末尾返回 ` new WeightedFluidStack(id, weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L42) |
| ` public WeightedFluidStack(ResourceLocation fluidId, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34) |
| ` public ResourceLocation fluidId() ` | 读取 record 分量 ` fluidId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L34) |

## PlanetaryResourceSet.WeightedItemStack

` public record WeightedItemStack(ResourceLocation itemId, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |
| ` public static WeightedItemStack fromTag(CompoundTag tag) ` | 末尾返回 ` new WeightedItemStack(id, weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L26) |
| ` public WeightedItemStack(ResourceLocation itemId, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18) |
| ` public ResourceLocation itemId() ` | 读取 record 分量 ` itemId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L18) |

## PressureType

` public enum PressureType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` GAS ` | 声明于枚举 ` PressureType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L7) |
| ` ICE ` | 声明于枚举 ` PressureType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L8) |
| ` @Override public @NotNull String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L16) |
| ` public static PressureType fromName(String name) ` | 末尾返回 ` GAS `<br>[调用处 GiantPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L21) |
| ` public static PressureType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L6) |
| ` public static PressureType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L6) |

## RingType

` public enum RingType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 声明于枚举 ` RingType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L7) |
| ` WEAK ` | 声明于枚举 ` RingType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L8) |
| ` STRONG ` | 声明于枚举 ` RingType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L9) |
| ` @Override public @NotNull String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L17) |
| ` public static RingType fromName(String name) ` | 末尾返回 ` NONE `<br>[调用处 GiantPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L83) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L22) |
| ` public static RingType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L6) |
| ` public static RingType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L6) |

## RockyPlanetData

` public record RockyPlanetData(CelestialBodyClass bodyClass, boolean hasAtmosphere, LiquidCoverage liquidCoverage, Temperature temperature, RingType ringType, int size, int paletteBaseRow, int paletteOverlayRow, float axialTilt, int rotationSpeed, int magneticFieldStrength) implements CelestialBodyData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public CelestialBodyType type() ` | 末尾返回 ` CelestialBodyType.ROCKY_PLANET `<br>[调用处 RockyPlanetData.toTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L19) |
| ` @Override public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L24) |
| ` public static RockyPlanetData fromTag(CompoundTag tag) ` | 实现调用 ` CelestialBodyData.readClass(tag, CelestialBodyType.ROCKY_PLANET) `<br>实现调用 ` tag.contains("magneticFieldStrength") `<br>实现调用 ` tag.getInt("magneticFieldStrength") `<br>[调用处 CelestialBodyData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyData.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L42) |
| ` public RockyPlanetData(CelestialBodyClass bodyClass, boolean hasAtmosphere, LiquidCoverage liquidCoverage, Temperature temperature, RingType ringType, int size, int paletteBaseRow, int paletteOverlayRow, float axialTilt, int rotationSpeed, int magneticFieldStrength) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |
| ` public CelestialBodyClass bodyClass() ` | 读取 record 分量 ` bodyClass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L6) |
| ` public boolean hasAtmosphere() ` | 读取 record 分量 ` hasAtmosphere ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L7) |
| ` public LiquidCoverage liquidCoverage() ` | 读取 record 分量 ` liquidCoverage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L8) |
| ` public Temperature temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L9) |
| ` public RingType ringType() ` | 读取 record 分量 ` ringType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L10) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L11) |
| ` public int paletteBaseRow() ` | 读取 record 分量 ` paletteBaseRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L12) |
| ` public int paletteOverlayRow() ` | 读取 record 分量 ` paletteOverlayRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L13) |
| ` public float axialTilt() ` | 读取 record 分量 ` axialTilt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L14) |
| ` public int rotationSpeed() ` | 读取 record 分量 ` rotationSpeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L15) |
| ` public int magneticFieldStrength() ` | 读取 record 分量 ` magneticFieldStrength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |

## ShatteredPlanet

` public final class ShatteredPlanet `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int AGE_ANVIL_COUNT ` | 初值 ` 13 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L7) |
| ` public static final int MASS_ANVIL_COUNT ` | 初值 ` 13 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L8) |
| ` public static SpecialCelestialBodyData createBody() ` | 实现调用 ` AnvilCraft.of("shattered_planet").toString() `<br>实现调用 ` AnvilCraft.of("shattered_planet") `<br>[调用处 CelestialBodyPresets.sample](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyPresets.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L13) |
| ` public static PlanetaryResourceSet createResources() ` | 末尾返回 ` resources `<br>[调用处 CelestialBodyPresets.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyPresets.java#L105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L33) |
