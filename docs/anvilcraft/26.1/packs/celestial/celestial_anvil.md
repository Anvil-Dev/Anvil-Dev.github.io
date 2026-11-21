# 天体铁砧合成

登记天体铁砧的特殊工作台配方，黑洞或白洞材料决定生成的天体预设。

在数据包中建立 `data/example/recipe/celestial_anvil/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:celestial_anvil/example`。

## 配方示例

```json
{
  "type": "anvilcraft:celestial_anvil"
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/celestial_anvil.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:celestial_anvil`。

序列化器通过 `MapCodec.unit` 直接返回固定配方。JSON 只需提供 `type`。物品匹配和产物数据在玩家合成时由 `matches` 和 `assemble` 计算。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java)
