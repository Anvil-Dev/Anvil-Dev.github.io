# 按物品组件进入对应文章

同一个物品可能有好几种用法。想让受损铁镐专门跳转到维修页，可以在绑定里加上 `minecraft:damage`。下面这个例子只匹配损耗值为 12 的铁镐，物品栏里这把镐上的附魔、自定义名称等其他组件不受影响。

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

解析器按 `guide.items`、`guide.item`、`guide.item_id`、`items`、`item`、`item_id` 的顺序读取第一组有效配置，字段之间不会合并。匹配组件对象时，物品只需包含要求的键即可；匹配数组时，要求的元素必须按原顺序出现，中间可以夹着其他元素；数值按数值大小比较。空物品栈、ID 不符或无法解码的条件都不会匹配。[绑定解析与匹配](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java) · [字段优先级](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java)

拿着目标物品执行 `/ageratum item`，可以查看它的物品 ID 以及相对默认状态发生变化的组件。在背包里把鼠标悬停在物品上，按住“寻思”键（默认 W，默认按住 750 毫秒）就能跳转。如果多个页面同时匹配，会先选当前语言，没有候选再选英文，最后才纳入其他语言。同一语言组内，声明的组件约束越具体越优先：对象每个键加一分，基本值各加一分，数组累加成员分数，只写物品 ID 得零分。同一页有多条规则时取最高分，同分再按页面资源 ID 的字典序挑第一项。[命令实现](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java) · [缓存选择](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [按键设置](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java)
