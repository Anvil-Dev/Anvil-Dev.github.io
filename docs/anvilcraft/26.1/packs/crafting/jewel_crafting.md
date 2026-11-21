# 宝石工艺

用饰品工作台配方列出材料和结果，按需关闭成品默认携带的消失诅咒。

在数据包中建立 `data/example/recipe/jewel_crafting/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:jewel_crafting/example`。

## 配方示例

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    "anvilcraft:silver_ingot",
    "minecraft:anvil"
  ],
  "result": {
    "id": "anvilcraft:anvil_amulet"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/jewel_crafting/anvil_amulet.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:jewel_crafting`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `neoforge:conditions` | 加载条件数组 | 可省略，默认 `[]` | NeoForge 在载入时计算的条件列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L48) |
| `ingredients` | 原料 ID、标签或有效原料表达式数组 | 必填 | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L49) |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L50) |
| `has_vanishing_curse` | 布尔值 | 可省略，默认 `true` | 产物是否带消失诅咒 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L51) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java)
