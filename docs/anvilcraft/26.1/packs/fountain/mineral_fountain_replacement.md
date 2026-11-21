# 矿物涌泉替换

在既有涌泉配方上指定替换对象和触发概率，适合按维度重定向产物。

在数据包中建立 `data/example/recipe/mineral_fountain_replacement/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mineral_fountain_replacement/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mineral_fountain_replacement",
  "chance": 0.1,
  "dimension": "minecraft:the_end",
  "from_block": {
    "blocks": "minecraft:deepslate"
  },
  "to_block": {
    "block": "anvilcraft:void_stone"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/mineral_fountain_replacement/void_stone_from_the_end.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mineral_fountain_replacement`。

高度从当前维度的最低建造高度向上计数，两个端点都参与匹配。例如最低 Y 为 −64 的世界，默认范围覆盖 Y = −64 至 −56。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L82) |
| `height` | `HeightRange.CODEC` | 可省略，默认 `min = 0，max = 8` | 涌泉高度条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L84) |
| `replace` | 资源 ID数组 | 可省略，默认 `[]` | 允许替换的涌泉配方 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L86) |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L88) |
| `chance` | 数值 | 可省略，默认 `0.0` | 触发概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L90) |
| `from_block` | 方块状态谓词 | 可省略，默认 `空气方块` | 可原地转换的方块条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L92) |
| `to_block` | 带概率的方块状态 | 必填 | 生成的方块 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L94) |
| `heat` | `MineralFountainHeat.CODEC` | 可省略 | 热量效果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L96) |
| `to_fluid` | 流体栈模板对象 | 可省略 | 伴随配方产生的流体栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L98) |

### MineralFountainHeat

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | 必填 | 热量等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L13) |
| `duration` | 整数 | 可省略，默认 `20` | 持续时间 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L14) |
| `count` | 整数 | 可省略，默认 `1` | 数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L15) |

### HeightRange

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `min` | 整数 | 可省略，默认 `0` | 下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L15) |
| `max` | 整数 | 可省略，默认 `8` | 上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L16) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java)
