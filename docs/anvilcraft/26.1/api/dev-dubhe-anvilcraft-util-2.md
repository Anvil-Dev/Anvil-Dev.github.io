# dev.dubhe.anvilcraft.util（BlockMiningEffect 至 BlockStateUtil.BlockHolderLookup）



## BlockMiningEffect

` public record BlockMiningEffect(ResourceKey<Enchantment> enchantment, int level) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L25)

Describes a block mining effect by the enchantment that implements it.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BlockMiningEffect NORMAL ` | 初值 ` new BlockMiningEffect(null, 0) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L31) |
| ` public static final BlockMiningEffect SILK_TOUCH ` | 初值 ` new BlockMiningEffect(Enchantments.SILK_TOUCH, 1) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L32) |
| ` public static final BlockMiningEffect DISINTEGRATION ` | 初值 ` new BlockMiningEffect(ModEnchantments.DISINTEGRATION_KEY, 1) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L33) |
| ` public static final BlockMiningEffect SMELTING ` | 初值 ` new BlockMiningEffect(ModEnchantments.SMELTING_KEY, 1) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L35) |
| ` public static final BlockMiningEffect MAX_SMELTING ` | 初值 ` new BlockMiningEffect(ModEnchantments.SMELTING_KEY, 5) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L36) |
| ` public static final BlockMiningEffect FORTUNE_5 ` | 初值 ` new BlockMiningEffect(Enchantments.FORTUNE, 5) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L37) |
| ` public BlockMiningEffect(@Nullable ResourceKey<Enchantment> enchantment, int level) ` | ` (level < 0 \|\| (enchantment == null && level != 0)) ` 成立时抛出 ` new IllegalArgumentException("Invalid mining enchantment level: " + level) `<br>[调用处 CelestialForgingAnvilLaserInterfaceBlockEntity.readMiningEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLaserInterfaceBlockEntity.java#L404) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L39) |
| ` public ItemStack applyTo(ServerLevel level, ItemStack baseTool) ` | 末尾返回 ` tool ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L47) |
| ` public boolean is(ResourceKey<Enchantment> enchantment) ` | 末尾返回 ` enchantment.equals(this.enchantment) `<br>[调用处 BlockMiningEffect.isDisintegration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L57) |
| ` public boolean isDisintegration() ` | 末尾返回 ` this.is(ModEnchantments.DISINTEGRATION_KEY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L61) |
| ` public Component getDisplaySuffix() ` | ` (this.enchantment == null) ` 成立时提前返回 ` Component.empty() `<br>末尾返回 ` Component.literal(" ") .append(Component.translatable(this.enchantment.identifier().toLanguageKey("enchantment"))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L65) |
| ` public int getLaserColor() ` | ` (this.is(Enchantments.SILK_TOUCH)) ` 成立时提前返回 ` BlockMiningEffect.SILK_TOUCH_LASER_COLOR `<br>` (this.is(ModEnchantments.DISINTEGRATION_KEY)) ` 成立时提前返回 ` BlockMiningEffect.DISINTEGRATION_LASER_COLOR `<br>` (this.is(ModEnchantments.SMELTING_KEY)) ` 成立时提前返回 ` BlockMiningEffect.SMELTING_LASER_COLOR `<br>末尾返回 ` BlockMiningEffect.NORMAL_LASER_COLOR ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L71) |
| ` public static Optional<BlockMiningEffect> fromAnvil(@Nullable Block block) ` | Returns the mining effect represented by an anvil block, or empty when the block is not a mining anvil.<br>实现调用 ` Optional.of(BlockMiningEffect.SILK_TOUCH) `<br>实现调用 ` Optional.of(BlockMiningEffect.DISINTEGRATION) `<br>实现调用 ` Optional.of(BlockMiningEffect.SMELTING) `<br>[调用处 BlockDevourerBlock.devourSingleBlockInternalLogic](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L247) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L81) |
| ` public ResourceKey<Enchantment> enchantment() ` | 读取 record 分量 ` enchantment ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L25) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockMiningEffect.java#L25) |

## BlockPlacementPicking

` public final class BlockPlacementPicking `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean hasFullPlacementShape(BlockState state, CollisionContext context) ` | ` (state.is(ModBlocks.ACCELERATION_RING) \|\| state.is(ModBlocks.DEFLECTION_RING)) ` 成立时提前返回 ` isHoldingPlacementItem(context, ModBlocks.ACCELERATION_RING.asItem()) \|\| isHoldingPlacementItem(context, ModBlocks.DEFLECTION_RING.asItem()) `<br>末尾返回 ` state.is(ModBlocks.LARGE_CAULDRON) && state.getValue(LargeCauldronBlock.HALF).getOffsetY() == 2 && isHoldingPlacementItem(context, ModBlocks.GIANT_ANVIL.asItem()) `<br>[调用处 LargeCauldronBlock.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L36) |
| ` public static BlockHitResult pickBuildingRodTarget(Player player) ` | 实现调用 ` player.getEyePosition() `<br>实现调用 ` start.add(player.getLookAngle().scale(player.blockInteractionRange())) `<br>实现调用 ` player.getLookAngle().scale(player.blockInteractionRange()) `<br>[调用处 BuildingRodClient.updateTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L204) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L52) |
| ` public static UseOnContext forPlacement(UseOnContext context) ` | ` (!(context instanceof PlayerClick click) \|\| !click.anvilcraft$isPlayerClick()) ` 成立时提前返回 ` context `<br>` (player == null \|\| player instanceof FakePlayer) ` 成立时提前返回 ` context `<br>` (context.getLevel().getBlockState(context.getClickedPos()).canBeReplaced() \|\| !new AABB(context.getClickedPos()).inflate(HIT_EPSILON).contains(context.getClickLocation())) ` 成立时提前返回 ` context `<br>` (hit.getType() == HitResult.Type.BLOCK && hit.getBlockPos().equals(context.getClickedPos()) && hit.getLocation().distanceToSqr(context.getClickLocation()) <= HIT_EPSILON * HIT_EPSILON) ` 成立时提前返回 ` context `<br>末尾返回 ` new UseOnContext(context.getLevel(), player, context.getHand(), context.getItemInHand(), hit) `<br>[调用处 BuildingRodClient.updateTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L225) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L64) |
| ` @Nullable public static InteractionResult tryPlaceFromAir(ItemStack stack, Level level, Player player, InteractionHand hand) ` | ` (hit == null) ` 成立时提前返回 ` null `<br>末尾返回 ` stack.useOn(new UseOnContext(level, player, hand, stack, hit)) `<br>[调用处 ItemStackMixin.placeThroughModelGaps](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L88) |
| ` @Nullable public static BlockHitResult findAirPlacementHit(ItemStack stack, Level level, Player player) ` | ` (player instanceof FakePlayer \|\| player.isSpectator()) ` 成立时提前返回 ` null `<br>` (!(picked instanceof BlockHitResult hit) \|\| !allowed(level, player, stack, hit)) ` 成立时提前返回 ` null `<br>` (ProjectileUtil.getEntityHitResult(player, start, end, player.getBoundingBox().expandTowards(end.subtract(start)).inflate(1), entity -> !entity.isSpectator() && entity.isPickable(), start.distanceToSqr(end)) != null) ` 成立时提前返回 ` null `<br>末尾返回 ` hit `<br>[调用处 LargeBlockPlacePreviewEventListener.updatePreview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L216) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L95) |

## BlockPlacementPicking.PlacementRejection

` public interface PlacementRejection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L115)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isPlacementRejected() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L116) |

## BlockPlacementPicking.PlayerClick

` public interface PlayerClick `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L130)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isPlayerClick() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L131) |
| ` boolean anvilcraft$hasBlockHit() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L133) |

## BlockPlacementUtil

` public final class BlockPlacementUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L59)

方块物品和蓝图状态的放置工具。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final List<IntegerProperty> COUNT_PROPERTIES ` | 状态值即放置数量的整数属性（雪层、海泡菜、蛋、蜡烛、花朵数量）。<br>初值 ` List.of( BlockStateProperties.LAYERS, BlockStateProperties.PICKLES, BlockStateProperties.EGGS, BlockStateProperties.CANDLES, BlockStateProperties.FLOWER_AMOUNT ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L66) |
| ` public static boolean isMultifaceLike(Block block) ` | 末尾返回 ` block instanceof MultifaceBlock \|\| block instanceof VineBlock `<br>[调用处 SimpleBlockPlacementRule.isStateDependent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L74) |
| ` public static ItemStack placeBlock( ServerLevel level, BlockPos pos, ItemStack stack, @Nullable BlockState requiredState ) ` | 末尾返回 ` placeBlock(level, pos, stack, requiredState, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L78) |
| ` public static ItemStack placeBlock( ServerLevel level, BlockPos pos, ItemStack stack, @Nullable BlockState requiredState, @Nullable Direction defaultFacing ) ` | ` (blockItem == null) ` 成立时提前返回 ` stack `<br>[调用处 BlockItemHandlerPointer.placeToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L87) |
| ` public static boolean isTargetAvailable(Level level, BlockPos targetPos) ` | 末尾返回 ` level.getBlockState(targetPos).canBeReplaced() && isTargetUnobstructed(level, targetPos) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L204) |
| ` public static boolean isTargetUnobstructed(Level level, BlockPos targetPos) ` | 末尾返回 ` level.isUnobstructed(null, Shapes.create(new AABB(targetPos))) `<br>[调用处 SmartBlockPlacerBlockEntity.findNextBlueprintTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L639) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L208) |
| ` public static boolean areTargetsAvailable(Level level, List<BlueprintPartSnapshot> snapshots) ` | 末尾返回 ` !snapshots.isEmpty() && snapshots.stream().allMatch(snapshot -> isTargetAvailable(level, snapshot.pos())) `<br>[调用处 SmartBlockPlacerBlockEntity.applyToBlueprintPosition](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L579) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L212) |
| ` public static boolean applyBlueprintStates(ServerLevel level, List<BlueprintPartSnapshot> snapshots) ` | 末尾返回 ` true `<br>[调用处 SmartBlockPlacerBlockEntity.applyToBlueprintPosition](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L585) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L217) |
| ` public static boolean isBlueprintStatePresent(Level level, BlockPos pos, BlockState requiredState) ` | ` (!worldState.is(requiredState.getBlock())) ` 成立时提前返回 ` false `<br>末尾返回 ` contextualState.is(worldState.getBlock()) && contextualState.canSurvive(level, pos) `<br>[调用处 SmartBlockPlacerBlockEntity.hasBlueprintMaterials](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L306) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L286) |
| ` public static boolean isMultiblockBlock(BlockState state) ` | 末尾返回 ` isMultiblockBlock(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L295) |
| ` public static boolean isMultiblockBlock(Block block) ` | ` (multiblock) ` 成立时提前返回 ` true `<br>末尾返回 ` block instanceof BedBlock \|\| block instanceof DoorBlock \|\| block instanceof DoublePlantBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L299) |
| ` public static boolean isSecondaryBlueprintPart(BlockState state) ` | 末尾返回 ` isSecondaryMultiblockPart(state) \|\| state.getBlock() instanceof LargeCakeBlock && state.getValue(LargeCakeBlock.HALF) != Cube3x3PartHalf.BOTTOM_CENTER `<br>[调用处 SmartBlockPlacerBlockEntity.hasBlueprintMaterials](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L305) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L312) |
| ` public static boolean isSecondaryMultiblockPart(BlockState state) ` | ` (block instanceof BedBlock) ` 成立时提前返回 ` state.hasProperty(BlockStateProperties.BED_PART) && state.getValue(BlockStateProperties.BED_PART) == BedPart.HEAD `<br>` (block instanceof DoorBlock \|\| block instanceof DoublePlantBlock) ` 成立时提前返回 ` state.hasProperty(BlockStateProperties.DOUBLE_BLOCK_HALF) && state.getValue(BlockStateProperties.DOUBLE_BLOCK_HALF) == DoubleBlockHalf.UPPER `<br>末尾返回 ` block instanceof AbstractMultiPartBlock<?> multiPartBlock && !multiPartBlock.isMainPart(state) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L156) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L317) |
| ` public static List<MultiblockPart> getExpectedMultiblockParts(BlockPos pos, BlockState state) ` | ` (block instanceof AbstractMultiPartBlock<?> multiPartBlock) ` 成立时提前返回 ` getExpectedCustomMultiblockParts(pos, state, multiPartBlock) `<br>末尾返回 ` List.of(new MultiblockPart(pos, state)) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L329) |
| ` public static List<MultiblockPart> getPresentMultiblockParts(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` List.copyOf(presentParts) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L131) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L380) |

## BlockPlacementUtil.BlueprintExtent

` public record BlueprintExtent(int minRow, int maxRow, int minColumn, int maxColumn, int maxLayer) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlueprintExtent of(BlockState[] states, int gridSize) ` | 末尾返回 ` new BlueprintExtent(minRow, maxRow, minColumn, maxColumn, maxLayer) `<br>[调用处 SmartBlockPlacerBlockEntity.loadBlueprintExtent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L1148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L468) |
| ` public static BlueprintExtent fromSize( int width, int depth, int height, int columnOffset, int rowOffset, int layerOffset ) ` | 末尾返回 ` new BlueprintExtent( rowOffset, rowOffset + depth - 1, columnOffset, columnOffset + width - 1, layerOffset + height - 1 ) `<br>[调用处 SmartBlockPlacerBlockEntity.StructureBlueprint.empty](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L867) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L495) |
| ` public BlueprintExtent clamp(int gridSize) ` | 末尾返回 ` new BlueprintExtent(minRow, maxRow, minColumn, maxColumn, maxLayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L512) |
| ` public int width() ` | 末尾返回 ` this.maxColumn - this.minColumn + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L521) |
| ` public int depth() ` | 末尾返回 ` this.maxRow - this.minRow + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L525) |
| ` public int height() ` | 末尾返回 ` this.maxLayer + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L529) |
| ` public BlueprintExtent(int minRow, int maxRow, int minColumn, int maxColumn, int maxLayer) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public int minRow() ` | 读取 record 分量 ` minRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public int maxRow() ` | 读取 record 分量 ` maxRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public int minColumn() ` | 读取 record 分量 ` minColumn ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public int maxColumn() ` | 读取 record 分量 ` maxColumn ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public int maxLayer() ` | 读取 record 分量 ` maxLayer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L467) |

## BlockPlacementUtil.BlueprintLayout

` public record BlueprintLayout(LevelAccessor level, BlockPos placerPos, Direction targetFacing, Direction scannerFacing, boolean autoRotate, boolean upsideDown, int gridSize, int distance, BlueprintExtent extent, BlockState[] states) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L534)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int getStorageIndexForOrder(int orderIndex) ` | 末尾返回 ` layer * this.gridSize * this.gridSize + row * this.gridSize + column ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L546) |
| ` public int orderCount() ` | 末尾返回 ` this.extent.width() * this.extent.depth() * this.extent.height() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L578) |
| ` public AABB getRangeBounds() ` | 末尾返回 ` this.getRangeBounds(this.targetFacing, this.upsideDown) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L582) |
| ` public AABB getRangeBounds(Direction targetFacing, boolean upsideDown) ` | 末尾返回 ` new AABB(minX, minY, minZ, maxX, maxY, maxZ) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.getRangeBounds](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L583) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L586) |
| ` public BlockPos getPosition(int storageIndex) ` | 末尾返回 ` this.getPosition(storageIndex, this.targetFacing, this.upsideDown) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.getState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L703) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L621) |
| ` public BlockPos getPosition(int storageIndex, Direction targetFacing, boolean upsideDown) ` | 末尾返回 ` this.placerPos.relative(targetFacing, forwardOffset) .relative(targetFacing.getClockWise(), lateralOffset) .above(verticalOffset) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.getRangeBounds](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L597) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L625) |
| ` public BlockState getState(int storageIndex) ` | ` (storageIndex < 0 \|\| storageIndex >= this.states.length) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>末尾返回 ` transformBlueprintState( this.states[storageIndex], this.level, this.getPosition(storageIndex), this.getLayoutFacing(this.targetFacing), this.scannerFacing, this.upsideDown ) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.capturePartSnapshots](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L742) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L696) |
| ` public BlockState getState(int storageIndex, Direction targetFacing, boolean upsideDown) ` | ` (storageIndex < 0 \|\| storageIndex >= this.states.length) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L710) |
| ` public List<BlueprintPartSnapshot> capturePartSnapshots( Level level, BlockPos targetPos, BlockState requiredState ) ` | 末尾返回 ` List.copyOf(snapshots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L724) |
| ` public BlueprintLayout(LevelAccessor level, BlockPos placerPos, Direction targetFacing, Direction scannerFacing, boolean autoRotate, boolean upsideDown, int gridSize, int distance, BlueprintExtent extent, BlockState[] states) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L534) |
| ` public LevelAccessor level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L535) |
| ` public BlockPos placerPos() ` | 读取 record 分量 ` placerPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L536) |
| ` public Direction targetFacing() ` | 读取 record 分量 ` targetFacing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L537) |
| ` public Direction scannerFacing() ` | 读取 record 分量 ` scannerFacing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L538) |
| ` public boolean autoRotate() ` | 读取 record 分量 ` autoRotate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L539) |
| ` public boolean upsideDown() ` | 读取 record 分量 ` upsideDown ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L540) |
| ` public int gridSize() ` | 读取 record 分量 ` gridSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L541) |
| ` public int distance() ` | 读取 record 分量 ` distance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L542) |
| ` public BlueprintExtent extent() ` | 读取 record 分量 ` extent ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L543) |
| ` public BlockState[] states() ` | 读取 record 分量 ` states ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L544) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L534) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L534) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L534) |

## BlockPlacementUtil.BlueprintPartSnapshot

` public record BlueprintPartSnapshot(BlockPos pos, BlockState requiredState, BlockState previousState) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintPartSnapshot(BlockPos pos, BlockState requiredState, BlockState previousState) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |
| ` public BlockState requiredState() ` | 读取 record 分量 ` requiredState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |
| ` public BlockState previousState() ` | 读取 record 分量 ` previousState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L768) |

## BlockPlacementUtil.MultiblockPart

` public record MultiblockPart(BlockPos pos, BlockState state) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiblockPart(BlockPos pos, BlockState state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L765) |

## BlockStateAndEntity

` public record BlockStateAndEntity(BlockState state, BlockEntity be) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockStateAndEntity(BlockState state) ` | 执行 ` this(state, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L7) |
| ` public BlockEntity be() ` | 读取 record 分量 ` be ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L7) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L7) |

## BlockStateUtil

` public class BlockStateUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L46)

方块状态注入

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Map<Block, ItemStack> HARDCODED_SPECIAL_AS_ITEM ` | 硬编码一些通过Block#asItem方法获取不到的物品。。。。 这些物品通常可以通过Block#getCloneItemStack方法获取到，但是需要LevelReader实例 为了让获取物品在没有level上下文的情况下也能运作，此处硬编码部分特殊方块<br>由 ` ImmutableMap.<Block, ItemStack>builder() .put(Blocks.ATTACHED_MELON_STEM, Items.MELON_SEEDS.getDefaultInstance()) .put(Blocks.ATTACHED_PUMPKIN_STEM, Items.PUMPKIN_SEEDS.getDefaultInstance()) .put(Blocks.BAMBOO_SAPLING, Items.BAMBOO.getDefaultInstance()) .put(Blocks.BIG_DRIPLEAF_STEM, Items.BIG_DRIPLEAF.getDefaultInstance()) .put(Blocks.TALL_GRASS, new ItemStack(Items.SHORT_GRASS, 2)) .put(Blocks.LARGE_FERN, new ItemStack(Items.FERN, 2)) .put(Blocks.PISTON_HEAD, ItemStack.EMPTY) .build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L50) |
| ` public static final Set<IntegerProperty> COUNT_PROPERTIES ` | 初值 ` ImmutableSet.of( BlockStateProperties.LAYERS, BlockStateProperties.PICKLES, BlockStateProperties.EGGS, BlockStateProperties.CANDLES, BlockStateProperties.FLOWER_AMOUNT ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L60) |
| ` public static boolean isMultifaceLike(Block block) ` | 判定一个方块是否像苔藓、发光地衣、幽匿脉络一样，可以在一个方块内放置多个面， 每个面消耗一个物品。<br>参数 ` block ` 需要判定的方块<br>返回 该方块是否是“多面类”方块<br>使用约定 注：通过这个方法判定的方块不一定每个面都能放， 本方法只表明放置该方块所需的物品数量是否与 PipeBlock#PROPERTY\_BY\_DIRECTION 中的方块状态有关。<br>末尾返回 ` block instanceof MultifaceBlock \|\| block instanceof VineBlock `<br>[调用处 StructureToolScreen.buildPredicate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureToolScreen.java#L400) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L76) |
| ` public static List<ItemStack> ingredientsForPlacement(BlockState state) ` | 对某个方块状态，获取用于摆放它的物品列表。供多方快合成的JEI显示使用。 不考虑 方块实体。&lt;s&gt;要是考虑的话那我真得累死&lt;/s&gt; 硬编码了原版和本模组的各种各样的特殊情形。<br>参数 ` state ` 要摆放的方块状态<br>返回 用于摆放的物品列表<br>` (baseItem.isEmpty() && additionalItem.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (additionalItem.isEmpty()) ` 成立时提前返回 ` List.of(baseItem) `<br>` (baseItem.isEmpty()) ` 成立时提前返回 ` List.of(additionalItem) `<br>末尾返回 ` List.of(baseItem, additionalItem) `<br>[调用处 BlockPattern.toIngredientList](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/BlockPattern.java#L132) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L107) |
| ` public BlockStateUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L46) |

## BlockStateUtil.BlockHolderLookup

` public static class BlockHolderLookup implements HolderLookup<Block>, HolderOwner<Block> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L160)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Stream<Holder.Reference<Block>> listElements() ` | 末尾返回 ` BuiltInRegistries.BLOCK.stream() .map(BuiltInRegistries.BLOCK::getResourceKey) .filter(Optional::isPresent) .map(key -> BuiltInRegistries.BLOCK.getOrThrow(key.get())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L162) |
| ` @Override public Stream<HolderSet.Named<Block>> listTags() ` | 末尾返回 ` BuiltInRegistries.BLOCK.getTags() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L170) |
| ` @Override public Optional<Holder.Reference<Block>> get(ResourceKey<Block> resourceKey) ` | 末尾返回 ` Optional.of(BuiltInRegistries.BLOCK.getOrThrow(resourceKey)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L175) |
| ` @Override public Optional<HolderSet.Named<Block>> get(TagKey<Block> tagKey) ` | 末尾返回 ` BuiltInRegistries.BLOCK.get(tagKey) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L180) |
| ` public BlockHolderLookup() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L160) |
