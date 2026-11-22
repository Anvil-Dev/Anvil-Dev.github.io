# Solid-Liquid Processing

Matches both solids and cauldron fluid in the same batch. Use `max_efficiency` to cap the single-batch parallel multiplier.

Create `data/example/recipe/solid_liquid/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:solid_liquid/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "anvilcraft:honey",
  "ingredients": [],
  "results": [
    {
      "id": "minecraft:honey_block"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/solid_liquid/honey_block.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:solid_liquid`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Required | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L39) |
| `results` | Array of item stacks with individual probabilities | Required | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L42) |
| `max_efficiency` | Integer | Optional, default `2147483647` | Maximum allowed processing multiplier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L47) |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L66) |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L67) |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L68) |
| `chance` | Number | Optional, default `1.0f` | Trigger probability [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L69) |
| `ignited` | Boolean | Optional, default `false` | Match ignited state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/component/HasCauldronSimple.java#L70) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java)
