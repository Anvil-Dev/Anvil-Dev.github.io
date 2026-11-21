# 附魔效果与组件

在 `data/<命名空间>/enchantment/<名称>.json` 配置附魔等级、费用、可用装备和 `effects`。根对象下 `effects` 的键是效果组件 ID。实际效果对象由 `type` 分派。左键收获效果的注册 ID 拼作 `anvilcraft:haevest_left_click`。

## 使用示例

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

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/enchantment/beheading.json)

## 类型与字段

### `anvilcraft:haevest_left_click`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `range` | 整数 | 可省略，默认 `3` | 作用范围 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java#L29) |

[HarvestLeftClickEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestLeftClickEffect.java)

### `anvilcraft:harvest_right_click`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `range` | 整数 | 可省略，默认 `3` | 作用范围 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java#L36) |

[HarvestRightClickEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/HarvestRightClickEffect.java)

### `anvilcraft:felling`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `range` | 整数 | 可省略，默认 `3` | 作用范围 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java#L27) |

[FellingEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/FellingEffect.java)

### `anvilcraft:in_range_modify`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `min` | `LevelBasedValue.CODEC` | 可省略，默认 `MIN` | 下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L18) |
| `max` | `LevelBasedValue.CODEC` | 可省略，默认 `MAX` | 上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L21) |
| `modifier` | `EnchantmentValueEffect.CODEC` | 必填 | 区间内执行的数值修正 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java#L24) |

[InRangeModifyEffect.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/enchantment/InRangeModifyEffect.java)

[ModEnchantmentEffects.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/enchantment/ModEnchantmentEffects.java)
