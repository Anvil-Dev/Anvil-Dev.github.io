# 手册物品模型与翻译

改变背包中指南书的图标时，覆盖 `assets/ageratum/textures/item/guidebook.png` 即可沿用内置模型。需要自己制作模型时，把物品定义写到 `assets/ageratum/items/guidebook.json`。

```json
{"model":{"type":"minecraft:model","model":"workshop:item/field_guide"}}
```

这条定义交给客户端的物品模型解析器。在 `assets/workshop/models/item/field_guide.json` 保存下列文件，并提供 `assets/workshop/textures/item/field_guide.png`。

```json
{"parent":"minecraft:item/generated","textures":{"layer0":"workshop:item/field_guide"}}
```

| 字段 | 类型 | 读取位置与要求 |
| --- | --- | --- |
| `model` | 对象 | 本例的物品定义必填。 |
| `model.type` | ID 字符串 | 此处选 `minecraft:model`，让渲染器引用静态模型。 |
| `model.model` | ID 字符串 | 对该类型必填。相对所属命名空间的 `models/`，省略扩展名。 |
| `parent` | ID 字符串 | 模型可选父级，本例继承 `minecraft:item/generated`。 |
| `textures.layer0` | ID 字符串 | 给生成物品模型指定第一层贴图，路径相对 `textures/`。 |

客户端语言文件位于 `assets/ageratum/lang/zh_cn.json`。需要替换指南书名称时覆盖 `item.ageratum.guidebook` 的字符串值，键名与注册 ID 对应。更换模型与翻译后，用 F3+T 重载客户端资源。
