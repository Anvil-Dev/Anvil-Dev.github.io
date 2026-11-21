# 识别配方批次的边界

需要统计一次铁砧世界内配方处理用了多长时间时，把计时器绑到事件携带的 `OnLand` 实例。服务端进入 `handleNeoAnvilRecipe` 后发布 `BeforeInWorldRecipe`，配方处理结束时在 `finally` 中发布 `AfterInWorldRecipe`。这对事件也会包住一次没有匹配到配方的尝试，不能用后置事件的次数统计实际产量。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.event.AnvilEvent;
import java.util.IdentityHashMap;
import java.util.Map;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = "sandstone_press")
public final class RecipeTimer {
    private static final Map<AnvilEvent.OnLand, Long> START = new IdentityHashMap<>();
    private static final System.Logger LOG = System.getLogger("sandstone_press");

    @SubscribeEvent
    public static void before(AnvilEvent.BeforeInWorldRecipe event) {
        START.put(event.getLanding(), System.nanoTime());
    }

    @SubscribeEvent
    public static void after(AnvilEvent.AfterInWorldRecipe event) {
        Long started = START.remove(event.getLanding());
        if (started != null) {
            LOG.log(System.Logger.Level.DEBUG, "Anvil recipe batch took {0} ns", System.nanoTime() - started);
        }
    }
}
```

| 读取入口 | 何时使用 |
| --- | --- |
| `BeforeInWorldRecipe.getLanding()` | 建立本批次的上下文。同一位置可能连续或嵌套触发多次，用坐标作唯一键会合并独立批次。 |
| `AfterInWorldRecipe.getLanding()` | 取回并释放同一对象的上下文。此事件没有成功标志。 |
| `OnLand.isAnvilDamage()` | 读取本次事件携带的铁砧损伤标记。它描述铁砧自身，不表示目标方块已破坏。 |

[事件定义](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java)
