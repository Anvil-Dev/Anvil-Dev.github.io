# Enchantment Tags

Path: `data/<namespace>/tags/enchantment/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": [
    "minecraft:mending"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/enchantment/disabled_passed.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `anvilcraft:disabled_passed` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/enchantment/disabled_passed.json) |
| `anvilcraft:providence_bonus` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/enchantment/providence_bonus.json) |
| `c:increase_block_drops` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/enchantment/increase_block_drops.json) |
| `minecraft:in_enchanting_table` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/enchantment/in_enchanting_table.json) |
