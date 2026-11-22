# Four-to-One Smithing

Combines four base items into one output. Result modifiers can copy or adjust components from inputs.

Create `data/example/recipe/four_to_one_smithing/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:four_to_one_smithing/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:four_to_one_smithing",
  "inputs": [
    {
      "items": "anvilcraft:sapphire_amulet"
    },
    {
      "items": "anvilcraft:ruby_amulet"
    },
    {
      "items": "anvilcraft:topaz_amulet"
    },
    {
      "items": "anvilcraft:emerald_amulet"
    }
  ],
  "material": {
    "items": "anvilcraft:frost_metal_block"
  },
  "result": {
    "id": "anvilcraft:gem_amulet"
  },
  "template": {
    "items": "anvilcraft:four_to_one_smithing_template"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/four_to_one_smithing/gem_amulet.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:four_to_one_smithing`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Required | Smithing template predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L165) |
| `material` | Item ingredient predicate | Required | Smithing material predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L168) |
| `inputs` | Array of item ingredient predicates | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L171) |
| `result` | Item stack template object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L38) |
| `modifiers` | `IResultModifier.CODEC` array | Optional, default `[]` | Modifiers applied to the result in order [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L42) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/FourToOneSmithingRecipe.java)
