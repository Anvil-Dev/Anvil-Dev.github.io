# 多方块转换

分别描述输入与输出结构。刷怪笼数据迁移还需给出源、目标相对坐标。

在数据包中建立 `data/example/recipe/multiblock_conversion/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:multiblock_conversion/example`。

## 配方示例

```json
{
  "type": "anvilcraft:multiblock_conversion",
  "inputPattern": {
    "grid": [
      [
        "0A0",
        "BCB",
        "0A0"
      ],
      [
        "D D",
        " E ",
        "D D"
      ],
      [
        "0A0",
        "B B",
        "0A0"
      ]
    ],
    "mapping": {
      "0": {
        "blocks": "anvilcraft:cursed_gold_block"
      },
      "A": {
        "blocks": "minecraft:chain",
        "properties": [
          {
            "axis": "x"
          }
        ]
      },
      "B": {
        "blocks": "minecraft:chain",
        "properties": [
          {
            "axis": "z"
          }
        ]
      },
      "C": {
        "blocks": "minecraft:soul_fire"
      },
      "D": {
        "blocks": "minecraft:chain",
        "properties": [
          {
            "axis": "y"
          }
        ]
      },
      "E": {
        "blocks": "anvilcraft:resentful_amber_block"
      }
    }
  },
  "modifySpawnerAction": {
    "fromPos": [
      1,
      1,
      1
    ],
    "toPos": [
      1,
      1,
      1
    ]
  },
  "outputPattern": {
    "grid": [
      [
        "0A0",
        "B B",
        "0A0"
      ],
      [
        "C C",
        " D ",
        "C C"
      ],
      [
        "0A0",
        "B B",
        "0A0"
      ]
    ],
    "mapping": {
      "0": {
        "blocks": "minecraft:sculk"
      },
      "A": {
        "blocks": "minecraft:cobweb"
      },
      "B": {
        "blocks": "minecraft:cobweb"
      },
      "C": {
        "blocks": "minecraft:cobweb"
      },
      "D": {
        "blocks": "minecraft:spawner"
      }
    }
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/multiblock_conversion/spawner.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:multiblock_conversion`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockDefinition.CODEC` | 必填 | 输入结构 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L470) |
| `outputPattern` | `MultiblockDefinition.CODEC` | 必填 | 输出结构 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L472) |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | 可省略 | 迁移刷怪笼的相对位置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L474) |

### ModifySpawnerAction

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `fromPos` | 三整数坐标 | 必填 | 源刷怪笼相对坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L13) |
| `toPos` | 三整数坐标 | 必填 | 目标刷怪笼相对坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L14) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java)
