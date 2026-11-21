# dev.dubhe.anvilcraft.block.cfa.interfaces



## CelestialForgingAnvilFluidInterfaceBlock

` public class CelestialForgingAnvilFluidInterfaceBlock extends CelestialForgingAnvilInterfaceBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 0, 12, 12, 8), Block.box(4, 9, 6, 12, 22, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L30) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, CelestialForgingAnvilFluidInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L36) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, CelestialForgingAnvilFluidInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L37) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, CelestialForgingAnvilFluidInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L38) |
| ` public CelestialForgingAnvilFluidInterfaceBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L45) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CelestialForgingAnvilFluidInterfaceBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L73) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (type == ModBlockEntities.CELESTIAL_FORGING_ANVIL_FLUID_INTERFACE.get()) ` 成立时提前返回 ` (lvl, pos, st, be) -> ((CelestialForgingAnvilFluidInterfaceBlockEntity) be).serverTick() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L78) |

## CelestialForgingAnvilInterfaceBlock

` public abstract class CelestialForgingAnvilInterfaceBlock extends HorizontalDirectionalBlock implements IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty ACTIVE ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L34) |
| ` public static final VoxelShape BASE_NORTH ` | 由 ` ShapeUtil.merge ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L35) |
| ` public CelestialForgingAnvilInterfaceBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(FACING, Direction.NORTH) .setValue(ACTIVE, false) `<br>实现调用 ` this.getStateDefinition().any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L45) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 用铁砧锤右键在主动/被动模式之间切换（替代红石信号控制）。 返回 ACTIVE 属性使锤子选择轮切换主被动并预览两种模型， 而非旋转朝向——接口的朝向必须始终指向锻星砧。<br>末尾返回 ` ACTIVE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L68) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | ` (!state.hasProperty(ACTIVE)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L73) |

## CelestialForgingAnvilInterfacePlaceholderBlock

` public class CelestialForgingAnvilInterfacePlaceholderBlock extends HorizontalDirectionalBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 0, 12, 12, 8), Block.box(4, 8, 6, 12, 16, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L34) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L40) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L41) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L42) |
| ` public CelestialForgingAnvilInterfacePlaceholderBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any() .setValue(FACING, Direction.NORTH)) `<br>实现调用 ` this.getStateDefinition().any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L44) |

## CelestialForgingAnvilLaserInterfaceBlock

` public class CelestialForgingAnvilLaserInterfaceBlock extends CelestialForgingAnvilInterfaceBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 4, 8, 12, 12), Block.box(5, 5, 2, 11, 11, 4), Block.box(4, 8, 6, 12, 16, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L26) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, CelestialForgingAnvilLaserInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L33) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, CelestialForgingAnvilLaserInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L34) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, CelestialForgingAnvilLaserInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L35) |
| ` public CelestialForgingAnvilLaserInterfaceBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L42) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CelestialForgingAnvilLaserInterfaceBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L62) |
| ` @Override @SuppressWarnings("unchecked") public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (type == ModBlockEntities.CELESTIAL_FORGING_ANVIL_LASER_INTERFACE.get()) ` 成立时提前返回 ` (lvl, pos, st, be) -> { if (level.isClientSide()) { ((CelestialForgingAnvilLaserInterfaceBlockEntity) be).tick(lvl); } else { ((CelestialForgingAnvilLaserInterfaceBlockEntity) be).serverTick(); } } `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L67) |

## CelestialForgingAnvilLogisticsInterfaceBlock

` public class CelestialForgingAnvilLogisticsInterfaceBlock extends CelestialForgingAnvilInterfaceBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 0, 12, 12, 8), Block.box(4, 8, 6, 12, 16, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L30) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, CelestialForgingAnvilLogisticsInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L36) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, CelestialForgingAnvilLogisticsInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L37) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, CelestialForgingAnvilLogisticsInterfaceBlock.NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L38) |
| ` public CelestialForgingAnvilLogisticsInterfaceBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L45) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CelestialForgingAnvilLogisticsInterfaceBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L65) |
| ` @Override @SuppressWarnings("unchecked") public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (type == ModBlockEntities.CELESTIAL_FORGING_ANVIL_LOGISTICS_INTERFACE.get()) ` 成立时提前返回 ` (lvl, pos, st, be) -> ((CelestialForgingAnvilLogisticsInterfaceBlockEntity) be).serverTick() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L70) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L83) |
