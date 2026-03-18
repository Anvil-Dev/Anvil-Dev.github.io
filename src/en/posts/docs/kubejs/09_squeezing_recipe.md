---
prev:
   text: Bulging Recipe
   link: /en/posts/docs/kubejs/08_bulging_recipe
next:
   text: Item Inject Recipe
   link: /en/posts/docs/kubejs/10_item_inject_recipe
---

# Squeezing Recipe

The Squeezing recipe uses fluid in a cauldron to squeeze blocks into other blocks.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:squeezing",
    ingredient: {
      blocks: "minecraft:wet_sponge"
    },
    result: {
      block: {
        name: "minecraft:sponge"
      },
      chance: 1.0
    },
    fluid: "minecraft:water",
    consume: -1
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:squeezing`, identifies this as a squeezing recipe.

### ingredient (Input Block)

Input block, contains:

- `blocks`: Block ID (can be a single block ID string or an array of block IDs)

### result (Output Result)

Output result, contains:

- `block`: Block state object, containing block name and other properties
- `chance`: Probability of the result appearing (between 0.0 and 1.0)

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
  // Squeezing recipe - different constructor parameter combinations
  event.recipes.anvilcraft.squeezing("anvilcraft:wet_sponge_to_sponge") // ID only
  
  event.recipes.anvilcraft.squeezing(
    "minecraft:wet_sponge",               // Input
    {                                     // Output
      block: { name: "minecraft:sponge" },
      chance: 1.0
    }
  )
  
  event.recipes.anvilcraft.squeezing(
    "minecraft:wet_sponge",               // Input
    {                                     // Output
      block: { name: "minecraft:sponge" },
      chance: 1.0
    },
    "minecraft:water"                    // Fluid
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.squeezing()
    .input("minecraft:wet_sponge")       // Input block
    .result("minecraft:sponge")          // Output block
    .cauldron("minecraft:water")         // Required fluid
    .produceFluid(true)                  // Produce fluid (negative consumption)
})
```

## Usage Example

Squeeze wet sponge into dry sponge:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.squeezing()
    .input("minecraft:wet_sponge")
    .result("minecraft:sponge")
    .cauldron("minecraft:water")
    .produceFluid(true)
})
```
