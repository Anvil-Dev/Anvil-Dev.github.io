---
prev:
   text: Time Warp Recipe
   link: /en/posts/docs/kubejs/12_time_warp_recipe
next:
   text: Mob Transform Recipe
   link: /en/posts/docs/kubejs/14_mob_transform_recipe
---

# Multiblock Recipe

The Multiblock recipe allows you to define complex multi-block structures and produce items at the center.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:multiblock",
    pattern: {
      layers: [
        ["   ", " B ", "   "],
        ["BAB", "A A", "BAB"],
        ["BBB", "BBB", "BBB"]
      ],
      symbols: {
        "A": {
          predicate: {
            blocks: "minecraft:iron_block"
          }
        },
        "B": {
          predicate: {
            blocks: "minecraft:gold_block"
          }
        }
      }
    },
    result: {
      id: "minecraft:diamond",
      count: 1
    }
  })
})
```

### Utility Methods

```js
ServerEvents.recipes(event => {
  // Multiblock recipe - different constructor parameter combinations
  event.recipes.anvilcraft.multiblock("anvilcraft:diamond_multiblock") // ID only
  
  event.recipes.anvilcraft.multiblock(
    {                                       // Structure pattern
      layers: [
        ["   ", " B ", "   "],
        ["BAB", "A A", "BAB"],
        ["BBB", "BBB", "BBB"]
      ],
      symbols: {
        "A": { blocks: "minecraft:iron_block" },
        "B": { blocks: "minecraft:gold_block" }
      }
    },
    { id: "minecraft:diamond", count: 1 }   // Output
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.multiblock()
    .layer("   ", " B ", "   ")          // First layer
    .layer("BAB", "A A", "BAB")          // Second layer
    .layer("BBB", "BBB", "BBB")          // Third layer
    .symbol('A', { blocks: "minecraft:iron_block" })  // Define symbol A
    .symbol('B', { blocks: "minecraft:gold_block" })  // Define symbol B
    .result("minecraft:diamond")         // Output item
})
```

## Parameter Descriptions

### pattern (Structure Pattern)

Defines the shape and composition of the multi-block structure:

- `layers`: Layers consisting of string arrays, each layer is a 2D character grid
- `symbols`: Mapping between characters and block predicates

### result (Output)

The output item of the recipe:

- `id`: Item ID
- `count`: Item count

## Practical Examples

### Simple 3x3x3 Structure

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.multiblock()
    .layer("AAA", "AAA", "AAA")
    .layer("A A", "A A", "A A")
    .layer("AAA", "AAA", "AAA")
    .symbol('A', { blocks: "minecraft:iron_block" })
    .result("minecraft:chest")
})
```

### Complex Structure Example

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.multiblock()
    .layer("RAR", "A A", "RAR")
    .layer("RGR", "G G", "RGR")
    .layer("RRR", "RRR", "RRR")
    .symbol('R', { blocks: "minecraft:redstone_block" })
    .symbol('A', { blocks: "minecraft:iron_block" })
    .symbol('G', { blocks: "minecraft:gold_block" })
    .result("minecraft:diamond_block")
})
```

## Using Block States

You can also specify more detailed block states:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.multiblock()
    .layer("HHH", "H H", "HHH")
    .layer("H H", "H H", "H H")
    .layer("HHH", "HHH", "HHH")
    .symbol('H', {
      predicate: {
        blocks: "minecraft:hopper",
        properties: {
          facing: "down"
        }
      }
    })
    .result("anvilcraft:magnet_block")
})
```

## Using Block Tags

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.multiblock()
    .layer("LLL", "L L", "LLL")
    .layer("L L", "L L", "L L")
    .layer("LLL", "LLL", "LLL")
    .symbol('L', { tag: "minecraft:logs" })
    .result("minecraft:campfire")
})
```

## Notes

1. The center point of the multi-block structure is located at the exact center of the structure
2. The structure must match completely to trigger the recipe
3. Space characters indicate that no block is required at that position
4. Symbol definitions must cover all characters used in the layers
5. There is no strict limit on structure size, but it is recommended to keep it within a reasonable range for
   performance
