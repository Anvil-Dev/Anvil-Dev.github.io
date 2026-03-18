---
prev:
   text: Mass Inject Recipe
   link: /en/posts/docs/datapack/20_mass_inject_recipe
next:
   text: Mob Transform With Item Recipe
   link: /en/posts/docs/datapack/22_mob_transform_with_item_recipe
---

# Stamping Unique Items Recipe

This recipe requires all input items to be unique, and each input stack size must be 1.

## Basic Structure

```json
{
  "type": "anvilcraft:stamping_unique_items",
  "ingredients": [
    { "item": "minecraft:iron_ingot" },
    { "item": "minecraft:gold_ingot" }
  ],
  "results": [
    { "id": "minecraft:clock", "count": 1 }
  ]
}
```

## Field Description

- `type`: Fixed value `anvilcraft:stamping_unique_items`
- `ingredients`: Input ingredient list (max 9)
- `results`: Output result list (supports chance outputs)

## Constraints

- All inputs must be different item types
- Every input slot count must be `1`

