# Frost Metal Deformation

Specifies a smithing template, material predicate, and a group of items participating in deformation.

Create `data/example/recipe/deformation/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:deformation/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:deformation",
  "inputs": [
    {
      "id": "minecraft:bow"
    },
    {
      "id": "minecraft:crossbow"
    }
  ],
  "material": {
    "type": "anvilcraft:empty"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/deformation/bowlikes.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:deformation`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Optional, default `DeformationRecipe.DEFAULT_TEMPLATE` | Smithing template predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L101) |
| `material` | `IFrostMaterialPredicate.CODEC` | Required | Smithing material predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L104) |
| `inputs` | `RecipeResult.LIST_CODEC` | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L107) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java)
