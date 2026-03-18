---
prev:
   text: Block Crush Recipe
   link: /en/posts/docs/datapack/04_block_crush_recipe
next:
   text: Bulging Recipe
   link: /en/posts/docs/datapack/06_bulging_recipe
---

# Stamping Recipe

Stamping recipes are used to transform items into other items on the stamping platform.

## Basic Structure

```json
{
  "type": "anvilcraft:stamping",
  "ingredients": [
    {
      "items": "minecraft:iron_ingot"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:iron_plate",
      "count": 1
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:stamping`, identifies this as a stamping recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Stamp iron ingot into iron plate:

```json
{
  "type": "anvilcraft:stamping",
  "ingredients": [
    {
      "items": "minecraft:iron_ingot"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:iron_plate",
      "count": 1
    }
  ]
}
```
