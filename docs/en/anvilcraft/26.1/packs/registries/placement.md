# Blueprint Placement Materials & States

Which items an automatic placement consumes depends on the blueprint block's own registry name. To override a vanilla block, create an entry with the same name at `data/minecraft/anvilcraft/block_placement_rules/<block_name>.json`. Modded blocks use their own namespace. Rules are read and synced to clients when the world's dynamic registries are built.

## Mapping States to Materials

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/anvilcraft/block_placement_rules/sea_pickle.json)

The root `rules` array keeps all matching entries from top to bottom. In each rule, `properties` can be a string or a string array. Array entries are OR'd, while comma-separated conditions within a single string are AND'd. An empty string matches any state. `a=b` checks a property value, `!a=b` negates it, and `a` / `!a` checks property presence.

`item` can be written as an item ID or an item stack containing `id`, `count`, and `components`. `{}` represents an empty stack and can be used to forbid placement. Set `return_item` when returning byproducts such as empty buckets.

## State Rewriting

`state` is an object mapping expressions to directives. In a directive, `<prop>` copies the same-named value from the blueprint, `!<prop>` restores the target's default value, and `<prop>=<value>` sets a constant; `minecraft:stone[<prop>->]` switches the block and copies the specified property. Unknown properties are skipped.

### BlockPlacementRuleSet

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `rules` | `StateRule.CODEC` array | Optional, default `[]` | Rules mapping states to materials [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L48) |
| `state` | String-to-string object | Optional, default `{}` | Map from match conditions to state-rewriting directives [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L50) |

### StateRule

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `properties` | `PROPERTIES_CODEC` | Required | Property expression to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L231) |
| `item` | `ITEM_CODEC` | Required | Item or item stack [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L232) |
| `return_item` | `ITEM_CODEC` | Optional, default `Optional.empty()` | Item returned after placement completes [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L233) |
