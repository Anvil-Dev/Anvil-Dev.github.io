---
prev:
   text: Item Compress Recipe
   link: /en/posts/docs/datapack/01_item_compress_recipe
next:
   text: Item Crush Recipe
   link: /en/posts/docs/datapack/03_item_crush_recipe
---

# Block Compress Recipe

Block compress recipes are used to compress multiple identical blocks into a more advanced block.

## Basic Structure

```json
{
  "type": "anvilcraft:block_compress",
  "inputs": [
    {
      "blocks": "minecraft:iron_block"
    },
    {
      "blocks": "minecraft:iron_block"
    }
  ],
  "result": {
    "block": {
      "name": "anvilcraft:compressed_iron_block"
    },
    "chance": 1.0
  }
}
```

## Field Description

### type

Fixed value `anvilcraft:block_compress`, identifies this as a block compress recipe.

### inputs

List of input blocks required for the recipe. Each element contains:

- `blocks`: Block ID (can be a single block ID string or array of block IDs)

### result

Output result for the recipe. Element contains:

- `block`: Block state object, contains block name and other properties
- `chance`: Probability of result occurring (between 0.0 and 1.0)

## Usage Example

Compress iron blocks into compressed iron block:

```json
{
  "type": "anvilcraft:block_compress",
  "inputs": [
    {
      "blocks": "minecraft:iron_block"
    },
    {
      "blocks": "minecraft:iron_block"
    }
  ],
  "results": {
    "block": {
      "name": "anvilcraft:compressed_iron_block"
    },
    "chance": 1.0
  }
}
```
