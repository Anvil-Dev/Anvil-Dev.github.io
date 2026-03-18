---
prev:
   text: Mineral Fountain Recipe
   link: /en/posts/docs/datapack/17_mineral_fountain_recipe
next:
   text: Mesh Recipe
   link: /en/posts/docs/datapack/19_mesh_recipe
---

# Boiling Recipe

Boiling recipes process items with cauldron fluid and campfire-related environmental conditions.

## Basic Structure

```json
{
  "type": "anvilcraft:boiling",
  "ingredients": [
    { "items": "minecraft:kelp" }
  ],
  "results": [
    { "id": "minecraft:dried_kelp", "count": 1 }
  ],
  "fluid": "minecraft:water",
  "consume": 1,
  "transform": "minecraft:water"
}
```

## Field Description

- `type`: Fixed value `anvilcraft:boiling`
- `ingredients`: Input item list
- `results`: Output result list (supports chance outputs)
- `fluid`: Required cauldron fluid
- `consume`: Fluid consume amount (negative values produce fluid)
- `transform`: Target fluid state after processing

## Notes

- This recipe typically relies on lit campfire environment checks
- Combine `consume` and `transform` for fluid state transitions

