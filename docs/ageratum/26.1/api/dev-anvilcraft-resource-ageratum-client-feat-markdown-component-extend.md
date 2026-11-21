# dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend



## MDBlockComponent

` public class MDBlockComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L37)

方块渲染组件。 外观与 item 组件保持一致，使用槽位背景 + 16x16 方块预览。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDBlockComponent(Identifier blockLoc, Map<String, String> stateProps, boolean showText) ` | 实现调用 ` super(MDItemComponent.SLOT_COMPONENT_TEXTURE, false, true) `<br>[调用处 MDBlockComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L183) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L47) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` Math.max(32, textWidth) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L142) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L148) |
| ` public static MDComponent parse(MDExtensionContext context) ` | ` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：block 需要 id 参数]") `<br>末尾返回 ` new MDBlockComponent(id, stateProps, showText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L168) |

## MDEntityComponent

` public final class MDEntityComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L43)

实体展示组件，使用背包界面同款实体预览渲染。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDEntityComponent(Identifier entityId, CompoundTag entityNbt, boolean showText) ` | 实现调用 ` super(Component.literal("[entity load failed]").withStyle(ChatFormatting.RED)) `<br>实现调用 ` Component.literal("[entity load failed]").withStyle(ChatFormatting.RED) `<br>实现调用 ` Component.literal("[entity load failed]") `<br>[调用处 MDEntityComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L200) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L52) |
| ` @Override public void extractRenderState(MDRenderContext context) ` | 实现调用 ` context.graphics() `<br>实现调用 ` this.getEntity() `<br>分支 ` (entity == null) ` 内调用 ` super.extractRenderState(context) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L59) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | ` (entity == null) ` 成立时提前返回 ` super.getPreferredWidth(minecraft, maxX, maxY) `<br>末尾返回 ` Math.max(this.getContentWidth(maxX), textWidth) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L102) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | ` (entity == null) ` 成立时提前返回 ` super.getHeight(minecraft, maxX, maxY) `<br>末尾返回 ` this.getContentHeight() + textHeight + 2 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L110) |
| ` public static MDComponent parse(MDExtensionContext context) ` | ` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：entity 需要 id 参数]") `<br>末尾返回 ` new MDEntityComponent(id, nbt, showText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L177) |

## MDItemComponent

` public class MDItemComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier SLOT_COMPONENT_TEXTURE ` | 初值 ` Ageratum.location("textures/gui/component/slot.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L34) |
| ` public MDItemComponent(Identifier itemLoc, int count, @Nullable JsonElement components, boolean showText) ` | 实现调用 ` super(MDItemComponent.SLOT_COMPONENT_TEXTURE, false, true) `<br>[调用处 MDItemComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L133) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L43) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` Math.max(32, textWidth) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L98) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L104) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 解析结构扩展标签。<br>` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：item 需要 id 参数]") `<br>末尾返回 ` new MDItemComponent(id, count, element, showText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L114) |

## MDLatexComponent

` public class MDLatexComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L39)

LaTeX 扩展组件，使用 CodeCogs 渲染远程 PNG 并缓存到本地。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void extractRenderState(MDRenderContext context) ` | 实现调用 ` this.ensureTextureState(context.minecraft()) `<br>实现调用 ` context.minecraft() `<br>分支 ` (state.status == LatexStatus.READY) ` 内调用 ` super.extractRenderState(context) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L60) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | ` (state.status != LatexStatus.READY) ` 成立时提前返回 ` GuideFont.get().lineHeight `<br>末尾返回 ` super.getHeight(minecraft, maxX, maxY) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L76) |
| ` public static @Nullable MDComponent parseLegacyLine(String text) ` | ` (!matcher.matches()) ` 成立时提前返回 ` null `<br>` (formula.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` createFromFormula(formula, getLegacyScale(delimiter), 150, "000000", true) `<br>[调用处 MarkdownParser.registerBaseComponentParser](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L74) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L242) |
| ` public static MDComponent parse(MDExtensionContext context) ` | ` (formula == null \|\| formula.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：latex 需要 formula 参数]") `<br>末尾返回 ` createFromFormula(formula, scale, dpi, color, center) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L255) |

## MDNBTStructureComponent

` public final class MDNBTStructureComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L67)

NBT 结构文件渲染组件。 该组件由扩展标签 &lt;structure id="namespace:path"/&gt; 创建， 用于在文档中渲染结构文件摘要与 NBT 树状视图。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static MDComponent parse(MDExtensionContext context) ` | 解析结构扩展标签。<br>` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：structure 需要 id 或 path 参数]") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L109) |
| ` @Override public void extractRenderState(MDRenderContext context) ` | 实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.graphics() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L123) |
| ` public static void renderExportButton(MDRenderContext context) ` | 供负责结构导出的集成模块绘制同一套主题按钮；点击行为由集成模块处理。<br>实现调用 ` context.maxX() `<br>实现调用 ` context.mouseX() `<br>实现调用 ` context.mouseY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L198) |
| ` @Override public boolean keyPressed(Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX) ` | ` (this.previewLevel == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L224) |
| ` @Override public boolean blocksParentKeyHandling( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | 末尾返回 ` this.previewLevel != null && (keyCode == GLFW.GLFW_KEY_PAGE_UP \|\| keyCode == GLFW.GLFW_KEY_PAGE_DOWN) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L244) |
| ` @Override public boolean mouseScrolled(Minecraft minecraft, double mouseX, double mouseY, double scrollY, int maxX) ` | ` (scrollY == 0.0) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L257) |
| ` @Override public boolean mouseClicked(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (button != 0 && button != 1) ` 成立时提前返回 ` false `<br>` (this.isHoverControls(maxX, (float) mouseX, (float) mouseY)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L268) |
| ` @Override public boolean mouseDragged(Minecraft minecraft, double mouseX, double mouseY, int button, double dragX, double dragY, int maxX) ` | ` (button != this.dragButton) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L313) |
| ` @Override public boolean mouseReleased(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (button != this.dragButton) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L344) |
| ` public int scale(int maxX, int value) ` | 末尾返回 ` Math.round(value * scale) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L466) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.contentHeight `<br>[调用处 MDNBTStructureComponent.extractRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L139) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L471) |

## MDNBTStructureComponent.StructureTarget

` public record StructureTarget(Identifier location, String displayPath, List<String> previewCandidatePaths, List<Path> githubCandidatePaths) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StructureTarget resolve(Identifier sourceLocation, String rawTarget) ` | 基于 markdown 源文档位置解析显式或相对的结构引用。<br>末尾返回 ` new StructureTarget(location, trimmed, previewPaths, githubPaths) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L824) |
| ` public StructureTarget(Identifier location, String displayPath, List<String> previewCandidatePaths, List<Path> githubCandidatePaths) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public String displayPath() ` | 读取 record 分量 ` displayPath ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public List<String> previewCandidatePaths() ` | 读取 record 分量 ` previewCandidatePaths ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public List<Path> githubCandidatePaths() ` | 读取 record 分量 ` githubCandidatePaths ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L820) |

## MDNoticeBoxComponent

` public class MDNoticeBoxComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L23)

提示框组件（info、tip、warning、danger）。 渲染带背景颜色和边框的提示区块，用于强调特定类型的内容。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDNoticeBoxComponent(NoticeType type, List<MDComponent> contentComponents) ` | 创建提示框组件。<br>实现调用 ` super(buildComponentText(contentComponents)) `<br>实现调用 ` buildComponentText(contentComponents) `<br>实现调用 ` List.copyOf(contentComponents) `<br>[调用处 BuiltinExtensionComponents](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinExtensionComponents.java#L27) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L54) |
| ` @Override public void extractRenderState( MDRenderContext context ) ` | 实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L60) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` totalHeight + PADDING * 2 `<br>[调用处 MDNoticeBoxComponent.extractRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L74) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L100) |
| ` @Override @Nullable public Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | ` (mouseX < 0 \|\| mouseY < 0 \|\| this.contentComponents.isEmpty()) ` 成立时提前返回 ` null `<br>` (contentMouseX < 0 \|\| contentMouseY < 0) ` 成立时提前返回 ` null `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L112) |

## MDNoticeBoxComponent.NoticeType

` public enum NoticeType `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L33)

提示框类型与相关颜色配置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INFO ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L35) |
| ` TIP ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L36) |
| ` WARNING ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L37) |
| ` DANGER ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L38) |
| ` public Identifier getLayoutKey() ` | 末尾返回 ` this.layoutKey `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L33) |
| ` public int getBorderColor() ` | 末尾返回 ` this.borderColor `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L33) |
| ` public int getBackgroundColor() ` | 末尾返回 ` this.backgroundColor `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L33) |
| ` public static NoticeType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L33) |
| ` public static NoticeType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L33) |

## MDRecipeComponent

` public abstract class MDRecipeComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L33)

Markdown 配方渲染组件基类。 该组件由扩展标签 &lt;recipe id="namespace:path"/&gt; 创建， 负责在文档中渲染某个配方对应的 GUI 贴图与配方内容。 配方类型到具体组件的映射通过 dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries#RECIPE\_COMPONENT\_FACTORY\_REGISTRY 动态查找。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDRecipeComponent(Identifier imageLocation, int width, int height, boolean enableAlignCenter) ` | 创建配方组件。<br>实现调用 ` super(imageLocation, false, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L47) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 解析 recipe 扩展标签。 要求参数中包含 id，其值应为合法的 Identifier。<br>末尾返回 ` new MDRecipeComponentProxy(location, enableAlignCenter) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L79) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).width() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L86) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 返回图片在目标区域中的渲染高度。<br>末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L95) |
| ` public int getWidth() ` | 原始材质尺寸宽度（像素）。<br>末尾返回 ` this.width `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L33) |
| ` public int getHeight() ` | 原始材质尺寸高度（像素）。<br>末尾返回 ` this.height `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L33) |

## MDRecipeComponent.RecipeComponentFactory

` public interface RecipeComponentFactory<T extends Recipe<?>> extends dev.anvilcraft.resource.ageratum.client.layout.LayoutResourceProvider `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L104)

不同 RecipeType 到具体渲染组件的工厂接口。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` List<RecipeType<? extends T>> type() ` | 当前工厂支持的配方类型。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L108) |
| ` MDRecipeComponent create(T recipe, boolean enableAlignCenter) ` | 由具体配方实例创建可渲染组件。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L113) |
| ` static <R extends Recipe<?>> RecipeComponentFactory<R> create( RecipeType<R> type, BiFunction<R, Boolean, MDRecipeComponent> function ) ` | 使用 lambda 快速构造工厂。<br>末尾返回 ` RecipeComponentFactory.create(function, type) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L118) |
| ` @SafeVarargs static <R extends Recipe<?>> RecipeComponentFactory<R> create( BiFunction<R, Boolean, MDRecipeComponent> function, RecipeType<? extends R>... types ) ` | 使用 lambda 快速构造工厂。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L128) |

## MDRowComponent

` public class MDRowComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L23)

行组件：row。 支持水平（并排）/垂直（堆叠）两种排列方式，并支持水平/垂直对齐。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDRowComponent( List<MDComponent> contentComponents, Direction direction, HorizontalAlign horizontalAlign, VerticalAlign verticalAlign ) ` | 实现调用 ` super(buildComponentText(contentComponents)) `<br>实现调用 ` buildComponentText(contentComponents) `<br>实现调用 ` List.copyOf(contentComponents) `<br>[调用处 MDRowComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L85) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L50) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 末尾返回 ` new MDRowComponent(context.renderedContent(), direction, horizontalAlign, verticalAlign) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L63) |
| ` @Override public void extractRenderState(MDRenderContext context) ` | 实现调用 ` this.contentComponents.isEmpty() `<br>分支 ` (this.direction == Direction.VERTICAL) ` 内调用 ` this.renderVertical(context) `<br>分支 ` !(this.direction == Direction.VERTICAL) ` 内调用 ` this.renderHorizontal(context) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L88) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | ` (this.contentComponents.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` height ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L157) |
| ` @Override @Nullable public Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | ` (hit == null) ` 成立时提前返回 ` null `<br>末尾返回 ` hit.component.getStyleAtPosition( minecraft, mouseX - hit.x, mouseY - hit.y, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L243) |
| ` @Override public boolean mouseScrolled(Minecraft minecraft, double mouseX, double mouseY, double scrollY, int maxX) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.mouseScrolled( minecraft, mouseX - hit.x, mouseY - hit.y, scrollY, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L258) |
| ` @Override public java.util.function.DoublePredicate scrollHandler(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | 末尾返回 ` hit == null ? delta -> false : hit.component.scrollHandler(minecraft, mouseX - hit.x, mouseY - hit.y, hit.width) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L273) |
| ` @Override public boolean mouseClicked(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (hit == null \|\| !hit.component.mouseClicked(minecraft, mouseX - hit.x, mouseY - hit.y, button, hit.width)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L280) |
| ` @Override public boolean mouseDragged( Minecraft minecraft, double mouseX, double mouseY, int button, double dragX, double dragY, int maxX ) ` | 末尾返回 ` hit != null && button == this.activeMouseButton && hit.component.mouseDragged( minecraft, mouseX - hit.x, mouseY - hit.y, button, dragX, dragY, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L291) |
| ` @Override public boolean mouseReleased(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (hit == null \|\| button != this.activeMouseButton) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.mouseReleased(minecraft, mouseX - hit.x, mouseY - hit.y, button, hit.width) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L301) |
| ` @Override public boolean keyPressed( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.keyPressed( minecraft, mouseX - hit.x, mouseY - hit.y, keyCode, scanCode, modifiers, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L310) |
| ` @Override public boolean blocksParentKeyHandling( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.blocksParentKeyHandling( minecraft, mouseX - hit.x, mouseY - hit.y, keyCode, scanCode, modifiers, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L335) |

## MDRowComponent.Direction

` public enum Direction `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` HORIZONTAL ` | 声明于枚举 ` MDRowComponent.Direction ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L27) |
| ` VERTICAL ` | 声明于枚举 ` MDRowComponent.Direction ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L28) |
| ` public static Direction[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L26) |
| ` public static Direction valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L26) |

## MDRowComponent.HorizontalAlign

` public enum HorizontalAlign `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LEFT ` | 声明于枚举 ` MDRowComponent.HorizontalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L32) |
| ` CENTER ` | 声明于枚举 ` MDRowComponent.HorizontalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L33) |
| ` RIGHT ` | 声明于枚举 ` MDRowComponent.HorizontalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L34) |
| ` public static HorizontalAlign[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L31) |
| ` public static HorizontalAlign valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L31) |

## MDRowComponent.VerticalAlign

` public enum VerticalAlign `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TOP ` | 声明于枚举 ` MDRowComponent.VerticalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L38) |
| ` CENTER ` | 声明于枚举 ` MDRowComponent.VerticalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L39) |
| ` BOTTOM ` | 声明于枚举 ` MDRowComponent.VerticalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L40) |
| ` public static VerticalAlign[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L37) |
| ` public static VerticalAlign valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L37) |
