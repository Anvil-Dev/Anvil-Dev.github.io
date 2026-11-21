# dev.anvilcraft.resource.ageratum.client.feat.markdown（BlockExtensionState 至 MDInlineComponentFactory）



## BlockExtensionState

` public final class BlockExtensionState extends SelfClosingBlockExtensionState `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L15)

块级扩展块状态。 用于表示 ::: namespace:location ... 或 &lt;namespace:location&gt;...&lt;/namespace:location&gt; 形式的块级扩展块。追踪打开状态和未分析的内容，用于块级语法解析。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlockExtensionState colon(Identifier id, String rawParams) ` | 创建冒号语法（:::）的扩展块。<br>末尾返回 ` new BlockExtensionState( ExtensionBlockType.COLON, id, rawParams, Map.of(), ":::", ":::" ) `<br>[调用处 MarkdownParser.tryOpenExtensionBlock](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L698) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L55) |
| ` public static BlockExtensionState tag( Identifier id, String rawParams, Map<String, String> params ) ` | 创建标签语法（&lt;...&gt;）的扩展块。<br>末尾返回 ` new BlockExtensionState( ExtensionBlockType.TAG, id, rawParams, Collections.unmodifiableMap(new LinkedHashMap<>(params)), "</" + id + ">", "</" + id.getPath() + ">" ) `<br>[调用处 MarkdownParser.tryOpenExtensionBlock](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L716) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L69) |
| ` public ExtensionBlockType type() ` | 获取扩展块类型。<br>末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L87) |
| ` public boolean matchesCloseLine(String line) ` | 检查给定的一行是否为此块的闭合标签。<br>` (this.type == ExtensionBlockType.COLON) ` 成立时提前返回 ` ":::".equals(trimmed) `<br>末尾返回 ` this.closeTagWithNamespace.equals(trimmed) \|\| this.closeTagWithoutNamespace.equals(trimmed) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L94) |
| ` public void appendLine(String line) ` | 追加一行内容到块的缓冲区。<br>执行 ` this.content.append(line).append("\n") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L105) |
| ` public String rawContent() ` | 获取块的完整内容（去除末尾换行）。<br>` (this.content.isEmpty()) ` 成立时提前返回 ` "" `<br>末尾返回 ` text.endsWith("\n") ? text.substring(0, text.length() - 1) : text ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L112) |

## BlockExtensionState.ExtensionBlockType

` public enum ExtensionBlockType `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L24)

扩展块类型枚举。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` COLON ` | ::: ... ::: 冒号语法。 | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L28) |
| ` TAG ` | &lt;&lt;...&gt;...&lt;/...&gt;&gt; 标签语法。 | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L32) |
| ` public static ExtensionBlockType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L24) |
| ` public static ExtensionBlockType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/BlockExtensionState.java#L24) |

## ExtensionParamParser

` public final class ExtensionParamParser `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/ExtensionParamParser.java#L16)

扩展语法参数解析工具。 负责解析 key=value 格式的参数字符串为键值对映射。 支持无引号、双引号和单引号三种参数值格式。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Map<String, String> parse(@Nullable String rawParams) ` | 解析参数字符串为键值对映射。 支持的格式： key=value key="value with spaces" key='value with spaces'<br>参数 ` rawParams ` 原始参数字符串（可为 null 或空）<br>返回 解析后的参数映射（不可修改）<br>` (rawParams == null \|\| rawParams.isBlank()) ` 成立时提前返回 ` Map.of() `<br>末尾返回 ` Map.copyOf(result) `<br>[调用处 MarkdownParser.tryOpenExtensionBlock](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L716) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/ExtensionParamParser.java#L34) |

## GuideDocumentCache

` public final class GuideDocumentCache `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L32)

指南文档预解析缓存。

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static long generation() ` | 末尾返回 ` generation `<br>[调用处 GuideScreen.resolveLayout](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L257) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L36) |
| ` public static PreparableReloadListener reloadListener() ` | 末尾返回 ` RELOAD_LISTENER `<br>[调用处 AgeratumClient.onReloadListenerRegister](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L92) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L165) |
| ` public static Optional<MDDocument> getParsedDocument(Identifier location) ` | 末尾返回 ` Optional.ofNullable(PARSED_DOCUMENT_CACHE.get(location)) `<br>[调用处 AgeratumClient.openGuideOnClient](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L200) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L169) |
| ` public static Optional<NavigationTree> getNavigationTree(String namespace, String languageCode) ` | 末尾返回 ` Optional.ofNullable(NAVIGATION_TREE_CACHE.get(key)) `<br>[调用处 GuideScreen.rebuildLabelEntries](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1693) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L173) |
| ` public static Optional<Identifier> getFirstDocumentByItemStack(ItemStack stack, @Nullable String languageCode) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>` (bindings == null \|\| bindings.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>` (matchedLocations.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` selectPreferredLocation(matchedLocations, languageCode) `<br>[调用处 BoundItemGuideNavigator.onTooltipGather](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/item/BoundItemGuideNavigator.java#L55) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L178) |
| ` public static Optional<List<MDComponent>> getParsedComponents(Identifier location) ` | 末尾返回 ` getParsedDocument(location).map(MDDocument::components).map(ArrayList::new) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L228) |

## GuideDocumentCache.NavigationDirectory

` public record NavigationDirectory(String namespace, String name, NavigationDocument indexDocument, List<NavigationDocument> documents, List<NavigationDirectory> children) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L246)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NavigationDirectory(String namespace, String name, NavigationDocument indexDocument, List<NavigationDocument> documents, List<NavigationDirectory> children) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L246) |
| ` public String namespace() ` | 读取 record 分量 ` namespace ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L247) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L248) |
| ` public NavigationDocument indexDocument() ` | 读取 record 分量 ` indexDocument ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L249) |
| ` public List<NavigationDocument> documents() ` | 读取 record 分量 ` documents ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L250) |
| ` public List<NavigationDirectory> children() ` | 读取 record 分量 ` children ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L251) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L246) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L246) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L246) |

## GuideDocumentCache.NavigationDocument

` public record NavigationDocument(String fileArgument, String title, Identifier location, int weight, String color) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L254)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NavigationDocument(String fileArgument, String title, Identifier location) ` | 执行 ` this(fileArgument, title, location, 0, null) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L261) |
| ` public String fileArgument() ` | 读取 record 分量 ` fileArgument ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L255) |
| ` public String title() ` | 读取 record 分量 ` title ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L256) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L257) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L258) |
| ` public String color() ` | 读取 record 分量 ` color ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L259) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L254) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L254) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L254) |

## GuideDocumentCache.NavigationTree

` public record NavigationTree(List<NavigationDocument> rootDocuments, List<NavigationDirectory> rootDirectories) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L241)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NavigationTree(List<NavigationDocument> rootDocuments, List<NavigationDirectory> rootDirectories) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L241) |
| ` public List<NavigationDocument> rootDocuments() ` | 读取 record 分量 ` rootDocuments ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L242) |
| ` public List<NavigationDirectory> rootDirectories() ` | 读取 record 分量 ` rootDirectories ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L243) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L241) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L241) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L241) |

## GuideDocumentLoader

` public final class GuideDocumentLoader `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L27)

文档加载工具类，负责从资源包中读取 Markdown 文档。 文档路径约定：assets/&lt;namespace&gt;/ageratum/&lt;languageCode&gt;/&lt;file&gt;.md 该类为纯工具类，不可实例化。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String DEFAULT_LANGUAGE_CODE ` | 默认语言目录。<br>初值 ` AgeratumConstants.I18n.DEFAULT_LANGUAGE_CODE ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L36) |
| ` public static Identifier toDocumentLocation(String namespace, String fileArgument) ` | 将命名空间与文件参数组合为标准 Identifier。 该重载默认使用 #DEFAULT\_LANGUAGE\_CODE 目录。<br>末尾返回 ` toDocumentLocation(namespace, DEFAULT_LANGUAGE_CODE, fileArgument) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L49) |
| ` public static Identifier toDocumentLocation(String namespace, String languageCode, @Nullable String fileArgument) ` | 将命名空间、语言代码与文件参数组合为标准 Identifier。 文件名会经过规范化处理（见 #normalizeFileArgument）: 缺省时使用 index，自动补全 .md 后缀。<br>参数 ` namespace ` 文档所属命名空间<br>参数 ` languageCode ` 语言代码（如 en\_us、zh\_cn）<br>参数 ` fileArgument ` 文件名参数（可为 null 或空字符串）<br>返回 指向该文档的资源位置，格式为 namespace:ageratum/&lt;languageCode&gt;/&lt;normalizedFile&gt;.md<br>末尾返回 ` Identifier.fromNamespaceAndPath(namespace, GUIDE_ROOT + "/" + normalizedLanguage + "/" + normalizedFile) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L65) |
| ` public static Optional<Identifier> resolveExistingLocation( ResourceManager resourceManager, String namespace, String languageCode, @Nullable String fileArgument ) ` | 按“当前语言 -&gt; en\_us”顺序解析第一个存在的文档位置。<br>末尾返回 ` Optional.empty() `<br>[调用处 AgeratumClient.openGuide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L119) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L74) |
| ` public static boolean exists(ResourceManager resourceManager, Identifier location) ` | 检查指定资源位置的文档是否存在于当前资源包中。<br>参数 ` resourceManager ` 当前游戏资源管理器<br>参数 ` location ` 要检查的资源位置<br>返回 存在返回 true，否则返回 false<br>末尾返回 ` resourceManager.getResource(location).isPresent() `<br>[调用处 AgeratumClient.openGuideOnClient](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L188) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L101) |
| ` public static String read(ResourceManager resourceManager, Identifier location) ` | 从资源包中读取指定文档的全部文本内容（UTF-8 编码）。<br>参数 ` resourceManager ` 当前游戏资源管理器<br>参数 ` location ` 目标文档的资源位置<br>返回 文档的完整文本内容<br>异常 ` IllegalArgumentException ` 若文档不存在<br>异常 ` UncheckedIOException ` 若读取时发生 I/O 错误<br>实现调用 ` resourceManager.getResource(location) `<br>实现调用 ` resource.open() `<br>实现调用 ` stream.readAllBytes() `<br>[调用处 AgeratumClient.openGuideOnClient](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L209) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L114) |
| ` public static List<String> listNamespaces(ResourceManager resourceManager, String languageCode) ` | 枚举所有资源包中含有 ageratum/\*.md 文件的命名空间列表。 返回结果按字母顺序排序，可直接用于命令补全。<br>参数 ` resourceManager ` 当前游戏资源管理器<br>返回 包含至少一个文档的命名空间名称列表（升序排列）<br>末尾返回 ` new ArrayList<>(namespaces) `<br>[调用处 AgeratumCommand.getNamespaceSuggestions](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L241) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L132) |
| ` public static List<String> listFiles(ResourceManager resourceManager, String namespace, String languageCode) ` | 枚举指定命名空间下所有可用的文档文件名（不含 .md 后缀）。 返回结果按字母顺序排序，可直接用于命令补全。<br>参数 ` resourceManager ` 当前游戏资源管理器<br>参数 ` namespace ` 目标命名空间<br>返回 该命名空间下所有文档的相对路径列表（不含扩展名，升序排列）<br>末尾返回 ` new ArrayList<>(result) `<br>[调用处 AgeratumCommand.getFileSuggestions](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L221) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java#L150) |

## GuideItemBinding

` public record GuideItemBinding(Identifier itemId, String rawComponents) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50)

文档绑定物品规格。 支持以下形式： namespace:item namespace:item&#123;"component":value&#125; 若未填写组件，匹配时忽略物品组件；若填写了组件，则只要求这些组件匹配， 其余组件允许存在。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Optional<GuideItemBinding> parse(@Nullable String rawValue) ` | ` (rawValue == null) ` 成立时提前返回 ` Optional.empty() `<br>` (normalized.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>` (itemId == null) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(new GuideItemBinding(itemId, requiredComponents)) `<br>[调用处 MDDocument.getGuideItemBindings](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L158) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L51) |
| ` public boolean matches(ItemStack stack) ` | 末尾返回 ` this.matchSpecificity(stack) >= 0 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L81) |
| ` public Optional<ItemStack> createItemStack() ` | 根据当前绑定规则构造一个用于查找文档绑定的物品栈。 会尽量复用绑定里声明的数据组件；若组件无法解析，则返回空。<br>` (level == null) ` 成立时提前返回 ` Optional.empty() `<br>` (lookup.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>` (itemReference.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>` (this.rawComponents == null) ` 成立时提前返回 ` Optional.of(stack) `<br>` (componentObject == null) ` 成立时提前返回 ` Optional.empty() `<br>` (decoded.isError()) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(stack) `<br>[调用处 GuideItemBinding.resolveFirstDocument](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L147) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L110) |
| ` public Optional<Identifier> resolveFirstDocument(@Nullable String languageCode) ` | 末尾返回 ` this.createItemStack().flatMap(stack -> GuideDocumentCache.getFirstDocumentByItemStack(stack, languageCode)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L146) |
| ` public GuideItemBinding(Identifier itemId, String rawComponents) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50) |
| ` public Identifier itemId() ` | 读取 record 分量 ` itemId ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50) |
| ` public String rawComponents() ` | 读取 record 分量 ` rawComponents ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java#L50) |

## MDDocument

` public record MDDocument(Identifier sourceLocation, Map<String, Object> frontMatter, List<MDComponent> components) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19)

Markdown 文档模型，包含 front matter 与渲染组件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDDocument(Identifier sourceLocation, Map<String, Object> frontMatter, List<MDComponent> components) ` | 实现调用 ` freezeMap(frontMatter) `<br>实现调用 ` List.copyOf(components) `<br>[调用处 GuideDocumentCache.prepare](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L63) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L21) |
| ` public String getTitle(String fileName) ` | 获取文档标题，按 front matter -&gt; 顶部一级标题 -&gt; 文件名 回退。<br>末尾返回 ` this.resolveFrontMatterTitle() .or(this::resolveTopHeadingTitle) .orElseGet(() -> titleFromFileName(fallbackFileName)) `<br>[调用处 MDDocument.getTitle](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L69) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L58) |
| ` public String getTitle() ` | 获取文档标题；无文件名上下文时，最后回退为 "Untitled"。<br>末尾返回 ` this.getTitle("") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L68) |
| ` public int getWeight() ` | 从 Front Matter 中读取文档权重，用于导航排序。 支持 weight、navigation.weight 字段， 值越小排序越靠前，默认值为 0。<br>末尾返回 ` weight == null ? 0 : weight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L78) |
| ` @Nullable public String getNavigationColor() ` | 从 Front Matter 中读取标题颜色。 支持 color、navigation.color 字段， 值为 #RRGGBB 格式的十六进制颜色。<br>返回 颜色字符串，未设置时返回 null<br>末尾返回 ` stringValue(this.frontMatter.get("color")) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L98) |
| ` public Optional<String> getSourceFileName() ` | 获取文档来源文件名（仅文件名，不含目录）。<br>` (this.sourceLocation == null) ` 成立时提前返回 ` Optional.empty() `<br>` (fileName.isBlank()) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(fileName) `<br>[调用处 MDDocument.getTitle](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L59) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L129) |
| ` public List<GuideItemBinding> getGuideItemBindings() ` | 从 Front Matter 中读取绑定物品列表。 支持以下字段（按优先级）： guide.items guide.item guide.item\_id（兼容旧字段） items item item\_id（兼容旧字段）<br>末尾返回 ` List.copyOf(bindings) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L155) |
| ` public Identifier sourceLocation() ` | 读取 record 分量 ` sourceLocation ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19) |
| ` public Map<String, Object> frontMatter() ` | 读取 record 分量 ` frontMatter ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19) |
| ` public List<MDComponent> components() ` | 读取 record 分量 ` components ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java#L19) |

## MDExtensionComponentFactory

` public interface MDExtensionComponentFactory extends dev.anvilcraft.resource.ageratum.client.layout.LayoutResourceProvider `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionComponentFactory.java#L11)

Markdown 扩展语法组件工厂接口。 实现此接口以创建自定义的 Markdown 扩展组件。 工厂会接收完整的扩展上下文，包括参数、渲染内容和原始文本。

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` MDComponent create(MDExtensionContext context) ` | 根据扩展上下文创建 Markdown 组件。<br>参数 ` context ` 扩展语法执行上下文，包含 ID、参数、内容等信息<br>返回 创建的组件实例 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionComponentFactory.java#L19) |

## MDExtensionContext

` public record MDExtensionContext(Identifier sourceLocation, Identifier id, String rawParams, Map<String, String> params, List<MDComponent> renderedContent, String rawContent) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L21)

Markdown 扩展语法执行上下文。 包含扩展组件所需的全部信息：组件 ID、参数、渲染后的内容列表和原始文本。<br>参数 ` sourceLocation ` 当前正在解析的文档位置。<br>参数 ` id ` 扩展组件 ID（如 ageratum:info）。<br>参数 ` rawParams ` 参数的原始字符串形式。<br>参数 ` params ` 解析后的参数键值对（仅 &lt;...&gt; 标签语法提供）。<br>参数 ` renderedContent ` 块内容解析后的 Markdown 组件列表。<br>参数 ` rawContent ` 块内容的原始文本。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDExtensionContext(Identifier sourceLocation, Identifier id, String rawParams, Map<String, String> params, List<MDComponent> renderedContent, String rawContent) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L21) |
| ` public Identifier sourceLocation() ` | 读取 record 分量 ` sourceLocation ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L22) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L23) |
| ` public String rawParams() ` | 读取 record 分量 ` rawParams ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L24) |
| ` public Map<String, String> params() ` | 读取 record 分量 ` params ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L25) |
| ` public List<MDComponent> renderedContent() ` | 读取 record 分量 ` renderedContent ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L26) |
| ` public String rawContent() ` | 读取 record 分量 ` rawContent ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L27) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDExtensionContext.java#L21) |

## MDInlineComponentContext

` public record MDInlineComponentContext(Identifier id, String rawParams, Map<String, String> params, Style baseStyle) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16)

Markdown 行内组件上下文。<br>参数 ` id ` 行内组件 ID（如 ageratum:translate）。<br>参数 ` rawParams ` 原始参数字符串。<br>参数 ` params ` 解析后的参数键值对。<br>参数 ` baseStyle ` 组件输出应继承的基础样式。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDInlineComponentContext(Identifier id, String rawParams, Map<String, String> params, Style baseStyle) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public String rawParams() ` | 读取 record 分量 ` rawParams ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public Map<String, String> params() ` | 读取 record 分量 ` params ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public Style baseStyle() ` | 读取 record 分量 ` baseStyle ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentContext.java#L16) |

## MDInlineComponentFactory

` public interface MDInlineComponentFactory extends dev.anvilcraft.resource.ageratum.client.layout.LayoutResourceProvider `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentFactory.java#L11)

Markdown 行内组件工厂接口。 实现该接口并注册到行内组件工厂注册表后，即可解析并渲染 &lt;namespace:id .../&gt; 形式的行内标签。

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` FormattedText create(MDInlineComponentContext context) ` | 根据上下文创建行内组件文本。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDInlineComponentFactory.java#L16) |
