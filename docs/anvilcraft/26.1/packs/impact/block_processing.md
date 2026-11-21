# 方块处理

序列装配可把材料方块与处理方块配对。输入与输出偏移均以冲击点下方一格为基准。

在数据包中建立 `data/example/recipe/block_processing/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:block_processing/example`。

## 配方示例

```json
{
  "type": "anvilcraft:block_processing",
  "inputs": [
    {
      "blocks": "minecraft:stone"
    },
    {
      "blocks": "minecraft:cobblestone"
    }
  ],
  "result": {
    "block": "minecraft:gravel"
  }
}
```

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:block_processing`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputs` | 方块状态谓词数组 | 必填 | 一组参与匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L35) |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L38) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java)
