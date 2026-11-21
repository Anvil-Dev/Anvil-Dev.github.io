# 行内引用、交互样式与插图

用行内组件插入可翻译文本和实际按键名称。物品引用可根据物品及组件匹配其他文章。要显示插图，将图片语句独占一行。

```markdown
在 <translate key="item.minecraft.iron_ingot" fallback="铁锭"/> 上按 <key id="key.inventory"/>。
维修方法见 <ref item="minecraft:iron_pickaxe" component='{"minecraft:damage":12}'/>。

<gradient start="#4278B8" end="#33B882">修理完成</gradient>

![手册背景](ageratum:gui/guide/light/guide.png)
```

| 写法 | 字段和类型 | 行为 |
| --- | --- | --- |
| `translate` | 必填字符串 `key`，可选字符串 `fallback` | 按客户端语言翻译。没有有效键时显示空文本。 |
| `key` | 必填按键 ID 字符串 `id` | 显示这个按键绑定的名称。 |
| `ref` | 必填物品 ID 字符串 `item`，可选组件对象文本 `component` | 查找可跳转的绑定页面，链接悬停可显示物品。这里的属性名是单数。 |
| `color` | 标签内写颜色值，如 `<color=#4278B8>` | 到 `</color>` 为止应用颜色。 |
| `gradient` | `start`、`end` 两个颜色字符串 | 从开头到结尾逐字符插值，按 Unicode 码点处理。 |
| `o` | 无 | 对围住的文字启用混淆效果。 |
| `hover` | 字符串 `type` 和 `data` | 文本提示可用 `SHOW_TEXT` 加纯文本，`SHOW_ITEM` 和 `SHOW_ENTITY` 的 `data` 是对应 HoverEvent Codec 所读的 JSON 文本。 |
| `click` | 字符串 `type` 和 `data` | 支持 `OPEN_URL`、`COPY_TO_CLIPBOARD`、`RUN_COMMAND`、`OPEN_FILE`，参数按种类填写。 |

显式带命名空间的图片路径会加上 `textures/`，上例使用 `assets/ageratum/textures/gui/guide/light/guide.png`。翻译表在 `assets/<命名空间>/lang/<语言>.json`，根对象把翻译键映射到字符串。将自己的插图和翻译表放进自己的命名空间，可避免与其他手册同名。[行内组件](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineComponents.java) · [文本交互](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineStyleParsers.java) · [图片解析](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDImageComponent.java)
