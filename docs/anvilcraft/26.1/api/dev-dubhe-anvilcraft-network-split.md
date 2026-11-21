# dev.dubhe.anvilcraft.network.split



## PacketCollector

` public class PacketCollector `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketCollector.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PacketCollector( int total, Identifier typeId, RegistryAccess registryAccess, ICommonPacketListener listener, ConnectionProtocol protocol, PacketFlow flow ) ` | [调用处 PacketCollector.header](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketCollector.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketCollector.java#L30) |

## PacketSplitter

` public class PacketSplitter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final PacketSplitter INSTANCE ` | 初值 ` new PacketSplitter() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L25) |
| ` public PacketSplitter() ` | 当前实现的方法体为空。<br>[调用处 PacketSplitter](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L29) |
| ` public <T extends CustomPacketPayload> void split( final CustomPacketPayload.Type<T> type, final StreamCodec<? super FriendlyByteBuf, T> codec, final T payload, Consumer<CustomPacketPayload> sender ) ` | 执行 ` this.split(type, codec, payload, PacketSplitter.DEFAULT_PART_SIZE, sender) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L32) |
| ` public <T extends CustomPacketPayload> void split( final CustomPacketPayload.Type<T> type, final StreamCodec<? super FriendlyByteBuf, T> codec, final T payload, int partSize, Consumer<CustomPacketPayload> sender ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L41) |
| ` public <T extends CustomPacketPayload> void split( final CustomPacketPayload.Type<T> type, final StreamCodec<RegistryFriendlyByteBuf, T> codec, final T payload, RegistryAccess registryAccess, Consumer<CustomPacketPayload> sender ) ` | 执行 ` this.split(type, codec, payload, PacketSplitter.DEFAULT_PART_SIZE, registryAccess, sender) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L74) |
| ` public <T extends CustomPacketPayload> void split( final CustomPacketPayload.Type<T> type, final StreamCodec<RegistryFriendlyByteBuf, T> codec, final T payload, int partSize, RegistryAccess registryAccess, Consumer<CustomPacketPayload> sender ) ` | [调用处 PacketSplitter.split](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java#L84) |
