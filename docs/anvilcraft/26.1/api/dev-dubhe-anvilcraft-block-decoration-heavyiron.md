# dev.dubhe.anvilcraft.block.decoration.heavyiron



## HeavyIronBeamBlock

` public class HeavyIronBeamBlock extends Block implements IHammerRemovable, HammerRotateBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape AABB_X ` | 初值 ` Shapes.join(Block.box(0, 12, 0, 16, 16, 16), Block.box(0, 0, 4, 16, 12, 12), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L24) |
| ` public static final VoxelShape AABB_Z ` | 初值 ` Shapes.join(Block.box(0, 12, 0, 16, 16, 16), Block.box(4, 0, 0, 12, 12, 16), BooleanOp.OR) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L26) |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.HORIZONTAL_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L29) |
| ` public HeavyIronBeamBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(HeavyIronBeamBlock.AXIS, Direction.Axis.X)) `<br>实现调用 ` this.getStateDefinition().any().setValue(HeavyIronBeamBlock.AXIS, Direction.Axis.X) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L31) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(HeavyIronBeamBlock.AXIS, context.getHorizontalDirection().getOpposite().getAxis()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L36) |
| ` @Override public VoxelShape getShape( BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>` (blockState.getValue(HeavyIronBeamBlock.AXIS) == Direction.Axis.X) ` 成立时提前返回 ` HeavyIronBeamBlock.AABB_X ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronBeamBlock.java#L48) |

## HeavyIronDoorBlock

` public class HeavyIronDoorBlock extends DoorBlock implements IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronDoorBlock.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyIronDoorBlock(Properties properties) ` | 执行 ` super(BlockSetType.IRON, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronDoorBlock.java#L28) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` blockpos.getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronDoorBlock.java#L37) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronDoorBlock.java#L124) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` DoorBlock.FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronDoorBlock.java#L140) |

## HeavyIronPlateBlock

` public class HeavyIronPlateBlock extends Block implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronPlateBlock.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape AABB ` | 初值 ` Block.box(0, 12, 0, 16, 16, 16) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronPlateBlock.java#L13) |
| ` public HeavyIronPlateBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronPlateBlock.java#L15) |
| ` @Override public VoxelShape getShape( BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` HeavyIronPlateBlock.AABB ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronPlateBlock.java#L19) |

## HeavyIronTrapdoorBlock

` public class HeavyIronTrapdoorBlock extends TrapDoorBlock implements IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronTrapdoorBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyIronTrapdoorBlock(Properties properties) ` | 执行 ` super(BlockSetType.IRON, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronTrapdoorBlock.java#L26) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>` (bs.isEmpty()) ` 成立时提前返回 ` bs `<br>末尾返回 ` bs.setValue(TrapDoorBlock.POWERED, hasSignal).setValue(TrapDoorBlock.OPEN, hasSignal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronTrapdoorBlock.java#L40) |
| ` @Override public boolean change(Player player, BlockPos pos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronTrapdoorBlock.java#L89) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState state) ` | 末尾返回 ` HorizontalDirectionalBlock.FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronTrapdoorBlock.java#L97) |

## HeavyIronWallBlock

` public class HeavyIronWallBlock extends WallBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronWallBlock.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyIronWallBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronWallBlock.java#L8) |
| ` @Override public boolean supportsExternalFaceHiding(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/heavyiron/HeavyIronWallBlock.java#L12) |
