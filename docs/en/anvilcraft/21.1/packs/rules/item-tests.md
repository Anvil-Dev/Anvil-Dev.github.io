# Item Sub-Predicates

In an item predicate's `predicates` map, key by the registered ID; the fields below form the object for that key.

## Types & Fields

### `anvilcraft:saved_entity`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `entitys` | `RegistryCodecs.homogeneousList(Registries.ENTITY_TYPE)` | Optional | Saved entity type list; note the key spelling matches the serializer [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L29) |
| `predicates` | `NumericTagValuePredicate.CODEC` array | Optional, default `[]` | Predicate list for matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L33) |
| `is_monster` | Boolean | Optional, default `false` | Match by whether the entity is a monster [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L36) |

[ItemSavedEntityPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java)

### `anvilcraft:enchantment_count`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `min` | Integer | Required | Lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L17) |
| `max` | Integer | Required | Upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L20) |

[ItemEnchantmentCountPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java)

[ModItemSubPredicates.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemSubPredicates.java)
