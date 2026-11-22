# Client Registration and Resource Reload

Before a player even opens the guide, the client has already parsed the Markdown via a resource reload listener. Therefore, register factories during client mod construction, and attach any self-maintained caches to the client reload listener registration event. Whenever resource packs change, discard data read from the old packs, and do not retain world objects or GUI objects in caches across frames.

The example below builds a file index for an add-on's diagrams. Both on initial resource load and on subsequent F3+T reloads, the index is regenerated, keeping deleted or resource-pack-overridden files in sync. Place diagrams under `assets/example/textures/guide/`.

```java
package dev.example.guide;

import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.ResourceManagerReloadListener;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.client.event.RegisterClientReloadListenersEvent;
import java.util.Set;

@EventBusSubscriber(modid = "example", value = Dist.CLIENT)
public final class DiagramIndex {
    private static volatile Set<ResourceLocation> textures = Set.of();

    @SubscribeEvent
    public static void register(RegisterClientReloadListenersEvent event) {
        event.registerReloadListener((ResourceManagerReloadListener) resources -> {
            var files = resources.listResources("textures/guide", id ->
                id.getNamespace().equals("example") && id.getPath().endsWith(".png"));
            textures = Set.copyOf(files.keySet());
        });
    }

    public static boolean contains(ResourceLocation id) {
        return textures.contains(id);
    }
}
```

| Lifecycle Entrypoint | Behavior & Boundaries |
| --- | --- |
| `DeferredRegister.register(IEventBus)` | Attach your registers during client mod construction; Ageratum's client constructor creates the four registries it defines. |
| `RegisterClientReloadListenersEvent.registerReloadListener(listener)` | Bind once, and the listener runs on every subsequent resource reload. Ageratum registers its own listeners for the document cache and structure template manager in this same event. |
| `GuideDocumentCache.reloadListener()` | Ageratum's listener parses documents, navigation, and item bindings in the prepare phase, and publishes new maps and warms command suggestions in the apply phase. Extensions do not need to register it again. |
| `GuideDocumentCache.getParsedDocument(ResourceLocation): Optional<MDDocument>` | Queries the cache after resource application completes. Returns empty if the ID does not exist or parsing failed; callers should tolerate documents removed by resource packs. |
