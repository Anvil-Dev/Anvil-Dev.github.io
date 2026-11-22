# Page Titles, Sorting, and Colors

Place metadata between `---` on the first line of the file and the next standalone `---`. The article below appears as "Repair" in the directory while keeping the full heading in the body. Ageratum parses this YAML-style subset of maps, lists, and scalars itself.

```markdown
---
title: Anvil Repair Guide
navigation:
  title: Repair
  weight: -10
  color: "#4278B8"
---

# Anvil Repair Guide

Place the tool to repair in the left anvil slot, then add the repair material.
```

| Field | Type | Optionality & Purpose |
| --- | --- | --- |
| `title` | String | Optional. Used when no separate navigation title is set. |
| `navigation.title` | String | Optional. Non-empty values take precedence over the top-level title. |
| `weight`, `navigation.weight` | Integer or integer-parseable string | Optional, default `0`. Nested value takes precedence. Smaller values appear earlier; ties are sorted by file path. |
| `color`, `navigation.color` | Hex color string | Optional. Nested value takes precedence. Quoting `#RRGGBB` as in the example is recommended. |
| `guide.items`, `items` | String or string list | Optional. Used to match articles from items; see [Item Bindings](./bindings). |

Titles fall back in order: `navigation.title`, `title`, the first level-1 heading, then the filename. Subdirectory `index.md` files act as directory home pages. If the front matter has no closing delimiter, the parser keeps the entire raw text as body content. Undefined keys can be stored in the metadata map, and their effect depends on whether a consumer reads them. [Metadata reading](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java) · [Parsing & indexing](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java)
