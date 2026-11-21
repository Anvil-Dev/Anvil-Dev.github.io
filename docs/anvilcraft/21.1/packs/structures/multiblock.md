# 多方块合成

用分层字符网格描述输入结构，每个非空符号通过映射表匹配方块。

在数据包中建立 `data/example/recipe/multiblock/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:multiblock/example`。

## 配方示例

```json
{
  "type": "anvilcraft:multiblock",
  "pattern": {
    "grid": [
      [
        "000",
        "000",
        "000"
      ],
      [
        "000",
        "000",
        "000"
      ],
      [
        "000",
        "000",
        "000"
      ]
    ],
    "mapping": {
      "0": {
        "blocks": "minecraft:coal_block"
      }
    }
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_block"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/multiblock/diamond_block.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:multiblock`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `pattern` | `MultiblockDefinition.CODEC` | 必填 | 输入的有序图案或结构定义 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L203) |
| `result` | 物品栈对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L206) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java)
