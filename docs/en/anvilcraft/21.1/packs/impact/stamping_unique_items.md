# Unique Item Stamping

Provides candidate outputs for unique-item stamping behavior. Outputs use the weighted item stack format.

Create `data/example/recipe/stamping_unique_items/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:stamping_unique_items/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:stamping_unique_items",
  "ingredients": [
    {
      "tag": "anvilcraft:templates"
    },
    {
      "tag": "anvilcraft:templates"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:two_to_one_smithing_template"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/stamping_unique_items/two_to_one_smithing_template.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:stamping_unique_items`.

The ingredient list can contain up to 9 items.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `results` | Array of item stacks with individual probabilities | Required | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L108) |
| `ingredients` | `Ingredient.CODEC` array | Required | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L106) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java)
