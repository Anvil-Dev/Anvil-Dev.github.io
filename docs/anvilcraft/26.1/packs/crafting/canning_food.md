# 罐装食物

让工作台启用罐装食物的特殊合成。食材识别与结果组件由配方类计算。

在数据包中建立 `data/example/recipe/canning_food/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:canning_food/example`。

## 配方示例

```json
{
  "type": "anvilcraft:canning_food"
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/canned_food.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:canning_food`。

序列化器通过 `MapCodec.unit` 直接返回固定配方。JSON 只需提供 `type`。物品匹配和产物数据在玩家合成时由 `matches` 和 `assemble` 计算。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java)
