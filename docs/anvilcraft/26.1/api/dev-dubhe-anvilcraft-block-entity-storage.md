# dev.dubhe.anvilcraft.block.entity.storage



## CrateBlockEntity

` public class CrateBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrateBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, StorageType.CRATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L12) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` this.refreshDispose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L16) |
| ` public void refreshDispose() ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.getBlockState().getBlock() `<br>实现调用 ` this.getBlockState() `<br>[调用处 CrateBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L22) |

## HyperdimensionStorageStationBlockEntity

` public class HyperdimensionStorageStationBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/HyperdimensionStorageStationBlockEntity.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionStorageStationBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, StorageType.HYPERDIMENSION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/HyperdimensionStorageStationBlockEntity.java#L9) |

## LargeCrateBlockEntity

` public class LargeCrateBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/LargeCrateBlockEntity.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCrateBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, StorageType.LARGE_CRATE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/LargeCrateBlockEntity.java#L11) |
| ` @Override public void refreshComparatorSignal() ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.getBlockState() `<br>实现调用 ` state.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/LargeCrateBlockEntity.java#L15) |

## ShulkerContainerBlockEntity

` public class ShulkerContainerBlockEntity extends StorageBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShulkerContainerBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state, StorageType.SHULKER_CONTAINER) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L43) |
| ` @Override public boolean isEmpty() ` | ` (this.getTotalCount() != 0) ` 成立时提前返回 ` false `<br>` (this.getId() == null) ` 成立时提前返回 ` true `<br>末尾返回 ` Storages.get().get(this.getId(), ShulkerContainerStorage.class) .map(storage -> storage.getItems().getTypeLimit() == ShulkerContainerStorage.DEFAULT_TYPE_LIMIT) .orElse(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L47) |
| ` public void setOpen(ServerPlayer player, boolean opened) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (opened) ` 内调用 ` this.openers.add(player.getUUID()) `<br>分支 ` (opened) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L57) |
| ` public void recheckOpeners() ` | 实现调用 ` this.openersCounter.getEntitiesWithContainerOpen(this.level, this.worldPosition) `<br>实现调用 ` opener.getLivingEntity() `<br>分支 ` (opener.getLivingEntity() instanceof Player player) ` 内调用 ` nearbyOpeners.add(player.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/ShulkerContainerBlockEntity.java#L76) |

## StorageBlockEntity

` public class StorageBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state, StorageType storageType) ` | 实现调用 ` super(type, pos, state) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L47) |
| ` public void setId(UUID id) ` | 实现调用 ` this.invalidateItemPorts(this.id) `<br>实现调用 ` this.setChanged() `<br>实现调用 ` TerminalSourceManager.registerIfApplicable(this) `<br>[调用处 StorageBlockEntity.applyImplicitComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L153) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L52) |
| ` public void clearId() ` | 实现调用 ` TerminalSourceManager.unregisterIfApplicable(this) `<br>实现调用 ` StorageComparatorManager.unregisterIfApplicable(this) `<br>实现调用 ` this.invalidateItemPorts(previousId) `<br>[调用处 StorageBlockEntity.playerWillDestroy](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L234) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L67) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` TerminalSourceManager.registerIfApplicable(this) `<br>实现调用 ` StorageComparatorManager.registerIfApplicable(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L103) |
| ` @Override public void onChunkUnloaded() ` | 实现调用 ` TerminalSourceManager.unregisterIfApplicable(this) `<br>实现调用 ` StorageComparatorManager.unregisterIfApplicable(this) `<br>实现调用 ` super.onChunkUnloaded() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L111) |
| ` @Override public void setRemoved() ` | 实现调用 ` TerminalSourceManager.unregisterIfApplicable(this) `<br>实现调用 ` StorageComparatorManager.unregisterIfApplicable(this) `<br>实现调用 ` super.setRemoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L119) |
| ` @Override public void onDataPacket(Connection net, ValueInput input) ` | 执行 ` input.read("storage_id", UUIDUtil.CODEC).ifPresent(id -> this.id = id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L127) |
| ` @Override public CompoundTag getUpdateTag(HolderLookup.Provider registries) ` | 构造区块发往客户端时附带的方块实体同步数据。<br>末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L133) |
| ` @Override public Packet<ClientGamePacketListener> getUpdatePacket() ` | 末尾返回 ` ClientboundBlockEntityDataPacket.create(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L142) |
| ` public int getComparatorSignal() ` | ` (this.level == null \|\| this.level.isClientSide() \|\| this.id == null) ` 成立时提前返回 ` 0 `<br>` (storage == null \|\| !(storage.getItems() instanceof SpaceSizeItemStacksResourceHandler items)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` (int) (fullness * 14) + (fullness > 0 ? 1 : 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L161) |
| ` public void refreshComparatorSignal() ` | 实现调用 ` this.level.isClientSide() `<br>分支 ` (this.level != null && !this.level.isClientSide()) ` 内调用 ` this.level.updateNeighbourForOutputSignal(this.getBlockPos(), this.getBlockState().getBlock()) `<br>分支 ` (this.level != null && !this.level.isClientSide()) ` 内调用 ` this.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L171) |
| ` public static void applyPickStorageId( ItemStack stack, LevelReader level, BlockPos pos, BlockState state, boolean includeData ) ` | 实现调用 ` state.getBlock() `<br>实现调用 ` block.getMainPartPos(pos, state) `<br>实现调用 ` level.hasChunk(mainPos.getX() >> 4, mainPos.getZ() >> 4) `<br>[调用处 CrateBlock.getCloneItemStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L177) |
| ` public boolean isCraftingUnlocked() ` | 末尾返回 ` this.id != null && Storages.get().get(this.id).map(BaseStorage::isCraftingUnlocked).orElse(false) `<br>[调用处 StorageBlockEntity.playerWillDestroy](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L232) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L189) |
| ` public long getTotalCount() ` | ` (this.id == null) ` 成立时提前返回 ` 0 `<br>[调用处 StorageBlockEntity.isEmpty](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L204) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L193) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.getTotalCount() == 0 `<br>[调用处 StorageBlockEntity.playerWillDestroy](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L232) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L203) |
| ` public void dropContents(Level level, BlockPos pos) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` Storages.get().get(storageId) `<br>实现调用 ` Storages.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L207) |
| ` public void playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 实现调用 ` this.isEmpty() `<br>实现调用 ` this.isCraftingUnlocked() `<br>分支 ` (this.isEmpty() && !this.isCraftingUnlocked()) ` 内调用 ` this.clearId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L230) |
| ` public StorageType getStorageType() ` | 末尾返回 ` this.storageType `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L42) |
| ` @Nullable public UUID getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L42) |
