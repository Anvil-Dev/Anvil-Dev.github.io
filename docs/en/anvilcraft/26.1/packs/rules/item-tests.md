# Item Sub-Predicates

In an item predicate's `predicates` map, key by the registered ID; the fields below form the object for that key.

## Types & Fields

### `anvilcraft:saved_entity`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `entities` | `EntityType.CODEC` array | Optional, default `[]` | Entities to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L25) |
| `predicates` | `NumericTagValuePredicate.CODEC` array | Optional, default `[]` | Predicate list for matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L29) |
| `is_monster` | Boolean | Optional, default `false` | Match by whether the entity is a monster [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L32) |

[ItemSavedEntityPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java)

### `anvilcraft:enchantment_count`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `min` | Integer | Required | Lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L17) |
| `max` | Integer | Required | Upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L20) |

[ItemEnchCountPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java)

### `anvilcraft:integer_component`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `value` | Integer | Required | Fixed numeric value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L18) |
| `type` | `DataComponentType.CODEC` | Required | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L21) |

[IntegerComponentPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java)

### `anvilcraft:merciless_enchantment`

### `anvilcraft:disabled_enchantment`

[ModDataComponentPredicates.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java)
