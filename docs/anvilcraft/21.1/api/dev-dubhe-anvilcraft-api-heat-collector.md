# dev.dubhe.anvilcraft.api.heat.collector



## HeatCollectorManager

` public class HeatCollectorManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void clear() ` | 实现调用 ` INSTANCES.clear() `<br>[调用处 ServerLifecycleEventListener.onServerStopped](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L74) |
| ` public static HeatCollectorManager getInstance(Level level) ` | 获取当前维度的HeatCollectorManager<br>` (level.isClientSide) ` 成立时提前返回 ` new HeatCollectorManager(level) `<br>实现调用 ` INSTANCES.computeIfAbsent(level, HeatCollectorManager::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L83) |
| ` public static void registerEntry(HeatSourceEntry entry) ` | 执行 ` SOURCE_ENTRIES.add(entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L96) |
| ` public static Optional<HeatSourceEntry> getEntry(BlockState state) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` entry.accepts(state) `<br>分支 ` (entry.accepts(state) > 0) ` 内调用 ` Optional.of(entry) `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L100) |
| ` public static void addHeatCollector(BlockPos pos, Level level) ` | 实现调用 ` getInstance(level).heatCollectors.add(pos) `<br>实现调用 ` getInstance(level) `<br>[调用处 HeatCollectorBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/HeatCollectorBlockEntity.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L107) |
| ` public static void removeHeatCollector(BlockPos pos, Level level) ` | 执行 ` getExistingInstance(level).ifPresent(manager -> manager.heatCollectors.remove(pos)) `<br>[调用处 HeatCollectorBlockEntity.onChunkUnloaded](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/HeatCollectorBlockEntity.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L112) |
| ` public static void addInfiniteCollector(BlockPos pos, Level level) ` | 实现调用 ` getInstance(level).infiniteCollectors.add(pos) `<br>实现调用 ` getInstance(level) `<br>[调用处 InfiniteCollectorBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InfiniteCollectorBlockEntity.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L116) |
| ` public static void removeInfiniteCollector(BlockPos pos, Level level) ` | 执行 ` getExistingInstance(level).ifPresent(manager -> manager.infiniteCollectors.remove(pos)) `<br>[调用处 InfiniteCollectorBlockEntity.onChunkUnloaded](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InfiniteCollectorBlockEntity.java#L184) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L121) |
| ` public static void tickAll() ` | 实现调用 ` List.copyOf(INSTANCES.values()) `<br>实现调用 ` INSTANCES.values() `<br>实现调用 ` managers.forEach(HeatCollectorManager::tick) `<br>[调用处 ServerLifecycleEventListener.onTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L129) |

## HeatSourceEntry

` public abstract class HeatSourceEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatSourceEntry(int charge) ` | 执行 ` this.charge = charge ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L13) |
| ` public abstract int accepts(BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L17) |
| ` public abstract BlockState transform(BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L19) |
| ` public int timeToTransform() ` | 末尾返回 ` 40 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L21) |
| ` public static HeatSourceEntry predicate( int charge, java.util.function.Predicate<BlockState> predicate, Function<BlockState, BlockState> transformer ) ` | 末尾返回 ` new Predicate(charge, predicate, transformer) `<br>[调用处 HeatCollectorManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L25) |
| ` public static HeatSourceEntry predicateAlways( int charge, java.util.function.Predicate<BlockState> predicate ) ` | 末尾返回 ` new Predicate(charge, predicate, Function.identity()) `<br>[调用处 HeatCollectorManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L33) |
| ` public static HeatSourceEntry simple(int charge, Block input, Block output) ` | 末尾返回 ` new Simple(charge, input, output) `<br>[调用处 HeatCollectorManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L40) |
| ` public static HeatSourceEntry forever(int charge, Block block) ` | not really forever<br>末尾返回 ` new Always(charge, block) `<br>[调用处 HeatCollectorManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatCollectorManager.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L47) |
| ` public int getCharge() ` | 末尾返回 ` this.charge `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/HeatSourceEntry.java#L9) |

## IHeatCollector

` public interface IHeatCollector `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/IHeatCollector.java#L9)

热能收集器接口，用于统一处理 dev.dubhe.anvilcraft.block.entity.HeatCollectorBlockEntity 和 dev.dubhe.anvilcraft.block.entity.InfiniteCollectorBlockEntity 的热能收集逻辑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BlockPos getCollectorPos() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/IHeatCollector.java#L10) |
| ` boolean isCollectorWorking() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/IHeatCollector.java#L12) |
| ` void setCollectorWorking(boolean working) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/IHeatCollector.java#L14) |
| ` int inputHeat(int amount) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/IHeatCollector.java#L16) |
| ` int getCollectorRange() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/heat/collector/IHeatCollector.java#L18) |
