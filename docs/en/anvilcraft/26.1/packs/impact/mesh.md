# Meshing

Process dropped items above a mesh. Set the probability of each entry in `results` to control its yield.

Create `data/example/recipe/mesh/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mesh/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mesh",
  "ingredients": [
    {
      "items": "anvilcraft:quartz_sand"
    }
  ],
  "results": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.5
      },
      "id": "anvilcraft:quartz_sand"
    },
    {
      "id": "minecraft:quartz"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/mesh/quartz_sand.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mesh`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L193) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L196) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java)
