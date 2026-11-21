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

读取第一组有效配置，顺序是 `guide.items`、`guide.item`、`guide.item_id`、`items`、`item`、`item_id`。这些字段之间不合并。对象只需包含要求的键。数组中的要求元素必须按原顺序出现，可以夹有其他元素。数值按数值比较。空栈、ID 不符或无法解码的条件不会匹配。[绑定解析与匹配](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java) · [字段优先级](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java)

手持目标物品执行 `/ageratum item`，可读取物品 ID 与相对默认物品发生变化的组件。进入背包悬停并按住“寻思”按键，默认 W，默认时长 750 毫秒。多个页面匹配时，先取当前语言，没有候选才选英文，仍为空才纳入其他语言。同一语言组内，声明的组件约束越具体越优先。对象的每个键加一分，基本值各加一分，数组累加成员分数。只写物品 ID 得零分。同一页多条规则取最高分，平分再按页面资源 ID 的字典序挑第一项。[命令实现](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java) · [缓存选择](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [按键设置](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java)
