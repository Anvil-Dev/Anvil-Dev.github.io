# Syncing Scroll Selections for Pill Boxes and Amulet Boxes

When scrolling the selection box in an add-on screen, update the client widget first, then send the player's **current menu slot index** and selection index to the server. The server re-reads the actual item stack from that slot so the next extraction hits the same item.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.item.PillBoxItem;
import dev.dubhe.anvilcraft.item.amulet.AmuletBoxItem;
import dev.dubhe.anvilcraft.network.BoxSelectionSyncPacket;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.Item;
import net.neoforged.neoforge.network.PacketDistributor;

public final class BoxWheelSync {
    public static boolean selectionChanged(Player player, Slot hoveredSlot, int selection) {
        if (!player.level().isClientSide()) return false;
        int menuIndex = player.containerMenu.slots.indexOf(hoveredSlot);
        if (menuIndex < 0) return false;
        Item item = hoveredSlot.getItem().getItem();
        if (!(item instanceof PillBoxItem || item instanceof AmuletBoxItem)) return false;
        PacketDistributor.sendToServer(new BoxSelectionSyncPacket(menuIndex, selection));
        return true;
    }
}
```

| Field or Call | Meaning |
| --- | --- |
| `slotIndex` | `VarInt`, index into the current `containerMenu.slots` list. When a container is open alongside the player inventory, player inventory slot indexes differ from menu slot indexes. |
| `selection` | `VarInt`. Pill boxes call `setDefaultIndex()` on negative values (clearing selection) and `setIndex` on non-negative values. Amulet boxes clamp the value into the allowed range. |
| `handleOnServer(Player)` | Returns if the slot is invalid or the item type does not match. Otherwise writes back `PILL_BOX_CONTENTS` or `BOX_CONTENTS`, updates the remote slot snapshot, and marks the slot changed. |
| Return `boolean` in example | Indicates only whether the local request was submitted or skipped. The server re-checks the active menu, so if you switch menus immediately after sending, rely on the data shown by the new menu. |

The protocol carries no item list field. Since the client already displays the selected item, the server updates the synced snapshot with `setRemoteSlot` to prevent broadcasts from overwriting the stack the client just selected. [Packet definition & slot validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java) · [Amulet box selector](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java)
