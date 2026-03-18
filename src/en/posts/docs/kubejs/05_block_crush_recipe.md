# Block Crush Recipe

Block crush recipes are used to crush blocks into smaller blocks or items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:block_crush",
    input: {
      blocks: "minecraft:cobblestone"
    },
    result: {
      id: "minecraft:gravel",
      count: 1
    }
  })
})
```

## Field Description

### type

Fixed value `anvilcraft:block_crush`, identifies this as a block crush recipe.

### inputs

Input block, element contains:

- `blocks`: Block ID (can be a single block ID string or array of block IDs)

### results

Output item, element contains:

- `id`: Item ID
- `count`: Item count

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Block crush - different constructor parameter combinations
  event.recipes.anvilcraft.block_crush("anvilcraft:cobblestone_to_gravel") // ID only
  
  event.recipes.anvilcraft.block_crush(
    { blocks: "minecraft:cobblestone" },     // Input
    { id: "minecraft:gravel", count: 1 }     // Output
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_crush()
    .input("minecraft:cobblestone")      // Input block
    .result("minecraft:gravel")          // Output block
})
```

## Usage Example

Crush cobblestone into gravel:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_crush()
    .input("minecraft:cobblestone")
    .result("minecraft:gravel")
})
```
