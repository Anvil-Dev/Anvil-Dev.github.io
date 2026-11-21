# dev.dubhe.anvilcraft.network（GravitySourcesSyncPacket 至 ItemDetectorChangeRangePacket）



## GravitySourcesSyncPacket

` public record GravitySourcesSyncPacket(boolean replace, List<SourceData> sources, List<BlockPos> removed) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18)

Synchronizes the gravity sources of the player's current level.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<GravitySourcesSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("gravity_sources_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L23) |
| ` public static final StreamCodec<FriendlyByteBuf, GravitySourcesSyncPacket> STREAM_CODEC ` | 字段类型为 ` StreamCodec<FriendlyByteBuf, GravitySourcesSyncPacket> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L24) |
| ` @Override public Type<GravitySourcesSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L55) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` GravityManager.applyNetworkSync(player.level(), this.replace, this.sources, this.removed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L60) |
| ` public GravitySourcesSyncPacket(boolean replace, List<SourceData> sources, List<BlockPos> removed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |
| ` public boolean replace() ` | 读取 record 分量 ` replace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L19) |
| ` public List<SourceData> sources() ` | 读取 record 分量 ` sources ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L20) |
| ` public List<BlockPos> removed() ` | 读取 record 分量 ` removed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |

## GravitySourcesSyncPacket.SourceData

` public record SourceData(BlockPos id, double centerX, double centerY, double centerZ, double strength, int radius, double bodyRadius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SourceData from(GravityManager.GravitySource source) ` | 末尾返回 ` new SourceData( source.id(), source.center().x, source.center().y, source.center().z, source.type().strength(), source.type().radius(), source.type().bodyRadius() ) `<br>[调用处 GravityManager.GravitySourceManager.upsertSource](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L563) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L74) |
| ` public @Nullable GravityManager.GravitySource toSource() ` | ` (!type.isValid() \|\| !Double.isFinite(this.centerX) \|\| !Double.isFinite(this.centerY) \|\| !Double.isFinite(this.centerZ)) ` 成立时提前返回 ` null `<br>末尾返回 ` new GravityManager.GravitySource(this.id.immutable(), center, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L86) |
| ` public SourceData(BlockPos id, double centerX, double centerY, double centerZ, double strength, int radius, double bodyRadius) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |
| ` public BlockPos id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L66) |
| ` public double centerX() ` | 读取 record 分量 ` centerX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L67) |
| ` public double centerY() ` | 读取 record 分量 ` centerY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L68) |
| ` public double centerZ() ` | 读取 record 分量 ` centerZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L69) |
| ` public double strength() ` | 读取 record 分量 ` strength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L70) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L71) |
| ` public double bodyRadius() ` | 读取 record 分量 ` bodyRadius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L72) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |

## HammerChangeBlockPacket

` public record HammerChangeBlockPacket(BlockPos pos, BlockState state) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HammerChangeBlockPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("hammer_change_block")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L29) |
| ` public static final StreamCodec<ByteBuf, HammerChangeBlockPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, HammerChangeBlockPacket::pos, StreamCodecUtil.BLOCK_STATE, HammerChangeBlockPacket::state, HammerChangeBlockPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L30) |
| ` @Override public Type<HammerChangeBlockPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L38) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.isLoaded(this.pos) `<br>实现调用 ` level.getBlockState(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L43) |
| ` public HammerChangeBlockPacket(BlockPos pos, BlockState state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L28) |

## HammerChangeFlexibleMultiPartBlockPacket

` public record HammerChangeFlexibleMultiPartBlockPacket(BlockPos pos, BlockState state, Direction direction) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HammerChangeFlexibleMultiPartBlockPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of( "hammer_change_flexible_multi_part_block" )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, HammerChangeFlexibleMultiPartBlockPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L23) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L33) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.level() `<br>实现调用 ` level.isLoaded(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L38) |
| ` public HammerChangeFlexibleMultiPartBlockPacket(BlockPos pos, BlockState state, Direction direction) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public Direction direction() ` | 读取 record 分量 ` direction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |

## HammerUsePacket

` public record HammerUsePacket(BlockPos pos, InteractionHand hand, BlockHitResult result) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HammerUsePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("hammer_use")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L25) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HammerUsePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L26) |
| ` @Override public Type<HammerUsePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L36) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` Util.cast(player) `<br>实现调用 ` serverside.isAlive() `<br>实现调用 ` serverside.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L41) |
| ` public HammerUsePacket(BlockPos pos, InteractionHand hand, BlockHitResult result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public BlockHitResult result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |

## HeliostatsIrradiationPacket

` public record HeliostatsIrradiationPacket(BlockPos pos, BlockPos irritatePos) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HeliostatsIrradiationPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("heliostats_irradiation_pack")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, HeliostatsIrradiationPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L20) |
| ` @Override public Type<HeliostatsIrradiationPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L37) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().getBlockEntity(this.pos) `<br>实现调用 ` player.level() `<br>实现调用 ` heliostats.setIrritatePos(this.irritatePos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L42) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.level().isLoaded(this.pos) `<br>实现调用 ` player.level() `<br>实现调用 ` player.level().getBlockEntity(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L48) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public BlockPos irritatePos() ` | 读取 record 分量 ` irritatePos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |

## InfiniteFluidTankBreakModifierPacket

` public record InfiniteFluidTankBreakModifierPacket(BlockPos pos, boolean modifiersHeld) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<InfiniteFluidTankBreakModifierPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("infinite_fluid_tank_break_modifier") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, InfiniteFluidTankBreakModifierPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L22) |
| ` @Override public Type<InfiniteFluidTankBreakModifierPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L30) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` Util.cast(player) `<br>实现调用 ` InfiniteFluidTankBreakProtection.updateModifierAuthorization( serverPlayer, this.pos, this.modifiersHeld ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L35) |
| ` public InfiniteFluidTankBreakModifierPacket(BlockPos pos, boolean modifiersHeld) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L16) |
| ` public boolean modifiersHeld() ` | 读取 record 分量 ` modifiersHeld ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |

## InspectionStateChangedPacket

` public record InspectionStateChangedPacket(ResourceLocation id, boolean state) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<InspectionStateChangedPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("inspection_state")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, InspectionStateChangedPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ResourceLocation.STREAM_CODEC, InspectionStateChangedPacket::id, ByteBufCodecs.BOOL, InspectionStateChangedPacket::state, InspectionStateChangedPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L15) |
| ` @Override public Type<InspectionStateChangedPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L23) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` InspectionSupport.INSTANCE.changeStateClient(this.id, this.state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L28) |
| ` public InspectionStateChangedPacket(ResourceLocation id, boolean state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public ResourceLocation id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public boolean state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |

## IonocraftBackpackFlyingPacket

` public record IonocraftBackpackFlyingPacket(int playerId, boolean flying) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17)

飘升机背包飞行状态同步包（Server → Client）。 当玩家开始/停止用背包飞行时通知周边客户端，供粒子渲染精确判断。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<IonocraftBackpackFlyingPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ionocraft_backpack_flying")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, IonocraftBackpackFlyingPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, IonocraftBackpackFlyingPacket::playerId, ByteBufCodecs.BOOL, IonocraftBackpackFlyingPacket::flying, IonocraftBackpackFlyingPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L22) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L30) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` IonocraftBackpackClientHandler.onFlyingSync(this.playerId, this.flying) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L35) |
| ` public IonocraftBackpackFlyingPacket(int playerId, boolean flying) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17) |
| ` public int playerId() ` | 读取 record 分量 ` playerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17) |
| ` public boolean flying() ` | 读取 record 分量 ` flying ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L17) |

## IonocraftBackpackToggleDescentPacket

` public record IonocraftBackpackToggleDescentPacket() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<IonocraftBackpackToggleDescentPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ionocraft_backpack_toggle_descent")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, IonocraftBackpackToggleDescentPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new IonocraftBackpackToggleDescentPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L14) |
| ` @Override public Type<IonocraftBackpackToggleDescentPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L18) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` IonocraftBackpackItem.toggleSlowFalling(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L23) |
| ` public IonocraftBackpackToggleDescentPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L12) |

## ItemDetectorChangeRangePacket

` public record ItemDetectorChangeRangePacket(int range) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ItemDetectorChangeRangePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("item_detector_change_range")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, ItemDetectorChangeRangePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, ItemDetectorChangeRangePacket::range, ItemDetectorChangeRangePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L14) |
| ` @Override public Type<ItemDetectorChangeRangePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.setRange(this.range) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L25) |
| ` public ItemDetectorChangeRangePacket(int range) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public int range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
