# Page Titles, Sorting, and Colors

Place metadata between `---` on the first line of the file and the next standalone `---`. The article below appears as "Repair" in the directory while keeping the full heading in the body. Ageratum parses this YAML-style subset of maps, lists, and scalars itself.

```markdown
---
title: Anvil Repair Guide
layout: ageratum:light
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
| `layout` | Layout resource ID string | Optional. Page declaration takes precedence, followed by walking up to the nearest `index.md`. See [Layout Resource Discovery & Inheritance](./appearance/). |
| `title` | String | Optional. Used when no separate navigation title is set. |
| `navigation.title` | String | Optional. Non-empty values take precedence over the top-level title. |
| `weight`, `navigation.weight` | Integer or integer-parseable string | Optional, default `0`. Nested value takes precedence. Smaller values appear earlier; ties are sorted by file path. |
| `color`, `navigation.color` | Hex color string | Optional. Nested value takes precedence. Quoting `#RRGGBB` as in the example is recommended. |
| `guide.items`, `items` | String or string list | Optional. Used to match articles from items; see [Item Bindings](./bindings). |

Titles fall back in order: `navigation.title`, `title`, the first level-1 heading, then the filename. Subdirectory `index.md` files act as directory home pages. If the front matter has no closing delimiter, the parser keeps the entire raw text as body content. Undefined keys can be stored in the metadata map, and their effect depends on whether a consumer reads them. [Metadata reading](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java) · [Parsing & indexing](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java)
