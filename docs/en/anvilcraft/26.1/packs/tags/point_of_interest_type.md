# Point of Interest Type Tags

Path: `data/<namespace>/tags/point_of_interest_type/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": [
    "anvilcraft:jeweler_poi"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/point_of_interest_type/acquirable_job_site.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `minecraft:acquirable_job_site` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/point_of_interest_type/acquirable_job_site.json) |
