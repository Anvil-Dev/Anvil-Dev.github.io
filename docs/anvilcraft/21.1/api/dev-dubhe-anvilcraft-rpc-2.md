# dev.dubhe.anvilcraft.rpc（StorageServerStub.CreativeTerminalAccessValidator 至 StorageServerStub.TerminalAccessValidator）



## StorageServerStub.CreativeTerminalAccessValidator

` public static final class CreativeTerminalAccessValidator implements IRemoteCallableValidator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5590)

创造背包等纯客户端菜单的终端 BundleLike RPC 校验： 仅校验玩家身份与参数形态，终端持有关系由方法体用客户端上报的指针终端 （terminalStack）校验——创造模式下指针物品由客户端本地管理，服务端背包 与 carried 都没有该终端，TerminalAccessValidator 会误拒。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean validate(IPayloadContext ctx, Method method, Object[] args) ` | ` ( !(ctx.player() instanceof ServerPlayer player) \|\| args.length < 3 \|\| !(args[0] instanceof UUID playerId) \|\| !player.getGameProfile().getId().equals(playerId) \|\| !(args[1] instanceof UUID) ) ` 成立时提前返回 ` false `<br>末尾返回 ` valid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5591) |
| ` public CreativeTerminalAccessValidator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5590) |

## StorageServerStub.CursorReturnValidator

` public static final class CursorReturnValidator implements IRemoteCallableValidator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5508)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean validate(IPayloadContext context, Method method, Object[] args) ` | 实现调用 ` context.player() `<br>实现调用 ` id.equals(player.getUUID()) `<br>实现调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5509) |
| ` public CursorReturnValidator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5508) |

## StorageServerStub.DepositResult

` public record DepositResult(boolean changed) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5819)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, DepositResult> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.BOOL, DepositResult::changed, DepositResult::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5820) |
| ` public DepositResult(boolean changed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5819) |
| ` public boolean changed() ` | 读取 record 分量 ` changed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5819) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5819) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5819) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5819) |

## StorageServerStub.FluidEntry

` public record FluidEntry(FluidStack icon, int amount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698)

仓储界面中的一个流体条目。 取空后条目仍需留在列表里显示 0（与物品一致），但数量为 0 的 FluidStack 连流体类型都会丢失、无法在网络上传输，因此图标与数量分开携带。<br>参数 ` icon ` 流体类型与组件（用于渲染图标、匹配与显示名），一定非空<br>参数 ` amount ` 数量（mB），取空后的占位条目为 0

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FluidEntry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( FluidStack.OPTIONAL_STREAM_CODEC, FluidEntry::icon, ByteBufCodecs.VAR_INT, FluidEntry::amount, FluidEntry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5699) |
| ` public FluidEntry(FluidStack icon, int amount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698) |
| ` public FluidStack icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698) |
| ` public int amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5698) |

## StorageServerStub.FluidNotice

` public enum FluidNotice `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5733)

流体交互失败的原因，随 InteractionResult 回传由仓储界面渲染成浮层提示。 不用 displayClientMessage：那是动作栏消息，会被打开的仓储界面盖住， 玩家看不到任何反馈。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 无提示。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5735) |
| ` BUCKET_MISSING ` | 缺少空容器。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5737) |
| ` NOT_ENOUGH ` | 储量不足一桶。 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5739) |
| ` BOTTLE_MISSING ` | 声明于枚举 ` StorageServerStub.FluidNotice ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5740) |
| ` BOTTLE_NOT_ENOUGH ` | 声明于枚举 ` StorageServerStub.FluidNotice ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5741) |
| ` NOT_BOTTLEABLE ` | 声明于枚举 ` StorageServerStub.FluidNotice ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5742) |
| ` public static final StreamCodec<ByteBuf, FluidNotice> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(FluidNotice.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5744) |
| ` public Component text() ` | 提示文本；#NONE 返回空组件。<br>末尾返回 ` this.translationKey.isEmpty() ? Component.empty() : Component.translatable(this.translationKey) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5754) |
| ` public static FluidNotice[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5733) |
| ` public static FluidNotice valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5733) |

## StorageServerStub.InteractionResult

` public record InteractionResult(ItemStack carried, boolean changed, int refilledSlots, FluidNotice notice, Optional<CraftingStorage> crafting) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5759)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InteractionResult(ItemStack carried, boolean changed, int refilledSlots, FluidNotice notice) ` | 执行 ` this(carried, changed, refilledSlots, notice, Optional.empty()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5762) |
| ` public InteractionResult(ItemStack carried, boolean changed) ` | 执行 ` this(carried, changed, 0, FluidNotice.NONE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5766) |
| ` public InteractionResult(ItemStack carried, boolean changed, int refilledSlots) ` | 执行 ` this(carried, changed, refilledSlots, FluidNotice.NONE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5770) |
| ` public InteractionResult withCrafting(CraftingStorage state) ` | 末尾返回 ` new InteractionResult(this.carried.copy(), this.changed, this.refilledSlots, this.notice, Optional.of(snapshot)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5774) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, InteractionResult> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5780) |
| ` public ItemStack carried() ` | 读取 record 分量 ` carried ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5760) |
| ` public boolean changed() ` | 读取 record 分量 ` changed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5760) |
| ` public int refilledSlots() ` | 读取 record 分量 ` refilledSlots ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5760) |
| ` public FluidNotice notice() ` | 读取 record 分量 ` notice ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5760) |
| ` public Optional<CraftingStorage> crafting() ` | 读取 record 分量 ` crafting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5760) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5759) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5759) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5759) |

## StorageServerStub.Metadata

` public record Metadata(long version, long orderVersion, double fullness, Capacity capacity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, Metadata> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5638) |
| ` public Metadata(long version, long orderVersion, double fullness, Capacity capacity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public long version() ` | 读取 record 分量 ` version ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public long orderVersion() ` | 读取 record 分量 ` orderVersion ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public double fullness() ` | 读取 record 分量 ` fullness ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public Capacity capacity() ` | 读取 record 分量 ` capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5637) |

## StorageServerStub.RecipeCraftRequest

` public record RecipeCraftRequest(boolean stonecutter, CraftDestination destination, int maxBatches, List<ItemStack> inputs, ItemStack stonecutterResult, IntList requestedCounts, ItemStack clientCarried) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2627)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RecipeCraftRequest> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2636) |
| ` public RecipeCraftRequest(boolean stonecutter, CraftDestination destination, int maxBatches, List<ItemStack> inputs, ItemStack stonecutterResult, IntList requestedCounts, ItemStack clientCarried) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2627) |
| ` public boolean stonecutter() ` | 读取 record 分量 ` stonecutter ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2628) |
| ` public CraftDestination destination() ` | 读取 record 分量 ` destination ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2629) |
| ` public int maxBatches() ` | 读取 record 分量 ` maxBatches ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2630) |
| ` public List<ItemStack> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2631) |
| ` public ItemStack stonecutterResult() ` | 读取 record 分量 ` stonecutterResult ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2632) |
| ` public IntList requestedCounts() ` | 读取 record 分量 ` requestedCounts ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2633) |
| ` public ItemStack clientCarried() ` | 读取 record 分量 ` clientCarried ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2634) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2627) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2627) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2627) |

## StorageServerStub.StackUpdate

` public record StackUpdate(int index, UnlimitedItemStack stack, long count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StackUpdate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, StackUpdate::index, UnlimitedItemStack.OPTIONAL_STREAM_CODEC, StackUpdate::stack, ByteBufCodecs.VAR_LONG, StackUpdate::count, StackUpdate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5678) |
| ` public StackUpdate(int index, UnlimitedItemStack stack, long count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |
| ` public UnlimitedItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |
| ` public long count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5677) |

## StorageServerStub.StorageAccessValidator

` public static final class StorageAccessValidator implements IRemoteCallableValidator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5517)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean validate(IPayloadContext ctx, Method method, Object[] args) ` | 末尾返回 ` valid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5518) |
| ` public StorageAccessValidator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5517) |

## StorageServerStub.StorageOpenStateValidator

` public static final class StorageOpenStateValidator implements IRemoteCallableValidator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5613)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean validate(IPayloadContext ctx, Method method, Object[] args) ` | ` ( !(ctx.player() instanceof ServerPlayer player) \|\| args.length != 3 \|\| !(args[0] instanceof UUID playerId) \|\| !player.getGameProfile().getId().equals(playerId) \|\| !(args[1] instanceof Long sourcePos) \|\| !(args[2] instanceof Boolean opened) ) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5614) |
| ` public StorageOpenStateValidator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5613) |

## StorageServerStub.StorageUsage

` public record StorageUsage(int usedTypes, int typeLimit, List<ItemStack> types) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StorageUsage> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5652) |
| ` public StorageUsage(int usedTypes, int typeLimit, List<ItemStack> types) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |
| ` public int usedTypes() ` | 读取 record 分量 ` usedTypes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |
| ` public int typeLimit() ` | 读取 record 分量 ` typeLimit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |
| ` public List<ItemStack> types() ` | 读取 record 分量 ` types ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5651) |

## StorageServerStub.StorageUsageValidator

` public static final class StorageUsageValidator implements IRemoteCallableValidator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5492)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean validate(IPayloadContext ctx, Method method, Object[] args) ` | 实现调用 ` ctx.player() `<br>实现调用 ` player.getGameProfile().getId().equals(playerId) `<br>实现调用 ` player.getGameProfile().getId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5493) |
| ` public StorageUsageValidator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5492) |

## StorageServerStub.SyncResult

` public record SyncResult(long version, double fullness, List<StackUpdate> updates, List<FluidEntry> fluids) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5708)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SyncResult> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5714) |
| ` public SyncResult(long version, double fullness, List<StackUpdate> updates, List<FluidEntry> fluids) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5708) |
| ` public long version() ` | 读取 record 分量 ` version ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5709) |
| ` public double fullness() ` | 读取 record 分量 ` fullness ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5710) |
| ` public List<StackUpdate> updates() ` | 读取 record 分量 ` updates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5711) |
| ` public List<FluidEntry> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5712) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5708) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5708) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5708) |

## StorageServerStub.TakeAllResult

` public record TakeAllResult(ItemStack carried, boolean changed, boolean done, int refilledSlots) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804)

#craftingTakeAll 分块合成的结果。<br>参数 ` carried ` 本次调用结束时的指针物品<br>参数 ` changed ` 本次调用是否合成了至少一个产物<br>参数 ` done ` 本次调用是否已自然终止（材料耗尽 / 产物无处可放 / 不消耗型配方）； false 表示达到分块上限，客户端应继续调用<br>参数 ` refilledSlots ` 补货位掩码：bit0 为切石机输入槽，bit1~bit9 为合成格 9 槽；0 表示未补货

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TakeAllResult> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5806) |
| ` public TakeAllResult(ItemStack carried, boolean changed, boolean done, int refilledSlots) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public ItemStack carried() ` | 读取 record 分量 ` carried ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public boolean changed() ` | 读取 record 分量 ` changed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public boolean done() ` | 读取 record 分量 ` done ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public int refilledSlots() ` | 读取 record 分量 ` refilledSlots ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5804) |

## StorageServerStub.TerminalAccessValidator

` public static final class TerminalAccessValidator implements IRemoteCallableValidator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5553)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean validate(IPayloadContext ctx, Method method, Object[] args) ` | ` ( !(ctx.player() instanceof ServerPlayer player) \|\| args.length < 2 \|\| !(args[0] instanceof UUID playerId) \|\| !player.getGameProfile().getId().equals(playerId) ) ` 成立时提前返回 ` false `<br>` (args[1] instanceof UUID targetId) ` 成立时提前返回 ` StorageServerStub.ownsBoundTerminal(player, targetId) `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5554) |
| ` public TerminalAccessValidator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5553) |
