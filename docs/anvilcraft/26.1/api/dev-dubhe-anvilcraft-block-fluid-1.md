# dev.dubhe.anvilcraft.block.fluid（ControlValveBlock 至 PipeStraightBlock）



## ControlValveBlock

` public class ControlValveBlock extends BetterBaseEntityBlock implements IHammerRemovable, IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L51)

控制阀（Control Valve），管道系统中的流体门控部件。 沿单一轴向（#AXIS X/Y/Z）连接管道，无前后方向之分。右键打开 GUI 设置允许通过的流体类型（白名单过滤）和最大流速。放置方式类似泵：贴在侧面的 直管/弯管会转为节点以正确吸附。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ControlValveBlock> CODEC ` | 初值 ` BlockBehaviour.simpleCodec(ControlValveBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L53) |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 初值 ` BlockStateProperties.AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L54) |
| ` public static final BooleanProperty POWERED ` | 红石锁定：任意侧收到红石信号则锁定，流速视为 0 且 GUI 中不可调。<br>初值 ` BlockStateProperties.POWERED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L58) |
| ` public ControlValveBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(ControlValveBlock.AXIS, Direction.Axis.Y) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L64) |
| ` @Override public RenderShape getRenderShape(BlockState state) ` | 客户端选择方块的渲染路径时调用。<br>末尾返回 ` RenderShape.MODEL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L80) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext ctx) ` | 方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` switch (state.getValue(ControlValveBlock.AXIS)) { case X -> ControlValveBlock.SHAPE_X; case Y -> ControlValveBlock.SHAPE_Y; default -> ControlValveBlock.SHAPE_Z; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L85) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置时沿点击面的轴向，并按周围红石初始化锁定状态。<br>放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(ControlValveBlock.AXIS, context.getClickedFace().getAxis()) .setValue(ControlValveBlock.POWERED, powered) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L97) |
| ` public static boolean isConnectableFace(BlockState state, Direction faceToNeighbor) ` | 判断控制阀在某面方向上是否为连接面（仅朝向轴两端）。<br>` (!(state.getBlock() instanceof ControlValveBlock)) ` 成立时提前返回 ` false `<br>末尾返回 ` faceToNeighbor.getAxis() == state.getValue(ControlValveBlock.AXIS) `<br>[调用处 FluidNetworkScanner.visitNeighborWithPhi](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L256) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L109) |
| ` @Override public void setPlacedBy(Level level, BlockPos pos, BlockState state, @Nullable LivingEntity placer, ItemStack stack) ` | 放置后将轴向上连接的直管/弯管转为节点，使其能正确吸附；并记录手轮朝向（面向玩家、垂直于轴的一面）。<br>实现调用 ` super.setPlacedBy(level, pos, state, placer, stack) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` level.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L141) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hitResult ) ` | ` (player.getItemInHand(hand).getItem() instanceof PipeBlockItem) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L182) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 控制阀放置 / 落地时使流体网络缓存失效（拓扑可能变化）。<br>实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` level.isClientSide() `<br>分支 ` (!level.isClientSide()) ` 内调用 ` FluidNetworkManager.INSTANCE.addAdjacentContainers(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L229) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 实现调用 ` state.getValue(AXIS) `<br>实现调用 ` state.setValue(AXIS, Direction.Axis.Z) `<br>实现调用 ` state.setValue(AXIS, Direction.Axis.X) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L251) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L263) |
| ` @Override public @Nullable ControlValveBlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CONTROL_VALVE.get().create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L268) |

## DrainBlock

` public class DrainBlock extends BetterBaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/DrainBlock.java#L23)

排水口（Drain），管道系统的容器部件。内部 4B 流体容量， 向下把内部流体铺放到世界、或从上方抽取流体入内部。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<DrainBlock> CODEC ` | 初值 ` BlockBehaviour.simpleCodec(DrainBlock::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/DrainBlock.java#L24) |
| ` public DrainBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/DrainBlock.java#L26) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.DRAIN.get().create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/DrainBlock.java#L40) |
| ` @Override public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> type ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` BaseEntityBlock.createTickerHelper(type, ModBlockEntities.DRAIN.get(), DrainBlockEntity::tick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/DrainBlock.java#L45) |

## ExpFluidBlock

` public class ExpFluidBlock extends LiquidBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ExpFluidBlock.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpFluidBlock(FlowingFluid fluid, Properties properties) ` | 执行 ` super(fluid, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L4681) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ExpFluidBlock.java#L21) |

## MeltGemBlock

` public class MeltGemBlock extends LiquidBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemBlock.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MeltGemBlock(FlowingFluid fluid, Properties properties) ` | 执行 ` super(fluid, properties) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L4733) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemBlock.java#L11) |

## MeltGemFluid

` public abstract class MeltGemFluid extends BaseFlowingFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L18)


## MeltGemFluid.Flowing

` public static class Flowing extends MeltGemFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Flowing(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(FlowingFluid.LEVEL, 7)) `<br>实现调用 ` this.getStateDefinition().any().setValue(FlowingFluid.LEVEL, 7) `<br>[调用处 ModFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L276) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L52) |
| ` public int getAmount(FluidState state) ` | 末尾返回 ` state.getValue(FlowingFluid.LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L62) |
| ` public boolean isSource(FluidState state) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L66) |

## MeltGemFluid.Source

` public static class Source extends MeltGemFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L71)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Source(Properties properties) ` | 执行 ` super(properties) `<br>[调用处 ModFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L272) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L73) |
| ` public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L77) |
| ` public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/MeltGemFluid.java#L81) |

## PipeBlock

` public abstract class PipeBlock extends Block implements SimpleWaterloggedBlock, IHammerRemovable, IHammerChangeable, EntityBlock, IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L74)

管道系统抽象基类，定义了所有管道类型共用的方块状态属性、碰撞箱形状、 邻居检查工具方法和两个核心枚举。 子类： PipeStraightBlock — 直管，沿单一轴向延伸 PipeCornerBlock — 弯管，连接两个垂直方向 PipeNodeBlock — 节点，最多六个方向连接，可自动退化 管道连接规则： 管道 ↔ 管道：无端头（开放连接） 管道 ↔ IFluidHandler：有端头（封闭连接） 管道 ↔ 空气/其他：有端头

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction.Axis> AXIS ` | 直管的轴向（X / Y / Z）<br>初值 ` BlockStateProperties.AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L80) |
| ` public static final EnumProperty<CornerEnded> CORNER_ENDED ` | 弯管的拐角方向组合<br>初值 ` EnumProperty.create("corner_ended", CornerEnded.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L84) |
| ` public static final BooleanProperty HAS_END_START ` | 第一端（直管负轴端/弯管 first 方向）是否有端头<br>初值 ` BooleanProperty.create("has_end_start") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L88) |
| ` public static final BooleanProperty HAS_END_END ` | 第二端（直管正轴端/弯管 second 方向）是否有端头<br>初值 ` BooleanProperty.create("has_end_end") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L92) |
| ` public static final EnumProperty<NodePipe> DOWN ` | 节点下方连接状态<br>初值 ` EnumProperty.create("down", NodePipe.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L96) |
| ` public static final EnumProperty<NodePipe> UP ` | 节点上方连接状态<br>初值 ` EnumProperty.create("up", NodePipe.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L100) |
| ` public static final EnumProperty<NodePipe> NORTH ` | 节点北向连接状态<br>初值 ` EnumProperty.create("north", NodePipe.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L104) |
| ` public static final EnumProperty<NodePipe> SOUTH ` | 节点南向连接状态<br>初值 ` EnumProperty.create("south", NodePipe.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L108) |
| ` public static final EnumProperty<NodePipe> WEST ` | 节点西向连接状态<br>初值 ` EnumProperty.create("west", NodePipe.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L112) |
| ` public static final EnumProperty<NodePipe> EAST ` | 节点东向连接状态<br>初值 ` EnumProperty.create("east", NodePipe.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L116) |
| ` public static final BooleanProperty WATERLOGGED ` | 是否含水<br>初值 ` BlockStateProperties.WATERLOGGED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L120) |
| ` public static final BooleanProperty HAS_CHECK_VALVE ` | 本管道是否至少有一个面装了止逆阀。 止逆的方向数据不进 blockstate（否则节点 6 面 × 方向组合会爆炸），而是存进 AbstractPipeBlockEntity；此布尔仅用于决定是否创建该 BE（true 才创建）， 因此每种管道 blockstate 只 ×2。<br>初值 ` BooleanProperty.create("has_check_valve") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L129) |
| ` public PipeBlock(Properties properties) ` | 执行 ` this(properties, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L226) |
| ` public PipeBlock(Properties properties, boolean glassPipe) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any() .setValue(WATERLOGGED, false) .setValue(HAS_CHECK_VALVE, false) `<br>实现调用 ` this.getStateDefinition().any() .setValue(WATERLOGGED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L230) |
| ` public boolean isGlassPipe() ` | 末尾返回 ` this.glassPipe ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L238) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>` (this.glassPipe) ` 成立时提前返回 ` ModBlockEntities.GLASS_PIPE.create(pos, state) `<br>末尾返回 ` this instanceof PipeNodeBlock ? ModBlockEntities.PIPE_NODE.create(pos, state) : ModBlockEntities.PIPE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L250) |
| ` @Nullable public static AbstractPipeBlockEntity getCheckValve(Level level, BlockPos pos) ` | 取该位置的止逆阀 BE（无则 null）。<br>末尾返回 ` level.getBlockEntity(pos) instanceof AbstractPipeBlockEntity be ? be : null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L258) |
| ` public static Direction getDirectionFromAxis(Direction.Axis axis, Direction.AxisDirection axisDirection) ` | 根据轴向和轴方向获取对应的 Direction。<br>参数 ` axis ` 轴向<br>参数 ` axisDirection ` 轴方向（NEGATIVE = 负方向，POSITIVE = 正方向）<br>返回 对应的方向（如 X+NEGATIVE → WEST）<br>末尾返回 ` Direction.get(axisDirection, axis) `<br>[调用处 AbstractPipeBlockEntity.getPipeStraightEnd](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/fluid/AbstractPipeBlockEntity.java#L213) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L270) |
| ` public static EnumProperty<NodePipe> getPropertyForDirection(Direction direction) ` | 获取指定方向对应的节点连接属性。<br>参数 ` direction ` 方向<br>返回 对应方向的 EnumProperty&amp;lt;NodePipe&amp;gt;<br>末尾返回 ` switch (direction) { case DOWN -> DOWN; case UP -> UP; case NORTH -> NORTH; case SOUTH -> SOUTH; case WEST -> WEST; case EAST -> EAST; } `<br>[调用处 FluidNetworkScanner.hasAnyConnectionToward](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L280) |
| ` public static boolean hasConnectionToward(BlockState state, Direction toward) ` | 判断指定方块状态在给定方向上是否有管道臂/连接（不考虑端头是否可见）。 直管：方向与轴向相同即为有连接 弯管：方向为弯管两方向之一即为有连接 节点：该方向非 NodePipe#NONE 即为有连接<br>参数 ` state ` 方块状态<br>参数 ` toward ` 从此方块看向邻居的方向<br>返回 是否有管道臂/连接朝向该方向<br>实现调用 ` state.getBlock() `<br>实现调用 ` toward.getAxis() `<br>实现调用 ` state.getValue(AXIS) `<br>[调用处 FluidNetworkScanner.hasAnyConnectionToward](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L303) |
| ` public static boolean isNeighborPipeToward(Level level, BlockPos pos, Direction dir) ` | 检查指定方向的邻居是否为管道且其连接朝向本方块。 用于判断本方块是否应与此邻居建立管道连接。<br>参数 ` level ` 世界<br>参数 ` pos ` 本方块位置<br>参数 ` dir ` 从此方块看向邻居的方向<br>返回 邻居管道是否朝向本方块<br>末尾返回 ` neighborState.getBlock() instanceof PipeBlock && hasConnectionToward(neighborState, dir.getOpposite()) `<br>[调用处 PipeBlockItem.getConnectedBlockState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L266) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L322) |
| ` public static boolean isNeighborSameKindPipeToward(BlockState state, Level level, BlockPos pos, Direction dir) ` | 检查指定方向的邻居是否为同类管道且其连接朝向本方块。 普通管道与玻璃管道互相连接时仍连通，但模型端头需要保留。<br>参数 ` state ` 本方块状态<br>参数 ` level ` 世界<br>参数 ` pos ` 本方块位置<br>参数 ` dir ` 从此方块看向邻居的方向<br>返回 邻居同类管道是否朝向本方块<br>` (!(state.getBlock() instanceof PipeBlock pipe)) ` 成立时提前返回 ` false `<br>末尾返回 ` neighborState.getBlock() instanceof PipeBlock neighborPipe && pipe.isGlassPipe() == neighborPipe.isGlassPipe() && hasConnectionToward(neighborState, dir.getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L338) |
| ` public static boolean isFluidHandler(Level level, BlockPos pos) ` | 检查指定位置是否为流体处理器（通过 NeoForge Capability 系统）。<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>返回 该位置是否提供 net.neoforged.neoforge.fluids.capability.IFluidHandler<br>末尾返回 ` FluidContainerLookup.find(level, pos, null) != null `<br>[调用处 AbstractPipeBlockEntity.getPumpPipeEnd](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/fluid/AbstractPipeBlockEntity.java#L279) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L356) |
| ` public static boolean isFluidHandlerOrConnectablePump(Level level, BlockPos pos, Direction towardNeighbor) ` | 检查指定位置是否为流体处理器（通过 NeoForge Capability 系统）， 或是连接面正对给定方向的泵。 泵仅在其连接面（朝向轴两端，即输入/输出端）正对 towardNeighbor 方向时才计入；垂直于朝向轴的实体侧面不算连接。<br>参数 ` level ` 世界<br>参数 ` pos ` 待检查的位置<br>参数 ` towardNeighbor ` 从该位置看向待连接邻居的方向<br>返回 该位置是否可在此方向形成流体连接<br>` (state.getBlock() instanceof PumpBlock) ` 成立时提前返回 ` PumpBlock.isConnectableFace(state, towardNeighbor) `<br>` (state.getBlock() instanceof ControlValveBlock) ` 成立时提前返回 ` ControlValveBlock.isConnectableFace(state, towardNeighbor) `<br>末尾返回 ` FluidContainerLookup.find(level, pos, towardNeighbor) != null `<br>[调用处 PipeBlockItem.tryConnectAdjacent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L372) |
| ` public static boolean isNeighborOccupied(Level level, BlockPos pos, Direction dir) ` | 检查指定方向的邻居是否被"占用"（有管道对准、是流体处理器、或连接面正对本方块的泵）。 用于判断管道端头是否应该打开（无端头连接）。<br>参数 ` level ` 世界<br>参数 ` pos ` 本方块位置<br>参数 ` dir ` 从此方块看向邻居的方向<br>返回 邻居是否占用该端<br>` (isNeighborPipeToward(level, pos, dir)) ` 成立时提前返回 ` true `<br>末尾返回 ` isFluidHandlerOrConnectablePump(level, pos.relative(dir), dir.getOpposite()) `<br>[调用处 PipeBlockItem.getConnectedBlockState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L258) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L392) |
| ` @Override public Item asItem() ` | 末尾返回 ` this.glassPipe ? ModItems.GLASS_PIPE.get() : ModItems.PIPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L399) |
| ` @Override public ItemStack getCloneItemStack( LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player ) ` | ` (this.glassPipe && player.isCreative()) ` 成立时提前返回 ` new ItemStack(ModItems.GLASS_PIPE.get()) `<br>末尾返回 ` new ItemStack(ModItems.PIPE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L404) |
| ` public static BlockState straightVariant(BlockState state) ` | 末尾返回 ` (state.getBlock() instanceof PipeBlock pipe && pipe.isGlassPipe() ? ModBlocks.GLASS_PIPE_STRAIGHT.get() : ModBlocks.PIPE_STRAIGHT.get()) .defaultBlockState() `<br>[调用处 PipeNodeBlock.trySimplify](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L280) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L418) |
| ` public static BlockState cornerVariant(BlockState state) ` | 末尾返回 ` (state.getBlock() instanceof PipeBlock pipe && pipe.isGlassPipe() ? ModBlocks.GLASS_PIPE_CORNER.get() : ModBlocks.PIPE_CORNER.get()) .defaultBlockState() `<br>[调用处 PipeNodeBlock.trySimplify](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L289) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L425) |
| ` public static BlockState nodeVariant(BlockState state) ` | 末尾返回 ` (state.getBlock() instanceof PipeBlock pipe && pipe.isGlassPipe() ? ModBlocks.GLASS_PIPE_NODE.get() : ModBlocks.PIPE_NODE.get()) .defaultBlockState() `<br>[调用处 PipeCornerBlock.neighborChangedAt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeCornerBlock.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L432) |
| ` @Nullable public static Direction getArmDirection(BlockPos pos, BlockHitResult hitResult) ` | 根据精确点击坐标判断被点击的臂方向（中心体范围 \[3,3,3\]→\[13,13,13\]，超出即命中对应臂）。 点击在中心区域返回 null。所有管型共用同一判定（直管/弯管中心体略大也在此范围内）。<br>末尾返回 ` armDir ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L480) |
| ` public boolean addCheckValve(Level level, BlockPos pos, BlockState state, Direction face, Direction flowOut) ` | 在管道某个面添加止逆阀：把 HAS\_CHECK\_VALVE 置真（必要时替换方块以生成 BE）， 再写入该面的允许流出方向。仅服务端调用。<br>参数 ` flowOut ` 无红石信号时允许流出的世界方向<br>返回 是否成功添加<br>` (level.isClientSide()) ` 成立时提前返回 ` false `<br>` (be == null) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 PipeBlock.handleCheckValveInteraction](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L594) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L517) |
| ` public boolean removeCheckValve(Level level, BlockPos pos, BlockState state, Direction face) ` | 移除管道某面的止逆阀；移除后若无任何面装阀则清除 HAS\_CHECK\_VALVE（销毁 BE）。 仅服务端调用。<br>返回 是否确实移除了一个阀<br>` (level.isClientSide()) ` 成立时提前返回 ` false `<br>` (be == null \|\| !be.hasValveOn(face)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 PipeBlock.detachCheckValve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L605) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L541) |
| ` public static void setBlockPreservingValve(Level level, BlockPos pos, BlockState oldState, BlockState newState) ` | 跨管型转换时保留止逆阀数据：读取 oldPos 处旧 BE 的面映射，给 newState 打上 HAS\_CHECK\_VALVE 并在 setBlock 后回填到新 BE。 调用方应传入 尚未 setBlock 的目标 state ；本方法负责 setBlock 并返回， 保证形变（node↔straight↔corner）不丢失止逆阀。 客户端 同样保留止逆阀数据，避免依赖服务端同步即可获得即时视觉反馈。 服务端 额外对因管型变化而失去臂的面掉落止逆阀物品。<br>实现调用 ` oldState.hasProperty(HAS_CHECK_VALVE) `<br>实现调用 ` oldState.getValue(HAS_CHECK_VALVE) `<br>分支 ` (oldState.hasProperty(HAS_CHECK_VALVE) && oldState.getValue(HAS_CHECK_VALVE)) ` 内调用 ` getCheckValve(level, pos) `<br>[调用处 PipeBlockItem.modifyPipeToConnect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L154) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L689) |
| ` public static void setBlockPreservingValve(Level level, BlockPos pos, BlockState newState) ` | 执行 ` setBlockPreservingValve(level, pos, level.getBlockState(pos), newState) `<br>[调用处 ControlValveBlock.convertPipeToNode](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L179) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L750) |
| ` @Override public FluidState getFluidState(BlockState state) ` | 末尾返回 ` state.getValue(WATERLOGGED) ? Fluids.WATER.getSource(false) : super.getFluidState(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L806) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 管道部件放置 / 落地时使流体网络缓存失效（拓扑可能变化）。 子类覆写 onPlace 时须调用 super.onPlace(...)。<br>实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` level.isClientSide() `<br>分支 ` (!level.isClientSide()) ` 内调用 ` FluidNetworkManager.INSTANCE.addAdjacentContainers(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L835) |
| ` public VoxelShape getShape(BlockState state, Direction startDir, Direction endDir) ` | 构建直管/弯管的碰撞箱：中心体 + 两端按端头状态拼接 arm。<br>参数 ` state ` 方块状态<br>参数 ` startDir ` 第一端方向<br>参数 ` endDir ` 第二端方向<br>返回 完整碰撞箱<br>末尾返回 ` cachedShape(TWO_ARM_SHAPES, key, () -> Shapes.or( PIPE_CENTER, endStart ? makeEnd(startDir) : makeNoEnd(startDir), endEnd ? makeEnd(endDir) : makeNoEnd(endDir) )) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L860) |
| ` @Override public boolean checkBlockState(BlockState blockState) ` | 末尾返回 ` blockState.getBlock() instanceof PipeBlock pipe && pipe.isGlassPipe() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L873) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity be) ` | 分支 ` (be instanceof GlassPipeBlockEntity glassEntity) ` 内调用 ` glassEntity.clearDisplay() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L878) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | ` (!(state.getBlock() instanceof PipeBlock pipe) \|\| !pipe.isGlassPipe()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L886) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L896) |

## PipeBlock.CornerEnded

` public enum CornerEnded implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L907)

弯管拐角方向枚举，表示管道在两个垂直方向之间的转弯。 命名规则：第一方向\_第二方向（如 UP\_NORTH = 上→北）。 HAS\_END\_START 控制第一方向的端头，HAS\_END\_END 控制第二方向。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` DOWN_NORTH ` | 下 → 北 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L911) |
| ` DOWN_SOUTH ` | 下 → 南 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L915) |
| ` DOWN_WEST ` | 下 → 西 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L919) |
| ` DOWN_EAST ` | 下 → 东 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L923) |
| ` UP_NORTH ` | 上 → 北 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L927) |
| ` UP_SOUTH ` | 上 → 南 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L931) |
| ` UP_WEST ` | 上 → 西 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L935) |
| ` UP_EAST ` | 上 → 东 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L939) |
| ` NORTH_WEST ` | 北 → 西 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L943) |
| ` NORTH_EAST ` | 北 → 东 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L947) |
| ` SOUTH_WEST ` | 南 → 西 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L951) |
| ` SOUTH_EAST ` | 南 → 东 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L955) |
| ` public Direction getFirstDirection() ` | 获取第一方向<br>返回 第一方向（受 PipeBlock#HAS\_END\_START 控制）<br>末尾返回 ` this.first ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L970) |
| ` public Direction getSecondDirection() ` | 获取第二方向<br>返回 第二方向（受 PipeBlock#HAS\_END\_END 控制）<br>末尾返回 ` this.second ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L979) |
| ` public boolean containsDirection(Direction direction) ` | 该弯管是否包含指定方向<br>返回 该弯管是否包含指定方向<br>末尾返回 ` this.first == direction \|\| this.second == direction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L988) |
| ` public static CornerEnded fromDirections(Direction a, Direction b) ` | 根据两个方向查找匹配的弯管配置。顺序无关（a→b 和 b→a 均可匹配）。 无匹配时回退为 #UP\_NORTH。<br>末尾返回 ` UP_NORTH `<br>[调用处 PipeBlockItem.getConnectedBlockState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/PipeBlockItem.java#L283) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L996) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1005) |
| ` public static CornerEnded[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L907) |
| ` public static CornerEnded valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L907) |

## PipeBlock.NodePipe

` public enum NodePipe implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1019)

节点的单方向连接状态。 #PIPE — 无端头，连接至另一管道 #END — 有端头，连接至流体处理器 #NONE — 无臂，该方向无连接

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` PIPE ` | 无端头开放连接（连至另一管道） | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1023) |
| ` END ` | 有端头封闭连接（连至 IFluidHandler） | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1027) |
| ` NONE ` | 无臂（该方向无连接） | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1031) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1033) |
| ` public static NodePipe[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1019) |
| ` public static NodePipe valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L1019) |

## PipeCornerBlock

` public class PipeCornerBlock extends PipeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeCornerBlock.java#L25)

弯管道，通过 PipeBlock#CORNER\_ENDED 指定两个垂直方向的拐角。 两端各由 PipeBlock#HAS\_END\_START / PipeBlock#HAS\_END\_END 控制端头开关。当管道出现在非弯管方向的侧面时，自动转为 PipeNodeBlock。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PipeCornerBlock(Properties properties) ` | 构造弯管，默认上→北拐角，两端均有端头。<br>实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeCornerBlock.java#L30) |
| ` public PipeCornerBlock(Properties properties, boolean glassPipe) ` | 实现调用 ` super(properties, glassPipe) `<br>实现调用 ` this.registerDefaultState() `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L539) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeCornerBlock.java#L35) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext ctx) ` | 碰撞箱：中心体 + 两弯管方向按端头状态拼接 arm。<br>方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` this.getShape(state, startDir, endDir) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeCornerBlock.java#L61) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 放置 / 被推动落地时，按弯管两方向的实际邻居重算端头。 解决被活塞等整体推动后端头状态未刷新的问题。<br>实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` state.is(oldState.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeCornerBlock.java#L143) |

## PipeNodeBlock

` public class PipeNodeBlock extends PipeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L47)

管道节点（多向连接器），最多支持六个方向的连接。 每个方向独立记录连接状态（PipeBlock.NodePipe）： PipeBlock.NodePipe#PIPE PIPE — 无端头，连接至同类管道 PipeBlock.NodePipe#END END — 有端头，连接至异类管道或 IFluidHandler PipeBlock.NodePipe#NONE NONE — 无臂，该方向无连接 节点支持 自动退化 ：当总连接数 ≤ 2 时自动简化为 PipeStraightBlock（对向）或 PipeCornerBlock（垂直）。 支持 扳手断开 ：用扳手右键点击节点的臂可断开 节点↔节点 或 节点↔IFluidHandler 的连接。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PipeNodeBlock(Properties properties) ` | 节点默认全方向无臂<br>实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L57) |
| ` public PipeNodeBlock(Properties properties, boolean glassPipe) ` | 实现调用 ` super(properties, glassPipe) `<br>实现调用 ` this.registerDefaultState() `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L549) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L62) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext ctx) ` | 碰撞箱：中心体 + 每个非 NONE 方向按状态拼接 arm（PIPE→noEnd, END→end）。<br>方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` cachedShape(SHAPES, shapeKey(state), () -> buildShape(state)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L95) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 放置或从其他管型转换而来时，扫描全部六个方向并尝试退化。 仅在方块类型发生变化（非同类替换）时执行。<br>实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` state.is(oldState.getBlock()) `<br>实现调用 ` oldState.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L126) |
| ` public static NodePipe evaluateNeighbor(Level level, BlockPos pos, Direction dir) ` | 评估指定方向邻居的连接状态。 邻居是同类管道且对准本节点 → NodePipe#PIPE 邻居是异类管道、IFluidHandler 或 PumpBlock → NodePipe#END 其他 → NodePipe#NONE<br>参数 ` level ` 世界<br>参数 ` pos ` 本节点位置<br>参数 ` dir ` 评估方向<br>返回 该方向应设置的连接状态<br>末尾返回 ` evaluateNeighbor(level, pos, level.getBlockState(pos), dir) `<br>[调用处 ControlValveBlock.convertPipeToNode](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/ControlValveBlock.java#L176) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L205) |
| ` public static NodePipe evaluateNeighbor(Level level, BlockPos pos, BlockState state, Direction dir) ` | ` (neighborState.getBlock() instanceof PumpBlock) ` 成立时提前返回 ` PumpBlock.isConnectableFace(neighborState, dir.getOpposite()) ? NodePipe.END : NodePipe.NONE `<br>` (neighborState.getBlock() instanceof ControlValveBlock) ` 成立时提前返回 ` ControlValveBlock.isConnectableFace(neighborState, dir.getOpposite()) ? NodePipe.END : NodePipe.NONE `<br>` (isFluidHandler(level, neighborPos)) ` 成立时提前返回 ` NodePipe.END `<br>末尾返回 ` NodePipe.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeNodeBlock.java#L209) |

## PipeStraightBlock

` public class PipeStraightBlock extends PipeBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeStraightBlock.java#L34)

直管道，沿单一轴向（PipeBlock#AXIS X/Y/Z）延伸。 两端通过 PipeBlock#HAS\_END\_START / PipeBlock#HAS\_END\_END 控制端头开关： true — 有端头（封闭） false — 无端头（开放，连接至管道） 当管道出现在侧面（垂直方向）时，自动转为 PipeNodeBlock，由节点的 onPlace+trySimplify 决定最终形态（弯管或节点）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PipeStraightBlock(Properties properties) ` | 构造直管，默认沿 X 轴，两端均有端头。<br>实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeStraightBlock.java#L39) |
| ` public PipeStraightBlock(Properties properties, boolean glassPipe) ` | 实现调用 ` super(properties, glassPipe) `<br>实现调用 ` this.registerDefaultState() `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L529) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeStraightBlock.java#L44) |
| ` @Override @Nullable public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置时沿点击面的轴向放置。<br>放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>实现调用 ` this.defaultBlockState() .setValue(AXIS, context.getClickedFace().getAxis()) `<br>实现调用 ` this.defaultBlockState() `<br>实现调用 ` context.getClickedFace().getAxis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeStraightBlock.java#L70) |
| ` @Override public VoxelShape getShape(BlockState state, BlockGetter level, BlockPos pos, CollisionContext ctx) ` | 碰撞箱：中心体 + 两端按端头状态拼接 noEnd 或 end arm。<br>方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。<br>末尾返回 ` this.getShape(state, startDir, endDir) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeStraightBlock.java#L81) |
| ` @Override public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) ` | 放置 / 被推动落地时，按两端实际邻居重算端头（端头 = 该端未接对准的管道）。 解决被活塞等整体推动后端头状态未刷新的问题。<br>实现调用 ` super.onPlace(state, level, pos, oldState, movedByPiston) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` state.is(oldState.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeStraightBlock.java#L167) |
