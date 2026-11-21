# 客户端注册和资源重载

玩家还没打开手册，客户端就已经通过资源重载监听器解析过 Markdown 了。因此，工厂要在客户端模组构造阶段登记，自己维护的缓存则要挂在资源监听器注册事件里。每次切换资源包，都必须丢掉从旧资源包读来的数据；缓存里的世界对象和 GUI 对象也不要跨帧长期留着。

下面这个例子会给附属模组的示意图建一套文件索引。首次加载资源以及之后按 F3+T 重载时，索引都会重新生成，被删掉或被资源包替换的文件都会同步更新。示意图放到 `assets/example/textures/guide/` 目录下即可。

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
