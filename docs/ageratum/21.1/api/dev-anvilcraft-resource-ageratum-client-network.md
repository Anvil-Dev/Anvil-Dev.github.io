# dev.anvilcraft.resource.ageratum.client.network



## ClientPayloadHandler

` public class ClientPayloadHandler `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handleOpenGuide(OpenGuidePayload payload, IPayloadContext context) ` | 执行 ` context.enqueueWork(() -> AgeratumClient.openGuideOnClientWithoutLanguageCode(payload.location(), List.of())) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L10) |
| ` public ClientPayloadHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java#L9) |
