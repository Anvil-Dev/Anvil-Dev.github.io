# 附加喷流行为

生成检查、燃料和方块操作在服务端执行。需要视觉反馈时使用客户端粒子回调，保持客户端类与服务端逻辑分开加载。

## 源码中的用例

以本分支的 `PlasmaJetsRenderer` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java)

- [`PlasmaJetHooks` · 第 27 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetHooks.java#L27)
- [`PlasmaJetsBlock` · 第 86 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L86)
- [`PlasmaJetsRenderer` · 第 9 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/PlasmaJetsRenderer.java#L9)
- [`ModHeaterInfos` · 第 88 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L88)
- [`ModBlockEntities` · 第 437 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlockEntities.java#L437)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `PlasmaJetBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetBehavior.java) |
| `PlasmaJetsBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java) |
