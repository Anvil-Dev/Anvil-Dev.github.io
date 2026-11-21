# dev.dubhe.anvilcraft.block.container



## CreativeCrateBlock

` public class CreativeCrateBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/CreativeCrateBlock.java#L25)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/CreativeCrateBlock.java#L28) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CREATIVE_CRATE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/CreativeCrateBlock.java#L37) |

## CreativeFluidTankBlock

` public class CreativeFluidTankBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/CreativeFluidTankBlock.java#L25)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidTankBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/CreativeFluidTankBlock.java#L28) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CREATIVE_FLUID_TANK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/CreativeFluidTankBlock.java#L37) |

## FluidTankBlock

` public class FluidTankBlock extends BaseEntityBlock implements HammerRotateBehavior, IHammerRemovable, IController `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L43) |
| ` public static boolean hasAdjacentMengerSponge(LevelReader level, BlockPos pos) ` | 末尾返回 ` false `<br>[调用处 FluidTankBlockEntity.refreshDispose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FluidTankBlockEntity.java#L291) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L47) |
| ` public static Component displayName(LevelReader level, BlockPos pos) ` | 末尾返回 ` Component.translatable(hasAdjacentMengerSponge(level, pos) ? "block.anvilcraft.overflow_disposal_fluid_tank" : "block.anvilcraft.fluid_tank") `<br>[调用处 OverflowDisposalTankClientProvider.appendTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/OverflowDisposalTankClientProvider.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L72) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.FLUID_TANK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L82) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper(type, ModBlockEntities.FLUID_TANK.get(), FluidTankBlockEntity::serverTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L88) |
| ` @Override public Block getBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L137) |
| ` @Override public Identifier getDefinitionId() ` | 末尾返回 ` ModMultiblockDefinitions.FLUID_TANK.identifier() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L142) |
| ` @Override public void onFormed(Level level, MultiblockState state) ` | 实现调用 ` TankUtil.isMengerStructure(level, state.getControllerPos(), 3) `<br>实现调用 ` state.getControllerPos() `<br>实现调用 ` level.getBlockEntity(state.getControllerPos(), ModBlockEntities.FLUID_TANK.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L147) |
| ` @Override public void onUnformed(Level level, MultiblockState state) ` | 执行 ` level.getBlockEntity(state.getControllerPos(), ModBlockEntities.FLUID_TANK.get()) .ifPresent(FluidTankBlockEntity::onUnformed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L154) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L160) |
| ` @Override public boolean hasDynamicLightEmission(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L176) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` manager == null ? 0 : manager.getLightAt(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L181) |

## LargeFluidTankBlock

` public class LargeFluidTankBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements MultiPartBlockEntity<Cube3x3PartHalf, LargeFluidTankBlock>, IHammerRemovable, IController `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L48)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L51) |
| ` public LargeFluidTankBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(LargeFluidTankBlock.HALF, Cube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L53) |
| ` @Override public Vec3i getMainPartOffset() ` | 末尾返回 ` new Vec3i(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L60) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` LargeFluidTankBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L80) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L85) |
| ` @Override public LargeFluidTankBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L90) |
| ` public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` this.createBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L95) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.LARGE_FLUID_TANK.create(pos, state) `<br>[调用处 LargeFluidTankBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L99) |
| ` @Override public void setPlacedBy( Level level, BlockPos pos, BlockState state, @Nullable LivingEntity placer, ItemStack stack ) ` | 实现调用 ` super.setPlacedBy(level, pos, state, placer, stack) `<br>实现调用 ` this.getMainPartPos(pos, state) `<br>实现调用 ` BlockItem.updateCustomBlockEntityTag(level, player, mainPartPos, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L104) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` PropelPistonBlock.createTickerHelper( type, ModBlockEntities.LARGE_FLUID_TANK.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L118) |
| ` @Override public ItemStack getCloneItemStack( LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player ) ` | ` (!includeData) ` 成立时提前返回 ` stack `<br>末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L166) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L193) |
| ` @Override public boolean hasDynamicLightEmission(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L209) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` manager == null ? 0 : manager.getLightAt(mainPartPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L214) |
| ` @Override public Block getBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L221) |
| ` @Override public Identifier getDefinitionId() ` | 末尾返回 ` ModMultiblockDefinitions.LARGE_FLUID_TANK.identifier() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L226) |
| ` @Override public void onFormed(Level level, MultiblockState state) ` | 实现调用 ` TankUtil.isMengerStructure(level, state.getControllerPos(), 9) `<br>实现调用 ` state.getControllerPos() `<br>实现调用 ` TriggerUtil.multiBlockForm(level, state.getControllerPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L231) |
| ` @Override public void onUnformed(Level level, MultiblockState state) ` | 执行 ` level.getBlockEntity(state.getControllerPos(), ModBlockEntities.LARGE_FLUID_TANK.get()) .ifPresent(LargeFluidTankBlockEntity::onUnformed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L239) |
| ` @Override public BlockPos correctPos(ServerLevel level, BlockPos pos, BlockState state) ` | 末尾返回 ` this.getMainPartPos(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/LargeFluidTankBlock.java#L245) |
