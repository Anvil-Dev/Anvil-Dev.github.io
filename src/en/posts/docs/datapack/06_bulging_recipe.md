# Bulging Recipe

Bulging recipes are used to transform items into other items using fluid in cauldrons.

## Basic Structure

```json
{
  "type": "anvilcraft:bulging",
  "ingredients": [
    {
      "items": "minecraft:dirt",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "minecraft:clay",
      "count": 1
    }
  ],
  "fluid": "minecraft:water"
}
```

## Field Description

### type

Fixed value `anvilcraft:bulging`, identifies this as a bulging recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

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

Bulge dirt into clay:

```json
{
  "type": "anvilcraft:bulging",
  "ingredients": [
    {
      "items": "minecraft:dirt",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "minecraft:clay",
      "count": 1
    }
  ],
  "fluid": "minecraft:water",
  "consume": 0,
  "transform": "null"
}
```
