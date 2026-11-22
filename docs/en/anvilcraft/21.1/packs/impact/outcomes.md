# In-World Recipe Outcomes

Place the objects below into the `outcomes` array of an in-world recipe, where `type` selects the outcome implementation. `heat` on the heat action is a tiered list of effects; cauldron fluid matching and consumption belong to the predicate side.

## Types & Fields

### `anvilcraft:damage_anvil`

The type itself determines all behavior; only the dispatch ID is needed.

[DamageAnvil.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java)

### `anvilcraft:produce_heat`

**ProduceHeat**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `heat` | `HeatData.CODEC` array | Optional, default `[]` | Heat effect [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L108) |
| `distance` | `Distance.CODEC` | Optional, default `Distance.DEFAULT` | Heat action range [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L109) |

**HeatData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | Required | Heat tier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L155) |
| `duration` | Integer | Required | Duration [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L156) |

[ProduceHeat.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java)

### `anvilcraft:royal_preference`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `result` | Weighted item stack | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L192) |

[RoyalPreferenceOutcome.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java)

### `anvilcraft:resentment_amber`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `offset` | 3D coordinates | Required | Offset relative to trigger position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L52) |
| `saved_entity_path` | Resource ID | Required | Path for saving entity data [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L53) |

[ResentmentAmberOutcome.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java)

### `anvilcraft:consume_burning_heater_fuel`

The type itself determines all behavior; only the dispatch ID is needed.

[SuperHeatingRecipe.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java)

[ModRecipeOutcomeTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java)
