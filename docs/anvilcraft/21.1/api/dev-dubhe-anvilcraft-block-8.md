# dev.dubhe.anvilcraft.block（MagnetBlock 至 NeoforgeBlock）



## MagnetBlock

` public class MagnetBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty LIT ` | 初值 ` BlockStateProperties.LIT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L40) |
| ` public MagnetBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(LIT, false)) `<br>实现调用 ` this.stateDefinition.any().setValue(LIT, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L50) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(LIT, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L55) |
| ` @Override public void onPlace( BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston ) ` | 实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` this.attract(state, level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L61) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` this.attract(state, level, pos) `<br>实现调用 ` state.getValue(LIT) `<br>实现调用 ` level.hasNeighborSignal(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L79) |
| ` @Override public void onRemove( BlockState state, Level level, BlockPos magnetPos, BlockState newState, boolean movedByPiston ) ` | 实现调用 ` super.onRemove(state, level, magnetPos, newState, movedByPiston) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` state.getValue(LIT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L154) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(LIT) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (state.getValue(LIT) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlockAndUpdate(pos, state.cycle(LIT)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L169) |

## MagneticChuteBlock

` public class MagneticChuteBlock extends BetterBaseEntityBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L58)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L59) |
| ` public static final BooleanProperty ENABLED ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L60) |
| ` public static final BooleanProperty HEAD ` | 初值 ` BooleanProperty.create("head") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L61) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Shapes.join(Block.box(4, 8, 4, 12, 16, 12), Block.box(0, 0, 0, 16, 8, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L63) |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Shapes.join(Block.box(4, 0, 4, 12, 8, 12), Block.box(0, 8, 0, 16, 16, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L65) |
| ` public static final VoxelShape SHAPE_W ` | 初值 ` Shapes.join(Block.box(0, 4, 4, 8, 12, 12), Block.box(8, 0, 0, 16, 16, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L67) |
| ` public static final VoxelShape SHAPE_E ` | 初值 ` Shapes.join(Block.box(8, 4, 4, 16, 12, 12), Block.box(0, 0, 0, 8, 16, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L69) |
| ` public static final VoxelShape SHAPE_S ` | 初值 ` Shapes.join(Block.box(4, 4, 8, 12, 12, 16), Block.box(0, 0, 0, 16, 16, 8), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L71) |
| ` public static final VoxelShape SHAPE_N ` | 初值 ` Shapes.join(Block.box(4, 4, 0, 12, 12, 8), Block.box(0, 0, 8, 16, 16, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L73) |
| ` public MagneticChuteBlock(Properties properties) ` | 溜槽方块<br>参数 ` properties ` 方块属性<br>实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.DOWN).setValue(ENABLED, true).setValue(HEAD, false) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.DOWN).setValue(ENABLED, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L81) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` switch (state.getValue(FACING)) { case NORTH -> SHAPE_N; case SOUTH -> SHAPE_S; case WEST -> SHAPE_W; case EAST -> SHAPE_E; case DOWN -> SHAPE_DOWN; case UP -> SHAPE_UP; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L92) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L109) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new MagneticChuteBlockEntity(ModBlockEntities.MAGNETIC_CHUTE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L114) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!state.is(newState.getBlock())) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L119) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L134) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (blockEntity instanceof MagneticChuteBlockEntity magneticChuteBlockEntity) ` 成立时提前返回 ` magneticChuteBlockEntity.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L139) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>` (SimpleMagneticChuteBlock.isPointedByChute(level, pos)) ` 成立时提前返回 ` ModBlocks.SIMPLE_MAGNETIC_CHUTE.getDefaultState() .setValue(SimpleMagneticChuteBlock.FACING, facing) .setValue(SimpleMagneticChuteBlock.ENABLED, !level.hasNeighborSignal(pos)) .setValue(SimpleMagneticChuteBlock.WATERLOGGED, level.getFluidState(pos).getType() == Fluids.WATER) `<br>末尾返回 ` this.defaultBlockState() .setValue(FACING, facing) .setValue(ENABLED, !context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L148) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L187) |
| ` @Override public Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L208) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) `<br>[调用处 MagneticChuteBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L220) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L213) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L218) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.MAGNETIC_CHUTE.get(), ((level1, blockPos, blockState, blockEntity) -> blockEntity.tick())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L278) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (player.getItemInHand(hand).is(ModItemTags.ANVIL_HAMMER)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L290) |

## MagnetoElectricCoreBlock

` public class MagnetoElectricCoreBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetoElectricCoreBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MagnetoElectricCoreBlock> CODEC ` | 初值 ` simpleCodec(MagnetoElectricCoreBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetoElectricCoreBlock.java#L14) |
| ` public static final VoxelShape SHAPE ` | 初值 ` box(2, 2, 2, 14, 14, 14) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetoElectricCoreBlock.java#L15) |
| ` public MagnetoElectricCoreBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetoElectricCoreBlock.java#L17) |

## MassEnergyInverterBlock

` public class MassEnergyInverterBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MassEnergyInverterBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MassEnergyInverterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MassEnergyInverterBlock.java#L31) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new MassEnergyInverterBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MassEnergyInverterBlock.java#L50) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.MASS_ENERGY_INVERTER.get(), MassEnergyInverterBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MassEnergyInverterBlock.java#L55) |
| ` public static boolean hasAdjacentInverter(Level level, BlockPos pos) ` | 末尾返回 ` false `<br>[调用处 MassInjectBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MassEnergyInverterBlock.java#L65) |

## MatchaCakeBlock

` public class MatchaCakeBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCakeBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MatchaCakeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCakeBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 14 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCakeBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.6F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCakeBlock.java#L14) |

## MatchaCreamBlock

` public class MatchaCreamBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCreamBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MatchaCreamBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCreamBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCreamBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.4F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MatchaCreamBlock.java#L14) |

## MeltGemCauldron

` public class MeltGemCauldron extends BetterAbstractCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemCauldron.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MeltGemCauldron(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.MELT_GEM) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemCauldron.java#L19) |
| ` @Override public ItemInteractionResult useItemOn( ItemStack stack, BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (interaction == null) ` 成立时提前返回 ` ItemInteractionResult.PASS_TO_DEFAULT_BLOCK_INTERACTION `<br>末尾返回 ` interaction.interact(state, level, pos, player, hand, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemCauldron.java#L23) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemCauldron.java#L50) |
| ` @Override public int getAnalogOutputSignal(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` 3 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemCauldron.java#L55) |

## MeltGemFluid

` public abstract class MeltGemFluid extends BaseFlowingFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L17)


## MeltGemFluid.Flowing

` public static class Flowing extends MeltGemFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Flowing(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(LEVEL, 7)) `<br>实现调用 ` getStateDefinition().any().setValue(LEVEL, 7) `<br>[调用处 ModFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L328) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L51) |
| ` public int getAmount(FluidState state) ` | 末尾返回 ` state.getValue(LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L61) |
| ` public boolean isSource(FluidState state) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L65) |

## MeltGemFluid.Source

` public static class Source extends MeltGemFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Source(Properties properties) ` | 执行 ` super(properties) `<br>[调用处 ModFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L324) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L72) |
| ` public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L76) |
| ` public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MeltGemFluid.java#L80) |

## MengerSpongeBlock

` public class MengerSpongeBlock extends SpongeBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MengerSpongeBlock.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MengerSpongeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MengerSpongeBlock.java#L39) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MengerSpongeBlock.java#L110) |
| ` @Override public VoxelShape getInteractionShape(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` REDUCE_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MengerSpongeBlock.java#L124) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MengerSpongeBlock.java#L129) |

## MilkCauldronBlock

` public class MilkCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MilkCauldronBlock.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MilkCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.MILK) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MilkCauldronBlock.java#L20) |
| ` @Override public ItemInteractionResult useItemOn( ItemStack stack, BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (interaction == null) ` 成立时提前返回 ` ItemInteractionResult.PASS_TO_DEFAULT_BLOCK_INTERACTION `<br>末尾返回 ` interaction.interact(state, level, pos, player, hand, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MilkCauldronBlock.java#L24) |
| ` @Override public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MilkCauldronBlock.java#L41) |
| ` @Override public ItemStack getCloneItemStack( BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player ) ` | 末尾返回 ` new ItemStack(Items.CAULDRON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MilkCauldronBlock.java#L45) |

## MineralFountainBlock

` public class MineralFountainBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MineralFountainBlock.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MineralFountainBlock.java#L20) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new MineralFountainBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MineralFountainBlock.java#L29) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.MINERAL_FOUNTAIN.get(), (level1, pos, state1, entity) -> entity.tick()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MineralFountainBlock.java#L35) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MineralFountainBlock.java#L46) |

## MobAmberBlock

` public class MobAmberBlock extends HasMobBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MobAmberBlock.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MobAmberBlock.java#L24) |
| ` public MobAmberBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any() .setValue(FACING, Direction.NORTH)) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MobAmberBlock.java#L26) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MobAmberBlock.java#L52) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.MOB_AMBER_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MobAmberBlock.java#L59) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (!level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.MOB_AMBER_BLOCK.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick((ClientLevel) level1, blockPos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MobAmberBlock.java#L65) |

## MonolithBlock

` public class MonolithBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L23)

普通石碑方块，采用类似原版蘑菇块的六面独立纹理机制 与任意石碑类方块接触过的面转化为 monolith\_inner

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty NORTH ` | 初值 ` BooleanProperty.create("north") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L24) |
| ` public static final BooleanProperty EAST ` | 初值 ` BooleanProperty.create("east") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L25) |
| ` public static final BooleanProperty SOUTH ` | 初值 ` BooleanProperty.create("south") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L26) |
| ` public static final BooleanProperty WEST ` | 初值 ` BooleanProperty.create("west") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L27) |
| ` public static final BooleanProperty UP ` | 初值 ` BooleanProperty.create("up") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L28) |
| ` public static final BooleanProperty DOWN ` | 初值 ` BooleanProperty.create("down") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L29) |
| ` public MonolithBlock(BlockBehaviour.Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(NORTH, true) .setValue(EAST, true) .setValue(SOUTH, true) `<br>实现调用 ` this.stateDefinition.any() .setValue(NORTH, true) .setValue(EAST, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L39) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getLevel() `<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` this.defaultBlockState() .setValue(DOWN, !level.getBlockState(pos.below()).is(ModBlockTags.MONOLITH_BLOCKS)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L52) |

## MonolithCoreBlock

` public class MonolithCoreBlock extends MonolithLineBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MonolithCoreBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L22) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.MONOLITH_CORE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L26) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide \|\| type != ModBlockEntities.MONOLITH_CORE.get()) ` 成立时提前返回 ` null `<br>末尾返回 ` (tickLevel, pos, tickState, blockEntity) -> { if (blockEntity instanceof MonolithCoreBlockEntity core) core.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L31) |

## MonolithLineBlock

` public class MonolithLineBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L16)

石碑线装饰方块：只有东西/南北两种水平朝向（模型默认为南北朝向）， 放置时按玩家视角方向确定朝向。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L17) |
| ` public MonolithLineBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(AXIS, Direction.Axis.Z)) `<br>实现调用 ` getStateDefinition().any().setValue(AXIS, Direction.Axis.Z) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L19) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(AXIS, context.getHorizontalDirection().getAxis()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L24) |

## MountedRedstone

` public interface MountedRedstone extends IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` DirectionProperty ATTACHMENT ` | 初值 ` DirectionProperty.create("attachment") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L21) |
| ` static BlockState placementState(BlockState base, BlockPlaceContext context, boolean facesPlayer) ` | 末尾返回 ` base.setValue(ATTACHMENT, Direction.DOWN) .setValue(BlockStateProperties.HORIZONTAL_FACING, facesPlayer ? look.getOpposite() : look) `<br>[调用处 AdvancedComparatorBlock.getStateForPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L23) |
| ` static Map<Direction, VoxelShape> shapes(VoxelShape floor) ` | 实现调用 ` ShapeUtil.rotate(Direction.Axis.X, 270, floor) `<br>实现调用 ` ShapeUtil.rotate(Direction.Axis.X, 180, floor) `<br>实现调用 ` ShapeUtil.rotate(Direction.Axis.Y, 180, north) `<br>[调用处 AdvancedComparatorBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L29) |
| ` static Direction inputDirection(BlockState state) ` | 末尾返回 ` worldDirection(state.getValue(ATTACHMENT), state.getValue(BlockStateProperties.HORIZONTAL_FACING)) `<br>[调用处 AdvancedComparatorBlock.getSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L36) |
| ` static Direction worldDirection(Direction attachment, Direction facing) ` | ` (attachment == Direction.DOWN) ` 成立时提前返回 ` facing `<br>` (attachment == Direction.UP) ` 成立时提前返回 ` facing.getAxis() == Direction.Axis.Z ? facing.getOpposite() : facing `<br>[调用处 AdvancedComparatorBlock.getAlternateSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L246) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L40) |
| ` static BlockState transform(BlockState state, UnaryOperator<Direction> transform) ` | 实现调用 ` transform.apply(state.getValue(ATTACHMENT)) `<br>实现调用 ` state.getValue(ATTACHMENT) `<br>实现调用 ` transform.apply(inputDirection(state)) `<br>[调用处 AdvancedComparatorBlock.rotate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L131) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L56) |
| ` @Override default boolean change(Player player, BlockPos pos, Level level, ItemStack hammer) ` | 末尾返回 ` level.setBlockAndUpdate(pos, state.setValue(BlockStateProperties.HORIZONTAL_FACING, state.getValue(BlockStateProperties.HORIZONTAL_FACING).getClockWise())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L67) |
| ` @Override default DirectionProperty getChangeableProperty(BlockState state) ` | 末尾返回 ` BlockStateProperties.HORIZONTAL_FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MountedRedstone.java#L74) |

## NegativeMatterBlock

` public class NegativeMatterBlock extends Block implements INegativeMatterBlock, IVoidEnergyAmplifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NegativeMatterBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NegativeMatterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NegativeMatterBlock.java#L8) |
| ` @Override public int getVoidEnergyAmplification() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NegativeMatterBlock.java#L12) |

## NeoforgeBlock

` public class NeoforgeBlock extends BetterAnvilBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component CONTAINER_TITLE ` | 初值 ` Component.translatable("container.repair") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L48) |
| ` @Override public MapCodec<AnvilBlock> codec() ` | 末尾返回 ` simpleCodec(NeoforgeBlock::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L50) |
| ` public NeoforgeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L55) |
| ` @SuppressWarnings("UnreachableCode") @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L59) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities((float) AnvilCraft.CONFIG.world.neoforgeFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L88) |
| ` @Override public void fallOn(Level level, BlockState state, BlockPos pos, Entity entity, float fallDistance) ` | 分支 ` (entity instanceof Player) ` 内调用 ` level.playSound(null, pos, ModSoundEvents.NEOFORGE_LAND.get(), SoundSource.BLOCKS, 1.0f, 1.0f) `<br>分支 ` (entity instanceof Player) ` 内调用 ` ModSoundEvents.NEOFORGE_LAND.get() `<br>实现调用 ` super.fallOn(level, state, pos, entity, fallDistance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L97) |
| ` public static void damage(Level level, BlockPos pos) ` | 实现调用 ` level.setBlockAndUpdate(pos, Blocks.AIR.defaultBlockState()) `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` level.levelEvent(1029, pos, 0) `<br>[调用处 AnvilEventListener.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/NeoforgeBlock.java#L105) |
