# Squeezing Recipe

Squeezing recipes are used to transform blocks into other blocks using fluid in cauldrons.

## Basic Structure

```json
{
  "type": "anvilcraft:squeezing",
  "ingredient": {
    "blocks": "minecraft:wet_sponge"
  },
  "result": {
    "block": {
      "Name": "minecraft:sponge"
    },
    "chance": 1.0
  },
  "fluid": "minecraft:water",
  "consume": -1
}
```

## Field Description

### type

Fixed value `anvilcraft:squeezing`, identifies this as a squeezing recipe.

### ingredient

Input block required for the recipe. Element contains:

- `blocks`: Block ID (can be a single block ID string or array of block IDs)

### result

Output result for the recipe. Element contains:

- `block`: Block state object, contains block name and other properties
- `chance`: Probability of result occurring (between 0.0 and 1.0)

### fluid

Fluid type, such as "minecraft:water" or "minecraft:lava"

### transform

Fluid type, such as "minecraft:water" or "minecraft:lava", represents the fluid to transform into

### consume

Fluid consumption amount (optional):

- Positive number means consume fluid
- Negative number means produce fluid
- 0 means no change to fluid (default value)

## Usage Example

Squeeze wet sponge into dry sponge:

```json
{
  "type": "anvilcraft:squeezing",
  "ingredient": {
    "blocks": "minecraft:wet_sponge"
  },
  "result": {
    "block": {
      "Name": "minecraft:sponge"
    },
    "chance": 1.0
  },
  "fluid": "minecraft:water",
  "consume": -1
}
```
