# dev.dubhe.anvilcraft.client.gui.screen（IntegrationScreen.BaseIntegrationEntry 至 StorageMenu）



## IntegrationScreen.BaseIntegrationEntry

` public class BaseIntegrationEntry extends AbstractIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L113)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseIntegrationEntry( String id, boolean hasExtra, Component name, @Nullable Component description, IntegrationUtil.Links links ) ` | 实现调用 ` super(description == null ? null : Minecraft.getInstance().font.split(description, 175)) `<br>实现调用 ` Minecraft.getInstance().font.split(description, 175) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L121) |
| ` @Override public List<? extends GuiEventListener> children() ` | 末尾返回 ` this.children ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L144) |
| ` @Override public List<? extends NarratableEntry> narratables() ` | 末尾返回 ` this.children ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L149) |
| ` public TexturedButton createButton(String type, String url) ` | 末尾返回 ` imageButton `<br>[调用处 IntegrationScreen.BaseIntegrationEntry.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L175) |
| ` @Override public void extractContent(GuiGraphicsExtractor graphics, int mouseX, int mouseY, boolean hovered, float a) ` | 实现调用 ` this.extractLabel(graphics, this.getContentX(), this.getContentY(), this.getContentWidth()) `<br>实现调用 ` this.getContentX() `<br>实现调用 ` this.getContentY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L211) |
| ` @Override public void extractToolTip(GuiGraphicsExtractor graphics, int mouseX, int mouseY) ` | 实现调用 ` child.isHovered() `<br>实现调用 ` super.extractToolTip(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L246) |

## IntegrationScreen.CategoryIntegrationEntry

` public static class CategoryIntegrationEntry extends AbstractIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L297)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CategoryIntegrationEntry(Component label) ` | 实现调用 ` super(null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L300) |
| ` @Override public void extractContent(GuiGraphicsExtractor graphics, int mouseX, int mouseY, boolean hovered, float a) ` | 实现调用 ` graphics.pose() `<br>实现调用 ` pose.pushMatrix() `<br>实现调用 ` this.getContentX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L305) |
| ` @Override public List<? extends GuiEventListener> children() ` | 末尾返回 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L315) |
| ` @Override public List<? extends NarratableEntry> narratables() ` | 返回 ` List<? extends NarratableEntry> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L320) |

## IntegrationScreen.IntegrationEntry

` public class IntegrationEntry extends BaseIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L336)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IntegrationEntry(IntegrationUtil.Integration integration) ` | 执行 ` super( integration.id(), integration.type() == IntegrationUtil.IntegrationType.EXTRA, integration.name(), integration.description(), integration.links() ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L337) |

## IntegrationScreen.IntegrationList

` public class IntegrationList extends ContainerObjectSelectionList<AbstractIntegrationEntry> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L354)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IntegrationList() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` IntegrationScreen.this.layout.getContentHeight() `<br>实现调用 ` IntegrationScreen.this.layout.getHeaderHeight() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L355) |
| ` @Override public void extractWidgetRenderState(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractWidgetRenderState(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getHovered() `<br>实现调用 ` entry.extractToolTip(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L381) |

## IntegrationScreen.NoteIntegrationEntry

` public class NoteIntegrationEntry extends AbstractIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L255)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NoteIntegrationEntry(Component note) ` | 实现调用 ` super(null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L260) |
| ` @Override public void extractContent(GuiGraphicsExtractor graphics, int mouseX, int mouseY, boolean hovered, float a) ` | 实现调用 ` graphics.pose() `<br>实现调用 ` pose.pushMatrix() `<br>实现调用 ` pose.translate(this.getContentX(), this.getContentY()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L265) |
| ` @Override public List<? extends GuiEventListener> children() ` | 末尾返回 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L276) |
| ` @Override public List<? extends NarratableEntry> narratables() ` | 返回 ` List<? extends NarratableEntry> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L281) |

## ItemCollectorScreen

` public class ItemCollectorScreen extends AbstractContainerScreen<ItemCollectorMenu> implements IFilterScreen<ItemCollectorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCollectorScreen(ItemCollectorMenu menu, Inventory inventory, Component title) ` | 物品收集器 Screen<br>实现调用 ` super(menu, inventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L41) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L128) |
| ` @Override public ItemCollectorMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L186) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L191) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` (this.width - this.getImageWidth()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L226) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` (this.height - this.getImageHeight()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L231) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (ScreenEditing.isReadOnly()) ` 成立时提前返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L236) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L31) |

## ItemDetectorScreen

` public class ItemDetectorScreen extends AbstractContainerScreen<ItemDetectorMenu> implements IFilterScreen<ItemDetectorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemDetectorScreen(ItemDetectorMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L48) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L57) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTick) ` | 分支 ` (this.outputModeButton != null) ` 内调用 ` this.outputModeButton.setCurrent(this.menu.getBlockEntity().getOutputMode().ordinal()) `<br>分支 ` (this.outputModeButton != null) ` 内调用 ` this.menu.getBlockEntity().getOutputMode().ordinal() `<br>分支 ` (this.outputModeButton != null) ` 内调用 ` this.menu.getBlockEntity().getOutputMode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L147) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L222) |
| ` @Override public ItemDetectorMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L243) |

## JewelCraftingScreen

` public class JewelCraftingScreen extends AbstractContainerScreen<JewelCraftingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelCraftingScreen(JewelCraftingMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L26) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L42) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractHintItemSlot(graphics) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L59) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | 末尾返回 ` super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L135) |

## MagneticChuteScreen

` public class MagneticChuteScreen extends BaseChuteScreen<MagneticChuteBlockEntity, MagneticChuteMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/MagneticChuteScreen.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MagneticChuteScreen(MagneticChuteMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/MagneticChuteScreen.java#L11) |

## PulseGeneratorScreen

` public class PulseGeneratorScreen extends AbstractContainerScreen<PulseGeneratorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PulseGeneratorScreen(PulseGeneratorMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title, 176, 77) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` menu.getBlockEntity().getStartMode().index() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L50) |
| ` @Override public void onClose() ` | 实现调用 ` super.onClose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L59) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L208) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L225) |

## RoyalAnvilScreen

` public class RoyalAnvilScreen extends ItemCombinerScreen<RoyalAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalAnvilScreen(RoyalAnvilMenu menu, Inventory playerInventory, Component title) ` | 皇家铁砧 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, RoyalAnvilScreen.BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L32) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.name.getValue() `<br>实现调用 ` this.init(width, height) `<br>实现调用 ` this.name.setValue(string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L61) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | ` (this.name.keyPressed(event) \|\| this.name.canConsumeInput()) ` 成立时提前返回 ` true `<br>末尾返回 ` super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L68) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.menu.getSlot(0).getItem().isEmpty() `<br>实现调用 ` this.menu.getSlot(0).getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L117) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 0) ` 内调用 ` this.name.setValue(stack.isEmpty() ? "" : stack.getHoverName().getString()) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.isEmpty() `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.getHoverName().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L137) |

## RoyalGrindstoneScreen

` public class RoyalGrindstoneScreen extends AbstractContainerScreen<RoyalGrindstoneMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalGrindstoneScreen.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalGrindstoneScreen( RoyalGrindstoneMenu menu, Inventory playerInventory, @SuppressWarnings("unused") Component title) ` | 执行 ` super(menu, playerInventory, Component.translatable("screen.anvilcraft.royal_grindstone.title")) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalGrindstoneScreen.java#L26) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalGrindstoneScreen.java#L82) |

## RoyalSmithingScreen

` public class RoyalSmithingScreen extends AdjacentSmithingScreen<RoyalSmithingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Quaternionf ARMOR_STAND_ANGLE ` | 初值 ` new Quaternionf().rotationXYZ(0.43633232F, 0.0F, (float) Math.PI) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L43) |
| ` public RoyalSmithingScreen(RoyalSmithingMenu menu, Inventory playerInventory, Component title) ` | 皇家锻造台 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, RoyalSmithingScreen.SMITHING_LOCATION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L56) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.getTemplateItem() `<br>实现调用 ` this.templateIcon.tick(RoyalSmithingScreen.EMPTY_SLOT_SMITHING_TEMPLATES) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L82) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractOnboardingTooltips(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L103) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.templateIcon.extractRenderState(this.menu, graphics, a, this.leftPos, this.topPos) `<br>实现调用 ` this.baseIcon.extractRenderState(this.menu, graphics, a, this.leftPos, this.topPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L109) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 3) ` 内调用 ` this.updateArmorStandPreview(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L119) |

## RuinsScreen

` public class RuinsScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RuinsScreen(BlockPos pos, String drops, boolean fragile, List<String> lootTables) ` | 实现调用 ` super(Component.translatable("screen.anvilcraft.ruins.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.ruins.title") `<br>[调用处 RuinsScreen.open](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L40) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L31) |
| ` public static void open(BlockPos pos, String drops, boolean fragile, List<String> lootTables) ` | 执行 ` Minecraft.getInstance().setScreen(new RuinsScreen(pos, drops, fragile, lootTables)) `<br>[调用处 RuinsEditScreenPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L39) |
| ` @Override public void extractRenderState(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractRenderState(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` graphics.centeredText(this.font, this.title, this.width / 2, this.height / 2 - 100, 0xFFFFFFFF) `<br>实现调用 ` Component.translatable("screen.anvilcraft.ruins.loot_table") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L83) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | 末尾返回 ` this.suggestions.keyPressed(event) \|\| super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L92) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | 末尾返回 ` this.suggestions.mouseClicked(event) \|\| super.mouseClicked(event, doubleClick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L97) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` this.suggestions.mouseScrolled(scrollY) \|\| super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L102) |
| ` @Override public boolean isPauseScreen() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L107) |

## SliderScreen

` public class SliderScreen extends AbstractContainerScreen<SliderMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier BACKGROUND ` | 初值 ` SharedTextures.bg("misc", "slider_like") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L24) |
| ` public static final Identifier BUTTON_MAX ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_max") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L25) |
| ` public static final Identifier BUTTON_ADD ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_add") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L26) |
| ` public static final Identifier BUTTON_MINUS ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_minus") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L27) |
| ` public static final Identifier BUTTON_MIN ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_min") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L28) |
| ` public SliderScreen(SliderMenu menu, Inventory inventory, Component title) ` | 执行 ` super(menu, inventory, title, 176, 77) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L32) |
| ` public void setValue(int value) ` | 分支 ` (this.sliderWidget != null) ` 内调用 ` this.sliderWidget.setValue(value) `<br>实现调用 ` this.value.setValue("" + value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L110) |
| ` public void setMin(int min) ` | 分支 ` (this.sliderWidget != null) ` 内调用 ` this.sliderWidget.setMin(min) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L136) |
| ` public void setMax(int max) ` | 分支 ` (this.sliderWidget != null) ` 内调用 ` this.sliderWidget.setMax(max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L142) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` Integer.parseInt(this.value.getValue()) `<br>实现调用 ` this.value.getValue() `<br>实现调用 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L148) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L160) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L168) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L174) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L180) |

## SmartBlockPlacerScreen

` public class SmartBlockPlacerScreen extends AbstractContainerScreen<SmartBlockPlacerMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L75)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerScreen(SmartBlockPlacerMenu menu, Inventory inventory, Component title) ` | 执行 ` super(menu, inventory, title, 256, 201) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L170) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | ` (this.structureGuiPreview.mouseReleased(event.button())) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L675) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | ` (this.structureGuiPreview.mouseClicked(event.x(), event.y(), event.button())) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseClicked(event, doubleClick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L712) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | ` (this.structureGuiPreview.mouseDragged(event.x(), event.y(), event.button())) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L741) |
| ` @Override public void removed() ` | 实现调用 ` this.structureGuiPreview.clear() `<br>实现调用 ` this.cancelModeButtonPress() `<br>实现调用 ` super.removed() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L800) |
| ` @Override public void extractBackground(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractBackground(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.menu.getBlockEntity() `<br>实现调用 ` blockEntity.getBlueprintItem().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L809) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.menu.getBlockEntity() `<br>实现调用 ` this.synchronizeFromBlockEntity(blockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L927) |
| ` @Override public void extractRenderState(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.structureGuiPreview.beginFrame() `<br>实现调用 ` this.structureGuiPreview.contains(mouseX, mouseY) `<br>实现调用 ` this.children() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L981) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (this.structureGuiPreview.contains(mouseX, mouseY)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1264) |

## SmithingPreview

` public final class SmithingPreview `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmithingPreview.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void extract(GuiGraphicsExtractor graphics, ArmorStandRenderState state, Quaternionf angle, int left, int top) ` | 执行 ` graphics.entity(state, 25, TRANSLATION, angle, null, left + 129, top + 20, left + 169, top + 80) `<br>[调用处 FrostSmithingScreen.extractBackground](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L191) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmithingPreview.java#L14) |

## SpacetimeSupercomputerClientHelper

` public class SpacetimeSupercomputerClientHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerClientHelper.java#L10)

Client-side helper for SpacetimeSupercomputerBlock. Used via DistExecutor to avoid loading client classes on dedicated server.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void openScreen(SpacetimeSupercomputerBlockEntity entity) ` | 执行 ` Minecraft.getInstance().setScreen(new SpacetimeSupercomputerScreen(entity)) `<br>[调用处 SpacetimeSupercomputerBlock.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L112) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerClientHelper.java#L13) |

## SpacetimeSupercomputerScreen

` public class SpacetimeSupercomputerScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpacetimeSupercomputerScreen(SpacetimeSupercomputerBlockEntity blockEntity) ` | 实现调用 ` super(Component.translatable("block.anvilcraft.spacetime_supercomputer")) `<br>实现调用 ` Component.translatable("block.anvilcraft.spacetime_supercomputer") `<br>[调用处 SpacetimeSupercomputerClientHelper.openScreen](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerClientHelper.java#L14) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L87) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.commandEditBox.getValue() `<br>实现调用 ` this.init(width, height) `<br>实现调用 ` this.commandEditBox.setValue(cmd) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L316) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | ` (this.commandSuggestions.keyPressed(event)) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L324) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (this.commandSuggestions.mouseScrolled(scrollY)) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L333) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | 末尾返回 ` this.commandSuggestions.mouseClicked(event) \|\| super.mouseClicked(event, doubleClick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L404) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L440) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L468) |
| ` @Override public void extractRenderState(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractRenderState(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` guiGraphics.text(this.font, this.title, x + (256 - this.font.width(this.title)) / 2, y + 2, 0xFF404040, false) `<br>实现调用 ` this.font.width(this.title) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L505) |
| ` @Override public void extractBackground(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.extractTransparentBackground(guiGraphics) `<br>实现调用 ` guiGraphics.blit(RenderPipelines.GUI_TEXTURED, BACKGROUND, x, y, 0, 0, 256, 166, 256, 256) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L575) |
| ` public void updateGui() ` | 实现调用 ` this.init() `<br>实现调用 ` this.commandEditBox.setValue(this.spacetimeSupercomputerBlockEntity.getCommand()) `<br>实现调用 ` this.spacetimeSupercomputerBlockEntity.getCommand() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L583) |

## StorageMenu

` public final class StorageMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L15)

仓储屏幕提供给客户端配方查看器的背包视图，原版背包仍负责实际同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MenuType<StorageMenu> TYPE ` | 初值 ` new MenuType<>( (containerId, inventory) -> new StorageMenu(inventory.player, BlockPos.ZERO), FeatureFlags.VANILLA_SET ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L16) |
| ` public StorageMenu(Player player, BlockPos sourcePos) ` | 实现调用 ` super(StorageMenu.TYPE, player.inventoryMenu.containerId) `<br>实现调用 ` sourcePos.immutable() `<br>实现调用 ` this.inventoryMenu.slots.size() `<br>[调用处 StorageScreen.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L291) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L24) |
| ` public BlockPos getSourcePos() ` | 末尾返回 ` this.sourcePos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L33) |
| ` public void setFlipped(boolean flipped) ` | 实现调用 ` Math.min(45, this.slots.size()) `<br>实现调用 ` this.slots.size() `<br>实现调用 ` this.createSlot(index, flipped) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L37) |
| ` @Override public ItemStack getCarried() ` | 末尾返回 ` this.inventoryMenu.getCarried() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L60) |
| ` @Override public void setCarried(ItemStack stack) ` | 执行 ` this.inventoryMenu.setCarried(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L65) |
| ` @Override public void clicked(int slotId, int button, ContainerInput input, Player player) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L70) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L74) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L79) |
| ` @Override public void removed(Player player) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L84) |
| ` @Override public boolean canDragTo(Slot slot) ` | 末尾返回 ` slot.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L88) |
| ` @Override public boolean canTakeItemForPickAll(ItemStack stack, Slot slot) ` | 末尾返回 ` slot.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L93) |
| ` @Override public void setSynchronizer(@Nullable ContainerSynchronizer synchronizer) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageMenu.java#L98) |
