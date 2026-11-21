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
        "blocks": "minecraft:iron_chain",
        "properties": [
          {
            "axis": "x"
          }
        ]
      },
      "B": {
        "blocks": "minecraft:iron_chain",
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
        "blocks": "minecraft:iron_chain",
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
        "A A",
        "0A0"
      ],
      [
        "A A",
        " B ",
        "A A"
      ],
      [
        "0A0",
        "A A",
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
        "blocks": "minecraft:spawner"
      }
    }
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/multiblock_conversion/spawner.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:multiblock_conversion`。

结构可用 `grid`、`mapping` 的完整定义，也接受 `layers`、`symbols` 的结构对象。后者的映射值用 `block`（方块 ID 或标签）和 `properties` 描述状态。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockUtil.DEFINITION_CODEC` | 必填 | 输入结构 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L498) |
| `outputPattern` | `MultiblockUtil.DEFINITION_CODEC` | 必填 | 输出结构 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L500) |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | 可省略 | 迁移刷怪笼的相对位置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L502) |

### ModifySpawnerAction

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `fromPos` | 三整数坐标 | 必填 | 源刷怪笼相对坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L13) |
| `toPos` | 三整数坐标 | 必填 | 目标刷怪笼相对坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L14) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java)
