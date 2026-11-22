# 在指定位置释放电荷

集电器按世界分开索引。真正写入前检查服务端、正数电荷以及是否已有已登记的收集器。同一坐标替换方块实体后，旧实例的注销不能误删新实例。

## 源码中的用例

以本分支的 `ChargeCollectorRenderer` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java)

- [`MagnetBlock` · 第 185 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L185)
- [`PiezoelectricCrystalBlock` · 第 75 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PiezoelectricCrystalBlock.java#L75)
- [`SugarBlock` · 第 62 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SugarBlock.java#L62)
- [`InfiniteCollectorBlockEntity` · 第 176 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InfiniteCollectorBlockEntity.java#L176)
- [`PlasmaJetsBlockEntity` · 第 334 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L334)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `ChargeCollectorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/chargecollector/ChargeCollectorManager.java) |
| `ChargeCollectorBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargeCollectorBlockEntity.java) |
