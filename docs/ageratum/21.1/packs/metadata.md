# 页面标题、排序与颜色

把元数据放在文件第一行的 `---` 与下一个独立的 `---` 之间。下面这篇文章在目录中显示为“修理”，正文保留完整标题。Ageratum 自己解析这段 YAML 风格的映射、列表与标量。

```markdown
---
title: 砧台修理指南
navigation:
  title: 修理
  weight: -10
  color: "#4278B8"
---

# 砧台修理指南

将需要修理的工具放进铁砧左槽，再放入修理材料。
```

| 字段 | 类型 | 可选性与用途 |
| --- | --- | --- |
| `title` | 字符串 | 可选。没有单独导航标题时使用。 |
| `navigation.title` | 字符串 | 可选。非空值优先于顶层标题。 |
| `weight`、`navigation.weight` | 整数或可解析为整数的字符串 | 可选，默认 0。嵌套值优先。值越小越靠前，同权重按文件参数排序。 |
| `color`、`navigation.color` | 十六进制颜色字符串 | 可选。嵌套值优先。建议像示例一样给 `#RRGGBB` 加引号。 |
| `guide.items`、`items` | 字符串或字符串列表 | 可选。用于从物品匹配文章，详见[物品绑定](./bindings)。 |

标题按 `navigation.title`、`title`、第一个一级标题、文件名逐级回退。子目录的 `index.md` 可用作目录首页。前置区没有闭合分隔符时，解析器会保留整篇原文作为正文。未定义的键可以保存在元数据映射中，显示效果取决于是否有消费者读取。[元数据读取](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java) · [解析与索引](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java)
