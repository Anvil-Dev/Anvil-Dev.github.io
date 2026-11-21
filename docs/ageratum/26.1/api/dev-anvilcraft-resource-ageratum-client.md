# dev.anvilcraft.resource.ageratum.client



## AgeratumClient

` public class AgeratumClient `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L42)

类型注解 ` @Mod(value = Ageratum.MOD_ID, dist = Dist.CLIENT) `、` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final AgeratumClientConfig CONFIG ` | 初值 ` new AgeratumClientConfig() ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L50) |
| ` public AgeratumClient(IEventBus modEventBus, ModContainer modContainer) ` | 模组客户端侧构造函数，由 NeoForge 在加载时调用。<br>参数 ` modEventBus ` 模组专属事件总线<br>参数 ` modContainer ` 模组容器<br>实现调用 ` CONFIG.register(modContainer, modEventBus) `<br>实现调用 ` AgeratumRegistries.register(modEventBus) `<br>实现调用 ` BuiltinExtensionComponents.init() ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L58) |
| ` public static String getClientLanguageCode(Minecraft minecraft) ` | 获取客户端当前语言代码。 若无法读取语言管理器，回退到 en\_us。<br>实现调用 ` minecraft.getLanguageManager().getSelected() `<br>实现调用 ` minecraft.getLanguageManager() `<br>实现调用 ` LOGGER.warn("Failed to read client language code, fallback to en_us", exception) `<br>[调用处 AgeratumCommand.getFileSuggestions](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L216) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L77) |
| ` @SubscribeEvent public static void onReloadListenerRegister(AddClientReloadListenersEvent event) ` | 注册客户端资源重载监听器。<br>事件总线派发 ` AddClientReloadListenersEvent ` 时调用。<br>实现调用 ` Ageratum.location("layouts") `<br>实现调用 ` dev.anvilcraft.resource.ageratum.client.layout.GuideLayoutManager.reloadListener() `<br>实现调用 ` event.addListener(Ageratum.location("document"), GuideDocumentCache.reloadListener()) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L89) |
| ` public static int openGuide( CommandContext<CommandSourceStack> context, String namespace, @Nullable String fileArgument, @Nullable String anchor ) ` | 解析命令参数并打开对应的文档界面。 若目标文件不存在，向命令发起方发送错误反馈，不打开界面。<br>参数 ` context ` 命令执行上下文<br>参数 ` namespace ` 文档所在的资源包命名空间<br>参数 ` fileArgument ` 文件名参数（可为 null，此时使用 index.md）<br>返回 命令执行结果码：1 表示成功，0 表示失败<br>末尾返回 ` 1 `<br>[调用处 AgeratumCommand.openGuide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L266) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L106) |
| ` public static boolean openGuideOnClientWithoutLanguageCode(Identifier location, List<Identifier> breadCrumbs) ` | 客户端本地打开文档；若不存在则返回 false。<br>末尾返回 ` openGuideOnClient(documentLocation, breadCrumbs) `<br>[调用处 ClientPayloadHandler.handleOpenGuide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L13) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L145) |
| ` public static boolean openGuideOnClient(Identifier location, List<Identifier> breadCrumbs) ` | 客户端本地打开文档；若不存在则返回 false。<br>末尾返回 ` openGuideOnClient(location, null, breadCrumbs) `<br>[调用处 AgeratumCommand.preview](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L189) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L171) |
| ` public static boolean openGuideOnClient(Identifier location, @Nullable String anchor, List<Identifier> breadCrumbs) ` | 客户端本地打开文档，可选指定锚点；若不存在则返回 false。<br>参数 ` location ` 文档资源位置<br>参数 ` anchor ` 目标锚点（可为 null）<br>` (isPreviewLocation(location)) ` 成立时提前返回 ` openPreviewGuideOnClient(location, anchor, breadCrumbs) `<br>` (!GuideDocumentLoader.exists(resourceManager, location)) ` 成立时提前返回 ` false `<br>末尾返回 ` AgeratumClient.parseDocumentAndSetScreen( location, anchor, breadCrumbs, minecraft, inheritedLabelScrollRows, inheritedLabelScrollRemainder, content, false ) `<br>[调用处 GuideScreen.tryOpenLinkedGuide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L2344) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L181) |
| ` public static boolean isPreviewLocation(Identifier location) ` | 末尾返回 ` AgeratumConstants.Preview.NAMESPACE.equals(location.getNamespace()) `<br>[调用处 MDImageComponent.resolveSize](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L270) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L285) |
| ` public static Identifier toPreviewLocation(@Nullable String fileArgument) ` | 末尾返回 ` Identifier.fromNamespaceAndPath(AgeratumConstants.Preview.NAMESPACE, normalized) `<br>[调用处 AgeratumCommand.preview](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L188) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L289) |
| ` public static Path getPreviewRootPath() ` | 末尾返回 ` FMLLoader.getCurrent().getGameDir().resolve(AgeratumClient.CONFIG.previewPath).normalize() `<br>[调用处 GuideScreen.rebuildPreviewLabelEntries](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1882) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L294) |
| ` public static Path resolvePreviewDocumentPath(Identifier location) ` | 末尾返回 ` resolvePreviewPath(path) `<br>[调用处 AgeratumCommand.preview](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L190) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L298) |
| ` public static Path resolvePreviewAssetPath(String relativePath) ` | 末尾返回 ` resolvePreviewPath(relativePath) `<br>[调用处 MDImageComponent.resolvePreviewSize](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L294) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L306) |

## AgeratumClientConfig

` public class AgeratumClientConfig `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L24)

类型注解 ` @Config(name = Ageratum.MOD_ID, type = ModConfig.Type.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Comment("Directory panel position: LEFT puts navigation left and content right; RIGHT reverses them. Applies to open guides") public DirectorySide directorySide ` | 初值 ` DirectorySide.LEFT ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L33) |
| ` @Comment("Use dark guide layouts; applies to open guides and persists across pages") public boolean darkMode ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L36) |
| ` @Comment("Reduce motion in structure GUI previews; keep gentle fades") public boolean reducedMotion ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L39) |
| ` @Comment("Do breadcrumbs record jumps from sidebar tabs") public boolean breadCrumbsHasLabel ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L42) |
| ` @Comment("Show line numbers in code blocks") public boolean showCodeBlockLineNumbers ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L45) |
| ` @Comment("Allow line breaks in code block content") public boolean allowCodeBlockLineContentLineBreaks ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L48) |
| ` @Comment("Whether to enable preview mode (enabling it will allow real-time previews of changes to documents in the specified path)") public boolean enablePreview ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L51) |
| ` @Comment("Preview mode path") public String previewPath ` | 初值 ` "ageratum_preview" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L54) |
| ` @Comment("Share your guide only with player from the same team") public boolean shareGuideOnlyInTeam ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L57) |
| ` @Comment("Hold duration (milliseconds) for W-key item binding navigation, default 750ms") @BoundedDiscrete(min = 100, max = 5000) public int itemBindingHoldDurationMs ` | 初值 ` 750 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L60) |
| ` @Comment("Continuous guide zoom from 0.5 to 4.0 (for example 0.75 or 1.25); applies to open guides") @BoundedDiscrete(min = 0.5, max = 4.0) public double scale ` | 初值 ` 1.0 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L64) |
| ` public void register(ModContainer container, IEventBus bus) ` | Retain AnvilLib's config names, comments, ranges and the standard config screen. Its pinned BoundedDiscrete.minDouble floors 0.5 to 0, so define this one fractional range explicitly.<br>实现调用 ` AgeratumClientConfig.class.getDeclaredFields() `<br>实现调用 ` Modifier.isStatic(field.getModifiers()) `<br>实现调用 ` field.getModifiers() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L72) |
| ` public void setDarkMode(boolean darkMode) ` | Persist the shared theme preference without changing unrelated config values.<br>实现调用 ` configSpec.isLoaded() `<br>分支 ` (configSpec != null && configSpec.isLoaded() && darkModeValue != null) ` 内调用 ` darkModeValue.set(darkMode) `<br>分支 ` (configSpec != null && configSpec.isLoaded() && darkModeValue != null) ` 内调用 ` darkModeValue.save() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L109) |
| ` public void saveScale() ` | Persist once at the end of an interactive zoom gesture, not on every pointer move.<br>实现调用 ` GuideScale.clamp(this.scale) `<br>实现调用 ` configSpec.isLoaded() `<br>分支 ` (configSpec != null && configSpec.isLoaded() && scaleValue != null) ` 内调用 ` scaleValue.set(this.scale) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L118) |
| ` public AgeratumClientConfig() ` | Java 提供的无参构造器。<br>[调用处 AgeratumClient](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L50) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java#L24) |

## AgeratumKeyMappings

` public class AgeratumKeyMappings `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L11)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final KeyMapping.Category CATEGORY ` | 初值 ` new KeyMapping.Category(Ageratum.location("key")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L13) |
| ` public static final KeyMapping W_KEY_MAPPING ` | 初值 ` new KeyMapping("key.ageratum.more_info", GLFW.GLFW_KEY_W, AgeratumKeyMappings.CATEGORY) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L15) |
| ` public static final KeyMapping LAYER_UP_KEY ` | 初值 ` new KeyMapping( "key.ageratum.structure_projection.layer_up", GLFW.GLFW_KEY_PAGE_UP, CATEGORY ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L17) |
| ` public static final KeyMapping LAYER_DOWN_KEY ` | 初值 ` new KeyMapping( "key.ageratum.structure_projection.layer_down", GLFW.GLFW_KEY_PAGE_DOWN, CATEGORY ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L22) |
| ` public static final KeyMapping REMOVE_KEY ` | 初值 ` new KeyMapping( "key.ageratum.structure_projection.remove", GLFW.GLFW_KEY_END, AgeratumKeyMappings.CATEGORY ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L27) |
| ` @SubscribeEvent public static void onKetReg(RegisterKeyMappingsEvent event) ` | 事件总线派发 ` RegisterKeyMappingsEvent ` 时调用。<br>实现调用 ` event.registerCategory(AgeratumKeyMappings.CATEGORY) `<br>实现调用 ` event.register(AgeratumKeyMappings.W_KEY_MAPPING) `<br>实现调用 ` event.register(AgeratumKeyMappings.LAYER_UP_KEY) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L33) |
| ` public AgeratumKeyMappings() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumKeyMappings.java#L11) |

## GuideBookmarkStore

` public final class GuideBookmarkStore `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void ensureLoaded(String namespace, List<BookmarkEntry> target) ` | 实现调用 ` LOADED_NAMESPACES.contains(namespace) `<br>实现调用 ` reload(namespace, target) `<br>[调用处 GuideScreen.ensureBookmarksLoaded](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1360) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L43) |
| ` public static void reload(String namespace, List<BookmarkEntry> target) ` | 实现调用 ` target.clear() `<br>实现调用 ` LOADED_NAMESPACES.add(namespace) `<br>实现调用 ` getBookmarkFile(namespace) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L50) |
| ` public static void save(String namespace, List<BookmarkEntry> source) ` | 实现调用 ` Files.createDirectories(BOOKMARK_DIRECTORY) `<br>实现调用 ` getBookmarkFile(namespace) `<br>实现调用 ` root.addProperty("version", FILE_VERSION) `<br>[调用处 GuidePanelView.drawBookmarks](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuidePanelView.java#L157) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L87) |

## GuideBookmarkStore.BookmarkEntry

` public record BookmarkEntry(Component title, Identifier location) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BookmarkEntry> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L113) |
| ` public BookmarkEntry(Component title, Identifier location) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public Component title() ` | 读取 record 分量 ` title ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java#L112) |

## GuideZoomStore

` public final class GuideZoomStore `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L19)

Namespace overrides are separate from the global default, and shared across open guide pages.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static GuideZoomStore instance() ` | 末尾返回 ` Holder.INSTANCE `<br>[调用处 GuideScreen.构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L277) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L29) |
| ` public GuideZoomStore(Path file) ` | 实现调用 ` Files.isRegularFile(file) `<br>实现调用 ` JsonParser.parseString(Files.readString(file)).getAsJsonObject() `<br>实现调用 ` JsonParser.parseString(Files.readString(file)) `<br>[调用处 GuideZoomStore.Holder](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L25) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L31) |
| ` public double get(String namespace, double defaultZoom) ` | 末尾返回 ` this.zooms.getOrDefault(namespace, GuideScale.clamp(defaultZoom)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L51) |
| ` public void set(String namespace, double zoom) ` | 实现调用 ` GuideScale.clamp(zoom) `<br>实现调用 ` this.zooms.put(namespace, next) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L55) |
| ` public void reset(String namespace) ` | Reset removes the override so this namespace follows future changes to the default too.<br>执行 ` this.dirty \|= this.zooms.remove(namespace) != null ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L62) |
| ` public void flush() ` | Called after a short input pause, on drag release, and when leaving the screen.<br>实现调用 ` this.file.toAbsolutePath().getParent() `<br>实现调用 ` this.file.toAbsolutePath() `<br>实现调用 ` Files.createDirectories(parent) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideZoomStore.java#L67) |
