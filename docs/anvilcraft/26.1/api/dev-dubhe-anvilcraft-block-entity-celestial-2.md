# dev.dubhe.anvilcraft.block.entity.celestial（CelestialMassTable.Definition 至 CelestialTravelData.MapCodecHolder）



## CelestialMassTable.Definition

` public record Definition(double value, Unit unit, String displayValue) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public String display() ` | 末尾返回 ` this.displayValue + " " + this.unit.symbol ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L18) |
| ` public double solarMass() ` | 末尾返回 ` this.unit == Unit.SOLAR ? this.value : this.value / 332946.0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L22) |
| ` public Definition(double value, Unit unit, String displayValue) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public double value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public Unit unit() ` | 读取 record 分量 ` unit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public String displayValue() ` | 读取 record 分量 ` displayValue ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L17) |

## CelestialMassTable.Unit

` public enum Unit `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EARTH ` | 声明于枚举 ` CelestialMassTable.Unit ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L8) |
| ` SOLAR ` | 声明于枚举 ` CelestialMassTable.Unit ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L8) |
| ` public static Unit[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L7) |
| ` public static Unit valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialMassTable.java#L7) |

## CelestialRefactorOption

` public record CelestialRefactorOption(Megastructure definition, Megastructure.Context context, int ring, Identifier modelLocation, String displayName, ItemStack material, int materialCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L7)

A megastructure definition resolved for one celestial body.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CelestialRefactorOption resolve(Megastructure definition, Megastructure.Context context) ` | 末尾返回 ` new CelestialRefactorOption( definition, context, ring, definition.modelLocation(ring), definition.displayName(), definition.material(), definition.materialCount() ) `<br>[调用处 CelestialRefactorRegistry.getOptions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L16) |
| ` public Identifier id() ` | 末尾返回 ` this.definition.id() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L29) |
| ` public String megastructure() ` | 末尾返回 ` this.definition.name() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L33) |
| ` public boolean auxiliary() ` | 末尾返回 ` this.definition.auxiliary() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L37) |
| ` public float rotation(float baseRotation, float bodyRotation) ` | 末尾返回 ` this.definition.rotation(this.context, this.ring, baseRotation, bodyRotation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L41) |
| ` public boolean needsMaterial() ` | 末尾返回 ` this.materialCount > 0 && !this.material.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L45) |
| ` public CelestialRefactorOption(Megastructure definition, Megastructure.Context context, int ring, Identifier modelLocation, String displayName, ItemStack material, int materialCount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L7) |
| ` public Megastructure definition() ` | 读取 record 分量 ` definition ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L8) |
| ` public Megastructure.Context context() ` | 读取 record 分量 ` context ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L9) |
| ` public int ring() ` | 读取 record 分量 ` ring ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L10) |
| ` public Identifier modelLocation() ` | 读取 record 分量 ` modelLocation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L11) |
| ` public String displayName() ` | 读取 record 分量 ` displayName ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L12) |
| ` public ItemStack material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L13) |
| ` public int materialCount() ` | 读取 record 分量 ` materialCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorOption.java#L7) |

## CelestialRefactorRegistry

` public final class CelestialRefactorRegistry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L13)

Resolves registered megastructures for a Celestial Forging Anvil context.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<CelestialRefactorOption> getOptions( @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | ` (body == null) ` 成立时提前返回 ` Collections.emptyList() `<br>末尾返回 ` options `<br>[调用处 CelestialForgingAnvilBlockEntity.getClientVisibleOptions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L1331) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L17) |
| ` public static @Nullable CelestialRefactorOption getOption( Identifier id, @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | ` (body == null) ` 成立时提前返回 ` null `<br>` (megastructure == null) ` 成立时提前返回 ` null `<br>末尾返回 ` CelestialRefactorOption.resolve( megastructure, new Megastructure.Context(body, amplified, resources) ) `<br>[调用处 CfaMegastructureManager.getActiveOption](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L34) |
| ` public static @Nullable Megastructure get(Identifier id) ` | 末尾返回 ` ModRegistries.MEGASTRUCTURE.get(id).map(Holder.Reference::value).orElse(null) `<br>[调用处 CelestialRefactorRegistry.getOption](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L49) |
| ` public static @Nullable Identifier findLegacyId( String name, int ring, @Nullable CelestialBodyData body, boolean amplified, @Nullable PlanetaryResourceSet resources ) ` | 末尾返回 ` nameMatch `<br>[调用处 CfaMegastructureManager.resolveLegacyIdentity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L435) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java#L53) |

## CelestialSearchHistory

` public final class CelestialSearchHistory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L12)

有容量上限的天体搜索历史，同时维护服务端浏览状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void add( CelestialBodyData body, @Nullable PlanetaryResourceSet resources, long bodySeed, int stellarMass, int ageAnvilCount ) ` | 添加结果；与最新记录同一天体时刷新该条记录的参数。<br>实现调用 ` this.entries.isEmpty() `<br>实现调用 ` this.entries.getFirst().body().toTag().equals(body.toTag()) `<br>实现调用 ` this.entries.getFirst().body().toTag() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L20) |
| ` public List<Entry> entries() ` | 末尾返回 ` this.entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L39) |
| ` public void clear() ` | 实现调用 ` this.entries.clear() `<br>实现调用 ` this.resetBrowsing() `<br>[调用处 CelestialSearchHistory.load](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L43) |
| ` public void remove(CelestialBodyData body) ` | Removes stale versions of a transformed or vanished body without discarding other discoveries.<br>实现调用 ` body.toTag() `<br>实现调用 ` this.entries.removeIf(entry -> entry.body().toTag().equals(identity)) `<br>实现调用 ` this.resetBrowsing() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L49) |
| ` public boolean hasPrevious() ` | 末尾返回 ` this.entries.size() > 1 && this.browseIndex < this.entries.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L55) |
| ` public boolean hasNext() ` | 末尾返回 ` this.browseIndex > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L59) |
| ` public @Nullable Entry previous( @Nullable CelestialBodyData currentBody, @Nullable PlanetaryResourceSet currentResources, long currentBodySeed, int currentStellarMass, int currentAgeAnvilCount ) ` | 浏览更早的结果；最新记录代表当前天体，因此首次后退会跳过它。<br>` (size <= 1 \|\| this.browseIndex >= size \|\| currentBody == null) ` 成立时提前返回 ` null `<br>` (this.browseIndex > size) ` 成立时提前返回 ` null `<br>末尾返回 ` this.withStats(this.entries.get(this.browseIndex - 1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L64) |
| ` public @Nullable Entry next() ` | 向开始浏览时保存的原始结果方向前进。<br>` (this.browseIndex <= 0) ` 成立时提前返回 ` null `<br>末尾返回 ` this.withStats(this.entries.get(this.browseIndex - 1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L90) |
| ` public int browseIndex() ` | 末尾返回 ` this.browseIndex ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L116) |
| ` public void setBrowseIndex(int browseIndex) ` | 实现调用 ` Math.clamp(browseIndex, 0, this.entries.size()) `<br>实现调用 ` this.entries.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L120) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L125) |
| ` public void load(CompoundTag tag) ` | 同时兼容当前“天体加资源”格式和旧版仅保存天体的格式。<br>实现调用 ` this.clear() `<br>实现调用 ` Math.min(tag.getIntOr("size", 0), CelestialSearchHistory.MAX_ENTRIES) `<br>实现调用 ` tag.getIntOr("size", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L135) |
| ` public CelestialSearchHistory() ` | Java 提供的无参构造器。<br>[调用处 CelestialForgingAnvilBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L742) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L12) |

## CelestialSearchHistory.Entry

` public record Entry(CelestialBodyData body, PlanetaryResourceSet resources, boolean hasStats, long bodySeed, int stellarMass, int ageAnvilCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L156)

一次搜索得到的天体及其同步生成的资源集合。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Entry(CelestialBodyData body, @Nullable PlanetaryResourceSet resources) ` | 执行 ` this(body, resources, false, 0L, 0, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L164) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L168) |
| ` public static Entry fromTag(CompoundTag tag) ` | ` (!tag.contains("bodySeed")) ` 成立时提前返回 ` new Entry(body, resources) `<br>末尾返回 ` new Entry( body, resources, true, tag.getLongOr("bodySeed", 0L), tag.getIntOr("stellarMass", 0), tag.getIntOr("ageAnvilCount", 0) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L182) |
| ` public CelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L157) |
| ` public PlanetaryResourceSet resources() ` | 读取 record 分量 ` resources ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L158) |
| ` public boolean hasStats() ` | 读取 record 分量 ` hasStats ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L159) |
| ` public long bodySeed() ` | 读取 record 分量 ` bodySeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L160) |
| ` public int stellarMass() ` | 读取 record 分量 ` stellarMass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L161) |
| ` public int ageAnvilCount() ` | 读取 record 分量 ` ageAnvilCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L162) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L156) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L156) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSearchHistory.java#L156) |

## CelestialSeedMatcher

` public final class CelestialSeedMatcher `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L23)

使用种子物品匹配隐藏天体及其资源。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable SpecialCelestialBodyData fromEasterEgg(ItemStack stack, int space) ` | 彩蛋种子不匹配砧子数量，空间数量仅沿用头星的大小规则。<br>` (stack.is(ModBlocks.LARGE_CAKE.asItem())) ` 成立时提前返回 ` SpecialCelestialBodyData.fromBlockEasterEgg("large_cake", space) `<br>` (stack.is(ModBlocks.GIANT_ANVIL.asItem())) ` 成立时提前返回 ` SpecialCelestialBodyData.fromBlockEasterEgg("giant_anvil", space) `<br>末尾返回 ` fromPlayerHead(stack, space) `<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L122) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L28) |
| ` public static @Nullable SpecialCelestialBodyData fromPlayerHead(ItemStack stack, int space) ` | ` (!stack.is(Items.PLAYER_HEAD)) ` 成立时提前返回 ` null `<br>` (profile == null) ` 成立时提前返回 ` null `<br>末尾返回 ` SpecialCelestialBodyData.fromPlayerHead(profileTag, space) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L38) |
| ` public static @Nullable Result match( ServerLevel level, int time, int space, int mass, int energy, Item seedItem ) ` | 查找首个同时匹配砧子参数和世界种子物品的特殊天体配方。<br>末尾返回 ` null `<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L132) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L49) |

## CelestialSeedMatcher.Result

` public record Result(SpecialCelestialBodyData body, PlanetaryResourceSet resources) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76)

同一配方匹配得到的天体和资源。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(SpecialCelestialBodyData body, PlanetaryResourceSet resources) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76) |
| ` public SpecialCelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76) |
| ` public PlanetaryResourceSet resources() ` | 读取 record 分量 ` resources ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSeedMatcher.java#L76) |

## CelestialSnapshotCodec

` public final class CelestialSnapshotCodec `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L16)

读写磁盘和奇点晶体携带的天体快照。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable CompoundTag extract(ItemStack stack) ` | ` (stack.getItem() instanceof DiskItem && DiskItem.hasDataStored(stack)) ` 成立时提前返回 ` DiskItem.getData(stack).copy() `<br>末尾返回 ` CelestialSnapshotCodec.load(stack) `<br>[调用处 CfaSearchController.start](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L23) |
| ` public static @Nullable CompoundTag load(ItemStack stack) ` | ` (!stack.is(ModBlocks.SINGULARITY_CRYSTAL.asItem())) ` 成立时提前返回 ` null `<br>末尾返回 ` snapshot.contains(CelestialSnapshotCodec.BODY_KEY) ? snapshot.copy() : null `<br>[调用处 CelestialForgingAnvilBlockEntity.loadSnapshotFromStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L945) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L30) |
| ` public static void save(ItemStack stack, CompoundTag snapshot) ` | 实现调用 ` stack.getItem() `<br>分支 ` (stack.getItem() instanceof DiskItem) ` 内调用 ` CelestialSnapshotCodec.containsExtremeBody(snapshot) `<br>分支 ` (stack.getItem() instanceof DiskItem) ` 内调用 ` DiskItem.hasDataStored(stack) `<br>[调用处 CelestialForgingAnvilBlockEntity.saveSnapshotToStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L952) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L41) |

## CelestialTravelData

` public record CelestialTravelData(Identifier dimension, CoordinateRule coordinateRule, ReturnRule returnRule) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23)

Data-driven travel rules for a special celestial body. The absence of this value means that the body cannot be reached through a Celestial Forging Anvil portal. Keeping the value optional lets datapacks opt a planet in without adding a second, easily desynchronised boolean.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier OVERWORLD_LIKE_DIMENSION ` | 初值 ` Identifier.fromNamespaceAndPath("anvilcraft", "overworld_like") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L28) |
| ` public static final MapCodecHolder CODECS ` | 初值 ` new MapCodecHolder() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L30) |
| ` public static final Codec<CelestialTravelData> CODEC ` | 初值 ` CODECS.codec ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L193) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CelestialTravelData> STREAM_CODEC ` | 初值 ` CODECS.streamCodec ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L194) |
| ` public CelestialTravelData(Identifier dimension, CoordinateRule coordinateRule, ReturnRule returnRule) ` | [调用处 SpecialCelestialBodyRecipeLoader.createOverworldLike](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L111) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L196) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L201) |
| ` @Nullable public static CelestialTravelData fromTag(CompoundTag tag) ` | ` (dimensionName.isEmpty()) ` 成立时提前返回 ` null `<br>[调用处 SpecialCelestialBodyData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyData.java#L294) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L218) |
| ` public Identifier dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L24) |
| ` public CoordinateRule coordinateRule() ` | 读取 record 分量 ` coordinateRule ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L25) |
| ` public ReturnRule returnRule() ` | 读取 record 分量 ` returnRule ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L23) |

## CelestialTravelData.CoordinateRule

` public record CoordinateRule(Type type, double scale, int x, int y, int z, int radius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33)

The coordinate used when a rule omits its optional position fields.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CoordinateRule DEFAULT ` | 初值 ` new CoordinateRule(Type.FIXED, 1.0, 0, 64, 0, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L34) |
| ` public static final Codec<CoordinateRule> CODEC ` | Accept both the documented object form and a concise string rule in datapacks.<br>初值 ` Codec.either(OBJECT_CODEC, Type.CODEC).xmap(either -> either.map(rule -> rule, type -> new CoordinateRule(type, 1.0, 0, 64, 0, 8)), Either::left) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L46) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CoordinateRule> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L51) |
| ` public CoordinateRule(Type type, double scale, int x, int y, int z, int radius) ` | 实现调用 ` Double.isFinite(scale) `<br>实现调用 ` Math.max(0, radius) `<br>[调用处 SpecialCelestialBodyRecipeLoader.createOverworldLike](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L113) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L70) |
| ` public Type type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public double scale() ` | 读取 record 分量 ` scale ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public int z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L33) |

## CelestialTravelData.CoordinateRule.Type

` public enum Type `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L75)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SAME ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L77) |
| ` SAME_3D ` | Keeps the source height as well, for destinations without any terrain to land on. | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L79) |
| ` SCALED ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L80) |
| ` FIXED ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L81) |
| ` FIXED_SURFACE ` | Keeps X/Z near a fixed point while finding safe ground on the surface. | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L83) |
| ` RANDOM_SPAWN ` | 声明于枚举 ` CelestialTravelData.CoordinateRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L84) |
| ` public static final Codec<Type> CODEC ` | 初值 ` Codec.STRING.xmap(Type::fromName, Type::getSerializedName) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L86) |
| ` public static Type fromName(String name) ` | 实现调用 ` name.toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L94) |
| ` public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L75) |
| ` public static Type[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L75) |
| ` public static Type valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L75) |

## CelestialTravelData.MapCodecHolder

` public static final class MapCodecHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L170)

A small holder avoids exposing a MapCodec implementation detail in the record header.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final Codec<CelestialTravelData> codec ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L171) |
| ` public final StreamCodec<RegistryFriendlyByteBuf, CelestialTravelData> streamCodec ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L179) |
