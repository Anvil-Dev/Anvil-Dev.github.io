# Creating Light and Dark Theme Pairs

When changing link colors for a fullscreen guide, override only the color fields to inherit panel dimensions, tool buttons, and textures. The two files below define a theme pair together. Use `layout: field_guide:kiln` in the document Front Matter.

**`assets/field_guide/ageratum/layouts/kiln.json`**

```json
{
  "name": "kiln",
  "extends": "ageratum:fullscreen",
  "dark_variant": "field_guide:kiln_dark",
  "colors": {
    "link": "#864015",
    "broken_link": "#A82620"
  }
}
```

**`assets/field_guide/ageratum/layouts/kiln_dark.json`**

```json
{
  "name": "kiln_dark",
  "extends": "ageratum:fullscreen_dark",
  "colors": {
    "link": "#F4AC77",
    "broken_link": "#F38C84"
  }
}
```

| Field or Value | Merge Rule |
| --- | --- |
| `extends` | Points to the parent layout for geometry and appearance; can cross namespaces. |
| `dark_variant` | Layout ID looked up when dark mode is enabled. Keep this one-way; the dark theme does not need to point back to the light theme. |
| JSON objects | Deep-merged key by key. Changing `colors.link` preserves other colors from the parent layout. |
| Arrays | Replaces the parent layout's array as a whole. When overriding a button list, include any buttons you want to keep. |
| `null` | Deletes an inherited entry. When building a brand-new sidebar, delete inherited panels to avoid rendering two sets at once. |

After editing, press F3+T and test light/dark toggling, page turning, and the bookmark sidebar. If dark mode does not change, check `dark_variant` in the light file first, then verify that the target resource resolves. [Layout merging & variant lookup](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java)
