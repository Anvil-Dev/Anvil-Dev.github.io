# dev.dubhe.anvilcraft.recipe.celestial（PlanetResourceRecipe.MineralData 至 SpecialCelestialBodyRecipe.DemandEntry）



## PlanetResourceRecipe.MineralData

` public record MineralData(String sourceTag, String blacklistTag, int step) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MineralData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L269) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MineralData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, MineralData::sourceTag, ByteBufCodecs.STRING_UTF8, MineralData::blacklistTag, ByteBufCodecs.INT, MineralData::step, MineralData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L275) |
| ` public MineralData(String sourceTag, String blacklistTag, int step) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |
| ` public String sourceTag() ` | 读取 record 分量 ` sourceTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |
| ` public String blacklistTag() ` | 读取 record 分量 ` blacklistTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |
| ` public int step() ` | 读取 record 分量 ` step ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L268) |

## PlanetResourceRecipe.OfferingData

` public record OfferingData(List<WeightedEntry> entries, int civilizationChance, int ageMin, int ageMax) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L370)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<OfferingData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L373) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OfferingData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L380) |
| ` public OfferingData(List<WeightedEntry> entries, int civilizationChance, int ageMin, int ageMax) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L370) |
| ` public List<WeightedEntry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L371) |
| ` public int civilizationChance() ` | 读取 record 分量 ` civilizationChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L371) |
| ` public int ageMin() ` | 读取 record 分量 ` ageMin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L371) |
| ` public int ageMax() ` | 读取 record 分量 ` ageMax ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L371) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L370) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L370) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L370) |

## PlanetResourceRecipe.WastelandData

` public record WastelandData(List<WeightedEntry> entries, int ageMin, int wastelandChance) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L393)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WastelandData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L396) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WastelandData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L402) |
| ` public WastelandData(List<WeightedEntry> entries, int ageMin, int wastelandChance) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L393) |
| ` public List<WeightedEntry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L394) |
| ` public int ageMin() ` | 读取 record 分量 ` ageMin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L394) |
| ` public int wastelandChance() ` | 读取 record 分量 ` wastelandChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L394) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L393) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L393) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L393) |

## PlanetResourceRecipe.WeightedChoice

` public record WeightedChoice(String id, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WeightedChoice> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( Codec.STRING.fieldOf("id").forGetter(WeightedChoice::id), Codec.INT.fieldOf("weight").forGetter(WeightedChoice::weight) ).apply(ins, WeightedChoice::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L77) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WeightedChoice> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, WeightedChoice::id, ByteBufCodecs.INT, WeightedChoice::weight, WeightedChoice::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L82) |
| ` public Identifier resourceId() ` | 末尾返回 ` Identifier.parse(this.id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L90) |
| ` public WeightedChoice(String id, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L76) |

## PlanetResourceRecipe.WeightedEntry

` public record WeightedEntry(List<WeightedChoice> choices, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L95)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WeightedEntry> CODEC ` | 由 ` Codec.either(DirectEntry.CODEC, ChoiceEntry.CODEC) .xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L110) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WeightedEntry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( WeightedChoice.STREAM_CODEC.apply(ByteBufCodecs.list()), WeightedEntry::choices, ByteBufCodecs.INT, WeightedEntry::weight, WeightedEntry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L121) |
| ` public WeightedEntry(List<WeightedChoice> choices, int weight) ` | ` (choices.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Planet resource entry must contain at least one choice") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L129) |
| ` public WeightedEntry(String id, int weight) ` | 执行 ` this(List.of(new WeightedChoice(id, 1)), weight) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L136) |
| ` public boolean isDirect() ` | 末尾返回 ` this.choices.size() == 1 `<br>[调用处 PlanetResourceRecipe.WeightedEntry.select](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L140) |
| ` public Identifier select(RandomSource random) ` | ` (this.isDirect()) ` 成立时提前返回 ` this.choices.getFirst().resourceId() `<br>` (totalWeight <= 0) ` 成立时提前返回 ` this.choices.getFirst().resourceId() `<br>末尾返回 ` this.choices.getLast().resourceId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L144) |
| ` public List<WeightedChoice> choices() ` | 读取 record 分量 ` choices ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L95) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L95) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L95) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L95) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L95) |

## SpecialCelestialBodyInput

` public record SpecialCelestialBodyInput() implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L10)

SpecialCelestialBodyRecipe#matches 的空输入包装； 实际匹配由外部使用砧子数量和种子物品完成。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L12) |
| ` @Override public int size() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L17) |
| ` public SpecialCelestialBodyInput() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyInput.java#L10) |

## SpecialCelestialBodyRecipe

` public record SpecialCelestialBodyRecipe(String name, String model, boolean needsCustomModel, boolean canBeShattered, int time, int space, int mass, int energy, Optional<ColorRGBA> atmosphere, Optional<LiquidCoverage> liquidCoverage, int magneticFieldStrength, int rotationSpeed, float axialTilt, List<Identifier> seedItems, List<WeightedEntry> minerals, List<WeightedEntry> fluids, List<WeightedEntry> biologicalItems, List<WeightedEntry> biologicalFluids, List<WeightedEntry> offerings, List<DemandEntry> templeBlessings, List<DemandEntry> templePunishments, Optional<CelestialTravelData> landing, boolean excludeFromMonolith) implements Recipe<SpecialCelestialBodyInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L56)

特殊天体配方 —— 通过种子物品在锻星砧中发现隐藏天体。 配方运行流程： 1. 玩家在种子格放入种子物品（如草方块、泥土等），开始搜索 2. 服务器在搜索完成时调用 #isEffectiveSeedItem 检查种子物品 是否匹配（基于世界种子的伪随机选择，每个世界不同） 3. 匹配成功后，从配方的固定参数（time/space/mass/energy）直接构造 SpecialCelestialBodyData，跳过常规的三步图表匹配 4. 温度由 energy 砧子数自动推导，文明由 offerings 非空自动判定 5. 资源通过 #generateResources 从配方的 minerals/fluids/ biologicalItems/biologicalFluids/offerings 列表直接生成 model 字段在两种渲染模式下含义不同： - needs\_custom\_model=false → 贴图名，用于 CelestialBodyTextureBakery 程序化生成贴图 - needs\_custom\_model=true → 模型资源 ID；旧格式模型名仍加载 AnvilCraft 天体模型目录中的模型 - atmosphere → 十六进制 RGB 颜色；省略时没有大气层

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpecialCelestialBodyRecipe( String name, String model, boolean needsCustomModel, int time, int space, int mass, int energy, boolean hasAtmosphere, Optional<LiquidCoverage> liquidCoverage, int magneticFieldStrength, int rotationSpeed, float axialTilt, List<Identifier> seedItems, List<WeightedEntry> minerals, List<WeightedEntry> fluids, List<WeightedEntry> biologicalItems, List<WeightedEntry> offerings, List<DemandEntry> templeBlessings, List<DemandEntry> templePunishments ) ` | 实现调用 ` List.of() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L82) |
| ` public SpecialCelestialBodyRecipe( String name, String model, boolean needsCustomModel, boolean canBeShattered, int time, int space, int mass, int energy, Optional<ColorRGBA> atmosphere, Optional<LiquidCoverage> liquidCoverage, int magneticFieldStrength, int rotationSpeed, float axialTilt, List<Identifier> seedItems, List<WeightedEntry> minerals, List<WeightedEntry> fluids, List<WeightedEntry> biologicalItems, List<WeightedEntry> biologicalFluids, List<WeightedEntry> offerings, List<DemandEntry> templeBlessings, List<DemandEntry> templePunishments, Optional<CelestialTravelData> landing ) ` | 兼容石碑知识排除选项加入前编译的集成，默认参与石碑赠书。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L109) |
| ` @Deprecated public SpecialCelestialBodyRecipe( String name, String model, boolean needsCustomModel, int time, int space, int mass, int energy, boolean hasAtmosphere, Optional<LiquidCoverage> liquidCoverage, int magneticFieldStrength, int rotationSpeed, float axialTilt, List<Identifier> seedItems, List<WeightedEntry> minerals, List<WeightedEntry> fluids, List<WeightedEntry> biologicalItems, List<WeightedEntry> biologicalFluids, List<WeightedEntry> offerings, List<DemandEntry> templeBlessings, List<DemandEntry> templePunishments ) ` | 兼容着陆规则加入前编译的集成。<br>已弃用 请使用带有 Optional&lt;ColorRGBA&gt; atmosphere 参数的构造器。<br>实现调用 ` Optional.empty() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L146) |
| ` @Deprecated public SpecialCelestialBodyRecipe( String name, String model, boolean needsCustomModel, int time, int space, int mass, int energy, boolean hasAtmosphere, Optional<LiquidCoverage> liquidCoverage, int magneticFieldStrength, int rotationSpeed, float axialTilt, List<Identifier> seedItems, List<WeightedEntry> minerals, List<WeightedEntry> fluids, List<WeightedEntry> biologicalItems, List<WeightedEntry> biologicalFluids, List<WeightedEntry> offerings, List<DemandEntry> templeBlessings, List<DemandEntry> templePunishments, Optional<CelestialTravelData> landing ) ` | 兼容可粉碎性尚未由数据驱动时编写的集成。<br>已弃用 请使用带有 Optional&lt;ColorRGBA&gt; atmosphere 参数的构造器。<br>实现调用 ` legacyAtmosphere(energy, hasAtmosphere) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L181) |
| ` @Deprecated public SpecialCelestialBodyRecipe( String name, String model, boolean needsCustomModel, boolean canBeShattered, int time, int space, int mass, int energy, boolean hasAtmosphere, Optional<LiquidCoverage> liquidCoverage, int magneticFieldStrength, int rotationSpeed, float axialTilt, List<Identifier> seedItems, List<WeightedEntry> minerals, List<WeightedEntry> fluids, List<WeightedEntry> biologicalItems, List<WeightedEntry> biologicalFluids, List<WeightedEntry> offerings, List<DemandEntry> templeBlessings, List<DemandEntry> templePunishments, Optional<CelestialTravelData> landing ) ` | 兼容大气层颜色尚不可配置时编译的集成。<br>已弃用 请使用带有 Optional&lt;ColorRGBA&gt; atmosphere 参数的构造器。<br>实现调用 ` legacyAtmosphere(energy, hasAtmosphere) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L218) |
| ` public Optional<CelestialTravelData> landingData() ` | 供将此字段称为 travel 数据的集成调用的别名。<br>末尾返回 ` this.landing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L252) |
| ` public Optional<CelestialTravelData> travel() ` | 兼容将此数据称为 travel 的数据包集成。<br>末尾返回 ` this.landing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L257) |
| ` public boolean isLandable() ` | 末尾返回 ` this.landing.isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L261) |
| ` public static final MapCodec<SpecialCelestialBodyRecipe> CODEC ` | === 顶层编解码器 ===<br>由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L376) |
| ` public static ColorRGBA defaultAtmosphereColor(Temperature temperature) ` | [调用处 SpecialCelestialBodyData.legacyAtmosphereColor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyData.java#L308) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L446) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SpecialCelestialBodyRecipe> STREAM_CODEC ` | === 流编解码器 === | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L458) |
| ` public static final RecipeSerializer<SpecialCelestialBodyRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>(CODEC, STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L523) |
| ` public boolean hasAtmosphere() ` | === 派生属性 ===<br>末尾返回 ` this.atmosphere.isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L527) |
| ` public Temperature temperature() ` | 温度由 energy 砧子数自动推导。<br>末尾返回 ` CelestialBodyMatcher.energyToTemperature(this.energy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L532) |
| ` public boolean isErrorPlanet() ` | 只有内置的 ERROR\_PLANET 是错误行星。<br>末尾返回 ` this.name.equals("error_planet") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L537) |
| ` public boolean hasCivilization() ` | 此天体是否有文明 —— 定义 offerings 时为 true。<br>末尾返回 ` !this.offerings.isEmpty() `<br>[调用处 SpecialCelestialBodyRecipe.generateResources](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L579) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L542) |
| ` public Item getEffectiveSeedItem(long worldSeed) ` | === 核心方法 ===<br>` (this.seedItems.isEmpty()) ` 成立时提前返回 ` Items.AIR `<br>` (this.seedItems.size() == 1) ` 成立时提前返回 ` resolveItem(this.seedItems.getFirst()) `<br>末尾返回 ` resolveItem(this.seedItems.get(random.nextInt(this.seedItems.size()))) `<br>[调用处 SpecialCelestialBodyRecipe.isEffectiveSeedItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L558) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L548) |
| ` public boolean isEffectiveSeedItem(Item consumedItem, long worldSeed) ` | 末尾返回 ` consumedItem == effective ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L557) |
| ` public PlanetaryResourceSet generateResources() ` | 末尾返回 ` r ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L562) |
| ` @Nullable public LiquidCoverage getLiquidCoverage() ` | 末尾返回 ` this.liquidCoverage.orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L585) |
| ` @Override public boolean matches(SpecialCelestialBodyInput input, Level level) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L590) |
| ` @Deprecated @Override public ItemStack assemble(SpecialCelestialBodyInput input) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L595) |
| ` @Override public RecipeType<SpecialCelestialBodyRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.SPECIAL_CELESTIAL_BODY.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L601) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L606) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L611) |
| ` @Override public RecipeSerializer<SpecialCelestialBodyRecipe> getSerializer() ` | 末尾返回 ` SpecialCelestialBodyRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L616) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L621) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L626) |
| ` @Override public String group() ` | 末尾返回 ` "special_celestial_body" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L631) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L57) |
| ` public String model() ` | 读取 record 分量 ` model ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L58) |
| ` public boolean needsCustomModel() ` | 读取 record 分量 ` needsCustomModel ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L59) |
| ` public boolean canBeShattered() ` | 读取 record 分量 ` canBeShattered ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L60) |
| ` public int time() ` | 读取 record 分量 ` time ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L61) |
| ` public int space() ` | 读取 record 分量 ` space ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L62) |
| ` public int mass() ` | 读取 record 分量 ` mass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L63) |
| ` public int energy() ` | 读取 record 分量 ` energy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L64) |
| ` public Optional<ColorRGBA> atmosphere() ` | 读取 record 分量 ` atmosphere ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L65) |
| ` public Optional<LiquidCoverage> liquidCoverage() ` | 读取 record 分量 ` liquidCoverage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L66) |
| ` public int magneticFieldStrength() ` | 读取 record 分量 ` magneticFieldStrength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L67) |
| ` public int rotationSpeed() ` | 读取 record 分量 ` rotationSpeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L68) |
| ` public float axialTilt() ` | 读取 record 分量 ` axialTilt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L69) |
| ` public List<Identifier> seedItems() ` | 读取 record 分量 ` seedItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L70) |
| ` public List<WeightedEntry> minerals() ` | 读取 record 分量 ` minerals ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L71) |
| ` public List<WeightedEntry> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L72) |
| ` public List<WeightedEntry> biologicalItems() ` | 读取 record 分量 ` biologicalItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L73) |
| ` public List<WeightedEntry> biologicalFluids() ` | 读取 record 分量 ` biologicalFluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L74) |
| ` public List<WeightedEntry> offerings() ` | 读取 record 分量 ` offerings ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L75) |
| ` public List<DemandEntry> templeBlessings() ` | 读取 record 分量 ` templeBlessings ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L76) |
| ` public List<DemandEntry> templePunishments() ` | 读取 record 分量 ` templePunishments ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L77) |
| ` public Optional<CelestialTravelData> landing() ` | 读取 record 分量 ` landing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L78) |
| ` public boolean excludeFromMonolith() ` | 读取 record 分量 ` excludeFromMonolith ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L79) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L56) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L56) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L56) |

## SpecialCelestialBodyRecipe.DemandEntry

` public record DemandEntry(String id, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288)

=== 需求条目（神殿需求物品，使用数量而非权重）===

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<DemandEntry> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( Codec.STRING.fieldOf("id").forGetter(DemandEntry::id), Codec.INT.fieldOf("count").forGetter(DemandEntry::count) ).apply(ins, DemandEntry::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L289) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, DemandEntry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, DemandEntry::id, ByteBufCodecs.INT, DemandEntry::count, DemandEntry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L294) |
| ` public DemandEntry(String id, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L288) |
