# Body, Callout Box, and Code Coloring

On dark backgrounds, adjust plain body text and links first, then set border colors for callout boxes and code blocks. The file below can be saved as `assets/workshop/ageratum/layouts/night_notes.json`. Pages selecting `workshop:night_notes` will use this palette.

```json
{
  "extends": "ageratum:dark",
  "colors": {
    "content_text": "#E8E0D0",
    "link": "#8AD0FF",
    "broken_link": "#FF8080",
    "components": {
      "tip": { "background": "#FF17382F", "border": "#FF41A079" },
      "code_block": {
        "text": "#D8DEE9",
        "background": "#FF202830",
        "gutter_background": "#FF263038",
        "line_number": "#B5BFC9",
        "syntax": { "keyword": "#82B7FF", "comment": "#82AA88" },
        "syntax_spans": { "java_keyword": "#A6C7FF" }
      }
    }
  }
}
```

Color values accept `"#RRGGBB"`, `"#AARRGGBB"`, or Minecraft color names (such as `"gold"`). Six-digit values automatically receive opaque alpha. Any entry may be omitted, falling back to the inherited value or the widget's default color.

| Key in `colors` | Type & Purpose |
| --- | --- |
| `content_text` | Color string. Used for body text without an explicit color. Built-in dark layout uses `#E8E0D0`. |
| `link`, `broken_link` | Color string. Replaces default click-event link and broken-link colors; base values are `#66CCFF` and `#FF5555`. |
| `label_text_active`, `label_text_clickable`, `label_text_disabled` | Color string. Active, clickable, and disabled labels; base values `#8B5A2B`, `#5D4630`, `#3F3F3F`. |
| `bookmark_text`, `panel_text` | Color string. The light default layout sets both to `#5D4630`; bookmark text reads `bookmark_text`. |
| `background_gradient_start`, `background_gradient_end` | Color string. Underlying screen gradient; base values `#C0101010` and `#D0101010`. |
| `components.<key>.background`, `border` | Color string. `info`, `tip`, `warning`, and `danger` boxes each read their own background and border color. |
| `components.code_block` | Object. `text`, `background`, `border`, `gutter_background`, `gutter_line`, `line_number`, and `highlight_line` configure plain code, background, border, line-number gutter, divider, line numbers, and highlighted lines. |
| `components.code_block.syntax` | Object. Configures category colors for `keyword`, `type`, `literal`, `comment`, `operator`, and `separator`. |
| `components.code_block.syntax_spans` | Object. Keys are CSS classes emitted by the highlighter; values are color strings. Exact matches take precedence over category colors. |

Extension components can provide their own keys, such as `"needle"` under `"workshop:pressure_dial"`. Such fields take effect only when the component actively reads them while rendering. [Body colors & code tokens](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java) · [Callout boxes](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java) · [Code blocks](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java)
