# dev.dubhe.anvilcraft.integration.jei.util（PocketGuiHandler 至 PocketGuiHandler）



## PocketGuiHandler

` public class PocketGuiHandler<T extends AbstractContainerScreen<?>> implements IGuiContainerHandler<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/util/PocketGuiHandler.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public List<Rect2i> getGuiExtraAreas(T screen) ` | ` (player == null) ` 成立时提前返回 ` List.of() `<br>` (creative && !((CreativeModeInventoryScreen) screen).isInventoryOpen()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` areas(screen.getLeftPos(), screen.getTopPos(), screen.getImageWidth(), PocketInventory.capacity(player), creative) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/util/PocketGuiHandler.java#L14) |
| ` public static List<Rect2i> areas(int left, int top, int imageWidth, int capacity, boolean creative) ` | ` (capacity == 0) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.of(new Rect2i(left - width - 2, posY, width, 73), new Rect2i(left + imageWidth + 2, posY, width, 73)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/util/PocketGuiHandler.java#L23) |
| ` public PocketGuiHandler() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerGuiHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L345) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/util/PocketGuiHandler.java#L13) |
