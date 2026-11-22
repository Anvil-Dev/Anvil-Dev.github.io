# Finding Grids and Dynamic Loads

Power demand from player equipment moves with the entity. `IDynamicPowerComponentHolder.of(player)` returns the dynamic component holder on the player. Each piece of equipment holds its own load object, and enabling/disabling must operate on the same instance. The underlying collection compares by object identity, so even two `PowerConsumption(8)` instances with the same value are counted separately.

Store and close this handle in your logical server-side equipment enable/disable callbacks. Close the old handle before re-enabling the same piece of equipment.

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.power.DynamicPowerComponent;
import dev.dubhe.anvilcraft.api.power.IDynamicPowerComponentHolder;
import net.minecraft.server.level.ServerPlayer;

public final class WearableLoad implements AutoCloseable {
    private final DynamicPowerComponent component;
    private final DynamicPowerComponent.PowerConsumption load;

    public WearableLoad(ServerPlayer player, int demand) {
        if (demand <= 0) throw new IllegalArgumentException("positive demand required");
        component = IDynamicPowerComponentHolder.of(player).anvilcraft$getPowerComponent();
        load = new DynamicPowerComponent.PowerConsumption(demand);
        component.getPowerConsumptions().add(load);
    }

    @Override
    public void close() {
        component.getPowerConsumptions().remove(load);
    }
}
```

| Signature | Behavior |
| --- | --- |
| `PowerGrid.findPowerGridContains(Level, Vec3)`, `findPowerGridContains(Level, AABB)` | Returns a grid in that dimension covering the point or intersecting the box, or empty `Optional` if none matched. Both are suitable for server-side lookup. |
| `DynamicPowerComponent(Entity, Supplier<AABB>)` | Binds the owning entity and bounds supplier; `boundingBox()` fetches the latest box on each call. |
| `switchTo(@Nullable PowerGrid): void` | Leaves the old grid, joins the new grid, then notifies the holder. Same grid instance does not re-notify. Passing `null` disconnects. |
| `getPowerConsumption(): int` | Sums all loads on this component. Equipment power consumption uses positive numbers. The grid re-reads this on the next settlement. |
| `getCommandDiscription()` | Generates a localized description for debug commands; note the spelling `Discription` in the public method name. |
