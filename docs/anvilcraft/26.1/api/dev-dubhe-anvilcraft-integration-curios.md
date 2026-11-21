# dev.dubhe.anvilcraft.integration.curios



## CuriosCommon

` public class CuriosCommon `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L24)

类型注解 ` @Integration("curios") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void apply() ` | 实现调用 ` IntegrationHook.getModEventBus() `<br>实现调用 ` modEventBus.addListener(this::setup) `<br>实现调用 ` modEventBus.addListener(this::registerCapabilities) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L26) |
| ` public CuriosCommon() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L24) |
