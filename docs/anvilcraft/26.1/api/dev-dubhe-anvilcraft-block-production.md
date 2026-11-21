# dev.dubhe.anvilcraft.block.production



## CrabTrapBlock

` public class CrabTrapBlock extends Block implements SimpleWaterloggedBlock, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L42) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L43) |
| ` public static final IntegerProperty FISHING ` | 初值 ` IntegerProperty.create("fishing", 0, 15) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L44) |
| ` public CrabTrapBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(CrabTrapBlock.FACING, Direction.NORTH) `<br>实现调用 ` this.getStateDefinition().any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L46) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` this.defaultBlockState() .setValue(CrabTrapBlock.FACING, context.getHorizontalDirection().getOpposite()) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` context.getHorizontalDirection().getOpposite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L56) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(CrabTrapBlock.WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L74) |
| ` @Override public boolean isRandomlyTicking(BlockState state) ` | 末尾返回 ` state.getValue(CrabTrapBlock.WATERLOGGED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L79) |
| ` @Override public void randomTick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 实现调用 ` Direction.values() `<br>实现调用 ` level.getFluidState(pos.relative(direction)).is(Fluids.WATER) `<br>实现调用 ` level.getFluidState(pos.relative(direction)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L84) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(CrabTrapBlock.FACING, rotation.rotate(state.getValue(CrabTrapBlock.FACING))) `<br>[调用处 CrabTrapBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L146) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L139) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(CrabTrapBlock.FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L144) |
| ` public static List<ItemStack> generateLoot(ServerLevel level, BlockPos pos, ResourceKey<LootTable> loot) ` | 末尾返回 ` lootTable.getRandomItems(lootParams) `<br>[调用处 HitCrabTrapBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/CrabTrapBlock.java#L149) |

## MineralFountainBlock

` public class MineralFountainBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/MineralFountainBlock.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/MineralFountainBlock.java#L24) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new MineralFountainBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/MineralFountainBlock.java#L33) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( blockEntityType, ModBlockEntities.MINERAL_FOUNTAIN.get(), (_, _, _, entity) -> entity.tick()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/MineralFountainBlock.java#L39) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/production/MineralFountainBlock.java#L50) |
