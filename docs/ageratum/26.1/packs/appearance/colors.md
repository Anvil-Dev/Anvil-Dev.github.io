# 正文、提示框与代码着色

暗背景下先改普通正文和链接，再为提示框与代码块指定边界色。下列文件可以单独保存为 `assets/workshop/ageratum/layouts/night_notes.json`。页面选择 `workshop:night_notes` 后使用这套颜色。

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

颜色值可写 `"#RRGGBB"`、`"#AARRGGBB"` 或 Minecraft 颜色名（例如 `"gold"`）。六位值自动补不透明的 Alpha。各项均可省略，读取时使用继承的值或对应控件的默认色。

| `colors` 中的键 | 类型与作用 |
| --- | --- |
| `content_text` | 颜色字符串。用于没有显式颜色的正文。内置深色布局为 `#E8E0D0`。 |
| `link`、`broken_link` | 颜色字符串。替换带点击事件的默认链接色和断链色，基础值依次为 `#66CCFF`、`#FF5555`。 |
| `label_text_active`、`label_text_clickable`、`label_text_disabled` | 颜色字符串。选中、可点击、不可点击的标签，基础值 `#8B5A2B`、`#5D4630`、`#3F3F3F`。 |
| `bookmark_text`、`panel_text` | 颜色字符串。浅色默认布局为这两个键提供 `#5D4630`，书签文字读取 `bookmark_text`。 |
| `background_gradient_start`、`background_gradient_end` | 颜色字符串。界面底层渐变，基础值 `#C0101010` 和 `#D0101010`。 |
| `components.<键>.background`、`border` | 颜色字符串。`info`、`tip`、`warning`、`danger` 提示框分别读取自己的底色和边框色。 |
| `components.code_block` | 对象。`text`、`background`、`border`、`gutter_background`、`gutter_line`、`line_number`、`highlight_line` 分别设置普通代码、底色、边框、行号区背景、分隔线、行号和高亮行。 |
| `components.code_block.syntax` | 对象。按 `keyword`、`type`、`literal`、`comment`、`operator`、`separator` 配置分类色。 |
| `components.code_block.syntax_spans` | 对象。键为高亮器实际输出的 CSS 类，值为颜色字符串。精确匹配优先于分类色。 |

扩展组件可提供自己的键，例如 `"workshop:pressure_dial"` 下的 `"needle"`。该字段只有在组件绘制时主动读取才会生效。[正文颜色与代码标记](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java) · [提示框](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNoticeBoxComponent.java) · [代码块](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java)
