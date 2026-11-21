# dev.dubhe.anvilcraft.client.gui.component（TextWidget 至 TriStateButton）



## TextWidget

` public class TextWidget extends StringWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TextWidget(int x, int y, int width, int height, Font font, TextProvider provider) ` | 实现调用 ` super(x, y, width, height, Component.empty(), font) `<br>实现调用 ` Component.empty() `<br>[调用处 ExpCollectorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L34) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L15) |
| ` @Override public Component getMessage() ` | 末尾返回 ` this.provider.get() `<br>[调用处 TextWidget.extractWidgetRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L20) |
| ` public TextWidget alignLeft() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L29) |
| ` public TextWidget alignCenter() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L34) |
| ` public TextWidget alignRight() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L39) |
| ` public TextWidget setRenderMode(RenderMode mode) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L44) |
| ` @Override public void extractWidgetRenderState(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` this.getMessage() `<br>实现调用 ` this.getFont() `<br>实现调用 ` this.getWidth() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L49) |

## TextWidget.RenderMode

` public enum RenderMode `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L105)

文字渲染模式

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` DEFAULT ` | 默认模式 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L107) |
| ` CLIP ` | 默认，不对文本进行操作 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L109) |
| ` SCROLLING ` | 滚动模式，使文本左右移动 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L111) |
| ` SCALED ` | 缩放模式，若文本某方向超出设定范围，则将文本在该方向上缩放 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L113) |
| ` public static RenderMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L105) |
| ` public static RenderMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L105) |

## TextWidget.TextProvider

` public interface TextProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L99)

获取Widget文字

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Component get() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TextWidget.java#L101) |

## TexturedButton

` public class TexturedButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TexturedButton( int x, int y, int width, int height, Identifier texture, int texYDiff, int textureWidth, int textureHeight, OnPress onPress ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), onPress, Button.DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() `<br>[调用处 CategoryList.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L15) |
| ` public TexturedButton( int x, int y, int width, int height, Identifier texture, int texYDiff, int textureWidth, int textureHeight, OnPress onPress, Component message ) ` | 实现调用 ` super(x, y, width, height, message, onPress, Button.DEFAULT_NARRATION) `<br>[调用处 IntegrationScreen.BaseIntegrationEntry.createButton](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L177) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L34) |
| ` public void renderContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 执行 ` this.extractContents(graphics, mouseX, mouseY, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TexturedButton.java#L85) |

## ToggleButton

` public class ToggleButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ToggleButton( int x, int y, int width, int height, Identifier texture, int textureWidth, int textureHeight, OnPress onPress, List<Component> tooltips ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), onPress, Button.DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L19) |
| ` public void setSelected(boolean selected) ` | 执行 ` this.selected = selected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L38) |
| ` public boolean isSelected() ` | 末尾返回 ` this.selected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L42) |
| ` public void setTexture(Identifier texture) ` | 执行 ` this.texture = texture ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L46) |
| ` public void setTooltips(List<Component> tooltips) ` | 执行 ` this.tooltips = tooltips ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L50) |
| ` public List<Component> getTooltips() ` | 末尾返回 ` this.tooltips ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ToggleButton.java#L54) |

## TriStateButton

` public class TriStateButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TriStateButton( int x, int y, int width, int height, Identifier texture, int textureWidth, int textureHeight, OnPress onPress, List<Component> tooltips ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), onPress, Button.DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() `<br>[调用处 CreativeLaserScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L78) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L19) |
| ` public void setSelected(boolean selected) ` | 执行 ` this.selected = selected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L38) |
| ` public boolean isSelected() ` | 末尾返回 ` this.selected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L42) |
| ` public void setTooltips(List<Component> tooltips) ` | 执行 ` this.tooltips = tooltips ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L46) |
| ` public List<Component> getTooltips() ` | 末尾返回 ` this.tooltips ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L50) |
| ` public void setTexture(Identifier texture) ` | 执行 ` this.texture = texture ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TriStateButton.java#L54) |
