# Inspecting Preview Blocks in the Guide

Structure cards can highlight the position of a specific port in a multiblock machine. Players adjust the visible layers and click the preview model: left-click selects the block and shows a tooltip, while right-click opens a GUI preview of that block inside the guide screen. Note that this reads blocks from the client preview world and does not open a server machine's container. [Picking & GUI preview entrypoint](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L345)

The component decides on mouse release whether the gesture was a click or a drag. Only when the cursor is inside the preview area, movement has not exceeded the click threshold, the released button matches the pressed button, and no control button was hit will it pick a block using camera angle, pan offset, and visible layer range. If a previously selected block is later hidden outside the visible layer range, the component clears the old tooltip; if a right-click hits a block with no displayable menu, the tooltip changes to "No GUI". [Click bounds](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L345) · [Tooltip update](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L165)

If an add-on component already has the template, selected template-local coordinates, and screen anchor, it can reuse the guide's built-in GUI preview directly. The bridge method below takes the owning component object so the preview remembers who opened it. You can use the return value to decide whether to show the menu or fall back to a tooltip.

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDNBTStructureComponent;
import dev.anvilcraft.resource.ageratum.client.gui.GuideScreen;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate;

public final class BlueprintInspection {
    public static boolean open(GuideScreen screen, MDNBTStructureComponent owner,
                               StructureTemplate template, BlockPos selected,
                               float anchorX, float anchorY) {
        return screen.structureGuiPreview().open(owner, template, selected, anchorX, anchorY);
    }
}
```

| Parameter or Interface | Purpose | When to Use |
| --- | --- | --- |
| `GuideScreen.structureGuiPreview()` | Gets the preview controller held by the screen | Use the currently displayed guide instance. The screen calls the controller's `beginFrame` and `render` each frame and prioritizes input over the preview overlay area. |
| `owner`, `template`, `selected` | Owning component, full template, selected template block | Pass the template and coordinates from the same pick. When right-click misses, the original component skips opening. |
| `anchorX`, `anchorY` | Screen anchor of the selected block's center | The original component projects the block center to screen coordinates before opening; these must not be world coordinates. |

[GuideScreen preview controller](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L230) · [Component right-click call](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L365)

The same component also exposes `renderExportButton(MDRenderContext)` so integration modules can draw a 16 × 16 themed button and hover tooltip, with its top-left corner at `(context.maxX() - 21, 25)`. Click handling and export actions are provided by the integration module. This branch of Ageratum registers three payloads: open guide, open GitHub guide, and share guide. [Button rendering](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L198) · [Network registration](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L26)
