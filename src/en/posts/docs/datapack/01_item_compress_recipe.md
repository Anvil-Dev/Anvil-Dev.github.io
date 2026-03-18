# Item Compress Recipe

Item compress recipes are used to compress multiple identical items into a more advanced item.

## Basic Structure

```json
{
  "type": "anvilcraft:item_compress",
  "ingredients": [
    {
      "items": "minecraft:iron_nugget",
      "count": 9
    }
  ],
  "results": [
    {
      "id": "minecraft:iron_ingot",
      "count": 1
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:item_compress`, identifies this as an item compress recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Compress 9 iron nuggets into 1 iron ingot:

```json
{
  "type": "anvilcraft:item_compress",
  "ingredients": [
    {
      "items": "minecraft:iron_nugget",
      "count": 9
    }
  ],
  "results": [
    {
      "id": "minecraft:iron_ingot",
      "count": 1
    }
  ]
}
```
