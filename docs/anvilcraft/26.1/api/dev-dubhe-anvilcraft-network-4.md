# dev.dubhe.anvilcraft.network（GravitySourcesSyncPacket 至 IonoCraftBackpackFlyingPacket）



## GravitySourcesSyncPacket

` public record GravitySourcesSyncPacket(boolean replace, List<SourceData> sources, List<BlockPos> removed) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18)

Synchronizes the gravity sources of the player's current level.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<GravitySourcesSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("gravity_sources_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L23) |
| ` public static final StreamCodec<FriendlyByteBuf, GravitySourcesSyncPacket> STREAM_CODEC ` | 字段类型为 ` StreamCodec<FriendlyByteBuf, GravitySourcesSyncPacket> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L24) |
| ` @Override public Type<GravitySourcesSyncPacket> type() ` | 末尾返回 ` GravitySourcesSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L55) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` GravityManager.applyNetworkSync(player.level(), this.replace, this.sources, this.removed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L60) |
| ` public GravitySourcesSyncPacket(boolean replace, List<SourceData> sources, List<BlockPos> removed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |
| ` public boolean replace() ` | 读取 record 分量 ` replace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L19) |
| ` public List<SourceData> sources() ` | 读取 record 分量 ` sources ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L20) |
| ` public List<BlockPos> removed() ` | 读取 record 分量 ` removed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L18) |

## GravitySourcesSyncPacket.SourceData

` public record SourceData(BlockPos id, double centerX, double centerY, double centerZ, double strength, int radius, double bodyRadius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SourceData from(GravityManager.GravitySource source) ` | 末尾返回 ` new SourceData( source.id(), source.center().x, source.center().y, source.center().z, source.type().strength(), source.type().radius(), source.type().bodyRadius() ) `<br>[调用处 GravityManager.GravitySourceManager.upsertSource](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L553) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L74) |
| ` public GravityManager.@Nullable GravitySource toSource() ` | ` (!type.isValid() \|\| !Double.isFinite(this.centerX) \|\| !Double.isFinite(this.centerY) \|\| !Double.isFinite(this.centerZ)) ` 成立时提前返回 ` null `<br>末尾返回 ` new GravityManager.GravitySource(this.id.immutable(), center, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L86) |
| ` public SourceData(BlockPos id, double centerX, double centerY, double centerZ, double strength, int radius, double bodyRadius) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |
| ` public BlockPos id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L66) |
| ` public double centerX() ` | 读取 record 分量 ` centerX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L67) |
| ` public double centerY() ` | 读取 record 分量 ` centerY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L68) |
| ` public double centerZ() ` | 读取 record 分量 ` centerZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L69) |
| ` public double strength() ` | 读取 record 分量 ` strength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L70) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L71) |
| ` public double bodyRadius() ` | 读取 record 分量 ` bodyRadius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L72) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L65) |

## HammerChangeBlockPacket

` public record HammerChangeBlockPacket(BlockPos pos, BlockState state) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HammerChangeBlockPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("hammer_change_block")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L32) |
| ` public static final StreamCodec<ByteBuf, HammerChangeBlockPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, HammerChangeBlockPacket::pos, StreamCodecUtil.BLOCK_STATE, HammerChangeBlockPacket::state, HammerChangeBlockPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L33) |
| ` @Override public Type<HammerChangeBlockPacket> type() ` | 末尾返回 ` HammerChangeBlockPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L41) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.isLoaded(this.pos) `<br>实现调用 ` level.getBlockState(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L46) |
| ` public HammerChangeBlockPacket(BlockPos pos, BlockState state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L31) |

## HammerChangeFlexibleMultiPartBlockPacket

` public record HammerChangeFlexibleMultiPartBlockPacket(BlockPos pos, BlockState state, Direction direction) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HammerChangeFlexibleMultiPartBlockPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of( "hammer_change_flexible_multi_part_block" )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, HammerChangeFlexibleMultiPartBlockPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L23) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` HammerChangeFlexibleMultiPartBlockPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L33) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.level() `<br>实现调用 ` level.isLoaded(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L38) |
| ` public HammerChangeFlexibleMultiPartBlockPacket(BlockPos pos, BlockState state, Direction direction) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public Direction direction() ` | 读取 record 分量 ` direction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeFlexibleMultiPartBlockPacket.java#L19) |

## HammerUsePacket

` public record HammerUsePacket(BlockPos pos, InteractionHand hand, BlockHitResult result) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HammerUsePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("hammer_use")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L25) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HammerUsePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L26) |
| ` @Override public Type<HammerUsePacket> type() ` | 末尾返回 ` HammerUsePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L36) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` Util.cast(player) `<br>实现调用 ` serverside.isAlive() `<br>实现调用 ` serverside.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L41) |
| ` public HammerUsePacket(BlockPos pos, InteractionHand hand, BlockHitResult result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public BlockHitResult result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L24) |

## HandbookStructureExportHandler

` public final class HandbookStructureExportHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportHandler.java#L21)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handle(HandbookStructureExportPacket payload, ServerPlayer player) ` | 实现调用 ` player.getUUID() `<br>实现调用 ` System.nanoTime() `<br>实现调用 ` payload.offset() `<br>[调用处 HandbookStructureExportPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportHandler.java#L31) |
| ` @SubscribeEvent public static void onLogout(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` TRANSFERS.remove(event.getEntity().getUUID()) `<br>实现调用 ` event.getEntity().getUUID() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportHandler.java#L78) |
| ` @SubscribeEvent public static void onServerTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>实现调用 ` System.nanoTime() `<br>实现调用 ` TRANSFERS.entrySet().removeIf(entry -> now - entry.getValue().started > TIMEOUT_NANOS) `<br>实现调用 ` TRANSFERS.entrySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportHandler.java#L84) |

## HandbookStructureExportPacket

` public record HandbookStructureExportPacket(Identifier location, int totalBytes, int offset, byte[] data) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CHUNK_BYTES ` | 初值 ` 24 * 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L13) |
| ` public static final int MAX_BYTES ` | 初值 ` 8 * 1024 * 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L14) |
| ` public static final Type<HandbookStructureExportPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("handbook_structure_export")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HandbookStructureExportPacket> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L16) |
| ` @Override public Type<HandbookStructureExportPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L27) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` HandbookStructureExportHandler.handle(this, serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L32) |
| ` public HandbookStructureExportPacket(Identifier location, int totalBytes, int offset, byte[] data) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public int totalBytes() ` | 读取 record 分量 ` totalBytes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public int offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public byte[] data() ` | 读取 record 分量 ` data ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportPacket.java#L12) |

## HeliostatsIrradiationPacket

` public record HeliostatsIrradiationPacket(BlockPos pos, BlockPos irritatePos) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<HeliostatsIrradiationPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("heliostats_irradiation_pack")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, HeliostatsIrradiationPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L20) |
| ` @Override public Type<HeliostatsIrradiationPacket> type() ` | 末尾返回 ` HeliostatsIrradiationPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L37) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().getBlockEntity(this.pos) `<br>实现调用 ` player.level() `<br>实现调用 ` heliostats.setIrritatePos(this.irritatePos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L42) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.level().isLoaded(this.pos) `<br>实现调用 ` player.level() `<br>实现调用 ` player.level().getBlockEntity(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L48) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public BlockPos irritatePos() ` | 读取 record 分量 ` irritatePos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HeliostatsIrradiationPacket.java#L18) |

## InfiniteFluidTankBreakModifierPacket

` public record InfiniteFluidTankBreakModifierPacket(BlockPos pos, boolean modifiersHeld) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<InfiniteFluidTankBreakModifierPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("infinite_fluid_tank_break_modifier") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, InfiniteFluidTankBreakModifierPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L22) |
| ` @Override public Type<InfiniteFluidTankBreakModifierPacket> type() ` | 末尾返回 ` InfiniteFluidTankBreakModifierPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L30) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` Util.cast(player) `<br>实现调用 ` InfiniteFluidTankBreakProtection.updateModifierAuthorization( serverPlayer, this.pos, this.modifiersHeld ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L35) |
| ` public InfiniteFluidTankBreakModifierPacket(BlockPos pos, boolean modifiersHeld) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L16) |
| ` public boolean modifiersHeld() ` | 读取 record 分量 ` modifiersHeld ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L15) |

## InspectionStateChangedPacket

` public record InspectionStateChangedPacket(Identifier id, boolean state) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<InspectionStateChangedPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("inspection_state")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, InspectionStateChangedPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( Identifier.STREAM_CODEC, InspectionStateChangedPacket::id, ByteBufCodecs.BOOL, InspectionStateChangedPacket::state, InspectionStateChangedPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L15) |
| ` @Override public Type<InspectionStateChangedPacket> type() ` | 末尾返回 ` InspectionStateChangedPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L23) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` InspectionSupport.INSTANCE.changeStateClient(this.id, this.state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L28) |
| ` public InspectionStateChangedPacket(Identifier id, boolean state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public boolean state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InspectionStateChangedPacket.java#L13) |

## IonoCraftBackpackFlyingPacket

` public record IonoCraftBackpackFlyingPacket(int playerId, boolean flying) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17)

飘升机背包飞行状态同步包（Server → Client）。 当玩家开始/停止用背包飞行时通知周边客户端，供粒子渲染精确判断。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<IonoCraftBackpackFlyingPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ionocraft_backpack_flying")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, IonoCraftBackpackFlyingPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, IonoCraftBackpackFlyingPacket::playerId, ByteBufCodecs.BOOL, IonoCraftBackpackFlyingPacket::flying, IonoCraftBackpackFlyingPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L22) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` IonoCraftBackpackFlyingPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L30) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` IonoCraftBackpackClientHandler.onFlyingSync(this.playerId, this.flying) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L35) |
| ` public IonoCraftBackpackFlyingPacket(int playerId, boolean flying) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17) |
| ` public int playerId() ` | 读取 record 分量 ` playerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17) |
| ` public boolean flying() ` | 读取 record 分量 ` flying ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L17) |
