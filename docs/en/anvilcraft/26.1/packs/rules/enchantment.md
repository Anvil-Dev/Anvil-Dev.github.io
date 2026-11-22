# Enchantment Effects & Components

Configure enchantment levels, costs, supported equipment, and `effects` in `data/<namespace>/enchantment/<name>.json`. Keys under `effects` on the root object are effect component IDs, and the actual effect object is dispatched by `type`. Note that the left-click harvest effect's registered ID is spelled `anvilcraft:haevest_left_click`.

## Usage Example

```json
{
  "anvil_cost": 2,
  "description": {
    "translate": "enchantment.anvilcraft.beheading"
  },
  "max_cost": {
    "base": 15,
    "per_level_above_first": 10
  },
  "max_level": 3,
  "min_cost": {
    "base": 1,
    "per_level_above_first": 10
  },
  "slots": [
    "mainhand"
  ],
  "supported_items": "#minecraft:enchantable/sword",
  "weight": 5
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/enchantment/beheading.json)

## Types & Fields

### `anvilcraft:haevest_left_click`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `range` | Integer | Optional, default `3` | Action range [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L29) |

[HarvestLeftClickEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java)

### `anvilcraft:harvest_right_click`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `range` | Integer | Optional, default `3` | Action range [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L36) |

[HarvestRightClickEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java)

### `anvilcraft:felling`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `range` | Integer | Optional, default `3` | Action range [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L27) |

[FellingEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java)

### `anvilcraft:in_range_modify`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `min` | `LevelBasedValue.CODEC` | Optional, default `InRangeModifyEffect.MIN` | Lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L18) |
| `max` | `LevelBasedValue.CODEC` | Optional, default `InRangeModifyEffect.MAX` | Upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L21) |
| `modifier` | `EnchantmentValueEffect.CODEC` | Required | Value modifier applied within range [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L24) |

[InRangeModifyEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java)

[ModEnchantmentEffects.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java)
