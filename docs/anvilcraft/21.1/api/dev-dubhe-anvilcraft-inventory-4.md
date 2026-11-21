# dev.dubhe.anvilcraft.inventory（PulseGeneratorMenu 至 TeslaTowerMenu）



## PulseGeneratorMenu

` public class PulseGeneratorMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PulseGeneratorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L25) |
| ` public PulseGeneratorMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, readGenerator(inventory, extraData)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L31) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L48) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.PULSE_GENERATOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L53) |
| ` public void setStartMode(byte mode) ` | 执行 ` this.blockEntity.setStartMode(mode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L62) |
| ` public void setOutputInvert(boolean isInvert) ` | 执行 ` this.blockEntity.setOutputMode(isInvert) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L66) |
| ` public void addWaitingTime(int delta) ` | 执行 ` this.blockEntity.setWaitingTime(this.blockEntity.getWaitingTime() + delta) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L70) |
| ` public void addSignalDuration(int delta) ` | 执行 ` this.blockEntity.setSignalDuration(this.blockEntity.getSignalDuration() + delta) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L74) |
| ` public PulseGeneratorBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/PulseGeneratorMenu.java#L20) |

## RoyalAnvilMenu

` public class RoyalAnvilMenu extends AnvilMenu implements HammerOpenedAnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Supplier<AnvilMenuResult> RESULT ` | 初值 ` () -> AnvilMenuResult.builder() .allowBeyondMaxLevel(AnvilCraft.CONFIG.equipment.royalAnvilBeyondMaxLevel) .create() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L26) |
| ` public final AnvilMenuResult result ` | 初值 ` RoyalAnvilMenu.RESULT.get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L29) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory) ` | 执行 ` this(containerId, playerInventory, ContainerLevelAccess.NULL) `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L113) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L35) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` this(containerId, playerInventory, access, HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT) `<br>[调用处 RoyalAnvilBlock.getMenuProvider](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L39) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access, int openedHammerSlot) ` | 执行 ` this(containerId, playerInventory, access, OpenedHammerSource.fromInventory(playerInventory, openedHammerSlot)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L43) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access, @Nullable OpenedHammerSource source) ` | 实现调用 ` super(containerId, playerInventory, access) `<br>实现调用 ` source.clientInventorySlot() `<br>实现调用 ` this.addDataSlot(this.openedHammerSlot) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L47) |
| ` @Override public MenuType<?> getType() ` | 末尾返回 ` ModMenuTypes.ROYAL_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L55) |
| ` @Override public void createResult() ` | 实现调用 ` this.getSlot(0).getItem() `<br>实现调用 ` this.getSlot(0) `<br>实现调用 ` this.getSlot(1).getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L65) |
| ` @Override public int anvilcraft$getOpenedHammerSlot() ` | 末尾返回 ` this.openedHammerSlot.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L93) |
| ` @Override public void clicked(int slotId, int button, ClickType clickType, Player player) ` | 实现调用 ` this.openedHammerSlot.get() `<br>分支 ` (touchedHammer) ` 内调用 ` HammerOpenedAnvilMenuHelper.closeOnServer(player) `<br>实现调用 ` super.clicked(slotId, button, clickType, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L98) |
| ` @Override public void broadcastChanges() ` | 实现调用 ` super.broadcastChanges() `<br>实现调用 ` this.closeIfOpenedHammerMoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L116) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>分支 ` (this.openedHammerSource != null) ` 内调用 ` this.clearContainer(player, this.inputSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L122) |

## RoyalGrindstoneMenu

` public class RoyalGrindstoneMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Map<Item, RepairCostRecipeEntry> REPAIR_COST_RECIPES ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L34) |
| ` public static final Item DEFAULT_REPAIR_MATERIAL ` | 初值 ` Items.GOLD_INGOT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L35) |
| ` public static final int GOLD_PER_CURSE ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L36) |
| ` public int usedGold ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L43) |
| ` public int totalRepairCost ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L44) |
| ` public int totalCurseCount ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L45) |
| ` public int removedRepairCost ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L46) |
| ` public int removedCurseCount ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L47) |
| ` public Item repairMaterial ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L48) |
| ` public RepairCostRecipeEntry currentRecipe ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L49) |
| ` public RoyalGrindstoneMenu(MenuType<RoyalGrindstoneMenu> type, int containerId, Inventory playerInventory) ` | 执行 ` this(type, containerId, playerInventory, ContainerLevelAccess.NULL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L56) |
| ` public RoyalGrindstoneMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` this(ModMenuTypes.ROYAL_GRINDSTONE.get(), containerId, playerInventory, access) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L60) |
| ` public RoyalGrindstoneMenu( MenuType<RoyalGrindstoneMenu> type, int containerId, Inventory playerInventory, ContainerLevelAccess access ) ` | 皇家砂轮菜单<br>参数 ` type ` 菜单类型<br>参数 ` containerId ` 容器id<br>参数 ` playerInventory ` 背包<br>参数 ` access ` 检查<br>实现调用 ` super(type, containerId) `<br>实现调用 ` this.addSlot(new Slot(playerInventory, j + i * 9 + 9, 8 + j * 18, 84 + i * 18)) `<br>实现调用 ` this.addSlot(new Slot(playerInventory, i, 8 + i * 18, 142)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L72) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L228) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(this.access, player, ModBlocks.ROYAL_GRINDSTONE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L281) |
| ` @Override public void slotsChanged(Container container) ` | 实现调用 ` super.slotsChanged(container) `<br>实现调用 ` container.equals(this.repairMaterialSlots) `<br>实现调用 ` container.equals(this.repairToolSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L286) |
| ` public void removed(Player player) ` | 移除<br>参数 ` player ` 玩家<br>实现调用 ` super.removed(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L300) |

## RoyalGrindstoneMenu.RepairCostRecipeEntry

` public record RepairCostRecipeEntry(int count, Item item) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RepairCostRecipeEntry(int count, Item item) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330) |
| ` public Item item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L330) |

## RoyalSmithingMenu

` public class RoyalSmithingMenu extends AdjacentSmithingMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L24)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSmithingMenu(int containerId, Inventory playerInventory) ` | 执行 ` this(containerId, playerInventory, ContainerLevelAccess.NULL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L33) |
| ` public RoyalSmithingMenu(MenuType<RoyalSmithingMenu> type, int containerId, Inventory playerInventory) ` | 执行 ` this(type, containerId, playerInventory, ContainerLevelAccess.NULL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L37) |
| ` public RoyalSmithingMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` this(ModMenuTypes.ROYAL_SMITHING.get(), containerId, playerInventory, access) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L41) |
| ` public RoyalSmithingMenu( MenuType<RoyalSmithingMenu> type, int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 皇家锻造台菜单<br>参数 ` type ` 类型<br>参数 ` containerId ` 容器id<br>参数 ` playerInventory ` 背包<br>参数 ` access ` 检查<br>实现调用 ` super(type, containerId, playerInventory, access) `<br>实现调用 ` playerInventory.player.level() `<br>实现调用 ` this.level.getRecipeManager().getAllRecipesFor(RecipeType.SMITHING) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L53) |
| ` @Override public void createResult() ` | 实现调用 ` this.createRecipeInput() `<br>实现调用 ` this.level.getRecipeManager().getRecipesFor(RecipeType.SMITHING, smithingrecipeinput, this.level) `<br>实现调用 ` this.level.getRecipeManager() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L110) |
| ` @SuppressWarnings("OptionalGetWithoutIsPresent") @Override public int getSlotToQuickMoveTo(ItemStack stack) ` | 实现调用 ` this.recipes.stream() `<br>实现调用 ` Optional.of(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L128) |
| ` @Override public boolean canTakeItemForPickAll(ItemStack stack, Slot slot) ` | 末尾返回 ` slot.container != this.resultSlots && super.canTakeItemForPickAll(stack, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L146) |
| ` @Override public boolean canMoveIntoInputSlots(ItemStack stack) ` | 末尾返回 ` this.recipes.stream() .map(smithingRecipe -> RoyalSmithingMenu.findSlotMatchingIngredient(smithingRecipe.value(), stack)) .anyMatch(Optional::isPresent) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L151) |

## SliderMenu

` public class SliderMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SliderMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` extraData.readVarInt() `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L124) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L20) |
| ` public SliderMenu(int containerId, int initialValue, Callback<Integer> callback) ` | 实现调用 ` super(ModMenuTypes.SLIDER.get(), containerId) `<br>实现调用 ` ModMenuTypes.SLIDER.get() `<br>[调用处 CreativeGeneratorBlockEntity.createMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeGeneratorBlockEntity.java#L100) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L26) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` sourceSlot.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L32) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L40) |
| ` public int getInitialValue() ` | 末尾返回 ` this.initialValue `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L15) |
| ` public Callback<Integer> getCallback() ` | 末尾返回 ` this.callback `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L15) |

## SmartBlockPlacerMenu

` public class SmartBlockPlacerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` this.blockEntity.getBlueprintItemHandler() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L33) |
| ` public SmartBlockPlacerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L121) |
| ` @Nullable public SmartBlockPlacerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L127) |
| ` @SuppressWarnings("checkstyle:RightCurly") @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` itemstack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L141) |
| ` @Override public boolean stillValid(Player player) ` | ` (this.blockEntity == null) ` 成立时提前返回 ` false `<br>末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.SMART_BLOCK_PLACER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L227) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L239) |
| ` public SimpleContainer getBookInventory() ` | 末尾返回 ` this.bookInventory `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L25) |

## SmithingTemplateAdditions

` public record SmithingTemplateAdditions(List<ItemStack> templates) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10)

玩家手动添加的配方模板，保存组件与添加顺序，并与实际物品库存隔离。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SmithingTemplateAdditions EMPTY ` | 初值 ` new SmithingTemplateAdditions(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L11) |
| ` public static final Codec<SmithingTemplateAdditions> CODEC ` | 初值 ` ItemStack.CODEC.listOf() .xmap(SmithingTemplateAdditions::new, SmithingTemplateAdditions::templates) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L12) |
| ` public SmithingTemplateAdditions(List<ItemStack> templates) ` | 执行 ` templates = templates.stream().filter(stack -> !stack.isEmpty()).map(stack -> stack.copyWithCount(1)).toList() `<br>[调用处 TranscendenceSmithingMenu.handleTemplateAction](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TranscendenceSmithingMenu.java#L430) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L15) |
| ` @Override public List<ItemStack> templates() ` | 末尾返回 ` this.templates.stream().map(ItemStack::copy).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L19) |
| ` public SmithingTemplateAdditions add(ItemStack stack) ` | 末尾返回 ` new SmithingTemplateAdditions(result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L24) |
| ` public SmithingTemplateAdditions remove(ItemStack stack) ` | 末尾返回 ` new SmithingTemplateAdditions(this.templates.stream().filter(existing -> !existing.is(stack.getItem())).toList()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10) |

## SmithingTemplateFavorites

` public record SmithingTemplateFavorites(List<ResourceLocation> templates) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10)

玩家置顶的锻造模板。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SmithingTemplateFavorites EMPTY ` | 初值 ` new SmithingTemplateFavorites(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L11) |
| ` public static final Codec<SmithingTemplateFavorites> CODEC ` | 初值 ` ResourceLocation.CODEC.listOf() .xmap(SmithingTemplateFavorites::new, SmithingTemplateFavorites::templates) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L12) |
| ` public SmithingTemplateFavorites(List<ResourceLocation> templates) ` | 执行 ` templates = List.copyOf(templates) `<br>[调用处 SmithingTemplateFavorites](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L11) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L15) |
| ` public SmithingTemplateFavorites toggle(ResourceLocation template) ` | 切换模板的置顶状态。<br>参数 ` template ` 模板物品 id<br>返回 新的置顶数据<br>末尾返回 ` new SmithingTemplateFavorites(result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L25) |
| ` public List<ResourceLocation> templates() ` | 读取 record 分量 ` templates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |

## StructureScannerMenu

` public class StructureScannerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public boolean canUpload() ` | 末尾返回 ` this.canUpload ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L41) |
| ` public byte[] receiveUpload(StructureScannerFilePacket packet) throws IOException ` | ` (this.upload == null) ` 成立时抛出 ` new IOException("No blueprint upload in progress") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L45) |
| ` @Nullable public ImportedStructure getImportedStructure() ` | 末尾返回 ` this.importedStructure ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L63) |
| ` public void setImportedStructure(String name, StructureSnapshot snapshot) ` | 执行 ` this.setImportedStructure(name, snapshot, BlockPos.ZERO, snapshot.size()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L68) |
| ` public void setImportedStructure(String name, StructureSnapshot snapshot, BlockPos previewOffset, Vec3i previewSize) ` | [调用处 StructureScannerMenu.setImportedStructure](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L72) |
| ` public void setReplacementUndo(@Nullable ImportedStructure replacementUndo) ` | 执行 ` this.replacementUndo = replacementUndo ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L77) |
| ` public void clearImportedStructure() ` | [调用处 StructureScannerMenu.removed](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L81) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>实现调用 ` this.clearImportedStructure() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L86) |
| ` @SuppressWarnings("resource") public StructureScannerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L93) |
| ` public StructureScannerMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity blockEntity) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` this.blockEntity.getDiskInventory() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L100) |
| ` @Nullable public StructureScannerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L170) |
| ` @SuppressWarnings("checkstyle:RightCurly") @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` itemstack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L183) |
| ` @Override public boolean stillValid(Player player) ` | ` (this.blockEntity == null) ` 成立时提前返回 ` false `<br>末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.STRUCTURE_SCANNER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L234) |
| ` @Nullable public ImportedStructure getReplacementUndo() ` | 末尾返回 ` this.replacementUndo `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L31) |

## StructureScannerMenu.ImportedStructure

` public record ImportedStructure(String name, StructureSnapshot snapshot, BlockPos previewOffset, Vec3i previewSize) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60)

扫描结果扩出选区时，保留快照相对原扫描范围的位置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ImportedStructure(String name, StructureSnapshot snapshot, BlockPos previewOffset, Vec3i previewSize) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public StructureSnapshot snapshot() ` | 读取 record 分量 ` snapshot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public BlockPos previewOffset() ` | 读取 record 分量 ` previewOffset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public Vec3i previewSize() ` | 读取 record 分量 ` previewSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L60) |

## StructureToolMenu

` public class StructureToolMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureToolMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` this.addPlayerInventory(inventory) `<br>实现调用 ` this.addPlayerHotbar(inventory) `<br>[调用处 StructureToolItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L99) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L14) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L39) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L61) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` slots.get(4 * 9).getItem() `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` slots.get(4 * 9) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L66) |

## TeslaTowerMenu

` public class TeslaTowerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaTowerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L30) |
| ` public TeslaTowerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 实现调用 ` Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos())) `<br>实现调用 ` inventory.player.level().getBlockEntity(extraData.readBlockPos()) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L37) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L45) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.TESLA_TOWER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L50) |
| ` public void addFilter(String id, String arg) ` | 执行 ` this.blockEntity.addFilter(id, arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L59) |
| ` public void removeFilter(String id, String arg) ` | 执行 ` this.blockEntity.removeFilter(id, arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L63) |
| ` public void handleSync(List<Pair<TeslaFilter, String>> filters) ` | 执行 ` this.blockEntity.handleSync(filters) `<br>[调用处 TeslaTowerMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L67) |
| ` public TeslaTowerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L23) |
