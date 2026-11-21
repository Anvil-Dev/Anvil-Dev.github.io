# dev.dubhe.anvilcraft.api.thought



## Thinkable

` public interface Thinkable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/Thinkable.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @OnlyIn(Dist.CLIENT) default void onThought() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/Thinkable.java#L7) |

## ThoughtManager

` public class ThoughtManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static double maxSeconds() ` | 思考提示的最长显示时间（秒），运行时读取配置。<br>末尾返回 ` AnvilCraft.CLIENT_CONFIG.ui.thoughtMaxSeconds `<br>[调用处 ClientEventListener.onClientTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L17) |
| ` public static void onThought() ` | 实现调用 ` ThoughtManager.check() `<br>分支 ` (!checked) ` 内调用 ` ThoughtManager.onEndThought() `<br>实现调用 ` Minecraft.getInstance().gui.getGuiTicks() `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 ClientEventListener.onScreenKeyPressed](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L143) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L21) |
| ` public static void onEndThought() ` | [调用处 ClientEventListener.onScreenKeyReleased](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L172) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L39) |
| ` public static void onPostThought() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.getSlotUnderMouse() `<br>实现调用 ` slot.hasItem() `<br>实现调用 ` slot.getItem().getItem() `<br>实现调用 ` slot.getItem() `<br>分支 ` (slot.hasItem() && slot.getItem().getItem() instanceof Thinkable thinkable) ` 内调用 ` thinkable.onThought() `<br>[调用处 ClientEventListener.onClientTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L189) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L45) |
| ` public static long getLastThoughtTime() ` | 末尾返回 ` ThoughtManager.lastThoughtTime `<br>由 Lombok 生成。<br>[调用处 ClientEventListener.onClientTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L181) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L9) |
| ` public ThoughtManager() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java#L9) |
