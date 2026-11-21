# dev.dubhe.anvilcraft.network（SilencerAddMutedPacket 至 SpacetimeSupercomputerBlockEntitySyncPacket）



## SilencerAddMutedPacket

` public record SilencerAddMutedPacket(ResourceLocation soundId) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SilencerAddMutedPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("silencer_add_muted")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, SilencerAddMutedPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ResourceLocation.STREAM_CODEC, SilencerAddMutedPacket::soundId, SilencerAddMutedPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L14) |
| ` @Override public Type<SilencerAddMutedPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof ActiveSilencerMenu menu) ` 内调用 ` menu.addSound(this.soundId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L25) |
| ` public SilencerAddMutedPacket(ResourceLocation soundId) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L12) |
| ` public ResourceLocation soundId() ` | 读取 record 分量 ` soundId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerAddMutedPacket.java#L12) |

## SilencerRemoveMutedPacket

` public record SilencerRemoveMutedPacket(ResourceLocation soundId) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SilencerRemoveMutedPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("silencer_remove_muted")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L13) |
| ` public static final StreamCodec<ByteBuf, SilencerRemoveMutedPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ResourceLocation.STREAM_CODEC, SilencerRemoveMutedPacket::soundId, SilencerRemoveMutedPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L14) |
| ` @Override public Type<SilencerRemoveMutedPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L20) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>分支 ` (player.containerMenu instanceof ActiveSilencerMenu menu) ` 内调用 ` menu.removeSound(this.soundId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L25) |
| ` public SilencerRemoveMutedPacket(ResourceLocation soundId) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L12) |
| ` public ResourceLocation soundId() ` | 读取 record 分量 ` soundId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerRemoveMutedPacket.java#L12) |

## SilencerSyncPacket

` public record SilencerSyncPacket(BlockPos pos, List<ResourceLocation> sounds) implements IInsensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SilencerSyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("silencer_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, SilencerSyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, SilencerSyncPacket::pos, ByteBufCodecs.collection(ArrayList::new, ResourceLocation.STREAM_CODEC), SilencerSyncPacket::sounds, SilencerSyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L20) |
| ` @Override public Type<SilencerSyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L28) |
| ` @Override public void handleOnBothSide(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` player.isSpectator() `<br>实现调用 ` player.level().isLoaded(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L33) |
| ` public SilencerSyncPacket(BlockPos pos, List<ResourceLocation> sounds) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18) |
| ` public List<ResourceLocation> sounds() ` | 读取 record 分量 ` sounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SilencerSyncPacket.java#L18) |

## SliderInitPacket

` public record SliderInitPacket(int value) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SliderInitPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("slider_init")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, SliderInitPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, SliderInitPacket::value, SliderInitPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L15) |
| ` @Override public Type<SliderInitPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L21) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.setValue(this.value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L26) |
| ` public SliderInitPacket(int value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L13) |
| ` public int value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderInitPacket.java#L13) |

## SliderUpdatePacket

` public record SliderUpdatePacket(int value) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SliderUpdatePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("slider_update")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L14) |
| ` public static final StreamCodec<ByteBuf, SliderUpdatePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, SliderUpdatePacket::value, SliderUpdatePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L15) |
| ` @Override public Type<SliderUpdatePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L21) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getCallback() `<br>实现调用 ` callback.onValueChange(this.value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L26) |
| ` public SliderUpdatePacket(int value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L13) |
| ` public int value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SliderUpdatePacket.java#L13) |

## SlidingEntitySyncPacket

` public record SlidingEntitySyncPacket(int id, List<SlidingBlockInfo> infos, Direction moveDirection) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SlidingEntitySyncPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("sliding_entity_sync")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L18) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SlidingEntitySyncPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L19) |
| ` @Override public Type<SlidingEntitySyncPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L29) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level().getEntity(this.id) `<br>实现调用 ` player.level() `<br>实现调用 ` sliding.setSection(new SlidingBlockSection(this.infos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L34) |
| ` public SlidingEntitySyncPacket(int id, List<SlidingBlockInfo> infos, Direction moveDirection) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |
| ` public int id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |
| ` public List<SlidingBlockInfo> infos() ` | 读取 record 分量 ` infos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |
| ` public Direction moveDirection() ` | 读取 record 分量 ` moveDirection ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L17) |

## SlotDisableChangePacket

` public record SlotDisableChangePacket(int index, boolean state) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SlotDisableChangePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("slot_disable_change")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L17) |
| ` public static final StreamCodec<ByteBuf, SlotDisableChangePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.INT, SlotDisableChangePacket::index, ByteBufCodecs.BOOL, SlotDisableChangePacket::state, SlotDisableChangePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L18) |
| ` @Override public Type<SlotDisableChangePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L26) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.setSlotDisabled(this.index, this.state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L31) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.setSlotDisabled(this.index, this.state) `<br>实现调用 ` menu.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L37) |
| ` public SlotDisableChangePacket(int index, boolean state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16) |
| ` public boolean state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotDisableChangePacket.java#L16) |

## SlotFilterChangePacket

` public record SlotFilterChangePacket(int index, ItemStack filter) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SlotFilterChangePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("slot_filter_change")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L18) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SlotFilterChangePacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, SlotFilterChangePacket::index, ItemStack.OPTIONAL_STREAM_CODEC, SlotFilterChangePacket::filter, SlotFilterChangePacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L19) |
| ` public SlotFilterChangePacket(int index, ItemStack filter, boolean forceCount) ` | 更改过滤<br>参数 ` index ` 槽位<br>参数 ` filter ` 过滤<br>执行 ` this(index, forceCount ? filter.copyWithCount(1) : filter.copy()) `<br>[调用处 ItemDetectorScreen.slotClicked](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L205) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L33) |
| ` @Override public Type<SlotFilterChangePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L37) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.setFilter(this.index, this.filter) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L42) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.setFilter(this.index, this.filter) `<br>实现调用 ` menu.flush() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L48) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L17) |
| ` public ItemStack filter() ` | 读取 record 分量 ` filter ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterChangePacket.java#L17) |

## SlotFilterMaxStackSizeChangePacket

` public record SlotFilterMaxStackSizeChangePacket(int index, int maxStackSize) implements ISensitiveBiPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SlotFilterMaxStackSizeChangePacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("slot_filter_max_stack_size_change")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L19) |
| ` public static final StreamCodec<ByteBuf, SlotFilterMaxStackSizeChangePacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L20) |
| ` @Override public Type<SlotFilterMaxStackSizeChangePacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L28) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.getFilterMenu().getFilterBlockEntity() `<br>实现调用 ` screen.getFilterMenu() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L33) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.hasContainerOpen() `<br>实现调用 ` menu.getFilterBlockEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L40) |
| ` public SlotFilterMaxStackSizeChangePacket(int index, int maxStackSize) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18) |
| ` public int maxStackSize() ` | 读取 record 分量 ` maxStackSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlotFilterMaxStackSizeChangePacket.java#L18) |

## SmartBlockPlacerActionPacket

` public record SmartBlockPlacerActionPacket(String action, int value, String name) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21)

SmartBlockPlacer 统一网络包 动作类型: - "mode" - 切换拾取/移动模式 (value: 0=移动模式, 1=拾取模式) - "layer" - 切换当前查看的层 (value: 0-4) - "position" - 切换位置选择 (value: 0-24位置索引, name: "layer:position:selected" 格式) - "missingMode" - 切换缺少方块处理模式 (value: 0=停止模式, 1=跳过模式)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SmartBlockPlacerActionPacket> TYPE ` | 初值 ` IPacket.type( AnvilCraft.of("smart_block_placer_action") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L22) |
| ` public static final StreamCodec<ByteBuf, SmartBlockPlacerActionPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L26) |
| ` public SmartBlockPlacerActionPacket(String action, int value) ` | 执行 ` this(action, value, "") `<br>[调用处 SmartBlockPlacerScreen.setSkipMissingMode](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L455) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L37) |
| ` @Override public Type<SmartBlockPlacerActionPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L41) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` menu.getBlockEntity() `<br>实现调用 ` blockEntity.setPickupMode(pickupMode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L46) |
| ` public String action() ` | 读取 record 分量 ` action ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21) |
| ` public int value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SmartBlockPlacerActionPacket.java#L21) |

## SpacetimeSupercomputerBlockEntitySyncPacket

` public record SpacetimeSupercomputerBlockEntitySyncPacket(BlockPos pos) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, SpacetimeSupercomputerBlockEntitySyncPacket> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, SpacetimeSupercomputerBlockEntitySyncPacket::pos, SpacetimeSupercomputerBlockEntitySyncPacket::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L20) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L26) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getBlockEntity(this.pos) `<br>分支 ` (blockEntity instanceof SpacetimeSupercomputerBlockEntity) ` 内调用 ` this.updateScreenIfOpen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L31) |
| ` public SpacetimeSupercomputerBlockEntitySyncPacket(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L17) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SpacetimeSupercomputerBlockEntitySyncPacket.java#L17) |
