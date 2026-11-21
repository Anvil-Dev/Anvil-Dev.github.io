# dev.dubhe.anvilcraft.block.logistics.storage



## AbstractStoragePortBlock

` public abstract class AbstractStoragePortBlock extends BaseEntityBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/AbstractStoragePortBlock.java#L37)

仓储端口方块父类：把左右键行为重定向到 IStoragePort 的实现。 右键走原版方块交互入口，转发给 IStoragePort#onRightClick；左键没有原版方块入口 （挖掘在网络层被事件拦截），因此由 #interceptsLeftClick 判定是否拦截挖掘、 #onLeftClick 执行服务端行为，两者分别由左键事件与取出请求包调用。 三个端口都没有容积以外的特殊交互，渲染形状统一为模型，故一并放在父类里。 外观由 #TYPE 决定：连接的核心是潜影集装箱还是超维存储站， 由各端口方块实体在重校验相连关系时用 #refreshType 刷新。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<StoragePortType> TYPE ` | 端口外观类型：连接的核心是潜影集装箱（sc）还是超维存储站（hd）<br>初值 ` EnumProperty.create("type", StoragePortType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/AbstractStoragePortBlock.java#L39) |
| ` public static void refreshType(Level level, BlockPos pos, @Nullable BlockPos core) ` | 按连通组件的核心刷新端口外观：唯一核心是超维存储站时显示 hd，其余情况显示 sc。 未连接核心、连接多个核心（连通组件接触多个核心时不工作）以及核心仍是潜影集装箱时 都回到 sc。外观在服务端推导，经方块状态同步给客户端。<br>参数 ` level ` 世界<br>参数 ` pos ` 端口位置<br>参数 ` core ` 连通组件接触到的唯一核心主方块坐标；没有核心或连接多个核心时为 null<br>实现调用 ` level.isClientSide() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.hasProperty(AbstractStoragePortBlock.TYPE) `<br>[调用处 StorageFluidPortBlockEntity.validateLink](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L381) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/AbstractStoragePortBlock.java#L63) |
| ` public boolean interceptsLeftClick(Level level, BlockPos pos, Player player, @Nullable BlockHitResult hit) ` | 该左键是否属于端口行为（拦截挖掘）。<br>参数 ` player ` 玩家<br>参数 ` hit ` 左键命中点；无法取得时为 null<br>返回 是否拦截挖掘<br>末尾返回 ` level.getBlockEntity(pos) instanceof IStoragePort port && port.interceptsLeftClick(player, hit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/AbstractStoragePortBlock.java#L108) |
| ` public boolean onLeftClick(Level level, BlockPos pos, Player player) ` | 执行端口的左键行为（仅服务端调用）。<br>返回 是否已处理<br>` (!(level.getBlockEntity(pos) instanceof IStoragePort port)) ` 成立时提前返回 ` false `<br>末尾返回 ` port.onClick(ClickAction.PRIMARY, player, InteractionHand.MAIN_HAND, ports) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/AbstractStoragePortBlock.java#L117) |

## StorageFluidPortBlock

` public class StorageFluidPortBlock extends AbstractStoragePortBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L31)

仓储流体端口方块。 作为面相邻潜影集装箱 / 超维存储站的外部流体存储，连接关系与仓储端口一致且可互相延伸； 内部容量 128 B 且只能存储单一流体。手持门格海绵右键清除内部流体；拆除时流体随掉落物保留。 左右键行为本身定义在 StorageFluidPortBlockEntity，本类只负责掉落物、克隆与同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L32) |
| ` public StorageFluidPortBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L55) |
| ` @Override public ItemStack getCloneItemStack( LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player ) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L72) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L93) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STORAGE_FLUID_PORT.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L106) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.STORAGE_FLUID_PORT.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StorageFluidPortBlock.java#L112) |

## StoragePortBlock

` public class StoragePortBlock extends AbstractStoragePortBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L34)

仓储端口方块。 面相邻潜影集装箱 / 超维存储站（可沿端口链延伸）使用；右键物品标记并塞入、 双击塞入全部、左键取出；铁砧锤长按右键并滑动可去掉标记（普通锤右键不改变状态）； 拆除时缓存与标记保留在掉落物中。左右键行为本身定义在 StoragePortBlockEntity，本类只负责掉落物、克隆与方块状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty MARKED ` | 是否有标记的方块状态<br>初值 ` BooleanProperty.create("marked") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L36) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L38) |
| ` public StoragePortBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.defaultBlockState().setValue(StoragePortBlock.MARKED, false)) `<br>实现调用 ` this.defaultBlockState().setValue(StoragePortBlock.MARKED, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L64) |
| ` @Override public ItemStack getCloneItemStack( LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player ) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L88) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L109) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STORAGE_PORT.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L122) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.STORAGE_PORT.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortBlock.java#L128) |

## StoragePortConsolidatorBlock

` public class StoragePortConsolidatorBlock extends AbstractStoragePortBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortConsolidatorBlock.java#L29)

仓储端口整合器方块。 把相连仓储端口的内容物并成一个物品能力暴露给外部物流（漏斗、溜槽、AE 等模组的仓储总线）， 相连关系只沿端口延伸、不跨集装箱 / 存储站，且没有连接核心也能工作； 物品优先进入标记了对应物品的端口，双击右键把身上对应标记的物品全部存入。 左右键行为本身定义在 StoragePortConsolidatorBlockEntity。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortConsolidatorBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortConsolidatorBlock.java#L30) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortConsolidatorBlock.java#L49) |
| ` @Override @Nullable public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.STORAGE_PORT_CONSOLIDATOR.create(blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortConsolidatorBlock.java#L60) |
| ` @Override @Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker( Level level, BlockState state, BlockEntityType<T> blockEntityType ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` createTickerHelper( blockEntityType, ModBlockEntities.STORAGE_PORT_CONSOLIDATOR.get(), (level1, pos, state1, entity) -> entity.tickServer() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/storage/StoragePortConsolidatorBlock.java#L66) |
