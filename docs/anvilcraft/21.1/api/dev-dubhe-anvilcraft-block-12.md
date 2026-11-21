# dev.dubhe.anvilcraft.block（SimpleMagneticChuteBlock 至 SugarBlock）



## SimpleMagneticChuteBlock

` public class SimpleMagneticChuteBlock extends BaseEntityBlock implements SimpleWaterloggedBlock, IHammerChangeable, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L52) |
| ` public static final BooleanProperty ENABLED ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L53) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L54) |
| ` public static final BooleanProperty HEAD ` | 初值 ` BooleanProperty.create("head") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L55) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(4, 4, 4, 12, 16, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L57) |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(4, 0, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L58) |
| ` public static final VoxelShape SHAPE_N ` | 初值 ` Block.box(4, 4, 0, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L59) |
| ` public static final VoxelShape SHAPE_S ` | 初值 ` Block.box(4, 4, 4, 12, 12, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L60) |
| ` public static final VoxelShape SHAPE_W ` | 初值 ` Block.box(0, 4, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L61) |
| ` public static final VoxelShape SHAPE_E ` | 初值 ` Block.box(4, 4, 4, 16, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L62) |
| ` public static final VoxelShape SHAPE_N_HEAD ` | 初值 ` Shapes.join( Block.box(4, 4, 0, 12, 12, 12), Block.box(2, 10, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L64) |
| ` public static final VoxelShape SHAPE_S_HEAD ` | 初值 ` Shapes.join( Block.box(4, 4, 4, 12, 12, 16), Block.box(2, 10, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L68) |
| ` public static final VoxelShape SHAPE_W_HEAD ` | 初值 ` Shapes.join( Block.box(0, 4, 4, 12, 12, 12), Block.box(2, 10, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L72) |
| ` public static final VoxelShape SHAPE_E_HEAD ` | 初值 ` Shapes.join(Block.box( 4, 4, 4, 16, 12, 12), Block.box(2, 10, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L76) |
| ` public SimpleMagneticChuteBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(FACING, Direction.UP) .setValue(ENABLED, true) `<br>实现调用 ` this.stateDefinition .any() .setValue(FACING, Direction.UP) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L81) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new SimpleMagneticChuteBlockEntity(ModBlockEntities.SIMPLE_MAGNETIC_CHUTE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L96) |
| ` public static boolean isPointedByChute(BlockGetter level, BlockPos pos) ` | 判断指定位置是否被磁性溜槽、溢流溜槽或主动物流接口的输出口指向。 相邻输出口指向本格时使用连接形态。<br>参数 ` level ` 维度<br>参数 ` pos ` 被检测的位置<br>返回 若有相邻输出口指向该位置，返回 true<br>末尾返回 ` false `<br>[调用处 MagneticChuteBlock.getStateForPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L176) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L114) |
| ` @Override public ItemStack getCloneItemStack( BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player ) ` | 末尾返回 ` new ItemStack(ModBlocks.MAGNETIC_CHUTE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L169) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` state.getValue(ENABLED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (!state.getValue(ENABLED) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlock(pos, state.cycle(ENABLED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L180) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L192) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!state.is(newState.getBlock())) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L197) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.SIMPLE_MAGNETIC_CHUTE.get(), ((level1, blockPos, blockState, blockEntity) -> blockEntity.tick())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L212) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) `<br>实现调用 ` state.getValue(HEAD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L222) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L239) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (blockEntity instanceof SimpleMagneticChuteBlockEntity chuteBlockEntity) ` 成立时提前返回 ` chuteBlockEntity.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L244) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L253) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L258) |
| ` @Override public Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L280) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L285) |
| ` @SuppressWarnings("deprecation") @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` state.rotate(mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L290) |
| ` @Override public boolean canBeReplaced(BlockState state, net.minecraft.world.level.material.Fluid fluid) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L297) |
| ` @Override public boolean canBeReplaced(BlockState state, net.minecraft.world.item.context.BlockPlaceContext context) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L303) |

## SingularityCrystalBlock

` public class SingularityCrystalBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SingularityCrystalBlock.java#L29)

奇点晶体方块。 除了作为极端天体数据的存储介质外，手持已绑定超维存储站的超维终端右键时， 奇点晶体将转化为绑定对应超维存储站的超维上传站。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SingularityCrystalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SingularityCrystalBlock.java#L30) |

## SmartBlockPlacerBlock

` public class SmartBlockPlacerBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty UPSIDE_DOWN ` | 初值 ` BooleanProperty.create("upside_down") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L42) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L43) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L44) |
| ` public SmartBlockPlacerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(HorizontalDirectionalBlock.FACING, Direction.NORTH) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L65) |
| ` public RenderShape getRenderShape(BlockState state) ` | 末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L74) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getClickedFace() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` context.getHorizontalDirection().getOpposite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L88) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(HorizontalDirectionalBlock.FACING) `<br>实现调用 ` state.getValue(UPSIDE_DOWN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L125) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new SmartBlockPlacerBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L143) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level current, BlockState state, BlockEntityType<T> type ) ` | ` (current.isClientSide()) ` 成立时提前返回 ` (level, pos, state1, entity) -> { if (entity instanceof SmartBlockPlacerBlockEntity be) { be.tickClient(); } } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L149) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` level.setBlock(pos, state.setValue(POWERED, level.hasNeighborSignal(pos)), 2) `<br>实现调用 ` state.setValue(POWERED, level.hasNeighborSignal(pos)) `<br>实现调用 ` level.hasNeighborSignal(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L199) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!level.isClientSide) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L214) |
| ` @Override public void tick(BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(POWERED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (state.getValue(POWERED) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlock(pos, state.cycle(POWERED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L242) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L249) |
| ` @Override public int getAnalogOutputSignal(BlockState state, Level level, BlockPos pos) ` | ` (level.isClientSide) ` 成立时提前返回 ` 0 `<br>` (blockEntity instanceof SmartBlockPlacerBlockEntity placerEntity) ` 成立时提前返回 ` placerEntity.getComparatorOutput() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SmartBlockPlacerBlock.java#L254) |

## SpaceOvercompressorBlock

` public class SpaceOvercompressorBlock extends BetterBaseEntityBlock implements IHammerRemovable, IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpaceOvercompressorBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpaceOvercompressorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpaceOvercompressorBlock.java#L16) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new SpaceOvercompressorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpaceOvercompressorBlock.java#L30) |

## SpacetimeSupercomputerBlock

` public class SpacetimeSupercomputerBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L43) |
| ` public static final VoxelShape SHAPE ` | 初值 ` Stream.of( box(3, 2, 3, 13, 14, 13), box(0, 0, 0, 16, 2, 16), box(0, 14, 0, 16, 16, 16) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)).get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L45) |
| ` public SpacetimeSupercomputerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(POWERED, false)) `<br>实现调用 ` this.stateDefinition.any().setValue(POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L56) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L61) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.SPACETIME_SUPERCOMPUTER.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L148) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.SPACETIME_SUPERCOMPUTER.get(), (world, pos, bs, be) -> be.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpacetimeSupercomputerBlock.java#L153) |

## SpectralAnvilBlock

` public class SpectralAnvilBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L40) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L41) |
| ` public SpectralAnvilBlock(Properties properties) ` | 幻灵铁砧<br>实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.NORTH).setValue(POWERED, false) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L54) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` direction.getAxis() == Direction.Axis.X ? X_AXIS_AABB : Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L61) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` this.defaultBlockState() .setValue(FACING, context.getHorizontalDirection().getClockWise()) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` context.getHorizontalDirection().getClockWise() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L77) |
| ` @Nullable @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (syncId, inventory, player) -> new AnvilMenu(syncId, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L106) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` MagnetUtil.hasMagnetism(level, pos) `<br>实现调用 ` state.getValue(POWERED) `<br>分支 ` (hasNeighborSignal && !currentPowered) ` 内调用 ` level.setBlockAndUpdate(pos, state.setValue(POWERED, true)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L139) |

## StampingPlatformBlock

` public class StampingPlatformBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StampingPlatformBlock.java#L16)

冲压平台：在台面上放置原料，铁砧砸落时执行冲压配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StampingPlatformBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StampingPlatformBlock.java#L17) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STAMPING_PLATFORM.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StampingPlatformBlock.java#L21) |
| ` @Override public ItemStack getCloneItemStack( BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player ) ` | 末尾返回 ` new ItemStack(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StampingPlatformBlock.java#L26) |

## StepEffectBlock

` public class StepEffectBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StepEffectBlock(Properties properties, Consumer<Entity> stepAction) ` | 实现调用 ` super(properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L3534) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L18) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 执行 ` this.stepAction.accept(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L23) |
| ` public static void stepOnChocolateBlock(Entity entity) ` | 实现调用 ` entity.level().isClientSide() `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.level().getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L28) |
| ` public static void stepOnBlackChocolateBlock(Entity entity) ` | 实现调用 ` entity.level().isClientSide() `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.level().getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L38) |
| ` public static void stepOnWhiteChocolateBlock(Entity entity) ` | 实现调用 ` entity.level().isClientSide() `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.level().getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L48) |
| ` public static void stepOnBlackWhiteChocolateBlock(Entity entity) ` | 实现调用 ` entity.level().isClientSide() `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.level().getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectBlock.java#L58) |

## StepEffectSlabBlock

` public class StepEffectSlabBlock extends SlabBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectSlabBlock.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StepEffectSlabBlock(Properties properties, Consumer<Entity> stepAction) ` | 实现调用 ` super(properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L3590) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectSlabBlock.java#L14) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 执行 ` this.stepAction.accept(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectSlabBlock.java#L19) |

## StepEffectStairBlock

` public class StepEffectStairBlock extends StairBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectStairBlock.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StepEffectStairBlock(BlockState baseState, Properties properties, Consumer<Entity> stepAction) ` | 实现调用 ` super(baseState, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L3638) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectStairBlock.java#L14) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 执行 ` this.stepAction.accept(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StepEffectStairBlock.java#L19) |

## StorageFluidPortBlock

` public class StorageFluidPortBlock extends AbstractStoragePortBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L32)

仓储流体端口方块。 作为面相邻潜影集装箱 / 超维存储站的外部流体存储，连接关系与仓储端口一致且可互相延伸； 内部容量 128 B 且只能存储单一流体。手持门格海绵右键清除内部流体；拆除时流体随掉落物保留。 左右键行为本身定义在 StorageFluidPortBlockEntity，本类只负责掉落物、克隆与同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L33) |
| ` public StorageFluidPortBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L56) |
| ` @Override public ItemStack getCloneItemStack( BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player ) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L73) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L94) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STORAGE_FLUID_PORT.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L107) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.STORAGE_FLUID_PORT.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StorageFluidPortBlock.java#L113) |

## StoragePortBlock

` public class StoragePortBlock extends AbstractStoragePortBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L36)

仓储端口方块。 面相邻潜影集装箱 / 超维存储站（可沿端口链延伸）使用；右键物品标记并塞入、 双击塞入全部、左键取出；铁砧锤长按右键并滑动可去掉标记（普通锤右键不改变状态）； 拆除时缓存与标记保留在掉落物中。左右键行为本身定义在 StoragePortBlockEntity，本类只负责掉落物、克隆与方块状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty MARKED ` | 是否有标记的方块状态<br>初值 ` BooleanProperty.create("marked") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L38) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L40) |
| ` public StoragePortBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.defaultBlockState().setValue(StoragePortBlock.MARKED, false)) `<br>实现调用 ` this.defaultBlockState().setValue(StoragePortBlock.MARKED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L56) |
| ` @Override public ItemStack getCloneItemStack( BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player ) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L80) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L101) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STORAGE_PORT.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L114) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.STORAGE_PORT.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortBlock.java#L120) |

## StoragePortConsolidatorBlock

` public class StoragePortConsolidatorBlock extends AbstractStoragePortBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortConsolidatorBlock.java#L29)

仓储端口整合器方块。 把相连仓储端口的内容物并成一个物品能力暴露给外部物流（漏斗、溜槽、AE 等模组的仓储总线）， 相连关系只沿端口延伸、不跨集装箱 / 存储站，且没有连接核心也能工作； 物品优先进入标记了对应物品的端口，双击右键把身上对应标记的物品全部存入。 左右键行为本身定义在 StoragePortConsolidatorBlockEntity。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortConsolidatorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortConsolidatorBlock.java#L30) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STORAGE_PORT_CONSOLIDATOR.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortConsolidatorBlock.java#L39) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortConsolidatorBlock.java#L55) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.STORAGE_PORT_CONSOLIDATOR.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StoragePortConsolidatorBlock.java#L66) |

## StructureScannerBlock

` public class StructureScannerBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<StructureScannerBlock> CODEC ` | 初值 ` simpleCodec(StructureScannerBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L39) |
| ` public static final DirectionProperty FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L40) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L41) |
| ` public static final BooleanProperty UPSIDE_DOWN ` | 初值 ` BooleanProperty.create("upside_down") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L42) |
| ` public StructureScannerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.NORTH).setValue(POWERED, false) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L64) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(FACING, horizontalFacing) .setValue(UPSIDE_DOWN, upsideDown) .setValue(POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L81) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) `<br>实现调用 ` state.getValue(UPSIDE_DOWN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L104) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new StructureScannerBlockEntity(ModBlockEntities.STRUCTURE_SCANNER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L122) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof StructureScannerBlockEntity be) { be.tickServer(level1, pos); } } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L128) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, net.minecraft.world.level.block.Block neighborBlock, BlockPos neighborPos, boolean movedByPiston) ` | 实现调用 ` level.hasNeighborSignal(pos) `<br>实现调用 ` state.getValue(POWERED) `<br>分支 ` (powered != wasPowered) ` 内调用 ` level.setBlock(pos, state.setValue(POWERED, powered), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L164) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!level.isClientSide) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/StructureScannerBlock.java#L223) |

## SugarBlock

` public class SugarBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<FragmentationDegree> FRAGMENTATION_DEGREE ` | 初值 ` EnumProperty.create( "fragmentation_degree", FragmentationDegree.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L26) |
| ` public SugarBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(FRAGMENTATION_DEGREE, FragmentationDegree.ZERO) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L31) |
| ` public static void loot(RegistrumBlockLootTables tables, Block block) ` | 实现调用 ` LootTable.lootTable() `<br>实现调用 ` LootPool.lootPool() .setRolls(ConstantValue.exactly(1.0f)) `<br>实现调用 ` LootPool.lootPool() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L36) |
| ` public void onHit(Level level, BlockPos pos) ` | 实现调用 ` level.scheduleTick(pos, this, 4) `<br>实现调用 ` ChargeCollectorManager.charge(1, level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L60) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FRAGMENTATION_DEGREE, FragmentationDegree.ZERO) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L81) |
