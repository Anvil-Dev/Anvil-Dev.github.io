# Portal Conversion

Matches the block state to be converted, then sets the resulting block and its probability.

Create `data/example/recipe/portal_conversion/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:portal_conversion/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:portal_conversion",
  "input": {
    "blocks": "anvilcraft:ember_anvil"
  },
  "portal": "minecraft:end_portal",
  "result": {
    "block": "anvilcraft:spectral_anvil"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/portal_conversion/ember_anvil.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:portal_conversion`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L45) |
| `result` | Block state with a probability | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L48) |
| `portal` | Resource ID | Required | Portal type that triggers conversion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L25) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java)
