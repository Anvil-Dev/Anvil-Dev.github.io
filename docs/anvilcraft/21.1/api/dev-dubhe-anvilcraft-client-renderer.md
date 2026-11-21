# dev.dubhe.anvilcraft.client.renderer



## FluidTankRenderUtil

` public final class FluidTankRenderUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float TANK_W ` | 初值 ` 1 / 16.0F + 0.001F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L12) |
| ` public static void drawFluidInTank(PoseStack ps, MultiBufferSource mbs, int light, FluidStack fluid, float fill) ` | 执行 ` FluidTankRenderUtil.drawFluidInTank(ps, mbs, light, fluid, fill, 0.0F) `<br>[调用处 CreativeFluidTankBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankBlockEntityRenderer.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L14) |
| ` public static void drawFluidInTank( PoseStack ps, MultiBufferSource mbs, int light, FluidStack fluid, float fill, float insetPixels ) ` | 在方块内绘制流体。<br>参数 ` insetPixels ` 在默认内缩基础上额外向内收缩的像素数，用于适配更小的玻璃窗口<br>实现调用 ` fluid.getFluid().getFluidType() `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` attributes.isLighterThanAir() `<br>[调用处 StorageFluidPortBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L23) |

## Line

` public record Line(Vec3 start, Vec3 end, int level, float length) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Line(Vec3 start, Vec3 end, float length) ` | 执行 ` this(start, end, 1, length) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L8) |
| ` public Line(Vec3 start, Vec3 end, int level) ` | 执行 ` this(start, end, level, (float) start.distanceTo(end)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L12) |
| ` public Line(Vec3 start, Vec3 end) ` | 执行 ` this(start, end, (float) start.distanceTo(end)) `<br>[调用处 SimplePowerGrid.createMergedOutlineShape](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/power/SimplePowerGrid.java#L338) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L16) |
| ` public void render(PoseStack pose, VertexConsumer vertex, Vec3 camera, int color) ` | 执行 ` this.render(pose.last(), vertex, camera, color) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L20) |
| ` public void render(PoseStack.Pose pose, VertexConsumer vertex, Vec3 camera, int color) ` | 实现调用 ` this.start() `<br>实现调用 ` this.end() `<br>实现调用 ` pose.pose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L24) |
| ` public Vec3 start() ` | 读取 record 分量 ` start `<br>[调用处 Line.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |
| ` public Vec3 end() ` | 读取 record 分量 ` end `<br>[调用处 Line.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |
| ` public float length() ` | 读取 record 分量 ` length `<br>[调用处 Line.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/Line.java#L7) |

## OverworldLikeOrbitalSkyRenderer

` public final class OverworldLikeOrbitalSkyRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L33)

Draws the generation-global amplified rings as world-space sky geometry.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void cacheModels(ModelEvent.BakingCompleted event) ` | 实现调用 ` event.getModels().get(CelestialForgingAnvilBlockEntityRenderer.R4) `<br>实现调用 ` event.getModels() `<br>实现调用 ` event.getModels().get(CelestialForgingAnvilBlockEntityRenderer.R5) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L40) |
| ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") public static void render(RenderLevelStageEvent event) ` | 实现调用 ` event.getStage() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(minecraft.level.dimension()) `<br>[调用处 RenderEventListener.onRenderOverworldLikeSky](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L45) |

## RenderState

` public class RenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isIrisPresent() ` | 末尾返回 ` IRIS_PRESENT `<br>[调用处 StellarEmissionRenderer.registerShaders](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/StellarEmissionRenderer.java#L117) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L18) |
| ` public static void bloomStage() ` | 执行 ` bloomRenderStage = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L22) |
| ` public static void levelStage() ` | 执行 ` bloomRenderStage = false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L26) |
| ` public static boolean isEnhancedRenderingAvailable() ` | 末尾返回 ` !Minecraft.useShaderTransparency() && !IrisState.isShaderEnabled() `<br>[调用处 ModRenderTargets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTargets.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L30) |
| ` public static boolean isBloomEffectEnabled() ` | 末尾返回 ` AnvilCraftClient.CONFIG.effects.renderBloomEffect `<br>[调用处 PowerGridSupport.renderEnhancedTransmitterLine](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L34) |
| ` public static boolean isScanPreviewEffectEnabled() ` | 末尾返回 ` AnvilCraftClient.CONFIG.effects.renderScanPreviewExtraEffect ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L38) |
| ` public static boolean isLensEffectEnabled() ` | 末尾返回 ` isEnhancedRenderingAvailable() && AnvilCraftClient.CONFIG.graphics.gravitationalLens.enabled `<br>[调用处 LevelRendererMixin.gravitationalLensPostProcess](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelRendererMixin.java#L223) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L42) |
| ` public static boolean isBloomRenderStage() ` | 末尾返回 ` RenderState.bloomRenderStage `<br>由 Lombok 生成。<br>[调用处 ModRenderTargets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTargets.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L9) |
| ` public RenderState() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L9) |
