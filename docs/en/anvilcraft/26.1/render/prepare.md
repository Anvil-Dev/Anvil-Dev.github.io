# Registering a Standalone Model and Choosing a Render Layer

A console's alarm lamp needs to light up independently when the redstone signal changes. Make the lamp a standalone model and bind its key to the model resource in the registration event. Call `prepare` while extracting the console's render state and store the result in the state for this frame.

The example uses the mod ID `example`. Put this class in a client-side package because constructing `BlockStateModelRenderer.INSTANCE` accesses the Minecraft client.

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

Place `assets/example/models/block/alarm_lamp.json` in the resource pack. The lamp inherits a full cube model. Its scale at submission time determines the size on the console.

```json
{
  "parent": "minecraft:block/cube_all",
  "textures": { "all": "minecraft:block/redstone_lamp_on" }
}
```

| Signature | Parameters and result |
| --- | --- |
| `prepare(StandaloneModelKey<BlockStateModel> key, boolean translucent, boolean lighting)` | Pass the key used to register the model. `translucent` selects the translucent or cutout layer, and `lighting` selects between vanilla `Sheets` layers and the mod's own layers. The method returns a four-field render state and caches the wrapped model by that state. |
| `getModel(BlockStateModelTessellateState state): WrappedBlockStateModel` | Looks only in the cache and can return `null`. Check that the extraction step called `prepare` with the same key. |
| `getTessellator()`, `getTessellatorNoLighting()` | Return the two client-side block quad generators. The latter uses `FullBrightNoOpLighter`. The wrapped model uses that tessellator to generate quads, then writes the light coordinates from the submission into each quad. |
