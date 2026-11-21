# 快速烹饪

配方分别处理食材和炼药锅液体。将液体谓词及消耗量写在根对象。

在数据包中建立 `data/example/recipe/fast_cooking/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:fast_cooking/example`。

## 配方示例

```json
{
  "type": "anvilcraft:fast_cooking",
  "ingredients": [
    {
      "items": "minecraft:mud"
    }
  ],
  "results": [
    {
      "id": "minecraft:clay"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/fast_cooking/clay.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:fast_cooking`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L91) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L94) |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `EMPTY_PREDICATE` | 炼药锅的流体匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L57) |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L58) |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L59) |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L60) |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L61) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java)
