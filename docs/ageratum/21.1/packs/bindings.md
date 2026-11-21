# 按物品组件进入对应文章

同一种物品可以有不同用途。要让受损铁镐专门指向维修页，可在声明中写入 `minecraft:damage`。下例只匹配损耗值 12 的铁镐，堆栈上的附魔、名称等其他组件可以保留。

```markdown
---
navigation:
  title: 维修示例
guide:
  items:
    - 'minecraft:iron_pickaxe{"minecraft:damage":12}'
---

# 维修示例

这把镐已经消耗了 12 点耐久。请用铁锭在铁砧上修理。
```

| 字段或写法 | 类型 | 读取规则 |
| --- | --- | --- |
| `guide.items`、`items` | 字符串或字符串列表 | 可选。每项写一个绑定规则。 |
| `guide.item`、`guide.item_id`、`item`、`item_id` | 字符串 | 单条绑定形式。 |
| `namespace:item`、`namespace:item{}` | 物品 ID | 两者只检查物品。 |
| ID 后的 `{…}` | 组件对象文本 | 按实际堆栈编码后的数据作子集匹配。先尝试 JSON，解析失败时可尝试 SNBT。 |

读取第一组有效配置，顺序是 `guide.items`、`guide.item`、`guide.item_id`、`items`、`item`、`item_id`。这些字段之间不合并。对象只需包含要求的键。数组中的要求元素必须按原顺序出现，可以夹有其他元素。数值按数值比较。空栈、ID 不符或无法解码的条件不会匹配。[绑定解析与匹配](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java) · [字段优先级](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java)

手持目标物品执行 `/ageratum item`，可读取物品 ID 与相对默认物品发生变化的组件。进入背包悬停并按住“寻思”按键，默认 W，默认时长 750 毫秒。多个页面匹配时，先挑当前语言，再挑英文，再挑排序后的首个匹配项。宽泛规则和精确规则同时命中时，精确规则没有额外排序优先权。[命令实现](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java) · [缓存选择](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [按键设置](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java)
