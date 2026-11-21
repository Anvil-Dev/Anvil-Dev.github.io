# dev.dubhe.anvilcraft.event.server



## CapabilitiesEventListener

` public class CapabilitiesEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/server/CapabilitiesEventListener.java#L11)

方块实体能力注册事件入口。基础物品和流体能力统一在 ModCapabilities 中注册。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerCapabilities(final RegisterCapabilitiesEvent event) ` | 事件总线派发 ` RegisterCapabilitiesEvent ` 时调用。<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/server/CapabilitiesEventListener.java#L13) |
| ` public CapabilitiesEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/server/CapabilitiesEventListener.java#L11) |
