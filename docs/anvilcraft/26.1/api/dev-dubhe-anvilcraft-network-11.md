# dev.dubhe.anvilcraft.network（SwitchMultitoolModePacket 至 UsePillBoxPacket）



## SwitchMultitoolModePacket

` public record SwitchMultitoolModePacket(InteractionHand hand, MultitoolMode mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchMultitoolModePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("switch_multitool_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, SwitchMultitoolModePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L16) |
| ` @Override public Type<SwitchMultitoolModePacket> type() ` | 末尾返回 ` SwitchMultitoolModePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 执行 ` MultitoolItem.setMode(player, this.hand, this.mode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L29) |
| ` public SwitchMultitoolModePacket(InteractionHand hand, MultitoolMode mode) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public MultitoolMode mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |

## SwitchResonateModePacket

` public record SwitchResonateModePacket(InteractionHand hand, int mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchResonateModePacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("switch_resonate_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SwitchResonateModePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.enumStreamCodec(InteractionHand.class), SwitchResonateModePacket::hand, ByteBufCodecs.VAR_INT, SwitchResonateModePacket::mode, SwitchResonateModePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L16) |
| ` @Override public Type<SwitchResonateModePacket> type() ` | 末尾返回 ` SwitchResonateModePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 执行 ` ResonatorItem.setMode(player, this.hand, ResonateMode.values()[this.mode]) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L29) |
| ` public SwitchResonateModePacket(InteractionHand hand, int mode) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14) |
| ` public int mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L14) |

## TerminalBalanceModePacket

` public record TerminalBalanceModePacket(BalanceMode mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19)

修改玩家主 / 副手持有的终端物品自身保存的物品均衡模式。 均衡模式随终端物品保存，而不是玩家全局设置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TerminalBalanceModePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("terminal_balance_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, TerminalBalanceModePacket> STREAM_CODEC ` | 初值 ` BalanceMode.STREAM_CODEC .map(TerminalBalanceModePacket::new, TerminalBalanceModePacket::mode) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L21) |
| ` @Override public Type<TerminalBalanceModePacket> type() ` | 末尾返回 ` TerminalBalanceModePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` serverPlayer.getMainHandItem() `<br>实现调用 ` TerminalBalanceModePacket.isTerminal(stack) `<br>分支 ` (!TerminalBalanceModePacket.isTerminal(stack)) ` 内调用 ` serverPlayer.getOffhandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L29) |
| ` public TerminalBalanceModePacket(BalanceMode mode) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public BalanceMode mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |

## TeslaAddFilterPacket

` public record TeslaAddFilterPacket(String id, String arg) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TeslaAddFilterPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("tesla_add_filter")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, TeslaAddFilterPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, TeslaAddFilterPacket::id, ByteBufCodecs.STRING_UTF8, TeslaAddFilterPacket::arg, TeslaAddFilterPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L14) |
| ` @Override public Type<TeslaAddFilterPacket> type() ` | 末尾返回 ` TeslaAddFilterPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof TeslaTowerMenu menu) ` 内调用 ` menu.addFilter(this.id, this.arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L27) |
| ` public TeslaAddFilterPacket(String id, String arg) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public String arg() ` | 读取 record 分量 ` arg ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |

## TeslaFilterSyncPacket

` public record TeslaFilterSyncPacket(List<FilterData> filters) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TeslaFilterSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("tesla_filter_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, TeslaFilterSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( FilterData.STREAM_CODEC.apply(ByteBufCodecs.list()), TeslaFilterSyncPacket::filters, TeslaFilterSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L20) |
| ` public static TeslaFilterSyncPacket create(List<Pair<TeslaFilter, String>> filters) ` | 末尾返回 ` new TeslaFilterSyncPacket(Lists.transform(filters, FilterData::new)) `<br>[调用处 TeslaTowerBlockEntity.writeClientSideData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L472) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L26) |
| ` @Override public Type<TeslaFilterSyncPacket> type() ` | 末尾返回 ` TeslaFilterSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L30) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.handleSync(Lists.transform(this.filters, data -> Pair.of(data.filter, data.extra))) `<br>实现调用 ` Lists.transform(this.filters, data -> Pair.of(data.filter, data.extra)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L35) |
| ` public TeslaFilterSyncPacket(List<FilterData> filters) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public List<FilterData> filters() ` | 读取 record 分量 ` filters ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |

## TeslaFilterSyncPacket.FilterData

` public record FilterData(TeslaFilter filter, String extra) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, FilterData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( TeslaFilter.STREAM_CODEC, FilterData::filter, ByteBufCodecs.STRING_UTF8, FilterData::extra, FilterData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L42) |
| ` public FilterData(Pair<TeslaFilter, String> data) ` | 执行 ` this(data.left(), data.right()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L50) |
| ` public TeslaFilter filter() ` | 读取 record 分量 ` filter ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public String extra() ` | 读取 record 分量 ` extra ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |

## TeslaRemoveFilterPacket

` public record TeslaRemoveFilterPacket(String id, String arg) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TeslaRemoveFilterPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("tesla_filter_remove")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TeslaRemoveFilterPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, TeslaRemoveFilterPacket::id, ByteBufCodecs.STRING_UTF8, TeslaRemoveFilterPacket::arg, TeslaRemoveFilterPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L14) |
| ` @Override public Type<TeslaRemoveFilterPacket> type() ` | 末尾返回 ` TeslaRemoveFilterPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof TeslaTowerMenu menu) ` 内调用 ` menu.removeFilter(this.id, this.arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L27) |
| ` public TeslaRemoveFilterPacket(String id, String arg) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public String arg() ` | 读取 record 分量 ` arg ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |

## TranscendenceGrindstoneSyncPacket

` public record TranscendenceGrindstoneSyncPacket(int index, boolean select) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TranscendenceGrindstoneSyncPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("transcendence_grindstone_sync") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, TranscendenceGrindstoneSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, TranscendenceGrindstoneSyncPacket::index, ByteBufCodecs.BOOL, TranscendenceGrindstoneSyncPacket::select, TranscendenceGrindstoneSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L16) |
| ` @Override public Type<TranscendenceGrindstoneSyncPacket> type() ` | 末尾返回 ` TranscendenceGrindstoneSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.hasContainerOpen() `<br>分支 ` (this.select) ` 内调用 ` menu.select(this.index) `<br>分支 ` !(this.select) ` 内调用 ` menu.unselect(this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L29) |
| ` public TranscendenceGrindstoneSyncPacket(int index, boolean select) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public boolean select() ` | 读取 record 分量 ` select ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |

## UpdateDisplayItemPacket

` public record UpdateDisplayItemPacket(ItemStack displayItem, BlockPos pos) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<UpdateDisplayItemPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("client_update_display_item")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, UpdateDisplayItemPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStack.OPTIONAL_STREAM_CODEC, UpdateDisplayItemPacket::displayItem, BlockPos.STREAM_CODEC, UpdateDisplayItemPacket::pos, UpdateDisplayItemPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L17) |
| ` @Override public Type<UpdateDisplayItemPacket> type() ` | 末尾返回 ` UpdateDisplayItemPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getBlockState(this.pos) `<br>实现调用 ` state.isAir() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L30) |
| ` public UpdateDisplayItemPacket(ItemStack displayItem, BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public ItemStack displayItem() ` | 读取 record 分量 ` displayItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |

## UpdatePropelPistonStoredEnergyPacket

` public record UpdatePropelPistonStoredEnergyPacket(BlockPos pos, int energy) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<UpdatePropelPistonStoredEnergyPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of( "client_update_propel_piston_stored_energy" )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, UpdatePropelPistonStoredEnergyPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L17) |
| ` @Override public Type<UpdatePropelPistonStoredEnergyPacket> type() ` | 末尾返回 ` UpdatePropelPistonStoredEnergyPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getBlockEntity(this.pos) `<br>实现调用 ` propelPiston.updateStoredEnergy(this.energy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L30) |
| ` public UpdatePropelPistonStoredEnergyPacket(BlockPos pos, int energy) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public int energy() ` | 读取 record 分量 ` energy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |

## UsePillBoxPacket

` public record UsePillBoxPacket() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<UsePillBoxPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("use_pill_box")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, UsePillBoxPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new UsePillBoxPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L16) |
| ` @Override public Type<UsePillBoxPacket> type() ` | 末尾返回 ` UsePillBoxPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.getInventory() `<br>实现调用 ` inventory.getNonEquipmentItems().size() `<br>实现调用 ` inventory.getNonEquipmentItems() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L25) |
| ` public UsePillBoxPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
