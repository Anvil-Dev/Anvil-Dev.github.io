---
prev:
   text: Item Inject Recipe
   link: /en/posts/docs/kubejs/10_item_inject_recipe
next:
   text: Time Warp Recipe
   link: /en/posts/docs/kubejs/12_time_warp_recipe
---

# Super Heating Recipe

The Super Heating recipe uses high temperature to transform items into other items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:super_heating",
    ingredients: [
      {
        items: "minecraft:sand"
      }
    ],
    results: [
      {
        id: "minecraft:glass",
        count: 1
      }
    ],
    fluid: "minecraft:lava"
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:super_heating`, identifies this as a super heating recipe.

### ingredients (Input Items)

List of input items, each element contains:

- `items`: Item ID (can be a single item ID string or an array of item IDs)
- `count`: Item count (optional, default is 1)

### results (Output Items)

List of output items, each element contains:

- `id`: Item ID
- `count`: Item count

### fluid (Fluid)

Fluid type, such as "minecraft:water" or "minecraft:lava"

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Super heating recipe - different constructor parameter combinations
  event.recipes.anvilcraft.super_heating("anvilcraft:sand_to_glass") // ID only
  
  event.recipes.anvilcraft.super_heating(
    "minecraft:sand",                     // Input
    [{ id: "minecraft:glass", count: 1 }]// Output
  )
  
  event.recipes.anvilcraft.super_heating(
    "minecraft:sand",                     // Input
    [{ id: "minecraft:glass", count: 1 }],// Output
    "minecraft:lava"                     // Fluid
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.super_heating()
    .requires("minecraft:sand")          // Input item
    .result("minecraft:glass")           // Output item
    .cauldron("minecraft:lava")          // Required fluid
})
```

## Usage Example

Super heat sand into glass:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.super_heating()
    .requires("minecraft:sand")
    .result("minecraft:glass")
    .cauldron("minecraft:lava")
})
```
