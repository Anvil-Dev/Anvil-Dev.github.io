# 物品注入

同时限定掉落物和要注入的方块。只设物品条件无法区分接受注入的基底。

在数据包中建立 `data/example/recipe/item_inject/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:item_inject/example`。

## 配方示例

```json
{
  "type": "anvilcraft:item_inject",
  "block_ingredient": {
    "blocks": "minecraft:blackstone"
  },
  "block_result": {
    "block": "minecraft:gilded_blackstone"
  },
  "ingredients": [
    {
      "items": "minecraft:gold_ingot"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/item_inject/gilded_blackstone.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:item_inject`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L34) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L38) |
| `block_ingredient` | 方块状态谓词 | 必填 | 接受注入的方块条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L41) |
| `block_result` | 带概率的方块状态 | 可省略 | 注入后的方块状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L44) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java)
