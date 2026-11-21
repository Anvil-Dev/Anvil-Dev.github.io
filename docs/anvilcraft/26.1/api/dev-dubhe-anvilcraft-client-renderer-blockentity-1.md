# dev.dubhe.anvilcraft.client.renderer.blockentity（AdvancedComparatorRenderer 至 ControlValveBlockEntityRenderer）



## AdvancedComparatorRenderer

` public class AdvancedComparatorRenderer implements BlockEntityRenderer<AdvancedComparatorBlockEntity, AdvancedComparatorRenderState>, ModelSelectionRenderer<AdvancedComparatorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> INDICATOR ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Advanced Comparator Indicator Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L26) |
| ` public AdvancedComparatorRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L30) |
| ` @Override public AdvancedComparatorRenderState createRenderState() ` | 末尾返回 ` new AdvancedComparatorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L33) |
| ` @Override public void extractRenderState( AdvancedComparatorBlockEntity be, AdvancedComparatorRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setRotation(MountedRedstone.modelRotation(be.getBlockState())) `<br>实现调用 ` MountedRedstone.modelRotation(be.getBlockState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L38) |
| ` @Override public void submit(AdvancedComparatorRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyIndicatorPose(pose, state.getRotation(), state.getSignal()) `<br>实现调用 ` state.getRotation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L52) |
| ` @Override public void collectSelectionModels(AdvancedComparatorBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` applyIndicatorPose(pose, MountedRedstone.modelRotation(state), state.getValue(AdvancedComparatorBlock.POWER)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorRenderer.java#L60) |

## AutoEnchantingTableBlockEntityRenderer

` public final class AutoEnchantingTableBlockEntityRenderer implements BlockEntityRenderer<AutoEnchantingTableBlockEntity, AutoEnchantingTableBlockEntityRenderer.State>, ModelSelectionRenderer<AutoEnchantingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AutoEnchantingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 实现调用 ` context.sprites() `<br>实现调用 ` context.bakeLayer(ModelLayers.BOOK) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L48) |
| ` @Override public State createRenderState() ` | 末尾返回 ` new State() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L54) |
| ` @Override public void extractRenderState(AutoEnchantingTableBlockEntity entity, State state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breaking) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(entity, state, partialTick, cameraPosition, breaking) `<br>实现调用 ` this.bookPose(entity, partialTick) `<br>实现调用 ` entity.getItem(AutoEnchantingTableBlockEntity.SLOT_INPUT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L59) |
| ` @Override public void submit(State state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyBookPose(pose, state.book) `<br>实现调用 ` BookModel.State.forAnimation(state.book.time(), 0, 0, state.book.open()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L72) |
| ` @Override public void collectSelectionParts(AutoEnchantingTableBlockEntity entity, float partialTick, List<SelectionPart> output) ` | 实现调用 ` entity.getLevel() `<br>实现调用 ` this.bookPose(entity, partialTick) `<br>实现调用 ` applyBookPose(pose, book) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L102) |
| ` @Override public AABB getRenderBoundingBox(AutoEnchantingTableBlockEntity entity) ` | 末尾返回 ` new AABB(pos.getX(), pos.getY(), pos.getZ(), pos.getX() + 1, pos.getY() + 2, pos.getZ() + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L135) |

## AutoEnchantingTableBlockEntityRenderer.State

` public static final class State extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L144)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public State() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L144) |

## BaseFluidHandlerHolderRenderer

` public abstract class BaseFluidHandlerHolderRenderer<B extends BlockEntity & IFluidResourceHandlerHolder, S extends FluidHandlerRenderState> implements BlockEntityRenderer<B, S> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseFluidHandlerHolderRenderer.java#L23)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public float getFill(ResourceHandler<FluidResource> tank) ` | 末尾返回 ` (float) tank.getAmountAsLong(0) / tank.getCapacityAsLong(0, tank.getResource(0)) `<br>[调用处 BaseFluidHandlerHolderRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseFluidHandlerHolderRenderer.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseFluidHandlerHolderRenderer.java#L53) |
| ` @Override public void extractRenderState( B be, S state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setResource(null) `<br>实现调用 ` state.setFill(0.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseFluidHandlerHolderRenderer.java#L57) |
| ` @Override public void submit(S state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera) ` | 实现调用 ` state.getResource() `<br>实现调用 ` state.getMinY() `<br>实现调用 ` resource.getFluidType().isLighterThanAir() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseFluidHandlerHolderRenderer.java#L78) |
| ` public BaseFluidHandlerHolderRenderer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseFluidHandlerHolderRenderer.java#L23) |

## BaseShowItemRenderer

` public abstract class BaseShowItemRenderer<B extends BlockEntity, S extends BaseShowItemRenderState> implements BlockEntityRenderer<B, S> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseShowItemRenderer(BlockEntityRendererProvider.Context ctx) ` | 执行 ` this.resolver = ctx.itemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L26) |
| ` @Override public void extractRenderState( B be, S state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` this.getDisplayItemStack(be) `<br>实现调用 ` state.setRotation((be.getLevel().getGameTime() + partialTicks) * 2f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L30) |
| ` @Override public void submit(S state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera) ` | 实现调用 ` state.getDisplay() `<br>实现调用 ` display.isEmpty() `<br>实现调用 ` RandomSource.create(Item.getId(display.getItem()) + display.getDamageValue()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L50) |

## BatchCraftingRenderer

` public class BatchCraftingRenderer extends BaseShowItemRenderer<BaseBatchCraftingBlockEntity, BaseShowItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BatchCraftingRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCraftingRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BatchCraftingRenderer.java#L18) |
| ` @Override public BaseShowItemRenderState createRenderState() ` | 末尾返回 ` new BaseShowItemRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BatchCraftingRenderer.java#L22) |
| ` @Override public void submit( BaseShowItemRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getDisplayState() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` Minecraft.getInstance().level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BatchCraftingRenderer.java#L32) |

## BigRedButtonBlockEntityRenderer

` public class BigRedButtonBlockEntityRenderer implements BlockEntityRenderer<BigRedButtonBlockEntity, BigRedButtonRenderState>, ModelSelectionRenderer<BigRedButtonBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> CAP ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: BigRedButton") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L24) |
| ` public BigRedButtonBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L26) |
| ` @Override public BigRedButtonRenderState createRenderState() ` | 末尾返回 ` new BigRedButtonRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L29) |
| ` @Override public void extractRenderState( BigRedButtonBlockEntity blockEntity, BigRedButtonRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(blockEntity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` extractAnimation(blockEntity, state, partialTick) `<br>实现调用 ` FeatureRendererSupport.initialize(CAP, blockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L34) |
| ` @Override public void collectSelectionModels(BigRedButtonBlockEntity blockEntity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` extractAnimation(blockEntity, state, partialTick) `<br>实现调用 ` collectModels(state, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L49) |
| ` @Override public void submit(BigRedButtonRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 执行 ` collectModels(state, pose, (model, modelPose) -> state.model.submit(modelPose, collector, state.lightCoords, OverlayTexture.NO_OVERLAY, 0)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L56) |

## CFARenderer

` public class CFARenderer implements BlockEntityRenderer<CelestialForgingAnvilBlockEntity, CFARenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L75)

锻星砧的世界内渲染器 负责束星环骨骼层级、红石驱动的平滑缩放、天体自转、动态行星贴图、恒星颜色与光晕、 大气层、天体环、托举光束以及超新星闪光和放射光束。

类型注解 ` @SuppressWarnings({"checkstyle:VariableDeclarationUsageDistance", "UnstableApiUsage"}) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> RING1 ` | 初值 ` key("CFA Ring 1") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L80) |
| ` public static final StandaloneModelKey<BlockStateModel> RING2 ` | 初值 ` key("CFA Ring 2") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L81) |
| ` public static final StandaloneModelKey<BlockStateModel> RING3 ` | 初值 ` key("CFA Ring 3") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L82) |
| ` public static final StandaloneModelKey<BlockStateModel> RING4 ` | 初值 ` key("CFA Ring 4") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L83) |
| ` public static final StandaloneModelKey<BlockStateModel> RING5 ` | 初值 ` key("CFA Ring 5") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L84) |
| ` public static final StandaloneModelKey<BlockStateModel> RING6 ` | 初值 ` key("CFA Ring 6") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L85) |
| ` public static final StandaloneModelKey<BlockStateModel> R1_EXCAVATOR ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_1_excavator")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L89) |
| ` public static final StandaloneModelKey<BlockStateModel> R1_EXCAVATOR_OFF ` | 初值 ` key("CFA Ring 1 Excavator Off") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L91) |
| ` public static final StandaloneModelKey<BlockStateModel> R1_EXTRACTOR ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_1_exctractor")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L92) |
| ` public static final StandaloneModelKey<BlockStateModel> R2_EXTRACTOR ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_2_exctractor")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L94) |
| ` public static final StandaloneModelKey<BlockStateModel> R1_ECO_STATION ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_1_eco_station")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L96) |
| ` public static final StandaloneModelKey<BlockStateModel> R1_TEMPLE ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_1_temple")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L98) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_COLLIDER ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_4_collider")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L100) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_DYSON_SPHERE ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_4_dyson_sphere")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L102) |
| ` public static final StandaloneModelKey<BlockStateModel> R5_DYSON_SPHERE ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_5_dyson_sphere")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L104) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_COIL ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_4_coil")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L106) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_COIL_FIX ` | 初值 ` key("CFA Ring 4 Coil Fix") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L108) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_COIL_RING ` | 初值 ` key("CFA Ring 4 Coil Ring") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L109) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_PENROSE_SPHERE ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_4_penrose_sphere")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L110) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_PENROSE_SPHERE_FIX ` | 初值 ` key("CFA Ring 4 Penrose Fix") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L112) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_PENROSE_SPHERE_LASER ` | 初值 ` key("CFA Ring 4 Penrose Laser") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L113) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_PENROSE_SPHERE_LASER_OFF ` | 初值 ` key( "CFA Ring 4 Penrose Laser Off") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L114) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_MATTER_DECOMPRESSOR ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_4_matter_decompressor")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L116) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_MATTER_DECOMPRESSOR_FIX ` | 初值 ` key( "CFA Ring 4 Decompressor Fix") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L118) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_MATTER_DECOMPRESSOR_RING ` | 初值 ` key( "CFA Ring 4 Decompressor Ring") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L120) |
| ` public static final StandaloneModelKey<BlockStateModel> R4_WORMHOLE_STABILIZER ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_4_wormhole_stabilizer")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L122) |
| ` public static final StandaloneModelKey<BlockStateModel> R5_ACCELERATOR ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_5_stellar_evolution_accelerator")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L124) |
| ` public static final StandaloneModelKey<BlockStateModel> R6_ACCELERATOR ` | 初值 ` getMegastructureModel( AnvilCraft.of("block/celestial_forging_anvil_ring_6_stellar_evolution_accelerator")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L126) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_STAR ` | 初值 ` key("CFA Body Star") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L129) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_NEUTRON_STAR ` | 初值 ` key("CFA Body Neutron Star") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L130) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_NEUTRON_STAR_JET ` | 初值 ` key("CFA Body Neutron Star Jet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L131) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_BLACK_HOLE ` | 初值 ` key("CFA Body Black Hole") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L132) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_ARID ` | 初值 ` key("CFA Body Planet Arid") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L134) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_WET ` | 初值 ` key("CFA Body Planet Wet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L135) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_BOGGY ` | 初值 ` key("CFA Body Planet Boggy") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L136) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_OCEANIC ` | 初值 ` key("CFA Body Planet Oceanic") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L137) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_ATMOSPHERELESS ` | 初值 ` key( "CFA Body Planet Atmosphereless") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L138) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_GIANT ` | 初值 ` key("CFA Body Planet Giant") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L140) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_OVERWORLD ` | 初值 ` key("CFA Body Planet Overworld") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L141) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_FLESH ` | 初值 ` key("CFA Body Planet Flesh") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L142) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_INTELLIGENCE ` | 初值 ` key( "CFA Body Planet Intelligence") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L143) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_SHATTERED ` | 初值 ` key("CFA Body Planet Shattered") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L145) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_HOLLOW ` | 初值 ` key("CFA Body Planet Hollow") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L146) |
| ` public static final StandaloneModelKey<BlockStateModel> BODY_PLANET_ERROR ` | 初值 ` key("CFA Body Planet Error") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L147) |
| ` public static StandaloneModelKey<BlockStateModel> getMegastructureModel(Identifier modelLocation) ` | 末尾返回 ` MEGASTRUCTURE_MODELS.computeIfAbsent( modelLocation, location -> key("CFA Megastructure " + location) ) `<br>[调用处 RegisterAdditionalEventListener.registerModels](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L155) |
| ` public CFARenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.playerHeadModel = SkullBlockRenderer.createModel(context.entityModelSet(), SkullBlock.Types.PLAYER) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L162) |
| ` @Override public CFARenderState createRenderState() ` | 末尾返回 ` new CFARenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L166) |
| ` @Override public void extractRenderState( CelestialForgingAnvilBlockEntity be, CFARenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 执行 ` this.extractState(be, state, partialTicks, cameraPosition, breakProgress, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L196) |
| ` public void extractItemState(CelestialForgingAnvilBlockEntity be, CFARenderState state, boolean head) ` | 分支 ` (head) ` 内调用 ` this.extractState(be, state, 0, Vec3.ZERO, null, true) `<br>分支 ` !(head) ` 内调用 ` state.setOcclusionKey(null) `<br>分支 ` !(head) ` 内调用 ` state.setRenderBounds(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L207) |
| ` public static StandaloneModelKey<BlockStateModel> getSpecialBodyModel(Identifier modelLocation) ` | 获取资源包天体模型对应的稳定独立模型键。<br>末尾返回 ` CUSTOM_BODY_MODELS.computeIfAbsent( modelLocation, location -> key("CFA Custom Body " + location) ) `<br>[调用处 RegisterAdditionalEventListener.registerModels](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L243) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L721) |
| ` @Override public void submit(CFARenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 执行 ` this.submitContents(state, pose, collector, camera, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L728) |
| ` public void submitHeadItem(CFARenderState state, PoseStack pose, SubmitNodeCollector collector) ` | 执行 ` this.submitContents( state, pose, collector, Minecraft.getInstance().gameRenderer.getGameRenderState().levelRenderState.cameraRenderState, true ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L733) |
| ` public void submitItemBody( CFARenderState state, AABB bounds, long seed, PoseStack pose, SubmitNodeCollector collector ) ` | 实现调用 ` state.getEffectiveBodyData() `<br>实现调用 ` Math.max(bounds.getXsize(), Math.max(bounds.getYsize(), bounds.getZsize())) `<br>实现调用 ` bounds.getXsize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1145) |
| ` public static void renderDeferredTractorBeams( PoseStack pose, MultiBufferSource.BufferSource bufferSource, Vec3 cameraPosition ) ` | 在天气与云层完成后渲染本帧收集的锻星砧托举光束。<br>实现调用 ` DEFERRED_TRACTOR_BEAMS.isEmpty() `<br>实现调用 ` bufferSource.getBuffer(ModRenderTypes.STELLAR_BEAM) `<br>实现调用 ` DEFERRED_TRACTOR_BEAMS.values() `<br>[调用处 AnvilCraftClient.renderDeferredBeams](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L186) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1669) |
| ` @Override public boolean shouldRenderOffScreen() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1761) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` 512 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1766) |
| ` @Override public AABB getRenderBoundingBox(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` aabb.setMaxY(aabb.maxY + maxHeight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1771) |
| ` public AABB getOcclusionBoundingBox(CelestialForgingAnvilBlockEntity be, float partialTicks) ` | 末尾返回 ` supernovaBounds(be, partialTicks, bounds) `<br>[调用处 CFARenderer.extractState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L347) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1894) |

## CelestialForgingAnvilFluidInterfaceBlockEntityRenderer

` public class CelestialForgingAnvilFluidInterfaceBlockEntityRenderer implements BlockEntityRenderer<CelestialForgingAnvilFluidInterfaceBlockEntity, CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.State> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilFluidInterfaceBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L27) |
| ` @Override public State createRenderState() ` | 末尾返回 ` new State() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L30) |
| ` @Override public void extractRenderState( CelestialForgingAnvilFluidInterfaceBlockEntity entity, State state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(entity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` entity.getBlockState().getValue(CelestialForgingAnvilInterfaceBlock.FACING) `<br>实现调用 ` entity.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L35) |
| ` @Override public void submit(State state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0.5, 0, 0.5) `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(180 - state.facing.toYRot())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L51) |
| ` @Override public AABB getRenderBoundingBox(CelestialForgingAnvilFluidInterfaceBlockEntity entity) ` | 末尾返回 ` new AABB(entity.getBlockPos()).expandTowards(0, 5 / 16D, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L65) |

## CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.State

` public static class State extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public State() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L70) |

## ChargeCollectorRenderer

` public class ChargeCollectorRenderer extends PowerProducerRenderer<ChargeCollectorBlockEntity, PowerGeneratorRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Charge Collector Cube Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L10) |
| ` public ChargeCollectorRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L14) |
| ` @Override public PowerGeneratorRenderState createRenderState() ` | 末尾返回 ` new PowerGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L17) |

## ChargerRenderer

` public class ChargerRenderer extends BaseShowItemRenderer<ChargerBlockEntity, BaseShowItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChargerRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerRenderer.java#L18) |
| ` @Override public BaseShowItemRenderState createRenderState() ` | 末尾返回 ` new BaseShowItemRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerRenderer.java#L22) |
| ` @Override public void submit( BaseShowItemRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getDisplayState() `<br>实现调用 ` item.getModelBoundingBox() `<br>实现调用 ` aabb.getZsize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerRenderer.java#L33) |

## ConfinementChamberRenderer

` public class ConfinementChamberRenderer extends BaseShowItemRenderer<ConfinementChamberBlockEntity, BaseShowItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ConfinementChamberRenderer.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ConfinementChamberRenderer.java#L13) |
| ` @Override public BaseShowItemRenderState createRenderState() ` | 末尾返回 ` new BaseShowItemRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ConfinementChamberRenderer.java#L17) |
| ` @Override public void submit(BaseShowItemRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0.5, 0.325, 0.5) `<br>实现调用 ` pose.scale(1.15F, 1.15F, 1.15F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ConfinementChamberRenderer.java#L27) |

## ControlValveBlockEntityRenderer

` public class ControlValveBlockEntityRenderer implements BlockEntityRenderer<ControlValveBlockEntity, ControlValveRenderState>, ModelSelectionRenderer<ControlValveBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HANDWHEEL ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Control Valve Handwheel Model") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L44) |
| ` @SuppressWarnings("unused") public ControlValveBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L61) |
| ` @Override public ControlValveRenderState createRenderState() ` | 末尾返回 ` new ControlValveRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L65) |
| ` @Override public void extractRenderState( ControlValveBlockEntity be, ControlValveRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` blockState.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L70) |
| ` @Override public void submit( ControlValveRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` this.submitHandwheel(state, poseStack, submitNodeCollector) `<br>实现调用 ` this.submitFluidIndicators(state, poseStack, submitNodeCollector) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L95) |
| ` @Override public void collectSelectionModels(ControlValveBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyHandwheelPose(pose, be.getFacing(), be.getBlockState().getValue(ControlValveBlock.AXIS), be.getMaxRate()) `<br>实现调用 ` be.getFacing() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L126) |
| ` @Override public AABB getRenderBoundingBox(ControlValveBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize(blockEntity.getBlockPos().getCenter(), 2, 2, 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L219) |
