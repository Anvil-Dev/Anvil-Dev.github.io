---
prev:
   text: Unpack Recipe
   link: /en/posts/docs/datapack/12_unpack_recipe
next:
   text: Multiblock Recipe
   link: /en/posts/docs/datapack/14_multiblock_recipe
---

# Block Smear Recipe

Block smear recipes are used to smear a lower block using an upper block.

## Basic Structure

```json
{
  "type": "anvilcraft:block_smear",
  "inputs": [
    { "blocks": "minecraft:moss_block" },
    { "blocks": "minecraft:cobblestone" }
  ],
  "result": {
    "block": {
      "name": "anvilcraft:mossy_cobblestone"
    },
    "chance": 1.0
  }
}
```

## Field Description

### type

Fixed value `anvilcraft:block_smear`, identifies this as a block smear recipe.

### inputs

List of input blocks required for the recipe. Each element contains:

- `blocks`: Block ID (can be a single block ID string or array of block IDs)

### result

Output result for the recipe. Element contains:

- `block`: Block state object, contains block name and other properties
- `chance`: Probability of result occurring (between 0.0 and 1.0)

## Usage Example

Smear cobblestone into mossy cobblestone:

```json
{
  "type": "anvilcraft:block_smear",
  "inputs": [
    { "blocks": "minecraft:moss_block" },
    { "blocks": "minecraft:cobblestone" }
  ],
  "results": {
    "block": {
      "name": "anvilcraft:mossy_cobblestone"
    },
    "chance": 1.0
  }
}
```
