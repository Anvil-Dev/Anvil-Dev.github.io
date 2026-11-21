# dev.dubhe.anvilcraft.block.entity.celestial（StarData 至 StellarEventProfile.TimelinePhase）



## StarData

` public record StarData(CelestialBodyClass bodyClass, int size, int colorR, int colorG, int colorB, float axialTilt, int rotationSpeed, int magneticFieldStrength, int energy, UUID bodyUuid, boolean specialRedDwarf) implements CelestialBodyData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StarData( CelestialBodyClass bodyClass, int size, int colorR, int colorG, int colorB, float axialTilt, int rotationSpeed, int magneticFieldStrength, int energy, @Nullable UUID bodyUuid ) ` | Backwards-compatible constructor for ordinary stars.<br>执行 ` this( bodyClass, size, colorR, colorG, colorB, axialTilt, rotationSpeed, magneticFieldStrength, energy, bodyUuid, false ) `<br>[调用处 CelestialBodyMatcher.generateStar](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyMatcher.java#L494) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L23) |
| ` @Override public CelestialBodyType type() ` | 末尾返回 ` CelestialBodyType.STAR `<br>[调用处 StarData.toTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L50) |
| ` @Override public RingType ringType() ` | 末尾返回 ` RingType.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L55) |
| ` public StarData withBodyUuid(UUID uuid) ` | 返回 ` StarData ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L61) |
| ` public static UUID uuidFromBodySeed(long bodySeed) ` | 末尾返回 ` new UUID(bodySeed, bodySeed) `<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L78) |
| ` @Override public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L82) |
| ` public static StarData fromTag(CompoundTag tag) ` | 末尾返回 ` new StarData( cls, size, r, g, b, tag.getFloat("axialTilt"), rotSpeed, mag, energy, uuid, specialRedDwarf ) `<br>[调用处 CelestialBodyData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyData.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L102) |
| ` public CelestialBodyClass bodyClass() ` | 读取 record 分量 ` bodyClass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L9) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L10) |
| ` public int colorR() ` | 读取 record 分量 ` colorR ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L11) |
| ` public int colorG() ` | 读取 record 分量 ` colorG ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L12) |
| ` public int colorB() ` | 读取 record 分量 ` colorB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L13) |
| ` public float axialTilt() ` | 读取 record 分量 ` axialTilt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L14) |
| ` public int rotationSpeed() ` | 读取 record 分量 ` rotationSpeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L15) |
| ` public int magneticFieldStrength() ` | 读取 record 分量 ` magneticFieldStrength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L16) |
| ` public int energy() ` | 读取 record 分量 ` energy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L17) |
| ` public UUID bodyUuid() ` | 读取 record 分量 ` bodyUuid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L18) |
| ` public boolean specialRedDwarf() ` | 读取 record 分量 ` specialRedDwarf ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StarData.java#L8) |

## StellarControlPoint

` public record StellarControlPoint(float progress, float radius, float temperature, float luminosity, float envelope, float minimumTemperature, float maximumTemperature) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L7)

归一化阶段内的控制点，温度上下限同时约束金属度响应。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarControlPoint> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L11) |
| ` public StellarControlPoint(float progress, float radius, float temperature, float luminosity, float envelope, float minimumTemperature, float maximumTemperature) ` | ` (!Float.isFinite(progress) \|\| progress < 0 \|\| progress > 1 \|\| !Float.isFinite(radius) \|\| radius <= 0 \|\| radius > 10000 \|\| !Float.isFinite(temperature) \|\| temperature < minimumTemperature \|\| temperature > maximumTemperature \|\| !Float.isFinite(minimumTemperature) \|\| !Float.isFinite(maximumTemperature) \|\| minimumTemperature < 100 \|\| maximumTemperature > 200000 \|\| !Float.isFinite(luminosity) \|\| luminosity <= 0 \|\| luminosity > 10000000 \|\| !Float.isFinite(envelope) \|\| envelope < 0 \|\| envelope > 1) ` 成立时抛出 ` new IllegalArgumentException("Invalid stellar control point") `<br>[调用处 StellarControlPoint.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L36) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L23) |
| ` public StellarControlPoint resolve(StellarMetallicityResponse response, double coordinate) ` | 实现调用 ` StellarMetallicityResponse.factor(response.radius(), coordinate) `<br>实现调用 ` response.radius() `<br>实现调用 ` StellarMetallicityResponse.factor(response.temperature(), coordinate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L35) |
| ` public StellarVisualState visual(PhaseNode node) ` | 实现调用 ` StellarVisualState.colorForTemperature(this.temperature) `<br>实现调用 ` Math.max(0.05f, (float) Math.sqrt(this.luminosity)) `<br>实现调用 ` Math.sqrt(this.luminosity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L45) |
| ` public float progress() ` | 读取 record 分量 ` progress ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L8) |
| ` public float radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L8) |
| ` public float temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L8) |
| ` public float luminosity() ` | 读取 record 分量 ` luminosity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L8) |
| ` public float envelope() ` | 读取 record 分量 ` envelope ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L8) |
| ` public float minimumTemperature() ` | 读取 record 分量 ` minimumTemperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L9) |
| ` public float maximumTemperature() ` | 读取 record 分量 ` maximumTemperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L7) |

## StellarEventProfile

` public final class StellarEventProfile implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L17)

恒星终局事件的视觉参数。 事件只描述渲染时间线和最终残骸提示，实际方块破坏、伤害和残骸写回仍由 加速器的既有玩法路径负责。曲线中的半径是相对于事件开始时本体半径的比例。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarEventProfile> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L64) |
| ` public StellarEventProfile( String profileId, int precursorTicks, int collapseTicks, int ejectaTicks, int fadeTicks, List<Float> coreRadiusCurve, List<Float> ejectaRadiusCurve, float peakEmission, List<Integer> palette, int shellCount, int rayCount, float rayLength, float asymmetry, RemnantKind remnantKind ) ` | ` (precursorTicks < 0 \|\| collapseTicks < 1 \|\| ejectaTicks < 0 \|\| fadeTicks < 0 \|\| !Float.isFinite(peakEmission) \|\| peakEmission < 0 \|\| peakEmission > 64 \|\| !Float.isFinite(rayLength) \|\| rayLength < 0 \|\| rayLength > 128 \|\| !Float.isFinite(asymmetry) \|\| asymmetry < 0 \|\| asymmetry > 1 \|\| shellCount < 0 \|\| shellCount > 16 \|\| rayCount < 0 \|\| rayCount > 128) ` 成立时抛出 ` new IllegalArgumentException("Invalid stellar event values: " + profileId) `<br>[调用处 StellarEventProfile.resolveVisual](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L152) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L96) |
| ` public void validate() ` | ` (this.profileId.isBlank() \|\| this.palette.size() > 64 \|\| (long) this.precursorTicks + this.collapseTicks + this.ejectaTicks + this.fadeTicks > 24000) ` 成立时抛出 ` new IllegalArgumentException("Invalid stellar event: " + this.profileId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L143) |
| ` public StellarEventProfile resolveVisual(double coordinate) ` | 实现调用 ` this.ejectaRadiusCurve.stream().map(value -> Math.min(128, value * factor)).toList() `<br>实现调用 ` this.ejectaRadiusCurve.stream().map(value -> Math.min(128, value * factor)) `<br>实现调用 ` this.ejectaRadiusCurve.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L150) |
| ` public String profileId() ` | 末尾返回 ` this.profileId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L165) |
| ` public String id() ` | 末尾返回 ` this.profileId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L169) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.profileId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L173) |
| ` public int precursorTicks() ` | 末尾返回 ` this.precursorTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L178) |
| ` public int collapseTicks() ` | 末尾返回 ` this.collapseTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L182) |
| ` public int ejectaTicks() ` | 末尾返回 ` this.ejectaTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L186) |
| ` public int fadeTicks() ` | 末尾返回 ` this.fadeTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L190) |
| ` public List<Float> coreRadiusCurve() ` | 末尾返回 ` this.coreRadiusCurve ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L194) |
| ` public List<Float> ejectaRadiusCurve() ` | 末尾返回 ` this.ejectaRadiusCurve ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L198) |
| ` public float peakEmission() ` | 末尾返回 ` this.peakEmission ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L202) |
| ` public List<Integer> palette() ` | 末尾返回 ` this.palette ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L206) |
| ` public int color(float progress) ` | 按事件进度在 profile 调色板中平滑取色。<br>` (this.palette.size() == 1) ` 成立时提前返回 ` this.palette.get(0) `<br>末尾返回 ` StellarVisualState.interpolateColor(this.palette.get(index), this.palette.get(index + 1), t - index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L211) |
| ` public int shellCount() ` | 末尾返回 ` this.shellCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L218) |
| ` public int rayCount() ` | 末尾返回 ` this.rayCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L222) |
| ` public float rayLength() ` | 末尾返回 ` this.rayLength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L226) |
| ` public float asymmetry() ` | 末尾返回 ` this.asymmetry ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L230) |
| ` public RemnantKind remnantKind() ` | 末尾返回 ` this.remnantKind ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L234) |
| ` public int totalTicks() ` | 返回整个事件时间线长度，保证至少包含坍缩窗口。<br>末尾返回 ` (int) Math.clamp(total, 1L, Integer.MAX_VALUE) `<br>[调用处 StellarEventProfile.timelinePhase](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L250) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L239) |
| ` public int shockBreakoutTick() ` | 末尾返回 ` (int) Math.clamp(total, 0L, Integer.MAX_VALUE) `<br>[调用处 StellarEventProfile.timelinePhase](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L252) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L244) |
| ` public TimelinePhase timelinePhase(float progress) ` | ` (tick < this.precursorTicks) ` 成立时提前返回 ` TimelinePhase.PRECURSOR `<br>` (tick < this.shockBreakoutTick()) ` 成立时提前返回 ` TimelinePhase.CORE_COLLAPSE `<br>` (tick == this.shockBreakoutTick()) ` 成立时提前返回 ` TimelinePhase.SHOCK_BREAKOUT `<br>` (tick < this.shockBreakoutTick() + this.ejectaTicks) ` 成立时提前返回 ` TimelinePhase.EJECTA_EXPANSION `<br>末尾返回 ` TimelinePhase.FADE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L249) |
| ` public float coreRadius(float progress) ` | 根据事件进度采样核心半径曲线。 AGB 热脉冲的胀缩由阶段级脉动负责（见 StellarVisualState#radiusAt）， 这里不再叠加第二个正弦，否则两个不同周期的振荡叠在一起会变成高频抖动。<br>末尾返回 ` Math.max(0.0f, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L264) |
| ` public float ejectaRadius(float progress) ` | 根据事件进度采样抛射物半径曲线。<br>末尾返回 ` Math.max(0.0f, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L270) |
| ` public float maxEjectaRadius() ` | 曲线可能达到的最大抛射半径，用于包围盒预留空间。<br>末尾返回 ` maximum ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L281) |
| ` public float maxCoreRadius() ` | 曲线可能达到的最大核心半径。<br>末尾返回 ` maximum ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L290) |
| ` public float emission(float progress) ` | 计算带有峰值和末段淡出的发光强度。<br>末尾返回 ` this.peakEmission * pulse * Math.clamp(rise, 0.0f, 1.0f) * Math.clamp(fade, 0.0f, 1.0f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L299) |

## StellarEventProfile.RemnantKind

` public enum RemnantKind `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L28)

事件最终残骸种类。NONE 表示完全解体。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` WHITE_DWARF ` | 声明于枚举 ` StellarEventProfile.RemnantKind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L29) |
| ` NEUTRON_STAR ` | 声明于枚举 ` StellarEventProfile.RemnantKind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L30) |
| ` BLACK_HOLE ` | 声明于枚举 ` StellarEventProfile.RemnantKind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L31) |
| ` NONE ` | 声明于枚举 ` StellarEventProfile.RemnantKind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L32) |
| ` public static final Codec<RemnantKind> CODEC ` | 初值 ` Codec.STRING.comapFlatMap( id -> { RemnantKind kind = fromId(id); return kind == null ? DataResult.error(() -> "未知残骸种类: " + id) : DataResult.success(kind); }, RemnantKind::getSerializedName ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L36) |
| ` public String getSerializedName() ` | 末尾返回 ` this.id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L50) |
| ` public static RemnantKind[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L28) |
| ` public static RemnantKind valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L28) |

## StellarEventProfile.TimelinePhase

` public enum TimelinePhase `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L19)

通用事件时间线段。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` PRECURSOR ` | 声明于枚举 ` StellarEventProfile.TimelinePhase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L20) |
| ` CORE_COLLAPSE ` | 声明于枚举 ` StellarEventProfile.TimelinePhase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L21) |
| ` SHOCK_BREAKOUT ` | 声明于枚举 ` StellarEventProfile.TimelinePhase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L22) |
| ` EJECTA_EXPANSION ` | 声明于枚举 ` StellarEventProfile.TimelinePhase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L23) |
| ` FADE ` | 声明于枚举 ` StellarEventProfile.TimelinePhase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L24) |
| ` public static TimelinePhase[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L19) |
| ` public static TimelinePhase valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L19) |
