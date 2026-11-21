# dev.dubhe.anvilcraft.block.special



## BlackHoleBlock

` public class BlackHoleBlock extends Block implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape MODEL ` | 初值 ` Block.box(4, 4, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L16) |
| ` public BlackHoleBlock(Properties properties) ` | 执行 ` super(properties.forceSolidOn()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L18) |
| ` @Override public VoxelShape getShape(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` BlackHoleBlock.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L22) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 执行 ` super.onPlace(state, level, pos, oldState, movedByPiston) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L27) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BlackHoleBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L32) |

## PlasmaJetsBlock

` public class PlasmaJetsBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlasmaJetsBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L29) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean trySpawn(BlockPos pos, Level level) ` | ` ( !PlasmaJetsBlock.isIgnitedOilCauldron(level, pos.below()) \|\| !heater.is(ModBlocks.HEATER) \|\| !((HeaterBlock) heater.getBlock()).isActive(heater) ) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FireCauldronBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L38) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` createTickerHelper(type, ModBlockEntities.PLASMA_JETS.get(), PlasmaJetsBlockEntity::tick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L85) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.PLASMA_JETS.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L90) |
| ` @SuppressWarnings("deprecation") public static boolean isIgnitedOilCauldron(Level level, BlockPos pos) ` | ` (PlasmaJetHooks.isIgnitedFuel(level, pos)) ` 成立时提前返回 ` true `<br>` (!(cache.getBlockState(pos).getBlock() instanceof IIgnitableCauldron cauldron)) ` 成立时提前返回 ` false `<br>末尾返回 ` cauldron.isIgnited(cache, pos) && cauldron.getFluid(cache, pos).is(ModFluidTags.OIL) `<br>[调用处 PlasmaJetsBlock.trySpawn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L95) |
| ` @SuppressWarnings("deprecation") public static boolean isValidBaseCauldron(Level level, BlockPos pos) ` | ` (override != null) ` 成立时提前返回 ` override `<br>` (!(cache.getBlockState(pos).getBlock() instanceof IIgnitableCauldron cauldron)) ` 成立时提前返回 ` false `<br>末尾返回 ` cauldron.isEmpty(cache, pos) \|\| cauldron.getFluid(cache, pos).is(ModFluidTags.OIL) `<br>[调用处 PlasmaJetsBlockEntity.checkTubeWallIntegrity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L232) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L103) |
| ` public static OptionalInt tryConsumeOnce(Level level, BlockPos pos, boolean simulate) ` | ` (override.isPresent()) ` 成立时提前返回 ` override `<br>` (!(cache.getBlockState(pos).getBlock() instanceof IIgnitableCauldron cauldron)) ` 成立时提前返回 ` OptionalInt.empty() `<br>末尾返回 ` extraDuration `<br>[调用处 PlasmaJetsBlockEntity.refreshDuration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L267) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L112) |

## WhiteHoleBlock

` public class WhiteHoleBlock extends Block implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/WhiteHoleBlock.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape MODEL ` | 初值 ` Block.box(4, 4, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/WhiteHoleBlock.java#L17) |
| ` @Override public VoxelShape getShape(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` WhiteHoleBlock.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/WhiteHoleBlock.java#L19) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 执行 ` super.onPlace(state, level, pos, oldState, movedByPiston) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/WhiteHoleBlock.java#L24) |
| ` public WhiteHoleBlock(Properties properties) ` | 执行 ` super(properties.forceSolidOn()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/WhiteHoleBlock.java#L40) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new WhiteHoleBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/WhiteHoleBlock.java#L44) |
