# Mass Injection

Assigns a mass value to items eligible for mass injection. Materials of the same category can be matched together using an ingredient tag.

Create `data/example/recipe/mass_inject/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mass_inject/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mass_inject",
  "ingredient": {
    "item": "anvilcraft:cursed_gold_ingot"
  },
  "mass": 250
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mass_inject/anvilcraft_cursed_gold_ingot.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mass_inject`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Non-empty ingredient | Required | Single ingredient to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L178) |
| `mass` | Integer | Required | Mass value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L180) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java)
