# FishTankEvent

When adding periodic processing to fish tanks, listen to `ServerTick`. It fires even if there is no lava in the tank, and before AnvilCraft repairs items. `EntityInside` is posted before client-side checks, so check the logical side before mutating the world. Lit fish tanks read the final damage value via `FluidDamage`, initialized to `4.0F`. Normal lava's `lavaHurt()` takes a separate path.

To set a uniform damage of 2 across all lit fish tanks in the world, subscribe on the game bus. This listener affects only the damage path that posts the event.

```java
package dev.example.tanks;

import dev.dubhe.anvilcraft.api.event.FishTankEvent;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = "sandstone_press")
public final class FishTankDamage {
    @SubscribeEvent
    public static void onFluidDamage(FishTankEvent.FluidDamage event) {
        event.setDamage(2.0F);
    }
}
```

This event group is defined in [`FishTankEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `FishTankEvent` | No direct construction call site under this name in this commit |
| `FishTankEvent.ServerTick` | [`FishTankBlockEntity:386`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L386) |
| `FishTankEvent.EntityInside` | [`FishTankBlock:190`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L190) |
| `FishTankEvent.FluidDamage` | [`FishTankBlockEntity:994`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L994) |
