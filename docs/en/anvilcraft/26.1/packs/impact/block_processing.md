# Block Processing

Sequential assembly can pair material blocks with processing blocks. Input and output offsets are both relative to one block below the impact point.

Create `data/example/recipe/block_processing/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:block_processing/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:block_processing",
  "inputs": [
    {
      "blocks": "minecraft:stone"
    },
    {
      "blocks": "minecraft:cobblestone"
    }
  ],
  "result": {
    "block": "minecraft:gravel"
  }
}
```

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:block_processing`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputs` | Block state predicate array | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L35) |
| `result` | Block state with a probability | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L38) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java)
