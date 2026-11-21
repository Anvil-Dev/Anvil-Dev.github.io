# dev.dubhe.anvilcraft.util（BlockPlacementPicking 至 BreadthFirstTraversalPos）



## BlockPlacementPicking

` public final class BlockPlacementPicking `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean hasFullPlacementShape(BlockState state, CollisionContext context) ` | ` (state.is(ModBlocks.ACCELERATION_RING) \|\| state.is(ModBlocks.DEFLECTION_RING)) ` 成立时提前返回 ` isHoldingPlacementItem(context, ModBlocks.ACCELERATION_RING.asItem()) \|\| isHoldingPlacementItem(context, ModBlocks.DEFLECTION_RING.asItem()) `<br>末尾返回 ` state.is(ModBlocks.LARGE_CAULDRON) && state.getValue(LargeCauldronBlock.HALF).getOffsetY() == 2 && isHoldingPlacementItem(context, ModBlocks.GIANT_ANVIL.asItem()) `<br>[调用处 AccelerationRingBlock.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L215) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L37) |
| ` public static BlockHitResult pickBuildingRodTarget(Player player) ` | 实现调用 ` player.getEyePosition() `<br>实现调用 ` start.add(player.getLookAngle().scale(player.blockInteractionRange())) `<br>实现调用 ` player.getLookAngle().scale(player.blockInteractionRange()) `<br>[调用处 BuildingRodClient.updateTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L203) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L53) |
| ` public static UseOnContext forPlacement(UseOnContext context) ` | ` (!(context instanceof PlayerClick click) \|\| !click.anvilcraft$isPlayerClick()) ` 成立时提前返回 ` context `<br>` (player == null \|\| player instanceof FakePlayer) ` 成立时提前返回 ` context `<br>` (context.getLevel().getBlockState(context.getClickedPos()).canBeReplaced() \|\| !new AABB(context.getClickedPos()).inflate(HIT_EPSILON).contains(context.getClickLocation())) ` 成立时提前返回 ` context `<br>` (!(direction.lengthSqr() <= range * range + HIT_EPSILON)) ` 成立时提前返回 ` context `<br>` (hit.getType() == HitResult.Type.BLOCK && hit.getBlockPos().equals(context.getClickedPos()) && hit.getLocation().distanceToSqr(context.getClickLocation()) <= HIT_EPSILON * HIT_EPSILON) ` 成立时提前返回 ` context `<br>末尾返回 ` new UseOnContext(context.getLevel(), player, context.getHand(), context.getItemInHand(), hit) `<br>[调用处 BuildingRodClient.updateTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L224) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L65) |
| ` @Nullable public static InteractionResultHolder<ItemStack> tryPlaceFromAir(ItemStack stack, Level level, Player player, InteractionHand hand) ` | ` (hit == null) ` 成立时提前返回 ` null `<br>末尾返回 ` new InteractionResultHolder<>(stack.useOn(new UseOnContext(level, player, hand, stack, hit)), stack) `<br>[调用处 ItemStackMixin.placeThroughModelGaps](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L92) |
| ` @Nullable public static BlockHitResult findAirPlacementHit(ItemStack stack, Level level, Player player) ` | ` (player instanceof FakePlayer \|\| player.isSpectator()) ` 成立时提前返回 ` null `<br>` (!(picked instanceof BlockHitResult hit) \|\| !allowed(level, player, stack, hit)) ` 成立时提前返回 ` null `<br>` (ProjectileUtil.getEntityHitResult(player, start, end, player.getBoundingBox().expandTowards(end.subtract(start)).inflate(1), entity -> !entity.isSpectator() && entity.isPickable(), start.distanceToSqr(end)) != null) ` 成立时提前返回 ` null `<br>末尾返回 ` hit `<br>[调用处 LargeBlockPlacePreviewEventListener.updatePreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L225) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L99) |

## BlockPlacementPicking.PlacementRejection

` public interface PlacementRejection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L119)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isPlacementRejected() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L120) |

## BlockPlacementPicking.PlayerClick

` public interface PlayerClick `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L134)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isPlayerClick() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L135) |
| ` boolean anvilcraft$hasBlockHit() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementPicking.java#L137) |

## BlockPlacementUtil

` public final class BlockPlacementUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L63)

方块物品和蓝图状态的放置工具。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final List<IntegerProperty> COUNT_PROPERTIES ` | 状态值即放置数量的整数属性（雪层、海泡菜、蛋、蜡烛、花朵数量）。<br>初值 ` List.of( BlockStateProperties.LAYERS, BlockStateProperties.PICKLES, BlockStateProperties.EGGS, BlockStateProperties.CANDLES, BlockStateProperties.FLOWER_AMOUNT ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L70) |
| ` public static boolean isMultifaceLike(Block block) ` | 末尾返回 ` block instanceof MultifaceBlock \|\| block instanceof VineBlock `<br>[调用处 SimpleBlockPlacementRule.isStateDependent](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L78) |
| ` public static ItemStack placeBlock( ServerLevel level, BlockPos pos, ItemStack stack, @Nullable BlockState requiredState ) ` | 末尾返回 ` placeBlock(level, pos, stack, requiredState, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L82) |
| ` public static ItemStack placeBlock( ServerLevel level, BlockPos pos, ItemStack stack, @Nullable BlockState requiredState, @Nullable Direction defaultFacing ) ` | ` (blockItem == null) ` 成立时提前返回 ` stack `<br>[调用处 BlockItemHandlerPointer.placeToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L131) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L91) |
| ` public static boolean isTargetAvailable(Level level, BlockPos targetPos) ` | 末尾返回 ` level.getBlockState(targetPos).canBeReplaced() && isTargetUnobstructed(level, targetPos) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L154) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L208) |
| ` public static boolean isTargetUnobstructed(Level level, BlockPos targetPos) ` | 末尾返回 ` level.isUnobstructed(null, Shapes.create(new AABB(targetPos))) `<br>[调用处 SmartBlockPlacerBlockEntity.findNextBlueprintTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L644) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L212) |
| ` public static boolean areTargetsAvailable(Level level, List<BlueprintPartSnapshot> snapshots) ` | 末尾返回 ` !snapshots.isEmpty() && snapshots.stream().allMatch(snapshot -> isTargetAvailable(level, snapshot.pos())) `<br>[调用处 SmartBlockPlacerBlockEntity.applyToBlueprintPosition](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L584) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L216) |
| ` public static boolean applyBlueprintStates(ServerLevel level, List<BlueprintPartSnapshot> snapshots) ` | 末尾返回 ` true `<br>[调用处 SmartBlockPlacerBlockEntity.applyToBlueprintPosition](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L590) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L221) |
| ` public static boolean isBlueprintStatePresent(Level level, BlockPos pos, BlockState requiredState) ` | ` (!worldState.is(requiredState.getBlock()) \|\| worldState.getBlock() instanceof LensBlock && worldState.getValue(LensBlock.TYPE) != requiredState.getValue(LensBlock.TYPE)) ` 成立时提前返回 ` false `<br>末尾返回 ` contextualState.is(worldState.getBlock()) && contextualState.canSurvive(level, pos) `<br>[调用处 SmartBlockPlacerBlockEntity.hasBlueprintMaterials](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L306) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L290) |
| ` public static boolean isMultiblockBlock(BlockState state) ` | 末尾返回 ` isMultiblockBlock(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L301) |
| ` public static boolean isMultiblockBlock(Block block) ` | ` (multiblock) ` 成立时提前返回 ` true `<br>末尾返回 ` block instanceof BedBlock \|\| block instanceof DoorBlock \|\| block instanceof DoublePlantBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L305) |
| ` public static boolean isSecondaryBlueprintPart(BlockState state) ` | 末尾返回 ` isSecondaryMultiblockPart(state) \|\| state.getBlock() instanceof LargeCakeBlock && state.getValue(LargeCakeBlock.HALF) != Cube3x3PartHalf.BOTTOM_CENTER `<br>[调用处 SmartBlockPlacerBlockEntity.hasBlueprintMaterials](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L305) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L318) |
| ` public static boolean isSecondaryMultiblockPart(BlockState state) ` | ` (block instanceof BedBlock) ` 成立时提前返回 ` state.hasProperty(BED_PART) && state.getValue(BED_PART) == BedPart.HEAD `<br>` (block instanceof DoorBlock \|\| block instanceof DoublePlantBlock) ` 成立时提前返回 ` state.hasProperty(DOUBLE_BLOCK_HALF) && state.getValue(DOUBLE_BLOCK_HALF) == DoubleBlockHalf.UPPER `<br>末尾返回 ` block instanceof AbstractMultiPartBlock<?> multiPartBlock && !multiPartBlock.isMainPart(state) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L172) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L323) |
| ` public static List<MultiblockPart> getExpectedMultiblockParts(BlockPos pos, BlockState state) ` | ` (block instanceof AbstractMultiPartBlock<?> multiPartBlock) ` 成立时提前返回 ` getExpectedCustomMultiblockParts(pos, state, multiPartBlock) `<br>末尾返回 ` List.of(new MultiblockPart(pos, state)) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L335) |
| ` public static List<MultiblockPart> getPresentMultiblockParts(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` List.copyOf(presentParts) `<br>[调用处 BlockPointer.moveToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L386) |

## BlockPlacementUtil.BlueprintExtent

` public record BlueprintExtent(int minRow, int maxRow, int minColumn, int maxColumn, int maxLayer) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476)

蓝图在存储网格中占用的范围，用于把放置范围收缩到蓝图实际大小。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlueprintExtent of(BlockState[] states, int gridSize) ` | 扫描存储网格得到蓝图占用的行列与最高层；全为空气时退化为网格中心的一格。<br>末尾返回 ` new BlueprintExtent(minRow, maxRow, minColumn, maxColumn, maxLayer) `<br>[调用处 SmartBlockPlacerBlockEntity.loadBlueprintExtent](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L1181) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L480) |
| ` public static BlueprintExtent fromSize( int width, int depth, int height, int columnOffset, int rowOffset, int layerOffset ) ` | 按蓝图自带的大小信息与居中偏移构造占用范围，无需扫描方块。<br>末尾返回 ` new BlueprintExtent( rowOffset, rowOffset + depth - 1, columnOffset, columnOffset + width - 1, layerOffset + height - 1 ) `<br>[调用处 SmartBlockPlacerBlockEntity.StructureBlueprint.empty](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L902) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L510) |
| ` public BlueprintExtent clamp(int gridSize) ` | 把占用范围裁剪到存储网格内；越界的部分会被丢弃，故裁剪后可能只占部分格。<br>末尾返回 ` new BlueprintExtent(minRow, maxRow, minColumn, maxColumn, maxLayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L530) |
| ` public int width() ` | 末尾返回 ` this.maxColumn - this.minColumn + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L539) |
| ` public int depth() ` | 末尾返回 ` this.maxRow - this.minRow + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L543) |
| ` public int height() ` | 末尾返回 ` this.maxLayer + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L547) |
| ` public BlueprintExtent(int minRow, int maxRow, int minColumn, int maxColumn, int maxLayer) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public int minRow() ` | 读取 record 分量 ` minRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public int maxRow() ` | 读取 record 分量 ` maxRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public int minColumn() ` | 读取 record 分量 ` minColumn ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public int maxColumn() ` | 读取 record 分量 ` maxColumn ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public int maxLayer() ` | 读取 record 分量 ` maxLayer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L476) |

## BlockPlacementUtil.BlueprintLayout

` public record BlueprintLayout(LevelAccessor level, BlockPos placerPos, Direction targetFacing, Direction scannerFacing, boolean autoRotate, boolean upsideDown, int gridSize, int distance, BlueprintExtent extent, BlockState[] states) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L552)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int getStorageIndexForOrder(int orderIndex) ` | 顺序索引按 层（下→上）→ 行（远→近）→ 列（左→右）排列，与普通点位模式的放置顺序保持一致。 放置范围收缩到蓝图实际大小，且蓝图未自动旋转时网格轴向与放置方向存在夹角， 因此需按蓝图尺寸把顺序中的物理行列换算回网格行列。<br>末尾返回 ` layer * this.gridSize * this.gridSize + row * this.gridSize + column ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L569) |
| ` public int orderCount() ` | 放置顺序索引的总数，即蓝图占用的格数。<br>末尾返回 ` this.extent.width() * this.extent.depth() * this.extent.height() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L602) |
| ` public AABB getRangeBounds() ` | 放置范围的世界包围盒，即蓝图占用格在放置方向、左右方向与垂直方向上的跨度。<br>末尾返回 ` this.getRangeBounds(this.targetFacing, this.upsideDown) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L609) |
| ` public AABB getRangeBounds(Direction targetFacing, boolean upsideDown) ` | 指定放置方向与倒挂状态下的放置范围包围盒。<br>末尾返回 ` new AABB(minX, minY, minZ, maxX, maxY, maxZ) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.getRangeBounds](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L610) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L616) |
| ` public BlockPos getPosition(int storageIndex) ` | 末尾返回 ` this.getPosition(storageIndex, this.targetFacing, this.upsideDown) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.getState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L752) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L654) |
| ` public BlockPos getPosition(int storageIndex, Direction targetFacing, boolean upsideDown) ` | 末尾返回 ` this.placerPos.relative(targetFacing, forwardOffset) .relative(targetFacing.getClockWise(), lateralOffset) .above(verticalOffset) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.getRangeBounds](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L627) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L658) |
| ` public BlockState getState(int storageIndex) ` | ` (storageIndex < 0 \|\| storageIndex >= this.states.length) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>末尾返回 ` transformBlueprintState( this.states[storageIndex], this.level, this.getPosition(storageIndex), this.getLayoutFacing(this.targetFacing), this.scannerFacing, this.upsideDown ) `<br>[调用处 BlockPlacementUtil.BlueprintLayout.capturePartSnapshots](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L791) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L745) |
| ` public BlockState getState(int storageIndex, Direction targetFacing, boolean upsideDown) ` | ` (storageIndex < 0 \|\| storageIndex >= this.states.length) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L759) |
| ` public List<BlueprintPartSnapshot> capturePartSnapshots( Level level, BlockPos targetPos, BlockState requiredState ) ` | 末尾返回 ` List.copyOf(snapshots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L773) |
| ` public BlueprintLayout(LevelAccessor level, BlockPos placerPos, Direction targetFacing, Direction scannerFacing, boolean autoRotate, boolean upsideDown, int gridSize, int distance, BlueprintExtent extent, BlockState[] states) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L552) |
| ` public LevelAccessor level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L553) |
| ` public BlockPos placerPos() ` | 读取 record 分量 ` placerPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L554) |
| ` public Direction targetFacing() ` | 读取 record 分量 ` targetFacing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L555) |
| ` public Direction scannerFacing() ` | 读取 record 分量 ` scannerFacing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L556) |
| ` public boolean autoRotate() ` | 读取 record 分量 ` autoRotate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L557) |
| ` public boolean upsideDown() ` | 读取 record 分量 ` upsideDown ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L558) |
| ` public int gridSize() ` | 读取 record 分量 ` gridSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L559) |
| ` public int distance() ` | 读取 record 分量 ` distance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L560) |
| ` public BlueprintExtent extent() ` | 读取 record 分量 ` extent ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L561) |
| ` public BlockState[] states() ` | 读取 record 分量 ` states ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L562) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L552) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L552) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L552) |

## BlockPlacementUtil.BlueprintPartSnapshot

` public record BlueprintPartSnapshot(BlockPos pos, BlockState requiredState, BlockState previousState) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintPartSnapshot(BlockPos pos, BlockState requiredState, BlockState previousState) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |
| ` public BlockState requiredState() ` | 读取 record 分量 ` requiredState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |
| ` public BlockState previousState() ` | 读取 record 分量 ` previousState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L817) |

## BlockPlacementUtil.MultiblockPart

` public record MultiblockPart(BlockPos pos, BlockState state) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiblockPart(BlockPos pos, BlockState state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockPlacementUtil.java#L814) |

## BlockStateAndEntity

` public record BlockStateAndEntity(BlockState state, BlockEntity be) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockStateAndEntity(BlockState state) ` | 执行 ` this(state, null) `<br>[调用处 LevelLike.setBlockStateWithAlpha](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L188) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L9) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8) |
| ` public BlockEntity be() ` | 读取 record 分量 ` be ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateAndEntity.java#L8) |

## BlockStateUtil

` public class BlockStateUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L19)

方块状态注入

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockStateUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L19) |

## BlockStateUtil.BlockHolderLookup

` public static class BlockHolderLookup implements HolderLookup<Block>, HolderOwner<Block> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Stream<Holder.Reference<Block>> listElements() ` | 末尾返回 ` BuiltInRegistries.BLOCK.stream() .map(BuiltInRegistries.BLOCK::getResourceKey) .filter(Optional::isPresent) .map(key -> BuiltInRegistries.BLOCK.getHolderOrThrow(key.get())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L21) |
| ` @Override public Stream<HolderSet.Named<Block>> listTags() ` | 末尾返回 ` BuiltInRegistries.BLOCK.getTags().map(Pair::getSecond) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L29) |
| ` @Override public Optional<Holder.Reference<Block>> get(ResourceKey<Block> resourceKey) ` | 末尾返回 ` Optional.of(BuiltInRegistries.BLOCK.getHolderOrThrow(resourceKey)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L34) |
| ` @Override public Optional<HolderSet.Named<Block>> get(TagKey<Block> tagKey) ` | 末尾返回 ` BuiltInRegistries.BLOCK.getTag(tagKey) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L39) |
| ` public BlockHolderLookup() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BlockStateUtil.java#L20) |

## BreadthFirstTraversalPos

` public enum BreadthFirstTraversalPos `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TOP_CENTER ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L6) |
| ` TOP_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L7) |
| ` TOP_NORTH ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L8) |
| ` TOP_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L9) |
| ` TOP_SOUTH ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L10) |
| ` TOP_NORTH_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L11) |
| ` TOP_NORTH_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L12) |
| ` TOP_SOUTH_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L13) |
| ` TOP_SOUTH_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L14) |
| ` NORTH ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L15) |
| ` SOUTH ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L16) |
| ` EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L17) |
| ` WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L18) |
| ` NORTH_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L19) |
| ` NORTH_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L20) |
| ` SOUTH_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L21) |
| ` SOUTH_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L22) |
| ` BOTTOM_CENTER ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L23) |
| ` BOTTOM_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L24) |
| ` BOTTOM_NORTH ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L25) |
| ` BOTTOM_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L26) |
| ` BOTTOM_SOUTH ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L27) |
| ` BOTTOM_NORTH_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L28) |
| ` BOTTOM_NORTH_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L29) |
| ` BOTTOM_SOUTH_WEST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L30) |
| ` BOTTOM_SOUTH_EAST ` | 声明于枚举 ` BreadthFirstTraversalPos ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L31) |
| ` public Vec3i getOffset() ` | 末尾返回 ` new Vec3i(this.offsetX, this.offsetY, this.offsetZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L42) |
| ` public static BreadthFirstTraversalPos[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L5) |
| ` public static BreadthFirstTraversalPos valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/BreadthFirstTraversalPos.java#L5) |
