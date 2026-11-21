# dev.dubhe.anvilcraft.block（ResinBlock 至 SimpleConfinementAnvilonBlock）



## ResinBlock

` public class ResinBlock extends HalfTransparentBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ResinBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResinBlock(BlockBehaviour.Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ResinBlock.java#L14) |
| ` public void fallOn(Level level, BlockState state, BlockPos pos, Entity entity, float fallDistance) ` | 实现调用 ` entity.isSuppressingBounce() `<br>分支 ` (entity.isSuppressingBounce()) ` 内调用 ` super.fallOn(level, state, pos, entity, fallDistance) `<br>分支 ` !(entity.isSuppressingBounce()) ` 内调用 ` entity.causeFallDamage(fallDistance, 0.0F, level.damageSources().fall()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ResinBlock.java#L18) |
| ` public void updateEntityAfterFallOn(BlockGetter level, Entity entity) ` | 实现调用 ` entity.isSuppressingBounce() `<br>分支 ` (entity.isSuppressingBounce()) ` 内调用 ` super.updateEntityAfterFallOn(level, entity) `<br>分支 ` !(entity.isSuppressingBounce()) ` 内调用 ` this.bounceUp(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ResinBlock.java#L26) |
| ` public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` Math.abs(entity.getDeltaMovement().y) `<br>实现调用 ` entity.getDeltaMovement() `<br>实现调用 ` entity.isSteppingCarefully() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ResinBlock.java#L42) |
| ` @Override public boolean isSlimeBlock(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ResinBlock.java#L52) |

## RottenFleshBlock

` public class RottenFleshBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RottenFleshBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RottenFleshBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RottenFleshBlock.java#L13) |
| ` @Override public void fallOn(Level level, BlockState state, BlockPos pos, Entity entity, float fallDistance) ` | 实现调用 ` entity.causeFallDamage(fallDistance, 0.2f, level.damageSources().fall()) `<br>实现调用 ` level.damageSources().fall() `<br>实现调用 ` level.damageSources() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RottenFleshBlock.java#L17) |

## RoyalAnvilBlock

` public class RoyalAnvilBlock extends BetterAnvilBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalAnvilBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L40) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (direction.getAxis() == Direction.Axis.X) ` 成立时提前返回 ` X_AXIS_AABB `<br>末尾返回 ` Z_AXIS_AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L44) |
| ` @SuppressWarnings("UnreachableCode") @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L57) |
| ` @Override @Nullable public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new RoyalAnvilMenu(i, inventory, ContainerLevelAccess.create(level, pos)), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L72) |
| ` @Override public void falling(FallingBlockEntity entity) ` | 实现调用 ` entity.setHurtsEntities((float) AnvilCraft.CONFIG.world.royalAnvilFallDamagePerBlock, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalAnvilBlock.java#L80) |

## RoyalGrindstoneBlock

` public class RoyalGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalGrindstoneBlock.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalGrindstoneBlock.java#L24) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.sidedSuccess(level.isClientSide()) `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalGrindstoneBlock.java#L28) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new RoyalGrindstoneMenu( i, inventory, ContainerLevelAccess.create(level, pos) ), CONTAINER_TITLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalGrindstoneBlock.java#L39) |

## RoyalSmithingTableBlock

` public class RoyalSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalSmithingTableBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalSmithingTableBlock.java#L17) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 末尾返回 ` new SimpleMenuProvider( (i, inventory, player) -> new RoyalSmithingMenu( i, inventory, ContainerLevelAccess.create(level, pos) ), CONTAINER_TITLE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RoyalSmithingTableBlock.java#L21) |

## RubyLaserBlock

` public class RubyLaserBlock extends BaseLaserBlock implements IHammerRemovable, HammerRotateBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape UP_MODEL ` | 初值 ` Shapes.or(Block.box(4, 3, 4, 12, 13, 12), Block.box(5, 13, 5, 11, 16, 11), Block.box(3, 0, 3, 13, 3, 13)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L36) |
| ` public static final VoxelShape DOWN_MODEL ` | 初值 ` Shapes.or(Block.box(4, 3, 4, 12, 13, 12), Block.box(5, 0, 5, 11, 3, 11), Block.box(3, 13, 3, 13, 16, 13)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L38) |
| ` public static final VoxelShape NORTH_MODEL ` | 初值 ` Shapes.or(Block.box(4, 4, 3, 12, 12, 13), Block.box(5, 5, 0, 11, 11, 3), Block.box(3, 3, 13, 13, 13, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L40) |
| ` public static final VoxelShape SOUTH_MODEL ` | 初值 ` Shapes.or(Block.box(4, 4, 3, 12, 12, 13), Block.box(5, 5, 13, 11, 11, 16), Block.box(3, 3, 0, 13, 13, 3)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L42) |
| ` public static final VoxelShape WEST_MODEL ` | 初值 ` Shapes.or(Block.box(3, 4, 4, 13, 12, 12), Block.box(0, 5, 5, 3, 11, 11), Block.box(13, 3, 3, 16, 13, 13)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L44) |
| ` public static final VoxelShape EAST_MODEL ` | 初值 ` Shapes.or(Block.box(3, 4, 4, 13, 12, 12), Block.box(13, 5, 5, 16, 11, 11), Block.box(0, 3, 3, 3, 13, 13)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L46) |
| ` public static final DirectionProperty FACING ` | 初值 ` DirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L48) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L49) |
| ` public static final EnumProperty<IPowerComponent.Switch> SWITCH ` | 初值 ` IPowerComponent.SWITCH ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L50) |
| ` public RubyLaserBlock(Properties properties) ` | 方块状态注册<br>实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(FACING, Direction.DOWN) .setValue(OVERLOAD, true) `<br>实现调用 ` this.stateDefinition .any() .setValue(FACING, Direction.DOWN) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L55) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` RubyLaserBlockEntity.createBlockEntity(ModBlockEntities.RUBY_LASER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L74) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L80) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L96) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, context.getNearestLookingDirection()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L106) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.RUBY_LASER.get(), (level1, pos, state1, entity) -> entity.tick(level1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyLaserBlock.java#L111) |

## RubyPrismBlock

` public class RubyPrismBlock extends BaseLaserBlock implements IHammerRemovable, HammerRotateBehavior, IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape UP_MODEL ` | 初值 ` Shapes.or(Block.box(0, 0, 0, 16, 4, 16), Block.box(2, 4, 2, 14, 14, 14), Block.box(4, 14, 4, 12, 16, 12)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L34) |
| ` public static final VoxelShape DOWN_MODEL ` | 初值 ` Shapes.or(Block.box(0, 12, 0, 16, 16, 16), Block.box(2, 2, 2, 14, 12, 14), Block.box(4, 0, 4, 12, 2, 12)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L36) |
| ` public static final VoxelShape NORTH_MODEL ` | 初值 ` Shapes.or(Block.box(0, 0, 12, 16, 16, 16), Block.box(2, 2, 2, 14, 14, 12), Block.box(4, 4, 0, 12, 12, 2)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L38) |
| ` public static final VoxelShape SOUTH_MODEL ` | 初值 ` Shapes.or(Block.box(0, 0, 0, 16, 16, 4), Block.box(2, 2, 4, 14, 14, 14), Block.box(4, 4, 14, 12, 12, 16)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L40) |
| ` public static final VoxelShape WEST_MODEL ` | 初值 ` Shapes.or(Block.box(12, 0, 0, 16, 16, 16), Block.box(2, 2, 2, 12, 14, 14), Block.box(0, 4, 4, 2, 12, 12)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L42) |
| ` public static final VoxelShape EAST_MODEL ` | 初值 ` Shapes.or(Block.box(0, 0, 0, 4, 16, 16), Block.box(4, 2, 2, 14, 14, 14), Block.box(14, 4, 4, 16, 12, 12)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L44) |
| ` public static final DirectionProperty FACING ` | 初值 ` DirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L46) |
| ` public RubyPrismBlock(Properties properties) ` | 方块状态注册<br>实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(FACING, Direction.DOWN)) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.DOWN) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L51) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` RubyPrismBlockEntity.createBlockEntity(ModBlockEntities.RUBY_PRISM.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L66) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>实现调用 ` state.getValue(FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L72) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L89) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, context.getNearestLookingDirection()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L99) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.RUBY_PRISM.get(), (level1, pos, state1, entity) -> entity.tick(level1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L104) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity be) ` | 分支 ` (be instanceof BaseLaserBlockEntity laserBlockEntity) ` 内调用 ` laserBlockEntity.resetLaserStateAfterMove() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RubyPrismBlock.java#L123) |

## RuinsBlock

` public class RuinsBlock extends BaseEntityBlock implements IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty MOVABLE ` | 初值 ` BooleanProperty.create("movable") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L40) |
| ` public RuinsBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(MOVABLE, true)) `<br>实现调用 ` this.stateDefinition.any().setValue(MOVABLE, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L42) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new RuinsBlockEntity(ModBlockEntities.RUINS_BLOCK.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L57) |
| ` @Override public PushReaction getPistonPushReaction(BlockState state) ` | 末尾返回 ` state.getValue(MOVABLE) ? PushReaction.NORMAL : PushReaction.BLOCK ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L62) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity entity) ` | 分支 ` (entity instanceof RuinsBlockEntity ruins) ` 内调用 ` ruins.invalidateDisplayEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L67) |
| ` @Override public List<ItemStack> getDrops(BlockState state, LootParams.Builder params) ` | 末尾返回 ` params.getOptionalParameter(LootContextParams.BLOCK_ENTITY) instanceof RuinsBlockEntity ruins && RuinsStructure.isMainPart(ruins) ? ruins.getDrops(params) : List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L72) |
| ` public static BlockState connectedDisplayState(BlockGetter level, BlockPos pos, BlockState state) ` | ` (state.getBlock() instanceof RedstoneWireBlock wire) ` 成立时提前返回 ` wire.connectionState(level, pos, state) `<br>` (state.getBlock() instanceof RedStoneWireBlock wire) ` 成立时提前返回 ` ((RedStoneWireBlockAccessor) wire).anvilcraft$getConnectionState(level, state, pos) `<br>末尾返回 ` state `<br>[调用处 RuinsBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L124) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins ? ruins.getDisplayState().getLightEmission(new RuinsBlockView(level), pos) : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L132) |
| ` @Override public boolean canConnectRedstone(BlockState state, BlockGetter level, BlockPos pos, @Nullable Direction direction) ` | 末尾返回 ` level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins && ruins.getDisplayState().getBlock().canConnectRedstone(ruins.getDisplayState(), level, pos, direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L156) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L162) |

## RuinsBlockView

` public record RuinsBlockView(BlockGetter level) implements BlockGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public BlockState getBlockState(BlockPos pos) ` | 末尾返回 ` this.level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins ? ruins.getDisplayState() : this.level.getBlockState(pos) `<br>[调用处 RuinsBlockView.getFluidState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L13) |
| ` @Override @Nullable public BlockEntity getBlockEntity(BlockPos pos) ` | 末尾返回 ` entity instanceof RuinsBlockEntity ruins ? ruins.getDisplayEntity() : entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L19) |
| ` @Override public FluidState getFluidState(BlockPos pos) ` | 末尾返回 ` this.getBlockState(pos).getFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L26) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.level.getHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L31) |
| ` @Override public int getMinBuildHeight() ` | 末尾返回 ` this.level.getMinBuildHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L36) |
| ` public RuinsBlockView(BlockGetter level) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12) |
| ` public BlockGetter level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12) |

## RuinsStructure

` public final class RuinsStructure `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isMultipart(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof AbstractMultiPartBlock<?> `<br>[调用处 RuinsBlock.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L21) |
| ` public static boolean isMainPart(RuinsBlockEntity ruins) ` | 末尾返回 ` !isMultipart(state) \|\| ((AbstractMultiPartBlock<?>) state.getBlock()).isMainPart(state) `<br>[调用处 RuinsBlock.getDrops](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L25) |
| ` public static RuinsBlockEntity main(Level level, RuinsBlockEntity ruins) ` | ` (!isMultipart(state)) ` 成立时提前返回 ` ruins `<br>` (level.isLoaded(main) && level.getBlockEntity(main) instanceof RuinsBlockEntity candidate && candidate.getDisplayState().is(state.getBlock()) && isMainPart(candidate)) ` 成立时提前返回 ` candidate `<br>末尾返回 ` ruins `<br>[调用处 RuinsBlock.useWithoutItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L30) |
| ` public static boolean canInteract(Player player, RuinsBlockEntity ruins) ` | ` (player.canInteractWithBlock(ruins.getBlockPos(), 1.0)) ` 成立时提前返回 ` true `<br>末尾返回 ` false `<br>[调用处 RuinsUpdatePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L39) |
| ` public static void destroyOthers(Level level, RuinsBlockEntity ruins, boolean drops, @Nullable Entity actor) ` | 实现调用 ` REMOVING.get() `<br>实现调用 ` isMultipart(ruins.getDisplayState()) `<br>实现调用 ` ruins.getDisplayState() `<br>[调用处 RuinsBlock.useWithoutItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L47) |

## SiftingTableBlock

` public class SiftingTableBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SiftingTableBlock.java#L12)

过筛台：在台面上放置原料，铁砧砸落时执行过筛配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SiftingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SiftingTableBlock.java#L13) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.SIFTING_TABLE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SiftingTableBlock.java#L17) |

## SimpleChuteBlock

` public class SimpleChuteBlock extends BaseEntityBlock implements SimpleWaterloggedBlock, IHammerChangeable, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING_HOPPER ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L54) |
| ` public static final BooleanProperty ENABLED ` | 初值 ` BlockStateProperties.ENABLED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L55) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L56) |
| ` public static final BooleanProperty TALL ` | 初值 ` BooleanProperty.create("tall") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L57) |
| ` public static final VoxelShape AABB ` | 初值 ` Block.box(2, 0, 2, 14, 12, 14) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L59) |
| ` public static final VoxelShape AABB_TALL ` | 初值 ` Block.box(2, 0, 2, 14, 16, 14) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L60) |
| ` public static final VoxelShape AABB_N ` | 初值 ` Block.box(4, 4, 0, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L61) |
| ` public static final VoxelShape AABB_TALL_N ` | 初值 ` Shapes.join(Block.box(4, 4, 0, 12, 12, 12), Block.box(2, 8, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L62) |
| ` public static final VoxelShape AABB_E ` | 初值 ` Block.box(4, 4, 4, 16, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L64) |
| ` public static final VoxelShape AABB_TALL_E ` | 初值 ` Shapes.join(Block.box(4, 4, 4, 16, 12, 12), Block.box(2, 8, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L65) |
| ` public static final VoxelShape AABB_S ` | 初值 ` Block.box(4, 4, 4, 12, 12, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L67) |
| ` public static final VoxelShape AABB_TALL_S ` | 初值 ` Shapes.join(Block.box(4, 4, 4, 12, 12, 16), Block.box(2, 8, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L68) |
| ` public static final VoxelShape AABB_W ` | 初值 ` Block.box(0, 4, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L70) |
| ` public static final VoxelShape AABB_TALL_W ` | 初值 ` Shapes.join(Block.box(0, 4, 4, 12, 12, 12), Block.box(2, 8, 2, 14, 16, 14), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L71) |
| ` public SimpleChuteBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(FACING, Direction.DOWN) .setValue(WATERLOGGED, false) `<br>实现调用 ` this.stateDefinition .any() .setValue(FACING, Direction.DOWN) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L74) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new SimpleChuteBlockEntity(ModBlockEntities.SIMPLE_CHUTE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L89) |
| ` @Override public ItemStack getCloneItemStack( BlockState state, HitResult target, LevelReader level, BlockPos pos, Player player ) ` | 末尾返回 ` new ItemStack(ModBlocks.CHUTE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L132) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` state.getValue(ENABLED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>分支 ` (!state.getValue(ENABLED) && !level.hasNeighborSignal(pos)) ` 内调用 ` level.setBlock(pos, state.cycle(ENABLED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L143) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L155) |
| ` @Override public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) ` | 实现调用 ` state.is(newState.getBlock()) `<br>实现调用 ` newState.getBlock() `<br>分支 ` (!state.is(newState.getBlock())) ` 内调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L160) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.SIMPLE_CHUTE.get(), ((level1, blockPos, blockState, blockEntity) -> blockEntity.tick())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L184) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (!state.getValue(TALL)) ` 成立时提前返回 ` switch (facing) { case NORTH -> AABB_N; case EAST -> AABB_E; case SOUTH -> AABB_S; case WEST -> AABB_W; default -> AABB; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L194) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L221) |
| ` @Override public int getAnalogOutputSignal(BlockState blockState, Level level, BlockPos blockPos) ` | ` (blockEntity instanceof SimpleChuteBlockEntity chuteBlockEntity) ` 成立时提前返回 ` chuteBlockEntity.getRedstoneSignal() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L226) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L235) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L240) |
| ` @Override public Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L260) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L265) |
| ` @SuppressWarnings("deprecation") @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` state.rotate(mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L270) |
| ` @Override public boolean canBeReplaced(BlockState state, net.minecraft.world.level.material.Fluid fluid) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L305) |
| ` @Override public boolean canBeReplaced(BlockState state, net.minecraft.world.item.context.BlockPlaceContext context) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L311) |

## SimpleConfinementAnvilonBlock

` public class SimpleConfinementAnvilonBlock extends Block implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleConfinementAnvilonBlock.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleConfinementAnvilonBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleConfinementAnvilonBlock.java#L10) |
| ` @Override public PushReaction getPistonPushReaction(BlockState state) ` | 末尾返回 ` PushReaction.DESTROY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleConfinementAnvilonBlock.java#L14) |
