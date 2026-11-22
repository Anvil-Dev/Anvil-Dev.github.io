# Dimensions, Damage, and Fuel

Dimension definitions reference dimension types and chunk generators. Lunar pressure and gravity are stored separately under `dimension_physics`, using a 3-element numeric array for coordinate acceleration.

## `dimension`

File path: `data/anvilcraft/dimension/overworld_like.json`.

```json
{
  "type": "minecraft:overworld",
  "generator": {
    "type": "minecraft:noise",
    "biome_source": {
      "type": "anvilcraft:vanilla_overworld"
    },
    "settings": "minecraft:overworld"
  }
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/dimension/overworld_like.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `type` | String | Registered ID selecting the sub-format |
| `generator` | Object | Chunk generator for this dimension |

## `dimension_type`

File path: `data/anvilcraft/dimension_type/mun.json`.

```json
{
  "ambient_light": 0.0,
  "bed_works": false,
  "coordinate_scale": 16.0,
  "effects": "anvilcraft:mun",
  "has_ceiling": false,
  "has_raids": false,
  "has_skylight": true,
  "height": 384,
  "infiniburn": "#minecraft:infiniburn_end",
  "logical_height": 384,
  "min_y": -64,
  "monster_spawn_block_light_limit": 0,
  "monster_spawn_light_level": 0,
  "natural": false,
  "piglin_safe": false,
  "respawn_anchor_works": false,
  "ultrawarm": false
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/dimension_type/mun.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `ambient_light` | Number | Read according to the resource ID definition above |
| `bed_works` | Boolean | Read according to the resource ID definition above |
| `coordinate_scale` | Number | Read according to the resource ID definition above |
| `effects` | String | Read according to the resource ID definition above |
| `has_ceiling` | Boolean | Read according to the resource ID definition above |
| `has_raids` | Boolean | Read according to the resource ID definition above |
| `has_skylight` | Boolean | Read according to the resource ID definition above |
| `height` | Integer | Fountain height condition |
| `infiniburn` | String | Read according to the resource ID definition above |
| `logical_height` | Integer | Read according to the resource ID definition above |
| `min_y` | Integer | Read according to the resource ID definition above |
| `monster_spawn_block_light_limit` | Integer | Read according to the resource ID definition above |
| `monster_spawn_light_level` | Integer | Read according to the resource ID definition above |
| `natural` | Boolean | Read according to the resource ID definition above |
| `piglin_safe` | Boolean | Read according to the resource ID definition above |
| `respawn_anchor_works` | Boolean | Read according to the resource ID definition above |
| `ultrawarm` | Boolean | Read according to the resource ID definition above |

## `dimension_physics`

File path: `data/anvilcraft/dimension_physics/mun.json`.

```json
{
  "dimension": "anvilcraft:mun",
  "base_gravity": [
    0.0,
    -1.83,
    0.0
  ],
  "base_pressure": 0.0,
  "universal_drag": 0.0
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/dimension_physics/mun.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `dimension` | String | Applicable dimension |
| `base_gravity` | Array | Base gravity vector |
| `base_pressure` | Number | Base atmospheric pressure |
| `universal_drag` | Number | Environmental drag |

## `damage_type`

File path: `data/anvilcraft/damage_type/planetary_collapse.json`.

```json
{
  "exhaustion": 0.0,
  "message_id": "anvilcraft.planetary_collapse",
  "scaling": "never"
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/damage_type/planetary_collapse.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `exhaustion` | Number | Hunger exhaustion when dealing damage |
| `message_id` | String | Death message translation key suffix |
| `scaling` | String | Difficulty scaling mode |

## Furnace Fuel Data Map

Add item IDs or tags to the `values` object in `data/neoforge/data_maps/item/furnace_fuels.json`.

```json
{
  "values": {
    "anvilcraft:wood_fiber": {
      "burn_time": 300
    }
  }
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/neoforge/data_maps/item/furnace_fuels.json)
