# dev.dubhe.anvilcraft.client.renderer.entity



## CauldronOutletRenderer

` public class CauldronOutletRenderer extends EntityRenderer<CauldronOutletEntity, CauldronOutletRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` SharedTextures.texture("block/cauldron_outlet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L27) |
| ` public CauldronOutletRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.bakeLayer(CauldronOutletModel.LAYER_LOCATION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L30) |
| ` @Override public CauldronOutletRenderState createRenderState() ` | 末尾返回 ` new CauldronOutletRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L35) |
| ` @Override public void extractRenderState(CauldronOutletEntity entity, CauldronOutletRenderState state, float partialTicks) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` entity.getCauldronPos() `<br>实现调用 ` searchPositions.add(currentPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L40) |
| ` @Override public void submit( CauldronOutletRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(state.getDx(), state.getDy(), state.getDz()) `<br>实现调用 ` state.getDx() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L118) |

## FluidTankMinecartRenderer

` public class FluidTankMinecartRenderer extends AbstractMinecartRenderer<FluidTankMinecartEntity, FluidTankMinecartRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/FluidTankMinecartRenderer.java#L18)

在储罐矿车上渲染出罐内流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankMinecartRenderer(EntityRendererProvider.Context context) ` | 执行 ` super(context, ModelLayers.MINECART) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/FluidTankMinecartRenderer.java#L20) |
| ` @Override public FluidTankMinecartRenderState createRenderState() ` | 末尾返回 ` new FluidTankMinecartRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/FluidTankMinecartRenderer.java#L24) |
| ` @Override public void extractRenderState( FluidTankMinecartEntity entity, FluidTankMinecartRenderState state, float partialTicks ) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` entity.getSyncedFluid() `<br>实现调用 ` fluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/FluidTankMinecartRenderer.java#L29) |

## IonocraftRenderer

` public class IonocraftRenderer extends EntityRenderer<IonocraftEntity, IonocraftRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` SharedTextures.texture("entity/ionocraft") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L17) |
| ` public IonocraftRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.bakeLayer(ModModelLayers.IONOCRAFT) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L20) |
| ` @Override public IonocraftRenderState createRenderState() ` | 末尾返回 ` new IonocraftRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L25) |
| ` @Override public void submit(IonocraftRenderState state, PoseStack poseStack, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.scale(1, -1, 1) `<br>实现调用 ` poseStack.translate(0, -1.5F, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L30) |

## MagnetizedNodeEntityRenderer

` public class MagnetizedNodeEntityRenderer extends EntityRenderer<MagnetizedNodeEntity, MagnetizedNodeRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/entity/magnetized_node.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L17) |
| ` public MagnetizedNodeEntityRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.bakeLayer(ModModelLayers.MAGNETIZED_NODE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L21) |
| ` @Override public MagnetizedNodeRenderState createRenderState() ` | 末尾返回 ` new MagnetizedNodeRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L26) |
| ` @Override public void extractRenderState(MagnetizedNodeEntity entity, MagnetizedNodeRenderState state, float partialTicks) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` state.getRotation().copyFrom(entity.rotatingState) `<br>实现调用 ` state.getRotation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L31) |
| ` @Override public void submit( MagnetizedNodeRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0, -1.31F, 0) `<br>实现调用 ` collector.order(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L37) |

## RailgunAnvilRenderer

` public class RailgunAnvilRenderer extends EntityRenderer<RailgunAnvilEntity, RailgunAnvilRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RailgunAnvilRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.getItemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L22) |
| ` @Override public RailgunAnvilRenderState createRenderState() ` | 末尾返回 ` new RailgunAnvilRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L28) |
| ` @Override public void extractRenderState( RailgunAnvilEntity entity, RailgunAnvilRenderState state, float partialTicks ) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` entity.isReturning() `<br>实现调用 ` entity.getReturnedItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L33) |
| ` @Override public void submit( RailgunAnvilRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 分支 ` (state.returning) ` 内调用 ` pose.pushPose() `<br>分支 ` (state.returning) ` 内调用 ` pose.translate(0.0, 0.25, 0.0) `<br>分支 ` (state.returning) ` 内调用 ` pose.mulPose(Axis.YP.rotationDegrees(state.ageInTicks * 18.0F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L59) |

## SlidingBlockRenderer

` public class SlidingBlockRenderer extends EntityRenderer<SlidingBlockEntity, SlidingBlockRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlidingBlockRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L24) |
| ` @Override public SlidingBlockRenderState createRenderState() ` | 末尾返回 ` new SlidingBlockRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L29) |
| ` @Override public void extractRenderState(SlidingBlockEntity entity, SlidingBlockRenderState state, float partialTicks) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` entity.getSection().blocks() `<br>实现调用 ` entity.getSection() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L34) |
| ` @Override public void submit( SlidingBlockRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.getPairs().entrySet() `<br>实现调用 ` state.getPairs() `<br>实现调用 ` entry.getValue() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L71) |

## SpectralBlockRenderer

` public class SpectralBlockRenderer extends EntityRenderer<FallingSpectralBlockEntity, FallingBlockRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpectralBlockRenderer(EntityRendererProvider.Context context) ` | 方块渲染器<br>实现调用 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L17) |
| ` @Override public FallingBlockRenderState createRenderState() ` | 末尾返回 ` new FallingBlockRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L22) |
| ` @Override public void extractRenderState(FallingSpectralBlockEntity entity, FallingBlockRenderState state, float partialTicks) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` BlockPos.containing(entity.getX(), entity.getBoundingBox().maxY, entity.getZ()) `<br>实现调用 ` entity.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L27) |
| ` @Override public void submit( FallingBlockRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` blockState.getRenderShape() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(-0.5, 0.0, -0.5) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L41) |

## SpectralProjectileRenderer

` public class SpectralProjectileRenderer<T extends SpectralProjectileEntity> extends ArrowRenderer<T, SpectralProjectileRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier ARROW_LOCATION ` | 初值 ` Identifier.withDefaultNamespace( "textures/entity/projectiles/arrow.png" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L22) |
| ` public SpectralProjectileRenderer(EntityRendererProvider.Context ctx) ` | 实现调用 ` super(ctx) `<br>实现调用 ` ctx.getItemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L27) |
| ` @Override public Identifier getTextureLocation(SpectralProjectileRenderState state) ` | 末尾返回 ` SpectralProjectileRenderer.ARROW_LOCATION ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L32) |
| ` @Override public SpectralProjectileRenderState createRenderState() ` | 末尾返回 ` new SpectralProjectileRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L37) |
| ` @Override public void extractRenderState(T entity, SpectralProjectileRenderState state, float partialTicks) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` state.setStack(entity.getAsItemStack()) `<br>实现调用 ` entity.getAsItemStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L42) |
| ` @Override public void submit( SpectralProjectileRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.getStack() `<br>实现调用 ` arrow.is(ItemTags.ARROWS) `<br>分支 ` (arrow.is(ItemTags.ARROWS)) ` 内调用 ` super.submit(state, pose, collector, camera) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L50) |

## ThrownHeavyHalberdRenderer

` public class ThrownHeavyHalberdRenderer<T extends ThrownHeavyHalberdEntity> extends EntityRenderer<T, ThrownHeavyHalberdRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownHeavyHalberdRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.getItemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L20) |
| ` @Override public ThrownHeavyHalberdRenderState createRenderState() ` | 末尾返回 ` new ThrownHeavyHalberdRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L25) |
| ` @Override public void extractRenderState(T entity, ThrownHeavyHalberdRenderState state, float partialTicks) ` | 实现调用 ` super.extractRenderState(entity, state, partialTicks) `<br>实现调用 ` state.setYaw(entity.getYRot(partialTicks)) `<br>实现调用 ` entity.getYRot(partialTicks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L30) |
| ` @Override public void submit(ThrownHeavyHalberdRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(state.getYaw() + 90.0F)) `<br>实现调用 ` Axis.YP.rotationDegrees(state.getYaw() + 90.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L42) |

## WeaponBeamRenderer

` public class WeaponBeamRenderer extends EntityRenderer<WeaponBeamEntity, WeaponBeamRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WeaponBeamRenderer(EntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L34) |
| ` @Override public WeaponBeamRenderState createRenderState() ` | 末尾返回 ` new WeaponBeamRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L43) |
| ` @Override public void extractRenderState(WeaponBeamEntity entity, WeaponBeamRenderState state, float partialTick) ` | 实现调用 ` super.extractRenderState(entity, state, partialTick) `<br>实现调用 ` state.setVisible(false) `<br>实现调用 ` state.setFramePartialTick(partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L48) |
| ` @Override public void submit( WeaponBeamRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.isVisible() `<br>实现调用 ` state.getEndOffset() `<br>实现调用 ` state.isCompensateViewBob() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L100) |
| ` public static void counterViewBob(PoseStack pose, CameraRenderState camera) ` | 实现调用 ` createViewBobCompensation(camera) `<br>实现调用 ` pose.last().pose().set(compensation.pose().mul(pose.last().pose(), new Matrix4f())) `<br>实现调用 ` pose.last().pose() `<br>[调用处 EnergyWeaponFirstPersonRenderer.beginHand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L145) |
