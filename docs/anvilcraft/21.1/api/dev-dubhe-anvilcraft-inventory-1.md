# dev.dubhe.anvilcraft.inventory（ActiveSilencerMenu 至 CelestialForgingAnvilMenu.SeedSlot）



## ActiveSilencerMenu

` public class ActiveSilencerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ActiveSilencerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 主动消音器的ScreenHandler<br>实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L30) |
| ` public ActiveSilencerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, inventory.player.level().getBlockEntity(extraData.readBlockPos())) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L37) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L42) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.ACTIVE_SILENCER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L47) |
| ` public void addSound(ResourceLocation soundId) ` | 执行 ` this.blockEntity.addSound(soundId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L56) |
| ` public void removeSound(ResourceLocation soundId) ` | 执行 ` this.blockEntity.removeSound(soundId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L60) |
| ` public void handleSync(List<ResourceLocation> sounds) ` | 执行 ` this.blockEntity.sync(sounds) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L64) |
| ` public ActiveSilencerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ActiveSilencerMenu.java#L20) |

## AdjacentSmithingMenu

` public abstract class AdjacentSmithingMenu extends ItemCombinerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L39)

支持从相邻容器临时借用锻造模板的菜单基类。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public boolean isBorrowedTemplate(ItemStack stack) ` | 末尾返回 ` !this.borrowedTemplateStack.isEmpty() && stack.is(this.borrowedTemplateStack.getItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L76) |
| ` public void runRecipeTransfer(Runnable transfer) ` | JEI 批量调整输入时延后槽位联动，结束后统一更新结果。<br>实现调用 ` transfer.run() `<br>实现调用 ` this.slotsChanged(this.inputSlots) `<br>实现调用 ` this.broadcastChanges() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L81) |
| ` public boolean selectTemplateForTransfer(ServerPlayer player, ItemStack template) ` | 为配方转移选用模板；重复请求不会取消已选模板。<br>` (player != this.menuPlayer \|\| !this.stillValid(player) \|\| !this.isUsableTemplate(template)) ` 成立时提前返回 ` false `<br>` (ItemStack.isSameItemSameComponents(current, template)) ` 成立时提前返回 ` true `<br>` (!this.containsTemplate(itemId(template)) && inventorySlot < 0) ` 成立时提前返回 ` false `<br>` (ItemStack.isSameItemSameComponents(this.inputSlots.getItem(TEMPLATE_SLOT), template)) ` 成立时提前返回 ` true `<br>` (inventorySlot < 0) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.inputSlots.getItem(TEMPLATE_SLOT), template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L97) |
| ` public void handleTemplateSync( List<ItemStack> templates, List<ResourceLocation> favorites, ItemStack borrowedTemplate ) ` | 接收服务端发来的模板面板数据。<br>实现调用 ` templates.stream().map(ItemStack::copy).toList() `<br>实现调用 ` templates.stream().map(ItemStack::copy) `<br>实现调用 ` templates.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L125) |
| ` public void handleTemplateAction(Player player, ResourceLocation template, boolean toggleFavorite) ` | 处理模板面板点击；所有容器状态都在服务端重新校验。<br>实现调用 ` this.refreshTemplateCatalog() `<br>实现调用 ` this.containsTemplate(template) `<br>分支 ` (toggleFavorite) ` 内调用 ` player.getData(ModDataAttachments.SMITHING_TEMPLATE_FAVORITES) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L136) |
| ` @Override public void broadcastChanges() ` | 实现调用 ` super.broadcastChanges() `<br>实现调用 ` this.templateLevel.getGameTime() `<br>实现调用 ` this.refreshTemplateCatalog() `<br>[调用处 AdjacentSmithingMenu.runRecipeTransfer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L156) |
| ` @Override public void clicked(int slotId, int button, ClickType clickType, Player player) ` | 实现调用 ` this.borrowedTemplateStack.isEmpty() `<br>实现调用 ` super.clicked(slotId, button, clickType, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L167) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!this.borrowedTemplateStack.isEmpty() && index > this.getResultSlot() && this.isUsableTemplate(this.getSlot(index).getItem())) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` super.quickMoveStack(player, index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L173) |
| ` @Override public boolean canTakeItemForPickAll(ItemStack stack, Slot slot) ` | ` (!this.borrowedTemplateStack.isEmpty() && slot == this.getSlot(TEMPLATE_SLOT)) ` 成立时提前返回 ` false `<br>末尾返回 ` super.canTakeItemForPickAll(stack, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L183) |
| ` @Override public void removed(Player player) ` | 分支 ` (!this.templateLevel.isClientSide && this.borrowedTemplate != null) ` 内调用 ` this.returnBorrowedTemplate(false) `<br>实现调用 ` super.removed(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L189) |
| ` public List<ItemStack> getAdjacentTemplates() ` | 末尾返回 ` this.adjacentTemplates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L39) |
| ` public List<ResourceLocation> getFavoriteTemplates() ` | 末尾返回 ` this.favoriteTemplates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L39) |
| ` public boolean isRecipeTransferInProgress() ` | 末尾返回 ` this.recipeTransferInProgress `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdjacentSmithingMenu.java#L39) |

## AdvancedComparatorMenu

` public class AdvancedComparatorMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AdvancedComparatorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` this.blockEntity.getCompareMode() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L38) |
| ` public AdvancedComparatorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, readComparator(inventory, extraData)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L49) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L66) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.ADVANCED_COMPARATOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L71) |
| ` public void setCompareMode(byte mode) ` | 执行 ` this.compareMode = AdvancedComparatorBlockEntity.Mode.fromIndex(mode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L80) |
| ` public void setOutputInvert(boolean isInvert) ` | 执行 ` this.outputInvert = isInvert ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L84) |
| ` public void setRedstoneControl(boolean redstoneControl) ` | 执行 ` this.redstoneControl = redstoneControl ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L88) |
| ` public AdvancedComparatorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public AdvancedComparatorBlockEntity.Mode getCompareMode() ` | 末尾返回 ` this.compareMode `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public boolean isOutputInvert() ` | 末尾返回 ` this.outputInvert `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public boolean isRedstoneControl() ` | 末尾返回 ` this.redstoneControl `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public int getHighLimit() ` | 末尾返回 ` this.highLimit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public void setHighLimit(final int highLimit) ` | 执行 ` this.highLimit = highLimit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public int getLowLimit() ` | 末尾返回 ` this.lowLimit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |
| ` public void setLowLimit(final int lowLimit) ` | 执行 ` this.lowLimit = lowLimit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L21) |

## AutoEnchantingTableMenu

` public class AutoEnchantingTableMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AutoEnchantingTableMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine ) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() `<br>分支 ` (!this.level.isClientSide) ` 内调用 ` this.blockEntity.onMenuOpen() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L46) |
| ` public AutoEnchantingTableMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData ) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L113) |
| ` @Override public void broadcastChanges() ` | 分支 ` (!this.level.isClientSide) ` 内调用 ` this.blockEntity.getItemHandler().getStackInSlot(AutoEnchantingTableBlockEntity.SLOT_PRIMER) `<br>分支 ` (!this.level.isClientSide) ` 内调用 ` this.blockEntity.getItemHandler() `<br>分支 ` (!this.level.isClientSide) ` 内调用 ` ItemStack.matches(this.lastPrimerStack, primer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L146) |
| ` public void select(int index) ` | 实现调用 ` this.enchantments.size() `<br>实现调用 ` this.enchantments.get(index) `<br>实现调用 ` this.blockEntity.selectEnchantment(data.enchantment()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L159) |
| ` public void unselect(int index) ` | 实现调用 ` this.enchantments.size() `<br>实现调用 ` this.enchantments.get(index) `<br>实现调用 ` this.blockEntity.unselectEnchantment(data.enchantment()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L166) |
| ` public void setLiquidLevel(int level) ` | 执行 ` this.blockEntity.setLiquidLevel(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L173) |
| ` @Override public void slotsChanged(Container container) ` | 执行 ` super.slotsChanged(container) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L177) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!slot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (slotItem.getCount() == itemStack.getCount()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` itemStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L182) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.AUTO_ENCHANTING_TABLE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L207) |
| ` @Override public void removed(Player player) ` | 分支 ` (!this.level.isClientSide) ` 内调用 ` this.blockEntity.onMenuClose() `<br>实现调用 ` super.removed(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L216) |
| ` public AutoEnchantingTableBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L32) |
| ` public Inventory getInventory() ` | 末尾返回 ` this.inventory `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L32) |
| ` public IntSet getSelectedIndexes() ` | 末尾返回 ` this.selectedIndexes `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L32) |
| ` public List<EnchantmentData> getEnchantments() ` | 末尾返回 ` this.enchantments `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L32) |

## BaseChuteMenu

` public abstract class BaseChuteMenu<T extends BaseChuteBlockEntity> extends BaseMachineMenu implements IFilterMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final T blockEntity ` | 字段类型为 ` T ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L24) |
| ` public BaseChuteMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L27) |
| ` @SuppressWarnings("unchecked") public BaseChuteMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity blockEntity) ` | 溜槽菜单<br>参数 ` menuType ` 菜单类型<br>参数 ` containerId ` 容器id<br>参数 ` inventory ` 背包<br>参数 ` blockEntity ` 方块实体<br>实现调用 ` super(menuType, containerId, blockEntity) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` this.addPlayerInventory(inventory) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L39) |
| ` @SuppressWarnings("DuplicatedCode") @Override public ItemStack quickMoveStack(Player playerIn, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L89) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, this.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L153) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L160) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.index - 36 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L165) |
| ` public T getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L22) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L22) |

## BaseMachineMenu

` public abstract class BaseMachineMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseMachineMenu.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void setDirection(Direction direction) ` | 分支 ` (this.machine instanceof BaseMachineBlockEntity entity) ` 内调用 ` entity.setDirection(direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseMachineMenu.java#L20) |
| ` public BlockEntity getMachine() ` | 末尾返回 ` this.machine `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseMachineMenu.java#L11) |

## BatchCrafterMenu

` public class BatchCrafterMenu extends BaseMachineMenu implements IFilterMenu, ContainerListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final BatchCrafterBlockEntity blockEntity ` | 字段类型为 ` BatchCrafterBlockEntity ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L30) |
| ` public BatchCrafterMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L35) |
| ` public BatchCrafterMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity blockEntity) ` | 合成器菜单<br>参数 ` menuType ` 菜单类型<br>参数 ` containerId ` 容器id<br>参数 ` inventory ` 背包<br>参数 ` blockEntity ` 方块实体<br>实现调用 ` super(menuType, containerId, blockEntity) `<br>实现调用 ` BatchCrafterMenu.checkContainerSize(inventory, 9) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L47) |
| ` @Override public ItemStack quickMoveStack(Player playerIn, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L107) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.BATCH_CRAFTER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L175) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L181) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.index - 36 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L186) |
| ` @Override public void setItem(int slotId, int stateId, ItemStack stack) ` | 实现调用 ` super.setItem(slotId, stateId, stack) `<br>实现调用 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L191) |
| ` public void onChanged() ` | 实现调用 ` this.blockEntity.getRecipes() `<br>实现调用 ` this.recipes.isEmpty() `<br>分支 ` (this.recipes.isEmpty()) ` 内调用 ` this.resultSlot.set(ItemStack.EMPTY) `<br>[调用处 BatchCrafterMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L197) |
| ` @Override public void slotChanged( AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L211) |
| ` @Override public void dataChanged(AbstractContainerMenu containerMenu, int dataSlotIndex, int value) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L217) |
| ` @Override public void flush() ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L221) |
| ` public BatchCrafterBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L28) |
| ` public Slot getResultSlot() ` | 末尾返回 ` this.resultSlot `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L28) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L28) |
| ` public List<RecipeHolder<CraftingRecipe>> getRecipes() ` | 末尾返回 ` this.recipes `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L28) |

## BatchCutterMenu

` public class BatchCutterMenu extends BaseMachineMenu implements IFilterMenu, ContainerListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final BatchCutterBlockEntity entity ` | 字段类型为 ` BatchCutterBlockEntity ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L34) |
| ` public BatchCutterMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L39) |
| ` public BatchCutterMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity entity) ` | 合成器菜单<br>参数 ` menuType ` 菜单类型<br>参数 ` containerId ` 容器id<br>参数 ` inventory ` 背包<br>参数 ` entity ` 方块实体<br>实现调用 ` super(menuType, containerId, entity) `<br>实现调用 ` BatchCutterMenu.checkContainerSize(inventory, 9) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L51) |
| ` @Override public ItemStack quickMoveStack(Player playerIn, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L99) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.entity.getBlockPos()), player, ModBlocks.BATCH_CUTTER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L167) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L172) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.index - 36 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L177) |
| ` @Override public void setItem(int slotId, int stateId, ItemStack stack) ` | 实现调用 ` super.setItem(slotId, stateId, stack) `<br>实现调用 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L182) |
| ` public void onChanged() ` | 实现调用 ` this.level.getRecipeManager() `<br>实现调用 ` manager.getRecipesFor(RecipeType.STONECUTTING, this.entity.createDummyInput(), this.level) `<br>实现调用 ` this.entity.createDummyInput() `<br>[调用处 BatchCutterMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L188) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L207) |
| ` @Override public void dataChanged(AbstractContainerMenu containerMenu, int dataSlotIndex, int value) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L212) |
| ` @Override public void flush() ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L216) |
| ` public BatchCutterBlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L31) |
| ` public Slot getResultSlot() ` | 末尾返回 ` this.resultSlot `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L31) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L31) |
| ` @Nullable public List<RecipeHolder<StonecutterRecipe>> getRecipes() ` | 末尾返回 ` this.recipes `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCutterMenu.java#L31) |

## CelestialForgingAnvilMenu

` public class CelestialForgingAnvilMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, CelestialForgingAnvilBlockEntity blockEntity ) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` this.addSlot(new CFAAnvilSlot(blockEntity.getAnvilInventory(), i, 9, 38 + i * 18)) `<br>实现调用 ` blockEntity.getAnvilInventory() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L32) |
| ` public CelestialForgingAnvilMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData ) ` | 实现调用 ` Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos())) `<br>实现调用 ` inventory.player.level().getBlockEntity(extraData.readBlockPos()) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L63) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!slot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L71) |
| ` @Override public void clicked(int slotId, int button, ClickType clickType, Player player) ` | 实现调用 ` getSlot(slotId).getItem().getCount() `<br>实现调用 ` getSlot(slotId).getItem() `<br>实现调用 ` getSlot(slotId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L113) |
| ` @Override public boolean clickMenuButton(Player player, int id) ` | 末尾返回 ` super.clickMenuButton(player, id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L127) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L222) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.blockEntity.getLevel(), this.blockEntity.getBlockPos()), player, ModBlocks.CELESTIAL_FORGING_ANVIL.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L239) |
| ` public static String formatAge(int count) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` AGE_TABLE[count - 1] `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.renderLabels](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L630) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L305) |
| ` public static String formatRadius(int count) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` RADIUS_TABLE[count - 1] `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.renderLabels](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L631) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L311) |
| ` public static String formatMass(int count) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` CelestialMassTable.display(count) `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.renderLabels](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L632) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L317) |
| ` public static String formatTemperature(int count) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` TEMPERATURE_TABLE[count - 1] `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.renderLabels](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L633) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L323) |
| ` public static String formatAgeOffset(int count, float offset) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` applyOffset(AGE_TABLE[count - 1], offset) `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.buildInfoLines](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1360) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L332) |
| ` public static String formatRadiusOffset(int count, float offset) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` applyOffset(RADIUS_TABLE[count - 1], offset) `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.buildInfoLines](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1369) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L339) |
| ` public static String formatMassOffset(int count, float offset) ` | ` (count == 0) ` 成立时提前返回 ` "---" `<br>` (count >= 1 && count <= 64) ` 成立时提前返回 ` applyOffset(CelestialMassTable.display(count), offset) `<br>末尾返回 ` "---" `<br>[调用处 CelestialForgingAnvilScreen.buildInfoLines](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1378) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L346) |
| ` public CelestialForgingAnvilBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L23) |

## CelestialForgingAnvilMenu.CFAAnvilSlot

` public static class CFAAnvilSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L391)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CFAAnvilSlot(net.minecraft.world.Container container, int slot, int x, int y) ` | 执行 ` super(container, slot, x, y) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L393) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 实现调用 ` this.getSlotIndex() `<br>实现调用 ` stack.is(ModBlocks.CONFINED_TIME_ANVILON.asItem()) `<br>实现调用 ` ModBlocks.CONFINED_TIME_ANVILON.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L397) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` 64 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L408) |

## CelestialForgingAnvilMenu.CFAMaterialSlot

` public static class CFAMaterialSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L416)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CFAMaterialSlot(CelestialForgingAnvilBlockEntity blockEntity, int x, int y) ` | 实现调用 ` super(blockEntity.getMaterialContainer(), 0, x, y) `<br>实现调用 ` blockEntity.getMaterialContainer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L420) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | ` (filter.isEmpty() \|\| filter.is(Items.BARRIER)) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItem(filter, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L425) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` limit > 0 ? limit : 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L432) |

## CelestialForgingAnvilMenu.SeedSlot

` public static class SeedSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L441)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SeedSlot(net.minecraft.world.Container container, int slot, int x, int y) ` | 执行 ` super(container, slot, x, y) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L443) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L447) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/CelestialForgingAnvilMenu.java#L453) |
