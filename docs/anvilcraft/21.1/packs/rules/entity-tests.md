# 实体细分谓词

在实体谓词中设置 `type_specific` 对象，用 `type` 选择下列实现。方块实体类型匹配与实体当前所处的流体环境是独立的条件。

## 类型与字段

### `anvilcraft:falling_block`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `block` | 方块状态谓词 | 必填 | 目标方块的匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L18) |

[FallingBlockPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java)

### `anvilcraft:in_water_or_breathing`

类型本身就确定全部行为，填写分派 ID 即可。

[InWaterOrBreathingPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java)

### `anvilcraft:not_in_water`

类型本身就确定全部行为，填写分派 ID 即可。

[NotInWaterPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java)

### `anvilcraft:not_in_lava`

类型本身就确定全部行为，填写分派 ID 即可。

[NotInLavaPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java)

[ModEntitySubPredicates.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/entity/ModEntitySubPredicates.java)
