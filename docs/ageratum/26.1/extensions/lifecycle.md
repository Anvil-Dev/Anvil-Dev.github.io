# 客户端注册和资源重载

在客户端模组构造阶段把扩展注册器挂上模组事件总线，收到 `AddClientReloadListenersEvent` 后，再为附属模组自己的资源索引登记监听器。这样首次加载、切换资源包和按 F3+T 时都会重建索引：准备阶段从资源管理器读数据，应用阶段用新索引替换旧快照。

下面这个例子只收录 `assets/example/textures/guide/` 下的 PNG 图片。判断附属示意图是否存在时，调用 `DiagramIndex.contains(id)` 即可；一旦资源包删掉了某张图，就不会继续沿用旧索引。

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

| 入口 | 时机与约定 |
| --- | --- |
| `DeferredRegister.register(IEventBus)` | 客户端构造阶段只绑定一次。使用附属自己的命名空间和 Ageratum 的注册表键。 |
| `AddClientReloadListenersEvent.addListener(Identifier, listener)` | 键区分各监听器。Ageratum 登记了 `ageratum:layouts`、`ageratum:document`、`ageratum:structure`，附属请使用自己的键。 |
| `GuideLayoutManager.generation(): long` | 应用新布局后递增。按代数丢弃自定义组件缓存的主题数据，或者每帧从 `context.layout()` 取当前布局。 |
| `GuideDocumentCache.getParsedDocument(Identifier): Optional<MDDocument>` | 应用资源快照后查询。允许文档解析失败、被资源包移除或尚未加载。 |
