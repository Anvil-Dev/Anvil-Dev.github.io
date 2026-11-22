# Stamping Distinct Items

Ingredient predicates match distinct dropped items. If the stamping platform has a higher-priority behavior, the recipe defers to it.

Create `data/example/recipe/stamping_diff/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:stamping_diff/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:stamping_diff",
  "ingredients": [
    {
      "count": 2,
      "items": "#anvilcraft:templates"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:two_to_one_smithing_template"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/stamping_diff/two_to_one_smithing_template.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:stamping_diff`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L29) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java#L32) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/StampingDiffRecipe.java)
