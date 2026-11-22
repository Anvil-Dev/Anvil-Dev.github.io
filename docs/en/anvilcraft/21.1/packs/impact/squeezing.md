# Block Squeezing

Filters the pressed material by block state and describes the fluid transformation inside the cauldron in the same recipe.

Create `data/example/recipe/squeezing/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:squeezing/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:squeezing",
  "fluid": [],
  "ingredient": {
    "blocks": "minecraft:wet_sponge"
  },
  "result": {
    "block": "minecraft:sponge"
  },
  "transform": {
    "amount": 250,
    "id": "minecraft:water"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/squeezing/water_cauldron_from_wet_sponge.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:squeezing`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Block state predicate | Required | Single ingredient to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L102) |
| `result` | Block state with a probability | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L106) |
| `anvil` | `HasAnvil.CODEC` | Optional, default `HasAnvil.DEFAULT` | Anvil condition participating in collision or pressing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L111) |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L57) |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L58) |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L59) |
| `chance` | Number | Optional, default `1.0f` | Trigger probability [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L60) |
| `ignited` | Boolean | Optional, default `false` | Match ignited state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L61) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java)
