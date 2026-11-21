# 铁砧碰撞

按碰撞铁砧、命中方块和速度匹配。输出可同时包含方块转换和多个掉落物。

在数据包中建立 `data/example/recipe/anvil_collision/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:anvil_collision/example`。

## 配方示例

```json
{
  "type": "anvilcraft:anvil_collision",
  "anvil": {
    "blocks": "#anvilcraft:anvil_tier_0"
  },
  "consume": false,
  "hitBlock": {
    "blocks": "anvilcraft:monolith"
  },
  "output_items": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 64.0,
        "p": 1.0
      },
      "id": "anvilcraft:legacy_essence"
    }
  ],
  "speed": 256,
  "transform_blocks": []
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/anvil_collision/anvil_tier_0_and_monolith_256.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:anvil_collision`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `anvil` | 方块状态谓词 | 必填 | 参与碰撞或压制的铁砧条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L175) |
| `consume` | 布尔值 | 必填 | 本次工序的消耗设置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L176) |
| `hitBlock` | 方块状态谓词 | 必填 | 冲击位置的方块条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L177) |
| `transform_blocks` | `BlockTransform.CODEC`数组 | 必填 | 碰撞后转换的方块规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L178) |
| `output_items` | 带概率的物品栈数组 | 必填 | 碰撞产生的掉落物 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L179) |
| `speed` | 整数 | 必填 | 碰撞所需速度参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L180) |

### BlockTransform

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L31) |
| `output` | 带概率的方块状态 | 必填 | 转换后的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L32) |
| `max_count` | 整数 | 必填 | 最多转换的方块数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L33) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java)
