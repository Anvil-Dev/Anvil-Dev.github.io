# 霜钢锻造变形

指定锻造模板、材料谓词以及参与变形的一组物品。

在数据包中建立 `data/example/recipe/deformation/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:deformation/example`。

## 配方示例

```json
{
  "type": "anvilcraft:deformation",
  "inputs": [
    "minecraft:bow",
    "minecraft:crossbow"
  ],
  "material": {
    "type": "anvilcraft:empty"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/deformation/bowlikes.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:deformation`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 可省略，默认 `DeformationRecipe.DEFAULT_TEMPLATE` | 锻造模板谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L98) |
| `material` | `IFrostMaterialPredicate.CODEC` | 必填 | 锻造材料谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L101) |
| `inputs` | `RecipeResult.LIST_CODEC` | 必填 | 一组参与匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L104) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java)
