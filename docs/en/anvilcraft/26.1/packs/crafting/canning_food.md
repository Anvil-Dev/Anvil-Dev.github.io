# Food Canning

Enables the special crafting table recipe for canned food. Food recognition and result components are computed by the recipe class.

Create `data/example/recipe/canning_food/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:canning_food/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:canning_food"
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/canned_food.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:canning_food`.

The serializer uses `MapCodec.unit` to return a fixed recipe. Its JSON requires only `type`. When a player crafts the recipe, `matches` checks the inputs and `assemble` determines the output.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java)
