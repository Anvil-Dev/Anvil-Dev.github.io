# dev.dubhe.anvilcraft.inventory（FrostSmithingMenu 至 PortableAnvilMenu）



## FrostSmithingMenu

` public class FrostSmithingMenu extends AdjacentSmithingMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int selected ` | 初值 ` -1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L36) |
| ` @Nullable public List<RecipeResult> results ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L37) |
| ` public FrostSmithingMenu(MenuType<FrostSmithingMenu> type, int containerId, Inventory playerInventory) ` | 执行 ` this(type, containerId, playerInventory, ContainerLevelAccess.NULL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L40) |
| ` public FrostSmithingMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` this(ModMenuTypes.FROST_SMITHING.get(), containerId, playerInventory, access) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L44) |
| ` public FrostSmithingMenu( MenuType<FrostSmithingMenu> type, int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 浮霜锻造台菜单<br>参数 ` type ` 类型<br>参数 ` containerId ` 容器id<br>参数 ` playerInventory ` 背包<br>参数 ` access ` 检查<br>实现调用 ` super(type, containerId, playerInventory, access) `<br>实现调用 ` playerInventory.player.level() `<br>实现调用 ` ImmutableList.<RecipeHolder<? extends IFrostSmithingRecipe>>builder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L56) |
| ` @Override public void slotsChanged(Container inventory) ` | 实现调用 ` this.isRecipeTransferInProgress() `<br>实现调用 ` super.slotsChanged(inventory) `<br>实现调用 ` this.createResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L132) |
| ` @Override public void createResult() ` | 实现调用 ` this.createRecipeInput() `<br>实现调用 ` this.level.getRecipeManager() .getRecipesFor(ModRecipeTypes.PERMUTATION_TYPE.get(), input, this.level) `<br>实现调用 ` this.level.getRecipeManager() `<br>[调用处 FrostSmithingMenu.slotsChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L138) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L166) |
| ` @Override public int getSlotToQuickMoveTo(ItemStack stack) ` | 实现调用 ` this.recipes.stream() .map(recipe -> this.findSlotMatchingIngredient(recipe.value(), stack)) `<br>实现调用 ` this.recipes.stream() `<br>实现调用 ` Optional.of(IFrostSmithingRecipe.TEMPLATE_SLOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L211) |
| ` @Override public boolean canTakeItemForPickAll(ItemStack stack, Slot slot) ` | 末尾返回 ` slot.container != this.resultSlots && super.canTakeItemForPickAll(stack, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L228) |
| ` @Override public boolean canMoveIntoInputSlots(ItemStack stack) ` | ` (this.template().isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.recipes.stream() .map(recipe -> this.findSlotMatchingIngredient(recipe.value(), stack)) .anyMatch(Optional::isPresent) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L233) |
| ` public void turn(boolean left) ` | 实现调用 ` this.options.isEmpty() `<br>实现调用 ` Math.floorMod(this.selected + (left ? -1 : 1), this.options.size()) `<br>实现调用 ` this.options.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingMenu.java#L241) |

## HammerOpenedAnvilMenu

` public interface HammerOpenedAnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int anvilcraft$getOpenedHammerSlot() ` | [调用处 HammerOpenedAnvilMenu.anvilcraft$isOpenedByHammer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L7) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L4) |
| ` default boolean anvilcraft$isOpenedByHammer() ` | 末尾返回 ` this.anvilcraft$getOpenedHammerSlot() != HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L6) |

## HammerOpenedAnvilMenuHelper

` public final class HammerOpenedAnvilMenuHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int NO_HAMMER_SLOT ` | 初值 ` -1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L12) |
| ` public static final int REMOTE_HAMMER_SLOT ` | 初值 ` -2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L13) |
| ` public static boolean isValidInventorySlot(Inventory inventory, int slot) ` | 末尾返回 ` slot < 0 \|\| slot >= inventory.getContainerSize() `<br>[调用处 OpenedHammerSource.fromInventory](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L18) |
| ` public static boolean touchesOpenedHammerSlot( AbstractContainerMenu menu, Inventory inventory, int slotId, int button, ClickType clickType, int openedHammerSlot ) ` | ` (isValidInventorySlot(inventory, openedHammerSlot)) ` 成立时提前返回 ` false `<br>末尾返回 ` clickType == ClickType.SWAP && (button == openedHammerSlot && openedHammerSlot < 9 \|\| button == Inventory.SLOT_OFFHAND && openedHammerSlot == Inventory.SLOT_OFFHAND) `<br>[调用处 EmberAnvilMenu.clicked](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L22) |
| ` public static void closeOnServer(Player player) ` | 实现调用 ` player.level() `<br>分支 ` (!player.level().isClientSide) ` 内调用 ` player.closeContainer() `<br>[调用处 EmberAnvilMenu.clicked](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L42) |
| ` public static void playUseSound(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` player.level().playSound(null, player.blockPosition(), SoundEvents.ANVIL_USE, SoundSource.BLOCKS, 1.0F, 1.0F) `<br>实现调用 ` player.blockPosition() `<br>[调用处 EmberAnvilMenu.onTake](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L48) |

## IFilterMenu

` public interface IFilterMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L11)

有过滤的菜单

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` IFilterBlockEntity getFilterBlockEntity() ` | 获取有过滤的方块实体<br>返回 有过滤的方块实体<br>[调用处 IFilterMenu.isFilterEnabled](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L17) |
| ` default boolean isFilterEnabled() ` | 获取是否开启过滤<br>返回 是否开启过滤<br>末尾返回 ` this.getFilterBlockEntity().isFilterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L24) |
| ` default void setFilterEnabled(boolean enable) ` | 设置是否开启过滤<br>参数 ` enable ` 是否开启过滤<br>执行 ` this.getFilterBlockEntity().setFilterEnabled(enable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L33) |
| ` default boolean isSlotDisabled(int slot) ` | 获取指定槽位是否禁用<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterBlockEntity().isSlotDisabled(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L42) |
| ` default ItemStack getFilter(int slot) ` | 获取指定槽位的过滤<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterBlockEntity().getFilter(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L51) |
| ` default void setSlotDisabled(int slot, boolean disable) ` | 设置指定槽位是否禁用<br>参数 ` slot ` 槽位<br>参数 ` disable ` 是否禁用<br>执行 ` this.getFilterBlockEntity().setSlotDisabled(slot, disable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L61) |
| ` default NonNullList<ItemStack> getFilteredItems() ` | 获取过滤物品<br>返回 过滤物品<br>末尾返回 ` this.getFilterBlockEntity().getFilteredItems() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L70) |
| ` default boolean setFilter(int slot, ItemStack filter) ` | 设置指定槽位的过滤<br>参数 ` slot ` 槽位<br>参数 ` filter ` 过滤<br>末尾返回 ` this.getFilterBlockEntity().setFilter(slot, filter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L80) |
| ` default int getSlotLimit(int slot) ` | 获取指定槽位的物品数量上限<br>参数 ` slot ` 槽位<br>返回 物品数量上限<br>末尾返回 ` this.getFilterBlockEntity().getSlotLimit(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L90) |
| ` default void setSlotLimit(int slot, int limit) ` | 设置指定槽位的物品数量上限<br>参数 ` slot ` 槽位<br>参数 ` limit ` 物品数量上限<br>执行 ` this.getFilterBlockEntity().setSlotLimit(slot, limit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L100) |
| ` int getFilterSlotIndex(Slot slot) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L104) |
| ` default void flush() ` | 刷新<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L109) |

## ItemCollectorMenu

` public class ItemCollectorMenu extends AbstractContainerMenu implements IFilterMenu, ContainerListener, CyclingValueHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCollectorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 物品收集器 ScreenHandler<br>实现调用 ` super(menuType, containerId) `<br>实现调用 ` ItemCollectorMenu.checkContainerSize(inventory, 9) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L33) |
| ` public ItemCollectorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L53) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L74) |
| ` @Override public void setItem(int slotId, int stateId, ItemStack stack) ` | 实现调用 ` super.setItem(slotId, stateId, stack) `<br>实现调用 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L79) |
| ` @Override public ItemStack quickMoveStack(Player playerIn, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L96) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.ITEM_COLLECTOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L159) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L164) |
| ` @Override public void dataChanged(AbstractContainerMenu containerMenu, int dataSlotIndex, int value) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L169) |
| ` @Override public void flush() ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L173) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.index - 36 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L178) |
| ` @Override public void notify(int index, String name) ` | 实现调用 ` name.contentEquals("rangeRadius") `<br>分支 ` (name.contentEquals("rangeRadius")) ` 内调用 ` this.blockEntity.getRangeRadius().fromIndex(index) `<br>分支 ` (name.contentEquals("rangeRadius")) ` 内调用 ` this.blockEntity.getRangeRadius() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L183) |
| ` public ItemCollectorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L25) |

## ItemDetectorMenu

` public class ItemDetectorMenu extends AbstractContainerMenu implements IFilterMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemDetectorMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` ItemCollectorMenu.checkContainerSize(inventory, 9) `<br>实现调用 ` this.addPlayerHotbar(inventory) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L27) |
| ` public ItemDetectorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 实现调用 ` MenuBlockEntityLookup.find(inventory.player.level(), extraData.readBlockPos(), ItemDetectorBlockEntity.class) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` extraData.readBlockPos() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L49) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (index >= VANILLA_FIRST_SLOT_INDEX + VANILLA_SLOT_COUNT) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L93) |
| ` @Override public void clicked(int slotId, int button, ClickType clickType, Player player) ` | 实现调用 ` this.getSlot(slotId) `<br>实现调用 ` filterSlot.set(player.getInventory().getItem(button).copy()) `<br>实现调用 ` player.getInventory().getItem(button).copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L123) |
| ` @Override public boolean clickMenuButton(Player player, int id) ` | ` (id < 0 \|\| id >= ItemDetectorBlockEntity.OutputMode.values().length) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L136) |
| ` public void setFilterMode(ItemDetectorBlockEntity.Mode mode) ` | 执行 ` this.setData(ItemDetectorBlockEntity.DATASLOT_ID_FILTER_MODE, mode.ordinal()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L143) |
| ` public void setRange(int range) ` | 执行 ` this.setData(ItemDetectorBlockEntity.DATASLOT_ID_RANGE, range) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L147) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L151) |
| ` @Override public boolean isFilterEnabled() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L156) |
| ` @Override public void setFilterEnabled(boolean enable) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L161) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L165) |
| ` @Override public boolean isSlotDisabled(int slot) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L170) |
| ` @Override public void setSlotDisabled(int slot, boolean disable) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L175) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.getContainerSlot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L179) |
| ` @Override public void flush() ` | 执行 ` IFilterMenu.super.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L184) |
| ` public ItemDetectorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L22) |

## JewelCraftingMenu

` public class JewelCraftingMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int RESULT_SLOT ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L37) |
| ` public static final int SOURCE_SLOT ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L38) |
| ` public static final int CRAFT_SLOT_START ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L39) |
| ` public static final int CRAFT_SLOT_END ` | 初值 ` 6 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L40) |
| ` public static final int INV_SLOT_START ` | 初值 ` 6 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L41) |
| ` public static final int INV_SLOT_END ` | 初值 ` 33 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L42) |
| ` public static final int USE_ROW_SLOT_START ` | 初值 ` 33 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L43) |
| ` public static final int USE_ROW_SLOT_END ` | 初值 ` 42 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L44) |
| ` public JewelCraftingMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory) ` | 执行 ` this(menuType, containerId, inventory, ContainerLevelAccess.NULL) `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L167) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L52) |
| ` public JewelCraftingMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, ContainerLevelAccess access) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` addSlot(new JewelResultSlot(this.sourceContainer, this.craftingContainer, this.resultContainer, 0, 134, 51)) `<br>实现调用 ` addSlot(new JewelInputSlot(this.sourceContainer, this.craftingContainer, i, 26 + i * 18, 51)) `<br>[调用处 JewelCraftingTable.getMenuProvider](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/JewelCraftingTable.java#L93) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L56) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` sourceStack `<br>` (copyOfSourceStack.getCount() == sourceStack.getCount()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` sourceStack `<br>[调用处 JewelCraftingMenu.autoFill](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L255) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L98) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(this.access, player, ModBlocks.JEWEL_CRAFTING_TABLE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L179) |
| ` @Override public void slotsChanged(Container container) ` | 实现调用 ` slots.get(i) `<br>分支 ` (slot instanceof JewelInputSlot inputSlot) ` 内调用 ` inputSlot.updateIngredient() `<br>[调用处 JewelCraftingMenu.quickMoveInvStack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L184) |
| ` public void autoFill() ` | 自动填充配方所需物品 当玩家按下空格键时调用此方法<br>实现调用 ` this.player.level().isClientSide() `<br>实现调用 ` this.player.level() `<br>分支 ` (this.player.level().isClientSide()) ` 内调用 ` PacketDistributor.sendToServer(new JewelCraftingAutoFillPacket()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L241) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L271) |

## MagneticChuteMenu

` public class MagneticChuteMenu extends BaseChuteMenu<MagneticChuteBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/MagneticChuteMenu.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MagneticChuteMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` super(menuType, containerId, inventory, extraData) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/MagneticChuteMenu.java#L15) |
| ` public MagneticChuteMenu(MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity blockEntity) ` | 执行 ` super(menuType, containerId, inventory, blockEntity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/MagneticChuteMenu.java#L20) |

## NeoforgeMenu

` public class NeoforgeMenu extends AnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/NeoforgeMenu.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NeoforgeMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` super(containerId, playerInventory, access) `<br>[调用处 NeoforgeBlock.getMenuProvider](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L78) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/NeoforgeMenu.java#L11) |

## OpenedHammerSource

` public final class OpenedHammerSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable OpenedHammerSource fromInventory(Inventory inventory, int inventorySlot) ` | ` (HammerOpenedAnvilMenuHelper.isValidInventorySlot(inventory, inventorySlot)) ` 成立时提前返回 ` null `<br>` (!(stack.getItem() instanceof AnvilHammerItem)) ` 成立时提前返回 ` null `<br>末尾返回 ` new OpenedHammerSource(inventory, inventorySlot, null, inventorySlot, stack.getItem()) `<br>[调用处 EmberAnvilMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L32) |
| ` public static @Nullable OpenedHammerSource fromMenuSlot(Slot slot, Inventory playerInventory) ` | ` (!(stack.getItem() instanceof AnvilHammerItem)) ` 成立时提前返回 ` null `<br>末尾返回 ` new OpenedHammerSource(null, HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT, slot, clientSlot, stack.getItem()) `<br>[调用处 AnvilHammerItem.openPortableAnvilFromMenuSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L244) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L39) |
| ` public int clientInventorySlot() ` | 末尾返回 ` this.clientInventorySlot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L48) |
| ` public Item openedHammerItem() ` | 末尾返回 ` this.openedHammerItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L52) |
| ` public boolean stillInPlace() ` | 末尾返回 ` this.getStack().is(this.openedHammerItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L56) |
| ` public void damage() ` | 实现调用 ` this.getStack() `<br>实现调用 ` hammer.is(this.openedHammerItem) `<br>实现调用 ` hammer.isDamageableItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L60) |

## PocketInventory

` public class PocketInventory extends SimpleContainer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_SIZE ` | 初值 ` 12 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L19) |
| ` public static final Codec<PocketInventory> CODEC ` | 初值 ` ItemStack.OPTIONAL_CODEC.listOf() .xmap(PocketInventory::new, PocketInventory::snapshot) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L20) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PocketInventory> STREAM_CODEC ` | 初值 ` ItemStack.OPTIONAL_STREAM_CODEC .apply(ByteBufCodecs.list(MAX_SIZE)).map(PocketInventory::new, PocketInventory::snapshot) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L22) |
| ` public PocketInventory() ` | 执行 ` super(MAX_SIZE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L27) |
| ` public static PocketInventory get(Player player) ` | 末尾返回 ` player.getData(ModDataAttachments.POCKETS) `<br>[调用处 EquipmentClientEvents.press](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L36) |
| ` public static int capacity(Player player) ` | ` (legs.is(ModItems.WEATHERPROOF_SPACESUIT_LEGGINGS)) ` 成立时提前返回 ` 12 `<br>末尾返回 ` legs.is(ModItems.POCKETS_LEGGINGS) ? 6 : 0 `<br>[调用处 EquipmentClientEvents.press](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L40) |
| ` public static boolean isLocked(Player player) ` | 末尾返回 ` capacity(player) > 0 && !get(player).isEmpty() `<br>[调用处 ArmorSlotMixin.anvilcraft$lockFilledPockets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ArmorSlotMixin.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L46) |
| ` public static List<ItemStack> items(Player player) ` | 末尾返回 ` result `<br>[调用处 AmuletEventListener.on](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L50) |
| ` public static List<ItemStack> carriedItems(Player player) ` | 末尾返回 ` result `<br>[调用处 IFullCapacitor.inventoryTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L57) |
| ` public List<ItemStack> snapshot() ` | 末尾返回 ` result `<br>[调用处 PocketInventory.syncChanges](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L65) |
| ` public void tick(Player player) ` | 实现调用 ` capacity(player) `<br>实现调用 ` player.getItemBySlot(EquipmentSlot.LEGS) `<br>实现调用 ` this.removeItemNoUpdate(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L71) |
| ` public void rememberLeggings(Player player) ` | 分支 ` (this.wornLeggings == null) ` 内调用 ` player.getItemBySlot(EquipmentSlot.LEGS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L87) |
| ` public void syncChanges(Player player) ` | 实现调用 ` this.lastSynced.size() `<br>实现调用 ` ItemStack.matches(this.getItem(slot), this.lastSynced.get(slot)) `<br>实现调用 ` this.getItem(slot) `<br>[调用处 PocketInventory.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L91) |
| ` public void dropAll(Player player) ` | 实现调用 ` this.removeItemNoUpdate(slot) `<br>实现调用 ` stack.isEmpty() `<br>分支 ` (!stack.isEmpty()) ` 内调用 ` player.drop(stack, true, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L102) |

## PocketSlot

` public class PocketSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PocketSlot(Player owner, int index) ` | 实现调用 ` super(new Access(owner), index, 0, 84 + index % 3 * 18) `<br>实现调用 ` this.updatePosition() `<br>[调用处 InventoryMenuMixin.anvilcraft$addPockets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/InventoryMenuMixin.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L12) |
| ` public void updatePosition() ` | 实现调用 ` PocketInventory.capacity(this.owner) `<br>[调用处 PocketSlot.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L19) |
| ` @Override public boolean isActive() ` | 末尾返回 ` this.pocketIndex < PocketInventory.capacity(this.owner) `<br>[调用处 PocketSlot.mayPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L27) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` this.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L33) |
| ` @Override public boolean mayPickup(Player player) ` | 末尾返回 ` player == this.owner && this.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L38) |

## PortableAnvilMenu

` public class PortableAnvilMenu extends AnvilMenu implements HammerOpenedAnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PortableAnvilMenu(int containerId, Inventory playerInventory) ` | 执行 ` this(containerId, playerInventory, ContainerLevelAccess.NULL, HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT) `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L85) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L20) |
| ` public PortableAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access, int openedHammerSlot) ` | 执行 ` this(containerId, playerInventory, access, OpenedHammerSource.fromInventory(playerInventory, openedHammerSlot)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L24) |
| ` public PortableAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access, @Nullable OpenedHammerSource source) ` | 实现调用 ` super(containerId, playerInventory, access) `<br>实现调用 ` source.clientInventorySlot() `<br>实现调用 ` this.addDataSlot(this.openedHammerSlot) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L28) |
| ` @Override public MenuType<?> getType() ` | 末尾返回 ` ModMenuTypes.PORTABLE_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L36) |
| ` @Override public int anvilcraft$getOpenedHammerSlot() ` | 末尾返回 ` this.openedHammerSlot.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L41) |
| ` @Override public void clicked(int slotId, int button, ClickType clickType, Player player) ` | 实现调用 ` this.openedHammerSlot.get() `<br>分支 ` (touchedHammer) ` 内调用 ` HammerOpenedAnvilMenuHelper.closeOnServer(player) `<br>实现调用 ` super.clicked(slotId, button, clickType, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L56) |
| ` @Override public void broadcastChanges() ` | 实现调用 ` super.broadcastChanges() `<br>实现调用 ` this.closeIfOpenedHammerMoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L74) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>分支 ` (this.openedHammerSource != null) ` 内调用 ` this.clearContainer(player, this.inputSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L80) |
