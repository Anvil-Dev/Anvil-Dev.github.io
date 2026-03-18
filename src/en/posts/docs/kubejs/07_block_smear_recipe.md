---
prev:
   text: Block Compress Recipe
   link: /en/posts/docs/kubejs/06_block_compress_recipe
next:
   text: Bulging Recipe
   link: /en/posts/docs/kubejs/08_bulging_recipe
---

# Block Smear Recipe

The Block Smear recipe is used to smear one block with another block above it.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:block_smear",
    inputs: [
      { blocks: "minecraft:moss_block" },
      { blocks: "minecraft:cobblestone" }
    ],
    result: {
        block: {
            name: "anvilcraft:mossy_cobblestone"
        },
        chance: 1.0
    }
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:block_smear`, identifies this as a block smear recipe.

### inputs (Input Blocks)

List of input blocks, each element contains:

- `blocks`: Block ID (can be a single block ID string or an array of block IDs)

### result (Output Result)

Output result, the element contains:

- `block`: Block state object, containing block name and other properties
- `chance`: Probability of the result appearing (between 0.0 and 1.0)

## Utility Methods

```js
ServerEvents.recipes(event => {
  // Block smear - different constructor parameter combinations
  event.recipes.anvilcraft.block_smear("anvilcraft:iron_block_to_compressed") // ID only
  
  event.recipes.anvilcraft.block_smear(
    [                                            // Input list
      { blocks: "minecraft:mossy_cobblestone" },
      { blocks: "minecraft:cobblestone" }
    ],    
    {                                            // Output
      block: { name: "anvilcraft:mossy_cobblestone" },
      chance: 1.0
    }
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_smear()
    .input("minecraft:moss_block")            // Input block
    .input("minecraft:cobblestone")
    .result("anvilcraft:mossy_cobblestone")   // Output block
})
```

## Usage Example

Smear cobblestone into mossy cobblestone:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_smear()
    .input("minecraft:moss_block")
    .input("minecraft:cobblestone")
    .result("anvilcraft:mossy_cobblestone")
})
```
