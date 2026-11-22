# Attaching Jet Behavior

Spawn checks, fuel, and block operations run on the server. When visual feedback is needed, use client particle callbacks while keeping client classes loaded separately from server logic.

## Example in Source

Take `PlasmaJetsRenderer` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.client.renderer.blockentity;

import com.mojang.blaze3d.vertex.PoseStack;
import dev.dubhe.anvilcraft.block.entity.PlasmaJetsBlockEntity;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;

public class PlasmaJetsRenderer implements BlockEntityRenderer<PlasmaJetsBlockEntity> {
    public PlasmaJetsRenderer(BlockEntityRendererProvider.Context context) {
    }

    @Override
    public void render(
        PlasmaJetsBlockEntity entity, float partialTick, PoseStack pose, MultiBufferSource bufferSource,
        int packedLight, int packedOverlay
    ) {

    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java)

- [`PlasmaJetHooks` · Line 27](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetHooks.java#L27)
- [`PlasmaJetsBlock` · Line 86](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L86)
- [`PlasmaJetsRenderer` · Line 9](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java#L9)
- [`ModHeaterInfos` · Line 88](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L88)
- [`ModBlockEntities` · Line 437](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlockEntities.java#L437)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `PlasmaJetBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetBehavior.java) |
| `PlasmaJetsBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java) |
