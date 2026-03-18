# Jewel Crafting Recipe

The Jewel Crafting recipe is used to craft various jewelry and decorative items.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:jewel_crafting",
    ingredients: [
      {
        tag: "forge:gems/diamond"
      },
      {
        tag: "forge:ingots/gold"
      },
      {
        tag: "forge:ingots/gold"
      }
    ],
    result: {
      id: "anvilcraft:amber_block",
      count: 1
    }
  })
})
```

### Utility Methods

```js
ServerEvents.recipes(event => {
  // Jewel crafting recipe - different constructor parameter combinations
  event.recipes.anvilcraft.jewel_crafting("anvilcraft:diamond_to_amber") // ID only
  
  event.recipes.anvilcraft.jewel_crafting(
    [                                      // Input materials list
      { tag: "forge:gems/diamond" },
      { tag: "forge:ingots/gold" },
      { tag: "forge:ingots/gold" }
    ],
    { id: "anvilcraft:amber_block", count: 1 } // Output
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.jewel_crafting()
    .requires("#forge:gems/diamond")     // Add material
    .requires("#forge:ingots/gold", 2)   // Add 2 gold ingots
    .result("anvilcraft:amber_block")    // Set result
})
```

## Parameter Descriptions

### ingredients (Input Materials)

List of input materials, each element is a standard Minecraft recipe ingredient:

- Can be an item ID, such as `"minecraft:diamond"`
- Can be a tag, such as `"#forge:gems/diamond"`
- Can be a complex ingredient object

### result (Output Item)

The output item of the recipe:

- `id`: Item ID
- `count`: Item count

## Practical Examples

### Simple Jewel Crafting

```js
ServerEvents.recipes(event => {
  // Craft amber block with diamond and 2 gold ingots
  event.recipes.anvilcraft.jewel_crafting()
    .requires("minecraft:diamond")
    .requires("#forge:ingots/gold", 2)
    .result("anvilcraft:amber_block")
})
```

### Complex Jewel Crafting

```js
ServerEvents.recipes(event => {
  // Craft royal crown with multiple materials
  event.recipes.anvilcraft.jewel_crafting()
    .requires("#forge:gems/emerald", 3)
    .requires("#forge:ingots/gold", 5)
    .requires("minecraft:nether_star")
    .result("anvilcraft:royal_crown")
})
```

## Using Vanilla Recipe Ingredients

You can also use standard Minecraft recipe ingredient format:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.jewel_crafting()
    .requires({
      type: "minecraft:item",
      item: "minecraft:diamond"
    })
    .requires({
      tag: "forge:ingots/gold"
    }, 2)
    .result("anvilcraft:amber_block")
})
```

## Notes

1. Jewel crafting recipe can accept any number of input materials
2. The order of materials does not affect recipe matching
3. Item tags can be used to increase recipe flexibility
4. Output item can only be one, unlike other recipe types that can have multiple outputs
