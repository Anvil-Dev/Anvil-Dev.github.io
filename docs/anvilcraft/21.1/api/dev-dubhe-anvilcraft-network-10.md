# dev.dubhe.anvilcraft.network（StructureScannerFileResultPacket 至 TerminalBalanceModePacket）



## StructureScannerFileResultPacket

` public record StructureScannerFileResultPacket(UUID id, String error, int total, int offset, byte[] bytes) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureScannerFileResultPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("structure_scanner_file_result")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L16) |
| ` public static final StreamCodec<FriendlyByteBuf, StructureScannerFileResultPacket> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L17) |
| ` @Override public Type<StructureScannerFileResultPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L29) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` BlueprintClientFiles.receive(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L34) |
| ` public StructureScannerFileResultPacket(UUID id, String error, int total, int offset, byte[] bytes) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public UUID id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public String error() ` | 读取 record 分量 ` error ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public int total() ` | 读取 record 分量 ` total ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public int offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public byte[] bytes() ` | 读取 record 分量 ` bytes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFileResultPacket.java#L14) |

## StructureScannerRangeSyncPacket

` public record StructureScannerRangeSyncPacket(int rangeX, int rangeY, int rangeZ) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureScannerRangeSyncPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("structure_scanner_range_sync") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, StructureScannerRangeSyncPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L18) |
| ` @Override public Type<StructureScannerRangeSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L28) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (player.containerMenu instanceof StructureScannerMenu menu) ` 内调用 ` menu.getBlockEntity() `<br>分支 ` (player.containerMenu instanceof StructureScannerMenu menu) ` 内调用 ` blockEntity.getRangeX().fromIndex(this.rangeX) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L33) |
| ` public StructureScannerRangeSyncPacket(int rangeX, int rangeY, int rangeZ) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |
| ` public int rangeX() ` | 读取 record 分量 ` rangeX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |
| ` public int rangeY() ` | 读取 record 分量 ` rangeY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |
| ` public int rangeZ() ` | 读取 record 分量 ` rangeZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerRangeSyncPacket.java#L14) |

## StructureScannerSavePacket

` public record StructureScannerSavePacket(int containerId, String name, boolean autoRotate, ItemStack marker) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureScannerSavePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("structure_scanner_save")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L21) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StructureScannerSavePacket> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L22) |
| ` @Override public Type<StructureScannerSavePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L33) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.stillValid(player) `<br>实现调用 ` menu.getBlockEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L38) |
| ` public StructureScannerSavePacket(int containerId, String name, boolean autoRotate, ItemStack marker) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public boolean autoRotate() ` | 读取 record 分量 ` autoRotate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public ItemStack marker() ` | 读取 record 分量 ` marker ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L19) |

## StructureScannerStatusPacket

` public record StructureScannerStatusPacket(int containerId, Component message) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<StructureScannerStatusPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("structure_scanner_status")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StructureScannerStatusPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, StructureScannerStatusPacket::containerId, ComponentSerialization.STREAM_CODEC, StructureScannerStatusPacket::message, StructureScannerStatusPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L17) |
| ` @Override public Type<StructureScannerStatusPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L23) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.getMenu() `<br>实现调用 ` screen.showStatus(this.message) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L28) |
| ` public StructureScannerStatusPacket(int containerId, Component message) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15) |
| ` public Component message() ` | 读取 record 分量 ` message ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerStatusPacket.java#L15) |

## SwapPocketPacket

` public record SwapPocketPacket(int slot) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwapPocketPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("swap_pocket")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, SwapPocketPacket> STREAM_CODEC ` | 初值 ` ByteBufCodecs.VAR_INT .map(SwapPocketPacket::new, SwapPocketPacket::slot) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L16) |
| ` @Override public Type<SwapPocketPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L19) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isAlive() `<br>实现调用 ` player.isSpectator() `<br>实现调用 ` PocketInventory.capacity(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L24) |
| ` public SwapPocketPacket(int slot) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L14) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwapPocketPacket.java#L14) |

## SwitchDragonRodProtectContainersPacket

` public record SwitchDragonRodProtectContainersPacket(InteractionHand hand, boolean protect) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchDragonRodProtectContainersPacket> TYPE ` | 初值 ` new Type<>( AnvilCraft.of("switch_dragon_rod_protect_containers") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SwitchDragonRodProtectContainersPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L19) |
| ` @Override public Type<SwitchDragonRodProtectContainersPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L28) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.getItemInHand(this.hand) `<br>实现调用 ` dragonRod.getItem() `<br>实现调用 ` dragonRod.set(ModComponents.DEVOUR_PROTECT_CONTAINERS, this.protect) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L33) |
| ` public SwitchDragonRodProtectContainersPacket(InteractionHand hand, boolean protect) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15) |
| ` public boolean protect() ` | 读取 record 分量 ` protect ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchDragonRodProtectContainersPacket.java#L15) |

## SwitchEquipmentAbilityPacket

` public record SwitchEquipmentAbilityPacket(InteractionHand hand, EquipmentSlot slot, boolean enabled) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchEquipmentAbilityPacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("switch_equipment_ability")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SwitchEquipmentAbilityPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L17) |
| ` @Override public Type<SwitchEquipmentAbilityPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.getItemInHand(this.hand) `<br>实现调用 ` stack.getItem() `<br>实现调用 ` armor.getEquipmentSlot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L29) |
| ` public SwitchEquipmentAbilityPacket(InteractionHand hand, EquipmentSlot slot, boolean enabled) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |
| ` public EquipmentSlot slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |
| ` public boolean enabled() ` | 读取 record 分量 ` enabled ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchEquipmentAbilityPacket.java#L15) |

## SwitchHeavyHalberdModePacket

` public record SwitchHeavyHalberdModePacket(InteractionHand hand, int mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchHeavyHalberdModePacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("switch_heavy_halberd_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SwitchHeavyHalberdModePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L16) |
| ` public SwitchHeavyHalberdModePacket(InteractionHand hand) ` | 执行 ` this(hand, CYCLE_MODE) `<br>[调用处 WheelLifecycleEventListener.processHeavyHalberdPress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L800) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L24) |
| ` @Override public Type<SwitchHeavyHalberdModePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L28) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (targetMode == CYCLE_MODE) ` 内调用 ` HeavyHalberdItem.getMode(player.getItemInHand(this.hand)) `<br>分支 ` (targetMode == CYCLE_MODE) ` 内调用 ` player.getItemInHand(this.hand) `<br>实现调用 ` HeavyHalberdItem.setMode(player, this.hand, targetMode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L33) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L13) |
| ` public int mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L13) |

## SwitchMultitoolModePacket

` public record SwitchMultitoolModePacket(InteractionHand hand, int mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchMultitoolModePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("switch_multitool_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L16) |
| ` public static final StreamCodec<ByteBuf, SwitchMultitoolModePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.enumStreamCodec(InteractionHand.class), SwitchMultitoolModePacket::hand, ByteBufCodecs.VAR_INT, SwitchMultitoolModePacket::mode, SwitchMultitoolModePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L17) |
| ` public SwitchMultitoolModePacket(InteractionHand hand) ` | 执行 ` this(hand, CYCLE_MODE) `<br>[调用处 WheelLifecycleEventListener.processMultitoolPress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L769) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L25) |
| ` @Override public Type<SwitchMultitoolModePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L29) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (targetMode == CYCLE_MODE) ` 内调用 ` MultitoolItem.getMode(player.getItemInHand(this.hand)) `<br>分支 ` (targetMode == CYCLE_MODE) ` 内调用 ` player.getItemInHand(this.hand) `<br>实现调用 ` MultitoolItem.setMode(player, this.hand, targetMode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L34) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public int mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L14) |

## SwitchResonateModePacket

` public record SwitchResonateModePacket(InteractionHand hand, int mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchResonateModePacket> TYPE ` | 初值 ` new Type<>(AnvilCraft.of("switch_resonate_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SwitchResonateModePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.enumStreamCodec(InteractionHand.class), SwitchResonateModePacket::hand, ByteBufCodecs.VAR_INT, SwitchResonateModePacket::mode, SwitchResonateModePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L16) |
| ` public SwitchResonateModePacket(InteractionHand hand) ` | 执行 ` this(hand, CYCLE_MODE) `<br>[调用处 WheelLifecycleEventListener.processResonatorPress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L738) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L24) |
| ` @Override public Type<SwitchResonateModePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L28) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (targetMode == CYCLE_MODE) ` 内调用 ` ResonatorItem.getMode(player.getItemInHand(this.hand)) `<br>分支 ` (targetMode == CYCLE_MODE) ` 内调用 ` player.getItemInHand(this.hand) `<br>实现调用 ` ResonatorItem.setMode(player, this.hand, targetMode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L33) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L13) |
| ` public int mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L13) |

## TerminalBalanceModePacket

` public record TerminalBalanceModePacket(BalanceMode mode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19)

修改玩家主 / 副手持有的终端物品自身保存的物品均衡模式。 均衡模式随终端物品保存，而不是玩家全局设置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TerminalBalanceModePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("terminal_balance_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L20) |
| ` public static final StreamCodec<ByteBuf, TerminalBalanceModePacket> STREAM_CODEC ` | 初值 ` BalanceMode.STREAM_CODEC .map(TerminalBalanceModePacket::new, TerminalBalanceModePacket::mode) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L21) |
| ` @Override public Type<TerminalBalanceModePacket> type() ` | 末尾返回 ` TerminalBalanceModePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L24) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` serverPlayer.getMainHandItem() `<br>实现调用 ` TerminalBalanceModePacket.isTerminal(stack) `<br>分支 ` (!TerminalBalanceModePacket.isTerminal(stack)) ` 内调用 ` serverPlayer.getOffhandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L29) |
| ` public TerminalBalanceModePacket(BalanceMode mode) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public BalanceMode mode() ` | 读取 record 分量 ` mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TerminalBalanceModePacket.java#L19) |
