# dev.dubhe.anvilcraft.network（TeslaAddFilterPacket 至 WeaponChargeProgressPacket）



## TeslaAddFilterPacket

` public record TeslaAddFilterPacket(String id, String arg) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TeslaAddFilterPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("tesla_add_filter")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, TeslaAddFilterPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, TeslaAddFilterPacket::id, ByteBufCodecs.STRING_UTF8, TeslaAddFilterPacket::arg, TeslaAddFilterPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L14) |
| ` @Override public Type<TeslaAddFilterPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof TeslaTowerMenu menu) ` 内调用 ` menu.addFilter(this.id, this.arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L27) |
| ` public TeslaAddFilterPacket(String id, String arg) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public String arg() ` | 读取 record 分量 ` arg ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaAddFilterPacket.java#L12) |

## TeslaFilterSyncPacket

` public record TeslaFilterSyncPacket(List<FilterData> filters) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TeslaFilterSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("tesla_filter_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, TeslaFilterSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( FilterData.STREAM_CODEC.apply(ByteBufCodecs.list()), TeslaFilterSyncPacket::filters, TeslaFilterSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L20) |
| ` public static TeslaFilterSyncPacket create(List<Pair<TeslaFilter, String>> filters) ` | 末尾返回 ` new TeslaFilterSyncPacket(Lists.transform(filters, FilterData::new)) `<br>[调用处 TeslaTowerBlock.useWithoutItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/TeslaTowerBlock.java#L206) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L26) |
| ` @Override public Type<TeslaFilterSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L30) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.handleSync(Lists.transform(this.filters, data -> Pair.of(data.filter, data.extra))) `<br>实现调用 ` Lists.transform(this.filters, data -> Pair.of(data.filter, data.extra)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L35) |
| ` public TeslaFilterSyncPacket(List<FilterData> filters) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public List<FilterData> filters() ` | 读取 record 分量 ` filters ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L18) |

## TeslaFilterSyncPacket.FilterData

` public record FilterData(TeslaFilter filter, String extra) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, FilterData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( TeslaFilter.STREAM_CODEC, FilterData::filter, ByteBufCodecs.STRING_UTF8, FilterData::extra, FilterData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L42) |
| ` public FilterData(Pair<TeslaFilter, String> data) ` | 执行 ` this(data.left(), data.right()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L50) |
| ` public TeslaFilter filter() ` | 读取 record 分量 ` filter ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public String extra() ` | 读取 record 分量 ` extra ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java#L41) |

## TeslaRemoveFilterPacket

` public record TeslaRemoveFilterPacket(String id, String arg) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TeslaRemoveFilterPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("tesla_filter_remove")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TeslaRemoveFilterPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, TeslaRemoveFilterPacket::id, ByteBufCodecs.STRING_UTF8, TeslaRemoveFilterPacket::arg, TeslaRemoveFilterPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L14) |
| ` @Override public Type<TeslaRemoveFilterPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof TeslaTowerMenu menu) ` 内调用 ` menu.removeFilter(this.id, this.arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L27) |
| ` public TeslaRemoveFilterPacket(String id, String arg) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public String arg() ` | 读取 record 分量 ` arg ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaRemoveFilterPacket.java#L12) |

## TranscendenceGrindstoneSyncPacket

` public record TranscendenceGrindstoneSyncPacket(int index, boolean select) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TranscendenceGrindstoneSyncPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("transcendence_grindstone_sync") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, TranscendenceGrindstoneSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, TranscendenceGrindstoneSyncPacket::index, ByteBufCodecs.BOOL, TranscendenceGrindstoneSyncPacket::select, TranscendenceGrindstoneSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L16) |
| ` @Override public Type<TranscendenceGrindstoneSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.hasContainerOpen() `<br>分支 ` (this.select) ` 内调用 ` menu.select(this.index) `<br>分支 ` !(this.select) ` 内调用 ` menu.unselect(this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L29) |
| ` public TranscendenceGrindstoneSyncPacket(int index, boolean select) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public boolean select() ` | 读取 record 分量 ` select ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TranscendenceGrindstoneSyncPacket.java#L12) |

## UpdateDisplayItemPacket

` public record UpdateDisplayItemPacket(ItemStack displayItem, BlockPos pos) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<UpdateDisplayItemPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("client_update_display_item")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, UpdateDisplayItemPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStack.OPTIONAL_STREAM_CODEC, UpdateDisplayItemPacket::displayItem, BlockPos.STREAM_CODEC, UpdateDisplayItemPacket::pos, UpdateDisplayItemPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L17) |
| ` @Override public Type<UpdateDisplayItemPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getBlockState(this.pos) `<br>实现调用 ` state.isAir() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L30) |
| ` public UpdateDisplayItemPacket(ItemStack displayItem, BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public ItemStack displayItem() ` | 读取 record 分量 ` displayItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdateDisplayItemPacket.java#L15) |

## UpdatePropelPistonStoredEnergyPacket

` public record UpdatePropelPistonStoredEnergyPacket(BlockPos pos, int energy) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<UpdatePropelPistonStoredEnergyPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of( "client_update_propel_piston_stored_energy" )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, UpdatePropelPistonStoredEnergyPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L17) |
| ` @Override public Type<UpdatePropelPistonStoredEnergyPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getBlockEntity(this.pos) `<br>实现调用 ` propelPiston.updateStoredEnergy(this.energy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L30) |
| ` public UpdatePropelPistonStoredEnergyPacket(BlockPos pos, int energy) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public int energy() ` | 读取 record 分量 ` energy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UpdatePropelPistonStoredEnergyPacket.java#L13) |

## UsePillBoxPacket

` public record UsePillBoxPacket() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<UsePillBoxPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("use_pill_box")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, UsePillBoxPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new UsePillBoxPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L16) |
| ` @Override public Type<UsePillBoxPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` PocketInventory.carriedItems(player) `<br>实现调用 ` stack.is(ModItems.PILL_BOX) `<br>实现调用 ` player.getCooldowns().isOnCooldown(stack.getItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L25) |
| ` public UsePillBoxPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L14) |

## WeaponChargeProgressPacket

` public record WeaponChargeProgressPacket(int item, int hand, int elapsed, int duration, boolean repeating, float tickRate) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<WeaponChargeProgressPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("weapon_charge_progress")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L18) |
| ` public static final StreamCodec<ByteBuf, WeaponChargeProgressPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L19) |
| ` public static void sync(Player player, ItemStack stack, int elapsed, int duration, boolean repeating) ` | 实现调用 ` player.getUseItem() `<br>实现调用 ` player.level().tickRateManager().tickrate() `<br>实现调用 ` player.level().tickRateManager() `<br>[调用处 ResonatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L388) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L29) |
| ` public float progressAfter(double milliseconds) ` | ` (this.duration <= 0) ` 成立时提前返回 ` -1 `<br>末尾返回 ` this.repeating ? (float) (ticks % this.duration / this.duration) : (float) Math.clamp(ticks / this.duration, 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L39) |
| ` @Override public Type<WeaponChargeProgressPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L47) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` EnergyWeaponUseHUD.update(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L52) |
| ` public WeaponChargeProgressPacket(int item, int hand, int elapsed, int duration, boolean repeating, float tickRate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int elapsed() ` | 读取 record 分量 ` elapsed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public boolean repeating() ` | 读取 record 分量 ` repeating ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public float tickRate() ` | 读取 record 分量 ` tickRate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
