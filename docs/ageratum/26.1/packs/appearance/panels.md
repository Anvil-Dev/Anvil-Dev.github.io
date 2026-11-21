# 屏幕范围与边栏

给宽屏手册留出一列目录时，先移除继承来的两个窄边栏，再声明自己的面板。将下列文件保存为 `assets/workshop/ageratum/layouts/wide.json`，页面引用 `workshop:wide`。

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

以下字段均可选，尺寸以界面逻辑像素为单位。

| 字段 | 类型 | 默认值与含义 |
| --- | --- | --- |
| `screen.mode` | 字符串枚举 | `centered` 按书页居中布局。`fullscreen` 从窗口边缘扣除屏幕内边距。 |
| `screen.min_margin.horizontal`、`vertical` | 数值 | 居中模式的最小水平与垂直边距。默认 32、10。 |
| `screen.padding` | 对象 | `left`、`top`、`right`、`bottom` 为非负整数，默认为 0。 |
| `panels.<名称>` | 对象或 `null` | 定义任意命名的面板，`null` 删除继承来的面板。默认 `chapters` 在左边放目录，`tools` 在右边放操作和书签。 |
| `edge`、`order` | 字符串、整数 | 边缘取 `left`（默认）或 `right`。顺序默认 0，同序按面板名排序，每侧先处理的面板靠外。 |
| `width`、`visible` | 正整数、布尔值 | 默认宽度 34、可见。窄屏按比例压缩面板宽度，为正文保留最多 64 个逻辑像素的最低空间。 |
| `padding`、`spacing` | 四边对象、非负整数 | 面板内部四边默认 0，相邻分区间距默认 0。内置 `tools` 显式使用间距 10。 |
| `background` | 贴图对象或 ID 字符串 | 可选，可重用内置背景。[纹理字段](./textures) |
| `sections` | 字符串数组 | 允许 `tree`、`bookmarks`、`actions`，按数组从上往下排列。空数组表示没有分区。 |

同一分区只能占用一个可见面板，重复项由先处理的面板占用，未知项会跳过。玩家的目录左右侧偏好还会影响含 `tree` 的面板，测试左右布局时应同时检查客户端选项。[面板几何计算](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java) · [布局数据](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java)
