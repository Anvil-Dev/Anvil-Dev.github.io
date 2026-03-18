---
prev:
   text: Jewel Crafting Recipe
   link: /en/posts/docs/kubejs/15_jewel_crafting_recipe
next:
   text: Boiling Recipe
   link: /en/posts/docs/kubejs/17_boiling_recipe
---

# Mineral Fountain Recipe

The Mineral Fountain recipe is used to define block transformation rules for the mineral fountain, including basic
transformations and probability-based transformations.

## Basic Mineral Fountain Recipe (mineral_fountain)

### Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:mineral_fountain",
    need_block: "minecraft:stone",
    from_block: "minecraft:cobblestone",
    to_block: "minecraft:andesite"
  })
})
```

### Utility Methods

```js
ServerEvents.recipes(event => {
  // Basic mineral fountain recipe - different constructor parameter combinations
  event.recipes.anvilcraft.mineral_fountain("anvilcraft:cobblestone_to_andesite") // ID only
  
  event.recipes.anvilcraft.mineral_fountain(
    "minecraft:stone",                      // Required block
    "minecraft:cobblestone",                // Block to be transformed
    "minecraft:andesite"                    // Transformed block
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mineral_fountain()
    .needBlock("minecraft:stone")        // Required block
    .fromBlock("minecraft:cobblestone")  // Block to be transformed
    .toBlock("minecraft:andesite")       // Transformed block
})
```

## Probability Mineral Fountain Recipe (mineral_fountain_chance)

### Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:mineral_fountain_chance",
    dimension: "minecraft:overworld",
    from_block: "minecraft:stone",
    to_block: "minecraft:diamond_ore",
    chance: 0.05
  })
})
```

### Utility Methods

```js
ServerEvents.recipes(event => {
  // Probability mineral fountain recipe - different constructor parameter combinations
  event.recipes.anvilcraft.mineral_fountain_chance("anvilcraft:stone_to_diamond_ore") // ID only
  
  event.recipes.anvilcraft.mineral_fountain_chance(
    "minecraft:overworld",                  // Dimension
    "minecraft:stone",                      // Block to be transformed
    "minecraft:diamond_ore",                // Transformed block
    0.05                                    // Transformation chance
  )
})
```

### KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mineral_fountain_chance()
    .dimension("minecraft:overworld")   // Dimension
    .fromBlock("minecraft:stone")       // Block to be transformed
    .toBlock("minecraft:diamond_ore")   // Transformed block
    .chance(0.05)                       // Transformation chance (5%)
})
```

## Parameter Descriptions

### mineral_fountain Recipe Parameters

- `need_block`: Block required to trigger the transformation
- `from_block`: Block to be transformed
- `to_block`: Block after transformation

### mineral_fountain_chance Recipe Parameters

- `dimension`: Dimension where the recipe is effective (using resource location format, such as "minecraft:overworld")
- `from_block`: Block to be transformed
- `to_block`: Block after transformation
- `chance`: Transformation chance, ranging from 0.0 to 1.0

## Practical Examples

### Basic Mineral Fountain

```js
ServerEvents.recipes(event => {
  // Transform cobblestone into diorite when mineral fountain is near granite
  event.recipes.anvilcraft.mineral_fountain()
    .needBlock("minecraft:granite")
    .fromBlock("minecraft:cobblestone")
    .toBlock("minecraft:diorite")
})
```

### Probability Mineral Fountain

```js
ServerEvents.recipes(event => {
  // In the Nether, transform netherrack into ancient debris with 10% chance
  event.recipes.anvilcraft.mineral_fountain_chance()
    .dimension("minecraft:the_nether")
    .fromBlock("minecraft:netherrack")
    .toBlock("minecraft:ancient_debris")
    .chance(0.1)
})
```

### Multiple Mineral Fountain Recipes

```js
ServerEvents.recipes(event => {
  // Various transformations under different conditions in the overworld
  event.recipes.anvilcraft.mineral_fountain()
    .needBlock("minecraft:diamond_block")
    .fromBlock("minecraft:stone")
    .toBlock("minecraft:diamond_ore")
    
  event.recipes.anvilcraft.mineral_fountain_chance()
    .dimension("minecraft:overworld")
    .fromBlock("minecraft:deepslate")
    .toBlock("minecraft:deepslate_diamond_ore")
    .chance(0.02)
})
```

## Dimension Reference

You can use the following dimension resource locations:

- `minecraft:overworld` - Overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End
- Or custom dimensions added by other mods

## Notes

1. The mineral_fountain recipe requires a specified need_block block nearby to trigger
2. The mineral_fountain_chance recipe is only effective in the specified dimension
3. The chance value must be between 0.0 and 1.0, where 0.0 means 0% chance and 1.0 means 100% chance
4. All block IDs must use standard Minecraft resource location format
