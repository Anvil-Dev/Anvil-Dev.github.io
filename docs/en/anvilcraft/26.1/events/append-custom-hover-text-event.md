# AppendCustomHoverTextEvent

To add a line of usage instructions to an add-on item, subscribe to this event on `NeoForge.EVENT_BUS`. It is posted upon entering `ItemStack.addDetailsToTooltip`; listeners append a tooltip line via `getBuilder().accept(Component)`, and vanilla's subsequent details continue to be built. The event provides the current `ItemStack`, `TooltipContext`, `TooltipDisplay`, and `TooltipFlag`; note that `getPlayer()` may be null (such as in tooltip previews without a player context).

Filter by item and display conditions before generating text. This method may be called repeatedly when building tooltips, so avoid persistent mutations here. The event is not cancelable, and the passed `Consumer` is only for appending lines. [Vanilla injection site](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java) · [Built-in appender](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java)

## Adding a Usage Hint to the Compass

Call `CompassHint.register()` once in your mod constructor. The example appends a single line only to the vanilla compass and works even in item previews without a player.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.event.AppendCustomHoverTextEvent;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Items;
import net.neoforged.neoforge.common.NeoForge;

public final class CompassHint {
    public static void register() {
        NeoForge.EVENT_BUS.addListener(CompassHint::append);
    }

    private static void append(AppendCustomHoverTextEvent event) {
        if (!event.getStack().is(Items.COMPASS)) return;
        event.getBuilder().accept(Component.translatableWithFallback(
            "tooltip.workshop.compass", "Note down your camp coordinates before setting out."
        ));
    }
}
```

| Event Type | Construction Site |
| --- | --- |
| `AppendCustomHoverTextEvent` | [`ItemStackMixin:107`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L107) |
