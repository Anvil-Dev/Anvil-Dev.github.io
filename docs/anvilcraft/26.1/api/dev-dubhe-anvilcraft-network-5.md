# dev.dubhe.anvilcraft.network（IonoCraftBackpackToggleDescentPacket 至 OverseerSyncPacket）



## IonoCraftBackpackToggleDescentPacket

` public record IonoCraftBackpackToggleDescentPacket() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<IonoCraftBackpackToggleDescentPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("ionocraft_backpack_toggle_descent")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, IonoCraftBackpackToggleDescentPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new IonoCraftBackpackToggleDescentPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L14) |
| ` @Override public Type<IonoCraftBackpackToggleDescentPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L18) |
| ` @Override public void handleOnServer(Player player) ` | 分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` IonoCraftBackpackItem.toggleSlowFalling(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L23) |
| ` public IonoCraftBackpackToggleDescentPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackToggleDescentPacket.java#L12) |

## ItemDetectorChangeRangePacket

` public record ItemDetectorChangeRangePacket(int range) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ItemDetectorChangeRangePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("item_detector_change_range")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, ItemDetectorChangeRangePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, ItemDetectorChangeRangePacket::range, ItemDetectorChangeRangePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L14) |
| ` @Override public Type<ItemDetectorChangeRangePacket> type() ` | 末尾返回 ` ItemDetectorChangeRangePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.setRange(this.range) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L25) |
| ` public ItemDetectorChangeRangePacket(int range) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public int range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ItemDetectorChangeRangePacket.java#L12) |

## JewelCraftingAutoFillPacket

` public record JewelCraftingAutoFillPacket() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L13)

宝石工艺台自动填充网络包 用于将客户端的自动填充请求发送到服务端执行

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<JewelCraftingAutoFillPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("jewel_crafting_auto_fill")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, JewelCraftingAutoFillPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new JewelCraftingAutoFillPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L15) |
| ` @Override public Type<JewelCraftingAutoFillPacket> type() ` | 末尾返回 ` JewelCraftingAutoFillPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L19) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.autoFill() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L24) |
| ` public JewelCraftingAutoFillPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/JewelCraftingAutoFillPacket.java#L13) |

## LaserEmitPacket

` public record LaserEmitPacket(int level, BlockPos laserPos, BlockPos irradiatePos, boolean gamma) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<LaserEmitPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("laser_emit")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L21) |
| ` public static final StreamCodec<ByteBuf, LaserEmitPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L22) |
| ` @Override public Type<LaserEmitPacket> type() ` | 末尾返回 ` LaserEmitPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L43) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().getBlockEntity(this.laserPos) `<br>实现调用 ` player.level() `<br>实现调用 ` laser.clientUpdateComponents(this.level, this.gamma) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L48) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |
| ` public BlockPos laserPos() ` | 读取 record 分量 ` laserPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |
| ` public BlockPos irradiatePos() ` | 读取 record 分量 ` irradiatePos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/LaserEmitPacket.java#L20) |

## MachineCycleFilterModePacket

` public record MachineCycleFilterModePacket(Mode filterMode) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<MachineCycleFilterModePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("machine_cycle_filter_mode")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, MachineCycleFilterModePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.enumStreamCodec(Mode.class), MachineCycleFilterModePacket::filterMode, MachineCycleFilterModePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L15) |
| ` @Override public Type<MachineCycleFilterModePacket> type() ` | 末尾返回 ` MachineCycleFilterModePacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L21) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.setFilterMode(this.filterMode) `<br>实现调用 ` menu.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L26) |
| ` public MachineCycleFilterModePacket(Mode filterMode) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L13) |
| ` public Mode filterMode() ` | 读取 record 分量 ` filterMode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineCycleFilterModePacket.java#L13) |

## MachineEnableFilterPacket

` public record MachineEnableFilterPacket(boolean filterEnabled) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<MachineEnableFilterPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("machine_record_material")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L18) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MachineEnableFilterPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.BOOL, MachineEnableFilterPacket::filterEnabled, MachineEnableFilterPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L19) |
| ` @Override public Type<MachineEnableFilterPacket> type() ` | 末尾返回 ` MachineEnableFilterPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L25) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (Minecraft.getInstance().screen instanceof IFilterScreen<?> screen) ` 内调用 ` screen.setFilterEnabled(this.filterEnabled()) `<br>分支 ` (Minecraft.getInstance().screen instanceof IFilterScreen<?> screen) ` 内调用 ` this.filterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L30) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.hasContainerOpen() `<br>实现调用 ` menu.setFilterEnabled(this.filterEnabled()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L38) |
| ` public MachineEnableFilterPacket(boolean filterEnabled) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L17) |
| ` public boolean filterEnabled() ` | 读取 record 分量 ` filterEnabled `<br>[调用处 MachineEnableFilterPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L17) |

## MachineOutputDirectionPacket

` public record MachineOutputDirectionPacket(Direction direction) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<MachineOutputDirectionPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("machine_output_direction")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L17) |
| ` public static final StreamCodec<ByteBuf, MachineOutputDirectionPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( Direction.STREAM_CODEC, MachineOutputDirectionPacket::direction, MachineOutputDirectionPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L18) |
| ` @Override public Type<MachineOutputDirectionPacket> type() ` | 末尾返回 ` MachineOutputDirectionPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L24) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.getDirectionButton() `<br>实现调用 ` screen.getDirectionButton().setDirection(this.direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L29) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` this.direction() `<br>实现调用 ` menu.setDirection(direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L36) |
| ` public MachineOutputDirectionPacket(Direction direction) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L16) |
| ` public Direction direction() ` | 读取 record 分量 ` direction `<br>[调用处 MachineOutputDirectionPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineOutputDirectionPacket.java#L16) |

## MagnetAnvilAnimationPacket

` public record MagnetAnvilAnimationPacket(Vec3 start, BlockPos end, BlockState state, boolean requiresMagnet) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<MagnetAnvilAnimationPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("magnet_anvil_animation")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L18) |
| ` public static final StreamCodec<FriendlyByteBuf, MagnetAnvilAnimationPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L19) |
| ` @Override public Type<MagnetAnvilAnimationPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L27) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` MagnetAnvilAnimation.start(this.start, this.end, this.state, this.requiresMagnet) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L32) |
| ` public MagnetAnvilAnimationPacket(Vec3 start, BlockPos end, BlockState state, boolean requiresMagnet) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public Vec3 start() ` | 读取 record 分量 ` start ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public BlockPos end() ` | 读取 record 分量 ` end ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public boolean requiresMagnet() ` | 读取 record 分量 ` requiresMagnet ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L16) |

## MutedSoundSyncPacket

` public record MutedSoundSyncPacket(List<Identifier> sounds) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<MutedSoundSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("muted_sound_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L17) |
| ` public static final StreamCodec<ByteBuf, MutedSoundSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( Identifier.STREAM_CODEC.apply(ByteBufCodecs.list()), MutedSoundSyncPacket::sounds, MutedSoundSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L18) |
| ` @Override public Type<MutedSoundSyncPacket> type() ` | 末尾返回 ` MutedSoundSyncPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L24) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.handleSync(this.sounds) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L29) |
| ` public MutedSoundSyncPacket(List<Identifier> sounds) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L16) |
| ` public List<Identifier> sounds() ` | 读取 record 分量 ` sounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MutedSoundSyncPacket.java#L16) |

## OpenHammerAnvilPacket

` public record OpenHammerAnvilPacket(int menuSlotId) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OpenHammerAnvilPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("open_hammer_anvil")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, OpenHammerAnvilPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, OpenHammerAnvilPacket::menuSlotId, OpenHammerAnvilPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L14) |
| ` @Override public Type<OpenHammerAnvilPacket> type() ` | 末尾返回 ` OpenHammerAnvilPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 执行 ` AnvilHammerItem.openPortableAnvilFromMenuSlot(player, this.menuSlotId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L25) |
| ` public OpenHammerAnvilPacket(int menuSlotId) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L12) |
| ` public int menuSlotId() ` | 读取 record 分量 ` menuSlotId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L12) |

## OpenIntegrationScreenPacket

` public record OpenIntegrationScreenPacket() implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OpenIntegrationScreenPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("open_integration_screen")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L12) |
| ` public static final StreamCodec<ByteBuf, OpenIntegrationScreenPacket> STREAM_CODEC ` | 初值 ` StreamCodec.unit( new OpenIntegrationScreenPacket() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L13) |
| ` @Override public Type<OpenIntegrationScreenPacket> type() ` | 末尾返回 ` OpenIntegrationScreenPacket.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L17) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` IntegrationUtil.openIntegrationScreen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L22) |
| ` public OpenIntegrationScreenPacket() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OpenIntegrationScreenPacket.java#L11) |

## OverseerSyncPacket

` public record OverseerSyncPacket(ResourceKey<Level> dimension, BlockPos source, Map<Long, Integer> chunks) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21)

An empty chunk map removes the source; other updates replace that source's loaded chunks.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OverseerSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("overseer_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L23) |
| ` public static final StreamCodec<FriendlyByteBuf, OverseerSyncPacket> STREAM_CODEC ` | 字段类型为 ` StreamCodec<FriendlyByteBuf, OverseerSyncPacket> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L24) |
| ` public static OverseerSyncPacket of(LoadChunkData data) ` | 末尾返回 ` new OverseerSyncPacket(data.getServerLevel().dimension(), data.getCenterPos(), Map.copyOf(chunks)) `<br>[调用处 LevelLoadManager.syncOverseers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/LevelLoadManager.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L50) |
| ` @Override public Type<OverseerSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L63) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` OverseerMapData.update(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L68) |
| ` public OverseerSyncPacket(ResourceKey<Level> dimension, BlockPos source, Map<Long, Integer> chunks) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
| ` public ResourceKey<Level> dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
| ` public BlockPos source() ` | 读取 record 分量 ` source ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
| ` public Map<Long, Integer> chunks() ` | 读取 record 分量 ` chunks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java#L21) |
