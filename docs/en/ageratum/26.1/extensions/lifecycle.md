# Client Registration and Resource Reload

Attach extension registers to the mod event bus during client mod construction, and register listeners for your add-on's own resource indexes upon receiving `AddClientReloadListenersEvent`. This ensures the index is rebuilt on initial load, resource pack changes, and F3+T reloads: the prepare phase reads data from the resource manager, and the apply phase swaps the old snapshot for the new index.

The example below indexes only PNG images under `assets/example/textures/guide/`. Call `DiagramIndex.contains(id)` to check whether an add-on diagram exists; once a resource pack removes an image, the old index is no longer retained.

```java
package dev.example.guide;

import net.minecraft.resources.Identifier;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.server.packs.resources.SimplePreparableReloadListener;
import net.minecraft.util.profiling.ProfilerFiller;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.client.event.AddClientReloadListenersEvent;
import java.util.Set;

@EventBusSubscriber(modid = "example", value = Dist.CLIENT)
public final class DiagramIndex {
    private static volatile Set<Identifier> textures = Set.of();

    @SubscribeEvent
    public static void register(AddClientReloadListenersEvent event) {
        event.addListener(Identifier.fromNamespaceAndPath("example", "guide_diagrams"),
            new SimplePreparableReloadListener<Set<Identifier>>() {
                @Override
                protected Set<Identifier> prepare(ResourceManager resources, ProfilerFiller profiler) {
                    var files = resources.listResources("textures/guide", id ->
                        id.getNamespace().equals("example") && id.getPath().endsWith(".png"));
                    return Set.copyOf(files.keySet());
                }

                @Override
                protected void apply(Set<Identifier> result, ResourceManager resources, ProfilerFiller profiler) {
                    textures = result;
                }
            });
    }

    public static boolean contains(Identifier id) {
        return textures.contains(id);
    }
}
```

| Entrypoint | Timing & Convention |
| --- | --- |
| `DeferredRegister.register(IEventBus)` | Bind once during client construction. Use your add-on's own namespace and Ageratum's registry keys. |
| `AddClientReloadListenersEvent.addListener(Identifier, listener)` | Keys distinguish listeners. Ageratum registers `ageratum:layouts`, `ageratum:document`, and `ageratum:structure`; add-ons should use their own keys. |
| `GuideLayoutManager.generation(): long` | Increments after a new layout is applied. Use this generation counter to discard theme data cached by custom components, or read the current layout from `context.layout()` each frame. |
| `GuideDocumentCache.getParsedDocument(Identifier): Optional<MDDocument>` | Queries after resource snapshots are applied. Documents may have failed to parse, been removed by a resource pack, or not yet loaded. |
