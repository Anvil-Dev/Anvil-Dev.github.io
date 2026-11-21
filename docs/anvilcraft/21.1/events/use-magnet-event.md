# UseMagnetEvent

手持磁铁先跳过潜行交互，再以配置中的半径创建 `UseMagnetEvent`，通过 `ModLoader.postEvent` 分发到模组总线。改 `attractRadius` 会改变收集物品与经验球所用的 AABB。取消会返回 `PASS`，后面的吸取、损耗和冷却都不会执行。

在附属模组里把吸取半径限制到 8 格，可在附属模组构造器里调用 `MagnetRange.register(modBus)`，传入 NeoForge 注入的模组总线。监听器保留配置中更小的半径。

```java
package dev.example.equipment;

import dev.dubhe.anvilcraft.api.event.UseMagnetEvent;
import net.neoforged.bus.api.IEventBus;

public final class MagnetRange {
    public static void register(IEventBus modBus) {
        modBus.addListener(MagnetRange::limitRadius);
    }

    private static void limitRadius(UseMagnetEvent event) {
        event.setAttractRadius(Math.min(event.getAttractRadius(), 8.0));
    }
}
```

该组事件定义在 [`UseMagnetEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `UseMagnetEvent` | [`MagnetUtil:167`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L167) |

## 参数与事件状态

- [`UseMagnetEvent`](../api/dev-dubhe-anvilcraft-api-event-2#usemagnetevent)
