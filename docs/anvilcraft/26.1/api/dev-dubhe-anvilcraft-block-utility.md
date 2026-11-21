# dev.dubhe.anvilcraft.block.utility



## ActiveSilencerBlock

` public class ActiveSilencerBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L41) |
| ` public ActiveSilencerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(ActiveSilencerBlock.POWERED, false)) `<br>实现调用 ` this.getStateDefinition().any().setValue(ActiveSilencerBlock.POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L43) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ActiveSilencerBlockEntity(ModBlockEntities.ACTIVE_SILENCER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L58) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue( ActiveSilencerBlock.POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L64) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L133) |
| ` public static final VoxelShape SHAPE ` | 初值 ` ShapeUtil.merge( new AABB(0, 0, 0, 16, 8, 16), new AABB(6, 8, 0, 10, 12, 16), new AABB(0, 8, 6, 16, 12, 10), new AABB(2, 8, 2, 14, 16, 14) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ActiveSilencerBlock.java#L143) |

## ArrowBlock

` public class ArrowBlock extends DirectionalBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ArrowBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ArrowBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(DirectionalBlock.FACING, Direction.NORTH)) `<br>实现调用 ` this.getStateDefinition().any().setValue(DirectionalBlock.FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ArrowBlock.java#L15) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(DirectionalBlock.FACING, rotation.rotate(state.getValue(DirectionalBlock.FACING))) `<br>[调用处 ArrowBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ArrowBlock.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ArrowBlock.java#L31) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(DirectionalBlock.FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ArrowBlock.java#L36) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(DirectionalBlock.FACING, context.getNearestLookingDirection().getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ArrowBlock.java#L41) |

## BlockDevourerBlock

` public class BlockDevourerBlock extends DirectionalBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L53)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH_SHAPE ` | 初值 ` Block.box(0, 0, 8, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L55) |
| ` public static final VoxelShape SOUTH_SHAPE ` | 初值 ` Block.box(0, 0, 0, 16, 16, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L56) |
| ` public static final VoxelShape WEST_SHAPE ` | 初值 ` Block.box(8, 0, 0, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L57) |
| ` public static final VoxelShape EAST_SHAPE ` | 初值 ` Block.box(0, 0, 0, 8, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L58) |
| ` public static final VoxelShape UP_SHAPE ` | 初值 ` Block.box(0, 0, 0, 16, 8, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L59) |
| ` public static final VoxelShape DOWN_SHAPE ` | 初值 ` Block.box(0, 8, 0, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L60) |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L61) |
| ` public static final BooleanProperty TRIGGERED ` | 初值 ` BlockStateProperties.TRIGGERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L62) |
| ` public BlockDevourerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(BlockDevourerBlock.FACING, Direction.NORTH) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L64) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>` (player == null) ` 成立时提前返回 ` this.defaultBlockState() .setValue(BlockDevourerBlock.FACING, context.getNearestLookingDirection().getOpposite()) `<br>` (player.isShiftKeyDown()) ` 成立时提前返回 ` this.defaultBlockState() .setValue(BlockDevourerBlock.FACING, context.getNearestLookingDirection().getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L83) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` super.tick(state, level, pos, random) `<br>实现调用 ` state.getValue(BlockDevourerBlock.TRIGGERED) `<br>实现调用 ` BlockPlacerBlock.hasNeighborSignal(level, pos, state.getValue(BlockDevourerBlock.FACING)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L111) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L159) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(BlockDevourerBlock.FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L164) |
| ` public void devourBlock(ServerLevel level, BlockPos devourerPos, Direction devourerDirection, int range) ` | 执行 ` this.devourBlock(level, devourerPos, devourerDirection, range, null) `<br>[调用处 BlockDevourerBlock.checkIfTriggered](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L186) |
| ` @SuppressWarnings({"unreachable", "unused"}) public void devourBlock( ServerLevel level, BlockPos devourerPos, Direction devourerDirection, int range, @Nullable Block anvil ) ` | 破坏方块<br>参数 ` level ` 世界<br>参数 ` devourerPos ` 破坏器坐标<br>参数 ` devourerDirection ` 破坏方向<br>参数 ` range ` 破坏半径(正方形)<br>参数 ` anvil ` 砸到方块吞噬器的铁砧<br>实现调用 ` devourerPos.relative(devourerDirection.getOpposite()) `<br>实现调用 ` devourerDirection.getOpposite() `<br>实现调用 ` devourerPos.relative(devourerDirection) `<br>[调用处 BlockDevourerBlock.devourBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L187) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L197) |
| ` public static boolean canDevour(BlockState devourBlockState) ` | 检查目标位置是否可以破坏<br>参数 ` devourBlockState ` 目标方块 \*/<br>末尾返回 ` DevourUtil.canDevour(devourBlockState) `<br>[调用处 BlockDevourerBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L224) |

## BlockPlacerBlock

` public class BlockPlacerBlock extends Block implements IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 13, 4, 16, 16, 16), Block.box(0, 3, 6, 16, 13, 16), Block.box(0, 0, 4, 16, 3, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L54) |
| ` public static final VoxelShape SOUTH_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 13, 0, 16, 16, 12), Block.box(0, 3, 0, 16, 13, 10), Block.box(0, 0, 0, 16, 3, 12)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L56) |
| ` public static final VoxelShape WEST_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(4, 13, 0, 16, 16, 16), Block.box(6, 3, 0, 16, 13, 16), Block.box(4, 0, 0, 16, 3, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L58) |
| ` public static final VoxelShape EAST_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 13, 0, 12, 16, 16), Block.box(0, 3, 0, 10, 13, 16), Block.box(0, 0, 0, 12, 3, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L60) |
| ` public static final VoxelShape UP_NORTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 13, 16, 12, 16), Block.box(0, 0, 3, 16, 10, 13), Block.box(0, 0, 0, 16, 12, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L62) |
| ` public static final VoxelShape UP_SOUTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 13, 16, 12, 16), Block.box(0, 0, 3, 16, 10, 13), Block.box(0, 0, 0, 16, 12, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L64) |
| ` public static final VoxelShape UP_WEST_SHAPE ` | 初值 ` Shapes.or(Block.box(13, 0, 0, 16, 12, 16), Block.box(3, 0, 0, 13, 10, 16), Block.box(0, 0, 0, 3, 12, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L66) |
| ` public static final VoxelShape UP_EAST_SHAPE ` | 初值 ` Shapes.or(Block.box(13, 0, 0, 16, 12, 16), Block.box(3, 0, 0, 13, 10, 16), Block.box(0, 0, 0, 3, 12, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L68) |
| ` public static final VoxelShape DOWN_NORTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 13, 16, 16, 16), Block.box(0, 6, 3, 16, 16, 13), Block.box(0, 4, 0, 16, 16, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L70) |
| ` public static final VoxelShape DOWN_SOUTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 13, 16, 16, 16), Block.box(0, 6, 3, 16, 16, 13), Block.box(0, 4, 0, 16, 16, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L72) |
| ` public static final VoxelShape DOWN_WEST_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 0, 3, 16, 16), Block.box(3, 6, 0, 13, 16, 16), Block.box(13, 4, 0, 16, 16, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L74) |
| ` public static final VoxelShape DOWN_EAST_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 0, 3, 16, 16), Block.box(3, 6, 0, 13, 16, 16), Block.box(13, 4, 0, 16, 16, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L76) |
| ` public static final EnumProperty<Orientation> ORIENTATION ` | 初值 ` EnumProperty.create("orientation", Orientation.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L78) |
| ` public static final BooleanProperty TRIGGERED ` | 初值 ` BlockStateProperties.TRIGGERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L79) |
| ` public BlockPlacerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(BlockPlacerBlock.ORIENTATION, Orientation.NORTH_UP) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L81) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` super.tick(state, level, pos, random) `<br>实现调用 ` state.getValue(BlockPlacerBlock.TRIGGERED) `<br>实现调用 ` BlockPlacerBlock.hasNeighborSignal(level, pos, state.getValue(BlockPlacerBlock.ORIENTATION).getDirection()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L105) |
| ` public static boolean hasNeighborSignal(Level level, BlockPos pos, Direction ignored) ` | 末尾返回 ` false `<br>[调用处 BlockDevourerBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L120) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L145) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L156) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(BlockPlacerBlock.ORIENTATION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L161) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(BlockPlacerBlock.ORIENTATION, orientation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L188) |
| ` public void placeBlock(int distance, Level level, BlockPos blockPos, Orientation orientation) ` | 放置方块<br>参数 ` distance ` 放置距离<br>参数 ` level ` 放置世界<br>参数 ` blockPos ` 放置位置<br>参数 ` orientation ` 放置方向<br>实现调用 ` orientation.getDirection() `<br>实现调用 ` level.getBlockState(blockPos.relative(direction, distance)) `<br>实现调用 ` blockPos.relative(direction, distance) `<br>[调用处 BlockPlacerBlock.checkIfTriggered](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L227) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L349) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` BlockPlacerBlock.ORIENTATION ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L360) |

## ControllableSandBlock

` public class ControllableSandBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ControllableSandBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ControllableSandBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ControllableSandBlock.java#L15) |

## ImpactPileBlock

` public class ImpactPileBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ImpactPileBlock.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ImpactPileBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ImpactPileBlock.java#L25) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` ImpactPileBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ImpactPileBlock.java#L29) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ImpactPileBlock.java#L43) |
| ` public static void impact(Level level, BlockPos blockPos) ` | 冲击<br>参数 ` level ` 世界<br>参数 ` blockPos ` 位置<br>实现调用 ` level.getMinY() `<br>实现调用 ` level.destroyBlock(blockPos, false) `<br>实现调用 ` level.destroyBlock(blockPos.above(), false) `<br>[调用处 ImpactPileBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ImpactPileBlock.java#L52) |

## MengerSpongeBlock

` public class MengerSpongeBlock extends SpongeBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/MengerSpongeBlock.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MengerSpongeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/MengerSpongeBlock.java#L42) |
| ` @Override public VoxelShape getInteractionShape(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` MengerSpongeBlock.REDUCE_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/MengerSpongeBlock.java#L128) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` MengerSpongeBlock.AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/MengerSpongeBlock.java#L133) |

## OverseerBlock

` public class OverseerBlock extends SimpleMultiPartBlock<Vertical3PartHalf> implements IHammerRemovable, IHasMultiBlock, EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_LEVEL ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L34) |
| ` public static final EnumProperty<Vertical3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Vertical3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L35) |
| ` public static final IntegerProperty LEVEL ` | 初值 ` IntegerProperty.create("level", 0, OverseerBlock.MAX_LEVEL) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L36) |
| ` public OverseerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(OverseerBlock.HALF, Vertical3PartHalf.BOTTOM) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L38) |
| ` @Override public Property<Vertical3PartHalf> getPart() ` | 末尾返回 ` OverseerBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L47) |
| ` @Override public Vertical3PartHalf[] getParts() ` | 末尾返回 ` Vertical3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L52) |
| ` @Override @Nullable public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` this.defaultBlockState().setValue(OverseerBlock.HALF, Vertical3PartHalf.BOTTOM).setValue(OverseerBlock.LEVEL, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L57) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>` (state.getValue(OverseerBlock.HALF) == Vertical3PartHalf.MID && state.getValue(OverseerBlock.LEVEL) == OverseerBlock.MAX_LEVEL) ` 成立时提前返回 ` RenderShape.INVISIBLE `<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L68) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 末尾返回 ` switch (state.getValue(OverseerBlock.HALF)) { case TOP -> OverseerBlock.OVERSEER_TOP; case MID -> OverseerBlock.OVERSEER_MID; case BOTTOM -> OverseerBlock.OVERSEER_BOTTOM; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L77) |
| ` @Override public BlockState placedState(Vertical3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state).setValue(OverseerBlock.LEVEL, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L91) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new OverseerBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L96) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (state.getValue(OverseerBlock.HALF) != Vertical3PartHalf.BOTTOM) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof OverseerBlockEntity be) be.tick(level1, pos, state1); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L102) |
| ` @Override public void onRemove(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L113) |
| ` @Override public void onPlace(Level level, BlockPos pos, BlockState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/OverseerBlock.java#L117) |

## SpacetimeSupercomputerBlock

` public class SpacetimeSupercomputerBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L45) |
| ` public static final VoxelShape SHAPE ` | 初值 ` Stream.of( Block.box(3, 2, 3, 13, 14, 13), Block.box(0, 0, 0, 16, 2, 16), Block.box(0, 14, 0, 16, 16, 16) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)).get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L47) |
| ` public SpacetimeSupercomputerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(SpacetimeSupercomputerBlock.POWERED, false)) `<br>实现调用 ` this.stateDefinition.any().setValue(SpacetimeSupercomputerBlock.POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L58) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue( SpacetimeSupercomputerBlock.POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L63) |
| ` @Override public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | 实现调用 ` level.getBlockEntity(pos) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` ClientboundBlockEntityDataPacket.create(spacetimeSupercomputerBlockEntity, BlockEntity::saveCustomOnly) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.connection.send(new SpacetimeSupercomputerBlockEntitySyncPacket(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L102) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.SPACETIME_SUPERCOMPUTER.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L130) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( blockEntityType, ModBlockEntities.SPACETIME_SUPERCOMPUTER.get(), (world, pos, bs, be) -> be.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/SpacetimeSupercomputerBlock.java#L135) |
