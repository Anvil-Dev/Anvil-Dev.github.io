# dev.dubhe.anvilcraft.client.renderer.item.decoration



## TerminalInsertionDecoration

` public final class TerminalInsertionDecoration implements IItemDecorator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/TerminalInsertionDecoration.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean render(GuiGraphicsExtractor graphics, Font font, ItemStack stack, int x, int y) ` | ` (client.player == null \|\| !(client.screen instanceof AbstractContainerScreen<?> screen) \|\| screen instanceof StorageScreen \|\| !(stack.getItem() instanceof TerminalItem terminal)) ` 成立时提前返回 ` false `<br>` (carried.isEmpty() \|\| ItemStack.isSameItemSameComponents(stack, carried)) ` 成立时提前返回 ` false `<br>` (target == null) ` 成立时提前返回 ` false `<br>` (!inMenuSlot) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/TerminalInsertionDecoration.java#L15) |
| ` public TerminalInsertionDecoration() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerCustomItemDecorations](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L151) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/TerminalInsertionDecoration.java#L14) |

## WeatherproofChestplateDecoration

` public class WeatherproofChestplateDecoration implements IItemDecorator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/WeatherproofChestplateDecoration.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean render(GuiGraphicsExtractor guiGraphics, Font font, ItemStack stack, int offsetX, int offsetY) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/WeatherproofChestplateDecoration.java#L14) |
| ` public WeatherproofChestplateDecoration() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerCustomItemDecorations](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L150) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/WeatherproofChestplateDecoration.java#L10) |
