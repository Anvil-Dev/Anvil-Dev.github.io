# Number Providers

A result count can be a constant or a number provider with a `type`. For example, `{"type":"anvilcraft:constant","value":2}` always returns 2. Nested providers can calculate values at runtime from enchantments or random samples.

## Types & Fields

### `anvilcraft:constant`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `value` | Number | Required | Fixed numeric value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L17) |

[ConstantValue.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java)

### `anvilcraft:binomial`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `n` | `INumberProvider.CODEC` | Required | Number of binomial trials [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L14) |
| `p` | `INumberProvider.CODEC` | Required | Success probability per trial [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L17) |

[BinomialDistributionGenerator.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java)

### `anvilcraft:uniform`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `min` | `INumberProvider.CODEC` | Required | Lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L14) |
| `max` | `INumberProvider.CODEC` | Required | Upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L17) |

[UniformGenerator.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java)

### `anvilcraft:enchantment_level`

**EnchantmentLevelProvider**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `enchantment` | `ResourceKey.codec(Registries.ENCHANTMENT)` | Required | Target enchantment [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L25) |
| `amount` | `LevelBasedValue.CODEC` | Required | Computed count or level modifier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L28) |

**RecipeInputSlot**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | String | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L18) |

[EnchantmentLevelProvider.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java)

[ModNumberProviderTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java)
