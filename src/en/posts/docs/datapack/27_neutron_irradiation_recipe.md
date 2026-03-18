---
prev:
   text: Multiple To One Smithing Recipe
   link: /en/posts/docs/datapack/26_multiple_to_one_smithing_recipe
next:
   text: Permutation Recipe
   link: /en/posts/docs/datapack/28_permutation_recipe
---

# Neutron Irradiation Recipe

Neutron irradiation recipes process items in neutron irradiator environments with optional cauldron fluid parameters.

## Basic Structure

```json
{
  "type": "anvilcraft:neutron_irradiation",
  "ingredients": [
    { "items": "minecraft:coal" }
  ],
  "results": [
    { "id": "minecraft:diamond", "count": 1 }
  ],
  "fluid": "minecraft:water",
  "consume": 1,
  "transform": "minecraft:water",
  "chance": 1.0
}
```

## Field Description

- `type`: Fixed value `anvilcraft:neutron_irradiation`
- `ingredients`: Input item list
- `results`: Output result list
- `fluid` / `consume` / `transform` / `chance`: Cauldron fluid condition fields (`HasCauldronSimple`)

## Notes

- Requires neutron irradiator block conditions

