# 宝石工艺

用饰品工作台配方列出材料和结果，按需关闭成品默认携带的消失诅咒。

在数据包中建立 `data/example/recipe/jewel_crafting/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:jewel_crafting/example`。

## 配方示例

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    {
      "item": "anvilcraft:silver_ingot"
    },
    {
      "item": "minecraft:anvil"
    }
  ],
  "result": {
    "count": 1,
    "id": "anvilcraft:anvil_amulet"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/jewel_crafting/anvil_amulet.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:jewel_crafting`。

原料列表最多包含 256 项。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `neoforge:conditions` | 加载条件数组 | 可省略，默认 `[]` | NeoForge 在载入时计算的条件列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L134) |
| `result` | 物品栈对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L139) |
| `has_vanishing_curse` | 布尔值 | 可省略，默认 `true` | 产物是否带消失诅咒 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L142) |
| `ingredients` | `Ingredient.CODEC`数组 | 必填 | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L136) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java)
