# dev.dubhe.anvilcraft.block（NeutronIrradiatorBlock 至 PowerConverterSmallBlock）



## NeutronIrradiatorBlock

` public class NeutronIrradiatorBlock extends Block implements IHammerRemovable, EntityBlock, INegativeMatterBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<IrradiatorType> TYPE ` | 初值 ` EnumProperty.create("type", IrradiatorType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L32) |
| ` public static final VoxelShape MODEL ` | 由 ` ShapeUtil.merge ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L33) |
| ` @Override public VoxelShape getShape(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L42) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 执行 ` super.onPlace(state, level, pos, oldState, movedByPiston) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L47) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L57) |
| ` public NeutronIrradiatorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(TYPE, IrradiatorType.NEUTRON)) `<br>实现调用 ` this.stateDefinition.any().setValue(TYPE, IrradiatorType.NEUTRON) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L68) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new NeutronIrradiatorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L73) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` createTickerHelper(type, ModBlockEntities.NEUTRON_IRRADIATOR.get(), (level1, pos, state1, entity) -> entity.tick(level1, pos, state1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L79) |
| ` @Override public void animateTick(BlockState state, Level level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(TYPE) `<br>实现调用 ` random.nextInt(8) `<br>实现调用 ` level.getBlockState(pos.offset(i, 0, j)).getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeutronIrradiatorBlock.java#L86) |

## ObsidianCauldron

` public class ObsidianCauldron extends BetterAbstractCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ObsidianCauldron.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ObsidianCauldron(Properties properties) ` | 执行 ` super(properties, CauldronInteraction.EMPTY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ObsidianCauldron.java#L13) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ObsidianCauldron.java#L27) |
| ` @Override public int getAnalogOutputSignal(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` 3 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ObsidianCauldron.java#L32) |

## OilCauldronBlock

` public class OilCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable, IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OilCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.OIL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L26) |
| ` public static void ignite(LevelAccessor level, BlockPos pos, BlockState beforeConvert) ` | 执行 ` level.setBlock(pos, ModBlocks.FIRE_CAULDRON.get().copyLevelFrom(beforeConvert), 3) `<br>[调用处 ModInteractionMap.initInteractionMap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L30) |
| ` @Override public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) ` | 实现调用 ` this.isEntityInsideContent(state, pos, entity) `<br>实现调用 ` entity.getType().equals(EntityType.ARROW) `<br>实现调用 ` entity.getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L34) |
| ` @Override public ItemInteractionResult useItemOn( ItemStack stack, BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (interaction == null) ` 成立时提前返回 ` ItemInteractionResult.PASS_TO_DEFAULT_BLOCK_INTERACTION `<br>末尾返回 ` interaction.interact(state, level, pos, player, hand, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L53) |
| ` @Override public void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 实现调用 ` ModBlocks.FIRE_CAULDRON.getDefaultState() `<br>实现调用 ` cache.getBlockState(pos).getValue(OilCauldronBlock.LEVEL) `<br>实现调用 ` cache.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L70) |
| ` @Override public Fluid getFluid(BlockCache cache, BlockPos pos) ` | 末尾返回 ` ModFluids.OIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OilCauldronBlock.java#L80) |

## OverflowChuteBlock

` public class OverflowChuteBlock extends BetterBaseEntityBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L52)

溢流溜槽：在磁性溜槽的基础上，允许在除出入口以外的方向开口作为溢流口。 出口可输出时物品走出口，出口堵住时改从溢流口抛出（不带动量）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L53) |
| ` public static final BooleanProperty ENABLED ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L54) |
| ` public static final BooleanProperty OVERFLOW_DOWN ` | 初值 ` BooleanProperty.create("overflow_down") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L56) |
| ` public static final BooleanProperty OVERFLOW_UP ` | 初值 ` BooleanProperty.create("overflow_up") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L57) |
| ` public static final BooleanProperty OVERFLOW_NORTH ` | 初值 ` BooleanProperty.create("overflow_north") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L58) |
| ` public static final BooleanProperty OVERFLOW_SOUTH ` | 初值 ` BooleanProperty.create("overflow_south") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L59) |
| ` public static final BooleanProperty OVERFLOW_WEST ` | 初值 ` BooleanProperty.create("overflow_west") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L60) |
| ` public static final BooleanProperty OVERFLOW_EAST ` | 初值 ` BooleanProperty.create("overflow_east") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L61) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Shapes.join( Block.box(3, 8, 3, 13, 16, 13), Block.box(2, 0, 2, 14, 8, 14), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L63) |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Shapes.join( Block.box(3, 0, 3, 13, 8, 13), Block.box(2, 8, 2, 14, 16, 14), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L68) |
| ` public static final VoxelShape SHAPE_W ` | 初值 ` Shapes.join( Block.box(0, 3, 3, 8, 13, 13), Block.box(8, 2, 2, 16, 14, 14), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L73) |
| ` public static final VoxelShape SHAPE_E ` | 初值 ` Shapes.join( Block.box(8, 3, 3, 16, 13, 13), Block.box(0, 2, 2, 8, 14, 14), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L78) |
| ` public static final VoxelShape SHAPE_S ` | 初值 ` Shapes.join( Block.box(3, 3, 8, 13, 13, 16), Block.box(2, 2, 0, 14, 14, 8), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L83) |
| ` public static final VoxelShape SHAPE_N ` | 初值 ` Shapes.join( Block.box(3, 3, 0, 13, 13, 8), Block.box(2, 2, 8, 14, 14, 16), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L88) |
| ` public OverflowChuteBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.DOWN) .setValue(ENABLED, true) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.DOWN) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L94) |
| ` public static BooleanProperty overflowProperty(Direction direction) ` | 取得某个方向对应的溢流口方块状态。<br>参数 ` direction ` 方向<br>返回 该方向的溢流口属性<br>[调用处 OverflowChuteBlockEntity.getOverflowPorts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/OverflowChuteBlockEntity.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L111) |
| ` public static boolean hasOverflowPort(BlockState state, Direction direction) ` | 判断该状态是否在指定方向开启了溢流口。<br>参数 ` state ` 方块状态<br>参数 ` direction ` 方向<br>返回 若为溢流溜槽且该方向溢流口开启则返回 true<br>末尾返回 ` state.getBlock() instanceof OverflowChuteBlock && state.getValue(overflowProperty(direction)) `<br>[调用处 ChuteBlock.outputsToward](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L153) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L129) |
| ` public static BlockState sanitizeOverflowPorts(BlockState state) ` | 清除出入口方向上无效的溢流口。 出入口方向不可能有溢流口，但方块状态本身允许存在（避免读取到错误状态时崩溃）， 因此在运行时统一清除为 false。<br>参数 ` state ` 方块状态<br>返回 清除后的方块状态，无需改动时返回原对象<br>末尾返回 ` result `<br>[调用处 OverflowChuteBlockEntity.sanitizeOverflowPorts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/OverflowChuteBlockEntity.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L143) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` switch (state.getValue(FACING)) { case NORTH -> SHAPE_N; case SOUTH -> SHAPE_S; case WEST -> SHAPE_W; case EAST -> SHAPE_E; case DOWN -> SHAPE_DOWN; case UP -> SHAPE_UP; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L188) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L205) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new OverflowChuteBlockEntity(ModBlockEntities.OVERFLOW_CHUTE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L210) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.OVERFLOW_CHUTE.get(), ((level1, blockPos, blockState, blockEntity) -> blockEntity.tick())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L215) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(FACING, facing) .setValue(ENABLED, !level.hasNeighborSignal(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L227) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | 手持铁砧锤单击非出入口方向时，开闭该方向的溢流口。 调整朝向由铁砧锤长按的轮盘完成，两者互不冲突。<br>` (!player.getItemInHand(hand).is(ModItemTags.ANVIL_HAMMER)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (direction == output \|\| direction == output.getOpposite()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L271) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!state.is(newState.getBlock())) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L313) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L328) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (level.getBlockEntity(blockPos) instanceof OverflowChuteBlockEntity entity) ` 成立时提前返回 ` entity.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L333) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L341) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverflowChuteBlock.java#L354) |

## OverseerBlock

` public class OverseerBlock extends SimpleMultiPartBlock<Vertical3PartHalf> implements IHammerRemovable, IHasMultiBlock, EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_LEVEL ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L34) |
| ` public static final EnumProperty<Vertical3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Vertical3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L35) |
| ` public static final IntegerProperty LEVEL ` | 初值 ` IntegerProperty.create("level", 0, MAX_LEVEL) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L36) |
| ` public OverseerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Vertical3PartHalf.BOTTOM) .setValue(LEVEL, 0) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Vertical3PartHalf.BOTTOM) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L38) |
| ` @Override public Property<Vertical3PartHalf> getPart() ` | 末尾返回 ` OverseerBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L47) |
| ` @Override public Vertical3PartHalf[] getParts() ` | 末尾返回 ` Vertical3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L52) |
| ` @Override @Nullable public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` this.defaultBlockState().setValue(HALF, Vertical3PartHalf.BOTTOM).setValue(LEVEL, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L57) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>` (state.getValue(HALF) == Vertical3PartHalf.MID && state.getValue(LEVEL) == MAX_LEVEL) ` 成立时提前返回 ` RenderShape.INVISIBLE `<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L68) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 末尾返回 ` switch (state.getValue(HALF)) { case TOP -> OVERSEER_TOP; case MID -> OVERSEER_MID; case BOTTOM -> OVERSEER_BOTTOM; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L77) |
| ` @Override public BlockState placedState(Vertical3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state).setValue(LEVEL, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L91) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new OverseerBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L96) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>` (state.getValue(HALF) != Vertical3PartHalf.BOTTOM) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof OverseerBlockEntity be) be.tick(level1, pos, state1); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L102) |
| ` @Override public void onRemove(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L113) |
| ` @Override public void onPlace(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/OverseerBlock.java#L117) |

## PiezoelectricCrystalBlock

` public class PiezoelectricCrystalBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Map<Block, List<Integer>> ANVIL_TYPES ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L26) |
| ` public static VoxelShape SHAPE ` | 初值 ` Shapes.or(Block.box(0, 14, 0, 16, 16, 16), Block.box(2, 2, 2, 14, 14, 14), Block.box(0, 0, 0, 16, 2, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L39) |
| ` public PiezoelectricCrystalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L42) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L46) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L51) |
| ` public void onHitByAnvil(FallingBlockEntity entity, float fallDistance, Level level, BlockPos blockPos) ` | 被铁砧砸事件<br>实现调用 ` level.getBlockTicks().hasScheduledTick(blockPos, this) `<br>实现调用 ` level.getBlockTicks() `<br>实现调用 ` ANVIL_TYPES.get(entity.blockState.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L68) |

## PlasmaJetsBlock

` public class PlasmaJetsBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlasmaJetsBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L28) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean trySpawn(BlockPos pos, Level level) ` | ` ( !PlasmaJetsBlock.isIgnitedOilCauldron(level, pos.below()) \|\| !heater.is(ModBlocks.HEATER) \|\| !((HeaterBlock) heater.getBlock()).isActive(heater) ) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FireCauldronBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L37) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` createTickerHelper(type, ModBlockEntities.PLASMA_JETS.get(), PlasmaJetsBlockEntity::tick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L84) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.PLASMA_JETS.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L89) |
| ` @SuppressWarnings("deprecation") public static boolean isIgnitedOilCauldron(Level level, BlockPos pos) ` | ` (PlasmaJetHooks.isIgnitedFuel(level, pos)) ` 成立时提前返回 ` true `<br>` (!(cache.getBlockState(pos).getBlock() instanceof IIgnitableCauldron cauldron)) ` 成立时提前返回 ` false `<br>末尾返回 ` cauldron.isIgnited(cache, pos) && cauldron.getFluid(cache, pos).is(ModFluidTags.OIL) `<br>[调用处 PlasmaJetsBlock.trySpawn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L94) |
| ` @SuppressWarnings("deprecation") public static boolean isValidBaseCauldron(Level level, BlockPos pos) ` | ` (override != null) ` 成立时提前返回 ` override `<br>` (!(cache.getBlockState(pos).getBlock() instanceof IIgnitableCauldron cauldron)) ` 成立时提前返回 ` false `<br>末尾返回 ` cauldron.isEmpty(cache, pos) \|\| cauldron.getFluid(cache, pos).is(ModFluidTags.OIL) `<br>[调用处 PlasmaJetsBlockEntity.checkTubeWallIntegrity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L240) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L102) |
| ` public static OptionalInt tryConsumeOnce(Level level, BlockPos pos, boolean simulate) ` | ` (override.isPresent()) ` 成立时提前返回 ` override `<br>` (!(cache.getBlockState(pos).getBlock() instanceof IIgnitableCauldron cauldron)) ` 成立时提前返回 ` OptionalInt.empty() `<br>末尾返回 ` extraDuration `<br>[调用处 PlasmaJetsBlockEntity.refreshDuration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L275) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L111) |

## PowerConverterBigBlock

` public class PowerConverterBigBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(5, 0, 5, 11, 8, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L14) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(5, 8, 5, 11, 16, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L15) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(5, 5, 0, 11, 11, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L16) |
| ` public static final VoxelShape SHAPE_EASE ` | 初值 ` Block.box(8, 5, 5, 16, 11, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L17) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(5, 5, 8, 11, 11, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L18) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 5, 5, 8, 11, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L19) |
| ` public static final int INPUT_TIME ` | 初值 ` 256 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L21) |
| ` public PowerConverterBigBlock(Properties properties) ` | 执行 ` super(properties, INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L23) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterBigBlock.java#L32) |

## PowerConverterExtremelyBigBlock

` public class PowerConverterExtremelyBigBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(3, 0, 3, 13, 16, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L14) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(3, 0, 3, 13, 16, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L15) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(3, 3, 0, 13, 13, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L16) |
| ` public static final VoxelShape SHAPE_EAST ` | 初值 ` Block.box(0, 3, 3, 16, 13, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L17) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(3, 3, 0, 13, 13, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L18) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 3, 3, 16, 13, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L19) |
| ` public static final int INPUT_TIME ` | 初值 ` 65536 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L21) |
| ` public PowerConverterExtremelyBigBlock(Properties properties) ` | 执行 ` super(properties, INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L23) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterExtremelyBigBlock.java#L32) |

## PowerConverterMiddleBlock

` public class PowerConverterMiddleBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(6, 0, 6, 10, 8, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L14) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(6, 8, 6, 10, 16, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L15) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(6, 6, 0, 10, 10, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L16) |
| ` public static final VoxelShape SHAPE_EASE ` | 初值 ` Block.box(8, 6, 6, 16, 10, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L17) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(6, 6, 8, 10, 10, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L18) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 6, 6, 8, 10, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L19) |
| ` public static final int INPUT_TIME ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L21) |
| ` public PowerConverterMiddleBlock(Properties properties) ` | 执行 ` super(properties, INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L23) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterMiddleBlock.java#L32) |

## PowerConverterSmallBlock

` public class PowerConverterSmallBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(7, 0, 7, 9, 8, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L14) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(7, 8, 7, 9, 16, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L15) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(7, 7, 0, 9, 9, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L16) |
| ` public static final VoxelShape SHAPE_EASE ` | 初值 ` Block.box(8, 7, 7, 16, 9, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L17) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(7, 7, 8, 9, 9, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L18) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 7, 7, 8, 9, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L19) |
| ` public static final int INPUT_TIME ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L21) |
| ` public PowerConverterSmallBlock(Properties properties) ` | 执行 ` super(properties, INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L23) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PowerConverterSmallBlock.java#L32) |
