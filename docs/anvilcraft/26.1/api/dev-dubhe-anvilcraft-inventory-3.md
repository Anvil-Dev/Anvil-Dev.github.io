# dev.dubhe.anvilcraft.inventory（FrostSmithingTransfer 至 PulseGeneratorMenu）



## FrostSmithingTransfer

` public final class FrostSmithingTransfer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingTransfer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean same(ItemStack first, ItemStack second, RegistryAccess registries) ` | 末尾返回 ` !first.isEmpty() && !second.isEmpty() && ItemResourceHelper.matchesNetworkStack(first.copyWithCount(1), second.copyWithCount(1), registries) `<br>[调用处 FrostRecipeTransferHandler.choose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingTransfer.java#L24) |
| ` public static int firstSlot(AbstractContainerMenu menu) ` | 末尾返回 ` menu instanceof FrostSmithingMenu ? 1 : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingTransfer.java#L29) |
| ` public static List<ItemStack> available(Player player, AbstractContainerMenu menu) ` | 末尾返回 ` stacks `<br>[调用处 FrostRecipeTransferHandler.choose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingTransfer.java#L33) |
| ` public static long count(List<ItemStack> stacks, ItemStack sample, RegistryAccess registries) ` | 末尾返回 ` stacks.stream().filter(stack -> same(stack, sample, registries)).mapToLong(ItemStack::getCount).sum() `<br>[调用处 FrostRecipeTransferHandler.choose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingTransfer.java#L42) |
| ` public static boolean transfer(ServerPlayer player, ItemStack equipment, ItemStack material, List<UUID> targets) ` | ` (!(menu instanceof FrostSmithingMenu) && !(menu instanceof TranscendenceSmithingMenu transcendence && transcendence.getMode() == TranscendenceSmithingMenu.Mode.FROST)) ` 成立时提前返回 ` false `<br>` (!menu.stillValid(player) \|\| equipment.isEmpty() \|\| equipment.getCount() > equipment.getMaxStackSize() \|\| material.getCount() > material.getMaxStackSize() \|\| targets.size() > 64) ` 成立时提前返回 ` false `<br>` (!valid) ` 成立时提前返回 ` false `<br>末尾返回 ` transferred `<br>[调用处 SmithingServerStub.transferFrost](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/SmithingServerStub.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FrostSmithingTransfer.java#L46) |

## HammerOpenedAnvilMenu

` public interface HammerOpenedAnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int anvilcraft$getOpenedHammerSlot() ` | [调用处 HammerOpenedAnvilMenu.anvilcraft$isOpenedByHammer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L7) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L4) |
| ` default boolean anvilcraft$isOpenedByHammer() ` | 末尾返回 ` this.anvilcraft$getOpenedHammerSlot() != HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenu.java#L6) |

## HammerOpenedAnvilMenuHelper

` public final class HammerOpenedAnvilMenuHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int NO_HAMMER_SLOT ` | 初值 ` -1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L12) |
| ` public static final int REMOTE_HAMMER_SLOT ` | 初值 ` -2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L13) |
| ` public static boolean isValidInventorySlot(Inventory inventory, int slot) ` | 末尾返回 ` slot < 0 \|\| slot >= inventory.getContainerSize() `<br>[调用处 OpenedHammerSource.fromInventory](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L18) |
| ` public static boolean touchesOpenedHammerSlot( AbstractContainerMenu menu, Inventory inventory, int slotId, int button, ContainerInput containerInput, int openedHammerSlot ) ` | ` (HammerOpenedAnvilMenuHelper.isValidInventorySlot(inventory, openedHammerSlot)) ` 成立时提前返回 ` false `<br>末尾返回 ` containerInput == ContainerInput.SWAP && (button == openedHammerSlot && openedHammerSlot < 9 \|\| button == Inventory.SLOT_OFFHAND && openedHammerSlot == Inventory.SLOT_OFFHAND) `<br>[调用处 EmberAnvilMenu.clicked](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L22) |
| ` public static void closeOnServer(Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>分支 ` (!player.level().isClientSide()) ` 内调用 ` player.closeContainer() `<br>[调用处 EmberAnvilMenu.clicked](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L42) |
| ` public static void playUseSound(Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` player.level().playSound(null, player.blockPosition(), SoundEvents.ANVIL_USE, SoundSource.BLOCKS, 1.0F, 1.0F) `<br>[调用处 EmberAnvilMenu.onTake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L120) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/HammerOpenedAnvilMenuHelper.java#L48) |

## IFilterMenu

` public interface IFilterMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L9)

有过滤的菜单

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` IFilterBlockEntity getFilterBlockEntity() ` | 获取有过滤的方块实体<br>返回 有过滤的方块实体<br>[调用处 IFilterMenu.isFilterEnabled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L13) |
| ` default boolean isFilterEnabled() ` | 获取是否开启过滤<br>返回 是否开启过滤<br>末尾返回 ` this.getFilterBlockEntity().isFilterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L18) |
| ` default void setFilterEnabled(boolean enable) ` | 设置是否开启过滤<br>参数 ` enable ` 是否开启过滤<br>执行 ` this.getFilterBlockEntity().setFilterEnabled(enable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L25) |
| ` default boolean isSlotDisabled(int slot) ` | 获取指定槽位是否禁用<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterBlockEntity().isSlotDisabled(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L32) |
| ` default ItemStack getFilter(int slot) ` | 获取指定槽位的过滤<br>参数 ` slot ` 槽位<br>末尾返回 ` this.getFilterBlockEntity().getFilter(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L39) |
| ` default void setSlotDisabled(int slot, boolean disable) ` | 设置指定槽位是否禁用<br>参数 ` slot ` 槽位<br>参数 ` disable ` 是否禁用<br>执行 ` this.getFilterBlockEntity().setSlotDisabled(slot, disable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L47) |
| ` default NonNullList<ItemStack> getFilteredItems() ` | 获取过滤物品<br>返回 过滤物品<br>末尾返回 ` this.getFilterBlockEntity().getFilteredItems() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L54) |
| ` default boolean setFilter(int slot, ItemStack filter) ` | 设置指定槽位的过滤<br>参数 ` slot ` 槽位<br>参数 ` filter ` 过滤<br>末尾返回 ` this.getFilterBlockEntity().setFilter(slot, filter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L62) |
| ` default int getSlotLimit(int slot) ` | 获取指定槽位的物品数量上限<br>参数 ` slot ` 槽位<br>返回 物品数量上限<br>末尾返回 ` this.getFilterBlockEntity().getSlotLimit(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L70) |
| ` default void setSlotLimit(int slot, int limit) ` | 设置指定槽位的物品数量上限<br>参数 ` slot ` 槽位<br>参数 ` limit ` 物品数量上限<br>执行 ` this.getFilterBlockEntity().setSlotLimit(slot, limit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L78) |
| ` int getFilterSlotIndex(Slot slot) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L82) |
| ` default void flush() ` | 刷新<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/IFilterMenu.java#L85) |

## ItemCollectorMenu

` public class ItemCollectorMenu extends AbstractContainerMenu implements IFilterMenu, ContainerListener, CyclingValueHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCollectorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 物品收集器 ScreenHandler<br>实现调用 ` super(menuType, containerId) `<br>实现调用 ` ItemCollectorMenu.checkContainerSize(inventory, 9) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L33) |
| ` public ItemCollectorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L54) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L75) |
| ` @Override public void setItem(int slotId, int stateId, ItemStack stack) ` | 实现调用 ` super.setItem(slotId, stateId, stack) `<br>实现调用 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L80) |
| ` @Override public ItemStack quickMoveStack(Player playerIn, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L99) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.ITEM_COLLECTOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L166) |
| ` @Override public void slotChanged(AbstractContainerMenu containerToSend, int dataSlotIndex, ItemStack stack) ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L175) |
| ` @Override public void dataChanged(AbstractContainerMenu containerMenu, int dataSlotIndex, int value) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L180) |
| ` @Override public void flush() ` | 执行 ` this.onChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L184) |
| ` public void notify(int index, String name) ` | 实现调用 ` name.contentEquals("rangeRadius") `<br>分支 ` (name.contentEquals("rangeRadius")) ` 内调用 ` this.blockEntity.getRangeRadius().fromIndex(index) `<br>分支 ` (name.contentEquals("rangeRadius")) ` 内调用 ` this.blockEntity.getRangeRadius() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L189) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.index - 36 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L199) |
| ` public ItemCollectorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemCollectorMenu.java#L26) |

## ItemDetectorMenu

` public class ItemDetectorMenu extends AbstractContainerMenu implements IFilterMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemDetectorMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` ItemCollectorMenu.checkContainerSize(inventory, 9) `<br>实现调用 ` this.addPlayerHotbar(inventory) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L27) |
| ` public ItemDetectorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 实现调用 ` MenuBlockEntityLookup.find(inventory.player.level(), extraData.readBlockPos(), ItemDetectorBlockEntity.class) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` extraData.readBlockPos() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L49) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (index >= ItemDetectorMenu.VANILLA_FIRST_SLOT_INDEX + ItemDetectorMenu.VANILLA_SLOT_COUNT) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L87) |
| ` @Override public void clicked(int slotId, int button, ContainerInput input, Player player) ` | 实现调用 ` this.getSlot(slotId) `<br>实现调用 ` filterSlot.set(player.getInventory().getItem(button).copy()) `<br>实现调用 ` player.getInventory().getItem(button).copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L117) |
| ` @Override public boolean clickMenuButton(Player player, int id) ` | ` (id < 0 \|\| id >= ItemDetectorBlockEntity.OutputMode.values().length) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L132) |
| ` public void setFilterMode(ItemDetectorBlockEntity.Mode mode) ` | 执行 ` this.setData(ItemDetectorBlockEntity.DATASLOT_ID_FILTER_MODE, mode.ordinal()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L139) |
| ` public void setRange(int range) ` | 执行 ` this.setData(ItemDetectorBlockEntity.DATASLOT_ID_RANGE, range) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L143) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L147) |
| ` @Override public boolean isFilterEnabled() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L152) |
| ` @Override public void setFilterEnabled(boolean enable) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L157) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L161) |
| ` @Override public boolean isSlotDisabled(int slot) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L166) |
| ` @Override public void setSlotDisabled(int slot, boolean disable) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L171) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.getContainerSlot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L175) |
| ` @Override public void flush() ` | 执行 ` IFilterMenu.super.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L180) |
| ` public ItemDetectorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L22) |

## JewelCraftingMenu

` public class JewelCraftingMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int RESULT_SLOT ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L36) |
| ` public static final int SOURCE_SLOT ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L37) |
| ` public static final int CRAFT_SLOT_START ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L38) |
| ` public static final int CRAFT_SLOT_END ` | 初值 ` 6 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L39) |
| ` public static final int INV_SLOT_START ` | 初值 ` 6 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L40) |
| ` public static final int INV_SLOT_END ` | 初值 ` 33 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L41) |
| ` public static final int USE_ROW_SLOT_START ` | 初值 ` 33 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L42) |
| ` public static final int USE_ROW_SLOT_END ` | 初值 ` 42 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L43) |
| ` public JewelCraftingMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory) ` | 执行 ` this(menuType, containerId, inventory, ContainerLevelAccess.NULL) `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L177) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L51) |
| ` public JewelCraftingMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, ContainerLevelAccess access) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` this.addSlot(new JewelInputSlot(this.sourceContainer, this.craftingContainer, i, 26 + i * 18, 51)) `<br>实现调用 ` this.addPlayerInventory(inventory) `<br>[调用处 JewelCraftingTable.getMenuProvider](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L94) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L55) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` sourceStack `<br>` (copyOfSourceStack.getCount() == sourceStack.getCount()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` sourceStack `<br>[调用处 JewelCraftingMenu.autoFill](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L273) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L97) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(this.access, player, ModBlocks.JEWEL_CRAFTING_TABLE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L188) |
| ` public @Nullable RecipeHolder<JewelCraftingRecipe> findRecipeBySource(ItemStack source) ` | 实现调用 ` RecipesRecord.getRecipes(this.player.level()).byType(ModRecipeTypes.JEWEL_CRAFTING.get()) .stream() `<br>实现调用 ` RecipesRecord.getRecipes(this.player.level()).byType(ModRecipeTypes.JEWEL_CRAFTING.get()) `<br>实现调用 ` RecipesRecord.getRecipes(this.player.level()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L193) |
| ` @Override public void slotsChanged(Container container) ` | 实现调用 ` this.slots.get(i) `<br>分支 ` (slot instanceof JewelInputSlot inputSlot) ` 内调用 ` inputSlot.updateIngredient() `<br>[调用处 JewelCraftingMenu.quickMoveInvStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L165) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L201) |
| ` public void autoFill() ` | 自动填充配方所需物品 当玩家按下空格键时调用此方法<br>实现调用 ` this.player.level().isClientSide() `<br>实现调用 ` this.player.level() `<br>分支 ` (this.player.level().isClientSide()) ` 内调用 ` ClientPacketDistributor.sendToServer(new JewelCraftingAutoFillPacket()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L260) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L288) |

## MagneticChuteMenu

` public class MagneticChuteMenu extends BaseChuteMenu<MagneticChuteBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/MagneticChuteMenu.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MagneticChuteMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` super(menuType, containerId, inventory, extraData) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/MagneticChuteMenu.java#L15) |
| ` public MagneticChuteMenu(MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity blockEntity) ` | 执行 ` super(menuType, containerId, inventory, blockEntity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/MagneticChuteMenu.java#L20) |

## NeoforgeMenu

` public class NeoforgeMenu extends AnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/NeoforgeMenu.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NeoforgeMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` super(containerId, playerInventory, access) `<br>[调用处 NeoforgeBlock.getMenuProvider](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/NeoforgeMenu.java#L11) |

## OpenedHammerSource

` public final class OpenedHammerSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable OpenedHammerSource fromInventory(Inventory inventory, int inventorySlot) ` | ` (HammerOpenedAnvilMenuHelper.isValidInventorySlot(inventory, inventorySlot)) ` 成立时提前返回 ` null `<br>` (!(stack.getItem() instanceof AnvilHammerItem)) ` 成立时提前返回 ` null `<br>末尾返回 ` new OpenedHammerSource(inventory, inventorySlot, null, inventorySlot, stack.getItem()) `<br>[调用处 EmberAnvilMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L32) |
| ` public static @Nullable OpenedHammerSource fromMenuSlot(Slot slot, Inventory playerInventory) ` | ` (!(stack.getItem() instanceof AnvilHammerItem)) ` 成立时提前返回 ` null `<br>末尾返回 ` new OpenedHammerSource(null, HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT, slot, clientSlot, stack.getItem()) `<br>[调用处 AnvilHammerItem.openPortableAnvilFromMenuSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/AnvilHammerItem.java#L230) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L39) |
| ` public int clientInventorySlot() ` | 末尾返回 ` this.clientInventorySlot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L48) |
| ` public Item openedHammerItem() ` | 末尾返回 ` this.openedHammerItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L52) |
| ` public boolean stillInPlace() ` | 末尾返回 ` this.getStack().is(this.openedHammerItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L56) |
| ` public void damage() ` | 实现调用 ` this.getStack() `<br>实现调用 ` hammer.is(this.openedHammerItem) `<br>实现调用 ` hammer.isDamageableItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/OpenedHammerSource.java#L60) |

## PocketInventory

` public class PocketInventory extends SimpleContainer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_SIZE ` | 初值 ` 12 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L19) |
| ` public static final Codec<PocketInventory> CODEC ` | 初值 ` ItemStack.OPTIONAL_CODEC.listOf() .xmap(PocketInventory::new, PocketInventory::snapshot) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L20) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PocketInventory> STREAM_CODEC ` | 初值 ` ItemStack.OPTIONAL_STREAM_CODEC .apply(ByteBufCodecs.list(MAX_SIZE)).map(PocketInventory::new, PocketInventory::snapshot) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L22) |
| ` public PocketInventory() ` | 执行 ` super(MAX_SIZE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L27) |
| ` public static PocketInventory get(Player player) ` | 末尾返回 ` player.getData(ModDataAttachments.POCKETS) `<br>[调用处 EquipmentClientEvents.press](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L36) |
| ` public static int capacity(Player player) ` | ` (legs.is(ModItems.WEATHERPROOF_SPACESUIT_LEGGINGS)) ` 成立时提前返回 ` 12 `<br>末尾返回 ` legs.is(ModItems.POCKETS_LEGGINGS) ? 6 : 0 `<br>[调用处 EquipmentClientEvents.press](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L40) |
| ` public static boolean isLocked(Player player) ` | 末尾返回 ` capacity(player) > 0 && !get(player).isEmpty() `<br>[调用处 ArmorSlotMixin.anvilcraft$lockFilledPockets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ArmorSlotMixin.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L46) |
| ` public static List<ItemStack> items(Player player) ` | 末尾返回 ` result `<br>[调用处 AmuletEventListener.on](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L50) |
| ` public static List<ItemStack> carriedItems(Player player) ` | 末尾返回 ` result `<br>[调用处 IFullCapacitor.inventoryTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L57) |
| ` public List<ItemStack> snapshot() ` | 末尾返回 ` result `<br>[调用处 PocketInventory.syncChanges](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L65) |
| ` public void tick(Player player) ` | 实现调用 ` capacity(player) `<br>实现调用 ` player.getItemBySlot(EquipmentSlot.LEGS) `<br>实现调用 ` this.removeItemNoUpdate(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L71) |
| ` public void rememberLeggings(Player player) ` | 分支 ` (this.wornLeggings == null) ` 内调用 ` player.getItemBySlot(EquipmentSlot.LEGS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L87) |
| ` public void syncChanges(Player player) ` | 实现调用 ` this.lastSynced.size() `<br>实现调用 ` ItemStack.matches(this.getItem(slot), this.lastSynced.get(slot)) `<br>实现调用 ` this.getItem(slot) `<br>[调用处 PocketInventory.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L91) |
| ` public void dropAll(Player player) ` | 实现调用 ` this.removeItemNoUpdate(slot) `<br>实现调用 ` stack.isEmpty() `<br>分支 ` (!stack.isEmpty()) ` 内调用 ` player.drop(stack, true, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketInventory.java#L102) |

## PocketSlot

` public class PocketSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PocketSlot(Player owner, int index) ` | 实现调用 ` super(new Access(owner), index, 0, 84 + index % 3 * 18) `<br>实现调用 ` this.updatePosition() `<br>[调用处 InventoryMenuMixin.anvilcraft$addPockets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/InventoryMenuMixin.java#L26) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L13) |
| ` public void updatePosition() ` | 实现调用 ` PocketInventory.capacity(this.owner) `<br>[调用处 PocketSlot.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L20) |
| ` @Override public boolean isActive() ` | 末尾返回 ` this.pocketIndex < PocketInventory.capacity(this.owner) `<br>[调用处 PocketSlot.mayPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L28) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` this.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L34) |
| ` @Override public boolean mayPickup(Player player) ` | 末尾返回 ` player == this.owner && this.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PocketSlot.java#L39) |

## PortableAnvilMenu

` public class PortableAnvilMenu extends AnvilMenu implements HammerOpenedAnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PortableAnvilMenu(int containerId, Inventory playerInventory) ` | 执行 ` this(containerId, playerInventory, ContainerLevelAccess.NULL, HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT) `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L90) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L20) |
| ` public PortableAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access, int openedHammerSlot) ` | 执行 ` this(containerId, playerInventory, access, OpenedHammerSource.fromInventory(playerInventory, openedHammerSlot)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L24) |
| ` public PortableAnvilMenu( int containerId, Inventory playerInventory, ContainerLevelAccess access, @Nullable OpenedHammerSource source ) ` | 实现调用 ` super(containerId, playerInventory, access) `<br>实现调用 ` source.clientInventorySlot() `<br>实现调用 ` this.addDataSlot(this.openedHammerSlot) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L28) |
| ` @Override public MenuType<?> getType() ` | 末尾返回 ` ModMenuTypes.PORTABLE_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L41) |
| ` @Override public int anvilcraft$getOpenedHammerSlot() ` | 末尾返回 ` this.openedHammerSlot.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L46) |
| ` @Override public void clicked(int slotId, int button, ContainerInput containerInput, Player player) ` | 实现调用 ` this.openedHammerSlot.get() `<br>分支 ` (touchedHammer) ` 内调用 ` HammerOpenedAnvilMenuHelper.closeOnServer(player) `<br>实现调用 ` super.clicked(slotId, button, containerInput, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L61) |
| ` @Override public void broadcastChanges() ` | 实现调用 ` super.broadcastChanges() `<br>实现调用 ` this.closeIfOpenedHammerMoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L79) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>分支 ` (this.openedHammerSource != null) ` 内调用 ` this.clearContainer(player, this.inputSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PortableAnvilMenu.java#L85) |

## PulseGeneratorMenu

` public class PulseGeneratorMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PulseGeneratorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L25) |
| ` public PulseGeneratorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, readGenerator(inventory, extraData)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L31) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L48) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.PULSE_GENERATOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L53) |
| ` public void setStartMode(byte mode) ` | 执行 ` this.blockEntity.setStartMode(mode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L62) |
| ` public void setOutputInvert(boolean isInvert) ` | 执行 ` this.blockEntity.setOutputMode(isInvert) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L66) |
| ` public void addWaitingTime(int delta) ` | 执行 ` this.blockEntity.setWaitingTime(this.blockEntity.getWaitingTime() + delta) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L70) |
| ` public void addSignalDuration(int delta) ` | 执行 ` this.blockEntity.setSignalDuration(this.blockEntity.getSignalDuration() + delta) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L74) |
| ` public PulseGeneratorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L20) |
