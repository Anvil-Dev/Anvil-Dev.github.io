# Item Injection

Restricts both the dropped item and the target block to inject into. An item condition alone cannot distinguish which base block accepts injection.

Create `data/example/recipe/item_inject/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:item_inject/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:item_inject",
  "block_ingredient": {
    "blocks": "minecraft:blackstone"
  },
  "block_result": {
    "block": "minecraft:gilded_blackstone"
  },
  "ingredients": [
    {
      "items": "minecraft:gold_ingot"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/item_inject/gilded_blackstone.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:item_inject`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L34) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L38) |
| `block_ingredient` | Block state predicate | Required | Block condition accepting injection [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L41) |
| `block_result` | Block state with a probability | Optional | Block state after injection [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L44) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java)
