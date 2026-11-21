# dev.anvilcraft.resource.ageratum.client.feat.markdown.component



## MDBlockComponent

` public abstract class MDBlockComponent<E> extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public final void render( MDRenderContext context ) ` | 实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L34) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` totalHeight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L59) |
| ` @Override @Nullable public final Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | ` (mouseX < 0 \|\| mouseY < 0) ` 成立时提前返回 ` null `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L68) |

## MDBlockComponent.CachedItem

` public record CachedItem<T>(int level, T item, FormattedText text) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CachedItem(int level, T item, FormattedText text) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |
| ` public T item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |
| ` public FormattedText text() ` | 读取 record 分量 ` text ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDBlockComponent.java#L31) |

## MDCodeBlockComponent

` public class MDCodeBlockComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java#L36)

代码块组件。 负责渲染带背景、边框、行号栏的多行代码文本， 并在给定宽度下自动换行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDCodeBlockComponent(String text) ` | 创建代码块组件。<br>参数 ` text ` 代码文本（允许包含换行）<br>执行 ` this(text, "") `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L421) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java#L94) |
| ` public MDCodeBlockComponent(String text, String extra) ` | 实现调用 ` super(FormattedText.of(text, CODE_TEXT_STYLE)) `<br>实现调用 ` FormattedText.of(text, CODE_TEXT_STYLE) `<br>实现调用 ` MDCodeBlockComponent.parseCode(text, extra) `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L253) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java#L98) |
| ` @Override public void render(MDRenderContext context) ` | 渲染代码块主体与行号栏。<br>实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java#L217) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 计算代码块在当前宽度下的总高度（含内边距）。<br>末尾返回 ` lineCount * minecraft.font.lineHeight + PADDING * 2 `<br>[调用处 MDCodeBlockComponent.render](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java#L223) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java#L305) |

## MDComponent

` public abstract class MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L36)

Markdown 渲染组件基类。 该类封装了通用文本渲染能力，以及内联 Markdown 语法（粗体、斜体、删除线、链接、 自动链接、代码跨度）与自定义样式标签（如 &lt;color=#xxxxxx&gt;）的解析逻辑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDComponent(String text) ` | 使用原始文本创建组件，文本会按默认规则进行 Markdown 内联解析。<br>执行 ` this(MDComponent.textFormat(text)) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L73) |
| ` public MDComponent(FormattedText text) ` | 使用已格式化文本创建组件。<br>执行 ` this.text = text ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L80) |
| ` public void setEffectiveText(@Nullable FormattedText effectiveText) ` | 设置渲染时覆盖文本（null 表示使用原始 text）。<br>执行 ` this.effectiveText = effectiveText ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L87) |
| ` public void render(MDRenderContext context) ` | 在给定区域内渲染组件内容。<br>实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L101) |
| ` public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 计算组件的期望宽度。 此方法主要用于行内布局（如 &lt;row&gt; 组件）场景， 允许组件声明其期望的渲染宽度。 默认实现返回 -1，表示使用父容器分配的宽度。 子类可以重写此方法以声明固定宽度或最小宽度需求。<br>参数 ` minecraft ` Minecraft 实例<br>参数 ` maxX ` 可用的最大宽度<br>参数 ` maxY ` 可用的最大高度<br>返回 期望宽度（像素），-1 表示使用可用空间<br>末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L131) |
| ` public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 计算组件在指定宽度下的渲染高度。<br>末尾返回 ` minecraft.font.split(textToRender, maxX).size() * minecraft.font.lineHeight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L138) |
| ` @Nullable public Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | 获取组件内部指定坐标对应的文本样式。 默认实现按普通文本块处理；复杂布局组件可覆盖以匹配其真实渲染坐标。<br>末尾返回 ` this.getStyleAtFormattedTextPosition(minecraft, textToRender, mouseX, mouseY, maxX) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L148) |
| ` public boolean mouseScrolled(Minecraft minecraft, double mouseX, double mouseY, double scrollY, int maxX) ` | 处理组件内部鼠标滚轮事件。<br>返回 若组件消费事件返回 true<br>末尾返回 ` false `<br>[调用处 MDComponent.scrollHandler](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L165) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L159) |
| ` public java.util.function.DoublePredicate scrollHandler(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | 固定滚动起点的组件及局部坐标，供连续滚轮操作复用。<br>末尾返回 ` delta -> this.mouseScrolled(minecraft, mouseX, mouseY, delta, maxX) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L164) |
| ` public boolean mouseClicked(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | 处理组件内部鼠标按下事件。<br>返回 若组件消费事件返回 true<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L174) |
| ` public boolean mouseDragged( Minecraft minecraft, double mouseX, double mouseY, int button, double dragX, double dragY, int maxX ) ` | 处理组件内部鼠标拖拽事件。<br>返回 若组件消费事件返回 true<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L183) |
| ` public boolean mouseReleased(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | 处理组件内部鼠标释放事件。<br>返回 若组件消费事件返回 true<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L200) |
| ` public boolean keyPressed( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | 处理组件内部键盘事件。<br>返回 若组件消费事件返回 true<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L209) |
| ` public boolean blocksParentKeyHandling( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | 指示组件是否需要阻止父级继续处理当前按键。 适用于组件希望独占某些导航按键，但当前按下后内部状态没有发生变化的情况。<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L226) |
| ` public static FormattedText textFormat(String text) ` | 使用默认样式解析一段 Markdown 内联文本。<br>末尾返回 ` textFormat(text, Style.EMPTY) `<br>[调用处 MDTableComponent.prepareRows](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L290) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L262) |
| ` public static FormattedText textFormat(String text, Style baseStyle) ` | 基于指定基础样式解析 Markdown 内联文本。<br>末尾返回 ` parseMixedTextWithCodeSpan(escapeContext.text(), escapeContext, baseStyle) `<br>[调用处 MarkdownParser.createDirectoryLink](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L167) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L269) |
| ` public static FormattedText parseStyledText(String text, Style parentStyle) ` | 解析并应用自定义样式标签文本。<br>` (parts.isEmpty()) ` 成立时提前返回 ` FormattedText.EMPTY `<br>[调用处 BuiltinInlineStyleParsers](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineStyleParsers.java#L179) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L498) |
| ` public boolean isHoverItem(int startX, int startY, float mouseX, float mouseY) ` | 末尾返回 ` this.isHover(startX, startY, 16, 16, mouseX, mouseY) `<br>[调用处 MDComponent.renderTooltip](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L781) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L772) |
| ` public boolean isHover(int startX, int startY, int width, int height, float mouseX, float mouseY) ` | 末尾返回 ` mouseX >= startX && mouseX <= startX + width && mouseY >= startY && mouseY <= startY + height `<br>[调用处 MDComponent.isHoverItem](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L773) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L776) |
| ` public FormattedText getText() ` | 获取组件的 FormattedText。<br>返回 该组件的格式化文本<br>末尾返回 ` this.text `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L36) |

## MDComponent.InlineStyleMatch

` public static final class InlineStyleMatch `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L574)

一次内联样式匹配结果，保存起止标签与样式 / 文本生成逻辑。 此类可保存两类工厂之一： 传统的 BiFunction&lt;Style, Matcher, Style&gt;：用于在解析时返回一个新的 net.minecraft.network.chat.Style，随后由解析器对标签内部文本递归解析并应用该样式； 新的 TriFunction&lt;String, Style, Matcher, FormattedText&gt;：直接基于原始 内部字符串 (innerText)、父样式与匹配器生产最终的 net.minecraft.network.chat.FormattedText， 这使得解析器可以一次性生成多段文本（例如按字符的渐变色片段）。 当两者都存在时优先使用 textFactory；通常只会有其一被设置（由工厂方法创建）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static InlineStyleMatch of( Pattern openTagPattern, Matcher matcher, String closeTag, BiFunction<Style, Matcher, Style> styleFactory ) ` | 末尾返回 ` new InlineStyleMatch(openTagPattern, matcher, closeTag, (innerText, style, matcher1) -> parseStyledText(innerText, styleFactory.apply(style, matcher1))) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L592) |
| ` public static InlineStyleMatch of( Pattern openTagPattern, Matcher matcher, String closeTag, TriFunction<String, Style, Matcher, FormattedText> textFactory ) ` | 末尾返回 ` new InlineStyleMatch(openTagPattern, matcher, closeTag, textFactory) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L606) |
| ` public int start() ` | 末尾返回 ` this.matcher.start() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L615) |
| ` public int end() ` | 末尾返回 ` this.matcher.end() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L619) |
| ` public Pattern openTagPattern() ` | 末尾返回 ` this.openTagPattern ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L623) |
| ` public String closeTag() ` | 末尾返回 ` this.closeTag ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L627) |
| ` public FormattedText applyTextFactory(String innerText, Style parentStyle) ` | 末尾返回 ` this.textFactory.apply(innerText, parentStyle, this.matcher) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDComponent.java#L631) |

## MDHeaderComponent

` public class MDHeaderComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHeaderComponent.java#L21)

Markdown 标题组件。 支持 ATX 形式标题（# ~ ######），并根据标题级别调整缩放比例。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDHeaderComponent(int level, String text) ` | 创建标题组件。<br>参数 ` level ` 标题级别（1-6）<br>参数 ` text ` 标题文本<br>实现调用 ` super(MDComponent.textFormat(text, MDHeaderComponent.getStyle(level))) `<br>实现调用 ` MDComponent.textFormat(text, MDHeaderComponent.getStyle(level)) `<br>实现调用 ` MDHeaderComponent.getStyle(level) `<br>[调用处 MarkdownParser.expandDirectoryComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L141) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHeaderComponent.java#L34) |
| ` public static @Nullable MDHeaderComponent parse(ResourceLocation sourceLocation, String text) ` | 尝试从单行文本解析标题组件。<br>` (!matcher.matches()) ` 成立时提前返回 ` null `<br>末尾返回 ` new MDHeaderComponent(level, headerText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHeaderComponent.java#L42) |
| ` @Override public void render( MDRenderContext context ) ` | 渲染标题文本；一级标题额外绘制一条分隔线。<br>实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHeaderComponent.java#L80) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 计算标题渲染高度（含一级标题分隔线高度）。<br>末尾返回 ` height ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHeaderComponent.java#L115) |
| ` public int getLevel() ` | 标题级别（1-6）。<br>末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHeaderComponent.java#L21) |

## MDHorizontalRuleComponent

` public class MDHorizontalRuleComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHorizontalRuleComponent.java#L12)

水平分隔线组件，对应 Markdown 的 ---/\*\*\* 等语法。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDHorizontalRuleComponent() ` | 创建分隔线组件。<br>执行 ` super(FormattedText.EMPTY) `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L400) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHorizontalRuleComponent.java#L16) |
| ` @Override public void render( MDRenderContext context ) ` | 在当前行中间绘制一条水平线。<br>实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.graphics() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHorizontalRuleComponent.java#L23) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 分隔线占用一行文本高度。<br>末尾返回 ` minecraft.font.lineHeight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDHorizontalRuleComponent.java#L37) |

## MDImageComponent

` public class MDImageComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L42)

图片组件。 支持独占一行的 Markdown 图片语法，图片资源会被映射到 textures/ 目录下并按可用区域等比缩放。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDImageComponent(ResourceLocation imageLocation) ` | 创建图片组件。<br>执行 ` this(imageLocation, false) `<br>[调用处 MDImageComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L91) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L55) |
| ` public MDImageComponent(ResourceLocation imageLocation, boolean shouldScaleUp) ` | 创建图片组件。<br>执行 ` this(imageLocation, shouldScaleUp, false) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L62) |
| ` public MDImageComponent(ResourceLocation imageLocation, boolean shouldScaleUp, boolean enableAlignCenter) ` | 创建图片组件。<br>实现调用 ` super(FormattedText.EMPTY) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L69) |
| ` public static @Nullable MDImageComponent parse(ResourceLocation sourceLocation, String text) ` | 尝试将一行文本解析为图片组件。<br>` (!matcher.matches()) ` 成立时提前返回 ` MDImageComponent.fallbackParse(sourceLocation, text) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L79) |
| ` public static @Nullable MDImageComponent fallbackParse(ResourceLocation sourceLocation, String text) ` | ` (!matcher.matches()) ` 成立时提前返回 ` null `<br>[调用处 MDImageComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L82) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L97) |
| ` @Override public void render( MDRenderContext context ) ` | 按缩放后的尺寸渲染图片。<br>实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L136) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).width() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L193) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 返回图片在目标区域中的渲染高度。<br>末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L202) |
| ` public ResourceLocation getImageLocation() ` | 末尾返回 ` this.imageLocation `<br>由 Lombok 生成。<br>[调用处 MDImageComponent.renderContent](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L165) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L42) |
| ` public boolean isShouldScaleUp() ` | 末尾返回 ` this.shouldScaleUp `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L42) |
| ` public boolean isEnableAlignCenter() ` | 末尾返回 ` this.enableAlignCenter `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L42) |
| ` public float getScale() ` | 末尾返回 ` this.scale `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L42) |

## MDImageComponent.Size

` public record Size(int width, int height, float scale) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298)

简单尺寸值对象。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Size(int width, int height, float scale) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |
| ` public int width() ` | 读取 record 分量 ` width ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |
| ` public int height() ` | 读取 record 分量 ` height ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |
| ` public float scale() ` | 读取 record 分量 ` scale ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java#L298) |

## MDInlineStyleParser

` public interface MDInlineStyleParser `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDInlineStyleParser.java#L18)

Markdown 行内样式解析器注册项。 该接口设计为可直接注册到 NeoForge 自定义注册表中，供 MDComponent 在解析自定义标签时按优先级查询。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int priority() ` | 解析优先级；数值越小越先参与同位置竞争。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDInlineStyleParser.java#L22) |
| ` @Nullable MDComponent.InlineStyleMatch parse(String text, int pos) ` | 从指定起始位置尝试解析一段行内样式标签。<br>参数 ` text ` Markdown 原始文本<br>参数 ` pos ` 搜索起始位置<br>返回 匹配结果；若未命中则返回 null | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDInlineStyleParser.java#L31) |
| ` static MDInlineStyleParser create( int priority, Pattern openTagPattern, String closeTag, BiFunction<Style, Matcher, Style> styleFactory ) ` | 创建一个基于开始标签/结束标签模式的简单解析器。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDInlineStyleParser.java#L37) |
| ` static MDInlineStyleParser create( int priority, Pattern openTagPattern, String closeTag, TriFunction<String, Style, Matcher, FormattedText> textFactory ) ` | 创建一个能够直接生成内联内容 net.minecraft.network.chat.FormattedText 的解析器工厂。<br>参数 ` priority ` 解析优先级<br>参数 ` openTagPattern ` 开始标签正则<br>参数 ` closeTag ` 结束标签字面串<br>参数 ` textFactory ` 工厂函数： (innerText, parentStyle, matcher) -&gt; FormattedText | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDInlineStyleParser.java#L68) |

## MDListComponent

` public class MDListComponent extends MDBlockComponent<MDListComponent.ListItem> `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L18)

Markdown 列表组件。 统一渲染无序列表、有序列表与任务列表，按首行对齐标记并为多位编号预留统一宽度。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDListComponent(List<ListItem> items) ` | 使用解析后的列表项创建组件。<br>执行 ` this(prepare(items)) `<br>[调用处 MarkdownParser.expandDirectoryComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L151) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L27) |
| ` public static ListItem unordered(int level, String text) ` | 创建无序列表项。<br>末尾返回 ` new ListItem(ListKind.UNORDERED, Math.max(0, level), 0, false, text) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L43) |
| ` public static ListItem unordered(int level, FormattedText text) ` | Creates an unordered item with preformatted text.<br>末尾返回 ` new ListItem(ListKind.UNORDERED, Math.max(0, level), 0, false, null, text) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L50) |
| ` public static ListItem ordered(int level, int index, String text) ` | 末尾返回 ` new ListItem(ListKind.ORDERED, Math.max(0, level), Math.max(1, index), false, text) `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L368) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L54) |
| ` public static ListItem task(int level, boolean checked, String text) ` | 创建任务列表项。<br>末尾返回 ` new ListItem(ListKind.TASK, Math.max(0, level), 0, checked, text) `<br>[调用处 MarkdownParser.parseComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L340) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L61) |

## MDListComponent.ListItem

` public record ListItem(ListKind kind, int level, int index, boolean checked, String text, FormattedText formattedText) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L161)

单个列表项的数据结构。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ListItem(ListKind kind, int level, int index, boolean checked, String text) ` | 执行 ` this(kind, level, index, checked, text, null) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L169) |
| ` public ListKind kind() ` | 读取 record 分量 ` kind ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L162) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L163) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L164) |
| ` public boolean checked() ` | 读取 record 分量 ` checked ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L165) |
| ` public String text() ` | 读取 record 分量 ` text ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L166) |
| ` public FormattedText formattedText() ` | 读取 record 分量 ` formattedText ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L167) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L161) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L161) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L161) |

## MDListComponent.ListKind

` public enum ListKind `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L152)

列表类型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` UNORDERED ` | 声明于枚举 ` MDListComponent.ListKind ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L153) |
| ` ORDERED ` | 声明于枚举 ` MDListComponent.ListKind ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L154) |
| ` TASK ` | 声明于枚举 ` MDListComponent.ListKind ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L155) |
| ` public static ListKind[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L152) |
| ` public static ListKind valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDListComponent.java#L152) |

## MDQuoteComponent

` public class MDQuoteComponent extends MDBlockComponent<Integer> `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L16)

引用块组件。 按层级渲染左侧竖线，并对引用文本使用较浅默认颜色。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDQuoteComponent(List<QuoteLine> cachedItems) ` | 使用解析后的引用行创建组件。<br>执行 ` this(prepare(cachedItems)) `<br>[调用处 MarkdownParser.flushQuoteComponent](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L915) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L25) |

## MDQuoteComponent.QuoteLine

` public record QuoteLine(int level, String text) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76)

单行引用数据，包含层级与文本。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public QuoteLine(int level, String text) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76) |
| ` public String text() ` | 读取 record 分量 ` text ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDQuoteComponent.java#L76) |

## MDTableComponent

` public class MDTableComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L22)

Markdown 表格组件。 支持解析管道表格语法、列对齐声明行，并渲染表头高亮与隔行背景。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static MDTableComponent parse(List<String> tableRowStrings) ` | 从连续表格行文本解析出表格组件。<br>末尾返回 ` new MDTableComponent(preparedData.rows(), alignments, hasHeader, preparedData.componentText()) `<br>[调用处 MarkdownParser.flushTableComponent](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L927) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L56) |
| ` @Override public void render( MDRenderContext context ) ` | 渲染表格边框、背景与单元格文本。<br>实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L129) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 计算表格总高度。<br>` (this.rows.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` total ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L192) |
| ` @Override @Nullable public Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | ` (mouseX < 0 \|\| mouseY < 0 \|\| this.rows.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L204) |

## MDTableComponent.Alignment

` public enum Alignment `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L35)

表格列对齐方式。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LEFT ` | 声明于枚举 ` MDTableComponent.Alignment ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L35) |
| ` CENTER ` | 声明于枚举 ` MDTableComponent.Alignment ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L35) |
| ` RIGHT ` | 声明于枚举 ` MDTableComponent.Alignment ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L35) |
| ` public static Alignment[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L35) |
| ` public static Alignment valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java#L35) |

## MDTextComponent

` public class MDTextComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTextComponent.java#L11)

纯文本段落组件。 默认会将换行折叠为空格，模拟普通段落行为； 也可通过参数保留原始换行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDTextComponent(String text) ` | 创建普通段落文本组件（不保留原始换行）。<br>执行 ` this(text, false) `<br>[调用处 MarkdownParser.flushParagraphComponent](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L909) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTextComponent.java#L15) |
| ` public MDTextComponent(String text, boolean preserveLineBreaks) ` | 创建文本组件。<br>参数 ` text ` 文本内容<br>参数 ` preserveLineBreaks ` 是否保留原始换行符<br>执行 ` super(MDTextComponent.processText(text, preserveLineBreaks)) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTextComponent.java#L25) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` minecraft.font.width(this.text) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTextComponent.java#L29) |
