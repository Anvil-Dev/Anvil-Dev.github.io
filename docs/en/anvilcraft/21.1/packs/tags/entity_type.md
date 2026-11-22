# Entity Type Tags

Path: `data/<namespace>/tags/entity_type/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": [
    "minecraft:warden"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/silence.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `anvilcraft:amulet_valid` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid.json) |
| `anvilcraft:amulet_valid/anvil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/anvil.json) |
| `anvilcraft:amulet_valid/armadillo` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/armadillo.json) |
| `anvilcraft:amulet_valid/cat` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/cat.json) |
| `anvilcraft:amulet_valid/dog` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/dog.json) |
| `anvilcraft:amulet_valid/emerald` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/emerald.json) |
| `anvilcraft:amulet_valid/sapphire` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/sapphire.json) |
| `anvilcraft:amulet_valid/silence` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/silence.json) |
| `anvilcraft:falling_giant_anvil_damage_immune` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/entity_type/falling_giant_anvil_damage_immune.json) |
| `minecraft:arrows` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/entity_type/arrows.json) |
