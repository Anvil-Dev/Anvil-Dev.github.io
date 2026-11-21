# dev.dubhe.anvilcraft.worldgen（OverworldSkyState 至 VanillaOverworldBiomeSource）



## OverworldSkyState

` public record OverworldSkyState(Vector sun, Vector moon, Rotation frame, double illuminatedFraction, Vector moonLight, int moonPhase) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L7)

为天空渲染和登陆窗口提供天体位置，模型样式不参与轨道计算。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static OverworldSkyState at(long dayTime, double partialTick, double timeOfDay) ` | 末尾返回 ` new OverworldSkyState(sun, moon, frame, Math.clamp((1 - sun.dot(moon)) / 2, 0, 1), sun, phase) `<br>[调用处 OverworldSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L15) |
| ` public static OverworldSkyState vanilla(double sunAngle, double moonAngle, int moonPhase) ` | 原版轨道保持日月相对位置，月相光照独立于原版固定的日月夹角。<br>末尾返回 ` new OverworldSkyState(sun, moon, frame, (1 - light.dot(moon)) / 2, light, moonPhase) `<br>[调用处 OverworldSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L24) |
| ` public boolean isMoonOverhead() ` | 末尾返回 ` this.moon.y() >= OVERHEAD_COSINE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L32) |
| ` public Vector moonNormal(Vector normal) ` | 月面始终朝向地球，天平动来自观察方向的变化，不额外叠加自转。<br>末尾返回 ` this.frame.apply(oppositeView(MODEL_ROTATION.apply(normal))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L37) |
| ` public OverworldSkyState(Vector sun, Vector moon, Rotation frame, double illuminatedFraction, Vector moonLight, int moonPhase) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L7) |
| ` public Vector sun() ` | 读取 record 分量 ` sun ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L8) |
| ` public Vector moon() ` | 读取 record 分量 ` moon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L8) |
| ` public Rotation frame() ` | 读取 record 分量 ` frame ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L8) |
| ` public double illuminatedFraction() ` | 读取 record 分量 ` illuminatedFraction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L8) |
| ` public Vector moonLight() ` | 读取 record 分量 ` moonLight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L8) |
| ` public int moonPhase() ` | 读取 record 分量 ` moonPhase ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldSkyState.java#L7) |

## SmallMonolith

` public final class SmallMonolith `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L24)

Places one small monolith near the shared spawn of the Overworld.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation TEMPLATE ` | 初值 ` AnvilCraft.of("small_monolith") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L25) |
| ` public static void generate(ServerLevel level) ` | 实现调用 ` Level.OVERWORLD.equals(level.dimension()) `<br>实现调用 ` level.dimension() `<br>实现调用 ` level.getChunkSource().getGenerator() `<br>[调用处 TheMonolithEventListener.onServerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L32) |
| ` public static Placement placement(StructureTemplate template, BlockPos surfacePos) ` | Centers the rotated template above the surface without burying its core.<br>末尾返回 ` new Placement(corner, rotation, template.getBoundingBox(settings, corner)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L148) |

## SmallMonolith.Placement

` public record Placement(BlockPos corner, Rotation rotation, BoundingBox boundingBox) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161)

一次碑体放置的参数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Placement(BlockPos corner, Rotation rotation, BoundingBox boundingBox) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |
| ` public BlockPos corner() ` | 读取 record 分量 ` corner ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |
| ` public Rotation rotation() ` | 读取 record 分量 ` rotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |
| ` public BoundingBox boundingBox() ` | 读取 record 分量 ` boundingBox ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/SmallMonolith.java#L161) |

## VanillaOverworldBiomeSource

` public class VanillaOverworldBiomeSource extends BiomeSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/VanillaOverworldBiomeSource.java#L21)

Vanilla overworld climate layout with access to the original biome data.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<VanillaOverworldBiomeSource> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( instance -> instance.group(RegistryOps.retrieveGetter(Registries.BIOME)) .apply(instance, VanillaOverworldBiomeSource::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/VanillaOverworldBiomeSource.java#L22) |
| ` public VanillaOverworldBiomeSource(HolderGetter<Biome> biomes) ` | 实现调用 ` MultiNoiseBiomeSource.createFromList(parameters.parameters()) `<br>实现调用 ` parameters.parameters() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/VanillaOverworldBiomeSource.java#L29) |
| ` public static BiomeGenerationSettings originalGenerationSettings(Holder<Biome> biome) ` | 末尾返回 ` biome.value().modifiableBiomeInfo().getOriginalBiomeInfo().generationSettings() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/VanillaOverworldBiomeSource.java#L36) |
| ` @Override public Holder<Biome> getNoiseBiome(int x, int y, int z, Climate.Sampler sampler) ` | 末尾返回 ` this.delegate.getNoiseBiome(x, y, z, sampler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/VanillaOverworldBiomeSource.java#L50) |
| ` @Override public void addDebugInfo(List<String> info, BlockPos pos, Climate.Sampler sampler) ` | 执行 ` this.delegate.addDebugInfo(info, pos, sampler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/VanillaOverworldBiomeSource.java#L55) |
