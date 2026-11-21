# 提交模型、光照和姿态

报警灯只占控制台顶面的一小块。提取阶段已准备好模型后，在方块实体渲染器的 `submit` 回调中传入提交器和当前姿态。压栈后移动、缩放，再提交，最后恢复姿态，避免同一台机器的其余零件跟着缩小。

```java
package dev.example.client;

import com.mojang.blaze3d.vertex.PoseStack;
import dev.dubhe.anvilcraft.api.rendering.BlockStateModelTessellateState;
import net.minecraft.client.renderer.SubmitNodeCollector;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.util.LightCoordsUtil;

public final class AlarmLampDraw {
    public static void submit(BlockStateModelTessellateState lamp, PoseStack pose,
                              SubmitNodeCollector collector) {
        pose.pushPose();
        try {
            pose.translate(0.375, 1.0, 0.375);
            pose.scale(0.25f, 0.125f, 0.25f);
            lamp.submit(collector, pose, OverlayTexture.NO_OVERLAY, LightCoordsUtil.FULL_BRIGHT, -1);
        } finally {
            pose.popPose();
        }
    }
}
```

| 签名或参数 | 用途与边界 |
| --- | --- |
| `submit(SubmitNodeCollector, PoseStack, int overlayCoords, int packedLight, int tint): void` | 把包装模型连同姿态提交给当前收集器。若该记录在渲染器缓存中不存在，立即返回。 |
| `overlayCoords`、`packedLight` | 顺序是叠加坐标在前，打包光照在后。例中为无叠加和全亮；随环境明暗变化的部件应传当前渲染状态的光照。 |
| `tint` | 传给模型提交器的颜色参数，-1 是不染色的白色。包装模型当前的四边形回调主要设置光照和叠加坐标；需要逐顶点改色时应核对具体渲染路径。 |
| `key()`、`renderType()`、`translucent()`、`lighting()` | 读取选定模型、渲染层与两个标志。这四项都参与记录的相等性与缓存查找。 |
| `WrappedBlockStateModel.renderToBuffer(pose, buffer, lightCoords, overlayCoords, color)` | 渲染时再向当前模型管理器按键取烘焙模型。缺少独立模型时会在此处报 `Missing standalone block model`。先检查模型注册事件、资源路径和当前资源包。 |
