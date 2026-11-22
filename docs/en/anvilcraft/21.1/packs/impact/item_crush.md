# Item Crushing

Processes item entities with the crushing table. Material predicates accept item tags, and the result list can assign individual probabilities to different outputs.

Create `data/example/recipe/item_crush/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:item_crush/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:item_crush",
  "ingredients": [
    {
      "items": "#minecraft:wool"
    }
  ],
  "results": [
    {
      "count": 4,
      "id": "minecraft:string"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/item_crush/string.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:item_crush`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L205) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L208) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java)
