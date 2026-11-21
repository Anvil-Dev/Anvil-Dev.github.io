# 霜钢锻造置换

用多个材料与结果选项把同一个基础物品导向不同锻造成品。

在数据包中建立 `data/example/recipe/permutation/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:permutation/example`。

## 配方示例

```json
{
  "type": "anvilcraft:permutation",
  "input": {
    "items": "minecraft:netherite_axe"
  },
  "options": [
    {
      "material": {
        "type": "anvilcraft:empty"
      },
      "result": "minecraft:diamond_axe"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/permutation/netherite_axe.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:permutation`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 可省略，默认 `PermutationRecipe.DEFAULT_TEMPLATE` | 锻造模板谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L86) |
| `input` | 物品原料谓词 | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L89) |
| `options` | `FrostSmithingOption.CODEC`数组 | 必填 | 各材料与结果的对应关系 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L93) |

### FrostSmithingOption

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `material` | `IFrostMaterialPredicate.CODEC` | 必填 | 锻造材料谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L15) |
| `result` | `RecipeResult.CODEC` | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L18) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java)
