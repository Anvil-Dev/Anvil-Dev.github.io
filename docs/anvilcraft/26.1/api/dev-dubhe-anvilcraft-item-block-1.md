# dev.dubhe.anvilcraft.item.block（ChuteBlockItem 至 StorageFluidPortBlockItem）



## ChuteBlockItem

` public class ChuteBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ChuteBlockItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChuteBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ChuteBlockItem.java#L21) |
| ` @Override public InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context) ` | 实现调用 ` context.getLevel() `<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ChuteBlockItem.java#L25) |
| ` public static boolean isStorageInteraction(UseOnContext context) ` | ` (context.isSecondaryUseActive()) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof CreativeCrateBlockEntity) && !(blockEntity instanceof StoragePortBlockEntity && context.getHand() == InteractionHand.MAIN_HAND)) ` 成立时提前返回 ` false `<br>[调用处 ItemStackMixin.anvilcraft$animateOffhandRodPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ChuteBlockItem.java#L40) |

## ConfinementChamberItem

` public class ConfinementChamberItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ConfinementChamberItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberItem(Block block, Properties properties) ` | 执行 ` super(block, properties.component(DataComponents.TOOLTIP_DISPLAY, TooltipDisplay.DEFAULT.withHidden(DataComponents.CONTAINER, true))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ConfinementChamberItem.java#L14) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` ConfinementChamberItemTooltip.confinementChamberTooltipImage(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ConfinementChamberItem.java#L19) |

## CreativeContainerBlockItem

` public class CreativeContainerBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/CreativeContainerBlockItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeContainerBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/CreativeContainerBlockItem.java#L18) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | ` (entries.isEmpty()) ` 成立时提前返回 ` super.getTooltipImage(stack) `<br>末尾返回 ` Optional.of(new CreativeContainerTooltip(entries)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/CreativeContainerBlockItem.java#L22) |

## CursedBlockItem

` public class CursedBlockItem extends BlockItem implements ICursed `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/CursedBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/CursedBlockItem.java#L13) |
| ` @Override public void inventoryTick(ItemStack ignored, ServerLevel level, Entity entity, @Nullable EquipmentSlot ignored1) ` | 实现调用 ` super.inventoryTick(ignored, level, entity, ignored1) `<br>实现调用 ` ICursed.super.inventoryTick(ignored, level, entity, ignored1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/CursedBlockItem.java#L17) |

## EnchantedGoldBlockItem

` public class EnchantedGoldBlockItem extends BlockItem implements IEnchantedGold `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EnchantedGoldBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedGoldBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EnchantedGoldBlockItem.java#L13) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` IEnchantedGold.super.inventoryTick(stack, level, entity, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EnchantedGoldBlockItem.java#L17) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EnchantedGoldBlockItem.java#L23) |

## EndDustBlockItem

` public class EndDustBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EndDustBlockItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EndDustBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EndDustBlockItem.java#L17) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand) ` | ` (!(level.getBlockState(blockPos).is(BlockTags.REPLACEABLE))) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (!this.canPlace(blockPlaceContext, this.getBlock().defaultBlockState())) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (this.place(blockPlaceContext) == InteractionResult.FAIL) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/EndDustBlockItem.java#L21) |

## FishTankBlockItem

` public class FishTankBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FishTankBlockItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FishTankBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties.equippable(EquipmentSlot.HEAD)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FishTankBlockItem.java#L17) |
| ` @Override public boolean canEquip(ItemStack stack, EquipmentSlot armorType, LivingEntity entity) ` | 末尾返回 ` armorType == EquipmentSlot.HEAD ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FishTankBlockItem.java#L21) |
| ` @Override public void inventoryTick(ItemStack itemStack, ServerLevel level, Entity owner, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(itemStack, level, owner, slot) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` player.getItemBySlot(EquipmentSlot.HEAD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FishTankBlockItem.java#L26) |

## FlexibleMultiPartBlockItem

` public class FlexibleMultiPartBlockItem<P extends Enum<P> & IFlexibleMultiPartBlockState<P, E>, T extends Property<E>, E extends Comparable<E>> extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FlexibleMultiPartBlockItem(FlexibleMultiPartBlock<P, T, E> block, Properties properties) ` | 实现调用 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L35) |
| ` public int getMaxOffsetDistance(BlockState state, Direction clickedFace) ` | 末尾返回 ` ++i `<br>[调用处 FlexibleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L74) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (state == null) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L86) |
| ` @Override public boolean canPlace(BlockPlaceContext context, BlockState state) ` | ` (!this.block.hasEnoughSpace(state, context.getClickedPos(), context.getLevel())) ` 成立时提前返回 ` false `<br>末尾返回 ` super.canPlace(context, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L121) |
| ` public FlexibleMultiPartBlock<P, T, E> getBlock() ` | 末尾返回 ` this.block `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L27) |

## FluidTankBlockItem

` public class FluidTankBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FluidTankBlockItem.java#L13)

流体储罐的物品形态，额外显示罐内流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FluidTankBlockItem.java#L14) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.singleFluidTooltipImage( stack, FluidTankBlockEntity.BASE_CAPACITY, FluidTankBlockEntity.infinityThreshold() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FluidTankBlockItem.java#L18) |

## FrostMetalBlockItem

` public class FrostMetalBlockItem extends BlockItem implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FrostMetalBlockItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FrostMetalBlockItem.java#L21) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` FrostMetalBlockItem.MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FrostMetalBlockItem.java#L25) |
| ` @Override public List<Identifier> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` FrostMetalBlockItem.EMPTY_SLOT_TEXTURES ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FrostMetalBlockItem.java#L30) |

## HasMobBlockItem

` public class HasMobBlockItem extends BlockItem implements IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasMobBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L37) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 实现调用 ` HasMobBlockItem.hasMob(stack) `<br>实现调用 ` Optional.ofNullable(context.level()) `<br>实现调用 ` context.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L41) |
| ` public static boolean hasMob(ItemStack stack) ` | 末尾返回 ` stack.has(ModComponents.SAVED_ENTITY) `<br>[调用处 HasMobBlockItem.appendItemTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L79) |
| ` public static @Nullable Entity getMobFromItem(Level level, ItemStack stack) ` | 获取物品中的实体<br>` (!HasMobBlockItem.hasMob(stack)) ` 成立时提前返回 ` null `<br>` (savedEntity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` savedEntity.toEntity(level) `<br>[调用处 BlueprintEntities.fromMaterial](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BlueprintEntities.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L84) |
| ` @SuppressWarnings("deprecation") public static ItemStack saveMobInItem(Level level, Mob entity, @Nullable Player player, ItemStack stack) ` | 末尾返回 ` newStack `<br>[调用处 HasMobBlockItem.saveMobInItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L128) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L92) |
| ` public static ItemStack saveMobInItem(Level level, Mob entity, ItemStack stack) ` | 末尾返回 ` HasMobBlockItem.saveMobInItem(level, entity, null, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L127) |
| ` public static boolean canMobBeSaved(Mob entity, @Nullable Player player, @Nullable ItemStack stack) ` | ` (player != null && player.getAbilities().instabuild) ` 成立时提前返回 ` true `<br>` (stack != null && ResinBlockItem.hasMob(stack)) ` 成立时提前返回 ` false `<br>` (entity.getBbHeight() > 2.0 \|\| entity.getBbWidth() > 1.5) ` 成立时提前返回 ` false `<br>末尾返回 ` !(entity instanceof Monster monster && !monster.hasEffect(MobEffects.WEAKNESS)) `<br>[调用处 ResinBlockItem.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L131) |
| ` public static boolean canMobBeSaved(Mob entity) ` | 末尾返回 ` HasMobBlockItem.canMobBeSaved(entity, null, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L139) |

## HeatCollectorBlockItem

` public class HeatCollectorBlockItem extends PlacementIntervalsBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeatCollectorBlockItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatCollectorBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeatCollectorBlockItem.java#L10) |
| ` @Override public boolean doRangeNoOverlap() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeatCollectorBlockItem.java#L14) |
| ` @Override public int getIntervalsRadius() ` | 末尾返回 ` 4 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeatCollectorBlockItem.java#L19) |

## HeatableBlockItem

` public class HeatableBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeatableBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatableBlockItem(HeatableBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeatableBlockItem.java#L13) |

## HeliostatsItem

` public class HeliostatsItem extends BlockItem implements IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeliostatsItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L35) |
| ` public static boolean hasDataStored(ItemStack stack) ` | 磁盘中是否存储有数据<br>末尾返回 ` stack.has(ModComponents.HELIOSTATS_DATA) `<br>[调用处 HeliostatsTooltip.render](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L40) |
| ` @SuppressWarnings("DataFlowIssue") public static BlockPos getData(ItemStack stack) ` | 获取存储的数据<br>末尾返回 ` heliostatsData.pos() `<br>[调用处 HeliostatsTooltip.render](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L45) |
| ` public static void deleteData(ItemStack stack) ` | 执行 ` stack.remove(ModComponents.HELIOSTATS_DATA) `<br>[调用处 HeliostatsItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L51) |
| ` @Override public boolean supportsEnchantment(ItemStack stack, Holder<Enchantment> enchantment) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L55) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` HeliostatsItem.hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L60) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 实现调用 ` HeliostatsItem.hasDataStored(stack) `<br>分支 ` (HeliostatsItem.hasDataStored(stack)) ` 内调用 ` HeliostatsItem.getData(stack) `<br>分支 ` (HeliostatsItem.hasDataStored(stack)) ` 内调用 ` Component.translatable("item.anvilcraft.heliostats.pos_set", pos.toShortString()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L97) |
| ` @SuppressWarnings("deprecation") @Override public InteractionResult useOn(UseOnContext context) ` | 实现调用 ` context.getLevel() `<br>实现调用 ` context.getPlayer() `<br>实现调用 ` player.isShiftKeyDown() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L119) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HeliostatsItem.java#L173) |

## HyperdimensionStorageStationBlockItem

` public class HyperdimensionStorageStationBlockItem extends SimpleMultiPartBlockItem<Cube3x3PartHalf> implements ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HyperdimensionStorageStationBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionStorageStationBlockItem(HyperdimensionStorageStationBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HyperdimensionStorageStationBlockItem.java#L13) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` ItemTooltipManager.getStorageTooltip(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HyperdimensionStorageStationBlockItem.java#L17) |
| ` @Override public boolean canFitInsideContainerItems() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HyperdimensionStorageStationBlockItem.java#L22) |

## InfiniteCollectorBlockItem

` public class InfiniteCollectorBlockItem extends PlacementIntervalsBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/InfiniteCollectorBlockItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InfiniteCollectorBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/InfiniteCollectorBlockItem.java#L12) |
| ` @Override public boolean doRangeNoOverlap() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/InfiniteCollectorBlockItem.java#L16) |
| ` @Override public int getIntervalsRadius() ` | 末尾返回 ` 6 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/InfiniteCollectorBlockItem.java#L21) |

## LargeCakeBlockItem

` public class LargeCakeBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeCakeBlockItem.java#L14)

物品一次摆出蛋糕，各格仅依赖自身下方的支撑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCakeBlockItem(LargeCakeBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeCakeBlockItem.java#L15) |
| ` public static BlockPos origin(BlockPos pos, BlockState state) ` | 末尾返回 ` pos.subtract(state.getValue(LargeCakeBlock.HALF).getOffset()) `<br>[调用处 BuildingRegionSnapshot.checkParts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L204) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeCakeBlockItem.java#L19) |
| ` public static void forEachPlacedBlock(BlockPos origin, BlockState state, BiConsumer<BlockPos, BlockState> consumer) ` | 实现调用 ` Cube3x3PartHalf.values() `<br>实现调用 ` consumer.accept(origin.offset(part.getOffset()), state.setValue(LargeCakeBlock.HALF, part)) `<br>实现调用 ` origin.offset(part.getOffset()) `<br>[调用处 BuildingBlockPlanner.addBoxCells](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingBlockPlanner.java#L266) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeCakeBlockItem.java#L23) |
| ` @Override @Nullable public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` super.getPlacementState(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeCakeBlockItem.java#L29) |

## LargeFluidTankBlockItem

` public class LargeFluidTankBlockItem extends SimpleMultiPartBlockItem<Cube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeFluidTankBlockItem.java#L18)

大型流体储罐的物品形态，额外显示罐内流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeFluidTankBlockItem(LargeFluidTankBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeFluidTankBlockItem.java#L19) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.multiFluidTooltipImage(stack, LargeFluidTankBlockEntity.BASE_CAPACITY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LargeFluidTankBlockItem.java#L23) |

## LevitationBlockItem

` public class LevitationBlockItem extends BlockItem implements ILevitation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LevitationBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevitationBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LevitationBlockItem.java#L13) |
| ` @Override public void inventoryTick(ItemStack itemStack, ServerLevel level, Entity owner, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(itemStack, level, owner, slot) `<br>实现调用 ` ILevitation.super.inventoryTick(itemStack, level, owner, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/LevitationBlockItem.java#L17) |

## MengerSpongeBlockItem

` public class MengerSpongeBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MengerSpongeBlockItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MengerSpongeBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MengerSpongeBlockItem.java#L22) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (player == null) ` 成立时提前返回 ` super.useOn(context) `<br>` (player.isShiftKeyDown()) ` 成立时提前返回 ` super.useOn(context) `<br>` (success == null) ` 成立时提前返回 ` super.useOn(context) `<br>末尾返回 ` success ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MengerSpongeBlockItem.java#L26) |
| ` public @Nullable InteractionResult clearFluid(UseOnContext context, BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` null `<br>[调用处 MengerSpongeBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MengerSpongeBlockItem.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MengerSpongeBlockItem.java#L39) |

## MultiphaseMatterBlockItem

` public class MultiphaseMatterBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MultiphaseMatterBlockItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphaseMatterBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/MultiphaseMatterBlockItem.java#L7) |

## PipeBlockItem

` public class PipeBlockItem extends Item implements IBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L56)

管道放置物品，负责处理所有管道放置和连接的交互逻辑。 放置模式 视线模式 （Shift+点击 或 点击非管道/非IFluidHandler）： 沿玩家视线方向放置直管，两端均有端头 连接模式 （点击管道或 IFluidHandler 表面）： 沿被点击面轴线放置直管，朝向目标的端头根据目标类型（管/IFluidHandler）开关 相邻连接模式 （两端都是管道或 IFluidHandler）： 不放置新方块，直接修改两侧已有方块建立连接 弯管交互 点击弯管时会根据弯管状态和被点击面对弯管进行转换（→直管/节点/旋转）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PipeBlockItem(Properties properties) ` | 执行 ` this(properties, ModBlocks.PIPE_STRAIGHT) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L59) |
| ` public PipeBlockItem(Properties properties, Supplier<PipeStraightBlock> straightBlock) ` | 实现调用 ` super(properties) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L1570) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L63) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 使用物品时的入口：非 Shift 时先尝试相邻连接，失败则走普通放置。<br>末尾返回 ` this.place(placeContext) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L71) |
| ` @Override public boolean place(Level level, BlockPos pos, Player player, InteractionHand hand) ` | 普通放置流程（同 BlockItem），放置新方块并播放声音、消耗物品。<br>末尾返回 ` this.place(level, pos, player, hand, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L322) |
| ` public boolean place(Level level, BlockPos pos, Player player, InteractionHand hand, @Nullable BlockState requiredState) ` | 末尾返回 ` context.getClickedPos().equals(pos) && this.place(context, requiredState).consumesAction() `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L324) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L327) |
| ` public InteractionResult place(BlockPlaceContext context) ` | 末尾返回 ` this.place(context, null) `<br>[调用处 PipeBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L333) |
| ` public boolean canPlace(BlockPlaceContext context, BlockState state) ` | 末尾返回 ` (!this.mustSurvive() \|\| state.canSurvive(context.getLevel(), context.getClickedPos())) && context.getLevel().isUnobstructed(state, context.getClickedPos(), collisioncontext) `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L339) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L622) |
| ` public static boolean updateCustomBlockEntityTag(Level level, @Nullable Player player, BlockPos pos, ItemStack stack) ` | ` (minecraftserver == null) ` 成立时提前返回 ` false `<br>` (entityData == null) ` 成立时提前返回 ` false `<br>` (blockentity == null) ` 成立时提前返回 ` false `<br>` (!level.isClientSide()) ` 成立时提前返回 ` entityData.loadInto(blockentity, level.registryAccess()) `<br>末尾返回 ` false `<br>[调用处 PipeBlockItem.updateCustomBlockEntityTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L643) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L646) |
| ` public BlockState updateBlockStateFromTag(BlockPos pos, Level level, ItemStack stack, BlockState state) ` | ` (blockitemstateproperties.isEmpty()) ` 成立时提前返回 ` state `<br>末尾返回 ` blockstate `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L359) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L665) |
| ` public static void updateBlockEntityComponents(Level level, BlockPos poa, ItemStack stack) ` | 实现调用 ` level.getBlockEntity(poa) `<br>实现调用 ` blockentity.applyComponentsFromItemStack(stack) `<br>实现调用 ` blockentity.setChanged() `<br>[调用处 PipeBlockItem.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L361) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L677) |

## PlaceInWaterBlockItem

` public class PlaceInWaterBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlaceInWaterBlockItem.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlaceInWaterBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlaceInWaterBlockItem.java#L16) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.PASS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlaceInWaterBlockItem.java#L20) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand ) ` | ` (blockHitResult2.miss) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` interactionResult ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlaceInWaterBlockItem.java#L25) |

## PlacementIntervalsBlockItem

` public abstract class PlacementIntervalsBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlacementIntervalsBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L17) |
| ` public boolean doRangeNoOverlap() ` | 末尾返回 ` false `<br>[调用处 PlacementIntervalsBlockItem.canPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L21) |
| ` public abstract int getIntervalsRadius() ` | [调用处 PlacementIntervalsBlockItem.getIntervalsRadius](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L29) |
| ` @Override public boolean canPlace(BlockPlaceContext context, BlockState state) ` | 末尾返回 ` super.canPlace(context, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PlacementIntervalsBlockItem.java#L43) |

## RadiationBlockItem

` public class RadiationBlockItem extends BlockItem implements IRadiation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RadiationBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RadiationBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RadiationBlockItem.java#L13) |
| ` @Override public void inventoryTick(ItemStack itemStack, ServerLevel level, Entity owner, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(itemStack, level, owner, slot) `<br>实现调用 ` IRadiation.super.inventoryTick(itemStack, level, owner, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RadiationBlockItem.java#L17) |

## ResinBlockItem

` public class ResinBlockItem extends HasMobBlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResinBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L36) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (!ResinBlockItem.hasMob(stack) && context.getLevel().getBlockEntity(context.getClickedPos()) instanceof SpawnerBlockEntity spawner ) ` 成立时提前返回 ` ResinBlockItem.captureSpawner(context, spawner) `<br>` (!ResinBlockItem.hasMob(stack)) ` 成立时提前返回 ` super.useOn(context) `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L40) |
| ` public static InteractionResult useEntity(Player player, Entity target, ItemStack stack) ` | 右键实体<br>` (!(target instanceof Mob mob)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (ResinBlockItem.hasMob(stack)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS `<br>[调用处 PlayerEventListener.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L88) |
| ` @SuppressWarnings("deprecation") public static ItemStack spawnMobFromItem(Level level, BlockPos pos, ItemStack stack) ` | ` (entity == null) ` 成立时提前返回 ` stack `<br>末尾返回 ` new ItemStack(ModItems.RESIN.asItem(), random.nextInt(1, 4)) `<br>[调用处 ModDispenserBehavior.resinBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L270) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L149) |

## RuinsBlockItem

` public class RuinsBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RuinsBlockItem.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RuinsBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RuinsBlockItem.java#L27) |
| ` @Override public InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context) ` | ` (context.getPlayer() == null \|\| !context.getPlayer().isCreative()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.getBlockState(pos).is(ModBlocks.RUINS_BLOCK) && !context.getPlayer().isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RuinsBlockItem.java#L31) |
| ` public static void convert(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.getBlock() `<br>实现调用 ` partPositions(multipart, state, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/RuinsBlockItem.java#L53) |

## ShulkerContainerBlockItem

` public class ShulkerContainerBlockItem extends FlexibleMultiPartBlockItem<OpenedCube3x3PartHalf, BooleanProperty, Boolean> implements ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ShulkerContainerBlockItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShulkerContainerBlockItem(ShulkerContainerBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ShulkerContainerBlockItem.java#L15) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` ItemTooltipManager.getStorageTooltip(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ShulkerContainerBlockItem.java#L19) |
| ` @Override public boolean canFitInsideContainerItems() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ShulkerContainerBlockItem.java#L24) |

## SimpleMultiPartBlockItem

` public class SimpleMultiPartBlockItem<P extends Enum<P> & ISimpleMultiPartBlockState<P>> extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SimpleMultiPartBlockItem.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleMultiPartBlockItem(SimpleMultiPartBlock<P> block, Properties properties) ` | 实现调用 ` super(block, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L749) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SimpleMultiPartBlockItem.java#L28) |
| ` public int getMaxOffsetDistance(Direction clickedFace) ` | 末尾返回 ` ++i `<br>[调用处 SimpleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SimpleMultiPartBlockItem.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SimpleMultiPartBlockItem.java#L67) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SimpleMultiPartBlockItem.java#L79) |

## StorageFluidPortBlockItem

` public class StorageFluidPortBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/StorageFluidPortBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageFluidPortBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/StorageFluidPortBlockItem.java#L13) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` FluidTankItemTooltip.singleFluidTooltipImage(stack, StorageFluidPortBlockEntity.CAPACITY_MB, StorageFluidPortBlockEntity.CAPACITY_MB) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/StorageFluidPortBlockItem.java#L17) |
