# Block Smearing

Write the touching block pair into `inputs`. Placing the same materials in different positions may match other processing modes.

Create `data/example/recipe/block_smear/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:block_smear/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:block_smear",
  "inputs": [
    {
      "blocks": "minecraft:moss_block"
    },
    {
      "blocks": "minecraft:cobblestone"
    }
  ],
  "result": {
    "block": "minecraft:mossy_cobblestone"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/block_smear/mossy_cobblestone.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:block_smear`.

The output position is two blocks below the impact point, and the result inherits matching-named properties from the smeared block. Stair facing, slab type, and log axis are preserved this way.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputs` | Block state predicate array | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L33) |
| `result` | Block state with a probability | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L36) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java)
