# 客户端注册和资源重载

第一次打开手册前，客户端已经用资源重载监听器解析了 Markdown。在客户端模组构造阶段登记工厂，资源监听器注册事件中挂上自己需要维护的缓存。每次切换资源包，都要丢弃从旧资源包读出的值。缓存中的世界对象和 GUI 对象也不宜跨帧长期保留。

下例给附属模组的示意图建立文件索引。第一次资源加载和随后 F3+T 都会重建索引，删除或被资源包替换的文件会反映在新集合里。将示意图放入 `assets/example/textures/guide/`。

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

| 生命周期入口 | 行为与边界 |
| --- | --- |
| `DeferredRegister.register(IEventBus)` | 在客户端模组构造时挂上自己的注册器，Ageratum 的客户端构造器负责创建它所定义的四个注册表。 |
| `RegisterClientReloadListenersEvent.registerReloadListener(listener)` | 绑定一次，后续每次资源重载都会执行监听器。Ageratum 在同一事件中登记文档缓存和结构模板管理器自己的监听器。 |
| `GuideDocumentCache.reloadListener()` | Ageratum 的监听器在准备阶段解析文档、导航和物品绑定，在应用阶段发布新映射并预热命令建议。扩展不需要重复登记它。 |
| `GuideDocumentCache.getParsedDocument(ResourceLocation): Optional<MDDocument>` | 在资源应用完成后查询缓存。ID 不存在或解析失败时返回空；查询代码应容许资源包移除文档。 |
