# dev.dubhe.anvilcraft.block.power.converter



## BasePowerConverterBlock

` public abstract class BasePowerConverterBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L35) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L36) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L37) |
| ` public BasePowerConverterBlock(Properties properties, int inputPower) ` | 基本电源转换器模块<br>实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(BasePowerConverterBlock.FACING, Direction.DOWN) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L40) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(BasePowerConverterBlock.FACING, rotation.rotate(state.getValue(BasePowerConverterBlock.FACING))) `<br>[调用处 BasePowerConverterBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L56) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(BasePowerConverterBlock.FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L61) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` this.defaultBlockState() .setValue(BasePowerConverterBlock.FACING, context.getClickedFace().getOpposite()) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` context.getClickedFace().getOpposite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L66) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.POWER_CONVERTER.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L90) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L107) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new PowerConverterBlockEntity(ModBlockEntities.POWER_CONVERTER.get(), pos, state, this.inputPower) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L112) |
| ` @Override public abstract VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/BasePowerConverterBlock.java#L118) |

## PowerConverterBigBlock

` public class PowerConverterBigBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(5, 0, 5, 11, 8, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L15) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(5, 8, 5, 11, 16, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L16) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(5, 5, 0, 11, 11, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L17) |
| ` public static final VoxelShape SHAPE_EASE ` | 初值 ` Block.box(8, 5, 5, 16, 11, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L18) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(5, 5, 8, 11, 11, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L19) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 5, 5, 8, 11, 11) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L20) |
| ` public static final int INPUT_TIME ` | 初值 ` 256 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L22) |
| ` public PowerConverterBigBlock(Properties properties) ` | 执行 ` super(properties, PowerConverterBigBlock.INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L24) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(BasePowerConverterBlock.FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterBigBlock.java#L33) |

## PowerConverterExtremelyBigBlock

` public class PowerConverterExtremelyBigBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(3, 0, 3, 13, 16, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L14) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(3, 0, 3, 13, 16, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L15) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(3, 3, 0, 13, 13, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L16) |
| ` public static final VoxelShape SHAPE_EAST ` | 初值 ` Block.box(0, 3, 3, 16, 13, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L17) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(3, 3, 0, 13, 13, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L18) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 3, 3, 16, 13, 13) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L19) |
| ` public static final int INPUT_TIME ` | 初值 ` 65536 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L21) |
| ` public PowerConverterExtremelyBigBlock(Properties properties) ` | 执行 ` super(properties, INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L23) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterExtremelyBigBlock.java#L32) |

## PowerConverterMiddleBlock

` public class PowerConverterMiddleBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(6, 0, 6, 10, 8, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L15) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(6, 8, 6, 10, 16, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L16) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(6, 6, 0, 10, 10, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L17) |
| ` public static final VoxelShape SHAPE_EASE ` | 初值 ` Block.box(8, 6, 6, 16, 10, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L18) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(6, 6, 8, 10, 10, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L19) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 6, 6, 8, 10, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L20) |
| ` public static final int INPUT_TIME ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L22) |
| ` public PowerConverterMiddleBlock(Properties properties) ` | 执行 ` super(properties, PowerConverterMiddleBlock.INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L24) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(BasePowerConverterBlock.FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterMiddleBlock.java#L33) |

## PowerConverterSmallBlock

` public class PowerConverterSmallBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(7, 0, 7, 9, 8, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L15) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(7, 8, 7, 9, 16, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L16) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(7, 7, 0, 9, 9, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L17) |
| ` public static final VoxelShape SHAPE_EASE ` | 初值 ` Block.box(8, 7, 7, 16, 9, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L18) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(7, 7, 8, 9, 9, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L19) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 7, 7, 8, 9, 9) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L20) |
| ` public static final int INPUT_TIME ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L22) |
| ` public PowerConverterSmallBlock(Properties properties) ` | 执行 ` super(properties, PowerConverterSmallBlock.INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L24) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(BasePowerConverterBlock.FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSmallBlock.java#L33) |

## PowerConverterSuperBigBlock

` public class PowerConverterSuperBigBlock extends BasePowerConverterBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE_DOWN ` | 初值 ` Block.box(4, 0, 4, 12, 8, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L14) |
| ` public static final VoxelShape SHAPE_UP ` | 初值 ` Block.box(4, 8, 4, 12, 16, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L15) |
| ` public static final VoxelShape SHAPE_NORTH ` | 初值 ` Block.box(4, 4, 0, 12, 12, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L16) |
| ` public static final VoxelShape SHAPE_EAST ` | 初值 ` Block.box(8, 4, 4, 16, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L17) |
| ` public static final VoxelShape SHAPE_SOUTH ` | 初值 ` Block.box(4, 4, 8, 12, 12, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L18) |
| ` public static final VoxelShape SHAPE_WEST ` | 初值 ` Block.box(0, 4, 4, 8, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L19) |
| ` public static final int INPUT_TIME ` | 初值 ` 4096 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L21) |
| ` public PowerConverterSuperBigBlock(Properties properties) ` | 执行 ` super(properties, INPUT_TIME) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L23) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/converter/PowerConverterSuperBigBlock.java#L32) |
