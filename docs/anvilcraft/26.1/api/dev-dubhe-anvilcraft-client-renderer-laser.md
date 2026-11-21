# dev.dubhe.anvilcraft.client.renderer.laser



## CachedLaserBlockEntityRenderer

` public class CachedLaserBlockEntityRenderer<T extends BaseLaserBlockEntity> implements CachedBlockEntityRenderer<T, LaserRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/CachedLaserBlockEntityRenderer.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public LaserRenderState createRenderState() ` | 末尾返回 ` new LaserRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/CachedLaserBlockEntityRenderer.java#L15) |
| ` @Override public LaserRenderState extractRenderState( BaseLaserBlockEntity blockEntity, LaserRenderState state, float partialTicks, Camera camera ) ` | 末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/CachedLaserBlockEntityRenderer.java#L20) |
| ` @Override public void submit(LaserRenderState state, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, CameraRenderState camera) ` | 实现调用 ` RenderState.isEnhancedRenderingAvailable() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.translate(0.5f, 0.5f, 0.5f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/CachedLaserBlockEntityRenderer.java#L29) |
| ` public CachedLaserBlockEntityRenderer() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.clientSetup](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L92) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/CachedLaserBlockEntityRenderer.java#L13) |

## LaserCompiler

` public class LaserCompiler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float[] LASER_WIDTH ` | 字段类型为 ` float[] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L12) |
| ` public static final float PIXEL ` | 初值 ` 1 / 16F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L13) |
| ` public static final float HALF_PIXEL ` | 初值 ` LaserCompiler.PIXEL / 2F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L14) |
| ` public static float laserWidth(LaserRenderState state) ` | 末尾返回 ` LaserCompiler.LASER_WIDTH[Math.clamp(state.laserLevel, 1, 64)] + 0.001F `<br>[调用处 LaserCompiler.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L24) |
| ` public static void submit( PoseStack poseStack, LaserRenderState state, SubmitNodeCollector nodeCollector, boolean bloomed ) ` | 实现调用 ` LaserCompiler.laserWidth(state) `<br>[调用处 LaserBlockEntityRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L28) |
| ` public LaserCompiler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/laser/LaserCompiler.java#L11) |
