---
prev:
   text: Neutron Irradiation Recipe
   link: /en/posts/docs/datapack/27_neutron_irradiation_recipe
next:
   text: Deformation Recipe
   link: /en/posts/docs/datapack/29_deformation_recipe
---

# Permutation Recipe

Permutation is one of the frost smithing recipe types for rotating conversion targets under template/material
constraints.

## Basic Structure

```json
{
  "type": "anvilcraft:permutation",
  "template": { "items": "anvilcraft:permutation_template_item" },
  "material": { "items": "minecraft:lapis_lazuli" },
  "inputs": [
    { "id": "minecraft:iron_sword" },
    { "id": "minecraft:golden_sword" }
  ]
}
```

## Field Description

- `type`: Fixed value `anvilcraft:permutation`
- `template`: Template predicate (optional, defaults to permutation template)
- `material`: Material predicate
- `inputs`: Candidate conversion list in order

