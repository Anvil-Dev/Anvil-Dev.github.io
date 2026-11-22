# Item Stamping

Specifies item entity inputs and outputs for stamping; the game checks materials and the stamping platform when an anvil triggers processing.

Create `data/example/recipe/stamping/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:stamping/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:stamping",
  "ingredients": [
    {
      "items": "minecraft:snowball"
    }
  ],
  "results": [
    {
      "id": "minecraft:snow"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/stamping/snow.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:stamping`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L205) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L208) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingRecipe.java)
