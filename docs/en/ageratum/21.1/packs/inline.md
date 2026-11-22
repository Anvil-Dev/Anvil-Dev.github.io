# Inline References, Interactive Styles, and Images

Use inline components to insert translatable text and actual keybind names. Item references can match other articles by item and components. To display an illustration, put the image syntax on its own line.

```markdown
Press <key id="key.inventory"/> on <translate key="item.minecraft.iron_ingot" fallback="Iron Ingot"/>.
See <ref item="minecraft:iron_pickaxe" component='{"minecraft:damage":12}'/> for repair instructions.

<gradient start="#4278B8" end="#33B882">Repair complete</gradient>

![Guide background](ageratum:gui/guide/guide.png)
```

| Syntax | Fields & Types | Behavior |
| --- | --- | --- |
| `translate` | Required string `key`, optional string `fallback` | Translates using the client language. Displays empty text if no valid key is provided. |
| `key` | Required keybind ID string `id` | Displays the name bound to this key. |
| `ref` | Required item ID string `item`, optional component object text `component` | Looks up a linkable bound page; hovering the link displays the item. Note the singular attribute name here. |
| `color` | Color value in the tag, e.g. `<color=#4278B8>` | Applies color until `</color>`. |
| `gradient` | Two color strings `start` and `end` | Interpolates character by character from start to end by Unicode code point. |
| `o` | None | Enables obfuscated text on the enclosed characters. |
| `hover` | Strings `type` and `data` | Text tooltips use `SHOW_TEXT` with plain text; for `SHOW_ITEM` and `SHOW_ENTITY`, `data` is JSON text read by the corresponding `HoverEvent` Codec. |
| `click` | Strings `type` and `data` | Supports `OPEN_URL`, `COPY_TO_CLIPBOARD`, `RUN_COMMAND`, `OPEN_FILE`; fill arguments according to type. |

Image paths with an explicit namespace automatically prepend `textures/`, so the example above loads `assets/ageratum/textures/gui/guide/guide.png`. Translation tables live at `assets/<namespace>/lang/<language>.json`, where the root object maps translation keys to strings. Keeping your illustrations and translation tables in your own namespace avoids collisions with other guides. [Inline components](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineComponents.java) · [Text interaction](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineStyleParsers.java) · [Image parsing](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java)
