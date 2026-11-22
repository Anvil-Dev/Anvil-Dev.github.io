# UseMagnetEvent

Using a handheld magnet skips sneak interaction first, then creates `UseMagnetEvent` with the configured radius and dispatches it on the mod bus via `ModLoader.postEvent`. Changing `attractRadius` alters the AABB used to collect items and experience orbs. Canceling returns `PASS`, skipping attraction, durability loss, and cooldown.

To cap the attraction radius to 8 blocks in an add-on mod, call `MagnetRange.register(modBus)` in your add-on's constructor with the mod event bus injected by NeoForge. The listener preserves smaller configured radii.

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

This event group is defined in [`UseMagnetEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `UseMagnetEvent` | [`MagnetUtil:167`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L167) |
