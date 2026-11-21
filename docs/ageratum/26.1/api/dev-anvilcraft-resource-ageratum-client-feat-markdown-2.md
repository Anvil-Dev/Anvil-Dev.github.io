# dev.anvilcraft.resource.ageratum.client.feat.markdown（MDRenderContext 至 SelfClosingBlockExtensionState）



## MDRenderContext

` public record MDRenderContext(MDRenderContext parent, Minecraft minecraft, GuiGraphicsExtractor graphics, List<Tooltip> tooltips, int screenWidth, int screenHeight, int maxX, int maxY, float mouseX, float mouseY, int offsetX, int offsetY, float scale, int leftPos, int topPos, List<BiConsumer<GuideScreen, MDRenderContext>> onEnd, GuideLayout layout) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDRenderContext(MDRenderContext parent, Minecraft minecraft, GuiGraphicsExtractor graphics, List<Tooltip> tooltips, int screenWidth, int screenHeight, int maxX, int maxY, float mouseX, float mouseY, int offsetX, int offsetY, float scale, int leftPos, int topPos, List<BiConsumer<GuideScreen, MDRenderContext>> onEnd) ` | Compatibility constructor for third-party components. Child contexts inherit the theme.<br>实现调用 ` parent.layout() `<br>实现调用 ` guide.getLayout() `<br>实现调用 ` GuideLayoutManager.defaults() `<br>[调用处 GuideScreen.extractContentRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L2710) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L42) |
| ` public MDRenderContext child() ` | 末尾返回 ` this.child(this.maxX, this.maxY, this.mouseX, this.mouseY, this.scale) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L51) |
| ` public MDRenderContext child(int maxX, int maxY, float mouseX, float mouseY, float scale) ` | 末尾返回 ` this.child(maxX, maxY, mouseX, mouseY, this.offsetX, this.offsetY, scale) `<br>[调用处 MDRenderContext.child](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L52) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L55) |
| ` public MDRenderContext child(int maxX, int maxY, float mouseX, float mouseY, int offsetX, int offsetY, float scale) ` | [调用处 MDRenderContext.child](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L56) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L59) |
| ` public void addTooltip(ItemStack stack) ` | 执行 ` this.tooltips.add(new Tooltip(Screen.getTooltipFromItem(Minecraft.getInstance(), stack), stack.getTooltipImage())) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L81) |
| ` public void addTooltip(Component text) ` | 执行 ` this.tooltips.add(new Tooltip(List.of(text), Optional.empty())) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L85) |
| ` public void enableScissor(int minX, int minY, int maxX, int maxY) ` | 执行 ` this.graphics().enableScissor(minX, minY, maxX, maxY) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L92) |
| ` public void disableScissor() ` | 执行 ` this.graphics().disableScissor() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L96) |
| ` public void onEnd(BiConsumer<GuideScreen, MDRenderContext> consumer) ` | 执行 ` this.onEnd().add(consumer) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L100) |
| ` public void extractTooltipRenderState() ` | 实现调用 ` this.graphics().pose().pushMatrix() `<br>实现调用 ` this.graphics().pose() `<br>实现调用 ` this.graphics() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L104) |
| ` public void onEnd(GuideScreen screen) ` | 实现调用 ` this.onEnd() `<br>实现调用 ` consumer.accept(screen, this) `<br>实现调用 ` this.onEnd().clear() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L127) |
| ` public MDRenderContext parent() ` | 读取 record 分量 ` parent ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L22) |
| ` public Minecraft minecraft() ` | 读取 record 分量 ` minecraft `<br>[调用处 MDRenderContext.extractTooltipRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L114) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L23) |
| ` public GuiGraphicsExtractor graphics() ` | 读取 record 分量 ` graphics `<br>[调用处 MDRenderContext.enableScissor](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L93) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L24) |
| ` public List<Tooltip> tooltips() ` | 读取 record 分量 ` tooltips `<br>[调用处 MDRenderContext.extractTooltipRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L109) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L25) |
| ` public int screenWidth() ` | 读取 record 分量 ` screenWidth ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L26) |
| ` public int screenHeight() ` | 读取 record 分量 ` screenHeight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L27) |
| ` public int maxX() ` | 读取 record 分量 ` maxX ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L28) |
| ` public int maxY() ` | 读取 record 分量 ` maxY ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L29) |
| ` public float mouseX() ` | 读取 record 分量 ` mouseX `<br>[调用处 MDRenderContext.extractTooltipRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L116) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L30) |
| ` public float mouseY() ` | 读取 record 分量 ` mouseY `<br>[调用处 MDRenderContext.extractTooltipRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L117) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L31) |
| ` public int offsetX() ` | 读取 record 分量 ` offsetX ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L32) |
| ` public int offsetY() ` | 读取 record 分量 ` offsetY ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L33) |
| ` public float scale() ` | 读取 record 分量 ` scale ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L34) |
| ` public int leftPos() ` | 读取 record 分量 ` leftPos `<br>[调用处 MDRenderContext.extractTooltipRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L107) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L35) |
| ` public int topPos() ` | 读取 record 分量 ` topPos `<br>[调用处 MDRenderContext.extractTooltipRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L107) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L36) |
| ` public List<BiConsumer<GuideScreen, MDRenderContext>> onEnd() ` | 读取 record 分量 ` onEnd `<br>[调用处 MDRenderContext.onEnd](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L101) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L37) |
| ` public GuideLayout layout() ` | 读取 record 分量 ` layout ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L38) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L21) |

## MDRenderContext.Tooltip

` public record Tooltip(List<Component> tooltipLines, Optional<TooltipComponent> visualTooltipComponent) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Tooltip(List<Component> tooltipLines, Optional<TooltipComponent> visualTooltipComponent) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89) |
| ` public List<Component> tooltipLines() ` | 读取 record 分量 ` tooltipLines ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89) |
| ` public Optional<TooltipComponent> visualTooltipComponent() ` | 读取 record 分量 ` visualTooltipComponent ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L89) |

## MarkdownParser

` public class MarkdownParser `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L48)

Markdown 解析器。 负责将原始 Markdown 文本按块级语义拆分为一组 MDComponent， 并在解析阶段处理引用链接、代码块、列表、表格、引用块等结构。 同时支持两种扩展语法： ::: namespace:location ... ::: 冒号语法 &lt;namespace:location&gt;...&lt;/namespace:location&gt; 和 &lt;namespace:location/&gt; 标签语法 扩展组件通过 NeoForge Custom Registry ageratum:extension\_component\_factory 注册。 解析器也支持通过 #registerComponentParser(int, MDComponentParser) 注入行级组件解析器。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MarkdownParser() ` | 创建解析器并注册内置组件解析器。<br>执行 ` this.registerBaseComponentParser() `<br>[调用处 AgeratumClient.parseDocumentAndSetScreen](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L270) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L57) |
| ` public void registerComponentParser(int priority, MDComponentParser parser) ` | 注册一个行级组件解析器。<br>参数 ` priority ` 解析优先级；值越小优先级越高<br>参数 ` parser ` 组件解析函数<br>执行 ` this.mdComponentParserHolders.add(new MDComponentParserHolder(priority, parser)) `<br>[调用处 MarkdownParser.registerBaseComponentParser](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L73) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L67) |
| ` public List<MDComponent> parse(Identifier sourceLocation, String markdown) ` | 将 Markdown 文本解析为组件列表。 解析流程： 规范化换行符 收集和展开引用链接定义 按行扫描，识别块级元素 缓冲区刷新为对应组件<br>参数 ` markdown ` 原始 Markdown 文本<br>返回 按渲染顺序排列的组件列表<br>末尾返回 ` this.parseDocument(sourceLocation, markdown).components() `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L138) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L93) |
| ` public MDDocument parseDocument(Identifier sourceLocation, String markdown) ` | 将 Markdown 文本解析为文档模型，并携带文档来源位置。<br>末尾返回 ` new MDDocument(sourceLocation, frontMatterParseResult.frontMatter(), components) `<br>[调用处 MarkdownParser.parse](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L94) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L100) |
| ` public @Nullable MDComponent parseComponent(Identifier sourceLocation, String string) ` | 使用已注册解析器尝试将一行文本解析为组件。<br>末尾返回 ` null `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L313) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L966) |

## MarkdownParser.MDComponentParser

` public interface MDComponentParser extends BiFunction<Identifier, String, MDComponent> `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L977)

行级组件解析函数接口。

类型注解 ` @FunctionalInterface `


## SelfClosingBlockExtensionState

` public class SelfClosingBlockExtensionState `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/SelfClosingBlockExtensionState.java#L15)

自闭合扩展块状态。 用于表示 &lt;&lt;namespace:location key=value .../&gt;&gt; 形式的自闭合扩展块， 提供与 BlockExtensionState 兼容的接口以便统一处理。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SelfClosingBlockExtensionState( Identifier id, String rawParams, Map<String, String> params ) ` | 创建自闭合扩展块状态。<br>实现调用 ` Collections.unmodifiableMap(new LinkedHashMap<>(params)) `<br>[调用处 MarkdownParser.trySelfClosingExtensionBlock](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L744) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/SelfClosingBlockExtensionState.java#L23) |
| ` public Identifier id() ` | 获取扩展组件 ID。<br>末尾返回 ` this.id ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/SelfClosingBlockExtensionState.java#L36) |
| ` public String rawParams() ` | 获取参数的原始字符串。<br>末尾返回 ` this.rawParams ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/SelfClosingBlockExtensionState.java#L43) |
| ` public Map<String, String> params() ` | 获取解析后的参数键值对。<br>末尾返回 ` this.params ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/SelfClosingBlockExtensionState.java#L50) |
