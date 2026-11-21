# dev.dubhe.anvilcraft.saved.setting



## PlayerSetting

` public record PlayerSetting(List<CategoryEntry> listed, List<ICategory> custom, StorageSetting storage, BalanceMode balanceMode) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<PlayerSetting> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L20) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PlayerSetting> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L37) |
| ` public PlayerSetting(List<CategoryEntry> listed, List<ICategory> custom, StorageSetting storage) ` | 执行 ` this(listed, custom, storage, BalanceMode.RESTOCK) `<br>[调用处 SettingClientStub.copy](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/rpc/SettingClientStub.java#L105) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L49) |
| ` public PlayerSetting(List<CategoryEntry> listed, List<ICategory> custom, StorageSetting storage, BalanceMode balanceMode) ` | [调用处 SettingServerStub.update](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/SettingServerStub.java#L121) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L53) |
| ` public PlayerSetting(HolderLookup.Provider registries) ` | 执行 ` this(PlayerSetting.initialize(registries), new ArrayList<>(), new StorageSetting()) `<br>[调用处 StorageScreen.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L469) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L60) |
| ` public void list(ICategory category) ` | 执行 ` this.listed.add(new CategoryEntry(category)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L74) |
| ` public CategoryEntry unlist(int index) ` | 末尾返回 ` this.listed.remove(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L78) |
| ` public void pinToTop(int index) ` | 执行 ` this.listed.addFirst(this.listed.remove(index)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L82) |
| ` public void addCustom(ICategory category) ` | 执行 ` this.custom.add(category) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L86) |
| ` public List<CategoryEntry> listed() ` | 读取 record 分量 ` listed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |
| ` public List<ICategory> custom() ` | 读取 record 分量 ` custom ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |
| ` public StorageSetting storage() ` | 读取 record 分量 ` storage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |
| ` public BalanceMode balanceMode() ` | 读取 record 分量 ` balanceMode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L19) |

## PlayerSettings

` public class PlayerSettings extends BetterSavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation ID ` | 初值 ` AnvilCraft.of("player_settings") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L21) |
| ` public static PlayerSettings get() ` | 末尾返回 ` BetterSavedData.get(PlayerSettings.ID.getPath(), PlayerSettings::new, PlayerSettings.CLIENT_COPY) `<br>[调用处 SettingClientStub.load](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/rpc/SettingClientStub.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L37) |
| ` public static PlayerSetting getSetting(HolderLookup.Provider registries, UUID id) ` | 末尾返回 ` PlayerSettings.get().settings.computeIfAbsent(id, ignored -> new PlayerSetting(registries)) `<br>[调用处 PlayerTickEventHandler.onPlayerLoggedIn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L42) |
| ` public static void clearClient() ` | 执行 ` PlayerSettings.CLIENT_COPY.settings.clear() `<br>[调用处 SettingClientStub.clearCache](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/rpc/SettingClientStub.java#L214) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L46) |
| ` @Override public void read(CompoundTag nbt, HolderLookup.Provider registries) ` | 实现调用 ` this.settings.clear() `<br>实现调用 ` nbt.contains("settings") `<br>分支 ` (nbt.contains("settings")) ` 内调用 ` RegistryOps.create(NbtOps.INSTANCE, registries) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L54) |
| ` @Override public CompoundTag save(CompoundTag nbt, HolderLookup.Provider registries) ` | 末尾返回 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L63) |
| ` public Map<UUID, PlayerSetting> getSettings() ` | 末尾返回 ` this.settings `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSettings.java#L19) |

## StorageSetting

` public class StorageSetting `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<StorageSetting> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L19) |
| ` public static final StreamCodec<ByteBuf, StorageSetting> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L40) |
| ` public StorageSetting() ` | 执行 ` this("", SearchMode.CLEAR, SortMode.COUNT, OrderMode.SEQUENTIAL, NbtDisplayMode.UNFOLD, false) `<br>[调用处 PlayerSetting.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L63) |
| ` public StorageSetting( String searchContent, SearchMode search, SortMode sort, OrderMode order, NbtDisplayMode nbtDisplay, boolean flipped ) ` | [调用处 SettingClientStub.copy](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/rpc/SettingClientStub.java#L108) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L67) |
| ` public String getSearchContent() ` | 末尾返回 ` this.searchContent `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public SearchMode getSearch() ` | 末尾返回 ` this.search `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public SortMode getSort() ` | 末尾返回 ` this.sort `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public OrderMode getOrder() ` | 末尾返回 ` this.order `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public NbtDisplayMode getNbtDisplay() ` | 末尾返回 ` this.nbtDisplay `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public boolean isFlipped() ` | 仓储界面翻转模式：左右两个功能区互换位置。<br>末尾返回 ` this.flipped `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public void setSearchContent(final String searchContent) ` | 执行 ` this.searchContent = searchContent `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public void setSearch(final SearchMode search) ` | 执行 ` this.search = search `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public void setSort(final SortMode sort) ` | 执行 ` this.sort = sort `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public void setOrder(final OrderMode order) ` | 执行 ` this.order = order `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public void setNbtDisplay(final NbtDisplayMode nbtDisplay) ` | 执行 ` this.nbtDisplay = nbtDisplay `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
| ` public void setFlipped(final boolean flipped) ` | 仓储界面翻转模式：左右两个功能区互换位置。<br>执行 ` this.flipped = flipped `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/StorageSetting.java#L16) |
