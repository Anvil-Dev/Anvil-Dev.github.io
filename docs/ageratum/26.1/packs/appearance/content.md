# 正文、背景与滚动条

宽正文适合放结构预览。下面的布局继承全屏版，调小行距，并把滚动条的可点击区域做得比滑块宽。文件可保存为 `assets/workshop/ageratum/layouts/machines.json`。

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

| 字段 | 类型 | 缺省行为 |
| --- | --- | --- |
| `content.padding` | 对象 | 可选。`left`、`top`、`right`、`bottom` 为非负整数。基础浅色布局依次为 15、18、15、18。 |
| `content.rows_margin` | 非负整数 | 可选，基础值 5，控制文档组件行间距。 |
| `content.background` | 贴图对象或字符串 | 可选。基础背景为 `ageratum:gui/guide/light/guide`，源帧 256 × 232，图集 256 × 256。需要无拉伸边框时使用[九宫格切片](./textures)。 |
| `content.scrollbar.enabled` | 布尔值 | 可选，默认 `true`。关闭后正文可以使用滚动条原先占用的横向空间。 |
| `content.scrollbar.width`、`hit_width` | 整数 | 可选。宽度默认为 6，须为正。点击热区默认 12，可比可见轨道宽。 |
| `content.scrollbar.min_thumb_height` | 非负整数 | 可选，默认 12，长文档也保留可拖动的滑块。 |
| `content.scrollbar.auto_hide`、`fade_distance` | 布尔值、非负数 | 可选，默认 `true`、48。控制鼠标远离滚动条时的淡出。 |
| `interaction.scroll_step` | 非负数 | 可选，默认 16，滚轮每个步进移动的正文距离。 |

`textures.scrollbar_track` 和 `textures.scrollbar_thumb` 控制正文轨道与滑块。缩放控件使用独立的 `textures.zoom_track` 与 `textures.zoom_thumb`。读者自己的缩放设置不会改动布局文件。[界面读取位置](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java) · [滑块尺寸和命中](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java) · [缩放控件](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideZoomSlider.java)
