# dev.dubhe.anvilcraft.client.renderer.blockentity（GlassPipeFluidBERenderer 至 TeslaTowerRenderer）



## GlassPipeFluidBERenderer

` public class GlassPipeFluidBERenderer implements BlockEntityRenderer<GlassPipeBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeFluidBERenderer.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public GlassPipeFluidBERenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。<br>[调用处 GlassPipeBlockEntityRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L16) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeFluidBERenderer.java#L30) |
| ` @Override public void render( GlassPipeBlockEntity be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` level.getBlockState(be.getBlockPos()) `<br>实现调用 ` be.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeFluidBERenderer.java#L34) |

## HasMobBlockRenderer

` public class HasMobBlockRenderer implements BlockEntityRenderer<HasMobBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public HasMobBlockRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L17) |
| ` @Override public void render( HasMobBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` blockEntity.getLevel() `<br>实现调用 ` blockEntity.getOrCreateDisplayEntity(level) `<br>实现调用 ` poseStack.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L21) |

## HeatCollectorRenderer

` public class HeatCollectorRenderer extends PowerProducerRenderer<HeatCollectorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone( AnvilCraft.of("block/heat_collector_head") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L9) |
| ` public HeatCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L13) |

## HeliostatsBeam

` public final class HeliostatsBeam `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L27)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void track(HeliostatsBlockEntity mirror) ` | 执行 ` ACTIVE.add(mirror) `<br>[调用处 HeliostatsBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/HeliostatsBlockEntity.java#L217) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L40) |
| ` @SubscribeEvent public static void render(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` ACTIVE.isEmpty() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L44) |

## HeliostatsRenderer

` public class HeliostatsRenderer implements BlockEntityRenderer<HeliostatsBlockEntity>, ModelSelectionRenderer<HeliostatsBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public HeliostatsRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L26) |
| ` @SuppressWarnings("deprecation") @Override public void render( HeliostatsBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L44) |
| ` @Override public void collectSelectionModels(HeliostatsBlockEntity blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.translate(0.5, HeliostatsBeam.MIRROR_PIVOT_Y, 0.5) `<br>实现调用 ` blockEntity.getWorkResult() `<br>[调用处 HeliostatsRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L62) |
| ` @Override public AABB getRenderBoundingBox(HeliostatsBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize(blockEntity.getBlockPos().getCenter().add(0, 0.5f, 0), 3, 2, 3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L86) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` AnvilCraft.CLIENT_CONFIG.graphics.heliostatsRenderDistance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L91) |

## HypercubeBERenderer

` public class HypercubeBERenderer implements BlockEntityRenderer<HypercubeBlockEntity>, ModelSelectionRenderer<HypercubeBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HypercubeBERenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L21) |
| ` @Override public void collectSelectionModels(HypercubeBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 执行 ` consumer.accept(HYPERCUBE_MODEL, pose) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L24) |
| ` @Override public void render( HypercubeBlockEntity be, float partialTick, PoseStack pose, MultiBufferSource source, int packedLight, int packedOverlay ) ` | 实现调用 ` Minecraft.getInstance().getModelManager() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` modelManager.getModel(HYPERCUBE_MODEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L29) |

## InfiniteCollectorRenderer

` public class InfiniteCollectorRenderer extends PowerProducerRenderer<InfiniteCollectorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone( AnvilCraft.of("block/infinite_collector_head") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L9) |
| ` public InfiniteCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L13) |

## LargeCauldronBlockEntityRenderer

` public class LargeCauldronBlockEntityRenderer implements BlockEntityRenderer<LargeCauldronBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCauldronBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.dispatcher = context.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L46) |
| ` @Override public AABB getRenderBoundingBox(LargeCauldronBlockEntity blockEntity) ` | 末尾返回 ` new AABB(blockEntity.getBlockPos()).inflate(1.0, 4.0, 1.0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L50) |
| ` @Override public void render( LargeCauldronBlockEntity cauldron, float partialTick, PoseStack pose, MultiBufferSource buffers, int light, int overlay ) ` | 实现调用 ` cauldron.isMainPart() `<br>实现调用 ` cauldron.getLevel() `<br>实现调用 ` cauldron.getFluids() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L55) |

## LargeCauldronRenderHooks

` public final class LargeCauldronRenderHooks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L13)

大型炼药锅客户端渲染扩展。仅在客户端渲染线程调用；不得在公共模组入口初始化其它模组的客户端 API。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(Handler handler) ` | 执行 ` HANDLERS.add(handler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L19) |
| ` public static boolean showVanillaFire(LargeCauldronBlockEntity cauldron) ` | 末尾返回 ` true `<br>[调用处 LargeCauldronBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L23) |
| ` public static void afterRender( LargeCauldronBlockEntity cauldron, float partialTick, PoseStack poseStack, MultiBufferSource buffers, int packedLight, int packedOverlay ) ` | 实现调用 ` handler.afterRender(cauldron, partialTick, poseStack, buffers, packedLight, packedOverlay) `<br>[调用处 LargeCauldronBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L30) |

## LargeCauldronRenderHooks.Handler

` public interface Handler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean showVanillaFire(LargeCauldronBlockEntity cauldron) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L44) |
| ` default void afterRender( LargeCauldronBlockEntity cauldron, float partialTick, PoseStack poseStack, MultiBufferSource buffers, int packedLight, int packedOverlay ) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L48) |

## LargeFluidTankBlockEntityRenderer

` public class LargeFluidTankBlockEntityRenderer implements BlockEntityRenderer<LargeFluidTankBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankBlockEntityRenderer.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeFluidTankBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankBlockEntityRenderer.java#L33) |
| ` @Override public AABB getRenderBoundingBox(LargeFluidTankBlockEntity blockEntity) ` | 末尾返回 ` new AABB(blockEntity.getBlockPos()).inflate(1, 1, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankBlockEntityRenderer.java#L36) |
| ` @Override public void render( LargeFluidTankBlockEntity tank, float tickDelta, PoseStack ms, MultiBufferSource vertexConsumers, int light, int overlay ) ` | 实现调用 ` tank.isMainPart() `<br>实现调用 ` tank.getStoredFluids().stream() .filter(fluid -> !fluid.isEmpty()) `<br>实现调用 ` tank.getStoredFluids().stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankBlockEntityRenderer.java#L41) |
| ` public static void drawFluidInTank( PoseStack ps, MultiBufferSource mbs, int light, FluidStack fluid, double layerBottom, double layerTop ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankBlockEntityRenderer.java#L101) |
| ` public static void drawGasInTank( PoseStack ps, MultiBufferSource mbs, int light, FluidStack gas, double bandBottom, double bandTop, float alphaFill, boolean renderBottom ) ` | 绘制一种气体的整段带。带高由参与显示的气体种类均分液面之上的空隙决定， 该气体自身的储量只通过 alphaFill（0..1）缩放着色透明度表达。<br>参数 ` renderBottom ` 是否绘制带的底面；仅当带下方既无液体也不是另一条气体带时为 true，避免相邻流体面共面打架 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankBlockEntityRenderer.java#L134) |

## LaserBlockRenderer

` public class LaserBlockRenderer implements BlockEntityRenderer<BaseLaserBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LaserBlockRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L18) |
| ` @Override public void render( BaseLaserBlockEntity baseLaserBlockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` RenderState.isEnhancedRenderingAvailable() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` LaserState.create(baseLaserBlockEntity, poseStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L21) |
| ` @Override public AABB getRenderBoundingBox(BaseLaserBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize( blockEntity.getBlockPos().getCenter(), renderDistance * 2, renderDistance * 2, renderDistance * 2 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L46) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` 256 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L57) |
| ` @Override public boolean shouldRenderOffScreen(BaseLaserBlockEntity blockEntity) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L62) |

## MonolithCoreBlockEntityRenderer

` public class MonolithCoreBlockEntityRenderer implements BlockEntityRenderer<MonolithCoreBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MonolithCoreBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.blockRenderer = context.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L35) |
| ` @Override public void render( MonolithCoreBlockEntity core, float partialTick, PoseStack pose, MultiBufferSource buffers, int light, int overlay ) ` | 实现调用 ` core.getAnimationAge(partialTick) `<br>实现调用 ` core.getOffering() `<br>实现调用 ` core.getAxis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L39) |
| ` @Override public AABB getRenderBoundingBox(MonolithCoreBlockEntity core) ` | 末尾返回 ` new AABB(core.getBlockPos()).inflate(core.isGiant() ? 1 : 0).expandTowards(0, core.getLineHeight(), 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/MonolithCoreBlockEntityRenderer.java#L48) |

## OverseerBlockEntityRenderer

` public class OverseerBlockEntityRenderer implements BlockEntityRenderer<OverseerBlockEntity>, ModelSelectionRenderer<OverseerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverseerBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L40) |
| ` @Override public void render( OverseerBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` blockEntity.getLevel() `<br>实现调用 ` blockEntity.getBlockState() `<br>实现调用 ` state.getValue(OverseerBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L43) |
| ` @Override public void collectSelectionModels(OverseerBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` entity.getLevel() `<br>实现调用 ` entity.getBlockState() `<br>实现调用 ` state.getValue(OverseerBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L85) |
| ` @Override public AABB getRenderBoundingBox(OverseerBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize(new Vec3(pos.getX() + 0.5, pos.getY() + 0.75, pos.getZ() + 0.5), 1.5, 2.75, 1.5) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/OverseerBlockEntityRenderer.java#L136) |

## PipeCheckValveBERenderer

` public class PipeCheckValveBERenderer<T extends AbstractPipeCheckValveBlockEntity> implements BlockEntityRenderer<T>, ModelSelectionRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L37)

管道面止逆阀渲染器：为每个装阀的面渲染一段单臂阀体模型 （block/check\_valve\_arm，安装在模型空间 +Y 臂、开口朝 +Y 表示"沿臂向外放行"）。 对每个面 face：先把模型 +Y 旋到 face，若该面当前允许流出方向为 face（向外）则保持，否则（向内）绕垂直轴翻转 180° 使阀体开口反向，直观显示放行方向。 光照 ：不能用无着色的 renderModel 重载（六面等亮 → 又平又白）， 而是逐面按其 世界方向 取 Level#getShade 做方向漫反射（上亮下暗），与管道本体一致。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public PipeCheckValveBERenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。<br>[调用处 GlassPipeBlockEntityRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L17) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L44) |
| ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") @Override public void render( T be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` buffer.getBuffer(RenderType.cutout()) `<br>实现调用 ` RenderType.cutout() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L48) |
| ` @Override public void collectSelectionModels(T be, float partialTick, PoseStack poseStack, ModelConsumer consumer) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` level.getBlockState(be.getBlockPos()) `<br>实现调用 ` be.getBlockPos() `<br>[调用处 PipeCheckValveBERenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PipeCheckValveBERenderer.java#L66) |

## PlasmaJetsRenderer

` public class PlasmaJetsRenderer implements BlockEntityRenderer<PlasmaJetsBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlasmaJetsRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java#L10) |
| ` @Override public void render( PlasmaJetsBlockEntity entity, float partialTick, PoseStack pose, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java#L13) |

## PowerProducerRenderer

` public abstract class PowerProducerRenderer<T extends BlockEntity & IPowerProducer> implements BlockEntityRenderer<T>, ModelSelectionRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float ROTATION_MAGIC ` | 初值 ` 0.001220703125f ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L18) |
| ` @Override public void render( T blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` buffer.getBuffer(RenderType.cutout()) `<br>实现调用 ` RenderType.cutout() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L20) |
| ` @Override public void collectSelectionModels(T blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` this.rotation(blockEntity, partialTick) `<br>实现调用 ` poseStack.translate(0.5F, this.elevation(), 0.5F) `<br>[调用处 PowerProducerRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L46) |
| ` public PowerProducerRenderer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PowerProducerRenderer.java#L16) |

## ProcessingItemStackRenderer

` public abstract class ProcessingItemStackRenderer<T extends BlockEntity & IItemHandlerHolder> implements BlockEntityRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void render( T table, float partialTick, PoseStack pose, MultiBufferSource source, int light, int overlay ) ` | 实现调用 ` table.getLevel() `<br>实现调用 ` ItemHandlerUtil.getNonEmptyItemsFromHandler(table.getItemHandler()) `<br>实现调用 ` table.getItemHandler() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L78) |

## PulseGeneratorBlockEntityRenderer

` public class PulseGeneratorBlockEntityRenderer implements BlockEntityRenderer<PulseGeneratorBlockEntity>, ModelSelectionRenderer<PulseGeneratorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public PulseGeneratorBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L34) |
| ` @Override public void render( PulseGeneratorBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L38) |
| ` @Override public void collectSelectionModels( PulseGeneratorBlockEntity blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer ) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` MountedRedstonePose.apply(poseStack, blockEntity.getBlockState()) `<br>实现调用 ` blockEntity.getBlockState() `<br>[调用处 PulseGeneratorBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PulseGeneratorBlockEntityRenderer.java#L54) |

## PumpBlockEntityRenderer

` public class PumpBlockEntityRenderer implements BlockEntityRenderer<PumpBlockEntity>, ModelSelectionRenderer<PumpBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L27)

泵的方块实体渲染器。 在工作状态时渲染两个活塞模型（pump\_piston\_1, pump\_piston\_2）， 交替上下运动，运动速度与流体传输量正相关。 基础模型（pump\_base/pump\_off/pump\_overload）由 blockstate 系统渲染， 本渲染器仅负责动画活塞部分。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public PumpBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L44) |
| ` @Override public void render( PumpBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L48) |
| ` @Override public void collectSelectionModels(PumpBlockEntity blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer) ` | 实现调用 ` blockEntity.isWorking() `<br>实现调用 ` blockEntity.getLevel() `<br>实现调用 ` blockEntity.getBlockState() `<br>[调用处 PumpBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L62) |
| ` @Override public void collectPreviewModels( PumpBlockEntity blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer ) ` | 放置预览：活塞依赖 PumpBlockEntity#isWorking()（服务端同步的启用状态 + 电网）， 而预览落点上没有实体、临时实体也从未被同步，直接沿用上例会一个活塞都不产出。 故按静止姿态（cycle = 0）给出活塞，与「已通电工作」时的外观一致。<br>实现调用 ` blockEntity.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` this.emitPistons(state, 0.0f, poseStack, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PumpBlockEntityRenderer.java#L79) |

## RedstoneDiceBlockEntityRenderer

` public class RedstoneDiceBlockEntityRenderer implements BlockEntityRenderer<RedstoneDiceBlockEntity>, ModelSelectionRenderer<RedstoneDiceBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RedstoneDiceBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L23) |
| ` @Override public void render( RedstoneDiceBlockEntity dice, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L26) |
| ` @Override public void collectSelectionModels(RedstoneDiceBlockEntity dice, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` dice.getRollProgress(partialTick) `<br>实现调用 ` Mth.sin(progress * Mth.PI) `<br>实现调用 ` dice.getScenario(false) `<br>[调用处 RedstoneDiceBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RedstoneDiceBlockEntityRenderer.java#L38) |

## RuinsBlockEntityRenderer

` public class RuinsBlockEntityRenderer implements BlockEntityRenderer<RuinsBlockEntity>, ModelSelectionRenderer<RuinsBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RuinsBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 实现调用 ` context.getBlockRenderDispatcher() `<br>实现调用 ` context.getBlockEntityRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L50) |
| ` @Override public void render(RuinsBlockEntity ruins, float partialTick, PoseStack pose, MultiBufferSource buffers, int light, int overlay) ` | 实现调用 ` ruins.getLevel() `<br>实现调用 ` RuinsRenderContext.enter(level) `<br>实现调用 ` RuinsBlock.connectedDisplayState(level, ruins.getBlockPos(), ruins.getDisplayState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L55) |
| ` @Nullable public BlockEntity prepareDisplay(RuinsBlockEntity ruins) ` | ` (level == null \|\| display == null) ` 成立时提前返回 ` display `<br>末尾返回 ` display `<br>[调用处 RuinsBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L101) |
| ` @Override public void collectSelectionParts(RuinsBlockEntity ruins, float partialTick, List<SelectionPart> output) ` | 实现调用 ` ruins.getLevel() `<br>实现调用 ` RuinsRenderContext.enter(level) `<br>实现调用 ` this.prepareDisplay(ruins) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L115) |
| ` @Override public AABB getRenderBoundingBox(RuinsBlockEntity ruins) ` | ` (level == null) ` 成立时提前返回 ` new AABB(ruins.getBlockPos()) `<br>[调用处 RuinsBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L179) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L127) |
| ` @Override public boolean shouldRenderOffScreen(RuinsBlockEntity ruins) ` | ` (ruins.getDisplayState().getBlock() instanceof AbstractMultiPartBlock<?>) ` 成立时提前返回 ` true `<br>末尾返回 ` renderer != null && renderer.shouldRenderOffScreen(display) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L169) |
| ` @Override public boolean shouldRender(RuinsBlockEntity ruins, Vec3 cameraPos) ` | 末尾返回 ` x * x + y * y + z * z < this.getViewDistance() * this.getViewDistance() \|\| renderer != null && renderer.shouldRender(display, cameraPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L177) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` Math.max(64, Minecraft.getInstance().options.getEffectiveRenderDistance() * 16) `<br>[调用处 RuinsBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L185) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L189) |

## RuinsParticles

` public final class RuinsParticles `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsParticles.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void remember(RuinsBlockEntity ruins) ` | 实现调用 ` ruins.getLevel() `<br>实现调用 ` checkLevel(level) `<br>实现调用 ` RECENT.put(ruins.getBlockPos(), ruins.getDisplayState()) `<br>[调用处 RuinsBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L186) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsParticles.java#L21) |
| ` public static BlockState displayState(Level level, BlockPos pos, BlockState fallback) ` | ` (level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins) ` 成立时提前返回 ` ruins.getDisplayState() `<br>末尾返回 ` recent == null ? fallback : recent `<br>[调用处 RuinsParticleEngineMixin.anvilcraft$destroyDisguise](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RuinsParticleEngineMixin.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsParticles.java#L28) |

## RuinsRenderContext

` public final class RuinsRenderContext implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L8)

仅在当前线程绘制遗迹时，让原渲染器读取伪装视图，不替换真实世界的方块。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static RuinsRenderContext enter(Level level) ` | 末尾返回 ` new RuinsRenderContext(level) `<br>[调用处 RuinsBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L18) |
| ` public static boolean isActive(Level level) ` | 末尾返回 ` ACTIVE.get() == level `<br>[调用处 RuinsRenderLevelMixin.anvilcraft$displayState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RuinsRenderLevelMixin.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L22) |
| ` @Override public void close() ` | 分支 ` (this.previous == null) ` 内调用 ` ACTIVE.remove() `<br>分支 ` !(this.previous == null) ` 内调用 ` ACTIVE.set(this.previous) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsRenderContext.java#L26) |

## SiftingTableBlockEntityRenderer

` public class SiftingTableBlockEntityRenderer extends ProcessingItemStackRenderer<SiftingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SiftingTableBlockEntityRenderer.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SiftingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SiftingTableBlockEntityRenderer.java#L8) |

## SmartBlockPlacerRenderer

` public class SmartBlockPlacerRenderer implements BlockEntityRenderer<SmartBlockPlacerBlockEntity>, ModelSelectionRenderer<SmartBlockPlacerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L58)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerRenderer(BlockEntityRendererProvider.Context context) ` | 实现调用 ` context.getBlockRenderDispatcher() `<br>实现调用 ` context.getBlockEntityRenderDispatcher() `<br>实现调用 ` context.getItemRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L86) |
| ` @Override public void render( SmartBlockPlacerBlockEntity entity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` entity.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` state.getValue(HorizontalDirectionalBlock.FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L249) |
| ` public void renderDancingArm( double renderTick, PoseStack pose, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` Mth.lerp((Mth.sin((float) (renderTick / 4 % (2 * Math.PI))) + 1) / 2, -45, 15) `<br>实现调用 ` Mth.sin((float) (renderTick / 4 % (2 * Math.PI))) `<br>实现调用 ` Mth.lerp((Mth.sin((float) (renderTick / 8 % (2 * Math.PI))) + 1) / 4, -45, 95) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L333) |
| ` @Override public void collectSelectionModels( SmartBlockPlacerBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer ) ` | 实现调用 ` entity.getBlockState() `<br>实现调用 ` state.getValue(HorizontalDirectionalBlock.FACING) `<br>实现调用 ` state.getValue(SmartBlockPlacerBlock.UPSIDE_DOWN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L411) |
| ` @Override public AABB getRenderBoundingBox(SmartBlockPlacerBlockEntity be) ` | 末尾返回 ` AabbUtil.createInclusive(pos.north().west(), pos.above().south().east()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SmartBlockPlacerRenderer.java#L727) |

## SpacetimeSupercomputerBlockEntityRenderer

` public class SpacetimeSupercomputerBlockEntityRenderer implements BlockEntityRenderer<SpacetimeSupercomputerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpacetimeSupercomputerBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L15) |
| ` @Override public void render( SpacetimeSupercomputerBlockEntity blockEntity, float partialTick, PoseStack pose, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` blockEntity.getProcessingRecipe() `<br>实现调用 ` blockEntity.getProcessingTotal() `<br>实现调用 ` blockEntity.getProcessingSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/SpacetimeSupercomputerBlockEntityRenderer.java#L18) |

## StampingPlatformBlockEntityRenderer

` public class StampingPlatformBlockEntityRenderer extends ProcessingItemStackRenderer<StampingPlatformBlockEntity> implements ModelSelectionRenderer<StampingPlatformBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L19)

冲压平台方块+实体渲染：主体模型由方块状态渲染，底部双开门由实体渲染并随原料处理动画打开。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StampingPlatformBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L31) |
| ` @Override public void render( StampingPlatformBlockEntity platform, float partialTick, PoseStack pose, MultiBufferSource source, int light, int overlay ) ` | 实现调用 ` super.render(platform, partialTick, pose, source, light, overlay) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L45) |
| ` @Override public void collectSelectionModels(StampingPlatformBlockEntity platform, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` this.easeOutCubic(platform.getDoorOpenProgress(partialTick)) `<br>实现调用 ` platform.getDoorOpenProgress(partialTick) `<br>实现调用 ` this.visitDoor(DOOR_LEFT, DOOR_LEFT_HINGE, open, pose, consumer) `<br>[调用处 StampingPlatformBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L62) |

## StorageFluidPortBlockEntityRenderer

` public class StorageFluidPortBlockEntityRenderer implements BlockEntityRenderer<StorageFluidPortBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L15)

仓储流体端口渲染器：在中央玻璃窗口内渲染内部流体，液体按液面高度、气体按不透明度表示余量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float WINDOW_INSET_PIXELS ` | 中央玻璃窗口是 2..14，比储罐更小，故在默认内缩基础上再收 2.0 像素<br>初值 ` 2.0f ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L17) |
| ` public StorageFluidPortBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L19) |
| ` @Override public void render( StorageFluidPortBlockEntity port, float tickDelta, PoseStack poseStack, MultiBufferSource bufferSource, int light, int overlay ) ` | 实现调用 ` port.getFluid() `<br>实现调用 ` fluid.isEmpty() `<br>实现调用 ` Mth.clamp((float) fluid.getAmount() / StorageFluidPortBlockEntity.CAPACITY_MB, 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L22) |

## StoragePortBlockEntityRenderer

` public class StoragePortBlockEntityRenderer implements BlockEntityRenderer<StoragePortBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L17)

仓储端口渲染器：已标记时在方块六个面上渲染标记物品（与创造板条箱一致）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L18) |
| ` @Override public void render( StoragePortBlockEntity port, float tickDelta, PoseStack poseStack, MultiBufferSource vertexConsumers, int light, int overlay ) ` | 实现调用 ` port.getMarkedItem() `<br>实现调用 ` markedItem.isEmpty() `<br>实现调用 ` Direction.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L21) |

## TeslaTowerRenderer

` public class TeslaTowerRenderer implements BlockEntityRenderer<TeslaTowerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public TeslaTowerRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L24) |
| ` @Override public void render( TeslaTowerBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 实现调用 ` blockEntity.getBlockState().getValue(TeslaTowerBlock.HALF) `<br>实现调用 ` blockEntity.getBlockState() `<br>实现调用 ` blockEntity.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L28) |
| ` @SuppressWarnings("SameParameterValue") public void renderLightning( PoseStack poseStack, MultiBufferSource buffer, Vec3 start, Vec3 end, Vec3 localCamera, float width, float alpha ) ` | 实现调用 ` buffer.getBuffer(ModRenderTypes.LIGHTNING) `<br>实现调用 ` poseStack.last().pose() `<br>实现调用 ` poseStack.last() `<br>[调用处 TeslaTowerRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L71) |
| ` @Override public boolean shouldRenderOffScreen(TeslaTowerBlockEntity blockEntity) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L128) |
| ` @Override public AABB getRenderBoundingBox(TeslaTowerBlockEntity blockEntity) ` | 末尾返回 ` TeslaTowerRenderer.BASE_RENDER_BBOX .move(blockEntity.getPos()) .move(0, 4, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L133) |
