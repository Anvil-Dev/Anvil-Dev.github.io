# dev.anvilcraft.resource.ageratum.client.network



## ClientPayloadHandler

` public class ClientPayloadHandler `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handleOpenGuide(OpenGuidePayload payload, IPayloadContext context) ` | 执行 ` context.enqueueWork(() -> AgeratumClient.openGuideOnClientWithoutLanguageCode(payload.location(), List.of())) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L12) |
| ` public static void handleGitHubOpenGuide(GitHubOpenGuidePayload payload, IPayloadContext context) ` | 执行 ` context.enqueueWork(() -> GitHubGuideSource.open(payload.uri())) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L16) |
| ` public ClientPayloadHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L11) |
