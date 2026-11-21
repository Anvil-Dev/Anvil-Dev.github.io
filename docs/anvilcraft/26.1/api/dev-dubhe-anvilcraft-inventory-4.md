# dev.dubhe.anvilcraft.inventory（RoyalAnvilMenu 至 TradingStationMenu）



## RoyalAnvilMenu

` public class RoyalAnvilMenu extends AnvilMenu implements HammerOpenedAnvilMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Supplier<AnvilMenuResult> RESULT ` | 初值 ` () -> AnvilMenuResult.builder() .allowBeyondMaxLevel(AnvilCraft.CONFIG.equipment.royalAnvilBeyondMaxLevel) .create() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L24) |
| ` public final AnvilMenuResult result ` | 初值 ` RESULT.get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L27) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory) ` | 执行 ` this(containerId, playerInventory, ContainerLevelAccess.NULL) `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L114) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L33) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` this(containerId, playerInventory, access, HammerOpenedAnvilMenuHelper.NO_HAMMER_SLOT) `<br>[调用处 RoyalAnvilBlock.getMenuProvider](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L37) |
| ` public RoyalAnvilMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access, int openedHammerSlot) ` | 执行 ` this(containerId, playerInventory, access, OpenedHammerSource.fromInventory(playerInventory, openedHammerSlot)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L41) |
| ` public RoyalAnvilMenu( int containerId, Inventory playerInventory, ContainerLevelAccess access, @Nullable OpenedHammerSource source ) ` | 实现调用 ` super(containerId, playerInventory, access) `<br>实现调用 ` source.clientInventorySlot() `<br>实现调用 ` this.addDataSlot(this.openedHammerSlot) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L45) |
| ` @Override public MenuType<?> getType() ` | 末尾返回 ` ModMenuTypes.ROYAL_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L60) |
| ` @Override public void createResultInternal() ` | 实现调用 ` this.getSlot(0).getItem() `<br>实现调用 ` this.getSlot(0) `<br>实现调用 ` this.getSlot(1).getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L70) |
| ` @Override public int anvilcraft$getOpenedHammerSlot() ` | 末尾返回 ` this.openedHammerSlot.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L85) |
| ` @Override public void clicked(int slotId, int button, ContainerInput containerInput, Player player) ` | 实现调用 ` this.openedHammerSlot.get() `<br>分支 ` (touchedHammer) ` 内调用 ` HammerOpenedAnvilMenuHelper.closeOnServer(player) `<br>实现调用 ` super.clicked(slotId, button, containerInput, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L90) |
| ` @Override public void broadcastChanges() ` | 实现调用 ` super.broadcastChanges() `<br>实现调用 ` this.closeIfOpenedHammerMoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L108) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>分支 ` (this.openedHammerSource != null) ` 内调用 ` this.clearContainer(player, this.inputSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L114) |

## RoyalGrindstoneMenu

` public class RoyalGrindstoneMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Map<Item, RepairCostRecipeEntry> REPAIR_COST_RECIPES ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L35) |
| ` public static final Item DEFAULT_REPAIR_MATERIAL ` | 初值 ` Items.GOLD_INGOT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L36) |
| ` public static final int GOLD_PER_CURSE ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L37) |
| ` public int usedGold ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L44) |
| ` public int totalRepairCost ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L45) |
| ` public int totalCurseCount ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L46) |
| ` public int removedRepairCost ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L47) |
| ` public int removedCurseCount ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L48) |
| ` @Nullable public Item repairMaterial ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L49) |
| ` @Nullable public RepairCostRecipeEntry currentRecipe ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L50) |
| ` public RoyalGrindstoneMenu(MenuType<RoyalGrindstoneMenu> type, int containerId, Inventory playerInventory) ` | 执行 ` this(type, containerId, playerInventory, ContainerLevelAccess.NULL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L57) |
| ` public RoyalGrindstoneMenu(int containerId, Inventory playerInventory, ContainerLevelAccess access) ` | 执行 ` this(ModMenuTypes.ROYAL_GRINDSTONE.get(), containerId, playerInventory, access) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L61) |
| ` public RoyalGrindstoneMenu( MenuType<RoyalGrindstoneMenu> type, int containerId, Inventory playerInventory, ContainerLevelAccess access ) ` | 皇家砂轮菜单<br>参数 ` type ` 菜单类型<br>参数 ` containerId ` 容器id<br>参数 ` playerInventory ` 背包<br>参数 ` access ` 检查<br>实现调用 ` super(type, containerId) `<br>实现调用 ` this.addSlot(new Slot(playerInventory, j + i * 9 + 9, 8 + j * 18, 84 + i * 18)) `<br>实现调用 ` this.addSlot(new Slot(playerInventory, i, 8 + i * 18, 142)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L71) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L227) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(this.access, player, ModBlocks.ROYAL_GRINDSTONE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L280) |
| ` @Override public void slotsChanged(Container container) ` | 实现调用 ` super.slotsChanged(container) `<br>实现调用 ` container.equals(this.repairMaterialSlots) `<br>实现调用 ` container.equals(this.repairToolSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L285) |
| ` public void removed(Player player) ` | 移除<br>参数 ` player ` 玩家<br>实现调用 ` super.removed(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L299) |

## RoyalGrindstoneMenu.RepairCostRecipeEntry

` public record RepairCostRecipeEntry(int count, Item item) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RepairCostRecipeEntry(int count, Item item) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329) |
| ` public Item item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalGrindstoneMenu.java#L329) |

## RoyalSmithingMenu

` public class RoyalSmithingMenu extends AdjacentSmithingMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L27)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSmithingMenu(int containerId, Inventory inventory) ` | 执行 ` this(containerId, inventory, ContainerLevelAccess.NULL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L35) |
| ` public RoyalSmithingMenu(MenuType<RoyalSmithingMenu> type, int containerId, Inventory inventory) ` | 执行 ` this(type, containerId, inventory, ContainerLevelAccess.NULL, inventory.player.level()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L39) |
| ` public RoyalSmithingMenu(int containerId, Inventory inventory, ContainerLevelAccess access) ` | 执行 ` this(ModMenuTypes.ROYAL_SMITHING.get(), containerId, inventory, access, inventory.player.level()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L43) |
| ` @Override public void slotsChanged(Container container) ` | 实现调用 ` super.slotsChanged(container) `<br>分支 ` (this.level instanceof ServerLevel) ` 内调用 ` this.getSlot(0).hasItem() `<br>分支 ` (this.level instanceof ServerLevel) ` 内调用 ` this.getSlot(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L109) |
| ` @Override public void createResult() ` | 实现调用 ` this.createRecipeInput() `<br>分支 ` (this.level instanceof ServerLevel serverLevel) ` 内调用 ` serverLevel.recipeAccess().getRecipeFor(RecipeType.SMITHING, input, serverLevel) `<br>分支 ` (this.level instanceof ServerLevel serverLevel) ` 内调用 ` serverLevel.recipeAccess() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L121) |
| ` @Override public boolean canTakeItemForPickAll(ItemStack carried, Slot target) ` | 末尾返回 ` target.container != this.resultSlots && super.canTakeItemForPickAll(carried, target) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L141) |
| ` @Override public boolean canMoveIntoInputSlots(ItemStack stack) ` | ` (this.templateItemTest.test(stack) && !this.getSlot(0).hasItem()) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L146) |
| ` public boolean hasRecipeError() ` | 末尾返回 ` this.hasRecipeError.get() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalSmithingMenu.java#L156) |

## SliderMenu

` public class SliderMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SliderMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` extraData.readVarInt() `<br>[调用处 ModMenuTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMenuTypes.java#L130) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L20) |
| ` public SliderMenu(int containerId, int initialValue, Callback<Integer> callback) ` | 实现调用 ` super(ModMenuTypes.SLIDER.get(), containerId) `<br>实现调用 ` ModMenuTypes.SLIDER.get() `<br>[调用处 CreativeGeneratorBlockEntity.createMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeGeneratorBlockEntity.java#L108) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L26) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` sourceSlot.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L32) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L40) |
| ` public int getInitialValue() ` | 末尾返回 ` this.initialValue `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L15) |
| ` @Nullable public Callback<Integer> getCallback() ` | 末尾返回 ` this.callback `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SliderMenu.java#L15) |

## SmartBlockPlacerMenu

` public class SmartBlockPlacerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` this.blockEntity.getBlueprintItemHandler() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L35) |
| ` public SmartBlockPlacerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L118) |
| ` @Nullable public SmartBlockPlacerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L124) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` itemstack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L138) |
| ` @Override public boolean stillValid(Player player) ` | ` (this.blockEntity == null) ` 成立时提前返回 ` false `<br>末尾返回 ` stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.SMART_BLOCK_PLACER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L217) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L229) |
| ` public SimpleContainer getBookInventory() ` | 末尾返回 ` this.bookInventory `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L27) |

## SmithingTemplateAdditions

` public record SmithingTemplateAdditions(List<ItemStack> templates) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10)

玩家手动添加的配方模板，保存组件与添加顺序，并与实际物品库存隔离。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SmithingTemplateAdditions EMPTY ` | 初值 ` new SmithingTemplateAdditions(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L11) |
| ` public static final MapCodec<SmithingTemplateAdditions> CODEC ` | 初值 ` ItemStack.CODEC.listOf().fieldOf("templates") .xmap(SmithingTemplateAdditions::new, SmithingTemplateAdditions::templates) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L12) |
| ` public SmithingTemplateAdditions(List<ItemStack> templates) ` | 执行 ` templates = templates.stream().filter(stack -> !stack.isEmpty()).map(stack -> stack.copyWithCount(1)).toList() `<br>[调用处 TranscendenceSmithingMenu.handleTemplateAction](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TranscendenceSmithingMenu.java#L447) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L15) |
| ` @Override public List<ItemStack> templates() ` | 末尾返回 ` this.templates.stream().map(ItemStack::copy).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L19) |
| ` public SmithingTemplateAdditions add(ItemStack stack) ` | 末尾返回 ` new SmithingTemplateAdditions(result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L24) |
| ` public SmithingTemplateAdditions remove(ItemStack stack) ` | 末尾返回 ` new SmithingTemplateAdditions(this.templates.stream().filter(existing -> !existing.is(stack.getItem())).toList()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateAdditions.java#L10) |

## SmithingTemplateFavorites

` public record SmithingTemplateFavorites(List<Identifier> templates) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10)

玩家置顶的锻造模板。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SmithingTemplateFavorites EMPTY ` | 初值 ` new SmithingTemplateFavorites(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L11) |
| ` public static final MapCodec<SmithingTemplateFavorites> CODEC ` | 初值 ` Identifier.CODEC.listOf() .fieldOf("templates") .xmap(SmithingTemplateFavorites::new, SmithingTemplateFavorites::templates) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L12) |
| ` public SmithingTemplateFavorites(List<Identifier> templates) ` | 执行 ` templates = List.copyOf(templates) `<br>[调用处 SmithingTemplateFavorites](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L11) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L16) |
| ` public SmithingTemplateFavorites toggle(Identifier template) ` | 切换模板的置顶状态。<br>参数 ` template ` 模板物品 id<br>返回 新的置顶数据<br>末尾返回 ` new SmithingTemplateFavorites(result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L26) |
| ` public List<Identifier> templates() ` | 读取 record 分量 ` templates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmithingTemplateFavorites.java#L10) |

## StructureScannerMenu

` public class StructureScannerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public boolean canUpload() ` | 末尾返回 ` this.canUpload ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L42) |
| ` public byte[] receiveUpload(StructureScannerFilePacket packet) throws IOException ` | ` (this.upload == null) ` 成立时抛出 ` new IOException("No blueprint upload in progress") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L46) |
| ` public @Nullable ImportedStructure getImportedStructure() ` | 末尾返回 ` this.importedStructure ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L64) |
| ` public void setImportedStructure(String name, StructureSnapshot snapshot) ` | 执行 ` this.setImportedStructure(name, snapshot, BlockPos.ZERO, snapshot.size()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L68) |
| ` public void setImportedStructure(String name, StructureSnapshot snapshot, BlockPos previewOffset, Vec3i previewSize) ` | [调用处 StructureScannerMenu.setImportedStructure](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L72) |
| ` public void setReplacementUndo(@Nullable ImportedStructure replacementUndo) ` | 执行 ` this.replacementUndo = replacementUndo ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L77) |
| ` public void clearImportedStructure() ` | [调用处 StructureScannerMenu.removed](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L81) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>实现调用 ` this.clearImportedStructure() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L86) |
| ` public StructureScannerMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos()))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L93) |
| ` public StructureScannerMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity blockEntity) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() `<br>实现调用 ` this.blockEntity.getDiskInventory() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L98) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` itemstack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L178) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.STRUCTURE_SCANNER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L238) |
| ` public StructureScannerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L31) |
| ` @Nullable public ImportedStructure getReplacementUndo() ` | 末尾返回 ` this.replacementUndo `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L31) |

## StructureScannerMenu.ImportedStructure

` public record ImportedStructure(String name, StructureSnapshot snapshot, BlockPos previewOffset, Vec3i previewSize) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61)

扫描结果扩出选区时，保留快照相对原扫描范围的位置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ImportedStructure(String name, StructureSnapshot snapshot, BlockPos previewOffset, Vec3i previewSize) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public StructureSnapshot snapshot() ` | 读取 record 分量 ` snapshot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public BlockPos previewOffset() ` | 读取 record 分量 ` previewOffset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public Vec3i previewSize() ` | 读取 record 分量 ` previewSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L61) |

## StructureToolMenu

` public class StructureToolMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureToolMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` this.addPlayerInventory(inventory) `<br>实现调用 ` this.addPlayerHotbar(inventory) `<br>[调用处 StructureToolItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L108) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L14) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (!sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L37) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L59) |
| ` @Override public void removed(Player player) ` | 实现调用 ` super.removed(player) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` this.slots.get(4 * 9).getItem() `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` this.slots.get(4 * 9) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureToolMenu.java#L64) |

## TeslaTowerMenu

` public class TeslaTowerMenu extends AbstractContainerMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaTowerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, BlockEntity machine) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L30) |
| ` public TeslaTowerMenu( @Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 实现调用 ` Objects.requireNonNull(inventory.player.level().getBlockEntity(extraData.readBlockPos())) `<br>实现调用 ` inventory.player.level().getBlockEntity(extraData.readBlockPos()) `<br>实现调用 ` inventory.player.level() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L37) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L45) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(ContainerLevelAccess.create(this.level, this.blockEntity.getBlockPos()), player, ModBlocks.TESLA_TOWER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L50) |
| ` public void addFilter(String id, String arg) ` | 执行 ` this.blockEntity.addFilter(id, arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L59) |
| ` public void removeFilter(String id, String arg) ` | 执行 ` this.blockEntity.removeFilter(id, arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L63) |
| ` public void handleSync(List<Pair<TeslaFilter, String>> filters) ` | 执行 ` this.blockEntity.handleSync(filters) `<br>[调用处 TeslaTowerMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L67) |
| ` public TeslaTowerBlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L23) |

## TradingStationMenu

` public class TradingStationMenu extends AbstractContainerMenu implements IFilterMenu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TradingStationMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, FriendlyByteBuf extraData) ` | 执行 ` this(menuType, containerId, inventory, inventory.player.level().getBlockEntity(extraData.readBlockPos(), ModBlockEntities.TRADING_STATION.get()).orElseThrow()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L29) |
| ` public TradingStationMenu(@Nullable MenuType<?> menuType, int containerId, Inventory inventory, TradingStationBlockEntity be) ` | 实现调用 ` super(menuType, containerId) `<br>实现调用 ` be.setOwner(inventory.player.getGameProfile().id()) `<br>实现调用 ` inventory.player.getGameProfile().id() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L38) |
| ` @Override public ItemStack quickMoveStack(Player player, int index) ` | ` (sourceSlot == null \|\| !sourceSlot.hasItem()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` copyOfSourceStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L134) |
| ` @Override public IFilterBlockEntity getFilterBlockEntity() ` | 末尾返回 ` this.be ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L191) |
| ` @Override public boolean isFilterEnabled() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L196) |
| ` @Override public int getFilterSlotIndex(Slot slot) ` | 末尾返回 ` slot.index - TradingStationMenu.TE_INVENTORY_FIRST_SLOT_INDEX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L201) |
| ` @Override public void flush() ` | 执行 ` TradingStationBlockEntity.updateAndSend(this.be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L206) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` AbstractContainerMenu.stillValid(ContainerLevelAccess.create(this.level, this.be.getBlockPos()), player, ModBlocks.TRADING_STATION.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L211) |
| ` public TradingStationBlockEntity getBe() ` | 末尾返回 ` this.be `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L24) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TradingStationMenu.java#L24) |
