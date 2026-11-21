# dev.dubhe.anvilcraft.client.renderer



## CreativeCrateRenderUtil

` public final class CreativeCrateRenderUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/CreativeCrateRenderUtil.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void submit( ItemStackRenderState item, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, int outline ) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` applyFace(pose, side) `<br>实现调用 ` item.submit(pose, collector, light, overlay, outline) `<br>[调用处 CreativeCrateRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/CreativeCrateRenderUtil.java#L12) |
| ` public static void applyFace(PoseStack pose, int side) ` | 实现调用 ` pose.translate(0.5, 0.5, 0.9) `<br>实现调用 ` pose.translate(0.5, 0.5, 0.1) `<br>实现调用 ` pose.translate(0.9, 0.5, 0.5) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/CreativeCrateRenderUtil.java#L23) |

## FluidRenderLayers

` public final class FluidRenderLayers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<FluidStack> sorted(List<FluidStack> contents) ` | 实现调用 ` contents.stream().filter(fluid -> !fluid.isEmpty()) `<br>实现调用 ` contents.stream() `<br>实现调用 ` Comparator.comparingInt(FluidStack::getAmount).reversed() `<br>[调用处 LargeFluidTankRenderUtil.worldLayers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L22) |
| ` public static List<Layer> create(List<FluidStack> contents, long capacity) ` | ` (capacity <= 0) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.copyOf(layers) `<br>[调用处 LargeFluidTankRenderUtil.worldLayers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L29) |
| ` public static void submit( Layer layer, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, PoseStack pose, SubmitNodeCollector collector, int light, RenderType translucent ) ` | 实现调用 ` layer.resource() `<br>实现调用 ` layer.amount() `<br>实现调用 ` layer.bottom() `<br>[调用处 CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L58) |

## FluidRenderLayers.Layer

` public record Layer(FluidResource resource, int amount, double bottom, double top, float opacity, boolean renderBottom) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Layer(FluidResource resource, int amount, double bottom, double top, float opacity, boolean renderBottom) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public FluidResource resource() ` | 读取 record 分量 ` resource ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public int amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public double bottom() ` | 读取 record 分量 ` bottom ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public double top() ` | 读取 record 分量 ` top ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public float opacity() ` | 读取 record 分量 ` opacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public boolean renderBottom() ` | 读取 record 分量 ` renderBottom ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L19) |

## FluidTankRenderUtil

` public final class FluidTankRenderUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float INSET ` | 初值 ` 1 / 16F + 0.001F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L10) |
| ` public static void submit( FluidResource resource, int amount, float fill, PoseStack pose, SubmitNodeCollector collector, int light, RenderType type ) ` | 执行 ` submit(resource, amount, fill, 0, pose, collector, light, type) `<br>[调用处 CreativeFluidTankRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L15) |
| ` public static void submit( FluidResource resource, int amount, float fill, float insetPixels, PoseStack pose, SubmitNodeCollector collector, int light, RenderType type ) ` | 实现调用 ` resource.getFluidType().isLighterThanAir() `<br>实现调用 ` resource.getFluidType() `<br>[调用处 StorageFluidPortBlockEntityRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L21) |

## LargeFluidTankRenderUtil

` public final class LargeFluidTankRenderUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float INSET ` | 初值 ` 4 / 16F + 0.001F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L17) |
| ` public static List<Layer> layers(List<FluidStack> contents, boolean enhanced) ` | 末尾返回 ` List.copyOf(layers) `<br>[调用处 LargeFluidTankItemRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L25) |
| ` public static List<FluidRenderLayers.Layer> worldLayers(List<FluidStack> contents, boolean enhanced) ` | 末尾返回 ` FluidRenderLayers.create(fluids, capacity) `<br>[调用处 LargeFluidTankRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L44) |
| ` public static void submit( Layer layer, boolean expandGas, PoseStack pose, SubmitNodeCollector collector, int light, RenderType translucent ) ` | 实现调用 ` layer.resource() `<br>实现调用 ` resource.getFluidType().isLighterThanAir() `<br>实现调用 ` resource.getFluidType() `<br>[调用处 LargeFluidTankItemRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L52) |

## LargeFluidTankRenderUtil.Layer

` public record Layer(FluidResource resource, int amount, double bottom, double top) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Layer(FluidResource resource, int amount, double bottom, double top) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public FluidResource resource() ` | 读取 record 分量 ` resource ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public int amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public double bottom() ` | 读取 record 分量 ` bottom ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public double top() ` | 读取 record 分量 ` top ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/LargeFluidTankRenderUtil.java#L22) |

## MonolithSurfaceRenderer

` public final class MonolithSurfaceRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L42)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` FACES.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L52) |
| ` public static List<Face> faces(BlockState state) ` | 实现调用 ` Minecraft.getInstance().getModelManager().getBlockStateModelSet().get(state) `<br>实现调用 ` Minecraft.getInstance().getModelManager().getBlockStateModelSet() `<br>实现调用 ` Minecraft.getInstance().getModelManager() `<br>[调用处 MonolithItemRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L57) |
| ` @SubscribeEvent public static void extract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getRenderState() `<br>实现调用 ` Minecraft.getInstance().options.getEffectiveRenderDistance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L82) |
| ` @SubscribeEvent public static void submit(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` event.getLevelRenderState().getRenderData(SURFACES) `<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` surfaces.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L107) |
| ` public static void submitFaces(PoseStack pose, SubmitNodeCollector collector, List<Face> faces) ` | 实现调用 ` faces.isEmpty() `<br>实现调用 ` renderType() `<br>[调用处 MonolithItemRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L122) |

## MonolithSurfaceRenderer.Face

` public record Face(Direction cullFace, List<Vector3fc> vertices) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Face(Direction cullFace, List<Vector3fc> vertices) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144) |
| ` public Direction cullFace() ` | 读取 record 分量 ` cullFace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144) |
| ` public List<Vector3fc> vertices() ` | 读取 record 分量 ` vertices ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L144) |

## OverworldLikeOrbitalSkyRenderer

` public final class OverworldLikeOrbitalSkyRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L38)

Generation-global orbital models drawn immediately after the native sky.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void extract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(level.dimension()) `<br>实现调用 ` level.dimension() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L49) |
| ` @SubscribeEvent public static void render(RenderLevelStageEvent.AfterSky event) ` | 事件总线派发 ` RenderLevelStageEvent.AfterSky ` 时调用。<br>实现调用 ` event.getLevelRenderState().getRenderData(FRAME) `<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` Tesselator.getInstance().begin(type.mode(), type.format()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L101) |

## RenderState

` public class RenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isIrisPresent() ` | 末尾返回 ` RenderState.IRIS_PRESENT `<br>[调用处 IrisState.isShaderEnabled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/iris/IrisState.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L18) |
| ` public static void bloomStage() ` | 执行 ` RenderState.bloomRenderStage = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L22) |
| ` public static void levelStage() ` | 执行 ` RenderState.bloomRenderStage = false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L26) |
| ` public static boolean isEnhancedRenderingAvailable() ` | 末尾返回 ` !Minecraft.useShaderTransparency() && !IrisState.isShaderEnabled() `<br>[调用处 CFARenderer.submitStarBloom](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1278) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L30) |
| ` public static boolean isBloomEffectEnabled() ` | 末尾返回 ` AnvilCraftClient.CONFIG.effects.renderBloomEffect `<br>[调用处 CFARenderer.submitStarBloom](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L1278) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L34) |
| ` public static boolean isLensEffectEnabled() ` | 末尾返回 ` RenderState.isEnhancedRenderingAvailable() && AnvilCraftClient.CONFIG.graphics.gravitationalLens.enabled `<br>[调用处 AnvilCraftClient.on](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L38) |
| ` public static boolean isBloomRenderStage() ` | 末尾返回 ` RenderState.bloomRenderStage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L9) |
| ` public RenderState() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/RenderState.java#L9) |
