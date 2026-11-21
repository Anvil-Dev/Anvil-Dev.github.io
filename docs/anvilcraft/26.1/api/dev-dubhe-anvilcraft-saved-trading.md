# dev.dubhe.anvilcraft.saved.trading



## ITradingStationMessage

` public interface ITradingStationMessage `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/ITradingStationMessage.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` UUID owner() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/ITradingStationMessage.java#L9) |
| ` Component getRealTimeMessage(Function<UUID, Component> getter) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/ITradingStationMessage.java#L11) |
| ` Component getOwnerMessage(Function<UUID, Component> getter) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/ITradingStationMessage.java#L13) |

## TradingStationMessageManager

` public class TradingStationMessageManager extends BetterSavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationMessageManager.java#L39)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static TradingStationMessageManager get() ` | 末尾返回 ` BetterSavedData.get(TradingStationMessageManager.TYPE, TradingStationMessageManager.CLIENT_COPY) `<br>[调用处 TradingStationBlock.onDestroyedByPlayer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/TradingStationBlock.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationMessageManager.java#L55) |
| ` public void onPlayerBreak(ServerLevel level, BlockPos pos, Player breaker) ` | 实现调用 ` this.playerBroke.add(pos) `<br>实现调用 ` level.getServer() `<br>实现调用 ` level.getBlockEntity(pos, ModBlockEntities.TRADING_STATION.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationMessageManager.java#L59) |
| ` public void onNonPlayerBreak(ServerLevel level, BlockPos pos) ` | 实现调用 ` this.playerBroke.iterator() `<br>实现调用 ` iterator.hasNext() `<br>实现调用 ` iterator.next() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationMessageManager.java#L84) |
| ` @SubscribeEvent public static void onPlayerLogin(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` Objects.requireNonNull(ServerLifecycleHooks.getCurrentServer()) `<br>实现调用 ` ServerLifecycleHooks.getCurrentServer() `<br>实现调用 ` TradingStationMessageManager.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationMessageManager.java#L117) |

## TradingStationNonPlayerBreakMessage

` public record TradingStationNonPlayerBreakMessage(UUID owner, ResourceKey<Level> dimension, BlockPos pos, long time, List<UUID> onliners, UUID closest) implements ITradingStationMessage `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Component getRealTimeMessage(Function<UUID, Component> getter) ` | 末尾返回 ` helper.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L25) |
| ` @Override public Component getOwnerMessage(Function<UUID, Component> getter) ` | 末尾返回 ` helper.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L52) |
| ` public TradingStationNonPlayerBreakMessage(UUID owner, ResourceKey<Level> dimension, BlockPos pos, long time, List<UUID> onliners, UUID closest) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L17) |
| ` public UUID owner() ` | 读取 record 分量 ` owner ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L18) |
| ` public ResourceKey<Level> dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L19) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L20) |
| ` public long time() ` | 读取 record 分量 ` time ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L21) |
| ` public List<UUID> onliners() ` | 读取 record 分量 ` onliners ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L22) |
| ` public UUID closest() ` | 读取 record 分量 ` closest ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationNonPlayerBreakMessage.java#L17) |

## TradingStationPlayerBreakMessage

` public record TradingStationPlayerBreakMessage(UUID owner, UUID breaker, ResourceKey<Level> dimension, BlockPos pos, long time) implements ITradingStationMessage `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Component getRealTimeMessage(Function<UUID, Component> getter) ` | 末尾返回 ` helper.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L21) |
| ` @Override public Component getOwnerMessage(Function<UUID, Component> getter) ` | 末尾返回 ` helper.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L41) |
| ` public TradingStationPlayerBreakMessage(UUID owner, UUID breaker, ResourceKey<Level> dimension, BlockPos pos, long time) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L14) |
| ` public UUID owner() ` | 读取 record 分量 ` owner ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L15) |
| ` public UUID breaker() ` | 读取 record 分量 ` breaker ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L16) |
| ` public ResourceKey<Level> dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L17) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L18) |
| ` public long time() ` | 读取 record 分量 ` time ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/trading/TradingStationPlayerBreakMessage.java#L14) |
