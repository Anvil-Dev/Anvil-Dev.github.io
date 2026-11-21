# UseMagnetEvent

改变手持磁铁吸引范围时，把监听器注册到**模组事件总线**。`MagnetUtil.magnetizeItems` 在玩家未潜行时，先以配置值创建事件，再用 `ModLoader.postEvent` 发布。潜行分支在发布之前已经返回 `PASS`。

`setAttractRadius(double)` 改变的是沿 X、Y、Z 三轴扩张的搜索盒半径，物品和经验球共用它。发布者直接使用读回值，应给出有限的非负数。取消会返回 `PASS`，跳过移动物品、集中经验球、消耗手持物品耐久和添加冷却。事件带有 `Level`，有副作用的监听逻辑需按逻辑侧处理。[磁铁调用点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java)

## 给副手持指南针的玩家限制吸引距离

在模组构造函数把自己的 `IEventBus` 传给 `CompassMagnetLimit.register(modBus)`。玩家可以用指南针与磁铁组合精确拾取近处物品，配置的吸引半径已经小于四格时沿用较小值。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.event.UseMagnetEvent;
import net.minecraft.world.item.Items;
import net.neoforged.bus.api.IEventBus;

public final class CompassMagnetLimit {
    public static void register(IEventBus modBus) {
        modBus.addListener(CompassMagnetLimit::limitRadius);
    }

    private static void limitRadius(UseMagnetEvent event) {
        if (event.getPlayer().getOffhandItem().is(Items.COMPASS)) {
            event.setAttractRadius(Math.min(4.0, event.getAttractRadius()));
        }
    }
}
```

| 事件类型 | 创建位置 |
| --- | --- |
| `UseMagnetEvent` | [`MagnetUtil:164`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L164) |

## 参数与事件状态

- [`UseMagnetEvent`](../api/dev-dubhe-anvilcraft-api-event-2#usemagnetevent)
