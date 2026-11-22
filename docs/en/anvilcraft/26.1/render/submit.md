# Submitting the Model, Lighting, and Pose

The alarm lamp occupies a small area on top of the console. Once the extraction step has prepared the model, pass the collector and current pose in the block entity renderer's `submit` callback. Push the pose, translate and scale the lamp, then submit it. Pop the pose afterward so the remaining parts keep their original size.

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

| Signature or parameter | Usage |
| --- | --- |
| `submit(SubmitNodeCollector, PoseStack, int overlayCoords, int packedLight, int tint): void` | Submits the wrapped model with the current pose to the collector. Returns immediately if the renderer has no cached entry for this state. |
| `overlayCoords`, `packedLight` | Pass overlay coordinates first, then packed light. The example uses no overlay and full brightness. For parts that respond to ambient lighting, use the light value from the current render state. |
| `tint` | Color passed to the model submitter. `-1` means white with no tint. The wrapped model's quad callback primarily sets light and overlay coordinates. Check the rendering path when applying per-vertex colors. |
| `key()`, `renderType()`, `translucent()`, `lighting()` | Return the selected model key, render layer, and two flags. All four fields participate in record equality and cache lookup. |
| `WrappedBlockStateModel.renderToBuffer(pose, buffer, lightCoords, overlayCoords, color)` | Looks up the baked model by key in the current model manager when rendering. If it reports `Missing standalone block model`, check the model registration event, resource path, and active resource pack. |
