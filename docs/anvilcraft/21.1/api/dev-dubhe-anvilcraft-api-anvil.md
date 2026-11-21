# dev.dubhe.anvilcraft.api.anvil



## IAnvilBehavior

` public interface IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L18)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Map<Predicate<BlockState>, IAnvilBehavior> BEHAVIORS ` | 初值 ` new LinkedHashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L20) |
| ` Map<BlockState, List<IAnvilBehavior>> MATCHING_CACHE ` | 初值 ` new ConcurrentHashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L21) |
| ` boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L23) |
| ` default int priority() ` | 末尾返回 ` 100 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L31) |
| ` static void registerBehavior(Block matchingBlock, IAnvilBehavior behavior) ` | 实现调用 ` BEHAVIORS.put(it -> it.is(matchingBlock), behavior) `<br>实现调用 ` MATCHING_CACHE.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L35) |
| ` static void registerBehavior(Predicate<BlockState> pred, IAnvilBehavior behavior) ` | 实现调用 ` BEHAVIORS.put(pred, behavior) `<br>实现调用 ` MATCHING_CACHE.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L40) |
| ` static void clearMatchingCache() ` | Clears state-dependent matches after block tags or other datapack data are reloaded.<br>执行 ` MATCHING_CACHE.clear() `<br>[调用处 DatapackEventListener.onDatapack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/DatapackEventListener.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L48) |
| ` static @Unmodifiable List<IAnvilBehavior> findMatching(BlockState state) ` | ` (cached != null) ` 成立时提前返回 ` cached `<br>末尾返回 ` matching `<br>实现调用 ` MATCHING_CACHE.get(state) `<br>实现调用 ` BEHAVIORS.keySet().stream() .filter(it -> it.test(state)) .map(BEHAVIORS::get) .toList() `<br>实现调用 ` BEHAVIORS.keySet().stream() .filter(it -> it.test(state)) .map(BEHAVIORS::get) `<br>实现调用 ` BEHAVIORS.keySet().stream() .filter(it -> it.test(state)) `<br>实现调用 ` BEHAVIORS.keySet().stream() `<br>实现调用 ` BEHAVIORS.keySet() `<br>[调用处 AnvilEventListener.handleBehaviors](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L52) |
| ` static void register() ` | 实现调用 ` NeoForge.EVENT_BUS.post(event) `<br>[调用处 AnvilEventListener.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L63) |
