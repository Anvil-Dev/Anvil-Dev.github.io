# dev.dubhe.anvilcraft.client.renderer.blockentity.state（LitBlockRenderState 至 TradingStationRenderState）



## LitBlockRenderState

` public class LitBlockRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void clearQuads() ` | 执行 ` this.layers.values().forEach(List::clear) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L21) |
| ` public void addQuad(float x, float y, float z, BakedQuad quad, QuadInstance instance) ` | 实现调用 ` copy.setColor(vertex, instance.getColor(vertex)) `<br>实现调用 ` instance.getColor(vertex) `<br>实现调用 ` copy.setLightCoords(vertex, instance.getLightCoords(vertex)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L25) |
| ` public void submitGeometry(PoseStack pose, SubmitNodeCollector collector) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L36) |
| ` public Map<ChunkSectionLayer, List<LitQuad>> getLayers() ` | 末尾返回 ` this.layers `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L17) |
| ` public LitBlockRenderState() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L17) |

## LitBlockRenderState.LitQuad

` public record LitQuad(float x, float y, float z, BakedQuad quad, QuadInstance lighting) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LitQuad(float x, float y, float z, BakedQuad quad, QuadInstance lighting) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public float x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public float y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public float z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public BakedQuad quad() ` | 读取 record 分量 ` quad ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public QuadInstance lighting() ` | 读取 record 分量 ` lighting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LitBlockRenderState.java#L56) |

## OverseerRenderState

` public class OverseerRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public BlockModelRenderState getModel() ` | 末尾返回 ` this.model `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |
| ` public float getTime() ` | 末尾返回 ` this.time `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |
| ` public float getBobOffset() ` | 末尾返回 ` this.bobOffset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |
| ` public void setModel(@Nullable final BlockModelRenderState model) ` | 执行 ` this.model = model `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |
| ` public void setTime(final float time) ` | 执行 ` this.time = time `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |
| ` public void setBobOffset(final float bobOffset) ` | 执行 ` this.bobOffset = bobOffset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |
| ` public OverseerRenderState() ` | Java 提供的无参构造器。<br>[调用处 OverseerBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L45) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/OverseerRenderState.java#L9) |

## PipeCheckValveRenderState

` public class PipeCheckValveRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PipeCheckValveRenderState.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState getArm() ` | 末尾返回 ` this.arm `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PipeCheckValveRenderState.java#L12) |
| ` public Map<Direction, Direction> getFlows() ` | 末尾返回 ` this.flows `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PipeCheckValveRenderState.java#L12) |
| ` public void setArm(final BlockModelRenderState arm) ` | 执行 ` this.arm = arm `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PipeCheckValveRenderState.java#L12) |
| ` public void setFlows(final Map<Direction, Direction> flows) ` | 执行 ` this.flows = flows `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PipeCheckValveRenderState.java#L12) |
| ` public PipeCheckValveRenderState() ` | Java 提供的无参构造器。<br>[调用处 PipeCheckValveBERenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L38) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PipeCheckValveRenderState.java#L12) |

## PowerGeneratorRenderState

` public class PowerGeneratorRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState getCube() ` | 末尾返回 ` this.cube `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |
| ` public float getElevation() ` | 末尾返回 ` this.elevation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |
| ` public float getRotation() ` | 末尾返回 ` this.rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |
| ` public void setCube(final BlockModelRenderState cube) ` | 执行 ` this.cube = cube `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |
| ` public void setElevation(final float elevation) ` | 执行 ` this.elevation = elevation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |
| ` public void setRotation(final float rotation) ` | 执行 ` this.rotation = rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |
| ` public PowerGeneratorRenderState() ` | Java 提供的无参构造器。<br>[调用处 ChargeCollectorRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L19) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PowerGeneratorRenderState.java#L8) |

## ProcessingTableRenderState

` public class ProcessingTableRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public float progress ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L16) |
| ` public int itemCount ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L17) |
| ` public final List<DisplayedItem> items ` | 初值 ` new ArrayList<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L18) |
| ` public final Map<SelectionModel, BlockModelRenderState> models ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L19) |
| ` public ProcessingTableRenderState() ` | Java 提供的无参构造器。<br>[调用处 ProcessingItemStackRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L15) |

## ProcessingTableRenderState.DisplayedItem

` public static class DisplayedItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final ItemModelState item ` | 初值 ` new ItemModelState() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L22) |
| ` public final List<Matrix4f> poses ` | 初值 ` new ArrayList<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L23) |
| ` public int poseCount ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L24) |
| ` public boolean blockModel ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L25) |
| ` public void addPose(Matrix4f pose) ` | 实现调用 ` this.poses.size() `<br>分支 ` (this.poseCount == this.poses.size()) ` 内调用 ` this.poses.add(new Matrix4f()) `<br>实现调用 ` this.poses.get(this.poseCount++).set(pose) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L27) |
| ` public DisplayedItem() ` | Java 提供的无参构造器。<br>[调用处 ProcessingItemStackRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L98) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L21) |

## ProcessingTableRenderState.ItemModelState

` public static class ItemModelState extends ItemStackRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void clear() ` | 实现调用 ` super.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L37) |
| ` @Override public void appendModelIdentityElement(Object element) ` | 分支 ` (!this.knownGeometry && element instanceof ProcessingModelShape shape) ` 内调用 ` shape.anvilcraft$isThreeDimensional() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L44) |
| ` public boolean isThreeDimensional() ` | 末尾返回 ` this.knownGeometry ? this.threeDimensional : this.usesBlockLight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L52) |
| ` public ItemModelState() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ProcessingTableRenderState.java#L33) |

## PulseGeneratorRenderState

` public class PulseGeneratorRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState getIndicator() ` | 末尾返回 ` this.indicator `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public OctahedralGroup getRotation() ` | 末尾返回 ` this.rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public boolean isOutputting() ` | 末尾返回 ` this.outputting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public float getPhaseProgress() ` | 末尾返回 ` this.phaseProgress `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public void setIndicator(final BlockModelRenderState indicator) ` | 执行 ` this.indicator = indicator `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public void setRotation(final OctahedralGroup rotation) ` | 执行 ` this.rotation = rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public void setOutputting(final boolean outputting) ` | 执行 ` this.outputting = outputting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public void setPhaseProgress(final float phaseProgress) ` | 执行 ` this.phaseProgress = phaseProgress `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |
| ` public PulseGeneratorRenderState() ` | Java 提供的无参构造器。<br>[调用处 PulseGeneratorBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PulseGeneratorRenderState.java#L9) |

## PumpRenderState

` public class PumpRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState getPiston1() ` | 末尾返回 ` this.piston1 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public BlockModelRenderState getPiston2() ` | 末尾返回 ` this.piston2 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public float getPiston1Offset() ` | 末尾返回 ` this.piston1Offset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public float getPiston2Offset() ` | 末尾返回 ` this.piston2Offset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public Orientation getOrientation() ` | 末尾返回 ` this.orientation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public void setPiston1(final BlockModelRenderState piston1) ` | 执行 ` this.piston1 = piston1 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public void setPiston2(final BlockModelRenderState piston2) ` | 执行 ` this.piston2 = piston2 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public void setPiston1Offset(final float piston1Offset) ` | 执行 ` this.piston1Offset = piston1Offset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public void setPiston2Offset(final float piston2Offset) ` | 执行 ` this.piston2Offset = piston2Offset `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public void setOrientation(final Orientation orientation) ` | 执行 ` this.orientation = orientation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |
| ` public PumpRenderState() ` | Java 提供的无参构造器。<br>[调用处 PumpBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/PumpRenderState.java#L9) |

## RedstoneDiceRenderState

` public class RedstoneDiceRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState model ` | 字段类型为 ` BlockModelRenderState ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L7) |
| ` public float progress ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L8) |
| ` public int scenario ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L9) |
| ` public int previousScenario ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L10) |
| ` public final int[] faces ` | 初值 ` new int[3] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L11) |
| ` public final int[] previousFaces ` | 初值 ` new int[3] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L12) |
| ` public RedstoneDiceRenderState() ` | Java 提供的无参构造器。<br>[调用处 RedstoneDiceBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RedstoneDiceRenderState.java#L6) |

## RuinsRenderState

` public class RuinsRenderState extends LitBlockRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RuinsRenderState.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public DisplayRenderer display ` | 字段类型为 ` DisplayRenderer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RuinsRenderState.java#L9) |
| ` @Nullable public WorldFluidRenderState fluid ` | 字段类型为 ` WorldFluidRenderState ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RuinsRenderState.java#L10) |
| ` public RuinsRenderState() ` | Java 提供的无参构造器。<br>[调用处 RuinsBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L56) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RuinsRenderState.java#L8) |

## RuinsRenderState.DisplayRenderer

` public interface DisplayRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RuinsRenderState.java#L12)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void submit(PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/RuinsRenderState.java#L14) |

## SmartBlockPlacerRenderState

` public class SmartBlockPlacerRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final Map<SelectionModel, BlockModelRenderState> models ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L18) |
| ` public SmartBlockPlacerRenderer.ArmRenderState arm ` | 初值 ` new SmartBlockPlacerRenderer.ArmRenderState(0, 0, 0, 0, 0, false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L19) |
| ` public Direction facing ` | 初值 ` Direction.NORTH ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L20) |
| ` public boolean upsideDown ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L21) |
| ` public final ItemStackRenderState item ` | 初值 ` new ItemStackRenderState() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L22) |
| ` public final ItemStackRenderState specialItem ` | 初值 ` new ItemStackRenderState() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L23) |
| ` public final Matrix4f itemTransform ` | 初值 ` new Matrix4f() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L24) |
| ` @Nullable public BlockModelRenderState blockModel ` | 字段类型为 ` BlockModelRenderState ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L25) |
| ` @Nullable public BlockEntityRenderer<BlockEntity, BlockEntityRenderState> blockEntityRenderer ` | 字段类型为 ` BlockEntityRenderer<BlockEntity, BlockEntityRenderState> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L26) |
| ` @Nullable public BlockEntityRenderState blockEntityState ` | 字段类型为 ` BlockEntityRenderState ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L27) |
| ` public SmartBlockPlacerRenderState() ` | Java 提供的无参构造器。<br>[调用处 SmartBlockPlacerRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L87) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SmartBlockPlacerRenderState.java#L17) |

## SpacetimeSupercomputerRenderState

` public class SpacetimeSupercomputerRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SpacetimeSupercomputerRenderState.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public FormattedCharSequence text ` | 字段类型为 ` FormattedCharSequence ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SpacetimeSupercomputerRenderState.java#L8) |
| ` public int width ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SpacetimeSupercomputerRenderState.java#L9) |
| ` public int lineHeight ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SpacetimeSupercomputerRenderState.java#L10) |
| ` public int size ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SpacetimeSupercomputerRenderState.java#L11) |
| ` public SpacetimeSupercomputerRenderState() ` | Java 提供的无参构造器。<br>[调用处 SpacetimeSupercomputerBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L26) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/SpacetimeSupercomputerRenderState.java#L7) |

## StoragePortRenderState

` public class StoragePortRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/StoragePortRenderState.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final ItemStackRenderState markedItem ` | 初值 ` new ItemStackRenderState() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/StoragePortRenderState.java#L7) |
| ` public int visibleFaces ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/StoragePortRenderState.java#L8) |
| ` public StoragePortRenderState() ` | Java 提供的无参构造器。<br>[调用处 StoragePortBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/StoragePortRenderState.java#L6) |

## TeslaTowerRenderState

` public class TeslaTowerRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public Vec3 getStart() ` | 末尾返回 ` this.start `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |
| ` @Nullable public Vec3 getEnd() ` | 末尾返回 ` this.end `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |
| ` @Nullable public Vec3 getCamera() ` | 末尾返回 ` this.camera `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |
| ` public void setStart(@Nullable final Vec3 start) ` | 执行 ` this.start = start `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |
| ` public void setEnd(@Nullable final Vec3 end) ` | 执行 ` this.end = end `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |
| ` public void setCamera(@Nullable final Vec3 camera) ` | 执行 ` this.camera = camera `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |
| ` public TeslaTowerRenderState() ` | Java 提供的无参构造器。<br>[调用处 TeslaTowerRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L31) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TeslaTowerRenderState.java#L9) |

## TradingStationRenderState

` public class TradingStationRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<ItemClusterRenderState> getItems() ` | 末尾返回 ` this.items `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
| ` public Direction getFacing() ` | 末尾返回 ` this.facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
| ` public float getRotation() ` | 末尾返回 ` this.rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
| ` public void setItems(final List<ItemClusterRenderState> items) ` | 执行 ` this.items = items `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
| ` public void setFacing(final Direction facing) ` | 执行 ` this.facing = facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
| ` public void setRotation(final float rotation) ` | 执行 ` this.rotation = rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
| ` public TradingStationRenderState() ` | Java 提供的无参构造器。<br>[调用处 TradingStationBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L38) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/TradingStationRenderState.java#L11) |
