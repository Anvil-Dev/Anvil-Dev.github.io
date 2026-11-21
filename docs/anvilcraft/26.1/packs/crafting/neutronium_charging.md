# 中子锭充能

按有序合成的符号表和图案安排中子锭与超级电容，再由专用配方类处理合成时的额外逻辑。

在数据包中建立 `data/example/recipe/neutronium_charging/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:neutronium_charging/example`。

## 配方示例

```json
{
  "type": "anvilcraft:neutronium_charging",
  "category": "misc",
  "key": {
    "N": "#anvilcraft:uncharged_neutronium_ingots",
    "S": "anvilcraft:supercapacitor"
  },
  "pattern": [
    "SSS",
    "SNS",
    "SSS"
  ],
  "result": {
    "id": "anvilcraft:charged_neutronium_ingot"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/charged_neutronium_ingot.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:neutronium_charging`。

底层使用原版有序合成序列化器。`pattern`（必填，字符串数组）按行给出形状，空格代表空槽。`key`（必填，对象）把每个非空字符映射为原料。`result`（必填，物品栈）指定产物。`group`（字符串，默认为空）、`category`（字符串，默认 `misc`）、`show_notification`（布尔值，默认 `true`）控制配方书表现。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java)
