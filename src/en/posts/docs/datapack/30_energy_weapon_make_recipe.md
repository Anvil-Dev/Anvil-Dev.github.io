---
prev:
   text: Deformation Recipe
   link: /en/posts/docs/datapack/29_deformation_recipe
next:
   text: Anvil Collision Craft Recipe
   link: /en/posts/docs/datapack/31_anvil_collision_recipe
---

# Energy Weapon Make Recipe

This recipe combines up to 6 ingredients to craft an energy weapon and preserve key runtime attributes.

## Basic Structure

```json
{
  "type": "anvilcraft:energy_weapon_make",
  "ingredients": [
    { "items": "minecraft:diamond_sword" },
    { "items": "minecraft:redstone" }
  ],
  "result": {
    "id": "anvilcraft:energy_blade",
    "count": 1
  }
}
```

## Field Description

- `type`: Fixed value `anvilcraft:energy_weapon_make`
- `ingredients`: Ingredient list (1 to 6)
- `result`: Output weapon item
- `neoforge:conditions`: Optional condition list

## Notes

- Runtime assembly can inherit enchantments and energy-related data

