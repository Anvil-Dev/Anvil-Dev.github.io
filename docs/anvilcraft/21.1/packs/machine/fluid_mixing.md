# 流体混合

给混合器定义带用量的流体原料，以及物品或流体产物。

在数据包中建立 `data/example/recipe/fluid_mixing/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:fluid_mixing/example`。

## 配方示例

```json
{
  "type": "anvilcraft:fluid_mixing",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": "minecraft:water"
    },
    {
      "amount": 1000,
      "fluid": "minecraft:lava"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "minecraft:obsidian"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/fluid_mixing/obsidian.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:fluid_mixing`。

`ingredients` 接受 2 至 4 项，每项同时描述流体和用量。物品和流体产物各最多 3 项，合计至少 1 项。开启 `consume_maximum` 时仅允许流体产物。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 带用量的流体原料数组 | 必填 | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L208) |
| `results` | 物品栈数组 | 可省略，默认 `List.<ItemStack>of()` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L209) |
| `fluid_results` | 流体栈数组 | 可省略，默认 `List.<FluidStack>of()` | 流体产物 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L211) |
| `consume_maximum` | 布尔值 | 可省略，默认 `false` | 按可用原料量尽量多地消耗 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L213) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java)
