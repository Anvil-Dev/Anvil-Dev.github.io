# dev.dubhe.anvilcraft.block.cauldron



## BaseCauldronBlock

` public abstract class BaseCauldronBlock extends AbstractCauldronBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/BaseCauldronBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseCauldronBlock(Properties properties) ` | 执行 ` this(properties, new CauldronInteraction.Dispatcher()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/BaseCauldronBlock.java#L13) |
| ` public BaseCauldronBlock(Properties properties, CauldronInteraction.Dispatcher dispatcher) ` | 执行 ` super(properties, dispatcher) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/BaseCauldronBlock.java#L17) |
| ` @Override public ItemStack getCloneItemStack(LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player) ` | 末尾返回 ` new ItemStack(Items.CAULDRON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/BaseCauldronBlock.java#L21) |

## CementCauldronBlock

` public class CementCauldronBlock extends BaseCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/CementCauldronBlock.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CementCauldronBlock> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group(BlockBehaviour.propertiesCodec(), Color.CODEC.fieldOf("color").forGetter(CementCauldronBlock::getColor)).apply(ins, CementCauldronBlock::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/CementCauldronBlock.java#L18) |
| ` public CementCauldronBlock(Properties properties, Color color) ` | 实现调用 ` super(properties, ModInteractionMap.CEMENT) `<br>[调用处 ModBlocks.registerCementCauldron](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L4566) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/CementCauldronBlock.java#L24) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/CementCauldronBlock.java#L39) |
| ` public Color getColor() ` | 末尾返回 ` this.color `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/CementCauldronBlock.java#L16) |

## ExpFluidCauldronBlock

` public class ExpFluidCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/ExpFluidCauldronBlock.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpFluidCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.EXP_FLUID) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/ExpFluidCauldronBlock.java#L20) |

## FireCauldronBlock

` public class FireCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable, IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FireCauldronBlock(Properties properties) ` | 执行 ` super(properties, CauldronInteractions.EMPTY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L32) |
| ` @Override public ItemStack getCloneItemStack(LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player) ` | 末尾返回 ` new ItemStack(Items.CAULDRON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L45) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean ignored) ` | 实现调用 ` level.getBlockState(pos.below()).is(ModBlocks.HEATER) `<br>实现调用 ` level.getBlockState(pos.below()) `<br>实现调用 ` pos.below() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L50) |
| ` @Override public boolean isIgnited(BlockCache cache, BlockPos pos) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L79) |
| ` @Override public void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 实现调用 ` ModBlocks.OIL_CAULDRON.getDefaultState() `<br>实现调用 ` cache.getBlockState(pos).getValue(FireCauldronBlock.LEVEL) `<br>实现调用 ` cache.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L84) |
| ` @Override public Fluid getFluid(BlockCache cache, BlockPos pos) ` | 末尾返回 ` ModFluids.OIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L94) |
| ` @Override public int getFluidAmount(BlockCache cache, BlockPos pos) ` | 末尾返回 ` cache.getBlockState(pos).getValue(FireCauldronBlock.LEVEL) * 250 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L99) |
| ` @Override public OptionalInt consumeOnce(BlockCache cache, BlockPos pos, boolean simulate) ` | ` (remaining < 0) ` 成立时提前返回 ` OptionalInt.empty() `<br>末尾返回 ` OptionalInt.of(AnvilCraft.CONFIG.machines.plasmaJets.cauldronExtraDuration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/FireCauldronBlock.java#L104) |

## HoneyCauldronBlock

` public class HoneyCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/HoneyCauldronBlock.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HoneyCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.HONEY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/HoneyCauldronBlock.java#L7) |

## LavaCauldronBlock

` public class LavaCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/LavaCauldronBlock.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LavaCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.LAVA) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/LavaCauldronBlock.java#L17) |

## Layered4LevelCauldronBlock

` public class Layered4LevelCauldronBlock extends BaseCauldronBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Layered4LevelCauldronBlock> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L25) |
| ` public static final int MAX_LEVEL ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L32) |
| ` public static final IntegerProperty LEVEL ` | 初值 ` IntegerProperty.create("level", 1, Layered4LevelCauldronBlock.MAX_LEVEL) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L33) |
| ` public Layered4LevelCauldronBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(Layered4LevelCauldronBlock.LEVEL, 1)) `<br>实现调用 ` this.stateDefinition.any().setValue(Layered4LevelCauldronBlock.LEVEL, 1) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L35) |
| ` public Layered4LevelCauldronBlock(Properties properties, CauldronInteraction.Dispatcher interactions) ` | 实现调用 ` super(properties, interactions) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(Layered4LevelCauldronBlock.LEVEL, 1)) `<br>实现调用 ` this.stateDefinition.any().setValue(Layered4LevelCauldronBlock.LEVEL, 1) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L40) |
| ` public static void lowerFillLevel(BlockState state, Level level, BlockPos pos) ` | 实现调用 ` state.getValue(Layered4LevelCauldronBlock.LEVEL) `<br>实现调用 ` Blocks.CAULDRON.defaultBlockState() `<br>实现调用 ` state.setValue(Layered4LevelCauldronBlock.LEVEL, i) `<br>[调用处 ModInteractionMap.registerInteractions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L45) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` state.getValue(Layered4LevelCauldronBlock.LEVEL) == Layered4LevelCauldronBlock.MAX_LEVEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L57) |
| ` public BlockState copyLevelFrom(BlockState otherCauldron) ` | 实现调用 ` this.defaultBlockState() `<br>实现调用 ` Optional.of(otherCauldron) .filter(state -> state.getBlock() instanceof Layered4LevelCauldronBlock) `<br>实现调用 ` Optional.of(otherCauldron) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L82) |
| ` public BlockState fullFilled() ` | 末尾返回 ` this.defaultBlockState().setValue(Layered4LevelCauldronBlock.LEVEL, Layered4LevelCauldronBlock.MAX_LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/Layered4LevelCauldronBlock.java#L90) |

## MeltGemCauldronBlock

` public class MeltGemCauldronBlock extends BaseCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/MeltGemCauldronBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MeltGemCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.MELT_GEM) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/MeltGemCauldronBlock.java#L14) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/MeltGemCauldronBlock.java#L28) |

## MilkCauldronBlock

` public class MilkCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/MilkCauldronBlock.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MilkCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.MILK) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/MilkCauldronBlock.java#L7) |

## ObsidianCauldronBlock

` public class ObsidianCauldronBlock extends BaseCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/ObsidianCauldronBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ObsidianCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.OBSIDIAN) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/ObsidianCauldronBlock.java#L14) |
| ` @Override public boolean isFull(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/ObsidianCauldronBlock.java#L28) |

## OilCauldronBlock

` public class OilCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable, IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/OilCauldronBlock.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OilCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.OIL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/OilCauldronBlock.java#L27) |
| ` public static void ignite(LevelAccessor level, BlockPos pos, BlockState beforeConvert) ` | 执行 ` level.setBlock(pos, ModBlocks.FIRE_CAULDRON.get().copyLevelFrom(beforeConvert), 3) `<br>[调用处 ModInteractionMap.registerInteractions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L147) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/OilCauldronBlock.java#L31) |
| ` @Override public InteractionResult useItemOn( ItemStack stack, BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (interaction == null) ` 成立时提前返回 ` InteractionResult.TRY_WITH_EMPTY_HAND `<br>末尾返回 ` interaction.interact(state, level, pos, player, hand, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/OilCauldronBlock.java#L56) |
| ` @Override public void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 实现调用 ` ModBlocks.FIRE_CAULDRON.getDefaultState() `<br>实现调用 ` cache.getBlockState(pos).getValue(OilCauldronBlock.LEVEL) `<br>实现调用 ` cache.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/OilCauldronBlock.java#L73) |
| ` @Override public Fluid getFluid(BlockCache cache, BlockPos pos) ` | 末尾返回 ` ModFluids.OIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/OilCauldronBlock.java#L83) |
