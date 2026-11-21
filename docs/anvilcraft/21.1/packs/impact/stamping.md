# 物品冲压

为冲压工序指定掉落物输入和产物，游戏在铁砧触发加工时检查材料及设备。

在数据包中建立 `data/example/recipe/stamping/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:stamping/example`。

## 配方示例

```json
{
  "type": "anvilcraft:stamping",
  "ingredients": [
    {
      "items": "minecraft:snowball"
    }
  ],
  "results": [
    {
      "id": "minecraft:snow"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/stamping/snow.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:stamping`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L205) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L208) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java)
