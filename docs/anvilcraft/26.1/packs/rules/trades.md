# 珠宝匠交易与等级列表

在 `data/<命名空间>/villager_trade/<交易名>.json` 建立商品，再用 `data/<命名空间>/trade_set/<等级名>.json` 将它加入选取池。覆盖珠宝匠已有等级时保留 `anvilcraft:jeweler/level_1` 至 `level_5` 的 ID。单独新增交易也需要让职业使用的交易集引用它。

## 一笔交易

```json
{
  "gives": {
    "id": "minecraft:tinted_glass"
  },
  "max_uses": 12.0,
  "reputation_discount": 0.05,
  "wants": {
    "id": "minecraft:emerald"
  },
  "xp": 4.0
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/villager_trade/jeweler/emerald_for_tinted_glass.json)

| 字段 | 类型 | 用法与缺省值 |
| --- | --- | --- |
| `wants` | 交易成本对象 | 必填，第一种付款物品。对象的 `id` 必填，`count` 是数值提供器，默认 1。`components` 可选，限制物品组件。 |
| `additional_wants` | 交易成本对象 | 可选，第二种付款物品。 |
| `gives` | 物品栈模板 | 必填，发放的商品。 |
| `max_uses` | 数值提供器 | 可选，默认 4，决定补货前可成交的次数。 |
| `reputation_discount` | 数值提供器 | 可选，默认 0，声望影响价格的系数。 |
| `xp` | 数值提供器 | 可选，默认 1，给予商人的经验。 |
| `merchant_predicate` | 战利品条件 | 可选，筛选可使用这笔交易的商人。 |
| `given_item_modifiers` | 战利品函数数组 | 可选，默认空。生成商品时应用。 |
| `double_trade_price_enchantments` | 附魔集合 | 可选，指定令交易价格翻倍的附魔。 |

## 将交易加入某个等级

```json
{
  "amount": 2.0,
  "random_sequence": "anvilcraft:trade_set/jeweler/level_5",
  "trades": [
    "anvilcraft:jeweler/emerald_for_geode",
    "anvilcraft:jeweler/emerald_for_amulet_box"
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/trade_set/jeweler/level_5.json)

`trades` 必填，引用参与选择的交易集合。`amount` 必填，用数值提供器控制抽取数量。`random_sequence` 是可选的随机序列 ID。

[ModVillagerTrades.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/entity/ModVillagerTrades.java) · [ModTradeSets.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/entity/ModTradeSets.java)
