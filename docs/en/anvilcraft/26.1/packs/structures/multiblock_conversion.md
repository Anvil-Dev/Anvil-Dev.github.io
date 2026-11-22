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

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/multiblock_conversion/spawner.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:multiblock_conversion`.

Define the structure with `grid` and `mapping`, or supply a structure object with `layers` and `symbols`. In the latter form, each symbol maps to a state described by `block` (a block ID or tag) and `properties`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockUtil.DEFINITION_CODEC` | Required | Input structure [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L498) |
| `outputPattern` | `MultiblockUtil.DEFINITION_CODEC` | Required | Output structure [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L500) |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | Optional | Relative positions for migrating spawners [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L502) |

### ModifySpawnerAction

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `fromPos` | 3-integer coordinates | Required | Source spawner relative coordinates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L13) |
| `toPos` | 3-integer coordinates | Required | Target spawner relative coordinates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/ModifySpawnerAction.java#L14) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java)
