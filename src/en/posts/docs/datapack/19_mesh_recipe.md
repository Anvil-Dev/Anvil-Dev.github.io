# Mesh Recipe

Mesh recipes transform input items under scaffolding (mesh) conditions.

## Basic Structure

```json
{
  "type": "anvilcraft:mesh",
  "ingredients": [
    { "items": "minecraft:gravel" }
  ],
  "results": [
    { "id": "minecraft:flint", "count": 1 }
  ]
}
```

## Field Description

- `type`: Fixed value `anvilcraft:mesh`
- `ingredients`: Input item list
- `results`: Output result list (supports chance outputs)

## Notes

- Usually used for sieve/filter style conversions
- Requires the expected block environment (scaffolding)

