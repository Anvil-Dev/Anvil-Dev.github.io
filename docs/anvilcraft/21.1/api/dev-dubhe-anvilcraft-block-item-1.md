# dev.dubhe.anvilcraft.block.item（CheckValveItem 至 RedstoneWireBlockItem）



## CheckValveItem

` public class CheckValveItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CheckValveItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CheckValveItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CheckValveItem.java#L7) |

## ChuteBlockItem

` public class ChuteBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ChuteBlockItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChuteBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ChuteBlockItem.java#L22) |
| ` @Override public InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context) ` | 实现调用 ` context.getLevel() `<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ChuteBlockItem.java#L26) |
| ` public static boolean isStorageInteraction(UseOnContext context) ` | ` (context.isSecondaryUseActive()) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof CreativeCrateBlockEntity) && !((blockEntity instanceof StoragePortBlockEntity \|\| blockEntity instanceof StoragePortConsolidatorBlockEntity) && context.getHand() == InteractionHand.MAIN_HAND)) ` 成立时提前返回 ` false `<br>[调用处 ItemStackMixin.anvilcraft$animateOffhandRodPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ChuteBlockItem.java#L42) |

## ConfinementChamberItem

` public class ConfinementChamberItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ConfinementChamberItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ConfinementChamberItem.java#L12) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` ConfinementChamberItemTooltip.confinementChamberTooltipImage(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ConfinementChamberItem.java#L16) |

## CreativeCrateBlockItem

` public class CreativeCrateBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeCrateBlockItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeCrateBlockItem.java#L18) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` CreativeCrateItemTooltip.creativeCrateTooltipImage(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeCrateBlockItem.java#L22) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(CreativeCrateItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeCrateBlockItem.java#L27) |

## CreativeFluidTankBlockItem

` public class CreativeFluidTankBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeFluidTankBlockItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidTankBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeFluidTankBlockItem.java#L18) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.creativeTankTooltipImage(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeFluidTankBlockItem.java#L22) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(CreativeFluidTankItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeFluidTankBlockItem.java#L27) |

## CursedBlockItem

` public class CursedBlockItem extends BlockItem implements ICursed `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CursedBlockItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CursedBlockItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` ICursed.super.inventoryTick(stack, level, entity, slotId, isSelected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CursedBlockItem.java#L15) |

## EnchantedGoldBlockItem

` public class EnchantedGoldBlockItem extends BlockItem implements IEnchantedGold `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EnchantedGoldBlockItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedGoldBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EnchantedGoldBlockItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` IEnchantedGold.super.inventoryTick(stack, level, entity, slotId, isSelected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EnchantedGoldBlockItem.java#L15) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EnchantedGoldBlockItem.java#L21) |

## EndDustBlockItem

` public class EndDustBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EndDustBlockItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EndDustBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EndDustBlockItem.java#L18) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand) ` | ` (!(level.getBlockState(blockPos).is(BlockTags.REPLACEABLE))) ` 成立时提前返回 ` InteractionResultHolder.fail(itemStack) `<br>` (!this.canPlace(blockPlaceContext, this.getBlock().defaultBlockState())) ` 成立时提前返回 ` InteractionResultHolder.fail(itemStack) `<br>` (this.place(blockPlaceContext) == InteractionResult.FAIL) ` 成立时提前返回 ` InteractionResultHolder.fail(itemStack) `<br>末尾返回 ` InteractionResultHolder.success(itemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/EndDustBlockItem.java#L22) |

## FishTankBlockItem

` public class FishTankBlockItem extends BlockItem implements Equipable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FishTankBlockItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FishTankBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FishTankBlockItem.java#L17) |
| ` @Override public EquipmentSlot getEquipmentSlot() ` | 末尾返回 ` EquipmentSlot.HEAD ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FishTankBlockItem.java#L21) |
| ` @Override public boolean canEquip(ItemStack stack, EquipmentSlot armorType, LivingEntity entity) ` | 末尾返回 ` armorType == EquipmentSlot.HEAD ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FishTankBlockItem.java#L26) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` player.getItemBySlot(EquipmentSlot.HEAD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FishTankBlockItem.java#L31) |

## FlexibleMultiPartBlockItem

` public class FlexibleMultiPartBlockItem<P extends Enum<P> & IFlexibleMultiPartBlockState<P, E>, T extends Property<E>, E extends Comparable<E>> extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FlexibleMultiPartBlockItem(FlexibleMultiPartBlock<P, T, E> block, Properties properties) ` | 实现调用 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L30) |
| ` public int getMaxOffsetDistance(BlockState state, Direction clickedFace) ` | 末尾返回 ` ++i `<br>[调用处 FlexibleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L48) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (result.consumesAction()) ` 成立时提前返回 ` result `<br>` (state == null) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L60) |
| ` @Override public boolean canPlace(BlockPlaceContext context, BlockState state) ` | ` (!this.block.hasEnoughSpace(state, context.getClickedPos(), context.getLevel())) ` 成立时提前返回 ` false `<br>末尾返回 ` super.canPlace(context, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L96) |
| ` public FlexibleMultiPartBlock<P, T, E> getBlock() ` | 末尾返回 ` this.block `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L22) |

## FluidTankBlockItem

` public class FluidTankBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FluidTankBlockItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FluidTankBlockItem.java#L23) |
| ` @Override public void appendHoverText( ItemStack stack, Item.TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag ) ` | 执行 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FluidTankBlockItem.java#L27) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.singleFluidTooltipImage( stack, FluidTankBlockEntity.BASE_CAPACITY, FluidTankBlockEntity.infinityThreshold() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FluidTankBlockItem.java#L37) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(FluidTankItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FluidTankBlockItem.java#L46) |

## FrostMetalBlockItem

` public class FrostMetalBlockItem extends BlockItem implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FrostMetalBlockItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FrostMetalBlockItem.java#L21) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` FrostMetalBlockItem.MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FrostMetalBlockItem.java#L25) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` FrostMetalBlockItem.EMPTY_SLOT_TEXTURES ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FrostMetalBlockItem.java#L30) |

## HasMobBlockItem

` public class HasMobBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasMobBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L40) |
| ` @Override public void verifyComponentsAfterLoad(ItemStack stack) ` | 实现调用 ` super.verifyComponentsAfterLoad(stack) `<br>实现调用 ` stack.has(ModComponents.SAVED_ENTITY) `<br>实现调用 ` stack.is(ModBlocks.MOB_AMBER_BLOCK.asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L44) |
| ` @Override public void appendHoverText( ItemStack stack, Item.TooltipContext context, List<Component> tooltipComponents, TooltipFlag isAdvanced ) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, isAdvanced) `<br>实现调用 ` HasMobBlockItem.hasMob(stack) `<br>实现调用 ` Optional.ofNullable(context.level()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L68) |
| ` public static boolean hasMob(ItemStack stack) ` | 末尾返回 ` stack.has(ModComponents.SAVED_ENTITY) `<br>[调用处 HasMobBlockItem.appendHoverText](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L107) |
| ` public static @Nullable Entity getMobFromItem(Level level, ItemStack stack) ` | 获取物品中的实体<br>` (!hasMob(stack)) ` 成立时提前返回 ` null `<br>` (savedEntity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` savedEntity.toEntity(level) `<br>[调用处 ResinBlockItem.spawnMobFromItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L128) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L114) |
| ` @SuppressWarnings("deprecation") public static ItemStack saveMobInItem(Level level, Mob entity, @Nullable Player player, ItemStack stack) ` | 末尾返回 ` newStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L122) |
| ` public static ItemStack saveMobInItem(Level level, Mob entity, ItemStack stack) ` | 末尾返回 ` saveMobInItem(level, entity, null, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L157) |
| ` public static boolean canMobBeSaved(Mob entity, @Nullable Player player, @Nullable ItemStack stack) ` | ` (player != null && player.getAbilities().instabuild) ` 成立时提前返回 ` true `<br>` (stack != null && ResinBlockItem.hasMob(stack)) ` 成立时提前返回 ` false `<br>` (entity.getBbHeight() > 2.0 \|\| entity.getBbWidth() > 1.5) ` 成立时提前返回 ` false `<br>末尾返回 ` !(entity instanceof Monster monster && !monster.hasEffect(MobEffects.WEAKNESS)) `<br>[调用处 ResinBlockItem.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L161) |
| ` public static boolean canMobBeSaved(Mob entity) ` | 末尾返回 ` canMobBeSaved(entity, null, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L169) |

## HeatCollectorBlockItem

` public class HeatCollectorBlockItem extends PlacementIntervalsBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeatCollectorBlockItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatCollectorBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeatCollectorBlockItem.java#L10) |
| ` @Override public boolean doRangeNoOverlap() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeatCollectorBlockItem.java#L14) |
| ` @Override public int getIntervalsRadius() ` | 末尾返回 ` 4 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeatCollectorBlockItem.java#L19) |

## HeatableBlockItem

` public class HeatableBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeatableBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatableBlockItem(HeatableBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeatableBlockItem.java#L13) |

## HeliostatsItem

` public class HeliostatsItem extends PlacementIntervalsBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeliostatsItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L30) |
| ` @Override public int getIntervalsRadius() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L34) |
| ` public static boolean hasDataStored(ItemStack stack) ` | 磁盘中是否存储有数据<br>末尾返回 ` stack.has(ModComponents.HELIOSTATS_DATA) `<br>[调用处 HeliostatsTooltip.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L42) |
| ` @SuppressWarnings("DataFlowIssue") public static BlockPos getData(ItemStack stack) ` | 获取存储的数据<br>末尾返回 ` heliostatsData.pos() `<br>[调用处 HeliostatsTooltip.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L49) |
| ` public static void deleteData(ItemStack stack) ` | 执行 ` stack.remove(ModComponents.HELIOSTATS_DATA) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L55) |
| ` @Override public boolean isEnchantable(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L59) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L64) |
| ` @Override public void appendHoverText( ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag isAdvanced) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, isAdvanced) `<br>实现调用 ` hasDataStored(stack) `<br>分支 ` (hasDataStored(stack)) ` 内调用 ` getData(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L101) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (player == null) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` super.useOn(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L117) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand ) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HeliostatsItem.java#L176) |

## HyperdimensionStorageStationBlockItem

` public class HyperdimensionStorageStationBlockItem extends SimpleMultiPartBlockItem<Cube3x3PartHalf> implements ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HyperdimensionStorageStationBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionStorageStationBlockItem(HyperdimensionStorageStationBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HyperdimensionStorageStationBlockItem.java#L13) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` ItemTooltipManager.getStorageTooltip(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HyperdimensionStorageStationBlockItem.java#L17) |
| ` @Override public boolean canFitInsideContainerItems(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HyperdimensionStorageStationBlockItem.java#L22) |

## InfiniteCollectorBlockItem

` public class InfiniteCollectorBlockItem extends PlacementIntervalsBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/InfiniteCollectorBlockItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InfiniteCollectorBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/InfiniteCollectorBlockItem.java#L12) |
| ` @Override public boolean doRangeNoOverlap() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/InfiniteCollectorBlockItem.java#L16) |
| ` @Override public int getIntervalsRadius() ` | 末尾返回 ` 6 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/InfiniteCollectorBlockItem.java#L21) |

## LargeCakeBlockItem

` public class LargeCakeBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCakeBlockItem.java#L14)

物品一次摆出蛋糕，各格仅依赖自身下方的支撑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCakeBlockItem(LargeCakeBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCakeBlockItem.java#L15) |
| ` public static BlockPos origin(BlockPos pos, BlockState state) ` | 末尾返回 ` pos.subtract(state.getValue(LargeCakeBlock.HALF).getOffset()) `<br>[调用处 BuildingRegionSnapshot.checkParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L199) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCakeBlockItem.java#L19) |
| ` public static void forEachPlacedBlock(BlockPos origin, BlockState state, BiConsumer<BlockPos, BlockState> consumer) ` | 实现调用 ` Cube3x3PartHalf.values() `<br>实现调用 ` consumer.accept(origin.offset(part.getOffset()), state.setValue(LargeCakeBlock.HALF, part)) `<br>实现调用 ` origin.offset(part.getOffset()) `<br>[调用处 BuildingRegionSnapshot.checkParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L199) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCakeBlockItem.java#L23) |
| ` @Override @Nullable public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` super.getPlacementState(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCakeBlockItem.java#L29) |

## LargeCrateBlockItem

` public class LargeCrateBlockItem extends SimpleMultiPartBlockItem<Cube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCrateBlockItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCrateBlockItem(SimpleMultiPartBlock<Cube3x3PartHalf> block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCrateBlockItem.java#L12) |
| ` @Override public boolean doesSneakBypassUse(ItemStack stack, LevelReader level, BlockPos pos, Player player) ` | 末尾返回 ` level.getBlockState(pos).is(ModBlocks.CRATE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeCrateBlockItem.java#L16) |

## LargeFluidTankBlockItem

` public class LargeFluidTankBlockItem extends SimpleMultiPartBlockItem<Cube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeFluidTankBlockItem.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeFluidTankBlockItem(LargeFluidTankBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeFluidTankBlockItem.java#L28) |
| ` @Override public void appendHoverText( ItemStack stack, Item.TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag ) ` | 执行 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeFluidTankBlockItem.java#L32) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.multiFluidTooltipImage(stack, LargeFluidTankBlockEntity.BASE_CAPACITY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeFluidTankBlockItem.java#L42) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(LargeFluidTankItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeFluidTankBlockItem.java#L58) |

## LevitationBlockItem

` public class LevitationBlockItem extends BlockItem implements ILevitation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LevitationBlockItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevitationBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LevitationBlockItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` ILevitation.super.inventoryTick(stack, level, entity, slotId, isSelected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LevitationBlockItem.java#L15) |

## MengerSpongeBlockItem

` public class MengerSpongeBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/MengerSpongeBlockItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MengerSpongeBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/MengerSpongeBlockItem.java#L20) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (player == null) ` 成立时提前返回 ` super.useOn(context) `<br>末尾返回 ` super.useOn(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/MengerSpongeBlockItem.java#L24) |

## MultiphaseMatterBlockItem

` public class MultiphaseMatterBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/MultiphaseMatterBlockItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphaseMatterBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/MultiphaseMatterBlockItem.java#L7) |

## PipeBlockItem

` public class PipeBlockItem extends Item implements IBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L56)

管道放置物品，负责处理所有管道放置和连接的交互逻辑。 放置模式 视线模式 （Shift+点击 或 点击非管道/非IFluidHandler）： 沿玩家视线方向放置直管，两端均有端头 连接模式 （点击管道或 IFluidHandler 表面）： 沿被点击面轴线放置直管，朝向目标的端头根据目标类型（管/IFluidHandler）开关 相邻连接模式 （两端都是管道或 IFluidHandler）： 不放置新方块，直接修改两侧已有方块建立连接 弯管交互 点击弯管时会根据弯管状态和被点击面对弯管进行转换（→直管/节点/旋转）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PipeBlockItem(Properties properties) ` | 执行 ` this(properties, ModBlocks.PIPE_STRAIGHT) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L59) |
| ` public PipeBlockItem(Properties properties, Supplier<PipeStraightBlock> straightBlock) ` | 实现调用 ` super(properties) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L1369) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L63) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 使用物品时的入口：非 Shift 时先尝试相邻连接，失败则走普通放置。<br>末尾返回 ` this.place(placeContext) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L71) |
| ` @Override public boolean place(Level level, BlockPos pos, Player player, InteractionHand hand) ` | 普通放置流程（同 BlockItem），放置新方块并播放声音、消耗物品。<br>末尾返回 ` this.place(level, pos, player, hand, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L322) |
| ` public boolean place(Level level, BlockPos pos, Player player, InteractionHand hand, @Nullable BlockState requiredState) ` | 末尾返回 ` context.getClickedPos().equals(pos) && this.place(context, requiredState).consumesAction() `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L324) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L327) |
| ` public InteractionResult place(BlockPlaceContext context) ` | 末尾返回 ` this.place(context, null) `<br>[调用处 PipeBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L333) |
| ` public boolean canPlace(BlockPlaceContext context, BlockState state) ` | 末尾返回 ` (!this.mustSurvive() \|\| state.canSurvive(context.getLevel(), context.getClickedPos())) && context.getLevel() .isUnobstructed(state, context.getClickedPos(), collisioncontext) `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L339) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L622) |
| ` public static boolean updateCustomBlockEntityTag(Level level, @Nullable Player player, BlockPos pos, ItemStack stack) ` | ` (minecraftserver == null) ` 成立时提前返回 ` false `<br>` (customdata.isEmpty()) ` 成立时提前返回 ` false `<br>` (blockentity == null) ` 成立时提前返回 ` false `<br>` (level.isClientSide() \|\| !blockentity.onlyOpCanSetNbt() \|\| player != null && player.canUseGameMasterBlocks()) ` 成立时提前返回 ` customdata.loadInto(blockentity, level.registryAccess()) `<br>末尾返回 ` false `<br>[调用处 PipeBlockItem.updateCustomBlockEntityTag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L643) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L646) |
| ` public BlockState updateBlockStateFromTag(BlockPos pos, Level level, ItemStack stack, BlockState state) ` | ` (blockitemstateproperties.isEmpty()) ` 成立时提前返回 ` state `<br>末尾返回 ` blockstate `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L359) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L665) |
| ` public static void updateBlockEntityComponents(Level level, BlockPos poa, ItemStack stack) ` | 实现调用 ` level.getBlockEntity(poa) `<br>实现调用 ` blockentity.applyComponentsFromItemStack(stack) `<br>实现调用 ` blockentity.setChanged() `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L361) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PipeBlockItem.java#L677) |

## PlaceInWaterBlockItem

` public class PlaceInWaterBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlaceInWaterBlockItem.java#L26)

水面放置物品：玩家不在水下时贴着水面放置，在水下时改用普通方块放置逻辑。 两者落点来源不同：水面靠流体射线找到水面格；水下时玩家自身泡在水里， 流体射线会命中紧贴自己的那格水，而该格随后又被玩家自己的碰撞箱判为阻塞 （玩家 blocksBuilding），落点既不可预期也不符合直觉。水下按普通方块放置即可。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlaceInWaterBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlaceInWaterBlockItem.java#L28) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 玩家在水下时按普通方块放置；否则返回 InteractionResult#PASS， 把交互交给 #use 用流体射线决定水面落点。<br>` (player != null && player.isUnderWater()) ` 成立时提前返回 ` super.useOn(context) `<br>末尾返回 ` InteractionResult.PASS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlaceInWaterBlockItem.java#L36) |
| ` public static List<UseOnContext> surfaceCandidates(Level level, Player player, InteractionHand hand) ` | 列出水面放置会依次尝试的落点上下文，顺序与实际放置完全一致。 落点由流体射线（ClipContext.Fluid#SOURCE\_ONLY）决定，首个落点放不下时 还会沿玩家朝向再试一格。预览必须按同样顺序逐个判定，否则会「预览在此、实际在彼」。<br>参数 ` level ` 所在世界<br>参数 ` player ` 玩家<br>参数 ` hand ` 使用的手<br>返回 依次尝试的放置上下文；射线未命中时为空<br>` (fluidHit.getType() == HitResult.Type.MISS) ` 成立时提前返回 ` List.of() `<br>[调用处 LargeBlockPlacePreviewEventListener.updatePreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L209) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlaceInWaterBlockItem.java#L56) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand ) ` | ` (player.isUnderWater()) ` 成立时提前返回 ` InteractionResultHolder.pass(stack) `<br>末尾返回 ` new InteractionResultHolder<>(interactionResult, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlaceInWaterBlockItem.java#L68) |

## PlacementIntervalsBlockItem

` public abstract class PlacementIntervalsBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L29)

限制方块放置间距的抽象 BlockItem。 当玩家尝试放置该方块时，会检查放置点周围指定半径（由 #getIntervalsRadius() 定义）内 是否已存在同种方块。若已存在，则阻止放置；否则允许放置。 子类需实现 #getIntervalsRadius() 以定义有效的放置间距。<br>参见 1.6

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlacementIntervalsBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L30) |
| ` public boolean doRangeNoOverlap() ` | 末尾返回 ` false `<br>[调用处 PlacementIntervalsBlockItem.canPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L34) |
| ` public abstract int getIntervalsRadius() ` | 获取放置间距半径。 以玩家点击位置为中心，该半径范围内的立方体区域内不允许存在另一个同种方块。<br>返回 放置间距半径（方块数）<br>[调用处 PlacementIntervalsBlockItem.getIntervalsRadius](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L50) |
| ` @Override public boolean canPlace(BlockPlaceContext context, BlockState state) ` | 判断是否可以在指定上下文中放置该方块。 除满足 BlockItem#canPlace(BlockPlaceContext, BlockState) 的条件外， 还需确保放置点周围 #getIntervalsRadius() 范围内不存在同种方块。<br>参数 ` context ` 方块放置上下文，包含放置位置、玩家等信息<br>参数 ` state ` 即将放置的方块状态<br>返回 如果可以放置返回 true，否则返回 false<br>末尾返回 ` super.canPlace(context, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/PlacementIntervalsBlockItem.java#L78) |

## RadiationBlockItem

` public class RadiationBlockItem extends BlockItem implements IRadiation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RadiationBlockItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RadiationBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RadiationBlockItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` IRadiation.super.inventoryTick(stack, level, entity, slotId, isSelected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RadiationBlockItem.java#L15) |

## RedstoneWireBlockItem

` public class RedstoneWireBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RedstoneWireBlockItem.java#L14)

放置红石导线，并支持用同一物品调整已有导线的附着面和局部端口。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RedstoneWireBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RedstoneWireBlockItem.java#L15) |
| ` @Override public InteractionResult place(BlockPlaceContext context) ` | ` (hitState.getBlock() instanceof RedstoneWireBlock wire) ` 成立时提前返回 ` this.editWire(context, hitPos, hitState, wire, false, true) `<br>` (placementState.getBlock() instanceof RedstoneWireBlock wire) ` 成立时提前返回 ` this.editWire(context, placementPos, placementState, wire, true, false) `<br>末尾返回 ` super.place(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/RedstoneWireBlockItem.java#L19) |
