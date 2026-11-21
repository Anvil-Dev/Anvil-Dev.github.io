# 方块压缩

用一组方块状态谓词描述受压材料，将指定位置改成结果方块。

在数据包中建立 `data/example/recipe/block_compress/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:block_compress/example`。

## 配方示例

```json
{
  "type": "anvilcraft:block_compress",
  "inputs": [
    {
      "blocks": "minecraft:ice"
    },
    {
      "blocks": "minecraft:ice"
    }
  ],
  "result": {
    "block": "minecraft:packed_ice"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/block_compress/packed_ice.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:block_compress`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputs` | 方块状态谓词数组 | 必填 | 一组参与匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L80) |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L83) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java)
