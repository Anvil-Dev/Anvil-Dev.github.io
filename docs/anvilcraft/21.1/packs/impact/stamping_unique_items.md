# 特殊物品冲压

为特殊冲压行为提供候选产物。产物使用带概率的物品栈格式。

在数据包中建立 `data/example/recipe/stamping_unique_items/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:stamping_unique_items/example`。

## 配方示例

```json
{
  "type": "anvilcraft:stamping_unique_items",
  "ingredients": [
    {
      "tag": "anvilcraft:templates"
    },
    {
      "tag": "anvilcraft:templates"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:two_to_one_smithing_template"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/stamping_unique_items/two_to_one_smithing_template.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:stamping_unique_items`。

原料列表最多包含 9 项。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `results` | 带概率的物品栈数组 | 必填 | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L108) |
| `ingredients` | `Ingredient.CODEC`数组 | 必填 | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L106) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java)
