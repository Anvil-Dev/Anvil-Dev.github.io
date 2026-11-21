# dev.dubhe.anvilcraft.block（EmberGrindstoneBlock 至 FlintBlock）



## EmberGrindstoneBlock

` public class EmberGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable, IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L33) |
| ` @SuppressWarnings("UnreachableCode") public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L37) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new EmberGrindstoneMenu(i, inventory, ContainerLevelAccess.create(level, pos)), EmberGrindstoneBlock.CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L52) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L60) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= AnvilCraft.CONFIG.world.emberBlockWaterAbsorptionChance) ` 内调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L65) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L27) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberGrindstoneBlock.java#L27) |

## EmberMetalBlock

` public class EmberMetalBlock extends Block implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalBlock(Properties properties, boolean cut) ` | 余烬金属方块，切割变体使用另一条吸水概率配置。<br>参数 ` cut ` 是否为切割变体，用于选择对应的吸水概率配置<br>实现调用 ` super(properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L2459) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalBlock.java#L25) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalBlock.java#L30) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= chance) ` 内调用 ` tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalBlock.java#L35) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalBlock.java#L13) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalBlock.java#L13) |

## EmberMetalPillarBlock

` public class EmberMetalPillarBlock extends RotatedPillarBlock implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalPillarBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalPillarBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalPillarBlock.java#L17) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalPillarBlock.java#L21) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalPillarBlock.java#L26) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalPillarBlock.java#L12) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalPillarBlock.java#L12) |

## EmberMetalSlabBlock

` public class EmberMetalSlabBlock extends SlabBlock implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalSlabBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalSlabBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalSlabBlock.java#L19) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` state.getValue(SlabBlock.WATERLOGGED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalSlabBlock.java#L23) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.playSound(null, pos, SoundEvents.LAVA_EXTINGUISH, SoundSource.BLOCKS, 1.0F, 1.0F) `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.setBlock(pos, state.setValue(SlabBlock.WATERLOGGED, false), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalSlabBlock.java#L28) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalSlabBlock.java#L14) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalSlabBlock.java#L14) |

## EmberMetalStairBlock

` public class EmberMetalStairBlock extends StairBlock implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalStairBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalStairBlock(BlockState baseState, Properties properties) ` | 执行 ` super(baseState, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L2542) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalStairBlock.java#L20) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` state.getValue(SlabBlock.WATERLOGGED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalStairBlock.java#L24) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.playSound(null, pos, SoundEvents.LAVA_EXTINGUISH, SoundSource.BLOCKS, 1.0F, 1.0F) `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.setBlock(pos, state.setValue(SlabBlock.WATERLOGGED, false), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalStairBlock.java#L29) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalStairBlock.java#L15) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberMetalStairBlock.java#L15) |

## EmberSmithingTableBlock

` public class EmberSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable, IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L39) |
| ` @SuppressWarnings("UnreachableCode") public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME `<br>[调用处 EmberSmithingTableBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L67) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new EmberSmithingMenu(i, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L82) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L89) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= AnvilCraft.CONFIG.world.emberBlockWaterAbsorptionChance) ` 内调用 ` tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L94) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L32) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EmberSmithingTableBlock.java#L32) |

## EnchantedGoldBlock

` public class EnchantedGoldBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EnchantedGoldBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedGoldBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EnchantedGoldBlock.java#L9) |
| ` @Override public float getEnchantPowerBonus(BlockState state, LevelReader level, BlockPos pos) ` | 末尾返回 ` 3.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EnchantedGoldBlock.java#L13) |

## EndDustBlock

` public class EndDustBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EndDustBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EndDustBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EndDustBlock.java#L14) |
| ` @Override public void onPlace( BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston ) ` | 执行 ` level.scheduleTick(pos, this, this.getDelayAfterPlace()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EndDustBlock.java#L18) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` level.getFluidState(pos.above()).is(FluidTags.WATER) `<br>实现调用 ` level.getFluidState(pos.above()) `<br>实现调用 ` pos.above() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EndDustBlock.java#L29) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` level.getFluidState(neighborPos).is(FluidTags.WATER) `<br>实现调用 ` level.getFluidState(neighborPos) `<br>分支 ` (level.getFluidState(neighborPos).is(FluidTags.WATER)) ` 内调用 ` level.scheduleTick(pos, this, this.getDelayAfterPlace()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/EndDustBlock.java#L41) |

## ExcitedStateVoidMatterBlock

` public class ExcitedStateVoidMatterBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExcitedStateVoidMatterBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExcitedStateVoidMatterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExcitedStateVoidMatterBlock.java#L15) |
| ` public static List<Block> getDecayProducts() ` | 实现调用 ` ModBlocks.URANIUM_BLOCK.get() `<br>实现调用 ` ModBlocks.PLUTONIUM_BLOCK.get() `<br>实现调用 ` ModBlocks.SAPPHIRE_BLOCK.get() `<br>[调用处 DecayRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExcitedStateVoidMatterBlock.java#L87) |
| ` public static List<Block> getConfinedAnvilons() ` | 末尾返回 ` List.of( ModBlocks.CONFINED_TIME_ANVILON.get(), ModBlocks.CONFINED_SPACE_ANVILON.get(), ModBlocks.CONFINED_MASS_ANVILON.get(), ModBlocks.CONFINED_ENERGY_ANVILON.get() ) `<br>[调用处 DecayRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExcitedStateVoidMatterBlock.java#L101) |

## ExpCollectorBlock

` public class ExpCollectorBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L44) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L45) |
| ` public ExpCollectorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState( this.stateDefinition.any() .setValue(POWERED, false) .setValue(OVERLOAD, true) ) `<br>实现调用 ` this.stateDefinition.any() .setValue(POWERED, false) .setValue(OVERLOAD, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L52) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(POWERED, level.hasNeighborSignal(context.getClickedPos())) .setValue(OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L61) |
| ` @Override public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L137) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState blockState, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.EXP_COLLECTOR.get(), (world, pos, state, be) -> be.tick(world, pos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L173) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.EXP_COLLECTOR.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L189) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L199) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (blockEntity instanceof ExpCollectorBlockEntity be) ` 成立时提前返回 ` be.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpCollectorBlock.java#L204) |

## ExpFluidBlock

` public class ExpFluidBlock extends LiquidBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidBlock.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpFluidBlock(FlowingFluid fluid, Properties properties) ` | 执行 ` super(fluid, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L4412) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidBlock.java#L20) |
| ` @Override public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) ` | 实现调用 ` level.getFluidState(pos).isSource() `<br>实现调用 ` level.getFluidState(pos) `<br>分支 ` (entity instanceof ItemEntity item) ` 内调用 ` item.getBoundingBox() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidBlock.java#L24) |

## ExpFluidCauldronBlock

` public class ExpFluidCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidCauldronBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpFluidCauldronBlock(Properties properties) ` | 执行 ` super(properties, ModInteractionMap.EXP_FLUID) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidCauldronBlock.java#L23) |
| ` @Override public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) ` | 实现调用 ` this.isEntityInsideContent(state, pos, entity) `<br>分支 ` (entity instanceof ItemEntity item) ` 内调用 ` this.isFull(state) `<br>分支 ` (entity instanceof ItemEntity item) ` 内调用 ` item.getItem().copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidCauldronBlock.java#L27) |
| ` @Override public ItemInteractionResult useItemOn( ItemStack stack, BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (interaction == null) ` 成立时提前返回 ` ItemInteractionResult.PASS_TO_DEFAULT_BLOCK_INTERACTION `<br>末尾返回 ` interaction.interact(state, level, pos, player, hand, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidCauldronBlock.java#L51) |

## FeCollectorBlock

` public class FeCollectorBlock extends BetterBaseEntityBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L40) |
| ` public static BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L41) |
| ` public FeCollectorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition() .any() .setValue(AXIS, Direction.Axis.X) .setValue(POWERED, false) `<br>实现调用 ` this.getStateDefinition() .any() .setValue(AXIS, Direction.Axis.X) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L43) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(AXIS, axis) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L63) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L86) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` state.getValue(AXIS) == Direction.Axis.X ? SHAPE_X : SHAPE_Z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L91) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new FeCollectorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L101) |
| ` public void activate(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` level.setBlockAndUpdate(pos, state.setValue(POWERED, true)) `<br>实现调用 ` state.setValue(POWERED, true) `<br>实现调用 ` this.updateNeighbours(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L107) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` createTickerHelper( type, ModBlockEntities.FE_COLLECTOR.get(), FeCollectorBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FeCollectorBlock.java#L141) |

## FerriteCoreMagnetBlock

` public class FerriteCoreMagnetBlock extends MagnetBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FerriteCoreMagnetBlock.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FerriteCoreMagnetBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FerriteCoreMagnetBlock.java#L18) |
| ` @Override public void randomTick( BlockState blockState, ServerLevel serverLevel, BlockPos blockPos, RandomSource randomSource ) ` | 实现调用 ` Direction.values() `<br>实现调用 ` serverLevel.getBlockState(blockPos.relative(face)).is(ModBlocks.MAGNET_BLOCK.get()) `<br>实现调用 ` serverLevel.getBlockState(blockPos.relative(face)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FerriteCoreMagnetBlock.java#L22) |

## FireCauldronBlock

` public class FireCauldronBlock extends Layered4LevelCauldronBlock implements IHammerRemovable, IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FireCauldronBlock(Properties properties) ` | 执行 ` super(properties, CauldronInteraction.EMPTY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L28) |
| ` @Override public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) ` | 实现调用 ` this.isEntityInsideContent(state, pos, entity) `<br>分支 ` (this.isEntityInsideContent(state, pos, entity)) ` 内调用 ` entity.lavaHurt() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L32) |
| ` @Override public ItemStack getCloneItemStack(BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player) ` | 末尾返回 ` new ItemStack(Items.CAULDRON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L39) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean ignored) ` | 实现调用 ` level.getBlockState(pos.below()).is(ModBlocks.HEATER) `<br>实现调用 ` level.getBlockState(pos.below()) `<br>实现调用 ` pos.below() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L44) |
| ` @Override public boolean isIgnited(BlockCache cache, BlockPos pos) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L73) |
| ` @Override public void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 实现调用 ` ModBlocks.OIL_CAULDRON.getDefaultState() `<br>实现调用 ` cache.getBlockState(pos).getValue(FireCauldronBlock.LEVEL) `<br>实现调用 ` cache.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L78) |
| ` @Override public Fluid getFluid(BlockCache cache, BlockPos pos) ` | 末尾返回 ` ModFluids.OIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L88) |
| ` @Override public int getFluidAmount(BlockCache cache, BlockPos pos) ` | 末尾返回 ` cache.getBlockState(pos).getValue(FireCauldronBlock.LEVEL) * 250 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L93) |
| ` @Override public OptionalInt consumeOnce(BlockCache cache, BlockPos pos, boolean simulate) ` | ` (remaining < 0) ` 成立时提前返回 ` OptionalInt.empty() `<br>末尾返回 ` OptionalInt.of(AnvilCraft.CONFIG.machines.plasmaJets.cauldronExtraDuration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FireCauldronBlock.java#L98) |

## FishTankBlock

` public class FishTankBlock extends Block implements IMoveableEntityBlock, HammerRotateBehavior, IHammerRemovable, IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty TROPICAL ` | 初值 ` BooleanProperty.create("tropical") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L68) |
| ` public static final BooleanProperty OUTLET ` | 初值 ` BooleanProperty.create("outlet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L69) |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L70) |
| ` public static final VoxelShape SHAPE ` | 初值 ` ShapeUtil.cut( Shapes.block(), Block.box(2.0, 14.0, 2.0, 14.0, 16.0, 14.0), Block.box(1.0, 1.0, 1.0, 15.0, 14.0, 15.0) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L72) |
| ` public FishTankBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(FishTankBlock.TROPICAL, false) .setValue(FishTankBlock.OUTLET, false) `<br>实现调用 ` this.stateDefinition.any() .setValue(FishTankBlock.TROPICAL, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L78) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FishTankBlock.FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L108) |
| ` @Override public boolean hasDynamicLightEmission(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L146) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | ` (manager == null) ` 成立时提前返回 ` 0 `<br>末尾返回 ` manager.getLightAt(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L151) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` entity.isOnFire() `<br>分支 ` (entity.isOnFire()) ` 内调用 ` this.tryIgnite(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L169) |
| ` @Override public void dropMovingContents(Level level, BlockPos pos, BlockState state, BlockEntity blockEntity) ` | 实现调用 ` level.isClientSide() `<br>分支 ` (!level.isClientSide() && blockEntity instanceof FishTankBlockEntity tank) ` 内调用 ` tank.getItemHandler() `<br>分支 ` (!level.isClientSide() && blockEntity instanceof FishTankBlockEntity tank) ` 内调用 ` handler.getSlots() `<br>[调用处 FishTankBlock.onRemove](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L233) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L214) |
| ` public ItemInteractionResult changeOutlet(Level level, BlockPos pos, BlockState state, Player player, Direction outletDir) ` | 末尾返回 ` ItemInteractionResult.SUCCESS `<br>[调用处 FishTankBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L253) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L263) |
| ` public boolean tryIgnite(Level level, BlockPos pos) ` | ` (!(level.getBlockEntity(pos) instanceof FishTankBlockEntity tank)) ` 成立时提前返回 ` false `<br>` (!FishTankBlockEntity.canIgnite(tank.getFluidHandler().getFluid())) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FishTankBlock.stepOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L173) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L282) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.FISH_TANK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L317) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper(type, ModBlockEntities.FISH_TANK.get(), FishTankBlockEntity::serverTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L322) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean ignored) ` | 实现调用 ` this.isIgnited(new BlockCache(level), pos) `<br>实现调用 ` level.getBlockState(pos.below()).is(ModBlocks.HEATER) `<br>实现调用 ` level.getBlockState(pos.below()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L332) |
| ` @Override public boolean isEmpty(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .map(be -> be.getFluidHandler().getFluid().isEmpty()) .orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L361) |
| ` @Override public boolean isIgnited(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .map(FishTankBlockEntity::isIgnited) .orElse(false) `<br>[调用处 FishTankBlock.entityInside](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L209) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L368) |
| ` @Override public void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 执行 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .ifPresent(be -> be.setIgnited(ignited)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L375) |
| ` @Override public Fluid getFluid(BlockCache cache, BlockPos pos) ` | 实现调用 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) `<br>实现调用 ` cache.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L381) |
| ` @Override public int getFluidAmount(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Util.castSafely(cache.getBlockEntity(pos), FishTankBlockEntity.class) .map(be -> be.getFluidHandler().getFluidAmount()) .orElse(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L388) |
| ` @Override public OptionalInt consumeOnce(BlockCache cache, BlockPos pos, boolean simulate) ` | ` (beOp.isEmpty()) ` 成立时提前返回 ` OptionalInt.empty() `<br>` (!drained.is(ModFluidTags.OIL) \|\| drained.getAmount() != amount) ` 成立时提前返回 ` OptionalInt.empty() `<br>末尾返回 ` OptionalInt.of(AnvilCraft.CONFIG.machines.plasmaJets.fishTankExtraDuration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L395) |

## FlintBlock

` public class FlintBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FlintBlock.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FlintBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FlintBlock.java#L20) |
| ` public static void ignite(LevelAccessor level, BlockPos pos, boolean isFlint) ` | 实现调用 ` Direction.values() `<br>实现调用 ` level.getBlockState(pos.relative(direction)) `<br>实现调用 ` pos.relative(direction) `<br>[调用处 BlockBehaviourMixin.onPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlockBehaviourMixin.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FlintBlock.java#L24) |
