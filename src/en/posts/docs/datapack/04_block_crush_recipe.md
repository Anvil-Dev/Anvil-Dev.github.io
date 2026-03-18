---
prev:
   text: Item Crush Recipe
   link: /en/posts/docs/datapack/03_item_crush_recipe
next:
   text: Stamping Recipe
   link: /en/posts/docs/datapack/05_stamping_recipe
---

# Block Crush Recipe

Block crush recipes are used to crush blocks into smaller blocks or items.

## Basic Structure

```json
{
  "type": "anvilcraft:block_crush",
  "input": {
    "blocks": "minecraft:cobblestone"
  },
  "result": {
    "id": "minecraft:gravel",
    "count": 1
  }
}
```

## Field Description

### type

Fixed value `anvilcraft:block_crush`, identifies this as a block crush recipe.

### input

Input block required for the recipe. Element contains:

- `blocks`: Block ID (can be a single block ID string or array of block IDs)

### result

Output item for the recipe. Element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Crush cobblestone into gravel:

```json
{
  "type": "anvilcraft:block_crush",
  "input": {
    "blocks": "minecraft:cobblestone"
  },
  "result": {
    "id": "minecraft:gravel",
    "count": 1
  }
}
```
