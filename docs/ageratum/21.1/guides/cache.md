# 判断缓存与语言回退

用命令打开某一页和用手持物品反查页面，查的不是同一个索引。命令先用当前客户端语言查文件，找不到才尝试 `en_us`。物品导航先按物品 ID 与组件筛出绑定项，再选语言；若匹配结果没有当前语言和英语，仍可选其中第一项。

如果两篇中文文档都绑定了这把铁镐，一篇只写物品 ID，另一篇追加损耗条件，铁镐也可能打开只写 ID 的页面。缓存按页面资源位置、绑定字符串的顺序排列；给规则增加组件条件会缩小匹配范围。需要稳定地打开维修页时，给重叠的规则划清条件，或检查文档路径排序。[物品绑定](../packs/bindings)

客户端资源重载时，`GuideDocumentCache` 先收集原文、读取 Front Matter 并建立物品索引。第二次遍历才解析完整页面，这样较早解析的页面也能引用较晚文件绑定的物品。单页解析异常会记录在日志里并跳过该页。应用阶段更新文档和导航索引，同时预热命令补全。编辑包内容后用 F3+T 验证。

```java
package dev.example.fieldguide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.GuideDocumentCache;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDDocument;
import java.util.Optional;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;

public final class ItemGuideTitle {
    public static Optional<String> find(ItemStack stack, String language) {
        Optional<ResourceLocation> page = GuideDocumentCache.getFirstDocumentByItemStack(stack, language);
        return page.flatMap(GuideDocumentCache::getParsedDocument).map(MDDocument::getTitle);
    }
}
```

| 查询 | 返回值与使用边界 |
| --- | --- |
| `getFirstDocumentByItemStack(stack, language)` | 空栈、没有绑定或组件条件全部不匹配时返回空。读客户端当前资源包的索引。 |
| `getParsedDocument(location)` | 精确资源位置对应的已解析文档。需要解析语言时先定位文件。 |
| `getNavigationTree(namespace, languageCode)` | 按命名空间和规范化语言取树。调用方可决定缺失语言时的回退策略。 |
| `isCacheLoaded()` | 检查已解析文档集合是否非空。空手册集合和未载入都可能返回 false。 |

[重载和缓存实现](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java)
