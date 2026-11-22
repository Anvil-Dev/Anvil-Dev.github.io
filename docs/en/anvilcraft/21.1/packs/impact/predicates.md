# In-World Recipe Predicates

In `anvillib_recipe:in_world_recipe`, `trigger` specifies the trigger timing. Anvil impact uses `anvilcraft:on_anvil_fall_on`. Built-in examples use `conflicting` and `non_conflicting` for the two predicate groups, and `outcomes` for actions on success. All position offsets are relative to the trigger point.

## Usage Example

```json
{
  "type": "anvillib_recipe:in_world_recipe",
  "compatible": true,
  "conflicting": [
    {
      "type": "anvillib_recipe:has_item_ingredient",
      "item": {
        "items": [
          "anvilcraft:uranium_block",
          "anvilcraft:plutonium_block"
        ]
      },
      "offset": [
        0.0,
        -0.375,
        0.0
      ],
      "range": [
        0.75,
        0.75,
        0.75
      ]
    }
  ],
  "icon": {
    "count": 1,
    "id": "minecraft:anvil"
  },
  "non_conflicting": [
    {
      "type": "anvilcraft:has_cauldron",
      "fluid": {
        "amount": 0
      },
      "offset": [
        0.0,
        -1.0,
        0.0
      ]
    },
    {
      "type": "anvillib_recipe:has_block",
      "offset": [
        0.0,
        -2.0,
        0.0
      ],
      "predicate": {
        "blocks": "anvilcraft:neutron_irradiator"
      }
    }
  ],
  "outcomes": [
    {
      "type": "anvillib_recipe:choose_one",
      "choices": [
        {
          "outcome": {
            "type": "anvillib_recipe:produce_explosion",
            "fire": false,
            "interact": "block",
            "offset": [
              0.0,
              -0.75,
              0.0
            ],
            "power": 3.0
          },
          "weight": 1.0
        }
      ]
    }
  ],
  "priority": 5,
  "trigger": "anvilcraft:on_anvil_fall_on"
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/neutron_irradiation/radiation_block_explosion.json)

## Types & Fields

### `anvilcraft:has_cauldron`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `offset` | 3D coordinates | Required | Offset relative to trigger position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L504) |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `FluidStackPredicate.ANY` | Cauldron fluid matching condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L505) |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L507) |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L508) |
| `chance` | Number | Optional, default `1.0f` | Trigger probability [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L510) |
| `ignited` | Boolean | Optional, default `false` | Match ignited state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L511) |

[HasCauldron.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java)

### `anvilcraft:has_cauldron_processor`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `offset` | 3D coordinates | Required | Offset relative to trigger position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L25) |
| `category` | Resource ID | Required | Category selector [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L26) |

[HasCauldronProcessor.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java)

### `anvilcraft:has_anvil`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `anvil` | Block state predicate | Optional, default `HasAnvil.DEFAULT.anvil` | Anvil condition participating in collision or pressing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java#L31) |
| `inverted` | Boolean | Optional, default `false` | Whether to invert the predicate result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java#L34) |

[HasAnvil.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java)

[ModRecipePredicateTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java)
