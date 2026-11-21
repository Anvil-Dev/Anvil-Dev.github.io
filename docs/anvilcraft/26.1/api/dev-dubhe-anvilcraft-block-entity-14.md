# dev.dubhe.anvilcraft.block.entity（PulseGeneratorBlockEntity.State 至 SimpleMagneticChuteBlockEntity）



## PulseGeneratorBlockEntity.State

` public enum State `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L323)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` DEFAULT ` | 声明于枚举 ` PulseGeneratorBlockEntity.State ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L324) |
| ` WAITING ` | 声明于枚举 ` PulseGeneratorBlockEntity.State ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L324) |
| ` OUTPUTTING ` | 声明于枚举 ` PulseGeneratorBlockEntity.State ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L324) |
| ` public byte index() ` | 末尾返回 ` (byte) this.ordinal() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L326) |
| ` public static State fromIndex(int index) ` | 末尾返回 ` State.values()[index] ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L330) |
| ` public static State[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L323) |
| ` public static State valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PulseGeneratorBlockEntity.java#L323) |

## RedstoneDiceBlockEntity

` public class RedstoneDiceBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ROLL_TICKS ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L17) |
| ` public RedstoneDiceBlockEntity(BlockPos pos, BlockState state) ` | 执行 ` super(ModBlockEntities.REDSTONE_DICE.get(), pos, state) `<br>[调用处 RedstoneDiceBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/redstone/RedstoneDiceBlock.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L31) |
| ` public void setUniform(boolean uniform) ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.sync() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L35) |
| ` public int getFace(int index, boolean previous) ` | 末尾返回 ` outcome / (index == 0 ? 1 : index == 1 ? 10 : 100) % 10 `<br>[调用处 RedstoneDiceBlockEntity.getScenario](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L41) |
| ` public int getScenario(boolean previous) ` | 末尾返回 ` this.getFace(0, previous) + this.getFace(1, previous) + this.getFace(2, previous) - 3 `<br>[调用处 RedstoneDiceBlockEntity.finishRoll](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L86) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L46) |
| ` public float getRollProgress(float partialTick) ` | ` (this.level == null \|\| this.rollStart < 0) ` 成立时提前返回 ` 1 `<br>末尾返回 ` Mth.clamp((this.level.getGameTime() - this.rollStart + partialTick) / ROLL_TICKS, 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L50) |
| ` public void checkInput() ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.level.hasNeighborSignal(this.worldPosition) `<br>实现调用 ` this.setChanged() `<br>[调用处 RedstoneDiceBlockEntity.finishRoll](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L55) |
| ` public void roll() ` | 实现调用 ` this.level.isClientSide() `<br>分支 ` (this.uniform) ` 内调用 ` this.level.getRandom().nextInt(16) `<br>分支 ` (this.uniform) ` 内调用 ` this.level.getRandom() `<br>[调用处 RedstoneDiceBlockEntity.checkInput](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L64) |
| ` public void finishRoll() ` | 实现调用 ` this.level.isClientSide() `<br>实现调用 ` this.level.getGameTime() `<br>分支 ` (remaining > 0) ` 内调用 ` this.level.scheduleTick(this.worldPosition, this.getBlockState().getBlock(), (int) remaining) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L79) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` this.level.isClientSide() `<br>分支 ` (this.rolling) ` 内调用 ` Mth.clamp(this.rollStart + ROLL_TICKS - this.level.getGameTime(), 1, ROLL_TICKS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L94) |
| ` @Override public CompoundTag getUpdateTag(HolderLookup.Provider registries) ` | 构造区块发往客户端时附带的方块实体同步数据。<br>末尾返回 ` this.saveWithoutMetadata(registries) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L141) |
| ` @Override public ClientboundBlockEntityDataPacket getUpdatePacket() ` | 末尾返回 ` ClientboundBlockEntityDataPacket.create(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L146) |
| ` public boolean isUniform() ` | 末尾返回 ` this.uniform `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L16) |
| ` public int getOutput() ` | 末尾返回 ` this.output `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RedstoneDiceBlockEntity.java#L16) |

## RemoteTransmissionPoleBlockEntity

` public class RemoteTransmissionPoleBlockEntity extends AbstractTransmissionPoleBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RemoteTransmissionPoleBlockEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RemoteTransmissionPoleBlockEntity(BlockPos pos, BlockState blockState) ` | 执行 ` this(ModBlockEntities.REMOTE_TRANSMISSION_POLE.get(), pos, blockState) `<br>[调用处 RemoteTransmissionPoleBlock.createBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/transmitting/RemoteTransmissionPoleBlock.java#L124) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RemoteTransmissionPoleBlockEntity.java#L12) |
| ` public static RemoteTransmissionPoleBlockEntity createBlockEntity( BlockEntityType<?> type, BlockPos pos, BlockState blockState ) ` | 末尾返回 ` new RemoteTransmissionPoleBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RemoteTransmissionPoleBlockEntity.java#L20) |
| ` @Override public boolean isHead(BlockState state) ` | 末尾返回 ` state.getValue(RemoteTransmissionPoleBlock.HALF) == Vertical4PartHalf.TOP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RemoteTransmissionPoleBlockEntity.java#L28) |
| ` @Override public BlockPos getHeadPos(BlockPos bottom) ` | 末尾返回 ` bottom.offset(Vertical4PartHalf.TOP.getOffset()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RemoteTransmissionPoleBlockEntity.java#L33) |
| ` @Override public int getRange() ` | 末尾返回 ` AnvilCraft.CONFIG.machines.remotePowerTransmitterRange ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RemoteTransmissionPoleBlockEntity.java#L38) |

## ResentfulAmberBlockEntity

` public class ResentfulAmberBlockEntity extends MobAmberBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ResentfulAmberBlockEntity.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ResentfulAmberBlockEntity createBlockEntity( BlockEntityType<?> type, BlockPos pos, BlockState blockState ) ` | 末尾返回 ` new ResentfulAmberBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ResentfulAmberBlockEntity.java#L25) |
| ` public void clientTick(Level level, BlockPos blockPos) ` | 实现调用 ` this.getOrCreateDisplayEntity(level) `<br>实现调用 ` blockPos.getCenter() `<br>实现调用 ` level.getNearestPlayer( center.x, center.y, center.z, 8, false ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ResentfulAmberBlockEntity.java#L33) |

## RubyLaserBlockEntity

` public class RubyLaserBlockEntity extends BaseLaserBlockEntity implements IPowerConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static RubyLaserBlockEntity createBlockEntity( BlockEntityType<?> type, BlockPos pos, BlockState blockState ) ` | 末尾返回 ` new RubyLaserBlockEntity(type, pos, blockState) `<br>[调用处 RubyLaserBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/laser/RubyLaserBlock.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L26) |
| ` @Override public void tick(Level level) ` | 实现调用 ` this.resetState() `<br>实现调用 ` this.getGrid() `<br>实现调用 ` this.getBlockState().getValue(RubyLaserBlock.OVERLOAD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L39) |
| ` public boolean isSwitchedOn() ` | 末尾返回 ` this.getBlockState().getValue(RubyLaserBlock.SWITCH) == Switch.ON && !this.getBlockState().getValue(RubyLaserBlock.OVERLOAD) `<br>[调用处 RubyLaserBlockEntity.getBaseLaserLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L73) |
| ` @Override public void onIrradiated(BaseLaserBlockEntity baseLaserBlockEntity) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L78) |
| ` @Override public @Nullable Level getCurrentLevel() ` | 末尾返回 ` this.level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L82) |
| ` @Override public BlockPos getPos() ` | 末尾返回 ` this.getBlockPos() `<br>[调用处 RubyLaserBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L87) |
| ` @Override public int getInputPower() ` | ` (this.level == null) ` 成立时提前返回 ` 16 `<br>末尾返回 ` this.getBlockState().getValue(RubyLaserBlock.SWITCH) == Switch.OFF ? 0 : 16 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L92) |
| ` @Override public float getLaserOffset() ` | 末尾返回 ` 0.489F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L98) |
| ` @Override public Direction getFacing() ` | 末尾返回 ` this.getBlockState().getValue(RubyLaserBlock.FACING) `<br>[调用处 RubyLaserBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L103) |
| ` @Nullable public PowerGrid getGrid() ` | 末尾返回 ` this.grid `<br>由 Lombok 生成。<br>[调用处 RubyLaserBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L16) |
| ` public void setGrid(@Nullable final PowerGrid grid) ` | 执行 ` this.grid = grid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyLaserBlockEntity.java#L16) |

## RubyPrismBlockEntity

` public class RubyPrismBlockEntity extends BaseLaserBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static RubyPrismBlockEntity createBlockEntity( BlockEntityType<?> type, BlockPos pos, BlockState blockState ) ` | 末尾返回 ` new RubyPrismBlockEntity(type, pos, blockState) `<br>[调用处 RubyPrismBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/laser/RubyPrismBlock.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L22) |
| ` public void tick(Level level) ` | 分支 ` (this.enabled) ` 内调用 ` this.emitLaser(this.getFacing()) `<br>分支 ` (this.enabled) ` 内调用 ` this.getFacing() `<br>实现调用 ` super.tick(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L30) |
| ` @Override public void onCancelingIrradiation(BaseLaserBlockEntity baseLaserBlockEntity) ` | 实现调用 ` this.irradiateSelfLaserBlockSet.contains(baseLaserBlockEntity) `<br>实现调用 ` super.onCancelingIrradiation(baseLaserBlockEntity) `<br>实现调用 ` this.irradiateSelfLaserBlockSet.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L51) |
| ` @Override public void onIrradiated(BaseLaserBlockEntity baseLaserBlockEntity) ` | 实现调用 ` super.onIrradiated(baseLaserBlockEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L58) |
| ` @Override public void resetLaserStateAfterMove() ` | 实现调用 ` super.resetLaserStateAfterMove() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L64) |
| ` @Override public int getLaserLevel() ` | ` (this.enabled) ` 成立时提前返回 ` super.getLaserLevel() `<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L70) |
| ` @Override public void clientUpdate(@Nullable BlockPos irradiateBlockPos, int laserLevel) ` | 实现调用 ` super.clientUpdate(irradiateBlockPos, laserLevel) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L78) |
| ` @Override public Direction getFacing() ` | 末尾返回 ` this.getBlockState().getValue(RubyPrismBlock.FACING) `<br>[调用处 RubyPrismBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RubyPrismBlockEntity.java#L84) |

## RuinsBlockEntity

` public class RuinsBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<LootTable> EMPTY_DROPS ` | 初值 ` ResourceKey.create(Registries.LOOT_TABLE, Identifier.withDefaultNamespace("empty")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L36) |
| ` public RuinsBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state) `<br>[调用处 RuinsBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/RuinsBlock.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L50) |
| ` public void setDisplay(BlockState state, CompoundTag data) ` | 实现调用 ` state.getBlock() `<br>实现调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` data.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L54) |
| ` public boolean canMove() ` | 末尾返回 ` !this.displayState.hasBlockEntity() \|\| this.displayState.getBlock() instanceof IMoveableEntityBlock `<br>[调用处 RuinsBlockEntity.updateMovement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L62) |
| ` public void invalidateDisplayEntity() ` | [调用处 RuinsBlockEntity.loadAdditional](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L66) |
| ` public void setFragile(boolean fragile) ` | 实现调用 ` this.sync() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L71) |
| ` public void setDrops(Identifier id) ` | 实现调用 ` ResourceKey.create(Registries.LOOT_TABLE, id) `<br>实现调用 ` this.sync() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L76) |
| ` public String getDropsId() ` | 末尾返回 ` this.dropsId == null ? "" : this.dropsId.identifier().toString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L82) |
| ` public List<ItemStack> getDrops(LootParams.Builder builder) ` | 末尾返回 ` table.getRandomItems(params) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L86) |
| ` @Nullable public BlockEntity getDisplayEntity() ` | ` (this.level == null \|\| !this.level.isClientSide() \|\| this.displayEntityCreated) ` 成立时提前返回 ` this.displayEntity `<br>` (!(this.displayState.getBlock() instanceof EntityBlock block)) ` 成立时提前返回 ` null `<br>末尾返回 ` this.displayEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L94) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` this.updateMovement() `<br>实现调用 ` this.refreshLight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L149) |
| ` @Override public CompoundTag getUpdateTag(HolderLookup.Provider registries) ` | 构造区块发往客户端时附带的方块实体同步数据。<br>末尾返回 ` output.buildResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L186) |
| ` @Override public ClientboundBlockEntityDataPacket getUpdatePacket() ` | 末尾返回 ` ClientboundBlockEntityDataPacket.create(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L193) |
| ` @Override public void setRemoved() ` | 实现调用 ` this.level.isClientSide() `<br>分支 ` (this.level != null && this.level.isClientSide()) ` 内调用 ` RuinsParticles.remember(this) `<br>实现调用 ` super.setRemoved() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L198) |
| ` public BlockState getDisplayState() ` | 末尾返回 ` this.displayState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L35) |
| ` public boolean isFragile() ` | 末尾返回 ` this.fragile `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/RuinsBlockEntity.java#L35) |

## SiftingTableBlockEntity

` public class SiftingTableBlockEntity extends ProcessingTableBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SiftingTableBlockEntity.java#L10)

过筛台方块实体，用于存储原料，并在铁砧砸落时执行过筛配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SiftingTableBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SiftingTableBlockEntity.java#L11) |

## SimpleChuteBlockEntity

` public class SimpleChuteBlockEntity extends BlockEntity implements IItemResourceHandlerHolder, IConvertableBlockEntity<ChuteBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleChuteBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) ` | 执行 ` super(type, pos, state) `<br>[调用处 SimpleChuteBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/chute/SimpleChuteBlock.java#L88) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L64) |
| ` @Override public void loadAdditional(ValueInput input) ` | 从存档恢复方块实体附加数据时调用。<br>实现调用 ` super.loadAdditional(input) `<br>实现调用 ` input.getIntOr("Cooldown", 0) `<br>实现调用 ` this.itemHandler.deserialize(input.childOrEmpty("Inventory")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L75) |
| ` public void tick() ` | tick<br>实现调用 ` this.level.getGameTime() `<br>实现调用 ` this.itemHandler.getResource(0).isEmpty() `<br>实现调用 ` this.itemHandler.getResource(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L83) |
| ` public boolean isTargetEmpty(BlockEntity blockEntity) ` | ` (blockEntity instanceof SimpleChuteBlockEntity chute) ` 成立时提前返回 ` chute.isEmpty() `<br>` (blockEntity instanceof BaseChuteBlockEntity chute) ` 成立时提前返回 ` chute.isEmpty() `<br>末尾返回 ` false `<br>[调用处 SimpleChuteBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L151) |
| ` public int getRedstoneSignal() ` | 末尾返回 ` this.itemHandler.getStack().isEmpty() ? 0 : 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L183) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.itemHandler.getStack().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L191) |
| ` @Override public Holder<BlockEntityType<?>> targetTypeHolder() ` | 末尾返回 ` ModBlockEntities.CHUTE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L195) |
| ` @Override public void convertTo(ChuteBlockEntity newBe) ` | 实现调用 ` this.getItemHandler() `<br>实现调用 ` handler.getResource(0) `<br>实现调用 ` resource.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L200) |
| ` @Override public void preRemoveSideEffects(BlockPos pos, BlockState state) ` | 实现调用 ` super.preRemoveSideEffects(pos, state) `<br>实现调用 ` pos.getCenter() `<br>分支 ` (level != null) ` 内调用 ` Containers.dropItemStack(level, center.x, center.y, center.z, this.itemHandler.getStack()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L212) |
| ` public SingleStackResourceHandler getItemHandler() ` | 末尾返回 ` this.itemHandler `<br>由 Lombok 生成。<br>[调用处 SimpleChuteBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L36) |
| ` public int getCooldown() ` | 末尾返回 ` this.cooldown `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L36) |
| ` public long getTickedGameTime() ` | 末尾返回 ` this.tickedGameTime `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L36) |
| ` public void setCooldown(final int cooldown) ` | 执行 ` this.cooldown = cooldown `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleChuteBlockEntity.java#L36) |

## SimpleMagneticChuteBlockEntity

` public class SimpleMagneticChuteBlockEntity extends BlockEntity implements IItemResourceHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleMagneticChuteBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 SimpleMagneticChuteBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/chute/SimpleMagneticChuteBlock.java#L102) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L71) |
| ` @Override public void loadAdditional(ValueInput input) ` | 从存档恢复方块实体附加数据时调用。<br>实现调用 ` super.loadAdditional(input) `<br>实现调用 ` input.getIntOr("Cooldown", 0) `<br>实现调用 ` this.itemHandler.deserialize(input.childOrEmpty("Inventory")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L82) |
| ` public void tick() ` | tick<br>实现调用 ` this.tickEjectedItemTracking() `<br>实现调用 ` this.level.getGameTime() `<br>实现调用 ` this.getDirection() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L99) |
| ` public int getRedstoneSignal() ` | 末尾返回 ` this.itemHandler.getStack().isEmpty() ? 0 : 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L195) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.itemHandler.getStack().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L237) |
| ` @Override public void preRemoveSideEffects(BlockPos pos, BlockState state) ` | 实现调用 ` super.preRemoveSideEffects(pos, state) `<br>实现调用 ` pos.getCenter() `<br>分支 ` (level != null) ` 内调用 ` Containers.dropItemStack(level, center.x, center.y, center.z, this.itemHandler.getStack()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L241) |
| ` public SingleStackResourceHandler getItemHandler() ` | 末尾返回 ` this.itemHandler `<br>由 Lombok 生成。<br>[调用处 SimpleMagneticChuteBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L37) |
| ` public int getCooldown() ` | 末尾返回 ` this.cooldown `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L37) |
| ` public long getTickedGameTime() ` | 末尾返回 ` this.tickedGameTime `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L37) |
| ` public List<TrackedEjectedItem> getTrackedEjectedItems() ` | 末尾返回 ` this.trackedEjectedItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L37) |
| ` public void setCooldown(final int cooldown) ` | 执行 ` this.cooldown = cooldown `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SimpleMagneticChuteBlockEntity.java#L37) |
