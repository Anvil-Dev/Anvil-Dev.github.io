# Directory Tree, Bookmarks, and Actions

Put chapters with many labels into a scrollable directory and pin a few common actions. Below is a directly usable layout file; `ageratum:fullscreen` provides the sidebar hosting all three sections.

```json
{
  "extends": "ageratum:fullscreen",
  "tree": {
    "height": "55%",
    "indent_per_level": 12,
    "hover_shift": 0,
    "collapse_mode": "collapsed",
    "marquee": { "enabled": true, "speed": 28, "pause_ms": 900, "gap": 20 }
  },
  "bookmarks": { "height": "fill", "weight": 1, "show_add_button": false },
  "actions": {
    "height": "auto", "direction": "horizontal", "spacing": 6,
    "align": "bottom", "buttons": ["add", "return", "close"]
  }
}
```

| Field | Type | Optionality, Default & Purpose |
| --- | --- | --- |
| Section `visible` | Boolean | Optional, default `true`. The hosting panel must also list the section in `sections`. |
| Section `height` | Number or string | Optional. Positive number for fixed height, `"45%"` for percentage, `"auto"` for natural height, `"fill"` to share remaining space. `tree` and `bookmarks` default to `fill`; `actions` defaults to `auto`. |
| Section `weight` | Positive number | Optional, default `1`. Multiple `fill` sections divide remaining height by weight. Fixed and auto heights scale down proportionally if they exceed available height. |
| `tree.indent_per_level`, `hover_shift` | Non-negative integer | Defaults `10` and `5`; sets per-level indent and horizontal shift on hover. Set to `0` to disable either effect. |
| `tree.collapse_mode` | String | Optional. `auto` uses the screen's default expansion rule; `expanded` and `collapsed` set initial expanded or collapsed state. |
| `tree.pinned_parent`, `scroll_hint` | Boolean | Both default `true`; control pinned parent chapter hints and directory scroll hints. |
| `tree.marquee`, `bookmarks.marquee` | Object | Long-title scrolling settings. `enabled` defaults `true`; `speed` is positive, defaulting to `30` logical pixels/sec; `pause_ms` defaults `800`; `gap` defaults `24` logical pixels. |
| `bookmarks.show_add_button` | Boolean | Optional, default `true`. When hiding the add button in `bookmarks`, you can place `add` in `actions`. |
| `actions.buttons` | Enum string array | Defaults to `["close","share","return","dark"]`; also supports `add`. Array order sets display order; duplicates or unknown buttons are ignored. |
| `actions.direction`, `align` | Enum string | `direction` defaults to `vertical` and also accepts `horizontal`. `align` defaults to `top` and also accepts `bottom`. |
| `actions.spacing` | Non-negative integer | Optional, default `10`; controls spacing between action buttons. |

[Section heights & allocation](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java) · [Label rendering](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuidePanelView.java) · [Defaults](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java)
