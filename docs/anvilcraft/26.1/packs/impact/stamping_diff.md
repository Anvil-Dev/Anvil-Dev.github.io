# 异种物品冲压

用原料谓词匹配互异的掉落物。压制平台具有优先处理行为时，配方会让出本次匹配。

在数据包中建立 `data/example/recipe/stamping_diff/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:stamping_diff/example`。

## 配方示例

```json
{
  "type": "anvilcraft:stamping_diff",
  "ingredients": [
    {
      "count": 2,
      "items": "#anvilcraft:templates"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:two_to_one_smithing_template"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/stamping_diff/two_to_one_smithing_template.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:stamping_diff`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L29) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L32) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java)
