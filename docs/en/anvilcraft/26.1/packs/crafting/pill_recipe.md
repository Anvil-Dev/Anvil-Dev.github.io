# Pill Crafting

Enables dynamic crafting for pills. Input slots and outputs are determined at crafting time by the special recipe.

Create `data/example/recipe/pill_recipe/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:pill_recipe/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:pill_recipe"
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/pill.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:pill_recipe`.

The serializer uses `MapCodec.unit` to return a fixed recipe. Its JSON requires only `type`. When a player crafts the recipe, `matches` checks the inputs and `assemble` determines the output.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java)
