# dev.dubhe.anvilcraft.block.workstation.frost



## FrostAnvilBlock

` public class FrostAnvilBlock extends BetterAnvilBlock implements IHammerRemovable, IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostAnvilBlock.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostAnvilBlock.java#L42) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` FrostAnvilBlock.X_AXIS_AABB `<br>末尾返回 ` FrostAnvilBlock.Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostAnvilBlock.java#L46) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostAnvilBlock.java#L58) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new FrostAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), FrostAnvilBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostAnvilBlock.java#L72) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities(AnvilCraft.CONFIG.world.frostAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostAnvilBlock.java#L81) |

## FrostGrindstoneBlock

` public class FrostGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable, IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostGrindstoneBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostGrindstoneBlock.java#L29) |
| ` public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostGrindstoneBlock.java#L33) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider((i, inventory, player) -> new FrostGrindstoneMenu(i, inventory, ContainerLevelAccess.create(level, pos)), FrostGrindstoneBlock.CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostGrindstoneBlock.java#L47) |

## FrostSmithingTableBlock

` public class FrostSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable, IFrostBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostSmithingTableBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostSmithingTableBlock.java#L18) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new FrostSmithingMenu(i, inventory, ContainerLevelAccess.create(level, pos)), FrostSmithingTableBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/frost/FrostSmithingTableBlock.java#L22) |
