# Identifying Recipe Batch Boundaries

When measuring how long an anvil in-world recipe batch takes, attach your timer to the `OnLand` instance carried by the event. The server posts `BeforeInWorldRecipe` upon entering `handleNeoAnvilRecipe`, and posts `AfterInWorldRecipe` in `finally` when recipe processing finishes. This pair of events also wraps an attempt that matches no recipes, so do not use post-event counts to measure actual output yield.

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

| Accessor | When to Use |
| --- | --- |
| `BeforeInWorldRecipe.getLanding()` | Establishes context for this batch. Multiple consecutive or nested triggers can occur at the same position; using coordinates as the sole key would merge independent batches. |
| `AfterInWorldRecipe.getLanding()` | Retrieves and releases the context for the same object. This event has no success flag. |
| `OnLand.isAnvilDamage()` | Reads the anvil damage flag carried by this event. It describes the anvil itself, not whether the target block was broken. |

[Event definition](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java)
