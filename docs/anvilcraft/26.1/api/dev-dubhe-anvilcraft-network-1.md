# dev.dubhe.anvilcraft.network（AdvancedComparatorUpdatePacket 至 BuildingRodPacket）



## AdvancedComparatorUpdatePacket

` public record AdvancedComparatorUpdatePacket(byte compareMode, boolean outputInvert, boolean redstoneControl, int highLimit, int lowLimit, int inputSignal) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<AdvancedComparatorUpdatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("advanced_comparator_update")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L21) |
| ` public static final StreamCodec<ByteBuf, AdvancedComparatorUpdatePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L22) |
| ` @Override public Type<AdvancedComparatorUpdatePacket> type() ` | 末尾返回 ` AdvancedComparatorUpdatePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L38) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.hasContainerOpen() `<br>实现调用 ` menu.getBlockEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L43) |
| ` public AdvancedComparatorUpdatePacket(byte compareMode, boolean outputInvert, boolean redstoneControl, int highLimit, int lowLimit, int inputSignal) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L13) |
| ` public byte compareMode() ` | 读取 record 分量 ` compareMode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L14) |
| ` public boolean outputInvert() ` | 读取 record 分量 ` outputInvert ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L15) |
| ` public boolean redstoneControl() ` | 读取 record 分量 ` redstoneControl ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L16) |
| ` public int highLimit() ` | 读取 record 分量 ` highLimit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L17) |
| ` public int lowLimit() ` | 读取 record 分量 ` lowLimit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L18) |
| ` public int inputSignal() ` | 读取 record 分量 ` inputSignal ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AdvancedComparatorUpdatePacket.java#L13) |

## AutoEnchantingTableFluidPacket

` public record AutoEnchantingTableFluidPacket(BlockPos pos) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<AutoEnchantingTableFluidPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("auto_enchanting_table_fluid")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L24) |
| ` public static final StreamCodec<ByteBuf, AutoEnchantingTableFluidPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, AutoEnchantingTableFluidPacket::pos, AutoEnchantingTableFluidPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L25) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L31) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.level() `<br>实现调用 ` level.getBlockEntity(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L36) |
| ` public AutoEnchantingTableFluidPacket(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L23) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L23) |

## AutoEnchantingTableLevelPacket

` public record AutoEnchantingTableLevelPacket(int level) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<AutoEnchantingTableLevelPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("auto_enchanting_table_level")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, AutoEnchantingTableLevelPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, AutoEnchantingTableLevelPacket::level, AutoEnchantingTableLevelPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L14) |
| ` @Override public Type<AutoEnchantingTableLevelPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.hasContainerOpen() `<br>实现调用 ` menu.setLiquidLevel(this.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L25) |
| ` public AutoEnchantingTableLevelPacket(int level) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) |

## AutoEnchantingTableSyncPacket

` public record AutoEnchantingTableSyncPacket(int index, boolean select) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<AutoEnchantingTableSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("auto_enchanting_table_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, AutoEnchantingTableSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, AutoEnchantingTableSyncPacket::index, ByteBufCodecs.BOOL, AutoEnchantingTableSyncPacket::select, AutoEnchantingTableSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L14) |
| ` @Override public Type<AutoEnchantingTableSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.hasContainerOpen() `<br>分支 ` (this.select) ` 内调用 ` menu.select(this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L27) |
| ` public AutoEnchantingTableSyncPacket(int index, boolean select) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12) |
| ` public boolean select() ` | 读取 record 分量 ` select ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableSyncPacket.java#L12) |

## BatchCrafterSelectPacket

` public record BatchCrafterSelectPacket(int selecting, BlockPos pos) implements IInsensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<BatchCrafterSelectPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("batch_crafter_select")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, BatchCrafterSelectPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, BatchCrafterSelectPacket::selecting, BlockPos.STREAM_CODEC, BatchCrafterSelectPacket::pos, BatchCrafterSelectPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L20) |
| ` @Override public Type<BatchCrafterSelectPacket> type() ` | 末尾返回 ` BatchCrafterSelectPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L28) |
| ` @Override public void handleOnBothSide(Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` player.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L33) |
| ` public BatchCrafterSelectPacket(int selecting, BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18) |
| ` public int selecting() ` | 读取 record 分量 ` selecting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCrafterSelectPacket.java#L18) |

## BatchCutterSelectPacket

` public record BatchCutterSelectPacket(int selecting, BlockPos pos) implements IInsensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<BatchCutterSelectPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("batch_cutter_select")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L18) |
| ` public static final StreamCodec<ByteBuf, BatchCutterSelectPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, BatchCutterSelectPacket::selecting, BlockPos.STREAM_CODEC, BatchCutterSelectPacket::pos, BatchCutterSelectPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L19) |
| ` @Override public Type<BatchCutterSelectPacket> type() ` | 末尾返回 ` BatchCutterSelectPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L27) |
| ` @Override public void handleOnBothSide(Player player) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` player.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L32) |
| ` public BatchCutterSelectPacket(int selecting, BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17) |
| ` public int selecting() ` | 读取 record 分量 ` selecting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BatchCutterSelectPacket.java#L17) |

## BigRedButtonHoldPacket

` public record BigRedButtonHoldPacket(BlockPos pos, Vec3 hitLocation, boolean held, int holdId) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<BigRedButtonHoldPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("big_red_button_hold")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L24) |
| ` public static final StreamCodec<FriendlyByteBuf, BigRedButtonHoldPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L25) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L33) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` BigRedButtonInputListener.handleHoldResult(this.pos, this.holdId, this.held) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L38) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` this.updateButton(player) `<br>实现调用 ` Util.cast(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L43) |
| ` public BigRedButtonHoldPacket(BlockPos pos, Vec3 hitLocation, boolean held, int holdId) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public Vec3 hitLocation() ` | 读取 record 分量 ` hitLocation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public boolean held() ` | 读取 record 分量 ` held ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public int holdId() ` | 读取 record 分量 ` holdId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L23) |

## BoxSelectionSyncPacket

` public record BoxSelectionSyncPacket(int menuId, int slotIndex, int selection) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24)

把滚轮选中的索引同步到服务端槽位。选中索引存放在物品组件里，而滚轮只改动客户端副本： 生存模式下该改动不会回传服务端（创造模式由创造模式物品栏的槽位监听器顺带同步）， 于是服务端取出时读到的仍是旧索引，拿出的物品与界面高亮的不一致。 只同步索引，不同步物品内容——否则生存模式客户端可凭空伪造盒内物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<BoxSelectionSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("box_selection_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L25) |
| ` public static final StreamCodec<ByteBuf, BoxSelectionSyncPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L26) |
| ` @Override public Type<BoxSelectionSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L36) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` this.menuId() `<br>实现调用 ` this.slotIndex() `<br>实现调用 ` player.containerMenu.slots.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L41) |
| ` public BoxSelectionSyncPacket(int menuId, int slotIndex, int selection) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |
| ` public int menuId() ` | 读取 record 分量 ` menuId `<br>[调用处 BoxSelectionSyncPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |
| ` public int slotIndex() ` | 读取 record 分量 ` slotIndex `<br>[调用处 BoxSelectionSyncPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |
| ` public int selection() ` | 读取 record 分量 ` selection `<br>[调用处 BoxSelectionSyncPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java#L24) |

## BuildingRodObstructionPacket

` public record BuildingRodObstructionPacket(List<Integer> entities) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<BuildingRodObstructionPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("building_rod_obstruction")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BuildingRodObstructionPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT.apply(ByteBufCodecs.list()), BuildingRodObstructionPacket::entities, BuildingRodObstructionPacket::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L16) |
| ` @Override public Type<BuildingRodObstructionPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L19) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` BuildingRodObstructionHighlight.show(player.level(), this.entities) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L24) |
| ` public BuildingRodObstructionPacket(List<Integer> entities) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L14) |
| ` public List<Integer> entities() ` | 读取 record 分量 ` entities ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodObstructionPacket.java#L14) |

## BuildingRodPacket

` public record BuildingRodPacket(BlockPos first, BlockPos last, Direction face, boolean blueprint, Rotation rotation, Mirror mirror, boolean partial, BlockHitResult hit, Action action, long seed) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BuildingRodPacket(BlockPos first, BlockPos last, Direction face, boolean blueprint, Rotation rotation, Mirror mirror, boolean partial, @Nullable BlockHitResult hit, Action action) ` | 执行 ` this(first, last, face, blueprint, rotation, mirror, partial, hit, action, 0) `<br>[调用处 BuildingRodClient.handleKeyboardInput](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L432) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L24) |
| ` public BuildingRodPacket(BlockPos first, BlockPos last, Direction face, boolean blueprint, Rotation rotation, Mirror mirror, boolean partial, @Nullable BlockHitResult hit) ` | 执行 ` this(first, last, face, blueprint, rotation, mirror, partial, hit, Action.PLACE) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L29) |
| ` public BuildingRodPacket(BlockPos first, BlockPos last, Direction face, boolean blueprint, Rotation rotation, Mirror mirror, boolean partial) ` | 执行 ` this(first, last, face, blueprint, rotation, mirror, partial, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L34) |
| ` public static final Type<BuildingRodPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("building_rod")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L39) |
| ` public static final StreamCodec<FriendlyByteBuf, BuildingRodPacket> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L40) |
| ` @Override public Type<BuildingRodPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L59) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (this.action == Action.UNDO) ` 内调用 ` BuildingRodUndo.undo(serverPlayer) `<br>分支 ` (this.action == Action.START) ` 内调用 ` BuildingRodService.start(serverPlayer, this.first, this.face, this.hit, this.seed) `<br>分支 ` (this.action == Action.PLACE_BLUEPRINTS && this.blueprint) ` 内调用 ` BuildingRodService.blueprints(serverPlayer, this.first, this.last, this.rotation, this.mirror, this.partial) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L64) |
| ` public BlockPos first() ` | 读取 record 分量 ` first ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
| ` public BlockPos last() ` | 读取 record 分量 ` last ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
| ` public Direction face() ` | 读取 record 分量 ` face ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
| ` public boolean blueprint() ` | 读取 record 分量 ` blueprint ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
| ` public Rotation rotation() ` | 读取 record 分量 ` rotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L20) |
| ` public Mirror mirror() ` | 读取 record 分量 ` mirror ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L20) |
| ` public boolean partial() ` | 读取 record 分量 ` partial ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L20) |
| ` public BlockHitResult hit() ` | 读取 record 分量 ` hit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L21) |
| ` public Action action() ` | 读取 record 分量 ` action ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L21) |
| ` public long seed() ` | 读取 record 分量 ` seed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L19) |
