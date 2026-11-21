# dev.dubhe.anvilcraft.block.decoration.ember



## EmberMetalBlock

` public class EmberMetalBlock extends Block implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalBlock(Properties properties, boolean cut) ` | 余烬金属方块，切割变体使用另一条吸水概率配置。<br>参数 ` cut ` 是否为切割变体，用于选择对应的吸水概率配置<br>实现调用 ` super(properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L2688) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalBlock.java#L25) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalBlock.java#L30) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= chance) ` 内调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalBlock.java#L35) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalBlock.java#L13) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalBlock.java#L13) |

## EmberMetalPillarBlock

` public class EmberMetalPillarBlock extends RotatedPillarBlock implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalPillarBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalPillarBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalPillarBlock.java#L17) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalPillarBlock.java#L21) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalPillarBlock.java#L26) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalPillarBlock.java#L12) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalPillarBlock.java#L12) |

## EmberMetalSlabBlock

` public class EmberMetalSlabBlock extends SlabBlock implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalSlabBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalSlabBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalSlabBlock.java#L19) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` state.getValue(SlabBlock.WATERLOGGED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalSlabBlock.java#L23) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.playSound(null, pos, SoundEvents.LAVA_EXTINGUISH, SoundSource.BLOCKS, 1.0F, 1.0F) `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.setBlock(pos, state.setValue(SlabBlock.WATERLOGGED, false), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalSlabBlock.java#L28) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalSlabBlock.java#L14) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalSlabBlock.java#L14) |

## EmberMetalStairBlock

` public class EmberMetalStairBlock extends StairBlock implements IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalStairBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalStairBlock(BlockState baseState, Properties properties) ` | 执行 ` super(baseState, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L2769) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalStairBlock.java#L20) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` state.getValue(SlabBlock.WATERLOGGED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalStairBlock.java#L24) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.playSound(null, pos, SoundEvents.LAVA_EXTINGUISH, SoundSource.BLOCKS, 1.0F, 1.0F) `<br>分支 ` (random.nextDouble() <= 0.1) ` 内调用 ` level.setBlock(pos, state.setValue(SlabBlock.WATERLOGGED, false), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalStairBlock.java#L29) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalStairBlock.java#L15) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ember/EmberMetalStairBlock.java#L15) |
