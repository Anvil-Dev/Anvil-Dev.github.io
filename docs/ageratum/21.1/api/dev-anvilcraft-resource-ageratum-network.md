# dev.anvilcraft.resource.ageratum.network



## AgeratumNetwork

` public final class AgeratumNetwork `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L17)

Ageratum 网络注册与发送工具。

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String NETWORK_VERSION ` | 初值 ` AgeratumConstants.Network.PROTOCOL_VERSION ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L19) |
| ` @SubscribeEvent public static void register(RegisterPayloadHandlersEvent event) ` | 注册模组网络负载处理器。<br>事件总线派发 ` RegisterPayloadHandlersEvent ` 时调用。<br>实现调用 ` event.registrar(NETWORK_VERSION) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L27) |
| ` public static void sendOpenGuide(ServerPlayer serverPlayer, ResourceLocation location) ` | 向客户端发送打开文档请求。<br>执行 ` PacketDistributor.sendToPlayer(serverPlayer, new OpenGuidePayload(location)) `<br>[调用处 Ageratum.openGuide](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L86) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L50) |

## ExportStructurePayload

` public record ExportStructurePayload(ResourceLocation location, int totalBytes, int offset, byte[] data) implements CustomPacketPayload `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10)

Bounded chunks keep structure exports below the serverbound custom payload limit.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CHUNK_BYTES ` | 初值 ` 24 * 1024 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L12) |
| ` public static final int MAX_BYTES ` | 初值 ` 8 * 1024 * 1024 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L13) |
| ` public static final Type<ExportStructurePayload> TYPE ` | 初值 ` new Type<>(Ageratum.location("export_structure")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ExportStructurePayload> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L15) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L26) |
| ` public ExportStructurePayload(ResourceLocation location, int totalBytes, int offset, byte[] data) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public ResourceLocation location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public int totalBytes() ` | 读取 record 分量 ` totalBytes ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public int offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public byte[] data() ` | 读取 record 分量 ` data ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) |

## OpenGuidePayload

` public record OpenGuidePayload(ResourceLocation location) implements CustomPacketPayload `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12)

请求客户端打开指定指南文档的网络负载。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OpenGuidePayload> TYPE ` | 初值 ` new Type<>(Ageratum.location("open_guide")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OpenGuidePayload> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ResourceLocation.STREAM_CODEC, OpenGuidePayload::location, OpenGuidePayload::new ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L14) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` OpenGuidePayload.TYPE ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L20) |
| ` public OpenGuidePayload(ResourceLocation location) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public ResourceLocation location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |

## ServerPayloadHandler

` public class ServerPayloadHandler `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handleShareGuide(ShareGuidePayload payload, IPayloadContext context) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java#L18) |
| ` public ServerPayloadHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java#L17) |

## ShareGuidePayload

` public record ShareGuidePayload(ResourceLocation location, String anchor, boolean sameTeam) implements CustomPacketPayload `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13)

请求客户端打开指定指南文档的网络负载。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ShareGuidePayload> TYPE ` | 初值 ` new Type<>(Ageratum.location("share_guide")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ShareGuidePayload> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L15) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` ShareGuidePayload.TYPE ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L25) |
| ` public ShareGuidePayload(ResourceLocation location, String anchor, boolean sameTeam) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public ResourceLocation location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public String anchor() ` | 读取 record 分量 ` anchor ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public boolean sameTeam() ` | 读取 record 分量 ` sameTeam ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |

## StructureExportHandler

` public final class StructureExportHandler `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L21)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handle(ExportStructurePayload payload, IPayloadContext context) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L31) |
| ` @SubscribeEvent public static void onLogout(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` TRANSFERS.remove(event.getEntity().getUUID()) `<br>实现调用 ` event.getEntity().getUUID() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L80) |
| ` @SubscribeEvent public static void onServerTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>实现调用 ` System.nanoTime() `<br>实现调用 ` TRANSFERS.entrySet().removeIf(entry -> now - entry.getValue().started > TIMEOUT_NANOS) `<br>实现调用 ` TRANSFERS.entrySet() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L86) |
