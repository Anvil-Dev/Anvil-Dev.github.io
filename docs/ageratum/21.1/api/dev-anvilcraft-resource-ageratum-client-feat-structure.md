# dev.anvilcraft.resource.ageratum.client.feat.structure



## AgeratumStructureTemplateManager

` public final class AgeratumStructureTemplateManager `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L40)

客户端结构模板管理器。 在资源重载时扫描并缓存所有资源包中 assets/&lt;namespace&gt;/ageratum/ 目录下的 .nbt 文件。 模板 ResourceLocation 格式为 namespace:relative/path（相对于 ageratum/ 目录，不含 .nbt 后缀）。 例如：assets/minecraft/ageratum/village/house.nbt → minecraft:village/house

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String ASSET_FOLDER ` | 在 assets/&lt;namespace&gt;/ 下扫描结构文件的目录名。<br>初值 ` AgeratumConstants.Guide.ROOT_FOLDER ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L46) |
| ` public static Optional<StructureTemplate> get(ResourceLocation location) ` | 根据 ResourceLocation 获取结构模板。 首次调用时从缓存的 CompoundTag 编译模板；编译结果会被缓存供后续调用复用。 调用时需要游戏关卡已加载（Minecraft.getInstance().level != null）。<br>参数 ` location ` 模板标识，格式见类文档<br>返回 模板，若未找到或当前无法编译则为 empty<br>` (cached != null) ` 成立时提前返回 ` Optional.of(cached) `<br>` (nbt == null) ` 成立时提前返回 ` Optional.empty() `<br>` (level == null) ` 成立时提前返回 ` Optional.empty() `<br>[调用处 AgeratumCommand.structure](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L207) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L74) |
| ` public static Set<ResourceLocation> listAll() ` | 返回所有已发现的结构模板 ResourceLocation 集合（不可修改视图）。<br>末尾返回 ` nbtCache.keySet() `<br>[调用处 AgeratumCommand](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L57) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L106) |
| ` public static PreparableReloadListener reloadListener() ` | 返回可注册到客户端资源重载系统的监听器实例。<br>末尾返回 ` RELOAD_LISTENER `<br>[调用处 AgeratumClient.onReloadListenerRegister](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L94) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L113) |

## StructureExportClient

` public final class StructureExportClient `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureExportClient.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void export(ResourceLocation location, StructureTemplate template) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.getConnection() `<br>实现调用 ` NbtIo.writeCompressed(template.save(new CompoundTag()), output) `<br>[调用处 MDNBTStructureComponent.mouseClicked](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L306) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureExportClient.java#L21) |

## StructureProjectionApi

` public interface StructureProjectionApi `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L13)

结构投影公开调用入口。

类型注解 ` @SuppressWarnings("UnusedReturnValue") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` static boolean show(StructureTemplate template, BlockPos origin) ` | 显示一个新的结构投影；若已有旧投影，会被新的替换。<br>末尾返回 ` StructureProjectionApi.show(template, origin, List.of()) `<br>[调用处 AgeratumCommand.structure](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L212) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L18) |
| ` static boolean show(StructureTemplate template, BlockPos origin, Collection<Item> moveControlItems) ` | 显示一个新的结构投影，并指定允许 Ctrl+滚轮移动时手持的物品集合。<br>末尾返回 ` StructureProjectionManager.showProjection(template, origin, moveControlItems) `<br>[调用处 StructureProjectionApi.show](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L19) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L25) |
| ` static boolean showFloating(StructureTemplate template, BlockPos origin) ` | 显示浮动投影：跟随玩家视线移动，右键固定。<br>末尾返回 ` StructureProjectionApi.showFloating(template, origin, List.of()) `<br>[调用处 MDNBTStructureComponent.mouseClicked](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L337) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L32) |
| ` static boolean showFloating(StructureTemplate template, BlockPos origin, Collection<Item> moveControlItems) ` | 显示浮动投影，指定允许 Ctrl+滚轮移动时手持的物品集合。<br>末尾返回 ` StructureProjectionManager.showFloatingProjection(template, origin, moveControlItems) `<br>[调用处 StructureProjectionApi.showFloating](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L33) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L39) |
| ` static void clear() ` | 移除当前投影。<br>执行 ` StructureProjectionManager.clearProjection() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L46) |
| ` static boolean hasActiveProjection() ` | 当前是否存在活动投影。<br>末尾返回 ` StructureProjectionManager.hasActiveProjection() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L53) |

## StructureProjectionManager

` public final class StructureProjectionManager `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L38)

管理客户端仅允许存在一个的结构投影实例。

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean showProjection(StructureTemplate template, BlockPos origin, Collection<Item> moveControlItems) ` | 显示结构投影，并指定允许 Ctrl+滚轮移动时手持的物品集合。<br>` (clientLevel == null) ` 成立时提前返回 ` false `<br>` (previewLevel == null \|\| !previewLevel.hasContent()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 StructureProjectionApi.show](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L26) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L51) |
| ` public static boolean showFloatingProjection(StructureTemplate template, BlockPos origin, Collection<Item> moveControlItems) ` | 显示浮动结构投影：投影会跟随玩家视线移动，直到玩家右键固定。<br>` (clientLevel == null) ` 成立时提前返回 ` false `<br>` (previewLevel == null \|\| !previewLevel.hasContent()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 StructureProjectionApi.showFloating](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L40) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L72) |
| ` public static void clearProjection() ` | 分支 ` (activeProjection != null) ` 内调用 ` activeProjection.renderer.close() `<br>[调用处 StructureProjectionApi.clear](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L47) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L90) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ClientLevel) ` 内调用 ` clearProjection() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L97) |
| ` public static boolean hasActiveProjection() ` | 末尾返回 ` activeProjection != null `<br>[调用处 StructureProjectionApi.hasActiveProjection](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java#L54) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L104) |
| ` public static boolean handleMouseScroll(double scrollY) ` | ` (projection == null \|\| scrollY == 0.0d \|\| minecraft.player == null \|\| minecraft.level == null) ` 成立时提前返回 ` false `<br>` (minecraft.screen != null \|\| !Screen.hasControlDown() \|\| projection.isNotInLevel(minecraft.level)) ` 成立时提前返回 ` false `<br>` (!projection.canMoveWith(minecraft.player.getMainHandItem(), minecraft.player.getOffhandItem())) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 MouseHandlerMixin.ageratum$handleStructureProjectionScroll](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/MouseHandlerMixin.java#L19) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L108) |
| ` @SubscribeEvent public static void onMouseScrolling(InputEvent.MouseScrollingEvent event) ` | 拦截鼠标滚轮事件：当 Ctrl 按住且手持指定物品时，消费滚轮并移动投影， 阻止默认的快捷栏切换行为。<br>事件总线派发 ` InputEvent.MouseScrollingEvent ` 时调用。<br>实现调用 ` handleMouseScroll(event.getScrollDeltaY()) `<br>实现调用 ` event.getScrollDeltaY() `<br>分支 ` (handleMouseScroll(event.getScrollDeltaY())) ` 内调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L129) |
| ` @SubscribeEvent public static void onInteractionKeyMappingTriggered(InputEvent.InteractionKeyMappingTriggered event) ` | 拦截右键事件：当浮动投影存在时，固定投影而非触发物品的右键行为。<br>事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.isUseItem() `<br>实现调用 ` event.isAttack() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L139) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (minecraft.level == null \|\| minecraft.player == null) ` 内调用 ` clearProjection() `<br>实现调用 ` projection.isNotInLevel(minecraft.level) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L157) |
| ` @SubscribeEvent public static void onRenderLevelStage(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` projection.isNotInLevel(minecraft.level) `<br>实现调用 ` event.getStage() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L198) |
