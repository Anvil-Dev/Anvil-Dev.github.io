# dev.dubhe.anvilcraft.client.renderer.blockentity（LargeCauldronRenderHooks.AfterRender 至 SpacetimeSupercomputerBlockEntityRenderer）



## LargeCauldronRenderHooks.AfterRender

` public interface AfterRender `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L55)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void submit(PoseStack pose, SubmitNodeCollector collector, int light, int overlay) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L57) |

## LargeCauldronRenderHooks.Handler

` public interface Handler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean showVanillaFire(LargeCauldronBlockEntity tank) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L45) |
| ` default @Nullable AfterRender extract(LargeCauldronBlockEntity tank, float partialTick) ` | 返回的绘制回调应只捕获本阶段提取的数据，不在提交阶段读取方块实体或世界。<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L50) |

## LargeFluidTankRenderer

` public class LargeFluidTankRenderer implements BlockEntityRenderer<LargeFluidTankBlockEntity, LayeredFluidTankRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeFluidTankRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L35) |
| ` @Override public LayeredFluidTankRenderState createRenderState() ` | 末尾返回 ` new LayeredFluidTankRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L38) |
| ` @Override public boolean shouldRender(LargeFluidTankBlockEntity blockEntity, Vec3 cameraPosition) ` | 末尾返回 ` blockEntity.isMainPart() && BlockEntityRenderer.super.shouldRender(blockEntity, cameraPosition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L43) |
| ` @Override public void extractRenderState( LargeFluidTankBlockEntity be, LayeredFluidTankRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.isMainPart() `<br>实现调用 ` LargeFluidTankRenderUtil.worldLayers(be.getStoredFluids(), be.isEnhanced()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L48) |
| ` @Override public void submit(LayeredFluidTankRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L57) |
| ` @Override public AABB getRenderBoundingBox(LargeFluidTankBlockEntity blockEntity) ` | 末尾返回 ` new AABB(blockEntity.getBlockPos()).inflate(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L66) |

## LaserBlockEntityRenderer

` public class LaserBlockEntityRenderer implements BlockEntityRenderer<BaseLaserBlockEntity, LaserRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public LaserBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L19) |
| ` @Override public AABB getRenderBoundingBox(BaseLaserBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize( blockEntity.getBlockPos().getCenter(), renderDistance * 2, renderDistance * 2, renderDistance * 2 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L23) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` 256 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L34) |
| ` @Override public LaserRenderState createRenderState() ` | 末尾返回 ` new LaserRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L39) |
| ` @Override public void extractRenderState( BaseLaserBlockEntity blockEntity, LaserRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(blockEntity, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.extract(blockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L44) |
| ` @Override public void submit(LaserRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera) ` | 实现调用 ` RenderState.isEnhancedRenderingAvailable() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.translate(0.5f, 0.5f, 0.5f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L56) |
| ` @Override public boolean shouldRenderOffScreen() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L72) |

## MonolithCoreBlockEntityRenderer

` public class MonolithCoreBlockEntityRenderer implements BlockEntityRenderer<MonolithCoreBlockEntity, MonolithCoreBlockEntityRenderer.State> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MonolithCoreBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L41) |
| ` @Override public State createRenderState() ` | 末尾返回 ` new State() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L44) |
| ` @Override public void extractRenderState(MonolithCoreBlockEntity core, State state, float partialTick, Vec3 camera, ModelFeatureRenderer.@Nullable CrumblingOverlay breaking) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(core, state, partialTick, camera, breaking) `<br>实现调用 ` core.getOffering() `<br>实现调用 ` core.getAxis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L49) |
| ` @Override public void submit(State state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 执行 ` this.renderOffering(state, state.axis, state.giant, state.lineHeight, state.age, pose, collector, state.lightCoords, OverlayTexture.NO_OVERLAY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L81) |
| ` @Override public AABB getRenderBoundingBox(MonolithCoreBlockEntity core) ` | 末尾返回 ` new AABB(core.getBlockPos()).inflate(core.isGiant() ? 1 : 0).expandTowards(0, core.getLineHeight(), 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L96) |

## MonolithCoreBlockEntityRenderer.State

` public static class State extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L87)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public State() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L87) |

## OverseerBlockEntityRenderer

` public class OverseerBlockEntityRenderer implements BlockEntityRenderer<OverseerBlockEntity, OverseerRenderState>, ModelSelectionRenderer<OverseerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverseerBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L40) |
| ` @Override public OverseerRenderState createRenderState() ` | 末尾返回 ` new OverseerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L43) |
| ` @Override public void extractRenderState( OverseerBlockEntity blockEntity, OverseerRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(blockEntity, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setModel(null) `<br>实现调用 ` blockEntity.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L48) |
| ` @Override public void submit( OverseerRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getModel() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` applyHeadPose(poseStack, state.getTime()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L73) |
| ` @Override public void collectSelectionModels(OverseerBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` state.getValue(OverseerBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L95) |
| ` @Override public AABB getRenderBoundingBox(OverseerBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize(new Vec3(pos.getX() + 0.5, pos.getY() + 0.75, pos.getZ() + 0.5), 1.5, 2.75, 1.5) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L147) |

## PipeCheckValveBERenderer

` public class PipeCheckValveBERenderer<T extends AbstractPipeBlockEntity> implements BlockEntityRenderer<T, PipeCheckValveRenderState>, ModelSelectionRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> ARM ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Check Valve Arm Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L28) |
| ` @SuppressWarnings("unused") public PipeCheckValveBERenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L32) |
| ` @Override public PipeCheckValveRenderState createRenderState() ` | 末尾返回 ` new PipeCheckValveRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L36) |
| ` @Override public void extractRenderState( T be, PipeCheckValveRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.effectiveFlows() `<br>实现调用 ` state.setFlows(flows.isEmpty() ? new EnumMap<>(Direction.class) : new EnumMap<>(flows)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L41) |
| ` @Override public void submit( PipeCheckValveRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getFlows().isEmpty() `<br>实现调用 ` state.getFlows() `<br>实现调用 ` state.getArm() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L55) |
| ` @Override public void collectSelectionModels(T be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getBlockState().getValue(PipeBlock.HAS_CHECK_VALVE) `<br>实现调用 ` be.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L70) |
| ` @Override public AABB getRenderBoundingBox(T blockEntity) ` | 末尾返回 ` AABB.ofSize(blockEntity.getBlockPos().getCenter(), 2, 2, 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L93) |

## PowerProducerRenderer

` public abstract class PowerProducerRenderer<T extends BlockEntity & IPowerProducer, S extends PowerGeneratorRenderState> implements BlockEntityRenderer<T, S>, ModelSelectionRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L23)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float ROTATION_MAGIC ` | 初值 ` 0.001220703125F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L26) |
| ` @Override public void extractRenderState( T be, S state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setElevation(this.elevation()) `<br>实现调用 ` this.elevation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L28) |
| ` @Override public void submit(S state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyHeadPose(pose, state.getElevation(), state.getRotation()) `<br>实现调用 ` state.getElevation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L42) |
| ` @Override public void collectSelectionModels(T be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyHeadPose(pose, this.elevation(), this.rotation(be, partialTick)) `<br>实现调用 ` this.elevation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L52) |
| ` public PowerProducerRenderer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L23) |

## ProcessingItemStackRenderer

` public abstract class ProcessingItemStackRenderer<T extends BlockEntity & IItemResourceHandlerHolder> implements BlockEntityRenderer<T, ProcessingTableRenderState>, ModelSelectionRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ProcessingTableRenderState createRenderState() ` | 末尾返回 ` new ProcessingTableRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L47) |
| ` @Override public void collectSelectionModels(T table, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 执行 ` this.visitModels(this.progress(table, partialTick), pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L75) |
| ` @Override public void collectPreviewModels(T table, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 执行 ` this.visitModels(0, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L80) |
| ` @Override public void extractRenderState( T table, ProcessingTableRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(table, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` this.progress(table, partialTick) `<br>实现调用 ` state.models.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L85) |
| ` @Override public void submit(ProcessingTableRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` state.items.get(index) `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` pose.mulPose(displayed.poses.get(copy)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L147) |

## PulseGeneratorBlockEntityRenderer

` public class PulseGeneratorBlockEntityRenderer implements BlockEntityRenderer<PulseGeneratorBlockEntity, PulseGeneratorRenderState>, ModelSelectionRenderer<PulseGeneratorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> INDICATOR ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Pulse Generator Indicator" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L26) |
| ` public static final StandaloneModelKey<BlockStateModel> INDICATOR_OVERSPEED ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Pulse Generator Overspeed Indicator" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L29) |
| ` public PulseGeneratorBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L43) |
| ` @Override public PulseGeneratorRenderState createRenderState() ` | 末尾返回 ` new PulseGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L46) |
| ` @Override public void extractRenderState( PulseGeneratorBlockEntity blockEntity, PulseGeneratorRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState( blockEntity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` state.setRotation(MountedRedstone.modelRotation(blockEntity.getBlockState())) `<br>实现调用 ` MountedRedstone.modelRotation(blockEntity.getBlockState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L51) |
| ` @Override public void submit( PulseGeneratorRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyIndicatorPose(pose, state.getRotation(), state.isOutputting(), state.getPhaseProgress()) `<br>实现调用 ` state.getRotation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L72) |
| ` @Override public void collectSelectionModels(PulseGeneratorBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` MountedRedstone.modelRotation(be.getBlockState()) `<br>实现调用 ` be.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L85) |

## PumpBlockEntityRenderer

` public class PumpBlockEntityRenderer implements BlockEntityRenderer<PumpBlockEntity, PumpRenderState>, ModelSelectionRenderer<PumpBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L30)

泵的方块实体渲染器。 在工作状态时渲染两个活塞模型（pump\_piston\_1, pump\_piston\_2）， 交替上下运动。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> PUMP_PISTON_1 ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Pump Piston 1 Model") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L33) |
| ` public static final StandaloneModelKey<BlockStateModel> PUMP_PISTON_2 ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Pump Piston 2 Model") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L35) |
| ` @SuppressWarnings("unused") public PumpBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L40) |
| ` @Override public PumpRenderState createRenderState() ` | 末尾返回 ` new PumpRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L44) |
| ` @Override public void extractRenderState( PumpBlockEntity be, PumpRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` blockState.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L49) |
| ` @Override public void submit( PumpRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getOrientation() `<br>实现调用 ` state.getPiston1Offset() `<br>实现调用 ` state.getPiston2Offset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L80) |
| ` @Override public void collectSelectionModels(PumpBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` be.isWorking() `<br>实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L97) |
| ` @Override public void collectPreviewModels(PumpBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 执行 ` collectPistons(be.getBlockState(), 0, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L104) |
| ` @Override public AABB getRenderBoundingBox(PumpBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize(blockEntity.getBlockPos().getCenter(), 2, 2, 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L133) |

## RedstoneDiceBlockEntityRenderer

` public class RedstoneDiceBlockEntityRenderer implements BlockEntityRenderer<RedstoneDiceBlockEntity, RedstoneDiceRenderState>, ModelSelectionRenderer<RedstoneDiceBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> DICE ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: RedstoneDice") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L24) |
| ` public RedstoneDiceBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L28) |
| ` @Override public RedstoneDiceRenderState createRenderState() ` | 末尾返回 ` new RedstoneDiceRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L31) |
| ` @Override public void extractRenderState( RedstoneDiceBlockEntity blockEntity, RedstoneDiceRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(blockEntity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` extractAnimation(blockEntity, state, partialTick) `<br>实现调用 ` FeatureRendererSupport.initialize(DICE, blockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L36) |
| ` @Override public void collectSelectionModels(RedstoneDiceBlockEntity blockEntity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` extractAnimation(blockEntity, state, partialTick) `<br>实现调用 ` collectModels(state, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L56) |
| ` @Override public void submit(RedstoneDiceRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 执行 ` collectModels(state, pose, (model, modelPose) -> state.model.submit(modelPose, collector, state.lightCoords, OverlayTexture.NO_OVERLAY, 0)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L63) |

## RuinsBlockEntityRenderer

` public class RuinsBlockEntityRenderer implements BlockEntityRenderer<RuinsBlockEntity, RuinsRenderState>, ModelSelectionRenderer<RuinsBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RuinsBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L51) |
| ` @Override public RuinsRenderState createRenderState() ` | 末尾返回 ` new RuinsRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L54) |
| ` @Override public void extractRenderState(RuinsBlockEntity entity, RuinsRenderState state, float partialTick, Vec3 camera, ModelFeatureRenderer.@Nullable CrumblingOverlay breaking) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(entity, state, partialTick, camera, breaking) `<br>实现调用 ` state.clearQuads() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L59) |
| ` @Nullable public BlockEntity prepareDisplay(RuinsBlockEntity ruins) ` | ` (level == null \|\| display == null \|\| !level.isClientSide()) ` 成立时提前返回 ` display `<br>末尾返回 ` display `<br>[调用处 RuinsBlockEntityRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L88) |
| ` @Override public void collectSelectionParts(RuinsBlockEntity ruins, float partialTick, List<SelectionPart> output) ` | 实现调用 ` ruins.getLevel() `<br>实现调用 ` RuinsRenderContext.enter(level) `<br>实现调用 ` this.prepareDisplay(ruins) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L119) |
| ` public static void updateVisibility(RuinsBlockEntity ruins) ` | 实现调用 ` ruins.getLevel() `<br>实现调用 ` level.getChunkAt(ruins.getBlockPos()).getBlockEntity(ruins.getBlockPos()) `<br>实现调用 ` level.getChunkAt(ruins.getBlockPos()) `<br>[调用处 RuinsBlockEntity.refreshClientVisibility](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L179) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L131) |
| ` public boolean shouldRenderOffScreen(RuinsBlockEntity ruins) ` | ` (ruins.getDisplayState().getBlock() instanceof AbstractMultiPartBlock<?>) ` 成立时提前返回 ` true `<br>末尾返回 ` renderer != null && renderer.shouldRenderOffScreen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L142) |
| ` @Override public AABB getRenderBoundingBox(RuinsBlockEntity ruins) ` | ` (!(ruins.getLevel() instanceof ClientLevel level)) ` 成立时提前返回 ` bounds `<br>[调用处 RuinsBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L203) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L149) |
| ` @Override public boolean shouldRender(RuinsBlockEntity ruins, Vec3 camera) ` | ` (this.getRenderBoundingBox(ruins).distanceToSqr(camera) < this.getViewDistance() * this.getViewDistance()) ` 成立时提前返回 ` true `<br>末尾返回 ` renderer != null && renderer.shouldRender(display, camera) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L201) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` Math.max(64, Minecraft.getInstance().options.getEffectiveRenderDistance() * 16) `<br>[调用处 RuinsBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L203) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L209) |
| ` @Override public void submit(RuinsRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 分支 ` (state.fluid != null) ` 内调用 ` state.fluid.submit(pose, collector) `<br>实现调用 ` state.submitGeometry(pose, collector) `<br>分支 ` (state.display != null) ` 内调用 ` state.display.submit(pose, collector, camera) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L214) |

## RuinsParticles

` public final class RuinsParticles `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsParticles.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void remember(RuinsBlockEntity ruins) ` | 实现调用 ` ruins.getLevel() `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` checkLevel(level) `<br>[调用处 RuinsBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L200) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsParticles.java#L21) |
| ` public static BlockState displayState(Level level, BlockPos pos, BlockState fallback) ` | ` (level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins) ` 成立时提前返回 ` ruins.getDisplayState() `<br>末尾返回 ` recent == null ? fallback : recent `<br>[调用处 RuinsParticleEffectsMixin.anvilcraft$destroyDisguise](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/RuinsParticleEffectsMixin.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsParticles.java#L28) |

## RuinsRenderContext

` public final class RuinsRenderContext implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L7)

仅在当前线程绘制遗迹时，让原渲染器读取伪装视图，不替换真实世界的方块。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static RuinsRenderContext enter(Level level) ` | 末尾返回 ` new RuinsRenderContext(level) `<br>[调用处 RuinsBlockEntityRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L17) |
| ` public static boolean isActive(Level level) ` | 末尾返回 ` ACTIVE.get() == level `<br>[调用处 RuinsRenderLevelMixin.anvilcraft$displayState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/RuinsRenderLevelMixin.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L21) |
| ` @Override public void close() ` | 分支 ` (this.previous == null) ` 内调用 ` ACTIVE.remove() `<br>分支 ` !(this.previous == null) ` 内调用 ` ACTIVE.set(this.previous) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L25) |

## SiftingTableBlockEntityRenderer

` public class SiftingTableBlockEntityRenderer extends ProcessingItemStackRenderer<SiftingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SiftingTableBlockEntityRenderer.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SiftingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SiftingTableBlockEntityRenderer.java#L8) |

## SmartBlockPlacerRenderer

` public class SmartBlockPlacerRenderer implements BlockEntityRenderer<SmartBlockPlacerBlockEntity, SmartBlockPlacerRenderState>, ModelSelectionRenderer<SmartBlockPlacerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L59)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> BASE_MODEL ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Smart Block Placer Base Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L61) |
| ` public static final StandaloneModelKey<BlockStateModel> UPPERARM_MODEL ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Smart Block Placer Upperarm Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L64) |
| ` public static final StandaloneModelKey<BlockStateModel> FOREARM_MODEL ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Smart Block Placer Forearm Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L67) |
| ` public static final StandaloneModelKey<BlockStateModel> CLAW_MODEL ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Smart Block Placer Claw Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L70) |
| ` public static final StandaloneModelKey<BlockStateModel> CLAW_OPEN_MODEL ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Smart Block Placer Claw Open Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L73) |
| ` public SmartBlockPlacerRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.itemModelResolver = context.itemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L81) |
| ` @Override public SmartBlockPlacerRenderState createRenderState() ` | 末尾返回 ` new SmartBlockPlacerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L85) |
| ` @Override public void extractRenderState( SmartBlockPlacerBlockEntity entity, SmartBlockPlacerRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(entity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` entity.getBlockState().getValue(HorizontalDirectionalBlock.FACING) `<br>实现调用 ` entity.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L245) |
| ` @Override public void submit(SmartBlockPlacerRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` this.applyBaseTransform(pose, state.facing, state.upsideDown) `<br>实现调用 ` pose.popPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L316) |
| ` public void collectDancingModels(double renderTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` Mth.lerp((Mth.sin((float) (renderTick / 4 % (2 * Math.PI))) + 1) / 2, -45, 15) `<br>实现调用 ` Mth.sin((float) (renderTick / 4 % (2 * Math.PI))) `<br>实现调用 ` Mth.lerp((Mth.sin((float) (renderTick / 8 % (2 * Math.PI))) + 1) / 4, -45, 95) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L327) |
| ` @Override public void collectSelectionModels( SmartBlockPlacerBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer ) ` | 实现调用 ` entity.getBlockState() `<br>实现调用 ` state.getValue(HorizontalDirectionalBlock.FACING) `<br>实现调用 ` state.getValue(SmartBlockPlacerBlock.UPSIDE_DOWN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L381) |
| ` @Override public AABB getRenderBoundingBox(SmartBlockPlacerBlockEntity be) ` | 末尾返回 ` new AABB(pos.getX() - 1, pos.getY(), pos.getZ() - 1, pos.getX() + 2, pos.getY() + 2, pos.getZ() + 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L595) |

## SmartBlockPlacerRenderer.ArmRenderState

` public record ArmRenderState(float baseSwingAngle, float upperArmAngle, float forearmAngle, float clawAngle, float animationProgress, boolean animationPlaying) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L235)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ArmRenderState(float baseSwingAngle, float upperArmAngle, float forearmAngle, float clawAngle, float animationProgress, boolean animationPlaying) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L235) |
| ` public float baseSwingAngle() ` | 读取 record 分量 ` baseSwingAngle ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L236) |
| ` public float upperArmAngle() ` | 读取 record 分量 ` upperArmAngle ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L237) |
| ` public float forearmAngle() ` | 读取 record 分量 ` forearmAngle ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L238) |
| ` public float clawAngle() ` | 读取 record 分量 ` clawAngle ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L239) |
| ` public float animationProgress() ` | 读取 record 分量 ` animationProgress ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L240) |
| ` public boolean animationPlaying() ` | 读取 record 分量 ` animationPlaying ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L241) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L235) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L235) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L235) |

## SpacetimeSupercomputerBlockEntityRenderer

` public class SpacetimeSupercomputerBlockEntityRenderer implements BlockEntityRenderer<SpacetimeSupercomputerBlockEntity, SpacetimeSupercomputerRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpacetimeSupercomputerBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L21) |
| ` @Override public SpacetimeSupercomputerRenderState createRenderState() ` | 末尾返回 ` new SpacetimeSupercomputerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L24) |
| ` @Override public void extractRenderState( SpacetimeSupercomputerBlockEntity entity, SpacetimeSupercomputerRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(entity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` entity.getProcessingTotal() `<br>实现调用 ` entity.getProcessingRecipe() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L29) |
| ` @Override public void submit( SpacetimeSupercomputerRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` renderFace(state, pose, collector, 0.5F, north, 0) `<br>实现调用 ` renderFace(state, pose, collector, north, 0.5F, 90) `<br>实现调用 ` renderFace(state, pose, collector, 0.5F, south, 180) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L47) |
