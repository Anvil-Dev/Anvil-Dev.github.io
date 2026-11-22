# Fluid Tags

Path: `data/<namespace>/tags/fluid/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": []
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/cannot_be_infinite.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `anvilcraft:cannot_be_infinite` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/cannot_be_infinite.json) |
| `anvilcraft:ignitable` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/ignitable.json) |
| `anvilcraft:menger_sponge_can_absorb` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/menger_sponge_can_absorb.json) |
| `c:cement` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/c/tags/fluid/cement.json) |
| `c:experience` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/c/tags/fluid/experience.json) |
| `c:oil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/c/tags/fluid/oil.json) |
