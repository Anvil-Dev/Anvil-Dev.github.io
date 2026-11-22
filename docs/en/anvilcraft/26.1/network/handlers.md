# Validating Menu Requests and Updating the Screen

The control valve menu lets the player choose a filter card. A selection can go stale in transit if the player closes the menu, switches to spectator mode, or opens another machine. The server looks up the block entity through the sender's current menu, validates each level of the filter, and sends back the card the machine actually holds. The client updates the display only if the control valve screen is still open. [Sending the selection](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L226) · [Server and client handlers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L31)

An add-on screen that uses AnvilCraft's `ControlValveMenu` can reuse this packet. Call the following method from the screen's button handler. It sends a copy of the selected stack so later changes to the stack on the cursor cannot affect the request.

```java
package dev.example.pressconsole.client;

import dev.dubhe.anvilcraft.inventory.ControlValveMenu;
import dev.dubhe.anvilcraft.network.ControlValveFilterItemPacket;
import net.minecraft.client.Minecraft;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.client.network.ClientPacketDistributor;

public final class ValveFilterAction {
    public static boolean submit(ItemStack filter) {
        var player = Minecraft.getInstance().player;
        if (player == null || !(player.containerMenu instanceof ControlValveMenu)) return false;
        ClientPacketDistributor.sendToServer(new ControlValveFilterItemPacket(filter.copy()));
        return true;
    }
}
```

A `true` return from `submit` means the client sent the request. The server rejects requests from spectators and from menus that are the wrong type, lack a block entity, or are no longer valid. For a valid menu, the stack must be empty or contain the designated filter item. Nesting is limited to two levels, and each level must fit within the default filter capacity. Even if the contents fail validation, the server returns a copy of the current valid stack. An add-on with its own screen must handle that reply because the built-in client handler updates only `ControlValveScreen`. [Filter validation and reply](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L37)

| Packet | Server | Client |
| --- | --- | --- |
| `MachineEnableFilterPacket(boolean filterEnabled)` | Checks spectator status, the container, and `IFilterMenu`, then sets the flag and refreshes the menu. When disabling the filter, it sends back nonempty slot entries before sending the flag. | Applies the flag and refreshes only if the current screen implements `IFilterScreen`. The payload ID is `anvilcraft:machine_record_material`. |
| `ControlValveFilterItemPacket(ItemStack filterItem)` | Locates the machine through the current menu, validates the item and its nested contents, and returns the stored value to the player. | Updates the filter item in `ControlValveScreen`. The registry-aware `ItemStack.OPTIONAL_STREAM_CODEC` can encode an empty stack. |
| `ScreenShakePacket.of(Vec3 center, float radius, ShakeType type)` | A stellar event sends the effect to players tracking the Celestial Forging Anvil's chunk. | Checks the type ordinal before passing the position, radius, and type to `ScreenShakeManager`. The shake affects only the camera. |

[Machine filter toggle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L30) · [Sending to players tracking a chunk](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L555) · [Screen shake handler](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L72)
