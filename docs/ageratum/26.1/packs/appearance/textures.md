# 控件贴图、图集与九宫格

沿用内置 PNG，只修改它被拉伸的方式时，在布局 JSON 中单独给对应贴图写 `nine_slice`。以下文件可直接引用 `ageratum` 自带素材，不依赖外部图片。

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

| 字段 | 类型 | 可选性与计算规则 |
| --- | --- | --- |
| `location` | 资源 ID 字符串 | 指定新素材时提供。继承父贴图时可省略。自动补 `textures/` 和 `.png`，示例背景位于 `assets/ageratum/textures/gui/guide/light/guide.png`。 |
| `width`、`height` | 正整数 | 单帧的源宽、高，可继承。 |
| `texture_size` | 正整数 | 可选，同时指定图集宽、高。 |
| `texture_width`、`texture_height` | 正整数 | 可选，逐轴覆盖 `texture_size`。每一轴至少等于对应源帧尺寸。 |
| `tint` | 颜色字符串 | 可选，乘在整张贴图上，默认不染色。支持 RGB、ARGB 和 Minecraft 颜色名。 |
| `nine_slice` | 对象或 `null` | 可选。`border` 设置四边统一厚度，`left`、`right`、`top`、`bottom` 可单独指定非负整数。`null` 显式清除继承的切片。 |

整个贴图也可缩写为 ID 字符串，保留先前的帧和图集参数。图集高度达到两倍帧高时，悬停状态取紧接着第一帧的下一帧。读取资源时检查 PNG 是否存在且可解码。缺失素材可在日志中定位到具体布局 ID 与字段。

| 用途 | `textures` 下的键 |
| --- | --- |
| 目录、书签条 | `label_primary`、`label_secondary`、`label_bookmark` |
| 操作与导航按钮 | `button_close`、`button_share`、`button_return`、`button_add`、`button_up`、`button_down`、`button_dark`、`button_import` |
| 滚动与缩放 | `scrollbar_track`、`scrollbar_thumb`、`zoom_track`、`zoom_thumb` |
| `textures.components` 物品与结构 | `item_slot`、`structure_button_projection` |
| `textures.components` 配方图标 | `recipe_anvil`、`recipe_arrow`、`recipe_crafting_table`、`recipe_ember_smithing_table`、`recipe_furnace`、`recipe_jewelcrafting_table`、`recipe_plus`、`recipe_slot`、`recipe_slots_1n`、`recipe_slots_2n`、`recipe_slots_3n`、`recipe_smithing_table`、`recipe_stonecutter` |

扩展模组暴露的组件键要写全命名空间，例如 `"workshop:pressure_dial"`。运行时先用完整 ID 查字典，Ageratum 自身的键还可使用短名。[图集读取和绘制](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java) · [组件键查询](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java) · [控件与配方图标](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java)
