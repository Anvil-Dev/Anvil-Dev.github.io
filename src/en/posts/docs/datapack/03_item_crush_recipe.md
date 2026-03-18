---
prev:
   text: Block Compress Recipe
   link: /en/posts/docs/datapack/02_block_compress_recipe
next:
   text: Block Crush Recipe
   link: /en/posts/docs/datapack/04_block_crush_recipe
---

# Item Crush Recipe

Item crush recipes are used to crush items into smaller items.

## Basic Structure

```json
{
  "type": "anvilcraft:item_crush",
  "ingredients": [
    {
      "items": "minecraft:iron_ingot"
    }
  ],
  "results": [
    {
      "id": "minecraft:iron_nugget",
      "count": 3
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:item_crush`, identifies this as an item crush recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Crush iron ingot into iron nuggets:

```json
{
  "type": "anvilcraft:item_crush",
  "ingredients": [
    {
      "items": "minecraft:iron_ingot"
    }
  ],
  "results": [
    {
      "id": "minecraft:iron_nugget",
      "count": 3
    }
  ]
}
```
