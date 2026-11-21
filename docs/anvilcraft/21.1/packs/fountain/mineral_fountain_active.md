# 主动矿物涌泉

除了维度、高度和输出，主动配方可用 around 要求周边存在指定数量的方块。

在数据包中建立 `data/example/recipe/mineral_fountain_active/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mineral_fountain_active/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mineral_fountain_active",
  "around": [
    {
      "block": {
        "blocks": "#c:storage_blocks/raw_tin"
      },
      "count": 4
    }
  ],
  "from_block": {
    "blocks": "minecraft:deepslate"
  },
  "to_block": {
    "block": "anvilcraft:deepslate_tin_ore"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mineral_fountain_active/deepslate_tin_ore.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mineral_fountain_active`。

高度从当前维度的最低建造高度向上计数，两个端点都参与匹配。例如最低 Y 为 −64 的世界，默认范围覆盖 Y = −64 至 −56。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L92) |
| `height` | `HeightRange.CODEC` | 可省略，默认 `min = 0，max = 8` | 涌泉高度条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L94) |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L96) |
| `weight` | 整数 | 可省略，默认 `1` | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L98) |
| `around` | `AroundRequirement.CODEC`数组 | 可省略，默认 `[]` | 附近方块及数量的要求 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L100) |
| `from_block` | 方块状态谓词 | 可省略，默认 `空气方块` | 可原地转换的方块条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L102) |
| `to_block` | 带概率的方块状态 | 必填 | 生成的方块 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L104) |
| `heat` | `MineralFountainHeat.CODEC` | 可省略 | 热量效果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L106) |
| `to_fluid` | 流体栈对象 | 可省略 | 伴随配方产生的流体栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L108) |

### AroundRequirement

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `block` | 方块状态谓词 | 必填 | 目标方块的匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L21) |
| `count` | 整数 | 可省略，默认 `1` | 数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L22) |

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

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java)
