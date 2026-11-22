# Anvil Collision

Matches by colliding anvil, hit block, and speed. Outputs can include both block conversions and multiple item drops.

Create `data/example/recipe/anvil_collision/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:anvil_collision/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:anvil_collision",
  "anvil": {
    "blocks": "#anvilcraft:anvil_tier_0"
  },
  "consume": false,
  "hitBlock": {
    "blocks": "anvilcraft:monolith"
  },
  "output_items": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 64.0,
        "p": 1.0
      },
      "id": "anvilcraft:legacy_essence"
    }
  ],
  "speed": 256,
  "transform_blocks": []
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/anvil_collision/anvil_tier_0_and_monolith_256.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:anvil_collision`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `anvil` | Block state predicate | Required | Anvil condition participating in collision or pressing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L175) |
| `consume` | Boolean | Required | Consumption setting for this step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L176) |
| `hitBlock` | Block state predicate | Required | Block condition at the impact position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L177) |
| `transform_blocks` | `BlockTransform.CODEC` array | Required | Block conversion rules after collision [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L178) |
| `output_items` | Array of item stacks with individual probabilities | Required | Item drops produced by collision [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L179) |
| `speed` | Integer | Required | Required collision speed parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L180) |

### BlockTransform

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L31) |
| `output` | Block state with a probability | Required | Converted result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L32) |
| `max_count` | Integer | Required | Maximum number of blocks to convert [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L33) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java)
