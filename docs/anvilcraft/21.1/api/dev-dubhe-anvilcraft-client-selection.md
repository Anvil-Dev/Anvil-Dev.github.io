# dev.dubhe.anvilcraft.client.selection



## ModelBlockSelection

` public final class ModelBlockSelection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L46)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void reload(ModelEvent.BakingCompleted event) ` | 实现调用 ` ModelSelectionDenylist.reload(Minecraft.getInstance().getResourceManager()) `<br>实现调用 ` Minecraft.getInstance().getResourceManager() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L75) |
| ` @SubscribeEvent public static void beginFrame(RenderFrameEvent.Pre event) ` | 事件总线派发 ` RenderFrameEvent.Pre ` 时调用。<br>实现调用 ` DYNAMIC.clear() `<br>实现调用 ` PREVIEW_BER_PARTS.clear() `<br>实现调用 ` PREVIEW_BER_MODELS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L97) |
| ` public static long frame() ` | 末尾返回 ` frame `<br>[调用处 AutoEnchantingTableBlockEntityRenderer.bookPose](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L106) |
| ` public static List<SelectionPart> multipartOutline(BlockState state) ` | Returns the whole-multipart outline parts for a placement/main-part state, if prepared.<br>末尾返回 ` outline == null ? List.of() : outline `<br>[调用处 BuildingRodRenderer.renderPlacementOutline](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodRenderer.java#L218) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L111) |
| ` public static List<SelectionPart> previewBerParts(BlockState state, BlockPos pos) ` | 放置预览用的方块实体模型几何（描边模式）。 方块模型与实体模型是两套模型（如智能方块放置器 = 底座方块模型 + 机械臂实体模型）， 实体部分不在 snapshot.outlines() 中。预览位置上还没有方块实体，故按放置状态 临时构造一个（与 RenderSupport 的做法一致）取其静止姿态。<br>参数 ` state ` 放置后的方块状态<br>参数 ` pos ` 放置位；渲染器读自身坐标处的世界状态时以此为准<br>实现调用 ` pos.immutable() `<br>[调用处 BuildingRodRenderer.renderPlacementOutline](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodRenderer.java#L219) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L126) |
| ` public static List<ModelPlacement> previewBerModels(BlockState state, BlockPos pos) ` | 放置预览用的方块实体模型与位姿（虚影模式，按贴图渲染）。<br>参见 #previewBerParts(BlockState, BlockPos)<br>实现调用 ` pos.immutable() `<br>[调用处 LargeBlockPlacePreviewEventListener.renderGhost](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L334) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L141) |
| ` public static <T extends BlockEntity> List<SelectionPart> rendererParts(T entity, float partialTick) ` | 返回 BER 实际使用的 cube 和姿态，不混入用于交互的碰撞箱回退。<br>末尾返回 ` ModelBlockSelection.rendererParts(entity, partialTick, false) `<br>[调用处 RuinsBlockEntityRenderer.collectSelectionParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L122) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L199) |
| ` @SubscribeEvent(priority = EventPriority.LOW) public static void highlight(RenderHighlightEvent.Block event) ` | 事件总线派发 ` RenderHighlightEvent.Block ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getTarget().getBlockPos() `<br>实现调用 ` event.getTarget() `<br>[调用处 RuinsSelection.highlight](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/RuinsSelection.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L258) |

## ModelBlockSelection.ModelPlacement

` public record ModelPlacement(ModelResourceLocation model, Matrix4f pose) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69)

一个离散模型及其在方块内的位姿，供预览按贴图渲染（GHOST 模式）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModelPlacement(ModelResourceLocation model, Matrix4f pose) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69) |
| ` public ModelResourceLocation model() ` | 读取 record 分量 ` model ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69) |
| ` public Matrix4f pose() ` | 读取 record 分量 ` pose ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L69) |

## ModelCubeGeometry

` public final class ModelCubeGeometry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float SCALE ` | 初值 ` 128.0F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L19) |
| ` public static List<ConvexShape> decode(List<BlockElement> elements) ` | ` (elements.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` CubeModelDecoder.decode(scaled, BlockModelRotation.X0_Y0) `<br>[调用处 ModelSelectionBakery.blockModel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionBakery.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L26) |
| ` @Nullable public static ConvexShape clip(ConvexShape shape, AABB cell) ` | ` (!shape.bounds().intersects(cell)) ` 成立时提前返回 ` null `<br>` (cell.contains(shape.bounds().minX, shape.bounds().minY, shape.bounds().minZ) && cell.contains(shape.bounds().maxX, shape.bounds().maxY, shape.bounds().maxZ)) ` 成立时提前返回 ` shape `<br>` (vertices.size() < 4 \|\| indices.size() < 4) ` 成立时提前返回 ` null `<br>[调用处 ModelSelectionBakery.multipart](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionBakery.java#L252) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelCubeGeometry.java#L57) |

## ModelPartSelection

` public final class ModelPartSelection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelPartSelection.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void collect(ModelPart root, PoseStack pose, List<SelectionPart> output) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelPartSelection.java#L18) |
| ` public ModelPartSelection() ` | Java 提供的无参构造器。<br>[调用处 AutoEnchantingTableBlockEntityRenderer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelPartSelection.java#L15) |

## ModelSelectionDenylist

` public final class ModelSelectionDenylist `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation LOCATION ` | 初值 ` AnvilCraft.of("model_selection_denylist.json") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L20) |
| ` public static void reload(ResourceManager resources) ` | 实现调用 ` Set.of() `<br>实现调用 ` resources.getResourceStack(LOCATION) `<br>实现调用 ` resource.openAsReader() `<br>[调用处 ModelBlockSelection.reload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelBlockSelection.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L26) |
| ` public static boolean excludesBlockEntity(Block block) ` | 末尾返回 ` blocks.contains(block) `<br>[调用处 RuinsBlockEntityRenderer.collectSelectionParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java#L40) |

## ModelSelectionRenderer

` public interface ModelSelectionRenderer<T extends BlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L11)

供渲染和拾取共用当前帧的模型姿态；收集过程中不执行绘制、音效或粒子逻辑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default void collectSelectionModels(T blockEntity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 当前实现的方法体为空。<br>[调用处 ModelSelectionRenderer.collectPreviewModels](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L12) |
| ` default void collectPreviewModels(T blockEntity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 放置预览用：默认与 #collectSelectionModels 一致。 渲染依赖服务端同步状态的方块（如泵的 working 与电网）在预览时拿不到这些状态 —— 落点上没有实体，临时实体也从未被同步 —— 于是不会产出任何模型。这类渲染器覆写本方法， 按放置状态给出静止姿态即可。<br>执行 ` this.collectSelectionModels(blockEntity, partialTick, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L22) |
| ` default void collectSelectionParts(T blockEntity, float partialTick, List<SelectionPart> output) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L26) |

## ModelSelectionRenderer.ModelConsumer

` interface ModelConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L29)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void accept(ModelResourceLocation model, PoseStack pose) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionRenderer.java#L31) |

## RuinsSelection

` public final class RuinsSelection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/RuinsSelection.java#L23)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void prepare(RuinsBlockEntity ruins) ` | 实现调用 ` Minecraft.getInstance().getBlockEntityRenderDispatcher().getRenderer(ruins) `<br>实现调用 ` Minecraft.getInstance().getBlockEntityRenderDispatcher() `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 RuinsCubeSelectionMixin.anvilcraft$disguisedTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RuinsCubeSelectionMixin.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/RuinsSelection.java#L28) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void highlight(RenderHighlightEvent.Block event) ` | 事件总线派发 ` RenderHighlightEvent.Block ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getTarget().getBlockPos() `<br>实现调用 ` event.getTarget() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/RuinsSelection.java#L34) |
