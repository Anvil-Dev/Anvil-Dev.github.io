# Two-to-One Smithing

Combines two base items into one output. Template, smithing material, and base items are matched separately.

Create `data/example/recipe/two_to_one_smithing/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:two_to_one_smithing/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:two_to_one_smithing",
  "inputs": [
    {
      "items": "anvilcraft:ember_anvil"
    },
    {
      "items": "anvilcraft:frost_anvil"
    }
  ],
  "material": {
    "items": "anvilcraft:multiphase_transcendium"
  },
  "result": {
    "id": "anvilcraft:transcendence_anvil"
  },
  "template": {
    "items": "anvilcraft:two_to_one_smithing_template"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/two_to_one_smithing/transcendence_anvil.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:two_to_one_smithing`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Required | Smithing template predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L165) |
| `material` | Item ingredient predicate | Required | Smithing material predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L168) |
| `inputs` | Array of item ingredient predicates | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L171) |
| `result` | Item stack template object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L38) |
| `modifiers` | `IResultModifier.CODEC` array | Optional, default `[]` | Modifiers applied to the result in order [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L42) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/TwoToOneSmithingRecipe.java)
