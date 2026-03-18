---
prev:
   text: Mineral Fountain Recipe
   link: /en/posts/docs/kubejs/16_mineral_fountain_recipe
next:
   text: Cooking Recipe
   link: /en/posts/docs/kubejs/18_cooking_recipe
---

# Boiling Recipe

Boiling recipes process items in cauldron environments, usually for low-temperature fluid processing and state
conversion.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:boiling",
    ingredients: [
      {
        items: "minecraft:kelp"
      }
    ],
    results: [
      {
        id: "minecraft:dried_kelp",
        count: 1
      }
    ],
    fluid: "minecraft:water",
    consume: 1,
    transform: "minecraft:water"
  })
})
```

## Field Description

- `type`: Fixed value `anvilcraft:boiling`
- `ingredients`: Input item list
- `results`: Output result list (supports chance results)
- `fluid`: Required cauldron fluid
- `consume`: Fluid consume amount (negative values produce fluid)
- `transform`: Fluid state after processing

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.boiling()
    .requires("minecraft:kelp")
    .result("minecraft:dried_kelp")
    .cauldron("minecraft:water")
    .consumeFluid(true)
})
```

## Common Methods

- `requires(...)`: Add ingredient
- `result(...)`: Add result
- `cauldron(...)`: Set fluid condition
- `consumeFluid(true)`: Consume fluid
- `produceFluid(true)`: Produce fluid
- `transform(...)`: Set transformed fluid

