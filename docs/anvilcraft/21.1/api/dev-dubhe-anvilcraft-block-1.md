# dev.dubhe.anvilcraft.block（AbstractCakeBlock 至 BlockComparatorBlock）



## AbstractCakeBlock

` public class AbstractCakeBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbstractCakeBlock(Properties properties) ` | 执行 ` super(properties.pushReaction(PushReaction.NORMAL)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L25) |
| ` public int getFoodLevel() ` | 末尾返回 ` 0 `<br>[调用处 AbstractCakeBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L102) |
| ` public float getSaturationLevel() ` | 末尾返回 ` 0 `<br>[调用处 AbstractCakeBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L106) |

## AbstractStoragePortBlock

` public abstract class AbstractStoragePortBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L37)

仓储端口方块父类：把左右键行为重定向到 IStoragePort 的实现。 右键走原版方块交互入口，转发给 IStoragePort#onRightClick；左键没有原版方块入口 （挖掘在网络层被事件拦截），因此由 #interceptsLeftClick 判定是否拦截挖掘、 #onLeftClick 执行服务端行为，两者分别由左键事件与取出请求包调用。 三个端口都没有容积以外的特殊交互，渲染形状统一为模型，故一并放在父类里。 外观由 #TYPE 决定：连接的核心是潜影集装箱还是超维存储站， 由各端口方块实体在重校验相连关系时用 #refreshType 刷新。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<StoragePortType> TYPE ` | 端口外观类型：连接的核心是潜影集装箱（sc）还是超维存储站（hd）<br>初值 ` EnumProperty.create("type", StoragePortType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L39) |
| ` public static void refreshType(Level level, BlockPos pos, @Nullable BlockPos core) ` | 按连通组件的核心刷新端口外观：唯一核心是超维存储站时显示 hd，其余情况显示 sc。 未连接核心、连接多个核心（连通组件接触多个核心时不工作）以及核心仍是潜影集装箱时 都回到 sc。外观在服务端推导，经方块状态同步给客户端。<br>参数 ` level ` 世界<br>参数 ` pos ` 端口位置<br>参数 ` core ` 连通组件接触到的唯一核心主方块坐标；没有核心或连接多个核心时为 null<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.hasProperty(AbstractStoragePortBlock.TYPE) `<br>实现调用 ` level.getBlockState(core).getBlock() `<br>[调用处 StorageFluidPortBlockEntity.validateLink](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L441) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L63) |
| ` public boolean interceptsLeftClick(Level level, BlockPos pos, Player player, @Nullable BlockHitResult hit) ` | 该左键是否属于端口行为（拦截挖掘）。<br>参数 ` player ` 玩家<br>参数 ` hit ` 左键命中点；无法取得时为 null<br>返回 是否拦截挖掘<br>末尾返回 ` level.getBlockEntity(pos) instanceof IStoragePort port && port.interceptsLeftClick(player, hit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L108) |
| ` public boolean onLeftClick(Level level, BlockPos pos, Player player) ` | 执行端口的左键行为（仅服务端调用）。<br>返回 是否已处理<br>` (!(level.getBlockEntity(pos) instanceof IStoragePort port)) ` 成立时提前返回 ` false `<br>末尾返回 ` port.onClick(ClickAction.PRIMARY, player, InteractionHand.MAIN_HAND, ports) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L117) |

## AccelerationRingBlock

` public class AccelerationRingBlock extends WaterloggedFlexibleMultiPartBlock<DirectionCube3x3PartHalf, DirectionProperty, Direction> implements MultiPartBlockEntity<DirectionCube3x3PartHalf, AccelerationRingBlock>, IHammerRemovable, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L46)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<DirectionCube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", DirectionCube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L48) |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L49) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L50) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L51) |
| ` public static final EnumProperty<IPowerComponent.Switch> SWITCH ` | 初值 ` IPowerComponent.SWITCH ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L52) |
| ` public AccelerationRingBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition .any() .setValue(HALF, DirectionCube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition .any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L68) |
| ` @Override public Property<DirectionCube3x3PartHalf> getPart() ` | 末尾返回 ` HALF `<br>[调用处 AccelerationRingBlock.placedState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L154) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L131) |
| ` @Override public DirectionCube3x3PartHalf[] getParts() ` | 末尾返回 ` DirectionCube3x3PartHalf.values() `<br>[调用处 AccelerationRingBlock.isChannelWaterlogged](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L171) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L136) |
| ` @Override public DirectionProperty getAdditionalProperty() ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L141) |
| ` @Override public BlockState placedState(DirectionCube3x3PartHalf part, BlockState state) ` | 末尾返回 ` state .setValue(this.getPart(), part) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L151) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.waterloggedStateForPlacement(context, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L157) |
| ` public boolean isChannelWaterlogged(Level level, BlockPos mainPos, BlockState mainState) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L169) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 实现调用 ` Arrays.stream(this.getParts()) `<br>实现调用 ` this.getParts() `<br>实现调用 ` state.getValue(SWITCH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L187) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | ` (isChannelPart(state.getValue(HALF), axis)) ` 成立时提前返回 ` Shapes.empty() `<br>末尾返回 ` COLLISION_SHAPES.get(axis).get(state.getValue(HALF)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L221) |
| ` @Override public AccelerationRingBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L243) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.ACCELERATION_RING.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L248) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` (level1, pos, state1, entity) -> { if (entity instanceof AccelerationRingBlockEntity be) be.tick(); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L253) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L265) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AccelerationRingBlock.java#L271) |

## ActiveSilencerBlock

` public class ActiveSilencerBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L39) |
| ` public ActiveSilencerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(POWERED, false)) `<br>实现调用 ` getStateDefinition().any().setValue(POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L41) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new ActiveSilencerBlockEntity(ModBlockEntities.ACTIVE_SILENCER.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L63) |
| ` @Override public @Nullable BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState().setValue(POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L69) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L137) |
| ` public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 末尾返回 ` SHAPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ActiveSilencerBlock.java#L142) |

## AdvancedComparatorBlock

` public class AdvancedComparatorBlock extends HorizontalDirectionalBlock implements IMoveableEntityBlock, IHammerRemovable, MountedRedstone `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AdvancedComparatorBlock> CODEC ` | 初值 ` simpleCodec(AdvancedComparatorBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L58) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L60) |
| ` public static final BooleanProperty INPUT ` | 初值 ` BooleanProperty.create("input") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L61) |
| ` public static final IntegerProperty POWER ` | 初值 ` IntegerProperty.create("power", 0, 15) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L62) |
| ` public static final EnumProperty<Mode> MODE ` | 初值 ` EnumProperty.create("mode", Mode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L63) |
| ` public AdvancedComparatorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.NORTH) .setValue(ATTACHMENT, Direction.DOWN) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L71) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new AdvancedComparatorBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L99) |
| ` @Override public boolean canConnectRedstone(BlockState state, BlockGetter level, BlockPos pos, @Nullable Direction direction) ` | 末尾返回 ` direction != null && direction.getAxis() != state.getValue(ATTACHMENT).getAxis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L104) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` MountedRedstone.placementState(this.defaultBlockState(), context, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L139) |
| ` @Override public void setPlacedBy(Level level, BlockPos pos, BlockState state, @Nullable LivingEntity placer, ItemStack stack) ` | 执行 ` level.scheduleTick(pos, this, getDelay()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L144) |
| ` public void update(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockEntity(pos) `<br>实现调用 ` comparator.getCompareMode() `<br>实现调用 ` comparator.getHighLimit() `<br>[调用处 AdvancedComparatorBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L258) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L175) |
| ` public static int getInputSignal(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` i `<br>[调用处 AdvancedComparatorBlockEntity.updateInputtingSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/AdvancedComparatorBlockEntity.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L206) |
| ` public static int getAlternateSignal(SignalGetter level, BlockPos pos, BlockState state, boolean isHigh) ` | 实现调用 ` MountedRedstone.worldDirection(state.getValue(ATTACHMENT), state.getValue(FACING).getClockWise()) `<br>实现调用 ` state.getValue(ATTACHMENT) `<br>实现调用 ` state.getValue(FACING).getClockWise() `<br>[调用处 AdvancedComparatorBlockEntity.updateInputtingSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/AdvancedComparatorBlockEntity.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L245) |
| ` @Override public boolean getWeakChanges(BlockState state, LevelReader world, BlockPos pos) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L294) |
| ` public static int getDelay() ` | 末尾返回 ` 1 `<br>[调用处 AdvancedComparatorScreen.onClose](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L299) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity be) ` | 分支 ` (be instanceof AdvancedComparatorBlockEntity comparator) ` 内调用 ` comparator.notifyMoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AdvancedComparatorBlock.java#L347) |

## AmberBlock

` public class AmberBlock extends HorizontalDirectionalBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AmberBlock.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` HorizontalDirectionalBlock.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AmberBlock.java#L14) |
| ` public AmberBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any() .setValue(FACING, Direction.NORTH)) `<br>实现调用 ` this.stateDefinition.any() .setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AmberBlock.java#L16) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, facing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AmberBlock.java#L32) |

## AncientSeaReefBlock

` public class AncientSeaReefBlock extends Block implements SimpleWaterloggedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L17) |
| ` public AncientSeaReefBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.defaultBlockState().setValue(WATERLOGGED, false)) `<br>实现调用 ` this.defaultBlockState().setValue(WATERLOGGED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L19) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(WATERLOGGED, context.getLevel().getFluidState(context.getClickedPos()).is(Fluids.WATER)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AncientSeaReefBlock.java#L29) |

## ArrowBlock

` public class ArrowBlock extends DirectionalBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ArrowBlock.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ArrowBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` registerDefaultState(getStateDefinition().any().setValue(FACING, Direction.NORTH)) `<br>实现调用 ` getStateDefinition().any().setValue(FACING, Direction.NORTH) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ArrowBlock.java#L15) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) `<br>[调用处 ArrowBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ArrowBlock.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ArrowBlock.java#L31) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ArrowBlock.java#L36) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(FACING, isSneaking ? facing : facing.getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ArrowBlock.java#L41) |

## AutoEnchantingTableBlock

` public class AutoEnchantingTableBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AutoEnchantingTableBlock> CODEC ` | 初值 ` simpleCodec(AutoEnchantingTableBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L35) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L36) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L37) |
| ` public static final VoxelShape SHAPE ` | 初值 ` Block.box(0.0, 0.0, 0.0, 16.0, 12.0, 16.0) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L38) |
| ` public AutoEnchantingTableBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState( this.stateDefinition.any() .setValue(POWERED, false) .setValue(OVERLOAD, false) ) `<br>实现调用 ` this.stateDefinition.any() .setValue(POWERED, false) .setValue(OVERLOAD, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L40) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L59) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L64) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` AutoEnchantingTableBlockEntity.createBlockEntity( ModBlockEntities.AUTO_ENCHANTING_TABLE.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L74) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | 末尾返回 ` createTickerHelper( type, ModBlockEntities.AUTO_ENCHANTING_TABLE.get(), AutoEnchantingTableBlockEntity::tick ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L80) |
| ` @Override public void animateTick(BlockState state, Level level, BlockPos pos, RandomSource random) ` | 实现调用 ` super.animateTick(state, level, pos, random) `<br>实现调用 ` random.nextInt(16) `<br>实现调用 ` EnchantingTableBlock.isValidBookShelf(level, pos, blockpos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AutoEnchantingTableBlock.java#L134) |

## BaseLaserBlock

` public abstract class BaseLaserBlock extends BaseEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BaseLaserBlock.java#L5)


## BasePowerConverterBlock

` public abstract class BasePowerConverterBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L33) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L34) |
| ` public static final BooleanProperty OVERLOAD ` | 初值 ` IPowerComponent.OVERLOAD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L35) |
| ` public BasePowerConverterBlock(Properties properties, int inputPower) ` | 基本电源转换器模块<br>实现调用 ` super(properties) `<br>实现调用 ` stateDefinition.any() .setValue(FACING, Direction.DOWN) .setValue(POWERED, false) .setValue(OVERLOAD, true) `<br>实现调用 ` stateDefinition.any() .setValue(FACING, Direction.DOWN) .setValue(POWERED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L40) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(FACING, rotation.rotate(state.getValue(FACING))) `<br>[调用处 BasePowerConverterBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L56) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L61) |
| ` @Nullable @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState() .setValue(FACING, context.getClickedFace().getOpposite()) .setValue(POWERED, context.getLevel().hasNeighborSignal(context.getClickedPos())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L66) |
| ` @Nullable @Override public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( type, ModBlockEntities.POWER_CONVERTER.get(), (level1, blockPos, blockState, blockEntity) -> blockEntity.tick() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L90) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L107) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new PowerConverterBlockEntity(ModBlockEntities.POWER_CONVERTER.get(), pos, state, this.inputPower) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L112) |
| ` @Override public abstract VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext context) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BasePowerConverterBlock.java#L118) |

## BerryCakeBlock

` public class BerryCakeBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCakeBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BerryCakeBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCakeBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 14 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCakeBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.6F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCakeBlock.java#L14) |

## BerryCreamBlock

` public class BerryCreamBlock extends AbstractCakeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCreamBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BerryCreamBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCreamBlock.java#L5) |
| ` @Override public int getFoodLevel() ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCreamBlock.java#L9) |
| ` @Override public float getSaturationLevel() ` | 末尾返回 ` 0.4F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BerryCreamBlock.java#L14) |

## BigRedButtonBlock

` public class BigRedButtonBlock extends BaseEntityBlock implements IMoveableEntityBlock, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<BigRedButtonBlock> CODEC ` | 初值 ` simpleCodec(BigRedButtonBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L44) |
| ` public static final DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L45) |
| ` public static final BooleanProperty PRESSED ` | 初值 ` BooleanProperty.create("pressed") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L46) |
| ` public BigRedButtonBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(FACING, Direction.UP).setValue(PRESSED, false)) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING, Direction.UP).setValue(PRESSED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L50) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState().setValue(FACING, context.getClickedFace()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L65) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BigRedButtonBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L115) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) ` | 末尾返回 ` level.isClientSide ? createTickerHelper(type, ModBlockEntities.BIG_RED_BUTTON.get(), BigRedButtonBlockEntity::clientTick) : null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L120) |
| ` public void updateNeighbours(BlockState state, Level level, BlockPos pos) ` | 实现调用 ` level.updateNeighborsAt(pos, this) `<br>实现调用 ` level.updateNeighborsAt(pos.relative(state.getValue(FACING).getOpposite()), this) `<br>实现调用 ` pos.relative(state.getValue(FACING).getOpposite()) `<br>[调用处 BigRedButtonBlock.onRemove](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L173) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L177) |

## BlackHoleBlock

` public class BlackHoleBlock extends Block implements EntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoxelShape MODEL ` | 初值 ` Block.box(4, 4, 4, 12, 12, 12) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L16) |
| ` @Override public VoxelShape getShape(BlockState blockState, BlockGetter blockGetter, BlockPos blockPos, CollisionContext collisionContext) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L18) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 执行 ` super.onPlace(state, level, pos, oldState, movedByPiston) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L23) |
| ` @Override public void neighborChanged( BlockState state, Level level, BlockPos pos, Block neighborBlock, BlockPos neighborPos, boolean movedByPiston ) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L28) |
| ` public BlackHoleBlock(Properties properties) ` | 执行 ` super(properties.forceSolidOn()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L39) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new BlackHoleBlockEntity(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L43) |

## BlockComparatorBlock

` public class BlockComparatorBlock extends Block implements IHammerRemovable, IHammerChangeable, SimpleWaterloggedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<BlockComparatorBlock> CODEC ` | 初值 ` simpleCodec(BlockComparatorBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L43) |
| ` public static final EnumProperty<FacingWithAxis> FACING_WITH_AXIS ` | 初值 ` EnumProperty.create("facing_with_axis", FacingWithAxis.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L45) |
| ` public static final BooleanProperty PRECISE ` | 初值 ` BooleanProperty.create("precise") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L47) |
| ` public static final BooleanProperty POWERED ` | 初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L48) |
| ` public static final BooleanProperty WATERLOGGED ` | 初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L49) |
| ` public BlockComparatorBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING_WITH_AXIS, FacingWithAxis.NORTH_X).setValue(PRECISE, false) `<br>实现调用 ` this.stateDefinition.any().setValue(FACING_WITH_AXIS, FacingWithAxis.NORTH_X) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L79) |
| ` @Override public VoxelShape getShape( BlockState state, BlockGetter level, BlockPos pos, CollisionContext context ) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` getShapeFor(state.getValue(FACING_WITH_AXIS)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L101) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` defaultBlockState().setValue(FACING_WITH_AXIS, FacingWithAxis.of(facing, axis)).setValue(WATERLOGGED, context.getLevel().getFluidState(context.getClickedPos()).is(Fluids.WATER)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L128) |
| ` @Override public BlockState updateShape( BlockState blockState, Direction direction, BlockState blockState2, LevelAccessor level, BlockPos pos, BlockPos pos2 ) ` | ` (direction.getAxis() == facing.getAxis()) ` 成立时提前返回 ` blockState `<br>` (direction.getAxis() != compareAxis) ` 成立时提前返回 ` blockState `<br>末尾返回 ` blockState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L208) |
| ` @Override public boolean canConnectRedstone( BlockState state, BlockGetter level, BlockPos pos, @Nullable Direction direction ) ` | 末尾返回 ` direction == state.getValue(FACING_WITH_AXIS).getFacing() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L247) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L289) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L294) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` FACING_WITH_AXIS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L306) |
