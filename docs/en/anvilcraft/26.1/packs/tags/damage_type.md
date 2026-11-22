# Damage Type Tags

Path: `data/<namespace>/tags/damage_type/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": [
    "minecraft:wither"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/abnormal.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `anvilcraft:amulet_valid` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid.json) |
| `anvilcraft:amulet_valid/abnormal` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/abnormal.json) |
| `anvilcraft:amulet_valid/anvil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/anvil.json) |
| `anvilcraft:amulet_valid/feather` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/feather.json) |
| `anvilcraft:amulet_valid/ruby` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/ruby.json) |
| `anvilcraft:amulet_valid/sapphire` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/sapphire.json) |
| `anvilcraft:amulet_valid/topaz` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/topaz.json) |
| `anvilcraft:is_falling_giant_anvil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/damage_type/is_falling_giant_anvil.json) |
| `minecraft:burn_from_stepping` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/burn_from_stepping.json) |
| `minecraft:bypasses_armor` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_armor.json) |
| `minecraft:bypasses_cooldown` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_cooldown.json) |
| `minecraft:bypasses_effects` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_effects.json) |
| `minecraft:bypasses_enchantments` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_enchantments.json) |
| `minecraft:bypasses_invulnerability` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_invulnerability.json) |
| `minecraft:bypasses_resistance` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_resistance.json) |
| `minecraft:bypasses_shield` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/bypasses_shield.json) |
| `minecraft:is_fall` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/is_fall.json) |
| `minecraft:is_fire` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/is_fire.json) |
| `minecraft:no_knockback` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/no_knockback.json) |
| `minecraft:panic_environmental_causes` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/damage_type/panic_environmental_causes.json) |
| `neoforge:is_magic` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/neoforge/tags/damage_type/is_magic.json) |
