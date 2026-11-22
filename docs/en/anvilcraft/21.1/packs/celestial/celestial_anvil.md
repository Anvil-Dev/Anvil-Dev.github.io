# Celestial Anvil Crafting

Registers the special crafting table recipe for the Celestial Forging Anvil, where black hole or white hole materials determine the generated celestial body preset.

Create `data/example/recipe/celestial_anvil/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:celestial_anvil/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:celestial_anvil",
  "category": "misc"
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/celestial_anvil.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:celestial_anvil`.

`category` is the recipe book category string; the example uses `misc`. Input matching and result assembly are implemented in Java's `matches` and `assemble`. Changing `category` only affects recipe book grouping.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java)
