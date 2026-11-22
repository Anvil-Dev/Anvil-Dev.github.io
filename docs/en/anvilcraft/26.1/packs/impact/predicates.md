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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/neutron_irradiation/radiation_block_explosion.json)

## Types & Fields

### `anvilcraft:has_cauldron`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `offset` | 3D coordinates | Required | Offset relative to trigger position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L610) |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `FluidStackPredicate.ANY` | Cauldron fluid matching condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L611) |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L613) |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L614) |
| `chance` | Number | Optional, default `1.0f` | Trigger probability [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L616) |
| `ignited` | Boolean | Optional, default `false` | Match ignited state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L617) |

[HasCauldron.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java)

### `anvilcraft:has_cauldron_processor`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `offset` | 3D coordinates | Required | Offset relative to trigger position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L25) |
| `category` | Resource ID | Required | Category selector [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L26) |

[HasCauldronProcessor.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java)

### `anvilcraft:has_anvil`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `anvil` | Block state predicate | Optional | Anvil condition participating in collision or pressing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java#L35) |
| `inverted` | Boolean | Optional, default `false` | Whether to invert the predicate result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java#L38) |

[HasAnvil.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java)

### `anvilcraft:has_diff_items`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Item ingredient predicate | Required | Single ingredient to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L150) |
| `ingredients` | Array of item ingredient predicates | Required | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L151) |
| `offset` | 3D coordinates | Required | Offset relative to trigger position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L156) |
| `range` | 3D coordinates | Required | Action range [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L159) |
| `functions` | `IPredicateFunction.CODEC` array | Optional, default `[]` | Predicate functions applied to the matched result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L164) |

[HasDiffItems.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java)

[ModRecipePredicateTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java)
