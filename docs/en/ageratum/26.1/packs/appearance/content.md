# Body, Background, and Scrollbar

Wide body areas work well for structure previews. The layout below extends the fullscreen layout, tightens row spacing, and makes the scrollbar's hit target wider than the thumb. Save it as `assets/workshop/ageratum/layouts/machines.json`.

```json
{
  "extends": "ageratum:fullscreen",
  "content": {
    "padding": { "left": 14, "top": 18, "right": 14, "bottom": 18 },
    "rows_margin": 4,
    "scrollbar": {
      "enabled": true,
      "width": 5,
      "hit_width": 14,
      "min_thumb_height": 16,
      "auto_hide": true,
      "fade_distance": 40
    }
  },
  "interaction": { "scroll_step": 20 }
}
```

| Field | Type | Default Behavior |
| --- | --- | --- |
| `content.padding` | Object | Optional. `left`, `top`, `right`, `bottom` are non-negative integers. Base light layout uses `15, 18, 15, 18`. |
| `content.rows_margin` | Non-negative integer | Optional, base value `5`; controls vertical spacing between document components. |
| `content.background` | Texture object or string | Optional. Base background is `ageratum:gui/guide/light/guide`, source frame `256 × 232`, atlas `256 × 256`. Use [nine-slice](./textures) when non-stretched borders are needed. |
| `content.scrollbar.enabled` | Boolean | Optional, default `true`. When disabled, body text can use the horizontal space previously reserved for the scrollbar. |
| `content.scrollbar.width`, `hit_width` | Integer | Optional. Width defaults to `6` and must be positive. Hit width defaults to `12` and may be wider than the visible track. |
| `content.scrollbar.min_thumb_height` | Non-negative integer | Optional, default `12`; keeps a draggable thumb even in long documents. |
| `content.scrollbar.auto_hide`, `fade_distance` | Boolean, non-negative number | Optional, defaults `true` and `48`; controls fade-out when the pointer moves away from the scrollbar. |
| `interaction.scroll_step` | Non-negative number | Optional, default `16`; body distance scrolled per wheel step. |

`textures.scrollbar_track` and `textures.scrollbar_thumb` control the body track and thumb. The zoom widget uses separate `textures.zoom_track` and `textures.zoom_thumb`. A reader's own zoom preference does not modify the layout file. [Where the screen reads it](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java) · [Thumb sizing & hit testing](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java) · [Zoom slider](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideZoomSlider.java)
