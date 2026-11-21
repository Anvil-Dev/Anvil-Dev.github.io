# dev.dubhe.anvilcraft.item.utility



## CrabClawItem

` public class CrabClawItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final AttributeModifier RANGE_ATTRIBUTE_MODIFIER ` | 初值 ` new AttributeModifier( AnvilCraft.of("range_modifier"), 3, AttributeModifier.Operation.ADD_VALUE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L27) |
| ` public static final String CRAB_CLAW_MARKER ` | 初值 ` "crabClaw" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L34) |
| ` public static final String DUAL_CRAB_CLAW_MARKER ` | 初值 ` "dualCrabClaw" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L35) |
| ` public CrabClawItem(Properties properties) ` | 实现调用 ` ItemAttributeModifiers.builder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L37) |
| ` public static void updateReach(Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` player.getMainHandItem().is(ModItems.CRAB_CLAW) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L46) |
| ` @Override public InteractionResult interactLivingEntity(ItemStack stack, Player player, LivingEntity target, InteractionHand hand) ` | 末尾返回 ` InteractionResult.PASS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L61) |

## DiskItem

` public class DiskItem extends Item implements IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DiskItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L43) |
| ` public static boolean hasDataStored(ItemStack stack) ` | 磁盘中是否存储有数据<br>末尾返回 ` stack.has(ModComponents.DISK_DATA) `<br>[调用处 CelestialForgingAnvilBlockEntity.useDisk](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L918) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L48) |
| ` public static CompoundTag getData(ItemStack stack) ` | 末尾返回 ` stack.getOrDefault(ModComponents.DISK_DATA, new DiskData(new CompoundTag())).tag() `<br>[调用处 CelestialSnapshotCodec.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L52) |
| ` public static void deleteData(ItemStack stack) ` | 执行 ` stack.remove(ModComponents.DISK_DATA) `<br>[调用处 DiskItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L131) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L56) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` DiskItem.hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L60) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 实现调用 ` DiskItem.hasDataStored(stack) `<br>分支 ` (!DiskItem.hasDataStored(stack)) ` 内调用 ` builder.accept(DiskItem.TOOLTIP_STORE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L65) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (player == null \|\| player.isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (!level.getBlockState(clickedPos).hasBlockEntity()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!(blockEntity instanceof IDiskCloneable diskCloneable)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS `<br>[调用处 DiskItem.onItemUseFirst](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L117) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L76) |
| ` @Override public InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context) ` | ` (context.getLevel().getBlockEntity(context.getClickedPos()) instanceof IDiskCloneable) ` 成立时提前返回 ` this.useOn(context) `<br>末尾返回 ` super.onItemUseFirst(stack, context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L114) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand ) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L122) |
| ` public static void onBlockPlaced(BlockEvent.EntityPlaceEvent event) ` | 实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/DiskItem.java#L149) |

## EnergyWeaponPlatformItem

` public class EnergyWeaponPlatformItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/EnergyWeaponPlatformItem.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int STORED_ENERGY ` | 初值 ` 640_000_000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/EnergyWeaponPlatformItem.java#L15) |
| ` public EnergyWeaponPlatformItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/EnergyWeaponPlatformItem.java#L17) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS_SERVER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/EnergyWeaponPlatformItem.java#L21) |

## FilterItem

` public class FilterItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.FILTER_CONTENT, new FilterContent())) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L23) |
| ` public static boolean filter(ItemStack filter, ItemStack stack) ` | 实现调用 ` filter.isEmpty() `<br>实现调用 ` filter.is(ModItems.FILTER) `<br>实现调用 ` ItemStack.isSameItemSameComponents(filter, stack) `<br>[调用处 FilteredItemStackHandler.isFiltered](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/FilteredItemStackHandler.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L27) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | ` (!itemstack.is(ModItems.FILTER)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L37) |

## FilterItem.FilterMenuProvider

` public record FilterMenuProvider(int position) implements MenuProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Component getDisplayName() ` | 末尾返回 ` Component.translatable("item.anvilcraft.filter") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L48) |
| ` @Override public FilterMenu createMenu(int containerId, Inventory playerInventory, Player player) ` | 末尾返回 ` new FilterMenu( ModMenuTypes.FILTER.get(), containerId, playerInventory, new FilterContainer(player, this.position, player.getInventory().getItem(this.position)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L53) |
| ` @Override public void writeClientSideData(AbstractContainerMenu menu, RegistryFriendlyByteBuf buffer) ` | 实现调用 ` buffer.writeInt(filterMenu.getContainer().getPosition()) `<br>实现调用 ` filterMenu.getContainer().getPosition() `<br>实现调用 ` filterMenu.getContainer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L63) |
| ` public FilterMenuProvider(int position) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L47) |
| ` public int position() ` | 读取 record 分量 ` position ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L47) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L47) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L47) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L47) |

## GeodeItem

` public class GeodeItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GeodeItem.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GeodeItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GeodeItem.java#L24) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | ` (!level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GeodeItem.java#L28) |

## GuideBookItem

` public class GuideBookItem extends Item implements Thinkable, IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuideBookItem(Properties properties) ` | 实现调用 ` ItemAttributeModifiers.builder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L26) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` InteractionResult.PASS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L34) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> consumer, TooltipFlag flag ) ` | 执行 ` this.appendHoverText(consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L47) |
| ` @Override public void onThought() ` | 执行 ` IntegrationUtil.openIntegrationScreen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L58) |

## IonoCraftItem

` public class IonoCraftItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/IonoCraftItem.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IonoCraftItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/IonoCraftItem.java#L26) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand hand) ` | ` (hitresult.getType() == HitResult.Type.MISS) ` 成立时提前返回 ` InteractionResult.PASS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/IonoCraftItem.java#L30) |

## MagnetItem

` public class MagnetItem extends Item implements IChargerChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/MagnetItem.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MagnetItem(Properties properties) ` | 执行 ` super(properties.repairable(ModItemTags.MAGNET_INGOTS).enchantable(1)) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L170) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/MagnetItem.java#L16) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand ) ` | 末尾返回 ` MagnetUtil.magnetizeItems(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/MagnetItem.java#L20) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` MagnetUtil.placeMagnetizedNode(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/MagnetItem.java#L29) |
| ` @Override public ItemStack charge(ItemStack input) ` | 末尾返回 ` ModItems.MAGNET.asStack(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/MagnetItem.java#L34) |

## PillBoxItem

` public class PillBoxItem extends BundleLikeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/PillBoxItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PillBoxItem(Properties properties) ` | 执行 ` super( properties .component(ModComponents.PILL_BOX_CONTENTS, PillBoxContents.EMPTY) .useCooldown(2) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/PillBoxItem.java#L14) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` PillBoxItem.use(itemStack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/PillBoxItem.java#L22) |
| ` public static InteractionResult use(ItemStack pillBox, Player player) ` | ` (!pillBox.is(ModItems.PILL_BOX)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (contents.pills().isEmpty()) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS `<br>[调用处 UsePillBoxPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/PillBoxItem.java#L28) |

## SeedsPackItem

` public class SeedsPackItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/SeedsPackItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SeedsPackItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/SeedsPackItem.java#L18) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand ) ` | ` (this.items.isEmpty()) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/SeedsPackItem.java#L25) |

## StructureToolItem

` public class StructureToolItem extends Item implements IHandHeldItemTooltipProvider, IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureToolItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L37) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` super.useOn(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L50) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L78) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 实现调用 ` stack.get(ModComponents.STRUCTURE_DATA) `<br>分支 ` (data != null) ` 内调用 ` data.minX() `<br>分支 ` (data != null) ` 内调用 ` data.minY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L120) |
| ` @Override public boolean accepts(ItemStack itemStack) ` | 末尾返回 ` itemStack.is(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L142) |
| ` @Override public void render( PoseStack poseStack, VertexConsumer consumer, ItemStack itemStack, double camX, double camY, double camZ) ` | 实现调用 ` itemStack.get(ModComponents.STRUCTURE_DATA) `<br>分支 ` (data != null) ` 内调用 ` data.minPos() `<br>分支 ` (data != null) ` 内调用 ` data.maxPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L147) |
| ` @Override public void renderTooltip(GuiGraphicsExtractor graphics, int screenWidth, int screenHeight) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L159) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L163) |
