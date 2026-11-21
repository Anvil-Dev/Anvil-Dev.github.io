# dev.anvilcraft.resource.ageratum.client



## AgeratumClient

` public class AgeratumClient `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L44)

类型注解 ` @Mod(value = Ageratum.MOD_ID, dist = Dist.CLIENT) `、` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final AgeratumClientConfig CONFIG ` | 初值 ` ConfigManager.register(Ageratum.MOD_ID, AgeratumClientConfig::new) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L52) |
| ` public AgeratumClient(IEventBus modEventBus, ModContainer modContainer) ` | 模组客户端侧构造函数，由 NeoForge 在加载时调用。<br>参数 ` modEventBus ` 模组专属事件总线<br>参数 ` modContainer ` 模组容器<br>实现调用 ` modEventBus.addListener(GuideTheme::onConfigLoading) `<br>实现调用 ` AgeratumRegistries.register(modEventBus) `<br>实现调用 ` BuiltinExtensionComponents.init() ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L60) |
| ` public static String getClientLanguageCode(Minecraft minecraft) ` | 获取客户端当前语言代码。 若无法读取语言管理器，回退到 en\_us。<br>实现调用 ` minecraft.getLanguageManager().getSelected() `<br>实现调用 ` minecraft.getLanguageManager() `<br>实现调用 ` LOGGER.warn("Failed to read client language code, fallback to en_us", exception) `<br>[调用处 AgeratumCommand.getFileSuggestions](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L222) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L79) |
| ` @SubscribeEvent public static void onReloadListenerRegister(RegisterClientReloadListenersEvent event) ` | 注册客户端资源重载监听器。<br>事件总线派发 ` RegisterClientReloadListenersEvent ` 时调用。<br>实现调用 ` event.registerReloadListener(GuideDocumentCache.reloadListener()) `<br>实现调用 ` GuideDocumentCache.reloadListener() `<br>实现调用 ` event.registerReloadListener(AgeratumStructureTemplateManager.reloadListener()) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L91) |
| ` public static int openGuide( CommandContext<CommandSourceStack> context, String namespace, @Nullable String fileArgument, @Nullable String anchor ) ` | 解析命令参数并打开对应的文档界面。 若目标文件不存在，向命令发起方发送错误反馈，不打开界面。<br>参数 ` context ` 命令执行上下文<br>参数 ` namespace ` 文档所在的资源包命名空间<br>参数 ` fileArgument ` 文件名参数（可为 null，此时使用 index.md）<br>返回 命令执行结果码：1 表示成功，0 表示失败<br>末尾返回 ` 1 `<br>[调用处 AgeratumCommand.openGuide](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L272) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L107) |
| ` public static boolean openGuideOnClientWithoutLanguageCode(ResourceLocation location, List<ResourceLocation> breadCrumbs) ` | 客户端本地打开文档；若不存在则返回 false。<br>末尾返回 ` openGuideOnClient(documentLocation, breadCrumbs) `<br>[调用处 ClientPayloadHandler.handleOpenGuide](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L11) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L146) |
| ` public static boolean openGuideOnClient(ResourceLocation location, List<ResourceLocation> breadCrumbs) ` | 客户端本地打开文档；若不存在则返回 false。<br>末尾返回 ` openGuideOnClient(location, null, breadCrumbs) `<br>[调用处 AgeratumCommand.preview](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L193) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L172) |
| ` public static boolean openGuideOnClientPreservingLabelState(ResourceLocation location, List<ResourceLocation> breadCrumbs) ` | 从侧边栏打开文档，保留当前标签栏滚动和折叠状态。<br>末尾返回 ` openGuideOnClientInternal(location, null, breadCrumbs, true) `<br>[调用处 GuideScreen.handleLabelEntryClick](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1688) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L179) |
| ` public static boolean openGuideOnClient(ResourceLocation location, @Nullable String anchor, List<ResourceLocation> breadCrumbs) ` | 客户端本地打开文档，可选指定锚点；若不存在则返回 false。<br>参数 ` location ` 文档资源位置<br>参数 ` anchor ` 目标锚点（可为 null）<br>末尾返回 ` openGuideOnClientInternal(location, anchor, breadCrumbs, false) `<br>[调用处 GuideScreen.tryOpenLinkedGuide](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1881) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L189) |
| ` public static boolean isPreviewLocation(ResourceLocation location) ` | 末尾返回 ` AgeratumConstants.Preview.NAMESPACE.equals(location.getNamespace()) `<br>[调用处 MDImageComponent.resolveSize](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L240) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L323) |
| ` public static ResourceLocation toPreviewLocation(@Nullable String fileArgument) ` | 末尾返回 ` ResourceLocation.fromNamespaceAndPath(AgeratumConstants.Preview.NAMESPACE, normalized) `<br>[调用处 AgeratumCommand.preview](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L192) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L327) |
| ` public static Path getPreviewRootPath() ` | 末尾返回 ` FMLLoader.getGamePath().resolve(AgeratumClient.CONFIG.previewPath).normalize() `<br>[调用处 GuideScreen.rebuildPreviewLabelEntries](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1480) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L332) |
| ` public static Path resolvePreviewDocumentPath(ResourceLocation location) ` | 末尾返回 ` resolvePreviewPath(path) `<br>[调用处 AgeratumCommand.preview](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L194) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L336) |
| ` public static Path resolvePreviewAssetPath(String relativePath) ` | 末尾返回 ` resolvePreviewPath(relativePath) `<br>[调用处 MDImageComponent.resolvePreviewSize](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L264) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L344) |

## AgeratumClientConfig

` public class AgeratumClientConfig `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L10)

类型注解 ` @Config(name = Ageratum.MOD_ID, type = ModConfig.Type.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Comment("Use dark guide textures and colors") public boolean darkMode ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L15) |
| ` @Comment("Reduce motion in structure GUI previews; keep gentle fades") public boolean reducedMotion ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L18) |
| ` @Comment("Do breadcrumbs record jumps from sidebar tabs") public boolean breadCrumbsHasLabel ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L21) |
| ` @Comment("Show line numbers in code blocks") public boolean showCodeBlockLineNumbers ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L24) |
| ` @Comment("Allow line breaks in code block content") public boolean allowCodeBlockLineContentLineBreaks ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L27) |
| ` @Comment("Whether to enable preview mode (enabling it will allow real-time previews of changes to documents in the specified path)") public boolean enablePreview ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L30) |
| ` @Comment("Preview mode path") public String previewPath ` | 初值 ` "ageratum_preview" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L33) |
| ` @Comment("Share your guide only with player from the same team") public boolean shareGuideOnlyInTeam ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L36) |
| ` @Comment("Hold duration (milliseconds) for W-key item binding navigation, default 750ms") @BoundedDiscrete(min = 100, max = 5000) public int itemBindingHoldDurationMs ` | 初值 ` 750 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L39) |
| ` @Comment("The scaling ratio of the interface") @BoundedDiscrete(min = 1, max = 4) public int scale ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L43) |
| ` public AgeratumClientConfig() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L10) |

## AgeratumKeyMappings

` public class AgeratumKeyMappings `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L11)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final KeyMapping W_KEY_MAPPING ` | 初值 ` new KeyMapping("key.ageratum.more_info", GLFW.GLFW_KEY_W, "key.categories.ageratum") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L13) |
| ` public static final KeyMapping LAYER_UP_KEY ` | 初值 ` new KeyMapping( "key.ageratum.structure_projection.layer_up", GLFW.GLFW_KEY_PAGE_UP, "key.categories.ageratum" ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L15) |
| ` public static final KeyMapping LAYER_DOWN_KEY ` | 初值 ` new KeyMapping( "key.ageratum.structure_projection.layer_down", GLFW.GLFW_KEY_PAGE_DOWN, "key.categories.ageratum" ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L20) |
| ` public static final KeyMapping REMOVE_KEY ` | 初值 ` new KeyMapping( "key.ageratum.structure_projection.remove", GLFW.GLFW_KEY_END, "key.categories.ageratum" ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L25) |
| ` @SubscribeEvent public static void onKetReg(RegisterKeyMappingsEvent event) ` | 事件总线派发 ` RegisterKeyMappingsEvent ` 时调用。<br>实现调用 ` event.register(W_KEY_MAPPING) `<br>实现调用 ` event.register(LAYER_UP_KEY) `<br>实现调用 ` event.register(LAYER_DOWN_KEY) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L31) |
| ` public AgeratumKeyMappings() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L11) |

## GuideBookmarkStore

` public final class GuideBookmarkStore `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void ensureLoaded(String namespace, List<BookmarkEntry> target) ` | 实现调用 ` LOADED_NAMESPACES.contains(namespace) `<br>实现调用 ` reload(namespace, target) `<br>[调用处 GuideScreen.ensureBookmarksLoaded](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1143) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L43) |
| ` public static void reload(String namespace, List<BookmarkEntry> target) ` | 实现调用 ` target.clear() `<br>实现调用 ` LOADED_NAMESPACES.add(namespace) `<br>实现调用 ` getBookmarkFile(namespace) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L50) |
| ` public static void save(String namespace, List<BookmarkEntry> source) ` | 实现调用 ` Files.createDirectories(BOOKMARK_DIRECTORY) `<br>实现调用 ` getBookmarkFile(namespace) `<br>实现调用 ` root.addProperty("version", FILE_VERSION) `<br>[调用处 GuideScreen.tryRemoveBookmarkAt](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1352) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L87) |

## GuideBookmarkStore.BookmarkEntry

` public record BookmarkEntry(Component title, ResourceLocation location) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BookmarkEntry> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L113) |
| ` public BookmarkEntry(Component title, ResourceLocation location) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public Component title() ` | 读取 record 分量 ` title ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public ResourceLocation location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
