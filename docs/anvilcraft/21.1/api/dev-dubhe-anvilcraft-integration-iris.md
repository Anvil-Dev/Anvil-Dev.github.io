# dev.dubhe.anvilcraft.integration.iris



## CelestialIrisRenderer

` public final class CelestialIrisRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L39)

Replays celestial emission and atmosphere against scene depth after the shader pack's final color pass.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void beginFrame() ` | 实现调用 ` DRAWS.clear() `<br>实现调用 ` ATMOSPHERES.clear() `<br>[调用处 IrisStellarMixin.anvilcraft$beginStellarFrame](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisStellarMixin.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L54) |
| ` public static boolean isRendering() ` | 末尾返回 ` rendering `<br>[调用处 PlanetAtmosphereRenderer.renderStandard](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/PlanetAtmosphereRenderer.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L61) |
| ` public static boolean defer(PoseStack pose, BiConsumer<PoseStack, MultiBufferSource> draw) ` | 末尾返回 ` defer(pose, draw, DRAWS) `<br>[调用处 CelestialBodyRenderer.defer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/CelestialBodyRenderer.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L65) |
| ` public static boolean deferAtmosphere(PoseStack pose, BiConsumer<PoseStack, MultiBufferSource> draw) ` | 末尾返回 ` defer(pose, draw, ATMOSPHERES) `<br>[调用处 PlanetAtmosphereRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/PlanetAtmosphereRenderer.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L87) |
| ` public static void render(RenderType surface, RenderType corona, RenderType atmosphere) ` | 实现调用 ` DRAWS.isEmpty() `<br>实现调用 ` ATMOSPHERES.isEmpty() `<br>实现调用 ` Minecraft.getInstance().getMainRenderTarget() `<br>[调用处 StellarEmissionRenderer.renderAfterShaders](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/StellarEmissionRenderer.java#L171) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L91) |
| ` public static void reset() ` | 实现调用 ` DRAWS.clear() `<br>实现调用 ` ATMOSPHERES.clear() `<br>实现调用 ` releaseBuffers() `<br>[调用处 StellarEmissionRenderer.registerShaders](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/StellarEmissionRenderer.java#L117) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L129) |

## IrisState

` public class IrisState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isShaderEnabled() ` | ` (RenderState.isIrisPresent()) ` 成立时提前返回 ` isShaderEnabledInternal() `<br>末尾返回 ` false `<br>[调用处 AnvilHammerScreen.renderType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L461) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L14) |
| ` public static BufferBuilder createUnextendedBufferBuilder( ByteBufferBuilder buffer, VertexFormat.Mode mode, VertexFormat format ) ` | 缓存管线按原版顶点布局上传，创建缓冲时禁止光影扩展该布局。<br>` (!RenderState.isIrisPresent()) ` 成立时提前返回 ` new BufferBuilder(buffer, mode, format) `<br>末尾返回 ` createUnextendedBufferBuilderInternal(buffer, mode, format) `<br>实现调用 ` RenderState.isIrisPresent() `<br>实现调用 ` createUnextendedBufferBuilderInternal(buffer, mode, format) `<br>[调用处 FullyBufferedBufferSource.getBuffer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L26) |
| ` public static void setupUnextendedBufferState(@Nullable VertexFormat previous, VertexFormat current) ` | 实现调用 ` RenderState.isIrisPresent() `<br>分支 ` (!RenderState.isIrisPresent()) ` 内调用 ` setupBufferState(previous, current) `<br>实现调用 ` setupBufferState(previous, current) `<br>[调用处 CompileResult.upload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CompileResult.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L47) |
| ` public static MultiBufferSource getHandBufferSource(MultiBufferSource fallback) ` | ` (!RenderState.isIrisPresent()) ` 成立时提前返回 ` fallback `<br>[调用处 CelestialForgingAnvilItemRenderer.ItemExtensions.applyForgeHandTransform](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L201) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L66) |
| ` public IrisState() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L13) |
