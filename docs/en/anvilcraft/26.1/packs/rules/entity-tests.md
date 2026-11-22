# Entity Sub-Predicates

Set the `type_specific` object inside an entity predicate and use `type` to select one of the implementations below. Block entity type matching and the entity's current fluid environment are independent conditions.

## Types & Fields

### `anvilcraft:falling_block`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `block` | Block state predicate | Required | Match condition for target blocks [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L17) |

[FallingBlockPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java)

### `anvilcraft:in_water_or_breathing`

The type itself determines all behavior; only the dispatch ID is needed.

[InWaterOrBreathingPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java)

### `anvilcraft:not_in_water`

The type itself determines all behavior; only the dispatch ID is needed.

[NotInWaterPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java)

### `anvilcraft:not_in_lava`

The type itself determines all behavior; only the dispatch ID is needed.

[NotInLavaPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java)

[ModEntitySubPredicates.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/entity/ModEntitySubPredicates.java)
