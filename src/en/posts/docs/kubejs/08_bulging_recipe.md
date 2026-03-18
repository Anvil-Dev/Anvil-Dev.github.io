---
prev:
   text: Block Smear Recipe
   link: /en/posts/docs/kubejs/07_block_smear_recipe
next:
   text: Squeezing Recipe
   link: /en/posts/docs/kubejs/09_squeezing_recipe
---

# Bulging Recipe

The Bulging recipe uses fluid in a cauldron to bulge items into other items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:bulging",
    ingredients: [
      {
        items: "minecraft:dirt",
        count: 1
      }
    ],
    results: [
      {
        id: "minecraft:clay",
        count: 1
      }
    ],
    fluid: "minecraft:water"
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:bulging`, identifies this as a bulging recipe.

### ingredients (Input Items)

List of input items, each element contains:

- `items`: Item ID (can be a single item ID string or an array of item IDs)
- `count`: Item count

### results (Output Items)

List of output items, each element contains:

- `id`: Item ID
- `count`: Item count

### fluid (Fluid)

Fluid type, such as "minecraft:water" or "minecraft:lava"

### transform (Transform Fluid)

Fluid type, such as "minecraft:water" or "minecraft:lava", indicating the fluid it will be transformed into

### consume (Fluid Consumption)

Fluid consumption amount (optional):

- Positive number means consuming fluid
- Negative number means producing fluid
- 0 means no fluid change (default value)

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Bulging recipe - different constructor parameter combinations
  event.recipes.anvilcraft.bulging("anvilcraft:dirt_to_clay") // ID only
  
  event.recipes.anvilcraft.bulging(
    "minecraft:dirt",                     // Input
    [{ id: "minecraft:clay", count: 1 }] // Output
  )
  
  event.recipes.anvilcraft.bulging(
    "minecraft:dirt",                     // Input
    [{ id: "minecraft:clay", count: 1 }],// Output
    "minecraft:water"                    // Fluid
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.bulging()
    .requires("minecraft:dirt")          // Input item
    .result("minecraft:clay")            // Output item
    .cauldron("minecraft:water")         // Required fluid
})
```

## Usage Example

Bulge dirt into clay:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.bulging()
    .requires("minecraft:dirt")
    .result("minecraft:clay")
    .cauldron("minecraft:water")
})
```
