# dev.dubhe.anvilcraft.block.power.batch



## BaseBatchCraftingBlock

` public abstract class BaseBatchCraftingBlock extends BetterBaseEntityBlock implements HammerRotateBehavior, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L45)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` DirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L46) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L47) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L48) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L61) |
| ` @Override public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (be instanceof IDiskCloneable cloneable && stack.is(ModItems.DISK.get())) ` 成立时提前返回 ` cloneable.useDisk(level, player, hand, stack, hit) `<br>末尾返回 ` this.playerUse(level, pos, state, be, player, hand, hit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L75) |
| ` public abstract Item getToastSymbol() ` | 返回 ` Item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L108) |
| ` @Override public boolean useShapeForLightOcclusion(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L125) |
| ` @Override public VoxelShape getVisualShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 末尾返回 ` Shapes.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L130) |
| ` @Override public float getShadeBrightness(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L140) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L150) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` context.getNearestLookingDirection().getOpposite() `<br>实现调用 ` context.getNearestLookingDirection() `<br>实现调用 ` context.getPlayer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L155) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | 实现调用 ` state.getValue(BaseBatchCraftingBlock.POWERED) `<br>实现调用 ` level.hasNeighborSignal(pos) `<br>实现调用 ` level.setBlock(pos, state.cycle(BaseBatchCraftingBlock.POWERED), 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L184) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(BaseBatchCraftingBlock.FACING, rotation.rotate(state.getValue(BaseBatchCraftingBlock.FACING))) `<br>[调用处 BaseBatchCraftingBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L203) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L196) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(BaseBatchCraftingBlock.FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L201) |
| ` public static BlockState copy(BlockState from, BlockState to) ` | ` ( !(from.getBlock() instanceof BaseBatchCraftingBlock) \|\| !(to.getBlock() instanceof BaseBatchCraftingBlock) ) ` 成立时提前返回 ` to `<br>[调用处 BlockEventListener.onRightClickBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L206) |
| ` public static void registerBatchCrafting(Supplier<BaseBatchCraftingBlock> getter) ` | 执行 ` BaseBatchCraftingBlock.BATCH_CRAFTING_BLOCK_GETTERS.add(getter) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L1592) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L221) |
| ` public static @Unmodifiable List<Supplier<BaseBatchCraftingBlock>> getBatchCraftingBlockGetters() ` | 末尾返回 ` BaseBatchCraftingBlock.BATCH_CRAFTING_BLOCK_GETTERS `<br>[调用处 BlockEventListener.onRightClickBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BaseBatchCraftingBlock.java#L225) |

## BatchCrafterBlock

` public class BatchCrafterBlock extends BaseBatchCraftingBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCrafterBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCrafterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCrafterBlock.java#L31) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BatchCrafterBlockEntity(ModBlockEntities.BATCH_CRAFTER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCrafterBlock.java#L69) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.BATCH_CRAFTER.get(), (level1, pos, _, be) -> be.tick(level1, pos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCrafterBlock.java#L75) |
| ` @Override public Item getToastSymbol() ` | 末尾返回 ` Items.CRAFTER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCrafterBlock.java#L86) |

## BatchCutterBlock

` public class BatchCutterBlock extends BaseBatchCraftingBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCutterBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCutterBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCutterBlock.java#L31) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BatchCutterBlockEntity(ModBlockEntities.BATCH_CUTTER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCutterBlock.java#L69) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper( type, ModBlockEntities.BATCH_CUTTER.get(), (level1, pos, _, be) -> be.tick(level1, pos) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCutterBlock.java#L75) |
| ` @Override public Item getToastSymbol() ` | 末尾返回 ` Items.STONECUTTER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/batch/BatchCutterBlock.java#L86) |
