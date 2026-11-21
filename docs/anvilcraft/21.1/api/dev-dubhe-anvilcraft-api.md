# dev.dubhe.anvilcraft.api



## BlockPlaceAssist

` public class BlockPlaceAssist `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/BlockPlaceAssist.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static InteractionResult tryPlace( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit, Item blockItem, EnumProperty<Direction.Axis> propertyDef, BlockState newBlockState ) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>` (player.isShiftKeyDown() \|\| !player.mayBuild()) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.PASS `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` player.mayBuild() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` itemInHand.is(blockItem) `<br>分支 ` (itemInHand.is(blockItem)) ` 内调用 ` orderDirectionByDistance( pos, hit.getLocation(), dir -> dir.getAxis() == state.getValue(propertyDef) ) `<br>分支 ` (itemInHand.is(blockItem)) ` 内调用 ` hit.getLocation() `<br>[调用处 InductionLightBlock.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/InductionLightBlock.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/BlockPlaceAssist.java#L38) |
| ` public BlockPlaceAssist() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/BlockPlaceAssist.java#L25) |

## DeferTaskSubmittable

` public interface DeferTaskSubmittable<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/DeferTaskSubmittable.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void anvilcraft$submitTask(Consumer<T> fn) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/DeferTaskSubmittable.java#L6) |

## IHasDisplayItem

` public interface IHasDisplayItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IHasDisplayItem.java#L8)

带有展示物品的方块实体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void updateDisplayItem(ItemStack stack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IHasDisplayItem.java#L9) |

## IHasMultiBlock

` public interface IHasMultiBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IHasMultiBlock.java#L10)

多方块方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onRemove(Level level, BlockPos pos, BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IHasMultiBlock.java#L12) |
| ` void onPlace(Level level, BlockPos pos, BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IHasMultiBlock.java#L14) |

## IStoragePort

` public interface IStoragePort `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L18)

仓储端口父接口：仓储端口、仓储流体端口与仓储端口整合器都实现本接口。 三者共用同一套相连关系（面相邻的端口可互相延伸，见 StoragePortManager#scan）， 方块层与网络包只经由本接口转发左右键，不关心具体端口类型。各端口按自身语义实现行为： 左键为「取出」一类的即时动作，右键为「标记 / 塞入 / 倒流体」一类的交互。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean onLeftClick(Player player, List<IStoragePort> ports) ` | 左键行为（服务端执行）。<br>参数 ` player ` 玩家<br>参数 ` ports ` 与本端口相连的所有其它端口<br>返回 是否已处理<br>末尾返回 ` false `<br>[调用处 IStoragePort.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L26) |
| ` default boolean onRightClick(Player player, InteractionHand hand, List<IStoragePort> ports) ` | 右键行为。<br>参数 ` player ` 玩家<br>参数 ` hand ` 交互手<br>参数 ` ports ` 与本端口相连的所有其它端口<br>返回 是否已处理；false 时交给默认方块交互<br>末尾返回 ` false `<br>[调用处 IStoragePort.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L38) |
| ` default boolean interceptsLeftClick(Player player, @Nullable BlockHitResult hit) ` | 该左键是否属于端口行为（用于拦截挖掘）。 判定允许记录状态：按住左键期间客户端会不断重触发事件，实现可借此续期「正在取出」 的状态，避免缓存被取空后同一次按住变成挖掘。同一玩家的多次调用必须保持幂等语义。<br>参数 ` player ` 玩家<br>参数 ` hit ` 左键命中点；无法取得时为 null<br>返回 命中点不在端口的交互区域（例如模型外边缘的一像素框架）时返回 false<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L52) |
| ` default boolean onClick(ClickAction action, Player player, InteractionHand hand, List<IStoragePort> ports) ` | 点击分发：ClickAction#PRIMARY 为左键，ClickAction#SECONDARY 为右键。<br>参数 ` action ` 点击类型<br>参数 ` player ` 玩家<br>参数 ` hand ` 交互手<br>参数 ` ports ` 与本端口相连的所有其它端口<br>返回 是否已处理<br>末尾返回 ` switch (action) { case PRIMARY -> this.onLeftClick(player, ports); case SECONDARY -> this.onRightClick(player, hand, ports); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/IStoragePort.java#L65) |

## RipeningManager

` public class RipeningManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static RipeningManager from(Level level) ` | 获取或新建一个当前维度催熟实例。<br>末尾返回 ` INSTANCES.computeIfAbsent(level, RipeningManager::new) `<br>[调用处 InductionLightBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InductionLightBlockEntity.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java#L30) |
| ` public RipeningManager(Level level) ` | 执行 ` this.level = level ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java#L34) |
| ` public void doRipen(BlockPos blockPos) ` | 实现调用 ` this.isRipenReady() `<br>分支 ` (this.isRipenReady()) ` 内调用 ` this.doRipen(blockPos, this.ripened) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java#L84) |

## SpawningManager

` public class SpawningManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java#L43)

电感灯生物生成管理器 该类负责管理电感灯方块对生物生成的控制功能，采用单例模式为每个世界维护一个实例。 通过监听生物生成事件，检查生物是否在电感灯的生效区域内，并根据电感灯的设置阻止相应类型的生物生成。 主要功能包括： 维护有效电感灯的不可变模式与范围快照 处理生物生成事件，阻止在电感灯生效区域内的生物生成 通过方块实体生命周期清理失效的电感灯快照<br>参见 InductionLightBlock<br>参见 InductionLightBlockEntity<br>参见 MobSpawnEvent.PositionCheck

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SpawningManager getInstance(Level level) ` | 获取与指定世界关联的 SpawningManager 实例 使用单例模式，为每个 Level 创建并缓存一个 SpawningManager 实例。 如果指定的 Level 尚未创建实例，则通过 SpawningManager#SpawningManager(Level) 构造函数创建新实例。<br>参数 ` level ` 用于获取 SpawningManager 实例的世界对象<br>返回 与指定世界关联的 SpawningManager 实例<br>参见 Map#computeIfAbsent(Object, java.util.function.Function)<br>末尾返回 ` INSTANCES.computeIfAbsent(level, SpawningManager::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java#L63) |
| ` public static void addLightBlock(BlockPos pos, Level level, boolean isAnimal) ` | 在服务端更新已点亮电感灯的模式与范围，供生成线程读取。<br>实现调用 ` getInstance(level) `<br>实现调用 ` pos.immutable() `<br>[调用处 InductionLightBlockEntity.updateSpawningState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InductionLightBlockEntity.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java#L74) |
| ` public static void removeLightBlock(BlockPos pos, Level level) ` | 实现调用 ` INSTANCES.get(level) `<br>分支 ` (spawningManager != null) ` 内调用 ` spawningManager.lightBlocks.remove(pos) `<br>[调用处 InductionLightBlockEntity.updateSpawningState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InductionLightBlockEntity.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java#L84) |
| ` public static void clear(Level level) ` | 实现调用 ` INSTANCES.remove(level) `<br>分支 ` (spawningManager != null) ` 内调用 ` spawningManager.lightBlocks.clear() `<br>[调用处 LevelEventListener.onLevelUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java#L89) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java#L43) |

## StorageComparatorManager

` public final class StorageComparatorManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java#L29)

记录世界中与已加载存储关联的板条箱方块，供内容变化时刷新相邻比较器信号。 板条箱的物品存放在全局 Storages 中，方块内容变化不会像原版容器那样 自动触发方块更新，因此需要一张 存储 ID → 世界内方块 的表，在 StorageServerStub.onContentsChanged 时主动通知比较器重新读取。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerIfApplicable(StorageBlockEntity be) ` | 板条箱 / 大型板条箱方块获得存储 ID 或区块加载时注册其主方块位置。<br>实现调用 ` be.getLevel() `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` be.getId() `<br>实现调用 ` StorageComparatorManager.STORAGE_BLOCKS.get(level.dimension(), id) `<br>[调用处 StorageBlockEntity.setId](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java#L39) |
| ` public static void unregisterIfApplicable(StorageBlockEntity be) ` | 方块被移除或所在区块卸载时注销。<br>实现调用 ` be.getLevel() `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` be.getId() `<br>实现调用 ` StorageComparatorManager.STORAGE_BLOCKS.get(level.dimension(), id) `<br>实现调用 ` level.dimension() `<br>实现调用 ` positions.remove(StorageComparatorManager.mainPos(be)) `<br>[调用处 StorageBlockEntity.onChunkUnloaded](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L127) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java#L63) |
| ` public static void notifyContentsChanged(UUID storageId) ` | 存储内容变化时通知所有关联方块，让相邻比较器重新计算输出信号。<br>参数 ` storageId ` 发生变化的存储 ID<br>实现调用 ` ServerLifecycleHooks.getCurrentServer() `<br>实现调用 ` StorageComparatorManager.STORAGE_BLOCKS.column(storageId).entrySet() `<br>实现调用 ` StorageComparatorManager.STORAGE_BLOCKS.column(storageId) `<br>实现调用 ` entry.getValue() `<br>实现调用 ` positions.isEmpty() `<br>实现调用 ` server.getLevel(entry.getKey()) `<br>[调用处 StorageServerStub.onContentsChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L4834) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java#L87) |

## StoragePortManager

` public final class StoragePortManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L45)

仓储端口管理器：登记各存储名下的端口，并提供端口相连关系的扫描与流体读写。 三种端口（仓储端口、仓储流体端口、仓储端口整合器）在连通关系重校验时都会重新登记， 表按「维度 × 存储 ID → 端口位置」记录；流体相关的查询只取其中的流体端口。 维度先分层才能避免不同维度的同坐标互相干扰（注册与注销都必须带上维度）。 相连关系由端口自身决定：面相邻的端口可互相延伸，遇到集装箱 / 存储站不穿过， 因此集装箱两侧未直接相连的端口阵列不会互通。端口周期性重校验并重新登记， 失效条目会被自然修正。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int FLUID_SLOT_BASE ` | 流体伪槽位的逻辑编号起点。 流体不占存储槽位，用一段远高于真实槽位数的编号与物品槽位区分； 服务端排序与客户端渲染、同步均以此判定「这是流体而非物品」。<br>初值 ` 1 << 24 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L52) |
| ` public static LinkedPorts scan(Level level, BlockPos start) ` | 从起点沿面相邻的端口扫描相连关系，一次遍历同时得到核心与端口。<br>参数 ` level ` 世界<br>参数 ` start ` 起点（任意端口方块位置）<br>返回 连通组件的核心与端口；未加载的相邻方块不参与扫描<br>末尾返回 ` new LinkedPorts(cores.size() == 1 ? cores.iterator().next() : null, List.copyOf(ports)) `<br>实现调用 ` queue.addLast(start) `<br>实现调用 ` visited.add(start) `<br>实现调用 ` queue.isEmpty() `<br>实现调用 ` queue.removeFirst() `<br>实现调用 ` Direction.values() `<br>实现调用 ` pos.relative(direction) `<br>[调用处 AbstractStoragePortBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractStoragePortBlock.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L81) |
| ` @Nullable public static BlockPos findSoleCore(Level level, BlockPos start) ` | 从起点扫描相连关系，解析连通组件接触到的那个唯一核心。<br>参数 ` level ` 世界<br>参数 ` start ` 起点（任意端口方块位置）<br>返回 唯一有效核心的主方块坐标；没有核心或接触多个核心时返回 null<br>末尾返回 ` StoragePortManager.scan(level, start).core() `<br>[调用处 StorageFluidPortBlockEntity.validateLink](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L440) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L130) |
| ` public static void register(UUID storageId, Level level, BlockPos pos) ` | 登记一个已连接到某存储的端口。<br>参数 ` storageId ` 存储 ID<br>参数 ` level ` 端口所在维度<br>参数 ` pos ` 端口位置<br>实现调用 ` StoragePortManager.PORTS.get(level.dimension(), storageId) `<br>实现调用 ` level.dimension() `<br>分支 ` (positions == null) ` 内调用 ` StoragePortManager.PORTS.put(level.dimension(), storageId, positions) `<br>分支 ` (positions == null) ` 内调用 ` level.dimension() `<br>实现调用 ` positions.add(pos.immutable()) `<br>实现调用 ` pos.immutable() `<br>[调用处 StorageFluidPortBlockEntity.validateLink](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L450) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L142) |
| ` public static void unregister(@Nullable UUID storageId, ResourceKey<Level> dimension, BlockPos pos) ` | 注销某端口在「指定存储 × 指定维度」下的登记。 只清这一个存储名下的条目：端口从 A 存储改挂到 B 存储时，必须先把 A 的旧条目清掉， 否则 A 的界面仍会显示该端口的流体、drain(A) 还会从属于 B 的端口抽走流体。 只清这一个维度：不同维度的同坐标是两个不同的端口。<br>参数 ` storageId ` 存储 ID；为 null 时无操作<br>参数 ` dimension ` 端口所在维度<br>参数 ` pos ` 端口位置<br>实现调用 ` StoragePortManager.PORTS.get(dimension, storageId) `<br>实现调用 ` positions.remove(pos) `<br>分支 ` (positions.remove(pos)) ` 内调用 ` StoragePortManager.invalidateItemPorts(storageId) `<br>实现调用 ` positions.isEmpty() `<br>分支 ` (positions.isEmpty()) ` 内调用 ` StoragePortManager.PORTS.remove(dimension, storageId) `<br>[调用处 StorageFluidPortBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StorageFluidPortBlockEntity.java#L415) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L164) |
| ` public static void clear() ` | 服务端停止时清表，避免静态表在下次进入世界时残留上次的登记。<br>实现调用 ` StoragePortManager.PORTS.clear() `<br>实现调用 ` StoragePortManager.ITEM_PORT_VERSIONS.clear() `<br>[调用处 ServerLifecycleEventListener.onServerStopped](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L181) |
| ` public static List<StorageServerStub.FluidEntry> collect(UUID storageId) ` | 汇总某存储连接到的所有流体端口中的流体，同种流体合并数量。<br>参数 ` storageId ` 存储 ID<br>返回 流体列表；没有流体时为空列表<br>末尾返回 ` result `<br>实现调用 ` StoragePortManager.liveFluidPorts(storageId) `<br>实现调用 ` port.getFluid() `<br>实现调用 ` fluid.isEmpty() `<br>分支 ` (drained) ` 内调用 ` port.getRememberedFluid() `<br>分支 ` (drained) ` 内调用 ` fluid.isEmpty() `<br>实现调用 ` StoragePortManager.indexOfSame(result, fluid) `<br>[调用处 StoragePreviewSnapshot.capture](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L192) |
| ` @Nullable public static StorageServerStub.FluidEntry find(UUID storageId, FluidStack fluid) ` | 按流体身份查找该存储中的条目。 供交互使用：客户端与点击之间列表可能变化（端口被拆 / 区块卸载 / 新流体接入）， 按下标定位会取到别的流体，故改按 FluidStack#isSameFluidSameComponents 匹配。<br>参数 ` storageId ` 存储 ID<br>参数 ` fluid ` 目标流体<br>返回 匹配的条目；不存在时返回 null<br>末尾返回 ` null `<br>实现调用 ` StoragePortManager.collect(storageId) `<br>实现调用 ` FluidStack.isSameFluidSameComponents(entry.icon(), fluid) `<br>实现调用 ` entry.icon() `<br>[调用处 StorageServerStub.filledBucketOf](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L6105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L229) |
| ` public static int drain(UUID storageId, FluidStack fluid, int amountMb) ` | 从该存储名下持有该流体的端口中抽取指定量，可跨多个端口凑足。<br>参数 ` storageId ` 存储 ID<br>参数 ` fluid ` 目标流体（按流体与组件匹配）<br>参数 ` amountMb ` 期望抽取量（mB）<br>返回 实际抽取量（mB）<br>末尾返回 ` StoragePortManager.drain(storageId, fluid, amountMb, false) `<br>[调用处 BuildingMaterials.consume](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L683) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L257) |
| ` public static int drain(UUID storageId, FluidStack fluid, int amountMb, boolean simulate) ` | #drain(UUID, FluidStack, int) 的模拟重载：simulate 为 true 时只统计 可抽取量、不改动任何端口。 供「先模拟确认够量、再实际抽取」的调用方使用，避免抽到一半失败留下已抽走的流体。<br>参数 ` simulate ` 是否只模拟<br>返回 可抽取量 / 实际抽取量（mB）<br>末尾返回 ` amountMb - remaining `<br>实现调用 ` StoragePortManager.liveFluidPorts(storageId) `<br>实现调用 ` port.getFluid() `<br>实现调用 ` stored.isEmpty() `<br>实现调用 ` FluidStack.isSameFluidSameComponents(stored, fluid) `<br>实现调用 ` port.getFluidHandler().drain(remaining, action) `<br>实现调用 ` port.getFluidHandler() `<br>[调用处 BuildingMaterials.reserveFluid](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L477) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L270) |
| ` @Nullable public static IFluidHandler findAcceptor(UUID storageId, FluidStack fluid) ` | 找一个 已在存放同种流体 的端口处理器，用于把桶装流体自动倾倒进仓储。 按 #4792：只倾倒入「有相同流体」的端口；没有对应端口时返回 null， 由调用方把桶作为普通物品存入。因此本方法 不 回退到空端口——否则空端口会把 桶装流体直接吃掉，桶再也无法以物品形式入库。<br>参数 ` storageId ` 存储 ID<br>参数 ` fluid ` 待倾入的流体<br>返回 可接收的流体处理器；没有存放同种流体的端口时返回 null<br>末尾返回 ` null `<br>实现调用 ` StoragePortManager.liveFluidPorts(storageId) `<br>实现调用 ` port.getFluid() `<br>实现调用 ` stored.isEmpty() `<br>实现调用 ` FluidStack.isSameFluidSameComponents(stored, fluid) `<br>分支 ` (!stored.isEmpty() && FluidStack.isSameFluidSameComponents(stored, fluid)) ` 内调用 ` port.getFluidHandler() `<br>[调用处 StorageServerStub.pourIntoFluidPort](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L6330) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L300) |
| ` @Nullable public static IFluidHandler findRefillTarget(UUID storageId, FluidStack fluid) ` | 回滚专用：找一个能装下该流体的端口（同种流体优先，否则任意空端口）。 与 #findAcceptor 的区别在于允许空端口：这里灌回的是先前从端口抽出、 因后续步骤失败而必须归还的流体，其原端口可能已被抽空，若同样只认同种流体， 归还就会失败并凭空丢失流体。<br>参数 ` storageId ` 存储 ID<br>参数 ` fluid ` 待灌回的流体<br>返回 可接收的流体处理器；没有合适端口时返回 null<br>末尾返回 ` emptyAcceptor `<br>实现调用 ` StoragePortManager.liveFluidPorts(storageId) `<br>实现调用 ` port.getFluid() `<br>实现调用 ` stored.isEmpty() `<br>分支 ` (emptyAcceptor == null) ` 内调用 ` port.getFluidHandler() `<br>实现调用 ` FluidStack.isSameFluidSameComponents(stored, fluid) `<br>分支 ` (FluidStack.isSameFluidSameComponents(stored, fluid)) ` 内调用 ` port.getFluidHandler() `<br>[调用处 BuildingMaterials.consume](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L690) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L322) |
| ` public static List<StorageFluidPortBlockEntity> liveFluidPorts(UUID storageId) ` | 取出该存储名下当前已加载的流体端口方块实体。 存储可跨维度（超维存储站），故按列取该存储在所有维度下的登记。<br>` (server == null \|\| StoragePortManager.PORTS.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` result `<br>实现调用 ` ServerLifecycleHooks.getCurrentServer() `<br>实现调用 ` StoragePortManager.PORTS.isEmpty() `<br>分支 ` (server == null \|\| StoragePortManager.PORTS.isEmpty()) ` 内调用 ` List.of() `<br>实现调用 ` StoragePortManager.PORTS.column(storageId).entrySet() `<br>实现调用 ` StoragePortManager.PORTS.column(storageId) `<br>实现调用 ` server.getLevel(entry.getKey()) `<br>[调用处 StoragePortConsolidatorBlockEntity.fluidTargets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StoragePortConsolidatorBlockEntity.java#L438) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L345) |
| ` public static long itemPortVersion(UUID storageId) ` | 返回端口登记版本，供存储处理器刷新已加载的内部库存列表。<br>末尾返回 ` StoragePortManager.ITEM_PORT_VERSIONS.getOrDefault(storageId, 0L) `<br>[调用处 LinkedStorageItems.ports](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/unlimited/LinkedStorageItems.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L370) |
| ` public static void invalidateItemPorts(UUID storageId) ` | 核心可用性改变时同时刷新端口列表和仓储汇总，避免等待端口定时检查。<br>实现调用 ` StoragePortManager.ITEM_PORT_VERSIONS.merge(storageId, 1L, Long::sum) `<br>实现调用 ` StorageServerStub.onContentsChanged(storageId) `<br>[调用处 StorageBlockEntity.invalidateItemPorts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L375) |
| ` public static List<StoragePortBlockEntity> liveItemPorts(UUID storageId) ` | 返回该存储已连接且已加载的物品端口，按维度与位置去重。<br>` (server == null) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` result `<br>实现调用 ` ServerLifecycleHooks.getCurrentServer() `<br>分支 ` (server == null) ` 内调用 ` List.of() `<br>实现调用 ` StoragePortManager.PORTS.column(storageId).entrySet() `<br>实现调用 ` StoragePortManager.PORTS.column(storageId) `<br>实现调用 ` server.getLevel(entry.getKey()) `<br>实现调用 ` entry.getKey() `<br>[调用处 LinkedStorageItems.ports](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/unlimited/LinkedStorageItems.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L381) |
| ` public static Set<BlockPos> positions(UUID storageId) ` | 某存储当前登记的全部端口位置（仓储端口 / 流体端口 / 整合器都算），供测试与调试使用。<br>参数 ` storageId ` 存储 ID<br>返回 端口位置集合（跨维度取并集）<br>末尾返回 ` Set.copyOf(result) `<br>实现调用 ` StoragePortManager.PORTS.column(storageId).values() `<br>实现调用 ` StoragePortManager.PORTS.column(storageId) `<br>实现调用 ` result.addAll(positions) `<br>实现调用 ` Set.copyOf(result) `<br>[调用处 BuildingMaterials.excludeFluidSources](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L589) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L409) |

## StoragePortManager.LinkedPorts

` public record LinkedPorts(BlockPos core, List<IStoragePort> ports) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71)

端口相连关系的扫描结果。<br>参数 ` core ` 连通组件接触到的唯一核心主方块坐标；没有核心或接触多个核心时为 null<br>参数 ` ports ` 该组件中除起点以外的所有端口

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LinkedPorts(BlockPos core, List<IStoragePort> ports) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71) |
| ` public BlockPos core() ` | 读取 record 分量 ` core ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71) |
| ` public List<IStoragePort> ports() ` | 读取 record 分量 ` ports ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StoragePortManager.java#L71) |

## TerminalSourceManager

` public final class TerminalSourceManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java#L29)

世界中可被本地终端 / 潜影终端连接的仓储源（大型板条箱与潜影集装箱）管理器。 仓储方块在世界中放置（获得存储 ID 或从存档载入）时注册主方块位置， 终端打开 / 刷新时直接按表检索最近的候选，避免每帧全量扫描区块； 表内条目可能因方块被破坏而过期，查询方需用方块实体做最终校验。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerIfApplicable(StorageBlockEntity be) ` | 仓储方块获得存储 ID 或载入时调用；仅登记大型板条箱 / 潜影集装箱的主方块。<br>实现调用 ` be.getLevel() `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` state.getBlock() `<br>分支 ` (state.getBlock() instanceof LargeCrateBlock) ` 内调用 ` TerminalSourceManager.LARGE_CRATES .computeIfAbsent(level.dimension(), ignored -> new HashSet<>()) `<br>分支 ` (state.getBlock() instanceof LargeCrateBlock) ` 内调用 ` level.dimension() `<br>[调用处 StorageBlockEntity.setId](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java#L37) |
| ` public static void unregisterIfApplicable(StorageBlockEntity be) ` | 仓储方块被移除或所在区块卸载时调用；仅注销大型板条箱 / 潜影集装箱的主方块。<br>实现调用 ` be.getLevel() `<br>实现调用 ` level.isClientSide() `<br>分支 ` (be instanceof LargeCrateBlockEntity) ` 内调用 ` TerminalSourceManager.LARGE_CRATES.get(level.dimension()) `<br>分支 ` (be instanceof LargeCrateBlockEntity) ` 内调用 ` level.dimension() `<br>分支 ` (be instanceof ShulkerContainerBlockEntity) ` 内调用 ` TerminalSourceManager.SHULKER_CONTAINERS.get(level.dimension()) `<br>分支 ` (be instanceof ShulkerContainerBlockEntity) ` 内调用 ` level.dimension() `<br>[调用处 StorageBlockEntity.onChunkUnloaded](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java#L55) |
| ` public static @Nullable BlockPos nearestLargeCrate(ServerLevel level, double x, double y, double z, int range) ` | 返回范围内最近的大型板条箱主方块坐标；没有则返回 null。<br>末尾返回 ` TerminalSourceManager.nearest( level, TerminalSourceManager.LARGE_CRATES.get(level.dimension()), x, y, z, range, LargeCrateBlockEntity.class ) `<br>[调用处 StorageServerStub.findNearbyLargeCrate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5314) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java#L74) |
| ` public static @Nullable BlockPos nearestShulkerContainer( ServerLevel level, double x, double y, double z, int range ) ` | 返回范围内最近的潜影集装箱主方块坐标；没有则返回 null。<br>末尾返回 ` TerminalSourceManager.nearest( level, TerminalSourceManager.SHULKER_CONTAINERS.get(level.dimension()), x, y, z, range, ShulkerContainerBlockEntity.class ) `<br>[调用处 StorageServerStub.findNearbyShulkerContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5388) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java#L87) |
