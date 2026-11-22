# FishTankEvent

To change the contact damage of a lit fish tank, use `FluidDamage`. The server first verifies that the entity touches the actual fluid bounds. Item entities take the repair branch and return early. For other entities, when the fish tank is lit, the event is posted in the callback after `FIRE_IGNITE` with an initial damage of `4`. The poster passes `getDamage()` directly to the damage call; it does not provide the victim entity, nor does setting damage to zero undo the ignition logic already executed.

`ServerTick` is posted before the fish tank repairs internal items. `EntityInside` records the callback when an entity enters the fish tank block, posted before the client-side early return; check `getLevel().isClientSide()` yourself when only server logic is needed. Neither notification is cancelable. Unlit lava follows vanilla's lava effect branch and cannot have its value modified via `FluidDamage`. [Fish tank tick & fluid contact](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java) · [Block contact callback](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java)

## Reducing Burn Damage from Fish Tanks Near Overworld Origin

Call `SpawnTankProtection.register()` in your add-on mod's constructor. The listener adjusts damage only in a fixed region near the Overworld origin, preserving any lower values already set by other listeners. This example does not depend on a victim entity field.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.event.FishTankEvent;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.neoforged.neoforge.common.NeoForge;

public final class SpawnTankProtection {
    public static void register() {
        NeoForge.EVENT_BUS.addListener(SpawnTankProtection::limitDamage);
    }

    private static void limitDamage(FishTankEvent.FluidDamage event) {
        if (!event.getLevel().dimension().equals(Level.OVERWORLD)) return;
        BlockPos tank = event.getPos();
        if (Math.abs((long) tank.getX()) <= 32 && Math.abs((long) tank.getZ()) <= 32) {
            event.setDamage(Math.min(event.getDamage(), 1.0F));
        }
    }
}
```

| Event Type | Construction Site |
| --- | --- |
| `FishTankEvent` | No direct construction call site under this name in this commit |
| `FishTankEvent.ServerTick` | [`FishTankBlockEntity:345`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L345) |
| `FishTankEvent.EntityInside` | [`FishTankBlock:220`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L220) |
| `FishTankEvent.FluidDamage` | [`FishTankBlockEntity:1064`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L1064) |
