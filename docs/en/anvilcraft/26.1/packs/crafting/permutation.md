# Frost Metal Permutation

Routes the same base item to different smithing outputs using multiple material-and-result options.

Create `data/example/recipe/permutation/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:permutation/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:permutation",
  "input": {
    "items": "minecraft:netherite_axe"
  },
  "options": [
    {
      "material": {
        "type": "anvilcraft:empty"
      },
      "result": {
        "id": "minecraft:diamond_axe"
      }
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/permutation/netherite_axe.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:permutation`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Optional, default `PermutationRecipe.DEFAULT_TEMPLATE` | Smithing template predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L93) |
| `input` | Item ingredient predicate | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L96) |
| `options` | `FrostSmithingOption.CODEC` array | Required | Material-to-result options [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L100) |

### FrostSmithingOption

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `material` | `IFrostMaterialPredicate.CODEC` | Required | Smithing material predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L15) |
| `result` | `RecipeResult.CODEC` | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/FrostSmithingOption.java#L18) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java)
