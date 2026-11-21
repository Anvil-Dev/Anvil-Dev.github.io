# 判断缓存与语言回退

用命令打开页面和拿物品反查页面，走的是两套索引。用命令时，会先按客户端当前语言找文件，找不到再退回 `en_us`。拿物品反查时，会先按物品 ID 和组件筛出绑定的页面，再挑语言；如果既没有当前语言也没有英语，就从其他语言里挑一篇。

如果两篇中文页面都绑定了铁镐，一篇只写了 ID，另一篇还要求损耗为 12，那拿损耗正好 12 的铁镐去查时，就会打开条件更具体的那一篇。缓存会先挑语言，再按组件匹配分数从高到低选；同分时按页面 ID 的字典序排。同一页有多条匹配声明时取最高分。[物品绑定](../packs/bindings)

客户端重载资源时，`GuideDocumentCache` 会分两步走：第一遍先收集原文、读 Front Matter 并建好物品索引；第二遍再解析完整页面。这样前面解析的页面也能引用后面文件绑定的物品。单页解析出错会记进日志并跳过这一页。最后在应用阶段更新文档和导航索引，顺便预热命令补全。改完资源包内容后，按 F3+T 重载即可验证。

```java
package dev.example.fieldguide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.GuideDocumentCache;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDDocument;
import java.util.Optional;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.ItemStack;

public final class ItemGuideTitle {
    public static Optional<String> find(ItemStack stack, String language) {
        Optional<Identifier> page = GuideDocumentCache.getFirstDocumentByItemStack(stack, language);
        return page.flatMap(GuideDocumentCache::getParsedDocument).map(MDDocument::getTitle);
    }
}
```

| 查询 | 返回值与使用边界 |
| --- | --- |
| `getFirstDocumentByItemStack(stack, language)` | 空栈、没有绑定或组件条件全部不匹配时返回空。读客户端当前资源包的索引。 |
| `getParsedDocument(location)` | 精确资源位置对应的已解析文档。需要解析语言时先定位文件。 |
| `getNavigationTree(namespace, languageCode)` | 按命名空间和规范化语言取树。调用方可决定缺失语言时的回退策略。 |
| `reloadListener()` | 返回由客户端登记的重载监听器。资源重新加载后，重新读取当前文档和导航树。 |

[重载和缓存实现](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java)
