---
prev:
   text: Stamping Recipe
   link: /en/posts/docs/kubejs/03_stamping_recipe
next:
   text: Block Crush Recipe
   link: /en/posts/docs/kubejs/05_block_crush_recipe
---

# Unpack Recipe

Unpack recipes are used to unpack compressed items into original items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:unpack",
    ingredients: [
      {
        items: "minecraft:iron_block"
      }
    ],
    results: [
      {
        id: "minecraft:iron_ingot",
        count: 9
      }
    ]
  })
})
```

## Field Description

### type

Fixed value `anvilcraft:unpack`, identifies this as an unpack recipe.

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
  // Unpack - different constructor parameter combinations
  event.recipes.anvilcraft.unpack("anvilcraft:ingot_to_nuggets") // ID only
  
  event.recipes.anvilcraft.unpack(
    "minecraft:iron_ingot",        // Input
    ["minecraft:iron_nugget 9"]   // Results
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.unpack()
    .requires("minecraft:iron_block")   // Add input
    .result("minecraft:iron_ingot", 9)  // Add output result
})
```

## Usage Example

Unpack iron block into iron ingots:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.unpack()
    .requires("minecraft:iron_block")
    .result("minecraft:iron_ingot", 9)
})
```
