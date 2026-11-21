# 终端解绑

将终端放进工作台进行无序合成。输出保留合成库存、平衡模式和名称，配方指定的新物品栈决定绑定状态。

在数据包中建立 `data/example/recipe/terminal_unbind/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:terminal_unbind/example`。

## 配方示例

```json
{
  "type": "anvilcraft:terminal_unbind",
  "category": "misc",
  "group": "anvilcraft:hyperdimension_terminal",
  "ingredients": [
    "anvilcraft:hyperdimension_terminal"
  ],
  "result": {
    "id": "anvilcraft:hyperdimension_terminal"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/hyperdimension_terminal_unbind.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:terminal_unbind`。

`ingredients`（必填，原料数组）中的每个元素匹配一个格子，`result`（必填，物品栈模板）提供新的终端。`group` 和 `category` 是可选的配方书信息。

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/TerminalUnbindRecipe.java)
