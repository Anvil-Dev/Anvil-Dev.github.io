# Charging Items with Capacitors

Before an item implements `ICapacitorChargeable`, its item stack must provide `Capabilities.Energy.ITEM`. The default `getEnergyStorage` queries the capability via `ItemAccess.forStack(stack)` and throws an exception naming the item if not found. The example below accepts only normal full charges; once accepted, it still runs the default capacity and simulated-insert checks.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.item.ICapacitorChargeable;
import dev.dubhe.anvilcraft.api.item.IFullCapacitor;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;

public final class PressCell extends Item implements ICapacitorChargeable {
    public PressCell(Properties properties) {
        super(properties);
    }

    @Override
    public boolean canAccept(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack, boolean force) {
        return !force && stack.getCount() == 1;
    }
}
```

| Method | Calling Convention |
| --- | --- |
| `canAccept(stack, capacitor, capacitorStack, force)` | Restricts the combination of target item and capacitor. Here it also rejects forced charging and stacked items. |
| `canBeCharged(stack, storage, capacitor, capacitorStack)` | Opens a transaction to test-insert available energy, returning true if the actually accepted amount is greater than zero. This query does not commit the transaction. |
| `charge(stack, capacitor, capacitorStack)` | Requires all energy in the capacitor to be writable. Zero stock, insufficient capacity, or mismatched actual insertion all return `false`. |
| `chargeForce(stack, capacitor, capacitorStack)` | Takes the smaller of capacitor energy and remaining capacity, committing the transaction only if that portion is fully inserted. |

Both charging methods write to the target item's stored energy. Callers still need to handle capacitor items and slot changes according to their own interaction flow. When mutating target data, distinguish between capacity checks, simulated inserts, and committed transfers.

[Charging interface & transaction boundaries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java)
