# dev.dubhe.anvilcraft.client.renderer.entity



## CauldronOutletRenderer

` public class CauldronOutletRenderer extends EntityRenderer<CauldronOutletEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CauldronOutletRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.bakeLayer(CauldronOutletModel.LAYER_LOCATION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L26) |
| ` @Override public void render( CauldronOutletEntity entity, float entityYaw, float partialTicks, PoseStack poseStack, MultiBufferSource buffer, int packedLight ) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` entity.getCauldronPos() `<br>实现调用 ` searchPositions.add(currentPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L31) |
| ` @Override public ResourceLocation getTextureLocation(CauldronOutletEntity entity) ` | 末尾返回 ` AnvilCraft.of("textures/block/cauldron_outlet.png") `<br>[调用处 CauldronOutletRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L122) |

## FluidTankMinecartRenderer

` public class FluidTankMinecartRenderer extends MinecartRenderer<FluidTankMinecartEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/FluidTankMinecartRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankMinecartRenderer(EntityRendererProvider.Context context) ` | 执行 ` super(context, ModelLayers.MINECART) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/FluidTankMinecartRenderer.java#L15) |

## IonocraftRenderer

` public class IonocraftRenderer extends EntityRenderer<IonocraftEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation TEXTURE ` | 初值 ` AnvilCraft.of("textures/entity/ionocraft.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L16) |
| ` public IonocraftRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.bakeLayer(ModModelLayers.IONOCRAFT) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L19) |
| ` @Override public void render( IonocraftEntity entity, float entityYaw, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight ) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.scale(1, -1, 1) `<br>实现调用 ` poseStack.translate(0, -1.5f, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L24) |
| ` @Override public ResourceLocation getTextureLocation(IonocraftEntity entity) ` | 末尾返回 ` TEXTURE `<br>[调用处 IonocraftRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L42) |

## MagnetizedNodeEntityRenderer

` public class MagnetizedNodeEntityRenderer extends EntityRenderer<MagnetizedNodeEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation MAGNETIZED_NODE_TEXTURE ` | 初值 ` AnvilCraft.of("textures/entity/magnetized_node.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L16) |
| ` public MagnetizedNodeEntityRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.bakeLayer(ModModelLayers.MAGNETIZED_NODE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L20) |
| ` @Override public ResourceLocation getTextureLocation(MagnetizedNodeEntity magnetizedNodeEntity) ` | 末尾返回 ` MAGNETIZED_NODE_TEXTURE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L25) |
| ` @Override public void render( MagnetizedNodeEntity entity, float entityYaw, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight ) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.translate(0, -1.31f, 0) `<br>实现调用 ` this.model.setupAnim(entity, 0f, 0f, ageInTicks, 0f, 0f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L30) |

## RailgunAnvilRenderer

` public class RailgunAnvilRenderer extends EntityRenderer<RailgunAnvilEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RailgunAnvilRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.getBlockRenderDispatcher() `<br>实现调用 ` context.getItemRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L24) |
| ` @Override public void render(RailgunAnvilEntity entity, float yaw, float partialTick, PoseStack pose, MultiBufferSource buffers, int light) ` | 实现调用 ` entity.isReturning() `<br>分支 ` (entity.isReturning()) ` 内调用 ` pose.pushPose() `<br>分支 ` (entity.isReturning()) ` 内调用 ` pose.translate(0.0, 0.25, 0.0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L31) |
| ` @Override public ResourceLocation getTextureLocation(RailgunAnvilEntity entity) ` | 末尾返回 ` TextureAtlas.LOCATION_BLOCKS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/RailgunAnvilRenderer.java#L55) |

## SlidingBlockRenderer

` public class SlidingBlockRenderer extends EntityRenderer<SlidingBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlidingBlockRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L30) |
| ` @Override public void render(SlidingBlockEntity entity, float yaw, float partialTick, PoseStack pose, MultiBufferSource buffer, int packedLight) ` | 实现调用 ` entity.getSection().blocks() `<br>实现调用 ` entity.getSection() `<br>实现调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L36) |
| ` @SuppressWarnings("deprecation") @Override public ResourceLocation getTextureLocation(SlidingBlockEntity entity) ` | Returns the location of an entity's texture.<br>末尾返回 ` TextureAtlas.LOCATION_BLOCKS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SlidingBlockRenderer.java#L121) |

## SpectralBlockRenderer

` public class SpectralBlockRenderer extends EntityRenderer<FallingSpectralBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpectralBlockRenderer(EntityRendererProvider.Context context) ` | 上升方块渲染器<br>实现调用 ` super(context) `<br>实现调用 ` context.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L25) |
| ` @Override public void render( FallingSpectralBlockEntity entity, float entityYaw, float partialTicks, PoseStack poseStack, MultiBufferSource buffer, int packedLight) ` | 实现调用 ` entity.getBlockState() `<br>实现调用 ` blockState.getRenderShape() `<br>分支 ` (blockState.getRenderShape() == RenderShape.MODEL) ` 内调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L31) |
| ` @Override public ResourceLocation getTextureLocation(FallingSpectralBlockEntity entity) ` | 末尾返回 ` TextureAtlas.LOCATION_BLOCKS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralBlockRenderer.java#L66) |

## SpectralProjectileRenderer

` public class SpectralProjectileRenderer<T extends SpectralProjectileEntity> extends ArrowRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation ARROW_LOCATION ` | 初值 ` ResourceLocation.withDefaultNamespace( "textures/entity/projectiles/arrow.png" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L31) |
| ` public SpectralProjectileRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.getItemRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L40) |
| ` @Override public ResourceLocation getTextureLocation(T t) ` | 末尾返回 ` ARROW_LOCATION ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L45) |
| ` @Override @SuppressWarnings("deprecation") public void render( T entity, float entityYaw, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight ) ` | 实现调用 ` entity.getAsItemStack() `<br>实现调用 ` itemStack.is(ItemTags.ARROWS) `<br>分支 ` (itemStack.is(ItemTags.ARROWS)) ` 内调用 ` super.render(entity, entityYaw, partialTick, poseStack, bufferSource, packedLight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L50) |
| ` public void renderTranslucentItem( int alpha, ItemStack itemStack, ItemDisplayContext displayContext, boolean leftHand, PoseStack poseStack, MultiBufferSource bufferSource, int combinedLight, int combinedOverlay, BakedModel bakedModel ) ` | 实现调用 ` itemStack.isEmpty() `<br>分支 ` (!itemStack.isEmpty()) ` 内调用 ` poseStack.pushPose() `<br>分支 ` (!itemStack.isEmpty()) ` 内调用 ` ClientHooks.handleCameraTransforms(poseStack, bakedModel, displayContext, leftHand) `<br>[调用处 SpectralProjectileRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L123) |

## SpectralProjectileRenderer.TranslucentVertexConsumer

` public record TranslucentVertexConsumer(VertexConsumer delegate, int alpha) implements VertexConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186)

透明顶点消费者<br>参数 ` delegate ` 原始顶点消费者（委托对象）<br>参数 ` alpha ` 目标半透明度（0-255，50% 对应 128）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public VertexConsumer addVertex(float v, float v1, float v2) ` | 末尾返回 ` this.delegate.addVertex(v, v1, v2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L187) |
| ` @Override public VertexConsumer setColor(int i, int i1, int i2, int i3) ` | 末尾返回 ` this.delegate.setColor(i, i1, i2, this.alpha) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L192) |
| ` @Override public VertexConsumer setUv(float v, float v1) ` | 末尾返回 ` this.delegate.setUv(v, v1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L197) |
| ` @Override public VertexConsumer setUv1(int i, int i1) ` | 末尾返回 ` this.delegate.setUv1(i, i1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L202) |
| ` @Override public VertexConsumer setUv2(int i, int i1) ` | 末尾返回 ` this.delegate.setUv2(i, i1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L207) |
| ` @Override public VertexConsumer setNormal(float v, float v1, float v2) ` | 末尾返回 ` this.delegate.setNormal(v, v1, v2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L212) |
| ` public TranslucentVertexConsumer(VertexConsumer delegate, int alpha) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186) |
| ` public VertexConsumer delegate() ` | 读取 record 分量 ` delegate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186) |
| ` public int alpha() ` | 读取 record 分量 ` alpha ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/SpectralProjectileRenderer.java#L186) |

## ThrownHeavyHalberdRenderer

` public class ThrownHeavyHalberdRenderer<T extends ThrownHeavyHalberdEntity> extends EntityRenderer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownHeavyHalberdRenderer(EntityRendererProvider.Context context) ` | 实现调用 ` super(context) `<br>实现调用 ` context.getItemRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L19) |
| ` @Override public void render(T entity, float yaw, float partialTick, PoseStack pose, MultiBufferSource buffer, int light) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(Mth.lerp(partialTick, entity.yRotO, entity.getYRot()) + 90.0F)) `<br>实现调用 ` Axis.YP.rotationDegrees(Mth.lerp(partialTick, entity.yRotO, entity.getYRot()) + 90.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L24) |
| ` @Override public ResourceLocation getTextureLocation(T entity) ` | 末尾返回 ` TextureAtlas.LOCATION_BLOCKS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/ThrownHeavyHalberdRenderer.java#L44) |

## WeaponBeamRenderer

` public class WeaponBeamRenderer extends EntityRenderer<WeaponBeamEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WeaponBeamRenderer(EntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L32) |
| ` @Override public void render( WeaponBeamEntity entity, float yaw, float partialTick, PoseStack poseStack, MultiBufferSource buffers, int light ) ` | 实现调用 ` isObsoleteContinuousBeam(entity) `<br>实现调用 ` isOwnerFiringContinuousBeam(entity) `<br>实现调用 ` entity.getEndOffset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L36) |
| ` public static void counterViewBob(PoseStack poseStack, Player player, float partialTick) ` | 实现调用 ` createViewBobCompensation(player, partialTick) `<br>实现调用 ` poseStack.last().pose().set(compensation.pose.mul(poseStack.last().pose(), new Matrix4f())) `<br>实现调用 ` poseStack.last().pose() `<br>[调用处 EnergyWeaponFirstPersonRenderer.captureHoldingProjection](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L105) |
| ` @Override public ResourceLocation getTextureLocation(WeaponBeamEntity entity) ` | 末尾返回 ` TextureAtlas.LOCATION_BLOCKS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L223) |
