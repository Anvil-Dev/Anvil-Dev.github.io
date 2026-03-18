---
prev:
   text: Item Compress Recipe
   link: /en/posts/docs/kubejs/02_item_compress_recipe
next:
   text: Unpack Recipe
   link: /en/posts/docs/kubejs/04_unpack_recipe
---

# Stamping Recipe

Stamping recipes are used to transform items into other items on the stamping platform.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "minecraft:iron_ingot"
      }
    ],
    results: [
      {
        id: "anvilcraft:iron_plate",
        count: 1
      }
    ]
  })
})
```

## Field Description

### type

Fixed value `anvilcraft:stamping`, identifies this as a stamping recipe.

### ingredients

List of input items, each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items, each element contains:

- `id`: Item ID
- `count`: Item count

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Stamping - different constructor parameter combinations
  event.recipes.anvilcraft.stamping("anvilcraft:iron_ingot_to_plate") // ID only
  
  event.recipes.anvilcraft.stamping(
    "minecraft:iron_ingot",        // Input
    ["anvilcraft:iron_plate"]     // Results
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.stamping()
    .requires("minecraft:iron_ingot")  // Add input
    .result("anvilcraft:iron_plate")   // Add output result
})
```

## Usage Example

Stamp iron ingot into iron plate:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.stamping()
    .requires("minecraft:iron_ingot")
    .result("anvilcraft:iron_plate")
})
```
