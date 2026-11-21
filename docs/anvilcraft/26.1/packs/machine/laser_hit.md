# 激光照射

用强度和持续照射时长筛选命中的方块。需要模拟方块战利品时开启 use_block_loot。

在数据包中建立 `data/example/recipe/laser_hit/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:laser_hit/example`。

## 配方示例

```json
{
  "type": "anvilcraft:laser_hit",
  "hit_time": 40,
  "input": {
    "blocks": "#c:ores"
  },
  "laser_strength": 12,
  "priority": -100,
  "result_block": {
    "Name": "minecraft:stone"
  },
  "use_block_loot": true
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/laser_hit/ores_12.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:laser_hit`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L41) |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L42) |
| `laser_strength` | 整数 `1 至 Integer.MAX_VALUE` | 必填 | 匹配的激光强度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L43) |
| `hit_time` | 整数 `1 至 Integer.MAX_VALUE` | 必填 | 持续照射所需 tick 数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L44) |
| `result_items` | 物品栈模板对象数组 | 可省略，默认 `[]` | 额外掉落的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L45) |
| `result_block` | 方块状态对象 | 可省略，默认 `空气方块` | 加工后的方块状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L46) |
| `use_block_loot` | 布尔值 | 可省略，默认 `false` | 是否计算方块自身战利品 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L47) |
| `requires_lens` | 布尔值 | 可省略，默认 `false` | 是否要求透镜 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L48) |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L49) |
| `laser_type` | `LaserType.CODEC` | 可省略，默认 `LaserType.NORMAL` | 参与匹配的激光类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L50) |
| `heat_duration` | 整数 `0 至 24000` | 可省略，默认 `0` | 保留热量的 tick 数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L51) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java)
