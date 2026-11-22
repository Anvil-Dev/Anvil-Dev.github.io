# Jeweler Trades and Level Sets

Create a trade in `data/<namespace>/villager_trade/<trade>.json` and add it to the selection pool in `data/<namespace>/trade_set/<level>.json`. To override the jeweler's existing levels, keep their IDs from `anvilcraft:jeweler/level_1` through `level_5`. For a new trade, add a reference to a trade set used by the profession.

## A Single Trade

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/villager_trade/jeweler/emerald_for_tinted_glass.json)

| Field | Type | Usage and defaults |
| --- | --- | --- |
| `wants` | Trade cost object | Required. The first payment item. Its `id` is required and its `count` is a number provider that defaults to 1. Optionally constrain the item's components with `components`. |
| `additional_wants` | Trade cost object | Optional second payment item. |
| `gives` | Item stack template | Required. The item the villager sells. |
| `max_uses` | Number provider | Optional, defaults to 4. Sets the number of uses before restocking. |
| `reputation_discount` | Number provider | Optional, defaults to 0. Scales the effect of reputation on price. |
| `xp` | Number provider | Optional, defaults to 1. Experience awarded to the villager. |
| `merchant_predicate` | Loot condition | Optional. Filters the villagers who can offer this trade. |
| `given_item_modifiers` | Array of loot functions | Optional, defaults to empty. Applied when generating the item for sale. |
| `double_trade_price_enchantments` | Enchantment set | Optional. Defines the enchantments that double the trade price. |

## Add a Trade to a Level

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/trade_set/jeweler/level_5.json)

The required `trades` field references the trades available for selection. The required `amount` number provider determines how many to draw. `random_sequence` is an optional random sequence ID.

[ModVillagerTrades.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/entity/ModVillagerTrades.java) · [ModTradeSets.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/entity/ModTradeSets.java)
