# InWorld Recipe

The InWorld recipe system is the core system in AnvilCraft for handling in-world recipes, allowing various effects to be triggered under specific conditions.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvillib_recipe:in_world_recipe",
    icon: {
      item: "minecraft:anvil"
    },
    trigger: "anvilcraft:on_anvil_fall_on",
    conflicting: [],
    non_conflicting: [],
    outcomes: [],
    priority: 0,
    compatible: true
  })
})
```

## Field Description

### type

Fixed value `anvillib_recipe:in_world_recipe`, identifies this as an InWorld recipe.

### icon

Recipe icon, displayed in the recipe interface:

- `item`: Item ID, e.g., "minecraft:anvil"

### trigger

Trigger type, determines when the recipe is activated:

- Currently supports `anvilcraft:on_anvil_fall_on` (triggers when anvil falls)

### conflicting

List of conflicting predicates, these predicates conflict with each other.

### non_conflicting

List of non-conflicting predicates, these predicates don't conflict.

### outcomes

List of recipe outcomes, executed when the recipe matches.

### priority

Recipe priority, higher values mean higher priority.

### compatible

Compatibility mode, determines predicate matching behavior.

### max_efficiency

Maximum efficiency value (optional), used to limit the maximum execution efficiency of the recipe.

## Utility Methods

```js
ServerEvents.recipes(event => {
  // InWorld recipe - different constructor parameter combinations
  event.recipes.anvilcraft.in_world("anvilcraft:iron_ingot_to_nugget") // ID only
  
  event.recipes.anvilcraft.in_world(
    { item: "minecraft:iron_nugget" },    // Icon
    "anvilcraft:on_anvil_fall_on",        // Trigger
    [],                                   // Conflicting predicates
    [{                                   // Non-conflicting predicates
      type: "anvillib_recipe:has_item_ingredient",
      offset: [0, -1, 0],
      item: {
        items: "minecraft:iron_ingot"
      }
    }],
    [{                                   // Outcomes
      type: "anvillib_recipe:spawn_item",
      offset: [0, -1, 0],
      item: "minecraft:iron_nugget"
    }],
    0,                                   // Priority
    true                                 // Compatible mode
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .icon("minecraft:iron_nugget")                    // Set icon
    .trigger("anvilcraft:on_anvil_fall_on")           // Set trigger
    .hasItemIngredient("minecraft:iron_ingot")        // Add item predicate
    .below()                                          // Set offset position below
    .spawnItem("minecraft:iron_nugget")               // Add spawn item outcome
    .priority(0)                                      // Set priority
    .compatible(true)                                 // Set compatible mode
})
```

## Offset Setting Methods

### offset(Vec3 offset)

Set offset to specified vector.

### offset(double x, double y, double z)

Set offset to specified coordinates.

### below(double below)

Set offset below current position by specified distance.

### below()

Set offset 1 block below current position.

### above(double above)

Set offset above current position by specified distance.

### above()

Set offset 1 block above current position.

## Predicate Methods

### hasItem(...)

Check if specified item exists at the specified position:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .hasItem("minecraft:iron_ingot")                 // Check for iron ingot
    .hasItem(0, -1, 0, "minecraft:iron_ingot")       // Check for iron ingot at specified coordinates
})
```

### hasItemIngredient(...)

Check if specified item exists at the specified position, consumes the item if recipe matches:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .hasItemIngredient("minecraft:iron_ingot")       // Check and consume iron ingot
})
```

### hasBlock(...)

Check if specified block exists at the specified position:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .hasBlock("minecraft:iron_block")                // Check for iron block
})
```

### hasBlockIngredient(...)

Check if specified block exists at the specified position, clears the block if recipe matches:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .hasBlockIngredient("minecraft:iron_block")      // Check and clear iron block
})
```

### hasCauldron(...)

Check if a cauldron with specified fluid exists at the specified position:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .hasCauldron("minecraft:water")                  // Check for water-filled cauldron
    .hasCauldron("minecraft:water", 1)               // Check and consume 1 unit of water
})
```

## Outcome Methods

### spawnItem(...)

Spawn items at the specified position:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .spawnItem("minecraft:iron_nugget")              // Spawn iron nugget at offset position
    .spawnItem(0, -1, 0, "minecraft:iron_nugget")    // Spawn iron nugget at specified coordinates
    .spawnItem(0, -1, 0, 0.5, "minecraft:iron_nugget") // Spawn iron nugget with 50% probability
})
```

### setBlock(...)

Set block at the specified position:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .setBlock("minecraft:diamond_block")             // Set diamond block at offset position
})
```

### damageAnvil()

Damage the anvil:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .damageAnvil()                                   // Damage anvil
})
```

## Usage Examples

### Basic Example

When anvil falls on iron ingot, spawn iron nuggets and consume the ingot:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .icon("minecraft:iron_nugget")
    .trigger("anvilcraft:on_anvil_fall_on")
    .hasItemIngredient("minecraft:iron_ingot")
    .below()
    .spawnItem("minecraft:iron_nugget")
    .below()
})
```

### Complex Example

Create diamond block using multiblock structure:

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.in_world()
    .icon("minecraft:diamond_block")
    .trigger("anvilcraft:on_anvil_fall_on")
    .hasBlock("minecraft:diamond_block")
    .hasBlockIngredient("minecraft:iron_block")
    .above()
    .setBlock("minecraft:diamond_block")
    .damageAnvil()
    .priority(10)
})
```
