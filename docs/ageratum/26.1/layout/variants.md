# 成对制作明暗主题

为全屏手册换链接颜色时，只覆盖颜色字段即可继承面板尺寸、工具按钮和纹理。下列两个文件共同定义一对主题。文档的 Front Matter 使用 `layout: field_guide:kiln`。

**`assets/field_guide/ageratum/layouts/kiln.json`**

```json
{
  "name": "kiln",
  "extends": "ageratum:fullscreen",
  "dark_variant": "field_guide:kiln_dark",
  "colors": {
    "link": "#864015",
    "broken_link": "#A82620"
  }
}
```

**`assets/field_guide/ageratum/layouts/kiln_dark.json`**

```json
{
  "name": "kiln_dark",
  "extends": "ageratum:fullscreen_dark",
  "colors": {
    "link": "#F4AC77",
    "broken_link": "#F38C84"
  }
}
```

| 字段或值 | 合并规则 |
| --- | --- |
| `extends` | 指向几何和外观的父布局，可跨命名空间。 |
| `dark_variant` | 玩家开启深色模式时查找的布局 ID。保持单向即可，深色主题不需要再指回浅色主题。 |
| JSON 对象 | 逐键深合并。改变 `colors.link` 会保留父布局的其他颜色。 |
| 数组 | 整个值替换父布局数组。覆盖按钮列表时，把要保留的按钮一并写上。 |
| `null` | 删除继承项。创建全新侧栏时可删除继承来的面板，避免同时绘制两套。 |

修改后按 F3+T，再依次验证明暗切换、翻页与书签侧栏。若深色一直没有变化，先查浅色文件的 `dark_variant` 指向，再查目标资源是否能解析。[布局合并与变体查找](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java)
