# dev.dubhe.anvilcraft.client.renderer.laser



## LaserCompiler

` public class LaserCompiler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float[] LASER_WIDTH ` | 字段类型为 ` float[] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L17) |
| ` public static final float PIXEL ` | 初值 ` 1 / 16f ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L18) |
| ` public static final float HALF_PIXEL ` | 初值 ` PIXEL / 2f ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L19) |
| ` public static float laserWidth(LaserState state) ` | 末尾返回 ` laserWidth(state.laserLevel()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L29) |
| ` public static float laserWidth(int laserLevel) ` | 末尾返回 ` LASER_WIDTH[Math.clamp(laserLevel, 1, 64)] + 0.001f ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L33) |
| ` public static void compile( LaserState state, Function<RenderType, VertexConsumer> bufferBuilderFunction ) ` | 实现调用 ` state.laserLevel() `<br>实现调用 ` laserWidth(state) `<br>实现调用 ` state.gamma() `<br>[调用处 LaserBlockRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L37) |
| ` @SuppressWarnings("deprecation") public static void compileWeaponBeam( PoseStack.Pose pose, float length, int laserLevel, Function<RenderType, VertexConsumer> bufferBuilderFunction ) ` | 实现调用 ` Minecraft.getInstance().getTextureAtlas(TextureAtlas.LOCATION_BLOCKS) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` spriteGetter.apply(AnvilCraft.of("block/laser")) `<br>[调用处 WeaponBeamRenderer.renderLaserBeam](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L86) |
| ` public LaserCompiler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L16) |

## LaserRenderer

` public class LaserRenderer implements CacheableBlockEntityRenderer<BaseLaserBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void render( BaseLaserBlockEntity blockEntity, MultiBufferSource.BufferSource buffer, PoseStack poseStack ) ` | 实现调用 ` LaserState.create(blockEntity, poseStack) `<br>分支 ` (laserState != null) ` 内调用 ` LaserCompiler.compile( laserState, buffer::getBuffer ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserRenderer.java#L9) |
| ` public LaserRenderer() ` | Java 提供的无参构造器。<br>[调用处 CacheableBlockEntityRenderers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java#L26) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserRenderer.java#L8) |

## LaserState

` public record LaserState(BaseLaserBlockEntity blockEntity, BlockPos pos, float length, float offset, int laserLevel, boolean gamma, LensType lensType, PoseStack.Pose pose, TextureAtlasSprite laserAtlasSprite, TextureAtlasSprite concreteAtlasSprite) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings( {"deprecation", "checkstyle:VariableDeclarationUsageDistance" } ) public static @Nullable LaserState create(BaseLaserBlockEntity blockEntity, PoseStack poseStack) ` | ` (blockEntity.getIrradiateBlockPos() == null) ` 成立时提前返回 ` null `<br>末尾返回 ` laserState `<br>[调用处 LaserBlockRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockRenderer.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L30) |
| ` public LaserState(BaseLaserBlockEntity blockEntity, BlockPos pos, float length, float offset, int laserLevel, boolean gamma, LensType lensType, PoseStack.Pose pose, TextureAtlasSprite laserAtlasSprite, TextureAtlasSprite concreteAtlasSprite) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L18) |
| ` public BaseLaserBlockEntity blockEntity() ` | 读取 record 分量 ` blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L19) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L20) |
| ` public float length() ` | 读取 record 分量 ` length ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L21) |
| ` public float offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L22) |
| ` public int laserLevel() ` | 读取 record 分量 ` laserLevel ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L23) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L24) |
| ` public LensType lensType() ` | 读取 record 分量 ` lensType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L25) |
| ` public PoseStack.Pose pose() ` | 读取 record 分量 ` pose ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L26) |
| ` public TextureAtlasSprite laserAtlasSprite() ` | 读取 record 分量 ` laserAtlasSprite ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L27) |
| ` public TextureAtlasSprite concreteAtlasSprite() ` | 读取 record 分量 ` concreteAtlasSprite ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserState.java#L18) |
