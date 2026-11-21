# dev.dubhe.anvilcraft.client.gui.screen（ActiveSilencerScreen 至 ChuteScreen）



## ActiveSilencerScreen

` public class ActiveSilencerScreen extends AbstractContainerScreen<ActiveSilencerMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L44)

类型注解 ` @SuppressWarnings("DuplicatedCode") `、` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation SLIDER ` | 初值 ` SharedTextures.SMALL_SLIDER ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L48) |
| ` public static final int SOUND_FILTERED ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L59) |
| ` public static final int SOUND_MUTED ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L60) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | ` (this.minecraft.options.keyInventory.matches(keyCode, scanCode)) ` 成立时提前返回 ` this.getFocused() != null && this.getFocused().keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L114) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST, receiveCanceled = true) public static void recordCanceledSound(PlayLevelSoundEvent event) ` | 事件总线派发 ` PlayLevelSoundEvent ` 时调用。<br>实现调用 ` event.isCanceled() `<br>实现调用 ` event.getSound() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L124) |
| ` public void recordSound(ResourceLocation sound, Vec3 pos) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isSameThread() `<br>分支 ` (!minecraft.isSameThread()) ` 内调用 ` minecraft.execute(() -> this.recordSound(sound, pos)) `<br>[调用处 ActiveSilencerScreen.recordSound](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L147) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L144) |
| ` public Component getSoundTextAt(int index, int variant) ` | 获取屏幕上某一项的声音字幕<br>分支 ` (variant == SOUND_FILTERED) ` 内调用 ` this.filteredSounds.isEmpty() `<br>分支 ` (variant == SOUND_FILTERED) ` 内调用 ` this.filteredSounds.size() `<br>分支 ` (this.filteredSounds.isEmpty() \|\| actualIndex >= this.filteredSounds.size()) ` 内调用 ` Component.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L219) |
| ` public @Nullable ResourceLocation getSoundIdAt(int index, int variant) ` | 获取屏幕上某一项的声音id<br>分支 ` (variant == SOUND_FILTERED) ` 内调用 ` this.filteredSounds.isEmpty() `<br>分支 ` (variant == SOUND_FILTERED) ` 内调用 ` this.filteredSounds.size() `<br>分支 ` (variant == SOUND_FILTERED) ` 内调用 ` this.filteredSounds.get(actualIndex).left() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L235) |
| ` public ActiveSilencerScreen(ActiveSilencerMenu menu, Inventory playerInventory, Component title) ` | 主动消音器gui<br>实现调用 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L251) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L362) |
| ` public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 鼠标拖动事件<br>末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L384) |
| ` public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 鼠标点击<br>末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L422) |
| ` public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 渲染<br>实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderScroller(guiGraphics, leftPos + 119, topPos + 35, this.filteredSounds.size(), this.leftScrollOff) `<br>实现调用 ` this.filteredSounds.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L452) |
| ` public void handleSync(List<ResourceLocation> sounds) ` | 处理静音同步包<br>实现调用 ` this.applyMutedSounds(sounds) `<br>实现调用 ` this.menu.handleSync(sounds) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L467) |
| ` public String getFilterText() ` | 末尾返回 ` this.filterText `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L44) |

## AdjacentSmithingScreen

` public abstract class AdjacentSmithingScreen<M extends AdjacentSmithingMenu> extends ItemCombinerScreen<M> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L24)

带有相邻容器模板面板的锻造界面。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.isTemplatePanelVisible() `<br>分支 ` (!this.searchBox.visible) ` 内调用 ` this.searchBox.setFocused(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L77) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isTemplatePanelVisible() `<br>实现调用 ` this.renderTemplateTooltip(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L121) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | ` (!this.isTemplatePanelVisible()) ` 成立时提前返回 ` super.mouseClicked(mouseX, mouseY, button) `<br>` (this.isOverTemplateGrid(mouseX, mouseY)) ` 成立时提前返回 ` true `<br>` (button == 0 && this.searchBox != null && this.searchBox.isMouseOver(mouseX, mouseY)) ` 成立时提前返回 ` super.mouseClicked(mouseX, mouseY, button) `<br>` (this.isOverTemplatePanel(mouseX, mouseY)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L128) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L162) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L168) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.isTemplatePanelVisible() \|\| !this.isOverTemplateGrid(mouseX, mouseY)) ` 成立时提前返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdjacentSmithingScreen.java#L177) |

## AdvancedComparatorScreen

` public class AdvancedComparatorScreen extends AbstractContainerScreen<AdvancedComparatorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AdvancedComparatorScreen(AdvancedComparatorMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L40) |
| ` @Override public void onClose() ` | 实现调用 ` this.menu.getBlockEntity() `<br>实现调用 ` this.menu.getCompareMode().index() `<br>实现调用 ` this.menu.getCompareMode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L46) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 执行 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L121) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L179) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L184) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L197) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 分支 ` (this.scrolling1) ` 内调用 ` Math.clamp((int) (mouseX - this.sliderMin) / GRID, 0, 15) `<br>分支 ` (this.scrolling2) ` 内调用 ` Math.clamp((int) (mouseX - this.sliderMin) / GRID, 0, 15) `<br>分支 ` !(this.scrolling2) ` 内调用 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L206) |

## AnvilHammerScreen

` public class AnvilHammerScreen extends Screen implements IHasHammerEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int DELAY ` | 初值 ` 150 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L68) |
| ` public AnvilHammerScreen( BlockPos targetBlockPos, BlockState initialBlockState, Property<?> property, List<BlockState> possibleStates, InteractionHand hand, BlockHitResult hitVec ) ` | 实现调用 ` super(Component.translatable("screen.anvilcraft.anvil_hammer.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.anvil_hammer.title") `<br>实现调用 ` initialBlockState.getBlock() `<br>[调用处 ClientBlockEventListener.clientHandle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L92) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L96) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (this.wheel == null \|\| this.closingAnimationStarted) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L180) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isValidState(this.currentBlockState) `<br>分支 ` (this.validate && !this.isValidState(this.currentBlockState)) ` 内调用 ` this.wheel.onClosing() `<br>实现调用 ` this.shouldRender() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L291) |
| ` @Override public boolean isPauseScreen() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L321) |
| ` @Override public void removed() ` | 分支 ` (this.frostedBackground != null) ` 内调用 ` this.frostedBackground.close() `<br>实现调用 ` this.restoreHiddenBlock() `<br>分支 ` (!this.animationStarted) ` 内调用 ` this.setCurrentBlockState(this.currentBlockState.cycle(this.property)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L326) |
| ` @Override public void tick() ` | 分支 ` (this.closingAnimationStarted) ` 内调用 ` this.minecraft.handleKeybinds() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L396) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | ` (!this.minecraft.options.keyUse.matchesMouse(button)) ` 成立时提前返回 ` super.mouseReleased(mouseX, mouseY, button) `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L403) |
| ` @Override public boolean shouldRender() ` | ` (this.animationStarted) ` 成立时提前返回 ` true `<br>末尾返回 ` (this.displayTime + DELAY) <= System.currentTimeMillis() `<br>[调用处 AnvilHammerScreen.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L299) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L418) |
| ` @Override public boolean shouldSkipRebuildBlock() ` | 末尾返回 ` !this.shouldRebuildChunk ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L424) |
| ` @Override public BlockPos renderingBlockPos() ` | 末尾返回 ` this.currentModelTarget.pos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L444) |
| ` @Override public BlockPos hiddenBlockPos() ` | 末尾返回 ` this.initialModelTarget.pos() `<br>[调用处 AnvilHammerScreen.triggerChunkRebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L311) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L449) |
| ` @Override public BlockState renderingBlockState() ` | 末尾返回 ` this.currentModelTarget.state() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L454) |
| ` @Override public RenderType renderType() ` | ` (IrisState.isShaderEnabled()) ` 成立时提前返回 ` RenderType.translucent() `<br>末尾返回 ` ModRenderTypes.TRANSLUCENT_COLORED_OVERLAY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L459) |

## AnvilHammerSlotOverlay

` public final class AnvilHammerSlotOverlay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerSlotOverlay.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics guiGraphics, HammerOpenedAnvilMenu menu, Slot slot) ` | 实现调用 ` menu.anvilcraft$isOpenedByHammer() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getInventory() `<br>[调用处 AbstractContainerScreenMixin.anvilcraft$renderHammerOpenedAnvilSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/AbstractContainerScreenMixin.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerSlotOverlay.java#L16) |

## AutoEnchantingTableScreen

` public class AutoEnchantingTableScreen extends AbstractContainerScreen<AutoEnchantingTableMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L48)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AutoEnchantingTableScreen( AutoEnchantingTableMenu menu, Inventory playerInventory, Component title ) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L88) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.ghostOutput.isEmpty() `<br>分支 ` ( this.ghostOutput != null && !this.ghostOutput.isEmpty() ) ` 内调用 ` this.menu.getSlot(AutoEnchantingTableBlockEntity.SLOT_OUTPUT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L196) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 5) `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L512) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L518) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | 末尾返回 ` super.keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L557) |
| ` @Override public boolean charTyped(char codePoint, int modifiers) ` | ` (this.searchBox == null) ` 成立时提前返回 ` super.charTyped(codePoint, modifiers) `<br>` (this.searchBox.isFocused()) ` 成立时提前返回 ` this.searchBox.charTyped(codePoint, modifiers) `<br>末尾返回 ` super.charTyped(codePoint, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L573) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L582) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L591) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L601) |

## BaseChuteScreen

` public abstract class BaseChuteScreen<T extends BaseChuteBlockEntity, M extends BaseChuteMenu<T>> extends BaseMachineScreen<M> implements IFilterScreen<M> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L33)

溜槽屏幕基类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseChuteScreen(M menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L44) |
| ` @Override public void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` super.renderSlot(guiGraphics, slot) `<br>实现调用 ` IFilterScreen.super.renderSlot(guiGraphics, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L70) |
| ` @Override public M getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L119) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L124) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` (this.width - this.imageWidth) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L162) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` (this.height - this.imageHeight) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L167) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (ScreenEditing.isReadOnly()) ` 成立时提前返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) `<br>末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L172) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseChuteScreen.java#L33) |

## BaseMachineScreen

` public abstract class BaseMachineScreen<T extends AbstractContainerMenu> extends AbstractContainerScreen<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseMachineScreen(T menu, Inventory inventory, Component title) ` | 基本机器 GUI<br>参数 ` menu ` 菜单<br>参数 ` inventory ` 玩家背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, inventory, title) `<br>实现调用 ` BaseMachineScreen.getDirectionButtonSupplier(134, 18) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L39) |
| ` public BaseMachineScreen(T menu, Inventory inventory, Component title, int outputDirBtnX, int outputDirBtnY) ` | 基本机器 GUI<br>参数 ` menu ` 菜单<br>参数 ` inventory ` 玩家背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, inventory, title) `<br>实现调用 ` BaseMachineScreen.getDirectionButtonSupplier(outputDirBtnX, outputDirBtnY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L52) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderBeforeTooltip(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L83) |
| ` public void setDirectionButtonSupplier(final BiFunction<Integer, Integer, OutputDirectionButton> directionButtonSupplier) ` | 执行 ` this.directionButtonSupplier = directionButtonSupplier `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L22) |
| ` @Nullable public OutputDirectionButton getDirectionButton() ` | 末尾返回 ` this.directionButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L22) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L22) |

## BatchCrafterScreen

` public class BatchCrafterScreen extends BaseMachineScreen<BatchCrafterMenu> implements IFilterScreen<BatchCrafterMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCrafterScreen(BatchCrafterMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L40) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 分支 ` (this.recipeCycleButton != null) ` 内调用 ` this.menu.getRecipes().size() `<br>分支 ` (this.recipeCycleButton != null) ` 内调用 ` this.menu.getRecipes() `<br>实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L73) |
| ` @Override public void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` super.renderSlot(guiGraphics, slot) `<br>实现调用 ` IFilterScreen.super.renderSlot(guiGraphics, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L106) |
| ` @Override public BatchCrafterMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L157) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L162) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` this.leftPos = (this.width - this.imageWidth) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L199) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` this.topPos = (this.height - this.imageHeight) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L204) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L209) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L30) |

## BatchCutterScreen

` public class BatchCutterScreen extends BaseMachineScreen<BatchCutterMenu> implements IFilterScreen<BatchCutterMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCutterScreen(BatchCutterMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title, 152, 20) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L66) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / this.scrollable.column()) `<br>实现调用 ` this.scrollable.column() `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L78) |
| ` @Override public void renderSlot(GuiGraphics graphics, Slot slot) ` | 实现调用 ` super.renderSlot(graphics, slot) `<br>实现调用 ` IFilterScreen.super.renderSlot(graphics, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L143) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L207) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L237) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L247) |
| ` @Override public BatchCutterMenu getFilterMenu() ` | 末尾返回 ` this.menu ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L257) |
| ` @Override public void flush() ` | 执行 ` this.enableFilterButton.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L262) |
| ` @Override public int getOffsetX() ` | 末尾返回 ` this.leftPos = (this.width - this.imageWidth) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L299) |
| ` @Override public int getOffsetY() ` | 末尾返回 ` this.topPos = (this.height - this.imageHeight) / 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L304) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L309) |
| ` public EnableFilterButton getEnableFilterButton() ` | 末尾返回 ` this.enableFilterButton `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCutterScreen.java#L35) |

## CategorySettingsScreen

` public class CategorySettingsScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void rebuild() ` | 实现调用 ` this.alternates.clear() `<br>实现调用 ` CategoryInitEventListener.getAllModsCategories() `<br>实现调用 ` this.draftSetting.listed() `<br>[调用处 CategorySettingsScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L214) |
| ` @Override public void renderBackground(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 执行 ` this.renderTransparentBackground(graphics) `<br>[调用处 CategorySettingsScreen.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L266) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L258) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.renderBackground(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.background() `<br>实现调用 ` this.renderListedArea(graphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L264) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | 末尾返回 ` super.keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L535) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | ` (super.mouseClicked(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>` (this.clickListed(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>` (this.clickAlternate(mouseX, mouseY, button)) ` 成立时提前返回 ` true `<br>末尾返回 ` this.clickPlayerInventory(mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L545) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L639) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L655) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L665) |
| ` @Override public void onClose() ` | 实现调用 ` this.whenConfirm() `<br>实现调用 ` this.whenCancel() `<br>[调用处 CategorySettingsScreen.keyPressed](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L539) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L764) |
| ` @Override public boolean isPauseScreen() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L773) |

## CelestialForgingAnvilScreen

` public class CelestialForgingAnvilScreen extends AbstractContainerScreen<CelestialForgingAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L75)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public boolean isGuideTriggered() ` | 末尾返回 ` Boolean.TRUE.equals(this.guideTriggered) `<br>[调用处 CelestialForgingAnvilScreen.renderPreviewArea](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L661) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L147) |
| ` public CelestialForgingAnvilScreen(CelestialForgingAnvilMenu menu, Inventory playerInventory, Component title) ` | 实现调用 ` super(menu, playerInventory, title) `<br>实现调用 ` rollTitle(title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L229) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isLocked() `<br>实现调用 ` this.isGuideTriggered() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1503) |
| ` @Override public void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` super.renderSlot(guiGraphics, slot) `<br>实现调用 ` slot.hasItem() `<br>分支 ` (slot instanceof CelestialForgingAnvilMenu.CFAAnvilSlot && !slot.hasItem()) ` 内调用 ` slot.getSlotIndex() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1534) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1696) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | 末尾返回 ` super.mouseScrolled(mouseX, mouseY, scrollX, scrollY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1771) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1816) |

## ChuteScreen

` public class ChuteScreen extends BaseChuteScreen<ChuteBlockEntity, ChuteMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ChuteScreen.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChuteScreen(ChuteMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ChuteScreen.java#L11) |
