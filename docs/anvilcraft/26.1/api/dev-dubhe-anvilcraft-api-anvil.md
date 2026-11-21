# dev.dubhe.anvilcraft.api.anvil



## IAnvilBehavior

` public interface IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L17)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Map<Predicate<BlockState>, IAnvilBehavior> BEHAVIORS ` | 初值 ` new LinkedHashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L19) |
| ` boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L21) |
| ` default int priority() ` | 末尾返回 ` 100 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L29) |
| ` static void registerBehavior(Block matchingBlock, IAnvilBehavior behavior) ` | 执行 ` IAnvilBehavior.BEHAVIORS.put(it -> it.is(matchingBlock), behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L33) |
| ` static void registerBehavior(Predicate<BlockState> pred, IAnvilBehavior behavior) ` | 执行 ` IAnvilBehavior.BEHAVIORS.put(pred, behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L37) |
| ` static @Unmodifiable List<IAnvilBehavior> findMatching(BlockState state) ` | 末尾返回 ` IAnvilBehavior.BEHAVIORS.keySet().stream() .filter(it -> it.test(state)) .map(IAnvilBehavior.BEHAVIORS::get) .toList() `<br>[调用处 AnvilEventListener.handleBehaviors](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L111) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L41) |
| ` static void register() ` | 实现调用 ` NeoForge.EVENT_BUS.post(event) `<br>[调用处 AnvilEventListener.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L48) |
