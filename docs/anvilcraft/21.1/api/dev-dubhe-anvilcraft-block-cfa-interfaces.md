# dev.dubhe.anvilcraft.block.cfa.interfaces



## CelestialForgingAnvilFluidInterfaceBlock

` public class CelestialForgingAnvilFluidInterfaceBlock extends CelestialForgingAnvilInterfaceBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 0, 12, 12, 8), Block.box(4, 9, 6, 12, 22, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L30) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L36) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L37) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L38) |
| ` public CelestialForgingAnvilFluidInterfaceBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L45) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CelestialForgingAnvilFluidInterfaceBlockEntity( ModBlockEntities.CELESTIAL_FORGING_ANVIL_FLUID_INTERFACE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L73) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (type == ModBlockEntities.CELESTIAL_FORGING_ANVIL_FLUID_INTERFACE.get()) ` 成立时提前返回 ` (lvl, pos, st, be) -> ((CelestialForgingAnvilFluidInterfaceBlockEntity) be).serverTick() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilFluidInterfaceBlock.java#L79) |

## CelestialForgingAnvilInterfaceBlock

` public abstract class CelestialForgingAnvilInterfaceBlock extends HorizontalDirectionalBlock implements IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty ACTIVE ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L34) |
| ` public static final VoxelShape BASE_NORTH ` | 由 ` ShapeUtil.merge ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L35) |
| ` public CelestialForgingAnvilInterfaceBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(FACING, Direction.NORTH) .setValue(ACTIVE, false) `<br>实现调用 ` this.getStateDefinition().any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L45) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` ACTIVE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L91) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | ` (!state.hasProperty(ACTIVE)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfaceBlock.java#L96) |

## CelestialForgingAnvilInterfacePlaceholderBlock

` public class CelestialForgingAnvilInterfacePlaceholderBlock extends HorizontalDirectionalBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 0, 12, 12, 8), Block.box(4, 8, 6, 12, 16, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L35) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L41) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L42) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L43) |
| ` public CelestialForgingAnvilInterfacePlaceholderBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any() .setValue(FACING, Direction.NORTH)) `<br>实现调用 ` this.getStateDefinition().any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilInterfacePlaceholderBlock.java#L45) |

## CelestialForgingAnvilLaserInterfaceBlock

` public class CelestialForgingAnvilLaserInterfaceBlock extends CelestialForgingAnvilInterfaceBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 4, 8, 12, 12), Block.box(5, 5, 2, 11, 11, 4), Block.box(4, 8, 6, 12, 16, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L26) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L33) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L34) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L35) |
| ` public CelestialForgingAnvilLaserInterfaceBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L42) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CelestialForgingAnvilLaserInterfaceBlockEntity( ModBlockEntities.CELESTIAL_FORGING_ANVIL_LASER_INTERFACE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L62) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (type == ModBlockEntities.CELESTIAL_FORGING_ANVIL_LASER_INTERFACE.get()) ` 成立时提前返回 ` (lvl, pos, st, be) -> ((CelestialForgingAnvilLaserInterfaceBlockEntity) be).serverTick() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLaserInterfaceBlock.java#L68) |

## CelestialForgingAnvilLogisticsInterfaceBlock

` public class CelestialForgingAnvilLogisticsInterfaceBlock extends CelestialForgingAnvilInterfaceBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape NORTH ` | 初值 ` ShapeUtil.merge( CelestialForgingAnvilInterfaceBlock.BASE_NORTH, Block.box(4, 4, 0, 12, 12, 8), Block.box(4, 8, 6, 12, 16, 14), Block.box(5, 12, 1, 11, 18, 7) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L29) |
| ` public static final VoxelShape WEST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 90, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L35) |
| ` public static final VoxelShape SOUTH ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 180, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L36) |
| ` public static final VoxelShape EAST ` | 初值 ` ShapeUtil.rotate(Direction.Axis.Y, 270, NORTH) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L37) |
| ` public CelestialForgingAnvilLogisticsInterfaceBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L44) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CelestialForgingAnvilLogisticsInterfaceBlockEntity( ModBlockEntities.CELESTIAL_FORGING_ANVIL_LOGISTICS_INTERFACE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L64) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (type == ModBlockEntities.CELESTIAL_FORGING_ANVIL_LOGISTICS_INTERFACE.get()) ` 成立时提前返回 ` (lvl, pos, st, be) -> ((CelestialForgingAnvilLogisticsInterfaceBlockEntity) be).serverTick() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/interfaces/CelestialForgingAnvilLogisticsInterfaceBlock.java#L70) |
