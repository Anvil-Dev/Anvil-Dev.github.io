# Placing Structures into Client Preview

Projecting a template into the world lets players build alongside the blueprint. Fixed projections stay at a specified origin, whereas floating projections pull the origin five blocks in front of the player's gaze each client tick. When a player clicks the project button on a structure card in the guide, the code first takes the block adjacent to the hit face; if no block is targeted, it uses the block above the camera, then starts a floating projection and closes the guide screen. [Structure card button](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L292) · [Floating position update](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L166)

The button handler below passes the template to the sandbox renderer and closes the current screen if it returns `true`. The example configures a compass as the move tool, so while holding a compass in either hand, holding Ctrl and scrolling the mouse wheel fine-tunes the position. In floating mode, pressing Use or Attack pins the origin in place; after pinning, wheel adjustments will not be pulled away by the gaze position on the next tick.

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.structure.AgeratumStructureTemplateManager;
import dev.anvilcraft.resource.ageratum.client.feat.structure.StructureProjectionApi;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.Items;
import java.util.List;

public final class BlueprintPlacement {
    public static boolean preview(Identifier blueprint, BlockPos anchor) {
        return AgeratumStructureTemplateManager.get(blueprint)
            .map(template -> StructureProjectionApi.showFloating(template, anchor, List.of(Items.COMPASS)))
            .orElse(false);
    }

    public static void dismiss() {
        StructureProjectionApi.clear();
    }
}
```

| API | Parameters & Result | Boundaries |
| --- | --- | --- |
| `show(template, origin)`, `showFloating(template, origin)` | `StructureTemplate` and world coordinates; returns whether projection succeeded | Both use the default guide item as the Ctrl+scroll tool. The former stays at the given position; the latter follows gaze until pinned. |
| `show(template, origin, moveControlItems)`, `showFloating(template, origin, moveControlItems)` | Tool collection of `Item`. Passing an empty collection falls back to the default guide item | Returns `false` if there is no client world, the sandbox cannot be created, or the sandbox is empty. Clears the old projection only after creating the new sandbox. |
| `hasActiveProjection()`, `clear()` | Queries or clears the single active projection | `clear` releases the renderer. Also cleans up on client ticks when the current world or player is null, or when the projection's dimension changes. |

Projections render only on the client. Scroll-wheel movement requires the GUI to be closed, Ctrl held, and an allowed item held, consuming the scroll event on success to avoid switching hotbar slots; layer keys allow inspecting layer by layer. [Input handling & cleanup](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L99)
