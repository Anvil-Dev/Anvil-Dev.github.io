---
prev:
   text: Mob Transform With Item Recipe
   link: /en/posts/docs/datapack/22_mob_transform_with_item_recipe
next:
   text: Mineral Fountain Chance Recipe
   link: /en/posts/docs/datapack/24_mineral_fountain_chance_recipe
---

# Multiblock Conversion Recipe

Multiblock conversion recipes replace a matched structure with another output structure.

## Basic Structure

```json
{
  "type": "anvilcraft:multiblock_conversion",
  "inputPattern": {
    "layers": [["AAA", "A A", "AAA"]],
    "symbols": { "A": { "blocks": "minecraft:stone" } }
  },
  "outputPattern": {
    "layers": [["BBB", "B B", "BBB"]],
    "symbols": { "B": { "blocks": "minecraft:deepslate" } }
  }
}
```

## Field Description

- `type`: Fixed value `anvilcraft:multiblock_conversion`
- `inputPattern`: Input structure pattern
- `outputPattern`: Output structure pattern
- `modifySpawnerAction`: Optional spawner modification behavior

## Constraints

- Input/output pattern sizes must match
- Symbol mappings on both sides must be complete

