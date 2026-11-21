# 药丸合成

启用药丸的动态合成。输入槽和产物由特殊配方在合成时判断。

在数据包中建立 `data/example/recipe/pill_recipe/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:pill_recipe/example`。

## 配方示例

```json
{
  "type": "anvilcraft:pill_recipe"
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/pill.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:pill_recipe`。

序列化器通过 `MapCodec.unit` 直接返回固定配方。JSON 只需提供 `type`。物品匹配和产物数据在玩家合成时由 `matches` 和 `assemble` 计算。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PillRecipe.java)
