# dev.dubhe.anvilcraft.block.entity.celestial（StellarVisualState 至 WindSpeed）



## StellarVisualState

` public record StellarVisualState(float radius, float temperature, float luminosity, int surfaceColor, float emission, float envelopeOpacity, float coreRadius, float ejectaRadius, float pulsationAmplitude, float pulsationFrequency, String surfaceStyle, float windStrength, float flowProgress) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L12)

恒星渲染用的浮点快照。 该类型不属于 StarData，也不会参与巨构资格、引力或资源计算。 服务端和客户端都可以用同一组数值采样，从而避免每 20 tick 改写离散天体数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarVisualState> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L27) |
| ` public static final StellarVisualState DEFAULT ` | 没有演化状态时使用的中性快照。<br>初值 ` new StellarVisualState( 1.0f, 5800.0f, 1.0f, 0xFFF3D0, 1.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, "default" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L44) |
| ` public StellarVisualState(float radius, float temperature, float luminosity, int surfaceColor, float emission, float envelopeOpacity, float coreRadius, float ejectaRadius, float pulsationAmplitude, float pulsationFrequency, String surfaceStyle, float windStrength, float flowProgress) ` | 实现调用 ` finiteAtLeast(radius, 0.01f) `<br>实现调用 ` finiteAtLeast(temperature, 100.0f) `<br>实现调用 ` finiteAtLeast(luminosity, 0.0f) `<br>[调用处 StellarVisualState.interpolate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L152) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L58) |
| ` public StellarVisualState( float radius, float temperature, float luminosity, int surfaceColor, float emission, float envelopeOpacity, float coreRadius, float ejectaRadius, float pulsationAmplitude, float pulsationFrequency, String surfaceStyle ) ` | [调用处 CelestialForgingAnvilBlockEntity.getStellarVisualState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L311) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L74) |
| ` public StellarVisualState( float radius, float temperature, float luminosity, int surfaceColor, float emission, float envelopeOpacity, float coreRadius, float ejectaRadius, float pulsationAmplitude, float pulsationFrequency ) ` | 兼容只提供基础物理量的调用方。<br>执行 ` this( radius, temperature, luminosity, surfaceColor, emission, envelopeOpacity, coreRadius, ejectaRadius, pulsationAmplitude, pulsationFrequency, "default" ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L83) |
| ` public float red() ` | 末尾返回 ` ((this.surfaceColor >> 16) & 0xFF) / 255.0f `<br>[调用处 StellarVisualState.surfaceColorComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L118) |
| ` public float green() ` | 末尾返回 ` ((this.surfaceColor >> 8) & 0xFF) / 255.0f `<br>[调用处 StellarVisualState.surfaceColorComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L122) |
| ` public float blue() ` | 末尾返回 ` (this.surfaceColor & 0xFF) / 255.0f `<br>[调用处 StellarVisualState.surfaceColorComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L126) |
| ` public int surfaceColorRgb() ` | 末尾返回 ` this.surfaceColor ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L130) |
| ` public float[] surfaceColorComponents() ` | 末尾返回 ` new float[] {this.red(), this.green(), this.blue()} ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L134) |
| ` public static StellarVisualState interpolate(StellarVisualState from, StellarVisualState to, float progress) ` | 以单调且无过冲的平滑曲线连接两个视觉快照。 from 是阶段入口状态（上一节点），to 是本阶段自身的目标状态。 半径、温度和光度在阶段内部过渡到本节点的值，因此“红巨星支膨胀”“AGB 膨胀”发生在 对应阶段内部，而不会提前到上一个阶段的末尾。带脉动的阶段在前段就完成过渡，剩下 的时间留给可见的脉冲；这条包络同时是束星环的依据，因此环在整个阶段里保持本阶段 的最大尺寸，不跟着脉冲一起缩放。脉动参数和表面风格是本阶段的固有特征，全程直接 取 to，不做跨阶段混合。<br>实现调用 ` Float.isFinite(progress) `<br>实现调用 ` Math.clamp(progress, 0.0f, 1.0f) `<br>实现调用 ` riseCurve(safeProgress, to.pulsationAmplitude, to.pulsationFrequency) `<br>[调用处 StellarNodeDynamics.sample](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L148) |
| ` public static int interpolateColor(int from, int to, float progress) ` | 在近似线性光空间插值 RGB，避免温度过渡中间出现灰暗色。<br>末尾返回 ` (r << 16) \| (g << 8) \| b `<br>[调用处 StellarEventProfile.color](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L215) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L184) |
| ` public static int colorForTemperature(float kelvin) ` | 根据有效温度得到稳定且偏高饱和度的近似黑体颜色，服务端无需依赖客户端纹理。<br>末尾返回 ` vividifyBlackbodyColor((r << 16) \| (g << 8) \| b, clampedKelvin) `<br>[调用处 StellarControlPoint.visual](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L207) |
| ` public static int surfaceColorForTemperature(float kelvin) ` | 末尾返回 ` colorForTemperature(kelvin) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L231) |
| ` public static float temperatureForSurfaceClass(CelestialBodyClass bodyClass, int energy) ` | 根据旧版表面分类给没有演化状态的恒星提供一致的近似有效温度。<br>` (bodyClass == CelestialBodyClass.WHITE_DWARF) ` 成立时提前返回 ` 14000.0f `<br>` (bodyClass == CelestialBodyClass.NEUTRON_STAR) ` 成立时提前返回 ` 100000.0f `<br>` (bodyClass == CelestialBodyClass.BLACK_HOLE) ` 成立时提前返回 ` 1000.0f `<br>末尾返回 ` Math.clamp(base + (Math.clamp(energy, 1, 64) - 32) * 18.0f, 1000.0f, 40000.0f) `<br>[调用处 CelestialForgingAnvilBlockEntity.getStellarVisualState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L306) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L236) |
| ` public float radiusAt(double phaseProgress) ` | 在阶段包络上叠加脉冲后的视觉半径；不改变玩法半径。 脉冲只向内收缩（峰值等于包络），因此束星环按包络取值即可在整个阶段保持本阶段 的最大尺寸，不会跟着恒星一起呼吸。#pulsationFrequency 是“每个阶段脉动几 次”，用阶段进度而不是绝对游戏刻推进：脉动次数不再取决于阶段被分到多少刻，频率在 阶段之间变化时也不会因为“绝对刻 × 频率”整体平移而让相位瞬间跳到随机位置——那正是 旧实现里换阶段出现高频抖动的原因。每个脉冲的峰值逐次降低，末段再收敛回包络。<br>` (this.pulsationAmplitude <= 0.0f \|\| this.pulsationFrequency <= 0.0f) ` 成立时提前返回 ` this.radius `<br>末尾返回 ` this.radius * (float) (peak * (1.0 - this.pulsationAmplitude * dip * hold)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L352) |
| ` public StellarVisualState withWind(float strength, float progress) ` | 返回 ` StellarVisualState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L364) |
| ` public StellarVisualState withRadius(float newRadius) ` | 返回只替换视觉半径的快照，保持其它物理量和玩法字段不变。<br>实现调用 ` Math.max(0.01f, newRadius) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L371) |
| ` public StellarVisualState withVisualRadius(float newRadius) ` | 只改变本体视觉半径，保持独立抛射壳和核心层的尺寸不变。<br>实现调用 ` Math.max(0.01f, newRadius) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L392) |
| ` public StellarVisualState withSurfaceColor(int color) ` | 只替换表面颜色，用于从发现时颜色平滑过渡到轨道颜色。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L411) |
| ` public float radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L13) |
| ` public float temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L14) |
| ` public float luminosity() ` | 读取 record 分量 ` luminosity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L15) |
| ` public int surfaceColor() ` | 读取 record 分量 ` surfaceColor ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L16) |
| ` public float emission() ` | 读取 record 分量 ` emission ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L17) |
| ` public float envelopeOpacity() ` | 读取 record 分量 ` envelopeOpacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L18) |
| ` public float coreRadius() ` | 读取 record 分量 ` coreRadius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L19) |
| ` public float ejectaRadius() ` | 读取 record 分量 ` ejectaRadius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L20) |
| ` public float pulsationAmplitude() ` | 读取 record 分量 ` pulsationAmplitude ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L21) |
| ` public float pulsationFrequency() ` | 读取 record 分量 ` pulsationFrequency ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L22) |
| ` public String surfaceStyle() ` | 读取 record 分量 ` surfaceStyle ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L23) |
| ` public float windStrength() ` | 读取 record 分量 ` windStrength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L24) |
| ` public float flowProgress() ` | 读取 record 分量 ` flowProgress ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarVisualState.java#L12) |

## Temperature

` public enum Temperature implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` FREEZING ` | 声明于枚举 ` Temperature ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L7) |
| ` COLD ` | 声明于枚举 ` Temperature ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L8) |
| ` MILD ` | 声明于枚举 ` Temperature ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L9) |
| ` HOT ` | 声明于枚举 ` Temperature ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L10) |
| ` SCORCHED ` | 声明于枚举 ` Temperature ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L11) |
| ` @Override public @NotNull String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L19) |
| ` public static Temperature fromName(String name) ` | 末尾返回 ` MILD `<br>[调用处 RockyPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L24) |
| ` public static Temperature[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L6) |
| ` public static Temperature valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Temperature.java#L6) |

## TempleDemandInput

` public record TempleDemandInput(TempleDemandRecipe.Category category) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @NotNull ItemStack getItem(int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L9) |
| ` @Override public int size() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L14) |
| ` public TempleDemandInput(TempleDemandRecipe.Category category) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L8) |
| ` public TempleDemandRecipe.Category category() ` | 读取 record 分量 ` category ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandInput.java#L8) |

## TempleDemandRecipe

` public record TempleDemandRecipe(Category category, List<Entry> entries) implements Recipe<TempleDemandInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<TempleDemandRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L79) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TempleDemandRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L84) |
| ` @Override public boolean matches(TempleDemandInput input, @NotNull Level level) ` | 末尾返回 ` this.category == input.category() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L94) |
| ` @Override public @NotNull ItemStack assemble(@NotNull TempleDemandInput input, HolderLookup.@NotNull Provider registries) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L99) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L104) |
| ` @Override public @NotNull ItemStack getResultItem(HolderLookup.@NotNull Provider registries) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L109) |
| ` @Override public @NotNull RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.TEMPLE_DEMAND_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L114) |
| ` @Override public @NotNull RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.TEMPLE_DEMAND_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L119) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L124) |
| ` public TempleDemandRecipe(Category category, List<Entry> entries) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L29) |
| ` public Category category() ` | 读取 record 分量 ` category ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L30) |
| ` public List<Entry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L29) |

## TempleDemandRecipe.Category

` public enum Category `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BLESSING ` | 声明于枚举 ` TempleDemandRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L35) |
| ` PUNISHMENT ` | 声明于枚举 ` TempleDemandRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L36) |
| ` public static final Codec<Category> CODEC ` | 初值 ` Codec.STRING.xmap( Category::fromName, Category::getSerializedName ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L38) |
| ` public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L49) |
| ` public static Category fromName(String name) ` | 实现调用 ` values() `<br>实现调用 ` value.name.equals(name) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L53) |
| ` public static Category[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L34) |
| ` public static Category valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L34) |

## TempleDemandRecipe.Entry

` public record Entry(String itemId, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<Entry> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( Codec.STRING.fieldOf("id").forGetter(Entry::itemId), Codec.INT.fieldOf("count").forGetter(Entry::count) ).apply(ins, Entry::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L62) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Entry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, Entry::itemId, ByteBufCodecs.INT, Entry::count, Entry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L67) |
| ` public ResourceLocation itemResource() ` | 末尾返回 ` ResourceLocation.parse(this.itemId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L74) |
| ` public Entry(String itemId, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61) |
| ` public String itemId() ` | 读取 record 分量 ` itemId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L61) |

## TempleDemandRecipe.Serializer

` public static final class Serializer implements RecipeSerializer<TempleDemandRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L129)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @NotNull MapCodec<TempleDemandRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L130) |
| ` @Override public @NotNull StreamCodec<RegistryFriendlyByteBuf, TempleDemandRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L135) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/TempleDemandRecipe.java#L129) |

## WindSpeed

` public enum WindSpeed implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` HIGH ` | 声明于枚举 ` WindSpeed ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L7) |
| ` VERY_HIGH ` | 声明于枚举 ` WindSpeed ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L8) |
| ` @Override public @NotNull String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L16) |
| ` public static WindSpeed fromName(String name) ` | 末尾返回 ` HIGH `<br>[调用处 GiantPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L21) |
| ` public static WindSpeed[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L6) |
| ` public static WindSpeed valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/WindSpeed.java#L6) |
