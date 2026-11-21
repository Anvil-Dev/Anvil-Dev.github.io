# dev.dubhe.anvilcraft.network（SpacetimeSupercomputerExecuteCommandPacket 至 StructureScannerEditPacket）



## SpacetimeSupercomputerExecuteCommandPacket

` public record SpacetimeSupercomputerExecuteCommandPacket(BlockPos pos, String command, boolean run) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, SpacetimeSupercomputerExecuteCommandPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L19) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` SpacetimeSupercomputerExecuteCommandPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L29) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.level() `<br>实现调用 ` level.getBlockEntity(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L34) |
| ` public SpacetimeSupercomputerExecuteCommandPacket(BlockPos pos, String command, boolean run) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |
| ` public String command() ` | 读取 record 分量 ` command ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |
| ` public boolean run() ` | 读取 record 分量 ` run ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerExecuteCommandPacket.java#L16) |

## StoragePortTakeOutPacket

` public record StoragePortTakeOutPacket(BlockPos pos) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L22)

客户端左键仓储端口或创造板条箱时发送，取出由服务端执行 （仓储端口为取出 1 个，shift 时取出一组）。 取出完全在服务端执行（缓存与玩家背包均为权威数据），客户端不直接改动任何物品， 避免幻影物品与快速点击刷物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StoragePortTakeOutPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("storage_port_take_out") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L23) |
| ` public static final StreamCodec<FriendlyByteBuf, StoragePortTakeOutPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, StoragePortTakeOutPacket::pos, StoragePortTakeOutPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L26) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L32) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.getMainHandItem().getItem() `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.distanceToSqr(this.pos.getCenter()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L37) |
| ` public StoragePortTakeOutPacket(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L22) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortTakeOutPacket.java#L22) |

## StoragePortUnmarkPacket

` public record StoragePortUnmarkPacket(BlockPos pos) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L19)

客户端「铁砧锤长按右键并滑动」手势触发：请求移除仓储端口的标记。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StoragePortUnmarkPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("storage_port_unmark")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L20) |
| ` public static final StreamCodec<FriendlyByteBuf, StoragePortUnmarkPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, StoragePortUnmarkPacket::pos, StoragePortUnmarkPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L21) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L27) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.getMainHandItem().getItem() `<br>实现调用 ` player.getMainHandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L32) |
| ` public StoragePortUnmarkPacket(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L19) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StoragePortUnmarkPacket.java#L19) |

## StructureDataSyncPacket

` public record StructureDataSyncPacket(StructureData structureData) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureDataSyncPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("structure_data_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, StructureDataSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StructureData.STREAM_CODEC, StructureDataSyncPacket::structureData, StructureDataSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L15) |
| ` @Override public Type<StructureDataSyncPacket> type() ` | 末尾返回 ` StructureDataSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L21) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (screen instanceof StructureToolScreen structureToolScreen) ` 内调用 ` AnvilCraft.LOGGER.info("Send data to client screen") `<br>分支 ` (screen instanceof StructureToolScreen structureToolScreen) ` 内调用 ` structureToolScreen.setStructureData(this.structureData()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L26) |
| ` public StructureDataSyncPacket(StructureData structureData) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L13) |
| ` public StructureData structureData() ` | 读取 record 分量 ` structureData `<br>[调用处 StructureDataSyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDataSyncPacket.java#L13) |

## StructureDiskRequestPacket

` public record StructureDiskRequestPacket(String file) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L17)

请求结构磁盘的完整结构数据，保留尺寸、方块实体 NBT 等识别信息。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureDiskRequestPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("structure_disk_request")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, StructureDiskRequestPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, StructureDiskRequestPacket::file, StructureDiskRequestPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L21) |
| ` @Override public Type<StructureDiskRequestPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L25) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` StructureLoadUtil.isInvalidStructureFile(this.file) `<br>实现调用 ` System.currentTimeMillis() `<br>实现调用 ` LAST_REQUEST.get(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L30) |
| ` public StructureDiskRequestPacket(String file) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L17) |
| ` public String file() ` | 读取 record 分量 ` file ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L17) |

## StructureDiskResponsePacket

` public record StructureDiskResponsePacket(String file, CompoundTag tag) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18)

tag 为 null 时同步缺失状态，避免客户端每帧重新请求。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureDiskResponsePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("structure_disk_response")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, StructureDiskResponsePacket> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L20) |
| ` @Override public Type<StructureDiskResponsePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L36) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` StructureLoadUtil.cacheStructureNbt(this.file, this.tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L41) |
| ` public StructureDiskResponsePacket(String file, CompoundTag tag) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18) |
| ` public String file() ` | 读取 record 分量 ` file ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18) |
| ` public CompoundTag tag() ` | 读取 record 分量 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L18) |

## StructurePreviewRequestPacket

` public record StructurePreviewRequestPacket(UUID structureUuid, String structureFile) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24)

结构磁盘预览请求包（C2S） 客户端需要渲染磁盘3D预览时，向服务端请求结构NBT数据。 服务端读取结构文件后，通过 StructurePreviewResponsePacket 返回调色板和方块列表。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructurePreviewRequestPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("structure_preview_request") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L25) |
| ` public static final StreamCodec<ByteBuf, StructurePreviewRequestPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L29) |
| ` @Override public Type<StructurePreviewRequestPacket> type() ` | 末尾返回 ` StructurePreviewRequestPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L37) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` Util.cast(player) `<br>实现调用 ` serverPlayer.level() `<br>实现调用 ` this.structureFile.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L42) |
| ` public StructurePreviewRequestPacket(UUID structureUuid, String structureFile) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24) |
| ` public UUID structureUuid() ` | 读取 record 分量 ` structureUuid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24) |
| ` public String structureFile() ` | 读取 record 分量 ` structureFile ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L24) |

## StructurePreviewResponsePacket

` public record StructurePreviewResponsePacket(UUID structureUuid, CompoundTag structureData) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20)

结构磁盘预览数据同步包（S2C） 服务端响应客户端的预览请求，发送结构NBT中的调色板和方块列表。 客户端收到后缓存到 StructureDiskPreviewSupport，下次 tooltip 渲染时显示3D预览。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructurePreviewResponsePacket> TYPE ` | 初值 ` new Type<>( AnvilCraft.of("structure_preview_response") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L21) |
| ` public static final StreamCodec<ByteBuf, StructurePreviewResponsePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L25) |
| ` @Override public Type<StructurePreviewResponsePacket> type() ` | 末尾返回 ` StructurePreviewResponsePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L33) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` StructureDiskPreviewSupport.receiveStructureData(this.structureUuid, this.structureData) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L38) |
| ` public StructurePreviewResponsePacket(UUID structureUuid, CompoundTag structureData) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20) |
| ` public UUID structureUuid() ` | 读取 record 分量 ` structureUuid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20) |
| ` public CompoundTag structureData() ` | 读取 record 分量 ` structureData ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L20) |

## StructureScannerActionPacket

` public record StructureScannerActionPacket(Action action, int value, Optional<String> name, RangeAxis rangeAxis) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L27)

Structure Scanner 统一网络包 Structure Scanner unified network packet.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureScannerActionPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("structure_scanner_action") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L33) |
| ` public static final StreamCodec<ByteBuf, StructureScannerActionPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L37) |
| ` public StructureScannerActionPacket(Action action) ` | 执行 ` this(action, 0, Optional.empty(), RangeAxis.NONE) `<br>[调用处 StructureScannerScreen.onModeToggleClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L1656) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L49) |
| ` public StructureScannerActionPacket(Action action, @Nullable String name) ` | 执行 ` this(action, 0, Optional.ofNullable(name), RangeAxis.NONE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L53) |
| ` public StructureScannerActionPacket(Action action, int value, RangeAxis rangeAxis) ` | 执行 ` this(action, value, Optional.empty(), rangeAxis) `<br>[调用处 StructureScannerScreen.stepRange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L326) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L57) |
| ` @Override public Type<StructureScannerActionPacket> type() ` | 末尾返回 ` StructureScannerActionPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L75) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.stillValid(player) `<br>实现调用 ` menu.getBlockEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L80) |
| ` public Action action() ` | 读取 record 分量 ` action ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L28) |
| ` public int value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L29) |
| ` public Optional<String> name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L30) |
| ` public RangeAxis rangeAxis() ` | 读取 record 分量 ` rangeAxis ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L27) |

## StructureScannerActionPacket.Action

` public enum Action `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L61)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` START ` | 声明于枚举 ` StructureScannerActionPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L62) |
| ` STOP ` | 声明于枚举 ` StructureScannerActionPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L63) |
| ` RANGE_CHANGE ` | 声明于枚举 ` StructureScannerActionPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L64) |
| ` CONFIRM ` | 声明于枚举 ` StructureScannerActionPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L65) |
| ` public static Action[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L61) |
| ` public static Action valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L61) |

## StructureScannerActionPacket.RangeAxis

` public enum RangeAxis `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L68)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 声明于枚举 ` StructureScannerActionPacket.RangeAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L69) |
| ` X ` | 声明于枚举 ` StructureScannerActionPacket.RangeAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L70) |
| ` Y ` | 声明于枚举 ` StructureScannerActionPacket.RangeAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L71) |
| ` Z ` | 声明于枚举 ` StructureScannerActionPacket.RangeAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L72) |
| ` public static RangeAxis[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L68) |
| ` public static RangeAxis valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerActionPacket.java#L68) |

## StructureScannerEditPacket

` public record StructureScannerEditPacket(int containerId, UUID id, Action action, BlockPos pos, ItemStack replacement) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18)

客户端只提交编辑动作，蓝图内容由服务端修改并回传。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureScannerEditPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("structure_scanner_edit")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L24) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StructureScannerEditPacket> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L25) |
| ` @Override public Type<StructureScannerEditPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L37) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.stillValid(player) `<br>实现调用 ` StructureScannerFiles.edit(serverPlayer, menu, this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L42) |
| ` public StructureScannerEditPacket(int containerId, UUID id, Action action, BlockPos pos, ItemStack replacement) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public UUID id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public Action action() ` | 读取 record 分量 ` action ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public ItemStack replacement() ` | 读取 record 分量 ` replacement ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L18) |
