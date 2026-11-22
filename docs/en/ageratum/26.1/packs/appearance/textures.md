# Widget Textures, Atlases, and Nine-Slice

To keep a built-in PNG while changing only how it stretches, add `nine_slice` to that texture in your layout JSON. The file below references assets bundled with `ageratum` directly without needing external images.

```json
{
  "extends": "ageratum:light",
  "content": {
    "background": {
      "location": "ageratum:gui/guide/light/guide",
      "width": 256, "height": 232, "texture_width": 256, "texture_height": 256,
      "nine_slice": { "border": 12 }
    }
  },
  "textures": {
    "label_primary": { "nine_slice": { "left": 6, "right": 6 } },
    "scrollbar_thumb": { "tint": "#FFE8E0D0" },
    "components": { "item_slot": "ageratum:gui/component/slot" }
  }
}
```

| Field | Type | Optionality & Calculation Rules |
| --- | --- | --- |
| `location` | Resource ID string | Provided when specifying a new asset; may be omitted when inheriting a parent texture. Automatically prepends `textures/` and appends `.png`; the example background lives at `assets/ageratum/textures/gui/guide/light/guide.png`. |
| `width`, `height` | Positive integer | Source width and height of a single frame; inheritable. |
| `texture_size` | Positive integer | Optional; sets both atlas width and height together. |
| `texture_width`, `texture_height` | Positive integer | Optional; overrides `texture_size` per axis. Each axis must be at least its corresponding source frame size. |
| `tint` | Color string | Optional; multiplied across the entire texture, untinted by default. Supports RGB, ARGB, and Minecraft color names. |
| `nine_slice` | Object or `null` | Optional. `border` sets uniform thickness on all four sides; `left`, `right`, `top`, `bottom` accept non-negative integers individually. `null` explicitly clears inherited slicing. |

An entire texture can also be abbreviated as an ID string, preserving prior frame and atlas parameters. When the atlas height is at least twice the frame height, the hover state uses the frame immediately below the first frame. When loading resources, Ageratum checks that the PNG exists and is decodable; missing assets are logged with the exact layout ID and field.

| Purpose | Keys under `textures` |
| --- | --- |
| Directory & bookmark labels | `label_primary`, `label_secondary`, `label_bookmark` |
| Action & navigation buttons | `button_close`, `button_share`, `button_return`, `button_add`, `button_up`, `button_down`, `button_dark`, `button_import` |
| Scroll & zoom | `scrollbar_track`, `scrollbar_thumb`, `zoom_track`, `zoom_thumb` |
| `textures.components` items & structures | `item_slot`, `structure_button_projection` |
| `textures.components` recipe icons | `recipe_anvil`, `recipe_arrow`, `recipe_crafting_table`, `recipe_ember_smithing_table`, `recipe_furnace`, `recipe_jewelcrafting_table`, `recipe_plus`, `recipe_slot`, `recipe_slots_1n`, `recipe_slots_2n`, `recipe_slots_3n`, `recipe_smithing_table`, `recipe_stonecutter` |

Component keys exposed by add-on mods must include the full namespace, such as `"workshop:pressure_dial"`. At runtime, the dictionary is queried with the full ID first; Ageratum's own keys can also use short names. [Atlas reading & drawing](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java) · [Component key lookup](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java) · [Widget & recipe icons](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java)
