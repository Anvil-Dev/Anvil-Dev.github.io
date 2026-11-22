# Attaching Item and HUD Tooltips

Item tooltips are generated from the current item stack; HUD tooltips also depend on the target the player is looking at. When displaying server storage usage, use synced results and avoid querying server state directly inside the render loop.

## Example in Source

Take `HeliostatsTooltip` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.api.tooltip.impl;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import dev.dubhe.anvilcraft.api.tooltip.TooltipRenderHelper;
import dev.dubhe.anvilcraft.api.tooltip.providers.IHandHeldItemTooltipProvider;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.item.block.HeliostatsItem;
import net.minecraft.client.gui.GuiGraphicsExtractor;
import net.minecraft.core.BlockPos;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;

public class HeliostatsTooltip implements IHandHeldItemTooltipProvider {
    @Override
    public boolean accepts(ItemStack itemStack) {
        return itemStack.is(ModBlocks.HELIOSTATS.asItem());
    }

    @Override
    public void render(
        PoseStack poseStack,
        VertexConsumer consumer,
        ItemStack itemStack,
        double camX,
        double camY,
        double camZ
    ) {
        if (HeliostatsItem.hasDataStored(itemStack)) {
            BlockPos pos = HeliostatsItem.getData(itemStack);
            AABB aabb = new AABB(pos);
            VoxelShape shape = Shapes.create(aabb);
            TooltipRenderHelper.renderOutline(poseStack, consumer, camX, camY, camZ, BlockPos.ZERO, shape, 0xFF66CCFF);
        }
    }

    @Override
    public void renderTooltip(GuiGraphicsExtractor graphics, int screenWidth, int screenHeight) {
    }

    @Override
    public int priority() {
        return 0;
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java)

- [`GuiLayerRegistrationEventListener` · Line 55](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L55)
- [`SubmitGeometryEventListener` · Line 87](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L87)
- [`ClientEventListener` · Line 100](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L100)
- [`ItemTooltipLang` · Line 9](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/lang/ItemTooltipLang.java#L9)
- [`TooltipEventListener` · Line 54](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java#L54)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `HudTooltipManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java) |
| `ItemTooltipManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/ItemTooltipManager.java) |
| `TooltipRenderHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/TooltipRenderHelper.java) |

<!-- source-guide -->
