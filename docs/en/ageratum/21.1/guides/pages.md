# Writing Your First Set of Pages

Place your guide inside your mod's own namespace. The two files below form a directly openable guide. Save them as UTF-8, then run `/ageratum field_guide` in-game to jump from the home page to the instruction page.

## Home Page

`src/main/resources/assets/field_guide/ageratum/en_us/index.md`

```markdown
---
title: Field guide
---

# Field guide

[Working with a furnace](furnace)
```

## Instruction Page

`src/main/resources/assets/field_guide/ageratum/en_us/furnace.md`

```markdown
---
title: Furnace
items:
  - minecraft:furnace
---

# Furnace

Place the furnace on a solid surface. Add raw iron to the top slot and coal to the bottom slot.

[Back to the field guide](index)
```

Place translations under `zh_cn/` at the same relative paths. The server and bookmarks identify pages by their fixed page ID, so you do not need to change it when translating titles. If holding an item reports that no page was found, try opening the same file directly via command first to distinguish whether the resource path is wrong or the item binding did not match.

[Document loader](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java)
