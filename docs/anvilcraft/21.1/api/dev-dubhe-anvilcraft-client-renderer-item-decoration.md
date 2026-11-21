# dev.dubhe.anvilcraft.client.renderer.item.decoration



## TerminalInsertionDecoration

` public class TerminalInsertionDecoration implements IItemDecorator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/TerminalInsertionDecoration.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean render(GuiGraphics guiGraphics, Font font, ItemStack stack, int offsetX, int offsetY) ` | ` (minecraft.player == null) ` 成立时提前返回 ` false `<br>` (!(minecraft.screen instanceof AbstractContainerScreen<?> containerScreen)) ` 成立时提前返回 ` false `<br>` (minecraft.screen instanceof StorageScreen) ` 成立时提前返回 ` false `<br>` (carried.isEmpty() \|\| ItemStack.isSameItemSameComponents(stack, carried)) ` 成立时提前返回 ` false `<br>` (targetId == null) ` 成立时提前返回 ` false `<br>` (!inMenuSlot) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/TerminalInsertionDecoration.java#L21) |
| ` public TerminalInsertionDecoration() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerCustomItemDecorations](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L136) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/TerminalInsertionDecoration.java#L20) |

## WeatherproofChestplateDecoration

` public class WeatherproofChestplateDecoration implements IItemDecorator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/WeatherproofChestplateDecoration.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean render(GuiGraphics guiGraphics, Font font, ItemStack stack, int offsetX, int offsetY) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/WeatherproofChestplateDecoration.java#L14) |
| ` public WeatherproofChestplateDecoration() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerCustomItemDecorations](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L135) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/decoration/WeatherproofChestplateDecoration.java#L10) |
