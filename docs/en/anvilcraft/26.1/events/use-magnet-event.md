# UseMagnetEvent

To modify the attraction radius of a handheld magnet, register a listener on the **mod event bus**. When the player is not sneaking, `MagnetUtil.magnetizeItems` creates the event with the configured value and posts it via `ModLoader.postEvent` (if sneaking, the method returns `PASS` before posting).

`setAttractRadius(double)` changes the search box radius along the X, Y, and Z axes, shared by items and experience orbs. The poster reads back your modified value directly, so pass a finite non-negative number. If the event is canceled, the method returns `PASS` directly, skipping item movement, orb gathering, held item durability loss, and cooldown. The event carries `Level`, so handle logical sides appropriately if your listener has side effects. [Magnet call site](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java)

## Limiting Attraction Distance for Players Holding a Compass in Offhand

Pass your `IEventBus` to `CompassMagnetLimit.register(modBus)` in your mod constructor. Players can combine a compass with a magnet for precise nearby pickup, keeping smaller configured attraction radii when already below 4 blocks.

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

| Event Type | Construction Site |
| --- | --- |
| `UseMagnetEvent` | [`MagnetUtil:164`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L164) |
