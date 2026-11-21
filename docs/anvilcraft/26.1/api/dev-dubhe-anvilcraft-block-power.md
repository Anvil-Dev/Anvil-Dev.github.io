# dev.dubhe.anvilcraft.block.power



## HeliostatsBlock

` public class HeliostatsBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Stream.of( Block.box(0, 0, 0, 16, 4, 16), Block.box(4, 4, 4, 12, 6, 12), Block.box(6, 6, 6, 10, 22, 10) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)).get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L27) |
| ` public static final VoxelShape COLLISION_SHAPE ` | 初值 ` Stream.of( Block.box(0, 0, 0, 16, 4, 16), Block.box(4, 4, 4, 12, 6, 12) ).reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)).get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L34) |
| ` public HeliostatsBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L40) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` HeliostatsBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L49) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L58) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new HeliostatsBlockEntity(ModBlockEntities.HELIOSTATS.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L63) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | 末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.HELIOSTATS.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/HeliostatsBlock.java#L79) |

## LoadMonitorBlock

` public class LoadMonitorBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Stream.of(Block.box(3, 0, 3, 13, 4, 13), Block.box(5, 4, 5, 11, 16, 11)) .reduce((v1, v2) -> Shapes.join(v1, v2, BooleanOp.OR)) .get() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L34) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L38) |
| ` public static final IntegerProperty LOAD ` | 初值 ` IntegerProperty.create("load", 0, 10) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L39) |
| ` public LoadMonitorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.defaultBlockState().setValue(LoadMonitorBlock.OVERLOAD, true).setValue(LoadMonitorBlock.LOAD, 10) `<br>实现调用 ` this.defaultBlockState().setValue(LoadMonitorBlock.OVERLOAD, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L41) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.LOAD_MONITOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L79) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new LoadMonitorBlockEntity(ModBlockEntities.LOAD_MONITOR.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L90) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L96) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` LoadMonitorBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/LoadMonitorBlock.java#L101) |

## PiezoelectricCrystalBlock

` public class PiezoelectricCrystalBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Map<Block, List<Integer>> ANVIL_TYPES ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L26) |
| ` public static VoxelShape SHAPE ` | 初值 ` Shapes.or(Block.box(0, 14, 0, 16, 16, 16), Block.box(2, 2, 2, 14, 14, 14), Block.box(0, 0, 0, 16, 2, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L39) |
| ` public PiezoelectricCrystalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L42) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L46) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` PiezoelectricCrystalBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L51) |
| ` public void onHitByAnvil(FallingBlockEntity entity, float fallDistance, Level level, BlockPos blockPos) ` | 被铁砧砸事件<br>实现调用 ` level.getBlockTicks().hasScheduledTick(blockPos, this) `<br>实现调用 ` level.getBlockTicks() `<br>实现调用 ` PiezoelectricCrystalBlock.ANVIL_TYPES.get(entity.blockState.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L66) |
