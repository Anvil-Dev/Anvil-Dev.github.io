# dev.dubhe.anvilcraft.block.storage



## AmberBlock

` public class AmberBlock extends HorizontalDirectionalBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/AmberBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/AmberBlock.java#L15) |
| ` public AmberBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any() .setValue(AmberBlock.FACING, Direction.NORTH)) `<br>实现调用 ` this.stateDefinition.any() .setValue(AmberBlock.FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/AmberBlock.java#L17) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(AmberBlock.FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/AmberBlock.java#L33) |

## EndDustBlock

` public class EndDustBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/EndDustBlock.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EndDustBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/EndDustBlock.java#L17) |
| ` @Override public void onPlace( BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston ) ` | 执行 ` level.scheduleTick(pos, this, this.getDelayAfterPlace()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/EndDustBlock.java#L21) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` level.getFluidState(pos.above()).is(FluidTags.WATER) `<br>实现调用 ` level.getFluidState(pos.above()) `<br>实现调用 ` pos.above() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/EndDustBlock.java#L32) |

## ExcitedStateVoidMatterBlock

` public class ExcitedStateVoidMatterBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ExcitedStateVoidMatterBlock.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExcitedStateVoidMatterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ExcitedStateVoidMatterBlock.java#L18) |
| ` public static List<Block> getDecayProducts() ` | 实现调用 ` ModBlocks.URANIUM_BLOCK.get() `<br>实现调用 ` ModBlocks.PLUTONIUM_BLOCK.get() `<br>实现调用 ` ModBlocks.SAPPHIRE_BLOCK.get() `<br>[调用处 DecayRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ExcitedStateVoidMatterBlock.java#L89) |
| ` public static List<Block> getConfinedAnvilons() ` | 末尾返回 ` List.of( ModBlocks.CONFINED_TIME_ANVILON.get(), ModBlocks.CONFINED_SPACE_ANVILON.get(), ModBlocks.CONFINED_MASS_ANVILON.get(), ModBlocks.CONFINED_ENERGY_ANVILON.get() ) `<br>[调用处 DecayRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ExcitedStateVoidMatterBlock.java#L103) |

## FerriteCoreMagnetBlock

` public class FerriteCoreMagnetBlock extends MagnetBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/FerriteCoreMagnetBlock.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FerriteCoreMagnetBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/FerriteCoreMagnetBlock.java#L18) |
| ` @Override public void randomTick( BlockState blockState, ServerLevel serverLevel, BlockPos blockPos, RandomSource randomSource ) ` | 实现调用 ` Direction.values() `<br>实现调用 ` serverLevel.getBlockState(blockPos.relative(face)).is(ModBlocks.MAGNET_BLOCK.get()) `<br>实现调用 ` serverLevel.getBlockState(blockPos.relative(face)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/FerriteCoreMagnetBlock.java#L22) |

## FlintBlock

` public class FlintBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/FlintBlock.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FlintBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/FlintBlock.java#L21) |
| ` public static void ignite(LevelAccessor level, BlockPos pos, boolean isFlint) ` | 实现调用 ` Direction.values() `<br>实现调用 ` level.getBlockState(pos.relative(direction)) `<br>实现调用 ` pos.relative(direction) `<br>[调用处 BlockBehaviourMixin.onPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/BlockBehaviourMixin.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/FlintBlock.java#L25) |

## GunpowderBlock

` public class GunpowderBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GunpowderBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L38) |
| ` public void explosion(Level level, BlockPos pos) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` level.setBlock(pos, Blocks.AIR.defaultBlockState(), 11) `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>[调用处 GunpowderBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L42) |
| ` @Override public boolean onCaughtFire( BlockState state, Level level, BlockPos pos, @Nullable Direction direction, @Nullable LivingEntity igniter ) ` | 末尾返回 ` super.onCaughtFire(state, level, pos, direction, igniter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L141) |
| ` @Override public void wasExploded(ServerLevel level, BlockPos pos, Explosion explosion) ` | 执行 ` this.explosion(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L164) |
| ` @Override public boolean canDropFromExplosion(BlockState state, BlockGetter level, BlockPos pos, Explosion explosion) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/GunpowderBlock.java#L169) |

## HasMobBlock

` public abstract class HasMobBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HasMobBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HasMobBlock.java#L12) |

## HollowMagnetBlock

` public class HollowMagnetBlock extends MagnetBlock implements SimpleWaterloggedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L36) |
| ` public HollowMagnetBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(HollowMagnetBlock.WATERLOGGED, false) .setValue(MagnetBlock.LIT, false) `<br>实现调用 ` this.stateDefinition.any() .setValue(HollowMagnetBlock.WATERLOGGED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L40) |
| ` @Override public VoxelShape getShape( BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` Shapes.block() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L55) |
| ` @Override public boolean useShapeForLightOcclusion(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L84) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext blockPlaceContext) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` state.setValue(HollowMagnetBlock.WATERLOGGED, fluidState.getType() == Fluids.WATER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L89) |
| ` @Override public FluidState getFluidState(BlockState blockState) ` | 末尾返回 ` blockState.getValue(HollowMagnetBlock.WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/HollowMagnetBlock.java#L98) |

## LevitationPowderBlock

` public class LevitationPowderBlock extends FallingBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/LevitationPowderBlock.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevitationPowderBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/LevitationPowderBlock.java#L24) |
| ` @Override public int getDustColor(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos) ` | 末尾返回 ` 14406560 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/LevitationPowderBlock.java#L60) |

## MagnetBlock

` public class MagnetBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty LIT ` | 初值 ` BlockStateProperties.LIT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L40) |
| ` public MagnetBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(MagnetBlock.LIT, false)) `<br>实现调用 ` this.stateDefinition.any().setValue(MagnetBlock.LIT, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L47) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(MagnetBlock.LIT, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L52) |
| ` @Override public void onPlace( BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston ) ` | 实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` this.attract(state, level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L58) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` state.getValue(MagnetBlock.LIT) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (state.getValue(MagnetBlock.LIT) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlockAndUpdate(pos, state.cycle(MagnetBlock.LIT)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L156) |

## MagnetoElectricCoreBlock

` public class MagnetoElectricCoreBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetoElectricCoreBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MagnetoElectricCoreBlock> CODEC ` | 初值 ` BlockBehaviour.simpleCodec(MagnetoElectricCoreBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetoElectricCoreBlock.java#L15) |
| ` public static final VoxelShape SHAPE ` | 初值 ` Block.box(2, 2, 2, 14, 14, 14) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetoElectricCoreBlock.java#L16) |
| ` public MagnetoElectricCoreBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetoElectricCoreBlock.java#L18) |

## MobAmberBlock

` public class MobAmberBlock extends HasMobBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MobAmberBlock.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MobAmberBlock.java#L24) |
| ` public MobAmberBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any() .setValue(MobAmberBlock.FACING, Direction.NORTH)) `<br>实现调用 ` this.stateDefinition.any() .setValue(MobAmberBlock.FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MobAmberBlock.java#L26) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(MobAmberBlock.FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MobAmberBlock.java#L53) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.MOB_AMBER_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MobAmberBlock.java#L60) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (!level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.MOB_AMBER_BLOCK.get(), (level1, blockPos, _, blockEntity) -> blockEntity.clientTick(level1, blockPos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MobAmberBlock.java#L66) |

## NegativeMatterBlock

` public class NegativeMatterBlock extends Block implements INegativeMatterBlock, IVoidEnergyAmplifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/NegativeMatterBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NegativeMatterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/NegativeMatterBlock.java#L8) |
| ` @Override public int getVoidEnergyAmplification() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/NegativeMatterBlock.java#L12) |

## ResentfulAmberBlock

` public class ResentfulAmberBlock extends MobAmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResentfulAmberBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResentfulAmberBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResentfulAmberBlock.java#L14) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.RESENTFUL_AMBER_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResentfulAmberBlock.java#L18) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (!level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.RESENTFUL_AMBER_BLOCK.get(), (level1, blockPos, _, blockEntity) -> blockEntity.clientTick(level1, blockPos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResentfulAmberBlock.java#L24) |

## ResinBlock

` public class ResinBlock extends HalfTransparentBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResinBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResinBlock(BlockBehaviour.Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResinBlock.java#L14) |
| ` public void fallOn(Level level, BlockState state, BlockPos pos, Entity entity, float fallDistance) ` | 实现调用 ` entity.isSuppressingBounce() `<br>分支 ` (entity.isSuppressingBounce()) ` 内调用 ` super.fallOn(level, state, pos, entity, fallDistance) `<br>分支 ` !(entity.isSuppressingBounce()) ` 内调用 ` entity.causeFallDamage(fallDistance, 0.0F, level.damageSources().fall()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResinBlock.java#L18) |
| ` @Override public void updateEntityMovementAfterFallOn(BlockGetter level, Entity entity) ` | 实现调用 ` entity.isSuppressingBounce() `<br>分支 ` (entity.isSuppressingBounce()) ` 内调用 ` super.updateEntityMovementAfterFallOn(level, entity) `<br>分支 ` !(entity.isSuppressingBounce()) ` 内调用 ` this.bounceUp(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResinBlock.java#L26) |
| ` public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` Math.abs(entity.getDeltaMovement().y) `<br>实现调用 ` entity.getDeltaMovement() `<br>实现调用 ` entity.isSteppingCarefully() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResinBlock.java#L44) |
| ` @Override public boolean isSlimeBlock(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/ResinBlock.java#L54) |

## RottenFleshBlock

` public class RottenFleshBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/RottenFleshBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RottenFleshBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/RottenFleshBlock.java#L13) |
| ` @Override public void fallOn(Level level, BlockState state, BlockPos pos, Entity entity, double fallDistance) ` | 实现调用 ` entity.causeFallDamage(fallDistance, 0.2F, level.damageSources().fall()) `<br>实现调用 ` level.damageSources().fall() `<br>实现调用 ` level.damageSources() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/RottenFleshBlock.java#L17) |

## SimpleConfinementAnvilonBlock

` public class SimpleConfinementAnvilonBlock extends Block implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SimpleConfinementAnvilonBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleConfinementAnvilonBlock(Properties properties) ` | 执行 ` super(properties.pushReaction(PushReaction.DESTROY)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SimpleConfinementAnvilonBlock.java#L9) |

## SugarBlock

` public class SugarBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<FragmentationDegree> FRAGMENTATION_DEGREE ` | 初值 ` EnumProperty.create( "fragmentation_degree", FragmentationDegree.class ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L26) |
| ` public SugarBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(SugarBlock.FRAGMENTATION_DEGREE, FragmentationDegree.ZERO) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L31) |
| ` public static void loot(RegistrumBlockLootTables tables, Block block) ` | 实现调用 ` LootTable.lootTable() `<br>实现调用 ` LootPool.lootPool() .setRolls(ConstantValue.exactly(1.0F)) `<br>实现调用 ` LootPool.lootPool() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L36) |
| ` public void onHit(Level level, BlockPos pos) ` | 实现调用 ` level.scheduleTick(pos, this, 4) `<br>实现调用 ` ChargeCollectorManager.charge(1, level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L60) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(SugarBlock.FRAGMENTATION_DEGREE, FragmentationDegree.ZERO) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L87) |

## TranscendiumBlock

` public class TranscendiumBlock extends Block implements ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/TranscendiumBlock.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendiumBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/TranscendiumBlock.java#L10) |
| ` @Override public float getEnchantPowerBonus(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 10.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/TranscendiumBlock.java#L14) |

## VoidMatterBlock

` public class VoidMatterBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/VoidMatterBlock.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VoidMatterBlock(Properties properties) ` | 执行 ` super(properties.randomTicks()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/VoidMatterBlock.java#L18) |
| ` public static BlockState voidDecay(Level level, RandomSource random) ` | ` (randomBlock == null) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>末尾返回 ` randomBlock.defaultBlockState() `<br>[调用处 VoidEnergyCollectorBlockEntity.makeBlocksDecay](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/VoidEnergyCollectorBlockEntity.java#L216) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/VoidMatterBlock.java#L22) |
