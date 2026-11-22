# Multiblock Conversion

Describes the input and output structures separately. Spawner data migration also requires source and target relative coordinates.

Create `data/example/recipe/multiblock_conversion/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:multiblock_conversion/example`.

## Recipe Example

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

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/multiblock_conversion/spawner.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:multiblock_conversion`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockDefinition.CODEC` | Required | Input structure [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L470) |
| `outputPattern` | `MultiblockDefinition.CODEC` | Required | Output structure [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L472) |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | Optional | Relative positions for migrating spawners [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L474) |

### ModifySpawnerAction

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `fromPos` | 3-integer coordinates | Required | Source spawner relative coordinates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L13) |
| `toPos` | 3-integer coordinates | Required | Target spawner relative coordinates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L14) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java)
