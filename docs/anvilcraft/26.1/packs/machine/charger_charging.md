# 充放电

为一个输入物品指定充放电功率和耗时。负功率用于充电，正功率用于放电。功率以 kW 计，时间以 tick 计。

在数据包中建立 `data/example/recipe/charger_charging/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:charger_charging/example`。

## 配方示例

```json
{
  "type": "anvilcraft:charger_charging",
  "ingredient": "minecraft:iron_ingot",
  "power": -4,
  "result": {
    "id": "anvilcraft:magnet_ingot"
  },
  "time": 40
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/charger_charging/magnet_ingot.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:charger_charging`。

`ingredient` 可直接写物品 ID 或以 `#` 开头的物品标签。`result` 使用物品栈模板，默认数量为 1。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 原料 ID、标签或有效原料表达式 | 必填 | 单个待匹配的原料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L44) |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L47) |
| `power` | 整数 | 必填 | 充放电功率，负值充电，正值放电，单位 kW [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L50) |
| `time` | 整数 | 必填 | 时间参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L53) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java)
