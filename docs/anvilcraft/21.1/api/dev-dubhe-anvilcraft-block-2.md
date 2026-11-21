# dev.dubhe.anvilcraft.block（BlockComparatorBlock.FacingWithAxis 至 ChocolateCreamBlock）



## BlockComparatorBlock.FacingWithAxis

` public enum FacingWithAxis implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L321)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` UP_X ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L322) |
| ` UP_Z ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L323) |
| ` DOWN_X ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L324) |
| ` DOWN_Z ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L325) |
| ` NORTH_X ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L326) |
| ` NORTH_Y ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L327) |
| ` SOUTH_X ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L328) |
| ` SOUTH_Y ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L329) |
| ` WEST_Z ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L330) |
| ` WEST_Y ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L331) |
| ` EAST_Z ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L332) |
| ` EAST_Y ` | 声明于枚举 ` BlockComparatorBlock.FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L333) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L347) |
| ` public static FacingWithAxis of(Direction facing, Direction.Axis axis) ` | 末尾返回 ` NORTH_X ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L352) |
| ` public FacingWithAxis rotate(Rotation rotation) ` | 末尾返回 ` of(newFacing, newAxis) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L361) |
| ` public FacingWithAxis mirror(Mirror mirror) ` | 末尾返回 ` of(mirror.mirror(this.facing), this.axis) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L368) |
| ` public FacingWithAxis toggleAxis() ` | 返回 ` FacingWithAxis ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L372) |
| ` public Direction getFacing() ` | 末尾返回 ` this.facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L321) |
| ` public Direction.Axis getAxis() ` | 末尾返回 ` this.axis `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L321) |
| ` public static FacingWithAxis[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L321) |
| ` public static FacingWithAxis valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L321) |

## BlockDevourerBlock

` public class BlockDevourerBlock extends DirectionalBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH_SHAPE ` | 初值 ` Block.box(0, 0, 8, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L54) |
| ` public static final VoxelShape SOUTH_SHAPE ` | 初值 ` Block.box(0, 0, 0, 16, 16, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L55) |
| ` public static final VoxelShape WEST_SHAPE ` | 初值 ` Block.box(8, 0, 0, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L56) |
| ` public static final VoxelShape EAST_SHAPE ` | 初值 ` Block.box(0, 0, 0, 8, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L57) |
| ` public static final VoxelShape UP_SHAPE ` | 初值 ` Block.box(0, 0, 0, 16, 8, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L58) |
| ` public static final VoxelShape DOWN_SHAPE ` | 初值 ` Block.box(0, 8, 0, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L59) |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L60) |
| ` public static final BooleanProperty TRIGGERED ` | 初值 ` BlockStateProperties.TRIGGERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L61) |
| ` public BlockDevourerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.NORTH) .setValue(TRIGGERED, false) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L63) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>` (player == null) ` 成立时提前返回 ` this.defaultBlockState() .setValue(FACING, context.getNearestLookingDirection().getOpposite()) `<br>` (player.isShiftKeyDown()) ` 成立时提前返回 ` this.defaultBlockState() .setValue(FACING, context.getNearestLookingDirection().getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L82) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` super.tick(state, level, pos, random) `<br>实现调用 ` state.getValue(TRIGGERED) `<br>实现调用 ` BlockPlacerBlock.hasNeighborSignal(level, pos, state.getValue(FACING)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L110) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 分支 ` (!level.isClientSide) ` 内调用 ` this.checkIfTriggered(level, state, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L124) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L149) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L154) |
| ` public void devourBlock(ServerLevel level, BlockPos devourerPos, Direction devourerDirection, int range) ` | 执行 ` this.devourBlock(level, devourerPos, devourerDirection, range, null) `<br>[调用处 BlockDevourerBlock.checkIfTriggered](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L144) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L176) |
| ` @SuppressWarnings({"unreachable", "unused"}) public void devourBlock( ServerLevel level, BlockPos devourerPos, Direction devourerDirection, int range, @Nullable Block anvil ) ` | 破坏方块<br>参数 ` level ` 世界<br>参数 ` devourerPos ` 破坏器坐标<br>参数 ` devourerDirection ` 破坏方向<br>参数 ` range ` 破坏半径(正方形)<br>参数 ` anvil ` 砸到方块吞噬器的铁砧<br>实现调用 ` devourerPos.relative(devourerDirection.getOpposite()) `<br>实现调用 ` devourerDirection.getOpposite() `<br>实现调用 ` devourerPos.relative(devourerDirection) `<br>[调用处 BlockDevourerBlock.devourBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L177) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L189) |

## BlockPlacerBlock

` public class BlockPlacerBlock extends Block implements IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 13, 4, 16, 16, 16), Block.box(0, 3, 6, 16, 13, 16), Block.box(0, 0, 4, 16, 3, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L52) |
| ` public static final VoxelShape SOUTH_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 13, 0, 16, 16, 12), Block.box(0, 3, 0, 16, 13, 10), Block.box(0, 0, 0, 16, 3, 12)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L54) |
| ` public static final VoxelShape WEST_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(4, 13, 0, 16, 16, 16), Block.box(6, 3, 0, 16, 13, 16), Block.box(4, 0, 0, 16, 3, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L56) |
| ` public static final VoxelShape EAST_UP_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 13, 0, 12, 16, 16), Block.box(0, 3, 0, 10, 13, 16), Block.box(0, 0, 0, 12, 3, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L58) |
| ` public static final VoxelShape UP_NORTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 13, 16, 12, 16), Block.box(0, 0, 3, 16, 10, 13), Block.box(0, 0, 0, 16, 12, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L60) |
| ` public static final VoxelShape UP_SOUTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 13, 16, 12, 16), Block.box(0, 0, 3, 16, 10, 13), Block.box(0, 0, 0, 16, 12, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L62) |
| ` public static final VoxelShape UP_WEST_SHAPE ` | 初值 ` Shapes.or(Block.box(13, 0, 0, 16, 12, 16), Block.box(3, 0, 0, 13, 10, 16), Block.box(0, 0, 0, 3, 12, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L64) |
| ` public static final VoxelShape UP_EAST_SHAPE ` | 初值 ` Shapes.or(Block.box(13, 0, 0, 16, 12, 16), Block.box(3, 0, 0, 13, 10, 16), Block.box(0, 0, 0, 3, 12, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L66) |
| ` public static final VoxelShape DOWN_NORTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 13, 16, 16, 16), Block.box(0, 6, 3, 16, 16, 13), Block.box(0, 4, 0, 16, 16, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L68) |
| ` public static final VoxelShape DOWN_SOUTH_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 13, 16, 16, 16), Block.box(0, 6, 3, 16, 16, 13), Block.box(0, 4, 0, 16, 16, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L70) |
| ` public static final VoxelShape DOWN_WEST_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 0, 3, 16, 16), Block.box(3, 6, 0, 13, 16, 16), Block.box(13, 4, 0, 16, 16, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L72) |
| ` public static final VoxelShape DOWN_EAST_SHAPE ` | 初值 ` Shapes.or(Block.box(0, 4, 0, 3, 16, 16), Block.box(3, 6, 0, 13, 16, 16), Block.box(13, 4, 0, 16, 16, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L74) |
| ` public static final EnumProperty<Orientation> ORIENTATION ` | 初值 ` EnumProperty.create("orientation", Orientation.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L76) |
| ` public static final BooleanProperty TRIGGERED ` | 初值 ` BlockStateProperties.TRIGGERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L77) |
| ` public BlockPlacerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(ORIENTATION, Orientation.NORTH_UP) .setValue(TRIGGERED, false) `<br>实现调用 ` this.stateDefinition .any() .setValue(ORIENTATION, Orientation.NORTH_UP) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L79) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` super.tick(state, level, pos, random) `<br>实现调用 ` state.getValue(TRIGGERED) `<br>实现调用 ` hasNeighborSignal(level, pos, state.getValue(ORIENTATION).getDirection()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L103) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston) ` | 分支 ` (!level.isClientSide) ` 内调用 ` this.checkIfTriggered(level, state, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L116) |
| ` public static boolean hasNeighborSignal(Level level, BlockPos pos, Direction ignored) ` | 末尾返回 ` false `<br>[调用处 BlockDevourerBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L119) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L141) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L152) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(ORIENTATION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L157) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState().setValue(ORIENTATION, orientation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L184) |
| ` public void placeBlock(int distance, Level level, BlockPos blockPos, Orientation orientation) ` | 放置方块<br>参数 ` distance ` 放置距离<br>参数 ` level ` 放置世界<br>参数 ` blockPos ` 放置位置<br>参数 ` orientation ` 放置方向<br>实现调用 ` orientation.getDirection() `<br>实现调用 ` level.getBlockState(blockPos.relative(direction, distance)) `<br>实现调用 ` blockPos.relative(direction, distance) `<br>[调用处 BlockPlacerBlock.checkIfTriggered](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L225) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L353) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` ORIENTATION ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockPlacerBlock.java#L364) |

## BurningHeaterBlock

` public class BurningHeaterBlock extends BaseEntityBlock implements IHammerRemovable, IDamagingHeater `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IntegerProperty LEVEL ` | 燃烧等级：0=熄灭，1=阴燃(0-300s)，2=点燃(≥300s)<br>初值 ` IntegerProperty.create("level", 0, 2) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L34) |
| ` public BurningHeaterBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(LEVEL, 0)) `<br>实现调用 ` this.stateDefinition.any().setValue(LEVEL, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L36) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BurningHeaterBlockEntity(ModBlockEntities.BURNING_HEATER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L46) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L52) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` createTickerHelper(type, ModBlockEntities.BURNING_HEATER.get(), (level1, pos, state1, entity) -> entity.tick(level1, pos, state1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L63) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!state.is(newState.getBlock())) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L119) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L133) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos pos) ` | ` (level.getBlockEntity(pos) instanceof BurningHeaterBlockEntity be) ` 成立时提前返回 ` Math.min(15, (be.getBurnTime() * 15) / BurningHeaterBlockEntity.REFUEL_THRESHOLD) `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L138) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` HeaterUtil.hurtEntity(level, state, entity) `<br>实现调用 ` super.stepOn(level, pos, state, entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L146) |
| ` @Override public boolean isActive(BlockState state) ` | 末尾返回 ` state.getValue(LEVEL) > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L152) |

## CakeBaseBlock

` public class CakeBaseBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBaseBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CakeBaseBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBaseBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 5 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBaseBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.8F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBaseBlock.java#L14) |

## CakeBlock

` public class CakeBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CakeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 10 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.6F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CakeBlock.java#L14) |

## CelestialBackGateBlock

` public class CelestialBackGateBlock extends BaseEntityBlock implements SimpleWaterloggedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L36)

An unbreakable, non-inventory gate generated at a special-planet landing point.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L37) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L38) |
| ` public CelestialBackGateBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(stateDefinition.any() .setValue(FACING, Direction.NORTH) .setValue(WATERLOGGED, false)) `<br>实现调用 ` stateDefinition.any() .setValue(FACING, Direction.NORTH) .setValue(WATERLOGGED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L40) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState() .setValue(FACING, context.getHorizontalDirection()) .setValue(WATERLOGGED, fluidState.getType() == Fluids.WATER && fluidState.isSource()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L62) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L70) |
| ` @Override public BlockState updateShape( BlockState state, Direction direction, BlockState neighborState, LevelAccessor level, BlockPos pos, BlockPos neighborPos ) ` | 末尾返回 ` super.updateShape(state, direction, neighborState, level, pos, neighborPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L75) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CELESTIAL_BACK_GATE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L86) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper(type, ModBlockEntities.CELESTIAL_BACK_GATE.get(), (lvl, pos, blockState, be) -> be.tick()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L91) |
| ` @Override public boolean onDestroyedByPlayer( BlockState state, Level level, BlockPos pos, Player player, boolean willHarvest, FluidState fluid ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L119) |

## CementCauldronBlock

` public class CementCauldronBlock extends BetterAbstractCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CementCauldronBlock.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CementCauldronBlock> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group(propertiesCodec(), Color.CODEC.fieldOf("color").forGetter(CementCauldronBlock::getColor)).apply(ins, CementCauldronBlock::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CementCauldronBlock.java#L24) |
| ` public CementCauldronBlock(Properties properties, Color color) ` | 实现调用 ` super(properties, ModInteractionMap.CEMENT) `<br>[调用处 ModBlocks.registerCementCauldron](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L4293) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CementCauldronBlock.java#L30) |
| ` @Override public ItemInteractionResult useItemOn( ItemStack stack, BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (interaction == null) ` 成立时提前返回 ` ItemInteractionResult.PASS_TO_DEFAULT_BLOCK_INTERACTION `<br>末尾返回 ` interaction.interact(state, level, pos, player, hand, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CementCauldronBlock.java#L35) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CementCauldronBlock.java#L62) |
| ` public Color getColor() ` | 末尾返回 ` this.color `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/CementCauldronBlock.java#L21) |

## ChargeCollectorBlock

` public class ChargeCollectorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static VoxelShape SHAPE ` | 初值 ` Shapes.or( Block.box(0, 0, 0, 16, 4, 16) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L29) |
| ` public static BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L32) |
| ` public ChargeCollectorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(POWERED, false)) `<br>实现调用 ` this.getStateDefinition().any().setValue(POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L34) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L49) |
| ` public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 末尾返回 ` SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L54) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ChargeCollectorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L63) |
| ` public void activate(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` level.setBlockAndUpdate(pos, state.setValue(POWERED, true)) `<br>实现调用 ` state.setValue(POWERED, true) `<br>实现调用 ` this.updateNeighbours(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L69) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` createTickerHelper( type, ModBlockEntities.CHARGE_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick() ) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargeCollectorBlock.java#L103) |

## ChargerBlock

` public class ChargerBlock extends BaseEntityBlock implements IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L41) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L42) |
| ` public ChargerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(POWERED, false).setValue(OVERLOAD, true)) `<br>实现调用 ` getStateDefinition().any().setValue(POWERED, false).setValue(OVERLOAD, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L44) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState().setValue(POWERED, false).setValue(OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L54) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.CHARGER.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick(level1, blockPos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L60) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` level.setBlock(pos, state.setValue(POWERED, level.hasNeighborSignal(pos)), 2) `<br>实现调用 ` state.setValue(POWERED, level.hasNeighborSignal(pos)) `<br>实现调用 ` level.hasNeighborSignal(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L77) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ChargerBlockEntity(ModBlockEntities.CHARGER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L92) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L103) |
| ` @Override public void onRemove( BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston ) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>实现调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L108) |
| ` @Override public void tick(BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(POWERED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (state.getValue(POWERED) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlock(pos, state.cycle(POWERED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L136) |
| ` @SuppressWarnings("unchecked") @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L143) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChargerBlock.java#L154) |

## ChocolateCakeBlock

` public class ChocolateCakeBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCakeBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChocolateCakeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCakeBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 20 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCakeBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.6F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCakeBlock.java#L14) |

## ChocolateCreamBlock

` public class ChocolateCreamBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCreamBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChocolateCreamBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCreamBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 12 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCreamBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.4F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ChocolateCreamBlock.java#L14) |
