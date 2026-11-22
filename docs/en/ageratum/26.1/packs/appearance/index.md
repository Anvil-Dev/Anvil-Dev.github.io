# Layout JSON Paths, Inheritance, and Selection

To give an entire chapter a consistent layout, first write a layout at `assets/workshop/ageratum/layouts/maintenance.json`, then add `layout: workshop:maintenance` to that chapter's `index.md` front matter. Layouts reload with client resources, so press F3+T and reopen the page to inspect changes. `workshop` in the path is the resource pack author's own namespace.

```json
{
  "name": "maintenance",
  "extends": "ageratum:light",
  "dark_variant": "ageratum:dark",
  "tree": { "hover_shift": 0 },
  "content": { "rows_margin": 7 }
}
```

```markdown
---
layout: workshop:maintenance
---

# Equipment Maintenance

Maintenance records in this directory share the same layout.
```

| Top-level Field | Type | Requirements & Reading Rules |
| --- | --- | --- |
| `name` | String | Optional, metadata only. The resource ID is derived from the file path. |
| `extends` | Parent layout ID string | Optional. Regular layouts inherit `ageratum:light` by default. Short IDs use the current layout's namespace. |
| `dark_variant` | Layout ID string or `null` | Optional. Selected when dark mode is enabled. Regular layouts stay on the current layout if omitted. |
| `screen`, `panels` | Object | Optional. [Screen & Sidebars](./panels) |
| `tree`, `bookmarks`, `actions` | Object | Optional. [Directory Tree, Bookmarks & Actions](./sections) |
| `content`, `interaction` | Object | Optional. [Body, Background & Scrollbar](./content) |
| `textures`, `colors` | Object | Optional. [Textures](./textures) and [Colors](./colors) list the built-in keys. |

`ageratum:light`, `ageratum:dark`, `ageratum:fullscreen`, and `ageratum:fullscreen_dark` are all bundled with the mod. When opening a subpage, Ageratum reads the page's `layout` first, then walks up `index.md` files in parent directories up to the language root, skipping missing or invalid IDs. Preview mode searches `index.md` on disk in the same order up to the preview root. When no valid declaration is found, `ageratum:light` is used.

Inheritance merges objects recursively, overwrites scalars of the same name, and replaces arrays as a whole. Writing `null` removes an inherited field. `name`, `extends`, and `dark_variant` apply only to the current file. The resource manager validates each field before merging; invalid fields are logged while preserving the parent's value. If the parent layout is missing, inheritance forms a cycle, or inheritance depth exceeds 64, Ageratum falls back to the built-in code defaults and applies the parsed patches on top. If a dark variant is missing or cyclic, it stops at the last valid layout. [Loading, validation & inheritance](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java) · [Built-in defaults](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java)
