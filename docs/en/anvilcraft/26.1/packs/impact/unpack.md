# Unpacking

Defines the output after unpacking a packed item once. Specify the count on the output to produce multiple items.

Create `data/example/recipe/unpack/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:unpack/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:unpack",
  "ingredients": [
    {
      "items": "minecraft:clay"
    }
  ],
  "results": [
    {
      "count": 4,
      "id": "minecraft:clay_ball"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/unpack/clay_ball.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:unpack`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L193) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L196) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/UnpackRecipe.java)
