---
prev:
   text: Item Inject Recipe
   link: /en/posts/docs/datapack/08_item_inject_recipe
next:
   text: Super Heating Recipe
   link: /en/posts/docs/datapack/10_super_heating_recipe
---

# Cooking Recipe

Cooking recipes are used to cook items into other items using heat sources.

## Basic Structure

```json
{
  "type": "anvilcraft:cooking",
  "ingredients": [
    {
      "items": "minecraft:beef"
    }
  ],
  "results": [
    {
      "id": "minecraft:cooked_beef",
      "count": 1
    }
  ]
}
```

## Field Description

### type

Fixed value `anvilcraft:cooking`, identifies this as a cooking recipe.

### ingredients

List of input items required for the recipe. Each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items for the recipe. Each element contains:

- `id`: Item ID
- `count`: Item count

## Usage Example

Cook raw beef into cooked beef:

```json
{
  "type": "anvilcraft:cooking",
  "ingredients": [
    {
      "items": "minecraft:beef"
    }
  ],
  "results": [
    {
      "id": "minecraft:cooked_beef",
      "count": 1
    }
  ]
}
```
