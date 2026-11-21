# dev.dubhe.anvilcraft.block.power.generator



## ChargeCollectorBlock

` public class ChargeCollectorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static VoxelShape SHAPE ` | 初值 ` Shapes.or( Block.box(0, 0, 0, 16, 4, 16) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L25) |
| ` public ChargeCollectorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L28) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L37) |
| ` public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 末尾返回 ` ChargeCollectorBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L42) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ChargeCollectorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L51) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.CHARGE_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick() ) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargeCollectorBlock.java#L57) |

## ChargerBlock

` public class ChargerBlock extends BaseEntityBlock implements IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L44) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L45) |
| ` public ChargerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(ChargerBlock.POWERED, false) .setValue(ChargerBlock.OVERLOAD, true) `<br>实现调用 ` this.getStateDefinition().any() .setValue(ChargerBlock.POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L47) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(ChargerBlock.POWERED, false).setValue(ChargerBlock.OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L61) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.CHARGER.get(), (level1, blockPos, _, be) -> be.tick(level1, blockPos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L67) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ChargerBlockEntity(ModBlockEntities.CHARGER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L97) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L108) |
| ` @Override public void tick(BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(ChargerBlock.POWERED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (state.getValue(ChargerBlock.POWERED) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlock(pos, state.cycle(ChargerBlock.POWERED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L118) |
| ` @SuppressWarnings("unchecked") @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L125) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/ChargerBlock.java#L136) |

## CreativeGeneratorBlock

` public class CreativeGeneratorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Block.box(0, 0, 0, 16, 4, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L32) |
| ` public CreativeGeneratorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L34) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L43) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CreativeGeneratorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L63) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.CREATIVE_GENERATOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L69) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L80) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` CreativeGeneratorBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/CreativeGeneratorBlock.java#L85) |

## FeCollectorBlock

` public class FeCollectorBlock extends BetterBaseEntityBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L32)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L40) |
| ` public FeCollectorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition() .any() .setValue(FeCollectorBlock.AXIS, Direction.Axis.X) `<br>实现调用 ` this.getStateDefinition() .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L41) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FeCollectorBlock.AXIS, axis) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L60) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L83) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` state.getValue(FeCollectorBlock.AXIS) == Direction.Axis.X ? FeCollectorBlock.SHAPE_X : FeCollectorBlock.SHAPE_Z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L88) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new FeCollectorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L98) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.FE_COLLECTOR.get(), FeCollectorBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/FeCollectorBlock.java#L104) |

## HeatCollectorBlock

` public class HeatCollectorBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 0, 16, 4, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L25) |
| ` public HeatCollectorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L26) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L35) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.HEAT_COLLECTOR.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L45) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` super.getStateForPlacement(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L50) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.HEAT_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick()) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/HeatCollectorBlock.java#L58) |

## InfiniteCollectorBlock

` public class InfiniteCollectorBlock extends BaseEntityBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 0, 16, 4, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L26) |
| ` public InfiniteCollectorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L27) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L36) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.INFINITE_COLLECTOR.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L46) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` super.getStateForPlacement(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L51) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.INFINITE_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick()) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/InfiniteCollectorBlock.java#L59) |

## VoidEnergyCollectorBlock

` public class VoidEnergyCollectorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static VoxelShape SHAPE ` | 初值 ` Shapes.or( Block.box(0, 0, 0, 16, 4, 16) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L30) |
| ` public VoidEnergyCollectorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L33) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new VoidEnergyCollectorBlockEntity(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L42) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` super.getStateForPlacement(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L48) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.VOID_ENERGY_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick() ) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L58) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L72) |
| ` public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 末尾返回 ` VoidEnergyCollectorBlock.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/generator/VoidEnergyCollectorBlock.java#L77) |
