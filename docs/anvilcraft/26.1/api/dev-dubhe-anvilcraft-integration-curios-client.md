# dev.dubhe.anvilcraft.integration.curios.client



## CuriosClient

` public class CuriosClient `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/CuriosClient.java#L15)

类型注解 ` @Integration(value = "curios", type = IntegrationType.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void applyClient() ` | 实现调用 ` IntegrationHook.getModEventBus() `<br>实现调用 ` modEventBus.addListener(this::onClientSetup) `<br>实现调用 ` modEventBus.addListener(this::onLayerRegister) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/CuriosClient.java#L17) |
| ` public CuriosClient() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/CuriosClient.java#L15) |
