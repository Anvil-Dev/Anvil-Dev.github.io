# Celestial Anvil Crafting

Registers the special crafting table recipe for the Celestial Forging Anvil, where black hole or white hole materials determine the generated celestial body preset.

Create `data/example/recipe/celestial_anvil/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:celestial_anvil/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:celestial_anvil"
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/celestial_anvil.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:celestial_anvil`.

The serializer uses `MapCodec.unit` to return a fixed recipe. Its JSON requires only `type`. When a player crafts the recipe, `matches` checks the inputs and `assemble` determines the output.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java)
