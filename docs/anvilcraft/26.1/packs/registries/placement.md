# 蓝图放置材料与状态

一次自动放置需要消耗哪些物品，取决于蓝图方块自己的注册名。要改原版方块，在 `data/minecraft/anvilcraft/block_placement_rules/<方块名>.json` 创建同名条目。模组方块使用其自身的命名空间。规则在世界动态注册表建立时读取并同步给客户端。

## 状态与材料的对应

```json
{
  "rules": [
    {
      "item": "minecraft:sea_pickle",
      "properties": "pickles=1"
    },
    {
      "item": {
        "count": 2,
        "id": "minecraft:sea_pickle"
      },
      "properties": "pickles=2"
    },
    {
      "item": {
        "count": 3,
        "id": "minecraft:sea_pickle"
      },
      "properties": "pickles=3"
    },
    {
      "item": {
        "count": 4,
        "id": "minecraft:sea_pickle"
      },
      "properties": "pickles=4"
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/anvilcraft/block_placement_rules/sea_pickle.json)

根对象的 `rules` 数组从上到下保留所有匹配项。每条规则中，`properties` 可以为字符串或字符串数组。数组成员之间取或，同一字符串内以逗号分隔的条件取且。空字符串匹配任意状态。`a=b` 检查属性值，`!a=b` 取反，`a`、`!a` 检查属性存在性。

`item` 可以写成物品 ID，或含 `id`、`count`、`components` 的物品栈。`{}` 表示空栈，可用来禁止放置。返还空桶等副产品时填写 `return_item`。

## 状态改写

`state` 是表达式到指令的对象。指令中的 `属性` 会从蓝图复制同名值，`!属性` 恢复目标默认值，`属性=值` 设置常量；`minecraft:stone[属性->]` 可切换方块并复制指定属性。未知属性会被跳过。

### BlockPlacementRuleSet

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `rules` | `StateRule.CODEC`数组 | 可省略，默认 `[]` | 状态到材料的映射规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L48) |
| `state` | 字符串到字符串的对象 | 可省略，默认 `{}` | 匹配条件到状态改写指令的映射 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L50) |

### StateRule

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `properties` | `PROPERTIES_CODEC` | 必填 | 匹配的属性表达式 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L231) |
| `item` | `ITEM_CODEC` | 必填 | 物品或物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L232) |
| `return_item` | `ITEM_CODEC` | 可省略，默认 `Optional.empty()` | 放置完成后返还的物品 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L233) |
