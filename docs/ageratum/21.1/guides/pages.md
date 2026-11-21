# 编写第一组页面

把手册放进模组自己的命名空间。下面两个文件构成一册可以直接打开的指南。使用 UTF-8 保存，在游戏中输入 `/ageratum field_guide` 即可从首页跳转到操作说明。

## 首页

`src/main/resources/assets/field_guide/ageratum/en_us/index.md`

```markdown
---
title: Field guide
---

# Field guide

[Working with a furnace](furnace)
```

## 说明页

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

在 `zh_cn/` 下以相同的相对路径添加译文。服务端和书签使用稳定的页面标识，翻译标题无需更改标识。物品提示找不到页面时，先用命令打开同一文件，区分资源路径错误和物品绑定未匹配。

[文档加载器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java)
