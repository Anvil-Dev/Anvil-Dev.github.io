# dev.dubhe.anvilcraft.block.workstation.royal



## RoyalAnvilBlock

` public class RoyalAnvilBlock extends BetterAnvilBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L41) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` RoyalAnvilBlock.X_AXIS_AABB `<br>末尾返回 ` RoyalAnvilBlock.Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L45) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L58) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new RoyalAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), RoyalAnvilBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L72) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities(AnvilCraft.CONFIG.world.royalAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalAnvilBlock.java#L81) |

## RoyalGrindstoneBlock

` public class RoyalGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalGrindstoneBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalGrindstoneBlock.java#L25) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide()) ` 成立时提前返回 ` Util.sidedSuccess(level) `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalGrindstoneBlock.java#L29) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new RoyalGrindstoneMenu( i, inventory, ContainerLevelAccess.create(level, pos) ), RoyalGrindstoneBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalGrindstoneBlock.java#L40) |

## RoyalSmithingTableBlock

` public class RoyalSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalSmithingTableBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalSmithingTableBlock.java#L17) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, _) -> new RoyalSmithingMenu( i, inventory, ContainerLevelAccess.create(level, pos) ), RoyalSmithingTableBlock.CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/royal/RoyalSmithingTableBlock.java#L21) |
