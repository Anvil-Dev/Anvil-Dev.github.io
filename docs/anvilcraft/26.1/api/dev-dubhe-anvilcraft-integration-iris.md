# dev.dubhe.anvilcraft.integration.iris



## CelestialIrisRenderer

` public final class CelestialIrisRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L25)

Keeps celestial emission and atmosphere out of the shader pack's color processing.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void beginFrame() ` | 实现调用 ` DRAWS.clear() `<br>实现调用 ` ATMOSPHERES.clear() `<br>[调用处 IrisStellarMixin.anvilcraft$beginCelestialFrame](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisStellarMixin.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L36) |
| ` public static void submit( PoseStack pose, OrderedSubmitNodeCollector collector, RenderType type, SubmitNodeCollector.CustomGeometryRenderer renderer, boolean atmosphere ) ` | 实现调用 ` IrisState.isShaderEnabled() `<br>分支 ` (!IrisState.isShaderEnabled()) ` 内调用 ` collector.submitCustomGeometry(pose, type, renderer) `<br>[调用处 PlanetAtmosphereRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/celestial/PlanetAtmosphereRenderer.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L42) |
| ` public static void render() ` | 实现调用 ` DRAWS.isEmpty() `<br>实现调用 ` ATMOSPHERES.isEmpty() `<br>实现调用 ` RenderSystem.getProjectionMatrixBuffer() `<br>[调用处 IrisStellarMixin.anvilcraft$composeCelestialBodies](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisStellarMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L69) |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` reset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L99) |
| ` public static void reset() ` | 实现调用 ` DRAWS.clear() `<br>实现调用 ` ATMOSPHERES.clear() `<br>[调用处 IrisStellarMixin.anvilcraft$releaseCelestialFrame](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisStellarMixin.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/CelestialIrisRenderer.java#L104) |

## IrisState

` public class IrisState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L15)

类型注解 ` @Integration(value = "iris", type = IntegrationType.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void applyClient() ` | 实现调用 ` IrisState.log.info("Iris integration loaded xwx") `<br>实现调用 ` IrisPipelines.assignPipeline(ModRenderPipelines.LIGHTNING, ShaderKey.TEXTURED_COLOR) `<br>实现调用 ` IrisPipelines.assignPipeline(ModRenderPipelines.LASER_TRANSLUCENT, ShaderKey.BEACON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L19) |
| ` public static boolean isShaderEnabled() ` | ` (RenderState.isIrisPresent()) ` 成立时提前返回 ` IrisState.isShaderEnabledInternal() `<br>末尾返回 ` false `<br>[调用处 RenderState.isEnhancedRenderingAvailable](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L31) |
| ` public static SubmitNodeStorage getHandSubmitNodeStorage(SubmitNodeStorage fallback) ` | 末尾返回 ` RenderState.isIrisPresent() ? getHandSubmitNodeStorageInternal(fallback) : fallback `<br>[调用处 CelestialAnvilItemExtensions.applyForgeHandTransform](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialAnvilItemExtensions.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L42) |
| ` public IrisState() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L15) |
