# 终端升级

沿用有序合成图案，将输入终端的合成库存、切石输入、平衡模式和自定义名称复制到升级后的物品。

在数据包中建立 `data/example/recipe/terminal_upgrade/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:terminal_upgrade/example`。

## 配方示例

```json
{
  "type": "anvilcraft:terminal_upgrade",
  "category": "misc",
  "group": "anvilcraft:shulker_terminal",
  "key": {
    "A": "minecraft:shulker_shell",
    "B": "anvilcraft:local_terminal"
  },
  "pattern": [
    "A",
    "B",
    "A"
  ],
  "result": {
    "id": "anvilcraft:shulker_terminal"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/shulker_terminal.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:terminal_upgrade`。

底层使用原版有序合成序列化器。`pattern`（必填，字符串数组）按行给出形状，空格代表空槽。`key`（必填，对象）把每个非空字符映射为原料。`result`（必填，物品栈）指定产物。`group`（字符串，默认为空）、`category`（字符串，默认 `misc`）、`show_notification`（布尔值，默认 `true`）控制配方书表现。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/TerminalUpgradeRecipe.java)
