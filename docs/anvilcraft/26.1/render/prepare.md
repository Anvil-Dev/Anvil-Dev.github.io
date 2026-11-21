# 注册独立模型并选择渲染层

假设控制台上有一盏报警灯，红石信号改变时需要单独亮起。把灯做成独立模型，模型注册事件只负责绑定模型键与资源。提取控制台渲染状态时调用 `prepare`，把返回值存入本帧的渲染状态。

示例模组 ID 为 `example`。将以下类放入客户端包；`BlockStateModelRenderer.INSTANCE` 构造时会访问 Minecraft 客户端。

```java
package dev.example.client;

import dev.dubhe.anvilcraft.api.rendering.BlockStateModelRenderer;
import dev.dubhe.anvilcraft.api.rendering.BlockStateModelTessellateState;
import net.minecraft.client.renderer.block.dispatch.BlockStateModel;
import net.minecraft.resources.Identifier;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.client.event.ModelEvent;
import net.neoforged.neoforge.client.model.standalone.SimpleUnbakedStandaloneModel;
import net.neoforged.neoforge.client.model.standalone.StandaloneModelKey;

@EventBusSubscriber(modid = "example", value = Dist.CLIENT)
public final class AlarmLampModel {
    private static final StandaloneModelKey<BlockStateModel> KEY =
        new StandaloneModelKey<>(() -> "Example alarm lamp");

    @SubscribeEvent
    public static void register(ModelEvent.RegisterStandalone event) {
        event.register(KEY, SimpleUnbakedStandaloneModel.blockStateModel(
            Identifier.fromNamespaceAndPath("example", "block/alarm_lamp")));
    }

    public static BlockStateModelTessellateState prepare() {
        return BlockStateModelRenderer.INSTANCE.prepare(KEY, false, false);
    }
}
```

在资源包放入 `assets/example/models/block/alarm_lamp.json`。模型继承完整方块形状，尺寸由提交时的缩放控制。

```json
{
  "parent": "minecraft:block/cube_all",
  "textures": { "all": "minecraft:block/redstone_lamp_on" }
}
```

| 签名 | 参数与结果 |
| --- | --- |
| `prepare(StandaloneModelKey<BlockStateModel> key, boolean translucent, boolean lighting)` | 使用注册时的键。半透明选 translucent 层，否则选 cutout 层；lighting 选择原版 Sheets 层或模组自己的渲染层。返回记录包含四个字段的渲染状态，并按该状态缓存包装模型。 |
| `getModel(BlockStateModelTessellateState state): WrappedBlockStateModel` | 仅查缓存，可能为 null。调试时先检查提取阶段是否确实经过 prepare，以及是否使用同一把键。 |
| `getTessellator()`、`getTessellatorNoLighting()` | 提供两套客户端方块四边形生成器，后者装有 `FullBrightNoOpLighter`。包装模型实际生成四边形时选用后者，再把提交参数中的光照坐标写入四边形。 |
