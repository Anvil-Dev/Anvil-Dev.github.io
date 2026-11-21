# dev.dubhe.anvilcraft.client.gui.component（SwitchableButton.OnPress 至 TriStateButton）



## SwitchableButton.OnPress

` public interface OnPress extends Button.OnPress, Consumer<Button>, BiConsumer<Button, Integer> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L140)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onPress(Button button, int index) ` | [调用处 SwitchableButton.OnPress.onPress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L146) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L141) |
| ` @Override default void onPress(Button button) ` | 分支 ` (button instanceof SwitchableButton stButton) ` 内调用 ` this.onPress(stButton, stButton.current) `<br>[调用处 SwitchableButton.OnPress.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L143) |
| ` @Override default void accept(Button button) ` | 执行 ` this.onPress(button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L150) |
| ` @Override default void accept(Button button, Integer index) ` | 执行 ` this.onPress(button, index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L155) |

## TeslaTowerButton

` public class TeslaTowerButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaTowerButton( int x, int y, int index, int variant, OnPress onPress, TeslaTowerScreen parent, String textureVariant ) ` | 主动静音器 screen 的按钮<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, var -> parent.getFilterTitle(index, variant).copy()) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui("machine/active_silencer/button_%s".formatted(textureVariant)) `<br>[调用处 TeslaTowerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/TeslaTowerScreen.java#L198) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L34) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.parent.getFilterText() `<br>实现调用 ` this.parent.getFilterToolTipAt(this.index, this.variant) `<br>实现调用 ` this.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L60) |
| ` public void renderTexture( GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(texture, x, y, puOffset, i, width, height, textureWidth, textureHeight) `<br>[调用处 TeslaTowerButton.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L109) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L21) |

## TextWidget

` public class TextWidget extends StringWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TextWidget(int x, int y, int width, int height, Font font, TextProvider provider) ` | 实现调用 ` super(x, y, width, height, Component.empty(), font) `<br>实现调用 ` Component.empty() `<br>[调用处 ExpCollectorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L32) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L14) |
| ` @Override public Component getMessage() ` | 末尾返回 ` this.provider.get() `<br>[调用处 TextWidget.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L19) |
| ` @Override public TextWidget alignLeft() ` | 末尾返回 ` (TextWidget) super.alignLeft() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L28) |
| ` @Override public TextWidget alignCenter() ` | 末尾返回 ` (TextWidget) super.alignCenter() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L34) |
| ` @Override public TextWidget alignRight() ` | 末尾返回 ` (TextWidget) super.alignRight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L40) |
| ` public TextWidget setRenderMode(RenderMode mode) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L46) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.getMessage() `<br>实现调用 ` this.getFont() `<br>实现调用 ` super.renderWidget(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L51) |

## TextWidget.RenderMode

` public enum RenderMode `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L106)

文字渲染模式

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` DEFAULT ` | 默认模式 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L110) |
| ` CLIP ` | 默认，不对文本进行操作 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L114) |
| ` SCROLLING ` | 滚动模式，使文本左右移动 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L118) |
| ` SCALED ` | 缩放模式，若文本某方向超出设定范围，则将文本在该方向上缩放 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L122) |
| ` public static RenderMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L106) |
| ` public static RenderMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L106) |

## TextWidget.TextProvider

` public interface TextProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L98)

获取Widget文字

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Component get() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L100) |

## Texture10xButton

` public class Texture10xButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Texture10xButton.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Texture10xButton(int x, int y, String path, Button.CreateNarration narration, OnPress onPress) ` | 物品收集器 screen 的加减按钮<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, narration) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui(path) `<br>[调用处 ExpCollectorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Texture10xButton.java#L16) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 执行 ` this.renderTexture(guiGraphics, this.texture, this.getX(), this.getY(), 0, 0, 10, this.width, this.height, 10, 20) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Texture10xButton.java#L21) |
| ` public void renderTexture( GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(texture, x, y, puOffset, i, width, height, textureWidth, textureHeight) `<br>[调用处 Texture10xButton.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Texture10xButton.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Texture10xButton.java#L26) |

## TexturedButton

` public class TexturedButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TexturedButton( int x, int y, int width, int height, ResourceLocation texture, int texYDiff, int textureWidth, int textureHeight, OnPress onPress ) ` | 执行 ` this(x, y, width, height, texture, texYDiff, textureWidth, textureHeight, onPress, Component.empty()) `<br>[调用处 CategorySettingsScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L170) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L19) |
| ` public TexturedButton( int x, int y, int width, int height, ResourceLocation texture, int texYDiff, int textureWidth, int textureHeight, OnPress onPress, Component message ) ` | 执行 ` this(x, y, width, height, texture, texYDiff, textureWidth, textureHeight, onPress, message, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L33) |
| ` public TexturedButton( int x, int y, int width, int height, ResourceLocation texture, int texYDiff, int textureWidth, int textureHeight, OnPress onPress, @Nullable OnPress rightPress ) ` | 执行 ` this(x, y, width, height, texture, texYDiff, textureWidth, textureHeight, onPress, Component.empty(), rightPress) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L48) |
| ` public TexturedButton( int x, int y, int width, int height, ResourceLocation texture, int texYDiff, int textureWidth, int textureHeight, OnPress onPress, Component message, @Nullable OnPress rightPress ) ` | 实现调用 ` super(x, y, width, height, message, onPress, DEFAULT_NARRATION) `<br>[调用处 CategoryList.createSettingButton](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L63) |
| ` @Override public void onClick(double mouseX, double mouseY, int button) ` | 分支 ` (button == 1 && this.rightPress != null) ` 内调用 ` this.rightPress.onPress(this) `<br>实现调用 ` this.onClick(mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L90) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isMouseOver(mouseX, mouseY) `<br>实现调用 ` this.getX() `<br>实现调用 ` this.getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L100) |
| ` public OnPress getOnPress() ` | 末尾返回 ` this.onPress ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L114) |

## ToggleButton

` public class ToggleButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L18)

两状态切换按钮:默认、悬停 贴图垂直排列:默认(上)、悬停(下) 点击后切换到另一张贴图

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ToggleButton( int x, int y, int width, int height, ResourceLocation texture, int texWidth, int texHeight, Consumer<ToggleButton> onPress, List<Component> tooltips ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), btn -> { }, DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L31) |
| ` @SuppressWarnings("checkstyle:LocalVariableName") @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isMouseOver(mouseX, mouseY) `<br>实现调用 ` this.getX() `<br>实现调用 ` this.getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L46) |
| ` @Override public void onClick(double mouseX, double mouseY) ` | 分支 ` (this.onPress != null) ` 内调用 ` this.onPress.accept(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L59) |
| ` public void setTexture(final ResourceLocation texture) ` | 执行 ` this.texture = texture `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L18) |
| ` public boolean isSelected() ` | 末尾返回 ` this.selected `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L18) |
| ` public void setSelected(final boolean selected) ` | 执行 ` this.selected = selected `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L18) |
| ` public List<Component> getTooltips() ` | 末尾返回 ` this.tooltips `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L18) |
| ` public void setTooltips(final List<Component> tooltips) ` | 执行 ` this.tooltips = tooltips `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L18) |

## TriStateButton

` public class TriStateButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L17)

三层状态按钮:默认、悬停、选中 贴图垂直排列:默认(上)、悬停(中)、选中(下)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TriStateButton( int x, int y, int width, int height, ResourceLocation texture, int texWidth, int texHeight, Consumer<TriStateButton> onPress, List<Component> tooltips ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), btn -> { }, DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() `<br>[调用处 CreativeLaserScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L30) |
| ` @SuppressWarnings("checkstyle:LocalVariableName") @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isMouseOver(mouseX, mouseY) `<br>实现调用 ` this.getX() `<br>实现调用 ` this.getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L45) |
| ` @Override public void onClick(double mouseX, double mouseY) ` | 分支 ` (this.onPress != null) ` 内调用 ` this.onPress.accept(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L63) |
| ` public void setTexture(final ResourceLocation texture) ` | 执行 ` this.texture = texture `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L17) |
| ` public boolean isSelected() ` | 末尾返回 ` this.selected `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L17) |
| ` public void setSelected(final boolean selected) ` | 执行 ` this.selected = selected `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L17) |
| ` public List<Component> getTooltips() ` | 末尾返回 ` this.tooltips `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L17) |
| ` public void setTooltips(final List<Component> tooltips) ` | 执行 ` this.tooltips = tooltips `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L17) |
