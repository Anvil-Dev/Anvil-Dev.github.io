# Block Compress Recipe

The Block Compress recipe is used to compress multiple identical blocks into a more advanced block.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:block_compress",
    inputs: [
      {
        blocks: "minecraft:iron_block"
      }
    ],
    result: {
        block: {
            name: "anvilcraft:compressed_iron_block"
        },
        chance: 1.0
    }
  })
})
```

## Field Descriptions

### type

Fixed value `anvilcraft:block_compress`, identifies this as a block compress recipe.

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
  // Block compress - different constructor parameter combinations
  event.recipes.anvilcraft.block_compress("anvilcraft:iron_block_to_compressed") // ID only
  
  event.recipes.anvilcraft.block_compress(
    [{ blocks: "minecraft:iron_block" }],    // Input list
    {                                        // Output
      block: { name: "anvilcraft:compressed_iron_block" },
      chance: 1.0
    }
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_compress()
    .input("minecraft:iron_block")                // Input block
    .input("minecraft:iron_block")
    .result("anvilcraft:compressed_iron_block")   // Output block
})
```

## Usage Example

Compress iron blocks into compressed iron block:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_compress()
    .input("minecraft:iron_block")
    .input("minecraft:iron_block")
    .result("anvilcraft:compressed_iron_block")
})
```
