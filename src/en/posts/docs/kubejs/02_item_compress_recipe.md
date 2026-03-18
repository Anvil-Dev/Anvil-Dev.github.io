# Item Compress Recipe

Item compress recipes are used to compress multiple identical items into a more advanced item.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:item_compress",
    ingredients: [
      {
        items: "minecraft:iron_nugget",
        count: 9
      }
    ],
    results: [
      {
        id: "minecraft:iron_ingot",
        count: 1
      }
    ]
  })
})
```

## Field Description

### type

Fixed value `anvilcraft:item_compress`, identifies this as an item compress recipe.

### ingredients

List of input items, each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count

### results

List of output items, each element contains:

- `id`: Item ID
- `count`: Item count

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Item compress - different constructor parameter combinations
  event.recipes.anvilcraft.item_compress("anvilcraft:iron_nugget_to_ingot") // ID only
  
  event.recipes.anvilcraft.item_compress(
    "minecraft:iron_nugget 9",     // Input (9 iron nuggets)
    ["minecraft:iron_ingot"]      // Results
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.item_compress()
    .requires("minecraft:iron_nugget", 9)  // Add input
    .result("minecraft:iron_ingot")        // Add output result
})
```

## Usage Example

Compress 9 iron nuggets into 1 iron ingot:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.item_compress()
    .requires("minecraft:iron_nugget", 9)
    .result("minecraft:iron_ingot")
})
```
