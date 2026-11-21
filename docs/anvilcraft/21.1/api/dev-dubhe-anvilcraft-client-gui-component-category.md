# dev.dubhe.anvilcraft.client.gui.component.category



## CategoryButton

` public class CategoryButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation NORMAL ` | 初值 ` StorageScreen.texture("category") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L25) |
| ` public static final ResourceLocation SMALL ` | 初值 ` StorageScreen.texture("category_small") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L26) |
| ` public CategoryButton(CategoryList.ButtonInfo info, PlayerSetting setting, int index, CategoryMode mode, OnPress onPress) ` | 实现调用 ` super(0, 0, info.width(), info.height(), Component.empty(), onPress, DEFAULT_NARRATION) `<br>实现调用 ` info.width() `<br>实现调用 ` info.height() `<br>[调用处 CategoryList.rebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L116) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L33) |
| ` public void renderIcon(GuiGraphics graphics, int extraX) ` | 实现调用 ` this.entry().getCategory() `<br>实现调用 ` this.entry() `<br>实现调用 ` graphics.pose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L85) |
| ` public void renderName(GuiGraphics graphics) ` | 实现调用 ` this.entry().getCategory() `<br>实现调用 ` this.entry() `<br>实现调用 ` category.name() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L101) |
| ` @Override public void onClick(double mouseX, double mouseY, int button) ` | 实现调用 ` this.entry().changeMode(button == 1) `<br>实现调用 ` this.entry() `<br>实现调用 ` super.onClick(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L110) |
| ` public Font getFont() ` | 末尾返回 ` this.font `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22) |
| ` public CategoryList.ButtonInfo getInfo() ` | 末尾返回 ` this.info `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22) |
| ` public PlayerSetting getSetting() ` | 末尾返回 ` this.setting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22) |
| ` public CategoryMode getMode() ` | 末尾返回 ` this.mode `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22) |
| ` public void setMode(final CategoryMode mode) ` | 执行 ` this.mode = mode `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L22) |

## CategoryButton.ExtraRenderer

` public interface ExtraRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L121)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ExtraRenderer NOOP ` | 初值 ` (btn, graphics, mouseX, mouseY, partialTick) -> { } ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L122) |
| ` void render(CategoryButton btn, GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L124) |

## CategoryList

` public class CategoryList extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation SLIDER ` | 初值 ` StorageScreen.texture("slider_small") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L24) |
| ` public CategoryList(int x, int y, ButtonInfo info, PlayerSetting setting, Button.OnPress categoryOnPress, Button.OnPress openSetting) ` | 实现调用 ` super( x, y, CategoryList.calculateWidth(info), CategoryList.calculateHeight(info), Component.empty() ) `<br>实现调用 ` CategoryList.calculateWidth(info) `<br>实现调用 ` CategoryList.calculateHeight(info) `<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L637) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L53) |
| ` public void rebuild(ButtonInfo info, PlayerSetting setting) ` | 实现调用 ` this.settingButton.getX() `<br>实现调用 ` this.settingButton.getY() `<br>实现调用 ` this.settingButton.getOnPress() `<br>[调用处 CategoryList.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L99) |
| ` public void rebuild(PlayerSetting setting) ` | 实现调用 ` this.categoryButtons.clear() `<br>实现调用 ` setting.listed() `<br>实现调用 ` listed.size() `<br>[调用处 CategoryList.rebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L108) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L111) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L128) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L150) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L159) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L169) |

## CategoryList.ButtonInfo

` public record ButtonInfo(int row, int rowGap, int column, int columnGap, ResourceLocation button, ResourceLocation setting, int width, int height, CategoryButton.ExtraRenderer extraRenderer) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L239)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ButtonInfo( int row, int column, int columnGap, ResourceLocation button, ResourceLocation setting, int width, int height, CategoryButton.ExtraRenderer extraRenderer ) ` | 执行 ` this(row, 0, column, columnGap, button, setting, width, height, extraRenderer) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L250) |
| ` public ButtonInfo( int row, int column, ResourceLocation button, ResourceLocation setting, int width, int height, CategoryButton.ExtraRenderer extraRenderer ) ` | 执行 ` this(row, 0, column, 0, button, setting, width, height, extraRenderer) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L263) |
| ` public static ButtonInfo normal() ` | [调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L634) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L275) |
| ` public static ButtonInfo small() ` | 末尾返回 ` new ButtonInfo( 3, 4, 2, CategoryButton.SMALL, CategoryList.SETTING_SMALL, 20, 20, (btn, graphics, mouseX, mouseY, partialTick) -> btn.renderIcon(graphics, 5) ) `<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L635) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L290) |
| ` public int buttons() ` | 末尾返回 ` this.row() * this.column() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L303) |
| ` public int row() ` | 读取 record 分量 ` row `<br>[调用处 CategoryList.ButtonInfo.buttons](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L304) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L240) |
| ` public int rowGap() ` | 读取 record 分量 ` rowGap ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L241) |
| ` public int column() ` | 读取 record 分量 ` column `<br>[调用处 CategoryList.ButtonInfo.buttons](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L304) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L242) |
| ` public int columnGap() ` | 读取 record 分量 ` columnGap ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L243) |
| ` public ResourceLocation button() ` | 读取 record 分量 ` button ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L244) |
| ` public ResourceLocation setting() ` | 读取 record 分量 ` setting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L245) |
| ` public int width() ` | 读取 record 分量 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L246) |
| ` public int height() ` | 读取 record 分量 ` height ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L247) |
| ` public CategoryButton.ExtraRenderer extraRenderer() ` | 读取 record 分量 ` extraRenderer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L248) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L239) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L239) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryList.java#L239) |
