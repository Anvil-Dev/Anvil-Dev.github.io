# dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend



## MDBlockComponent

` public class MDBlockComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L41)

方块渲染组件。 外观与 item 组件保持一致，使用槽位背景 + 16x16 方块预览。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDBlockComponent(ResourceLocation blockLoc, Map<String, String> stateProps, boolean showText) ` | 实现调用 ` super(MDItemComponent.SLOT_COMPONENT_TEXTURE, false, true) `<br>[调用处 MDBlockComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L221) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L55) |
| ` @Override public boolean keyPressed( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L124) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` Math.max(32, textWidth) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L180) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L186) |
| ` public static MDComponent parse(MDExtensionContext context) ` | ` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：block 需要 id 参数]") `<br>末尾返回 ` new MDBlockComponent(id, stateProps, showText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java#L206) |

## MDDirectoryComponent

` public final class MDDirectoryComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDDirectoryComponent.java#L14)

目录扩展组件占位符。 对应 Markdown 扩展标签 &lt;directory&gt; 或 &lt;directory/&gt;。 实际目录内容需要在整篇文档解析完成后，由 MarkdownParser 根据全部标题生成。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation ID ` | Directory component registry ID.<br>初值 ` ResourceLocation.fromNamespaceAndPath("ageratum", "directory") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDDirectoryComponent.java#L18) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 创建目录扩展组件占位符。<br>末尾返回 ` new MDDirectoryComponent() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDDirectoryComponent.java#L23) |

## MDEntityComponent

` public final class MDEntityComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L38)

实体展示组件，使用背包界面同款实体预览渲染。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDEntityComponent(ResourceLocation entityId, CompoundTag entityNbt, boolean showText) ` | 实现调用 ` super(Component.literal("[entity load failed]").withStyle(ChatFormatting.RED)) `<br>实现调用 ` Component.literal("[entity load failed]").withStyle(ChatFormatting.RED) `<br>实现调用 ` Component.literal("[entity load failed]") `<br>[调用处 MDEntityComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L261) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L46) |
| ` @Override public void render(MDRenderContext context) ` | 实现调用 ` context.graphics() `<br>实现调用 ` context.minecraft() `<br>实现调用 ` this.getEntity() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L53) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | ` (entity == null) ` 成立时提前返回 ` super.getPreferredWidth(minecraft, maxX, maxY) `<br>末尾返回 ` Math.max(this.getContentWidth(maxX), textWidth) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L102) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | ` (entity == null) ` 成立时提前返回 ` super.getHeight(minecraft, maxX, maxY) `<br>末尾返回 ` this.getContentHeight() + textHeight + 2 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L110) |
| ` public static MDComponent parse(MDExtensionContext context) ` | ` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：entity 需要 id 参数]") `<br>末尾返回 ` new MDEntityComponent(id, nbt, showText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java#L239) |

## MDItemComponent

` public class MDItemComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation SLOT_COMPONENT_TEXTURE ` | 初值 ` Ageratum.location("textures/gui/component/slot.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L35) |
| ` public MDItemComponent(ResourceLocation itemLoc, int count, @Nullable JsonElement components, boolean showText) ` | 实现调用 ` super(MDItemComponent.SLOT_COMPONENT_TEXTURE, false, true) `<br>[调用处 MDItemComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L134) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L44) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` Math.max(32, textWidth) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L99) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L105) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 解析结构扩展标签。<br>` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：item 需要 id 参数]") `<br>末尾返回 ` new MDItemComponent(id, count, element, showText) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java#L115) |

## MDLatexComponent

` public class MDLatexComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L38)

LaTeX 扩展组件，使用 CodeCogs 渲染远程 PNG 并缓存到本地。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void render(MDRenderContext context) ` | 实现调用 ` this.ensureTextureState(context.minecraft()) `<br>实现调用 ` context.minecraft() `<br>分支 ` (state.status == LatexStatus.READY) ` 内调用 ` super.render(context) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L59) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | ` (state.status != LatexStatus.READY) ` 成立时提前返回 ` minecraft.font.lineHeight `<br>末尾返回 ` super.getHeight(minecraft, maxX, maxY) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L75) |
| ` public static @Nullable MDComponent parseLegacyLine(String text) ` | ` (!matcher.matches()) ` 成立时提前返回 ` null `<br>` (formula.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` createFromFormula(formula, getLegacyScale(delimiter), 150, "000000", true) `<br>[调用处 MarkdownParser.registerBaseComponentParser](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java#L80) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L241) |
| ` public static MDComponent parse(MDExtensionContext context) ` | ` (formula == null \|\| formula.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：latex 需要 formula 参数]") `<br>末尾返回 ` createFromFormula(formula, scale, dpi, color, center) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java#L254) |

## MDNBTStructureComponent

` public final class MDNBTStructureComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L71)

NBT 结构文件渲染组件。 该组件由扩展标签 &lt;structure id="namespace:path"/&gt; 创建， 用于在文档中渲染结构文件摘要与 NBT 树状视图。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static MDComponent parse(MDExtensionContext context) ` | 解析结构扩展标签。<br>` (rawId == null \|\| rawId.isBlank()) ` 成立时提前返回 ` new MDTextComponent("[错误：structure 需要 id 或 path 参数]") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L121) |
| ` @Override public void render(MDRenderContext context) ` | 实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.graphics() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L135) |
| ` @Override public boolean keyPressed(Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX) ` | ` (this.previewLevel == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L250) |
| ` @Override public boolean blocksParentKeyHandling( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | 末尾返回 ` this.previewLevel != null && (keyCode == GLFW.GLFW_KEY_PAGE_UP \|\| keyCode == GLFW.GLFW_KEY_PAGE_DOWN) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L270) |
| ` @Override public boolean mouseScrolled(Minecraft minecraft, double mouseX, double mouseY, double scrollY, int maxX) ` | ` (scrollY == 0.0) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L283) |
| ` @Override public boolean mouseClicked(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (button != 0 && button != 1) ` 成立时提前返回 ` false `<br>` (this.isHoverExportButton(maxX, (float) mouseX, (float) mouseY) \|\| this.isHoverProjectionButton(maxX, (float) mouseX, (float) mouseY)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L294) |
| ` @Override public boolean mouseDragged(Minecraft minecraft, double mouseX, double mouseY, int button, double dragX, double dragY, int maxX) ` | ` (button != this.dragButton) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L351) |
| ` @Override public boolean mouseReleased(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (button != this.dragButton) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L385) |
| ` public int scale(int maxX, int value) ` | 末尾返回 ` Math.round(value * scale) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L560) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.contentHeight `<br>[调用处 MDNBTStructureComponent.render](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L151) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L565) |

## MDNBTStructureComponent.StructureTarget

` public record StructureTarget(ResourceLocation location, String displayPath, List<String> previewCandidatePaths) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StructureTarget resolve(ResourceLocation sourceLocation, String rawTarget) ` | 基于 markdown 源文档位置解析显式或相对的结构引用。<br>末尾返回 ` new StructureTarget(location, trimmed, previewPaths) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L907) |
| ` public StructureTarget(ResourceLocation location, String displayPath, List<String> previewCandidatePaths) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |
| ` public ResourceLocation location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |
| ` public String displayPath() ` | 读取 record 分量 ` displayPath ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |
| ` public List<String> previewCandidatePaths() ` | 读取 record 分量 ` previewCandidatePaths ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L903) |

## MDNoticeBoxComponent

` public class MDNoticeBoxComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L22)

提示框组件（info、tip、warning、danger）。 渲染带背景颜色和边框的提示区块，用于强调特定类型的内容。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDNoticeBoxComponent(NoticeType type, List<MDComponent> contentComponents) ` | 创建提示框组件。<br>实现调用 ` super(buildComponentText(contentComponents)) `<br>实现调用 ` buildComponentText(contentComponents) `<br>实现调用 ` List.copyOf(contentComponents) `<br>[调用处 BuiltinExtensionComponents](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinExtensionComponents.java#L28) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L51) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | ` (maxChildWidth > 0) ` 成立时提前返回 ` maxChildWidth + PADDING * 2 + BORDER_WIDTH `<br>末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L57) |
| ` @Override public void render( MDRenderContext context ) ` | 实现调用 ` context.minecraft() `<br>实现调用 ` context.maxX() `<br>实现调用 ` context.maxY() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L70) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` totalHeight + PADDING * 2 `<br>[调用处 MDNoticeBoxComponent.render](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L84) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L108) |
| ` @Override @Nullable public Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | ` (mouseX < 0 \|\| mouseY < 0 \|\| this.contentComponents.isEmpty()) ` 成立时提前返回 ` null `<br>` (contentMouseX < 0 \|\| contentMouseY < 0) ` 成立时提前返回 ` null `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L120) |

## MDNoticeBoxComponent.NoticeType

` public enum NoticeType `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L32)

提示框类型与相关颜色配置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INFO ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L34) |
| ` TIP ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L35) |
| ` WARNING ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L36) |
| ` DANGER ` | 声明于枚举 ` MDNoticeBoxComponent.NoticeType ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L37) |
| ` public int getBorderColor() ` | 末尾返回 ` this.borderColor `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L32) |
| ` public int getBackgroundColor() ` | 末尾返回 ` this.backgroundColor `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L32) |
| ` public static NoticeType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L32) |
| ` public static NoticeType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java#L32) |

## MDRecipeComponent

` public abstract class MDRecipeComponent extends MDImageComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L38)

Markdown 配方渲染组件基类。 该组件由扩展标签 &lt;recipe id="namespace:path"/&gt; 创建， 负责在文档中渲染某个配方对应的 GUI 贴图与配方内容。 配方类型到具体组件的映射通过 dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries#RECIPE\_COMPONENT\_FACTORY\_REGISTRY 动态查找。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDRecipeComponent(ResourceLocation imageLocation, int width, int height, boolean enableAlignCenter) ` | 创建配方组件。<br>实现调用 ` super(imageLocation, false, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L57) |
| ` @Override public boolean keyPressed( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L97) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 解析 recipe 扩展标签。 要求参数中包含 id，其值应为合法的 ResourceLocation。<br>末尾返回 ` new MDRecipeComponentProxy(location, enableAlignCenter) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L121) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | 末尾返回 ` this.computeRenderSize(size, maxX, maxY).width() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L128) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | 返回图片在目标区域中的渲染高度。<br>末尾返回 ` this.computeRenderSize(size, maxX, maxY).height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L137) |
| ` public int getWidth() ` | 原始材质尺寸宽度（像素）。<br>末尾返回 ` this.width `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L38) |
| ` public int getHeight() ` | 原始材质尺寸高度（像素）。<br>末尾返回 ` this.height `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L38) |
| ` @javax.annotation.Nullable public ResourceLocation getHoveredDocLink() ` | 当前鼠标悬停的配方物品绑定的文档位置，用于配方内 W 键跳转。<br>末尾返回 ` this.hoveredDocLink `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L38) |

## MDRecipeComponent.RecipeComponentFactory

` public interface RecipeComponentFactory<T extends Recipe<?>> `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L146)

不同 RecipeType 到具体渲染组件的工厂接口。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` List<RecipeType<? extends T>> type() ` | 当前工厂支持的配方类型。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L150) |
| ` MDRecipeComponent create(T recipe, boolean enableAlignCenter) ` | 由具体配方实例创建可渲染组件。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L155) |
| ` static <R extends Recipe<?>> RecipeComponentFactory<R> create( RecipeType<R> type, BiFunction<R, Boolean, MDRecipeComponent> function ) ` | 使用 lambda 快速构造工厂。<br>末尾返回 ` RecipeComponentFactory.create(function, type) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L160) |
| ` @SafeVarargs static <R extends Recipe<?>> RecipeComponentFactory<R> create( BiFunction<R, Boolean, MDRecipeComponent> function, RecipeType<? extends R>... types ) ` | 使用 lambda 快速构造工厂。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java#L170) |

## MDRowComponent

` public class MDRowComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L23)

行组件：row。 支持水平（并排）/垂直（堆叠）两种排列方式，并支持水平/垂直对齐。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDRowComponent( List<MDComponent> contentComponents, Direction direction, HorizontalAlign horizontalAlign, VerticalAlign verticalAlign ) ` | 实现调用 ` super(buildComponentText(contentComponents)) `<br>实现调用 ` buildComponentText(contentComponents) `<br>实现调用 ` List.copyOf(contentComponents) `<br>[调用处 MDRowComponent.parse](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L85) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L50) |
| ` public static MDComponent parse(MDExtensionContext context) ` | 末尾返回 ` new MDRowComponent(context.renderedContent(), direction, horizontalAlign, verticalAlign) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L63) |
| ` @Override public void render(MDRenderContext context) ` | 实现调用 ` this.contentComponents.isEmpty() `<br>分支 ` (this.direction == Direction.VERTICAL) ` 内调用 ` this.renderVertical(context) `<br>分支 ` !(this.direction == Direction.VERTICAL) ` 内调用 ` this.renderHorizontal(context) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L88) |
| ` @Override public int getHeight(Minecraft minecraft, int maxX, int maxY) ` | ` (this.contentComponents.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.max(0, height) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L195) |
| ` @Override public int getPreferredWidth(Minecraft minecraft, int maxX, int maxY) ` | ` (this.contentComponents.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` sum(preferredWidths) + SPACING * (this.contentComponents.size() - 1) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L235) |
| ` @Override @Nullable public Style getStyleAtPosition(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | ` (hit == null) ` 成立时提前返回 ` null `<br>末尾返回 ` hit.component.getStyleAtPosition( minecraft, mouseX - hit.x, mouseY - hit.y, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L296) |
| ` @Override public boolean mouseScrolled(Minecraft minecraft, double mouseX, double mouseY, double scrollY, int maxX) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.mouseScrolled( minecraft, mouseX - hit.x, mouseY - hit.y, scrollY, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L311) |
| ` @Override public java.util.function.DoublePredicate scrollHandler(Minecraft minecraft, double mouseX, double mouseY, int maxX) ` | 末尾返回 ` hit == null ? delta -> false : hit.component.scrollHandler(minecraft, mouseX - hit.x, mouseY - hit.y, hit.width) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L326) |
| ` @Override public boolean mouseClicked(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` handled ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L333) |
| ` @Override public boolean mouseDragged( Minecraft minecraft, double mouseX, double mouseY, int button, double dragX, double dragY, int maxX ) ` | ` (hit == null \|\| button != this.activeMouseButton) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.mouseDragged( minecraft, mouseX - hit.x, mouseY - hit.y, button, dragX, dragY, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L353) |
| ` @Override public boolean mouseReleased(Minecraft minecraft, double mouseX, double mouseY, int button, int maxX) ` | ` (hit == null \|\| button != this.activeMouseButton) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.mouseReleased( minecraft, mouseX - hit.x, mouseY - hit.y, button, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L378) |
| ` @Override public boolean keyPressed( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.keyPressed( minecraft, mouseX - hit.x, mouseY - hit.y, keyCode, scanCode, modifiers, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L395) |
| ` @Override public boolean blocksParentKeyHandling( Minecraft minecraft, double mouseX, double mouseY, int keyCode, int scanCode, int modifiers, int maxX ) ` | ` (hit == null) ` 成立时提前返回 ` false `<br>末尾返回 ` hit.component.blocksParentKeyHandling( minecraft, mouseX - hit.x, mouseY - hit.y, keyCode, scanCode, modifiers, hit.width ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L420) |

## MDRowComponent.Direction

` public enum Direction `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` HORIZONTAL ` | 声明于枚举 ` MDRowComponent.Direction ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L27) |
| ` VERTICAL ` | 声明于枚举 ` MDRowComponent.Direction ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L28) |
| ` public static Direction[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L26) |
| ` public static Direction valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L26) |

## MDRowComponent.HorizontalAlign

` public enum HorizontalAlign `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LEFT ` | 声明于枚举 ` MDRowComponent.HorizontalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L32) |
| ` CENTER ` | 声明于枚举 ` MDRowComponent.HorizontalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L33) |
| ` RIGHT ` | 声明于枚举 ` MDRowComponent.HorizontalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L34) |
| ` public static HorizontalAlign[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L31) |
| ` public static HorizontalAlign valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L31) |

## MDRowComponent.VerticalAlign

` public enum VerticalAlign `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TOP ` | 声明于枚举 ` MDRowComponent.VerticalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L38) |
| ` CENTER ` | 声明于枚举 ` MDRowComponent.VerticalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L39) |
| ` BOTTOM ` | 声明于枚举 ` MDRowComponent.VerticalAlign ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L40) |
| ` public static VerticalAlign[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L37) |
| ` public static VerticalAlign valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java#L37) |
