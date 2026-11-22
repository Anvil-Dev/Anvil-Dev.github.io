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
  "results": {
    "states": [
      {
        "state": {
          "block": "anvilcraft:spectral_anvil"
        }
      }
    ]
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/portal_conversion/ember_anvil.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:portal_conversion`.

`results.states` lists candidate block states. Each entry's `state` describes the block to place. Built-in recipes with one result omit the weight.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L48) |
| `results` | `WeightedChanceBlockStates.CODEC` | Required | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L51) |
| `portal` | Resource ID | Required | Portal type that triggers conversion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L21) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java)
