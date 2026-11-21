# dev.dubhe.anvilcraft.block.entity.celestial（CelestialMassTable.Definition 至 CelestialTravelData.ReturnRule）



## CelestialMassTable.Definition

` public record Definition(double value, Unit unit, String displayValue) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public String display() ` | 末尾返回 ` this.displayValue + " " + this.unit.symbol ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L18) |
| ` public double solarMass() ` | 末尾返回 ` this.unit == Unit.SOLAR ? this.value : this.value / 332946.0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L22) |
| ` public Definition(double value, Unit unit, String displayValue) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public double value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public Unit unit() ` | 读取 record 分量 ` unit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public String displayValue() ` | 读取 record 分量 ` displayValue ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |

## CelestialMassTable.Unit

` public enum Unit `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EARTH ` | 声明于枚举 ` CelestialMassTable.Unit ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L8) |
| ` SOLAR ` | 声明于枚举 ` CelestialMassTable.Unit ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L8) |
| ` public static Unit[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L7) |
| ` public static Unit valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L7) |

## CelestialRefactorOption

` public record CelestialRefactorOption(Megastructure definition, Megastructure.Context context, int ring, ResourceLocation modelLocation, String displayName, ItemStack material, int materialCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L13)

A megastructure definition resolved for one celestial body.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CelestialRefactorOption resolve(Megastructure definition, Megastructure.Context context) ` | Resolve a registered definition for the supplied CFA context.<br>末尾返回 ` new CelestialRefactorOption( definition, context, ring, definition.modelLocation(ring), definition.displayName(), definition.material(), definition.materialCount() ) `<br>[调用处 CelestialRefactorRegistry.getOptions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L24) |
| ` public CelestialRefactorOption( int ring, String megastructure, ResourceLocation modelLocation, String displayName, ItemStack material, int materialCount ) ` | Compatibility constructor for add-ons written against the pre-registry API.<br>执行 ` this( legacyDefinition(ring, megastructure, modelLocation, displayName), null, ring, modelLocation, displayName, material, materialCount ) `<br>[调用处 CelestialRefactorOption.noMaterial](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L88) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L38) |
| ` public ResourceLocation id() ` | 末尾返回 ` this.definition.id() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L57) |
| ` public String megastructure() ` | Legacy name accessor retained for handlers, renderers and add-ons.<br>末尾返回 ` this.definition.name() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L62) |
| ` public boolean auxiliary() ` | 末尾返回 ` this.definition.auxiliary() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L66) |
| ` public float rotation(float baseRotation, float bodyRotation) ` | ` (this.context == null) ` 成立时提前返回 ` baseRotation `<br>末尾返回 ` this.definition.rotation(this.context, this.ring, baseRotation, bodyRotation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L70) |
| ` public boolean needsMaterial() ` | 末尾返回 ` this.materialCount > 0 && !this.material.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L75) |
| ` @Deprecated public static CelestialRefactorOption noMaterial( int ring, String megastructure, ResourceLocation modelLocation, String displayName ) ` | Creates an option in the old shape. New code should register a Megastructure instead, but keeping these factories avoids an unnecessary source break for add-ons targeting 1.21.<br>末尾返回 ` new CelestialRefactorOption( ring, megastructure, modelLocation, displayName, ItemStack.EMPTY, 0 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L84) |
| ` @Deprecated public static CelestialRefactorOption withMaterial( int ring, String megastructure, ResourceLocation modelLocation, String displayName, ItemLike material, int materialCount ) ` | 末尾返回 ` new CelestialRefactorOption( ring, megastructure, modelLocation, displayName, new ItemStack(material), materialCount ) `<br>[调用处 CelestialRefactorRegistry.getOptionsForRing](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L98) |
| ` public Megastructure definition() ` | 读取 record 分量 ` definition ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L14) |
| ` public Megastructure.Context context() ` | 读取 record 分量 ` context ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L15) |
| ` public int ring() ` | 读取 record 分量 ` ring ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L16) |
| ` public ResourceLocation modelLocation() ` | 读取 record 分量 ` modelLocation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L17) |
| ` public String displayName() ` | 读取 record 分量 ` displayName ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L18) |
| ` public ItemStack material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L19) |
| ` public int materialCount() ` | 读取 record 分量 ` materialCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L13) |

## CelestialRefactorRegistry

` public final class CelestialRefactorRegistry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L15)

Resolves registered megastructures for a Celestial Forging Anvil context.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<CelestialRefactorOption> getOptions( @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | Returns the options available for a locked celestial body. Every definition is evaluated independently. This removes the old chain of name-based filters and lets add-ons contribute prerequisites, ring variants and materials through the registry.<br>` (body == null) ` 成立时提前返回 ` Collections.emptyList() `<br>` (!hasRegisteredDefinitions()) ` 成立时提前返回 ` legacyOptions(body, amplified, resources) `<br>末尾返回 ` options `<br>[调用处 CelestialForgingAnvilBlockEntity.getClientVisibleOptions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L1475) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L26) |
| ` public static @Nullable CelestialRefactorOption getOption( ResourceLocation id, @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | Resolves one registered option by stable ID for persisted CFA state.<br>` (body == null) ` 成立时提前返回 ` null `<br>末尾返回 ` null `<br>[调用处 CfaMegastructureManager.getActiveOption](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L142) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L48) |
| ` public static @Nullable Megastructure get(ResourceLocation id) ` | Returns a definition by ID, or null when an add-on was removed.<br>末尾返回 ` ModRegistries.MEGASTRUCTURE.get(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L70) |
| ` public static @Nullable ResourceLocation findLegacyId( String name, int ring, @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | Maps the old name/ring pair used by 1.21 NBT to a stable definition ID.<br>` (nameMatch != null) ` 成立时提前返回 ` nameMatch `<br>末尾返回 ` null `<br>[调用处 CfaMegastructureManager.resolveLegacyIdentity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L509) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L77) |
| ` public static @Nullable ResourceLocation findLegacyIdByIndex( int index, @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | Resolves the numeric option index stored by pre-registry 1.21 worlds. The old index is tied to the former hard-coded option order and must not be interpreted using the iteration order of the extensible registry.<br>` (index < 0 \|\| body == null) ` 成立时提前返回 ` null `<br>末尾返回 ` index < options.size() ? options.get(index).id() : null `<br>[调用处 CfaMegastructureManager.resolveLegacyIdentity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L518) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L103) |
| ` public static int getInnermostRing(CelestialBodyData body, boolean amplified) ` | Compatibility helper retained for blueprint/UI code and add-ons.<br>末尾返回 ` amplified ? Math.max(ring, 4) : ring ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L115) |
| ` public static List<CelestialRefactorOption> getOptionsForRing(int innermostRing, int maxRing) ` | Compatibility view of the old hard-coded list. New code should use #getOptions(CelestialBodyData, boolean, PlanetaryResourceSet).<br>末尾返回 ` options ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L130) |

## CelestialSearchHistory

` public final class CelestialSearchHistory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L11)

Maintains the bounded CFA search history and its browse cursor.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialSearchHistory(List<CelestialForgingAnvilBlockEntity.SearchHistoryEntry> entries) ` | 执行 ` this.entries = Objects.requireNonNull(entries) `<br>[调用处 CelestialForgingAnvilBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L731) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L18) |
| ` public List<CelestialForgingAnvilBlockEntity.SearchHistoryEntry> entries() ` | 末尾返回 ` this.entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L22) |
| ` public void clear() ` | 实现调用 ` this.entries.clear() `<br>实现调用 ` this.resetBrowsing() `<br>[调用处 CelestialSearchHistory.load](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L26) |
| ` public void add( CelestialBodyData body, @Nullable PlanetaryResourceSet resources, long bodySeed, int stellarMass, int ageAnvilCount ) ` | 实现调用 ` this.entries.isEmpty() `<br>实现调用 ` this.entries.getFirst().body().toTag().equals(body.toTag()) `<br>实现调用 ` this.entries.getFirst().body().toTag() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L31) |
| ` public void remove(CelestialBodyData body) ` | Removes stale versions of a transformed or vanished body without discarding other discoveries.<br>实现调用 ` body.toTag() `<br>实现调用 ` this.entries.removeIf(entry -> entry.body().toTag().equals(identity)) `<br>实现调用 ` this.resetBrowsing() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L64) |
| ` public boolean hasPrevious() ` | 末尾返回 ` this.entries.size() > 1 && this.browseIndex < this.entries.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L70) |
| ` public boolean hasNext() ` | 末尾返回 ` this.browseIndex > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L74) |
| ` public int browseIndex() ` | 末尾返回 ` this.browseIndex ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L78) |
| ` public void setBrowseIndex(int browseIndex) ` | 实现调用 ` Math.clamp(browseIndex, 0, this.entries.size()) `<br>实现调用 ` this.entries.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L82) |
| ` public @Nullable CelestialForgingAnvilBlockEntity.SearchHistoryEntry previous( @Nullable CelestialBodyData currentBody, @Nullable PlanetaryResourceSet currentResources, long currentBodySeed, int currentStellarMass, int currentAgeAnvilCount ) ` | ` (size <= 1 \|\| this.browseIndex >= size \|\| currentBody == null) ` 成立时提前返回 ` null `<br>` (this.browseIndex > size) ` 成立时提前返回 ` null `<br>末尾返回 ` this.withStats(this.entries.get(this.browseIndex - 1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L87) |
| ` public @Nullable CelestialForgingAnvilBlockEntity.SearchHistoryEntry next() ` | ` (this.browseIndex <= 0) ` 成立时提前返回 ` null `<br>末尾返回 ` this.withStats(this.entries.get(this.browseIndex - 1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L112) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L139) |
| ` public void load(CompoundTag tag) ` | 实现调用 ` this.clear() `<br>实现调用 ` Math.min(Math.max(tag.getInt("size"), 0), MAX_ENTRIES) `<br>实现调用 ` Math.max(tag.getInt("size"), 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L149) |

## CelestialSeedMatcher

` public final class CelestialSeedMatcher `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L17)

Matches seed items against special celestial-body recipes.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable SpecialCelestialBodyData fromEasterEgg(ItemStack stack, int space) ` | 彩蛋种子不匹配砧子数量，空间数量仅沿用头星的大小规则。<br>` (stack.is(ModBlocks.LARGE_CAKE.asItem())) ` 成立时提前返回 ` SpecialCelestialBodyData.fromBlockEasterEgg("large_cake", space) `<br>` (stack.is(ModBlocks.GIANT_ANVIL.asItem())) ` 成立时提前返回 ` SpecialCelestialBodyData.fromBlockEasterEgg("giant_anvil", space) `<br>末尾返回 ` fromPlayerHead(stack, space) `<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L22) |
| ` public static @Nullable SpecialCelestialBodyData fromPlayerHead(ItemStack stack, int space) ` | ` (!stack.is(Items.PLAYER_HEAD)) ` 成立时提前返回 ` null `<br>` (profile == null) ` 成立时提前返回 ` null `<br>末尾返回 ` SpecialCelestialBodyData.fromPlayerHead(profileTag, space) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L32) |
| ` public static @Nullable Result match( ServerLevel level, int time, int space, int mass, int energy, Item seedItem ) ` | 末尾返回 ` null `<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L42) |

## CelestialSeedMatcher.Result

` public record Result(SpecialCelestialBodyData body, PlanetaryResourceSet resources) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(SpecialCelestialBodyData body, PlanetaryResourceSet resources) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69) |
| ` public SpecialCelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69) |
| ` public PlanetaryResourceSet resources() ` | 读取 record 分量 ` resources ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L69) |

## CelestialSnapshotCodec

` public final class CelestialSnapshotCodec `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L15)

Reads and writes celestial snapshots carried by disks and singularity crystals.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable CompoundTag extract(ItemStack stack) ` | 末尾返回 ` load(stack) `<br>[调用处 CfaSearchController.start](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L22) |
| ` public static @Nullable CompoundTag load(ItemStack stack) ` | ` (!stack.is(ModBlocks.SINGULARITY_CRYSTAL.asItem())) ` 成立时提前返回 ` null `<br>末尾返回 ` snapshot.contains(BODY_KEY) ? snapshot.copy() : null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L26) |
| ` public static void save(ItemStack stack, CompoundTag snapshot) ` | 实现调用 ` stack.getItem() `<br>分支 ` (stack.getItem() instanceof DiskItem) ` 内调用 ` containsExtremeBody(snapshot) `<br>分支 ` (stack.getItem() instanceof DiskItem) ` 内调用 ` DiskItem.hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L37) |

## CelestialTravelData

` public record CelestialTravelData(ResourceLocation dimension, CoordinateRule coordinateRule, ReturnRule returnRule) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23)

Data-driven travel rules for a special celestial body. The absence of this value means that the body cannot be reached through a Celestial Forging Anvil portal. Keeping the value optional lets datapacks opt a planet in without adding a second, easily desynchronised boolean.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodecHolder CODECS ` | 初值 ` new MapCodecHolder() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L28) |
| ` public static final Codec<CelestialTravelData> CODEC ` | 初值 ` CODECS.codec ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L191) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CelestialTravelData> STREAM_CODEC ` | 初值 ` CODECS.streamCodec ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L192) |
| ` public CelestialTravelData(ResourceLocation dimension, CoordinateRule coordinateRule, ReturnRule returnRule) ` | [调用处 SpecialCelestialBodyRecipeLoader.createOverworldLike](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L103) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L194) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L199) |
| ` @Nullable public static CelestialTravelData fromTag(CompoundTag tag) ` | ` (dimensionName.isEmpty()) ` 成立时提前返回 ` null `<br>[调用处 SpecialCelestialBodyData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyData.java#L294) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L216) |
| ` public ResourceLocation dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L24) |
| ` public CoordinateRule coordinateRule() ` | 读取 record 分量 ` coordinateRule ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L25) |
| ` public ReturnRule returnRule() ` | 读取 record 分量 ` returnRule ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23) |

## CelestialTravelData.CoordinateRule

` public record CoordinateRule(Type type, double scale, int x, int y, int z, int radius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31)

The coordinate used when a rule omits its optional position fields.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CoordinateRule DEFAULT ` | 初值 ` new CoordinateRule(Type.FIXED, 1.0, 0, 64, 0, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L32) |
| ` public static final Codec<CoordinateRule> CODEC ` | Accept both the documented object form and a concise string rule in datapacks.<br>初值 ` Codec.either(OBJECT_CODEC, Type.CODEC).xmap(either -> either.map(rule -> rule, type -> new CoordinateRule(type, 1.0, 0, 64, 0, 8)), Either::left) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L44) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CoordinateRule> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L49) |
| ` public CoordinateRule(Type type, double scale, int x, int y, int z, int radius) ` | 实现调用 ` Double.isFinite(scale) `<br>实现调用 ` Math.max(0, radius) `<br>[调用处 SpecialCelestialBodyRecipeLoader.createOverworldLike](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L105) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L68) |
| ` public Type type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public double scale() ` | 读取 record 分量 ` scale ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public int z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L31) |

## CelestialTravelData.CoordinateRule.Type

` public enum Type `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L73)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SAME ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L75) |
| ` SAME_3D ` | Keeps the source height as well, for destinations without any terrain to land on. | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L77) |
| ` SCALED ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L78) |
| ` FIXED ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L79) |
| ` FIXED_SURFACE ` | Keeps X/Z near a fixed point while finding safe ground on the surface. | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L81) |
| ` RANDOM_SPAWN ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L82) |
| ` public static final Codec<Type> CODEC ` | 初值 ` Codec.STRING.xmap(Type::fromName, Type::getSerializedName) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L84) |
| ` public static Type fromName(String name) ` | 实现调用 ` name.toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L92) |
| ` public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L73) |
| ` public static Type[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L73) |
| ` public static Type valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L73) |

## CelestialTravelData.MapCodecHolder

` public static final class MapCodecHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L168)

A small holder avoids exposing a MapCodec implementation detail in the record header.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final Codec<CelestialTravelData> codec ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L169) |
| ` public final StreamCodec<RegistryFriendlyByteBuf, CelestialTravelData> streamCodec ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L177) |

## CelestialTravelData.ReturnRule

` public record ReturnRule(Type type, int x, int y, int z, int radius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ReturnRule DEFAULT ` | 初值 ` new ReturnRule(Type.ENTRY_PORTAL, 0, 64, 0, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L107) |
| ` public static final Codec<ReturnRule> CODEC ` | Accept both the documented object form and a concise string rule in datapacks.<br>初值 ` Codec.either(OBJECT_CODEC, Type.CODEC).xmap(either -> either.map(rule -> rule, type -> new ReturnRule(type, 0, 64, 0, 8)), Either::left) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L118) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ReturnRule> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L123) |
| ` public ReturnRule(Type type, int x, int y, int z, int radius) ` | 执行 ` radius = Math.max(0, radius) `<br>[调用处 SpecialCelestialBodyRecipeLoader.createOverworldLike](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L108) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L138) |
| ` public Type type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public int z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L106) |
