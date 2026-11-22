# Mineral Fountain Replacement

Specify a replacement target and trigger chance on top of existing fountain recipes, suitable for redirecting outputs by dimension.

Create `data/example/recipe/mineral_fountain_replacement/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mineral_fountain_replacement/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mineral_fountain_replacement",
  "chance": 0.1,
  "dimension": "minecraft:the_end",
  "from_block": {
    "blocks": "minecraft:deepslate"
  },
  "to_block": {
    "block": "anvilcraft:void_stone"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mineral_fountain_replacement/void_stone_from_the_end.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mineral_fountain_replacement`.

Height is counted upward from the lowest build height of the current dimension, inclusive at both endpoints. For example, in a world with min Y = −64, the default range covers Y = −64 to −56.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Optional | Dimension resource ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L89) |
| `height` | `HeightRange.CODEC` | Optional, default `min = 0, max = 8` | Fountain height condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L91) |
| `replace` | Resource ID array | Optional, default `[]` | Fountain recipe IDs allowed to be replaced [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L93) |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L95) |
| `chance` | Number | Optional, default `0.0` | Trigger probability [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L97) |
| `from_block` | Block state predicate | Optional, default `air` | Condition for blocks convertible in place [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L99) |
| `to_block` | Block state with a probability | Required | Generated block [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L101) |
| `heat` | `MineralFountainHeat.CODEC` | Optional | Heat effect [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L103) |
| `to_fluid` | Fluid stack object | Optional | Fluid stack produced alongside the recipe [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L105) |

### MineralFountainHeat

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | Required | Heat tier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L20) |
| `duration` | Integer | Optional, default `20` | Duration [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L21) |
| `count` | Integer | Optional, default `1` | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L22) |

### HeightRange

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `min` | Integer | Optional, default `0` | Lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L21) |
| `max` | Integer | Optional, default `8` | Upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L22) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java)
