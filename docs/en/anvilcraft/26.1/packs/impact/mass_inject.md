# Mass Injection

Assigns a mass value to items eligible for mass injection. Materials of the same category can be matched together using an ingredient tag.

Create `data/example/recipe/mass_inject/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mass_inject/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mass_inject",
  "ingredient": "anvilcraft:cursed_gold_ingot",
  "mass": 250
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/mass_inject/anvilcraft_cursed_gold_ingot.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mass_inject`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Ingredient ID, tag, or valid ingredient expression | Required | Single ingredient to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L43) |
| `mass` | Integer | Required | Mass value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L46) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java)
