# dev.dubhe.anvilcraft.integration.jade.element



## GradientProgressElement

` public class GradientProgressElement extends ProgressOverlayElement `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/element/GradientProgressElement.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GradientProgressElement(int color) ` | 执行 ` this.color = color `<br>[调用处 PowerBlockClientProvider.appendTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/element/GradientProgressElement.java#L13) |
| ` @Override public @Nullable Component getNarration() ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/element/GradientProgressElement.java#L17) |
| ` @Override public void extractRenderState(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTicks) ` | 实现调用 ` Color.rgb(this.color) `<br>实现调用 ` Color.hsl(color.getHue(), color.getSaturation(), color.getLightness() * 0.7, color.getOpacity()).toInt() `<br>实现调用 ` Color.hsl(color.getHue(), color.getSaturation(), color.getLightness() * 0.7, color.getOpacity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/element/GradientProgressElement.java#L22) |
