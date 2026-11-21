# 方块榨取

用方块状态筛选受压材料，并在同一份配方描述炼药锅内的流体变化。

在数据包中建立 `data/example/recipe/squeezing/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:squeezing/example`。

## 配方示例

```json
{
  "type": "anvilcraft:squeezing",
  "fluid": [],
  "ingredient": {
    "blocks": "minecraft:wet_sponge"
  },
  "result": {
    "block": "minecraft:sponge"
  },
  "transform": {
    "amount": 250,
    "id": "minecraft:water"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/squeezing/water_cauldron_from_wet_sponge.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:squeezing`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 方块状态谓词 | 必填 | 单个待匹配的原料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L102) |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L106) |
| `anvil` | `HasAnvil.CODEC` | 可省略，默认 `HasAnvil.DEFAULT` | 参与碰撞或压制的铁砧条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L111) |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `EMPTY_PREDICATE` | 炼药锅的流体匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L57) |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L58) |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L59) |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L60) |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L61) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java)
