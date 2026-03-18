# Time Warp Recipe

The Time Warp recipe uses time power to transform items into other items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:time_warp",
    ingredients: [
      {
        items: "minecraft:rotten_flesh"
      }
    ],
    results: [
      {
        id: "minecraft:leather",
        count: 1
      }
    ],
    fluid: "minecraft:water"
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:time_warp`, identifies this as a time warp recipe.

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
    // Time warp recipe - different constructor parameter combinations
    event.recipes.anvilcraft.time_warp("anvilcraft:rotten_flesh_to_leather") // ID only

    event.recipes.anvilcraft.time_warp(
        "minecraft:rotten_flesh",             // Input
        [{id: "minecraft:leather", count: 1}]// Output
    )

    event.recipes.anvilcraft.time_warp(
        "minecraft:rotten_flesh",             // Input
        [{id: "minecraft:leather", count: 1}],// Output
        "minecraft:water"                    // Fluid
    )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
    event.recipes.anvilcraft.time_warp()
        .requires("minecraft:rotten_flesh")  // Input item
        .result("minecraft:leather")         // Output item
        .cauldron("minecraft:water")         // Required fluid
})
```

## Usage Example

Time warp rotten flesh into leather:

```js
ServerEvents.recipes(event => {
    event.recipes.anvilcraft.time_warp()
        .requires("minecraft:rotten_flesh")
        .result("minecraft:leather")
        .cauldron("minecraft:water")
})
```
