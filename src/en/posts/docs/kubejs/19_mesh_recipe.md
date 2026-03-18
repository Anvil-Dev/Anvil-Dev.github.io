---
prev:
   text: Cooking Recipe
   link: /en/posts/docs/kubejs/18_cooking_recipe
next:
   text: Mineral Fountain Chance Recipe
   link: /en/posts/docs/kubejs/20_mineral_fountain_chance_recipe
---

# Mesh Recipe

Mesh recipes filter and transform drops under mesh/scaffolding conditions.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:mesh",
    ingredients: [
      { items: "minecraft:gravel" }
    ],
    results: [
      { id: "minecraft:flint", count: 1 }
    ]
  })
})
```

## Field Description

- `type`: Fixed value `anvilcraft:mesh`
- `ingredients`: Input item list
- `results`: Output result list (supports chance results)

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mesh()
    .requires("minecraft:gravel")
    .result("minecraft:flint")
})
```

## Common Methods

- `requires(...)`: Add ingredient
- `result(...)`: Add result (with count/chance overloads)

