# dev.dubhe.anvilcraft.integration.curios



## CuriosCommon

` public class CuriosCommon `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void apply(IEventBus modEventBus) ` | 实现调用 ` modEventBus.addListener(this::setup) `<br>实现调用 ` modEventBus.addListener(this::registerCapabilities) `<br>实现调用 ` NeoForge.EVENT_BUS.addListener(this::onPlayerWearAnvilHammerInCurioSlot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L28) |
| ` public CuriosCommon() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L152) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L27) |
