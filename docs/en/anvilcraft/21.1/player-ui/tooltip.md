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
import dev.dubhe.anvilcraft.block.item.HeliostatsItem;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import net.minecraft.client.gui.GuiGraphics;
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
    public void renderTooltip(GuiGraphics guiGraphics, int screenWidth, int screenHeight) {
    }

    @Override
    public int priority() {
        return 0;
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java)

- [`ClientEventListener` · Line 108](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L108)
- [`GuiLayerRegistrationEventListener` · Line 50](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L50)
- [`RenderEventListener` · Line 127](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L127)
- [`AnvilCraft` · Line 194](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L194)
- [`HyperdimensionStorageStationBlockItem` · Line 19](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HyperdimensionStorageStationBlockItem.java#L19)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `HudTooltipManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java) |
| `ItemTooltipManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/ItemTooltipManager.java) |
| `TooltipRenderHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/TooltipRenderHelper.java) |
