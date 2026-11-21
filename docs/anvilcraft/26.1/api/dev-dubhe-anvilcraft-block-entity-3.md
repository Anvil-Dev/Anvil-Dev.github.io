# dev.dubhe.anvilcraft.block.entity（BaseMachineBlockEntity 至 CelestialBackGateBlockEntity）



## BaseMachineBlockEntity

` public abstract class BaseMachineBlockEntity extends BlockEntity implements MenuProvider, IItemResourceHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseMachineBlockEntity.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public abstract Direction getDirection() ` | 返回 ` Direction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseMachineBlockEntity.java#L23) |
| ` public abstract void setDirection(Direction direction) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseMachineBlockEntity.java#L25) |
| ` @Override public void writeClientSideData(AbstractContainerMenu menu, RegistryFriendlyByteBuf buffer) ` | 执行 ` buffer.writeBlockPos(this.getBlockPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseMachineBlockEntity.java#L27) |

## BigRedButtonBlockEntity

` public class BigRedButtonBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BigRedButtonBlockEntity(BlockPos pos, BlockState state) ` | 实现调用 ` super(ModBlockEntities.BIG_RED_BUTTON.get(), pos, state) `<br>实现调用 ` ModBlockEntities.BIG_RED_BUTTON.get() `<br>实现调用 ` state.getValue(BigRedButtonBlock.PRESSED) `<br>[调用处 BigRedButtonBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/redstone/BigRedButtonBlock.java#L116) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L26) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.getBlockState().getValue(BigRedButtonBlock.PRESSED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L32) |
| ` public boolean press(Player player) ` | ` (this.level == null \|\| this.level.isClientSide() \|\| !player.isAlive() \|\| player.isSpectator() \|\| player.isShiftKeyDown() \|\| player.getMainHandItem().is(ModItems.BUILDING_ROD)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L40) |
| ` public void release(Player player) ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.holders.remove(player.getUUID()) `<br>实现调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L49) |
| ` public void checkPressed() ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.holders.entrySet() `<br>实现调用 ` this.setPressed(!this.holders.isEmpty()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L55) |
| ` public static void clientTick(Level level, BlockPos pos, BlockState state, BigRedButtonBlockEntity button) ` | 实现调用 ` Mth.approach(button.progress, state.getValue(BigRedButtonBlock.PRESSED) ? 1 : 0, 0.5f) `<br>实现调用 ` state.getValue(BigRedButtonBlock.PRESSED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L83) |
| ` public float getPressProgress(float partialTick) ` | 末尾返回 ` value * value * (3 - 2 * value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BigRedButtonBlockEntity.java#L88) |

## BlackHoleBlockEntity

` public class BlackHoleBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlackHoleBlockEntity(BlockPos pos, BlockState blockState) ` | 执行 ` super(ModBlockEntities.BLACK_HOLE.get(), pos, blockState) `<br>[调用处 BlackHoleBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/BlackHoleBlock.java#L35) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L12) |
| ` public static BlackHoleBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new BlackHoleBlockEntity(pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L16) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>分支 ` (this.level != null) ` 内调用 ` this.level.isClientSide() `<br>分支 ` (this.level.isClientSide()) ` 内调用 ` GravitationalLensSupport.register(this.worldPosition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L20) |
| ` @Override public void setRemoved() ` | 实现调用 ` super.setRemoved() `<br>分支 ` (this.level != null) ` 内调用 ` this.level.isClientSide() `<br>分支 ` (this.level.isClientSide()) ` 内调用 ` GravitationalLensSupport.unregister(this.worldPosition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L35) |

## BurningHeaterBlockEntity

` public class BurningHeaterBlockEntity extends BlockEntity implements IItemResourceHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L41)

类型注解 ` @SuppressWarnings("deprecation") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_BURN_TIME ` | 初值 ` 1200 * 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L43) |
| ` public static final int LIT_THRESHOLD ` | 初值 ` 240 * 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L44) |
| ` public static final int REFUEL_THRESHOLD ` | 初值 ` 500 * 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L45) |
| ` public BurningHeaterBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 BurningHeaterBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L69) |
| ` public static BurningHeaterBlockEntity createBlockEntity( BlockEntityType<?> type, BlockPos pos, BlockState blockState ) ` | 末尾返回 ` new BurningHeaterBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L73) |
| ` public boolean isDoubleClick(Player player) ` | ` (this.level == null) ` 成立时提前返回 ` false `<br>末尾返回 ` last != 0 && now - last <= BurningHeaterBlockEntity.DOUBLE_CLICK_INTERVAL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L79) |
| ` public int getDisplayBurnTime() ` | 获取用于显示的燃烧时间。 客户端上根据上次同步时间进行本地倒计时估算，避免频繁网络同步。<br>` (this.level == null \|\| !this.level.isClientSide()) ` 成立时提前返回 ` this.burnTime `<br>` (this.lastSyncGameTime <= 0) ` 成立时提前返回 ` this.burnTime `<br>末尾返回 ` Math.max(0, this.burnTime - (int) elapsed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L92) |
| ` public void tick(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` level.isClientSide() `<br>分支 ` (!level.isClientSide()) ` 内调用 ` state.getValue(BurningHeaterBlock.LEVEL) `<br>分支 ` (!level.isClientSide()) ` 内调用 ` this.tryConsumeFuel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L99) |
| ` @Override public void preRemoveSideEffects(BlockPos pos, BlockState state) ` | 实现调用 ` super.preRemoveSideEffects(pos, state) `<br>分支 ` (level != null) ` 内调用 ` Containers.dropContents(level, pos, this.itemHandler.copyToList()) `<br>分支 ` (level != null) ` 内调用 ` this.itemHandler.copyToList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L164) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>分支 ` (this.level != null) ` 内调用 ` this.level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L174) |
| ` @Override @Nullable public Packet<ClientGamePacketListener> getUpdatePacket() ` | 末尾返回 ` ClientboundBlockEntityDataPacket.create(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L182) |
| ` @Override public CompoundTag getUpdateTag(HolderLookup.Provider provider) ` | 构造区块发往客户端时附带的方块实体同步数据。<br>末尾返回 ` output.buildResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L188) |
| ` public void consumeBurnTime(int ticks) ` | 消耗燃烧时间（用于铁砧合成） 从当前缓存中精确扣除燃烧时间，并立即更新燃烧状态和客户端显示。<br>参数 ` ticks ` 消耗的tick数<br>实现调用 ` Math.max(0, this.burnTime - ticks) `<br>实现调用 ` this.setChanged() `<br>实现调用 ` this.level.isClientSide() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L214) |
| ` public static int getItemBurnTime(ItemStack stack) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` fuel != null ? fuel.burnTime() : 0 `<br>[调用处 BurningHeaterBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/BurningHeaterBlock.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L262) |
| ` public int getBurnTime() ` | 末尾返回 ` this.burnTime `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L41) |
| ` public ItemStacksResourceHandler getItemHandler() ` | 末尾返回 ` this.itemHandler `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BurningHeaterBlockEntity.java#L41) |

## CelestialBackGateBlockEntity

` public class CelestialBackGateBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L33)

Stores the source portal to which a generated return gate leads.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialBackGateBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L47) |
| ` public void configure(ResourceKey<Level> dimension, BlockPos portalPos, Direction facing) ` | 实现调用 ` dimension.equals(this.returnDimension) `<br>实现调用 ` portalPos.equals(this.returnPortalPos) `<br>实现调用 ` portalPos.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L51) |
| ` @Nullable public ResourceKey<Level> getReturnDimension() ` | 末尾返回 ` this.returnDimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L71) |
| ` @Nullable public BlockPos getReturnPortalPos() ` | 末尾返回 ` this.returnPortalPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L76) |
| ` public void tick() ` | 实现调用 ` this.syncWaterloggedState(serverLevel) `<br>实现调用 ` Set.copyOf(this.pendingEntities) `<br>实现调用 ` serverLevel.getEntity(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L141) |
| ` public void tryTouch(Entity entity) ` | 实现调用 ` entity.getUUID() `<br>实现调用 ` this.touchingEntities.contains(uuid) `<br>实现调用 ` CelestialTravelManager.tryReturn(entity, this) `<br>[调用处 CelestialBackGateBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L153) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L166) |
| ` public void queueTouch(Entity entity) ` | Queue players for the next block-entity tick so movement packets are fully processed first.<br>执行 ` this.pendingEntities.add(entity.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L175) |
| ` public Direction getReturnFacing() ` | 末尾返回 ` this.returnFacing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L33) |
