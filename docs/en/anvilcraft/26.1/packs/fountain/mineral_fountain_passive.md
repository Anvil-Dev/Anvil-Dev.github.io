# Passive Mineral Fountain

Configure candidate outputs for mineral fountains. Use `priority` and `weight` to handle multiple matches.

Create `data/example/recipe/mineral_fountain_passive/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mineral_fountain_passive/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mineral_fountain_passive",
  "priority": -1,
  "to_block": {
    "block": "anvilcraft:cinerite"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/mineral_fountain_passive/cinerite.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mineral_fountain_passive`.

Height is counted upward from the lowest build height of the current dimension, inclusive at both endpoints. For example, in a world with min Y = −64, the default range covers Y = −64 to −56.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Optional | Dimension resource ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L59) |
| `height` | `HeightRange.CODEC` | Optional, default `min = 0, max = 8` | Fountain height condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L61) |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L63) |
| `weight` | Integer | Optional, default `1` | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L65) |
| `from_block` | Block state predicate | Optional, default `air` | Condition for blocks convertible in place [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L67) |
| `to_block` | Block state with a probability | Required | Generated block [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L69) |
| `heat` | `MineralFountainHeat.CODEC` | Optional | Heat effect [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L71) |
| `to_fluid` | Fluid stack template object | Optional | Fluid stack produced alongside the recipe [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L73) |

### MineralFountainHeat

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | Required | Heat tier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L13) |
| `duration` | Integer | Optional, default `20` | Duration [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L14) |
| `count` | Integer | Optional, default `1` | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L15) |

### HeightRange

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `min` | Integer | Optional, default `0` | Lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L15) |
| `max` | Integer | Optional, default `8` | Upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L16) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java)
