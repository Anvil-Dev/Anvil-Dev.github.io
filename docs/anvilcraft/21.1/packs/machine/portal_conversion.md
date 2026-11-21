# 传送门转换

匹配要发生转换的方块状态，再设置转换后的方块及其概率。

在数据包中建立 `data/example/recipe/portal_conversion/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:portal_conversion/example`。

## 配方示例

```json
{
  "type": "anvilcraft:portal_conversion",
  "input": {
    "blocks": "anvilcraft:ember_anvil"
  },
  "portal": "minecraft:end_portal",
  "result": {
    "block": "anvilcraft:spectral_anvil"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/portal_conversion/ember_anvil.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:portal_conversion`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L45) |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L48) |
| `portal` | 资源 ID | 必填 | 触发转换的传送门类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L25) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java)
