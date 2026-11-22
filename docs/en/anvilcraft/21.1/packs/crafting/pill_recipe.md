# Pill Crafting

Enables dynamic crafting for pills. Input slots and outputs are determined at crafting time by the special recipe.

Create `data/example/recipe/pill_recipe/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:pill_recipe/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:pill_recipe",
  "category": "misc"
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/pill.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:pill_recipe`.

`category` is the recipe book category string; the example uses `misc`. Input matching and result assembly are implemented in Java's `matches` and `assemble`. Changing `category` only affects recipe book grouping.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java)
