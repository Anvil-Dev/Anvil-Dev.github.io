# 二合一锻造

将两件基础物品合成一件成品。模板、锻造材料和基础物品分别匹配。

在数据包中建立 `data/example/recipe/two_to_one_smithing/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:two_to_one_smithing/example`。

## 配方示例

```json
{
  "type": "anvilcraft:two_to_one_smithing",
  "inputs": [
    {
      "items": "anvilcraft:ember_anvil"
    },
    {
      "items": "anvilcraft:frost_anvil"
    }
  ],
  "material": {
    "items": "anvilcraft:multiphase_transcendium"
  },
  "result": "anvilcraft:transcendence_anvil",
  "template": {
    "items": "anvilcraft:two_to_one_smithing_template"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/two_to_one_smithing/transcendence_anvil.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:two_to_one_smithing`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 必填 | 锻造模板谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L162) |
| `material` | 物品原料谓词 | 必填 | 锻造材料谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L165) |
| `inputs` | 物品原料谓词数组 | 必填 | 一组参与匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L168) |
| `result` | 物品 ID | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L37) |
| `modifiers` | `IResultModifier.CODEC`数组 | 可省略，默认 `[]` | 按顺序处理结果的修饰器 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L41) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java)
