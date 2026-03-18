---
prev:
   text: Charger Charging Recipe
   link: /en/posts/docs/datapack/25_charger_charging_recipe
next:
   text: Neutron Irradiation Recipe
   link: /en/posts/docs/datapack/27_neutron_irradiation_recipe
---

# Multiple To One Smithing Recipe

This recipe family combines 2, 4, or 8 input slots into one result with shared template/material constraints.

## Related Types

- `anvilcraft:multiple_to_one_smithing` (base type)
- `anvilcraft:two_to_one_smithing`
- `anvilcraft:four_to_one_smithing`
- `anvilcraft:eight_to_one_smithing`

## Basic Structure

```json
{
  "type": "anvilcraft:two_to_one_smithing",
  "template": { "items": "anvilcraft:two_to_one_smithing_template" },
  "material": { "items": "minecraft:iron_ingot" },
  "inputs": [
    { "items": "minecraft:stone" },
    { "items": "minecraft:andesite" }
  ],
  "result": {
    "id": "minecraft:polished_andesite",
    "count": 1
  }
}
```

## Field Description

- `template`: Template item predicate
- `material`: Material item predicate
- `inputs`: Multi-input ingredient list (size depends on type)
- `result`: Output result

