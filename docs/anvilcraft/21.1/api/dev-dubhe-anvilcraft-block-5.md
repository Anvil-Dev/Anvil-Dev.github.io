# dev.dubhe.anvilcraft.block（FluidTankBlock 至 HeavyIronWallBlock）



## FluidTankBlock

` public class FluidTankBlock extends BaseEntityBlock implements HammerRotateBehavior, IHammerRemovable, IController `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L42) |
| ` public static boolean hasAdjacentMengerSponge(LevelReader level, BlockPos pos) ` | 判断该储罐位置是否相邻任意门格海绵。 相邻（6 向，不含斜角）时储罐进入溢出销毁模式：灌满后继续输入的流体会被直接 销毁，与相邻虚空物质块的板条箱销毁溢出物品相对应。门格海绵本身能无限吸收流体， 因此把溢出交给它销毁在设定上自洽。 注意这与 3×3×3 门格结构（TankUtil#isMengerStructure）不同：后者会把储罐 升级为无限容量，本判定只要求单格相邻。<br>参数 ` level ` 世界<br>参数 ` pos ` 储罐位置<br>返回 相邻存在门格海绵时为 true<br>末尾返回 ` false `<br>[调用处 FluidTankBlockEntity.refreshDispose](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FluidTankBlockEntity.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L60) |
| ` public static Component displayName(LevelReader level, BlockPos pos) ` | 按相邻门格海绵返回储罐显示名：溢出销毁模式显示「过量销毁储罐」。<br>末尾返回 ` FluidTankBlock.hasAdjacentMengerSponge(level, pos) ? Component.translatable("block.anvilcraft.overflow_disposal_fluid_tank") : Component.translatable("block.anvilcraft.fluid_tank") `<br>[调用处 OverflowDisposalTankProvider.appendTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/OverflowDisposalTankProvider.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L99) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.FLUID_TANK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L110) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper(type, ModBlockEntities.FLUID_TANK.get(), FluidTankBlockEntity::serverTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L116) |
| ` @Override public Block getBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L165) |
| ` @Override public ResourceLocation getDefinitionId() ` | 末尾返回 ` ModMultiblockDefinitions.FLUID_TANK.location() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L170) |
| ` @Override public void onFormed(Level level, MultiblockState state) ` | 实现调用 ` TankUtil.isMengerStructure(level, state.getControllerPos(), 3) `<br>实现调用 ` state.getControllerPos() `<br>实现调用 ` level.getBlockEntity(state.getControllerPos(), ModBlockEntities.FLUID_TANK.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L175) |
| ` @Override public void onUnformed(Level level, MultiblockState state) ` | 执行 ` level.getBlockEntity(state.getControllerPos(), ModBlockEntities.FLUID_TANK.get()) .ifPresent(FluidTankBlockEntity::onUnformed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L182) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L188) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (blockEntity instanceof FluidTankBlockEntity be) ` 成立时提前返回 ` be.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L193) |
| ` @Override public boolean hasDynamicLightEmission(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L202) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | ` (manager == null) ` 成立时提前返回 ` 0 `<br>末尾返回 ` manager.getLightAt(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FluidTankBlock.java#L207) |

## FrostAnvilBlock

` public class FrostAnvilBlock extends BetterAnvilBlock implements IHammerRemovable, IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostAnvilBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostAnvilBlock.java#L41) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` X_AXIS_AABB `<br>末尾返回 ` Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostAnvilBlock.java#L45) |
| ` @SuppressWarnings("UnreachableCode") @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostAnvilBlock.java#L57) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new FrostAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostAnvilBlock.java#L72) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities((float) AnvilCraft.CONFIG.world.frostAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostAnvilBlock.java#L81) |

## FrostGrindstoneBlock

` public class FrostGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable, IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostGrindstoneBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostGrindstoneBlock.java#L29) |
| ` @SuppressWarnings("UnreachableCode") public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostGrindstoneBlock.java#L33) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new FrostGrindstoneMenu(i, inventory, ContainerLevelAccess.create(level, pos)), FrostGrindstoneBlock.CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostGrindstoneBlock.java#L48) |

## FrostMetalBlock

` public class FrostMetalBlock extends Block implements IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalBlock.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalBlock.java#L7) |

## FrostMetalPillarBlock

` public class FrostMetalPillarBlock extends RotatedPillarBlock implements IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalPillarBlock.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalPillarBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalPillarBlock.java#L7) |

## FrostMetalSlabBlock

` public class FrostMetalSlabBlock extends SlabBlock implements IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalSlabBlock.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalSlabBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalSlabBlock.java#L7) |

## FrostMetalStairBlock

` public class FrostMetalStairBlock extends StairBlock implements IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalStairBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalStairBlock(BlockState baseState, Properties properties) ` | 执行 ` super(baseState, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L2418) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostMetalStairBlock.java#L8) |

## FrostSmithingTableBlock

` public class FrostSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable, IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostSmithingTableBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostSmithingTableBlock.java#L18) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new FrostSmithingMenu(i, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FrostSmithingTableBlock.java#L22) |

## GiantAnvilBlock

` public class GiantAnvilBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements Fallable, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L65)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ThreadLocal<Boolean> SUPPRESS_DROPS ` | When set to true, the Giant Anvil will not drop items when blocks are removed. Used during recipe processing to prevent the anvil from dropping when replaced.<br>初值 ` ThreadLocal.withInitial(() -> false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L70) |
| ` public static final SoundType SOUND_TYPE ` | 初值 ` new DeferredSoundType( 0.55F, 0.45F, () -> SoundEvents.ANVIL_BREAK, () -> SoundEvents.ANVIL_STEP, () -> SoundEvents.ANVIL_PLACE, () -> SoundEvents.ANVIL_HIT, () -> SoundEvents.ANVIL_FALL ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L72) |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L81) |
| ` public static final EnumProperty<GiantAnvilCube> CUBE ` | 初值 ` EnumProperty.create("cube", GiantAnvilCube.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L82) |
| ` public GiantAnvilBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, Cube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L193) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 实现调用 ` state.getValue(HALF) `<br>实现调用 ` Shapes.block() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L201) |
| ` @Override public BlockState placedState(Cube3x3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state) .setValue(CUBE, part == Cube3x3PartHalf.MID_CENTER ? GiantAnvilCube.CENTER : GiantAnvilCube.CORNER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L224) |
| ` @Override public BlockState getModelHolderState(BlockState original) ` | 巨型铁砧的完整模型只由 MID\_CENTER 部件承载（其余部件的 giant\_anvil\_part 为空模型），因此任意部件状态都要先映射到这里再渲染。 调用方（铁砧锤预览、JEI 配方渲染等）统一按 IMultiPartBlockModelHolder 查询即可，无需各自硬编码 half=mid\_center, cube=center。<br>末尾返回 ` original .setValue(HALF, Cube3x3PartHalf.MID_CENTER) .setValue(CUBE, GiantAnvilCube.CENTER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L237) |
| ` public static BlockState damage(BlockState state) ` | 末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L249) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` GiantAnvilBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L253) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L293) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L258) |
| ` public void onLand( Level level, BlockPos pos, BlockState state, @SuppressWarnings("unused") BlockState replaceableState, FallingBlockEntity fallingBlock, float fallDistance ) ` | 落地<br>实现调用 ` level.setBlockAndUpdate(pos, Blocks.AIR.defaultBlockState()) `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` pos.below() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L276) |
| ` @Override public DamageSource getFallDamageSource(Entity entity) ` | 末尾返回 ` ModDamageTypes.fallingGiantAnvil(entity.level(), entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L310) |
| ` @Override public Vec3i getMainPartOffset() ` | 末尾返回 ` new Vec3i(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L315) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` NeoForge.EVENT_BUS.post(new GiantAnvilEvent.BlockTick(this, state, level, pos, random)).isCanceled() `<br>实现调用 ` NeoForge.EVENT_BUS.post(new GiantAnvilEvent.BlockTick(this, state, level, pos, random)) `<br>实现调用 ` level.getBlockState(pos.subtract(state.getValue(HALF).getOffset()).above(3)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L320) |
| ` @Override public void removePartsAndUpdate(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` blockState.is(this) `<br>实现调用 ` this.getMainPartPos(pos, blockState).below() `<br>[调用处 GiantAnvilBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L355) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L360) |
| ` @Override public void onPlace( BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston ) ` | 实现调用 ` state.hasProperty(HALF) `<br>分支 ` (state.hasProperty(HALF)) ` 内调用 ` level.scheduleTick(pos.subtract(state.getValue(HALF).getOffset()), this, this.getDelayAfterPlace()) `<br>分支 ` (state.hasProperty(HALF)) ` 内调用 ` pos.subtract(state.getValue(HALF).getOffset()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L390) |
| ` @Override public BlockState updateShape( BlockState state, Direction direction, BlockState neighborState, LevelAccessor level, BlockPos pos, BlockPos neighborPos ) ` | 末尾返回 ` super.updateShape(state, direction, neighborState, level, pos, neighborPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L403) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L422) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (syncId, inventory, player) -> new AnvilMenu(syncId, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L440) |
| ` @Override public java.util.List<net.minecraft.world.item.ItemStack> getDrops( BlockState state, LootParams.Builder params ) ` | ` (SUPPRESS_DROPS.get()) ` 成立时提前返回 ` java.util.List.of() `<br>末尾返回 ` super.getDrops(state, params) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L449) |

## GiantMonolithCoreBlock

` public class GiantMonolithCoreBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L48)

巨型石碑芯（giant\_monolith\_core）：按 3x3x3 多方块落地（同巨型铁砧）， 仅中层中心部件显示整体模型，其余 26 个部件为无碰撞的透明占位。 东西/南北两种朝向沿用水平轴属性，模型默认为南北朝向。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L49) |
| ` public static final EnumProperty<GiantAnvilCube> CUBE ` | 初值 ` EnumProperty.create("cube", GiantAnvilCube.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L50) |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L51) |
| ` public GiantMonolithCoreBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(HALF, Cube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.getStateDefinition().any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L53) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L61) |
| ` @Override public void playerDestroy( Level level, Player player, BlockPos pos, BlockState state, @Nullable BlockEntity blockEntity, ItemStack tool ) ` | 执行 ` super.playerDestroy(level, player, pos, state.setValue(HALF, Cube3x3PartHalf.MID_CENTER), blockEntity, tool) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L75) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` this.isMainPart(state) ? ModBlockEntities.MONOLITH_CORE.create(pos, state) : null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L82) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide \|\| type != ModBlockEntities.MONOLITH_CORE.get()) ` 成立时提前返回 ` null `<br>末尾返回 ` (tickLevel, pos, tickState, blockEntity) -> { if (blockEntity instanceof MonolithCoreBlockEntity core) core.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L87) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (!MonolithCoreBlockEntity.acceptsOffering(stack, true)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (!(level.getBlockEntity(mainPos) instanceof MonolithCoreBlockEntity core) \|\| core.isCoolingDown()) ` 成立时提前返回 ` InteractionResult.CONSUME `<br>` (recipes.isEmpty()) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (!core.beginOffering(stack, player, book)) ` 成立时提前返回 ` InteractionResult.CONSUME `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L97) |
| ` public static ItemStack createKnowledgeBook(SpecialCelestialBodyRecipe recipe, long worldSeed) ` | 末尾返回 ` book ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L120) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L136) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L141) |
| ` @Override public BlockState placedState(Cube3x3PartHalf part, BlockState state) ` | 末尾返回 ` super.placedState(part, state) .setValue(CUBE, part == Cube3x3PartHalf.MID_CENTER ? GiantAnvilCube.CENTER : GiantAnvilCube.CORNER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L146) |
| ` @Override public BlockState getPlacementState(BlockPlaceContext context) ` | 末尾返回 ` this.defaultBlockState().setValue(AXIS, context.getHorizontalDirection().getAxis()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L152) |
| ` @Override public Vec3i getMainPartOffset() ` | 末尾返回 ` new Vec3i(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L162) |

## GunpowderBlock

` public class GunpowderBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GunpowderBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L35) |
| ` public void explosion(Level level, BlockPos pos) ` | 实现调用 ` level.setBlock(pos, Blocks.AIR.defaultBlockState(), 11) `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` pos.getX() `<br>[调用处 GunpowderBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L39) |
| ` @Override public void onCaughtFire(BlockState state, Level level, BlockPos pos, @Nullable Direction direction, @Nullable LivingEntity igniter) ` | 执行 ` this.explosion(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L134) |
| ` @Override public void wasExploded(Level level, BlockPos pos, Explosion explosion) ` | 实现调用 ` this.explosion(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L150) |
| ` @Override public boolean canDropFromExplosion(BlockState state, BlockGetter level, BlockPos pos, Explosion explosion) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L158) |

## HasMobBlock

` public abstract class HasMobBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HasMobBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HasMobBlock.java#L12) |

## HeatCollectorBlock

` public class HeatCollectorBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Shapes.or(Block.box(0, 0, 0, 16, 4, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L27) |
| ` public static BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L28) |
| ` public HeatCollectorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(POWERED, false)) `<br>实现调用 ` this.getStateDefinition().any().setValue(POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L30) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L45) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.HEAT_COLLECTOR.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L55) |
| ` public void activate(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` level.setBlockAndUpdate(pos, state.setValue(POWERED, true)) `<br>实现调用 ` state.setValue(POWERED, true) `<br>实现调用 ` this.updateNeighbours(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L60) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` createTickerHelper( type, ModBlockEntities.HEAT_COLLECTOR.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.clientTick()) `<br>末尾返回 ` super.getTicker(level, state, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeatCollectorBlock.java#L94) |

## HeaterBlock

` public class HeaterBlock extends BaseEntityBlock implements IHammerRemovable, IDamagingHeater `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape SHAPE ` | 初值 ` Shapes.or(Block.box(0, 2, 0, 16, 16, 16), Block.box(1, 0, 1, 15, 2, 15)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L32) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L33) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L34) |
| ` public HeaterBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(POWERED, false).setValue(OVERLOAD, true)) `<br>实现调用 ` this.stateDefinition.any().setValue(POWERED, false).setValue(OVERLOAD, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L36) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) .setValue(OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L46) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new HeaterBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L54) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L81) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.HEATER.get(), (level1, pos, state1, entity) -> entity.tick(level1, pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L86) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` HeaterUtil.hurtEntity(level, state, entity) `<br>实现调用 ` super.stepOn(level, pos, state, entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L95) |
| ` @Override public boolean isActive(BlockState state) ` | 末尾返回 ` !state.getValue(POWERED) && !state.getValue(OVERLOAD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L101) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeaterBlock.java#L106) |

## HeavyIronBeamBlock

` public class HeavyIronBeamBlock extends Block implements IHammerRemovable, HammerRotateBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape AABB_X ` | 初值 ` Shapes.join(Block.box(0, 12, 0, 16, 16, 16), Block.box(0, 0, 4, 16, 12, 12), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L27) |
| ` public static final VoxelShape AABB_Z ` | 初值 ` Shapes.join(Block.box(0, 12, 0, 16, 16, 16), Block.box(4, 0, 0, 12, 12, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L29) |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L32) |
| ` public HeavyIronBeamBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(AXIS, Direction.Axis.X)) `<br>实现调用 ` getStateDefinition().any().setValue(AXIS, Direction.Axis.X) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L34) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(AXIS, context.getHorizontalDirection().getOpposite().getAxis()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L39) |
| ` @Override public VoxelShape getShape( BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` switch (blockState.getValue(AXIS)) { case X: yield AABB_X; case Z: default: yield AABB_Z; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L50) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L66) |
| ` @Override public Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` AXIS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronBeamBlock.java#L74) |

## HeavyIronDoorBlock

` public class HeavyIronDoorBlock extends DoorBlock implements IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronDoorBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyIronDoorBlock(Properties properties) ` | 执行 ` super(BlockSetType.IRON, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronDoorBlock.java#L26) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` blockpos.getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronDoorBlock.java#L30) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronDoorBlock.java#L110) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronDoorBlock.java#L126) |

## HeavyIronPlateBlock

` public class HeavyIronPlateBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronPlateBlock.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape AABB ` | 初值 ` Block.box(0, 12, 0, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronPlateBlock.java#L13) |
| ` public HeavyIronPlateBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronPlateBlock.java#L15) |
| ` @Override public VoxelShape getShape( BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronPlateBlock.java#L19) |

## HeavyIronTrapdoorBlock

` public class HeavyIronTrapdoorBlock extends TrapDoorBlock implements IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronTrapdoorBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyIronTrapdoorBlock(Properties properties) ` | 执行 ` super(BlockSetType.IRON, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronTrapdoorBlock.java#L23) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>` (bs.isEmpty()) ` 成立时提前返回 ` bs `<br>末尾返回 ` bs.setValue(POWERED, hasSignal).setValue(OPEN, hasSignal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronTrapdoorBlock.java#L32) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronTrapdoorBlock.java#L74) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState state) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronTrapdoorBlock.java#L82) |

## HeavyIronWallBlock

` public class HeavyIronWallBlock extends WallBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronWallBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyIronWallBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronWallBlock.java#L8) |
| ` @Override public boolean supportsExternalFaceHiding(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/HeavyIronWallBlock.java#L12) |
