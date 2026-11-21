# 四维多方块

在同一份配方中引用多份结构定义，匹配完成后给出一个物品栈。

在数据包中建立 `data/example/recipe/4d_multiblock/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:4d_multiblock/example`。

## 配方示例

```json
{
  "type": "anvilcraft:4d_multiblock",
  "definitions": [
    {
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
          "blocks": "anvilcraft:tempering_glass"
        }
      }
    },
    {
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
          "blocks": "anvilcraft:tempering_glass"
        }
      }
    },
    {
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
          "blocks": "anvilcraft:tempering_glass"
        }
      }
    }
  ],
  "result": {
    "count": 1,
    "id": "anvilcraft:hypercube"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/4d_multiblock/hypercube.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:4d_multiblock`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `definitions` | `MultiblockDefinition.CODEC`数组 | 必填 | 依次参与匹配的结构定义 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L344) |
| `result` | 物品栈对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L347) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java)
