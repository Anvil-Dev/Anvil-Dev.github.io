# dev.dubhe.anvilcraft.block.workstation.ember



## EmberAnvilBlock

` public class EmberAnvilBlock extends BetterAnvilBlock implements IHammerRemovable, IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L50) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` EmberAnvilBlock.X_AXIS_AABB `<br>末尾返回 ` EmberAnvilBlock.Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L54) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L67) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new EmberAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), EmberAnvilBlock.CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L82) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities(AnvilCraft.CONFIG.world.emberAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L91) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L100) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= AnvilCraft.CONFIG.world.emberBlockWaterAbsorptionChance) ` 内调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L105) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L36) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberAnvilBlock.java#L36) |

## EmberGrindstoneBlock

` public class EmberGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable, IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L33) |
| ` public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L37) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new EmberGrindstoneMenu(i, inventory, ContainerLevelAccess.create(level, pos)), EmberGrindstoneBlock.CONTAINER_TITLE) `<br>[调用处 EmberGrindstoneBlock.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L51) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L59) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= AnvilCraft.CONFIG.world.emberBlockWaterAbsorptionChance) ` 内调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L64) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L27) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberGrindstoneBlock.java#L27) |

## EmberSmithingTableBlock

` public class EmberSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable, IEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L37) |
| ` public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME `<br>[调用处 EmberSmithingTableBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L65) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new EmberSmithingMenu(i, inventory, ContainerLevelAccess.create(level, pos)), EmberSmithingTableBlock.CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L79) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L87) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` random.nextDouble() `<br>分支 ` (random.nextDouble() <= AnvilCraft.CONFIG.world.emberBlockWaterAbsorptionChance) ` 内调用 ` this.tryAbsorbWater(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L92) |
| ` public BlockState getCheckBlockState() ` | 末尾返回 ` this.checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L30) |
| ` public void setCheckBlockState(final BlockState checkBlockState) ` | 执行 ` this.checkBlockState = checkBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/ember/EmberSmithingTableBlock.java#L30) |
