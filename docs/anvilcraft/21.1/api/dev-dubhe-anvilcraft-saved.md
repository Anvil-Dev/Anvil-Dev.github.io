# dev.dubhe.anvilcraft.saved



## BetterSavedData

` public abstract class BetterSavedData extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public abstract void read(CompoundTag nbt, HolderLookup.Provider registries) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L33) |
| ` @Override public abstract CompoundTag save(CompoundTag nbt, HolderLookup.Provider registries) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L35) |
| ` public void sync2C() ` | 实现调用 ` Util.isServer() `<br>实现调用 ` this.sync2C(ServerLifecycleHooks.getCurrentServer().registryAccess()) `<br>实现调用 ` ServerLifecycleHooks.getCurrentServer().registryAccess() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L68) |
| ` public void sync2C(RegistryAccess registryAccess) ` | 执行 ` this.sync2C(this.createPacket(registryAccess), registryAccess) `<br>[调用处 BetterSavedData.sync2C](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java#L73) |

## BlueprintAdministrators

` public class BlueprintAdministrators extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlueprintAdministrators get(MinecraftServer server) ` | 末尾返回 ` server.overworld().getDataStorage().computeIfAbsent( new SavedData.Factory<>(BlueprintAdministrators::new, BlueprintAdministrators::load), "anvilcraft_blueprint_administrators") `<br>[调用处 BlueprintCommand.setAllowed](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/BlueprintCommand.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L18) |
| ` public static boolean canUpload(ServerPlayer player) ` | 末尾返回 ` player.hasPermissions(3) \|\| get(player.server).players.contains(player.getUUID()) `<br>[调用处 StructureScannerMenu.get](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/StructureScannerMenu.java#L108) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L23) |
| ` public boolean setAllowed(UUID player, boolean allowed) ` | 末尾返回 ` changed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L27) |
| ` @Override public CompoundTag save(CompoundTag tag, HolderLookup.Provider registries) ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L43) |
| ` public BlueprintAdministrators() ` | Java 提供的无参构造器。<br>[调用处 BlueprintAdministrators.load](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L34) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BlueprintAdministrators.java#L15) |

## OverworldLikeResetManifest

` public record OverworldLikeResetManifest(int generation, long activeSeed, long nextSeed, boolean resetPending) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15)

Startup-safe source of truth for an overworld-like generation reset.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static OverworldLikeResetManifest initial(long activeSeed) ` | 末尾返回 ` new OverworldLikeResetManifest(0, activeSeed, nextSeed(activeSeed, 0), false) `<br>[调用处 OverworldLikeGenerationBootstrap.prepare](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeGenerationBootstrap.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L18) |
| ` public static @Nullable OverworldLikeResetManifest read(Path worldRoot) throws IOException ` | ` (Files.notExists(path)) ` 成立时提前返回 ` null `<br>` (!tag.contains("generation") \|\| !tag.contains("activeSeed") \|\| !tag.contains("nextSeed")) ` 成立时抛出 ` new IOException("Invalid overworld-like reset manifest at " + path) `<br>末尾返回 ` new OverworldLikeResetManifest( tag.getInt("generation"), tag.getLong("activeSeed"), tag.getLong("nextSeed"), tag.getBoolean("resetPending") ) `<br>[调用处 OverworldLikeGenerationBootstrap.prepare](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeGenerationBootstrap.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L22) |
| ` public void write(Path worldRoot) throws IOException ` | 实现调用 ` path(worldRoot) `<br>实现调用 ` path.getParent() `<br>实现调用 ` Files.createDirectories(parent) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L37) |
| ` public OverworldLikeResetManifest resetRequested(long seed) ` | 末尾返回 ` new OverworldLikeResetManifest(this.generation, this.activeSeed, seed, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L59) |
| ` public OverworldLikeResetManifest promoteNextGeneration() ` | 末尾返回 ` new OverworldLikeResetManifest( nextGeneration, this.nextSeed, nextSeed(this.nextSeed, nextGeneration), false ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L63) |
| ` public OverworldLikeResetManifest(int generation, long activeSeed, long nextSeed, boolean resetPending) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public int generation() ` | 读取 record 分量 ` generation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public long activeSeed() ` | 读取 record 分量 ` activeSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public long nextSeed() ` | 读取 record 分量 ` nextSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public boolean resetPending() ` | 读取 record 分量 ` resetPending ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeResetManifest.java#L15) |

## OverworldLikeWorldState

` public class OverworldLikeWorldState extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L20)

Persistent runtime state shared by every overworld-like landing portal.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static OverworldLikeWorldState get(MinecraftServer server) ` | 末尾返回 ` state `<br>[调用处 OverworldLikeResetManager.beginCollapse](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeResetManager.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L37) |
| ` public int generation() ` | 末尾返回 ` this.generation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L92) |
| ` public long generationSeed() ` | 末尾返回 ` this.generationSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L96) |
| ` public long visualSeed() ` | 末尾返回 ` this.visualSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L100) |
| ` public long orbitEpochGameTime() ` | 末尾返回 ` this.orbitEpochGameTime ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L112) |
| ` public Phase phase() ` | 末尾返回 ` this.phase ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L116) |
| ` public long collapseStartedAt() ` | 末尾返回 ` this.collapseStartedAt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L120) |
| ` public long nextGenerationSeed() ` | 末尾返回 ` this.nextGenerationSeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L124) |
| ` public boolean collapseDamageIssued() ` | 末尾返回 ` this.collapseDamageIssued ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L128) |
| ` public int eclipseDarken(long gameTime, long dayTime) ` | 末尾返回 ` this.cachedEclipseDarken ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L132) |
| ` public boolean beginCollapse(long gameTime, long nextSeed) ` | ` (this.phase != Phase.ACTIVE) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L145) |
| ` public void markCollapseDamageIssued() ` | 实现调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L156) |
| ` public void markResetPending() ` | 实现调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L162) |
| ` public boolean requestGenerationByEntry() ` | ` (this.phase != Phase.RESET_PENDING) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L168) |
| ` public boolean isGenerationRequestedByEntry() ` | 末尾返回 ` this.generationRequestedByEntry ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L177) |
| ` public void addPendingForcedRespawn(UUID playerId) ` | 实现调用 ` this.pendingForcedRespawns.add(playerId) `<br>分支 ` (this.pendingForcedRespawns.add(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L181) |
| ` public boolean hasPendingForcedRespawn(UUID playerId) ` | 末尾返回 ` this.pendingForcedRespawns.contains(playerId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L185) |
| ` public void markPlayerInOverworldLike(UUID playerId) ` | 实现调用 ` this.knownOverworldLikePlayers.add(playerId) `<br>分支 ` (this.knownOverworldLikePlayers.add(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L189) |
| ` public void removeKnownOverworldLikePlayer(UUID playerId) ` | 实现调用 ` this.knownOverworldLikePlayers.remove(playerId) `<br>分支 ` (this.knownOverworldLikePlayers.remove(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L193) |
| ` public void enqueueKnownPlayersForForcedRespawn() ` | 实现调用 ` this.pendingForcedRespawns.addAll(this.knownOverworldLikePlayers) `<br>分支 ` (this.pendingForcedRespawns.addAll(this.knownOverworldLikePlayers)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L197) |
| ` public void removePendingForcedRespawn(UUID playerId) ` | 实现调用 ` this.pendingForcedRespawns.remove(playerId) `<br>分支 ` (this.pendingForcedRespawns.remove(playerId)) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L201) |
| ` @Override public CompoundTag save(CompoundTag tag, HolderLookup.Provider registries) ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L205) |
| ` public OverworldLikeWorldState() ` | Java 提供的无参构造器。<br>[调用处 OverworldLikeWorldState.load](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L20) |

## OverworldLikeWorldState.Phase

` public enum Phase `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L233)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ACTIVE ` | 声明于枚举 ` OverworldLikeWorldState.Phase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L235) |
| ` COLLAPSING ` | 声明于枚举 ` OverworldLikeWorldState.Phase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L236) |
| ` RESET_PENDING ` | 声明于枚举 ` OverworldLikeWorldState.Phase ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L237) |
| ` public static Phase fromName(String name) ` | 末尾返回 ` ACTIVE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L245) |
| ` public static Phase fromOrdinal(int ordinal) ` | 末尾返回 ` ordinal >= 0 && ordinal < values.length ? values[ordinal] : ACTIVE `<br>[调用处 OverworldLikeSkyStatePacket](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L252) |
| ` public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L233) |
| ` public static Phase[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L233) |
| ` public static Phase valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/OverworldLikeWorldState.java#L233) |

## WormholeInterfaceStates

` public class WormholeInterfaceStates extends BetterSavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L36)

Global saved data that stores the canonical state for each wormhole interface pair (logistics items &amp;amp; fluid tanks). Each pair — identified by the wormhole network's paramsHash, the relative block offset, and the interface type — receives a deterministic UUID. All CFAs sharing the same wormhole network group access the same canonical state, ensuring they behave like a single unified interface. Laser interfaces are NOT stored here; their sync is purely computational (sum inputs, split among outputs) each tick.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static WormholeInterfaceStates get() ` | 末尾返回 ` BetterSavedData.get("wormhole_interface_states", WormholeInterfaceStates::new) `<br>[调用处 CelestialForgingAnvilLogisticsInterfaceBlockEntity.resolveItemHandler](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLogisticsInterfaceBlockEntity.java#L147) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L61) |
| ` public static UUID interfaceUuid(UUID bodyUuid, int relX, int relZ, String type) ` | Generate a deterministic UUID for an interface pair. Uses the black hole's body UUID so only CFA copies from the same source share state.<br>末尾返回 ` UUID.nameUUIDFromBytes(input.getBytes(StandardCharsets.UTF_8)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L71) |
| ` public static UUID logisticsUuid(UUID bodyUuid, int relX, int relZ) ` | 末尾返回 ` interfaceUuid(bodyUuid, relX, relZ, TYPE_LOGISTICS) `<br>[调用处 WormholeStabilizerHandler.prepareLogisticsInterface](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L286) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L76) |
| ` public static UUID fluidUuid(UUID bodyUuid, int relX, int relZ) ` | 末尾返回 ` interfaceUuid(bodyUuid, relX, relZ, TYPE_FLUID) `<br>[调用处 WormholeStabilizerHandler.syncWormholeFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/WormholeStabilizerHandler.java#L377) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L80) |
| ` public boolean hasItemState(UUID uuid) ` | 末尾返回 ` this.itemStates.containsKey(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L86) |
| ` public List<UnlimitedItemStack> getOrCreateItemState(UUID uuid, int slotCount) ` | Get or create the canonical item state for a UUID. The returned list is mutable; modifications are reflected in the saved data. Call #setDirty() after structural changes.<br>末尾返回 ` state `<br>[调用处 WormholeInterfaceStates.getItemHandler](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L95) |
| ` public ItemStackHandler getItemHandler(UUID uuid, int slotCount) ` | All connected capabilities operate on this inventory, including within the same server tick. | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L113) |
| ` public List<FluidStack> getOrCreateFluidState(UUID uuid, int tankCount) ` | Get or create the canonical fluid state for a UUID. The returned list is mutable; modifications are reflected in the saved data. Call #setDirty() after structural changes.<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L147) |
| ` public List<FluidStack> getFluidState(UUID uuid) ` | 末尾返回 ` this.fluidStates.get(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L164) |
| ` public void clearItemState(UUID uuid) ` | 移除指定接口的规范物品状态。 当虫洞网络中最后一个节点解除巨构时，规范状态中的内容会先归还给本地接口， 之后必须移除这里的残留，避免未来同一黑洞身份重建虫洞时旧内容被当作权威而复活。<br>实现调用 ` this.itemHandlers.remove(uuid) `<br>实现调用 ` this.itemStates.remove(uuid) `<br>分支 ` (this.itemStates.remove(uuid) != null) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L174) |
| ` public void clearFluidState(UUID uuid) ` | 移除指定接口的规范流体状态，语义同 #clearItemState。<br>实现调用 ` this.fluidStates.remove(uuid) `<br>分支 ` (this.fluidStates.remove(uuid) != null) ` 内调用 ` setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L184) |
| ` @Override public void read(CompoundTag nbt, HolderLookup.Provider registries) ` | 实现调用 ` this.itemStates.clear() `<br>实现调用 ` this.itemHandlers.clear() `<br>实现调用 ` this.fluidStates.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L199) |
| ` @Override public CompoundTag save(CompoundTag nbt, HolderLookup.Provider registries) ` | 末尾返回 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L255) |

## WormholeNetwork

` public class WormholeNetwork extends BetterSavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L38)

Global saved data that tracks all wormhole-stabilized Celestial Forging Anvil positions across the entire server, enabling inter-dimensional wormhole connections. CFAs are grouped by the black hole's bodyUuid. Only black holes that originated from the same source (via singularity crystal snapshot) share the same UUID and can form wormholes between them.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static WormholeNetwork get() ` | 末尾返回 ` network `<br>[调用处 CelestialForgingAnvilPortalBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilPortalBlockEntity.java#L235) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L104) |
| ` public void register(UUID bodyUuid, Level level, BlockPos pos) ` | Register a CFA in the network under the given black hole identity UUID.<br>实现调用 ` level.dimension() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(dim) `<br>实现调用 ` OverworldLikeGenerationBootstrap.getManifest(serverLevel.getServer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L129) |
| ` public void unregister(Level level, BlockPos pos) ` | Unregister a CFA from the network.<br>实现调用 ` level.dimension() `<br>实现调用 ` this.reverseIndex.get(dim) `<br>实现调用 ` dimMap.remove(pos) `<br>[调用处 WormholeNetwork.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L149) |
| ` public void unregisterDimension(ResourceKey<Level> dimension) ` | Removes even unloaded nodes when their dimension is destroyed.<br>实现调用 ` this.reverseIndex.remove(dimension) `<br>实现调用 ` this.network.values() `<br>实现调用 ` entries.removeIf(entry -> entry.dimension.equals(dimension)) `<br>[调用处 WormholeNetwork.synchronizeOverworldLikeGeneration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L167) |
| ` public void setPortalSides(ResourceKey<Level> dim, BlockPos pos, Set<Cube323PartHalf> sides) ` | 实现调用 ` this.reverseIndex.getOrDefault(dim, Map.of()).get(pos) `<br>实现调用 ` this.reverseIndex.getOrDefault(dim, Map.of()) `<br>实现调用 ` Map.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L178) |
| ` public boolean hasPortalAt(ResourceKey<Level> dim, BlockPos pos, Cube323PartHalf side) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L195) |
| ` public boolean isRegistered(UUID bodyUuid, ResourceKey<Level> dimension, BlockPos pos) ` | 末尾返回 ` bodyUuid.equals(this.reverseIndex.getOrDefault(dimension, Map.of()).get(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L212) |
| ` public List<Entry> getConnected(UUID bodyUuid, ResourceKey<Level> selfDim, BlockPos selfPos) ` | Get all connected CFA entries (excluding self) for a given body UUID.<br>末尾返回 ` all.stream().filter(e -> !(e.dimension.equals(selfDim) && e.pos.equals(selfPos))).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L219) |
| ` @Override public void read(CompoundTag nbt, HolderLookup.Provider registries) ` | 实现调用 ` nbt.contains("overworldLikeGeneration") `<br>实现调用 ` nbt.getInt("overworldLikeGeneration") `<br>实现调用 ` this.network.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L232) |
| ` @Override public CompoundTag save(CompoundTag nbt, HolderLookup.Provider registries) ` | 末尾返回 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L256) |

## WormholeNetwork.Entry

` public record Entry(ResourceKey<Level> dimension, BlockPos pos, Set<Cube323PartHalf> portalSides) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44)

A single entry in the wormhole network, identifying one CFA.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResourceKey<Level> dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44) |
| ` public Set<Cube323PartHalf> portalSides() ` | 读取 record 分量 ` portalSides ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeNetwork.java#L44) |
