# dev.dubhe.anvilcraft.block.workstation（BurningHeaterBlock 至 TransparentCraftingTableBlock）



## BurningHeaterBlock

` public class BurningHeaterBlock extends BaseEntityBlock implements IHammerRemovable, IDamagingHeater `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L34)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IntegerProperty LEVEL ` | 燃烧等级：0=熄灭，1=阴燃(0-300s)，2=点燃(≥300s)<br>初值 ` IntegerProperty.create("level", 0, 2) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L39) |
| ` public BurningHeaterBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(BurningHeaterBlock.LEVEL, 0)) `<br>实现调用 ` this.stateDefinition.any().setValue(BurningHeaterBlock.LEVEL, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L41) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BurningHeaterBlockEntity(ModBlockEntities.BURNING_HEATER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L51) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L57) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | 末尾返回 ` BaseEntityBlock.createTickerHelper(type, ModBlockEntities.BURNING_HEATER.get(), (lvl, pos, st, entity) -> entity.tick(lvl, pos, st)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L68) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` HeaterUtil.hurtEntity(level, state, entity) `<br>实现调用 ` super.stepOn(level, pos, state, entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L137) |
| ` @Override public boolean isActive(BlockState state) ` | 末尾返回 ` state.getValue(BurningHeaterBlock.LEVEL) > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L143) |

## ConfinementChamberBlock

` public class ConfinementChamberBlock extends BaseEntityBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ConfinementChamberBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ConfinementChamberBlock.java#L26) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ConfinementChamberBlockEntity(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ConfinementChamberBlock.java#L35) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ConfinementChamberBlock.java#L62) |

## CorruptedBeaconBlock

` public class CorruptedBeaconBlock extends BeaconBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty LIT ` | 初值 ` BlockStateProperties.LIT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L27) |
| ` @Override public @Nullable Integer getBeaconColorMultiplier( BlockState state, LevelReader level, BlockPos pos, BlockPos beaconPos) ` | 末尾返回 ` 0xffffff ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L29) |
| ` public CorruptedBeaconBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` defaultState.equals(this.stateDefinition.any()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L35) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` Objects.requireNonNull(super.getStateForPlacement(context)).setValue(CorruptedBeaconBlock.LIT, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L45) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new CorruptedBeaconBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L68) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | 末尾返回 ` CorruptedBeaconBlock.createTickerHelper( blockEntityType, ModBlockEntities.CORRUPTED_BEACON.get(), CorruptedBeaconBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CorruptedBeaconBlock.java#L73) |

## CrushingTableBlock

` public class CrushingTableBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CrushingTableBlock.java#L13)

粉碎台：在台面上放置原料，铁砧砸落时执行粉碎配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrushingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CrushingTableBlock.java#L14) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CRUSHING_TABLE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/CrushingTableBlock.java#L18) |

## FishTankBlock

` public class FishTankBlock extends Block implements IMoveableEntityBlock, HammerRotateBehavior, IHammerRemovable, IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty TROPICAL ` | 初值 ` BooleanProperty.create("tropical") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L68) |
| ` public static final BooleanProperty OUTLET ` | 初值 ` BooleanProperty.create("outlet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L69) |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L70) |
| ` public static final VoxelShape SHAPE ` | 初值 ` ShapeUtil.cut( Shapes.block(), Block.box(2.0, 14.0, 2.0, 14.0, 16.0, 14.0), Block.box(1.0, 1.0, 1.0, 15.0, 14.0, 15.0) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L72) |
| ` public FishTankBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(FishTankBlock.TROPICAL, false) .setValue(FishTankBlock.OUTLET, false) `<br>实现调用 ` this.stateDefinition.any() .setValue(FishTankBlock.TROPICAL, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L78) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FishTankBlock.FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L118) |
| ` @Override public boolean hasDynamicLightEmission(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L151) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | ` (manager == null) ` 成立时提前返回 ` 0 `<br>末尾返回 ` manager.getLightAt(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L156) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 实现调用 ` this.isIgnited(new BlockCache(level), pos) `<br>实现调用 ` level.getBlockState(pos.below()).is(ModBlocks.HEATER) `<br>实现调用 ` level.getBlockState(pos.below()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L163) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` entity.isOnFire() `<br>分支 ` (entity.isOnFire()) ` 内调用 ` this.tryIgnite(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L192) |
| ` public InteractionResult changeOutlet(Level level, BlockPos pos, BlockState state, Player player, Direction outletDir) ` | 末尾返回 ` InteractionResult.SUCCESS `<br>[调用处 FishTankBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L259) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L269) |
| ` public boolean tryIgnite(Level level, BlockPos pos) ` | ` (!(level.getBlockEntity(pos) instanceof FishTankBlockEntity tank)) ` 成立时提前返回 ` false `<br>` (!FishTankBlockEntity.canIgnite(tank.getFluidHandler().getStack())) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FishTankBlock.stepOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L196) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L288) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.FISH_TANK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L323) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` PropelPistonBlock.createTickerHelper( type, ModBlockEntities.FISH_TANK.get(), FishTankBlockEntity::serverTick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L328) |
| ` @Override public boolean isEmpty(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .map(be -> be.getFluidHandler().getAmountAsLong(0) == 0) .orElseThrow() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L342) |
| ` @Override public boolean isIgnited(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .map(FishTankBlockEntity::isIgnited) .orElseThrow() `<br>[调用处 FishTankBlock.onPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L165) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L349) |
| ` @Override public void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 执行 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .ifPresent(be -> be.setIgnited(ignited)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L356) |
| ` @Override public Fluid getFluid(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .map(be -> be.getFluidHandler().getStack().getFluid()) .orElseThrow() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L362) |
| ` @Override public int getFluidAmount(BlockCache cache, BlockPos pos) ` | 末尾返回 ` cache.getBlockEntity(pos) instanceof FishTankBlockEntity tank ? tank.getFluidHandler().getAmountAsInt(0) : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L369) |
| ` @Override public OptionalInt consumeOnce(BlockCache cache, BlockPos pos, boolean simulate) ` | ` (!(cache.getBlockEntity(pos) instanceof FishTankBlockEntity tank)) ` 成立时提前返回 ` OptionalInt.empty() `<br>` (fluid.isEmpty() \|\| !fluid.getFluid().is(ModFluidTags.OIL)) ` 成立时提前返回 ` OptionalInt.empty() `<br>末尾返回 ` OptionalInt.of(AnvilCraft.CONFIG.machines.plasmaJets.fishTankExtraDuration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L374) |

## GiantAnvilBlock

` public class GiantAnvilBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements Fallable, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ThreadLocal<Boolean> SUPPRESS_DROPS ` | 初值 ` ThreadLocal.withInitial(() -> false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L71) |
| ` public static final SoundType SOUND_TYPE ` | 初值 ` new DeferredSoundType( 0.55F, 0.45F, () -> SoundEvents.ANVIL_BREAK, () -> SoundEvents.ANVIL_STEP, () -> SoundEvents.ANVIL_PLACE, () -> SoundEvents.ANVIL_HIT, () -> SoundEvents.ANVIL_FALL ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L72) |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L81) |
| ` public static final EnumProperty<GiantAnvilCube> CUBE ` | 初值 ` EnumProperty.create("cube", GiantAnvilCube.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L82) |
| ` public GiantAnvilBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(GiantAnvilBlock.HALF, Cube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L193) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 实现调用 ` state.getValue(GiantAnvilBlock.HALF) `<br>实现调用 ` Shapes.block() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L201) |
| ` @Override public BlockState placedState(Cube3x3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state) .setValue(GiantAnvilBlock.CUBE, part == Cube3x3PartHalf.MID_CENTER ? GiantAnvilCube.CENTER : GiantAnvilCube.CORNER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L224) |
| ` @Override public BlockState getModelHolderState(BlockState original) ` | 末尾返回 ` original.setValue(GiantAnvilBlock.HALF, Cube3x3PartHalf.MID_CENTER).setValue(GiantAnvilBlock.CUBE, GiantAnvilCube.CENTER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L230) |
| ` public static BlockState damage(BlockState state) ` | 末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L240) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` GiantAnvilBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L244) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L282) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L249) |
| ` public void onLand( Level level, BlockPos pos, BlockState state, @SuppressWarnings("unused") BlockState replaceableState, FallingBlockEntity fallingBlock, float fallDistance ) ` | 落地<br>实现调用 ` level.setBlockAndUpdate(pos, Blocks.AIR.defaultBlockState()) `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` pos.below() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L265) |
| ` @Override public DamageSource getFallDamageSource(Entity entity) ` | 末尾返回 ` ModDamageTypes.fallingGiantAnvil(entity.level(), entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L301) |
| ` @Override public Vec3i getMainPartOffset() ` | 末尾返回 ` new Vec3i(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L306) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` NeoForge.EVENT_BUS.post(new GiantAnvilEvent.BlockTick(this, state, level, pos, random)).isCanceled() `<br>实现调用 ` NeoForge.EVENT_BUS.post(new GiantAnvilEvent.BlockTick(this, state, level, pos, random)) `<br>实现调用 ` level.getBlockState(pos.subtract(state.getValue(GiantAnvilBlock.HALF).getOffset()).above(3)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L311) |
| ` @Override public void removePartsAndUpdate(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` blockState.is(this) `<br>实现调用 ` this.getMainPartPos(pos, blockState).below() `<br>[调用处 GiantAnvilBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L345) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L350) |
| ` @Override public void onPlace( BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston ) ` | 实现调用 ` state.hasProperty(GiantAnvilBlock.HALF) `<br>分支 ` (state.hasProperty(GiantAnvilBlock.HALF)) ` 内调用 ` pos.subtract(state.getValue(GiantAnvilBlock.HALF).getOffset()) `<br>分支 ` (state.hasProperty(GiantAnvilBlock.HALF)) ` 内调用 ` state.getValue(GiantAnvilBlock.HALF).getOffset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L381) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L415) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (syncId, inventory, player) -> new AnvilMenu(syncId, inventory, ContainerLevelAccess.create(level, pos)), GiantAnvilBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L433) |
| ` @Override public List<ItemStack> getDrops(BlockState state, LootParams.Builder params) ` | ` (GiantAnvilBlock.SUPPRESS_DROPS.get()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` super.getDrops(state, params) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L443) |

## JewelCraftingTable

` public class JewelCraftingTable extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Shapes.or( Block.box(0, 0, 0, 3, 2, 3), Block.box(13, 0, 0, 16, 2, 3), Block.box(13, 0, 13, 16, 2, 16), Block.box(0, 0, 13, 3, 2, 16), Block.box(0, 2, 0, 16, 12, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L35) |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L41) |
| ` public JewelCraftingTable(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any().setValue(JewelCraftingTable.FACING, Direction.NORTH) `<br>实现调用 ` this.getStateDefinition().any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L43) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(JewelCraftingTable.FACING, rotation.rotate(state.getValue(JewelCraftingTable.FACING))) `<br>[调用处 JewelCraftingTable.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L48) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(JewelCraftingTable.FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L53) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(JewelCraftingTable.FACING, context.getHorizontalDirection().getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L58) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` JewelCraftingTable.SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/JewelCraftingTable.java#L70) |

## NeoforgeBlock

` public class NeoforgeBlock extends BetterAnvilBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component CONTAINER_TITLE ` | 初值 ` Component.translatable("container.repair") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L48) |
| ` @Override public MapCodec<AnvilBlock> codec() ` | 末尾返回 ` BlockBehaviour.simpleCodec(NeoforgeBlock::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L50) |
| ` public NeoforgeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L55) |
| ` @SuppressWarnings("UnreachableCode") @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (menuProvider == null) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L59) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities(AnvilCraft.CONFIG.world.neoforgeFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L93) |
| ` @Override public void fallOn(Level level, BlockState state, BlockPos pos, Entity entity, double fallDistance) ` | 分支 ` (entity instanceof Player) ` 内调用 ` level.playSound(null, pos, ModSoundEvents.NEOFORGE_LAND.get(), SoundSource.BLOCKS, 1.0F, 1.0F) `<br>分支 ` (entity instanceof Player) ` 内调用 ` ModSoundEvents.NEOFORGE_LAND.get() `<br>实现调用 ` super.fallOn(level, state, pos, entity, fallDistance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L102) |
| ` public static void damage(Level level, BlockPos pos) ` | 实现调用 ` level.setBlockAndUpdate(pos, Blocks.AIR.defaultBlockState()) `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` level.levelEvent(1029, pos, 0) `<br>[调用处 AnvilEventListener.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeoforgeBlock.java#L110) |

## NeutronIrradiatorBlock

` public class NeutronIrradiatorBlock extends BaseEntityBlock implements IHammerRemovable, INegativeMatterBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static VoxelShape MODEL ` | 由 ` Shapes.or ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L32) |
| ` public static final EnumProperty<IrradiatorType> TYPE ` | 初值 ` EnumProperty.create("type", IrradiatorType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L41) |
| ` @Override public VoxelShape getShape(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` NeutronIrradiatorBlock.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L43) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 执行 ` super.onPlace(state, level, pos, oldState, movedByPiston) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L48) |
| ` public NeutronIrradiatorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(NeutronIrradiatorBlock.TYPE, IrradiatorType.NEUTRON) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L69) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new NeutronIrradiatorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L79) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` BaseEntityBlock.createTickerHelper(type, ModBlockEntities.NEUTRON_IRRADIATOR.get(), (level1, pos, state1, entity) -> entity.tick(level1, pos, state1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L85) |
| ` @Override public void animateTick(BlockState state, Level level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(NeutronIrradiatorBlock.TYPE) `<br>实现调用 ` random.nextInt(8) `<br>实现调用 ` level.getBlockState(pos.offset(i, 0, j)).getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/NeutronIrradiatorBlock.java#L92) |

## SiftingTableBlock

` public class SiftingTableBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SiftingTableBlock.java#L13)

过筛台：在台面上放置原料，铁砧砸落时执行过筛配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SiftingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SiftingTableBlock.java#L14) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.SIFTING_TABLE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SiftingTableBlock.java#L18) |

## SpaceOvercompressorBlock

` public class SpaceOvercompressorBlock extends BetterBaseEntityBlock implements IHammerRemovable, IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpaceOvercompressorBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpaceOvercompressorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpaceOvercompressorBlock.java#L16) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new SpaceOvercompressorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpaceOvercompressorBlock.java#L25) |

## SpectralAnvilBlock

` public class SpectralAnvilBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L41) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L42) |
| ` public SpectralAnvilBlock(Properties properties) ` | 幻灵铁砧<br>实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(SpectralAnvilBlock.FACING, Direction.NORTH) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L53) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` direction.getAxis() == Direction.Axis.X ? SpectralAnvilBlock.X_AXIS_AABB : SpectralAnvilBlock.Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L60) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` this.defaultBlockState() .setValue(SpectralAnvilBlock.FACING, context.getHorizontalDirection().getClockWise()) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` context.getHorizontalDirection().getClockWise() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L76) |
| ` @Nullable @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (syncId, inventory, player) -> new AnvilMenu(syncId, inventory, ContainerLevelAccess.create(level, pos)), SpectralAnvilBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L106) |

## StampingPlatformBlock

` public class StampingPlatformBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StampingPlatformBlock.java#L16)

冲压平台：在台面上放置原料，铁砧砸落时执行冲压配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StampingPlatformBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StampingPlatformBlock.java#L17) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STAMPING_PLATFORM.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StampingPlatformBlock.java#L21) |
| ` @Override public ItemStack getCloneItemStack( LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player ) ` | 末尾返回 ` new ItemStack(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StampingPlatformBlock.java#L26) |

## StructureScannerBlock

` public class StructureScannerBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<StructureScannerBlock> CODEC ` | 初值 ` BlockBehaviour.simpleCodec(StructureScannerBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L44) |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L45) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L46) |
| ` public static final BooleanProperty UPSIDE_DOWN ` | 初值 ` BooleanProperty.create("upside_down") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L47) |
| ` public StructureScannerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(StructureScannerBlock.FACING, Direction.NORTH) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L69) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getClickedFace() `<br>实现调用 ` context.getHorizontalDirection().getOpposite() `<br>实现调用 ` context.getHorizontalDirection() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L88) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(StructureScannerBlock.FACING) `<br>实现调用 ` state.getValue(StructureScannerBlock.UPSIDE_DOWN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L111) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new StructureScannerBlockEntity(ModBlockEntities.STRUCTURE_SCANNER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L129) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, ignored, entity) -> { if (entity instanceof StructureScannerBlockEntity be) { be.tickServer(level1, pos); } } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L135) |
| ` @Override public BlockState playerWillDestroy( Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/StructureScannerBlock.java#L227) |

## TranscendenceAnvilBlock

` public class TranscendenceAnvilBlock extends BetterAnvilBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendenceAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L48) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` TranscendenceAnvilBlock.X_AXIS_AABB `<br>末尾返回 ` TranscendenceAnvilBlock.Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L52) |
| ` @Override public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L59) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new TranscendenceAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), TranscendenceAnvilBlock.CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L67) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities(AnvilCraft.CONFIG.world.transcendenceAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L76) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L34) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TranscendenceAnvilBlock.java#L34) |

## TransparentCraftingTableBlock

` public class TransparentCraftingTableBlock extends TransparentBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Type> TYPE ` | 初值 ` EnumProperty.create("type", Type.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L36) |
| ` public TransparentCraftingTableBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(TransparentCraftingTableBlock.TYPE, Type.SINGLE) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L38) |
| ` public boolean isValidMatrixBlock(BlockState block, Boolean isSelfOnly) ` | 判断是否是通透工作台或其它允许参与形成矩阵的方块（目前仅包含空间超压器）。<br>参数 ` block ` 需要进行判断的方块<br>参数 ` isSelfOnly ` 是否只匹配通透工作台<br>返回 判断结果<br>末尾返回 ` block.is(this) \|\| (!isSelfOnly && block.is(ModBlockTags.CRAFTING_MATRIX_ELEMENT)) `<br>[调用处 TransparentCraftingTableBlock.updateShape](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L242) |
