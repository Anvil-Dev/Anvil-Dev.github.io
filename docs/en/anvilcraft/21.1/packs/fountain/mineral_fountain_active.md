# Active Mineral Fountain

In addition to dimension, height, and output, active recipes can use `around` to require a specified number of blocks nearby.

Create `data/example/recipe/mineral_fountain_active/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mineral_fountain_active/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mineral_fountain_active",
  "around": [
    {
      "block": {
        "blocks": "#c:storage_blocks/raw_tin"
      },
      "count": 4
    }
  ],
  "from_block": {
    "blocks": "minecraft:deepslate"
  },
  "to_block": {
    "block": "anvilcraft:deepslate_tin_ore"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mineral_fountain_active/deepslate_tin_ore.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mineral_fountain_active`.

Height is counted upward from the lowest build height of the current dimension, inclusive at both endpoints. For example, in a world with min Y = −64, the default range covers Y = −64 to −56.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Optional | Dimension resource ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L92) |
| `height` | `HeightRange.CODEC` | Optional, default `min = 0, max = 8` | Fountain height condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L94) |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L96) |
| `weight` | Integer | Optional, default `1` | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L98) |
| `around` | `AroundRequirement.CODEC` array | Optional, default `[]` | Nearby block and count requirements [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L100) |
| `from_block` | Block state predicate | Optional, default `air` | Condition for blocks convertible in place [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L102) |
| `to_block` | Block state with a probability | Required | Generated block [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L104) |
| `heat` | `MineralFountainHeat.CODEC` | Optional | Heat effect [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L106) |
| `to_fluid` | Fluid stack object | Optional | Fluid stack produced alongside the recipe [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L108) |

### AroundRequirement

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `block` | Block state predicate | Required | Match condition for target blocks [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L21) |
| `count` | Integer | Optional, default `1` | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L22) |

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

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java)
