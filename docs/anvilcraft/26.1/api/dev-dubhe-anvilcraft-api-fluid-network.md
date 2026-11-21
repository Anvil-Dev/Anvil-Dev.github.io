# dev.dubhe.anvilcraft.api.fluid.network



## FluidContainerLookup

` public final class FluidContainerLookup `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L25)

查找方块单元中由方块或实体提供的流体容器。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable Result find(Level level, BlockPos pos, @Nullable Direction side) ` | 查找占据 pos 的流体端点。方块能力优先于实体能力。 储罐矿车按碰撞箱覆盖的单元接入，重复入口由管网按处理器合并。<br>末尾返回 ` find(level, pos, side, level.getBlockEntity(pos)) `<br>[调用处 FluidPipeNetwork.canTickEndpoints](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1005) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L38) |
| ` public static List<Result> findAll(Level level, BlockPos pos, @Nullable Direction side) ` | 返回前方单元内全部实体容器，供管网保留多辆储罐矿车。<br>末尾返回 ` findAll(level, pos, side, level.getBlockEntity(pos)) `<br>[调用处 FluidNetworkScanner.addEndpointIfContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L334) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L53) |
| ` public static @Nullable Result findAny(Level level, BlockPos pos) ` | 查找任意方向暴露流体能力的容器。 部分外部模组只在特定方向提供能力，不能只用 side == null 判断其是否为容器；加载登记时需要检查所有方向。<br>末尾返回 ` findAny(level, pos, level.getBlockEntity(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L96) |
| ` public static @Nullable Result findAny( Level level, BlockPos pos, @Nullable BlockEntity blockEntity ) ` | 使用指定的方块实体查找任意方向的流体能力。 复用调用方已取得的方块实体，避免重复按位置查找。<br>` (result != null) ` 成立时提前返回 ` result `<br>末尾返回 ` null `<br>实现调用 ` find(level, pos, null, blockEntity) `<br>实现调用 ` Direction.values() `<br>实现调用 ` find(level, pos, side, blockEntity) `<br>[调用处 FluidNetworkScanner.isContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L105) |
| ` public static boolean isEntityConnectedToPipe( Level level, BlockPos containerPos, Direction sideToPipe, Entity entity ) ` | 储罐矿车在管道前方一格内即可接入，其他实体保留实际接触判定。<br>` (entity.isRemoved() \|\| entity.getCapability(Capabilities.Fluid.ENTITY, sideToPipe) == null) ` 成立时提前返回 ` false `<br>` (!level.isLoaded(pipePos) \|\| !FluidNetworkScanner.isPipePart(level.getBlockState(pipePos))) ` 成立时提前返回 ` false `<br>` (entity instanceof FluidTankMinecartEntity) ` 成立时提前返回 ` entity.getBoundingBox().intersects(new AABB(containerPos)) `<br>` (!BlockPos.containing(entity.getBoundingBox().getCenter()).equals(containerPos)) ` 成立时提前返回 ` false `<br>实现调用 ` entity.isRemoved() `<br>实现调用 ` entity.getCapability(Capabilities.Fluid.ENTITY, sideToPipe) `<br>实现调用 ` containerPos.relative(sideToPipe) `<br>实现调用 ` level.isLoaded(pipePos) `<br>实现调用 ` FluidNetworkScanner.isPipePart(level.getBlockState(pipePos)) `<br>实现调用 ` level.getBlockState(pipePos) `<br>[调用处 FluidNetworkScanner.addEndpointIfContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L336) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L124) |

## FluidContainerLookup.Result

` public record Result(ResourceHandler<FluidResource> handler, boolean cauldron, Entity entity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150)

在单个网络端点发现的流体处理器及其转移语义。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(ResourceHandler<FluidResource> handler, boolean cauldron, Entity entity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |
| ` public ResourceHandler<FluidResource> handler() ` | 读取 record 分量 ` handler ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |
| ` public boolean cauldron() ` | 读取 record 分量 ` cauldron ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |
| ` public Entity entity() ` | 读取 record 分量 ` entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L150) |

## FluidEndpoint

` public record FluidEndpoint(BlockPos containerPos, List<Entry> entries, ResourceHandler<FluidResource> handler, boolean cauldron, Entity entity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L25)

流体网络中的一个端点容器。 端点是网络的叶子节点：实际存储流体的容器（储罐、鱼缸、门格海绵、创造流体储罐、 其它模组容器等）。管道部件本身不是端点，它们只负责把端点连接成网络。<br>参数 ` containerPos ` 容器方块的位置（贴着管道的那一格；巨型储罐即其相连 part 的位置）<br>参数 ` entries ` 该容器实际接入管道的所有入口<br>参数 ` handler ` 容器的 ResourceHandler&lt;FluidResource&gt;<br>参数 ` cauldron ` 该端点是否为 NeoForge 注册的炼药锅<br>参数 ` entity ` 提供该端点的实体；方块容器为 null

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidEndpoint( BlockPos containerPos, Entry entry, ResourceHandler<FluidResource> handler, boolean cauldron, @Nullable Entity entity ) ` | 执行 ` this(containerPos, List.of(entry), handler, cauldron, entity) `<br>[调用处 FluidNetworkScanner.addEndpointIfContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L344) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L32) |
| ` public FluidEndpoint( BlockPos containerPos, BlockPos fromPipePos, @Nullable Direction sideToPipe, ResourceHandler<FluidResource> handler, int effectiveHeight, boolean cauldron ) ` | 执行 ` this(containerPos, new Entry(fromPipePos, sideToPipe, effectiveHeight), handler, cauldron, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L42) |
| ` public FluidEndpoint( BlockPos containerPos, BlockPos fromPipePos, @Nullable Direction sideToPipe, ResourceHandler<FluidResource> handler, int effectiveHeight, boolean cauldron, @Nullable Entity entity ) ` | 执行 ` this(containerPos, new Entry(fromPipePos, sideToPipe, effectiveHeight), handler, cauldron, entity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L53) |
| ` public BlockPos fromPipePos() ` | 末尾返回 ` this.primaryEntry().fromPipePos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L60) |
| ` public @Nullable Direction sideToPipe() ` | 末尾返回 ` this.primaryEntry().sideToPipe() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L64) |
| ` public FluidEndpoint withEntry(BlockPos pipePos, @Nullable Direction sideToPipe, int effectiveHeight) ` | 增加一个接入点后返回新的端点，避免改变已有端点对象。<br>末尾返回 ` new FluidEndpoint(this.containerPos, merged, this.handler, this.cauldron, this.entity) `<br>实现调用 ` merged.add(new Entry(pipePos, sideToPipe, effectiveHeight)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L69) |
| ` public Entry primaryEntry() ` | 第一个接入点（外部推送等仍使用单入口语义时的兼容入口）。 entries 永不为空：单入口构造使用 List#of，多入口通过 #withEntry 追加，均保证至少有一个元素。<br>末尾返回 ` this.entries.get(0) `<br>[调用处 FluidEndpoint.fromPipePos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L80) |
| ` public int effectiveHeight() ` | 兼容便捷方法：取第一个入口的等效高度。<br>末尾返回 ` this.entries.get(0).effectiveHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L85) |
| ` public BlockPos containerPos() ` | 读取 record 分量 ` containerPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L26) |
| ` public List<Entry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L27) |
| ` public ResourceHandler<FluidResource> handler() ` | 读取 record 分量 ` handler ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L28) |
| ` public boolean cauldron() ` | 读取 record 分量 ` cauldron ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L29) |
| ` public Entity entity() ` | 读取 record 分量 ` entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L25) |

## FluidEndpoint.Entry

` public record Entry(BlockPos fromPipePos, Direction sideToPipe, int effectiveHeight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90)

端点容器的一个实际管道接入点。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Entry(BlockPos fromPipePos, Direction sideToPipe, int effectiveHeight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |
| ` public BlockPos fromPipePos() ` | 读取 record 分量 ` fromPipePos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |
| ` public Direction sideToPipe() ` | 读取 record 分量 ` sideToPipe ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |
| ` public int effectiveHeight() ` | 读取 record 分量 ` effectiveHeight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidEndpoint.java#L90) |

## FluidNetworkManager

` public final class FluidNetworkManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L37)

流体管道网络的全局管理器（每服务器一个）。 缓存 + 脏标记 管道拓扑很少变，故网络对象 缓存复用 ：只有拓扑/端点/势场变化时才重扫。 变化通过 #markDirty 标记（管道放置/破坏/推动/邻居变、泵工作翻转、容器增删）。 端点的流体量每 tick 变但结构不变——直接每 tick 复用缓存网络做分配即可。 pos→网络索引 缓存时建 partIndex（管道位置→所属网络），tick 时直接遍历缓存网络， 免去"逐容器找相邻管道 + flood-fill 去重"的探测开销。 空闲降频 网络连续 &#123;@value #IDLE\_THRESHOLD&#125; tick 无流体转移则视为空闲，改为每 &#123;@value #IDLE\_INTERVAL&#125; tick 才分配一次；一旦发生转移立即恢复每 tick。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidNetworkManager INSTANCE ` | 初值 ` new FluidNetworkManager() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L38) |
| ` public static final int IDLE_THRESHOLD ` | 连续无转移达到此 tick 数则进入空闲降频<br>初值 ` 1200 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L41) |
| ` public static final int IDLE_INTERVAL ` | 空闲网络的分配间隔（tick）<br>初值 ` 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L43) |
| ` public void addContainer(Level level, BlockPos pos) ` | 容器加载时注册。管道部件不注册（它们无 BlockEntity）。<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.data(level) `<br>实现调用 ` d.pendingContainers.remove(pos) `<br>实现调用 ` d.readyContainers.remove(pos) `<br>实现调用 ` d.containers.add(pos.immutable()) `<br>实现调用 ` pos.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L68) |
| ` public void addContainerAfterLoad(Level level, BlockPos pos) ` | 登记刚加载的方块实体候选位置，并把容器检测与网络重建延后一轮。 能力查询可能通过多方块代理同步请求其他区块，因此加载回调中不能检测能力。 重建时会剔除非容器；延后一轮也可等待首次 tick 完成流体处理器初始化。<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.data(level) `<br>实现调用 ` d.readyContainers.remove(pos) `<br>实现调用 ` d.pendingContainers.add(pos.immutable()) `<br>实现调用 ` pos.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L85) |
| ` public void removeContainer(Level level, BlockPos pos) ` | 容器移除时注销。<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.byLevel.get(level) `<br>分支 ` (d != null) ` 内调用 ` d.pendingContainers.remove(pos) `<br>分支 ` (d != null) ` 内调用 ` d.readyContainers.remove(pos) `<br>分支 ` (d != null) ` 内调用 ` d.containers.remove(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L95) |
| ` public @Nullable Integer heightDeltaToHighestPeer(Level level, BlockPos containerPos) ` | 查询本容器端点与同网最高其他端点之间的 等效高度差 。 仓储流体端口用它在停止抽入时把自身高度对齐到最高的供给方，从而真正止住进液： 网络只在目标等效高度 严格低于 源时才转移（见 FluidPipeNetwork 的目标筛选中 对等效高度的严格比较），高度相等即互不流动。 取最高而非其它端点，是因为要止住的是「从上方进液」；对齐更高的容器同样能挡住 所有更低的容器。 返回 差值 而不是绝对高度：端点的 effectiveHeight 含累积扬程 phi， 而 phi 以扫描种子为零点，种子从 HashSet 里任意选出——同一套结构换一次重扫， phi 就可能整体平移一个泵扬程。调用方若拿到绝对高度再减去自身 Y，会漏算自己的 phi，误差恰为 phi\_self，对齐后仍可能低 10 格而继续进液；相减则 phi 自行抵消， 结果与种子、与多入口都无关。<br>参数 ` level ` 世界<br>参数 ` containerPos ` 本容器位置<br>返回 最高同网端点的等效高度减去本容器端点的等效高度；未接入管网、本容器不在网内 或网内没有其他端点时为 null<br>` (level.isClientSide()) ` 成立时提前返回 ` null `<br>` (d == null) ` 成立时提前返回 ` null `<br>` (network == null) ` 成立时提前返回 ` null `<br>` (self == null \|\| highestPeer == null) ` 成立时提前返回 ` null `<br>末尾返回 ` highestPeer - self `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.byLevel.get(level) `<br>实现调用 ` networkAt(level, containerPos, d) `<br>实现调用 ` network.getEndpoints() `<br>实现调用 ` endpoint.effectiveHeight() `<br>实现调用 ` endpoint.containerPos().equals(containerPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L129) |
| ` public FluidStack findInfiniteFluid(Level level, BlockPos containerPos, FluidResource preferred) ` | 查同网内其他端点正在无限供给的流体。 仓储流体端口据此判断自己是否接入了无限储罐。仅接受实现了 InfiniteFluidSource 的处理器（创造储罐、小型/大型储罐），端口自身不实现该接口， 因此端口之间不会互相维持无限状态。<br>参数 ` level ` 世界<br>参数 ` containerPos ` 发起查询的容器位置，自身端点会被跳过<br>参数 ` preferred ` 优先匹配的流体；为 FluidResource#EMPTY 时接受任意无限源<br>返回 无限供给的流体；没有接入管网、网内没有无限源时为空栈<br>` (level.isClientSide()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (d == null) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (network == null) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (self == null) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` fallback `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.byLevel.get(level) `<br>实现调用 ` networkAt(level, containerPos, d) `<br>实现调用 ` network.getEndpoints() `<br>实现调用 ` endpoint.containerPos().equals(containerPos) `<br>实现调用 ` endpoint.containerPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L171) |
| ` public void markDirty(Level level) ` | 标记某世界的网络缓存失效，下 tick 重扫。 由管道方块放置/破坏/推动/邻居变、泵工作翻转等拓扑变化调用。<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.data(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L237) |
| ` public void addAdjacentContainers(Level level, BlockPos pipePos) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` this.data(level) `<br>实现调用 ` Direction.values() `<br>实现调用 ` pipePos.relative(dir) `<br>实现调用 ` level.isLoaded(pos) `<br>实现调用 ` FluidNetworkScanner.isContainer(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L244) |
| ` public void tick() ` | 每服务器 tick 调用：必要时重扫网络，然后按活跃度分配。<br>实现调用 ` this.byLevel.entrySet() `<br>实现调用 ` this.tickLevel(entry.getKey(), entry.getValue()) `<br>实现调用 ` entry.getKey() `<br>实现调用 ` entry.getValue() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L267) |
| ` public void clear() ` | 执行 ` this.byLevel.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L378) |

## FluidNetworkScanner

` public final class FluidNetworkScanner `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L43)

从一个种子管道位置出发，flood-fill 出整张流体管道网络： 遍历所有连通的管道部件（直管/弯管/节点/工作中的泵/控制阀/止逆阀），记录势场与邻接图； 泵改变势场（跨泵输出侧 +10 / 输入侧 -10），控制阀是 门控透传 节点（不改势场）， 止逆阀是 被动二极管 （不改势场，仅允许单向通过，红石反向）； 发现端点容器：管道部件的 END/PIPE 连接朝向真实容器时记为端点， 等效高度 = 容器 Y + 该管道部件的势场偏移。 不工作的泵阻断连接（视为闭合阀门），面向空气的端头不产生端点（断路）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isPipePart(BlockState state) ` | 判断一个方块是否为管道部件（直管/弯管/节点/泵/控制阀）。<br>末尾返回 ` state.getBlock() instanceof PipeBlock \|\| state.getBlock() instanceof PumpBlock \|\| state.getBlock() instanceof ControlValveBlock `<br>[调用处 FluidContainerLookup.isEntityConnectedToPipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidContainerLookup.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L50) |
| ` public static boolean isContainer(Level level, BlockPos pos) ` | 判断某位置是否为流体容器（提供 ResourceHandler&lt;FluidResource&gt; 且非管道部件）。供管理器剔除失效容器用。<br>末尾返回 ` isContainer(level, pos, level.getBlockEntity(pos)) `<br>[调用处 FluidNetworkManager.addAdjacentContainers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L253) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L57) |
| ` public static boolean isContainer(Level level, BlockPos pos, @Nullable BlockEntity blockEntity) ` | 使用指定的方块实体判断容器，避免在实体加载事件中重复查找。<br>` (isPipePart(state)) ` 成立时提前返回 ` false `<br>末尾返回 ` FluidContainerLookup.findAny(level, pos, blockEntity) != null `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` blockEntity.getBlockState() `<br>实现调用 ` isPipePart(state) `<br>实现调用 ` FluidContainerLookup.findAny(level, pos, blockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L62) |
| ` public static FluidPipeNetwork scan(Level level, BlockPos seed) ` | 从种子管道位置 flood-fill 出整张网络（含邻接图与阀门快照）。<br>返回 网络对象；种子非管道部件时返回 null<br>` (!isPipePart(level.getBlockState(seed))) ` 成立时提前返回 ` null `<br>末尾返回 ` new FluidPipeNetwork( level, potential.keySet(), adjacency, valves, diodes, faceFlow, glassPipePositions, new ArrayList<>(endpoints.values())) `<br>实现调用 ` isPipePart(level.getBlockState(seed)) `<br>实现调用 ` level.getBlockState(seed) `<br>实现调用 ` potential.put(seed, 0) `<br>实现调用 ` queue.add(seed) `<br>实现调用 ` queue.isEmpty() `<br>实现调用 ` queue.poll() `<br>[调用处 FluidNetworkManager.rebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkManager.java#L335) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L116) |

## FluidPipeNetwork

` public class FluidPipeNetwork `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L55)

一个流体管道网络：由一组连通的管道部件（直管/弯管/节点/泵）及其发现的 端点容器组成。管道部件本身不存流体，只把端点容器连成网络；网络每 tick 执行一次全局重力分配。 重力分配规则 按等效高度从高到低取源容器；源只向 严格更低 的容器排液，同高之间不主动分配。 目标按等效高度 升序分组 ，从最低组开始填， 本组填满才溢到上一组 每组流速按高度差 线性增长 ：每格 #heightRate() mB/tick， #fullSpeedHeight() 格达上限 #maxSpeed() mB/tick（见 #speedForHeightDiff）。 组内对活跃目标做"基础均分 + 余量轮转"，使同高容器均匀进水。 炼药锅仅在满锅时输出、空锅时输入，并以整锅为单位按组内优先顺序转移。 等效高度 = 容器 Y + 沿管道路径累计的泵势场偏移（见 FluidNetworkScanner）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_CONFIGURABLE_FLOW_RATE ` | 初值 ` 100000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L56) |
| ` public static int heightRate() ` | 每格高度差提供的流速（mB/tick）。<br>末尾返回 ` AnvilCraft.CONFIG.machines.pipeFlowPerHeight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L59) |
| ` public static int maxSpeed() ` | 高度差达到 #fullSpeedHeight() 格时的流速上限（mB/tick）。<br>末尾返回 ` AnvilCraft.CONFIG.machines.pipeMaxFlowRate `<br>[调用处 ControlValveBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/fluid/ControlValveBlockEntity.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L64) |
| ` public static int fullSpeedHeight() ` | 达到流速上限所需的高度差（格）。<br>末尾返回 ` Math.max(1, maxSpeed() / heightRate()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L69) |
| ` public static int speedForHeightDiff(int heightDiff) ` | 按高度差计算流速（线性增长）： 高度差 ≤ 0 → 0 高度差 1~#fullSpeedHeight() 格 → h × #heightRate() mB/tick #fullSpeedHeight() 格及以上 → 上限 #maxSpeed() mB/tick<br>` (heightDiff <= 0) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.min(heightDiff * heightRate(), maxSpeed()) `<br>实现调用 ` Math.min(heightDiff * heightRate(), maxSpeed()) `<br>实现调用 ` heightRate() `<br>实现调用 ` maxSpeed() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L96) |
| ` public void updateIdle() ` | 供管理器在每次 #tick() 后更新空闲计数。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L139) |
| ` public FluidPipeNetwork( Level level, Set<BlockPos> parts, Map<BlockPos, List<BlockPos>> adjacency, Map<BlockPos, ValveState> valves, Map<BlockPos, Direction> diodes, Map<BlockPos, Map<Direction, Direction>> faceFlow, Set<BlockPos> glassPipePositions, List<FluidEndpoint> endpoints ) ` | 实现调用 ` valves.isEmpty() `<br>实现调用 ` diodes.isEmpty() `<br>实现调用 ` faceFlow.isEmpty() `<br>实现调用 ` endpoint.cauldron() `<br>分支 ` (endpoint.cauldron()) ` 内调用 ` this.cauldronEndpoints.add(endpoint) `<br>分支 ` (endpoint.cauldron()) ` 内调用 ` endpoint.entity() `<br>[调用处 FluidNetworkScanner.scan](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L165) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L147) |
| ` public void tick() ` | 每 tick 的全局重力分配。 对每个持有流体的源端点，收集所有等效高度严格更低、且能接受该流体的目标， 按目标等效高度升序分组，从最低组开始逐组填充（本组填满才处理更高组）。<br>实现调用 ` this.expireGlassDisplays() `<br>实现调用 ` this.reachabilityCache.clear() `<br>实现调用 ` this.canTickEndpoints() `<br>实现调用 ` this.updateGasDisplay() `<br>实现调用 ` this.endpoints.size() `<br>实现调用 ` this.valves.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L192) |
| ` public @Nullable BlockPos pushExact( ResourceHandler<FluidResource> source, BlockPos sourcePos, BlockPos entryPipePos, int sourceEffectiveHeight, FluidStack fluid ) ` | 事务性整桶推送：仅当某个更低且方向可达的端点能一次收下 fluid 的全部容量时才转移。 阀门/二极管/面止逆阀与重力分配使用同一套可达判定。失败时回滚源与目标，不留下半桶。 不扣减阀门 tick 预算。仅在服务器线程调用。<br>返回 成功接收的目标容器位置；无法转移时返回 null<br>` (fluid.isEmpty() \|\| !this.parts.contains(entryPipePos) \|\| this.canTickEndpoints()) ` 成立时提前返回 ` null `<br>` (simulated.getAmount() != fluid.getAmount() \|\| !FluidStack.isSameFluidSameComponents(simulated, fluid)) ` 成立时提前返回 ` null `<br>` (target == null) ` 成立时提前返回 ` null `<br>末尾返回 ` transferExact(source, target.handler(), fluid) == fluid.getAmount() ? target.containerPos() : null `<br>实现调用 ` fluid.isEmpty() `<br>实现调用 ` this.parts.contains(entryPipePos) `<br>实现调用 ` this.canTickEndpoints() `<br>实现调用 ` simulateDrain(source, fluid) `<br>实现调用 ` simulated.getAmount() `<br>实现调用 ` fluid.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L227) |
| ` public void pushFromExternalSource( ResourceHandler<FluidResource> srcHandler, BlockPos srcPos, BlockPos entryPipePos, int sourceEffectiveHeight ) ` | 供外部主动泵送设备（如锻星砧流体接口）使用：把一个外部源容器当作等效高度为 sourceEffectiveHeight 的源，向本网络中更低的端点分配流体。<br>参数 ` srcHandler ` 外部源的流体处理器<br>参数 ` srcPos ` 外部源的位置（用于就近排序）<br>参数 ` entryPipePos ` 源接入网络的那根管道位置（可达 BFS 的起点，须在本网络内）<br>参数 ` sourceEffectiveHeight ` 外部源的等效高度（通常 = 设备 Y + 扬程）<br>实现调用 ` this.endpoints.isEmpty() `<br>实现调用 ` this.canTickEndpoints() `<br>实现调用 ` this.reachabilityCache.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L283) |
| ` public Set<BlockPos> activeDisplayPositions() ` | 当前显示中的玻璃管道位置快照（供管理器网络重建时迁移活跃状态）。<br>末尾返回 ` new HashSet<>(this.activeGlassPipes) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1146) |
| ` public void reacquireActiveDisplay(BlockPos pos) ` | 网络重建后，重新登记仍属于本网络的活跃显示管道，以继续由其过期检测负责清理。<br>执行 ` this.activeGlassPipes.add(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1151) |
| ` public boolean canReach(FluidEndpoint source, FluidEndpoint target, FluidStack fluid) ` | 判断某种流体能否从 source 端点沿当前方向约束与过滤阀到达 target 端点。 无限储罐可能有多种无限流体，仓储流体端口用本方法结合过滤阀的实际放行结果， 选出真正能流到自己的那一种，而不是简单取储罐里第一个无限流体。<br>末尾返回 ` false `<br>实现调用 ` this.connectedEntries(source) `<br>实现调用 ` this.canDrainFromEntry(entry) `<br>实现调用 ` this.computeReachableCached(entry.fromPipePos(), fluid) `<br>实现调用 ` entry.fromPipePos() `<br>实现调用 ` this.isEndpointReachable(reach, target) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1597) |
| ` public Set<BlockPos> getParts() ` | 末尾返回 ` this.parts `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L55) |
| ` public List<FluidEndpoint> getEndpoints() ` | 网络的全部端点容器，供外部查询同网容器的等效高度。<br>末尾返回 ` this.endpoints `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L55) |
| ` public int getIdleTicks() ` | 末尾返回 ` this.idleTicks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L55) |

## InfiniteGasPressureSource

` public interface InfiniteGasPressureSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/InfiniteGasPressureSource.java#L12)

以无穷大气压供给自身所存气体的流体处理器。 气体在网络内由压强驱动均衡（见 FluidPipeNetwork）：压强通常由填充率与泵偏置推导。 实现本接口并在当前状态下返回 true 时，该端点按无穷大气压参与比较——它始终是网内 最高压的源，能把自身存有的气体压向任意端点；但存量照常消耗，不会像创造流体储罐那样无限供给。 实现方自行判断生效条件，例如锻星砧流体接口仅在主动（输出）模式且供电正常时返回 true。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean isSupplyingInfiniteGasPressure() ` | 当前是否以无穷大气压输出自身存有的气体。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/InfiniteGasPressureSource.java#L14) |

## ValveState

` public final class ValveState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/ValveState.java#L9)

网络中一个控制阀的运行态：持有 BE 引用 + 本 tick 的剩余通过预算。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ValveState(ControlValveBlockEntity be) ` | 实现调用 ` be.getEffectiveMaxRate() `<br>[调用处 FluidNetworkScanner.scan](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidNetworkScanner.java#L140) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/ValveState.java#L13) |
| ` public void resetBudget() ` | 执行 ` this.remaining = this.be.getEffectiveMaxRate() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/ValveState.java#L18) |
| ` public boolean allows(FluidResource fluid) ` | 末尾返回 ` this.be.allows(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/ValveState.java#L22) |
| ` public int remaining() ` | 末尾返回 ` this.remaining ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/ValveState.java#L26) |
| ` public void consume(int amount) ` | 执行 ` this.remaining = Math.max(0, this.remaining - amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/ValveState.java#L30) |
