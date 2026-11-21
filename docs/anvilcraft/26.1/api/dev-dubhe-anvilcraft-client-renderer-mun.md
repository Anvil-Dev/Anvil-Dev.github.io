# dev.dubhe.anvilcraft.client.renderer.mun



## MunClientSky

` public final class MunClientSky `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunClientSky.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static float sunlight(ClientLevel level, Vec3 position) ` | 末尾返回 ` cachedSunlight `<br>[调用处 MunSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunClientSky.java#L19) |
| ` public static void clear() ` | [调用处 MunSkyRenderer.logout](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunClientSky.java#L30) |
| ` public static double partialDayTime(ClientLevel level, float partialTick) ` | ` (rate == 0) ` 成立时提前返回 ` 0 `<br>` (rate < 0) ` 成立时提前返回 ` partialTick `<br>末尾返回 ` level.clockManager().getPartialTick(clock) + partialTick * rate `<br>[调用处 MunSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunClientSky.java#L37) |

## MunClockRate

` public interface MunClockRate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunClockRate.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float anvilcraft$overworldClockRate() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunClockRate.java#L4) |

## MunLightmapState

` public interface MunLightmapState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunLightmapState.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isMunLighting() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunLightmapState.java#L4) |
| ` void anvilcraft$setMunLighting(boolean enabled) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunLightmapState.java#L6) |

## MunShadowMap

` public final class MunShadowMap implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L37)

缓存模型网格并生成级联深度贴图，地形采样成本与遮挡模型复杂度无关。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void blockChanged(ClientLevel level, BlockPos pos, BlockState previous, BlockState state) ` | 实现调用 ` MunShadowMesh.fullCube(previous, level, pos) `<br>实现调用 ` MunShadowMesh.fullCube(state, level, pos) `<br>实现调用 ` this.chunkChanged(ChunkPos.containing(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L364) |
| ` public void chunkChanged(ChunkPos pos) ` | 实现调用 ` this.contains(pos) `<br>分支 ` (this.level != null && this.contains(pos)) ` 内调用 ` this.invalidated.add(pos.pack()) `<br>分支 ` (this.level != null && this.contains(pos)) ` 内调用 ` pos.pack() `<br>[调用处 MunShadowMap.blockChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L367) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L370) |
| ` public int count() ` | 末尾返回 ` this.readyCascades ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L386) |
| ` public int textureId(int index) ` | 末尾返回 ` index < this.readyCascades && target != null ? target.texture() : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L399) |
| ` public Matrix4f matrix(int index) ` | 末尾返回 ` this.cascades[index].projection.matrix() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L410) |
| ` public Vector3f right() ` | 末尾返回 ` this.cascades[0].projection.right() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L414) |
| ` public Vector3f up() ` | 末尾返回 ` this.cascades[0].projection.up() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L418) |
| ` public float span(int index) ` | 末尾返回 ` this.cascades[index].span ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L422) |
| ` @Override public void close() ` | 分支 ` (cascade.target != null) ` 内调用 ` cascade.target.close() `<br>分支 ` (cascade.dynamicTarget != null) ` 内调用 ` cascade.dynamicTarget.close() `<br>分支 ` (cascade.translucentTarget != null) ` 内调用 ` cascade.translucentTarget.close() `<br>[调用处 MunShadowMap.prepare](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L426) |
| ` public MunShadowMap() ` | Java 提供的无参构造器。<br>[调用处 MunShadowReceiver](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowReceiver.java#L23) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowMap.java#L37) |

## MunShadowProgram

` public final class MunShadowProgram `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowProgram.java#L24)

Native shader ownership with direct uniform uploads for the integer shadow framebuffer.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(RegisterRenderPipelinesEvent event) ` | 事件总线派发 ` RegisterRenderPipelinesEvent ` 时调用。<br>实现调用 ` event.registerPipeline(OPAQUE) `<br>实现调用 ` event.registerPipeline(TRANSLUCENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunShadowProgram.java#L51) |

## MunSkyPipelines

` public final class MunSkyPipelines `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L19)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RenderPipeline STANDARD ` | 由 ` RenderPipeline.builder() .withLocation(AnvilCraft.of("pipeline/mun_sky")) .withVertexShader(AnvilCraft.of("core/mun/mun_sky")) .withFragmentShader(AnvilCraft.of("core/mun/mun_sky")) .withUniform("MunSky", UniformType.UNIFORM_BUFFER) .withSampler("Sampler0").withSampler("Sampler1") .withVertexFormat(DefaultVertexFormat.POSITION, VertexFormat.Mode.QUADS) .withDepthStencilState(Optional.empty()).withCull(false).build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L21) |
| ` public static final RenderPipeline BACKGROUND ` | 初值 ` color("background", VertexFormat.Mode.QUADS, ColorTargetState.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L29) |
| ` public static final RenderPipeline COLOR ` | 初值 ` color("color", VertexFormat.Mode.TRIANGLES, ColorTargetState.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L30) |
| ` public static final RenderPipeline ADDITIVE ` | 初值 ` color("additive", VertexFormat.Mode.TRIANGLES, new ColorTargetState(ModRenderPipelines.ADDITIVE_BLEND)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L31) |
| ` public static final RenderPipeline TRANSLUCENT ` | 初值 ` color("translucent", VertexFormat.Mode.TRIANGLES, new ColorTargetState(BlendFunction.TRANSLUCENT)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L33) |
| ` public static final RenderPipeline TEXTURED ` | 由 ` RenderPipeline.builder(RenderPipelines.MATRICES_PROJECTION_SNIPPET) .withLocation(AnvilCraft.of("pipeline/mun_sky_textured")) .withVertexShader("core/position_tex_color").withFragmentShader("core/position_tex_color") .withSampler("Sampler0").withVertexFormat(DefaultVertexFormat.POSITION_TEX_COLOR, VertexFormat.Mode.TRIANGLES) .withDepthStencilState(Optional.empty()).withCull(false).build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L35) |
| ` @SubscribeEvent public static void register(RegisterRenderPipelinesEvent event) ` | 事件总线派发 ` RegisterRenderPipelinesEvent ` 时调用。<br>实现调用 ` event.registerPipeline(pipeline) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyPipelines.java#L52) |

## MunSkyRenderer

` public final class MunSkyRenderer implements CustomSkyboxRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L34)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(RegisterCustomEnvironmentEffectRendererEvent event) ` | 事件总线派发 ` RegisterCustomEnvironmentEffectRendererEvent ` 时调用。<br>执行 ` event.registerSkyboxRenderer(AnvilCraft.of("mun"), INSTANCE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L48) |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` Minecraft.getInstance().execute(() -> { closeBuffers(); checked = false; failed = false; }) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L53) |
| ` @SubscribeEvent public static void shutdown(GameShuttingDownEvent event) ` | 事件总线派发 ` GameShuttingDownEvent ` 时调用。<br>执行 ` closeBuffers() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L62) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` MunClientSky.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L67) |
| ` @SubscribeEvent public static void extract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` event.getRenderState() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` camera.getFluidInCamera() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L77) |
| ` @Override public boolean renderSky(LevelRenderState state, SkyRenderState sky, Matrix4fc view, Runnable setupFog) ` | ` (frame == null) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L104) |
| ` public static Matrix4f earthMatrix(long time, double partialTick) ` | 实现调用 ` MunSkyMath.libration(time, partialTick) `<br>实现调用 ` rotationMatrix(libration.longitude()).mul(rotationMatrix(libration.latitude())) `<br>实现调用 ` rotationMatrix(libration.longitude()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L136) |
| ` public static Matrix4f rotationMatrix(MunSkyMath.Rotation rotation) ` | 末尾返回 ` new Matrix4f().rotation((float) rotation.angle(), (float) axis.x(), (float) axis.y(), (float) axis.z()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L142) |

## MunSkyRenderer.Frame

` public record Frame(double x, double z, long time, double partialTime, float daylight, Matrix4f skyRotation, Matrix4f earthRotation, MunSkyMath.Vector earth, MunSkyMath.Vector sun, Vector4f sunUv, boolean standard) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Frame(double x, double z, long time, double partialTime, float daylight, Matrix4f skyRotation, Matrix4f earthRotation, MunSkyMath.Vector earth, MunSkyMath.Vector sun, Vector4f sunUv, boolean standard) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public double x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public double z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public long time() ` | 读取 record 分量 ` time ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public double partialTime() ` | 读取 record 分量 ` partialTime ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public float daylight() ` | 读取 record 分量 ` daylight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public Matrix4f skyRotation() ` | 读取 record 分量 ` skyRotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public Matrix4f earthRotation() ` | 读取 record 分量 ` earthRotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L148) |
| ` public MunSkyMath.Vector earth() ` | 读取 record 分量 ` earth ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L148) |
| ` public MunSkyMath.Vector sun() ` | 读取 record 分量 ` sun ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L148) |
| ` public Vector4f sunUv() ` | 读取 record 分量 ` sunUv ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L148) |
| ` public boolean standard() ` | 读取 record 分量 ` standard ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L148) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSkyRenderer.java#L147) |

## MunSurfaceRenderer

` public final class MunSurfaceRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L41)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean lightingRequested() ` | 末尾返回 ` requested `<br>[调用处 MunLightmapExtractionMixin.anvilcraft$extractMoonLightmap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunLightmapExtractionMixin.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L65) |
| ` @SubscribeEvent public static void tick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (quality != nextQuality) ` 内调用 ` SHADOWS.close() `<br>分支 ` (quality != nextQuality) ` 内调用 ` MunLightingProfile.of(quality) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L69) |
| ` @SubscribeEvent public static void extract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` CelestialTravelManager.MUN_LEVEL.equals(event.getLevel().dimension()) `<br>实现调用 ` event.getLevel().dimension() `<br>实现调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L112) |
| ` public static void beginWorld(LevelRenderState state) ` | 实现调用 ` state.getRenderData(FRAME) `<br>分支 ` (uniforms == null) ` 内调用 ` RenderSystem.getDevice() `<br>实现调用 ` Vec3.atLowerCornerOf(BlockPos.containing(profile.cascades() > 0 ? frame.anchor : frame.camera)) `<br>[调用处 MunWorldPassMixin.anvilcraft$moonWorld](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunWorldPassMixin.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L125) |
| ` @SubscribeEvent public static void post(RenderLevelStageEvent.AfterOpaqueFeatures event) ` | 事件总线派发 ` RenderLevelStageEvent.AfterOpaqueFeatures ` 时调用。<br>实现调用 ` event.getLevelRenderState().getRenderData(FRAME) `<br>实现调用 ` event.getLevelRenderState() `<br>分支 ` (worldPass && frame != null) ` 内调用 ` POST.render(frame.projection, profile, frame.ambientOcclusion) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L153) |
| ` public static void endWorld() ` | 实现调用 ` SHADOWS.end() `<br>[调用处 MunWorldPassMixin.anvilcraft$moonWorld](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunWorldPassMixin.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L166) |
| ` public static void lightmap(boolean active) ` | 执行 ` lightmapPass = active `<br>[调用处 MunLightmapMixin.anvilcraft$moonLightmap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunLightmapMixin.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L171) |
| ` public static RenderPipeline replace(RenderPipeline original) ` | ` (lightmapPass && original == RenderPipelines.LIGHTMAP) ` 成立时提前返回 ` LIGHTMAP `<br>` (!worldPass) ` 成立时提前返回 ` original `<br>末尾返回 ` variant(original, profile.cascades() > 0, historyEnabled) `<br>[调用处 MunSurfacePassMixin.anvilcraft$moonPipeline](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunSurfacePassMixin.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L175) |
| ` public static void bind(RenderPass pass, RenderPipeline pipeline) ` | 实现调用 ` REPLACEMENTS.contains(pipeline) `<br>分支 ` (worldPass && uniforms != null && REPLACEMENTS.contains(pipeline)) ` 内调用 ` pass.setUniform("MunSurface", uniforms) `<br>[调用处 MunSurfacePassMixin.anvilcraft$moonUniforms](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunSurfacePassMixin.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L204) |
| ` @SubscribeEvent public static void register(RegisterRenderPipelinesEvent event) ` | 事件总线派发 ` RegisterRenderPipelinesEvent ` 时调用。<br>实现调用 ` event.registerPipeline(LIGHTMAP) `<br>实现调用 ` event.registerPipeline(variant(original, false, false)) `<br>实现调用 ` variant(original, false, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L208) |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>实现调用 ` SHADOWS.close() `<br>实现调用 ` POST.close() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L221) |
| ` @SubscribeEvent public static void shutdown(GameShuttingDownEvent event) ` | 事件总线派发 ` GameShuttingDownEvent ` 时调用。<br>实现调用 ` SHADOWS.close() `<br>实现调用 ` POST.close() `<br>分支 ` (uniforms != null) ` 内调用 ` uniforms.close() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L228) |
| ` public static boolean shadowsRequested() ` | 末尾返回 ` worldPass && profile.cascades() > 0 `<br>[调用处 MunEntityShadowMixin.anvilcraft$moonShadow](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunEntityShadowMixin.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L238) |
| ` public static void onBlockChanged(ClientLevel level, BlockPos pos, BlockState previous, BlockState state) ` | 实现调用 ` profile.cascades() `<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (requested && profile.cascades() > 0 && level == Minecraft.getInstance().level) ` 内调用 ` SHADOWS.map.blockChanged(level, pos, previous, state) `<br>[调用处 MunShadowChunkMixin.anvilcraft$shadowChange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunShadowChunkMixin.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L242) |
| ` public static void onModelChanged(ClientLevel level, BlockPos pos) ` | 实现调用 ` profile.cascades() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` pos.getZ() `<br>[调用处 MunShadowLevelMixin.anvilcraft$changedShadowModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunShadowLevelMixin.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L250) |
| ` public static void onChunkChanged(ClientLevel level, ChunkPos pos) ` | 实现调用 ` profile.cascades() `<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (requested && profile.cascades() > 0 && level == Minecraft.getInstance().level) ` 内调用 ` SHADOWS.map.chunkChanged(pos) `<br>[调用处 MunShadowChunkCacheMixin.anvilcraft$unloadedShadowChunk](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunShadowChunkCacheMixin.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L259) |
| ` public static boolean bindShadows(GlRenderPipeline pipeline) ` | ` (!REPLACEMENTS.contains(pipeline.info()) \|\| !pipeline.info().getShaderDefines().flags().contains("MUN_SHADOWS")) ` 成立时提前返回 ` true `<br>` (!worldPass \|\| profile.cascades() == 0) ` 成立时提前返回 ` false `<br>[调用处 MunShadowReceiverMixin.anvilcraft$shadowResources](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MunShadowReceiverMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/MunSurfaceRenderer.java#L263) |

## OverworldSkyRenderer

` public final class OverworldSkyRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L43)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(RegisterRenderPipelinesEvent event) ` | 事件总线派发 ` RegisterRenderPipelinesEvent ` 时调用。<br>执行 ` event.registerPipeline(PIPELINE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L68) |
| ` @SubscribeEvent public static void extract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` Level.OVERWORLD.equals(event.getLevel().dimension()) `<br>实现调用 ` event.getLevel().dimension() `<br>实现调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L73) |
| ` public static boolean isActive() ` | 末尾返回 ` active `<br>[调用处 OverworldSkyMixin.anvilcraft$replaceCelestialBodies](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/OverworldSkyMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L92) |
| ` public static void begin() ` | 实现调用 ` RenderSystem.getDevice() `<br>实现调用 ` device.precompilePipeline(PIPELINE).isValid() `<br>实现调用 ` device.precompilePipeline(PIPELINE) `<br>[调用处 OverworldSkyMixin.anvilcraft$captureAtmosphere](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/OverworldSkyMixin.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L96) |
| ` public static void render() ` | 实现调用 ` MemoryStack.stackPush() `<br>实现调用 ` RenderSystem.getDevice() `<br>分支 ` (uniforms == null) ` 内调用 ` device.createBuffer(() -> "Overworld sky uniforms", GpuBuffer.USAGE_COPY_DST \| GpuBuffer.USAGE_UNIFORM, 272) `<br>[调用处 OverworldSkyMixin.anvilcraft$renderCelestialBodies](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/OverworldSkyMixin.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L121) |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` Minecraft.getInstance().execute(OverworldSkyRenderer::close) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L214) |
| ` @SubscribeEvent public static void shutdown(GameShuttingDownEvent event) ` | 事件总线派发 ` GameShuttingDownEvent ` 时调用。<br>执行 ` close() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/OverworldSkyRenderer.java#L219) |
