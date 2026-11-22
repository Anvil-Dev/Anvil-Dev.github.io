# Reading Impact Damage on Entities

To record which entity an anvil hits, subscribe to `AnvilEvent.HurtEntity`. The event extends the entity event, but `getEntity()` points to the falling anvil while the actual victim is provided by `getHurtedEntity()`. The example logs the target ID, anvil position, and damage value passed to the event in the same add-on mod.

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

| Method | Return Value & Purpose |
| --- | --- |
| `getLevel()` | The `ServerLevel` where this impact occurred, usable to obtain that world's registries. |
| `getPos()` | The block position passed by the poster. |
| `getEntity()` / `getHurtedEntity()` | Return the anvil and the target entity respectively; do not swap them. |
| `getDamage()` | The `float` value carried by the event; armor, other mods, and actual health changes must be checked separately. |

`HurtEntity` has no cancel method. When you need to alter actual damage flow, trace the order between the posting site and the entity damage call first. [Event definition](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L95)
