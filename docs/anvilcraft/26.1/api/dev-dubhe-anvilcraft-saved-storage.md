# dev.dubhe.anvilcraft.saved.storage



## BaseStorage

` public abstract class BaseStorage<T extends UnlimitedItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<BaseStorage<?>> CODEC ` | 初值 ` StorageType.CODEC.dispatchMap(StorageType::find, StorageType::codec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L34) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BaseStorage<?>> STREAM_CODEC ` | 初值 ` StorageType.STREAM_CODEC.<RegistryFriendlyByteBuf>cast().dispatch(StorageType::find, StorageType::streamCodec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L36) |
| ` public UnlimitedItemStacksResourceHandler getAvailableItems() ` | 提供包含已连接端口库存的访问接口，原始物品仍由各自容器保存。<br>` (!(this instanceof ShulkerContainerStorage \|\| this instanceof HyperdimensionStorage)) ` 成立时提前返回 ` this.items `<br>末尾返回 ` this.availableItems `<br>[调用处 BaseStorage.unlockCrafting](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L50) |
| ` public void setCrafting(CraftingStorage crafting) ` | 实现调用 ` Storages.get().setDirty() `<br>实现调用 ` Storages.get() `<br>[调用处 BaseStorage.copyCraftingFrom](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L60) |
| ` public void copyCraftingFrom(BaseStorage<?> source) ` | 实现调用 ` this.setRecipeBases(source.recipeBases) `<br>实现调用 ` this.setCrafting(source.crafting) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L65) |
| ` public boolean isCraftingUnlocked() ` | 末尾返回 ` this.recipeBases != null `<br>[调用处 BaseStorage.setCraftingUnlocked](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L70) |
| ` public void setRecipeBases(@Nullable List<ItemStack> bases) ` | 实现调用 ` bases.stream().map(ItemStack::copy).toList() `<br>实现调用 ` bases.stream().map(ItemStack::copy) `<br>实现调用 ` bases.stream() `<br>[调用处 BaseStorage.copyCraftingFrom](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L74) |
| ` public void setCraftingUnlocked(boolean unlocked) ` | 分支 ` (!unlocked) ` 内调用 ` this.setRecipeBases(null) `<br>分支 ` !(!unlocked) ` 内调用 ` this.isCraftingUnlocked() `<br>分支 ` (!this.isCraftingUnlocked()) ` 内调用 ` this.setRecipeBases(BaseStorage.legacyRecipeBases()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L79) |
| ` public boolean unlockCrafting() ` | ` (this.isCraftingUnlocked()) ` 成立时提前返回 ` true `<br>` (workbench < 0 \|\| stonecutter < 0) ` 成立时提前返回 ` false `<br>` (NeoForge.EVENT_BUS.post(event).isCanceled()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L95) |
| ` public UUID getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L32) |
| ` public T getItems() ` | 末尾返回 ` this.items `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L32) |
| ` public CraftingStorage getCrafting() ` | 末尾返回 ` this.crafting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L32) |
| ` @Nullable public List<ItemStack> getRecipeBases() ` | 末尾返回 ` this.recipeBases `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L32) |

## CraftingStorage

` public record CraftingStorage(ItemStack stonecutterInput, List<ItemStack> craftingInput, int stonecutterSelected, boolean lastOpened, boolean autoFill, boolean toStorage) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L24)

仓储合成面板的持久数据：① 切石机输入（单槽）、② 合成输入（9 宫格）、切石机配方选择， 以及上次关闭界面时是否为合成模式（lastOpened）。 世界内打开时存于 BaseStorage 的 crafting 字段，终端打开时存于终端物品的 anvilcraft:crafting 数据组件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CRAFTING_GRID_SIZE ` | 初值 ` 9 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L32) |
| ` public static final CraftingStorage EMPTY ` | 初值 ` new CraftingStorage( ItemStack.EMPTY, CraftingStorage.emptyGrid(), 0, false, false, false ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L33) |
| ` public static final MapCodec<CraftingStorage> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L41) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CraftingStorage> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L50) |
| ` @Override public boolean equals(@Nullable Object object) ` | 实现调用 ` ItemStack.matches(this.stonecutterInput, storage.stonecutterInput) `<br>实现调用 ` ItemStack.listMatches(this.craftingInput, storage.craftingInput) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L66) |
| ` @Override public int hashCode() ` | 实现调用 ` ItemStack.hashItemAndComponents(this.stonecutterInput) `<br>实现调用 ` this.stonecutterInput.getCount() `<br>实现调用 ` ItemStack.hashStackList(this.craftingInput) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L77) |
| ` public CraftingStorage withStonecutterInput(ItemStack input) ` | ① 切石机输入。<br>末尾返回 ` new CraftingStorage(input, this.craftingInput, this.stonecutterSelected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L122) |
| ` public CraftingStorage withCraftingInput(List<ItemStack> input) ` | ② 合成 9 宫格（整体替换）。<br>末尾返回 ` new CraftingStorage(this.stonecutterInput, input, this.stonecutterSelected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L127) |
| ` public CraftingStorage withCraftingSlot(int slot, ItemStack stack) ` | ② 指定槽位替换。<br>末尾返回 ` new CraftingStorage(this.stonecutterInput, grid, this.stonecutterSelected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L132) |
| ` public CraftingStorage withStonecutterSelected(int selected) ` | 切石机选中配方索引。<br>末尾返回 ` new CraftingStorage(this.stonecutterInput, this.craftingInput, selected, this.lastOpened, this.autoFill, this.toStorage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L139) |
| ` public CraftingStorage withLastOpened(boolean opened) ` | 上次关闭界面时是否为合成模式。<br>末尾返回 ` new CraftingStorage( this.stonecutterInput, this.craftingInput, this.stonecutterSelected, opened, this.autoFill, this.toStorage ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L144) |
| ` public CraftingStorage withAutoFill(boolean autoFill) ` | 自动补料选项。<br>末尾返回 ` new CraftingStorage( this.stonecutterInput, this.craftingInput, this.stonecutterSelected, this.lastOpened, autoFill, this.toStorage ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L156) |
| ` public CraftingStorage withToStorage(boolean toStorage) ` | 批量合成的产物去向。<br>末尾返回 ` new CraftingStorage( this.stonecutterInput, this.craftingInput, this.stonecutterSelected, this.lastOpened, this.autoFill, toStorage ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L168) |
| ` public CraftingStorage(ItemStack stonecutterInput, List<ItemStack> craftingInput, int stonecutterSelected, boolean lastOpened, boolean autoFill, boolean toStorage) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L24) |
| ` public ItemStack stonecutterInput() ` | 读取 record 分量 ` stonecutterInput ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L25) |
| ` public List<ItemStack> craftingInput() ` | 读取 record 分量 ` craftingInput ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L26) |
| ` public int stonecutterSelected() ` | 读取 record 分量 ` stonecutterSelected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L27) |
| ` public boolean lastOpened() ` | 读取 record 分量 ` lastOpened ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L28) |
| ` public boolean autoFill() ` | 读取 record 分量 ` autoFill ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L29) |
| ` public boolean toStorage() ` | 读取 record 分量 ` toStorage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L30) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L24) |

## CrateStorage

` public class CrateStorage extends BaseStorage<OverflowDisposalItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CrateStorage> CODEC ` | 由 ` BaseStorage.withCrafting ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CrateStorage> STREAM_CODEC ` | 初值 ` BaseStorage.withCrafting(StreamCodec.composite( UUIDUtil.STREAM_CODEC, CrateStorage::getId, SpaceSizeItemStacksResourceHandler.STREAM_CODEC, CrateStorage::getItems, CrateStorage::of )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L24) |
| ` public CrateStorage(UUID id) ` | 执行 ` super(id) `<br>[调用处 StorageType.newInstance](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L64) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CrateStorage.java#L33) |

## HyperdimensionStorage

` public class HyperdimensionStorage extends BaseStorage<UnlimitedItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<HyperdimensionStorage> CODEC ` | 由 ` BaseStorage.withCrafting ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L17) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HyperdimensionStorage> STREAM_CODEC ` | 由 ` BaseStorage.withCrafting ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L25) |
| ` public HyperdimensionStorage(UUID id) ` | 执行 ` super(id) `<br>[调用处 StorageType.newInstance](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/HyperdimensionStorage.java#L34) |

## LargeCrateStorage

` public class LargeCrateStorage extends BaseStorage<SpaceSizeItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<LargeCrateStorage> CODEC ` | 由 ` BaseStorage.withCrafting ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, LargeCrateStorage> STREAM_CODEC ` | 初值 ` BaseStorage.withCrafting(StreamCodec.composite( UUIDUtil.STREAM_CODEC, LargeCrateStorage::getId, SpaceSizeItemStacksResourceHandler.STREAM_CODEC, LargeCrateStorage::getItems, LargeCrateStorage::of )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L23) |
| ` public LargeCrateStorage(UUID id) ` | 执行 ` super(id) `<br>[调用处 CrateBlock.mergeIntoLargeCrate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L183) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/LargeCrateStorage.java#L32) |

## ShulkerContainerStorage

` public class ShulkerContainerStorage extends BaseStorage<TypeLimitItemStacksResourceHandler> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int DEFAULT_TYPE_LIMIT ` | 初值 ` 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L17) |
| ` public static final MapCodec<ShulkerContainerStorage> CODEC ` | 由 ` BaseStorage.withCrafting ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L18) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ShulkerContainerStorage> STREAM_CODEC ` | 由 ` BaseStorage.withCrafting ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L26) |
| ` public ShulkerContainerStorage(UUID id) ` | 执行 ` super(id) `<br>[调用处 StorageType.newInstance](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/ShulkerContainerStorage.java#L35) |

## StorageType

` public enum StorageType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` CRATE ` | 声明于枚举 ` StorageType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L15) |
| ` LARGE_CRATE ` | 声明于枚举 ` StorageType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L16) |
| ` SHULKER_CONTAINER ` | 声明于枚举 ` StorageType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L17) |
| ` HYPERDIMENSION ` | 声明于枚举 ` StorageType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L18) |
| ` public static final Codec<StorageType> CODEC ` | 初值 ` StringRepresentable.fromEnum(StorageType::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L21) |
| ` public static final StreamCodec<ByteBuf, StorageType> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(StorageType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L22) |
| ` public static StorageType find(Class<? extends BaseStorage<?>> clazz) ` | 实现调用 ` clazz.getSimpleName() `<br>实现调用 ` clazz.getTypeName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L24) |
| ` public static StorageType find(BaseStorage<?> storage) ` | 返回 ` StorageType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L34) |
| ` public MapCodec<? extends BaseStorage<?>> codec() ` | 返回 ` MapCodec<? extends BaseStorage<?>> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L44) |
| ` public StreamCodec<RegistryFriendlyByteBuf, ? extends BaseStorage<?>> streamCodec() ` | 返回 ` StreamCodec<RegistryFriendlyByteBuf, ? extends BaseStorage<?>> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L53) |
| ` public BaseStorage<?> newInstance(UUID id) ` | 返回 ` BaseStorage<?> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L62) |
| ` public Class<? extends BaseStorage<?>> clazz() ` | 返回 ` Class<? extends BaseStorage<?>> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L71) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L80) |
| ` public static StorageType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 StorageCommand.parseType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L193) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L14) |
| ` public static StorageType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/StorageType.java#L14) |

## Storages

` public class Storages extends SavedData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier ID ` | 初值 ` AnvilCraft.of("storages") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L26) |
| ` public static final MapCodec<Storages> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L27) |
| ` public static final SavedDataType<Storages> TYPE ` | 初值 ` new SavedDataType<>(Storages.ID, Storages::new, Storages.CODEC.codec()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L36) |
| ` public static final Storages CLIENT_COPY ` | 初值 ` new Storages() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L37) |
| ` public static Storages get() ` | ` (!Util.isServer()) ` 成立时提前返回 ` Storages.CLIENT_COPY `<br>` (server == null) ` 成立时抛出 ` new IllegalStateException("Cannot access Storages when the server was not initialized") `<br>末尾返回 ` storage.computeIfAbsent(Storages.TYPE) `<br>[调用处 Upgrade2HyperdimensionStationBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L58) |
| ` public Optional<BaseStorage<?>> get(UUID id) ` | 末尾返回 ` Optional.ofNullable(this.storages.get(id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L73) |
| ` public <T extends BaseStorage<?>> Optional<T> get(UUID id, Class<T> clazz) ` | 末尾返回 ` Util.castSafely(this.storages.get(id), clazz) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L77) |
| ` public void put(BaseStorage<?> storage) ` | 实现调用 ` this.storages.put(storage.getId(), storage) `<br>实现调用 ` storage.getId() `<br>实现调用 ` this.setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L81) |
| ` public void remove(UUID id) ` | 实现调用 ` this.storages.remove(id) `<br>分支 ` (this.storages.remove(id) != null) ` 内调用 ` this.setDirty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L86) |
| ` public <T extends BaseStorage<?>> T getOrCreate(UUID id, Class<T> clazz) ` | 实现调用 ` this.storages.get(id) `<br>分支 ` (storage == null) ` 内调用 ` Util.cast(StorageType.find(clazz).newInstance(id)) `<br>分支 ` (storage == null) ` 内调用 ` StorageType.find(clazz).newInstance(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L92) |
| ` public Map<UUID, BaseStorage<?>> getStorages() ` | 末尾返回 ` this.storages `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L24) |
| ` public RecoverStation<BaseStorage<?>> getRecover() ` | 末尾返回 ` this.recover `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L24) |
