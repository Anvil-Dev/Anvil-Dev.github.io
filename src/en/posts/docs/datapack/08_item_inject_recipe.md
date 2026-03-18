# Item Inject Recipe

Item inject recipes are used to inject fluid into items to create new items.

## Basic Structure

```json
{
  "type": "anvilcraft:item_inject",
  "ingredients": [
    {
      "items": "minecraft:glass_bottle"
    }
  ],
  "results": [
    {
      "id": "minecraft:potion",
      "count": 1
    }
  ],
  "block_ingredient": {
    "blocks": "minecraft:water"
  },
  "block_result": {
    "block": {
      "Name": "minecraft:air"
    },
    "chance": 1.0
  }
}
```

## Field Description

### type

Fixed value `anvilcraft:item_inject`, identifies this as an item inject recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

### block_ingredient

Input block required for the recipe:

- `blocks`: Block ID (can be a single block ID string or array of block IDs)

### block_result

Output block for the recipe (optional):

- `block`: Block state object, contains block name and other properties
- `chance`: Probability of result occurring (between 0.0 and 1.0)

## Usage Example

Inject water into glass bottle to make potion:

```json
{
  "type": "anvilcraft:item_inject",
  "ingredients": [
    {
      "items": "minecraft:glass_bottle"
    }
  ],
  "results": [
    {
      "id": "minecraft:potion",
      "count": 1
    }
  ],
  "block_ingredient": {
    "blocks": "minecraft:water"
  },
  "block_result": {
    "block": {
      "Name": "minecraft:air"
    },
    "chance": 1.0
  }
}
```
