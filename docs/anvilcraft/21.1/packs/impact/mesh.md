# 筛分

在筛网上方处理掉落物。使用 results 中各个产物的概率控制副产物。

在数据包中建立 `data/example/recipe/mesh/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mesh/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mesh",
  "ingredients": [
    {
      "items": "anvilcraft:quartz_sand"
    }
  ],
  "results": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.5
      },
      "id": "anvilcraft:quartz_sand"
    },
    {
      "id": "minecraft:quartz"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mesh/quartz_sand.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mesh`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L205) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L208) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java)
