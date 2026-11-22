# Fluid Mixing

Defines fluid ingredients with amounts, plus item or fluid results, for the mixer.

Create `data/example/recipe/fluid_mixing/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:fluid_mixing/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:fluid_mixing",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": "minecraft:water"
    },
    {
      "amount": 1000,
      "fluid": "minecraft:lava"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "minecraft:obsidian"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/fluid_mixing/obsidian.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:fluid_mixing`.

`ingredients` accepts 2 to 4 entries, each specifying both fluid and amount. Up to 3 item results and 3 fluid results are allowed, with at least 1 result in total. When `consume_maximum` is enabled, only fluid results are allowed.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Fluid ingredient with amount array | Required | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L208) |
| `results` | Item stack array | Optional, default `List.<ItemStack>of()` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L209) |
| `fluid_results` | Fluid stack array | Optional, default `List.<FluidStack>of()` | Fluid outputs [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L211) |
| `consume_maximum` | Boolean | Optional, default `false` | Consume as much available ingredient as possible [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L213) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java)
