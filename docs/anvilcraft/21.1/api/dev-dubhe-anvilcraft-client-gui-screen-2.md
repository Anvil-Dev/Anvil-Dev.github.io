# dev.dubhe.anvilcraft.client.gui.screen（ControlValveScreen 至 IGhostIngredientScreen.Vec2i）



## ControlValveScreen

` public class ControlValveScreen extends AbstractContainerScreen<ControlValveMenu> implements IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L45)

控制阀 GUI。上方过滤格设置允许通过的流体；下方滑条 + 按钮 + 数字框设置最大流速（单位为 mB/tick）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation BACKGROUND ` | 初值 ` SharedTextures.bg("machine", "control_valve") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L46) |
| ` public static final ResourceLocation BUTTON_MAX ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_max") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L47) |
| ` public static final ResourceLocation BUTTON_ADD ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_add") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L48) |
| ` public static final ResourceLocation BUTTON_MINUS ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_minus") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L49) |
| ` public static final ResourceLocation BUTTON_MIN ` | 初值 ` SharedTextures.textureGui("misc/slider_like/button_min") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L50) |
| ` public ControlValveScreen(ControlValveMenu menu, Inventory inventory, Component title) ` | 实现调用 ` super(menu, inventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L82) |
| ` public void setValue(int value) ` | 服务端 init 包设置初值。<br>实现调用 ` this.slider.setExactValue(value) `<br>实现调用 ` this.valueBox.setValue(Integer.toString(this.slider.getValue())) `<br>实现调用 ` Integer.toString(this.slider.getValue()) `<br>[调用处 ControlValveScreen.containerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L147) |
| ` public void setFilter(int index, FluidStack fluid) ` | 过滤流体被服务端回传更新。<br>执行 ` this.filterFluid = fluid `<br>[调用处 ControlValveScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L160) |
| ` public void setFilterItem(ItemStack filterItem) ` | 过滤器物品被服务端回传更新。<br>实现调用 ` filterItem.copyWithCount(1) `<br>实现调用 ` List.copyOf(ControlValveBlockEntity.resolveFluids(this.filterItem)) `<br>实现调用 ` ControlValveBlockEntity.resolveFluids(this.filterItem) `<br>[调用处 ControlValveScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L142) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L165) |
| ` @Override public Collection<Integer> getGhostSlots() ` | 末尾返回 ` List.of(FILTER_GHOST_ID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L217) |
| ` @Override public int[] getGhostSlotArea(int slotIndex) ` | 末尾返回 ` new int[]{FILTER_X, FILTER_Y, 16, 16} ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L222) |
| ` @Override public void acceptGhost(Slot slot, ItemStack ingredient) ` | 实现调用 ` ingredient.is(ModItems.FILTER) `<br>分支 ` (ingredient.is(ModItems.FILTER)) ` 内调用 ` this.setFilterItem(ingredient.copyWithCount(1)) `<br>分支 ` (ingredient.is(ModItems.FILTER)) ` 内调用 ` ingredient.copyWithCount(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L227) |
| ` @Override public void acceptFluidGhost(int slotIndex, FluidStack fluid) ` | 实现调用 ` this.filterItem.isEmpty() `<br>分支 ` (!this.filterItem.isEmpty()) ` 内调用 ` this.setFilterItem(ItemStack.EMPTY) `<br>分支 ` (!this.filterItem.isEmpty()) ` 内调用 ` PacketDistributor.sendToServer(new ControlValveFilterItemPacket(ItemStack.EMPTY)) `<br>[调用处 ControlValveScreen.acceptGhost](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L237) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L240) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 左键点击过滤格： 手持过滤器 → 放入过滤器，按过滤器内容过滤多种流体； 手持其他能解析出流体的物品（桶等）→ 设为单流体白名单； 空手 → 取出过滤器并清空单流体白名单。 同时把左键转发给滑条以支持拖动。<br>末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L260) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L286) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L294) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isLocked() `<br>实现调用 ` this.valueBox.setEditable(!locked) `<br>分支 ` (locked) ` 内调用 ` this.slider.setValue(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L374) |

## CreativeLaserScreen

` public class CreativeLaserScreen extends AbstractContainerScreen<CreativeLaserMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation BACKGROUND ` | 初值 ` SharedTextures.bg("machine", "creative_laser") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L27) |
| ` public CreativeLaserScreen(CreativeLaserMenu menu, Inventory inventory, Component title) ` | 实现调用 ` super(menu, inventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L52) |
| ` public void setValue(int level, LensType lensType, boolean gamma) ` | 实现调用 ` Math.clamp(level, 0, 64) `<br>实现调用 ` this.lensButtons.isEmpty() `<br>分支 ` (!this.lensButtons.isEmpty()) ` 内调用 ` this.lensButtons.size() `<br>[调用处 CreativeLaserScreen.resize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L224) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L148) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.init(minecraft, width, height) `<br>实现调用 ` this.setValue(level, lensType, gamma) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L218) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L232) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L240) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L248) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` button.isMouseOver(mouseX, mouseY) `<br>分支 ` (button.visible && button.isMouseOver(mouseX, mouseY)) ` 内调用 ` this.renderButtonTooltip(guiGraphics, button, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L263) |

## EmberAnvilScreen

` public class EmberAnvilScreen extends ItemCombinerScreen<EmberAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberAnvilScreen(EmberAnvilMenu menu, Inventory playerInventory, Component title) ` | 皇家铁砧 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L32) |
| ` @Override public void containerTick() ` | 执行 ` super.containerTick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L44) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.name.getValue() `<br>实现调用 ` this.init(minecraft, width, height) `<br>实现调用 ` this.name.setValue(string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L66) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | ` (this.name.keyPressed(keyCode, scanCode, modifiers) \|\| this.name.canConsumeInput()) ` 成立时提前返回 ` true `<br>末尾返回 ` super.keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L73) |
| ` @Override public void renderFg(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 执行 ` this.name.render(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L131) |
| ` @Override public void slotChanged( AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 0) ` 内调用 ` this.name.setValue(stack.isEmpty() ? "" : stack.getHoverName().getString()) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.isEmpty() `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.getHoverName().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberAnvilScreen.java#L146) |

## EmberGrindstoneScreen

` public class EmberGrindstoneScreen extends AbstractContainerScreen<EmberGrindstoneMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberGrindstoneScreen(EmberGrindstoneMenu menu, Inventory playerInventory, @SuppressWarnings("unused") Component title) ` | 实现调用 ` super(menu, playerInventory, Component.translatable("screen.anvilcraft.ember_grindstone.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.ember_grindstone.title") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L56) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderEnchantmentSelectingArea(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L76) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 3) `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L179) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L186) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L214) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L224) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberGrindstoneScreen.java#L234) |

## EmberSmithingScreen

` public class EmberSmithingScreen extends AdjacentSmithingScreen<EmberSmithingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final List<ResourceLocation> EMPTY_SLOT_SMITHING_TEMPLATES ` | 初值 ` List.of( EMPTY_SLOT_TWO_TO_ONE_SMITHING_TEMPLATE, EMPTY_SLOT_FOUR_TO_ONE_SMITHING_TEMPLATE, EMPTY_SLOT_EIGHT_TO_ONE_SMITHING_TEMPLATE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L40) |
| ` public EmberSmithingScreen(EmberSmithingMenu menu, Inventory inventory, Component title) ` | 余烬锻造台 GUI<br>参数 ` menu ` 菜单<br>参数 ` inventory ` 背包<br>参数 ` title ` 标题<br>执行 ` super(menu, inventory, title, BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L66) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.getTemplateItem() `<br>实现调用 ` templateOp.isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L82) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderOnboardingTooltips(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EmberSmithingScreen.java#L119) |

## EnergyWeaponMakeScreen

` public class EnergyWeaponMakeScreen extends AbstractContainerScreen<EnergyWeaponMakeMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnergyWeaponMakeScreen(EnergyWeaponMakeMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L58) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderSelectingArea(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderCantCraftBlink(graphics) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L98) |
| ` @Override public void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` super.renderSlot(guiGraphics, slot) `<br>实现调用 ` filtered.isFilterEmpty() `<br>实现调用 ` slot.hasItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L185) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 3) `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L233) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L240) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L268) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L278) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/EnergyWeaponMakeScreen.java#L288) |

## ExpCollectorScreen

` public class ExpCollectorScreen extends AbstractContainerScreen<ExpCollectorMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L18)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpCollectorScreen(ExpCollectorMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L23) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L126) |

## FilterScreen

` public class FilterScreen extends AbstractContainerScreen<FilterMenu> implements IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterScreen(FilterMenu menu, Inventory playerInventory, Component title) ` | 执行 ` super(menu, playerInventory, title) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L35) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L95) |
| ` @Override public Collection<Integer> getGhostSlots() ` | 末尾返回 ` IGhostIngredientScreen.range(36, 54, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L123) |
| ` @Override public void acceptGhost(Slot slot, ItemStack filterStack) ` | 实现调用 ` filterStack.get(ModComponents.FILTER_CONTENT) `<br>实现调用 ` content.getNestingLevel() `<br>实现调用 ` filterSlot.set(filterStack.copyWithCount(1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L128) |

## FrostAnvilScreen

` public class FrostAnvilScreen extends ItemCombinerScreen<FrostAnvilMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostAnvilScreen(FrostAnvilMenu menu, Inventory playerInventory, Component title) ` | 皇家铁砧 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>实现调用 ` super(menu, playerInventory, title, ANVIL_LOCATION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L32) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.name.getValue() `<br>实现调用 ` this.init(minecraft, width, height) `<br>实现调用 ` this.name.setValue(string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L61) |
| ` @Override public boolean keyPressed(int keyCode, int scanCode, int modifiers) ` | ` (this.name.keyPressed(keyCode, scanCode, modifiers) \|\| this.name.canConsumeInput()) ` 成立时提前返回 ` true `<br>末尾返回 ` super.keyPressed(keyCode, scanCode, modifiers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L68) |
| ` @Override public void renderFg(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 执行 ` this.name.render(guiGraphics, mouseX, mouseY, partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L133) |
| ` @Override public void slotChanged( AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 0) ` 内调用 ` this.name.setValue(stack.isEmpty() ? "" : stack.getHoverName().getString()) `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.isEmpty() `<br>分支 ` (dataSlotIndex == 0) ` 内调用 ` stack.getHoverName().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostAnvilScreen.java#L146) |

## FrostGrindstoneScreen

` public class FrostGrindstoneScreen extends AbstractContainerScreen<FrostGrindstoneMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostGrindstoneScreen(FrostGrindstoneMenu menu, Inventory playerInventory, @SuppressWarnings("unused") Component title) ` | 实现调用 ` super(menu, playerInventory, Component.translatable("screen.anvilcraft.frost_grindstone.title")) `<br>实现调用 ` Component.translatable("screen.anvilcraft.frost_grindstone.title") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L49) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderEnchantmentSelectingArea(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderTooltip(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L73) |
| ` @Override public void resize(Minecraft minecraft, int width, int height) ` | 实现调用 ` this.scrollable.calculateScroll(this.head / 3) `<br>实现调用 ` this.init(minecraft, width, height) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L142) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseClicked(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L149) |
| ` @Override public boolean mouseReleased(double mouseX, double mouseY, int button) ` | 末尾返回 ` super.mouseReleased(mouseX, mouseY, button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L175) |
| ` @Override public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) ` | 末尾返回 ` super.mouseDragged(mouseX, mouseY, button, dragX, dragY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L185) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.scrollable.canScroll()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostGrindstoneScreen.java#L195) |

## FrostSmithingScreen

` public class FrostSmithingScreen extends AdjacentSmithingScreen<FrostSmithingMenu> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Quaternionf ARMOR_STAND_ANGLE ` | 初值 ` new Quaternionf().rotationXYZ(0.43633232f, 0.0f, (float) Math.PI) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L60) |
| ` public FrostSmithingScreen(FrostSmithingMenu menu, Inventory playerInventory, Component title) ` | 皇家锻造台 GUI<br>参数 ` menu ` 菜单<br>参数 ` playerInventory ` 背包<br>参数 ` title ` 标题<br>执行 ` super(menu, playerInventory, title, BACKGROUND) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L79) |
| ` @Override public void containerTick() ` | 实现调用 ` super.containerTick() `<br>实现调用 ` this.templateIcon.tick(EMPTY_SLOT_SMITHING_TEMPLATES) `<br>实现调用 ` this.getPermutTemplateItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L140) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.renderOnboardingTooltips(guiGraphics, mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L173) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 分支 ` (dataSlotIndex == 3) ` 内调用 ` this.updateArmorStandPreview(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FrostSmithingScreen.java#L216) |

## IFilterScreen

` public interface IFilterScreen<T extends AbstractContainerMenu & IFilterMenu> extends IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L31)

有过滤的 GUI

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Component SCROLL_WHEEL_TO_CHANGE_STACK_LIMIT_TOOLTIP ` | 初值 ` Component.translatable( "screen.anvilcraft.filter.scroll_wheel_to_change_stack_limit") .withStyle(ChatFormatting.ITALIC, ChatFormatting.GRAY) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L32) |
| ` Component SHIFT_TO_SCROLL_FASTER_TOOLTIP ` | 初值 ` Component.translatable("screen.anvilcraft.filter.shift_to_scroll_faster") .withStyle(ChatFormatting.ITALIC, ChatFormatting.GRAY) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L35) |
| ` T getFilterMenu() ` | [调用处 IFilterScreen.isFilterEnabled](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L38) |
| ` default boolean isFilterEnabled() ` | 获取是否开启过滤<br>返回 是否开启过滤<br>末尾返回 ` this.getFilterMenu().isFilterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L45) |
| ` default void setFilterEnabled(boolean enable) ` | 设置是否开启过滤<br>参数 ` enable ` 是否开启过滤<br>执行 ` this.getFilterMenu().setFilterEnabled(enable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L54) |
| ` default void setSlotDisabled(int slot, boolean disable) ` | 设置指定槽位是否禁用<br>参数 ` slot ` 槽位<br>参数 ` disable ` 是否禁用<br>执行 ` this.getFilterMenu().setSlotDisabled(slot, disable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L64) |
| ` default boolean isSlotDisabled(int slot) ` | 获取指定槽位是否禁用<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterMenu().isSlotDisabled(slot) `<br>[调用处 IFilterScreen.renderSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L73) |
| ` @SuppressWarnings("UnusedReturnValue") default boolean setFilter(int slot, ItemStack filter) ` | 设置指定槽位的过滤<br>参数 ` slot ` 槽位<br>参数 ` filter ` 过滤<br>末尾返回 ` this.getFilterMenu().setFilter(slot, filter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L83) |
| ` default ItemStack getFilter(int slot) ` | 获取指定槽位的过滤<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterMenu().getFilter(slot) `<br>[调用处 IFilterScreen.renderSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L156) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L93) |
| ` default int getSlotLimit(int slot) ` | 获取指定槽位的物品上限<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterMenu().getSlotLimit(slot) `<br>[调用处 IFilterScreen.renderSlotLimit](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L217) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L102) |
| ` default void setSlotLimit(int slot, int limit) ` | 设置指定槽位的物品上限<br>参数 ` slot ` 槽位<br>参数 ` limit ` 物品上限<br>执行 ` this.getFilterMenu().setSlotLimit(slot, limit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L112) |
| ` default void flush() ` | 刷新<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L119) |
| ` default BiFunction<Integer, Integer, EnableFilterButton> getEnableFilterButtonSupplier(int x, int y) ` | 获取一个生成启用过滤按钮的生成器<br>参数 ` x ` 按钮 X 坐标<br>参数 ` y ` 按钮 Y 坐标<br>返回 生成启用过滤按钮的生成器 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L129) |
| ` default void renderSlot(GuiGraphics guiGraphics, Slot slot) ` | 渲染槽位<br>参数 ` guiGraphics ` 画布<br>参数 ` slot ` 槽位<br>实现调用 ` crafterSlot.isFilter() `<br>实现调用 ` this.isSlotDisabled(slot.getContainerSlot()) `<br>实现调用 ` slot.getContainerSlot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L149) |
| ` default ItemStack getHoveredFilterItem(@Nullable Slot slot) ` | ` (!(slot instanceof SlotItemHandlerWithFilter filterSlot)) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (!filterSlot.isFilter()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (filterSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (this.isSlotDisabled(slotIndex)) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` this.getFilter(slotIndex) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L163) |
| ` default ItemStack getIncomingStack(@Nullable Player player, ClickType type, int mouseButton, ItemStack carried) ` | 解析本次点击会放入过滤槽的物品。 PICKUP 用光标物品，但 SWAP（数字键 / 副手交换键）取的是快捷栏 / 副手物品， 此时光标为空，用光标物品判断会漏掉这类替换。<br>参数 ` player ` 玩家，可为 null<br>参数 ` type ` 点击类型<br>参数 ` mouseButton ` 鼠标键；SWAP 时为快捷栏槽位号（0-8）或副手（40）<br>参数 ` carried ` 光标物品<br>返回 本次会放入槽位的物品副本<br>` (type != ClickType.SWAP \|\| player == null) ` 成立时提前返回 ` carried `<br>末尾返回 ` player.getInventory().getItem(mouseButton).copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L184) |
| ` default void renderDisabledSlot(GuiGraphics guiGraphics, Slot crafterSlot) ` | 渲染禁用的槽位<br>参数 ` guiGraphics ` 画布<br>参数 ` crafterSlot ` 槽位<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(SharedTextures.DISABLED_SLOT, crafterSlot.x, crafterSlot.y, 0, 0, 16, 16, 16, 16) `<br>[调用处 IFilterScreen.renderSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L153) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L195) |
| ` default void renderFilterItem(GuiGraphics guiGraphics, Slot slot, ItemStack stack) ` | 渲染过滤物品<br>参数 ` guiGraphics ` 画布<br>参数 ` slot ` 槽位<br>参数 ` stack ` 物品堆叠<br>实现调用 ` RenderSupport.renderItemWithTransparency(stack, guiGraphics.pose(), i, j, 0.52f) `<br>实现调用 ` guiGraphics.pose() `<br>实现调用 ` guiGraphics.fill(i, j, i + 16, j + 16, 0x60ffaaaa) `<br>[调用处 IFilterScreen.renderSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L207) |
| ` default void renderSlotLimit(GuiGraphics guiGraphics, Slot slot) ` | 实现调用 ` filterSlot.isFilter() `<br>实现调用 ` slot.getContainerSlot() `<br>实现调用 ` this.getSlotLimit(slotIndex) `<br>[调用处 IFilterScreen.renderSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L214) |
| ` default int getOffsetY() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L239) |
| ` default int getOffsetX() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L243) |
| ` @Override default Collection<Integer> getGhostSlots() ` | ` (ScreenEditing.isReadOnly() \|\| !this.getFilterMenu().isFilterEnabled()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` IGhostIngredientScreen.range(36, 45, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L247) |
| ` @Override default void acceptGhost(Slot slot, ItemStack ingredient) ` | 实现调用 ` ScreenEditing.isReadOnly() `<br>实现调用 ` this.getFilterMenu().isFilterEnabled() `<br>实现调用 ` this.getFilterMenu() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L253) |

## IGhostIngredientScreen

` public interface IGhostIngredientScreen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L11)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default Collection<Integer> getGhostSlots() ` | 末尾返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L13) |
| ` default Vec2i getSlotSize(int slot) ` | 末尾返回 ` new Vec2i(16, 16) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L17) |
| ` default void acceptGhost(Slot slot, ItemStack ingredient) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L21) |
| ` default void acceptFluidGhost(int slotIndex, FluidStack fluid) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L24) |
| ` default int[] getGhostSlotArea(int slotIndex) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L27) |
| ` static Collection<Integer> range(int start, int end, int step) ` | 末尾返回 ` list `<br>[调用处 FilterScreen.getGhostSlots](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/FilterScreen.java#L125) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L34) |

## IGhostIngredientScreen.Vec2i

` record Vec2i(int x, int y) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Vec2i(int x, int y) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IGhostIngredientScreen.java#L31) |
