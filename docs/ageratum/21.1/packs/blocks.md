# 块标签、布局和公式

提示框和行布局可以嵌套。开闭标签分别独占一行，单个无正文的对象使用自闭合形式。下面的两种材料会在同一行居中显示。

```markdown
<tip>
修理前先准备材料。
</tip>

<row direction="horizontal" halign="center" valign="center">
<item id="minecraft:iron_ingot"/>
<item id="minecraft:iron_pickaxe"/>
</row>

<latex formula="a^2+b^2=c^2" dpi="150" color="#29405B" center="true"/>
```

| 标签或参数 | 类型 | 要求与缺省行为 |
| --- | --- | --- |
| `info`、`tip`、`warning`、`danger` | 成对的块标签 | 接受解析后的 Markdown 子内容。没有必填属性。 |
| `directory` | 自闭合标签 | 由手册界面填充目录占位。写作 `<directory/>`。 |
| `row.direction`（别名 `dir`） | 字符串 | 可选，默认 `horizontal`。垂直排列接受 `v`、`vertical`、`column`、`col`。 |
| `row.halign` | 字符串 | 可选，默认 `left`。可写 `center` 或 `right`，别名按 `alignX`、`xAlign`、`align` 顺序回退。 |
| `row.valign` | 字符串 | 可选，默认 `top`。水平排列时控制行内的 `center` 或 `bottom` 对齐，别名 `alignY`、`yAlign`。 |
| `latex.formula` | 字符串 | 与非空块正文至少提供一项。属性优先。 |
| `latex.dpi` | 整数字符串 | 可选，默认 150，限制在 72 至 600。 |
| `latex.scale` | 数值字符串 | 可选。缺省解析值为 0.1，实际显示还受最小可读高度、布局空间及 0.5 至 2.0 的缩放限制。 |
| `latex.color` | 十六进制颜色字符串 | 可选，默认黑色，接受带或不带 `#` 的六位颜色。 |
| `latex.center` | 布尔字符串 | 可选，默认 `true`。 |

公式组件向 CodeCogs 请求图片。无法连通时会显示加载或失败提示。要在离线整合包中展示固定公式，也可以把公式图片随资源包发布。[公式组件](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java) · [行布局](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java)

## 参数怎么被读取

标签属性是 `key=value`。键支持字母、数字、下划线、点号和连字符。值可以无引号，包含空格时应选单引号或双引号。重复键取最后一个值。外层用单引号可以原样包住 JSON 对象内部的双引号。这里使用键值对解析器，组件只在其对应字段中调用 JSON 或 SNBT 解码器。通用 HOCON 对象没有解析入口。

`::: tip` 加独立结束行 `:::` 可以写提示框。冒号语法把尾部作为原始参数传给工厂。内置 `row` 会另外解析这段文本。需要 `id` 等结构化属性的内置组件宜使用标签语法。[属性解析器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/ExtensionParamParser.java) · [块解析器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java) · [工厂登记表](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinExtensionComponents.java)
