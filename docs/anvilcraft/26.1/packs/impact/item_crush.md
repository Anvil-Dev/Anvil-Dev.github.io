# 物品粉碎

用粉碎台处理掉落实体。材料谓词可以接受物品标签，产物列表可以给不同产物设置各自的概率。

在数据包中建立 `data/example/recipe/item_crush/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:item_crush/example`。

## 配方示例

```json
{
  "type": "anvilcraft:item_crush",
  "ingredients": [
    {
      "items": "#minecraft:wool"
    }
  ],
  "results": [
    {
      "count": 4,
      "id": "minecraft:string"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/item_crush/string.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:item_crush`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L193) |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L196) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java)
