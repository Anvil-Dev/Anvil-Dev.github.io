# dev.dubhe.anvilcraft.client.gui.component.category



## CategoryButton

` public class CategoryButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier BACKGROUND ` | 初值 ` SharedTextures.textureGui("misc/storage_station/category") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L29) |
| ` public void setCompact(boolean compact) ` | 实现调用 ` this.setWidth(compact ? 20 : 86) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L37) |
| ` public CategoryButton(int x, PlayerSetting setting, int index, CategoryMode mode, OnPress onPress) ` | 实现调用 ` super(x, 0, 86, 20, Component.empty(), onPress, Button.DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() `<br>[调用处 CategoryList.rebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L42) |
| ` @Override public void onPress(InputWithModifiers input) ` | 实现调用 ` this.entry().changeMode(input instanceof MouseButtonEvent event && event.button() == 1) `<br>实现调用 ` this.entry() `<br>实现调用 ` event.button() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L57) |
| ` public Font getFont() ` | 末尾返回 ` this.font `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |
| ` public PlayerSetting getSetting() ` | 末尾返回 ` this.setting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |
| ` public CategoryMode getMode() ` | 末尾返回 ` this.mode `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |
| ` public boolean isCompact() ` | 末尾返回 ` this.compact `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |
| ` public void setMode(final CategoryMode mode) ` | 执行 ` this.mode = mode `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |

## CategoryList

` public class CategoryList extends AbstractContainerWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier SMALL_SLIDER ` | 初值 ` SharedTextures.textureGui("misc/storage_station/slider_small") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L25) |
| ` public CategoryList(int x, int y, PlayerSetting setting, Button.OnPress categoryOnPress, Button.OnPress openSetting) ` | 实现调用 ` super(x, y, 92, 160, Component.empty(), AbstractScrollArea.defaultSettings(1)) `<br>实现调用 ` Component.empty() `<br>实现调用 ` AbstractScrollArea.defaultSettings(1) `<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L424) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L55) |
| ` public void rebuild(PlayerSetting setting) ` | 实现调用 ` this.categoryButtons.clear() `<br>实现调用 ` this.cache.clear() `<br>实现调用 ` setting.listed() `<br>[调用处 CategoryList.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L77) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L89) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L104) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dx, double dy) ` | 末尾返回 ` super.mouseDragged(event, dx, dy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L114) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.isMouseOver(mouseX, mouseY) \|\| !this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L124) |
| ` @Override public List<Button> children() ` | ` (this.cache.size() == this.categoryButtons.size() + 1) ` 成立时提前返回 ` this.cache `<br>末尾返回 ` this.cache `<br>[调用处 CategoryList.mouseClicked](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L179) |
| ` public void setCompact(boolean compact, PlayerSetting setting) ` | 实现调用 ` this.getX() `<br>实现调用 ` this.getY() `<br>实现调用 ` SharedTextures.textureGui("misc/storage_station/category_setting_small") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L202) |
