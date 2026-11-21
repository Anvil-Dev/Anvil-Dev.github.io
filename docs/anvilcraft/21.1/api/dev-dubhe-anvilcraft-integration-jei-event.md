# dev.dubhe.anvilcraft.integration.jei.event



## ReloadEventListener

` public class ReloadEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/event/ReloadEventListener.java#L9)

类型注解 ` @Integration(value = "jei", type = IntegrationType.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public void applyClient() ` | 执行 ` IntegrationHook.getModEventBus().addListener(ReloadEventListener::onReload) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/event/ReloadEventListener.java#L11) |
| ` public static void onReload(RegisterClientReloadListenersEvent event) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/event/ReloadEventListener.java#L16) |
| ` public ReloadEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/event/ReloadEventListener.java#L9) |
