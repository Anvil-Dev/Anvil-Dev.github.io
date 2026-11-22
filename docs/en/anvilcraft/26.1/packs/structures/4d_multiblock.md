# 4D Multiblock

References multiple structure definitions in the same recipe, producing an item stack once matching completes.

Create `data/example/recipe/4d_multiblock/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:4d_multiblock/example`.

## Recipe Example

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
    "id": "anvilcraft:hypercube"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/4d_multiblock/hypercube.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:4d_multiblock`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `definitions` | `MultiblockDefinition.CODEC` array | Required | Structure definitions matched in sequence [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L344) |
| `result` | Item stack template object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L347) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java)
