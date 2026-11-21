# 组织正文与表格

手册按块排版。先用一级标题命名当前任务，再把可独立完成的步骤拆成二级标题。换段时留一个空行。列表项需要按层级缩进；任务列表的勾选状态写在资源文件里。

```markdown
# 炼铁

1. 把煤放进燃料槽。
2. 把粗铁放进输入槽。
3. 等待输出槽出现铁锭。

| 槽位 | 物品 |
| :--- | ---: |
| 输入 | 粗铁 |
| 输出 | 铁锭 |

> 燃料耗尽时，输入槽物品会保留。
```

表格的分隔行决定每列的对齐方式。图片单独占一行，资源 ID 从命名空间开始；例如使用 `![熔炉](field_guide:textures/guide/furnace.png)` 时，贴图在 `assets/field_guide/textures/guide/furnace.png`。文章用到的贴图应随同资源包分发。

[块解析顺序](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java) · [表格实现](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java)
