# Understanding Caching and Language Fallback

Opening a page by command and looking up a page by held item use two different indexes. When using a command, the client searches for a file in its current language first and falls back to `en_us` if not found. When looking up by item, it filters bound pages by item ID and data components first, then picks a language; if neither the current language nor English exists, it picks one from other languages.

If two Chinese pages both bind an iron pickaxe—one specifying only the ID and the other requiring a damage of 12—looking up an iron pickaxe with damage 12 opens the more specific page. The cache picks the language first, then sorts by component match score from high to low, breaking ties lexicographically by page ID. When a single page has multiple binding declarations, the highest score is used. [Item bindings](../packs/bindings)

When the client reloads resources, `GuideDocumentCache` runs in two passes: the first pass collects raw text, reads Front Matter, and builds the item index; the second pass parses full pages. This allows earlier pages to reference items bound in later files. If a single page fails to parse, it is logged and skipped. Finally, the apply phase updates the document and navigation indexes and warms up command suggestions. After editing resource pack contents, press F3+T to reload and verify.

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

| Query | Return Value & Usage Boundary |
| --- | --- |
| `getFirstDocumentByItemStack(stack, language)` | Returns empty when the stack is empty, unbound, or no component condition matches. Reads the index of the client's current resource packs. |
| `getParsedDocument(location)` | The parsed document for the exact resource location. Resolve the language to locate the file first when needed. |
| `getNavigationTree(namespace, languageCode)` | Fetches the tree by namespace and normalized language code. The caller decides the fallback strategy when a language is missing. |
| `reloadListener()` | Returns the reload listener registered by the client. After resources reload, re-read the current document and navigation tree. |

[Reload & cache implementation](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java)
