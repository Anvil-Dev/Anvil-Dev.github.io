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

把译文按同样的相对路径放进 `zh_cn/` 目录下即可。服务端和书签认的是固定的页面标识，翻译标题时不用改它。如果拿物品提示找不到页面，可以先用命令直接打开同一份文件，分清到底是资源路径写错了，还是物品绑定没匹配上。

[文档加载器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java)
