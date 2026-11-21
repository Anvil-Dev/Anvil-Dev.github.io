# 在文字中插入交互

简短的数值、物品名和命令放在句子里，更容易跟操作步骤对应。反引号保留原始文本；需要翻译或悬停行为时使用 Ageratum 的行内扩展。下面的交互把命令放进聊天输入框，读者仍可编辑。

```markdown
**燃料用完**后，检查输入槽是否还有原料。

<hover type="SHOW_TEXT" data="把命令填入聊天栏"><click type="SUGGEST_COMMAND" data="/ageratum field_guide">翻开手册</click></hover>
```

`SUGGEST_COMMAND` 适合需要修改参数的指令，`COPY_TO_CLIPBOARD` 用于复制字符串。需要点击时直接运行的动作使用 `RUN_COMMAND`。把同一段内容同时包在 hover 和 click 中可以兼顾说明与操作。区分行内样式、行内组件与整行块组件，它们在解析器中的注册入口不同。

[内置行内样式](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineStyleParsers.java) · [扩展注册指南](../extensions/)
