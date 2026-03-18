---
prev:
   text: Time Warp Recipe
   link: /en/posts/docs/datapack/11_timewarp_recipe
next:
   text: Block Smear Recipe
   link: /en/posts/docs/datapack/13_block_smear_recipe
---

# Unpack Recipe

Unpack recipes are used to unpack compressed items into original items.

## Basic Structure

```json
{
  "type": "anvilcraft:unpack",
  "ingredients": [
    {
      "items": "minecraft:iron_block"
    }
  ],
  "results": [
    {
      "id": "minecraft:iron_ingot",
      "count": 9
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:unpack`, identifies this as an unpack recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Unpack iron block into iron ingots:

```json
{
  "type": "anvilcraft:unpack",
  "ingredients": [
    {
      "items": "minecraft:iron_block"
    }
  ],
  "results": [
    {
      "id": "minecraft:iron_ingot",
      "count": 9
    }
  ]
}
```
