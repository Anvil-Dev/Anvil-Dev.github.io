# Loot condition

Write condition objects into the `conditions` array of a loot pool, entry, or function. The dispatch key here is `condition`. Item component predicates read the corresponding item from the loot context.

## Types & Fields

### `anvilcraft:match_data_component`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `predicate` | `DataComponentPredicate.CODEC` | Optional | Specific match condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L17) |

[MatchDataComponent.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java)

### `anvilcraft:random_chance_with_fortune`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `unenchanted_chance` | Number `0.0F to 1.0F` | Required | Probability when the target enchantment is absent [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L25) |
| `enchanted_chance` | `LevelBasedValue.CODEC` | Required | Probability computed by enchantment level when present [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L26) |
| `enchantment` | `Enchantment.CODEC` | Required | Target enchantment [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L27) |

[RandomChanceWithFortuneCondition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java)

[ModLootItemConditions.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java)
