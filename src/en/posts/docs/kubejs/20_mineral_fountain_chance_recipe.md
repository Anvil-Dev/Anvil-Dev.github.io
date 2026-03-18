---
prev:
   text: Mesh Recipe
   link: /en/posts/docs/kubejs/19_mesh_recipe
---

# Mineral Fountain Chance Recipe

This recipe converts blocks with a probability in a specified dimension.

## Basic Structure

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

## Field Description

- `type`: Fixed value `anvilcraft:mineral_fountain_chance`
- `dimension`: Target dimension (resource location)
- `from_block`: Source block predicate
- `to_block`: Destination block
- `chance`: Probability (0.0 ~ 1.0)

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mineral_fountain_chance()
    .dimension("minecraft:overworld")
    .fromBlock("minecraft:stone")
    .toBlock("minecraft:diamond_ore")
    .chance(0.05)
})
```

## Notes

- Use decimal probability values, e.g. `0.1` for 10%
- The recipe only works in the specified `dimension`

