# Item Crush Recipe

Item crush recipes are used to crush items into smaller items.

## Basic Structure

```js
ServerEvents.recipes(event => {
    event.custom({
        type: "anvilcraft:item_crush",
        ingredients: [
            {
                items: "minecraft:iron_ingot"
            }
        ],
        results: [
            {
                id: "minecraft:iron_nugget",
                count: 3
            }
        ]
    })
})
```

## Field Description

### type

Fixed value `anvilcraft:item_crush`, identifies this as an item crush recipe.

### ingredients

List of input items, each element contains:

- `items`: Item ID (can be a single item ID string or array of item IDs)
- `count`: Item count (optional, defaults to 1)

### results

List of output items, each element contains:

- `id`: Item ID
- `count`: Item count

## Utility Methods

```js
ServerEvents.recipes(event => {
    // Item crush - different constructor parameter combinations
    event.recipes.anvilcraft.item_crush("anvilcraft:iron_ingot_to_nuggets") // ID only

    event.recipes.anvilcraft.item_crush(
        "minecraft:iron_ingot",              // Input
        ["minecraft:iron_nugget 3"]         // Results
    )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
    event.recipes.anvilcraft.item_crush()
        .requires("minecraft:iron_ingot")  // Add input
        .result("minecraft:iron_nugget", 3) // Add output result
})
```

## Usage Example

Crush iron ingot into iron nuggets:

```js
ServerEvents.recipes(event => {
    event.recipes.anvilcraft.item_crush()
        .requires("minecraft:iron_ingot")
        .result("minecraft:iron_nugget", 3)
})
```
