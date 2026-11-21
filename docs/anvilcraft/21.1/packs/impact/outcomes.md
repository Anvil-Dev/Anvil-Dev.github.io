# 世界内配方结果

把下列对象放入世界内配方的 `outcomes` 数组，`type` 选择结果实现。热量动作的 `heat` 是分等级的效果列表；锅内流体匹配与消耗属于条件侧。

## 类型与字段

### `anvilcraft:damage_anvil`

类型本身就确定全部行为，填写分派 ID 即可。

[DamageAnvil.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/DamageAnvil.java)

### `anvilcraft:produce_heat`

**ProduceHeat**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `heat` | `HeatData.CODEC`数组 | 可省略，默认 `[]` | 热量效果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L108) |
| `distance` | `Distance.CODEC` | 可省略，默认 `Distance.DEFAULT` | 热量作用范围 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L109) |

**HeatData**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | 必填 | 热量等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L155) |
| `duration` | 整数 | 必填 | 持续时间 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java#L156) |

[ProduceHeat.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ProduceHeat.java)

### `anvilcraft:royal_preference`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `result` | 带概率的物品栈 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java#L192) |

[RoyalPreferenceOutcome.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/RoyalPreferenceOutcome.java)

### `anvilcraft:resentment_amber`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `offset` | 三维坐标 | 必填 | 相对于触发位置的偏移 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L52) |
| `saved_entity_path` | 资源 ID | 必填 | 保存实体数据的路径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L53) |

[ResentmentAmberOutcome.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java)

### `anvilcraft:consume_burning_heater_fuel`

类型本身就确定全部行为，填写分派 ID 即可。

[SuperHeatingRecipe.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java)

[ModRecipeOutcomeTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeOutcomeTypes.java)
