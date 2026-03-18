---
prev:
   text: Multiblock Conversion Recipe
   link: /en/posts/docs/datapack/23_multiblock_conversion_recipe
next:
   text: Charger Charging Recipe
   link: /en/posts/docs/datapack/25_charger_charging_recipe
---

# Mineral Fountain Chance Recipe

This recipe converts blocks with probability in a specific dimension.

## Basic Structure

```json
{
  "type": "anvilcraft:mineral_fountain_chance",
  "dimension": "minecraft:overworld",
  "from_block": {
    "blocks": "minecraft:stone"
  },
  "to_block": {
    "state": { "Name": "minecraft:diamond_ore" },
    "chance": 0.05
  }
}
```

## Field Description

- `type`: Fixed value `anvilcraft:mineral_fountain_chance`
- `dimension`: Target dimension
- `from_block`: Source block predicate
- `to_block`: Destination block with chance

## Notes

- Unlike `17_mineral_fountain_recipe.md`, this one is probabilistic
- `chance` should be a decimal in range `0.0` to `1.0`

