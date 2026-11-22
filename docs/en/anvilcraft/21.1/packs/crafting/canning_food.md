# Food Canning

Enables the special crafting table recipe for canned food. Food recognition and result components are computed by the recipe class.

Create `data/example/recipe/canning_food/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:canning_food/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:canning_food",
  "category": "misc"
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/canned_food.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:canning_food`.

`category` is the recipe book category string; the example uses `misc`. Input matching and result assembly are implemented in Java's `matches` and `assemble`. Changing `category` only affects recipe book grouping.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java)
