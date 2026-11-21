# dev.dubhe.anvilcraft.network（CreativeLaserUpdatePacket 至 GiantAnvilShockEffectPacket）



## CreativeLaserUpdatePacket

` public record CreativeLaserUpdatePacket(int level, LensType lensType, boolean gamma) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<CreativeLaserUpdatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("creative_laser_update")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L17) |
| ` public static final StreamCodec<ByteBuf, CreativeLaserUpdatePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L18) |
| ` @Override public Type<CreativeLaserUpdatePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L29) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` blockEntity.setConfiguredLevel(this.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L34) |
| ` public CreativeLaserUpdatePacket(int level, LensType lensType, boolean gamma) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |
| ` public LensType lensType() ` | 读取 record 分量 ` lensType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserUpdatePacket.java#L16) |

## CyclingValueSyncPacket

` public record CyclingValueSyncPacket(int index, String name) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<CyclingValueSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("cycling_value")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, CyclingValueSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, CyclingValueSyncPacket::index, ByteBufCodecs.STRING_UTF8, CyclingValueSyncPacket::name, CyclingValueSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L14) |
| ` @Override public Type<CyclingValueSyncPacket> type() ` | 末尾返回 ` CyclingValueSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof CyclingValueHandler handler) ` 内调用 ` handler.notify(this.index, this.name) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L27) |
| ` public CyclingValueSyncPacket(int index, String name) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CyclingValueSyncPacket.java#L12) |

## DeflectionRingUpdateLastSpeedPacket

` public record DeflectionRingUpdateLastSpeedPacket(BlockPos pos, double speed) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<DeflectionRingUpdateLastSpeedPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of( "client_update_deflection_ring_last_speed" )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, DeflectionRingUpdateLastSpeedPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, DeflectionRingUpdateLastSpeedPacket::pos, ByteBufCodecs.DOUBLE, DeflectionRingUpdateLastSpeedPacket::speed, DeflectionRingUpdateLastSpeedPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L17) |
| ` @Override public Type<DeflectionRingUpdateLastSpeedPacket> type() ` | 末尾返回 ` DeflectionRingUpdateLastSpeedPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().getBlockEntity(this.pos) `<br>实现调用 ` player.level() `<br>实现调用 ` deflectionRing.setLastEntitySpeed(this.speed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L30) |
| ` public DeflectionRingUpdateLastSpeedPacket(BlockPos pos, double speed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13) |
| ` public double speed() ` | 读取 record 分量 ` speed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DeflectionRingUpdateLastSpeedPacket.java#L13) |

## DragonRodDevourPacket

` public record DragonRodDevourPacket(InteractionHand hand, BlockPos pos, Direction blockFace) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<DragonRodDevourPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("dragon_rod_devour")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, DragonRodDevourPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L20) |
| ` @Override public Type<DragonRodDevourPacket> type() ` | 末尾返回 ` DragonRodDevourPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L30) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` Util.cast(player) `<br>实现调用 ` serverside.level() `<br>实现调用 ` level.isLoaded(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L35) |
| ` public DragonRodDevourPacket(InteractionHand hand, BlockPos pos, Direction blockFace) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |
| ` public Direction blockFace() ` | 读取 record 分量 ` blockFace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodDevourPacket.java#L18) |

## DragonRodStopDevourPacket

` public record DragonRodStopDevourPacket() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<DragonRodStopDevourPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("dragon_rod_stop_devour")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L12) |
| ` public static final StreamCodec<ByteBuf, DragonRodStopDevourPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new DragonRodStopDevourPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L13) |
| ` @Override public Type<DragonRodStopDevourPacket> type() ` | 末尾返回 ` DragonRodStopDevourPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L17) |
| ` @Override public void handleOnServer(Player player) ` | 执行 ` DragonRodItem.stopContinuousMode(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L22) |
| ` public DragonRodStopDevourPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/DragonRodStopDevourPacket.java#L11) |

## EmberGrindstoneSyncPacket

` public record EmberGrindstoneSyncPacket(int index) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<EmberGrindstoneSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ember_grindstone_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, EmberGrindstoneSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, EmberGrindstoneSyncPacket::index, EmberGrindstoneSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L14) |
| ` @Override public Type<EmberGrindstoneSyncPacket> type() ` | 末尾返回 ` EmberGrindstoneSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.hasContainerOpen() `<br>实现调用 ` menu.setSelectedEnchantment(this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L25) |
| ` public EmberGrindstoneSyncPacket(int index) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L12) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EmberGrindstoneSyncPacket.java#L12) |

## EnergyWeaponReloadPacket

` public record EnergyWeaponReloadPacket(ItemStack weapon, ItemStack capacitor, int slot, int ticks) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<EnergyWeaponReloadPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("energy_weapon_reload")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, EnergyWeaponReloadPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L16) |
| ` @Override public Type<EnergyWeaponReloadPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L24) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` this.weapon.isEmpty() `<br>分支 ` (this.weapon.isEmpty()) ` 内调用 ` player.getPersistentData().remove(EnergyWeaponReload.CLIENT_SLOT) `<br>分支 ` (this.weapon.isEmpty()) ` 内调用 ` player.getPersistentData() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L29) |
| ` public EnergyWeaponReloadPacket(ItemStack weapon, ItemStack capacitor, int slot, int ticks) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public ItemStack weapon() ` | 读取 record 分量 ` weapon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public ItemStack capacitor() ` | 读取 record 分量 ` capacitor ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public int ticks() ` | 读取 record 分量 ` ticks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L14) |

## ExpCollectorSyncPacket

` public record ExpCollectorSyncPacket(BlockPos pos) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ExpCollectorSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("exp_collector_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L22) |
| ` public static final StreamCodec<ByteBuf, ExpCollectorSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, ExpCollectorSyncPacket::pos, ExpCollectorSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L23) |
| ` @Override public Type<ExpCollectorSyncPacket> type() ` | 末尾返回 ` ExpCollectorSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L29) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` collector.getBlockPos().equals(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L34) |
| ` public ExpCollectorSyncPacket(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L21) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ExpCollectorSyncPacket.java#L21) |

## FilterContentSyncPacket

` public record FilterContentSyncPacket(int slotIndex, FilterContent filterContent) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<FilterContentSyncPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("filter_content_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FilterContentSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, FilterContentSyncPacket::slotIndex, FilterContent.STREAM_CODEC, FilterContentSyncPacket::filterContent, FilterContentSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L16) |
| ` @Override public Type<FilterContentSyncPacket> type() ` | 末尾返回 ` FilterContentSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.getInventory().getItem(this.slotIndex()) `<br>实现调用 ` player.getInventory() `<br>实现调用 ` this.slotIndex() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L29) |
| ` public FilterContentSyncPacket(int slotIndex, FilterContent filterContent) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14) |
| ` public int slotIndex() ` | 读取 record 分量 ` slotIndex `<br>[调用处 FilterContentSyncPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14) |
| ` public FilterContent filterContent() ` | 读取 record 分量 ` filterContent `<br>[调用处 FilterContentSyncPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FilterContentSyncPacket.java#L14) |

## FrostGrindstoneSyncPacket

` public record FrostGrindstoneSyncPacket(int index, boolean select) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<FrostGrindstoneSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("frost_grindstone_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, FrostGrindstoneSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, FrostGrindstoneSyncPacket::index, ByteBufCodecs.BOOL, FrostGrindstoneSyncPacket::select, FrostGrindstoneSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L14) |
| ` @Override public Type<FrostGrindstoneSyncPacket> type() ` | 末尾返回 ` FrostGrindstoneSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.hasContainerOpen() `<br>分支 ` (this.select) ` 内调用 ` menu.select(this.index) `<br>分支 ` !(this.select) ` 内调用 ` menu.unselect(this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L27) |
| ` public FrostGrindstoneSyncPacket(int index, boolean select) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12) |
| ` public boolean select() ` | 读取 record 分量 ` select ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/FrostGrindstoneSyncPacket.java#L12) |

## GiantAnvilShockEffectPacket

` public record GiantAnvilShockEffectPacket(BlockPos centerPos, int radius, boolean isResin, float pitch) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23)

巨型铁砧震波效果包（Server → Client）。 告诉客户端在指定位置发生了震波，客户端播放方块弹跳动画、撼地粒子与音效。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<GiantAnvilShockEffectPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("giant_anvil_shock_effect")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L24) |
| ` public static final StreamCodec<ByteBuf, GiantAnvilShockEffectPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L25) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` GiantAnvilShockEffectPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L37) |
| ` @Override public void handleOnClient(Player player) ` | 分支 ` (AnvilCraft.CLIENT_CONFIG.effects.displayGiantAnvilShockBlockBounceAnimation) ` 内调用 ` SeismicBounceManager.getInstance().triggerShock(this.centerPos, this.radius) `<br>分支 ` (AnvilCraft.CLIENT_CONFIG.effects.displayGiantAnvilShockBlockBounceAnimation) ` 内调用 ` SeismicBounceManager.getInstance() `<br>分支 ` (AnvilCraft.CLIENT_CONFIG.effects.displayGiantAnvilShockParticles) ` 内调用 ` AnvilParticleManager.giantAnvilShock((ClientLevel) player.level(), this.centerPos, this.radius) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L42) |
| ` public GiantAnvilShockEffectPacket(BlockPos centerPos, int radius, boolean isResin, float pitch) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public BlockPos centerPos() ` | 读取 record 分量 ` centerPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public boolean isResin() ` | 读取 record 分量 ` isResin ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public float pitch() ` | 读取 record 分量 ` pitch ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L23) |
