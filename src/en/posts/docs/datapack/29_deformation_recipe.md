# Deformation Recipe

Deformation is one of the frost smithing recipe types for shape-changing conversions with template/material constraints.

## Basic Structure

```json
{
  "type": "anvilcraft:deformation",
  "template": { "items": "anvilcraft:deformation_template_item" },
  "material": { "items": "anvilcraft:frost_metal_ingot" },
  "inputs": [
    { "id": "minecraft:iron_pickaxe" },
    { "id": "minecraft:diamond_pickaxe" }
  ]
}
```

## Field Description

- `type`: Fixed value `anvilcraft:deformation`
- `template`: Template predicate (optional)
- `material`: Material predicate (optional, defaults to frost metal ingot)
- `inputs`: Deformation candidate list

