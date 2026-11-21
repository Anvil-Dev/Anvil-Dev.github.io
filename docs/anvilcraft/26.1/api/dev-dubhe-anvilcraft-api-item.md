# dev.dubhe.anvilcraft.api.item



## IBlockItem

` public interface IBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean place(Level level, BlockPos pos, Player player, InteractionHand hand) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IBlockItem.java#L13) |
| ` static IBlockItem wrap(BlockItem item) ` | 末尾返回 ` Wrapped.INSTANCES.computeIfAbsent(item, Wrapped::new) `<br>[调用处 BlockPlacementUtil.placeBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L113) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IBlockItem.java#L15) |

## IBlockItem.Wrapped

` class Wrapped implements IBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IBlockItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean place(Level level, BlockPos pos, Player player, InteractionHand hand) ` | ` (!context.getClickedPos().equals(pos)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.item.place(context).consumesAction() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` pos.getCenter() `<br>实现调用 ` player.getDirection() `<br>实现调用 ` context.getClickedPos().equals(pos) `<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` this.item.place(context).consumesAction() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IBlockItem.java#L27) |

## ICannotFitInStationItem

` public interface ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICannotFitInStationItem.java#L3)


## ICapacitorChargeable

` public interface ICapacitorChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default EnergyHandler getEnergyStorage(ItemStack stack) ` | 末尾返回 ` Objects.requireNonNull(ItemAccess.forStack(stack).getCapability(Capabilities.Energy.ITEM), () -> "Missing energy capability for " + stack.getItem()) `<br>[调用处 ICapacitorChargeable.charge](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L12) |
| ` default boolean charge(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack) ` | ` (!this.canAccept(stack, capacitor, capacitorStack, false)) ` 成立时提前返回 ` false `<br>` (!this.canBeCharged(stack, storage, capacitor, capacitorStack)) ` 成立时提前返回 ` false `<br>` (energy <= 0 \|\| energy > storage.getCapacityAsLong() - storage.getAmountAsLong()) ` 成立时提前返回 ` false `<br>实现调用 ` this.canAccept(stack, capacitor, capacitorStack, false) `<br>实现调用 ` this.getEnergyStorage(stack) `<br>实现调用 ` this.canBeCharged(stack, storage, capacitor, capacitorStack) `<br>实现调用 ` capacitor.getEnergyStored(capacitorStack) `<br>实现调用 ` storage.getCapacityAsLong() `<br>实现调用 ` storage.getAmountAsLong() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L17) |
| ` default boolean chargeForce(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack) ` | ` (!this.canAccept(stack, capacitor, capacitorStack, true)) ` 成立时提前返回 ` false `<br>` (!this.canBeCharged(stack, storage, capacitor, capacitorStack)) ` 成立时提前返回 ` false `<br>` (energy <= 0) ` 成立时提前返回 ` false `<br>实现调用 ` this.canAccept(stack, capacitor, capacitorStack, true) `<br>实现调用 ` this.getEnergyStorage(stack) `<br>实现调用 ` this.canBeCharged(stack, storage, capacitor, capacitorStack) `<br>实现调用 ` Math.max(0L, storage.getCapacityAsLong() - storage.getAmountAsLong()) `<br>实现调用 ` storage.getCapacityAsLong() `<br>实现调用 ` storage.getAmountAsLong() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L30) |
| ` default void onCharged(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L44) |
| ` default boolean canAccept(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack, boolean force) ` | 末尾返回 ` true `<br>[调用处 ICapacitorChargeable.charge](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L47) |
| ` default boolean canBeCharged(ItemStack stack, EnergyHandler storage, IFullCapacitor capacitor, ItemStack capacitorStack) ` | 实现调用 ` Transaction.openRoot() `<br>实现调用 ` storage.insert(Math.max(0, capacitor.getEnergyStored(capacitorStack)), transaction) `<br>实现调用 ` Math.max(0, capacitor.getEnergyStored(capacitorStack)) `<br>实现调用 ` capacitor.getEnergyStored(capacitorStack) `<br>[调用处 ICapacitorChargeable.charge](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java#L51) |

## IChargerChargeable

` public interface IChargerChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IChargerChargeable.java#L6)

可使用充电器充电的物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ItemStack charge(ItemStack input) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IChargerChargeable.java#L7) |

## IChargerDischargeable

` public interface IChargerDischargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IChargerDischargeable.java#L6)

可使用放电器放电的物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ItemStack discharge(ItemStack input) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IChargerDischargeable.java#L7) |

## IDiskCloneable

` public interface IDiskCloneable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IDiskCloneable.java#L20)

可用磁盘复制的方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void storeDiskData(ValueOutput output) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IDiskCloneable.java#L22) |
| ` void applyDiskData(ValueInput input) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IDiskCloneable.java#L24) |
| ` default List<String> getDiskCompatibleGroups() ` | 末尾返回 ` List.of(Objects.requireNonNull( BuiltInRegistries.BLOCK_ENTITY_TYPE.getKey(((BlockEntity) this).getType()), "Unregistered block entity type" ).toString()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IDiskCloneable.java#L26) |
| ` default InteractionResult useDisk( Level level, Player player, InteractionHand hand, ItemStack itemStack, BlockHitResult hitResult ) ` | 使用磁盘物品与方块进行交互<br>参数 ` level ` 当前游戏世界<br>参数 ` player ` 执行交互的玩家<br>参数 ` hand ` 玩家使用的手（主手或副手）<br>参数 ` itemStack ` 玩家手中的物品堆<br>参数 ` hitResult ` 方块点击结果信息<br>返回 交互结果，PASS表示不处理，SUCCESS表示处理成功<br>` (!player.getAbilities().mayBuild) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (itemStack.is(ModItems.DISK.get())) ` 成立时提前返回 ` itemStack.useOn(new UseOnContext(level, player, hand, itemStack, hitResult)) `<br>末尾返回 ` InteractionResult.PASS `<br>实现调用 ` player.getAbilities() `<br>实现调用 ` itemStack.is(ModItems.DISK.get()) `<br>实现调用 ` ModItems.DISK.get() `<br>分支 ` (itemStack.is(ModItems.DISK.get())) ` 内调用 ` itemStack.useOn(new UseOnContext(level, player, hand, itemStack, hitResult)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IDiskCloneable.java#L41) |

## IExtraItemDisplay

` public interface IExtraItemDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IExtraItemDisplay.java#L8)

继承该接口的物品可用于在GUI内部，于自身上方额外渲染另一个物品。 注意：额外渲染嵌套层数过深时不会继续渲染。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ItemStack getDisplayedItem(ItemStack stack) ` | 判断一个物品的额外渲染物品。若无需额外渲染，返回ItemStack#EMPTY。<br>参数 ` stack ` 需判断额外渲染物的物品<br>返回 需要额外渲染的物品。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IExtraItemDisplay.java#L13) |
| ` int offsetX(ItemStack stack) ` | 渲染的额外物品相对于 左侧 的水平偏移量。 返回0相当于对其自齐最左侧，返回16相当于对齐自身最右侧。<br>参数 ` stack ` 需判断偏移量的物品<br>返回 水平偏移量 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IExtraItemDisplay.java#L20) |
| ` int offsetY(ItemStack stack) ` | 渲染的额外物品相对于 上侧 的垂直偏移量。 返回0相当于对齐自身最上侧，返回16相当于对齐自身最下侧。<br>参数 ` stack ` 需判断偏移量的物品<br>返回 垂直偏移量 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IExtraItemDisplay.java#L27) |
| ` float scale(ItemStack stack) ` | 渲染的额外物品相对于自身的缩放大小。 返回1.0相当于与自身相同，返回0.5相当于渲染为自身大小的一半。<br>参数 ` stack ` 需判断缩放大小的物品<br>返回 缩放大小 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IExtraItemDisplay.java#L34) |

## IFullCapacitor

` public interface IFullCapacitor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L17)

满电容器物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` static boolean tryForceChargeTarget( IFullCapacitor capacitor, ItemStack capacitorStack, Slot slot, ClickAction clickAction, Player player ) ` | ` (clickAction != ClickAction.SECONDARY \|\| !slot.allowModification(player)) ` 成立时提前返回 ` false `<br>` (!(target.getItem() instanceof ICapacitorChargeable chargeable)) ` 成立时提前返回 ` false `<br>` (EnergyWeaponReload.isWeapon(target)) ` 成立时提前返回 ` EnergyWeaponReload.start(player, target, capacitor, capacitorStack, true, slot) `<br>` (!chargeable.chargeForce(target, capacitor, capacitorStack.copy())) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` slot.allowModification(player) `<br>实现调用 ` slot.getItem() `<br>实现调用 ` target.getItem() `<br>实现调用 ` EnergyWeaponReload.isWeapon(target) `<br>分支 ` (EnergyWeaponReload.isWeapon(target)) ` 内调用 ` EnergyWeaponReload.start(player, target, capacitor, capacitorStack, true, slot) `<br>实现调用 ` chargeable.chargeForce(target, capacitor, capacitorStack.copy()) `<br>[调用处 CapacitorItem.overrideStackedOnOther](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L18) |
| ` int getEnergyStored(ItemStack stack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L42) |
| ` ItemStack getEmpty(ItemStack full) ` | [调用处 IFullCapacitor.inventoryTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L44) |
| ` default void inventoryTick(ItemStack stack, Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` player.getInventory() `<br>实现调用 ` PocketInventory.carriedItems(player) `<br>实现调用 ` chargeables.addAll(InventoryUtil.getCompatItems(player)) `<br>实现调用 ` InventoryUtil.getCompatItems(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IFullCapacitor.java#L46) |

## IMultipleMaterial

` public interface IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IMultipleMaterial.java#L10)

多合一配方的材料

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 获取在余烬锻造台内鼠标悬停时显示的tooltip<br>返回 需要显示的tooltip | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IMultipleMaterial.java#L14) |
| ` List<Identifier> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 获取在余烬锻造台内对应空槽位显示的纹理集<br>参数 ` template ` 作为模板的物品<br>参数 ` id ` 槽位id<br>参数 ` inputs ` 其它槽位内的物品<br>返回 该槽位应显示的纹理集 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/IMultipleMaterial.java#L22) |

## InfinityItemStackHandler

` public class InfinityItemStackHandler implements ResourceHandler<ItemResource> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L13)

创造模式物品处理器：无限供给指定物品。 insert 永远返回全部（接受所有物品）， extract 永远返回请求量（无限供给已设定的物品）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L16) |
| ` @Override public ItemResource getResource(int index) ` | 末尾返回 ` ItemResource.of(this.stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L21) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` this.stack.getCount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L26) |
| ` @Override public long getCapacityAsLong(int index, ItemResource resource) ` | 末尾返回 ` Integer.MAX_VALUE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L31) |
| ` @Override public boolean isValid(int index, ItemResource resource) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L36) |
| ` @Override public int insert(int index, ItemResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` amount `<br>实现调用 ` resource.toStack(amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L41) |
| ` @Override public int extract(int index, ItemResource resource, int amount, TransactionContext transaction) ` | ` (this.stack.isEmpty()) ` 成立时提前返回 ` 0 `<br>` (!current.equals(resource)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` amount `<br>实现调用 ` this.stack.isEmpty() `<br>实现调用 ` ItemResource.of(this.stack) `<br>实现调用 ` current.equals(resource) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L47) |
| ` public void setStack(ItemStack stack) ` | 执行 ` this.stack = stack.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L55) |
| ` public ItemStack getStack() ` | 末尾返回 ` this.stack.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L59) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.stack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L63) |
| ` public InfinityItemStackHandler() ` | Java 提供的无参构造器。<br>[调用处 CreativeCrateBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeCrateBlockEntity.java#L31) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java#L13) |
