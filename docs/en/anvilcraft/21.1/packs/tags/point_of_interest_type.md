# Point of Interest Type Tags

Path: `data/<namespace>/tags/point_of_interest_type/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": [
    {
      "id": "anvilcraft:jeweler_poi",
      "required": false
    }
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/point_of_interest_type/acquirable_job_site.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `minecraft:acquirable_job_site` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/point_of_interest_type/acquirable_job_site.json) |
