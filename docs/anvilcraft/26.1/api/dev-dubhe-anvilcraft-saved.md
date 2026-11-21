# dev.dubhe.anvilcraft.saved



## BetterSavedData

` public abstract class BetterSavedData extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void sync2C() ` | 实现调用 ` Util.isServer() `<br>实现调用 ` ServerLifecycleHooks.getCurrentServer() `<br>分支 ` (server != null) ` 内调用 ` this.sync2C(server.registryAccess()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L40) |
| ` public void sync2C(RegistryAccess registryAccess) ` | 实现调用 ` this.createPacket(registryAccess) `<br>分支 ` (packet != null) ` 内调用 ` this.sync2C(packet, registryAccess) `<br>[调用处 BetterSavedData.sync2C](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L46) |

## BlueprintAdministrators

` public class BlueprintAdministrators extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlueprintAdministrators get(MinecraftServer server) ` | 末尾返回 ` server.overworld().getDataStorage().computeIfAbsent(TYPE) `<br>[调用处 BlueprintCommand.setAllowed](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/BlueprintCommand.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L32) |
| ` public static boolean canUpload(ServerPlayer player) ` | 末尾返回 ` player.permissions().hasPermission(Permissions.COMMANDS_ADMIN) \|\| get(player.level().getServer()).players.contains(player.getUUID()) `<br>[调用处 StructureScannerMenu.get](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L36) |
| ` public boolean setAllowed(UUID player, boolean allowed) ` | 末尾返回 ` changed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L41) |

## OverworldLikeResetManifest

` public record OverworldLikeResetManifest(int generation, long activeSeed, long nextSeed, boolean resetPending) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15)

Startup-safe source of truth for an overworld-like generation reset.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static OverworldLikeResetManifest initial(long activeSeed) ` | 末尾返回 ` new OverworldLikeResetManifest(0, activeSeed, nextSeed(activeSeed, 0), false) `<br>[调用处 OverworldLikeGenerationBootstrap.prepareStorage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeGenerationBootstrap.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L18) |
| ` public static @Nullable OverworldLikeResetManifest read(Path worldRoot) throws IOException ` | ` (Files.notExists(path)) ` 成立时提前返回 ` null `<br>` (!tag.contains("generation") \|\| !tag.contains("activeSeed") \|\| !tag.contains("nextSeed")) ` 成立时抛出 ` new IOException("Invalid overworld-like reset manifest at " + path) `<br>末尾返回 ` new OverworldLikeResetManifest( tag.getIntOr("generation", 0), tag.getLongOr("activeSeed", 0L), tag.getLongOr("nextSeed", 0L), tag.getBooleanOr("resetPending", false) ) `<br>[调用处 OverworldLikeGenerationBootstrap.prepareStorage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeGenerationBootstrap.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L22) |
| ` public void write(Path worldRoot) throws IOException ` | 实现调用 ` path(worldRoot) `<br>实现调用 ` path.getParent() `<br>实现调用 ` Files.createDirectories(parent) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L37) |
| ` public OverworldLikeResetManifest resetRequested(long seed) ` | 末尾返回 ` new OverworldLikeResetManifest(this.generation, this.activeSeed, seed, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L59) |
| ` public OverworldLikeResetManifest promoteNextGeneration() ` | 末尾返回 ` new OverworldLikeResetManifest( nextGeneration, this.nextSeed, nextSeed(this.nextSeed, nextGeneration), false ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L63) |
| ` public OverworldLikeResetManifest(int generation, long activeSeed, long nextSeed, boolean resetPending) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public int generation() ` | 读取 record 分量 ` generation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public long activeSeed() ` | 读取 record 分量 ` activeSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public long nextSeed() ` | 读取 record 分量 ` nextSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public boolean resetPending() ` | 读取 record 分量 ` resetPending ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |

## OverworldLikeWorldState

` public class OverworldLikeWorldState extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L28)

Persistent runtime state shared by every overworld-like landing portal.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<OverworldLikeWorldState> CODEC ` | 初值 ` CompoundTag.CODEC.xmap(OverworldLikeWorldState::load, OverworldLikeWorldState::toTag) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L30) |
| ` public static final SavedDataType<OverworldLikeWorldState> TYPE ` | 初值 ` new SavedDataType<>(AnvilCraft.of("overworld_like_world_state"), OverworldLikeWorldState::new, CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L32) |
| ` public static OverworldLikeWorldState get(MinecraftServer server) ` | 末尾返回 ` state `<br>[调用处 OverworldLikeResetManager.beginCollapse](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeResetManager.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L49) |
| ` public int generation() ` | 末尾返回 ` this.generation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L115) |
| ` public long generationSeed() ` | 末尾返回 ` this.generationSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L119) |
| ` public long visualSeed() ` | 末尾返回 ` this.visualSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L123) |
| ` public long orbitEpochGameTime() ` | 末尾返回 ` this.orbitEpochGameTime ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L135) |
| ` public Phase phase() ` | 末尾返回 ` this.phase ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L139) |
| ` public long collapseStartedAt() ` | 末尾返回 ` this.collapseStartedAt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L143) |
| ` public long nextGenerationSeed() ` | 末尾返回 ` this.nextGenerationSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L147) |
| ` public boolean collapseDamageIssued() ` | 末尾返回 ` this.collapseDamageIssued ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L151) |
| ` public int eclipseDarken(long gameTime, long dayTime) ` | 末尾返回 ` this.cachedEclipseDarken ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L155) |
| ` public boolean beginCollapse(long gameTime, long nextSeed) ` | ` (this.phase != Phase.ACTIVE) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L168) |
| ` public void markCollapseDamageIssued() ` | 实现调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L179) |
| ` public void markResetPending() ` | 实现调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L185) |
| ` public boolean requestGenerationByEntry() ` | ` (this.phase != Phase.RESET_PENDING) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L191) |
| ` public boolean isGenerationRequestedByEntry() ` | 末尾返回 ` this.generationRequestedByEntry ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L200) |
| ` public void addPendingForcedRespawn(UUID playerId) ` | 实现调用 ` this.pendingForcedRespawns.add(playerId) `<br>分支 ` (this.pendingForcedRespawns.add(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L204) |
| ` public boolean hasPendingForcedRespawn(UUID playerId) ` | 末尾返回 ` this.pendingForcedRespawns.contains(playerId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L208) |
| ` public void markPlayerInOverworldLike(UUID playerId) ` | 实现调用 ` this.knownOverworldLikePlayers.add(playerId) `<br>分支 ` (this.knownOverworldLikePlayers.add(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L212) |
| ` public void removeKnownOverworldLikePlayer(UUID playerId) ` | 实现调用 ` this.knownOverworldLikePlayers.remove(playerId) `<br>分支 ` (this.knownOverworldLikePlayers.remove(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L216) |
| ` public void enqueueKnownPlayersForForcedRespawn() ` | 实现调用 ` this.pendingForcedRespawns.addAll(this.knownOverworldLikePlayers) `<br>分支 ` (this.pendingForcedRespawns.addAll(this.knownOverworldLikePlayers)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L220) |
| ` public void removePendingForcedRespawn(UUID playerId) ` | 实现调用 ` this.pendingForcedRespawns.remove(playerId) `<br>分支 ` (this.pendingForcedRespawns.remove(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L224) |
| ` public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L228) |
| ` public OverworldLikeWorldState() ` | Java 提供的无参构造器。<br>[调用处 OverworldLikeWorldState.loadLegacy](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L28) |

## OverworldLikeWorldState.Phase

` public enum Phase `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L256)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ACTIVE ` | 声明于枚举 ` OverworldLikeWorldState.Phase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L258) |
| ` COLLAPSING ` | 声明于枚举 ` OverworldLikeWorldState.Phase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L259) |
| ` RESET_PENDING ` | 声明于枚举 ` OverworldLikeWorldState.Phase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L260) |
| ` public static Phase fromName(String name) ` | 末尾返回 ` ACTIVE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L268) |
| ` public static Phase fromOrdinal(int ordinal) ` | 末尾返回 ` ordinal >= 0 && ordinal < values.length ? values[ordinal] : ACTIVE `<br>[调用处 OverworldLikeSkyStatePacket](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L275) |
| ` public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L256) |
| ` public static Phase[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L256) |
| ` public static Phase valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L256) |

## WormholeInterfaceStates

` public class WormholeInterfaceStates extends BetterSavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L31)

保存每组虫洞物流和流体接口权威状态的全局存档数据。 每组接口由虫洞天体标识、相对方块偏移和接口类型生成确定性的 UUID， 同一虫洞网络中的全部锻星砧共享该状态，因此表现为一个统一接口。 激光接口不在此持久化，其输入汇总与输出分配会在每刻重新计算。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WormholeInterfaceStates> CODEC ` | 由 ` CompoundTag.CODEC.comapFlatMap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L36) |
| ` public static final SavedDataType<WormholeInterfaceStates> TYPE ` | 初值 ` new SavedDataType<>(AnvilCraft.of("wormhole_interface_states"), WormholeInterfaceStates::new, WormholeInterfaceStates.CODEC, null) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L49) |
| ` public static WormholeInterfaceStates get() ` | 末尾返回 ` BetterSavedData.get(WormholeInterfaceStates.TYPE, WormholeInterfaceStates.CLIENT_COPY) `<br>[调用处 WormholeStabilizerHandler.syncLogisticsOnChange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L219) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L69) |
| ` public static UUID interfaceUuid(UUID bodyUuid, int relX, int relZ, String type) ` | 为一组接口生成确定性标识，只有源自同一黑洞天体的锻星砧副本才会共享状态。<br>末尾返回 ` UUID.nameUUIDFromBytes(input.getBytes(StandardCharsets.UTF_8)) `<br>[调用处 WormholeInterfaceStates.logisticsUuid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L78) |
| ` public static UUID logisticsUuid(UUID bodyUuid, int relX, int relZ) ` | 末尾返回 ` WormholeInterfaceStates.interfaceUuid(bodyUuid, relX, relZ, WormholeInterfaceStates.TYPE_LOGISTICS) `<br>[调用处 WormholeStabilizerHandler.syncLogisticsOnChange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L218) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L83) |
| ` public static UUID fluidUuid(UUID bodyUuid, int relX, int relZ) ` | 末尾返回 ` WormholeInterfaceStates.interfaceUuid(bodyUuid, relX, relZ, WormholeInterfaceStates.TYPE_FLUID) `<br>[调用处 WormholeStabilizerHandler.syncWormholeFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L394) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L87) |
| ` public List<UnlimitedItemStack> getOrCreateItemState(UUID uuid, int slotCount) ` | 获取或创建指定标识的权威物品状态。返回列表可修改，结构变化后必须调用 #setDirty()。<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L96) |
| ` public List<FluidStack> getOrCreateFluidState(UUID uuid, int tankCount) ` | 获取或创建指定标识的权威流体状态。返回列表可修改，结构变化后必须调用 #setDirty()。<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L118) |
| ` public List<FluidStack> getFluidState(UUID uuid) ` | 末尾返回 ` this.fluidStates.get(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L135) |

## WormholeNetwork

` public class WormholeNetwork extends BetterSavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L43)

记录整个服务端中全部虫洞稳定锻星砧位置的全局存档数据，用于建立跨维度虫洞连接。 锻星砧按黑洞的 bodyUuid 分组，只有来自同一天体快照的黑洞共享标识并能互相连接。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WormholeNetwork> CODEC ` | 由 ` CompoundTag.CODEC.comapFlatMap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L48) |
| ` public static final SavedDataType<WormholeNetwork> TYPE ` | 初值 ` new SavedDataType<>(AnvilCraft.of("wormhole_network"), WormholeNetwork::loadLegacy, ignored -> WormholeNetwork.CODEC, null) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L61) |
| ` public static WormholeNetwork get() ` | 末尾返回 ` network `<br>[调用处 CelestialForgingAnvilPortalBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilPortalBlockEntity.java#L240) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L151) |
| ` public void register(UUID bodyUuid, Level level, BlockPos pos) ` | 使用指定黑洞身份标识将锻星砧注册到虫洞网络。<br>实现调用 ` level.dimension() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(dim) `<br>实现调用 ` OverworldLikeGenerationBootstrap.getManifest(serverLevel.getServer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L173) |
| ` public void unregister(Level level, BlockPos pos) ` | 从虫洞网络注销锻星砧。<br>实现调用 ` level.dimension() `<br>实现调用 ` this.reverseIndex.get(dim) `<br>实现调用 ` dimMap.remove(pos) `<br>[调用处 WormholeNetwork.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L181) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L191) |
| ` public void unregisterDimension(ResourceKey<Level> dimension) ` | 实现调用 ` this.reverseIndex.remove(dimension) `<br>实现调用 ` this.network.entrySet().iterator() `<br>实现调用 ` this.network.entrySet() `<br>[调用处 WormholeNetwork.synchronizeOverworldLikeGeneration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L162) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L208) |
| ` public void setPortalSides(ResourceKey<Level> dim, BlockPos pos, Set<Cube323PartHalf> sides) ` | 实现调用 ` this.reverseIndex.getOrDefault(dim, Map.of()).get(pos) `<br>实现调用 ` this.reverseIndex.getOrDefault(dim, Map.of()) `<br>实现调用 ` Map.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L220) |
| ` public boolean hasPortalAt(ResourceKey<Level> dim, BlockPos pos, Cube323PartHalf side) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L237) |
| ` public List<Entry> getConnected(UUID bodyUuid, ResourceKey<Level> selfDim, BlockPos selfPos) ` | 获取指定天体标识下除自身外的全部已连接锻星砧条目。<br>末尾返回 ` all.stream().filter(e -> !(e.dimension.equals(selfDim) && e.pos.equals(selfPos))).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L255) |

## WormholeNetwork.Entry

` public record Entry(ResourceKey<Level> dimension, BlockPos pos, Set<Cube323PartHalf> portalSides) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90)

虫洞网络中的单个锻星砧条目。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResourceKey<Level> dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90) |
| ` public Set<Cube323PartHalf> portalSides() ` | 读取 record 分量 ` portalSides ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L90) |
