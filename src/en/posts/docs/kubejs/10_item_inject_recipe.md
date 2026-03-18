# Item Inject Recipe

The Item Inject recipe injects fluid into items to create new items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:item_inject",
    ingredients: [
      {
        items: "minecraft:glass_bottle"
      }
    ],
    results: [
      {
        id: "minecraft:potion",
        count: 1
      }
    ],
    block_ingredient: {
      blocks: "minecraft:water"
    },
    block_result: {
      block: {
        Name: "minecraft:air"
      },
      chance: 1.0
    }
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:item_inject`, identifies this as an item inject recipe.

### ingredients (Input Items)

List of input items, each element contains:

- `items`: Item ID (can be a single item ID string or an array of item IDs)
- `count`: Item count (optional, default is 1)

### results (Output Items)

List of output items, each element contains:

- `id`: Item ID
- `count`: Item count

### block_ingredient (Input Block)

Input block, contains:

- `blocks`: Block ID (can be a single block ID string or an array of block IDs)

### block_result (Output Block)

Output block (optional), contains:

- `block`: Block state object, containing block name and other properties
- `chance`: Probability of the result appearing (between 0.0 and 1.0)

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Item inject recipe - different constructor parameter combinations
  event.recipes.anvilcraft.item_inject("anvilcraft:glass_bottle_to_potion") // ID only
  
  event.recipes.anvilcraft.item_inject(
    "minecraft:glass_bottle",              // Input item
    [{ id: "minecraft:potion", count: 1 }],// Output items
    { blocks: "minecraft:water" },         // Input block
    {                                      // Output block
      block: { name: "minecraft:air" },
      chance: 1.0
    }
  )
  
  // Simplified version (without output items)
  event.recipes.anvilcraft.item_inject(
    "minecraft:glass_bottle",             // Input item
    { blocks: "minecraft:water" },        // Input block
    {                                     // Output block
      block: { name: "minecraft:air" },
      chance: 1.0
    }
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.item_inject()
    .requires("minecraft:glass_bottle")  // Input item
    .result("minecraft:potion")          // Output item
    .inputBlock("minecraft:water")       // Input block
    .resultBlock("minecraft:air")        // Output block
})
```

## Usage Example

Inject water into glass bottle to make potion:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.item_inject()
    .requires("minecraft:glass_bottle")
    .result("minecraft:potion")
    .inputBlock("minecraft:water")
    .resultBlock("minecraft:air")
})
```
