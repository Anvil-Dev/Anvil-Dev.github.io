# Item-Assisted Mob Transformation

Checks surrounding materials in addition to entity type, adjusting the probability of a special result based on item count.

Create `data/example/recipe/mob_transform_with_item/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:mob_transform_with_item/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:mob_transform_with_item",
  "chance_percent_per_item": 5,
  "ingredients": [
    {
      "items": "minecraft:anvil"
    }
  ],
  "input": "minecraft:zombie",
  "item_result": {
    "count": 1,
    "id": "anvilcraft:giant_anvil"
  },
  "special_result": {
    "probability": 1.0,
    "result_entity_type": "minecraft:giant"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mob_transform_with_item/zombie_to_giant_anvil.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:mob_transform_with_item`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Entity type ID | Required | Input entity to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L241) |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L243) |
| `special_result` | `TransformResult.CODEC` | Required | Entity result when hitting the special branch [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L244) |
| `item_result` | Item stack object | Required | Dropped item result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L245) |
| `chance_percent_per_item` | Integer | Required | Percentage points added per input item [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L246) |
| `tag_predicates` | `NumericTagValuePredicate.CODEC` array | Optional, default `[]` | Extra checks on entity data before transformation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L248) |
| `tag_modifications` | `TagModification.CODEC` array | Optional, default `[]` | Modifications applied to entity data during transformation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L251) |
| `transform_options` | `TransformOptions.CODEC` array | Optional, default `[]` | Options enabled during transformation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L253) |

### TransformResult

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `result_entity_type` | Entity type ID | Required | Resulting entity type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L15) |
| `probability` | Number | Required | Probability of selecting this result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L18) |

### NumericTagValuePredicate

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tagKeyPath` | String | Required | Target numeric tag path [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L25) |
| `requirement` | `ValueFunction.CODEC` | Required | Comparison operation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L26) |
| `expected` | Long integer | Required | Integer to compare against [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L27) |

### TagModification

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `path` | String | Required | Data path to modify [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L30) |
| `op` | `ModifyOperation.CODEC` | Required | Modification operation to perform [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L31) |
| `index` | Integer | Optional | Step or list index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L33) |
| `tag` | String | Required | Tag content to write [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L35) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java)
