# dev.dubhe.anvilcraft.block（TeslaTowerBlock 至 WipBlock）



## TeslaTowerBlock

` public class TeslaTowerBlock extends SimpleMultiPartBlock<Vertical4PartHalf> implements IHammerRemovable, IHasMultiBlock, MultiPartBlockEntity<Vertical4PartHalf, TeslaTowerBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Vertical4PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Vertical4PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L47) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L48) |
| ` public static final EnumProperty<IPowerComponent.Switch> SWITCH ` | 初值 ` IPowerComponent.SWITCH ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L49) |
| ` public static final VoxelShape BOTTOM_SHAPE ` | 初值 ` Shapes.join(Block.box(0, 0, 0, 16, 4, 16), Block.box(1, 4, 1, 15, 16, 15), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L50) |
| ` public static final VoxelShape LOWER_SHAPE ` | 初值 ` Shapes.join(Block.box(5, 8, 5, 11, 16, 11), Block.box(1, 0, 1, 15, 8, 15), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L51) |
| ` public static final VoxelShape UPPER_SHAPE ` | 初值 ` Shapes.join(Block.box(6, 8, 6, 10, 16, 10), Block.box(4, 0, 4, 12, 8, 12), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L52) |
| ` public static final VoxelShape TOP_SHAPE ` | 初值 ` Shapes.join(Block.box(3, 6, 3, 13, 16, 13), Block.box(6, 0, 6, 10, 8, 10), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L53) |
| ` public TeslaTowerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Vertical4PartHalf.BOTTOM) .setValue(OVERLOAD, true) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Vertical4PartHalf.BOTTOM) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L55) |
| ` @Override public Property<Vertical4PartHalf> getPart() ` | 末尾返回 ` TeslaTowerBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L64) |
| ` @Override public Vertical4PartHalf[] getParts() ` | 末尾返回 ` Vertical4PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L69) |
| ` @Override @Nullable public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` this.defaultBlockState() .setValue(HALF, Vertical4PartHalf.BOTTOM) .setValue(OVERLOAD, true) .setValue(SWITCH, sw) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L74) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L92) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 末尾返回 ` switch (state.getValue(HALF)) { case BOTTOM -> BOTTOM_SHAPE; case MID_LOWER -> LOWER_SHAPE; case MID_UPPER -> UPPER_SHAPE; case TOP -> TOP_SHAPE; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L97) |
| ` @Override public BlockState placedState(Vertical4PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state).setValue(SWITCH, IPowerComponent.Switch.ON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L112) |
| ` @Override public BlockState playerWillDestroy( Level level, BlockPos pos, BlockState state, Player player) ` | ` (level.isClientSide) ` 成立时提前返回 ` state `<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L117) |
| ` @Override public TeslaTowerBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L126) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.TESLA_TOWER.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L131) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof TeslaTowerBlockEntity entity1) entity1.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L136) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston) ` | 实现调用 ` state.getValue(HALF) `<br>实现调用 ` pos.above(3) `<br>实现调用 ` level.getBlockState(topPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L146) |
| ` @Override public void onRemove(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。<br>[调用处 TeslaTowerBlock.playerWillDestroy](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L177) |
| ` @Override public void onPlace(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L181) |

## TradingStationBlock

` public class TradingStationBlock extends WaterloggedFlexibleMultiPartBlock<DirectionVertical2PartHalf, DirectionProperty, Direction> implements MultiPartBlockEntity<DirectionVertical2PartHalf, TradingStationBlock>, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L49) |
| ` public static final EnumProperty<DirectionVertical2PartHalf> HALF ` | 初值 ` EnumProperty.create("half", DirectionVertical2PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L50) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L51) |
| ` public TradingStationBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.defaultBlockState() .setValue(HALF, DirectionVertical2PartHalf.BOTTOM) .setValue(FACING, Direction.NORTH) `<br>实现调用 ` this.defaultBlockState() .setValue(HALF, DirectionVertical2PartHalf.BOTTOM) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L53) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.waterloggedStateForPlacement(context, this.defaultBlockState().setValue(FACING, dir)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L63) |
| ` @Override public Property<DirectionVertical2PartHalf> getPart() ` | 末尾返回 ` TradingStationBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L70) |
| ` @Override public DirectionVertical2PartHalf[] getParts() ` | 末尾返回 ` DirectionVertical2PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L75) |
| ` @Override public DirectionProperty getAdditionalProperty() ` | 末尾返回 ` TradingStationBlock.FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L80) |
| ` @Override public TradingStationBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L85) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.TRADING_STATION.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L90) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L105) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L110) |
| ` @Override public boolean onDestroyedByPlayer(BlockState state, Level level, BlockPos pos, Player player, boolean willHarvest, FluidState fluid) ` | 末尾返回 ` super.onDestroyedByPlayer(state, level, pos, player, willHarvest, fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L150) |
| ` public Collection<BlockState> getBottomStates() ` | 实现调用 ` this.defaultBlockState() .setValue(HALF, DirectionVertical2PartHalf.BOTTOM) .setValue(FACING, Direction.NORTH) `<br>实现调用 ` this.defaultBlockState() .setValue(HALF, DirectionVertical2PartHalf.BOTTOM) `<br>实现调用 ` this.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L171) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | ` (state.getValue(HALF) == DirectionVertical2PartHalf.TOP) ` 成立时提前返回 ` Shapes.empty() `<br>末尾返回 ` switch (state.getValue(FACING)) { case NORTH -> NORTH; case WEST -> WEST; case SOUTH -> SOUTH; case EAST -> EAST; case UP, DOWN -> Shapes.empty(); } `<br>[调用处 TradingStationBlock.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L196) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L199) |

## TranscendenceAnvilBlock

` public class TranscendenceAnvilBlock extends BetterAnvilBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendenceAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L47) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` X_AXIS_AABB `<br>末尾返回 ` Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L51) |
| ` @SuppressWarnings("UnreachableCode") @Override public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L58) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new TranscendenceAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L67) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities((float) AnvilCraft.CONFIG.world.transcendenceAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L75) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L33) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceAnvilBlock.java#L33) |

## TranscendenceGrindstoneBlock

` public class TranscendenceGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendenceGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L26) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L30) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (id, inventory, player) -> new TranscendenceGrindstoneMenu( id, inventory, ContainerLevelAccess.create(level, pos) ), CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L45) |

## TranscendenceSmithingTableBlock

` public class TranscendenceSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L16)

可以执行全部锻造操作的超限锻造台。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendenceSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L21) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (id, inventory, player) -> new TranscendenceSmithingMenu( id, inventory, ContainerLevelAccess.create(level, pos) ), CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L25) |

## TranscendiumBlock

` public class TranscendiumBlock extends Block implements ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendiumBlock.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendiumBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendiumBlock.java#L10) |
| ` @Override public float getEnchantPowerBonus(BlockState state, LevelReader level, BlockPos pos) ` | 末尾返回 ` 10.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TranscendiumBlock.java#L14) |

## TransmissionPoleBlock

` public class TransmissionPoleBlock extends SimpleMultiPartBlock<Vertical3PartHalf> implements IHammerRemovable, IHasMultiBlock, EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Vertical3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Vertical3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L31) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L32) |
| ` public static final EnumProperty<IPowerComponent.Switch> SWITCH ` | 初值 ` IPowerComponent.SWITCH ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L33) |
| ` public static final VoxelShape TRANSMISSION_POLE_TOP ` | 初值 ` Shapes.or(Block.box(3, 5, 3, 13, 16, 13), Block.box(6, 0, 6, 10, 5, 10)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L34) |
| ` public static final VoxelShape TRANSMISSION_POLE_MID ` | 初值 ` Block.box(6, 0, 6, 10, 16, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L37) |
| ` public static final VoxelShape TRANSMISSION_POLE_BASE ` | 初值 ` Shapes.or(Block.box(3, 4, 3, 13, 10, 13), Block.box(0, 0, 0, 16, 4, 16), Block.box(6, 10, 6, 10, 16, 10)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L39) |
| ` public TransmissionPoleBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Vertical3PartHalf.BOTTOM) .setValue(OVERLOAD, true) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Vertical3PartHalf.BOTTOM) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L42) |
| ` @Override public Property<Vertical3PartHalf> getPart() ` | 末尾返回 ` TransmissionPoleBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L51) |
| ` @Override public Vertical3PartHalf[] getParts() ` | 末尾返回 ` Vertical3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L56) |
| ` @Override @Nullable public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` this.defaultBlockState() .setValue(HALF, Vertical3PartHalf.BOTTOM) .setValue(OVERLOAD, true) .setValue(SWITCH, sw) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L61) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L79) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | ` (state.getValue(HALF) == Vertical3PartHalf.BOTTOM) ` 成立时提前返回 ` TRANSMISSION_POLE_BASE `<br>` (state.getValue(HALF) == Vertical3PartHalf.MID) ` 成立时提前返回 ` TRANSMISSION_POLE_MID `<br>` (state.getValue(HALF) == Vertical3PartHalf.TOP) ` 成立时提前返回 ` TRANSMISSION_POLE_TOP `<br>末尾返回 ` super.getPartShape(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L84) |
| ` @Override public BlockState placedState(Vertical3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state).setValue(SWITCH, IPowerComponent.Switch.ON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L97) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new TransmissionPoleBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L102) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof TransmissionPoleBlockEntity be) be.tick(level1, pos); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L108) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 执行 ` update(state, level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L118) |
| ` @Override public void onPlace(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L156) |
| ` @Override public void onRemove(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransmissionPoleBlock.java#L160) |

## TransparentCraftingTableBlock

` public class TransparentCraftingTableBlock extends TransparentBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Type> TYPE ` | 初值 ` EnumProperty.create("type", Type.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L34) |
| ` public TransparentCraftingTableBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(stateDefinition.any().setValue(TYPE, Type.SINGLE)) `<br>实现调用 ` stateDefinition.any().setValue(TYPE, Type.SINGLE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L36) |
| ` public boolean isValidMatrixBlock(BlockState block, Boolean isSelfOnly) ` | 判断是否是通透工作台或其它允许参与形成矩阵的方块（目前仅包含空间超压器）。<br>参数 ` block ` 需要进行判断的方块<br>参数 ` isSelfOnly ` 是否只匹配通透工作台<br>返回 判断结果<br>末尾返回 ` block.is(this) \|\| (!isSelfOnly && block.is(ModBlockTags.CRAFTING_MATRIX_ELEMENT)) `<br>[调用处 TransparentCraftingTableBlock.updateShape](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L119) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L237) |

## TransparentCraftingTableBlock.Type

` public enum Type implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L241)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SINGLE ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L242) |
| ` CENTER ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L243) |
| ` SIDE_NORTH ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L244) |
| ` SIDE_EAST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L245) |
| ` SIDE_SOUTH ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L246) |
| ` SIDE_WEST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L247) |
| ` CORNER_NORTH_WEST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L248) |
| ` CORNER_NORTH_EAST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L249) |
| ` CORNER_SOUTH_WEST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L250) |
| ` CORNER_SOUTH_EAST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L251) |
| ` public static final Type[][] LOOKUP ` | 初值 ` { { CORNER_NORTH_WEST, SIDE_WEST, CORNER_SOUTH_WEST }, { SIDE_NORTH, CENTER, SIDE_SOUTH }, { CORNER_NORTH_EAST, SIDE_EAST, CORNER_SOUTH_EAST } } ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L253) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>[调用处 TransparentCraftingTableBlock.Type.toString](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L284) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L277) |
| ` @Override public String toString() ` | 末尾返回 ` this.getSerializedName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L282) |
| ` public static Type[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L241) |
| ` public static Type valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TransparentCraftingTableBlock.java#L241) |

## UnpackingTableBlock

` public class UnpackingTableBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/UnpackingTableBlock.java#L12)

拆包台：在台面上放置原料，铁砧砸落时执行拆包配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UnpackingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/UnpackingTableBlock.java#L13) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.UNPACKING_TABLE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/UnpackingTableBlock.java#L17) |

## UseItemOnBlock

` public final class UseItemOnBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L25)

方块交互改装所需的材料与加工台系列方块之间的转化逻辑。 上表面用于放入/取出物品；其余面使用转化道具会把冲压平台改装为对应加工台并消耗道具， 手持铁砧锤右键侧面会把三种加工台还原为冲压平台。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemInteractionResult tryConvert( Level level, Player player, InteractionHand hand, BlockState state, BlockPos pos, BlockHitResult hitResult ) ` | 非上表面右击时处理转化。<br>返回 是否处理了这次交互<br>` (hitResult.getDirection() == Direction.UP) ` 成立时提前返回 ` ItemInteractionResult.PASS_TO_DEFAULT_BLOCK_INTERACTION `<br>` (stack.getItem() instanceof AnvilHammerItem) ` 成立时提前返回 ` tryHammerConvert(level, player, state, pos) `<br>末尾返回 ` tryItemConvert(level, player, stack, state, pos) `<br>[调用处 ProcessingTableBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L125) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L34) |
| ` public static ItemStack materialFor(BlockState state) ` | ` (state.getBlock() instanceof LensBlock) ` 成立时提前返回 ` LensBlock.getGlassItem(state.getValue(LensBlock.TYPE)) `<br>` (state.is(ModBlocks.CRUSHING_TABLE.get())) ` 成立时提前返回 ` new ItemStack(Items.GRINDSTONE) `<br>` (state.is(ModBlocks.SIFTING_TABLE.get())) ` 成立时提前返回 ` new ItemStack(Blocks.SCAFFOLDING.asItem()) `<br>` (state.is(ModBlocks.UNPACKING_TABLE.get())) ` 成立时提前返回 ` new ItemStack(Items.IRON_TRAPDOOR) `<br>末尾返回 ` ItemStack.EMPTY `<br>[调用处 SmartBlockPlacerBlockEntity.createMissingBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L713) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L102) |

## VoidEnergyCollectorBlock

` public class VoidEnergyCollectorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static VoxelShape SHAPE ` | 初值 ` Shapes.or( Block.box(0, 0, 0, 16, 4, 16) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L34) |
| ` public static BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L37) |
| ` public VoidEnergyCollectorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L39) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new VoidEnergyCollectorBlockEntity(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L48) |
| ` public void activate(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` level.setBlockAndUpdate(pos, state.setValue(POWERED, true)) `<br>实现调用 ` state.setValue(POWERED, true) `<br>实现调用 ` this.updateNeighbours(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L59) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` super.getStateForPlacement(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L93) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` createTickerHelper( type, ModBlockEntities.VOID_ENERGY_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick() ) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L103) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L117) |
| ` public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 末尾返回 ` SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidEnergyCollectorBlock.java#L122) |

## VoidMatterBlock

` public class VoidMatterBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidMatterBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VoidMatterBlock(Properties properties) ` | 执行 ` super(properties.randomTicks()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidMatterBlock.java#L16) |
| ` public static BlockState voidDecay(Level level, BlockPos pos, BlockState state, RandomSource random) ` | 实现调用 ` level.registryAccess().registryOrThrow(Registries.BLOCK) .getTag(ModBlockTags.VOID_DECAY_PRODUCTS) `<br>实现调用 ` level.registryAccess().registryOrThrow(Registries.BLOCK) `<br>实现调用 ` level.registryAccess() `<br>[调用处 ExcitedStateVoidMatterBlock.triggerDecayChain](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExcitedStateVoidMatterBlock.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/VoidMatterBlock.java#L20) |

## WhiteHoleBlock

` public class WhiteHoleBlock extends Block implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape MODEL ` | 初值 ` Block.box(4, 4, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L16) |
| ` @Override public VoxelShape getShape(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L18) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 执行 ` super.onPlace(state, level, pos, oldState, movedByPiston) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L23) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L28) |
| ` public WhiteHoleBlock(Properties properties) ` | 执行 ` super(properties.forceSolidOn()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L39) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new WhiteHoleBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WhiteHoleBlock.java#L43) |

## WipBlock

` public class WipBlock extends BaseEntityBlock implements IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WipBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L24) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` WipBlockEntity.createInstance(ModBlockEntities.WIP_BLOCK.get(), blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L33) |
| ` @Override public List<ItemStack> getDrops(BlockState state, LootParams.Builder params) ` | ` (!(be instanceof WipBlockEntity wipBe)) ` 成立时提前返回 ` super.getDrops(state, params) `<br>` (initialBlockState == null \|\| initialBlockState.isAir()) ` 成立时提前返回 ` super.getDrops(state, params) `<br>末尾返回 ` initialBlockState.getDrops(params) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L39) |
| ` public static @Nullable BlockState getInheritedBlock(BlockGetter level, BlockPos pos) ` | ` (!(level.getBlockEntity(pos) instanceof WipBlockEntity wip)) ` 成立时提前返回 ` null `<br>` (initialBlock.isAir() \|\| initialBlock.getBlock() instanceof WipBlock) ` 成立时提前返回 ` null `<br>末尾返回 ` initialBlock `<br>[调用处 WipBlock.canHarvestBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L54) |
| ` @Override public boolean canHarvestBlock(BlockState state, BlockGetter level, BlockPos pos, Player player) ` | ` (initialBlock == null) ` 成立时提前返回 ` super.canHarvestBlock(state, level, pos, player) `<br>末尾返回 ` initialBlock.getBlock().canHarvestBlock(initialBlock, level, pos, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L61) |
