# 在指定位置释放电荷

集电器按世界分开索引。真正写入前检查服务端、正数电荷以及是否已有已登记的收集器。同一坐标替换方块实体后，旧实例的注销不能误删新实例。

## 源码中的用例

以本分支的 `ChargeCollectorRenderer` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java)

- [`InfiniteCollectorBlockEntity` · 第 172 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/InfiniteCollectorBlockEntity.java#L172)
- [`PlasmaJetsBlockEntity` · 第 326 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L326)
- [`PiezoelectricCrystalBlock` · 第 72 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/PiezoelectricCrystalBlock.java#L72)
- [`MagnetBlock` · 第 81 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L81)
- [`SugarBlock` · 第 62 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/SugarBlock.java#L62)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `ChargeCollectorManager` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-chargecollector#chargecollectormanager) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/chargecollector/ChargeCollectorManager.java) |
| `ChargeCollectorBlockEntity` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-block-entity-6#chargecollectorblockentity) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargeCollectorBlockEntity.java) |

<!-- source-guide -->
