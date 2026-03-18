# Mass Inject Recipe

Mass inject recipes attach a mass value to matched items without directly outputting a new item stack.

## Basic Structure

```json
{
  "type": "anvilcraft:mass_inject",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "mass": 250
}
```

## Field Description

- `type`: Fixed value `anvilcraft:mass_inject`
- `ingredient`: Input item condition (`Ingredient`)
- `mass`: Injected mass value (integer)

## Notes

- `mass` is used by internal mass calculation/display logic
- This is a special handling recipe type

