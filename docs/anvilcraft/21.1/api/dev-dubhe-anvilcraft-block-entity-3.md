# dev.dubhe.anvilcraft.block.entity（BigRedButtonBlockEntity 至 CelestialBackGateBlockEntity）



## BigRedButtonBlockEntity

` public class BigRedButtonBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BigRedButtonBlockEntity(BlockPos pos, BlockState state) ` | 实现调用 ` super(ModBlockEntities.BIG_RED_BUTTON.get(), pos, state) `<br>实现调用 ` ModBlockEntities.BIG_RED_BUTTON.get() `<br>实现调用 ` state.getValue(BigRedButtonBlock.PRESSED) `<br>[调用处 BigRedButtonBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BigRedButtonBlock.java#L117) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L26) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` this.getBlockState().getValue(BigRedButtonBlock.PRESSED) `<br>实现调用 ` this.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L32) |
| ` public boolean press(Player player) ` | ` (this.level == null \|\| this.level.isClientSide \|\| !player.isAlive() \|\| player.isSpectator() \|\| player.isShiftKeyDown() \|\| player.getMainHandItem().is(ModItems.BUILDING_ROD)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L40) |
| ` public void release(Player player) ` | 实现调用 ` this.holders.remove(player.getUUID()) `<br>实现调用 ` player.getUUID() `<br>实现调用 ` this.level.scheduleTick(this.worldPosition, this.getBlockState().getBlock(), 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L49) |
| ` public void checkPressed() ` | 实现调用 ` this.holders.entrySet() `<br>实现调用 ` this.setPressed(!this.holders.isEmpty()) `<br>实现调用 ` this.holders.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L55) |
| ` public static void clientTick(Level level, BlockPos pos, BlockState state, BigRedButtonBlockEntity button) ` | 实现调用 ` Mth.approach(button.progress, state.getValue(BigRedButtonBlock.PRESSED) ? 1 : 0, 0.5f) `<br>实现调用 ` state.getValue(BigRedButtonBlock.PRESSED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L83) |
| ` public float getPressProgress(float partialTick) ` | 末尾返回 ` value * value * (3 - 2 * value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L88) |

## BlackHoleBlockEntity

` public class BlackHoleBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlackHoleBlockEntity(BlockPos pos, BlockState blockState) ` | 执行 ` super(ModBlockEntities.BLACK_HOLE.get(), pos, blockState) `<br>[调用处 BlackHoleBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlackHoleBlock.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L12) |
| ` public static BlackHoleBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new BlackHoleBlockEntity(pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L16) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>分支 ` (this.level.isClientSide) ` 内调用 ` GravitationalLensManager.register(this.worldPosition) `<br>分支 ` !(this.level.isClientSide) ` 内调用 ` GravityManager.GravitySourceManager.getType(this.getBlockState().getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L20) |
| ` @Override public void setRemoved() ` | 实现调用 ` super.setRemoved() `<br>分支 ` (this.level.isClientSide) ` 内调用 ` GravitationalLensManager.unregister(this.worldPosition) `<br>分支 ` !(this.level.isClientSide) ` 内调用 ` GravityManager.GravitySourceManager.removeSource(this.level, this.worldPosition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L35) |

## BurningHeaterBlockEntity

` public class BurningHeaterBlockEntity extends BlockEntity implements IItemHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int REFUEL_THRESHOLD ` | 低于该阈值时消耗一个燃料补充，500秒 = 10000tick<br>初值 ` 500 * 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L40) |
| ` public static final int LIT_THRESHOLD ` | 点燃 (level=2) 的燃烧时间阈值：4分钟 = 240秒 = 4800tick<br>初值 ` 240 * 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L45) |
| ` public BurningHeaterBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 BurningHeaterBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L77) |
| ` @Override public IItemHandler getItemHandler() ` | 末尾返回 ` this.itemHandler ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L81) |
| ` public boolean isDoubleClick(Player player) ` | 记录一次右键并判断是否为双击（距上次右键不超过 #DOUBLE\_CLICK\_INTERVAL tick）。<br>` (level == null) ` 成立时提前返回 ` false `<br>末尾返回 ` last != 0 && now - last <= DOUBLE_CLICK_INTERVAL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L89) |
| ` @Nullable @Override public Packet<ClientGamePacketListener> getUpdatePacket() ` | 末尾返回 ` ClientboundBlockEntityDataPacket.create(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L98) |
| ` @Override public CompoundTag getUpdateTag(HolderLookup.Provider provider) ` | 构造区块发往客户端时附带的方块实体同步数据。<br>末尾返回 ` saveWithoutMetadata(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L104) |
| ` @Override public void onDataPacket(Connection net, ClientboundBlockEntityDataPacket pkt, HolderLookup.Provider provider) ` | 实现调用 ` super.onDataPacket(net, pkt, provider) `<br>分支 ` (level != null) ` 内调用 ` level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L109) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>分支 ` (level != null) ` 内调用 ` level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L117) |
| ` public int getDisplayBurnTime() ` | 获取用于显示的燃烧时间。 在客户端上，根据上次同步时间进行本地倒计时估算，实现平滑刷新。<br>` (level == null \|\| !level.isClientSide()) ` 成立时提前返回 ` this.burnTime `<br>` (this.lastSyncGameTime <= 0) ` 成立时提前返回 ` this.burnTime `<br>末尾返回 ` Math.max(0, this.burnTime - elapsed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L129) |
| ` public void tick(Level level, BlockPos pos, BlockState state) ` | 服务端tick：倒计时燃烧时间并自动补充燃料，更新方块状态 客户端tick：播放燃烧音效和粒子<br>实现调用 ` level.isClientSide() `<br>分支 ` (!level.isClientSide()) ` 内调用 ` this.tryConsumeFuel() `<br>分支 ` (fuelConsumed) ` 内调用 ` level.sendBlockUpdated(worldPosition, getBlockState(), getBlockState(), 3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L140) |
| ` public void consumeBurnTime(int ticks) ` | 消耗燃烧时间（用于铁砧合成） 从当前缓存中精确扣除燃烧时间，并立即更新燃烧状态和客户端显示。<br>参数 ` ticks ` 消耗的tick数<br>实现调用 ` Math.max(0, this.burnTime - ticks) `<br>实现调用 ` setChanged() `<br>实现调用 ` level.isClientSide() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L215) |
| ` public static int getItemBurnTime(ItemStack stack) ` | 获取单个物品的燃烧时间（tick）<br>` (stack.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` fuel != null ? fuel.burnTime() : 0 `<br>[调用处 BurningHeaterBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L265) |
| ` @Override public void loadAdditional(CompoundTag tag, HolderLookup.Provider provider) ` | 从存档恢复方块实体附加数据时调用。<br>实现调用 ` super.loadAdditional(tag, provider) `<br>实现调用 ` tag.getInt("BurnTime") `<br>实现调用 ` this.itemHandler.deserializeNBT(provider, tag.getCompound("Inventory")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L279) |
| ` public int getBurnTime() ` | 末尾返回 ` this.burnTime `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L36) |

## CelestialBackGateBlockEntity

` public class CelestialBackGateBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L31)

Stores the source portal to which a generated return gate leads.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialBackGateBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L45) |
| ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") public void configure(ResourceKey<Level> dimension, BlockPos portalPos, Direction facing) ` | 实现调用 ` dimension.equals(this.returnDimension) `<br>实现调用 ` portalPos.equals(this.returnPortalPos) `<br>实现调用 ` portalPos.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L49) |
| ` @Nullable public ResourceKey<Level> getReturnDimension() ` | 末尾返回 ` this.returnDimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L70) |
| ` @Nullable public BlockPos getReturnPortalPos() ` | 末尾返回 ` this.returnPortalPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L75) |
| ` public void tick() ` | 实现调用 ` this.syncWaterloggedState(serverLevel) `<br>实现调用 ` Set.copyOf(this.pendingEntities) `<br>实现调用 ` serverLevel.getEntity(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L140) |
| ` public void tryTouch(Entity entity) ` | 实现调用 ` entity.getUUID() `<br>实现调用 ` this.touchingEntities.contains(uuid) `<br>实现调用 ` CelestialTravelManager.tryReturn(entity, this) `<br>[调用处 CelestialBackGateBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L165) |
| ` public void queueTouch(Entity entity) ` | Queue players for the next block-entity tick so movement packets are fully processed first.<br>执行 ` this.pendingEntities.add(entity.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L174) |
| ` public Direction getReturnFacing() ` | 末尾返回 ` this.returnFacing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L31) |
