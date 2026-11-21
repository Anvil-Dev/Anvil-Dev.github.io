# dev.dubhe.anvilcraft.block（ChuteBlock 至 EmberAnvilBlock）



## ChuteBlock

` public class ChuteBlock extends BetterBaseEntityBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING_HOPPER ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L71) |
| ` public static final BooleanProperty ENABLED ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L72) |
| ` public static final VoxelShape AABB ` | 初值 ` Shapes.join( Block.box(0, 12, 0, 16, 16, 16), Block.box(2, 0, 2, 14, 12, 14), BooleanOp.OR ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L74) |
| ` public static final VoxelShape AABB_W ` | 初值 ` Stream.of( Block.box(2, 8, 2, 14, 12, 14), Block.box(0, 4, 4, 12, 12, 12), Block.box(0, 12, 0, 16, 16, 16) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)) .get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L80) |
| ` public static final VoxelShape AABB_E ` | 初值 ` Stream.of( Block.box(2, 8, 2, 14, 12, 14), Block.box(4, 4, 4, 16, 12, 12), Block.box(0, 12, 0, 16, 16, 16) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)) .get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L86) |
| ` public static final VoxelShape AABB_S ` | 初值 ` Stream.of( Block.box(2, 8, 2, 14, 12, 14), Block.box(4, 4, 4, 12, 12, 16), Block.box(0, 12, 0, 16, 16, 16) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)) .get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L92) |
| ` public static final VoxelShape AABB_N ` | 初值 ` Stream.of( Block.box(2, 8, 2, 14, 12, 14), Block.box(4, 4, 0, 12, 12, 12), Block.box(0, 12, 0, 16, 16, 16) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)) .get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L98) |
| ` public ChuteBlock(Properties properties) ` | 溜槽方块<br>参数 ` properties ` 方块属性<br>实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.DOWN) .setValue(ENABLED, Boolean.TRUE) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.DOWN) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L110) |
| ` public static <T> boolean isChuteBlock(T obj) ` | ` (obj instanceof BlockState state) ` 成立时提前返回 ` state.is(ModBlocks.CHUTE.get()) \|\| state.is(ModBlocks.SIMPLE_CHUTE.get()) \|\| state.is(ModBlocks.MAGNETIC_CHUTE.get()) \|\| state.is(ModBlocks.SIMPLE_MAGNETIC_CHUTE.get()) \|\| state.is(ModBlocks.OVERFLOW_CHUTE.get()) \|\| (state.is(ModBlocks.CELESTIAL_FORGING_ANVIL_LOGISTICS_INTERFACE.get()) && state.hasProperty(CelestialForgingAnvilInterfaceBlock.ACTIVE) && state.getValue(CelestialForgingAnvilInterfaceBlock.ACTIVE)) `<br>` (obj instanceof Block block) ` 成立时提前返回 ` block == ModBlocks.CHUTE.get() \|\| block == ModBlocks.SIMPLE_CHUTE.get() \|\| block == ModBlocks.MAGNETIC_CHUTE.get() \|\| block == ModBlocks.SIMPLE_MAGNETIC_CHUTE.get() \|\| block == ModBlocks.OVERFLOW_CHUTE.get() \|\| block == ModBlocks.CELESTIAL_FORGING_ANVIL_LOGISTICS_INTERFACE.get() `<br>末尾返回 ` false `<br>[调用处 MagneticChuteBlock.getStateForPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L170) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L119) |
| ` public static boolean outputsToward(BlockState state, Direction direction) ` | 判断方块是否朝指定方向输出物品。 普通 / 简易 / 磁性溜槽以 FACING 为准；溢流溜槽除此之外还包括任一开启的溢流口。<br>参数 ` state ` 待判断的方块状态<br>参数 ` direction ` 输出方向<br>返回 若该方块朝此方向输出则返回 true<br>` (!isChuteBlock(state)) ` 成立时提前返回 ` false `<br>` (getFacing(state) == direction) ` 成立时提前返回 ` true `<br>末尾返回 ` OverflowChuteBlock.hasOverflowPort(state, direction) `<br>[调用处 MagneticChuteBlock.getStateForPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L164) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L150) |
| ` @Nullable public static Direction getFacing(BlockState state) ` | ` (state.hasProperty(FACING)) ` 成立时提前返回 ` state.getValue(FACING) `<br>` (state.hasProperty(MagneticChuteBlock.FACING)) ` 成立时提前返回 ` state.getValue(MagneticChuteBlock.FACING) `<br>` (state.hasProperty(HorizontalDirectionalBlock.FACING)) ` 成立时提前返回 ` state.getValue(HorizontalDirectionalBlock.FACING) `<br>末尾返回 ` null `<br>[调用处 MagneticChuteBlock.getStateForPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagneticChuteBlock.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L156) |
| ` public static void pickupItem(BlockState state, Level level, BlockPos pos, Entity entity) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` item.isAlive() `<br>实现调用 ` item.getItem().isEmpty() `<br>[调用处 ItemEntityMixin.anvilcraft$collectInsideChute](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L563) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L170) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ChuteBlockEntity.createBlockEntity(ModBlockEntities.CHUTE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L210) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L215) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L229) |
| ` @Override public Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L249) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) `<br>[调用处 ChuteBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L261) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L254) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L259) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(ENABLED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (!state.getValue(ENABLED) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlock(pos, state.cycle(ENABLED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L314) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L325) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.CHUTE.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L330) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` switch (state.getValue(FACING)) { case NORTH -> AABB_N; case SOUTH -> AABB_S; case WEST -> AABB_W; case EAST -> AABB_E; default -> AABB; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L344) |
| ` @SuppressWarnings({"DuplicatedCode", "UnreachableCode"}) @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (player.getItemInHand(hand).is(ModItemTags.ANVIL_HAMMER)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L355) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!state.is(newState.getBlock())) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L401) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L430) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (blockEntity instanceof ChuteBlockEntity chuteBlockEntity) ` 成立时提前返回 ` chuteBlockEntity.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChuteBlock.java#L435) |

## ConfinementChamberBlock

` public class ConfinementChamberBlock extends BaseEntityBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ConfinementChamberBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ConfinementChamberBlock.java#L25) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ConfinementChamberBlockEntity(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ConfinementChamberBlock.java#L34) |
| ` @Override public PushReaction getPistonPushReaction(BlockState state) ` | 末尾返回 ` PushReaction.DESTROY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ConfinementChamberBlock.java#L66) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ConfinementChamberBlock.java#L71) |

## ControllableSandBlock

` public class ControllableSandBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ControllableSandBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ControllableSandBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ControllableSandBlock.java#L13) |

## CookieBlock

` public class CookieBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CookieBlock.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CookieBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CookieBlock.java#L6) |

## CookiePillarBlock

` public class CookiePillarBlock extends RotatedPillarBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CookiePillarBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CookiePillarBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CookiePillarBlock.java#L22) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` FULL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CookiePillarBlock.java#L26) |
| ` @Override public VoxelShape getCollisionShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 末尾返回 ` switch (state.getValue(AXIS)) { case X -> SHAPE_X; case Z -> SHAPE_Z; default -> SHAPE_Y; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CookiePillarBlock.java#L32) |

## CorruptedBeaconBlock

` public class CorruptedBeaconBlock extends BeaconBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty LIT ` | 初值 ` BlockStateProperties.LIT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L27) |
| ` @Override public @Nullable Integer getBeaconColorMultiplier( BlockState state, LevelReader level, BlockPos pos, BlockPos beaconPos) ` | 末尾返回 ` 0xffffff ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L29) |
| ` public CorruptedBeaconBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` defaultState.equals(this.stateDefinition.any()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L35) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` Objects.requireNonNull(super.getStateForPlacement(context)).setValue(LIT, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L45) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CorruptedBeaconBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L68) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | 末尾返回 ` CorruptedBeaconBlock.createTickerHelper( blockEntityType, ModBlockEntities.CORRUPTED_BEACON.get(), CorruptedBeaconBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CorruptedBeaconBlock.java#L73) |

## CrabTrapBlock

` public class CrabTrapBlock extends Block implements SimpleWaterloggedBlock, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L42) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L43) |
| ` public static final IntegerProperty FISHING ` | 初值 ` IntegerProperty.create("fishing", 0, 15) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L44) |
| ` public CrabTrapBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` getStateDefinition().any() .setValue(FACING, Direction.NORTH) .setValue(WATERLOGGED, false) `<br>实现调用 ` getStateDefinition().any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L46) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` this.defaultBlockState() .setValue(FACING, context.getHorizontalDirection().getOpposite()) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` context.getHorizontalDirection().getOpposite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L56) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L74) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L79) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` Direction.values() `<br>实现调用 ` level.getFluidState(pos.relative(direction)).is(Fluids.WATER) `<br>实现调用 ` level.getFluidState(pos.relative(direction)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L84) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L113) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` state.rotate(mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L118) |
| ` public static List<ItemStack> generateLoot(ServerLevel level, BlockPos pos, ResourceKey<LootTable> loot) ` | 末尾返回 ` lootTable.getRandomItems(lootParams) `<br>[调用处 HitCrabTrapBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrabTrapBlock.java#L150) |

## CreamBlock

` public class CreamBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreamBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreamBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreamBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 5 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreamBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.4F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreamBlock.java#L14) |

## CreativeCrateBlock

` public class CreativeCrateBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeCrateBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeCrateBlock.java#L30) |
| ` @Override public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CREATIVE_CRATE.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeCrateBlock.java#L90) |

## CreativeFluidTankBlock

` public class CreativeFluidTankBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeFluidTankBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidTankBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeFluidTankBlock.java#L38) |
| ` @Override public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CREATIVE_FLUID_TANK.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeFluidTankBlock.java#L138) |

## CreativeGeneratorBlock

` public class CreativeGeneratorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Block.box(0, 0, 0, 16, 4, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L31) |
| ` public CreativeGeneratorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L33) |
| ` @Override @SuppressWarnings({"UnreachableCode"}) public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L42) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CreativeGeneratorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L63) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` createTickerHelper( type, ModBlockEntities.CREATIVE_GENERATOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L69) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L80) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` CreativeGeneratorBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeGeneratorBlock.java#L85) |

## CreativeLaserBlock

` public class CreativeLaserBlock extends BaseLaserBlock implements IHammerRemovable, HammerRotateBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` ShapeUtil.merge( Block.box(0, 0, 0, 16, 4, 16), Block.box(2, 4, 2, 14, 16, 14) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L38) |
| ` public static final DirectionProperty FACING ` | 初值 ` DirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L47) |
| ` public CreativeLaserBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(FACING, Direction.UP)) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.UP) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L49) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L87) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` CreativeLaserBlockEntity.createBlockEntity(ModBlockEntities.CREATIVE_LASER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L96) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.CREATIVE_LASER.get(), (level1, pos, state1, entity) -> entity.tick(level1) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L102) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L115) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CreativeLaserBlock.java#L132) |

## CrushingTableBlock

` public class CrushingTableBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrushingTableBlock.java#L12)

粉碎台：在台面上放置原料，铁砧砸落时执行粉碎配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrushingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrushingTableBlock.java#L13) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CRUSHING_TABLE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CrushingTableBlock.java#L17) |

## CursedGoldBlock

` public class CursedGoldBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CursedGoldBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedGoldBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CursedGoldBlock.java#L9) |
| ` @Override public float getEnchantPowerBonus(BlockState state, LevelReader level, BlockPos pos) ` | 末尾返回 ` -1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CursedGoldBlock.java#L13) |

## DeflectionRingBlock

` public class DeflectionRingBlock extends WaterloggedFlexibleMultiPartBlock<DirectionCube3x3PartHalf, DirectionProperty, Direction> implements MultiPartBlockEntity<DirectionCube3x3PartHalf, DeflectionRingBlock>, IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L46)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<DirectionCube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", DirectionCube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L48) |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L49) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L50) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L51) |
| ` public static final EnumProperty<IPowerComponent.Switch> SWITCH ` | 初值 ` IPowerComponent.SWITCH ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L52) |
| ` public DeflectionRingBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, DirectionCube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L65) |
| ` @Override public Property<DirectionCube3x3PartHalf> getPart() ` | 末尾返回 ` HALF `<br>[调用处 DeflectionRingBlock.placedState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L151) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L128) |
| ` @Override public DirectionCube3x3PartHalf[] getParts() ` | 末尾返回 ` DirectionCube3x3PartHalf.values() `<br>[调用处 DeflectionRingBlock.isChannelWaterlogged](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L167) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L133) |
| ` @Override public DirectionProperty getAdditionalProperty() ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L138) |
| ` @Override public BlockState placedState(DirectionCube3x3PartHalf part, BlockState state) ` | 末尾返回 ` state .setValue(this.getPart(), part) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L148) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.waterloggedStateForPlacement(context, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L154) |
| ` public boolean isChannelWaterlogged(Level level, BlockPos mainPos, BlockState mainState) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L165) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` Arrays.stream(this.getParts()) `<br>实现调用 ` this.getParts() `<br>实现调用 ` state.getValue(SWITCH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L183) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 末尾返回 ` COLLISION_SHAPES.get(state.getValue(FACING).getAxis()).get(state.getValue(HALF)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L221) |
| ` @Override public DeflectionRingBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L231) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.DEFLECTION_RING.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L236) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | 末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof DeflectionRingBlockEntity be) be.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L241) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L271) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DeflectionRingBlock.java#L277) |

## DischargerBlock

` public class DischargerBlock extends ChargerBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DischargerBlock.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DischargerBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DischargerBlock.java#L19) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new DischargerBlockEntity(ModBlockEntities.DISCHARGER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DischargerBlock.java#L23) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.DISCHARGER.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick(level1, blockPos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DischargerBlock.java#L28) |
| ` @SuppressWarnings("unchecked") @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/DischargerBlock.java#L41) |

## EmberAnvilBlock

` public class EmberAnvilBlock extends BetterAnvilBlock implements IHammerRemovable, IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L49) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` X_AXIS_AABB `<br>末尾返回 ` Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L53) |
| ` @SuppressWarnings("UnreachableCode") @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L66) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new EmberAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L82) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities((float) AnvilCraft.CONFIG.world.emberAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L90) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L99) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= AnvilCraft.CONFIG.world.emberBlockWaterAbsorptionChance) ` 内调用 ` tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L104) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L35) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberAnvilBlock.java#L35) |
