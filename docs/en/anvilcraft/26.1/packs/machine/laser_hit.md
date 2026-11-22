# Laser Irradiation

Filters hit blocks by laser strength and continuous irradiation duration. Enable `use_block_loot` to simulate block loot.

Create `data/example/recipe/laser_hit/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:laser_hit/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:laser_hit",
  "hit_time": 40,
  "input": {
    "blocks": "#c:ores"
  },
  "laser_strength": 12,
  "priority": -100,
  "result_block": {
    "Name": "minecraft:stone"
  },
  "use_block_loot": true
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/laser_hit/ores_12.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:laser_hit`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L41) |
| `dimension` | Resource ID | Optional | Dimension resource ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L42) |
| `laser_strength` | Integer `1 to Integer.MAX_VALUE` | Required | Matched laser strength [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L43) |
| `hit_time` | Integer `1 to Integer.MAX_VALUE` | Required | Ticks of continuous irradiation required [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L44) |
| `result_items` | Array of item stack templates | Optional, default `[]` | Extra dropped item stacks [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L45) |
| `result_block` | Block state object | Optional, default `air` | Resulting block state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L46) |
| `use_block_loot` | Boolean | Optional, default `false` | Whether to evaluate the block's own loot table [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L47) |
| `requires_lens` | Boolean | Optional, default `false` | Whether a lens is required [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L48) |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L49) |
| `laser_type` | `LaserType.CODEC` | Optional, default `LaserType.NORMAL` | Laser type participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L50) |
| `heat_duration` | Integer `0 to 24000` | Optional, default `0` | Ticks of heat retained [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java#L51) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/LaserHitRecipe.java)
