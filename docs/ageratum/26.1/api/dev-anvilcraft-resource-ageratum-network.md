# dev.anvilcraft.resource.ageratum.network



## AgeratumNetwork

` public final class AgeratumNetwork `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L17)

Ageratum 网络注册与发送工具。

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String NETWORK_VERSION ` | 初值 ` AgeratumConstants.Network.PROTOCOL_VERSION ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L19) |
| ` @SubscribeEvent public static void register(RegisterPayloadHandlersEvent event) ` | 注册模组网络负载处理器。<br>事件总线派发 ` RegisterPayloadHandlersEvent ` 时调用。<br>实现调用 ` event.registrar(NETWORK_VERSION) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L27) |
| ` public static void sendOpenGuide(ServerPlayer serverPlayer, Identifier location) ` | 向客户端发送打开文档请求。<br>执行 ` PacketDistributor.sendToPlayer(serverPlayer, new OpenGuidePayload(location)) `<br>[调用处 Ageratum.openGuide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L60) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L50) |
| ` public static void sendGitHubOpenGuide(ServerPlayer serverPlayer, String uri) ` | 向客户端发送打开 GitHub 远程指南请求。<br>执行 ` PacketDistributor.sendToPlayer(serverPlayer, new GitHubOpenGuidePayload(uri)) `<br>[调用处 Ageratum.openGitHubGuide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L72) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L57) |

## GitHubOpenGuidePayload

` public record GitHubOpenGuidePayload(String uri) implements CustomPacketPayload `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L11)

请求客户端打开 GitHub 远程指南的网络负载。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<GitHubOpenGuidePayload> TYPE ` | 初值 ` new Type<>(Ageratum.location("github_open_guide")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L12) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, GitHubOpenGuidePayload> STREAM_CODEC ` | 初值 ` StreamCodec.composite( net.minecraft.network.codec.ByteBufCodecs.STRING_UTF8, GitHubOpenGuidePayload::uri, GitHubOpenGuidePayload::new ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L13) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` GitHubOpenGuidePayload.TYPE ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L19) |
| ` public GitHubOpenGuidePayload(String uri) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L11) |
| ` public String uri() ` | 读取 record 分量 ` uri ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/GitHubOpenGuidePayload.java#L11) |

## OpenGuidePayload

` public record OpenGuidePayload(Identifier location) implements CustomPacketPayload `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12)

请求客户端打开指定指南文档的网络负载。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<OpenGuidePayload> TYPE ` | 初值 ` new Type<>(Ageratum.location("open_guide")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OpenGuidePayload> STREAM_CODEC ` | 初值 ` StreamCodec.composite( Identifier.STREAM_CODEC, OpenGuidePayload::location, OpenGuidePayload::new ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L14) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` OpenGuidePayload.TYPE ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L20) |
| ` public OpenGuidePayload(Identifier location) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/OpenGuidePayload.java#L12) |

## ServerPayloadHandler

` public class ServerPayloadHandler `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handleShareGuide(ShareGuidePayload payload, IPayloadContext context) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java#L18) |
| ` public ServerPayloadHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java#L17) |

## ShareGuidePayload

` public record ShareGuidePayload(Identifier location, String anchor, boolean sameTeam) implements CustomPacketPayload `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13)

请求客户端打开指定指南文档的网络负载。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ShareGuidePayload> TYPE ` | 初值 ` new Type<>(Ageratum.location("share_guide")) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ShareGuidePayload> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L15) |
| ` @Override public Type<? extends CustomPacketPayload> type() ` | 末尾返回 ` ShareGuidePayload.TYPE ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L25) |
| ` public ShareGuidePayload(Identifier location, String anchor, boolean sameTeam) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public String anchor() ` | 读取 record 分量 ` anchor ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public boolean sameTeam() ` | 读取 record 分量 ` sameTeam ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ShareGuidePayload.java#L13) |
