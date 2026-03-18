# Super Heating Recipe

Super heating recipes are used to transform items using high temperature.

## Basic Structure

```json
{
  "type": "anvilcraft:super_heating",
  "ingredients": [
    {
      "items": "minecraft:sand"
    }
  ],
  "results": [
    {
      "id": "minecraft:glass",
      "count": 1
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:super_heating`, identifies this as a super heating recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Super heat sand into glass:

```json
{
  "type": "anvilcraft:super_heating",
  "ingredients": [
    {
      "items": "minecraft:sand"
    }
  ],
  "results": [
    {
      "id": "minecraft:glass",
      "count": 1
    }
  ]
}
```
