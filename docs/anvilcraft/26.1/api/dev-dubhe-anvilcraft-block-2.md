# dev.dubhe.anvilcraft.block（RedstoneWireBlock.ConnectionType 至 WipBlock）



## RedstoneWireBlock.ConnectionType

` public enum ConnectionType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1187)

导线某一局部方向的连接外观与连通状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 没有内部导线或外部红石接口。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1189) |
| ` SIDE ` | 沿当前附着面延伸。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1191) |
| ` UP ` | 沿前方方块的完整碰撞面向上爬升。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1193) |
| ` CORNER ` | 绕同一支撑方块的边缘连接到另一个附着面的导线。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1195) |
| ` CORNER_SP ` | 连接外部红石元件时使用的带背面贴图的短拐角。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1197) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1208) |
| ` public boolean isConnected() ` | 末尾返回 ` this.connected `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1187) |
| ` public static ConnectionType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1187) |
| ` public static ConnectionType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L1187) |

## RedstoneWireClientPowerCache

` public final class RedstoneWireClientPowerCache `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L21)

客户端显示用的导线功率缓存。 功率是服务端网络管理器的派生值，不写入方块状态或存档。客户端只保留非零值， 未收到同步时按零处理；使用并发映射是因为区块重建可能在渲染线程读取颜色时发生。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int get(@Nullable Level level, BlockPos pos) ` | 返回指定客户端世界中导线的显示功率；尚未同步时返回零。<br>` (level == null \|\| RedstoneWireClientPowerCache.cachedLevel != level) ` 成立时提前返回 ` 0 `<br>末尾返回 ` value == null ? 0 : Byte.toUnsignedInt(value) `<br>[调用处 RedstoneWireNetworkManager.getPower](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L334) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L30) |
| ` public static int getCurrent(BlockPos pos) ` | 供区块渲染区域查询当前客户端世界的功率。<br>末尾返回 ` RedstoneWireClientPowerCache.get(RedstoneWireClientPowerCache.cachedLevel, pos) `<br>[调用处 ModColorHandlers.RedstoneWireTintSource.colorInWorld](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L39) |
| ` public static boolean update(Level level, BlockPos pos, int power) ` | 更新单个位置，返回其显示颜色是否发生变化。<br>末尾返回 ` !dirtySections.isEmpty() `<br>[调用处 RedstoneWirePowerResponsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L44) |
| ` public static LongOpenHashSet apply(Level level, RedstoneWirePowerSyncPacket packet) ` | 应用一个区块的功率同步，并返回需要重建渲染的区段集合。<br>末尾返回 ` dirtySections `<br>[调用处 RedstoneWirePowerSyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L57) |
| ` public static void clearChunk(@Nullable Level level, ChunkPos chunkPos) ` | 清理客户端不再加载的区块，避免已移除导线的坐标长期留在缓存中。<br>实现调用 ` RedstoneWireClientPowerCache.clearChunkInternal(chunkPos.pack(), null) `<br>实现调用 ` chunkPos.pack() `<br>[调用处 LevelEventListener.onChunkUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L79) |
| ` public static void clear(@Nullable Level level) ` | 清理客户端世界切换时的全部派生数据。<br>实现调用 ` RedstoneWireClientPowerCache.POWERS.clear() `<br>实现调用 ` RedstoneWireClientPowerCache.POSITIONS_BY_CHUNK.clear() `<br>[调用处 LevelEventListener.onLevelUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L87) |

## RedstoneWireNetworkManager

` public final class RedstoneWireNetworkManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L48)

按维度维护无衰减红石导线的连通网络、连接拓扑和信号缓存。 每个 Network 代表当前已加载区块中的一个连通分量。Manager 只在拓扑改变时重新搜索导线， 普通信号变化则复用缓存的开放端点采样最大输入，再把同一强度同步到客户端。 网络和功率数据都是可由世界状态重建的运行时缓存；只有玩家手动编辑的少量端口覆盖单独写入存档。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void topologyChanged(Level level, BlockPos pos) ` | 标记某个位置附近的导线连接关系已经变化。<br>分支 ` (level instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.state(serverLevel).requestTopologyUpdate(pos.asLong()) `<br>分支 ` (level instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.state(serverLevel) `<br>分支 ` (level instanceof ServerLevel serverLevel) ` 内调用 ` pos.asLong() `<br>[调用处 RedstoneWireBlock.onPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L251) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L64) |
| ` public static void restoreBlueprint(ServerLevel level, Map<BlockPos, BlockState> wires) ` | 蓝图批量恢复端口和功率缓存，初始化期间不改写外观、不通知红石元件。<br>实现调用 ` wires.isEmpty() `<br>实现调用 ` RedstoneWireNetworkManager.state(level) `<br>实现调用 ` wires.entrySet() `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L279) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L72) |
| ` public static void neighborChanged( Level level, BlockPos pos, Block neighborBlock, @Nullable BlockPos neighborPos ) ` | 根据邻居变化的类型，为该位置安排拓扑重建或信号重算。<br>实现调用 ` RedstoneWireNetworkManager.state(serverLevel) `<br>实现调用 ` pos.asLong() `<br>实现调用 ` state.networkAt(packedPos) `<br>[调用处 RedstoneWireBlock.neighborChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L337) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L100) |
| ` public static void tick() ` | 在服务端 tick 末尾继续处理上一轮因收敛上限而留下的更新。<br>实现调用 ` RedstoneWireNetworkManager.LEVELS.values() `<br>实现调用 ` state.tick() `<br>[调用处 ServerLifecycleEventListener.onTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L179) |
| ` public static void clear(ServerLevel level) ` | 世界卸载时释放该维度的全部派生缓存。<br>执行 ` RedstoneWireNetworkManager.LEVELS.remove(level) `<br>[调用处 LevelEventListener.onLevelUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L186) |
| ` public static void syncChunk(ServerPlayer player, ServerLevel level, ChunkAccess chunk) ` | 将指定区块中当前已求值的导线功率发送给刚开始观察该区块的玩家。<br>实现调用 ` RedstoneWireNetworkManager.state(level) `<br>实现调用 ` state.runUpdates() `<br>实现调用 ` state.createChunkSync(chunk.getPos()) `<br>[调用处 PlayerTrackingChunkEventListener.onChunkSent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L191) |
| ` public static void wireRemoved(Level level, BlockPos pos) ` | 清除已移除导线的持久化端口覆盖和客户端功率缓存。<br>分支 ` (level instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.state(serverLevel).connectionOverrides.clear(pos.asLong()) `<br>分支 ` (level instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.state(serverLevel) `<br>分支 ` (level instanceof ServerLevel serverLevel) ` 内调用 ` pos.asLong() `<br>[调用处 RedstoneWireBlock.affectNeighborsAfterRemoval](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L265) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L200) |
| ` public static void chunkLoaded(ServerLevel level, ChunkAccess chunk) ` | 扫描新加载区块中的导线，并将它们作为待建网种子。<br>实现调用 ` RedstoneWireNetworkManager.state(level) `<br>[调用处 LevelEventListener.onChunkLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L216) |
| ` public static void chunkUnloaded(ServerLevel level, ChunkPos chunkPos) ` | 区块卸载时移除其中节点，并重建仍处于加载状态的网络部分。<br>实现调用 ` RedstoneWireNetworkManager.LEVELS.get(level) `<br>分支 ` (state != null) ` 内调用 ` state.chunkUnloaded(chunkPos.pack()) `<br>分支 ` (state != null) ` 内调用 ` chunkPos.pack() `<br>[调用处 LevelEventListener.onChunkUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L233) |
| ` public static boolean isSuppressingSignal() ` | 返回当前线程是否正在屏蔽自定义导线的信号输出。<br>末尾返回 ` RedstoneWireNetworkManager.SUPPRESS_SIGNAL.get() `<br>[调用处 RedstoneWireBlock.isSignalSource](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireBlock.java#L344) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L241) |
| ` public static int getNonDustPower(ServerLevel level, BlockPos pos) ` | 为服务端提示查询返回非红石粉输入强度，必要时同步建立当前位置的网络。<br>末尾返回 ` network == null \|\| !network.valid \|\| network.overflow ? 0 : network.nonDustPower `<br>[调用处 RedstoneWirePowerRequestPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L317) |
| ` public static int getPower(BlockGetter level, BlockPos pos) ` | 返回服务端网络或客户端同步缓存中的当前总功率。 服务端返回权威网络值，客户端返回最近一次从服务端收到的值；附属模组可以使用同一个查询， 不再读取已经移除的方块状态属性。<br>` (level instanceof ServerLevel serverLevel) ` 成立时提前返回 ` RedstoneWireNetworkManager.getPower(serverLevel, pos) `<br>` (level instanceof Level clientLevel && clientLevel.isClientSide()) ` 成立时提前返回 ` RedstoneWireClientPowerCache.get(clientLevel, pos) `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L329) |
| ` public static int getPower(ServerLevel level, BlockPos pos) ` | 为服务端红石查询返回总输入强度，必要时同步建立当前位置的网络。<br>末尾返回 ` network == null \|\| !network.valid ? 0 : network.totalPower ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L340) |
| ` public static boolean isPowerReady(Level level, BlockPos pos) ` | 首次求值完成前的缓存零值不代表断电，边沿检测应等待端点更新后再读取。<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>末尾返回 ` network != null && network.valid && !network.needsPowerSync `<br>[调用处 PulseGeneratorBlock.update](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/redstone/PulseGeneratorBlock.java#L181) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L346) |

## RuinsBlock

` public class RuinsBlock extends BaseEntityBlock implements IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IntegerProperty LIGHT_BLOCK ` | 初值 ` IntegerProperty.create("light_block", 0, 15) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L40) |
| ` public static final BooleanProperty SKYLIGHT ` | 初值 ` BooleanProperty.create("skylight") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L42) |
| ` public static final BooleanProperty MOVABLE ` | 初值 ` BooleanProperty.create("movable") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L43) |
| ` public RuinsBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(MOVABLE, true).setValue(LIGHT_BLOCK, 0).setValue(SKYLIGHT, true) `<br>实现调用 ` this.stateDefinition.any().setValue(MOVABLE, true).setValue(LIGHT_BLOCK, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L45) |
| ` @Override public BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` new RuinsBlockEntity(ModBlockEntities.RUINS_BLOCK.get(), pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L60) |
| ` @Override public PushReaction getPistonPushReaction(BlockState state) ` | 末尾返回 ` state.getValue(MOVABLE) ? PushReaction.NORMAL : PushReaction.BLOCK ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L65) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity entity) ` | 分支 ` (entity instanceof RuinsBlockEntity ruins) ` 内调用 ` ruins.invalidateDisplayEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L70) |
| ` @Override public List<ItemStack> getDrops(BlockState state, LootParams.Builder params) ` | 末尾返回 ` params.getOptionalParameter(LootContextParams.BLOCK_ENTITY) instanceof RuinsBlockEntity ruins && RuinsStructure.isMainPart(ruins) ? ruins.getDrops(params) : List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L75) |
| ` public static BlockState disguisedState(BlockGetter level, BlockPos pos, BlockState state) ` | 末尾返回 ` state.getBlock() instanceof RuinsBlock && level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins ? ruins.getDisplayState() : state `<br>[调用处 RuinsRenderFaceMixin.anvilcraft$disguisedNeighbor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/RuinsRenderFaceMixin.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L127) |
| ` public static BlockState connectedDisplayState(BlockGetter level, BlockPos pos, BlockState state) ` | ` (state.getBlock() instanceof RedstoneWireBlock wire) ` 成立时提前返回 ` wire.connectionState(level, pos, state) `<br>` (state.getBlock() instanceof RedStoneWireBlock wire) ` 成立时提前返回 ` ((RedStoneWireBlockAccessor) wire).anvilcraft$getConnectionState(level, state, pos) `<br>末尾返回 ` state `<br>[调用处 RuinsBlockEntityRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L132) |
| ` @Override public int getLightEmission(BlockState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins ? ruins.getDisplayState().getLightEmission(new RuinsBlockView(level), pos) : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L140) |
| ` @Override public boolean canConnectRedstone(BlockState state, BlockGetter level, BlockPos pos, @Nullable Direction direction) ` | 末尾返回 ` level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins && ruins.getDisplayState().getBlock().canConnectRedstone(ruins.getDisplayState(), level, pos, direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L162) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L168) |

## RuinsBlockView

` public record RuinsBlockView(BlockGetter level) implements BlockGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public BlockState getBlockState(BlockPos pos) ` | 末尾返回 ` this.level.getBlockEntity(pos) instanceof RuinsBlockEntity ruins ? ruins.getDisplayState() : this.level.getBlockState(pos) `<br>[调用处 RuinsBlockView.getFluidState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L12) |
| ` @Override @Nullable public BlockEntity getBlockEntity(BlockPos pos) ` | 末尾返回 ` entity instanceof RuinsBlockEntity ruins ? ruins.getDisplayEntity() : entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L18) |
| ` @Override public FluidState getFluidState(BlockPos pos) ` | 末尾返回 ` this.getBlockState(pos).getFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L25) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.level.getHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L30) |
| ` @Override public int getMinY() ` | 末尾返回 ` this.level.getMinY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L35) |
| ` public RuinsBlockView(BlockGetter level) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L11) |
| ` public BlockGetter level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlockView.java#L11) |

## RuinsStructure

` public final class RuinsStructure `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isMultipart(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof AbstractMultiPartBlock<?> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L21) |
| ` public static boolean isMainPart(RuinsBlockEntity ruins) ` | 末尾返回 ` !isMultipart(state) \|\| ((AbstractMultiPartBlock<?>) state.getBlock()).isMainPart(state) `<br>[调用处 RuinsBlock.getDrops](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L25) |
| ` public static RuinsBlockEntity main(Level level, RuinsBlockEntity ruins) ` | ` (!isMultipart(state)) ` 成立时提前返回 ` ruins `<br>` (level.isLoaded(main) && level.getBlockEntity(main) instanceof RuinsBlockEntity candidate && candidate.getDisplayState().is(state.getBlock()) && isMainPart(candidate)) ` 成立时提前返回 ` candidate `<br>末尾返回 ` ruins `<br>[调用处 RuinsBlock.useWithoutItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L30) |
| ` public static boolean canInteract(Player player, RuinsBlockEntity ruins) ` | ` (player.isWithinBlockInteractionRange(ruins.getBlockPos(), 1.0)) ` 成立时提前返回 ` true `<br>末尾返回 ` false `<br>[调用处 RuinsUpdatePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L39) |
| ` public static void destroyOthers(Level level, RuinsBlockEntity ruins, boolean drops, @Nullable Entity actor) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` REMOVING.get() `<br>实现调用 ` isMultipart(ruins.getDisplayState()) `<br>[调用处 RuinsBlock.useWithoutItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsStructure.java#L47) |

## SingularityCrystalBlock

` public class SingularityCrystalBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/SingularityCrystalBlock.java#L29)

奇点晶体方块。 除了作为极端天体数据的存储介质外，手持已绑定超维存储站的超维终端右键时， 奇点晶体将转化为绑定对应超维存储站的超维上传站。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SingularityCrystalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/SingularityCrystalBlock.java#L30) |

## TradingStationBlock

` public class TradingStationBlock extends WaterloggedFlexibleMultiPartBlock<DirectionVertical2PartHalf, EnumProperty<Direction>, Direction> implements MultiPartBlockEntity<DirectionVertical2PartHalf, TradingStationBlock>, IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Direction> FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L46) |
| ` public static final EnumProperty<DirectionVertical2PartHalf> HALF ` | 初值 ` EnumProperty.create("half", DirectionVertical2PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L47) |
| ` public TradingStationBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.defaultBlockState() .setValue(TradingStationBlock.HALF, DirectionVertical2PartHalf.BOTTOM) `<br>实现调用 ` this.defaultBlockState() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L49) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.waterloggedStateForPlacement(context, this.defaultBlockState().setValue(TradingStationBlock.FACING, dir)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L58) |
| ` @Override public Property<DirectionVertical2PartHalf> getPart() ` | 末尾返回 ` TradingStationBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L65) |
| ` @Override public DirectionVertical2PartHalf[] getParts() ` | 末尾返回 ` DirectionVertical2PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L70) |
| ` @Override public EnumProperty<Direction> getAdditionalProperty() ` | 末尾返回 ` TradingStationBlock.FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L75) |
| ` @Override public TradingStationBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L80) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.TRADING_STATION.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L85) |
| ` @Override public @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 末尾返回 ` TradingStationBlock.FACING ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L100) |
| ` @Override public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L105) |
| ` @Override public boolean onDestroyedByPlayer( BlockState state, Level level, BlockPos pos, Player player, ItemStack tool, boolean willHarvest, FluidState fluid ) ` | 末尾返回 ` super.onDestroyedByPlayer(state, level, pos, player, tool, willHarvest, fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L145) |
| ` public Collection<BlockState> getBottomStates() ` | 实现调用 ` this.defaultBlockState() .setValue(TradingStationBlock.HALF, DirectionVertical2PartHalf.BOTTOM) `<br>实现调用 ` this.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L164) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | ` (state.getValue(TradingStationBlock.HALF) == DirectionVertical2PartHalf.TOP) ` 成立时提前返回 ` Shapes.empty() `<br>[调用处 TradingStationBlock.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L185) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L188) |

## TranscendenceGrindstoneBlock

` public class TranscendenceGrindstoneBlock extends BetterGrindstoneBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendenceGrindstoneBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L26) |
| ` @Override public InteractionResult use( BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.CONSUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L30) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 返回 ` MenuProvider ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceGrindstoneBlock.java#L45) |

## TranscendenceSmithingTableBlock

` public class TranscendenceSmithingTableBlock extends SmithingTableBlock implements IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L16)

可以执行全部锻造操作的超限锻造台。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranscendenceSmithingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L21) |
| ` @Override public MenuProvider getMenuProvider(BlockState state, Level level, BlockPos pos) ` | 返回 ` MenuProvider ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TranscendenceSmithingTableBlock.java#L25) |

## UseItemOnBlock

` public final class UseItemOnBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L27)

方块交互改装所需的材料与加工台系列方块之间的转化逻辑。 上表面用于放入/取出物品；其余面使用转化道具会把冲压平台改装为对应加工台并消耗道具， 手持铁砧锤右键侧面会把三种加工台还原为冲压平台。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static InteractionResult tryConvert( Level level, Player player, InteractionHand hand, BlockState state, BlockPos pos, BlockHitResult hitResult ) ` | 非上表面右击时处理转化。<br>返回 是否处理了这次交互<br>` (hitResult.getDirection() == Direction.UP) ` 成立时提前返回 ` InteractionResult.TRY_WITH_EMPTY_HAND `<br>` (stack.getItem() instanceof AnvilHammerItem) ` 成立时提前返回 ` tryHammerConvert(level, player, state, pos) `<br>末尾返回 ` tryItemConvert(level, player, stack, state, pos) `<br>[调用处 ProcessingTableBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/ProcessingTableBlock.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L36) |
| ` public static ItemStack materialFor(BlockState state) ` | ` (state.getBlock() instanceof LensBlock) ` 成立时提前返回 ` LensBlock.getGlassItem(state.getValue(LensBlock.TYPE)) `<br>末尾返回 ` item == Items.AIR ? ItemStack.EMPTY : new ItemStack(item) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L331) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L104) |
| ` public static Item upgradeItem(BlockState state) ` | ` (state.is(ModBlocks.CRUSHING_TABLE.get())) ` 成立时提前返回 ` Items.GRINDSTONE `<br>` (state.is(ModBlocks.SIFTING_TABLE.get())) ` 成立时提前返回 ` Items.SCAFFOLDING `<br>` (state.is(ModBlocks.UNPACKING_TABLE.get())) ` 成立时提前返回 ` Items.IRON_TRAPDOOR `<br>末尾返回 ` Items.AIR `<br>[调用处 CompositeBlockPlacement.materialFor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/UseItemOnBlock.java#L110) |

## WipBlock

` public class WipBlock extends BaseEntityBlock implements IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WipBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L25) |
| ` @Nullable @Override public BlockEntity newBlockEntity(BlockPos blockPos, BlockState blockState) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` WipBlockEntity.createInstance(ModBlockEntities.WIP_BLOCK.get(), blockPos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L34) |
| ` @Override public List<ItemStack> getDrops(BlockState state, LootParams.Builder params) ` | ` (!(be instanceof WipBlockEntity wipBe)) ` 成立时提前返回 ` super.getDrops(state, params) `<br>` (initialBlockState.isAir()) ` 成立时提前返回 ` super.getDrops(state, params) `<br>末尾返回 ` initialBlockState.getDrops(params) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L40) |
| ` public static @Nullable BlockState getInheritedBlock(BlockGetter level, BlockPos pos) ` | 返回进程方块应当继承属性的初始方块，没有可继承的目标时返回 null。<br>` (!(level.getBlockEntity(pos) instanceof WipBlockEntity wip)) ` 成立时提前返回 ` null `<br>` (initialBlock.isAir() \|\| initialBlock.getBlock() instanceof WipBlock) ` 成立时提前返回 ` null `<br>末尾返回 ` initialBlock `<br>[调用处 WipBlock.canHarvestBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L54) |
| ` @Override public boolean canHarvestBlock(BlockState state, BlockGetter level, BlockPos pos, Player player) ` | ` (initialBlock == null) ` 成立时提前返回 ` super.canHarvestBlock(state, level, pos, player) `<br>末尾返回 ` initialBlock.getBlock().canHarvestBlock(initialBlock, level, pos, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/WipBlock.java#L61) |
