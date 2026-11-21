# 物品压缩

把若干掉落物压成新的物品。多个配方共用材料时，检查 priority 和材料数量。

在数据包中建立 `data/example/recipe/item_compress/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:item_compress/example`。

## 配方示例

```json
{
  "type": "anvilcraft:item_compress",
  "ingredients": [
    {
      "count": 3,
      "items": "minecraft:bone"
    }
  ],
  "results": [
    {
      "id": "minecraft:bone_block"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/item_compress/bone_block.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:item_compress`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L97) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L100) |
| `priority` | 整数 | 可省略 | 多个候选之间的优先级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L102) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java)
