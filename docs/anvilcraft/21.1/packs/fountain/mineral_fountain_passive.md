# 被动矿物涌泉

给涌泉设置候选产物。用 priority 和 weight 处理多个匹配项。

在数据包中建立 `data/example/recipe/mineral_fountain_passive/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mineral_fountain_passive/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mineral_fountain_passive",
  "priority": -1,
  "to_block": {
    "block": "anvilcraft:cinerite"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mineral_fountain_passive/cinerite.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mineral_fountain_passive`。

高度从当前维度的最低建造高度向上计数，两个端点都参与匹配。例如最低 Y 为 −64 的世界，默认范围覆盖 Y = −64 至 −56。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L66) |
| `height` | `HeightRange.CODEC` | 可省略，默认 `min = 0，max = 8` | 涌泉高度条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L68) |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L70) |
| `weight` | 整数 | 可省略，默认 `1` | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L72) |
| `from_block` | 方块状态谓词 | 可省略，默认 `空气方块` | 可原地转换的方块条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L74) |
| `to_block` | 带概率的方块状态 | 必填 | 生成的方块 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L76) |
| `heat` | `MineralFountainHeat.CODEC` | 可省略 | 热量效果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L78) |
| `to_fluid` | 流体栈对象 | 可省略 | 伴随配方产生的流体栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L80) |

### MineralFountainHeat

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | 必填 | 热量等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L20) |
| `duration` | 整数 | 可省略，默认 `20` | 持续时间 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L21) |
| `count` | 整数 | 可省略，默认 `1` | 数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L22) |

### HeightRange

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `min` | 整数 | 可省略，默认 `0` | 下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L21) |
| `max` | 整数 | 可省略，默认 `8` | 上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L22) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java)
