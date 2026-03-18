# Cooking Recipe

Cooking recipes process input items into output items in heated environments, with optional cauldron fluid conditions.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:cooking",
    ingredients: [
      {
        items: "minecraft:beef"
      }
    ],
    results: [
      {
        id: "minecraft:cooked_beef",
        count: 1
      }
    ],
    fluid: "minecraft:water",
    consume: 0,
    transform: "anvilcraft:null"
  })
})
```

## Field Description

- `type`: Fixed value `anvilcraft:cooking`
- `ingredients`: Input item list
- `results`: Output result list (supports chance results)
- `fluid`: Optional cauldron fluid condition
- `consume`: Fluid consume amount (negative values produce fluid)
- `transform`: Fluid transform target

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.cooking()
    .requires("minecraft:beef")
    .result("minecraft:cooked_beef")
    .cauldron("minecraft:water")
})
```

## Common Methods

- `requires(...)`: Add ingredient
- `result(...)`: Add result
- `cauldron(...)`: Set cauldron fluid
- `consumeFluid(true)`: Enable fluid consumption
- `produceFluid(true)`: Enable fluid production
- `transform(...)`: Set transformed fluid

