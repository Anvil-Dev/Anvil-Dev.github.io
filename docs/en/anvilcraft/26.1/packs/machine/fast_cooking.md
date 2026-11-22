# Fast Cooking

Processes food ingredients and cauldron fluid separately. Write the fluid predicate and consumption amount on the root object.

Create `data/example/recipe/fast_cooking/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:fast_cooking/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:fast_cooking",
  "ingredients": [
    {
      "items": "minecraft:mud"
    }
  ],
  "results": [
    {
      "id": "minecraft:clay"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/fast_cooking/clay.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:fast_cooking`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L38) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L41) |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L66) |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L67) |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L68) |
| `chance` | Number | Optional, default `1.0f` | Trigger probability [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L69) |
| `ignited` | Boolean | Optional, default `false` | Match ignited state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L70) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java)
