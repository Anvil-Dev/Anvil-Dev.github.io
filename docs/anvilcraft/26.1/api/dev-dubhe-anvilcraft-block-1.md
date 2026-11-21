# dev.dubhe.anvilcraft.block（AncientSeaReefBlock 至 RedstoneWireBlock）



## AncientSeaReefBlock

` public class AncientSeaReefBlock extends Block implements SimpleWaterloggedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L19) |
| ` public AncientSeaReefBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.defaultBlockState().setValue(WATERLOGGED, false)) `<br>实现调用 ` this.defaultBlockState().setValue(WATERLOGGED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L21) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(WATERLOGGED, context.getLevel().getFluidState(context.getClickedPos()).is(Fluids.WATER)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L31) |

## AutoEnchantingTableBlock

` public class AutoEnchantingTableBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AutoEnchantingTableBlock> CODEC ` | 初值 ` simpleCodec(AutoEnchantingTableBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L36) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L37) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L38) |
| ` public static final VoxelShape SHAPE ` | 初值 ` Block.box(0.0, 0.0, 0.0, 16.0, 12.0, 16.0) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L39) |
| ` public AutoEnchantingTableBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState( this.stateDefinition.any() .setValue(POWERED, false) .setValue(OVERLOAD, false) ) `<br>实现调用 ` this.stateDefinition.any() .setValue(POWERED, false) .setValue(OVERLOAD, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L41) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L60) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L65) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` AutoEnchantingTableBlockEntity.createBlockEntity( ModBlockEntities.AUTO_ENCHANTING_TABLE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L75) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | 末尾返回 ` createTickerHelper( type, ModBlockEntities.AUTO_ENCHANTING_TABLE.get(), AutoEnchantingTableBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L81) |
| ` @Override public void animateTick(BlockState state, Level level, BlockPos pos, RandomSource random) ` | 实现调用 ` super.animateTick(state, level, pos, random) `<br>实现调用 ` random.nextInt(16) `<br>实现调用 ` EnchantingTableBlock.isValidBookShelf(level, pos, blockpos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L123) |

## CelestialBackGateBlock

` public class CelestialBackGateBlock extends BaseEntityBlock implements SimpleWaterloggedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L39)

An unbreakable, non-inventory gate generated at a special-planet landing point.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L40) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L41) |
| ` public CelestialBackGateBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(stateDefinition.any() .setValue(FACING, Direction.NORTH) .setValue(WATERLOGGED, false)) `<br>实现调用 ` stateDefinition.any() .setValue(FACING, Direction.NORTH) .setValue(WATERLOGGED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L43) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState() .setValue(FACING, context.getHorizontalDirection()) .setValue(WATERLOGGED, fluidState.getType() == Fluids.WATER && fluidState.isSource()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L65) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L73) |
| ` @Override public BlockState updateShape( BlockState state, LevelReader level, ScheduledTickAccess ticks, BlockPos pos, Direction direction, BlockPos neighborPos, BlockState neighborState, RandomSource random ) ` | 末尾返回 ` super.updateShape(state, level, ticks, pos, direction, neighborPos, neighborState, random) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L78) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CELESTIAL_BACK_GATE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L89) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper(type, ModBlockEntities.CELESTIAL_BACK_GATE.get(), (lvl, pos, blockState, be) -> be.tick()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L94) |
| ` @Override public boolean onDestroyedByPlayer( BlockState state, Level level, BlockPos pos, Player player, ItemStack tool, boolean willHarvest, FluidState fluid ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CelestialBackGateBlock.java#L123) |

## CursedGoldBlock

` public class CursedGoldBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CursedGoldBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedGoldBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CursedGoldBlock.java#L9) |
| ` @Override public float getEnchantPowerBonus(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` -1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/CursedGoldBlock.java#L13) |

## EnchantedGoldBlock

` public class EnchantedGoldBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/EnchantedGoldBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedGoldBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/EnchantedGoldBlock.java#L9) |
| ` @Override public float getEnchantPowerBonus(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 3.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/EnchantedGoldBlock.java#L13) |

## GiantMonolithCoreBlock

` public class GiantMonolithCoreBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L49)

巨型石碑芯（giant\_monolith\_core）：按 3x3x3 多方块落地（同巨型铁砧）， 仅中层中心部件显示整体模型，其余 26 个部件为无碰撞的透明占位。 东西/南北两种朝向沿用水平轴属性，模型默认为南北朝向。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L50) |
| ` public static final EnumProperty<GiantAnvilCube> CUBE ` | 初值 ` EnumProperty.create("cube", GiantAnvilCube.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L51) |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L52) |
| ` public GiantMonolithCoreBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(HALF, Cube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.getStateDefinition().any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L54) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L62) |
| ` @Override public void playerDestroy( Level level, Player player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity, ItemStack tool ) ` | 执行 ` super.playerDestroy(level, player, pos, state.setValue(HALF, Cube3x3PartHalf.MID_CENTER), blockEntity, tool) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L76) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` this.isMainPart(state) ? ModBlockEntities.MONOLITH_CORE.create(pos, state) : null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L83) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide() \|\| type != ModBlockEntities.MONOLITH_CORE.get()) ` 成立时提前返回 ` null `<br>末尾返回 ` (tickLevel, pos, tickState, blockEntity) -> { if (blockEntity instanceof MonolithCoreBlockEntity core) core.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L88) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (!MonolithCoreBlockEntity.acceptsOffering(stack, true)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (!(level.getBlockEntity(mainPos) instanceof MonolithCoreBlockEntity core) \|\| core.isCoolingDown()) ` 成立时提前返回 ` InteractionResult.CONSUME `<br>` (recipes.isEmpty()) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (!core.beginOffering(stack, player, book)) ` 成立时提前返回 ` InteractionResult.CONSUME `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L98) |
| ` public static ItemStack createKnowledgeBook(SpecialCelestialBodyRecipe recipe, long worldSeed) ` | 末尾返回 ` book ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L121) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L137) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L142) |
| ` @Override public BlockState placedState(Cube3x3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state) .setValue(CUBE, part == Cube3x3PartHalf.MID_CENTER ? GiantAnvilCube.CENTER : GiantAnvilCube.CORNER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L147) |
| ` @Override public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` this.defaultBlockState().setValue(AXIS, context.getHorizontalDirection().getAxis()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L153) |
| ` @Override public Vec3i getMainPartOffset() ` | 末尾返回 ` new Vec3i(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L163) |

## HypercubeBlock

` public class HypercubeBlock extends Block implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HypercubeBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HypercubeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HypercubeBlock.java#L13) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.HYPERCUBE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HypercubeBlock.java#L22) |

## HyperdimensionUploaderBlock

` public class HyperdimensionUploaderBlock extends BaseEntityBlock implements ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HyperdimensionUploaderBlock.java#L40)

超维上传站方块。 由「手持已绑定超维终端的玩家右键奇点晶体」转化而来，绑定对应的超维存储站。 内部有 16 格缓存，可通过溜槽 / 漏斗输入输出，缓存内物品会按性能墙限速存入绑定的存储站。 防炸（爆炸抗性 1200 与防爆标签）、防凋零、防龙。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionUploaderBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HyperdimensionUploaderBlock.java#L41) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.HYPERDIMENSION_UPLOADER.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HyperdimensionUploaderBlock.java#L55) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.HYPERDIMENSION_UPLOADER.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HyperdimensionUploaderBlock.java#L61) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/HyperdimensionUploaderBlock.java#L119) |

## LargeCauldronBlock

` public class LargeCauldronBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements MultiPartBlockEntity<Cube3x3PartHalf, LargeCauldronBlock>, IHammerRemovable, ICauldronGeometry, ICauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L59)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean supportsMultipleFluidOutputs() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L62) |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L67) |
| ` public LargeCauldronBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(LargeCauldronBlock.HALF, Cube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L72) |
| ` @Override public Vec3i getMainPartOffset() ` | 末尾返回 ` new Vec3i(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L77) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` LargeCauldronBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L97) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L102) |
| ` @Override public LargeCauldronBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L107) |
| ` @Override public AABB getCauldronInnerArea(BlockPos pos, BlockState state) ` | 末尾返回 ` new AABB( mainPos.getX() - 0.75, mainPos.getY() - 0.5, mainPos.getZ() - 0.75, mainPos.getX() + 1.75, mainPos.getY() + 1.75, mainPos.getZ() + 1.75 ) `<br>[调用处 LargeCauldronBlock.stepOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L356) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L112) |
| ` @Override public List<BlockPos> getCauldronBottomPositions(BlockPos pos, BlockState state) ` | 末尾返回 ` BlockPos.betweenClosedStream(center.offset(-1, 0, -1), center.offset(1, 0, 1)) .map(BlockPos::immutable) .toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L125) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` this.createBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L133) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.LARGE_CAULDRON.create(pos, state) `<br>[调用处 LargeCauldronBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L138) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` PropelPistonBlock.createTickerHelper( type, ModBlockEntities.LARGE_CAULDRON.get(), LargeCauldronBlockEntity::serverTick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L143) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (BlockPlacementPicking.hasFullPlacementShape(state, context)) ` 成立时提前返回 ` Shapes.block() `<br>末尾返回 ` this.getPartShape(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L158) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 末尾返回 ` LargeCauldronBlock.SHAPES.get(state.getValue(LargeCauldronBlock.HALF)) `<br>[调用处 LargeCauldronBlock.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L163) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L166) |
| ` @Override public boolean isLadder(BlockState state, LevelReader level, BlockPos pos, LivingEntity entity) ` | 末尾返回 ` LargeCauldronBlock.touchesWall(state, pos, entity.getBoundingBox()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L171) |
| ` public static @Nullable BlockPos findClimbableWall(LevelReader level, LivingEntity entity) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L176) |
| ` @Override public boolean hasDynamicLightEmission(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L242) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` level.getBlockEntity(mainPos) instanceof LargeCauldronBlockEntity cauldron ? cauldron.getLightLevel() : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L247) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L255) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` level.isClientSide() `<br>分支 ` (!level.isClientSide() && entity instanceof ItemEntity item) ` 内调用 ` LargeCauldronBlockEntity.getMain(level, pos, state) `<br>分支 ` (!level.isClientSide() && entity instanceof ItemEntity item) ` 内调用 ` this.getCauldronInnerArea(pos, state).intersects(item.getBoundingBox()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L352) |

## LargeCauldronBlock.Item

` public static class Item extends SimpleMultiPartBlockItem<Cube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L419)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Item(LargeCauldronBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L420) |

## MonolithBlock

` public class MonolithBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L25)

普通石碑方块，采用类似原版蘑菇块的六面独立纹理机制 与任意石碑类方块接触过的面转化为 monolith\_inner

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty NORTH ` | 初值 ` BooleanProperty.create("north") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L26) |
| ` public static final BooleanProperty EAST ` | 初值 ` BooleanProperty.create("east") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L27) |
| ` public static final BooleanProperty SOUTH ` | 初值 ` BooleanProperty.create("south") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L28) |
| ` public static final BooleanProperty WEST ` | 初值 ` BooleanProperty.create("west") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L29) |
| ` public static final BooleanProperty UP ` | 初值 ` BooleanProperty.create("up") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L30) |
| ` public static final BooleanProperty DOWN ` | 初值 ` BooleanProperty.create("down") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L31) |
| ` public MonolithBlock(BlockBehaviour.Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(NORTH, true) .setValue(EAST, true) .setValue(SOUTH, true) `<br>实现调用 ` this.stateDefinition.any() .setValue(NORTH, true) .setValue(EAST, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L41) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getLevel() `<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` this.defaultBlockState() .setValue(DOWN, !level.getBlockState(pos.below()).is(ModBlockTags.MONOLITH_BLOCKS)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithBlock.java#L54) |

## MonolithCoreBlock

` public class MonolithCoreBlock extends MonolithLineBlock implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MonolithCoreBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L21) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.MONOLITH_CORE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L25) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide() \|\| type != ModBlockEntities.MONOLITH_CORE.get()) ` 成立时提前返回 ` null `<br>末尾返回 ` (tickLevel, pos, tickState, blockEntity) -> { if (blockEntity instanceof MonolithCoreBlockEntity core) core.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithCoreBlock.java#L30) |

## MonolithLineBlock

` public class MonolithLineBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L16)

石碑线装饰方块：只有东西/南北两种水平朝向（模型默认为南北朝向）， 放置时按玩家视角方向确定朝向。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L17) |
| ` public MonolithLineBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(AXIS, Direction.Axis.Z)) `<br>实现调用 ` getStateDefinition().any().setValue(AXIS, Direction.Axis.Z) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L19) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(AXIS, context.getHorizontalDirection().getAxis()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/MonolithLineBlock.java#L24) |

## ProcessingTableBlock

` public abstract class ProcessingTableBlock extends Block implements SimpleWaterloggedBlock, IHammerRemovable, IMoveableEntityBlock, IItemSuctionContainer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L45)

加工台方块公共父类：冲压台、粉碎台、过筛台、拆包台的公共行为与水浸逻辑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L47) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L81) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` state.setValue(WATERLOGGED, fluidState.getType() == Fluids.WATER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L106) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` itemEntity.anvilcraft$isAdsorbable() `<br>实现调用 ` level.getCapability(Capabilities.Item.BLOCK, pos, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L136) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L170) |
| ` @Override public BlockState updateShape( BlockState state, LevelReader level, ScheduledTickAccess ticks, BlockPos pos, Direction direction, BlockPos neighborPos, BlockState neighborState, RandomSource random ) ` | 末尾返回 ` super.updateShape(state, level, ticks, pos, direction, neighborPos, neighborState, random) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L175) |
| ` @Override public ItemStack getCloneItemStack( LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player ) ` | ` (player.getAbilities().instabuild) ` 成立时提前返回 ` new ItemStack(this) `<br>末尾返回 ` ModBlocks.STAMPING_PLATFORM.asStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L186) |

## RadioactiveBlock

` public class RadioactiveBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RadioactiveBlock.java#L19)

放射性储存块（铀块、钚块）。 钚块在随机刻检测六向相邻方块，只要任意一面接触冰、水或含水方块就不会融毁； 六面均未接触冰、水或含水方块时融毁为岩浆块。铀块不会融毁。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RadioactiveBlock(Properties properties, boolean meltdownEnabled) ` | 实现调用 ` super(meltdownEnabled ? properties.randomTicks() : properties) `<br>实现调用 ` properties.randomTicks() `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L3129) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RadioactiveBlock.java#L22) |

## RedstoneWireBlock

` public class RedstoneWireBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L45)

可附着在任意方块表面的无衰减红石导线。 四个方向属性描述的是附着面内的局部方向，而不是固定的世界水平面方向。相邻导线通过几何端点组成网络，只有断口才会与外部红石元件交换信号。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<ConnectionType> NORTH ` | 附着面内四个局部方向的连接外观。<br>初值 ` EnumProperty.create("north", ConnectionType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L47) |
| ` public static final EnumProperty<ConnectionType> EAST ` | 初值 ` EnumProperty.create("east", ConnectionType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L48) |
| ` public static final EnumProperty<ConnectionType> SOUTH ` | 初值 ` EnumProperty.create("south", ConnectionType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L49) |
| ` public static final EnumProperty<ConnectionType> WEST ` | 初值 ` EnumProperty.create("west", ConnectionType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L50) |
| ` public static final List<EnumProperty<ConnectionType>> CONNECTION_PROPERTIES ` | 初值 ` List.of(RedstoneWireBlock.NORTH, RedstoneWireBlock.EAST, RedstoneWireBlock.SOUTH, RedstoneWireBlock.WEST) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L51) |
| ` public static final EnumProperty<Direction> ATTACHMENT ` | 从导线位置指向其支撑方块的方向。<br>初值 ` EnumProperty.create("attachment", Direction.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L58) |
| ` public static final BooleanProperty DOT ` | 是否在中心绘制接线点。<br>初值 ` BooleanProperty.create("dot") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L60) |
| ` public RedstoneWireBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(RedstoneWireBlock.NORTH, ConnectionType.SIDE) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L124) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.connectionState(context.getLevel(), context.getClickedPos(), state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L136) |
| ` public static void neighborChangedAroundSupport(Level level, BlockPos targetPos, Block changedBlock) ` | 将元件的邻居更新传给同一支撑方块其他表面的导线。<br>实现调用 ` Direction.values() `<br>实现调用 ` RedstoneWireBlock.getLocalDirection(first, index) `<br>实现调用 ` first.getAxis().ordinal() `<br>[调用处 BlockEventListener.updateCornerWires](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L293) |
| ` @Override public boolean canConnectRedstone( BlockState state, BlockGetter level, BlockPos pos, @Nullable Direction direction ) ` | ` (index < 0 \|\| !state.getValue(RedstoneWireBlock.CONNECTION_PROPERTIES.get(index)).isConnected() \|\| direction == null && !RedstoneWireBlock.hasCornerConnection(level, pos, state, index)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.isOpenTerminal(level, pos, state, index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L347) |
| ` public static int getUpwardDustSignal(BlockGetter level, BlockPos dustPos) ` | 供原版红石粉采样斜下方导线的非粉线信号，避免该特殊连接只改变外观。<br>末尾返回 ` power `<br>[调用处 RedstoneWireBlockMixin.anvilcraft$includeUpwardWireSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/RedstoneWireBlockMixin.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L448) |
| ` public static int getCornerSignal(BlockGetter level, BlockPos cornerPos, Direction direction) ` | 将绕过支撑方块边缘的开放端点信号提供给元件对应面的输入查询。<br>` (RedstoneWireNetworkManager.isSuppressingSignal() \|\| level.getBlockState(cornerPos).isRedstoneConductor(level, cornerPos)) ` 成立时提前返回 ` 0 `<br>` (!RedstoneWireBlock.canAttachTo(level, targetPos, level.getBlockState(targetPos), attachment)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` power `<br>[调用处 SignalGetterMixin.anvilcraft$includeCornerWireSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/SignalGetterMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L474) |
| ` public boolean reattach(Level level, BlockPos pos, BlockState state) ` | 不消耗物品，将已有导线改挂到玩家新点击的支撑面。<br>` (!state.is(this) \|\| !state.canSurvive(level, pos) \|\| !level.setBlock(pos, state, Block.UPDATE_ALL)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L980) |
| ` public boolean editConnection( Level level, BlockPos pos, BlockState state, Vec3 hitLocation, boolean directHit ) ` | 根据附着面内的点击位置编辑最近的端口，不消耗手中的导线。<br>末尾返回 ` RedstoneWireNetworkManager.editConnection(level, pos, state, clicked.index(), clicked.onConnectionSegment(), clicked.turnIndex()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L997) |
| ` public static Direction getLocalDirection(Direction attachment, int index) ` | 将附着面内的方向索引转换为世界方向。<br>实现调用 ` attachment.getOpposite() `<br>实现调用 ` RedstoneWireBlock.cross(north, outward) `<br>实现调用 ` north.getOpposite() `<br>[调用处 RedstoneWireNetworkManager.LevelNetworks.buildNetwork](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L1047) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1072) |
| ` public static float[] transformBox( Direction attachment, Direction tangent, double minX, double minY, double minZ, double maxX, double maxY, double maxZ ) ` | 将附着面局部坐标中的轴对齐盒转换为世界方块坐标中的包围盒。<br>返回 依次为最小 XYZ 和最大 XYZ 的六元素数组<br>末尾返回 ` new float[] {(float) bounds[0], (float) bounds[1], (float) bounds[2], (float) bounds[3], (float) bounds[4], (float) bounds[5]} `<br>[调用处 RedstoneWireBlockStateGenerator.addBox](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L267) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1113) |
| ` public static Direction transformDirection( Direction attachment, Direction tangent, Direction localDirection ) ` | 将附着面局部方向转换为世界方向。<br>末尾返回 ` Objects.requireNonNull(Direction.getNearest(x, y, z, null)) `<br>[调用处 RedstoneWireBlockStateGenerator.addBox](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L273) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1154) |
