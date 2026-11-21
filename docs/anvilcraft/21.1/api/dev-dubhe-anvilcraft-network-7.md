# dev.dubhe.anvilcraft.network（RedstoneWirePowerRequestPacket 至 ServerConfigSyncPacket）



## RedstoneWirePowerRequestPacket

` public record RedstoneWirePowerRequestPacket(BlockPos pos) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L23)

客户端请求某根自定义红石导线当前非红石粉输入强度的数据包。<br>参数 ` pos ` 要查询的导线位置

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RedstoneWirePowerRequestPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("redstone_wire_power_request") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L27) |
| ` public static final StreamCodec<ByteBuf, RedstoneWirePowerRequestPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, RedstoneWirePowerRequestPacket::pos, RedstoneWirePowerRequestPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L30) |
| ` @Override public Type<RedstoneWirePowerRequestPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L36) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` serverPlayer.level().isLoaded(this.pos) `<br>实现调用 ` serverPlayer.level() `<br>实现调用 ` serverPlayer.blockPosition().distSqr(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L41) |
| ` public RedstoneWirePowerRequestPacket(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L23) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java#L23) |

## RedstoneWirePowerResponsePacket

` public record RedstoneWirePowerResponsePacket(BlockPos pos, int power, int nonDustPower) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22)

服务端返回指定导线非红石粉输入强度的数据包。<br>参数 ` pos ` 查询对应的导线位置<br>参数 ` power ` 网络总信号强度<br>参数 ` nonDustPower ` 排除原版红石粉输入后的网络信号强度

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RedstoneWirePowerResponsePacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("redstone_wire_power_response") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L23) |
| ` public static final StreamCodec<ByteBuf, RedstoneWirePowerResponsePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L26) |
| ` @Override public Type<RedstoneWirePowerResponsePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L37) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` RedstoneWireClientPowerCache.update(player.level(), this.pos, this.power) `<br>实现调用 ` player.level() `<br>分支 ` (RedstoneWireClientPowerCache.update(player.level(), this.pos, this.power)) ` 内调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L42) |
| ` public RedstoneWirePowerResponsePacket(BlockPos pos, int power, int nonDustPower) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |
| ` public int power() ` | 读取 record 分量 ` power ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |
| ` public int nonDustPower() ` | 读取 record 分量 ` nonDustPower ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L22) |

## RedstoneWirePowerSyncPacket

` public record RedstoneWirePowerSyncPacket(long chunkPos, boolean replace, List<PowerGroup> groups) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19)

按区块同步自定义红石导线的显示功率。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RedstoneWirePowerSyncPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("redstone_wire_power_sync") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L24) |
| ` public static final StreamCodec<FriendlyByteBuf, RedstoneWirePowerSyncPacket> STREAM_CODEC ` | 字段类型为 ` StreamCodec<FriendlyByteBuf, RedstoneWirePowerSyncPacket> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L28) |
| ` @Override public Type<RedstoneWirePowerSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L87) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` RedstoneWireClientPowerCache.apply(player.level(), this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L92) |
| ` public static int pack(BlockPos pos) ` | 将世界坐标压缩为区块内 x/z 和 16 位有符号 y。<br>末尾返回 ` ((pos.getY() & 0xFFFF) << 8) \| ((pos.getZ() & 15) << 4) \| (pos.getX() & 15) `<br>[调用处 RedstoneWireNetworkManager.wireRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireNetworkManager.java#L190) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L112) |
| ` public static BlockPos unpack(long chunkPos, int packed) ` | 从区块坐标和压缩位置恢复世界坐标。<br>末尾返回 ` new BlockPos((chunkX << 4) + (packed & 15), y, (chunkZ << 4) + ((packed >>> 4) & 15)) `<br>[调用处 RedstoneWireClientPowerCache.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/RedstoneWireClientPowerCache.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L119) |
| ` public RedstoneWirePowerSyncPacket(long chunkPos, boolean replace, List<PowerGroup> groups) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |
| ` public long chunkPos() ` | 读取 record 分量 ` chunkPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |
| ` public boolean replace() ` | 读取 record 分量 ` replace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |
| ` public List<PowerGroup> groups() ` | 读取 record 分量 ` groups ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L19) |

## RedstoneWirePowerSyncPacket.PowerGroup

` public record PowerGroup(int power, int[] positions) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowerGroup(int power, int[] positions) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129) |
| ` public int power() ` | 读取 record 分量 ` power ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129) |
| ` public int[] positions() ` | 读取 record 分量 ` positions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerSyncPacket.java#L129) |

## ResonanceMiningEffectPacket

` public record ResonanceMiningEffectPacket(BlockPos pos, int durationTicks) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ResonanceMiningEffectPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("resonance_mining_effect")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, ResonanceMiningEffectPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, ResonanceMiningEffectPacket::pos, ByteBufCodecs.VAR_INT, ResonanceMiningEffectPacket::durationTicks, ResonanceMiningEffectPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L18) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L26) |
| ` @Override public void handleOnClient(Player player) ` | 分支 ` (this.durationTicks > 0) ` 内调用 ` SeismicBounceManager.getInstance().startResonance(this.pos, this.durationTicks) `<br>分支 ` (this.durationTicks > 0) ` 内调用 ` SeismicBounceManager.getInstance() `<br>分支 ` !(this.durationTicks > 0) ` 内调用 ` SeismicBounceManager.getInstance().stopResonance(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L31) |
| ` public ResonanceMiningEffectPacket(BlockPos pos, int durationTicks) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14) |
| ` public int durationTicks() ` | 读取 record 分量 ` durationTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ResonanceMiningEffectPacket.java#L14) |

## RocketJumpPacket

` public record RocketJumpPacket(double power) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RocketJumpPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("rocket_jump")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RocketJumpPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.DOUBLE, RocketJumpPacket::power, RocketJumpPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L15) |
| ` public static final IPayloadHandler<RocketJumpPacket> HANDLER ` | 初值 ` RocketJumpPacket::clientHandler ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L20) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L22) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.getDeltaMovement() `<br>实现调用 ` player.setDeltaMovement(movement.x, this.power, movement.z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L27) |
| ` public RocketJumpPacket(double power) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L13) |
| ` public double power() ` | 读取 record 分量 ` power ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RocketJumpPacket.java#L13) |

## RuinsEditScreenPacket

` public record RuinsEditScreenPacket(BlockPos pos, String drops, boolean fragile, List<String> suggestions) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RuinsEditScreenPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ruins_edit_screen")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L16) |
| ` public static final StreamCodec<ByteBuf, RuinsEditScreenPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L17) |
| ` @Override public Type<RuinsEditScreenPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` RuinsScreen.open(this.pos, this.drops, this.fragile, this.suggestions) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L30) |
| ` public RuinsEditScreenPacket(BlockPos pos, String drops, boolean fragile, List<String> suggestions) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public String drops() ` | 读取 record 分量 ` drops ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public boolean fragile() ` | 读取 record 分量 ` fragile ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public List<String> suggestions() ` | 读取 record 分量 ` suggestions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsEditScreenPacket.java#L15) |

## RuinsUpdatePacket

` public record RuinsUpdatePacket(BlockPos pos, String drops, boolean fragile) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RuinsUpdatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ruins_update")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, RuinsUpdatePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, RuinsUpdatePacket::pos, ByteBufCodecs.stringUtf8(256), RuinsUpdatePacket::drops, ByteBufCodecs.BOOL, RuinsUpdatePacket::fragile, RuinsUpdatePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L20) |
| ` @Override public Type<RuinsUpdatePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L27) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isCreative() `<br>实现调用 ` player.level().isLoaded(this.pos) `<br>实现调用 ` player.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L32) |
| ` public RuinsUpdatePacket(BlockPos pos, String drops, boolean fragile) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |
| ` public String drops() ` | 读取 record 分量 ` drops ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |
| ` public boolean fragile() ` | 读取 record 分量 ` fragile ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RuinsUpdatePacket.java#L18) |

## ScreenShakePacket

` public record ScreenShakePacket(double x, double y, double z, float radius, int shakeOrdinal) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23)

屏幕（摄像机）震动包（Server → Client）。 告诉客户端在指定中心、指定半径内播放摄像机震动。振幅由客户端按距离衰减。 shakeOrdinal 为 ShakeType 的序号，决定振幅/时长/是否需站地面。 由超新星爆发、巨型铁砧撼地等共用。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ScreenShakePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("screen_shake")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L48) |
| ` public static final StreamCodec<ByteBuf, ScreenShakePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L51) |
| ` public static ScreenShakePacket of(Vec3 center, float radius, ShakeType type) ` | 末尾返回 ` new ScreenShakePacket(center.x, center.y, center.z, radius, type.ordinal()) `<br>[调用处 GiantAnvilShockEventListener.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/GiantAnvilShockEventListener.java#L270) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L66) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L70) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` ShakeType.values() `<br>实现调用 ` ScreenShakeManager.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L75) |
| ` public ScreenShakePacket(double x, double y, double z, float radius, int shakeOrdinal) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public double x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public double y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public double z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public float radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public int shakeOrdinal() ` | 读取 record 分量 ` shakeOrdinal ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L23) |

## ScreenShakePacket.ShakeType

` public enum ShakeType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SUPERNOVA ` | 声明于枚举 ` ScreenShakePacket.ShakeType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L29) |
| ` GIANT_ANVIL_SHOCK ` | 声明于枚举 ` ScreenShakePacket.ShakeType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L31) |
| ` public final int durationTicks ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L33) |
| ` public final float yawPitchAmplitude ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L34) |
| ` public final float rollAmplitude ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L35) |
| ` public final float frequency ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L36) |
| ` public final boolean requireOnGround ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L37) |
| ` public static ShakeType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L27) |
| ` public static ShakeType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L27) |

## ServerConfigSyncPacket

` public record ServerConfigSyncPacket(String fileName, byte[] contents) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13)

NeoForge 1.21's built-in config payload can only be sent during login configuration.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ServerConfigSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("server_config_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, ServerConfigSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, ServerConfigSyncPacket::fileName, ByteBufCodecs.BYTE_ARRAY, ServerConfigSyncPacket::contents, ServerConfigSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L15) |
| ` @Override public Type<ServerConfigSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L21) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` ConfigSync.receiveSyncedConfig(this.contents, this.fileName) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L26) |
| ` public ServerConfigSyncPacket(String fileName, byte[] contents) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13) |
| ` public String fileName() ` | 读取 record 分量 ` fileName ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13) |
| ` public byte[] contents() ` | 读取 record 分量 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ServerConfigSyncPacket.java#L13) |
