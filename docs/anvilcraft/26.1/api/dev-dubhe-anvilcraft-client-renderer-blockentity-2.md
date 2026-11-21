# dev.dubhe.anvilcraft.client.renderer.blockentity（CorruptedBeaconRenderer 至 LargeCauldronRenderHooks）



## CorruptedBeaconRenderer

` public class CorruptedBeaconRenderer implements BlockEntityRenderer<CorruptedBeaconBlockEntity, CorruptedBeaconRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CorruptedBeaconRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L41) |
| ` @Override public CorruptedBeaconRenderState createRenderState() ` | 末尾返回 ` new CorruptedBeaconRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L44) |
| ` @Override public void extractRenderState( CorruptedBeaconBlockEntity be, CorruptedBeaconRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` be.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L49) |
| ` @Override public void submit( CorruptedBeaconRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.getGlassQuads() `<br>实现调用 ` quads.isEmpty() `<br>分支 ` (!quads.isEmpty()) ` 内调用 ` pose.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L79) |
| ` public static void renderWeaponBeam(VertexConsumer consumer, Matrix4f matrix, float length) ` | 执行 ` CorruptedBeaconRenderer.renderBeam(consumer, matrix, length, 0.5f) `<br>[调用处 WeaponBeamRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L119) |
| ` public static void renderBeam(VertexConsumer consumer, Matrix4f matrix, float length, float glowSpreadScale) ` | 实现调用 ` CorruptedBeaconRenderer.renderBeamGlow(consumer, matrix, 0.0f, 0.0f, 0.0f, length, glowSpreadScale) `<br>[调用处 MobTransformCategory.renderBeaconBeam](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/MobTransformCategory.java#L243) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L123) |
| ` @Override public boolean shouldRenderOffScreen() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L228) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` 256 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L233) |
| ` @Override public AABB getRenderBoundingBox(CorruptedBeaconBlockEntity blockEntity) ` | 末尾返回 ` new AABB(pos.getX(), pos.getY(), pos.getZ(), pos.getX() + 1, topY, pos.getZ() + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L238) |

## CreativeCrateRenderer

` public class CreativeCrateRenderer implements BlockEntityRenderer<CreativeCrateBlockEntity, CreativeCrateRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateRenderer(BlockEntityRendererProvider.Context ctx) ` | 执行 ` this.resolver = ctx.itemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L23) |
| ` @Override public CreativeCrateRenderState createRenderState() ` | 末尾返回 ` new CreativeCrateRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L27) |
| ` @Override public void extractRenderState( CreativeCrateBlockEntity be, CreativeCrateRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.getDisplayStack() `<br>实现调用 ` state.setItem(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L32) |
| ` @Override public void submit( CreativeCrateRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L52) |

## CreativeFluidTankRenderer

` public class CreativeFluidTankRenderer extends BaseFluidHandlerHolderRenderer<CreativeFluidTankBlockEntity, FluidHandlerRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidTankRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L19) |
| ` @Override public FluidHandlerRenderState createRenderState() ` | 末尾返回 ` new FluidHandlerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L22) |
| ` @Override public float getFill(ResourceHandler<FluidResource> tank) ` | 末尾返回 ` 1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L32) |
| ` @Override public void submit(FluidHandlerRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` state.getResource() `<br>实现调用 ` state.getAmount() `<br>实现调用 ` state.getFill() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L37) |

## CreativeGeneratorRenderer

` public class CreativeGeneratorRenderer extends PowerProducerRenderer<CreativeGeneratorBlockEntity, PowerGeneratorRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Creative Generator Cube Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L10) |
| ` public CreativeGeneratorRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L14) |
| ` @Override public PowerGeneratorRenderState createRenderState() ` | 末尾返回 ` new PowerGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L17) |

## CrushingTableBlockEntityRenderer

` public class CrushingTableBlockEntityRenderer extends ProcessingItemStackRenderer<CrushingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> WHEEL_LEFT ` | 初值 ` new StandaloneModelKey<>( () -> "processing_table_crushing_wheel_left") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L14) |
| ` public static final StandaloneModelKey<BlockStateModel> WHEEL_RIGHT ` | 初值 ` new StandaloneModelKey<>( () -> "processing_table_crushing_wheel_right") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L16) |
| ` public CrushingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L21) |

## DischargerRenderer

` public class DischargerRenderer extends BaseShowItemRenderer<DischargerBlockEntity, BaseShowItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DischargerRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerRenderer.java#L18) |
| ` @Override public BaseShowItemRenderState createRenderState() ` | 末尾返回 ` new BaseShowItemRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerRenderer.java#L22) |
| ` @Override public void submit( BaseShowItemRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getDisplayState() `<br>实现调用 ` item.getModelBoundingBox() `<br>实现调用 ` aabb.getZsize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerRenderer.java#L32) |

## DrainBlockEntityRenderer

` public class DrainBlockEntityRenderer extends BaseFluidHandlerHolderRenderer<DrainBlockEntity, DrainRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DrainBlockEntityRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L24) |
| ` @Override public DrainRenderState createRenderState() ` | 末尾返回 ` new DrainRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L27) |
| ` @Override public void extractRenderState( DrainBlockEntity be, DrainRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` state.setColumnMinY(0) `<br>实现调用 ` super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setFill(Mth.clamp(state.getFill(), 0, 1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L32) |
| ` @Override public void submit( DrainRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getResource() `<br>分支 ` (state.getResource() != null) ` 内调用 ` state.getResource() `<br>分支 ` (state.getResource() != null) ` 内调用 ` state.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L57) |
| ` @Override public AABB getRenderBoundingBox(DrainBlockEntity be) ` | ` (bottomY == Integer.MIN_VALUE \|\| bottomY >= pos.getY()) ` 成立时提前返回 ` self `<br>末尾返回 ` self.expandTowards(0, bottomY - pos.getY(), 0) `<br>[调用处 DrainBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L77) |
| ` @Override public boolean shouldRenderOffScreen() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L86) |
| ` @Override public boolean shouldRender(DrainBlockEntity be, Vec3 cameraPos) ` | 末尾返回 ` this.getRenderBoundingBox(be).distanceToSqr(cameraPos) <= viewDistance * viewDistance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L91) |

## ExpCollectorBlockEntityRenderer

` public class ExpCollectorBlockEntityRenderer extends BaseFluidHandlerHolderRenderer<ExpCollectorBlockEntity, FluidHandlerRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ExpCollectorBlockEntityRenderer.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpCollectorBlockEntityRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ExpCollectorBlockEntityRenderer.java#L12) |
| ` @Override public FluidHandlerRenderState createRenderState() ` | 末尾返回 ` new FluidHandlerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ExpCollectorBlockEntityRenderer.java#L15) |

## FeCollectorRenderer

` public class FeCollectorRenderer extends PowerProducerRenderer<FeCollectorBlockEntity, PowerGeneratorRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> MODEL ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: FE Collector Head Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L10) |
| ` @SuppressWarnings("unused") public FeCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L14) |
| ` @Override public PowerGeneratorRenderState createRenderState() ` | 末尾返回 ` new PowerGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L18) |

## FishTankRenderHooks

` public final class FishTankRenderHooks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L13)

鱼缸客户端扩展：提取阶段读取世界数据，提交阶段仅绘制已捕获的数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(Handler handler) ` | 执行 ` HANDLERS.add(handler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L19) |
| ` public static boolean showVanillaFire(FishTankBlockEntity tank) ` | 末尾返回 ` true `<br>[调用处 FishTankRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L23) |
| ` public static List<AfterRender> extract(FishTankBlockEntity tank, float partialTick) ` | ` (HANDLERS.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.copyOf(renders) `<br>[调用处 FishTankRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L30) |
| ` public static void afterRender(List<AfterRender> renders, PoseStack pose, SubmitNodeCollector collector, int light, int overlay) ` | 实现调用 ` render.submit(pose, collector, light, overlay) `<br>[调用处 FishTankRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L181) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L40) |

## FishTankRenderHooks.AfterRender

` public interface AfterRender `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L55)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void submit(PoseStack pose, SubmitNodeCollector collector, int light, int overlay) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L57) |

## FishTankRenderHooks.Handler

` public interface Handler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean showVanillaFire(FishTankBlockEntity tank) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L45) |
| ` default @Nullable AfterRender extract(FishTankBlockEntity tank, float partialTick) ` | 返回的绘制回调应只捕获本阶段提取的数据，不在提交阶段读取方块实体或世界。<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L50) |

## FishTankRenderer

` public class FishTankRenderer extends BaseFluidHandlerHolderRenderer<FishTankBlockEntity, FishTankRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> FIRE ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Fish Tank Fire Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L48) |
| ` public FishTankRenderer(BlockEntityRendererProvider.Context ctx) ` | 实现调用 ` ctx.itemModelResolver() `<br>实现调用 ` ctx.entityRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L59) |
| ` @Override public AABB getRenderBoundingBox(FishTankBlockEntity tank) ` | 末尾返回 ` new AABB(tank.getBlockPos()).expandTowards(0, 2, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L69) |
| ` @Override public FishTankRenderState createRenderState() ` | 末尾返回 ` new FishTankRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L74) |
| ` @Override public float getFill(ResourceHandler<FluidResource> tank) ` | 末尾返回 ` Math.min(super.getFill(tank), 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L79) |
| ` @Override public void extractRenderState( FishTankBlockEntity be, FishTankRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` state.getStacks().clear() `<br>实现调用 ` state.getStacks() `<br>实现调用 ` state.getFishes().clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L95) |
| ` @Override public void submit(FishTankRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` state.getStacks().isEmpty() `<br>实现调用 ` state.getStacks() `<br>分支 ` (!state.getStacks().isEmpty()) ` 内调用 ` state.getStacks() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L154) |

## FluidTankRenderer

` public class FluidTankRenderer extends BaseFluidHandlerHolderRenderer<FluidTankBlockEntity, FluidHandlerRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankRenderer.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankRenderer.java#L35) |
| ` @Override public FluidHandlerRenderState createRenderState() ` | 末尾返回 ` new FluidHandlerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankRenderer.java#L38) |
| ` @Override public float getFill(ResourceHandler<FluidResource> tank) ` | 末尾返回 ` Mth.clamp(super.getFill(tank), 0.0F, 1.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankRenderer.java#L48) |
| ` @Override public void submit(FluidHandlerRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` state.getResource() `<br>实现调用 ` state.getAmount() `<br>实现调用 ` state.getFill() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankRenderer.java#L53) |

## GlassPipeBlockEntityRenderer

` public class GlassPipeBlockEntityRenderer extends PipeCheckValveBERenderer<GlassPipeBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GlassPipeBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L22) |
| ` @Override public GlassPipeRenderState createRenderState() ` | 末尾返回 ` new GlassPipeRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L26) |
| ` @Override public void extractRenderState( GlassPipeBlockEntity be, PipeCheckValveRenderState base, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` super.extractRenderState(be, base, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` FluidResource.of(be.getDisplayFluid()) `<br>实现调用 ` be.getDisplayFluid() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L31) |
| ` @Override public void submit(PipeCheckValveRenderState base, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` super.submit(base, pose, collector, camera) `<br>实现调用 ` state.fluid.isEmpty() `<br>实现调用 ` state.directions.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L51) |

## GlassPipeFluidBERenderer

` public final class GlassPipeFluidBERenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeFluidBERenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void renderDisplayFluid( GlassPipeRenderState fluid, BlockState state, Set<Direction> displayDirections, float alphaFill, PoseStack.Pose poseStack, VertexConsumer buffer, int packedLight ) ` | 实现调用 ` displayDirections.isEmpty() `<br>实现调用 ` state.getBlock() `<br>分支 ` (state.getBlock() instanceof PipeStraightBlock) ` 内调用 ` state.getValue(PipeBlock.AXIS) `<br>[调用处 GlassPipeBlockEntityRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeFluidBERenderer.java#L26) |
| ` public GlassPipeFluidBERenderer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeFluidBERenderer.java#L17) |

## HasMobBlockRenderer

` public class HasMobBlockRenderer implements BlockEntityRenderer<HasMobBlockEntity, HasMobBlockRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public HasMobBlockRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.dispatcher = context.entityRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L21) |
| ` @Override public HasMobBlockRenderState createRenderState() ` | 末尾返回 ` new HasMobBlockRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L26) |
| ` @Override public void extractRenderState( HasMobBlockEntity be, HasMobBlockRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.getLevel() `<br>分支 ` (level == null) ` 内调用 ` state.setMob(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L31) |
| ` @Override public void submit( HasMobBlockRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.getMob() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0.5F, 0.0F, 0.5F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L54) |

## HeatCollectorRenderer

` public class HeatCollectorRenderer extends PowerProducerRenderer<HeatCollectorBlockEntity, PowerGeneratorRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Heat Collector Cube Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L10) |
| ` public HeatCollectorRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L14) |
| ` @Override public PowerGeneratorRenderState createRenderState() ` | 末尾返回 ` new PowerGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeatCollectorRenderer.java#L17) |

## HeliostatsBeam

` public final class HeliostatsBeam `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L30)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void track(HeliostatsBlockEntity mirror) ` | 执行 ` ACTIVE.add(mirror) `<br>[调用处 HeliostatsBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/HeliostatsBlockEntity.java#L204) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L44) |
| ` @SubscribeEvent public static void extract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` ACTIVE.isEmpty() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L51) |
| ` @SubscribeEvent public static void submit(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` event.getLevelRenderState().getRenderData(BEAMS) `<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` event.getPoseStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsBeam.java#L62) |

## HeliostatsRenderer

` public class HeliostatsRenderer implements BlockEntityRenderer<HeliostatsBlockEntity, HeliostatsRenderState>, ModelSelectionRenderer<HeliostatsBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Heliostats Head Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L31) |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD_SUNFLOWER ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Heliostats Sunflower Head Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L34) |
| ` @SuppressWarnings("unused") public HeliostatsRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L38) |
| ` @Override public HeliostatsRenderState createRenderState() ` | 末尾返回 ` new HeliostatsRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L42) |
| ` @Override public void extractRenderState( HeliostatsBlockEntity be, HeliostatsRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setHead(FeatureRendererSupport.initialize(this.getHeadModel(be), be)) `<br>实现调用 ` FeatureRendererSupport.initialize(this.getHeadModel(be), be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L47) |
| ` @Override public void submit(HeliostatsRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyHeadPose(pose, state.getRotation()) `<br>实现调用 ` state.getRotation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L87) |
| ` @Override public void collectSelectionModels(HeliostatsBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyHeadPose(pose, this.rotations(be)) `<br>实现调用 ` this.rotations(be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L95) |
| ` @Override public AABB getRenderBoundingBox(HeliostatsBlockEntity blockEntity) ` | 末尾返回 ` AABB.ofSize(blockEntity.getBlockPos().getCenter().add(0, 0.5F, 0), 3, 2, 3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L108) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` AnvilCraft.CLIENT_CONFIG.graphics.heliostatsRenderDistance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L113) |

## HypercubeBERenderer

` public class HypercubeBERenderer implements BlockEntityRenderer<HypercubeBlockEntity, HypercubeRenderState>, ModelSelectionRenderer<HypercubeBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> MODEL ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Hypercube") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L22) |
| ` public HypercubeBERenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L24) |
| ` @Override public HypercubeRenderState createRenderState() ` | 末尾返回 ` new HypercubeRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L27) |
| ` @Override public void collectSelectionModels(HypercubeBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 执行 ` consumer.accept(MODEL, pose) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L32) |
| ` @Override public void extractRenderState( HypercubeBlockEntity entity, HypercubeRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(entity, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` FeatureRendererSupport.initialize(MODEL, entity, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L37) |
| ` @Override public void submit(HypercubeRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 执行 ` state.model.submitModel(ModRenderTypes.HYPERCUBE, pose, collector, state.lightCoords, OverlayTexture.NO_OVERLAY, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L46) |

## IncandescentBlockRenderer

` public class IncandescentBlockRenderer implements BlockEntityRenderer<IncandescentBlockEntity, IncandescentBlockRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/IncandescentBlockRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public IncandescentBlockRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/IncandescentBlockRenderer.java#L22) |
| ` @Override public IncandescentBlockRenderState createRenderState() ` | 末尾返回 ` new IncandescentBlockRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/IncandescentBlockRenderer.java#L26) |
| ` @Override public void extractRenderState( IncandescentBlockEntity be, IncandescentBlockRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.setModel(FeatureRendererSupport.initialize(be.getBlockState(), be)) `<br>实现调用 ` FeatureRendererSupport.initialize(be.getBlockState(), be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/IncandescentBlockRenderer.java#L31) |
| ` @Override public void submit( IncandescentBlockRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` RenderState.isEnhancedRenderingAvailable() `<br>实现调用 ` RenderState.isBloomEffectEnabled() `<br>实现调用 ` ALRPostEffects.getBloomPostEffect() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/IncandescentBlockRenderer.java#L43) |

## InfiniteCollectorRenderer

` public class InfiniteCollectorRenderer extends PowerProducerRenderer<InfiniteCollectorBlockEntity, PowerGeneratorRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Infinite Collector Head Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L10) |
| ` public InfiniteCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L14) |
| ` @Override public PowerGeneratorRenderState createRenderState() ` | 末尾返回 ` new PowerGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/InfiniteCollectorRenderer.java#L17) |

## LargeCauldronBlockEntityRenderer

` public class LargeCauldronBlockEntityRenderer implements BlockEntityRenderer<LargeCauldronBlockEntity, LargeCauldronRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> FIRE ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Large Cauldron Fire Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L38) |
| ` public LargeCauldronBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.itemModelResolver = context.itemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L55) |
| ` @Override public LargeCauldronRenderState createRenderState() ` | 末尾返回 ` new LargeCauldronRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L59) |
| ` @Override public void extractRenderState( LargeCauldronBlockEntity cauldron, LargeCauldronRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(cauldron, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.getItems().clear() `<br>实现调用 ` state.getItems() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L64) |
| ` @Override public void submit( LargeCauldronRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera ) ` | 实现调用 ` state.getItems() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.translate(item.x(), item.y(), item.z()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L143) |
| ` @Override public AABB getRenderBoundingBox(LargeCauldronBlockEntity blockEntity) ` | 末尾返回 ` new AABB(blockEntity.getBlockPos()).inflate(1.0, 4.0, 1.0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L192) |

## LargeCauldronRenderHooks

` public final class LargeCauldronRenderHooks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L13)

大型炼药锅客户端扩展：提取阶段读取世界数据，提交阶段仅绘制已捕获的数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(Handler handler) ` | 执行 ` HANDLERS.add(handler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L19) |
| ` public static boolean showVanillaFire(LargeCauldronBlockEntity tank) ` | 末尾返回 ` true `<br>[调用处 LargeCauldronBlockEntityRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L23) |
| ` public static List<AfterRender> extract(LargeCauldronBlockEntity tank, float partialTick) ` | ` (HANDLERS.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.copyOf(renders) `<br>[调用处 LargeCauldronBlockEntityRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L30) |
| ` public static void afterRender(List<AfterRender> renders, PoseStack pose, SubmitNodeCollector collector, int light, int overlay) ` | 实现调用 ` render.submit(pose, collector, light, overlay) `<br>[调用处 LargeCauldronBlockEntityRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronRenderHooks.java#L40) |
