# Multiblock Crafting

Describes the input structure with a layered character grid, where each non-empty symbol matches blocks through the mapping table.

Create `data/example/recipe/multiblock/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:multiblock/example`.

## Recipe Example

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

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/multiblock/diamond_block.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:multiblock`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pattern` | `MultiblockDefinition.CODEC` | Required | Ordered input pattern or structure definition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L203) |
| `result` | Item stack object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L206) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java)
