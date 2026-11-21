# dev.dubhe.anvilcraft.client.gui.screen（ActiveSilencerScreen 至 ControlValveScreen）



## ActiveSilencerScreen

` public class ActiveSilencerScreen extends AbstractContainerScreen<ActiveSilencerMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L48)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier SLIDER ` | 初值 ` SharedTextures.SMALL_MACHINE_SLIDER ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L51) |
| ` public static final int SOUND_FILTERED ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L62) |
| ` public static final int SOUND_MUTED ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L63) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | ` (this.getFocused() instanceof EditBox) ` 成立时提前返回 ` this.getFocused().keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L117) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST, receiveCanceled = true) public static void recordCanceledSound(PlayLevelSoundEvent event) ` | 事件总线派发 ` PlayLevelSoundEvent ` 时调用。<br>实现调用 ` event.isCanceled() `<br>实现调用 ` event.getSound() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L126) |
| ` public void recordSound(Identifier sound, Vec3 pos) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isSameThread() `<br>分支 ` (!minecraft.isSameThread()) ` 内调用 ` minecraft.execute(() -> this.recordSound(sound, pos)) `<br>[调用处 ActiveSilencerScreen.recordSound](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L146) |
| ` public Component getSoundTextAt(int index, int variant) ` | 获取屏幕上某一项的声音字幕<br>分支 ` (variant == ActiveSilencerScreen.SOUND_FILTERED) ` 内调用 ` this.filteredSounds.isEmpty() `<br>分支 ` (variant == ActiveSilencerScreen.SOUND_FILTERED) ` 内调用 ` this.filteredSounds.size() `<br>分支 ` (this.filteredSounds.isEmpty() \|\| actualIndex >= this.filteredSounds.size()) ` 内调用 ` Component.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L219) |
| ` public @Nullable Identifier getSoundIdAt(int index, int variant) ` | 获取屏幕上某一项的声音id<br>分支 ` (variant == ActiveSilencerScreen.SOUND_FILTERED) ` 内调用 ` this.filteredSounds.isEmpty() `<br>分支 ` (variant == ActiveSilencerScreen.SOUND_FILTERED) ` 内调用 ` this.filteredSounds.size() `<br>分支 ` (variant == ActiveSilencerScreen.SOUND_FILTERED) ` 内调用 ` this.filteredSounds.get(actualIndex).left() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L233) |
| ` public ActiveSilencerScreen(ActiveSilencerMenu menu, Inventory playerInventory, Component title) ` | 主动消音器gui<br>实现调用 ` super(menu, playerInventory, title, 256, 166) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L247) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L383) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 鼠标拖动事件<br>末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L401) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 鼠标点击<br>末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L426) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.filteredSounds.size() `<br>实现调用 ` this.mutedSounds.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L458) |
| ` public void handleSync(List<Identifier> sounds) ` | 实现调用 ` this.applyMutedSounds(sounds) `<br>实现调用 ` this.menu.handleSync(sounds) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L465) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L485) |
| ` public String getFilterText() ` | 末尾返回 ` this.filterText `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L48) |

## AdjacentSmithingScreen

` public abstract class AdjacentSmithingScreen<M extends AdjacentSmithingMenu> extends ItemCombinerScreen<M> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L26)

带有相邻容器模板面板的锻造界面。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.isTemplatePanelVisible() `<br>分支 ` (!this.searchBox.visible) ` 内调用 ` this.searchBox.setFocused(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L78) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isTemplatePanelVisible() `<br>实现调用 ` this.panelX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L90) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | ` (!this.isTemplatePanelVisible()) ` 成立时提前返回 ` super.mouseClicked(event, handled) `<br>` (this.isOverTemplateGrid(mouseX, mouseY)) ` 成立时提前返回 ` true `<br>` (button == 0 && this.searchBox != null && this.searchBox.isMouseOver(mouseX, mouseY)) ` 成立时提前返回 ` super.mouseClicked(event, handled) `<br>` (this.isOverTemplatePanel(mouseX, mouseY)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L141) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L177) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L183) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.isTemplatePanelVisible() \|\| !this.isOverTemplateGrid(mouseX, mouseY)) ` 成立时提前返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L192) |

## AdvancedComparatorScreen

` public class AdvancedComparatorScreen extends AbstractContainerScreen<AdvancedComparatorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AdvancedComparatorScreen(AdvancedComparatorMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L42) |
| ` @Override public void onClose() ` | 实现调用 ` this.menu.getBlockEntity() `<br>实现调用 ` this.menu.getCompareMode().index() `<br>实现调用 ` this.menu.getCompareMode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L47) |
| ` @Override public void resize(int width, int height) ` | 执行 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L122) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L132) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L187) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L192) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L205) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 分支 ` (this.scrolling1) ` 内调用 ` Math.clamp((int) (event.x() - this.sliderMin) / AdvancedComparatorScreen.GRID, 0, 15) `<br>分支 ` (this.scrolling1) ` 内调用 ` event.x() `<br>分支 ` (this.scrolling2) ` 内调用 ` Math.clamp((int) (event.x() - this.sliderMin) / AdvancedComparatorScreen.GRID, 0, 15) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L214) |

## AnvilHammerSlotOverlay

` public final class AnvilHammerSlotOverlay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerSlotOverlay.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphicsExtractor guiGraphics, HammerOpenedAnvilMenu menu, Slot slot) ` | 实现调用 ` menu.anvilcraft$isOpenedByHammer() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getInventory() `<br>[调用处 AbstractContainerScreenMixin.anvilcraft$renderHammerOpenedAnvilSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/AbstractContainerScreenMixin.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerSlotOverlay.java#L16) |

## AutoEnchantingTableScreen

` public class AutoEnchantingTableScreen extends AbstractContainerScreen<AutoEnchantingTableMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L48)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AutoEnchantingTableScreen( AutoEnchantingTableMenu menu, Inventory playerInventory, Component title ) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L88) |
| ` @Override public void extractContents(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractContents(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.ghostOutput.isEmpty() `<br>分支 ` ( this.ghostOutput != null && !this.ghostOutput.isEmpty() ) ` 内调用 ` this.menu.getSlot(AutoEnchantingTableBlockEntity.SLOT_OUTPUT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L196) |
| ` @Override public void extractBackground(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractBackground(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L472) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 5) `<br>实现调用 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L513) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | 末尾返回 ` super.mouseClicked(event, doubleClick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L519) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | 末尾返回 ` super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L561) |
| ` @Override public boolean charTyped(CharacterEvent event) ` | ` (this.searchBox == null) ` 成立时提前返回 ` super.charTyped(event) `<br>` (this.searchBox.isFocused()) ` 成立时提前返回 ` this.searchBox.charTyped(event) `<br>末尾返回 ` super.charTyped(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L578) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L587) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L597) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L608) |

## BaseChuteScreen

` public abstract class BaseChuteScreen<T extends BaseChuteBlockEntity, M extends BaseChuteMenu<T>> extends BaseMachineScreen<M> implements IFilterScreen<M> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L30)

溜槽屏幕基类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseChuteScreen(M menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L41) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L60) |
| ` @Override public M getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L118) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L123) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` (this.width - this.getImageWidth()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L157) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` (this.height - this.getImageHeight()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L162) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (ScreenEditing.isReadOnly()) ` 成立时提前返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L167) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L30) |

## BaseMachineScreen

` public abstract class BaseMachineScreen<T extends AbstractContainerMenu> extends AbstractContainerScreen<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseMachineScreen(T menu, Inventory inventory, Component title) ` | 基本机器 GUI<br>参数 ` menu ` 菜单<br>参数 ` inventory ` 玩家背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, inventory, title) `<br>实现调用 ` BaseMachineScreen.getDirectionButtonSupplier(134, 18) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L36) |
| ` public BaseMachineScreen(T menu, Inventory inventory, Component title, int outputDirBtnX, int outputDirBtnY) ` | 基本机器 GUI<br>参数 ` menu ` 菜单<br>参数 ` inventory ` 玩家背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, inventory, title) `<br>实现调用 ` BaseMachineScreen.getDirectionButtonSupplier(outputDirBtnX, outputDirBtnY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L47) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.extractBeforeTooltip(graphics, mouseX, mouseY, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L77) |
| ` public void setDirectionButtonSupplier(final BiFunction<Integer, Integer, OutputDirectionButton> directionButtonSupplier) ` | 执行 ` this.directionButtonSupplier = directionButtonSupplier `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L21) |
| ` @Nullable public OutputDirectionButton getDirectionButton() ` | 末尾返回 ` this.directionButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L21) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L21) |

## BatchCrafterScreen

` public class BatchCrafterScreen extends BaseMachineScreen<BatchCrafterMenu> implements IFilterScreen<BatchCrafterMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCrafterScreen(BatchCrafterMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L39) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L73) |
| ` @Override public BatchCrafterMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L133) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L138) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` this.leftPos = (this.width - this.getImageWidth()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L171) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` this.topPos = (this.height - this.getImageHeight()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L176) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L181) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L29) |

## BatchCutterScreen

` public class BatchCutterScreen extends BaseMachineScreen<BatchCutterMenu> implements IFilterScreen<BatchCutterMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCutterScreen(BatchCutterMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title, 152, 20) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L66) |
| ` @Override public void resize(int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / this.scrollable.column()) `<br>实现调用 ` this.scrollable.column() `<br>实现调用 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L78) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.scrollable.canScroll() `<br>分支 ` (this.scrollable.canScroll()) ` 内调用 ` this.scrollable.getScrollOffs() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L84) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L220) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L248) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L258) |
| ` @Override public BatchCutterMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L268) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L273) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` this.leftPos = (this.width - this.getImageWidth()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L306) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` this.topPos = (this.height - this.getImageHeight()) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L311) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L316) |
| ` @Override public List<Integer> getGhostSlots() ` | 末尾返回 ` this.menu.isFilterEnabled() ? List.of(36) : List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L339) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L35) |

## CategorySettingsScreen

` public class CategorySettingsScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void rebuild() ` | 实现调用 ` this.alternates.clear() `<br>实现调用 ` categories.add(category) `<br>分支 ` (category instanceof NamespaceCategory namespaceCategory) ` 内调用 ` namespaces.add(namespaceCategory.namespace()) `<br>[调用处 CategorySettingsScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L197) |
| ` @Override public void extractRenderState(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` this.extractListedArea(graphics, mouseX, mouseY) `<br>实现调用 ` this.extractAlternateArea(graphics, mouseX, mouseY) `<br>实现调用 ` this.extractPlayerInventory(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L241) |
| ` @Override public boolean keyPressed(KeyEvent event) ` | 末尾返回 ` super.keyPressed(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L499) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | ` (super.mouseClicked(event, doubleClick)) ` 成立时提前返回 ` true `<br>` (this.clickListed(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>` (this.clickAlternate(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>末尾返回 ` this.clickPlayerInventory(mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L509) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dx, double dy) ` | 末尾返回 ` super.mouseDragged(event, dx, dy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L614) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L631) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L641) |
| ` @Override public void onClose() ` | 实现调用 ` this.whenConfirm() `<br>实现调用 ` this.whenCancel() `<br>[调用处 CategorySettingsScreen.keyPressed](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L503) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L738) |
| ` @Override public boolean isPauseScreen() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L747) |
| ` @Override public boolean isInGameUi() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L752) |

## CelestialForgingAnvilScreen

` public class CelestialForgingAnvilScreen extends AbstractContainerScreen<CelestialForgingAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilScreen(CelestialForgingAnvilMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title, 344, 207) `<br>实现调用 ` rollTitle(title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L207) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L320) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.updateGuideVisibility() `<br>实现调用 ` super.extractContents(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.searchHistory().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L328) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | 末尾返回 ` super.mouseClicked(event, doubleClick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1147) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1212) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dx, double dy) ` | 末尾返回 ` super.mouseDragged(event, dx, dy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1218) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (this.mapsGuide.mouseScrolled(mouseX, mouseY, scrollX, scrollY)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1233) |
| ` @Override public void resize(int width, int height) ` | 执行 ` this.init(width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1434) |

## ChuteScreen

` public class ChuteScreen extends BaseChuteScreen<ChuteBlockEntity, ChuteMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ChuteScreen.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChuteScreen(ChuteMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ChuteScreen.java#L11) |

## ControlValveScreen

` public class ControlValveScreen extends AbstractContainerScreen<ControlValveMenu> implements IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L45)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier BACKGROUND ` | 初值 ` SharedTextures.bg("machine", "control_valve") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L46) |
| ` public static final Identifier BUTTON_MAX ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_max") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L47) |
| ` public static final Identifier BUTTON_ADD ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_add") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L48) |
| ` public static final Identifier BUTTON_MINUS ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_minus") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L49) |
| ` public static final Identifier BUTTON_MIN ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_min") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L50) |
| ` public ControlValveScreen(ControlValveMenu menu, Inventory inventory, Component title) ` | 执行 ` super(menu, inventory, title, 176, 166) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L65) |
| ` public void setValue(int value) ` | 实现调用 ` Math.clamp(value, 0, FluidPipeNetwork.maxSpeed()) `<br>实现调用 ` FluidPipeNetwork.maxSpeed() `<br>分支 ` (this.slider != null) ` 内调用 ` this.slider.setExactValue(this.value) `<br>[调用处 ControlValveScreen.containerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L154) |
| ` public void setFilter(int index, FluidStack fluid) ` | 实现调用 ` fluid.isEmpty() `<br>实现调用 ` fluid.copyWithAmount(1) `<br>[调用处 ControlValveScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L163) |
| ` public void setFilterItem(ItemStack item) ` | 实现调用 ` item.isEmpty() `<br>实现调用 ` item.copyWithCount(1) `<br>实现调用 ` List.copyOf(ControlValveBlockEntity.resolveFluids(this.filterItem)) `<br>[调用处 ControlValveScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L168) |
| ` @Override public Collection<Integer> getGhostSlots() ` | 末尾返回 ` List.of(ControlValveScreen.FILTER_GHOST_ID) `<br>[调用处 ControlValveScreen.getFluidGhostSlots](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L242) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L235) |
| ` @Override public Collection<Integer> getFluidGhostSlots() ` | 末尾返回 ` this.getGhostSlots() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L240) |
| ` @Override public @Nullable Rect2i getGhostSlotArea(int slotIndex) ` | 末尾返回 ` slotIndex == ControlValveScreen.FILTER_GHOST_ID ? new Rect2i( ControlValveScreen.FILTER_X, ControlValveScreen.FILTER_Y, 16, 16) : null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L245) |
| ` @Override public void acceptGhost(Slot slot, ItemStack ingredient) ` | 实现调用 ` ingredient.is(ModItems.FILTER) `<br>分支 ` (ingredient.is(ModItems.FILTER)) ` 内调用 ` this.sendFilterItem(ingredient) `<br>实现调用 ` ControlValveBlockEntity.fluidOf(ingredient) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L251) |
| ` @Override public void acceptFluidGhost(int slotIndex, FluidStack fluid) ` | 实现调用 ` this.sendFilter(fluid.isEmpty() ? FluidStack.EMPTY : fluid.copyWithAmount(1)) `<br>实现调用 ` fluid.isEmpty() `<br>实现调用 ` fluid.copyWithAmount(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L261) |
| ` @Override public boolean mouseClicked(MouseButtonEvent event, boolean handled) ` | 末尾返回 ` super.mouseClicked(event, handled) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L267) |
| ` @Override public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(event, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L282) |
| ` @Override public boolean mouseReleased(MouseButtonEvent event) ` | 末尾返回 ` super.mouseReleased(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L290) |
| ` @Override public void extractBackground(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` super.extractBackground(graphics, mouseX, mouseY, a) `<br>实现调用 ` this.getImageWidth() `<br>实现调用 ` this.getImageHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L301) |
| ` @Override public void extractContents(GuiGraphicsExtractor graphics, int mouseX, int mouseY, float a) ` | 实现调用 ` this.isLocked() `<br>分支 ` (this.valueBox != null) ` 内调用 ` this.valueBox.setEditable(!locked) `<br>实现调用 ` super.extractContents(graphics, mouseX, mouseY, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L318) |
