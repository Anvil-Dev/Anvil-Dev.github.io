# dev.dubhe.anvilcraft.saved.storage



## BaseStorage

` public abstract class BaseStorage<T extends UnlimitedItemStacksResourceHandler> implements INBTSerializable<CompoundTag> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String TYPE_KEY ` | 初值 ` "type" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L37) |
| ` public static final String CRAFTING_KEY ` | 初值 ` "crafting" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L38) |
| ` public UnlimitedItemStacksResourceHandler getAvailableItems() ` | 返回包含已连接端口内部库存的存取视图，持久化仍使用原始物品处理器。<br>` (!(this instanceof ShulkerContainerStorage) && !(this instanceof HyperdimensionStorage)) ` 成立时提前返回 ` this.items `<br>末尾返回 ` this.availableItems `<br>[调用处 BaseStorage.unlockCrafting](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L56) |
| ` public boolean unlockCrafting() ` | 解锁合成功能：消耗储物内的一个玩家工作台与一个切石机，并记录消耗的物品。 扣除前发出 StorageUnlockCraftingEvent，其它模组可追加额外消耗槽位或取消事件。 每个消耗槽位扣除一个物品，槽位下标非法或槽位为空时解锁失败且不消耗任何物品。<br>返回 解锁成功或此前已解锁时为 true<br>` (this.recipeBases != null) ` 成立时提前返回 ` true `<br>` (workbench < 0 \|\| stonecutter < 0) ` 成立时提前返回 ` false `<br>` (NeoForge.EVENT_BUS.post(event).isCanceled()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L74) |
| ` @Override public CompoundTag serializeNBT(HolderLookup.Provider registries) ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L134) |
| ` @Override public void deserializeNBT(HolderLookup.Provider provider, CompoundTag tag) ` | 实现调用 ` BaseStorage.readRecipeBases(provider, tag) `<br>实现调用 ` tag.contains("items", Tag.TAG_COMPOUND) `<br>分支 ` (tag.contains("items", Tag.TAG_COMPOUND)) ` 内调用 ` this.items.deserializeNBT(provider, tag.getCompound("items")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L154) |
| ` public abstract Holder<IStorageType<?>> getTypeHolder() ` | [调用处 BaseStorage.getType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L196) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L193) |
| ` public IStorageType<?> getType() ` | 末尾返回 ` this.getTypeHolder().value() `<br>[调用处 BaseStorage.serializeNBT](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L138) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L195) |
| ` public static Map<UUID, BaseStorage<?>> loadFromNbt(String key, CompoundTag tag, HolderLookup.Provider registries) ` | 末尾返回 ` storages ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L199) |
| ` public static Map<UUID, BaseStorage<?>> loadFromNbt(CompoundTag tag, HolderLookup.Provider registries) ` | 末尾返回 ` storages `<br>[调用处 BaseStorage.loadFromNbt](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L202) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L209) |
| ` public static @Nullable BaseStorage<?> loadFromNbt(UUID id, CompoundTag tag, HolderLookup.Provider registries) ` | 实现调用 ` registries.createSerializationContext(NbtOps.INSTANCE) `<br>实现调用 ` tag.get(BaseStorage.TYPE_KEY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L223) |
| ` public UUID getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` public T getItems() ` | 末尾返回 ` this.items `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` public CraftingStorage getCrafting() ` | 末尾返回 ` this.crafting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` @Nullable public List<ItemStack> getRecipeBases() ` | 解锁合成功能时消耗的物品，按消耗顺序排列。 为 null 表示尚未解锁；空列表表示已解锁但没有消耗品记录：合并时已退还成实物的 消耗品不再记录，以免破坏方块时重复退还。<br>末尾返回 ` this.recipeBases `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` public void setAvailableItems(@Nullable final LinkedStorageItems availableItems) ` | 执行 ` this.availableItems = availableItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` public void setCrafting(final CraftingStorage crafting) ` | 执行 ` this.crafting = crafting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` public void setRecipeBases(@Nullable final List<ItemStack> recipeBases) ` | 解锁合成功能时消耗的物品，按消耗顺序排列。 为 null 表示尚未解锁；空列表表示已解锁但没有消耗品记录：合并时已退还成实物的 消耗品不再记录，以免破坏方块时重复退还。<br>执行 ` this.recipeBases = recipeBases `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |

## CraftingStorage

` public record CraftingStorage(ItemStack stonecutterInput, List<ItemStack> craftingInput, int stonecutterSelected, boolean lastOpened, boolean autoFill, boolean toStorage) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L24)

仓储合成面板的持久数据：① 切石机输入（单槽）、② 合成输入（9 宫格）、切石机配方选择， 以及上次关闭界面时是否为合成模式（lastOpened）。 世界内打开时存于 BaseStorage 的 crafting 字段，终端打开时存于终端物品的 anvilcraft:crafting 数据组件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CRAFTING_GRID_SIZE ` | 初值 ` 9 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L32) |
| ` public static final CraftingStorage EMPTY ` | 初值 ` new CraftingStorage( ItemStack.EMPTY, CraftingStorage.emptyGrid(), 0, false, false, false ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L33) |
| ` public static final MapCodec<CraftingStorage> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L41) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CraftingStorage> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L50) |
| ` @Override public boolean equals(@Nullable Object object) ` | 实现调用 ` ItemStack.matches(this.stonecutterInput, storage.stonecutterInput) `<br>实现调用 ` ItemStack.listMatches(this.craftingInput, storage.craftingInput) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L66) |
| ` @Override public int hashCode() ` | 实现调用 ` ItemStack.hashItemAndComponents(this.stonecutterInput) `<br>实现调用 ` this.stonecutterInput.getCount() `<br>实现调用 ` ItemStack.hashStackList(this.craftingInput) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L77) |
| ` public CraftingStorage withStonecutterInput(ItemStack input) ` | ① 切石机输入。<br>末尾返回 ` new CraftingStorage(input, this.craftingInput, this.stonecutterSelected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L122) |
| ` public CraftingStorage withCraftingInput(List<ItemStack> input) ` | ② 合成 9 宫格（整体替换）。<br>末尾返回 ` new CraftingStorage(this.stonecutterInput, input, this.stonecutterSelected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L127) |
| ` public CraftingStorage withCraftingSlot(int slot, ItemStack stack) ` | ② 指定槽位替换。<br>末尾返回 ` new CraftingStorage(this.stonecutterInput, grid, this.stonecutterSelected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L132) |
| ` public CraftingStorage withStonecutterSelected(int selected) ` | 切石机选中配方索引。<br>末尾返回 ` new CraftingStorage(this.stonecutterInput, this.craftingInput, selected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L139) |
| ` public CraftingStorage withLastOpened(boolean opened) ` | 上次关闭界面时是否为合成模式。<br>末尾返回 ` new CraftingStorage( this.stonecutterInput, this.craftingInput, this.stonecutterSelected, opened, this.autoFill, this.toStorage ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L144) |
| ` public CraftingStorage withAutoFill(boolean autoFill) ` | Auto-refill flag.<br>末尾返回 ` new CraftingStorage( this.stonecutterInput, this.craftingInput, this.stonecutterSelected, this.lastOpened, autoFill, this.toStorage ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L156) |
| ` public CraftingStorage withToStorage(boolean toStorage) ` | Shift-craft destination flag.<br>末尾返回 ` new CraftingStorage( this.stonecutterInput, this.craftingInput, this.stonecutterSelected, this.lastOpened, this.autoFill, toStorage ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L168) |
| ` public CraftingStorage(ItemStack stonecutterInput, List<ItemStack> craftingInput, int stonecutterSelected, boolean lastOpened, boolean autoFill, boolean toStorage) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L24) |
| ` public ItemStack stonecutterInput() ` | 读取 record 分量 ` stonecutterInput ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L25) |
| ` public List<ItemStack> craftingInput() ` | 读取 record 分量 ` craftingInput ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L26) |
| ` public int stonecutterSelected() ` | 读取 record 分量 ` stonecutterSelected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L27) |
| ` public boolean lastOpened() ` | 读取 record 分量 ` lastOpened ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L28) |
| ` public boolean autoFill() ` | 读取 record 分量 ` autoFill ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L29) |
| ` public boolean toStorage() ` | 读取 record 分量 ` toStorage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L30) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L24) |

## CrateStorage

` public class CrateStorage extends BaseStorage<OverflowDisposalItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L20)

板条箱存储。物品处理器为 OverflowDisposalItemStacksResourceHandler， 其 dispose 标记是运行时瞬态值（不写入 NBT），由放置的板条箱方块状态驱动。 约定：所有拿到本存储 handler 的外部插入路径（能力查询、RPC、存储端口等）在 使用前必须先调用对应 CrateBlockEntity.refreshDispose() 同步 dispose 标记； 新增插入路径时不得直接 Storages.get().get(id).getItems() 后写入， 否则会拿到残留 dispose=false 的 handler（新创建存储默认 false）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrateStorage(UUID id) ` | 执行 ` super(id) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L21) |
| ` @Override public Holder<IStorageType<?>> getTypeHolder() ` | 末尾返回 ` ModStorageTypes.CRATE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L37) |

## HyperdimensionStorage

` public class HyperdimensionStorage extends BaseStorage<UnlimitedItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionStorage(UUID id) ` | 执行 ` super(id) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L15) |
| ` @Override public Holder<IStorageType<?>> getTypeHolder() ` | 末尾返回 ` ModStorageTypes.HYPERDIMENSION ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L34) |

## IStorageType

` public interface IStorageType<T extends BaseStorage<?>> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<IStorageType<?>> CODEC ` | 由 ` Codec.lazyInitialized ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L20) |
| ` Codec<Holder<IStorageType<?>>> HOLDER_CODEC ` | 由 ` Codec.lazyInitialized ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L27) |
| ` StreamCodec<RegistryFriendlyByteBuf, IStorageType<?>> STREAM_CODEC ` | 初值 ` ByteBufCodecs.registry(ModRegistryKeys.STORAGE_TYPE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L34) |
| ` StreamCodec<RegistryFriendlyByteBuf, Holder<IStorageType<?>>> HOLDER_STREAM_CODEC ` | 初值 ` ByteBufCodecs.holderRegistry( ModRegistryKeys.STORAGE_TYPE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L35) |
| ` Map<Class<? extends BaseStorage<?>>, Holder<IStorageType<?>>> CLASS_MAP ` | 初值 ` new HashMap<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L38) |
| ` static <T extends BaseStorage<?>> Holder<IStorageType<T>> find(Class<T> clazz) ` | 末尾返回 ` Util.cast(IStorageType.CLASS_MAP.get(clazz)) `<br>[调用处 Storages.getOrCreate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L40) |
| ` T newInstance(UUID id) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L44) |
| ` Class<T> clazz() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L46) |

## LargeCrateStorage

` public class LargeCrateStorage extends BaseStorage<SpaceSizeItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCrateStorage(UUID id) ` | 执行 ` super(id) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L12) |
| ` @Override public Holder<IStorageType<?>> getTypeHolder() ` | 末尾返回 ` ModStorageTypes.LARGE_CRATE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L26) |

## ShulkerContainerStorage

` public class ShulkerContainerStorage extends BaseStorage<TypeLimitItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int DEFAULT_TYPE_LIMIT ` | 初值 ` 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L14) |
| ` public ShulkerContainerStorage(UUID id) ` | 执行 ` super(id) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L16) |
| ` @Override public Holder<IStorageType<?>> getTypeHolder() ` | 末尾返回 ` ModStorageTypes.SHULKER_CONTAINER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L35) |

## Storages

` public class Storages extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation ID ` | 初值 ` AnvilCraft.of("storages") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L25) |
| ` public static final SavedData.Factory<Storages> TYPE ` | 初值 ` new SavedData.Factory<>(Storages::new, Storages::load) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L26) |
| ` public static final Storages CLIENT_COPY ` | 初值 ` new Storages() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L27) |
| ` public static Storages get() ` | ` (!Util.isServer()) ` 成立时提前返回 ` Storages.CLIENT_COPY `<br>` (inProgress != null) ` 成立时提前返回 ` inProgress `<br>` (server == null) ` 成立时抛出 ` new IllegalStateException("Cannot access Storages when the server was not initialized") `<br>末尾返回 ` storage.computeIfAbsent(Storages.TYPE, "storages") `<br>[调用处 Upgrade2HyperdimensionStationBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L41) |
| ` public Optional<BaseStorage<?>> get(UUID id) ` | 末尾返回 ` Optional.ofNullable(this.storages.get(id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L63) |
| ` public <T extends BaseStorage<?>> Optional<T> get(UUID id, Class<T> clazz) ` | ` (clazz.isInstance(storage)) ` 成立时提前返回 ` Optional.of(clazz.cast(storage)) `<br>末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L67) |
| ` @Override public CompoundTag save(CompoundTag tag, HolderLookup.Provider registries) ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L75) |
| ` public static Storages load(CompoundTag tag, HolderLookup.Provider registries) ` | 实现调用 ` RecoverStation.create(AnvilCraft.CONFIG.machines.storageRecoverMaxSize) `<br>实现调用 ` tag.contains("recover", Tag.TAG_COMPOUND) `<br>分支 ` (tag.contains("recover", Tag.TAG_COMPOUND)) ` 内调用 ` tag.getCompound("recover") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L86) |
| ` public void put(BaseStorage<?> storage) ` | 实现调用 ` this.storages.put(storage.getId(), storage) `<br>实现调用 ` storage.getId() `<br>实现调用 ` this.setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L100) |
| ` public void remove(UUID id) ` | 实现调用 ` this.storages.remove(id) `<br>分支 ` (this.storages.remove(id) != null) ` 内调用 ` this.setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L105) |
| ` public <T extends BaseStorage<?>> T getOrCreate(UUID id, Class<T> clazz) ` | ` (clazz.isInstance(storage)) ` 成立时提前返回 ` clazz.cast(storage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L111) |
| ` public Map<UUID, BaseStorage<?>> getStorages() ` | 末尾返回 ` this.storages `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L23) |
| ` public RecoverStation<BaseStorage<?>> getRecover() ` | 末尾返回 ` this.recover `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L23) |
