# 质量注入

给能参与质量注入的物品指定质量值。同一类材料可用原料标签一起匹配。

在数据包中建立 `data/example/recipe/mass_inject/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mass_inject/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mass_inject",
  "ingredient": {
    "item": "anvilcraft:cursed_gold_ingot"
  },
  "mass": 250
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mass_inject/anvilcraft_cursed_gold_ingot.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mass_inject`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 非空原料 | 必填 | 单个待匹配的原料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L178) |
| `mass` | 整数 | 必填 | 质量数值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L180) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java)
