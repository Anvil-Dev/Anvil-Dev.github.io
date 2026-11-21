# 方块粉碎

使用一个状态谓词筛选要粉碎的方块，再指定粉碎后的方块状态。

在数据包中建立 `data/example/recipe/block_crush/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:block_crush/example`。

## 配方示例

```json
{
  "type": "anvilcraft:block_crush",
  "input": {
    "blocks": "minecraft:gravel"
  },
  "result": {
    "block": "minecraft:sand"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/block_crush/sand.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:block_crush`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L74) |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L77) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java)
