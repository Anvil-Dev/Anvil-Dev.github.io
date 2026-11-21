# dev.dubhe.anvilcraft.client.selection



## ModelBlockSelection

` public final class ModelBlockSelection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L48)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void prepare(ModelEvent.ModifyBakingResult event) ` | 事件总线派发 ` ModelEvent.ModifyBakingResult ` 时调用。<br>实现调用 ` ModelSelectionDenylist.reload(Minecraft.getInstance().getResourceManager()) `<br>实现调用 ` Minecraft.getInstance().getResourceManager() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L78) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>实现调用 ` Map.of() `<br>实现调用 ` DYNAMIC.clear() `<br>实现调用 ` FALLBACK.invalidateAll() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L84) |
| ` @SubscribeEvent public static void beginFrame(RenderFrameEvent.Pre event) ` | 事件总线派发 ` RenderFrameEvent.Pre ` 时调用。<br>实现调用 ` DYNAMIC.clear() `<br>实现调用 ` PREVIEW_BER_PARTS.clear() `<br>实现调用 ` PREVIEW_BER_MODELS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L106) |
| ` public static long frame() ` | 末尾返回 ` frame `<br>[调用处 AutoEnchantingTableBlockEntityRenderer.bookPose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L115) |
| ` public static List<SelectionPart> multipartOutline(BlockState state) ` | 返回放置状态或主部件对应的整机描边。<br>末尾返回 ` outline == null ? List.of() : outline `<br>[调用处 BuildingRodRenderer.renderPlacementOutline](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodRenderer.java#L245) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L120) |
| ` public static List<SelectionPart> previewBerParts(BlockState state, BlockPos pos) ` | 放置预览用的方块实体模型几何（描边模式）。 方块模型与实体模型是两套模型（如智能方块放置器 = 底座方块模型 + 机械臂实体模型）， 实体部分不在 snapshot.outlines() 中。预览位置上还没有方块实体，故按放置状态 临时构造一个（与 RenderSupport 的做法一致）取其静止姿态。<br>参数 ` state ` 放置后的方块状态<br>参数 ` pos ` 放置位；渲染器读自身坐标处的世界状态时以此为准<br>实现调用 ` pos.immutable() `<br>[调用处 BuildingRodRenderer.renderPlacementOutline](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodRenderer.java#L246) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L135) |
| ` public static List<ModelPlacement> previewBerModels(BlockState state, BlockPos pos) ` | 放置预览用的方块实体模型与位姿（虚影模式，按贴图渲染）。<br>参见 #previewBerParts(BlockState, BlockPos)<br>实现调用 ` pos.immutable() `<br>[调用处 LargeBlockPlacePreviewEventListener.extractPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L322) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L150) |
| ` public static <T extends BlockEntity> List<SelectionPart> rendererParts(T entity, float partialTick) ` | 返回 BER 实际使用的 cube 和姿态，不混入用于交互的碰撞箱回退。<br>末尾返回 ` ModelBlockSelection.rendererParts(entity, partialTick, false) `<br>[调用处 RuinsBlockEntityRenderer.collectSelectionParts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L208) |
| ` @SubscribeEvent(priority = EventPriority.LOW) public static void highlight(ExtractBlockOutlineRenderStateEvent event) ` | 事件总线派发 ` ExtractBlockOutlineRenderStateEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getLevel().getBlockEntity(event.getBlockPos()) `<br>实现调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L268) |
| ` @SubscribeEvent public static void disconnect(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` DYNAMIC.clear() `<br>实现调用 ` PREVIEW_BER_PARTS.clear() `<br>实现调用 ` PREVIEW_BER_MODELS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L372) |

## ModelBlockSelection.ModelPlacement

` public record ModelPlacement(SelectionModel model, Matrix4f pose) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72)

一个离散模型及其在方块内的位姿，供预览按贴图渲染（GHOST 模式）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModelPlacement(SelectionModel model, Matrix4f pose) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72) |
| ` public SelectionModel model() ` | 读取 record 分量 ` model ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72) |
| ` public Matrix4f pose() ` | 读取 record 分量 ` pose ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L72) |

## ModelCubeGeometry

` public final class ModelCubeGeometry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float SCALE ` | 初值 ` 128.0F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L19) |
| ` public static List<ConvexShape> decode(List<CuboidModelElement> elements) ` | ` (elements.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` CubeModelDecoder.decode(scaled, BlockModelRotation.IDENTITY) `<br>[调用处 ModelSelectionBakery.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionBakery.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L26) |
| ` @Nullable public static ConvexShape clip(ConvexShape shape, AABB cell) ` | ` (!shape.bounds().intersects(cell)) ` 成立时提前返回 ` null `<br>` (cell.contains(shape.bounds().minX, shape.bounds().minY, shape.bounds().minZ) && cell.contains(shape.bounds().maxX, shape.bounds().maxY, shape.bounds().maxZ)) ` 成立时提前返回 ` shape `<br>` (vertices.size() < 4 \|\| indices.size() < 4) ` 成立时提前返回 ` null `<br>[调用处 ModelSelectionBakery.multipart](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionBakery.java#L228) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L59) |

## ModelPartSelection

` public final class ModelPartSelection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelPartSelection.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void collect(ModelPart root, PoseStack pose, List<SelectionPart> output) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelPartSelection.java#L18) |
| ` public ModelPartSelection() ` | Java 提供的无参构造器。<br>[调用处 AutoEnchantingTableBlockEntityRenderer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L45) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelPartSelection.java#L15) |

## ModelSelectionCapture

` public final class ModelSelectionCapture `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionCapture.java#L18)

暂存烘焙来源，构造完选择几何即释放；不消耗 AnvilLib 自己的捕获缓存。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static synchronized void remember(ResolvedModel model, ModelState state, BlockStateModelPart baked) ` | 实现调用 ` model.getTopGeometry() `<br>分支 ` (model.getTopGeometry() instanceof UnbakedCuboidGeometry geometry) ` 内调用 ` geometry.elements() `<br>分支 ` !(model.getTopGeometry() instanceof UnbakedCuboidGeometry geometry) ` 内调用 ` model.getTopGeometry() `<br>[调用处 SimpleModelWrapperSelectionMixin.anvilcraft$captureSelection](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/SimpleModelWrapperSelectionMixin.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionCapture.java#L24) |

## ModelSelectionDenylist

` public final class ModelSelectionDenylist `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier LOCATION ` | 初值 ` AnvilCraft.of("model_selection_denylist.json") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L20) |
| ` public static void reload(ResourceManager resources) ` | 实现调用 ` Set.of() `<br>实现调用 ` resources.getResourceStack(LOCATION) `<br>实现调用 ` resource.openAsReader() `<br>[调用处 ModelBlockSelection.prepare](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L26) |
| ` public static boolean excludesBlockEntity(Block block) ` | 末尾返回 ` blocks.contains(block) `<br>[调用处 RuinsBlockEntityRenderer.collectSelectionParts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L125) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L40) |

## ModelSelectionRenderer

` public interface ModelSelectionRenderer<T extends BlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L12)

渲染、拾取与预览共用姿态；收集过程不提交绘制，也不产生音效或粒子。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default void collectSelectionModels(T entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 当前实现的方法体为空。<br>[调用处 ModelSelectionRenderer.collectPreviewModels](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L13) |
| ` default void collectPreviewModels(T entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 需要服务端工作状态的渲染器应在此提供放置时的静止姿态。<br>执行 ` this.collectSelectionModels(entity, partialTick, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L17) |
| ` default void collectSelectionParts(T entity, float partialTick, List<SelectionPart> output) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L21) |

## ModelSelectionRenderer.ModelConsumer

` interface ModelConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L24)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void accept(SelectionModel model, PoseStack pose) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L26) |
| ` default void accept(StandaloneModelKey<?> model, PoseStack pose) ` | 执行 ` this.accept(SelectionModel.standalone(model), pose) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L28) |
| ` default void accept(BlockState state, PoseStack pose) ` | 执行 ` this.accept(new SelectionModel.State(state), pose) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L32) |

## RuinsSelection

` public final class RuinsSelection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/RuinsSelection.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void prepare(RuinsBlockEntity ruins) ` | 实现调用 ` Minecraft.getInstance().getBlockEntityRenderDispatcher().getRenderer(ruins) `<br>实现调用 ` Minecraft.getInstance().getBlockEntityRenderDispatcher() `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 ModelBlockSelection.highlight](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L274) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/RuinsSelection.java#L11) |

## SelectionModel

` public sealed interface SelectionModel `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L7)

26.1 将方块状态模型和独立模型分开注册，选择几何保留同样的键。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` static SelectionModel standalone(StandaloneModelKey<?> key) ` | 末尾返回 ` new Standalone(key) `<br>[调用处 ProcessingItemStackRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ProcessingItemStackRenderer.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L14) |

## SelectionModel.Standalone

` record Standalone(StandaloneModelKey<?> key) implements SelectionModel `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Standalone(StandaloneModelKey<?> key) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L11) |
| ` public StandaloneModelKey<?> key() ` | 读取 record 分量 ` key ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L11) |

## SelectionModel.State

` record State(BlockState state) implements SelectionModel `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public State(BlockState state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L8) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/SelectionModel.java#L8) |
