# Organizing Body Text and Tables

Guides are laid out in blocks. Start with a level-1 heading naming the current task, then split independently completable steps into level-2 headings. Leave a blank line between paragraphs. List items should be indented by nesting level; task list checkbox states are written in the resource file.

```markdown
# Iron Smelting

1. Put coal into the fuel slot.
2. Put raw iron into the input slot.
3. Wait for iron ingots to appear in the output slot.

| Slot | Item |
| :--- | ---: |
| Input | Raw Iron |
| Output | Iron Ingot |

> When fuel runs out, items in the input slot are preserved.
```

The separator row in a table controls column alignment. Images occupy their own line, with resource IDs starting from the namespace; for example, `![Furnace](field_guide:textures/guide/furnace.png)` resolves to `assets/field_guide/textures/guide/furnace.png`. Textures used in articles should be distributed with the resource pack.

[Block parse order](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java) · [Table implementation](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDTableComponent.java)
