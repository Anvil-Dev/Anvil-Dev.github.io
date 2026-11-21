# 目录树、书签与操作区

把标签较多的章节交给可滚动目录，固定几个常用操作。下面是可直接引用的布局文件，`ageratum:fullscreen` 提供三个分区所在的侧栏。

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

| 字段 | 类型 | 可选性、默认值与用途 |
| --- | --- | --- |
| 各区 `visible` | 布尔 | 可选，默认为 `true`。所在面板还要把该区列入 `sections`。 |
| 各区 `height` | 数值或字符串 | 可选。固定高度用正数，比例用 `"45%"`，`"auto"` 按自然高度，`"fill"` 参与剩余空间分配。目录与书签默认 `fill`，操作区默认 `auto`。 |
| 各区 `weight` | 正数 | 可选，默认为 1。多个 `fill` 分区按权重划分剩余高度。固定和自动高度超过可用高度时等比例缩小。 |
| `tree.indent_per_level`、`hover_shift` | 非负整数 | 默认为 10、5，指定每层缩进和鼠标悬停时的横移量。设 0 可取消对应效果。 |
| `tree.collapse_mode` | 字符串 | 可选。`auto` 使用界面的默认展开规则，`expanded` 与 `collapsed` 指定初始展开或折叠。 |
| `tree.pinned_parent`、`scroll_hint` | 布尔 | 均默认 `true`。控制固定父章提示和目录滚动提示。 |
| `tree.marquee`、`bookmarks.marquee` | 对象 | 长标题滚动设置。`enabled` 默认 `true`，`speed` 为正数，默认每秒 30 个逻辑像素。`pause_ms` 默认 800 毫秒，`gap` 默认为 24 个逻辑像素。 |
| `bookmarks.show_add_button` | 布尔 | 可选，默认 `true`。隐藏书签分区的添加按钮时，可将 `add` 放进操作区。 |
| `actions.buttons` | 枚举字符串数组 | 默认 `["close","share","return","dark"]`。另有 `add`。数组顺序即显示顺序，重复或未知按钮忽略。 |
| `actions.direction`、`align` | 枚举字符串 | 方向默认 `vertical`，也接受 `horizontal`。对齐默认 `top`，还接受 `bottom`。 |
| `actions.spacing` | 非负整数 | 可选，默认 10，控制操作按钮之间的间距。 |

[区块高度和分配](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java) · [标签绘制](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuidePanelView.java) · [默认值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java)
