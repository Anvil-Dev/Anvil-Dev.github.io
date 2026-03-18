---
prev:
   text: Super Heating Recipe
   link: /en/posts/docs/datapack/10_super_heating_recipe
next:
   text: Unpack Recipe
   link: /en/posts/docs/datapack/12_unpack_recipe
---

# Time Warp Recipe

Time warp recipes are used to transform items using time power.

## Basic Structure

```json
{
  "type": "anvilcraft:timewarp",
  "ingredients": [
    {
      "items": "minecraft:rotten_flesh"
    }
  ],
  "results": [
    {
      "id": "minecraft:leather",
      "count": 1
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:timewarp`, identifies this as a time warp recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

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

Time warp rotten flesh into leather:

```json
{
  "type": "anvilcraft:timewarp",
  "ingredients": [
    {
      "items": "minecraft:rotten_flesh"
    }
  ],
  "results": [
    {
      "id": "minecraft:leather",
      "count": 1
    }
  ]
}
```
