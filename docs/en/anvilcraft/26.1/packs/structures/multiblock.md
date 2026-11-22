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
    "id": "minecraft:diamond_block"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/multiblock/diamond_block.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:multiblock`.

Define the structure with `grid` and `mapping`, or supply a structure object with `layers` and `symbols`. In the latter form, each symbol maps to a state described by `block` (a block ID or tag) and `properties`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pattern` | `MultiblockUtil.DEFINITION_CODEC` | Required | Ordered input pattern or structure definition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L207) |
| `result` | Item stack template object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L210) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java)
