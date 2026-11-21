# 天体铁砧合成

登记天体铁砧的特殊工作台配方，黑洞或白洞材料决定生成的天体预设。

在数据包中建立 `data/example/recipe/celestial_anvil/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:celestial_anvil/example`。

## 配方示例

```json
{
  "type": "anvilcraft:celestial_anvil",
  "category": "misc"
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/celestial_anvil.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:celestial_anvil`。

`category` 是配方书分类字符串，示例使用 `misc`。输入判定与结果计算由 Java 的 `matches` 和 `assemble` 实现。改变分类只影响配方归类。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java)
