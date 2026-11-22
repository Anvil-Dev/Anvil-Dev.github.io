# Block Crushing

Filters the block to crush with a state predicate, then specifies the resulting block state.

Create `data/example/recipe/block_crush/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:block_crush/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:block_crush",
  "input": {
    "blocks": "minecraft:gravel"
  },
  "result": {
    "block": "minecraft:sand"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/block_crush/sand.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:block_crush`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L74) |
| `result` | Block state with a probability | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L77) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java)
