# dev.dubhe.anvilcraft.block.entity.storage



## CrateBlockEntity

` public class CrateBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L17)

板条箱方块实体。相邻虚空物质时方块进入溢出销毁模式（dispose 方块状态）， 方块实体与存储保持不变，仅存储的处理器切换为销毁溢出物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrateBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, ModStorageTypes.CRATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L18) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` Objects.requireNonNull(this.level).isClientSide() `<br>实现调用 ` Objects.requireNonNull(this.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L22) |
| ` public void refreshDispose() ` | 按当前相邻虚空物质重算 dispose 方块状态（幂等，状态变化时内部会再次调用本方法）， 再把状态同步到存储处理器，使 GUI / RPC / 管道各插入路径都按当前模式处理溢出物品。 各外部入口（能力查询、存储端口、RPC getView）在拿到 handler 前必须调用本方法； 先重算再同步可避免 blockstate 陈旧（如新放置的存储尚未经块事件同步）时 把旧 dispose 值写进处理器。<br>实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.getBlockState().getBlock() `<br>实现调用 ` this.getBlockState() `<br>[调用处 CrateBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L40) |

## HyperdimensionStorageStationBlockEntity

` public class HyperdimensionStorageStationBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/HyperdimensionStorageStationBlockEntity.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionStorageStationBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, ModStorageTypes.HYPERDIMENSION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/HyperdimensionStorageStationBlockEntity.java#L9) |

## LargeCrateBlockEntity

` public class LargeCrateBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/LargeCrateBlockEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCrateBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, ModStorageTypes.LARGE_CRATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/LargeCrateBlockEntity.java#L12) |
| ` @Override public void refreshComparatorSignal() ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` this.getBlockState() `<br>实现调用 ` state.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/LargeCrateBlockEntity.java#L16) |

## ShulkerContainerBlockEntity

` public class ShulkerContainerBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShulkerContainerBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, ModStorageTypes.SHULKER_CONTAINER) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L42) |
| ` public boolean isEmpty() ` | ` (this.getTotalCount() != 0) ` 成立时提前返回 ` false `<br>` (id == null) ` 成立时提前返回 ` true `<br>末尾返回 ` Storages.get().get(this.getId(), ShulkerContainerStorage.class) .map(storage -> storage.getItems().getTypeLimit() == ShulkerContainerStorage.DEFAULT_TYPE_LIMIT) .orElse(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L46) |
| ` public void setOpen(ServerPlayer player, boolean opened) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (opened) ` 内调用 ` this.openers.add(player.getUUID()) `<br>分支 ` (opened) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L60) |
| ` public void recheckOpeners() ` | 实现调用 ` this.openersCounter.recheckOpeners(this.level, this.getBlockPos(), this.getBlockState()) `<br>实现调用 ` this.getBlockPos() `<br>实现调用 ` this.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L78) |

## StorageBlockEntity

` public class StorageBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state, Holder<IStorageType<?>> storageType) ` | 实现调用 ` super(type, pos, state) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L41) |
| ` public void setId(UUID id) ` | 实现调用 ` this.invalidateItemPorts(this.id) `<br>实现调用 ` this.setChanged() `<br>实现调用 ` TerminalSourceManager.registerIfApplicable(this) `<br>[调用处 StorageBlockEntity.applyImplicitComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L147) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L46) |
| ` public void clearId() ` | 实现调用 ` this.invalidateItemPorts(previousId) `<br>实现调用 ` this.setChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L61) |
| ` public Holder<IStorageType<?>> getStorageTypeHolder() ` | 末尾返回 ` this.storageType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L68) |
| ` public IStorageType<?> getStorageType() ` | 末尾返回 ` this.storageType.value() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L72) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` StorageComparatorManager.registerIfApplicable(this) `<br>实现调用 ` this.invalidateItemPorts(this.id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L102) |
| ` @Override public CompoundTag getUpdateTag(HolderLookup.Provider registries) ` | 构造区块发往客户端时附带的方块实体同步数据。<br>末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L109) |
| ` @Override public Packet<ClientGamePacketListener> getUpdatePacket() ` | 末尾返回 ` ClientboundBlockEntityDataPacket.create(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L118) |
| ` @Override public void onChunkUnloaded() ` | 实现调用 ` super.onChunkUnloaded() `<br>实现调用 ` TerminalSourceManager.unregisterIfApplicable(this) `<br>实现调用 ` StorageComparatorManager.unregisterIfApplicable(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L123) |
| ` @Override public void setRemoved() ` | 实现调用 ` super.setRemoved() `<br>实现调用 ` TerminalSourceManager.unregisterIfApplicable(this) `<br>实现调用 ` StorageComparatorManager.unregisterIfApplicable(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L131) |
| ` public int getComparatorSignal() ` | 计算比较器输出信号强度：按存储容量占用率换算为 0-15。 板条箱与大型板条箱的处理器都是 SpaceSizeItemStacksResourceHandler， 信号与界面容量条一致（空箱 0、满箱 15）。<br>` (this.level == null \|\| this.level.isClientSide() \|\| this.id == null) ` 成立时提前返回 ` 0 `<br>` (storage == null) ` 成立时提前返回 ` 0 `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L162) |
| ` public void refreshComparatorSignal() ` | 存储内容变化后刷新相邻比较器输出信号。<br>实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.getBlockState() `<br>实现调用 ` this.level.updateNeighbourForOutputSignal(this.getBlockPos(), state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L180) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public boolean isCraftingUnlocked() ` | 末尾返回 ` this.id != null && Storages.get().get(this.id).map(storage -> storage.getRecipeBases() != null).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L188) |
| ` public long getTotalCount() ` | ` (this.id == null) ` 成立时提前返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L195) |
| ` public void dropContents(Level level, BlockPos pos) ` | 实现调用 ` level.isClientSide() `<br>分支 ` (this.id != null) ` 内调用 ` Storages.get().get(this.id) `<br>分支 ` (this.id != null) ` 内调用 ` Storages.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L211) |
| ` public static void applyPickStorageId( ItemStack stack, LevelReader level, BlockPos pos, BlockState state, Holder<IStorageType<?>> type ) ` | 中键复制仓储方块时，把（多方块）主方块的存储 ID 写入复制物品的 STORAGE 组件。 仅在客户端且按住 Ctrl 时生效；普通中键保持原样（不带存储 ID）。<br>参数 ` stack ` 复制出的物品<br>参数 ` level ` 所在世界<br>参数 ` pos ` 被点击的方块位置（可能是多方块的 part）<br>参数 ` state ` 被点击的方块状态<br>参数 ` type ` 该仓储方块的存储类型<br>实现调用 ` level.isClientSide() `<br>实现调用 ` Screen.hasControlDown() `<br>实现调用 ` state.getBlock() `<br>[调用处 CrateBlock.getCloneItemStack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L238) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L249) |
| ` @Nullable public UUID getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L36) |
