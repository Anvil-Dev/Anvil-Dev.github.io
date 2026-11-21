# 读取实体受到的冲击

记录铁砧命中哪个实体时，订阅 `AnvilEvent.HurtEntity`。事件本身继承了实体事件，但 `getEntity()` 指向下落的铁砧，真正的受击者由 `getHurtedEntity()` 提供。示例在同一附属模组中记录目标 ID、铁砧位置与传给事件的伤害数值。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.event.AnvilEvent;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = "sandstone_press")
public final class StrikeLog {
    private static final System.Logger LOGGER = System.getLogger("sandstone_press");

    @SubscribeEvent
    public static void record(AnvilEvent.HurtEntity event) {
        LOGGER.log(System.Logger.Level.DEBUG, "{0} hit at {1}, damage {2}",
            event.getHurtedEntity().getUUID(), event.getPos(), event.getDamage());
    }
}
```

| 方法 | 返回值及用途 |
| --- | --- |
| `getLevel()` | 本次撞击所在的 `ServerLevel`，可用于取得该世界的注册表。 |
| `getPos()` | 发布者传入的方块位置。 |
| `getEntity()` / `getHurtedEntity()` | 分别取得铁砧与目标实体，不要交换两者。 |
| `getDamage()` | 事件携带的 `float` 值，护甲、其他模组和实际生命值变化要另外检查。 |

`HurtEntity` 没有取消方法。需要改变实际伤害流程时，先追踪发布点与实体受伤调用的先后次序。[事件定义](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L95)
