# 战利品条件

把条件对象写进战利品池、条目或函数的 `conditions` 数组。这里的分派键是 `condition`。物品组件谓词从战利品上下文读取对应物品。

## 类型与字段

### `anvilcraft:match_data_component`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `predicate` | `DataComponentPredicate.CODEC` | 可省略 | 具体的匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L17) |

[MatchDataComponent.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java)

### `anvilcraft:random_chance_with_fortune`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `unenchanted_chance` | 数值 `0.0F 至 1.0F` | 必填 | 缺少目标附魔时的概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L25) |
| `enchanted_chance` | `LevelBasedValue.CODEC` | 必填 | 具有附魔时按附魔等级计算的概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L26) |
| `enchantment` | `Enchantment.CODEC` | 必填 | 目标附魔 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L27) |

[RandomChanceWithFortuneCondition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java)

[ModLootItemConditions.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemConditions.java)
