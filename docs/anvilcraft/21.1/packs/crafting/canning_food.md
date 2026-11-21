# 罐装食物

让工作台启用罐装食物的特殊合成。食材识别与结果组件由配方类计算。

在数据包中建立 `data/example/recipe/canning_food/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:canning_food/example`。

## 配方示例

```json
{
  "type": "anvilcraft:canning_food",
  "category": "misc"
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/canned_food.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:canning_food`。

`category` 是配方书分类字符串，示例使用 `misc`。输入判定与结果计算由 Java 的 `matches` 和 `assemble` 实现。改变分类只影响配方归类。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java)
