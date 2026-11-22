# Releasing Charge at a Specified Position

Charge collectors are indexed per world. Before writing, check that we are on the server, the charge is positive, and a registered collector exists. When replacing a block entity at the same coordinates, unregistering the old instance must not accidentally remove the new one.

## Example in Source

Take `ChargeCollectorRenderer` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.client.renderer.blockentity;

import dev.dubhe.anvilcraft.block.entity.ChargeCollectorBlockEntity;
import dev.dubhe.anvilcraft.client.renderer.blockentity.state.PowerGeneratorRenderState;
import net.minecraft.client.renderer.block.dispatch.BlockStateModel;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.neoforged.neoforge.client.model.standalone.StandaloneModelKey;

public class ChargeCollectorRenderer extends PowerProducerRenderer<ChargeCollectorBlockEntity, PowerGeneratorRenderState> {
    public static final StandaloneModelKey<BlockStateModel> HEAD = new StandaloneModelKey<>(
        () -> "AnvilCraft: Charge Collector Cube Model"
    );

    public ChargeCollectorRenderer(BlockEntityRendererProvider.Context ignored) {
    }

    @Override
    public PowerGeneratorRenderState createRenderState() {
        return new PowerGeneratorRenderState();
    }

    @Override
    protected float elevation() {
        return 0.75F;
    }

    @Override
    protected float rotation(ChargeCollectorBlockEntity be, float partialTick) {
        return be.getRotation() + (float) (Math.log(be.getServerPower() + 1) * 2.5F * partialTick);
    }

    @Override
    protected StandaloneModelKey<BlockStateModel> getModel() {
        return ChargeCollectorRenderer.HEAD;
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java)

- [`InfiniteCollectorBlockEntity` · Line 172](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/InfiniteCollectorBlockEntity.java#L172)
- [`PlasmaJetsBlockEntity` · Line 326](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L326)
- [`PiezoelectricCrystalBlock` · Line 72](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L72)
- [`MagnetBlock` · Line 81](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L81)
- [`SugarBlock` · Line 62](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L62)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ChargeCollectorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/chargecollector/ChargeCollectorManager.java) |
| `ChargeCollectorBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargeCollectorBlockEntity.java) |

<!-- source-guide -->
