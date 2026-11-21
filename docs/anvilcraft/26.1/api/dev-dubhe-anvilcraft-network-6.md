# dev.dubhe.anvilcraft.network（OverworldLikeCollapsePacket 至 RedstoneDiceRollPacket）



## OverworldLikeCollapsePacket

` public record OverworldLikeCollapsePacket(int elapsedTicks) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L13)

Starts or resumes the client-only white collapse flash.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OverworldLikeCollapsePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("overworld_like_collapse")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, OverworldLikeCollapsePacket> STREAM_CODEC ` | 初值 ` ByteBufCodecs.VAR_INT.map( OverworldLikeCollapsePacket::new, OverworldLikeCollapsePacket::elapsedTicks ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L15) |
| ` @Override public Type<OverworldLikeCollapsePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L20) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` OverworldLikeClientState.beginCollapse(this.elapsedTicks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L25) |
| ` public OverworldLikeCollapsePacket(int elapsedTicks) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L13) |
| ` public int elapsedTicks() ` | 读取 record 分量 ` elapsedTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L13) |

## OverworldLikeSkyStatePacket

` public record OverworldLikeSkyStatePacket(int generation, long visualSeed, long orbitEpochGameTime, OverworldLikeWorldState.Phase phase) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L14)

Synchronizes the immutable generation and current phase of the orbital sky.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OverworldLikeSkyStatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("overworld_like_sky_state")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, OverworldLikeSkyStatePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L21) |
| ` @Override public Type<OverworldLikeSkyStatePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L38) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` OverworldLikeClientState.update(this.generation, this.visualSeed, this.orbitEpochGameTime, this.phase) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L43) |
| ` public OverworldLikeSkyStatePacket(int generation, long visualSeed, long orbitEpochGameTime, OverworldLikeWorldState.Phase phase) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L14) |
| ` public int generation() ` | 读取 record 分量 ` generation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L15) |
| ` public long visualSeed() ` | 读取 record 分量 ` visualSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L16) |
| ` public long orbitEpochGameTime() ` | 读取 record 分量 ` orbitEpochGameTime ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L17) |
| ` public OverworldLikeWorldState.Phase phase() ` | 读取 record 分量 ` phase ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L14) |

## PlayerSettingsSyncPacket

` public record PlayerSettingsSyncPacket(PlayerSetting setting) implements IInsensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<PlayerSettingsSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("player_settings_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PlayerSettingsSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( PlayerSetting.STREAM_CODEC, PlayerSettingsSyncPacket::setting, PlayerSettingsSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L14) |
| ` @Override public Type<PlayerSettingsSyncPacket> type() ` | 末尾返回 ` PlayerSettingsSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L20) |
| ` @Override public void handleOnBothSide(Player player) ` | 实现调用 ` PlayerSettings.get() `<br>实现调用 ` settings.getSettings().put(player.getGameProfile().id(), this.setting) `<br>实现调用 ` settings.getSettings() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L25) |
| ` public PlayerSettingsSyncPacket(PlayerSetting setting) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L12) |
| ` public PlayerSetting setting() ` | 读取 record 分量 ` setting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PlayerSettingsSyncPacket.java#L12) |

## PowerGridRemovePacket

` public record PowerGridRemovePacket(int grid) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<PowerGridRemovePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("power_grid_remove")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, PowerGridRemovePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, PowerGridRemovePacket::grid, PowerGridRemovePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L15) |
| ` public PowerGridRemovePacket(PowerGrid grid) ` | 电网移除<br>执行 ` this(grid.hashCode()) `<br>[调用处 PowerGrid.remove](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L331) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L22) |
| ` @Override public Type<PowerGridRemovePacket> type() ` | 末尾返回 ` PowerGridRemovePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L26) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` PowerGridSupport.removeGrid(this.grid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L31) |
| ` public int grid() ` | 读取 record 分量 ` grid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L13) |

## PowerGridSyncChunkPacket

` public record PowerGridSyncChunkPacket(int gridId, String level, BlockPos pos, int totalChunks, int chunkIndex, int generate, int consume, boolean infinitePower, List<PowerComponentInfo> components) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowerGridSyncChunkPacket(int gridId, String level, BlockPos pos, int totalChunks, int chunkIndex, int generate, int consume, boolean infinitePower, List<PowerComponentInfo> components) ` | 执行 ` components = List.copyOf(components) `<br>[调用处 PowerGridSyncChunkPacket.decode](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L53) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L32) |
| ` public static final int MAX_COMPONENTS_PER_PACKET ` | 初值 ` 256 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L36) |
| ` public static final Type<PowerGridSyncChunkPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("power_grid_sync_chunk")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L37) |
| ` public static final StreamCodec<ByteBuf, PowerGridSyncChunkPacket> STREAM_CODEC ` | 字段类型为 ` StreamCodec<ByteBuf, PowerGridSyncChunkPacket> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L38) |
| ` public static void send(PowerGrid grid) ` | 实现调用 ` chunks(grid) `<br>实现调用 ` grid.getLevel() `<br>实现调用 ` grid.getLevel().getChunkAt(grid.getPos()).getPos() `<br>[调用处 PowerGrid.update](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L72) |
| ` public static void sendToAllPlayers(PowerGrid grid) ` | 实现调用 ` chunks(grid) `<br>实现调用 ` PacketDistributor.sendToAllPlayers(packet) `<br>[调用处 PowerGrid.remove](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L357) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L82) |
| ` public static void sendToPlayer(PowerGrid grid, ServerPlayer player) ` | 实现调用 ` chunks(grid) `<br>实现调用 ` PacketDistributor.sendToPlayer(player, packet) `<br>[调用处 PowerGrid.syncToPlayer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L477) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L88) |
| ` @Override public Type<PowerGridSyncChunkPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L117) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` PowerGridSupport.mergeSyncChunk(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L122) |
| ` public int gridId() ` | 读取 record 分量 ` gridId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L22) |
| ` public String level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L23) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L24) |
| ` public int totalChunks() ` | 读取 record 分量 ` totalChunks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L25) |
| ` public int chunkIndex() ` | 读取 record 分量 ` chunkIndex ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L26) |
| ` public int generate() ` | 读取 record 分量 ` generate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L27) |
| ` public int consume() ` | 读取 record 分量 ` consume ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L28) |
| ` public boolean infinitePower() ` | 读取 record 分量 ` infinitePower ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L29) |
| ` public List<PowerComponentInfo> components() ` | 读取 record 分量 ` components ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L21) |

## PowerGridSyncPacket

` public record PowerGridSyncPacket(SimplePowerGrid grid) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<PowerGridSyncPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("power_grid_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L13) |
| ` public static final StreamCodec<FriendlyByteBuf, PowerGridSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( SimplePowerGrid.STREAM_CODEC, PowerGridSyncPacket::grid, PowerGridSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L14) |
| ` public PowerGridSyncPacket(PowerGrid grid) ` | 电网同步<br>执行 ` this(new SimplePowerGrid(grid)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L21) |
| ` @Override public Type<PowerGridSyncPacket> type() ` | 末尾返回 ` PowerGridSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` PowerGridSupport.acceptGrid(this.grid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L30) |
| ` public SimplePowerGrid grid() ` | 读取 record 分量 ` grid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L12) |

## PulseGeneratorUpdatePacket

` public record PulseGeneratorUpdatePacket(byte startMode, boolean outputInvert, int waitingTime, int signalDuration) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<PulseGeneratorUpdatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("advanced_repeater_update")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, PulseGeneratorUpdatePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L21) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` PulseGeneratorUpdatePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L33) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` repeater.setStartMode(this.startMode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L38) |
| ` public PulseGeneratorUpdatePacket(byte startMode, boolean outputInvert, int waitingTime, int signalDuration) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L14) |
| ` public byte startMode() ` | 读取 record 分量 ` startMode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L15) |
| ` public boolean outputInvert() ` | 读取 record 分量 ` outputInvert ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L16) |
| ` public int waitingTime() ` | 读取 record 分量 ` waitingTime ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L17) |
| ` public int signalDuration() ` | 读取 record 分量 ` signalDuration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PulseGeneratorUpdatePacket.java#L14) |

## QuenchedOutMusicPacket

` public record QuenchedOutMusicPacket(BlockPos pos, boolean start) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22)

淬灭序曲音乐包（Server → Client）。 服务端在演化将进入超新星前预定时刻通知客户端开始播放 quenched\_out 曲目； 在演化被中断（锻星砧/增幅器被破坏、加速器被清除）时通知客户端立即停止。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<QuenchedOutMusicPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("quenched_out_music")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L24) |
| ` public static final StreamCodec<ByteBuf, QuenchedOutMusicPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, QuenchedOutMusicPacket::pos, ByteBufCodecs.BOOL, QuenchedOutMusicPacket::start, QuenchedOutMusicPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L26) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L34) |
| ` @Override public void handleOnClient(Player player) ` | 分支 ` (this.start) ` 内调用 ` QuenchedOutMusicHandler.start(this.pos) `<br>分支 ` !(this.start) ` 内调用 ` QuenchedOutMusicHandler.stop(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L39) |
| ` public QuenchedOutMusicPacket(BlockPos pos, boolean start) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22) |
| ` public boolean start() ` | 读取 record 分量 ` start ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L22) |

## RedstoneDiceModePacket

` public record RedstoneDiceModePacket(BlockPos pos, boolean uniform) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RedstoneDiceModePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("redstone_dice_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L18) |
| ` public static final StreamCodec<ByteBuf, RedstoneDiceModePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, RedstoneDiceModePacket::pos, ByteBufCodecs.BOOL, RedstoneDiceModePacket::uniform, RedstoneDiceModePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L19) |
| ` @Override public Type<RedstoneDiceModePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L25) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.hasChunkAt(this.pos) `<br>实现调用 ` player.isAlive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L30) |
| ` public RedstoneDiceModePacket(BlockPos pos, boolean uniform) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17) |
| ` public boolean uniform() ` | 读取 record 分量 ` uniform ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceModePacket.java#L17) |

## RedstoneDiceRollPacket

` public record RedstoneDiceRollPacket(BlockPos pos, InteractionHand hand) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RedstoneDiceRollPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("redstone_dice_roll")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L20) |
| ` public static final StreamCodec<FriendlyByteBuf, RedstoneDiceRollPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, RedstoneDiceRollPacket::pos, StreamCodecUtil.enumStreamCodec(InteractionHand.class), RedstoneDiceRollPacket::hand, RedstoneDiceRollPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L21) |
| ` @Override public Type<RedstoneDiceRollPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L27) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.hasChunkAt(this.pos) `<br>实现调用 ` player.isAlive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L32) |
| ` public RedstoneDiceRollPacket(BlockPos pos, InteractionHand hand) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneDiceRollPacket.java#L19) |
