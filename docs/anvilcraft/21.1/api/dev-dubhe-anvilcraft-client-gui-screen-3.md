# dev.dubhe.anvilcraft.client.gui.screen（IntegrationScreen 至 SpacetimeSupercomputerScreen）



## IntegrationScreen

` public class IntegrationScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component TITLE ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.title" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L38) |
| ` public static final Component CATEGORY_GUIDE ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.guide" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L41) |
| ` public static final Component CATEGORY_RECIPE_QUERY ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.recipe_query" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L44) |
| ` public static final Component CATEGORY_INFO_HUD ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.info_hud" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L47) |
| ` public static final Component CATEGORY_MODIFY ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.modify" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L50) |
| ` public static final Component CATEGORY_INTERACTION ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.interaction" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L53) |
| ` public static final Component CATEGORY_COMPATIBLE ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.compatible" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L56) |
| ` public static final Component CATEGORY_ADDITIONAL ` | 初值 ` Component.translatable( "screen.anvilcraft.integration_screen.category.additional" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L59) |
| ` public IntegrationScreen(@Nullable Screen screen) ` | 实现调用 ` super(IntegrationScreen.TITLE) `<br>[调用处 IntegrationUtil.openIntegrationScreen](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L219) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L67) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 执行 ` super.render(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L92) |
| ` @Override public void onClose() ` | 分支 ` (this.minecraft != null && this.lastScreen != null) ` 内调用 ` this.minecraft.setScreen(this.lastScreen) `<br>分支 ` !(this.minecraft != null && this.lastScreen != null) ` 内调用 ` super.onClose() `<br>[调用处 IntegrationScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L97) |

## IntegrationScreen.AbstractIntegrationEntry

` public abstract class AbstractIntegrationEntry extends ContainerObjectSelectionList.Entry<AbstractIntegrationEntry> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L106)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbstractIntegrationEntry(@Nullable List<FormattedCharSequence> tooltip) ` | 执行 ` this.tooltip = tooltip ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L109) |
| ` public void renderToolTip() ` | 实现调用 ` IntegrationScreen.this.setTooltipForNextRenderPass(this.tooltip) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L113) |

## IntegrationScreen.AdditionalEntry

` public class AdditionalEntry extends BaseIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L340)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AdditionalEntry(IntegrationUtil.Additional integration) ` | 执行 ` super(integration.id(), false, integration.name(), integration.description(), integration.links()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L341) |

## IntegrationScreen.BaseIntegrationEntry

` public class BaseIntegrationEntry extends AbstractIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L119)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseIntegrationEntry( String id, boolean hasExtra, Component name, @Nullable Component description, IntegrationUtil.Links links ) ` | 实现调用 ` super(description == null ? null : Minecraft.getInstance().font.split(description, 175)) `<br>实现调用 ` Minecraft.getInstance().font.split(description, 175) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L127) |
| ` @Override public List<? extends GuiEventListener> children() ` | 末尾返回 ` this.children ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L150) |
| ` @Override public List<? extends NarratableEntry> narratables() ` | 末尾返回 ` this.children ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L155) |
| ` public TexturedButton createButton(String type, String url) ` | 末尾返回 ` imageButton `<br>[调用处 IntegrationScreen.BaseIntegrationEntry.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L181) |
| ` @Override public void render( GuiGraphics guiGraphics, int index, int top, int left, int width, int height, int mouseX, int mouseY, boolean hovering, float partialTick ) ` | 实现调用 ` this.renderLabel(guiGraphics, left, top, width) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Component.translatable("screen.anvilcraft.integration_screen.target") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L217) |
| ` @Override public void renderToolTip() ` | 实现调用 ` child.isHovered() `<br>实现调用 ` super.renderToolTip() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L263) |

## IntegrationScreen.CategoryIntegrationEntry

` public class CategoryIntegrationEntry extends AbstractIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L272)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CategoryIntegrationEntry(Component label) ` | 实现调用 ` super(null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L275) |
| ` @Override public void render( GuiGraphics guiGraphics, int index, int top, int left, int width, int height, int mouseX, int mouseY, boolean hovering, float partialTick ) ` | 实现调用 ` guiGraphics.pose() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(left + width / 2.0f, top + height - 36.0f, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L280) |
| ` @Override public List<? extends GuiEventListener> children() ` | 末尾返回 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L307) |
| ` @Override public List<? extends NarratableEntry> narratables() ` | 返回 ` List<? extends NarratableEntry> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L312) |

## IntegrationScreen.IntegrationEntry

` public class IntegrationEntry extends BaseIntegrationEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L328)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IntegrationEntry(IntegrationUtil.Integration integration) ` | 执行 ` super( integration.id(), integration.type() == IntegrationUtil.IntegrationType.EXTRA, integration.name(), integration.description(), integration.links() ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L329) |

## IntegrationScreen.IntegrationList

` public class IntegrationList extends ContainerObjectSelectionList<AbstractIntegrationEntry> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L346)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IntegrationList() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` IntegrationScreen.this.layout.getContentHeight() `<br>实现调用 ` IntegrationScreen.this.layout.getHeaderHeight() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L347) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.renderWidget(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.getHovered() `<br>实现调用 ` entry.renderToolTip() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L373) |

## ItemCollectorScreen

` public class ItemCollectorScreen extends AbstractContainerScreen<ItemCollectorMenu> implements IFilterScreen<ItemCollectorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCollectorScreen(ItemCollectorMenu menu, Inventory inventory, Component title) ` | 物品收集器 Screen<br>实现调用 ` super(menu, inventory, title) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L45) |
| ` @Override public void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` super.renderSlot(guiGraphics, slot) `<br>实现调用 ` IFilterScreen.super.renderSlot(guiGraphics, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L153) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L202) |
| ` @Override public ItemCollectorMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L208) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L213) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` (this.width - this.imageWidth) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L254) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` (this.height - this.imageHeight) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L259) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (ScreenEditing.isReadOnly()) ` 成立时提前返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L264) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemCollectorScreen.java#L32) |

## ItemDetectorScreen

` public class ItemDetectorScreen extends AbstractContainerScreen<ItemDetectorMenu> implements IFilterScreen<ItemDetectorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemDetectorScreen(ItemDetectorMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L48) |
| ` @Override public void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` super.renderSlot(guiGraphics, slot) `<br>实现调用 ` slot.getItem().isEmpty() `<br>实现调用 ` slot.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L141) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.outputModeButton.setCurrent(this.menu.getBlockEntity().getOutputMode().ordinal()) `<br>实现调用 ` this.menu.getBlockEntity().getOutputMode().ordinal() `<br>实现调用 ` this.menu.getBlockEntity().getOutputMode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L185) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L215) |
| ` @Override public ItemDetectorMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L236) |

## JewelCraftingScreen

` public class JewelCraftingScreen extends AbstractContainerScreen<JewelCraftingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelCraftingScreen(JewelCraftingMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L22) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) `<br>实现调用 ` this.renderHintItemSlot(guiGraphics) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L45) |
| ` @Override public boolean keyPressed(int key, int scanCode, int modifiers) ` | 末尾返回 ` super.keyPressed(key, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/JewelCraftingScreen.java#L126) |

## MagneticChuteScreen

` public class MagneticChuteScreen extends BaseChuteScreen<MagneticChuteBlockEntity, MagneticChuteMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/MagneticChuteScreen.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MagneticChuteScreen(MagneticChuteMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/MagneticChuteScreen.java#L11) |

## PulseGeneratorScreen

` public class PulseGeneratorScreen extends AbstractContainerScreen<PulseGeneratorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PulseGeneratorScreen(PulseGeneratorMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` menu.getBlockEntity().getStartMode().index() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L48) |
| ` @Override public void onClose() ` | 实现调用 ` this.sendUpdate() `<br>实现调用 ` super.onClose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L58) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/PulseGeneratorScreen.java#L206) |

## RoyalAnvilScreen

` public class RoyalAnvilScreen extends ItemCombinerScreen<RoyalAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalAnvilScreen(RoyalAnvilMenu menu, Inventory playerInventory, Component title) ` | 皇家铁砧 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L35) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` Objects.requireNonNull(this.name).getValue() `<br>实现调用 ` Objects.requireNonNull(this.name) `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L64) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | ` (Objects.requireNonNull(this.name).keyPressed(keyCode, scanCode, modifiers) \|\| this.name.canConsumeInput()) ` 成立时提前返回 ` true `<br>末尾返回 ` super.keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L71) |
| ` @Override public void renderFg(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 执行 ` Objects.requireNonNull(this.name).render(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L129) |
| ` @Override public void slotChanged( AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 0) ` 内调用 ` Objects.requireNonNull(this.name).setValue(stack.isEmpty() ? "" : stack.getHoverName().getString()) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` Objects.requireNonNull(this.name) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalAnvilScreen.java#L144) |

## RoyalGrindstoneScreen

` public class RoyalGrindstoneScreen extends AbstractContainerScreen<RoyalGrindstoneMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalGrindstoneScreen.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalGrindstoneScreen( RoyalGrindstoneMenu menu, Inventory playerInventory, @SuppressWarnings("unused") Component title) ` | 执行 ` super(menu, playerInventory, Component.translatable("screen.anvilcraft.royal_grindstone.title")) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalGrindstoneScreen.java#L26) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalGrindstoneScreen.java#L82) |

## RoyalSmithingScreen

` public class RoyalSmithingScreen extends AdjacentSmithingScreen<RoyalSmithingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Quaternionf ARMOR_STAND_ANGLE ` | 初值 ` new Quaternionf().rotationXYZ(0.43633232f, 0.0f, (float) Math.PI) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L37) |
| ` public RoyalSmithingScreen(RoyalSmithingMenu menu, Inventory playerInventory, Component title) ` | 皇家锻造台 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>执行 ` super(menu, playerInventory, title, SMITHING_LOCATION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L53) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.getTemplateItem() `<br>实现调用 ` this.templateIcon.tick(EMPTY_SLOT_SMITHING_TEMPLATES) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L83) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderOnboardingTooltips(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L104) |
| ` @Override public void slotChanged( AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 3) ` 内调用 ` this.updateArmorStandPreview(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RoyalSmithingScreen.java#L128) |

## RuinsScreen

` public class RuinsScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RuinsScreen(BlockPos pos, String drops, boolean fragile, List<String> lootTables) ` | 实现调用 ` super(Component.translatable("screen.anvilcraft.ruins.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.ruins.title") `<br>[调用处 RuinsScreen.open](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L38) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L29) |
| ` public static void open(BlockPos pos, String drops, boolean fragile, List<String> lootTables) ` | 执行 ` Minecraft.getInstance().setScreen(new RuinsScreen(pos, drops, fragile, lootTables)) `<br>[调用处 RuinsEditScreenPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L37) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` graphics.drawCenteredString(this.font, this.title, this.width / 2, this.height / 2 - 100, 0xFFFFFF) `<br>实现调用 ` Component.translatable("screen.anvilcraft.ruins.loot_table") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L81) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | 末尾返回 ` this.suggestions.keyPressed(keyCode, scanCode, modifiers) \|\| super.keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L90) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` this.suggestions.mouseClicked(mouseX, mouseY, button) \|\| super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L95) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` this.suggestions.mouseScrolled(scrollY) \|\| super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L100) |
| ` @Override public boolean isPauseScreen() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/RuinsScreen.java#L105) |

## SliderScreen

` public class SliderScreen extends AbstractContainerScreen<SliderMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation BACKGROUND ` | 初值 ` SharedTextures.bg("misc", "slider_like") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L22) |
| ` public static final ResourceLocation BUTTON_MAX ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_max") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L23) |
| ` public static final ResourceLocation BUTTON_ADD ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_add") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L24) |
| ` public static final ResourceLocation BUTTON_MINUS ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_minus") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L25) |
| ` public static final ResourceLocation BUTTON_MIN ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_min") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L26) |
| ` public SliderScreen(SliderMenu menu, Inventory inventory, Component title) ` | 实现调用 ` super(menu, inventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L30) |
| ` public void setValue(int value) ` | 分支 ` (this.slider != null) ` 内调用 ` this.slider.setValue(value) `<br>实现调用 ` this.value.setValue("" + value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L110) |
| ` public void setMin(int min) ` | 分支 ` (this.slider != null) ` 内调用 ` this.slider.setMin(min) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L136) |
| ` public void setMax(int max) ` | 分支 ` (this.slider != null) ` 内调用 ` this.slider.setMax(max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L142) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` Integer.parseInt(this.value.getValue()) `<br>实现调用 ` this.value.getValue() `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L148) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L160) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L168) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L174) |

## SmartBlockPlacerScreen

` public class SmartBlockPlacerScreen extends AbstractContainerScreen<SmartBlockPlacerMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L74)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerScreen(SmartBlockPlacerMenu menu, Inventory inventory, Component title) ` | 实现调用 ` super(menu, inventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L170) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | ` (this.structureGuiPreview.mouseReleased(button)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L675) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | ` (this.structureGuiPreview.mouseClicked(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L712) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | ` (this.structureGuiPreview.mouseDragged(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L738) |
| ` @Override public void removed() ` | 实现调用 ` this.structureGuiPreview.clear() `<br>实现调用 ` this.cancelModeButtonPress() `<br>实现调用 ` super.removed() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L794) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.menu.getBlockEntity() `<br>实现调用 ` this.synchronizeFromBlockEntity(blockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L923) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.structureGuiPreview.beginFrame() `<br>实现调用 ` this.structureGuiPreview.contains(mouseX, mouseY) `<br>实现调用 ` this.children() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L977) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (this.structureGuiPreview.contains(mouseX, mouseY)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1269) |

## SpacetimeSupercomputerScreen

` public class SpacetimeSupercomputerScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L37)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpacetimeSupercomputerScreen(SpacetimeSupercomputerBlockEntity blockEntity) ` | 实现调用 ` super(Component.translatable("block.anvilcraft.spacetime_supercomputer")) `<br>实现调用 ` Component.translatable("block.anvilcraft.spacetime_supercomputer") `<br>[调用处 SpacetimeSupercomputerBlock.openScreen](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L130) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L84) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.commandEditBox.getValue() `<br>实现调用 ` this.init(minecraft, width, height) `<br>实现调用 ` this.commandEditBox.setValue(cmd) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L313) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | ` (this.commandSuggestions.keyPressed(keyCode, scanCode, modifiers)) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L321) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (this.commandSuggestions.mouseScrolled(scrollY)) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L330) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` this.commandSuggestions.mouseClicked(mouseX, mouseY, button) \|\| super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L401) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L434) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L461) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.font.width(this.title) `<br>实现调用 ` Component.translatable("screen.anvilcraft.spacetime_supercomputer.available_commands") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L497) |
| ` @Override public void renderBackground(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.renderTransparentBackground(guiGraphics) `<br>实现调用 ` guiGraphics.blit(BACKGROUND, x, y, 0, 0, 256, 166) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L566) |
| ` public void updateGui() ` | 实现调用 ` this.init() `<br>实现调用 ` this.commandEditBox.setValue(this.spacetimeSupercomputerBlockEntity.getCommand()) `<br>实现调用 ` this.spacetimeSupercomputerBlockEntity.getCommand() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L574) |
