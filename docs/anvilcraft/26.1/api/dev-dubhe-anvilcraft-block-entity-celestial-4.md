# dev.dubhe.anvilcraft.block.entity.celestial（PhaseNode 至 ShatteredPlanet）



## PhaseNode

` public record PhaseNode(StellarEvolutionPhase phaseId, float durationWeight, float radius, float temperature, float luminosity, float envelopeFraction, float pulsationAmplitude, float pulsationFrequency, String surfaceStyle, String eventProfileId, String nodeId, StellarNodeDynamics dynamics) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L9)

一条恒星演化轨道上的控制点。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<PhaseNode> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L23) |
| ` public PhaseNode(StellarEvolutionPhase phaseId, float durationWeight, float radius, float temperature, float luminosity, float envelopeFraction, float pulsationAmplitude, float pulsationFrequency, String surfaceStyle, String eventProfileId, String nodeId, StellarNodeDynamics dynamics) ` | ` (nodeId.isBlank()) ` 成立时抛出 ` new IllegalArgumentException("Missing stellar node ID") `<br>` (!Float.isFinite(envelopeFraction) \|\| envelopeFraction < 0 \|\| envelopeFraction > 1 \|\| !Float.isFinite(pulsationAmplitude) \|\| pulsationAmplitude < 0 \|\| pulsationAmplitude > 0.95f \|\| !Float.isFinite(pulsationFrequency) \|\| pulsationFrequency < 0) ` 成立时抛出 ` new IllegalArgumentException("Invalid stellar node dynamics") `<br>[调用处 PhaseNode.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L38) |
| ` public PhaseNode resolve(double coordinate) ` | 实现调用 ` this.dynamics.response() `<br>实现调用 ` this.dynamics.resolve(coordinate) `<br>实现调用 ` resolved.points().getLast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L62) |
| ` public boolean hasEventProfile() ` | 是否在此节点触发一个事件 profile。<br>末尾返回 ` !this.eventProfileId.isBlank() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L81) |
| ` public float massLossBudget() ` | 未写入玩法质量字段的失质量预算，按包层剩余比例派生。<br>末尾返回 ` Math.clamp(1.0f - this.envelopeFraction, 0.0f, 1.0f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L86) |
| ` public StellarEvolutionPhase phaseId() ` | 读取 record 分量 ` phaseId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L10) |
| ` public float durationWeight() ` | 读取 record 分量 ` durationWeight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L11) |
| ` public float radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L12) |
| ` public float temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L13) |
| ` public float luminosity() ` | 读取 record 分量 ` luminosity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L14) |
| ` public float envelopeFraction() ` | 读取 record 分量 ` envelopeFraction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L15) |
| ` public float pulsationAmplitude() ` | 读取 record 分量 ` pulsationAmplitude ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L16) |
| ` public float pulsationFrequency() ` | 读取 record 分量 ` pulsationFrequency ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L17) |
| ` public String surfaceStyle() ` | 读取 record 分量 ` surfaceStyle ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L18) |
| ` public String eventProfileId() ` | 读取 record 分量 ` eventProfileId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L19) |
| ` public String nodeId() ` | 读取 record 分量 ` nodeId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L20) |
| ` public StellarNodeDynamics dynamics() ` | 读取 record 分量 ` dynamics ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L9) |

## PlanetResourceGenerator

` public final class PlanetResourceGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceGenerator.java#L42)

根据匹配的 PlanetResourceRecipe 和随机规则生成天体资源集合。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static PlanetaryResourceSet generate( CelestialBodyData body, int ageAnvilCount, Level level, long seed, @Nullable Identifier seedItemId ) ` | ` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` set `<br>末尾返回 ` set `<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L151) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceGenerator.java#L47) |
| ` public static PlanetaryResourceSet advanceCivilization(PlanetaryResourceSet current, Level level, long seed) ` | Advances existing life, preserving all resources if the target recipe is unavailable.<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` current `<br>` (recipe == null) ` 成立时提前返回 ` current `<br>末尾返回 ` result `<br>[调用处 MonolithDeployerHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MonolithDeployerHandler.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceGenerator.java#L124) |

## PlanetaryResourceSet

` public class PlanetaryResourceSet `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L16)

天体生成的全部资源集合，与 CelestialBodyData 一同保存在方块实体 NBT 中。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<WeightedItemStack> getMinerals() ` | 末尾返回 ` Collections.unmodifiableList(this.minerals) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L66) |
| ` public List<WeightedFluidStack> getFluids() ` | 末尾返回 ` Collections.unmodifiableList(this.fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L70) |
| ` public List<WeightedItemStack> getGiantItems() ` | 末尾返回 ` Collections.unmodifiableList(this.giantItems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L74) |
| ` public List<WeightedFluidStack> getGiantFluids() ` | 末尾返回 ` Collections.unmodifiableList(this.giantFluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L78) |
| ` public List<WeightedItemStack> getBiologicalItems() ` | 末尾返回 ` Collections.unmodifiableList(this.biologicalItems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L82) |
| ` public List<WeightedFluidStack> getBiologicalFluids() ` | 末尾返回 ` Collections.unmodifiableList(this.biologicalFluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L86) |
| ` public List<WeightedItemStack> getOfferings() ` | 末尾返回 ` Collections.unmodifiableList(this.offerings) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L90) |
| ` public List<WeightedItemStack> getWastelandItems() ` | 末尾返回 ` Collections.unmodifiableList(this.wastelandItems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L94) |
| ` public boolean hasCivilization() ` | 末尾返回 ` this.hasCivilization ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L98) |
| ` public boolean isEmpty() ` | 实现调用 ` this.minerals.isEmpty() `<br>实现调用 ` this.fluids.isEmpty() `<br>实现调用 ` this.giantItems.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L102) |
| ` public void addMineral(WeightedItemStack entry) ` | 执行 ` this.minerals.add(entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L115) |
| ` public void addFluid(WeightedFluidStack entry) ` | 执行 ` this.fluids.add(entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L119) |
| ` public void addBiologicalItem(WeightedItemStack entry) ` | 执行 ` this.biologicalItems.add(entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L131) |
| ` public void addBiologicalFluid(WeightedFluidStack entry) ` | 执行 ` this.biologicalFluids.add(entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L135) |
| ` public void addOffering(WeightedItemStack entry) ` | 执行 ` this.offerings.add(entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L139) |
| ` public void setHasCivilization() ` | 执行 ` this.hasCivilization = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L147) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L157) |
| ` public static PlanetaryResourceSet fromTag(CompoundTag tag) ` | 末尾返回 ` set `<br>[调用处 CfaSearchController.applySnapshot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L210) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L188) |
| ` public boolean isWasteland() ` | 末尾返回 ` this.isWasteland `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L16) |
| ` public PlanetaryResourceSet() ` | Java 提供的无参构造器。<br>[调用处 CfaSearchController.match](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java#L124) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L16) |

## PlanetaryResourceSet.WeightedFluidStack

` public record WeightedFluidStack(Identifier fluidId, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35)

带权重的流体资源条目。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L36) |
| ` public static WeightedFluidStack fromTag(CompoundTag tag) ` | 末尾返回 ` new WeightedFluidStack(id, weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L43) |
| ` public WeightedFluidStack(Identifier fluidId, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |
| ` public Identifier fluidId() ` | 读取 record 分量 ` fluidId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L35) |

## PlanetaryResourceSet.WeightedItemStack

` public record WeightedItemStack(Identifier itemId, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19)

带权重的物品资源条目。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L20) |
| ` public static WeightedItemStack fromTag(CompoundTag tag) ` | 末尾返回 ` new WeightedItemStack(id, weight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L27) |
| ` public WeightedItemStack(Identifier itemId, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |
| ` public Identifier itemId() ` | 读取 record 分量 ` itemId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetaryResourceSet.java#L19) |

## PressureType

` public enum PressureType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` GAS ` | 声明于枚举 ` PressureType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L6) |
| ` ICE ` | 声明于枚举 ` PressureType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L7) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L15) |
| ` public static PressureType fromName(String name) ` | 末尾返回 ` PressureType.GAS `<br>[调用处 GiantPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L20) |
| ` public static PressureType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 PressureType.fromName](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L5) |
| ` public static PressureType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PressureType.java#L5) |

## RingType

` public enum RingType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 声明于枚举 ` RingType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L6) |
| ` WEAK ` | 声明于枚举 ` RingType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L7) |
| ` STRONG ` | 声明于枚举 ` RingType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L8) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L16) |
| ` public static RingType fromName(String name) ` | 末尾返回 ` RingType.NONE `<br>[调用处 GiantPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L21) |
| ` public static RingType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 RingType.fromName](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L5) |
| ` public static RingType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RingType.java#L5) |

## RockyPlanetData

` public record RockyPlanetData(CelestialBodyClass bodyClass, boolean hasAtmosphere, LiquidCoverage liquidCoverage, Temperature temperature, RingType ringType, int size, int paletteBaseRow, int paletteOverlayRow, float axialTilt, int rotationSpeed, int magneticFieldStrength) implements CelestialBodyData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public CelestialBodyType type() ` | 末尾返回 ` CelestialBodyType.ROCKY_PLANET `<br>[调用处 RockyPlanetData.toTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L19) |
| ` @Override public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L24) |
| ` public static RockyPlanetData fromTag(CompoundTag tag) ` | 实现调用 ` CelestialBodyData.readClass(tag, CelestialBodyType.ROCKY_PLANET) `<br>实现调用 ` tag.getIntOr("magneticFieldStrength", 0) `<br>实现调用 ` tag.getBooleanOr("hasAtmosphere", false) `<br>[调用处 CelestialBodyData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyData.java#L156) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L42) |
| ` public RockyPlanetData(CelestialBodyClass bodyClass, boolean hasAtmosphere, LiquidCoverage liquidCoverage, Temperature temperature, RingType ringType, int size, int paletteBaseRow, int paletteOverlayRow, float axialTilt, int rotationSpeed, int magneticFieldStrength) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |
| ` public CelestialBodyClass bodyClass() ` | 读取 record 分量 ` bodyClass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L6) |
| ` public boolean hasAtmosphere() ` | 读取 record 分量 ` hasAtmosphere ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L7) |
| ` public LiquidCoverage liquidCoverage() ` | 读取 record 分量 ` liquidCoverage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L8) |
| ` public Temperature temperature() ` | 读取 record 分量 ` temperature ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L9) |
| ` public RingType ringType() ` | 读取 record 分量 ` ringType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L10) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L11) |
| ` public int paletteBaseRow() ` | 读取 record 分量 ` paletteBaseRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L12) |
| ` public int paletteOverlayRow() ` | 读取 record 分量 ` paletteOverlayRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L13) |
| ` public float axialTilt() ` | 读取 record 分量 ` axialTilt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L14) |
| ` public int rotationSpeed() ` | 读取 record 分量 ` rotationSpeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L15) |
| ` public int magneticFieldStrength() ` | 读取 record 分量 ` magneticFieldStrength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L5) |

## ShatteredPlanet

` public final class ShatteredPlanet `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int AGE_ANVIL_COUNT ` | 初值 ` 13 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L7) |
| ` public static final int MASS_ANVIL_COUNT ` | 初值 ` 13 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L8) |
| ` public static SpecialCelestialBodyData createBody() ` | 实现调用 ` AnvilCraft.of("shattered_planet").toString() `<br>实现调用 ` AnvilCraft.of("shattered_planet") `<br>[调用处 CelestialBodyPresets.sample](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyPresets.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L13) |
| ` public static PlanetaryResourceSet createResources() ` | 末尾返回 ` resources `<br>[调用处 CelestialBodyPresets.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyPresets.java#L108) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/ShatteredPlanet.java#L31) |
