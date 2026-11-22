# Releasing Charge at a Specified Position

Charge collectors are indexed per world. Before writing, check that we are on the server, the charge is positive, and a registered collector exists. When replacing a block entity at the same coordinates, unregistering the old instance must not accidentally remove the new one.

## Example in Source

Take `ChargeCollectorRenderer` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.client.renderer.blockentity;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.block.entity.ChargeCollectorBlockEntity;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.client.resources.model.ModelResourceLocation;

public class ChargeCollectorRenderer extends PowerProducerRenderer<ChargeCollectorBlockEntity> {
    public static final ModelResourceLocation MODEL = ModelResourceLocation.standalone(
        AnvilCraft.of("block/charge_collector_head")
    );

    public ChargeCollectorRenderer(BlockEntityRendererProvider.Context context) {
    }

    @Override
    protected float elevation() {
        return 0.75f;
    }

    @Override
    protected float rotation(ChargeCollectorBlockEntity blockEntity, float partialTick) {
        return blockEntity.getRotation() + (float) (Math.log(blockEntity.getServerPower() + 1) * 2.5f * partialTick);
    }

    @Override
    protected ModelResourceLocation getModel() {
        return MODEL;
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java)

- [`MagnetBlock` · Line 185](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L185)
- [`PiezoelectricCrystalBlock` · Line 75](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L75)
- [`SugarBlock` · Line 62](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L62)
- [`InfiniteCollectorBlockEntity` · Line 176](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InfiniteCollectorBlockEntity.java#L176)
- [`PlasmaJetsBlockEntity` · Line 334](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L334)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ChargeCollectorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/chargecollector/ChargeCollectorManager.java) |
| `ChargeCollectorBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargeCollectorBlockEntity.java) |
