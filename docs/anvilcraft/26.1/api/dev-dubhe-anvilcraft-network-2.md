# dev.dubhe.anvilcraft.network（BuildingRodPacket.Action 至 CreativeLaserInitPacket）



## BuildingRodPacket.Action

` public enum Action `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` PLACE ` | 声明于枚举 ` BuildingRodPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22) |
| ` START ` | 声明于枚举 ` BuildingRodPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22) |
| ` UNDO ` | 声明于枚举 ` BuildingRodPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22) |
| ` PLACE_BLUEPRINTS ` | 声明于枚举 ` BuildingRodPacket.Action ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22) |
| ` public static Action[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22) |
| ` public static Action valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L22) |

## BuildingRodResultPacket

` public record BuildingRodResultPacket(boolean complete, ItemStack placed) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BuildingRodResultPacket(boolean complete) ` | 执行 ` this(complete, ItemStack.EMPTY) `<br>[调用处 BuildingRodService.blueprints](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L262) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L17) |
| ` public static final Type<BuildingRodResultPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("building_rod_result")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L21) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BuildingRodResultPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.BOOL, BuildingRodResultPacket::complete, ItemStack.OPTIONAL_STREAM_CODEC, BuildingRodResultPacket::placed, BuildingRodResultPacket::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L22) |
| ` @Override public Type<BuildingRodResultPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L26) |
| ` @Override public void handleOnClient(Player player) ` | 分支 ` (this.complete) ` 内调用 ` BuildingRodClient.cancel() `<br>分支 ` (this.complete) ` 内调用 ` Minecraft.getInstance() `<br>分支 ` (this.complete) ` 内调用 ` Component.translatable("message.anvilcraft.building_rod.placed") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L31) |
| ` public boolean complete() ` | 读取 record 分量 ` complete ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L16) |
| ` public ItemStack placed() ` | 读取 record 分量 ` placed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodResultPacket.java#L16) |

## ChargeCollectorIncomingChargePacket

` public record ChargeCollectorIncomingChargePacket(BlockPos srcPos, BlockPos dstPos, double count) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ChargeCollectorIncomingChargePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("incoming_charge")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, ChargeCollectorIncomingChargePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L20) |
| ` @Override public Type<ChargeCollectorIncomingChargePacket> type() ` | 末尾返回 ` ChargeCollectorIncomingChargePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L30) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` this.srcPos.getCenter() `<br>实现调用 ` this.dstPos.getCenter() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L35) |
| ` public ChargeCollectorIncomingChargePacket(BlockPos srcPos, BlockPos dstPos, double count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |
| ` public BlockPos srcPos() ` | 读取 record 分量 ` srcPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |
| ` public BlockPos dstPos() ` | 读取 record 分量 ` dstPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |
| ` public double count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargeCollectorIncomingChargePacket.java#L17) |

## ChargedJumpPacket

` public record ChargedJumpPacket(float jumpPower) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ChargedJumpPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("charged_jump")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ChargedJumpPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.FLOAT, ChargedJumpPacket::jumpPower, ChargedJumpPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L14) |
| ` @Override public Type<ChargedJumpPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 执行 ` EquipmentAbilities.applyChargedJump(player, this.jumpPower) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L25) |
| ` public ChargedJumpPacket(float jumpPower) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L12) |
| ` public float jumpPower() ` | 读取 record 分量 ` jumpPower ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L12) |

## ChargerSyncPacket

` public record ChargerSyncPacket(BlockPos pos, int timeLeft, int timeTotal, boolean feCharging) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ChargerSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("charger_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, ChargerSyncPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L16) |
| ` @Override public Type<ChargerSyncPacket> type() ` | 末尾返回 ` ChargerSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L28) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().getBlockEntity(this.pos) `<br>实现调用 ` player.level() `<br>分支 ` (player.level().getBlockEntity(this.pos) instanceof ChargerBlockEntity charger) ` 内调用 ` charger.setTimeLeft(this.timeLeft) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L33) |
| ` public ChargerSyncPacket(BlockPos pos, int timeLeft, int timeTotal, boolean feCharging) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public int timeLeft() ` | 读取 record 分量 ` timeLeft ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public int timeTotal() ` | 读取 record 分量 ` timeTotal ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public boolean feCharging() ` | 读取 record 分量 ` feCharging ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargerSyncPacket.java#L14) |

## ComparatorSyncPacket

` public record ComparatorSyncPacket(BlockPos pos, int output) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ComparatorSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("comparator_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L15) |
| ` public static final StreamCodec<ByteBuf, ComparatorSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, ComparatorSyncPacket::pos, ByteBufCodecs.VAR_INT, ComparatorSyncPacket::output, ComparatorSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L16) |
| ` @Override public Type<ComparatorSyncPacket> type() ` | 末尾返回 ` ComparatorSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L24) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` Util.castSafely(player.level().getBlockEntity(this.pos), ComparatorBlockEntity.class) .ifPresent(entity -> entity.setOutputSignal(this.output)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L29) |
| ` public ComparatorSyncPacket(BlockPos pos, int output) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14) |
| ` public int output() ` | 读取 record 分量 ` output ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ComparatorSyncPacket.java#L14) |

## ControlValveFilterItemPacket

` public record ControlValveFilterItemPacket(ItemStack filterItem) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ControlValveFilterItemPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("control_valve_filter_item")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L21) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ControlValveFilterItemPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStack.OPTIONAL_STREAM_CODEC, ControlValveFilterItemPacket::filterItem, ControlValveFilterItemPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L22) |
| ` @Override public Type<ControlValveFilterItemPacket> type() ` | 末尾返回 ` ControlValveFilterItemPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L26) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (Minecraft.getInstance().screen instanceof ControlValveScreen screen) ` 内调用 ` screen.setFilterItem(this.filterItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L31) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` menu.stillValid(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L36) |
| ` public ControlValveFilterItemPacket(ItemStack filterItem) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L19) |
| ` public ItemStack filterItem() ` | 读取 record 分量 ` filterItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L19) |

## ControlValveFilterPacket

` public record ControlValveFilterPacket(int index, FluidStack fluid) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ControlValveFilterPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("control_valve_filter")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L18) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ControlValveFilterPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, ControlValveFilterPacket::index, FluidStack.OPTIONAL_STREAM_CODEC, ControlValveFilterPacket::fluid, ControlValveFilterPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L19) |
| ` @Override public Type<ControlValveFilterPacket> type() ` | 末尾返回 ` ControlValveFilterPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L27) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (Minecraft.getInstance().screen instanceof ControlValveScreen screen) ` 内调用 ` screen.setFilter(this.index, this.fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L32) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` menu.getBlockEntity().setFilter(this.index, this.fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L39) |
| ` public ControlValveFilterPacket(int index, FluidStack fluid) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17) |
| ` public FluidStack fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterPacket.java#L17) |

## ControlValveInitPacket

` public record ControlValveInitPacket(int maxRate, FluidStack filter, ItemStack filterItem) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ControlValveInitPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("control_valve_init")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L16) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ControlValveInitPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L17) |
| ` @Override public Type<ControlValveInitPacket> type() ` | 末尾返回 ` ControlValveInitPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L24) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (Minecraft.getInstance().screen instanceof ControlValveScreen screen) ` 内调用 ` screen.setValue(this.maxRate) `<br>分支 ` (Minecraft.getInstance().screen instanceof ControlValveScreen screen) ` 内调用 ` screen.setFilter(0, this.filter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L29) |
| ` public ControlValveInitPacket(int maxRate, FluidStack filter, ItemStack filterItem) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |
| ` public int maxRate() ` | 读取 record 分量 ` maxRate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |
| ` public FluidStack filter() ` | 读取 record 分量 ` filter ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |
| ` public ItemStack filterItem() ` | 读取 record 分量 ` filterItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveInitPacket.java#L15) |

## ControlValveUpdatePacket

` public record ControlValveUpdatePacket(int maxRate) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ControlValveUpdatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("control_valve_update")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, ControlValveUpdatePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, ControlValveUpdatePacket::maxRate, ControlValveUpdatePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L15) |
| ` @Override public Type<ControlValveUpdatePacket> type() ` | 末尾返回 ` ControlValveUpdatePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L21) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` be.setMaxRate(this.maxRate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L26) |
| ` public ControlValveUpdatePacket(int maxRate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L13) |
| ` public int maxRate() ` | 读取 record 分量 ` maxRate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveUpdatePacket.java#L13) |

## CreativeLaserInitPacket

` public record CreativeLaserInitPacket(int level, LensType lensType, boolean gamma) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<CreativeLaserInitPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("creative_laser_init")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L17) |
| ` public static final StreamCodec<ByteBuf, CreativeLaserInitPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L18) |
| ` @Override public Type<CreativeLaserInitPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L29) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.setValue(this.level, this.lensType, this.gamma) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L34) |
| ` public CreativeLaserInitPacket(int level, LensType lensType, boolean gamma) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
| ` public LensType lensType() ` | 读取 record 分量 ` lensType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/CreativeLaserInitPacket.java#L16) |
