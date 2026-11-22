# 附加物品与 HUD 提示

物品描述从当前物品栈生成；HUD 还要考虑玩家观察的目标。涉及服务器仓储用量时使用同步结果，避免渲染循环里直接查询服务器状态。

## 源码中的用例

以本分支的 `HeliostatsTooltip` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java)

- [`GuiLayerRegistrationEventListener` · 第 55 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L55)
- [`SubmitGeometryEventListener` · 第 87 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L87)
- [`ClientEventListener` · 第 100 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L100)
- [`ItemTooltipLang` · 第 9 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/lang/ItemTooltipLang.java#L9)
- [`TooltipEventListener` · 第 54 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java#L54)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `HudTooltipManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java) |
| `ItemTooltipManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/ItemTooltipManager.java) |
| `TooltipRenderHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/TooltipRenderHelper.java) |

<!-- source-guide -->
