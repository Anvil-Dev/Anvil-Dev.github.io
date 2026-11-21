# dev.dubhe.anvilcraft.client.gui.screen（CreativeLaserScreen 至 IntegrationScreen.AdditionalEntry）



## CreativeLaserScreen

` public class CreativeLaserScreen extends AbstractContainerScreen<CreativeLaserMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier BACKGROUND ` | 初值 ` SharedTextures.bg("machine", "creative_laser") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L27) |
| ` public CreativeLaserScreen(CreativeLaserMenu menu, Inventory inventory, Component title) ` | 执行 ` super(menu, inventory, title, 176, 77) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L52) |
| ` public void setValue(int level, LensType lensType, boolean gamma) ` | 实现调用 ` Math.clamp(level, 0, 64) `<br>实现调用 ` this.lensButtons.isEmpty() `<br>分支 ` (!this.lensButtons.isEmpty()) ` 内调用 ` this.lensButtons.size() `<br>[调用处 CreativeLaserScreen.resize](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L222) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L146) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.init(width, height) `<br>实现调用 ` this.setValue(level, lensType, gamma) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L216) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L230) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L238) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L246) |
| ` @Override public void extractBackground(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() `<br>实现调用 ` super.extractBackground(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L254) |

## EmberAnvilScreen

` public class EmberAnvilScreen extends ItemCombinerScreen<EmberAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberAnvilScreen(EmberAnvilMenu menu, Inventory playerInventory, Component title) ` | 皇家铁砧 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, EmberAnvilScreen.BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L32) |
| ` @Override public void containerTick() ` | 执行 ` super.containerTick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L44) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.name.getValue() `<br>实现调用 ` this.init(width, height) `<br>实现调用 ` this.name.setValue(string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L66) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | ` (this.name.keyPressed(event) \|\| this.name.canConsumeInput()) ` 成立时提前返回 ` true `<br>末尾返回 ` super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L73) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.menu.getSlot(0).getItem().isEmpty() `<br>实现调用 ` this.menu.getSlot(0).getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L118) |
| ` @Override public void slotChanged( AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 0) ` 内调用 ` this.name.setValue(stack.isEmpty() ? "" : stack.getHoverName().getString()) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.isEmpty() `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.getHoverName().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L138) |

## EmberGrindstoneScreen

` public class EmberGrindstoneScreen extends AbstractContainerScreen<EmberGrindstoneMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberGrindstoneScreen(EmberGrindstoneMenu menu, Inventory playerInventory, @SuppressWarnings("unused") Component title) ` | 实现调用 ` super(menu, playerInventory, Component.translatable("screen.anvilcraft.ember_grindstone.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.ember_grindstone.title") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L59) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractEnchantmentSelectingArea(graphics, mouseX, mouseY, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L79) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L161) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 3) `<br>实现调用 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L198) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L204) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L232) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L242) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L252) |

## EmberSmithingScreen

` public class EmberSmithingScreen extends AdjacentSmithingScreen<EmberSmithingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final List<Identifier> EMPTY_SLOT_SMITHING_TEMPLATES ` | 初值 ` List.of( EmberSmithingScreen.EMPTY_SLOT_TWO_TO_ONE_SMITHING_TEMPLATE, EmberSmithingScreen.EMPTY_SLOT_FOUR_TO_ONE_SMITHING_TEMPLATE, EmberSmithingScreen.EMPTY_SLOT_EIGHT_TO_ONE_SMITHING_TEMPLATE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L41) |
| ` public EmberSmithingScreen(EmberSmithingMenu menu, Inventory inventory, Component title) ` | 余烬锻造台 GUI<br>参数 ` menu ` 菜单<br>参数 ` inventory ` 背包<br>参数 ` title ` 标题<br>执行 ` super(menu, inventory, title, EmberSmithingScreen.BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L65) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.getTemplateItem() `<br>实现调用 ` templateOp.isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L81) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractOnboardingTooltips(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L118) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.templateIcon.extractRenderState(this.menu, graphics, a, this.leftPos, this.topPos) `<br>实现调用 ` this.materialIcon.extractRenderState(this.menu, graphics, a, this.leftPos, this.topPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L124) |

## EnergyWeaponMakeScreen

` public class EnergyWeaponMakeScreen extends AbstractContainerScreen<EnergyWeaponMakeMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnergyWeaponMakeScreen(EnergyWeaponMakeMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title, 176, 175) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L58) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractSelectingArea(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractCantCraftBlink(graphics) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L97) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L218) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 3) `<br>实现调用 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L253) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L259) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L287) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L297) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L307) |

## ExpCollectorScreen

` public class ExpCollectorScreen extends AbstractContainerScreen<ExpCollectorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpCollectorScreen(ExpCollectorMenu menu, Inventory inventory, Component title) ` | 执行 ` super(menu, inventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L25) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L113) |

## FilterScreen

` public class FilterScreen extends AbstractContainerScreen<FilterMenu> implements IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterScreen(FilterMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L36) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L89) |
| ` @Override public Collection<Integer> getGhostSlots() ` | 末尾返回 ` IGhostIngredientScreen.range(36, 54, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L128) |
| ` @Override public void acceptGhost(Slot slot, ItemStack filterStack) ` | 实现调用 ` filterStack.get(ModComponents.FILTER_CONTENT) `<br>实现调用 ` content.getNestingLevel() `<br>实现调用 ` filterSlot.set(filterStack.copyWithCount(1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L133) |

## FrostAnvilScreen

` public class FrostAnvilScreen extends ItemCombinerScreen<FrostAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostAnvilScreen(FrostAnvilMenu menu, Inventory playerInventory, Component title) ` | 皇家铁砧 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, FrostAnvilScreen.BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L32) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.name.getValue() `<br>实现调用 ` this.init(width, height) `<br>实现调用 ` this.name.setValue(string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L61) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | ` (this.name.keyPressed(event) \|\| this.name.canConsumeInput()) ` 成立时提前返回 ` true `<br>末尾返回 ` super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L68) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.menu.getSlot(0).getItem().isEmpty() `<br>实现调用 ` this.menu.getSlot(0).getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L124) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 0) ` 内调用 ` this.name.setValue(stack.isEmpty() ? "" : stack.getHoverName().getString()) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.isEmpty() `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.getHoverName().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L144) |

## FrostGrindstoneScreen

` public class FrostGrindstoneScreen extends AbstractContainerScreen<FrostGrindstoneMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostGrindstoneScreen(FrostGrindstoneMenu menu, Inventory playerInventory, @SuppressWarnings("unused") Component title) ` | 实现调用 ` super(menu, playerInventory, Component.translatable("screen.anvilcraft.frost_grindstone.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.frost_grindstone.title") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L51) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractEnchantmentSelectingArea(graphics, mouseX, mouseY, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L75) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L134) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 3) `<br>实现调用 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L169) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L175) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L201) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L211) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L221) |

## FrostSmithingScreen

` public class FrostSmithingScreen extends AdjacentSmithingScreen<FrostSmithingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Quaternionf ARMOR_STAND_ANGLE ` | 初值 ` new Quaternionf().rotationXYZ(0.43633232F, 0.0F, (float) Math.PI) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L65) |
| ` public FrostSmithingScreen(FrostSmithingMenu menu, Inventory playerInventory, Component title) ` | 皇家锻造台 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, FrostSmithingScreen.BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L81) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.templateIcon.tick(FrostSmithingScreen.EMPTY_SLOT_SMITHING_TEMPLATES) `<br>实现调用 ` this.getPermutTemplateItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L138) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractOnboardingTooltips(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L171) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.templateIcon.extractRenderState(this.menu, graphics, a, this.leftPos, this.topPos) `<br>实现调用 ` this.materialIcon.extractRenderState(this.menu, graphics, a, this.leftPos, this.topPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L177) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 3) ` 内调用 ` this.updateArmorStandPreview(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L204) |

## IFilterScreen

` public interface IFilterScreen<T extends AbstractContainerMenu & IFilterMenu> extends IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L29)

有过滤的 GUI

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Component SCROLL_WHEEL_TO_CHANGE_STACK_LIMIT_TOOLTIP ` | 初值 ` Component.translatable( "screen.anvilcraft.filter.scroll_wheel_to_change_stack_limit") .withStyle(ChatFormatting.ITALIC, ChatFormatting.GRAY) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L30) |
| ` Component SHIFT_TO_SCROLL_FASTER_TOOLTIP ` | 初值 ` Component.translatable("screen.anvilcraft.filter.shift_to_scroll_faster") .withStyle(ChatFormatting.ITALIC, ChatFormatting.GRAY) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L33) |
| ` T getFilterMenu() ` | [调用处 IFilterScreen.isFilterEnabled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L36) |
| ` default boolean isFilterEnabled() ` | 获取是否开启过滤<br>返回 是否开启过滤<br>末尾返回 ` this.getFilterMenu().isFilterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L41) |
| ` default void setFilterEnabled(boolean enable) ` | 设置是否开启过滤<br>参数 ` enable ` 是否开启过滤<br>执行 ` this.getFilterMenu().setFilterEnabled(enable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L48) |
| ` default void setSlotDisabled(int slot, boolean disable) ` | 设置指定槽位是否禁用<br>参数 ` slot ` 槽位<br>参数 ` disable ` 是否禁用<br>执行 ` this.getFilterMenu().setSlotDisabled(slot, disable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L56) |
| ` default boolean isSlotDisabled(int slot) ` | 获取指定槽位是否禁用<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterMenu().isSlotDisabled(slot) `<br>[调用处 IFilterScreen.extractSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L128) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L63) |
| ` @SuppressWarnings("UnusedReturnValue") default boolean setFilter(int slot, ItemStack filter) ` | 设置指定槽位的过滤<br>参数 ` slot ` 槽位<br>参数 ` filter ` 过滤<br>末尾返回 ` this.getFilterMenu().setFilter(slot, filter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L71) |
| ` default ItemStack getFilter(int slot) ` | 获取指定槽位的过滤<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterMenu().getFilter(slot) `<br>[调用处 IFilterScreen.extractSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L132) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L79) |
| ` default int getSlotLimit(int slot) ` | 获取指定槽位的物品上限<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterMenu().getSlotLimit(slot) `<br>[调用处 IFilterScreen.renderSlotLimit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L86) |
| ` default void setSlotLimit(int slot, int limit) ` | 设置指定槽位的物品上限<br>参数 ` slot ` 槽位<br>参数 ` limit ` 物品上限<br>执行 ` this.getFilterMenu().setSlotLimit(slot, limit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L94) |
| ` default void flush() ` | 刷新<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L99) |
| ` default BiFunction<Integer, Integer, EnableFilterButton> getEnableFilterButtonSupplier(int x, int y) ` | 获取一个生成启用过滤按钮的生成器<br>参数 ` x ` 按钮 X 坐标<br>参数 ` y ` 按钮 Y 坐标<br>返回 生成启用过滤按钮的生成器 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L107) |
| ` default void extractSlot(GuiGraphicsExtractor graphics, Slot slot) ` | 渲染槽位<br>参数 ` graphics ` 画布<br>参数 ` slot ` 槽位<br>实现调用 ` crafterSlot.isFilter() `<br>实现调用 ` this.isSlotDisabled(slot.getContainerSlot()) `<br>实现调用 ` slot.getContainerSlot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L125) |
| ` default void extractDisabledSlot(GuiGraphicsExtractor graphics, Slot crafterSlot) ` | 渲染禁用的槽位<br>参数 ` graphics ` 画布<br>参数 ` crafterSlot ` 槽位<br>执行 ` graphics.blit( RenderPipelines.GUI_TEXTURED, SharedTextures.DISABLED_SLOT, crafterSlot.x, crafterSlot.y, 0, 0, 16, 16, 16, 16 ) `<br>[调用处 IFilterScreen.extractSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L143) |
| ` default void extractFilterItem(GuiGraphicsExtractor graphics, Slot slot, ItemStack stack) ` | 渲染过滤物品<br>参数 ` graphics ` 画布<br>参数 ` slot ` 槽位<br>参数 ` stack ` 物品堆叠<br>实现调用 ` GuiRenderExtras.itemWithTransparency(graphics, stack, i, j, 0.52F) `<br>实现调用 ` graphics.fill(i, j, i + 16, j + 16, 0x60Ffaaaa) `<br>[调用处 IFilterScreen.extractSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L163) |
| ` default void renderSlotLimit(GuiGraphicsExtractor graphics, Slot slot) ` | 实现调用 ` filterSlot.isFilter() `<br>实现调用 ` slot.getContainerSlot() `<br>实现调用 ` this.getSlotLimit(slotIndex) `<br>[调用处 IFilterScreen.extractSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L170) |
| ` default ItemStack getHoveredFilterItem(@Nullable Slot slot) ` | ` (!(slot instanceof SlotItemHandlerWithFilter filterSlot) \|\| !filterSlot.isFilter() \|\| filterSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` this.isSlotDisabled(slotIndex) ? ItemStack.EMPTY : this.getFilter(slotIndex) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L199) |
| ` default ItemStack getIncomingStack(@Nullable Player player, ContainerInput input, int button, ItemStack carried) ` | ` (input != ContainerInput.SWAP \|\| player == null) ` 成立时提前返回 ` carried `<br>末尾返回 ` player.getInventory().getItem(button).copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L207) |
| ` default int getOffsetY() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L212) |
| ` default int getOffsetX() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L216) |
| ` @Override default Collection<Integer> getGhostSlots() ` | ` (ScreenEditing.isReadOnly() \|\| !this.getFilterMenu().isFilterEnabled()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` IGhostIngredientScreen.range(36, 45, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L220) |
| ` @Override default void acceptGhost(Slot slot, ItemStack ingredient) ` | 实现调用 ` ScreenEditing.isReadOnly() `<br>实现调用 ` this.getFilterMenu().isFilterEnabled() `<br>实现调用 ` this.getFilterMenu() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L226) |

## IGhostIngredientScreen

` public interface IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L13)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default Collection<Integer> getGhostSlots() ` | 末尾返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L15) |
| ` default Collection<Integer> getFluidGhostSlots() ` | 末尾返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L19) |
| ` default Vec2i getSlotSize(int slot) ` | 末尾返回 ` new Vec2i(16, 16) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L23) |
| ` default @Nullable Rect2i getGhostSlotArea(int slot) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L27) |
| ` default void acceptGhost(Slot slot, ItemStack ingredient) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
| ` default void acceptFluidGhost(int slot, FluidStack fluid) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L34) |
| ` static Collection<Integer> range(int start, int end, int step) ` | 末尾返回 ` list `<br>[调用处 FilterScreen.getGhostSlots](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L40) |

## IGhostIngredientScreen.Vec2i

` record Vec2i(int x, int y) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Vec2i(int x, int y) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L37) |

## IntegrationScreen

` public class IntegrationScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component TITLE ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.title" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L38) |
| ` public static final Component CATEGORY_GUIDE ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.guide" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L41) |
| ` public static final Component CATEGORY_RECIPE_QUERY ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.recipe_query" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L44) |
| ` public static final Component CATEGORY_INFO_HUD ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.info_hud" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L47) |
| ` public static final Component CATEGORY_MODIFY ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.modify" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L50) |
| ` public static final Component CATEGORY_INTERACTION ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.interaction" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L53) |
| ` public static final Component CATEGORY_COMPATIBLE ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.compatible" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L56) |
| ` public static final Component CATEGORY_ADDITIONAL ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.additional" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L59) |
| ` public IntegrationScreen(@Nullable Screen screen) ` | 实现调用 ` super(IntegrationScreen.TITLE) `<br>[调用处 IntegrationUtil.openIntegrationScreen](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L219) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L67) |
| ` @Override public void onClose() ` | 分支 ` (this.lastScreen != null) ` 内调用 ` this.minecraft.setScreen(this.lastScreen) `<br>分支 ` !(this.lastScreen != null) ` 内调用 ` super.onClose() `<br>[调用处 IntegrationScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L91) |

## IntegrationScreen.AbstractIntegrationEntry

` public abstract static class AbstractIntegrationEntry extends ContainerObjectSelectionList.Entry<AbstractIntegrationEntry> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L100)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbstractIntegrationEntry(@Nullable List<FormattedCharSequence> tooltip) ` | 执行 ` this.tooltip = tooltip ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L103) |
| ` public void extractToolTip(GuiGraphicsExtractor graphics, int mouseX, int mouseY) ` | 实现调用 ` graphics.setTooltipForNextFrame(this.tooltip, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L107) |

## IntegrationScreen.AdditionalEntry

` public class AdditionalEntry extends BaseIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L348)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AdditionalEntry(IntegrationUtil.Additional integration) ` | 执行 ` super(integration.id(), false, integration.name(), integration.description(), integration.links()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L349) |
