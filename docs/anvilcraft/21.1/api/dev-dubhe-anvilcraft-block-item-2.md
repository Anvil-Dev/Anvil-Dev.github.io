# dev.dubhe.anvilcraft.block.item（ResinBlockItem 至 TradingStationBlockItem）



## ResinBlockItem

` public class ResinBlockItem extends HasMobBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResinBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L35) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (!ResinBlockItem.hasMob(stack) && context.getLevel().getBlockEntity(context.getClickedPos()) instanceof SpawnerBlockEntity spawner ) ` 成立时提前返回 ` captureSpawner(context, spawner) `<br>` (!ResinBlockItem.hasMob(stack)) ` 成立时提前返回 ` super.useOn(context) `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L39) |
| ` public static InteractionResult useEntity(Player player, Entity target, ItemStack stack) ` | 右键实体<br>` (!(target instanceof Mob mob)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (ResinBlockItem.hasMob(stack)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS `<br>[调用处 PlayerEventListener.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L85) |
| ` @SuppressWarnings("deprecation") public static ItemStack spawnMobFromItem(Level level, BlockPos pos, ItemStack stack) ` | ` (entity == null) ` 成立时提前返回 ` stack `<br>末尾返回 ` new ItemStack(ModItems.RESIN.asItem(), random.nextInt(1, 4)) `<br>[调用处 ModDispenserBehavior.resinBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L298) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L146) |

## RuinsBlockItem

` public class RuinsBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RuinsBlockItem.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RuinsBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RuinsBlockItem.java#L26) |
| ` @Override public InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context) ` | ` (context.getPlayer() == null \|\| !context.getPlayer().isCreative()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.getBlockState(pos).is(ModBlocks.RUINS_BLOCK) && !context.getPlayer().isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RuinsBlockItem.java#L30) |
| ` public static void convert(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.getBlock() `<br>实现调用 ` partPositions(multipart, state, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RuinsBlockItem.java#L51) |

## ShulkerContainerBlockItem

` public class ShulkerContainerBlockItem extends FlexibleMultiPartBlockItem<OpenedCube3x3PartHalf, BooleanProperty, Boolean> implements ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ShulkerContainerBlockItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShulkerContainerBlockItem(ShulkerContainerBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ShulkerContainerBlockItem.java#L15) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` ItemTooltipManager.getStorageTooltip(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ShulkerContainerBlockItem.java#L19) |
| ` @Override public boolean canFitInsideContainerItems() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ShulkerContainerBlockItem.java#L24) |

## SimpleMultiPartBlockItem

` public class SimpleMultiPartBlockItem<P extends Enum<P> & ISimpleMultiPartBlockState<P>> extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SimpleMultiPartBlockItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleMultiPartBlockItem(SimpleMultiPartBlock<P> block, Properties properties) ` | 实现调用 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SimpleMultiPartBlockItem.java#L24) |
| ` public int getMaxOffsetDistance(Direction clickedFace) ` | 末尾返回 ` ++i `<br>[调用处 SimpleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SimpleMultiPartBlockItem.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SimpleMultiPartBlockItem.java#L42) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SimpleMultiPartBlockItem.java#L54) |

## SmartBlockPlacerBlockItem

` public class SmartBlockPlacerBlockItem extends BlockItem implements Equipable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerBlockItem(Block block, Properties properties) ` | 实现调用 ` super(block, properties) `<br>实现调用 ` ItemAttributeModifiers.builder() `<br>实现调用 ` AnvilCraft.of("smart_block_placer_helmet") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L26) |
| ` @Override public EquipmentSlot getEquipmentSlot() ` | 末尾返回 ` EquipmentSlot.HEAD ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L37) |
| ` @Override public Holder<SoundEvent> getEquipSound() ` | 末尾返回 ` ArmorMaterials.IRON.value().equipSound() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L42) |
| ` @Override public ItemAttributeModifiers getDefaultAttributeModifiers(ItemStack stack) ` | 末尾返回 ` this.armorModifiers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L47) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | ` (!player.canUseSlot(EquipmentSlot.HEAD) \|\| !player.getItemBySlot(EquipmentSlot.HEAD).isEmpty()) ` 成立时提前返回 ` InteractionResultHolder.fail(stack) `<br>末尾返回 ` InteractionResultHolder.sidedSuccess(stack, level.isClientSide()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L52) |

## StorageFluidPortBlockItem

` public class StorageFluidPortBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StorageFluidPortBlockItem.java#L25)

仓储流体端口物品：tooltip 与物品内液面渲染沿用流体储罐那一套。 端口的 Tank NBT 与储罐同为「Fluid 复合标签」，故可直接交给 FluidTankItemTooltip；容量固定为 StorageFluidPortBlockEntity#CAPACITY\_MB， 且没有增强 / 无限形态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageFluidPortBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StorageFluidPortBlockItem.java#L26) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.singleFluidTooltipImage( stack, StorageFluidPortBlockEntity.CAPACITY_MB, StorageFluidPortBlockEntity.CAPACITY_MB ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StorageFluidPortBlockItem.java#L30) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(StorageFluidPortItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StorageFluidPortBlockItem.java#L40) |

## StoragePortBlockItem

` public class StoragePortBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StoragePortBlockItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StoragePortBlockItem.java#L18) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` StoragePortItemTooltip.storagePortTooltipImage(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StoragePortBlockItem.java#L22) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(StoragePortItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StoragePortBlockItem.java#L27) |

## SuperHeavyBlockItem

` public class SuperHeavyBlockItem extends BlockItem implements ISuperHeavy `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SuperHeavyBlockItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SuperHeavyBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SuperHeavyBlockItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` ISuperHeavy.super.inventoryTick(stack, level, entity, slotId, isSelected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/SuperHeavyBlockItem.java#L15) |

## TradingStationBlockItem

` public class TradingStationBlockItem extends FlexibleMultiPartBlockItem<DirectionVertical2PartHalf, DirectionProperty, Direction> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/TradingStationBlockItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TradingStationBlockItem(TradingStationBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/TradingStationBlockItem.java#L19) |
