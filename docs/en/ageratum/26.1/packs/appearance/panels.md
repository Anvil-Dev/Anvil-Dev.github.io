# Screen Bounds and Sidebars

To reserve a directory column for a widescreen guide, remove the two inherited narrow sidebars first, then declare your own panel. Save the file below as `assets/workshop/ageratum/layouts/wide.json` and reference `workshop:wide` from your pages.

```json
{
  "extends": "ageratum:light",
  "screen": {
    "mode": "fullscreen",
    "padding": { "left": 12, "top": 12, "right": 12, "bottom": 12 }
  },
  "panels": {
    "chapters": null,
    "tools": null,
    "navigation": {
      "edge": "left",
      "width": 136,
      "order": 0,
      "spacing": 8,
      "padding": { "left": 5, "top": 8, "right": 5, "bottom": 8 },
      "sections": ["tree", "bookmarks", "actions"]
    }
  }
}
```

All fields below are optional, and dimensions are in UI logical pixels.

| Field | Type | Default & Meaning |
| --- | --- | --- |
| `screen.mode` | String enum | `centered` lays out centered around the book page. `fullscreen` insets from the window edges by screen padding. |
| `screen.min_margin.horizontal`, `vertical` | Number | Minimum horizontal and vertical margins in `centered` mode. Defaults `32`, `10`. |
| `screen.padding` | Object | `left`, `top`, `right`, `bottom` as non-negative integers; default `0`. |
| `panels.<name>` | Object or `null` | Defines an arbitrarily named panel; `null` removes an inherited panel. By default `chapters` holds the directory on the left and `tools` holds actions and bookmarks on the right. |
| `edge`, `order` | String, integer | `edge` is `left` (default) or `right`. `order` defaults to `0`, ties sort by panel name, and earlier panels on each side sit further outward. |
| `width`, `visible` | Positive integer, boolean | Default width `34`, visible. Narrow screens shrink panel widths proportionally to preserve at least 64 logical pixels for the body. |
| `padding`, `spacing` | Four-side object, non-negative integer | Inner panel padding defaults to `0` on all sides; spacing between adjacent sections defaults to `0`. Built-in `tools` explicitly uses spacing `10`. |
| `background` | Texture object or ID string | Optional; can reuse built-in backgrounds. [Texture fields](./textures) |
| `sections` | String array | Allows `tree`, `bookmarks`, `actions`, ordered top to bottom. An empty array means no sections. |

Each section can appear in at most one visible panel; duplicates are claimed by the first panel processed, and unknown entries are skipped. The player's directory-side preference also affects the panel containing `tree`, so check client options when testing left/right layouts. [Panel geometry](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java) · [Layout data](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java)
