# dev.dubhe.anvilcraft.block.logistics



## ItemSplitterBlock

` public class ItemSplitterBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L36)

物品分配器。 完整方块，支持六个朝向。内部有 16 格容量且可以混装多种物品， 可以用漏斗或溜槽输入输出；空手右键可以取出内部物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L37) |
| ` public ItemSplitterBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(FACING, Direction.NORTH)) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L39) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L44) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L75) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L85) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ItemSplitterBlockEntity(ModBlockEntities.ITEM_SPLITTER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L90) |
| ` @Override public <T extends BlockEntity> @Nullable BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.ITEM_SPLITTER.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L95) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L109) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` state.rotate(mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L114) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (!player.getMainHandItem().isEmpty()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!(level.getBlockEntity(pos) instanceof ItemSplitterBlockEntity splitter)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/ItemSplitterBlock.java#L119) |
